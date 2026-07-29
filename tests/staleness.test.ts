import { describe, it, expect } from "vitest";
// @ts-expect-error — plain .mjs helper shared with the stats bot
import { staleMetrics, DEFAULT_STALENESS_DAYS } from "../scripts/stats-lib.mjs";
import config from "../scripts/watched-metrics.json";

// The staleness alarm exists for one specific failure: a source that changes
// shape but keeps returning a plausible number, so the figure quietly stops
// moving while every run still reports "ok". That hid for weeks once already.
// These tests pin the behaviour that makes the alarm trustworthy — it has to
// fire on a frozen figure AND stay silent on figures that are legitimately
// static, or it gets ignored.

const NOW = new Date("2026-07-29T12:00:00Z");
const base = { live: true, kind: "drift", label: "x" };

describe("staleness alarm", () => {
  it("flags a live figure that has stopped moving", () => {
    const out = staleMetrics([{ ...base, id: "frozen", lastChanged: "2026-07-20" }], NOW);
    expect(out).toHaveLength(1);
    expect(out[0].id).toBe("frozen");
    expect(out[0].days).toBeGreaterThanOrEqual(DEFAULT_STALENESS_DAYS);
  });

  it("stays quiet for a figure that moved recently", () => {
    expect(staleMetrics([{ ...base, id: "fresh", lastChanged: "2026-07-29" }], NOW)).toHaveLength(0);
  });

  it("exempts peak and rank, which are static by nature", () => {
    const old = "2026-01-01";
    expect(
      staleMetrics(
        [
          { ...base, id: "p", kind: "peak", lastChanged: old },
          { ...base, id: "r", kind: "rank", lastChanged: old },
        ],
        NOW
      )
    ).toHaveLength(0);
  });

  it("ignores monitor-only metrics, which write nothing to go stale", () => {
    expect(
      staleMetrics([{ ...base, id: "m", live: false, lastChanged: "2026-01-01" }], NOW)
    ).toHaveLength(0);
  });

  it("honours an explicit opt-out and a custom window", () => {
    expect(
      staleMetrics([{ ...base, id: "o", lastChanged: "2026-01-01", stalenessDays: null }], NOW)
    ).toHaveLength(0);
    expect(
      staleMetrics([{ ...base, id: "w", lastChanged: "2026-07-27", stalenessDays: 30 }], NOW)
    ).toHaveLength(0);
  });

  it("says nothing about a metric that has never been stamped", () => {
    expect(staleMetrics([{ ...base, id: "new" }], NOW)).toHaveLength(0);
  });

  // The alarm is useless if the field it reads is never populated.
  it("every live metric in the real config carries a lastChanged stamp", () => {
    const missing = config.metrics
      .filter((m) => (m as { live?: boolean }).live)
      .filter((m) => !(m as { lastChanged?: string }).lastChanged)
      .map((m) => m.id);
    expect(missing, `live metrics with no lastChanged: ${missing.join(", ")}`).toEqual([]);
  });

  it("the real config is not already stale", () => {
    const stale = staleMetrics(config.metrics).map((s: { id: string }) => s.id);
    expect(stale, `figures that have stopped moving: ${stale.join(", ")}`).toEqual([]);
  });
});
