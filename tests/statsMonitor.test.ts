import { describe, it, expect } from "vitest";
// @ts-expect-error — plain ESM helper module, no types needed for the test
import { parseNum, relativeDrift, extractKworbListeners, evaluateMetric, isActionable } from "../scripts/stats-lib.mjs";

// A minimal fixture mirroring how a Burna Boy row appears in kworb's
// listeners table (#, Artist, Listeners, Daily, Peak-rank, PkListeners).
const KWORB_ROW = `<tr><td>61</td><td><a href="artist/3wcj11K77LjEY1PkEazffa_songs.html">Burna Boy</a></td><td>52,355,445</td><td>288,897</td><td>61</td><td>52,355,445</td></tr>`;

describe("parseNum", () => {
  it("parses comma-grouped integers", () => {
    expect(parseNum("52,355,445")).toBe(52355445);
    expect(parseNum("288,897")).toBe(288897);
  });
  it("parses K/M/B suffixes", () => {
    expect(parseNum("52.36M")).toBeCloseTo(52360000);
    expect(parseNum("1.9B")).toBeCloseTo(1.9e9);
  });
  it("returns NaN for junk", () => {
    expect(Number.isNaN(parseNum("n/a"))).toBe(true);
  });
});

describe("relativeDrift", () => {
  it("computes symmetric relative change", () => {
    expect(relativeDrift(100, 103)).toBeCloseTo(0.03);
    expect(relativeDrift(100, 97)).toBeCloseTo(0.03);
  });
});

describe("extractKworbListeners", () => {
  it("pulls monthly and peak listeners from a row", () => {
    const row = extractKworbListeners(KWORB_ROW, "3wcj11K77LjEY1PkEazffa");
    expect(row).toEqual({ monthlyListeners: 52355445, peakListeners: 52355445 });
  });
  it("returns null when the artist isn't present", () => {
    expect(extractKworbListeners(KWORB_ROW, "notanartistid")).toBeNull();
  });
});

describe("evaluateMetric", () => {
  const base = { label: "x", baseline: 52355445, kind: "drift", threshold: 0.03 };

  it("flags drift over the threshold", () => {
    expect(evaluateMetric(base, 54_000_000).status).toBe("drift"); // +3.1%
  });
  it("stays ok under the threshold", () => {
    expect(evaluateMetric(base, 52_800_000).status).toBe("ok"); // +0.85%
  });
  it("flags a new peak only when exceeded", () => {
    const peak = { label: "p", baseline: 52355445, kind: "peak" };
    expect(evaluateMetric(peak, 52355446).status).toBe("new-peak");
    expect(evaluateMetric(peak, 52355445).status).toBe("ok");
  });
  it("reports unavailable when the value is missing", () => {
    expect(evaluateMetric(base, NaN).status).toBe("unavailable");
  });
  it("reports unbaselined when there's no baseline", () => {
    expect(evaluateMetric({ label: "y", baseline: null, kind: "drift" }, 100).status).toBe("unbaselined");
  });
});

describe("isActionable", () => {
  it("only drift and new-peak need attention", () => {
    expect(isActionable("drift")).toBe(true);
    expect(isActionable("new-peak")).toBe(true);
    expect(isActionable("ok")).toBe(false);
    expect(isActionable("unavailable")).toBe(false);
  });
});
