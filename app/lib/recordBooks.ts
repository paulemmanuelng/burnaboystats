import { revenueShows } from "../data/tourRevenue";
import { LIVE_CADENCE } from "./liveChartMeta";
import { careerYears } from "../data/timeline";
import { numberWord } from "./homeData";

/**
 * The record books — every page the Career Records hub lists, in its order.
 *
 * One home, because two places counted "books" from two different lists: the
 * hub printed this array's length (14) while the nav sheet's Records row said
 * "8 books" from its own Deep data group. The hub's list is what a reader is
 * shown, so it is the meaning of the word; the nav sheet counts it too.
 */
export interface RecordBook {
  href: string;
  title: string;
  desc: string;
}

export const recordBooks: RecordBook[] = [
  { href: "/records/charts", title: "Official Charts", desc: "Peak positions on every major chart worldwide" },
  { href: "/live-charts", title: "Live Charts", desc: `Where every release is charting right now, ${LIVE_CADENCE}` },
  { href: "/records/awards", title: "Awards", desc: "Every win & nomination to date" },
  { href: "/records/firsts", title: "Firsts", desc: "Every record broken & first achieved" },
  { href: "/timeline", title: "Career Timeline", desc: `${numberWord(careerYears)} years, era by era — every milestone dated` },
  { href: "/afrobeats", title: "The Afrobeats Board", desc: "Burna Boy and the genre's biggest, counted by one rule" },
  { href: "/records/africas-biggest", title: "Africa's Biggest", desc: "Most-streamed African artists, year by year" },
  { href: "/records/tours", title: "Tours", desc: "Tour runs, dates & box-office grosses" },
  { href: "/records/tours/revenue", title: "Highest Revenue Per Show", desc: `The ${revenueShows.length} biggest single-show grosses by an African artist` },
  { href: "/records/by-the-numbers", title: "By the Numbers", desc: "His whole career in one scannable stat sheet" },
  { href: "/records/visualized", title: "Visualized", desc: "The charts — grosses, certifications & awards at a glance" },
  { href: "/records/tours/map", title: "Where He's Performed", desc: "An interactive map of every country he's taken the stage" },
  { href: "/records/tours/festivals", title: "Festivals", desc: "Afro Nation and every big-stage festival billing" },
  { href: "/records/cars", title: "Car Collection", desc: "Every confirmed vehicle in the garage" },
];