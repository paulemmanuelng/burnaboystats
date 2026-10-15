import { careerYears } from "../data/timeline";
import { numberWord } from "./homeData";
import { statBoxes } from "../data/africasBiggest";
import { count } from "./plural";

/**
 * The record books — every page the Career Records hub lists, in its order.
 *
 * One home, because two places counted "books" from two different lists: the
 * hub printed this array's length (14) while the nav sheet's Records row said
 * "8 books" from its own Deep data group. The hub's list is what a reader is
 * shown, so it is the meaning of the word; the nav sheet counts it too.
 *
 * Since 14 Oct 2026 (Job 4, fix 80) the hub files them on four shelves, in
 * this order, and Live Charts and The Afrobeats Board are no longer books:
 * both are masthead links. The titles are unchanged.
 */
export const SHELVES = ["Charts & streaming", "Awards & firsts", "On the road", "Off stage"] as const;
export type Shelf = (typeof SHELVES)[number];

export interface RecordBook {
  href: string;
  title: string;
  desc: string;
  shelf: Shelf;
}

export const recordBooks: RecordBook[] = [
  { href: "/records/charts", title: "Official Charts", desc: "Peak positions on every major chart worldwide", shelf: "Charts & streaming" },
  // The line is the board count, derived (fix 94); the card's figure is the boards he leads.
  { href: "/records/africas-biggest", title: "Africa's Biggest", desc: count(statBoxes.length, "leaderboard", "leaderboards"), shelf: "Charts & streaming" },
  { href: "/records/by-the-numbers", title: "By the Numbers", desc: "His whole career in one scannable stat sheet", shelf: "Charts & streaming" },
  { href: "/records/visualized", title: "Visualized", desc: "The charts — grosses, certifications & awards at a glance", shelf: "Charts & streaming" },
  { href: "/records/awards", title: "Awards", desc: "Every win & nomination to date", shelf: "Awards & firsts" },
  { href: "/records/firsts", title: "Firsts", desc: "Every record broken & first achieved", shelf: "Awards & firsts" },
  { href: "/timeline", title: "Career Timeline", desc: `${numberWord(careerYears)} years, era by era — every milestone dated`, shelf: "Awards & firsts" },
  // The card's figure is the count of dates, so the line does not repeat it (Paul, 15 Oct 2026; Job 4 C-8).
  { href: "/on-this-day", title: "On This Day", desc: "Dates in the calendar, each with a milestone on it", shelf: "Awards & firsts" },
  { href: "/records/tours", title: "Tours", desc: "Tour runs, dates & box-office grosses", shelf: "On the road" },
  { href: "/records/tours/map", title: "Where He's Performed", desc: "An interactive map of every country he's taken the stage", shelf: "On the road" },
  // Likewise: the figure is the shows ranked (C-8).
  { href: "/records/tours/revenue", title: "Highest-Grossing Shows", desc: "Every verified single-show gross by an African artist", shelf: "On the road" },
  { href: "/records/tours/revenue/countries", title: "Highest-Grossing Artists by Country", desc: "Who leads every country and continent for reported box office", shelf: "On the road" },
  { href: "/records/tours/festivals", title: "Festivals", desc: "Afro Nation and every big-stage festival billing", shelf: "On the road" },
  { href: "/records/cars", title: "Car Collection", desc: "Every confirmed vehicle in the garage", shelf: "Off stage" },
];
