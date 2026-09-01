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
  numberOneCountryCount,
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
  // countries, and each must say so in its body string. Adding another is a
  // deliberate act that has to come through here. The Aug 2026 Dai Dai sweep
  // added the Monitor Latino belt (GT/HN/NI/PY/PR), the TopHit states
  // (EE/KZ/MD/UA), and Radiomonitor Türkiye (TR) — every one verified to
  // publish no non-airplay national chart. Russia is NOT here: its TopHit
  // chart is streaming.
  const AIRPLAY_EXCEPTIONS = new Set([
    "IL", "BG", "UY", "VE", "SV", "DO",
    "EE", "GT", "HN", "NI", "PY", "PR", "TR", "KZ", "MD", "UA",
  ]);

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
    // 4 Aug 2026 Dai Dai sweep: +11 territories (EE at No.1 on TopHit, the
    // Monitor Latino belt, TR/KZ/MD/UA/RU), Ecuador's IFPI LatAm chart turned
    // its Billboard #4 into a #1, and UY/MY/HR peaks improved (2/5/13).
    expect(chartEntryCount).toBe(279); // 2 Sep 2026: -1, the unsupported Dominican Republic No. 1 removed (RETRACTIONS #7)
    expect(numberOnes).toBe(48); // 2 Sep 2026: Poland took this to 49, then the unsupported Dominican No. 1 came out (RETRACTIONS #7)
    expect(chartCountryCount).toBe(70); // -1: the Dominican Republic left with its only entry
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
    // 4 Aug 2026 sweep: +11 territories; Ecuador (IFPI LatAm) and Estonia
    // (TopHit) are the two new country No. 1s.
    expect(daiDaiChartEntryCount).toBe(69);
    expect(daiDaiNumberOnes).toBe(27); // + Poland 29 Aug, - Dominican Republic 2 Sep (RETRACTIONS #7)
  });

  it("tops both Billboard global charts", () => {
    for (const code of ["GLB", "GLBX"]) {
      expect(daiDai.entries.find((e) => e.c === code)?.peak, code).toBe(1);
    }
  });
});

// Two country figures live in this file and they are not interchangeable:
// every territory he has charted in (71) versus the subset where something
// reached No. 1 (33). A home stat tile paired the No. 1s count with the first
// one, which reads as "topped the chart in 71 countries".
describe("the two country figures stay distinct", () => {
  it("counts No. 1 countries as a strict subset of charted territories", () => {
    expect(numberOneCountryCount).toBeLessThan(chartCountryCount);
    const no1 = new Set(
      allChartItems.flatMap((r) => r.entries.filter((e) => e.peak === 1).map((e) => e.c))
    );
    const charted = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c)));
    for (const c of no1) expect(charted.has(c), `${c} at No.1 but not charted`).toBe(true);
    expect(no1.size).toBe(numberOneCountryCount);
  });

  it("never has more No. 1 countries than No. 1 placements", () => {
    expect(numberOneCountryCount).toBeLessThanOrEqual(numberOnes);
  });
});

// The peak map's ramp runs bright-gold (No. 1) to deep-red (No. 100), and two
// captions describe it — one per layout. The mobile one said "darker gold is a
// higher peak", which is the scale backwards. Pin the direction so a caption
// and the ramp cannot disagree again.
describe("peak map colour ramp", () => {
  it("runs bright at No. 1 and dark at No. 100", async () => {
    const src = await import("node:fs").then((fs) =>
      fs.readFileSync("app/components/PeakMap.tsx", "utf8")
    );
    const stops = [...src.matchAll(/\[([\d.]+), \[(\d+), (\d+), (\d+)\]\]/g)].map((m) => ({
      t: Number(m[1]),
      lum: (Number(m[2]) * 299 + Number(m[3]) * 587 + Number(m[4]) * 114) / 1000,
    }));
    expect(stops.length).toBeGreaterThanOrEqual(2);
    const first = stops[0];
    const last = stops[stops.length - 1];
    expect(first.t).toBe(0);
    expect(last.t).toBe(1);
    // t=0 is peak 1. Brighter there, or every caption on the site is wrong.
    expect(first.lum).toBeGreaterThan(last.lum);
  });
});

// isoCodes.ts claims it "covers exactly the countries in CHART_COUNTRIES", and a
// guard was said to enforce it. Neither was true: seventeen charting countries
// had no entry, so the peak map rendered 52 of 69 and dropped the rest without
// erroring. This is that guard.
describe("every charting country can be drawn on the map", () => {
  it("has an ISO numeric for each chart country", async () => {
    const { A2_TO_ISO } = await import("../app/lib/isoCodes");
    const missing = Object.keys(CHART_COUNTRIES)
      .filter((c) => c !== "GLB" && c !== "GLBX")
      .filter((c) => !(c in A2_TO_ISO));
    expect(missing, `chart codes missing from A2_TO_ISO: ${missing.join(", ")}`).toEqual([]);
  });
});
