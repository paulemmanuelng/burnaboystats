import { apiJson } from "../../../lib/api";
import {
  chartEntryCount,
  numberOnes,
  chartCountryCount,
  numberOneReleases,
  daiDaiChartEntryCount,
  daiDaiNumberOnes,
} from "../../../data/charts";
import { totalAwards, countryCount } from "../../../data/certifications";
import { chartedCountryCount } from "../../../lib/analysis";
import { songs } from "../../../data/songs";
import { monthlyListenersSeries } from "../../../data/trends";
import { spotifyFollowersDisplay, spotifyGlobalRank } from "../../../data/spotify";
import { LISTENERS_READ_ON } from "../../../data/listeners";

export const dynamic = "force-static";

export function GET() {
  return apiJson({
    endpoint: "/stats",
    description:
      // Said "the current figure is not published" until 27 Sep 2026 — true of
      // this endpoint, false of the site: /music/listeners prints a dated read.
      `Headline career totals, plus the dated series of Spotify monthly-listener highs behind the site's trend charts — a point is added only when the all-time peak moves, so the series ends on the day the peak was set, not today. This endpoint carries no current monthly-listener figure; the latest dated reading (${LISTENERS_READ_ON}) is published on /music/listeners.`,
    data: {
      charts: {
        chartEntries: chartEntryCount,
        // Counted as placements: a song at No. 1 in five countries adds five.
        numberOnes,
        numberOneReleases,
        // 69, not 71: chartCountryCount includes Billboard's two worldwide
        // charts, which are not countries. This field is consumed as a country
        // count, so it reports the real one.
        countries: chartedCountryCount,
      },
      certifications: {
        total: totalAwards(),
        countries: countryCount,
      },
      spotify: {
        followers: spotifyFollowersDisplay,
        globalRankByMonthlyListeners: Number(spotifyGlobalRank),
        // Values in millions; the bot appends a point only when the all-time peak
        // moves (kind: peak in scripts/watched-metrics.json), so the series ends
        // on the day the peak was last set, not today.
        monthlyListenersSeries,
      },
      daiDai: {
        chartEntries: daiDaiChartEntryCount,
        // Country charts only — excludes the two global charts.
        countryNumberOnes: daiDaiNumberOnes,
      },
      catalogue: { songPages: songs.length },
    },
  });
}
