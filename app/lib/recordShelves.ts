import { recordBooks, SHELVES, type RecordBook, type Shelf } from "./recordBooks";
import { routeDay } from "./routeStamps";
import { chartEntryCount } from "../data/charts";
import { boardsHeLeads } from "./africaBoards";
import { stats as byTheNumbers } from "../data/byTheNumbers";
import { JUMP as visualizedCharts } from "./visualizedSections";
import { totalWins } from "../data/awards";
import { firstsCount } from "../data/firsts";
import { timelineEntryCount } from "../data/timeline";
import { onThisDayDays } from "./onThisDay";
import { tours, festivals, concerts, otherShows } from "../data/tours";
import { countryCount as performedCountryCount } from "../data/performedCountries";
import { revenueShows } from "../data/tourRevenue";
import { revenueByCountry } from "./revenueByCountry";
import { carCount } from "../data/cars";
import { plural } from "./plural";

/**
 * The /records hub's shelves (Job 4, fixes 80, 81, 82 and 94): the record
 * books from recordBooks.ts in its order, filed on the four shelves, each
 * card with one figure, its unit and the route's date.
 *
 * Every figure is a count over the data the book's own page renders, and the
 * date is the route's sitemap date (routeStamps.ts), printed "Updated {day}".
 * A route the sitemap cannot date gets no date line rather than an invented
 * one. Server-only, and imported by the hub alone, so nothing here reaches the
 * layout that reads recordBooks for the nav sheet's count.
 */

/** A figure and its unit's two forms: "1 car", never "1 cars". */
type Figure = { n: number; one: string; many: string };

const FIGURES: Record<string, Figure> = {
  "/records/charts": { n: chartEntryCount, one: "chart entry", many: "chart entries" },
  "/records/africas-biggest": { n: boardsHeLeads, one: "board he leads", many: "boards he leads" },
  "/records/by-the-numbers": { n: byTheNumbers.length, one: "quotable figure", many: "quotable figures" },
  "/records/visualized": { n: visualizedCharts.length, one: "chart", many: "charts" },
  "/records/awards": { n: totalWins, one: "win", many: "wins" },
  "/records/firsts": { n: firstsCount, one: "milestone", many: "milestones" },
  "/timeline": { n: timelineEntryCount, one: "entry", many: "entries" },
  "/on-this-day": { n: onThisDayDays.length, one: "date", many: "dates" },
  "/records/tours": { n: tours.length, one: "tour", many: "tours" },
  "/records/tours/map": { n: performedCountryCount, one: "country played", many: "countries played" },
  "/records/tours/revenue": { n: revenueShows.length, one: "show ranked", many: "shows ranked" },
  "/records/tours/revenue/countries": { n: revenueByCountry().countryCount, one: "country", many: "countries" },
  "/records/tours/festivals": { n: festivals.length + concerts.length + otherShows.length, one: "appearance", many: "appearances" },
  "/records/cars": { n: carCount, one: "car", many: "cars" },
};

export interface ShelfBook extends RecordBook {
  figure: number;
  unit: string;
  /** The route's sitemap day ("2026-10-10"); absent when it has none. */
  day?: string;
}

export interface RecordShelf {
  name: Shelf;
  books: ShelfBook[];
}

export function recordShelves(): RecordShelf[] {
  return SHELVES.map((name) => ({
    name,
    books: recordBooks
      .filter((b) => b.shelf === name)
      .map((b) => {
        const f = FIGURES[b.href];
        // A new book must bring its figure: a card without one is a build error.
        if (!f) throw new Error(`recordShelves: no figure for ${b.href}`);
        return { ...b, figure: f.n, unit: plural(f.n, f.one, f.many), day: routeDay(b.href) };
      }),
  }));
}
