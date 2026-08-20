import { liveCharts } from "../data/liveCharts";
import { totalAwards, countryCount } from "../data/certifications";
import { chartEntryCount, chartCountryCount, numberOnes } from "../data/charts";
import { totalWins, ceremonyCount } from "../data/awards";
import { revenueShows } from "../data/tourRevenue";
import { tours, festivals, concerts, otherShows } from "../data/tours";
import { countryCount as performedCountryCount } from "../data/performedCountries";
import { totalValueFormatted } from "../data/cars";
import { firstsCount } from "../data/firsts";
import { statBoxes } from "../data/africasBiggest";
import { albums } from "../data/albums";
import { songs } from "../data/songs";
import { updates } from "../data/updates";
import { findings } from "./analysisFindings";

/**
 * The one-line figure each search result carries on its right.
 *
 * It lives here rather than in searchIndex.ts on purpose: that file is imported
 * by the client-side palette and is deliberately free of data imports so the
 * whole dataset never ships to the browser. This module is server-only — the
 * /search page builds the map and passes it down, so the numbers stay derived
 * without dragging the data into the bundle.
 *
 * A path with no entry simply shows nothing; not every page has a headline
 * number worth quoting. Pages whose count lives inside their own page file
 * (the FAQ list, the stat-card set, the visualised chart list) are left blank
 * on purpose — repeating those numbers here would create a second source of
 * truth that drifts the moment the page changes.
 */
export const searchStats: Record<string, string> = {
  "/music": `${albums.length} albums`,
  "/certifications": String(totalAwards()),
  "/records/charts": `${chartEntryCount} entries`,
  // NOT `numberOnes` — that is the official-chart figure. This row is the live
  // platform board, and the nav drawer beside it already shows the live count.
  "/live-charts": `${liveCharts.length} live`,
  "/records/firsts": String(firstsCount),
  "/records/awards": `${totalWins} wins`,
  "/records/tours": tours.find((t) => t.record)?.gross ?? "",
  "/records/tours/map": `${performedCountryCount} countries`,
  "/records/tours/revenue": `${revenueShows.length} shows`,
  "/records/tours/festivals": String(festivals.length + concerts.length + otherShows.length),
  "/records/africas-biggest": `${statBoxes.length} boards`,
  "/records/cars": totalValueFormatted,
  "/analysis": `${findings.length} findings`,
  "/api": "CC BY 4.0",
  "/updates": `${updates.length} entries`,
  "/about": `${countryCount} countries`,
  "/methodology": `${ceremonyCount} bodies`,
  "/records/charts#territories": `${chartCountryCount} territories`,
  // Per-song rows quote Spotify streams where the bot has a verified figure.
  ...Object.fromEntries(
    songs.map((s) => [`/music/${s.slug}`, s.spotifyStreams ?? ""])
  ),
};
