import { comparableArtists, compare, type ComparableArtist } from "./certUnits";
import { pickerArtists, plaqueCount } from "./comparePicker";
import { HEAD_TO_HEAD } from "./headToHead";

/**
 * The pretty comparison routes: /compare/<a>-vs-<b>, one per unordered pair of
 * the sixteen artists (120 pages). They exist for search — "burna boy vs
 * wizkid" is a query people actually type — and each one is the compare page
 * with both sides filled, canonical to itself, with its own title,
 * description and share card built from the live figures.
 *
 * ONE order per pair, so no two URLs carry the same comparison: the artist
 * with more plaques comes first (ties by name), the same order the picker
 * lists them in. The other order redirects here permanently.
 */

const ordered = (x: ComparableArtist, y: ComparableArtist) =>
  plaqueCount(y) - plaqueCount(x) || x.name.localeCompare(y.name);

/** Canonical [first, second] for two distinct artists. */
export function canonicalPair(x: ComparableArtist, y: ComparableArtist): [ComparableArtist, ComparableArtist] {
  return ordered(x, y) <= 0 ? [x, y] : [y, x];
}

export const pairSlug = (x: ComparableArtist, y: ComparableArtist) => {
  const [p, q] = canonicalPair(x, y);
  return `${p.slug}-vs-${q.slug}`;
};

/** Every canonical pair, in picker order — the sitemap and the static params. */
export function allPairs(): [ComparableArtist, ComparableArtist][] {
  const list = pickerArtists();
  const out: [ComparableArtist, ComparableArtist][] = [];
  for (let i = 0; i < list.length; i++)
    for (let j = i + 1; j < list.length; j++) out.push([list[i], list[j]]);
  return out;
}

/** Parse "<a>-vs-<b>". Slugs contain hyphens, so split on the literal "-vs-".
 *  Returns the two artists (in the URL's order) or null. */
export function parsePair(pair: string): [ComparableArtist, ComparableArtist] | null {
  const i = pair.indexOf("-vs-");
  if (i <= 0) return null;
  const a = comparableArtists.find((x) => x.slug === pair.slice(0, i));
  const b = comparableArtists.find((x) => x.slug === pair.slice(i + 4));
  if (!a || !b || a.slug === b.slug) return null;
  return [a, b];
}

/** The board's curated head-to-heads, as canonical pairs, deduplicated — the
 *  arrival state's "popular comparisons", and the site search's docs. */
export function featuredPairs(): [ComparableArtist, ComparableArtist][] {
  const seen = new Set<string>();
  const out: [ComparableArtist, ComparableArtist][] = [];
  for (const [s, t] of Object.entries(HEAD_TO_HEAD)) {
    const x = comparableArtists.find((a) => a.slug === s);
    const y = comparableArtists.find((a) => a.slug === t);
    if (!x || !y || x.slug === y.slug) continue;
    const slug = pairSlug(x, y);
    if (seen.has(slug)) continue;
    seen.add(slug);
    out.push(canonicalPair(x, y));
  }
  return out;
}

const fmt = (n: number) => n.toLocaleString("en-US");

/** Title, description and share-card copy for one pair, from the live floors
 *  (default view: every plaque held, Nigeria by the page's own rule). Lengths sit
 *  inside Google's display limits for every name on the board — the post-build
 *  gate (scripts/check-seo.mjs) reads them off the rendered HTML. */
export function pairCopy(a: ComparableArtist, b: ComparableArtist) {
  const c = compare(a, b, { includeFeatures: true });
  const scope = c.options.includeNigeria ? "Nigeria included" : "international";
  const lead = c.a.total >= c.b.total ? c.a : c.b;
  const trail = lead === c.a ? c.b : c.a;
  const title = `${a.name} vs ${b.name}: Certified Units Compared`;
  const sub = c.a.total === c.b.total
    ? `Level — both at least ${fmt(c.a.total)} certified units · ${scope}`
    : `${lead.artist.name} leads by at least ${fmt(lead.total - trail.total)} · ${fmt(c.a.total)} vs ${fmt(c.b.total)} certified units · ${scope}`;
  // Two lengths of description: the fuller one where it fits Google's 160,
  // the shorter one for the longest names on the board ("Fireboy DML" vs
  // "Black Sherif", Nigeria included). The post-build gate reads the rendered
  // HTML and refuses anything longer.
  const head = `${a.name} at least ${fmt(c.a.total)} certified units vs ${b.name} ${fmt(c.b.total)} (${scope})`;
  const full = `${head} — each plaque priced at its body's own threshold, country by country.`;
  const short = `${head}, each plaque priced at its body's own threshold.`;
  const description = full.length <= 160 ? full : short;
  return { title, description, sub, totals: [c.a.total, c.b.total] as const, scope };
}
