/**
 * The mobile nav sheet's contents.
 *
 * From designs/desktop/App States.dc.html, panel G. Three groups by depth —
 * Browse, Deep data, The site — covering 22 of the 27 routes. The five it
 * leaves out are third-level (`/records/tours/*`, `/music/[song]`) and reached
 * from their parent page; `/search` is the field at the top of the sheet.
 *
 * This is a SERVER module. The sheet itself is a client component and takes
 * the finished array as a prop, so none of the data below reaches the browser
 * bundle — only the ~22 label/href/meta strings it produces.
 *
 * Every `meta` is derived. The mockup's own figures (22 updates, 65 live No.1s)
 * were a snapshot for checking against, not values to copy — see the handoff's
 * NUMBERS-AND-STATES.md.
 */

import { totalAwards } from "../data/certifications";
import { chartEntryCount } from "../data/charts";
import { totalWins } from "../data/awards";
import { tours } from "../data/tours";
import { firstsCount } from "../data/firsts";
import { carCount } from "../data/cars";
import { updates } from "../data/updates";
import { albums, eps, compilations } from "../data/albums";
import { liveNumberOnes } from "../data/liveCharts";
import { africaBoards } from "./africaBoards";
import { findings } from "./analysisFindings";
import { API_VERSION, lastUpdated } from "./api";
import { faqs } from "../faq/page";
import { stats as byTheNumbers } from "../records/by-the-numbers/page";
import { JUMP as visualizedCharts } from "./visualizedSections";

export interface NavRow {
  label: string;
  href: string;
  /** Right-hand figure. Empty string renders no count. */
  meta: string;
}

export interface NavGroup {
  name: string;
  items: NavRow[];
}

const releaseCount = albums.length + eps.length + compilations.length;

/** Declared first so the "Records" row can advertise its own length. */
const deepData: NavRow[] = [
  { label: "Official charts", href: "/records/charts", meta: String(chartEntryCount) },
  { label: "Awards", href: "/records/awards", meta: `${totalWins} wins` },
  { label: "Tours & live", href: "/records/tours", meta: `${tours.length} tours` },
  { label: "Firsts", href: "/records/firsts", meta: String(firstsCount) },
  { label: "Africa's biggest", href: "/records/africas-biggest", meta: String(africaBoards.length) },
  { label: "By the numbers", href: "/records/by-the-numbers", meta: String(byTheNumbers.length) },
  { label: "Cars", href: "/records/cars", meta: `${carCount} cars` },
  { label: "Visualized", href: "/records/visualized", meta: `${visualizedCharts.length} charts` },
];

export const navGroups: NavGroup[] = [
  {
    name: "Browse",
    items: [
      { label: "Home", href: "/", meta: "" },
      { label: "Music", href: "/music", meta: `${releaseCount} releases` },
      { label: "Certifications", href: "/certifications", meta: String(totalAwards()) },
      // "Books" is the group's own word for the record pages listed under
      // Deep data, so the figure is that group's length rather than a literal.
      { label: "Records", href: "/records", meta: `${deepData.length} books` },
      { label: "Live charts", href: "/live-charts", meta: `${liveNumberOnes} No. 1s` },
      { label: "Updates", href: "/updates", meta: String(updates.length) },
    ],
  },
  { name: "Deep data", items: deepData },
  {
    name: "The site",
    items: [
      { label: "The Dai Dai story", href: "/dai-dai", meta: "" },
      { label: "Stat cards", href: "/share", meta: "" },
      { label: "About", href: "/about", meta: "" },
      { label: "Analysis", href: "/analysis", meta: String(findings.length) },
      { label: "Methodology", href: "/methodology", meta: "" },
      { label: "API", href: "/api", meta: API_VERSION },
      { label: "FAQ", href: "/faq", meta: String(faqs.length) },
      { label: "Contact", href: "/contact", meta: "" },
    ],
  },
];

/** Every route the sheet links to, for the coverage test. */
export const navRoutes = navGroups.flatMap((g) => g.items.map((i) => i.href));

/**
 * The sheet's search placeholder — "Search 221 certs, 260 entries…".
 * The two figures are the site's headline datasets, derived like the rest.
 */
export const navSearchHint = `${totalAwards()} certs, ${chartEntryCount} entries`;

/** The footer's status line: when the data was last verified. */
export const navUpdated = new Date(lastUpdated).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
