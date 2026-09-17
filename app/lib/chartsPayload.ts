import { envelopeBody } from "./api";
import {
  allChartItems,
  CHART_COUNTRIES,
  chartEntryCount,
  chartCountryCount,
  numberOnes,
} from "../data/charts";
import { chartedCountryCount } from "./analysis";

// The /api/v1/charts payload, built here rather than in the route file so the
// docs page can print a SLICE OF THE REAL THING: its hand-written sample had
// drifted from the envelope (no description, no licence url, no source,
// methodology or docs, no chartedReleases). A route file cannot export a
// helper — Next type-checks route.ts exports against a fixed set — so the
// builder lives here and the route calls it.
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

export const chartsEnvelope = () => ({
  endpoint: "/charts" as const,
  description:
    "Official chart entries by release. Peaks are read from each chart body's own run. Longevity is too, except where a `note` on the entry says otherwise — read it before treating a `weeks` value as body-published. Genre, component and airplay-only charts are excluded by design.",
  // 276 chart entries across 38 releases — `countOf` names the unit, because
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

/** The full object the endpoint serves. */
export const chartsPayload = () => envelopeBody(chartsEnvelope());

/** The same object, cut to one release and its first three entries — what the
 *  docs page prints. Every key the endpoint serves is here, and only those. */
export function chartsSample() {
  const full = chartsPayload();
  const pick = full.data.releases.find((r) => r.title === "Dai Dai") ?? full.data.releases[0];
  return { ...full, data: { ...full.data, releases: [{ ...pick, entries: pick.entries.slice(0, 3) }] } };
}
