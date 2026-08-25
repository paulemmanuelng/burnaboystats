import { describe, it, expect } from "vitest";
// @ts-expect-error — plain .mjs helper, no types
import { offsetDrift } from "../scripts/stats-lib.mjs";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// An offset compensates for a source undercounting by a fixed, measured amount:
// kworb's artist total misses some featured credits, so the pipeline adds a
// constant before publishing. That is only valid while the source keeps
// counting the same set of things.
//
// On 24 Aug 2026 it stopped being valid. kworb's raw sum fell about 17 million
// — a title leaving its tracked list, not seventeen million plays being
// un-played — the constant carried the fall through unchanged, and the site
// published a CAREER TOTAL THAT WENT DOWN, 10.80B to 10.78B. Everything
// downstream looked healthy, because every later check runs in corrected space
// where the arithmetic is still self-consistent. Only the raw value knew.
//
// The mirror case is the one to watch for next: if kworb restores those titles,
// the raw sum jumps back and the offset — now enlarged to cover the gap —
// over-counts by the same amount, and the published figure runs HIGH instead.
// Neither direction self-corrects, because the metric is monotonic by design.

const CONFIG = JSON.parse(
  readFileSync(join(process.cwd(), "scripts", "watched-metrics.json"), "utf8"),
);
const total = CONFIG.metrics.find((m: { id: string }) => m.id === "spotify-total-streams");

/** A metric shaped like the real one: raw 100M, offset 5M, published 105M. */
const metric = { offset: 5_000_000, lastRawValue: 100_000_000, rawJumpAlert: 12_000_000 };
const published = (raw: number) => raw + metric.offset;

describe("offsetDrift watches the raw value behind an offset", () => {
  it("says nothing while the source grows normally", () => {
    const d = offsetDrift(metric, published(100_400_000));
    expect(d.kind).toBe("ok");
    expect(d.delta).toBe(400_000);
  });

  it("flags ANY fall, because a cumulative sum cannot fall on its own", () => {
    // Deliberately tiny: the size does not matter, the direction does. A sum of
    // cumulative counters only decreases if the set of counters changed.
    const d = offsetDrift(metric, published(99_999_000));
    expect(d.kind).toBe("shrank");
    expect(d.delta).toBe(-1_000);
    expect(d.why).toMatch(/UNDER-counts/);
  });

  it("reproduces the 24 August failure and names the remedy", () => {
    const d = offsetDrift(metric, published(100_000_000 - 17_053_378));
    expect(d.kind).toBe("shrank");
    expect(d.why).toMatch(/17,053,378/);
    expect(d.why).toMatch(/Re-measure/);
  });

  it("flags the restore case — a jump far above normal growth", () => {
    const d = offsetDrift(metric, published(100_000_000 + 17_053_378));
    expect(d.kind).toBe("jumped");
    expect(d.why).toMatch(/OVER-counts/);
  });

  it("tolerates a schedule slip: a day's worth of growth is not a jump", () => {
    // Burna gains roughly 9M Spotify streams a day. If the hourly workflow
    // misses a day, the next run sees all of it at once — that must not alarm,
    // or the alarm becomes noise and stops being read.
    expect(offsetDrift(metric, published(100_000_000 + 9_000_000)).kind).toBe("ok");
  });

  it("records a first reading rather than guessing", () => {
    const fresh = { offset: 5_000_000 };
    const d = offsetDrift(fresh, published(100_000_000));
    expect(d.kind).toBe("first-reading");
    expect(d.raw).toBe(100_000_000);
  });

  it("ignores metrics with no offset, and unreadable values", () => {
    expect(offsetDrift({ lastRawValue: 1 }, 100)).toBeNull();
    expect(offsetDrift(metric, NaN)).toBeNull();
    expect(offsetDrift(metric, null)).toBeNull();
  });

  it("is armed on the real config, with a comparison point already seeded", () => {
    // A metric that carries an offset but no lastRawValue would burn its first
    // run on "first-reading" and miss a change that happened in between.
    expect(total.offset, "the career total lost its offset").toBeGreaterThan(0);
    expect(total.lastRawValue, "no raw comparison point — the watchdog is blind").toBeGreaterThan(0);
    expect(total.rawJumpAlert, "no jump threshold, so the restore case cannot fire").toBeGreaterThan(0);
    // The seeded raw must reconcile with the published baseline.
    expect(total.lastRawValue + total.offset).toBe(total.baseline);
  });

  it("every offset metric is armed, not just this one", () => {
    const armed = CONFIG.metrics.filter((m: { offset?: number }) => m.offset != null);
    const blind = armed.filter((m: { lastRawValue?: number; rawJumpAlert?: number }) =>
      m.lastRawValue == null || m.rawJumpAlert == null,
    );
    expect(blind.map((m: { id: string }) => m.id), "these carry an offset nothing is watching").toEqual([]);
  });
});
