// Derivations behind the /analysis page.
//
// Every claim on that page is an argument ABOUT the data, which means it can be
// falsified by new data — if Burna Boy lands a US top 10, "no US top 10" stops
// being true. So the figures are computed here rather than typed into the page,
// and tests/analysis.test.ts asserts the shape each claim depends on. When a
// guard fails, the prose needs rewriting, not the test.

import { allChartItems, CHART_COUNTRIES } from "../data/charts";
import { allItems, COUNTRIES, tierOf } from "../data/certifications";

/** The two Billboard Global charts aren't a country — excluded from country tallies. */
export const isGlobalChart = (code: string) => code === "GLB" || code === "GLBX";

/** Career No. 1 placements on country charts only (the site's headline 37 includes the globals). */
export const countryNumberOnes = allChartItems.reduce(
  (n, r) => n + r.entries.filter((e) => e.peak === 1 && !isGlobalChart(e.c)).length,
  0
);

/** Distinct releases that have topped at least one country chart. */
export const countryNumberOneReleases = allChartItems.filter((r) =>
  r.entries.some((e) => e.peak === 1 && !isGlobalChart(e.c))
).length;

export const daiDaiCountryNumberOnes = (() => {
  const dd = allChartItems.find((r) => r.title === "Dai Dai");
  return dd ? dd.entries.filter((e) => e.peak === 1 && !isGlobalChart(e.c)).length : 0;
})();

/** Dai Dai's share of every country No. 1 in the career, as a whole percentage. */
export const daiDaiNumberOneShare = countryNumberOnes
  ? Math.round((daiDaiCountryNumberOnes / countryNumberOnes) * 100)
  : 0;

/**
 * Countries whose national chart he has entered. Deliberately excludes the two
 * Billboard Global charts, which the site's headline `chartCountryCount`
 * includes — this page compares markets, so a worldwide chart isn't one.
 */
export const chartedCountryCount = new Set(
  allChartItems.flatMap((r) => r.entries.map((e) => e.c)).filter((c) => !isGlobalChart(c))
).size;

export interface MarketProfile {
  code: string;
  country: string;
  chart: string | null;
  entries: number;
  top10s: number;
  numberOnes: number;
  bestPeak: number;
  bestTitle: string;
}

/** How a single market has treated him: volume, top-10s, No. 1s and the best peak. */
export function marketProfile(code: string): MarketProfile {
  const hits = allChartItems.flatMap((r) =>
    r.entries.filter((e) => e.c === code).map((e) => ({ title: r.title, peak: e.peak }))
  );
  const best = hits.reduce(
    (acc, h) => (h.peak < acc.peak ? h : acc),
    { title: "—", peak: Number.POSITIVE_INFINITY }
  );
  return {
    code,
    country: CHART_COUNTRIES[code]?.name ?? code,
    chart: CHART_COUNTRIES[code]?.body ?? null,
    entries: hits.length,
    top10s: hits.filter((h) => h.peak <= 10).length,
    numberOnes: hits.filter((h) => h.peak === 1).length,
    bestPeak: Number.isFinite(best.peak) ? best.peak : 0,
    bestTitle: best.title,
  };
}

/** Markets ranked by how many chart entries he has there (globals excluded). */
export const marketsByVolume: MarketProfile[] = Object.keys(CHART_COUNTRIES)
  .filter((c) => !isGlobalChart(c))
  .map(marketProfile)
  .filter((m) => m.entries > 0)
  .sort((a, b) => b.entries - a.entries || a.bestPeak - b.bestPeak);

/** Certification counts per country, most first. */
export const certsByCountry = (() => {
  const tally: Record<string, number> = {};
  for (const item of allItems) {
    for (const c of item.certs) tally[c.c] = (tally[c.c] ?? 0) + 1;
  }
  return Object.entries(tally)
    .map(([code, count]) => ({
      code,
      country: COUNTRIES[code]?.name ?? code,
      body: COUNTRIES[code]?.body ?? null,
      count,
    }))
    .sort((a, b) => b.count - a.count);
})();

/** Every Diamond-tier certification, with the release that earned it. */
export const diamondCerts = allItems.flatMap((item) =>
  item.certs
    .filter((c) => tierOf(c.level) === "diamond")
    .map((c) => ({
      title: item.title,
      code: c.c,
      country: COUNTRIES[c.c]?.name ?? c.c,
      body: c.body ?? COUNTRIES[c.c]?.body ?? null,
    }))
);

/** Distinct countries that have ever awarded him a Diamond certification. */
export const diamondCountries = [...new Set(diamondCerts.map((d) => d.code))];
