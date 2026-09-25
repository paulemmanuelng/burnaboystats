import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
// @ts-expect-error — plain .mjs helpers, no types
import { recordRun } from "../scripts/apply-stat-updates.mjs";
// @ts-expect-error — plain .mjs helpers, no types
import { evaluateMetric, isActionable, offsetDrift } from "../scripts/stats-lib.mjs";

// The stats bot's own bookkeeping (scripts/apply-stat-updates.mjs recordRun),
// on the career total's REAL numbers from the run that broke it.
//
// From 25 Sep 2026 05:00 UTC every stats-live run failed offsetDrift's
// reconcile test (lastRawValue + offset == baseline): kworb's raw sum had
// fallen 16,051,434 in its 24 Sep build, the peak rule rightly refused to
// publish a lower career total, and the run wrote the fallen raw anyway. The
// config the gate then tested said 10,929,316,373 + 114,858,823 =
// 11,044,175,196 against a baseline of 11,060,226,630.
//
// These use a frozen copy of the metric as it stood that morning, not the live
// config: the live figures move on every publish, and a test pinned to them
// would stop the bot the day they did.

type Metric = Record<string, unknown> & { baseline: number; offset: number; lastRawValue: number };

const AS_OF_24_SEP = {
  id: "spotify-total-streams",
  label: "Total Spotify streams (all songs)",
  kind: "peak",
  live: true,
  baseline: 11_060_226_630,
  offset: 114_858_823,
  lastRawValue: 10_945_367_807,
  rawJumpAlert: 12_000_000,
  lastSeenValue: 11_060_226_630,
  lastSeenAt: "2026-09-24",
  lastChanged: "2026-09-24",
};

/** kworb's page as the 25 Sep runs read it, corrected: 10,929,316,373 raw. */
const READ_25_SEP = 11_044_175_196;
/** kworb's own Daily on that page. */
const DAILY = 7_380_904;

const fresh = (): Metric => structuredClone(AS_OF_24_SEP);

/** One run of the bot for this metric: read, judge, publish if it would. */
function run(metric: Metric, live: number, today: string) {
  const r = evaluateMetric(metric, live);
  r.drift = offsetDrift(metric, live);
  const applied = isActionable(r.status) ? [{ r }] : [];
  recordRun({ metrics: [metric] }, [r], applied, today);
  return { r, published: applied.length > 0 };
}

const reconciles = (m: Metric) => m.lastRawValue + m.offset === m.baseline;

describe("the stats bot's bookkeeping for an offset metric", () => {
  it("does not publish a fallen raw, and leaves the pair reconciled", () => {
    const m = fresh();
    const { r, published } = run(m, READ_25_SEP, "2026-09-25");

    expect(r.drift.kind).toBe("shrank");
    expect(r.drift.delta).toBe(-16_051_434);
    expect(published).toBe(false);
    // The published figure holds, and so does the raw behind it.
    expect(m.baseline).toBe(11_060_226_630);
    expect(m.lastRawValue).toBe(10_945_367_807);
    expect(reconciles(m)).toBe(true);
    // The source WAS seen, so the staleness alarm has nothing to say.
    expect(m.lastSeenValue).toBe(READ_25_SEP);
    expect(m.lastSeenAt).toBe("2026-09-25");
  });

  it("keeps the drift alarm raised on the next run, instead of reporting the drop once", () => {
    const m = fresh();
    run(m, READ_25_SEP, "2026-09-25");
    // The same page read again six hours later (the 11:53 UTC run did exactly this).
    expect(run(m, READ_25_SEP, "2026-09-25").r.drift.kind).toBe("shrank");
  });

  it("publishes a normal day's growth and moves both fields from that one reading", () => {
    const m = fresh();
    const next = 11_060_226_630 + DAILY;
    const { r, published } = run(m, next, "2026-09-25");
    expect(r.drift.kind).toBe("ok");
    expect(published).toBe(true);
    expect(m.baseline).toBe(next);
    expect(m.lastRawValue).toBe(10_945_367_807 + DAILY);
    expect(reconciles(m)).toBe(true);
  });

  it("stays reconciled through a fall, a hold, recovery and a restore", () => {
    const m = fresh();
    const raws = [
      10_929_316_373, // 25 Sep: a title leaves kworb's roster (shrank, held)
      10_929_316_373, // the same page again
      10_936_697_277, // +1 day: still below the published reading (held)
      10_951_000_000, // regains it: published again
      10_981_500_000, // the title comes back (+30.5M): jumped, and published
    ];
    raws.forEach((raw, i) => {
      run(m, raw + m.offset, `2026-09-${25 + i}`);
      expect(reconciles(m), `after reading ${i + 1}`).toBe(true);
    });
    expect(m.baseline).toBe(10_981_500_000 + 114_858_823);
  });
});

describe("a drifted offset is surfaced without holding back the rest", () => {
  // With the bookkeeping fixed, the reconcile test no longer stops the job on a
  // drift, which was the only thing that ever made one visible: the alarm
  // itself is a paragraph in the run log. The job now fails AFTER publishing.
  const read = (f: string) => readFileSync(join(process.cwd(), f), "utf8");

  it("the bot reports a drift as a step output", () => {
    expect(read("scripts/apply-stat-updates.mjs")).toContain("has_drift=${drifted.length > 0}");
  });

  it("the workflow turns it red after the commit step, not before", () => {
    const wf = read(".github/workflows/stats-live.yml");
    const commit = wf.indexOf("- name: Commit to main");
    const surface = wf.indexOf("steps.live.outputs.has_drift == 'true'");
    expect(commit).toBeGreaterThan(-1);
    expect(surface, "no step reads has_drift").toBeGreaterThan(commit);
    expect(wf.slice(surface, surface + 600)).toContain("exit 1");
  });
});
