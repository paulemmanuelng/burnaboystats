import { revenueShows, revenueStands } from "../data/tourRevenue";
import type { Tour } from "../data/tours";
import { usdFull } from "./revenueByCountry";
import { shortGross } from "./grossLabel";
import { standDays } from "./multiNightRuns";
import { showDateIso } from "./tourDeepLink";
import type { TourBoxOffice, TourNight } from "./tourNights";

/**
 * Each tour night's box office, matched from the Highest-grossing shows board
 * (J3-11, design review 8 Oct 2026; the shapes are lib/tourNights).
 *
 * SERVER ONLY: it reads app/data/tourRevenue.ts, whose `source` notes must
 * never reach a browser (tests/tourRevenueServerOnly.test.ts traces every
 * client chain). The tours page builds this once and hands the two client
 * layouts the plain figures.
 *
 * The match: his row whose tour is the tour's own name, whose venue is the
 * night's with any " (…)" event name stripped ("Madison Square Garden (One
 * Night in Space)" is the board's "Madison Square Garden"), and whose year is
 * the night's. A run — a stand the body reports as one figure — matches every
 * night of the tour at its venue inside the stand's own dates. The rank is the
 * row's place on the board, which filtering never renumbers. Throws where a
 * night would match two rows, or a run's nights are not one block of the
 * table, so nothing is ever printed against the wrong night.
 */

const HIS = "Burna Boy";

/** "Madison Square Garden (One Night in Space)" → "Madison Square Garden". */
export const boardVenue = (venue: string) => venue.replace(/\s*\([^)]*\)\s*$/, "");

export function tourBoxOffice(tours: readonly Tour[]): TourBoxOffice {
  const ranked = revenueShows.map((s, i) => ({ s, rank: i + 1 })).filter(({ s }) => s.artist === HIS);
  const runs = revenueStands.filter((r) => r.artist === HIS).map((r) => ({ r, days: standDays(r.dates) }));
  const out: TourBoxOffice = {};
  for (const t of tours) {
    const dates = t.dates ?? [];
    const nights: Record<string, TourNight> = {};
    const runRows = new Map<(typeof runs)[number], number[]>();
    dates.forEach((d, i) => {
      const iso = showDateIso(d.date);
      if (!iso) return;
      const venue = boardVenue(d.venue);
      const year = iso.slice(0, 4);
      const hits = ranked.filter(({ s }) => s.tour === t.name && s.venue === venue && s.year === year);
      const run = runs.filter(({ r, days }) => r.tour === t.name && r.venue === venue && days.includes(iso));
      if (hits.length + run.length > 1) throw new Error(`tourBoxOffice: ${t.name}, ${d.date}, ${d.venue} matches ${hits.length + run.length} board rows`);
      if (hits.length === 1) {
        const { s, rank } = hits[0];
        nights[iso] = { kind: "night", tickets: s.tickets, grossFull: usdFull(s.revenue), grossShort: shortGross(s.revenue), rank };
      } else if (run.length === 1) {
        runRows.set(run[0], [...(runRows.get(run[0]) ?? []), i]);
      }
    });
    for (const [{ r }, rows] of runRows) {
      if (rows.some((row, k) => k > 0 && row !== rows[k - 1] + 1)) throw new Error(`tourBoxOffice: ${t.name}, the ${r.venue} run's nights are not one block of the table`);
      const days = rows.map((row) => showDateIso(dates[row].date)!);
      const entry: TourNight = { kind: "run", tickets: r.tickets, grossFull: usdFull(r.revenue), grossShort: shortGross(r.revenue), nights: r.shows, dates: days };
      for (const day of days) nights[day] = entry;
    }
    if (Object.keys(nights).length > 0) out[t.name] = nights;
  }
  return out;
}
