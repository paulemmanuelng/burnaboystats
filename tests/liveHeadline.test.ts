import { describe, it, expect } from "vitest";
import { liveHeadline } from "../app/lib/liveHeadline";
import { liveCharts } from "../app/data/liveCharts";

// The homepage hero leads with this. If it ever returns something empty or
// wrong, that is the first thing every visitor reads.

describe("liveHeadline", () => {
  const h = liveHeadline();

  it("always returns something to say", () => {
    expect(h.lead.trim().length).toBeGreaterThan(0);
    expect(h.detail.trim().length).toBeGreaterThan(0);
  });

  it("names the release with the most countries at No. 1", () => {
    const counts = liveCharts.map((r) => ({
      title: r.title,
      n: new Set(
        r.platforms.flatMap((p) => p.entries.filter((e) => e.position === 1).map((e) => e.country))
      ).size,
    }));
    const best = counts.sort((a, b) => b.n - a.n)[0];
    if (best.n > 1) {
      expect(h.lead).toContain(best.title);
      expect(h.lead).toContain(String(best.n));
    }
  });

  it("counts each country once even when a song tops several platforms there", () => {
    // "Dai Dai" is No. 1 in some countries on both YouTube and Deezer. Counting
    // placements instead of countries would inflate the hero's headline claim.
    const placements = liveCharts.reduce(
      (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
      0
    );
    const countries = new Set(
      liveCharts.flatMap((r) =>
        r.platforms.flatMap((p) => p.entries.filter((e) => e.position === 1).map((e) => e.country))
      )
    ).size;
    expect(countries).toBeLessThanOrEqual(placements);
    const claimed = Number(h.lead.match(/\d+/)?.[0] ?? 0);
    expect(claimed).toBeLessThanOrEqual(countries);
  });
});
