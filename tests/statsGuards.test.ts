import { describe, it, expect } from "vitest";
// @ts-expect-error — plain .mjs helper, no types
import { withinSanity, evaluateMetric, alignLedgers, ledgerValue } from "../scripts/stats-lib.mjs";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const CONFIG = JSON.parse(readFileSync(join(process.cwd(), "scripts", "watched-metrics.json"), "utf8"));
const today = new Date().toISOString().slice(0, 10);

describe("a running-year total is a ledger of dated dailies, never a run-date sum and never a cumulative", () => {
  // The 2026 stream totals were built by adding kworb's daily column to a
  // baseline once per calendar day OF THE BOT'S CLOCK. That gate could not
  // tell "the same page read twice" from "a new day": 27 Aug, 29 Aug and
  // 2 Sep 2026 were each added twice and three days were never added. And a
  // cumulative is no substitute — kworb absorbs catalogue it had not tracked
  // (Tems' total rose 138M in a fortnight her days summed to 74M). The design
  // is gone, not patched: each 2026 row is a checkpoint plus each later day's
  // streams under the date kworb's page is stamped with.
  const group = CONFIG.metrics.filter((m: { id: string }) => m.id.startsWith("streams-2026-"));

  it("no metric is of the retired accumulate kind, and the code has no such branch", () => {
    for (const m of CONFIG.metrics) expect(m.kind, m.id).not.toBe("accumulate");
    const lib = readFileSync(join(process.cwd(), "scripts", "stats-lib.mjs"), "utf8");
    expect(lib.includes('kind === "accumulate"'), "the accumulate branch is back").toBe(false);
    expect(lib.includes("lastAccumulatedAt"), "a once-per-day gate is back").toBe(false);
  });

  it("every 2026 row is one group of ledgers — all five, each from its own dated page", () => {
    expect(group.map((m: { id: string }) => m.id).sort()).toEqual([
      "streams-2026-asake", "streams-2026-burna", "streams-2026-tems", "streams-2026-tyla", "streams-2026-wizkid",
    ]);
    for (const m of group) {
      expect(m.group, m.id).toBe("streams-2026");
      expect(m.extractor, m.id).toBe("kworbArtistPage");
      expect(m.sourceUrl, `${m.id} must read the artist's own page, whose stamp dates the daily`).toMatch(
        /^https:\/\/kworb\.net\/spotify\/artist\/[A-Za-z0-9]+_songs\.html$/,
      );
      expect(m.kind, `${m.id}: a year-to-date total only moves up`).toBe("peak");
      expect(m.checkpoint?.date, m.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(typeof m.checkpoint?.value, m.id).toBe("number");
      expect(m.anchor?.source, `${m.id}: the checkpoint chain starts at a named tracker post`).toMatch(/WITTIEWIZ/);
      expect(typeof m.dailyMax, `${m.id}: a daily is gated before it can enter the ledger`).toBe("number");
      expect(m.offset, `${m.id}: a ledger carries no offset — it is not a cumulative`).toBeUndefined();
      expect(m.live, m.id).toBe(true);
    }
  });

  it("the anchor is the tracker's 10 Sep 2026 post, and the ledger only ever moves forward from it", () => {
    const tracker: Record<string, number> = {
      "streams-2026-tems": 1_770_000_000,
      "streams-2026-wizkid": 1_764_000_000,
      "streams-2026-burna": 1_756_000_000,
      "streams-2026-asake": 1_420_000_000,
      "streams-2026-tyla": 1_185_000_000,
    };
    for (const m of group) {
      expect(m.anchor, m.id).toMatchObject({ date: "2026-09-09", value: tracker[m.id] });
      expect(m.checkpoint.date >= m.anchor.date, `${m.id}: the checkpoint cannot precede the anchor`).toBe(true);
      expect(m.checkpoint.value >= m.anchor.value, m.id).toBe(true);
      for (const d of Object.keys(m.readings ?? {})) expect(d > m.checkpoint.date, `${m.id}: a daily on or before the checkpoint is already inside it`).toBe(true);
      expect(m.baseline, `${m.id}: the published figure is the checkpoint or a day beyond it`).toBeGreaterThanOrEqual(m.anchor.value);
      // The baseline IS the checkpoint's value: both are set together on
      // publish (rollLedger beside the baseline bump) and must be moved
      // together on a re-anchor. A baseline above its checkpoint would leave
      // the row at status "ok" while its peers advance.
      expect(m.baseline, `${m.id}: baseline and checkpoint moved apart`).toBe(m.checkpoint.value);
      expect(m.sanity.maxJump, `${m.id}: no relative jump guard on a ledger — dailyMax gates each day`).toBeUndefined();
    }
  });

  it("each row writes its value AND the group's common day, so the board says which day it is read through", () => {
    for (const m of group) {
      const anchors = m.siteTargets.map((t: { anchor: string }) => t.anchor);
      expect(anchors, m.id).toContain(`/* live:${m.id} */`);
      expect(anchors, m.id).toContain("/* live:streams-2026-asof */");
      const asOf = m.siteTargets.find((t: { field?: string }) => t.field === "asOf");
      expect(asOf.pattern).toBe("\\d{4}-\\d{2}-\\d{2}");
    }
  });

  it("the board is never ahead of the ledgers", () => {
    const board = readFileSync(join(process.cwd(), "app", "data", "africasBiggest.ts"), "utf8");
    const asOf = board.match(/\/\* live:streams-2026-asof \*\/ asOf: "(\d{4}-\d{2}-\d{2})"/)![1];
    const aligned = alignLedgers(group);
    expect(asOf >= "2026-09-09").toBe(true);
    if (aligned) expect(asOf <= aligned.date, "the board prints a day the group has not reached").toBe(true);
    // And each printed figure is the ledger's figure for the printed day.
    for (const m of group) {
      const printed = board.match(new RegExp(`/\\* live:${m.id} \\*/ \\{ name: "[^"]+", value: "([\\d.]+)B"`))![1];
      const v = ledgerValue(m.checkpoint, m.readings, asOf);
      expect(v, `${m.id}: the ledger does not cover the board's day ${asOf}`).not.toBeNull();
      expect(printed, m.id).toBe((v! / 1e9).toFixed(3));
    }
  });

  it("group publication is all-or-nothing in the bot", () => {
    const apply = readFileSync(join(process.cwd(), "scripts", "apply-stat-updates.mjs"), "utf8");
    expect(apply.includes("const trial = new Map(files)"), "a group's edits go through a trial copy").toBe(true);
    expect(/outcomes\.every\(\(o\) => o\.ok\)/.test(apply), "one member failing must hold the group").toBe(true);
    expect(/const hold = members\.find\(\(m\) => m\.hold\)/.test(apply), "a hold on any member must hold the group").toBe(true);
    expect(/maxJump: Infinity/.test(apply), "the relative jump guard must not apply to a ledger").toBe(true);
    // And main() does not run on import — the test suite imports this module.
    expect(/if \(invokedDirectly\) main\(\)/.test(apply), "main() must be guarded against import").toBe(true);
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

// kworb's Burna Boy YouTube page froze on 25 Aug 2026 — still HTTP 200, still a
// full page, still printing a live "views per day" column, but the per-video
// totals stopped advancing. Nothing about the response looked broken, and the
// four published view figures would have quietly rotted; by 28 Aug YouTube was
// between 105,907 and 308,667 views ahead on every one of them. A number the
// site publishes should be read from the thing it is about.
describe("published YouTube view figures are read from YouTube", () => {
  const writesYouTubeViews = (m: { siteTargets?: { pattern?: string }[] }) =>
    (m.siteTargets ?? []).some((t) => /ytViews/.test(t.pattern ?? ""));

  it("no figure the site publishes as YouTube views comes from an aggregator", () => {
    const offenders = CONFIG.metrics
      .filter(writesYouTubeViews)
      .filter((m: { sourceUrl?: string }) => !/(^|\.)youtube\.com\//.test(m.sourceUrl ?? ""))
      .map((m: { id: string; sourceUrl?: string }) => `${m.id} ← ${m.sourceUrl}`);
    expect(offenders, `read these from youtube.com itself: ${offenders.join(", ")}`).toEqual([]);
  });

  it("and each one names the video it counts, so the source is checkable", () => {
    const vague = CONFIG.metrics
      .filter(writesYouTubeViews)
      .filter((m: { sourceUrl?: string }) => !/[?&]v=[A-Za-z0-9_-]{11}/.test(m.sourceUrl ?? ""))
      .map((m: { id: string }) => m.id);
    expect(vague, "a watch URL must carry an 11-character video id").toEqual([]);
  });
});
