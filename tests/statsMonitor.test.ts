import { describe, it, expect } from "vitest";
// @ts-expect-error — plain ESM helper module, no types needed for the test
import { parseNum, relativeDrift, extractKworbListeners, extractKworbTotalStreams, evaluateMetric, isActionable } from "../scripts/stats-lib.mjs";

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
  it("pulls rank, monthly and peak listeners from a row", () => {
    const row = extractKworbListeners(KWORB_ROW, "3wcj11K77LjEY1PkEazffa");
    expect(row).toEqual({ rank: 61, monthlyListeners: 52355445, peakListeners: 52355445 });
  });
  it("returns null when the artist isn't present", () => {
    expect(extractKworbListeners(KWORB_ROW, "notanartistid")).toBeNull();
  });
});

describe("extractKworbTotalStreams", () => {
  it("returns the largest number on the page (the cumulative total)", () => {
    const html = `<td>Last Last</td><td>1,982,110,540</td> ... Total <b>10,297,429,319</b> across 400 songs, daily 18,204,113`;
    expect(extractKworbTotalStreams(html)).toBe(10297429319);
  });
  it("returns NaN when there are no large numbers", () => {
    expect(Number.isNaN(extractKworbTotalStreams("<p>no data here</p>"))).toBe(true);
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
  it("flags a rank move of at least the threshold (either direction)", () => {
    const rank = { label: "r", baseline: 61, kind: "rank", threshold: 5 };
    expect(evaluateMetric(rank, 68).status).toBe("rank-change"); // 7 places down
    expect(evaluateMetric(rank, 55).status).toBe("rank-change"); // 6 places up
    expect(evaluateMetric(rank, 63).status).toBe("ok"); // only 2 places
  });
  it("reports unavailable when the value is missing", () => {
    expect(evaluateMetric(base, NaN).status).toBe("unavailable");
  });
  it("reports unbaselined when there's no baseline", () => {
    expect(evaluateMetric({ label: "y", baseline: null, kind: "drift" }, 100).status).toBe("unbaselined");
  });
});

describe("isActionable", () => {
  it("drift, new-peak and rank-change need attention", () => {
    expect(isActionable("drift")).toBe(true);
    expect(isActionable("new-peak")).toBe(true);
    expect(isActionable("rank-change")).toBe(true);
    expect(isActionable("ok")).toBe(false);
    expect(isActionable("unavailable")).toBe(false);
  });
});

import { formatStat, applyAnchoredReplace } from "../scripts/stats-lib.mjs";

describe("formatStat", () => {
  it("formats each display style", () => {
    expect(formatStat(56517687, "M2")).toBe("56.52M");
    expect(formatStat(747000000, "M0")).toBe("747M");
    expect(formatStat(56517687, "raw")).toBe("56,517,687");
    expect(formatStat(44, "int")).toBe("44");
    expect(formatStat(NaN, "M2")).toBeNull();
  });
});

describe("applyAnchoredReplace", () => {
  const text = `foo\n  id: "monthly-listeners-peak",\n  value: "55.95M",\n  other: "99.9M",`;
  it("replaces the first pattern match after the anchor only", () => {
    const r = applyAnchoredReplace(text, 'id: "monthly-listeners-peak"', "\\d+(?:\\.\\d+)?M", "56.52M");
    expect(r.applied).toBe(true);
    expect(r.changedFrom).toBe("55.95M");
    expect(r.text).toContain('value: "56.52M"');
    expect(r.text).toContain('other: "99.9M"'); // untouched
  });
  it("is a no-op when already current", () => {
    const r = applyAnchoredReplace(text, 'id: "monthly-listeners-peak"', "\\d+(?:\\.\\d+)?M", "55.95M");
    expect(r.applied).toBe(false);
    expect(r.reason).toBe("already current");
  });
  it("does not edit when the anchor is missing (safety)", () => {
    const r = applyAnchoredReplace(text, 'id: "does-not-exist"', "\\d+M", "1M");
    expect(r.applied).toBe(false);
    expect(r.text).toBe(text);
  });
});

import { extractYouTubeViews } from "../scripts/stats-lib.mjs";

describe("extractYouTubeViews", () => {
  it("reads the raw viewCount from ytInitialData", () => {
    expect(extractYouTubeViews('...,"viewCount":"533033080","foo":1,...')).toBe(533033080);
  });
  it("returns NaN when absent", () => {
    expect(Number.isNaN(extractYouTubeViews("<html>no data</html>"))).toBe(true);
  });
});
