/**
 * Bar lengths for a leaderboard board.
 *
 * A bar only means something when the values it compares are quantities of the
 * same kind. Two things break that on `africasBiggest.ts`:
 *
 *  - **Placings.** "No. 3" and "#5" are ranks, not amounts. Length can't carry
 *    them — and a naive digit-strip reads "No. 20" as 0.2 and "No. 9" as 0.9,
 *    which drew the worst placing as the longest bar.
 *  - **Mixed units.** One board runs "1.12B" down to "741M". Parsed as bare
 *    numbers, 741 dwarfs 1.12 and the order inverts.
 *
 * So the unit is resolved before comparing, and a board with any non-quantity
 * in it gets no bars at all. Bars scale within a board, never across them.
 */

/** "No. 3", "no 3", "#5" — a rank, which has no length. */
const PLACING = /^\s*(?:no\.?\s*|#)\s*\d/i;

const UNIT: Record<string, number> = { k: 1e3, m: 1e6, b: 1e9 };

/**
 * The quantity a display value stands for: "1.12B" → 1.12e9, "959M" → 9.59e8,
 * "$30.46M" → 3.046e7, "9" → 9. `undefined` when the value isn't a quantity.
 */
export function magnitudeOf(value: string): number | undefined {
  if (PLACING.test(value)) return undefined;
  const m = /(\d[\d,]*\.?\d*)\s*([kmb])?/i.exec(value);
  if (!m) return undefined;
  const n = Number.parseFloat(m[1].replace(/,/g, ""));
  if (!Number.isFinite(n)) return undefined;
  return m[2] ? n * UNIT[m[2].toLowerCase()] : n;
}

/**
 * Bar widths in 0–1 for one board, longest = 1. Every entry comes back
 * `undefined` when the board's values aren't comparable quantities, which is
 * what a placing board should render: rank, name, value, no bar.
 */
export function barsFor(values: (string | undefined)[]): (number | undefined)[] {
  const none = values.map(() => undefined);
  const nums = values.map((v) => magnitudeOf(v ?? ""));
  if (nums.some((n) => n === undefined)) return none;
  const top = Math.max(...(nums as number[]));
  if (!(top > 0)) return none;
  return (nums as number[]).map((n) => n / top);
}
