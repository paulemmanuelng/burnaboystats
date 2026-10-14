import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import config from "../scripts/watched-metrics.json";
import { applyAnchoredReplace, formatStat, targetText } from "../scripts/stats-lib.mjs";
import { applyTargets } from "../scripts/apply-stat-updates.mjs";

/**
 * The two bot-written dates behind /records/by-the-numbers (design review
 * 8 Oct 2026, J1-13, fix 23): SPOTIFY_STREAMS_PUBLISHED_ON and
 * SPOTIFY_RANK_READ_ON. Each is a `field: "publishedOn"` site target on its
 * metric, written in the same run as the figure it dates — the run's UTC day
 * from apply-stat-updates.mjs, the ChartMasters read day from
 * chartmasters-anchor.mjs — and never the value, never "null".
 */

type Target = { file: string; anchor: string; pattern: string; template?: string; format?: string; field?: string };
type Metric = { id: string; siteTargets?: Target[] };
const metrics = config.metrics as unknown as Metric[];
const ROOT = join(__dirname, "..");
const DATED: [string, string][] = [
  ["spotify-total-streams", "export const SPOTIFY_STREAMS_PUBLISHED_ON ="],
  ["spotify-listeners-rank", "export const SPOTIFY_RANK_READ_ON ="],
];
const target = (id: string, anchor: string) => metrics.find((m) => m.id === id)!.siteTargets!.find((t) => t.anchor === anchor)!;

describe("the publishedOn targets", () => {
  it.each(DATED)("%s carries one, after its value targets", (id, anchor) => {
    const m = metrics.find((x) => x.id === id)!;
    const t = target(id, anchor);
    expect(t).toMatchObject({ field: "publishedOn", template: '"%s"' });
    expect(new RegExp(t.pattern).test('"2026-10-14"')).toBe(true);
    // The first target stays the value: displayWouldChange reads its format.
    expect(m.siteTargets![0].field).toBeUndefined();
    expect(m.siteTargets![0].format).toBeTruthy();
    expect(m.siteTargets!.filter((x) => x.field === "publishedOn")).toHaveLength(1);
  });

  it("only these two metrics write a date this way", () => {
    const all = metrics.flatMap((m) => (m.siteTargets ?? []).filter((t) => t.field === "publishedOn").map((t) => [m.id, t.anchor]));
    expect(all.sort()).toEqual([...DATED].sort());
  });
});

describe("targetText", () => {
  it("writes the day for a publishedOn target, and the formatted value otherwise", () => {
    expect(targetText({ field: "publishedOn" }, 11_200_058_766, "2026-10-20")).toBe("2026-10-20");
    expect(targetText({ format: "compact" }, 11_200_058_766, "2026-10-20")).toBe(formatStat(11_200_058_766, "compact"));
    expect(targetText({ format: "int" }, 96, "2026-10-20")).toBe("96");
  });

  it("refuses a day that is not YYYY-MM-DD rather than write it", () => {
    for (const bad of [undefined, "", "2026-10", "20 Oct 2026", "2026-10-20T05:00:00Z"]) {
      expect(targetText({ field: "publishedOn" }, 96, bad), String(bad)).toBeNull();
    }
  });

  it("negative control: the value formatter alone writes nothing usable into a date target", () => {
    // chartmasters-anchor.mjs's career-total loop before J1-13:
    //   const formatted = formatStat(published, t.format);
    // a date target has no format, so it would have templated "null".
    const t = target("spotify-total-streams", "export const SPOTIFY_STREAMS_PUBLISHED_ON =");
    expect(formatStat(11_200_058_766, t.format)).toBeNull();
    expect(t.template!.replace("%s", String(formatStat(11_200_058_766, t.format)))).toBe('"null"');
  });
});

describe("applyTargets writes the run's day beside the anchor", () => {
  it.each(DATED)("%s", async (id, anchor) => {
    const m = metrics.find((x) => x.id === id)!;
    const t = target(id, anchor);
    const abs = join(ROOT, t.file);
    const files = new Map([[abs, readFileSync(abs, "utf8")]]);
    // A fixture reading: the live value it would publish, on a later day.
    const live = id === "spotify-listeners-rank" ? 91 : 11_312_345_678;
    const res = await applyTargets({ ...m, live }, files, "2026-10-20");
    expect(res.ok, JSON.stringify(res.failures)).toBe(true);
    const text = files.get(abs)!;
    expect(text).toContain(`${anchor} "2026-10-20";`);
    // The value was written in the same run.
    const valueTarget = m.siteTargets![0];
    expect(text).toContain(`${valueTarget.anchor} "${formatStat(live, valueTarget.format)}";`);
    // And the next run's pattern still finds it (the bot never walks off).
    const again = applyAnchoredReplace(text, t.anchor, t.pattern, '"2026-10-21"');
    expect(again.applied).toBe(true);
    expect(again.text).toContain(`${anchor} "2026-10-21";`);
  });
});

describe("both writers call targetText for the career total's targets", () => {
  const src = (f: string) => readFileSync(join(ROOT, "scripts", f), "utf8");

  it("apply-stat-updates.mjs: every applyTargets call passes the run's day", () => {
    const s = src("apply-stat-updates.mjs");
    expect(s).toContain(": targetText(t, metric.live, today);");
    const calls = [...s.matchAll(/await applyTargets\(([^)]*)\)/g)].map((m) => m[1]);
    expect(calls.length).toBeGreaterThan(0);
    for (const c of calls) expect(c).toMatch(/, today$/);
  });

  it("chartmasters-anchor.mjs: the re-anchor writes the read day, never null", () => {
    const s = src("chartmasters-anchor.mjs");
    expect(s).toContain("const formatted = targetText(t, published, reading.readOn);");
    expect(s).toContain("if (formatted == null) throw");
    expect(s).not.toContain("const formatted = formatStat(published, t.format);");
  });
});
