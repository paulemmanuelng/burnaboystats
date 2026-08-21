import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { spotifyTotalStreams, spotifyTotalStreamsExact } from "../app/data/streamingTotals";

// This page exists to be cited — by search engines, by answer engines, and by
// anyone re-litigating the February 2026 "bot streams" claim years from now.
// A page that argues from arithmetic has to have arithmetic that survives
// checking, so the sums are pinned here rather than trusted.

const ENJOY_BEFORE = 232_346_699;
const ENJOY_AFTER = 50_077_530;
const FINDERS_BEFORE = 130_244_873;
const FINDERS_AFTER = 3_075_692;
const CLOSE_2025_DISPLAYED = 9_508_991_024;
const CORRECTED_2025_CLOSE = 9_199_552_674;
const COUNTER_12_FEB = 9_438_600_171;
const REALLOCATED = 309_438_350;
const GAINED_BY_12_FEB = 239_047_497;

describe("the unmerge arithmetic", () => {
  it("reallocates exactly what the two remixes lost", () => {
    const moved = ENJOY_BEFORE - ENJOY_AFTER + (FINDERS_BEFORE - FINDERS_AFTER);
    expect(moved).toBe(REALLOCATED);
  });

  it("derives the corrected 2025 close by subtraction, not assertion", () => {
    expect(CLOSE_2025_DISPLAYED - REALLOCATED).toBe(CORRECTED_2025_CLOSE);
  });

  it("shows 2026 going forward, which is the point of the page", () => {
    expect(COUNTER_12_FEB - CORRECTED_2025_CLOSE).toBe(GAINED_BY_12_FEB);
    expect(GAINED_BY_12_FEB).toBeGreaterThan(0);
  });

  it("keeps every one of those figures on the page", () => {
    // A sum that is right in this test and absent from the page proves nothing.
    const src = readFileSync("app/analysis/spotify-unmerge/page.tsx", "utf8");
    for (const n of [
      ENJOY_BEFORE, ENJOY_AFTER, FINDERS_BEFORE, FINDERS_AFTER,
      CLOSE_2025_DISPLAYED, CORRECTED_2025_CLOSE, COUNTER_12_FEB,
      REALLOCATED, GAINED_BY_12_FEB,
    ]) {
      expect(src, `${n.toLocaleString()} missing from the page`).toContain(n.toLocaleString("en-US"));
    }
  });
});

describe("the live total the page derives from", () => {
  it("is a shape the page can parse", () => {
    // The page parses the exact string to compute the gain. If the bot ever
    // writes a different shape the page drops the sentence rather than printing
    // nonsense — but this should fail first.
    expect(spotifyTotalStreamsExact).toMatch(/^[\d,]+$/);
    expect(spotifyTotalStreams).toMatch(/^\d+(\.\d+)?B$/);
  });

  it("keeps the exact and rounded totals agreeing", () => {
    // Both are written by the same daily metric, so a disagreement means one
    // target stopped firing — which would otherwise be invisible.
    const exact = Number(spotifyTotalStreamsExact.replace(/,/g, ""));
    const rounded = Number(spotifyTotalStreams.replace("B", "")) * 1_000_000_000;
    expect(Math.abs(exact - rounded)).toBeLessThan(10_000_000); // within the rounding
  });

  it("is still above the corrected 2025 close", () => {
    const exact = Number(spotifyTotalStreamsExact.replace(/,/g, ""));
    expect(exact).toBeGreaterThan(CORRECTED_2025_CLOSE);
  });
});
