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

/**
 * The phone's Announced card, folded (Paul, 8 Oct 2026: "i want the later
 * shows to collapse where the first he will do remain visible"). `next` is the
 * earliest show still to come, the one the card keeps open; `later` is every
 * other announced show, in date order, behind one toggle. Pass the `announced`
 * half of splitAnnounced: a played show belongs to the Played card and is
 * never the next one. Sorted on the last possible day, so a bare "2027" goes
 * after any dated 2027 show; the sort is stable, and tours.ts is already in
 * date order (tests/upcomingShows.test.ts), so today it changes nothing.
 * Desktop lists every show open and does not call this.
 */
export function foldAnnounced<T extends Pick<UpcomingShow, "when">>(
  announced: readonly T[],
): { next: T | null; later: T[] } {
  const key = (s: T) => lastPossibleDay(s.when) ?? "9999-99-99";
  const ordered = [...announced].sort((a, b) => (key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0));
  return { next: ordered[0] ?? null, later: ordered.slice(1) };
}

/** The fold's toggle, worded from the count: "1 more show", "2 more shows";
 *  open, "Show fewer". The ▾ / ▴ beside it is the approved glyph for a
 *  toggle that opens or closes in place (design fix 7, 8 Oct 2026). */
export const moreShowsLabel = (n: number): string => `${n} more show${n === 1 ? "" : "s"}`;
export const SHOW_FEWER = "Show fewer";

/** The two groups' words, shared by both layouts so they cannot drift. */
export const ANNOUNCED_TAG = "Announced";
export const ANNOUNCED_NOTE = "Not yet played — no gross, no attendance";
export const PLAYED_TAG = "Played";
export const PLAYED_NOTE = "Awaiting a box-office report — no gross, no attendance yet";
/** The phone's head slot, where the desktop's long note does not fit. */
export const PLAYED_NOTE_SHORT = "Awaiting a box-office report";
