import { describe, it, expect } from "vitest";
import {
  CHART_COUNTRIES,
  allChartItems,
  chartEntryCount,
  chartedReleaseCount,
  chartCountryCount,
  numberOnes,
  numberOneReleases,
  daiDaiNumberOnes,
  daiDaiChartEntryCount,
} from "../app/data/charts";

// The chart dataset drives the headline numbers on the homepage, /records/charts,
// /records/by-the-numbers, /faq, /methodology, the Dai Dai story and the stat
// cards, and it changes more often than anything else on the site. These guards
// exist so a hand-edit can't quietly break a page or a published figure.

describe("chart data integrity", () => {
  // ChartExplorer does `countries[e.c].name` with no fallback, so an entry
  // pointing at a missing code is a client-side TypeError, not a blank cell.
  it("every entry references a known country code", () => {
    for (const r of allChartItems) {
      for (const e of r.entries) {
        expect(CHART_COUNTRIES[e.c], `${r.title} → ${e.c}`).toBeTruthy();
      }
    }
  });

  it("every country code is used by at least one release", () => {
    const used = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c)));
    for (const code of Object.keys(CHART_COUNTRIES)) {
      expect(used.has(code), `unused country: ${code}`).toBe(true);
    }
  });

  it("no release lists the same country twice", () => {
    for (const r of allChartItems) {
      const codes = r.entries.map((e) => e.c);
      expect(new Set(codes).size, r.title).toBe(codes.length);
    }
  });

  it("peaks are positive whole numbers", () => {
    for (const r of allChartItems) {
      for (const e of r.entries) {
        expect(Number.isInteger(e.peak), `${r.title} → ${e.c}`).toBe(true);
        expect(e.peak, `${r.title} → ${e.c}`).toBeGreaterThan(0);
      }
    }
  });

  // /records/charts states in print that airplay listings are excluded, and the
  // site's rule is that a country's peak comes from its official sales/streaming
  // chart. Keep the data honest with the claim.
  it("no country is tracked on an airplay chart", () => {
    for (const [code, c] of Object.entries(CHART_COUNTRIES)) {
      expect(/airplay/i.test(c.body), `${code} → ${c.body}`).toBe(false);
    }
  });

  it("derived totals stay consistent with the raw entries", () => {
    expect(chartedReleaseCount).toBe(allChartItems.length);
    expect(chartEntryCount).toBe(
      allChartItems.reduce((n, r) => n + r.entries.length, 0)
    );
    expect(chartCountryCount).toBe(
      new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c))).size
    );
    expect(numberOnes).toBe(
      allChartItems.reduce((n, r) => n + r.entries.filter((e) => e.peak === 1).length, 0)
    );
    expect(numberOneReleases).toBe(
      allChartItems.filter((r) => r.entries.some((e) => e.peak === 1)).length
    );
  });

  it("matches the published headline figures", () => {
    expect(chartEntryCount).toBe(241);
    expect(numberOnes).toBe(36);
    expect(chartCountryCount).toBe(51);
  });
});

describe("Dai Dai", () => {
  const daiDai = allChartItems.find((r) => r.title === "Dai Dai")!;

  it("is present and credited to Shakira", () => {
    expect(daiDai).toBeTruthy();
    expect(daiDai.credit).toContain("Shakira");
  });

  // daiDaiNumberOnes powers "N countries at No. 1" on the Dai Dai page, the FAQ
  // and the stat card — it must count countries only, never the two global charts.
  it("counts country No. 1s without the Billboard global charts", () => {
    expect(daiDaiNumberOnes).toBe(
      daiDai.entries.filter((e) => e.peak === 1 && e.c !== "GLB" && e.c !== "GLBX").length
    );
    expect(daiDaiChartEntryCount).toBe(daiDai.entries.length);
  });

  it("matches the published headline figures", () => {
    expect(daiDaiChartEntryCount).toBe(49);
    expect(daiDaiNumberOnes).toBe(17);
  });

  it("tops both Billboard global charts", () => {
    for (const code of ["GLB", "GLBX"]) {
      expect(daiDai.entries.find((e) => e.c === code)?.peak, code).toBe(1);
    }
  });
});
