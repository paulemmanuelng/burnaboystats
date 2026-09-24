// Matching and diff rules for the cert watcher — PURE, no I/O.
// Spec: docs/cert-watcher/SPEC.md §4.
//
// Every rule here exists because a sweep got it wrong once. The trap register
// (§4.6) names each one and the real string its test uses. The two that matter
// most:
//
//   * A row is identified by (artist, title) TOGETHER, never title alone. On
//     27 Aug 2026 a title-only match reported five phantom tier upgrades, every
//     one of them another artist's song.
//   * A register row the site is AHEAD of is never reported. Absence, a lower
//     tier or a missing row in a register is not evidence of anything: SNEP
//     overwrites rows, NVPI lags, TCSN caps at 500, CZ/SK/GR badges show only
//     while a title charts, Colombia's register is frozen, and three plaques
//     are kept on Paul's ruling.
//
// Verbatim strings are always kept beside the normalised ones, and the report
// prints the verbatim ones.

import { createHash } from "node:crypto";

// ── Tribute and karaoke acts ────────────────────────────────────────────────
/** 8-Bit Arcade, Party Tyme, "made popular by"… carry the real artists' names
 *  in the TITLE and sail through a substring check. Proved on the real Deezer
 *  string "Be Honest (8-Bit Jorja Smith & Burna Boy Emulation)". */
export const TRIBUTE_RE =
  /\b(8[- ]?bit|karaoke|tribute|made popular by|in the style of|backing track|emulation|lullaby renditions?)\b/i;

// ── Normalisation (comparison only) ─────────────────────────────────────────
/** NFKD, strip diacritics, lowercase, fold quotes, `&` → "and", collapse
 *  whitespace, trim edge punctuation. For comparison only; never printed. */
export function normalise(s) {
  return String(s ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’‘´`]/g, "'")
    .replace(/&/g, " and ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^[\s.,;:!?'"\u2010-\u2015-]+|[\s.,;:!?'"\u2010-\u2015-]+$/g, "");
}

/** Words that open a FEATURE qualifier — "(feat. X)", "[ft. X]", " - with X". */
const FEAT_WORD = String.raw`(?:feat\.?|ft\.?|featuring|with|con|avec|mit)`;
const FEAT_BRACKET_RE = new RegExp(String.raw`\s*[(\[]\s*${FEAT_WORD}\s+([^)\]]*)[)\]]`, "gi");
const FEAT_DASH_RE = new RegExp(String.raw`\s+[-–—]\s+${FEAT_WORD}\s+(.+)$`, "i");

/** Version qualifiers are SIGNIFICANT: "Sungba" is not "Sungba (Remix)". */
export const VERSION_WORD_RE =
  /\b(remix|rmx|live|acoustic|sped[\s-]*up|slowed|edit|version|mix|instrumental|a[\s-]?cappella|remaster(?:ed)?)\b/i;

/**
 * Split a register title into the title proper and any feature qualifiers,
 * whose names are LIFTED into the credit field. RIAA prints the lead only in
 * its artist cell — "DRAKE | ONE DANCE (FEAT. WIZKID & KYLA)" — so without
 * this the featured artist is invisible.
 */
export function liftFeatures(title) {
  const lifted = [];
  let base = String(title ?? "");
  base = base.replace(FEAT_BRACKET_RE, (_, names) => {
    lifted.push(names.trim());
    return "";
  });
  const dash = base.match(FEAT_DASH_RE);
  if (dash) {
    lifted.push(dash[1].trim());
    base = base.slice(0, dash.index);
  }
  return { base: base.trim(), lifted };
}

/** The comparison key of a title: feature qualifiers dropped, a " - Remix"
 *  suffix read as "(Remix)", brackets folded to parentheses, normalised. */
export function normTitle(title) {
  let { base } = liftFeatures(title);
  const dash = base.match(/^(.*?)\s+[-–—]\s+(.+)$/);
  if (dash && VERSION_WORD_RE.test(dash[2])) base = `${dash[1]} (${dash[2]})`;
  base = base.replace(/\[/g, "(").replace(/\]/g, ")");
  return normalise(base);
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/** Word-anchored, case-insensitive, whitespace-flexible matcher for a name. */
export const nameRe = (name) =>
  new RegExp(`(?:^|[^\\p{L}\\p{N}])${escapeRe(String(name).trim()).replace(/\s+/g, "\\s+")}(?![\\p{L}\\p{N}])`, "iu");

/** Remove every occurrence of `names` from a credit string. */
function stripNames(credit, names) {
  let out = credit;
  for (const n of names ?? []) out = out.replace(new RegExp(nameRe(n).source, "giu"), " ");
  return out;
}

// ── Identify ────────────────────────────────────────────────────────────────
/**
 * Which of the sixteen does a register row belong to? §4.2, in order, keeping
 * every reason — the reasons become the ⚠ flags in the issue.
 *
 * ctx: { adapterId, liveArtists, config, leadAliases, ownerTags }
 * Returns { reject, held, matches: [{artist, via, flags, release?}], creditField,
 *           title, ownerTag }.
 */
export function identifyRow(row, ctx) {
  const { adapterId, liveArtists, config, leadAliases = [], ownerTags = false } = ctx;
  const credit = String(row.credit ?? "");
  const rawTitle = String(row.title ?? "");
  const out = { reject: null, held: null, matches: [], creditField: credit, title: rawTitle, ownerTag: null };

  // 1. Tribute and karaoke acts.
  if (TRIBUTE_RE.test(credit) || TRIBUTE_RE.test(rawTitle)) {
    out.reject = "tribute";
    return out;
  }

  // 2. The credit field: the register's credit plus any feature qualifier
  //    lifted from the title, plus credits the register prints in a field of
  //    their own (NVPI's metadata.artists → row.featured).
  const { lifted } = liftFeatures(rawTitle);
  const featured = Array.isArray(row.featured) ? row.featured.map(String) : [];
  const creditField = [credit, ...lifted, ...featured].filter(Boolean).join(" · ");
  out.creditField = creditField;

  // 6 (read early, applied below). TCSN's owner tag: "Reason (Omah Lay)".
  let title = rawTitle;
  if (ownerTags) {
    const m = rawTitle.match(/^(.*\S)\s*\(([^()]+)\)\s*$/);
    if (m && !VERSION_WORD_RE.test(m[2]) && !new RegExp(`^${FEAT_WORD}\\s`, "i").test(m[2])) {
      const tag = m[2].trim();
      const isArtistName = Object.values(liveArtists).some((a) => normalise(a.name) === normalise(tag));
      if (isArtistName || nameRe(tag).test(credit)) {
        out.ownerTag = tag;
        title = m[1];
      }
    }
  }
  out.title = title;

  // 8 (checked before any candidate can form). Held rows: exact triples.
  const held = (config.heldRows ?? []).find(
    (h) => h.adapter === adapterId && h.credit === credit && h.title === rawTitle
  );
  if (held) {
    out.held = held;
    return out;
  }

  const namesakes = Object.fromEntries((config.namesakes ?? []).map((n) => [n.artist, n.names]));
  const matched = new Map();
  const add = (artist, via, flag) => {
    if (!matched.has(artist)) matched.set(artist, { artist, via, flags: [] });
    if (flag) matched.get(artist).flags.push(flag);
  };

  for (const [slug, a] of Object.entries(liveArtists)) {
    const cf = stripNames(creditField, namesakes[slug]);
    // 3. Direct match, word-anchored, namesakes subtracted.
    if (a.credit.test(cf)) {
      add(slug, "credit");
      continue;
    }
    // 4. Buju-era filings — BNXN was BUJU until 2022; BUJU BANTON is not him.
    if (slug === "bnxn") {
      const noBanton = cf.replace(/\bbuju\s+banton\b/gi, " ");
      if (/\bbuju\b/i.test(noBanton)) add(slug, "buju", "Buju-era credit — confirm it is BNXN");
    }
  }

  // 5. Register typos ("Ayra Staar"), per register.
  for (const t of config.creditTypos ?? []) {
    if (t.register !== adapterId) continue;
    if (nameRe(t.printed).test(creditField) && !matched.has(t.artist)) {
      add(t.artist, "typo", `register misspells the credit ("${t.printed}")`);
    }
  }

  // 6. Owner tag: it must name an artist CREDITED on the row. Where it names
  //    one of the sixteen, the record is theirs; any other credited artist is
  //    featured on it and is kept with a flag, never silently dropped.
  if (out.ownerTag) {
    for (const [slug, m] of [...matched]) {
      const own = normalise(liveArtists[slug].name) === normalise(out.ownerTag);
      if (own) continue;
      if (nameRe(out.ownerTag).test(credit)) {
        m.flags.push(`TCSN files this as "${out.ownerTag}"'s record — confirm it is the site's release`);
      } else {
        matched.delete(slug);
      }
    }
  }

  // 7. Lead aliases: the credit names a known LEAD and the title is that
  //    alias's title. The Boom DK precedent.
  const nt = normTitle(title);
  for (const al of leadAliases) {
    if (matched.has(al.artist)) continue;
    if (!nameRe(al.lead).test(creditField)) continue;
    if (normTitle(al.title) !== nt && normTitle(al.release ?? al.title) !== nt) continue;
    const truncated = /(\.\.\.|…)\s*$/.test(credit);
    const artistName = liveArtists[al.artist]?.name ?? al.artist;
    add(
      al.artist,
      "lead-alias",
      truncated
        ? `credit truncated by the register — matched on lead "${al.lead}" + title; confirm ${artistName} is credited before adding`
        : `credit does not name ${artistName} — matched on lead "${al.lead}" + title; confirm the featured credit before adding`
    );
    matched.get(al.artist).release = al.release ?? al.title;
  }

  out.matches = [...matched.values()];
  return out;
}

// ── Ladders ─────────────────────────────────────────────────────────────────
const TIER_INDEX = { Silver: 0, Gold: 1, Platinum: 2, Diamond: 3 };

/** A comparable rank for a reading or a site holding on a ladder.
 *  standard: [tierIndex, x] lexicographic — a German 3x Gold is below 1x Platin.
 *  riaa:     units — Gold 0.5, level N = N, site Diamond = 10 × x. */
export function rankOf(ladder, r) {
  if (!r || !(r.tier in TIER_INDEX)) return null;
  const x = r.x ?? 1;
  if (ladder === "riaa") {
    if (typeof r.level === "number") return [r.level === 0 ? 0.5 : r.level];
    if (r.tier === "Gold") return [0.5];
    if (r.tier === "Platinum") return [x];
    if (r.tier === "Diamond") return [10 * x];
    return [0.25]; // Silver: not a RIAA tier; ranks below Gold
  }
  return [TIER_INDEX[r.tier], x];
}

/** -1 / 0 / 1 */
export function compareRank(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const d = (a[i] ?? 0) - (b[i] ?? 0);
    if (d !== 0) return d < 0 ? -1 : 1;
  }
  return 0;
}

/** Site holding vs a register reading → candidate kind, or null when in sync
 *  or when the site is ahead (never reported). */
export function compareHolding(ladder, holding, reading) {
  if (!holding) return "NEW PLAQUE";
  const h = rankOf(ladder, holding);
  const r = rankOf(ladder, reading);
  if (!h || !r) return null;
  return compareRank(h, r) < 0 ? "UPGRADE" : null;
}

/** Human label of a reading or holding: "Platinum ×2", "Gold". */
export const tierLabel = (r) => (r ? `${r.tier}${(r.x ?? 1) > 1 ? ` ×${r.x}` : ""}` : "unparsed");

// ── Keys and fingerprints ───────────────────────────────────────────────────
export const readingId = (reading, tierRaw) =>
  reading
    ? `${reading.tier}×${reading.x ?? 1}${typeof reading.level === "number" ? `·L${reading.level}` : ""}`
    : `raw:${tierRaw ?? ""}`;

export const keyOf = (c) =>
  [c.adapter, c.country, c.programme ?? "", c.artist, c.normTitle, c.format].join("|");

export const fingerprint = (key, reading, tierRaw) =>
  createHash("sha256").update(`${key}|${readingId(reading, tierRaw)}`).digest("hex").slice(0, 16);

// ── Locate ──────────────────────────────────────────────────────────────────
/** The site release for (artist, title, format), or null. `index` is a
 *  hydrated site index (site.mjs). A known register format that disagrees
 *  (album vs single) is no match. */
export function locateRelease(index, artist, title, format, releaseHint) {
  const a = index.artists[artist];
  if (!a) return null;
  const keys = [normTitle(title)];
  if (releaseHint) keys.unshift(normTitle(releaseHint));
  const fits = (r) => format === "unknown" || !format || r.format === format;
  for (const map of [a.byTitle, a.byAlt]) {
    for (const k of keys) {
      const hits = (map.get(k) ?? []).filter(fits);
      if (hits.length) return hits[0];
    }
  }
  return null;
}

// ── Evaluate one adapter's rows ─────────────────────────────────────────────
/**
 * Identify → fold → locate → compare → suppress → fingerprint (§4).
 *
 * adapter: { id, country, programme, ladder, ownerTags? }
 * rows:    adapter rows (§2.5), each with an optional `programme` override
 * ctx:     { index (hydrated), liveArtists, config }
 *
 * Returns { candidates, readings, suppressed: {divergences, held, tribute},
 *           counts: {rows, matched, inSync} }.
 */
export function evaluateRows(adapter, rows, ctx) {
  const { index, liveArtists, config } = ctx;
  const suppressed = { divergences: [], held: [], tribute: [] };
  const groups = new Map();
  let matchedRows = 0;

  for (const row of rows) {
    const id = identifyRow(row, {
      adapterId: adapter.id,
      liveArtists,
      config,
      leadAliases: index.leadAliases,
      ownerTags: !!adapter.ownerTags,
    });
    if (id.reject === "tribute") {
      suppressed.tribute.push({ credit: row.credit, title: row.title });
      continue;
    }
    if (id.held) {
      suppressed.held.push({ adapter: adapter.id, credit: row.credit, title: row.title, why: id.held.why });
      continue;
    }
    if (!id.matches.length) continue;
    matchedRows++;
    const programme = row.programme !== undefined ? row.programme : adapter.programme ?? null;
    const format = row.format ?? "unknown";
    for (const m of id.matches) {
      const release = locateRelease(index, m.artist, id.title, format, m.release);
      const nt = release ? release.normTitle : normTitle(id.title);
      const fmt = release ? release.format : format;
      const gkey = keyOf({ adapter: adapter.id, country: adapter.country, programme, artist: m.artist, normTitle: nt, format: fmt });
      const g = groups.get(gkey) ?? { key: gkey, artist: m.artist, release, programme, format: fmt, normTitle: nt, rows: [], flags: new Set(), best: null };
      for (const f of m.flags) g.flags.add(f);
      g.rows.push(row);
      // Fold: keep the HIGHEST reading; an unparsed tier never outranks a parsed one.
      const better =
        !g.best ||
        (!g.best.reading && row.reading) ||
        (row.reading && g.best.reading && compareRank(rankOf(adapter.ladder, row.reading) ?? [0], rankOf(adapter.ladder, g.best.reading) ?? [0]) > 0);
      if (better) g.best = row;
      groups.set(gkey, g);
    }
  }

  const candidates = [];
  const readings = [];
  let inSync = 0;
  for (const g of groups.values()) {
    const row = g.best;
    const holding = g.release ? g.release.holdings[`${adapter.country}|${g.programme ?? ""}`] ?? null : null;
    readings.push({ key: g.key, artist: g.artist, release: g.release?.title ?? null, reading: row.reading, tierRaw: row.tierRaw, row, holding });
    let kind;
    if (!g.release) kind = "NEW RELEASE";
    else if (!row.reading) kind = "UNREADABLE TIER";
    else kind = compareHolding(adapter.ladder, holding, row.reading);
    if (!kind) {
      inSync++;
      continue;
    }
    const div = (config.knownDivergences ?? []).find(
      (d) =>
        d.adapter === adapter.id &&
        d.artist === g.artist &&
        normTitle(d.title) === g.normTitle &&
        d.readingRaw === row.tierRaw
    );
    if (div) {
      suppressed.divergences.push({ adapter: adapter.id, artist: g.artist, title: div.title, readingRaw: row.tierRaw, why: div.why });
      continue;
    }
    const fp = fingerprint(g.key, row.reading, row.tierRaw);
    candidates.push({
      key: g.key,
      fp,
      kind,
      adapter: adapter.id,
      country: adapter.country,
      programme: g.programme,
      artist: g.artist,
      artistName: liveArtists[g.artist]?.name ?? g.artist,
      release: g.release ? g.release.title : null,
      releaseCredit: g.release ? g.release.credit ?? null : null,
      normTitle: g.normTitle,
      format: g.format,
      title: row.title,
      credit: row.credit,
      reading: row.reading,
      tierRaw: row.tierRaw,
      dateRaw: row.dateRaw ?? null,
      dateKind: adapter.dateKind ?? null,
      rowId: row.rowId ?? null,
      url: row.url ?? null,
      readUrl: row.readUrl ?? null,
      rows: g.rows.slice(0, 3).map((r) => r.raw),
      holding,
      flags: [...g.flags],
    });
  }
  return {
    candidates,
    readings,
    suppressed,
    counts: { rows: rows.length, matched: matchedRows, inSync },
  };
}

