import { apiJson } from "../../../lib/api";
import {
  allChartItems,
  CHART_COUNTRIES,
  chartEntryCount,
  chartCountryCount,
  numberOnes,
} from "../../../data/charts";

export const dynamic = "force-static";

// Country codes are expanded into names + the chart body that owns the chart,
// so a consumer never has to carry their own lookup table (and so the source of
// each peak travels with the number).
const releases = allChartItems.map((r) => ({
  title: r.title,
  credit: r.credit ?? "Burna Boy",
  year: r.year,
  entries: r.entries.map((e) => ({
    countryCode: e.c,
    country: CHART_COUNTRIES[e.c]?.name ?? e.c,
    chart: CHART_COUNTRIES[e.c]?.body ?? null,
    peak: e.peak,
    // Longevity travels with the peak, because a peak alone cannot tell a
    // consumer whether a No. 1 lasted a week or ten. Spread conditionally so
    // the shape stays stable: an entry we have not researched omits the keys
    // rather than publishing a null that reads like a measured zero.
    ...(e.weeksAtPeak !== undefined ? { weeksAtPeak: e.weeksAtPeak } : {}),
    ...(e.weeks !== undefined ? { weeks: e.weeks } : {}),
  })),
}));

export function GET() {
  return apiJson({
    endpoint: "/charts",
    description:
      "Official chart entries by release. Peaks are read from each chart body's own run. Genre, component and airplay-only charts are excluded by design.",
    count: chartEntryCount,
    data: {
      totals: {
        chartEntries: chartEntryCount,
        numberOnes,
        countries: chartCountryCount,
        chartedReleases: allChartItems.length,
      },
      releases,
    },
  });
}
