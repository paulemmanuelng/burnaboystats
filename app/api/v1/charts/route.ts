import { apiJson } from "../../../lib/api";
import {
  allChartItems,
  CHART_COUNTRIES,
  chartEntryCount,
  chartCountryCount,
  numberOnes,
} from "../../../data/charts";
import { chartedCountryCount } from "../../../lib/analysis";

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
    // The caveat travels with the figure it qualifies, or it may as well not
    // exist. Several runs are not the simple thing a bare number implies: some
    // are non-consecutive, Colombia's is a floor, Greece's counts published
    // EDITIONS after one covered four calendar weeks, and France's is counted
    // from consecutive SNEP issues because SNEP prints no weeks column at all.
    // Held back, a consumer reads every one of those as a body-stated run —
    // which is exactly what the description below used to promise for all of
    // them, and no longer does.
    ...(e.note ? { note: e.note } : {}),
  })),
}));

export function GET() {
  return apiJson({
    endpoint: "/charts",
    description:
      "Official chart entries by release. Peaks are read from each chart body's own run. Longevity is too, except where a `note` on the entry says otherwise — read it before treating a `weeks` value as body-published. Genre, component and airplay-only charts are excluded by design.",
    // 278 chart entries across 38 releases — `countOf` names the unit, because
    // `count` alone read as "38 releases" to anyone who assumed it was the
    // length of `data.releases`. The release count is published below as
    // `chartedReleases`, so both figures are available without guessing.
    count: chartEntryCount,
    countOf: "chart entries",
    data: {
      totals: {
        chartEntries: chartEntryCount,
        numberOnes,
        // `countries` used to carry chartCountryCount here while /stats
        // carried chartedCountryCount under the identical key — one field
        // name, two values, in a dataset people join. Billboard's Global 200
        // and Global 200 Excl. US are chart territories, not countries, so
        // they get their own key and `countries` means countries on both
        // endpoints.
        countries: chartedCountryCount,
        territories: chartCountryCount,
        chartedReleases: allChartItems.length,
      },
      releases,
    },
  });
}
