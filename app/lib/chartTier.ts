/**
 * A chart peak's tier: No. 1, top 10, top 40 or the rest.
 *
 * Lives here, not in data/charts.ts, so the chart explorer (a client
 * component) can colour its peak pills without importing the chart dataset:
 * one value import of data/charts put all of Burna Boy's chart entries in the
 * /records/charts bundle (30 Sep 2026). data/charts.ts re-exports it for the
 * pages and libraries that already read the data.
 */
export function chartTier(peak: number): "one" | "top10" | "top40" | "rest" {
  if (peak === 1) return "one";
  if (peak <= 10) return "top10";
  if (peak <= 40) return "top40";
  return "rest";
}
