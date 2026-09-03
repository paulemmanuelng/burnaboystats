import { describe, it, expect } from "vitest";
import {
  countryNumberOnes,
  countryNumberOneReleases,
  daiDaiCountryNumberOnes,
  daiDaiNumberOneShare,
  chartedCountryCount,
  marketProfile,
  marketsByVolume,
  certsByCountry,
  diamondCerts,
  diamondCountries,
  isGlobalChart,
  EUROPE,
  NON_EUROPE,
  numberOneCountries,
  numberOneCountriesInEurope,
  numberOneCountriesOutsideEurope,
  numberOneCountryCount,
} from "../app/lib/analysis";
import { CHART_COUNTRIES, chartCountryCount } from "../app/data/charts";

// /analysis makes ARGUMENTS about the data, not just restatements of it. New
// data can falsify an argument — a first US top 10 would make "not one top 10"
// wrong. These guards fail loudly when that happens, so the prose gets rewritten
// instead of quietly lying. A failure here is a content task, not a bug.

describe("analysis derivations", () => {
  it("excludes the Billboard Global charts from country tallies", () => {
    expect(isGlobalChart("GLB")).toBe(true);
    expect(isGlobalChart("GLBX")).toBe(true);
    expect(isGlobalChart("UK")).toBe(false);
    // The site's headline chartCountryCount counts the globals; this one must
    // not — so it always sits below the headline figure. Compared against that
    // figure rather than a numeral: the literal was 71, went stale when two
    // territories were withdrawn, and a stale bound stops testing anything.
    expect(chartedCountryCount).toBeLessThan(chartCountryCount);
  });

  it("computes a coherent Dai Dai share", () => {
    expect(daiDaiCountryNumberOnes).toBeGreaterThan(0);
    expect(daiDaiCountryNumberOnes).toBeLessThanOrEqual(countryNumberOnes);
    expect(daiDaiNumberOneShare).toBe(
      Math.round((daiDaiCountryNumberOnes / countryNumberOnes) * 100)
    );
  });
});

describe("finding 1 — one song holds half the No. 1s", () => {
  it("Dai Dai still accounts for at least half of all country No. 1s", () => {
    expect(
      daiDaiNumberOneShare,
      "Dai Dai's share has dropped below half — rewrite the 'one song holds half the record book' finding"
    ).toBeGreaterThanOrEqual(50);
  });
});

describe("finding 2 — bigger in Britain than America", () => {
  const uk = marketProfile("UK");
  const us = marketProfile("US");

  it("the UK still leads the US on entries, top 10s and No. 1s", () => {
    expect(uk.entries).toBeGreaterThan(us.entries);
    expect(uk.top10s).toBeGreaterThan(us.top10s);
    expect(uk.numberOnes).toBeGreaterThan(us.numberOnes);
  });

  it("he still has no US top 10 on the Hot 100 or Billboard 200", () => {
    expect(
      us.top10s,
      "A US top 10 has landed — the 'not one top 10' claim on /analysis is now false"
    ).toBe(0);
  });

  it("the UK is still his highest-volume market", () => {
    expect(marketsByVolume[0]?.code).toBe("UK");
  });
});

describe("finding 3 — one country awards every Diamond", () => {
  it("every Diamond certification still comes from a single country", () => {
    expect(diamondCerts.length).toBeGreaterThan(0);
    expect(
      diamondCountries,
      `Diamonds now span ${diamondCountries.join(", ")} — the 'one country crowns him' finding needs rewriting`
    ).toHaveLength(1);
  });

  it("the most-certifying country is not the Diamond country", () => {
    // The whole point of the finding is that volume and depth diverge.
    expect(certsByCountry[0].code).not.toBe(diamondCountries[0]);
  });
});

describe("finding 4 — wide reach, narrow dominance", () => {
  it("far more countries charted than releases that ever topped one", () => {
    expect(chartedCountryCount).toBeGreaterThan(countryNumberOneReleases * 2);
  });
});

// The geography finding on /analysis used to type its own split: "of the 31
// countries where a release has topped the chart, 18 are in Europe and 13 are
// not". Poland's No. 1 on 29 Aug 2026 made that 32 and 19, and the sentence did
// not move, because a hand-typed split has nothing to disagree with. It is
// derived now — and these tests make sure the derivation cannot go quietly
// wrong the other way, by letting a new country fall outside both sets.
describe("the continental split covers every chart country", () => {
  const codes = Object.keys(CHART_COUNTRIES).filter((c) => !isGlobalChart(c));

  it("classifies every code exactly once", () => {
    const unclassified = codes.filter((c) => !EUROPE.has(c) && !NON_EUROPE.has(c));
    const both = codes.filter((c) => EUROPE.has(c) && NON_EUROPE.has(c));
    expect(
      unclassified,
      "a new chart country has to be put in EUROPE or NON_EUROPE in app/lib/analysis.ts, or the /analysis split silently undercounts",
    ).toEqual([]);
    expect(both, "a code cannot be in both sets").toEqual([]);
  });

  it("splits the No. 1 countries without losing any", () => {
    expect(numberOneCountriesInEurope.length + numberOneCountriesOutsideEurope.length).toBe(
      numberOneCountries.length,
    );
    expect(numberOneCountries.length).toBe(numberOneCountryCount);
  });

  it("puts Poland in Europe, which is the one that started this", () => {
    expect(numberOneCountries).toContain("PL");
    expect(numberOneCountriesInEurope).toContain("PL");
  });
});
