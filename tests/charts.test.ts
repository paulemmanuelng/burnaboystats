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

  // /records/charts and /api state in print that airplay listings are excluded
  // except where a country publishes no non-airplay national chart at all.
  // Keep the data honest with the claim: airplay is allowed ONLY for these
  // three, and each must say so in its body string. Adding a fourth is a
  // deliberate act that has to come through here.
  const AIRPLAY_EXCEPTIONS = new Set(["IL", "BG", "UY", "VE", "SV", "DO"]);

  it("only the declared exceptions are tracked on an airplay chart", () => {
    const onAirplay = Object.entries(CHART_COUNTRIES)
      .filter(([, c]) => /airplay/i.test(c.body))
      .map(([code]) => code);
    expect(new Set(onAirplay)).toEqual(
      new Set([...AIRPLAY_EXCEPTIONS].filter((c) => onAirplay.includes(c)))
    );
    for (const code of onAirplay) {
      expect(AIRPLAY_EXCEPTIONS.has(code), `${code} is on an airplay chart but not declared`).toBe(
        true
      );
    }
  });

  // The carve-out only holds if the country really has no alternative. Croatia
  // is the worked example: HDU's Top lista has "Dai Dai" at No. 1 on airplay,
  // but Billboard Croatia Songs exists, so Croatia is NOT an exception and must
  // never be added as one.
  it("does not treat Croatia as an airplay exception", () => {
    expect(AIRPLAY_EXCEPTIONS.has("HR")).toBe(false);
    expect(/airplay/i.test(CHART_COUNTRIES.HR?.body ?? "")).toBe(false);
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
    expect(chartEntryCount).toBe(260);
    // 44 since Norway's official chart turned Dai Dai's #2 into a #1 (Aug 2026).
    expect(numberOnes).toBe(44);
    expect(chartCountryCount).toBe(60);
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
    expect(daiDaiChartEntryCount).toBe(59);
    expect(daiDaiNumberOnes).toBe(25);
  });

  it("tops both Billboard global charts", () => {
    for (const code of ["GLB", "GLBX"]) {
      expect(daiDai.entries.find((e) => e.c === code)?.peak, code).toBe(1);
    }
  });
});
