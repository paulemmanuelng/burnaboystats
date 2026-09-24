// The site's own plaque data as the watcher sees it — PURE.
// Spec: docs/cert-watcher/SPEC.md §4.1.
//
// buildSiteIndex takes the two data modules as values (never imports them),
// so vitest can hand it the modules it loaded itself and the runner can hand
// it the ones Node's type stripping loaded. The index is plain JSON: it can be
// dumped with --dump-site-index and read back with --site-json, which is how
// the pipeline tests run on Node 20.

import { normTitle, normalise, nameRe } from "./match.mjs";

export class SiteIndexError extends Error {}

/** "Dave ft. Burna Boy" → "Dave"; "Master KG, Nomcebo & Burna Boy" →
 *  "Master KG"; "feat. Popcaan" (his own record) → null. */
export function leadOfCredit(credit, selfRe) {
  if (!credit) return null;
  const c = String(credit).trim();
  if (/^(?:feat\.?|ft\.?|featuring|with)\s/i.test(c)) return null;
  const pre = c.split(/\s+(?:feat\.?|ft\.?|featuring)\s+/i)[0];
  const first = pre.split(/\s*(?:,|&|\sx\s|\sand\s)\s*/i)[0].trim();
  if (!first || (selfRe && selfRe.test(first))) return null;
  return first;
}

/**
 * Build the index.
 *   certModule:  app/data/certifications.ts (albums, singles, features, totalAwards)
 *   afroModule:  app/data/afrobeats.ts (afrobeatsArtists, afrobeatsSlugs, certCount)
 *   liveArtists: scripts/live-artists.mjs LIVE_ARTISTS
 *   config:      scripts/cert-watch/config.json
 */
export function buildSiteIndex(certModule, afroModule, liveArtists, config) {
  const releases = [];
  let plaques = 0;
  const holdingsOf = (certs, where) => {
    const h = {};
    for (const c of certs) {
      const key = `${c.c}|${c.body ?? ""}`;
      if (h[key]) throw new SiteIndexError(`${where}: two plaques at ${key}`);
      h[key] = { tier: c.level, x: c.x ?? 1, ...(c.body ? { body: c.body } : {}) };
      plaques++;
    }
    return h;
  };

  const burna = liveArtists["burna-boy"];
  const burnaSets = [
    ["album", certModule.albums, "albums"],
    ["single", certModule.singles, "singles"],
    ["single", certModule.features, "features"],
  ];
  for (const [format, list, group] of burnaSets) {
    for (const r of list) {
      releases.push({
        id: `burna-boy::${group}::${r.title}`,
        artist: "burna-boy",
        title: r.title,
        credit: r.credit ?? null,
        group,
        format,
        normTitle: normTitle(r.title),
        altTitles: [],
        holdings: holdingsOf(r.certs, `burna-boy "${r.title}"`),
      });
    }
  }
  for (const a of afroModule.afrobeatsArtists) {
    for (const r of a.releases) {
      releases.push({
        id: `${a.slug}::${r.kind}::${r.title}`,
        artist: a.slug,
        title: r.title,
        credit: null,
        group: r.kind,
        format: r.kind === "Albums" ? "album" : "single",
        normTitle: normTitle(r.title),
        altTitles: [],
        holdings: holdingsOf(r.certs, `${a.slug} "${r.title}"`),
      });
    }
  }

  // Integrity 1: every plaque indexed exactly once. Derived, never typed.
  const expected =
    certModule.totalAwards() + afroModule.afrobeatsArtists.reduce((n, a) => n + afroModule.certCount(a), 0);
  if (plaques !== expected) {
    throw new SiteIndexError(`indexed ${plaques} plaques but the data holds ${expected}`);
  }

  // Integrity 2: the watcher's artists are exactly the site's sixteen.
  const siteSlugs = new Set(["burna-boy", ...afroModule.afrobeatsSlugs]);
  const liveSlugs = new Set(Object.keys(liveArtists));
  const missing = [...siteSlugs].filter((s) => !liveSlugs.has(s));
  const extra = [...liveSlugs].filter((s) => !siteSlugs.has(s));
  if (missing.length || extra.length) {
    throw new SiteIndexError(
      `LIVE_ARTISTS and the site disagree — missing: ${missing.join(", ") || "none"}; extra: ${extra.join(", ") || "none"}`
    );
  }

  const byArtist = (slug) => releases.filter((r) => r.artist === slug);
  const findRelease = (slug, title) => byArtist(slug).find((r) => normTitle(r.title) === normTitle(title));

  // Lead aliases (§4.1): LIVE_ARTISTS aliases, the lead of each Burna feature
  // credit, and config.leadAliases. Each also teaches `locate` an alternative
  // title for its release (the alias's own title).
  const leadAliases = [];
  const addAlternate = (slug, releaseTitle, altTitle) => {
    const rel = findRelease(slug, releaseTitle);
    const nt = normTitle(altTitle);
    if (rel && nt !== rel.normTitle && !rel.altTitles.includes(nt)) rel.altTitles.push(nt);
  };
  for (const [slug, a] of Object.entries(liveArtists)) {
    for (const al of a.aliases ?? []) {
      leadAliases.push({ artist: slug, lead: al.artist, title: al.title, release: al.release, source: "live-artists.mjs" });
      addAlternate(slug, al.release, al.title);
    }
  }
  for (const r of certModule.features) {
    const lead = leadOfCredit(r.credit, burna?.credit);
    if (lead) leadAliases.push({ artist: "burna-boy", lead, title: r.title, release: r.title, source: "certifications.ts features" });
  }
  for (const al of config.leadAliases ?? []) {
    leadAliases.push({ artist: al.artist, lead: al.lead, title: al.title, release: al.release ?? al.title, source: "config.leadAliases", why: al.why });
    addAlternate(al.artist, al.release ?? al.title, al.title);
  }
  for (const t of config.titleAliases ?? []) addAlternate(t.artist, t.release, t.printed);

  // Integrity 3: no two releases of one artist share a normalised title AND
  // format, unless config.titleAliases explains it.
  const explained = new Set((config.titleAliases ?? []).filter((t) => t.duplicateOk).map((t) => `${t.artist}|${normTitle(t.release)}`));
  const seen = new Map();
  for (const r of releases) {
    const k = `${r.artist}|${r.normTitle}|${r.format}`;
    if (seen.has(k) && !explained.has(`${r.artist}|${r.normTitle}`)) {
      throw new SiteIndexError(`${r.artist} has two ${r.format}s titled "${seen.get(k).title}" / "${r.title}"`);
    }
    seen.set(k, r);
  }

  return {
    v: 1,
    releases,
    leadAliases,
    totals: {
      plaques,
      burnaPlaques: certModule.totalAwards(),
      boardPlaques: plaques - certModule.totalAwards(),
      releases: releases.length,
      burnaReleases: {
        albums: certModule.albums.length,
        singles: certModule.singles.length,
        features: certModule.features.length,
      },
      boardArtists: afroModule.afrobeatsArtists.length,
      boardReleases: afroModule.afrobeatsArtists.reduce((n, a) => n + a.releases.length, 0),
    },
  };
}

/** Add the lookup maps the matcher needs to a JSON site index. With
 *  `config`, its titleAliases are applied here too — so an alias added to
 *  config.json reaches an index dumped before it (--site-json) without a
 *  re-dump. Idempotent with the ones buildSiteIndex already applied. */
export function hydrateSiteIndex(json, liveArtists, config = null) {
  const artists = {};
  for (const slug of Object.keys(liveArtists)) {
    artists[slug] = { slug, name: liveArtists[slug].name, releases: [], byTitle: new Map(), byAlt: new Map() };
  }
  const put = (map, t, r) => {
    if (!map.has(t)) map.set(t, []);
    map.get(t).push(r);
  };
  const aliasFor = new Map();
  for (const t of config?.titleAliases ?? []) {
    const k = `${t.artist}|${normTitle(t.release)}`;
    if (!aliasFor.has(k)) aliasFor.set(k, []);
    aliasFor.get(k).push(normTitle(t.printed));
  }
  for (const r0 of json.releases) {
    const a = artists[r0.artist];
    if (!a) continue;
    const extraAlt = (aliasFor.get(`${r0.artist}|${r0.normTitle}`) ?? []).filter((t) => t !== r0.normTitle && !(r0.altTitles ?? []).includes(t));
    const r = extraAlt.length ? { ...r0, altTitles: [...(r0.altTitles ?? []), ...extraAlt] } : r0;
    a.releases.push(r);
    // A release's own title always wins over another release's alternate.
    put(a.byTitle, r.normTitle, r);
    for (const t of r.altTitles ?? []) put(a.byAlt, t, r);
  }
  return { ...json, artists };
}

/** The site's holding for (artist, release title, country, programme). */
export function holdingFor(index, artist, title, country, programme) {
  const a = index.artists[artist];
  if (!a) return { release: null, holding: null };
  const nt = normTitle(title);
  const release = (a.byTitle.get(nt) ?? a.byAlt.get(nt) ?? [])[0] ?? null;
  return { release, holding: release ? release.holdings[`${country}|${programme ?? ""}`] ?? null : null };
}

/** "Platinum ×2 (RIAA Latin)", "Gold", or null. */
export function holdingLabel(h) {
  if (!h) return null;
  return `${h.tier}${(h.x ?? 1) > 1 ? ` ×${h.x}` : ""}${h.body ? ` (${h.body})` : ""}`;
}

export { normalise, nameRe };
