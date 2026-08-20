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

export const dynamic = "force-static";

export function GET() {
  return apiJson({
    endpoint: "/stats",
    description:
      "Headline career totals, plus the dated Spotify monthly-listeners series behind the site's trend charts.",
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
        // Values in millions, each point logged on the date it was recorded.
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
