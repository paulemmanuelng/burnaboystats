/**
 * The chart filter's territories by continent (J3-8, design review 8 Oct 2026;
 * fixes 58, 71). Pure, with no data import, so the client explorer can use it.
 *
 * Every chart code the site prints sits in exactly one group: the 71 of
 * CHART_COUNTRIES (data/charts.ts) and the codes only a board artist charts in
 * (Belarus, Mexico, the Philippines, Serbia, Malta, South Korea, Thailand).
 * tests/chartRegions.test.ts sums the groups against CHART_COUNTRIES and
 * checks every code on every chart page has a group. Turkey and Russia sit
 * with Europe; Kazakhstan, Israel, the UAE, Saudi Arabia and Lebanon in the
 * group the design called Asia–Pacific; Egypt with Africa (the design's own
 * placement).
 *
 * That group is "Asia & Middle East" since 15 Oct 2026 (live debug cb-8;
 * Paul: "yes", question 22): "Asia–Pacific" held Israel, Lebanon, Saudi
 * Arabia and the UAE, which the name does not cover. Renamed, not split: the
 * same codes, in the same place.
 */

export type Region = "Africa" | "Europe" | "Americas" | "Asia & Middle East" | "Global";

/** The runs' order on the page. */
export const REGION_ORDER: readonly Region[] = ["Africa", "Europe", "Americas", "Asia & Middle East", "Global"];

const BY_REGION: Record<Region, readonly string[]> = {
  Africa: ["NG", "ZA", "EG"],
  Europe: [
    "UK", "IE", "FR", "DE", "NL", "SE", "BE", "CH", "AT", "DK", "IT", "ES", "PT", "FI", "HU", "GR", "IS", "RO",
    "SK", "CZ", "LT", "LU", "NO", "PL", "LV", "BG", "EE", "TR", "MD", "UA", "RU", "MK", "SI", "HR",
    // board artists only
    "BY", "RS", "MT",
  ],
  Americas: [
    "US", "CA", "SR", "AR", "PA", "CO", "EC", "CR", "BR", "CL", "UY", "VE", "GT", "HN", "NI", "PY", "PR", "PE", "BO",
    // board artists only
    "MX",
  ],
  "Asia & Middle East": [
    "AU", "NZ", "HK", "IN", "IL", "AE", "SA", "LB", "VN", "JP", "SG", "MY", "KZ",
    // board artists only
    "PH", "KR", "TH",
  ],
  Global: ["GLB", "GLBX"],
};

/** Code -> its group. */
export const REGION_OF: Readonly<Record<string, Region>> = Object.fromEntries(
  REGION_ORDER.flatMap((r) => BY_REGION[r].map((c) => [c, r] as const)),
);

/** A code's group. Throws on a code no group holds, so a new chart territory
 *  fails the static build rather than dropping out of the filter. */
export function regionOf(code: string): Region {
  const r = REGION_OF[code];
  if (!r) throw new Error(`chartRegions: no continent for chart code "${code}"`);
  return r;
}

export type RegionGroup = { region: Region; codes: string[] };

/** A page's territories as runs, in REGION_ORDER; each run keeps the order the
 *  codes came in (the page's own chip order), and an empty run is left out. */
export function chartGroups(codes: readonly string[]): RegionGroup[] {
  return REGION_ORDER.map((region) => ({ region, codes: codes.filter((c) => regionOf(c) === region) })).filter(
    (g) => g.codes.length > 0,
  );
}

/** How many territories the "Most charted" run holds (/records/charts). */
export const MOST_CHARTED_SHOWN = 12;

/** The territories with the most chart entries across the releases, most
 *  first, ties by code A–Z. */
export function mostCharted(releases: readonly { entries: readonly { c: string }[] }[], n: number): string[] {
  const per = new Map<string, number>();
  for (const r of releases) for (const e of r.entries) per.set(e.c, (per.get(e.c) ?? 0) + 1);
  return [...per.entries()]
    .sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
    .slice(0, n)
    .map(([c]) => c);
}

/** Case and accents folded, for matching. */
const fold = (s: string) => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

/**
 * Fix 71's match: the query is a prefix of the code, or of any word of the
 * territory's name ("ni" → NG Nigeria, NI Nicaragua; never Finland). An empty
 * query matches nothing (the field is not in use).
 */
export function matchesQuery(query: string, code: string, name: string): boolean {
  const q = fold(query.trim());
  if (!q) return false;
  if (fold(code).startsWith(q)) return true;
  return fold(name)
    .split(/[^\p{L}\p{N}]+/u)
    .some((w) => w.length > 0 && w.startsWith(q));
}
