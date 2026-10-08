// ============================================================================
//  ANNOUNCED SHOWS AGAINST TODAY — when "not yet played" stops being true
// ============================================================================
//
// tours.ts's `upcomingShows` is the one forward-looking list on the site, and
// it was printed as stored: from 26 Oct 2026 /records/tours would still have
// listed the 25 Oct Stade de France halftime show under "Announced · Not yet
// played", on both layouts, until somebody edited the file (design review of
// 8 Oct 2026, T-02). Nothing compared the dates with the calendar.
//
// So the page reads each show's `when` against today and files a show whose
// day has gone by as "Played · awaiting a box-office report" — still outside
// every total, as an announced show is, because nothing about the night has
// been reported yet. The day itself is still "announced": the show is that
// evening. The row moves into the record (tours / concerts / liveMoments) by
// hand, with whatever the reports say; tests/announcedShows.test.tsx rings the
// day after a show so that edit is not forgotten.
//
// No data import here, only a type: MobileTours, a client component, calls
// this with the day the server rendered (`today`, a prop), so the browser
// never reads its own clock and hydration has nothing to disagree with.
// ============================================================================

import type { UpcomingShow } from "../data/tours";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * The last day an announced show can fall on, ISO "YYYY-MM-DD": "25 Oct 2026"
 * is that day; a bare "2027" (no date announced yet) is 31 Dec 2027, so a
 * year-only show is never called played before its year is out. Null for a
 * `when` in neither form — tests/announcedShows.test.tsx fails on one, since
 * an unreadable date can never expire.
 */
export function lastPossibleDay(when: string): string | null {
  const d = /^(\d{1,2}) ([A-Z][a-z]{2}) (\d{4})$/.exec(when.trim());
  if (d) {
    const m = MONTHS.indexOf(d[2]);
    return m < 0 ? null : `${d[3]}-${String(m + 1).padStart(2, "0")}-${d[1].padStart(2, "0")}`;
  }
  const y = /^(\d{4})$/.exec(when.trim());
  return y ? `${y[1]}-12-31` : null;
}

/** True once the show's last possible day is behind `today` (ISO, London). */
export const hasBeenPlayed = (when: string, today: string): boolean => {
  const day = lastPossibleDay(when);
  return day !== null && day < today;
};

/** The announced list split by today: still to come, and played but not yet
 *  reported. Each keeps the stored (date) order. */
export function splitAnnounced<T extends Pick<UpcomingShow, "when">>(
  shows: readonly T[],
  today: string,
): { announced: T[]; played: T[] } {
  return {
    announced: shows.filter((s) => !hasBeenPlayed(s.when, today)),
    played: shows.filter((s) => hasBeenPlayed(s.when, today)),
  };
}

/** The two groups' words, shared by both layouts so they cannot drift. */
export const ANNOUNCED_TAG = "Announced";
export const ANNOUNCED_NOTE = "Not yet played — no gross, no attendance";
export const PLAYED_TAG = "Played";
export const PLAYED_NOTE = "Awaiting a box-office report — no gross, no attendance yet";
/** The phone's head slot, where the desktop's long note does not fit. */
export const PLAYED_NOTE_SHORT = "Awaiting a box-office report";
