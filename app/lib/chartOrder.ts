/**
 * Most-charted first: rank by how many territories a release charted in, then
 * by its best (lowest) peak, then newest — so the biggest hits lead each list.
 *
 * A plain module, not part of the client-side ChartExplorer, because the
 * board's chart pages sort on the SERVER before handing rows to both layouts:
 * the mobile screen prints cards in the order it is given, and Fireboy DML's
 * "Peru" (11 charts, his only international hit) sat 34th on the phone while
 * leading the desktop explorer, until 17 Sep 2026.
 *
 * The title tie-break names its locale. ChartExplorer re-sorts with this in the
 * browser, where the reader's default collation applies: Czech files "Cho Cho"
 * after "Heaven", Lithuanian and Estonian move other titles, and a client order
 * that differs from the server's is a hydration error (React #418).
 */
export const byReachOrder = <T extends { title: string; year?: number; entries: { peak: number }[] }>(a: T, b: T) =>
  b.entries.length - a.entries.length ||
  Math.min(...a.entries.map((e) => e.peak)) - Math.min(...b.entries.map((e) => e.peak)) ||
  (b.year ?? 0) - (a.year ?? 0) ||
  a.title.localeCompare(b.title, "en");
