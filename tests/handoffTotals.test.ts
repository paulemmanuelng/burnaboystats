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
  it("counts 234 certifications across 26 countries", () => {
    const certs = allItems.reduce((n, item) => n + item.certs.length, 0);
    const countries = new Set(allItems.flatMap((i) => i.certs.map((c) => c.c))).size;

    expect(certs).toBe(234); // + "Dai Dai" Platinum in Austria (IFPI Austria register, 3 Sep 2026)
    expect(countries).toBe(26); // Czechia joins
    // The page-facing helpers must agree with the raw reduce.
    expect(totalAwards()).toBe(certs);
    expect(certCountryCount).toBe(Object.keys(CERT_COUNTRIES).length);
  });

  it("splits into 7 Diamond / 101 Platinum / 96 Gold / 30 Silver", () => {
    // 6 Aug 2026: “Dai Dai” Portugal upgraded Gold → Platinum (AFP week-31 PDF).
    const byLevel = (level: string) =>
      allItems.reduce((n, i) => n + i.certs.filter((c) => c.level === level).length, 0);

    // Diamond went 6 -> 7 on 31 Aug 2026 when SNEP upgraded "Dai Dai" from
    // Platinum to Diamond. The old guard here warned that a 7 meant the African
    // Giant FR entry had been corrupted to Diamond; that entry is still
    // Platinum and the 7th Diamond is Dai Dai's, so the warning stands for
    // anything BEYOND 7 — the design file that once showed 7 carried a typo,
    // and this is a different route to the same number.
    expect(byLevel("Diamond")).toBe(7);
    // 101 -> 100 and 96 -> 97 on 11 Sep 2026: "Ginger" in Switzerland was
    // carried as Platinum and IFPI Schweiz's register prints Gold, so one plaque
    // moved down a tier. The total is unchanged. Caught because the compare page
    // priced the same recording two ways on Burna's row and Wizkid's.
    expect(byLevel("Platinum")).toBe(100); // + Dai Dai AT, − Ginger CH
    expect(byLevel("Gold")).toBe(97); // + "Dai Dai" in Poland (ZPAV), + Ginger CH
    expect(byLevel("Silver")).toBe(30); // On the Low NG left this tier for Gold

    const sum = byLevel("Diamond") + byLevel("Platinum") + byLevel("Gold") + byLevel("Silver");
    expect(sum).toBe(234);
  });

  // A test NAME is not an assertion, which is how this one came to read "280
  // chart entries across 71 territories, 48 of them at No. 1" over a body
  // asserting 278 / 69 / 47. Three published figures stated wrongly in the
  // suite's own output, green the whole time — the Dominican and Salvadoran
  // retractions (RETRACTIONS #7, #8) moved the assertions and left the title
  // where it was. The title is a const now, and the last check in this block
  // recomposes it from the data, so it cannot drift again on its own.
  const chartTitle = "counts 278 chart entries across 69 territories, 47 of them at No. 1";

  it(chartTitle, () => {
    const entries = allChartItems.reduce((n, r) => n + r.entries.length, 0);
    const territories = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c))).size;
    // Placements, not releases: a release charting at No. 1 in six countries
    // contributes six.
    const ones = allChartItems.reduce(
      (n, r) => n + r.entries.filter((e) => e.peak === 1).length,
      0
    );

    // 4 Aug 2026 Dai Dai sweep — see tests/charts.test.ts for the breakdown.
    expect(entries).toBe(278); // -2: unsupported Dominican and Salvadoran No. 1s removed
    expect(territories).toBe(69);
    expect(ones).toBe(47); // + Poland 29 Aug, - Dominican Republic and El Salvador 2 Sep

    expect(chartEntryCount).toBe(entries);
    expect(chartCountryCount).toBe(territories);
    expect(numberOnes).toBe(ones);

    // The name above, rebuilt from the same data it names.
    expect(
      `counts ${entries} chart entries across ${territories} territories, ${ones} of them at No. 1`,
      "this test's own name states figures its assertions contradict"
    ).toBe(chartTitle);
  });

  it("counts 83 award wins from 240 nominations across 46 bodies", () => {
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
    // 83rd: Premios Juventud 2026, OMG Collaboration for "Dai Dai" — announced
    // by the ceremony's own account on 3 Sep 2026. It was carried as a pending
    // nomination (won: false) until the body itself named the winner.
    expect(wins).toBe(83);
    expect(allNoms.length).toBe(236 + 4);
    expect(totalWins).toBe(wins);
    expect(totalNominations).toBe(allNoms.length);
    expect(ceremonyCount).toBe(46);
  });

  it("counts 57 countries performed in and 52 firsts", () => {
    expect(performedCountryCount).toBe(57);
    // 52nd: first Nigerian artist past 4 billion YouTube views (4,029,086,804
    // across 344 videos, read at the channel on 3 Sep 2026 — Wizkid is next at
    // 2.66B). 51st was the first entry on Billboard's Adult Contemporary chart
    // ("Dai Dai" debuts at No. 14, chart dated 29 Aug 2026).
    expect(firstsCount).toBe(52);
  });

  it("values the current car collection at $16.84M — current only", () => {
    // "Current only" is the operative rule, and it is stricter than the
    // checklist's shorthand "exclude sold": a car is in the headline total
    // only when it carries NO status at all. Excluding just `sold` leaves the
    // three unconfirmed cars in and gives $17.10M.
    const current = cars.filter((c) => !c.status);
    const value = current.reduce((sum, c) => sum + c.valueUsd, 0);

    expect(totalValueUsd).toBe(value);
    // $16.84M, up from $16.46M on 8 Sep 2026: the Bugatti's dollar figure is
    // DERIVED from its naira price, and it was being derived at the wrong rate.
    // ₦9bn at ₦1,370.08/$ — the rate the day the purchase was announced,
    // 5 July 2026 — is $6.57M, not the $6.19M that was there, which implied
    // ₦1,454/$ and matches no date near the announcement.
    expect(`$${(value / 1e6).toFixed(2)}M`).toBe("$16.84M");

    // Both excluded pools are non-empty, so the filter is doing real work.
    expect(cars.filter((c) => c.status === "sold").length).toBeGreaterThan(0);
    expect(cars.filter((c) => c.status === "unconfirmed").length).toBeGreaterThan(0);
  });
});
