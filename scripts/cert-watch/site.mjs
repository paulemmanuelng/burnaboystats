// The site's own plaque data as the watcher sees it — PURE.
// Spec: docs/cert-watcher/SPEC.md §4.1.
//
// buildSiteIndex takes the two data modules as values (never imports them),
// so vitest can hand it the modules it loaded itself and the runner can hand
// it the ones Node's type stripping loaded. The index is plain JSON: it can be
// dumped with --dump-site-index and read back with --site-json, which is how
// the pipeline tests run on Node 20.

import { normTitle, normalise, nameRe, VERSION_WORD_RE } from "./match.mjs";

export class SiteIndexError extends Error {}

/** The `source` of a lead alias read off the chart sweeps (live-artists.mjs). */
export const CHART_SOURCE = "live-artists.mjs";

/** Words that open a credit suffix on a SITE title: "(ft. Tiakola)",
 *  "(with Giveon)", "(w/ Chris Brown)". */
const CREDIT_OPEN_RE = /^(?:feat\.?|ft\.?|featuring|with|w\/|con|avec|mit)(?:\s|$)/i;

/**
 * A site title without its trailing CO-CREDIT suffix, for title matching
 * only — the displayed title is never changed. Dozens of site titles carry
 * one: "Dynamite — Tyla & Wizkid", "Time N Affection (w/ Chris Brown)", "Mood
 * (Wizkid ft. BNXN)", "Holy Water (Davido)". A register prints the plain
 * title ("Time N Affection" by "Rema & Chris Brown", TCSN), so without this
 * a plaque the site already holds reads as a NEW RELEASE, and a real new one
 * as a NEW RELEASE instead of a NEW PLAQUE.
 *
 * A suffix is a co-credit when it opens with a feature word, or when it
 * names one of the sixteen (word-anchored, their own credit matchers), and
 * it carries no version word — "(Remix)" stays significant, so "Drift
 * (Remix) (Teejay & Davido)" becomes "Drift (Remix)", never "Drift". A
 * subtitle that names no one ("Fame – A COLORS ENCORE", "Frames (Who's Gonna
 * Know)", "On God (Kashy)") is left alone. Returns null when there is no
 * co-credit suffix.
 */
export function coCreditBase(title, liveArtists) {
  let t = String(title ?? "").trim();
  let changed = false;
  for (let i = 0; i < 2; i++) {
    const m = t.match(/^(.*\S)\s*[(\[]([^()[\]]+)[)\]]\s*$/) ?? t.match(/^(.*\S)\s+[-\u2010-\u2015\u2212]\s+(.+)$/);
    if (!m) break;
    const suffix = m[2].trim();
    if (VERSION_WORD_RE.test(suffix)) break;
    const credits = CREDIT_OPEN_RE.test(suffix) || Object.values(liveArtists).some((a) => a.credit.test(suffix));
    if (!credits) break;
    t = m[1].trim();
    changed = true;
  }
  return changed ? t : null;
}

/** The version words a title carries ("remix", "live"…), as a sorted key. */
const versionsOf = (title) =>
  [...String(title ?? "").matchAll(new RegExp(VERSION_WORD_RE.source, "gi"))].map((m) => m[1].toLowerCase().replace(/[\s-]+/g, " ")).sort().join("|");

/**
 * Why a CHART alias (LIVE_ARTISTS.aliases — read off kworb chart sweeps) must
 * not match certification rows, or null when it may. SPEC §4.1. A chart
 * alias says "this chart prints the lead's name on a record the artist is
 * on"; a register row is only the artist's plaque when the certified
 * recording is the one they are on. So a chart alias is used for
 * certifications only when
 *   1. the site holds a plaque on its release for that artist — the record
 *      is established as theirs in the site's own certification data (the
 *      Sarz "Happiness" alias names no Wizkid release: the TCSN row "Sarz,
 *      Asake & Gunna | Happiness (Sarz)" is Asake's record, not his);
 *   2. its title keeps the release's version words — "Second Sermon" is not
 *      "Second Sermon (Remix)" (§4.3);
 *   3. config.chartOnlyAliases does not rule it out — a ruling, with its why,
 *      for a title the registers certify as a DIFFERENT recording under the
 *      lead (Soweto: the original by Victony & Tempoe, which Rema is not on).
 * `find(slug, title)` locates a release by own or co-credit-free title.
 */
export function chartAliasBar(al, find, config) {
  const ruled = (config?.chartOnlyAliases ?? []).find(
    (c) => c.artist === al.artist && normalise(c.lead) === normalise(al.lead) && normTitle(c.title) === normTitle(al.title)
  );
  if (ruled) return `chart only (config.chartOnlyAliases): ${ruled.why}`;
  const rel = find(al.artist, al.release ?? al.title);
  if (!rel || !Object.keys(rel.holdings ?? {}).length) return `no plaque on the site for "${al.release ?? al.title}" — a chart alias with no certification behind it`;
  if (versionsOf(al.title) !== versionsOf(rel.title)) return `the chart title "${al.title}" and the release "${rel.title}" are different versions`;
  return null;
}

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
  // Chart aliases are recorded as facts only: whether one may match a
  // certification row (and teach `locate` its title) is decided when the
  // index is hydrated (chartAliasBar), so a dumped index gets the same rules.
  for (const [slug, a] of Object.entries(liveArtists)) {
    for (const al of a.aliases ?? []) {
      leadAliases.push({ artist: slug, lead: al.artist, title: al.title, release: al.release, source: CHART_SOURCE });
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
  // A title alias scoped to one register (`register`) is applied by the
  // matcher to that register's rows only (match.mjs), never site-wide.
  for (const t of config.titleAliases ?? []) if (!t.register) addAlternate(t.artist, t.release, t.printed);

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

/** Add the lookup maps the matcher needs to a JSON site index, and decide
 *  which lead aliases may match CERTIFICATION rows (SPEC §4.1):
 *
 *    leadAliases   every alias, as dumped — chart aliases included. Only the
 *                  search side uses them (lead acts to query: searching wide
 *                  costs nothing, since a row still has to match).
 *    certAliases   the aliases valid for certifications: the lead of each
 *                  Burna Boy feature credit (the site's own plaque data),
 *                  config.leadAliases (rulings), and the chart aliases that
 *                  pass chartAliasBar. This is the list the matcher uses.
 *    chartOnlyAliases  the chart aliases left out, each with its reason.
 *
 *  Each release also gets its co-credit-free title as an alternate
 *  (coCreditBase). With `config`, its titleAliases and chartOnlyAliases are
 *  applied here too — so a ruling added to config.json reaches an index
 *  dumped before it (--site-json) without a re-dump. Idempotent with what
 *  buildSiteIndex already applied, and an index dumped before chart aliases
 *  were gated loses the alternates only a barred alias gave it. */
export function hydrateSiteIndex(json, liveArtists, config = null) {
  const artists = {};
  for (const slug of Object.keys(liveArtists)) {
    artists[slug] = { slug, name: liveArtists[slug].name, releases: [], byTitle: new Map(), byAlt: new Map() };
  }
  const put = (map, t, r) => {
    if (!map.has(t)) map.set(t, []);
    if (!map.get(t).includes(r)) map.get(t).push(r);
  };
  const aliasFor = new Map();
  for (const t of config?.titleAliases ?? []) {
    if (t.register) continue;
    const k = `${t.artist}|${normTitle(t.release)}`;
    if (!aliasFor.has(k)) aliasFor.set(k, []);
    aliasFor.get(k).push(normTitle(t.printed));
  }

  // 1. Releases under their own titles, and their co-credit-free titles.
  const bare = new Map(); // slug → Map(normTitle of the bare title → releases)
  for (const r0 of json.releases) {
    const a = artists[r0.artist];
    if (!a) continue;
    // Keys are recomputed from the verbatim titles, so a change to the
    // normalisation (dashes folded, 24 Sep 2026) reaches an index dumped
    // before it; normalise is idempotent on the keys already there.
    const nt = normTitle(r0.title);
    const alts = [...new Set((r0.altTitles ?? []).map(normalise))].filter((t) => t !== nt);
    const extraAlt = (aliasFor.get(`${r0.artist}|${nt}`) ?? []).filter((t) => t !== nt && !alts.includes(t));
    const b = coCreditBase(r0.title, liveArtists);
    const bareTitle = b && normTitle(b) !== nt ? normTitle(b) : null;
    const r = { ...r0, normTitle: nt, altTitles: [...alts, ...extraAlt], ...(bareTitle ? { bareTitle } : {}) };
    a.releases.push(r);
    put(a.byTitle, r.normTitle, r);
    if (bareTitle) {
      if (!bare.has(r.artist)) bare.set(r.artist, new Map());
      put(bare.get(r.artist), bareTitle, r);
    }
  }
  const findForAlias = (slug, title) => {
    const nt = normTitle(title);
    return (artists[slug]?.byTitle.get(nt) ?? bare.get(slug)?.get(nt) ?? [])[0] ?? null;
  };

  // 2. Which lead aliases may match certification rows.
  const certAliases = [];
  const chartOnlyAliases = [];
  for (const al of json.leadAliases ?? []) {
    if (al.source !== CHART_SOURCE) {
      certAliases.push(al);
      continue;
    }
    const why = chartAliasBar(al, findForAlias, config);
    if (why) chartOnlyAliases.push({ ...al, why });
    else certAliases.push(al);
  }

  // 3. Alternates. An index dumped before chart aliases were gated carries
  //    the alternate a barred alias taught it ("second sermon" on Black
  //    Sherif's "Second Sermon (Remix)"): that one is dropped, unless a valid
  //    alias teaches the same. Valid aliases' titles are added.
  const key = (slug, releaseNt, altNt) => `${slug}|${releaseNt}|${altNt}`;
  const taught = (list) => {
    const out = new Set();
    for (const al of list) {
      const rel = findForAlias(al.artist, al.release ?? al.title);
      const alt = normTitle(al.title);
      if (rel && alt !== rel.normTitle) out.add(key(al.artist, rel.normTitle, alt));
    }
    return out;
  };
  const valid = taught(certAliases);
  const barred = taught(chartOnlyAliases);
  for (const a of Object.values(artists)) {
    for (const r of a.releases) {
      r.altTitles = r.altTitles.filter((t) => !barred.has(key(a.slug, r.normTitle, t)) || valid.has(key(a.slug, r.normTitle, t)));
      for (const k of valid) {
        const [slug, releaseNt, alt] = k.split("|");
        if (slug === a.slug && releaseNt === r.normTitle && alt !== r.normTitle && !r.altTitles.includes(alt)) r.altTitles.push(alt);
      }
      // A release's own title always wins over another release's alternate.
      for (const t of r.altTitles) put(a.byAlt, t, r);
      if (r.bareTitle) put(a.byAlt, r.bareTitle, r);
    }
  }
  return { ...json, artists, certAliases, chartOnlyAliases };
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
