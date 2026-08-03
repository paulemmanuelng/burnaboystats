/**
 * How often each platform's chart actually refreshes.
 *
 * YouTube's is a weekly chart and supplies most of the No. 1s on the live page,
 * so the cadence is shown next to the numbers rather than only in a footnote —
 * a No. 1 held for a week and one held for a day are not the same claim.
 *
 * Shared so the desktop page and the mobile screen can never state it
 * differently.
 */
const CADENCE: Record<string, string> = { YouTube: "weekly" };

export const cadenceOf = (platform: string) => CADENCE[platform] ?? "daily";

/** Total placements for a release, across every platform it charts on. */
export const reachOf = (r: { platforms: { entries: unknown[] }[] }) =>
  r.platforms.reduce((n, p) => n + p.entries.length, 0);

/** No. 1s for a release. `numberOnes` is a subset of `entries`, never additive. */
export const numberOnesOf = (r: { platforms: { numberOnes: number }[] }) =>
  r.platforms.reduce((n, p) => n + p.numberOnes, 0);
