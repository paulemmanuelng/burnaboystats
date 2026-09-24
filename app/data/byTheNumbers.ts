// The headline figures on /records/by-the-numbers, read by the page and by the
// nav sheet's "By the numbers" row (lib/navGroups.ts), which prints how many
// there are.
//
// They lived in the page until 23 Sep 2026. navGroups imported them from there,
// and the root layout imports navGroups, so the page's CSS
// (byTheNumbers.module.css, and MobileDeepPage's, TrendDelta's, KeepExploring's
// and BreadcrumbBar's) was linked, render-blocking, on every page of the site.
// Here, with no CSS imports, the count costs nothing but the data.
// tests/rootLayoutCss.test.ts fails if the layout reaches a page module again.
import { totalAwards, countryCount } from "./certifications";
import { totalWins, totalNominations, ceremonyCount } from "./awards";
import { numberOnes, allChartItems } from "./charts";
// NOT charts.chartCountryCount (69, every territory he has ever charted in) and
// not charts.numberOneCountryCount (32, which counts the two Billboard global
// charts as territories). charts.ts forbids the first pairing by name: putting a
// No. 1s count beside chartCountryCount claims he topped the chart in every
// territory he has appeared in. The home page was fixed for exactly this and
// renders 30; this tile, one click away, still said 69.
import { numberOneCountryCount } from "../lib/analysis";
import {
  countryCount as performedCountryCount,
  regionCount,
} from "./performedCountries";
import { albums } from "./albums";
import { spotifyGlobalRank } from "./spotify";
import { spotifyTotalStreams, youtubeTotalViews, youtubeTotalViewsAsOf } from "./streamingTotals";
import { BURNA_YT_AUDIENCE, BURNA_YT_AUDIENCE_SET_ON_LONG, BURNA_PEAK_LISTENERS, BURNA_HOT_100_ENTRIES } from "./africasBiggest";

// The two worldwide charts sit in the same table as the national ones, so the
// national count is the total minus whatever peaked at No. 1 on a global chart.
const GLOBAL_CODES = new Set(["GLB", "GLBX"]);
const globalOnes = allChartItems.reduce(
  (n, r) => n + r.entries.filter((e) => e.peak === 1 && GLOBAL_CODES.has(e.c)).length,
  0
);
const nationalOnes = numberOnes - globalOnes;

// Every other figure on this page is either bot-refreshed or derived from a
// dated dataset, and the page's own "Updated {asOf}" stamp covers them. The
// all-time YouTube total is neither: it is counted by hand at
// youtube.com/@BurnaBoy/about because no automated source measures its scope
// (kworb sees 187 of his 346 videos — see data/streamingTotals.ts), and the
// stamp built to date it, `youtubeTotalViewsAsOf`, was referenced by NOTHING.
// So the one headline figure on the site that cannot refresh itself was the one
// published with no date on it, while its date sat in the repo as dead code.
// Printed here, a hand-maintained number carries the day it was counted, and the
// constant is no longer something a later edit can quietly leave behind.
const ytCountedOn = new Date(`${youtubeTotalViewsAsOf}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

// Each stat is a standalone, quotable fact linking to the page that proves it.
// `big` marks the four the page is built around — larger type and a wash.
export const stats: {
  num: string;
  label: string;
  sub: string;
  href: string;
  /**
   * An optional movement indicator. It carries its own WINDOW, and it has to:
   * the shape here used to be a bare `delta?: number` rendered with a hardcoded
   * `label="this month"`, which is a label no measurement can contradict. That
   * is exactly how the hero on /records/africas-biggest came to print
   * "+26.9% this month" over a 40-day window that had closed 25 days earlier.
   * No stat sets this today, so nothing on the page moves — but the next one
   * that does now cannot publish a percentage without saying what it measured.
   */
  delta?: { pct: number; window: string };
  big?: boolean;
}[] = [
  { num: `${totalAwards()}`, label: "Certifications", sub: `across ${countryCount} countries — most of any African artist`, href: "/certifications", big: true },
  { num: `${totalWins}`, label: "Award wins", sub: `from ${totalNominations} nominations across ${ceremonyCount} bodies — a 2021 Grammy, plus BET, MOBO, Headies & AFRIMA`, href: "/records/awards" },
  { num: `${numberOnes}`, label: "No. 1 chart placements", sub: `${nationalOnes} on national charts, plus both Billboard global charts — in ${numberOneCountryCount} countries`, href: "/records/charts" },
  { num: "$30.46M", label: "Highest-grossing African tour", sub: "the I Told Them… Tour — a world record for an African act", href: "/records/tours", big: true },
  { num: "$6.15M", label: "Biggest concert by an African artist", sub: "London Stadium, June 2024 — 58,973 fans", href: "/records/tours" },
  { num: `${BURNA_HOT_100_ENTRIES}`, label: "Billboard Hot 100 entries", sub: "the most by any African artist, six years running", href: "/records/charts" },
  { num: BURNA_PEAK_LISTENERS, label: "Spotify monthly listeners, at peak", sub: "the first African artist ever to reach 60 million", href: "/records/africas-biggest", big: true },
  { num: spotifyTotalStreams, label: "Spotify streams, all-time", sub: "every song, lead and featured credits combined", href: "/music" },
  { num: youtubeTotalViews, label: "YouTube views, all-time", sub: `every video on his YouTube channel — counted by hand on ${ytCountedOn}`, href: "/music" },
  // YouTube figure is kept in sync with the YouTube Music leaderboard on data/africasBiggest.ts.
  { num: BURNA_YT_AUDIENCE, label: "YouTube Music monthly audience, at peak", sub: `first African artist ever past 900 million — set ${BURNA_YT_AUDIENCE_SET_ON_LONG}`, href: "/records/africas-biggest" },
  { num: `No. ${spotifyGlobalRank}`, label: "Global rank by Spotify listeners", sub: "where he currently sits among every artist worldwide", href: "/records/africas-biggest" },
  { num: "2B+", label: "UK streams", sub: "the first African artist to pass two billion", href: "/records/firsts" },
  { num: `${performedCountryCount}`, label: "Countries performed in", sub: `live shows across ${regionCount} regions, on every continent but Antarctica`, href: "/records/tours/map" },
  { num: `${albums.length}`, label: "Studio albums", sub: "from L.I.F.E (2013) to No Sign of Weakness (2025)", href: "/music" },
  { num: "1st", label: "African artist to headline a World Cup opening", sub: "the 2026 FIFA World Cup, performing “Dai Dai” with Shakira", href: "/records/firsts", big: true },
];
