import { describe, it, expect } from "vitest";

import {
  allItems,
  COUNTRIES as CERT_COUNTRIES,
  totalAwards,
  countryCount as certCountryCount,
} from "../app/data/certifications";
import {
  allChartItems,
  chartEntryCount,
  numberOnes,
  chartCountryCount,
} from "../app/data/charts";
import { allNoms, totalWins, totalNominations, ceremonyCount } from "../app/data/awards";
import { countryCount as performedCountryCount } from "../app/data/performedCountries";
import { firstsCount } from "../app/data/firsts";
import { cars, totalValueUsd } from "../app/data/cars";

/**
 * The handoff's VERIFICATION-CHECKLIST, as a test.
 *
 * The checklist's own instruction is to compute each figure from app/data and
 * compare — never to hardcode the expected value to make a check pass. So the
 * left side of every assertion is a fresh reduce over the real array, and the
 * right side is the number the design was drawn against. If the two ever part
 * company, one of them is wrong and this fails loudly rather than a page
 * quietly printing a stale figure.
 *
 * Three rounds of design review caught fabricated totals that were plausible
 * and summed correctly and were still wrong. This is the guard against that
 * happening in the build.
 */

describe("handoff checklist — data integrity", () => {
  it("counts 231 certifications across 26 countries", () => {
    const certs = allItems.reduce((n, item) => n + item.certs.length, 0);
    const countries = new Set(allItems.flatMap((i) => i.certs.map((c) => c.c))).size;

    expect(certs).toBe(231); // + On The Low Platinum in Sweden (GLF cert. 10448)
    expect(countries).toBe(26); // Czechia joins
    // The page-facing helpers must agree with the raw reduce.
    expect(totalAwards()).toBe(certs);
    expect(certCountryCount).toBe(Object.keys(CERT_COUNTRIES).length);
  });

  it("splits into 6 Diamond / 101 Platinum / 93 Gold / 31 Silver", () => {
    // 6 Aug 2026: “Dai Dai” Portugal upgraded Gold → Platinum (AFP week-31 PDF).
    const byLevel = (level: string) =>
      allItems.reduce((n, i) => n + i.certs.filter((c) => c.level === level).length, 0);

    // Diamond is 6, not 7. A 7 means the African Giant FR entry has been
    // changed to Diamond — the repo says Platinum, and the design file that
    // showed 7 was the one carrying the typo.
    expect(byLevel("Diamond")).toBe(6);
    expect(byLevel("Platinum")).toBe(101); // the 101st: On The Low in Sweden (GLF)
    expect(byLevel("Gold")).toBe(93); // + Italy
    expect(byLevel("Silver")).toBe(31);

    const sum = byLevel("Diamond") + byLevel("Platinum") + byLevel("Gold") + byLevel("Silver");
    expect(sum).toBe(231);
  });

  it("counts 280 chart entries across 71 territories, 48 of them at No. 1", () => {
    const entries = allChartItems.reduce((n, r) => n + r.entries.length, 0);
    const territories = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c))).size;
    // Placements, not releases: a release charting at No. 1 in six countries
    // contributes six.
    const ones = allChartItems.reduce(
      (n, r) => n + r.entries.filter((e) => e.peak === 1).length,
      0
    );

    // 4 Aug 2026 Dai Dai sweep — see tests/charts.test.ts for the breakdown.
    expect(entries).toBe(280); // 9 Aug 2026 TurnTable NG sweep (+9, Giza included)
    expect(territories).toBe(71);
    expect(ones).toBe(48); // + 2 Nigerian No. 1 albums

    expect(chartEntryCount).toBe(entries);
    expect(chartCountryCount).toBe(territories);
    expect(numberOnes).toBe(ones);
  });

  it("counts 82 award wins from 240 nominations across 46 bodies", () => {
    const wins = allNoms.filter((n) => n.won).length;

    // 4 Aug 2026 year-by-year pass: +2 wins (Headies 2012 Rookie of the
    // Year, shared with Dammy Krane; AEA USA 2025 International Artist of
    // the Year per AEAUSA's own winners PDF), +24 entries, +2 bodies
    // (Channel O MVA, SA Hip Hop Awards). Details in app/data/awards.ts.
    //
    // 234 -> 236 on 20 Aug 2026: the two 2026 MTV VMA nominations for
    // "Dai Dai" (Best Collaboration, Best Latin), announced 18 August. Wins
    // stay at 82 — the ceremony is 27 September, so both are pending.
    //
    // 236 -> 240 on 26 Aug 2026: four nominations at the 18th Headies,
    // announced that day, ceremony 25 October in Toronto. Wins stay at 82;
    // all four are pending. The published lists group by song and so file
    // "Producer of the Year" for "Bundle by Bundle" under his name — that one
    // belongs to the producer, DK, and is deliberately NOT counted, which is
    // why this is +4 and not +5.
    expect(wins).toBe(82);
    expect(allNoms.length).toBe(236 + 4);
    expect(totalWins).toBe(wins);
    expect(totalNominations).toBe(allNoms.length);
    expect(ceremonyCount).toBe(46);
  });

  it("counts 57 countries performed in and 51 firsts", () => {
    expect(performedCountryCount).toBe(57);
    // 51st: first entry on Billboard's Adult Contemporary chart ("Dai Dai"
    // debuts at No. 14, chart dated 29 Aug 2026). 50th was four albums past
    // 500M Spotify streams.
    expect(firstsCount).toBe(51);
  });

  it("values the current car collection at $16.46M — current only", () => {
    // "Current only" is the operative rule, and it is stricter than the
    // checklist's shorthand "exclude sold": a car is in the headline total
    // only when it carries NO status at all. Excluding just `sold` leaves the
    // three unconfirmed cars in and gives $17.10M.
    const current = cars.filter((c) => !c.status);
    const value = current.reduce((sum, c) => sum + c.valueUsd, 0);

    expect(totalValueUsd).toBe(value);
    expect(`$${(value / 1e6).toFixed(2)}M`).toBe("$16.46M");

    // Both excluded pools are non-empty, so the filter is doing real work.
    expect(cars.filter((c) => c.status === "sold").length).toBeGreaterThan(0);
    expect(cars.filter((c) => c.status === "unconfirmed").length).toBeGreaterThan(0);
  });
});
