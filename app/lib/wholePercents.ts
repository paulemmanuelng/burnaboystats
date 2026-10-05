/**
 * Whole percentages that add up to 100 — largest-remainder rounding. Each
 * share is floored, then the points left over go one each to the shares with
 * the largest remainders (ties to the earlier entry), so a column of tier
 * shares never reads 99% or 101% (debug pass 4 Oct 2026, B-10: Olamide's
 * 31/24/44, Rema's international 11/55/26/9 — each a correct rounding on its
 * own, adding to 99 and 101). Where plain rounding already adds to 100 the
 * two agree: Burna Boy's 3/41/42/14 stays.
 *
 * Nothing counted: every share is 0, never NaN.
 */
export function wholePercents(counts: readonly number[]): number[] {
  const total = counts.reduce((a, b) => a + b, 0);
  if (total <= 0) return counts.map(() => 0);
  const raw = counts.map((c) => (c * 100) / total);
  const out = raw.map((r) => Math.floor(r));
  let left = 100 - out.reduce((a, b) => a + b, 0);
  const byRemainder = raw.map((r, i) => ({ i, rem: r - out[i] })).sort((a, b) => b.rem - a.rem || a.i - b.i);
  for (const { i } of byRemainder) {
    if (left <= 0) break;
    out[i]++;
    left--;
  }
  return out;
}
