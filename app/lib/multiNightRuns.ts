/**
 * Reader-facing words for the multi-night runs beneath the revenue board —
 * concerts the body reports only as one combined total for several nights
 * (`revenueStands` in app/data/tourRevenue.ts). One home, so the desktop
 * section and the phone list say the same thing (the owner, 3 Oct 2026: "ensure
 * they are properly stated so it has a good heading").
 *
 * "Nights", never "shows": the board above ranks single shows, and a run is a
 * number of nights at one venue. The code keeps its "stand" identifiers.
 */

export const RUNS_HEADING = "Multi-night runs";

export const RUNS_LEDE =
  "Concerts played over two or more nights at the same venue and reported only as one combined total, so they're listed here rather than ranked against single nights.";

/** "29,579 tickets over 2 nights". */
export const runTickets = (tickets: string, nights: number) => `${tickets} tickets over ${nights} nights`;

/**
 * The lowest place any run's combined total would take among the single
 * nights, were it ranked as one: the "top N" the desktop note prints, derived
 * rather than typed (debug pass 3 Oct 2026, bo-06: it said "top five", true
 * that day by hand only). Pure numbers in, so this file stays free of the
 * board's data (it is imported by a client component).
 */
export const runRankCeiling = (runs: readonly number[], nights: readonly number[]) =>
  Math.max(...runs.map((r) => 1 + nights.filter((n) => n > r).length));
