/**
 * Reader-facing words for the multi-night runs on the revenue board —
 * concerts the body reports only as one combined total for several nights
 * (`revenueStands` in app/data/tourRevenue.ts). One home, so the desktop
 * board and the phone list say the same thing (the owner, 3 Oct 2026: "ensure
 * they are properly stated so it has a good heading"). Since 4 Oct 2026 they
 * are a chip on the board's rail, beside "All", rather than a section beneath
 * it; RUNS_HEADING names the chip and labels its view.
 *
 * "Nights", never "shows": the board above ranks single shows, and a run is a
 * number of nights at one venue. The code keeps its "stand" identifiers.
 */

export const RUNS_HEADING = "Multi-night runs";

export const RUNS_LEDE =
  "Concerts played over two or more nights at the same venue and reported only as one combined total, so they're listed here rather than ranked against single nights.";

/** "3 multi-night runs · 7 nights" — the count line while the runs chip is on
 *  (the owner, 4 Oct 2026: the runs moved into a chip beside "All"). */
export function runsCountLine(runs: number, nights: number): string {
  const word = RUNS_HEADING.toLowerCase();
  return `${runs} ${runs === 1 ? word.replace(/s$/, "") : word} · ${nights} ${nights === 1 ? "night" : "nights"}`;
}

/**
 * What a share of the board's gross is a share OF, said where the share prints
 * (design review of 8 Oct 2026, T-12). His share was 65.7% on Highest-grossing
 * shows and 65.3% on the countries board, a page apart, with nothing saying
 * why: the shows board sums single nights only, and the countries board adds
 * the multi-night runs, which each count as one reported gross. Both figures
 * are right; each now says its basis. "Runs" in the board's own word.
 */
export function runsBasis(runs: number, included: boolean, { short = false }: { short?: boolean } = {}): string {
  // Included: "3 runs included", the countries board's own words for them
  // ("Every reported gross in a country, runs included"), short enough to keep
  // the desktop caption on one line at 1024 beside its other half.
  // The count held to its noun with a no-break space: at 390 the phone's
  // caption broke "3" / "runs included" across its two lines.
  if (included) return `${runs}\u00a0${runs === 1 ? "run" : "runs"} included`;
  // Left out: the count where there is room (the desktop share line), the
  // basis alone in the phone's caption, which it would otherwise run to a
  // third line.
  const word = RUNS_HEADING.toLowerCase();
  const n = `${runs}\u00a0${runs === 1 ? word.replace(/s$/, "") : word}`;
  return short || runs === 0 ? "single nights only" : `single nights only, ${n} left out`;
}

const MONTHS = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/g;

/** "28–29 Nov & 1 Dec 2021" from the data's "28–29 November and 1 December
 *  2021": a run's dates, short enough for a board row's second line. */
export const shortDates = (dates: string) => dates.replace(MONTHS, (m) => m.slice(0, 3)).replace(/ and /g, " & ");

/** A run's year, as a board row prints one: the last year on its dates. */
export function runYear(dates: string): string {
  const m = /(\d{4})\s*$/.exec(dates);
  if (!m) throw new Error(`runYear: no year at the end of "${dates}"`);
  return m[1];
}

/**
 * The lowest place any run's combined total would take among the single
 * nights, were it ranked as one: the "top N" the desktop note prints, derived
 * rather than typed (debug pass 3 Oct 2026, bo-06: it said "top five", true
 * that day by hand only). Pure numbers in, so this file stays free of the
 * board's data (it is imported by a client component).
 */
export const runRankCeiling = (runs: readonly number[], nights: readonly number[]) =>
  Math.max(...runs.map((r) => 1 + nights.filter((n) => n > r).length));
