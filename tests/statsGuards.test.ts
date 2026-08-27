import { describe, it, expect } from "vitest";
// @ts-expect-error — plain .mjs helper, no types
import { withinSanity, evaluateMetric } from "../scripts/stats-lib.mjs";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const CONFIG = JSON.parse(readFileSync(join(process.cwd(), "scripts", "watched-metrics.json"), "utf8"));
const today = new Date().toISOString().slice(0, 10);

describe("accumulate metrics only mark a day counted once it has LANDED", () => {
  // The running 2026 stream totals are built by adding each day's figure to a
  // baseline, once per day. The guard used to key off `lastSeenAt`, which is
  // stamped on every run that merely READ a moved value — including runs where
  // sanity rejected the increment or the anchored edit failed and the baseline
  // was never bumped. Those days were marked counted and dropped for good.
  const metric = { id: "t", kind: "accumulate", baseline: 1_000_000_000 };

  it("adds the day's figure when the day has not been accumulated", () => {
    const r = evaluateMetric({ ...metric }, 9_200_000);
    expect(r.status).toBe("accumulate");
    expect(r.live).toBe(1_009_200_000);
    expect(r.added).toBe(9_200_000);
  });

  it("does NOT re-add once the increment actually landed today", () => {
    const r = evaluateMetric({ ...metric, lastAccumulatedAt: today }, 9_200_000);
    expect(r.status).toBe("ok");
    expect(r.live).toBe(metric.baseline);
  });

  it("still retries a day the source was merely SEEN but never applied", () => {
    // The regression: lastSeenAt is today, but nothing was written. The day
    // must stay open, or the increment is lost.
    const r = evaluateMetric({ ...metric, lastSeenAt: today }, 9_200_000);
    expect(r.status, "a seen-but-unapplied day must remain retryable").toBe("accumulate");
    expect(r.live).toBe(1_009_200_000);
  });

  it("the shipped guard reads lastAccumulatedAt and nothing else", () => {
    // A source-level check, because the failure mode is a one-word regression:
    // swapping this field back to lastSeenAt reintroduces silent day-loss and
    // every value-level test above would still pass on the mocked metrics.
    const lib = readFileSync(join(process.cwd(), "scripts", "stats-lib.mjs"), "utf8");
    const guard = lib.match(/if \(metric\.(\w+) === today\)/);
    expect(guard, "the once-per-day guard was renamed or removed").not.toBeNull();
    expect(guard![1]).toBe("lastAccumulatedAt");

    // And only a real write may stamp it.
    const apply = readFileSync(join(process.cwd(), "scripts", "apply-stat-updates.mjs"), "utf8");
    expect(
      /if \(applied\.length\)[\s\S]*lastAccumulatedAt/.test(apply),
      "lastAccumulatedAt must be stamped inside the applied block, next to the baseline bump",
    ).toBe(true);
  });
});

describe("withinSanity", () => {
  it("treats maxDelta as absolute places, so a rank guard is reachable", () => {
    const rank = { maxDelta: 10, min: 1, max: 500 };
    expect(withinSanity(46, 50, rank)).toBe(true);   // 4 places
    expect(withinSanity(46, 60, rank)).toBe(false);  // 14 places
    expect(withinSanity(46, 197, rank)).toBe(false); // extractor garbage
  });

  it("accepts the boundary value of min — rank 1 is the best possible", () => {
    // `live <= min` rejected the single best result the metric can ever have.
    expect(withinSanity(5, 1, { maxDelta: 10, min: 1, max: 500 })).toBe(true);
  });

  it("still treats maxJump as a fraction for magnitude metrics", () => {
    expect(withinSanity(100, 105, { maxJump: 0.1 })).toBe(true);
    expect(withinSanity(100, 130, { maxJump: 0.1 })).toBe(false);
  });

  it("the real rank metric is guarded by an absolute bound, not a fraction", () => {
    const rank = CONFIG.metrics.find((m: { kind?: string }) => m.kind === "rank");
    expect(rank, "no rank metric found").toBeTruthy();
    expect(
      rank.sanity.maxDelta,
      "a rank needs an absolute bound; maxJump is a fraction of the baseline and is unreachable here",
    ).toBeGreaterThan(0);
    expect(rank.sanity.maxJump, "maxJump on a rank metric is meaningless").toBeUndefined();
  });
});
