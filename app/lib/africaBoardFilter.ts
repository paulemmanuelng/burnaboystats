import type { Board } from "./africaBoards";

/**
 * Whether another artist tops this board: he does not lead it, someone else
 * is on it, and it is not a by-year board, which has no single leader and so
 * belongs to neither side (lib/africaBoards.ts, yearBoard).
 *
 * One predicate for the page's count (boardsOthersLead, "another artist leads
 * 7") and the phone's "Others lead" chip. The chip filtered on `!b.leads`
 * alone, so it showed 8 boards with the by-year board first, on which he is
 * No. 1 for 2026 and won 3 of 4 closed years (live debug 15 Oct 2026, REC-5).
 * A module of its own, with only a type import, so the client screen does not
 * pull the board data into its bundle.
 */
export const othersLead = (b: Pick<Board, "leads" | "rows" | "years">): boolean =>
  !b.leads && b.rows.some((r) => !r.his) && !b.years;
