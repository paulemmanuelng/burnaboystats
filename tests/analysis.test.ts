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
} from "../app/lib/analysis";

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
    // not — so it always sits below the headline figure (71 after the Aug 2026
    // Dai Dai sweep added 11 territories).
    expect(chartedCountryCount).toBeLessThan(71);
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
