import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  AFROBEATS_EDITED_ON,
  artistBySlug,
  chartEntries,
  chartNo1s,
  chartPageStamp,
  chartTerritories,
} from "../app/data/afrobeats";
import { updates } from "../app/data/updates";

/**
 * 7 Oct 2026: Rema's "Best" (Tiakola, Rema) enters SNEP's Top Singles at
 * No. 30 — week 40 of 2026, tracking 25 Sep–2 Oct, read on SNEP's chart page
 * and its own PDF of the week (docs/sweeps/rema-chart-peaks-v1.md, "Re-read
 * 7 Oct 2026"). A debut (weeks 37–39 carry no "BEST" row), and week 40 was the
 * newest chart SNEP listed, so the peak is open: re-read week 41 (~9 Oct) and
 * later before the note is closed — this file will then need its peak moved.
 */
const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const rema = artistBySlug("rema")!;
const best = rema.charts.find((r) => r.title === "Best" && r.kind === "Singles");

describe("Rema: \"Best\" FR 30 (SNEP week 40, read 7 Oct 2026)", () => {
  it("is one French single row, filed under the plain title", () => {
    expect(best).toBeTruthy();
    expect(best!.entries.map((e) => [e.c, e.peak])).toEqual([["FR", 30]]);
  });

  it("carries an open-run note dated to the read, naming the chart's own credit", () => {
    const note = best!.entries[0].note ?? "";
    expect(note).toMatch(/^Peak still open — /);
    expect(note).toContain("7 Oct 2026");
    expect(note).toContain("Tiakola, Rema");
    expect(note).toContain("week 40");
  });

  it("moves entries only: France was already his and No. 30 is not a No. 1", () => {
    expect(rema.chartPublished).toEqual({ entries: 161, territories: 55, no1s: 17 });
    expect(chartEntries(rema)).toBe(161);
    expect(chartTerritories(rema)).toBe(55);
    expect(chartNo1s(rema)).toBe(17);
    const withoutBest = rema.charts.filter((r) => r !== best);
    expect(new Set(withoutBest.flatMap((r) => r.entries.map((e) => e.c))).has("FR")).toBe(true);
  });

  it("is his third-best French single, behind Calm Down and Toxic", () => {
    const fr = rema.charts
      .filter((r) => r.kind === "Singles")
      .flatMap((r) => r.entries.filter((e) => e.c === "FR").map((e) => [r.title, e.peak] as const))
      .sort((a, b) => a[1] - b[1])
      .map(([t]) => t);
    expect(fr.slice(0, 3)).toEqual(["Calm Down", "Toxic", "Best"]);
  });

  it("adds no plaque and no /updates line (a chart row; the feed is Burna Boy only)", () => {
    expect(rema.releases.some((r) => r.title === "Best")).toBe(false);
    expect(updates.filter((u) => /tiakola/i.test(JSON.stringify(u)))).toEqual([]);
  });

  it("dates both chart-printing pages to the read, without moving verifiedOn", () => {
    expect(AFROBEATS_EDITED_ON.rema).toBe("2026-10-07");
    expect(chartPageStamp(rema)).toBe("2026-10-07");
    expect(rema.verifiedOn < "2026-10-07").toBe(true);
  });

  it("negative control: the lines that shipped before the read are gone", () => {
    // The literal strings on origin/main at 5f3cca84 (7 Oct 2026).
    expect(read("app/data/afrobeats.ts")).not.toContain("chartPublished: { entries: 160, territories: 55, no1s: 17 },");
    expect(read("app/lib/searchIndex.ts")).not.toContain(
      "Every Rema official chart entry and peak — 160 entries and 17 No. 1 placements, country by country.",
    );
    expect(read("app/lib/searchIndex.ts")).toContain(
      "Every Rema official chart entry and peak — 161 entries and 17 No. 1 placements, country by country.",
    );
  });
});
