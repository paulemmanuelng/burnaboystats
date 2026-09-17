/**
 * Most-charted first: rank by how many territories a release charted in, then
 * by its best (lowest) peak, then newest — so the biggest hits lead each list.
 *
 * A plain module, not part of the client-side ChartExplorer, because the
 * board's chart pages sort on the SERVER before handing rows to both layouts:
 * the mobile screen prints cards in the order it is given, and Fireboy DML's
 * "Peru" (11 charts, his only international hit) sat 34th on the phone while
 * leading the desktop explorer, until 17 Sep 2026.
 */
export const byReachOrder = <T extends { title: string; year?: number; entries: { peak: number }[] }>(a: T, b: T) =>
  b.entries.length - a.entries.length ||
  Math.min(...a.entries.map((e) => e.peak)) - Math.min(...b.entries.map((e) => e.peak)) ||
  (b.year ?? 0) - (a.year ?? 0) ||
  a.title.localeCompare(b.title);
