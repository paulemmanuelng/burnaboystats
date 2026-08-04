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
  it("counts 223 certifications across 25 countries", () => {
    const certs = allItems.reduce((n, item) => n + item.certs.length, 0);
    const countries = new Set(allItems.flatMap((i) => i.certs.map((c) => c.c))).size;

    expect(certs).toBe(223); // + Location SE Platinum
    expect(countries).toBe(25);
    // The page-facing helpers must agree with the raw reduce.
    expect(totalAwards()).toBe(certs);
    expect(certCountryCount).toBe(Object.keys(CERT_COUNTRIES).length);
  });

  it("splits into 6 Diamond / 92 Platinum / 95 Gold / 30 Silver", () => {
    // 3 Aug 2026: “Dai Dai” France upgraded Gold → Platinum (SNEP, 30M streams).
    const byLevel = (level: string) =>
      allItems.reduce((n, i) => n + i.certs.filter((c) => c.level === level).length, 0);

    // Diamond is 6, not 7. A 7 means the African Giant FR entry has been
    // changed to Diamond — the repo says Platinum, and the design file that
    // showed 7 was the one carrying the typo.
    expect(byLevel("Diamond")).toBe(6);
    expect(byLevel("Platinum")).toBe(92); // + Dai Dai SK upgrade
    expect(byLevel("Gold")).toBe(95); // Dai Dai SK moved up to Platinum
    expect(byLevel("Silver")).toBe(30);

    const sum = byLevel("Diamond") + byLevel("Platinum") + byLevel("Gold") + byLevel("Silver");
    expect(sum).toBe(223);
  });

  it("counts 260 chart entries across 60 territories, 44 of them at No. 1", () => {
    const entries = allChartItems.reduce((n, r) => n + r.entries.length, 0);
    const territories = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c))).size;
    // Placements, not releases: a release charting at No. 1 in six countries
    // contributes six.
    const ones = allChartItems.reduce(
      (n, r) => n + r.entries.filter((e) => e.peak === 1).length,
      0
    );

    expect(entries).toBe(260);
    expect(territories).toBe(60);
    expect(ones).toBe(44);

    expect(chartEntryCount).toBe(entries);
    expect(chartCountryCount).toBe(territories);
    expect(numberOnes).toBe(ones);
  });

  it("counts 80 award wins from 210 nominations across 44 bodies", () => {
    const wins = allNoms.filter((n) => n.won).length;

    expect(wins).toBe(80);
    expect(allNoms.length).toBe(210);
    expect(totalWins).toBe(wins);
    expect(totalNominations).toBe(allNoms.length);
    expect(ceremonyCount).toBe(44);
  });

  it("counts 57 countries performed in and 48 firsts", () => {
    expect(performedCountryCount).toBe(57);
    expect(firstsCount).toBe(48); // 3 Aug 2026: removed the false "first African video past 500M" — CKay and others got there years earlier
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
