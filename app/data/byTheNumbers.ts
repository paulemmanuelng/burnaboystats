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
import { totalAwards, countryCount, CERTS_VERIFIED_ON } from "./certifications";
import { totalWins, totalNominations, ceremonyCount, honours, AWARDS_EDITED_ON } from "./awards";
import { numberOnes, allChartItems, BURNA_LAST_CHART_SWEEP } from "./charts";
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
import { spotifyGlobalRank, SPOTIFY_RANK_READ_ON } from "./spotify";
import { spotifyTotalStreams, SPOTIFY_STREAMS_PUBLISHED_ON, youtubeTotalViews, youtubeTotalViewsAsOf } from "./streamingTotals";
import {
  BURNA_YT_AUDIENCE,
  BURNA_YT_AUDIENCE_SET_ON,
  BURNA_YT_AUDIENCE_SET_ON_LONG,
  BURNA_PEAK_LISTENERS,
  BURNA_PEAK_LISTENERS_SET_ON,
  BURNA_HOT_100_ENTRIES,
  BURNA_HOT_100_ENTRIES_READ_ON,
} from "./africasBiggest";
import { TOURS_EDITED_ON } from "./tours";
import { WORLD_CUP_OPENING_ON } from "./liveMoments";
import { REVENUE_READ_ON } from "../lib/revenueSource";
import type { ProvDate } from "../lib/provenance";

// The two worldwide charts sit in the same table as the national ones, so the
// national count is the total minus whatever peaked at No. 1 on a global chart.
const GLOBAL_CODES = new Set(["GLB", "GLBX"]);
const globalOnes = allChartItems.reduce(
  (n, r) => n + r.entries.filter((e) => e.peak === 1 && GLOBAL_CODES.has(e.c)).length,
  0
);
const nationalOnes = numberOnes - globalOnes;

// Every figure carries the date behind it (design review 8 Oct 2026, fix 23),
// read off the constant that dates it — never typed here. The all-time YouTube
// total is the case that started it: it is counted by hand at
// youtube.com/@BurnaBoy/about because no automated source measures its scope
// (kworb sees 187 of his 346 videos — see data/streamingTotals.ts), and the
// stamp built to date it, `youtubeTotalViewsAsOf`, was once referenced by
// NOTHING, so the one headline figure that cannot refresh itself went out
// undated. It printed the day in its subtitle until fix 23; the day is now its
// date line, like every other figure's.

/** The UK 2-billion plaque's night: the honour whose note names the two
 *  billion, read off data/awards.ts, never typed. */
const ukTwoBillion = honours.find((h) => h.title === "BRIT Billion Award" && /\b2 billion\b/.test(h.note ?? ""));
if (!ukTwoBillion?.date) throw new Error("byTheNumbers: the BRIT 2-billion award has no dated honour in data/awards.ts");

/** The newest studio album's release day: the end of the run the tile counts. */
const newestAlbumOn = albums.reduce((d, a) => (a.released && a.released > d ? a.released : d), "");
if (!newestAlbumOn) throw new Error("byTheNumbers: no studio album has a release day in data/albums.ts");

/**
 * How a figure is kept current (fix 23), which fixes the word its date takes
 * (fix 10): `daily` is bot-written and "Read"; `hand` is re-read or edited by
 * hand and takes "Verified", "Checked", "Read" or "Updated"; `asOf` is a month
 * on file, "As of"; `fixed` is a historical fact, "Set" on the day it happened.
 */
export type Freshness = "daily" | "hand" | "asOf" | "fixed";

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
  freshness: Freshness;
  /** The constant behind the figure, with its label (fix 23). */
  date: ProvDate;
}[] = [
  { num: `${totalAwards()}`, label: "Certifications", sub: `across ${countryCount} countries — most of any African artist`, href: "/certifications", big: true, freshness: "hand", date: { label: "Verified", day: CERTS_VERIFIED_ON } },
  { num: `${totalWins}`, label: "Award wins", sub: `from ${totalNominations} nominations across ${ceremonyCount} bodies — a 2021 Grammy, plus BET, MOBO, Headies & AFRIMA`, href: "/records/awards", freshness: "hand", date: { label: "Updated", day: AWARDS_EDITED_ON } },
  { num: `${numberOnes}`, label: "No. 1 chart placements", sub: `${nationalOnes} on national charts, plus both Billboard global charts — in ${numberOneCountryCount} countries`, href: "/records/charts", freshness: "hand", date: { label: "Checked", day: BURNA_LAST_CHART_SWEEP } },
  { num: "$30.46M", label: "Highest-grossing African tour", sub: "the I Told Them… Tour — a world record for an African act", href: "/records/tours", big: true, freshness: "hand", date: { label: "Read", day: REVENUE_READ_ON } },
  { num: "$6.15M", label: "Biggest concert by an African artist", sub: "London Stadium, June 2024 — 58,973 fans", href: "/records/tours", freshness: "hand", date: { label: "Read", day: REVENUE_READ_ON } },
  { num: `${BURNA_HOT_100_ENTRIES}`, label: "Billboard Hot 100 entries", sub: "the most by any African artist, and on the chart six years running", href: "/records/firsts", freshness: "hand", date: { label: "Read", day: BURNA_HOT_100_ENTRIES_READ_ON } },
  { num: BURNA_PEAK_LISTENERS, label: "Spotify monthly listeners, at peak", sub: "the first African artist ever to reach 60 million", href: "/records/africas-biggest", big: true, freshness: "fixed", date: { label: "Set", day: BURNA_PEAK_LISTENERS_SET_ON } },
  { num: spotifyTotalStreams, label: "Spotify streams, all-time", sub: "every song, lead and featured credits combined", href: "/music", freshness: "daily", date: { label: "Read", day: SPOTIFY_STREAMS_PUBLISHED_ON } },
  { num: youtubeTotalViews, label: "YouTube views, all-time", sub: "every video on his YouTube channel", href: "/records/firsts", freshness: "hand", date: { label: "Read", day: youtubeTotalViewsAsOf } },
  // One constant with the YouTube audience board on data/africasBiggest.ts, and
  // one name: that board and its source ("YouTube for Artists") say YouTube,
  // and this tile and the first said "YouTube Music" until 5 Oct 2026 (records-09).
  { num: BURNA_YT_AUDIENCE, label: "YouTube monthly audience, at peak", sub: `first African artist ever past 900 million — set ${BURNA_YT_AUDIENCE_SET_ON_LONG}`, href: "/records/africas-biggest", freshness: "fixed", date: { label: "Set", day: BURNA_YT_AUDIENCE_SET_ON } },
  { num: `No. ${spotifyGlobalRank}`, label: "Global rank by Spotify listeners", sub: "where he sits among every artist worldwide", href: "/records/africas-biggest", freshness: "daily", date: { label: "Read", day: SPOTIFY_RANK_READ_ON } },
  { num: "2B+", label: "UK streams", sub: "the first African artist to pass two billion", href: "/records/firsts", freshness: "fixed", date: { label: "Set", day: ukTwoBillion.date } },
  { num: `${performedCountryCount}`, label: "Countries performed in", sub: `live shows across ${regionCount} regions, on every continent but Antarctica`, href: "/records/tours/map", freshness: "hand", date: { label: "Updated", day: TOURS_EDITED_ON } },
  { num: `${albums.length}`, label: "Studio albums", sub: "from L.I.F.E (2013) to No Sign of Weakness (2025)", href: "/music", freshness: "fixed", date: { label: "Set", day: newestAlbumOn } },
  { num: "1st", label: "African artist to headline a World Cup opening", sub: "the 2026 FIFA World Cup, performing “Dai Dai” with Shakira", href: "/records/firsts", big: true, freshness: "fixed", date: { label: "Set", day: WORLD_CUP_OPENING_ON } },
];
