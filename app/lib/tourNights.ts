/**
 * A tour night's box office, as the tour tables print it (J3-11, design review
 * 8 Oct 2026, fixes 56, 59, 60, 69, 73): Tickets, Gross and Board, matched
 * from the Highest-grossing shows board.
 *
 * Pure, and data-free: both tours layouts are client components, and the
 * board's rows (with their `source` notes) must never reach a browser
 * (tests/tourRevenueServerOnly.test.ts). The server builds the figures
 * (lib/tourBoxOffice) and hands the layouts these plain objects.
 */

/** A single night on the board: its own figures and its rank among every
 *  single night by an African artist. */
export interface BoardNight {
  kind: "night";
  /** "10,684"; absent where the body published no headcount. */
  tickets?: string;
  /** "$1,224,617", the desktop's form. */
  grossFull: string;
  /** "$1.22M", the phone's (lib/grossLabel shortGross). */
  grossShort: string;
  rank: number;
}

/** A run: several nights the body reported as one figure. Never ranked
 *  (fix 60: the board never ranks a run among single nights). */
export interface BoardRun {
  kind: "run";
  tickets: string;
  grossFull: string;
  grossShort: string;
  /** The body's own count of nights in the stand. */
  nights: number;
  /** The run's nights as this tour lists them, ISO, in table order: the
   *  first carries the figures, the rest share them. */
  dates: string[];
}

export type TourNight = BoardNight | BoardRun;

/** Tour name → ISO night → its box office. A night with no entry has no
 *  report; a tour with no entry has none at all and keeps its five columns. */
export type TourBoxOffice = Record<string, Record<string, TourNight>>;

/** The tour's nights on the board, or null when it has none (fix 73: such a
 *  tour keeps today's columns). */
export function nightsOf(boxOffice: TourBoxOffice | undefined, tour: string): Record<string, TourNight> | null {
  const n = boxOffice?.[tour];
  return n && Object.keys(n).length > 0 ? n : null;
}

/** What a dash in a night's Tickets or Gross says to a screen reader. */
export const NO_NIGHT_REPORT = "No box-office report for this night";

/** The phone's line for a night with no report (fix 59). */
export const NOT_REPORTED_LINE = "— not reported";

/**
 * The note under a table that carries the board's figures, after the tour's
 * own date note: the canvas's foot (Ledgers.dc.html §7), with no count typed
 * — a run is "its nights", whatever their number.
 */
export const BOX_OFFICE_NOTE =
  "Tickets and gross are each night’s own report on the Highest-grossing shows board; a dash is a night with no report, never zero. A run, nights reported as one figure, prints it once across its nights.";

const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * A run's nights as the phone's merged row prints them, from the tour's own
 * dates ("Feb 24, 2024", "Feb 25, 2024"): "Feb 24 – 25, 2024"; across a month,
 * "Nov 28 – Dec 1, 2021"; across a year, both years. Spaces inside each end
 * are no-break, so a date never splits from its day (V-tourscars-07).
 */
export function nightsSpan(isoDays: readonly string[]): string {
  const [a, b] = [isoDays[0], isoDays[isoDays.length - 1]].map((d) => {
    const [y, m, day] = d.split("-").map(Number);
    return { y, m: MON[m - 1], d: day };
  });
  const nb = (s: string) => s.replace(/ /g, " ");
  if (isoDays.length < 2 || (a.y === b.y && a.m === b.m && a.d === b.d)) return nb(`${a.m} ${a.d}, ${a.y}`);
  if (a.y !== b.y) return `${nb(`${a.m} ${a.d}, ${a.y}`)} – ${nb(`${b.m} ${b.d}, ${b.y}`)}`;
  if (a.m !== b.m) return `${nb(`${a.m} ${a.d}`)} – ${nb(`${b.m} ${b.d}, ${b.y}`)}`;
  return `${nb(`${a.m} ${a.d}`)} – ${nb(`${b.d}, ${b.y}`)}`;
}
