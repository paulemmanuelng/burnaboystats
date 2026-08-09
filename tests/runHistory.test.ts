import { describe, it, expect } from "vitest";
import { runHistory, runSeries, runHistoryDays } from "../app/data/runHistory";

// The run history is the site's only append-only dataset: every other file is
// rewritten wholesale each sweep, but this one accumulates, and a bug that
// duplicates or drops rows is invisible until a chart drawn from it lies.
// These guard the shape rather than the contents, which grow daily.

describe("worldwide run history", () => {
  it("holds one reading per release, platform and day", () => {
    const seen = new Set<string>();
    const dupes: string[] = [];
    for (const r of runHistory) {
      const key = `${r.date}|${r.release}|${r.platform}`;
      if (seen.has(key)) dupes.push(key);
      seen.add(key);
    }
    expect(dupes, `duplicate readings: ${dupes.slice(0, 3).join(", ")}`).toEqual([]);
  });

  it("carries plausible dates and positions", () => {
    const today = new Date().toISOString().slice(0, 10);
    for (const r of runHistory) {
      expect(r.date, `bad date ${r.date}`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(r.date <= today, `future reading ${r.date}`).toBe(true);
      // A chart position, not a stream count: anything outside 1–200 means the
      // extractor picked up the wrong column.
      expect(r.position).toBeGreaterThanOrEqual(1);
      expect(r.position).toBeLessThanOrEqual(200);
    }
  });

  it("stays sorted oldest-first, so a series never zig-zags in time", () => {
    const dates = runHistory.map((r) => r.date);
    expect([...dates].sort()).toEqual(dates);
  });

  it("runSeries returns a dated series for a tracked release", () => {
    const series = runSeries("Dai Dai", "Spotify");
    expect(series.length).toBeGreaterThan(0);
    for (const p of series) expect(typeof p.value).toBe("number");
    expect(runHistoryDays).toBeGreaterThan(0);
  });
});
