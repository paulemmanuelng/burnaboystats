import { describe, it, expect } from "vitest";
// @ts-expect-error — plain .mjs helper, no types
import { alignLedgers, fillSkippedDays } from "../scripts/stats-lib.mjs";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  statBoxes,
  pastMark,
  streamsOf,
  streamsRecordOf,
  recordNote2025,
  runningYearMarks,
  streamsRecord2025,
  type RankRow,
} from "../app/data/africasBiggest";
import { updates } from "../app/data/updates";
import { allFirsts } from "../app/data/firsts";

/**
 * The 18 Nov 2026 re-anchor of the 2026 running-streams board, on ChartMasters'
 * Playcounts Tool read directly, all five on one read, with the career offset
 * (docs/sourcing/chartmasters/reads/2026-11-18.json).
 *
 * The board was held at its 13 Nov checkpoint: kworb builds Tems' page every
 * other day, and her 15 Nov page's total moved less than its own daily from
 * her 13 Nov page, so the skipped-day fill refused 14 Nov and the hole held
 * all five. The career offset's alarm had fired as well (kworb's raw sum for
 * Burna Boy fell on its 15 and 16 Nov pages). On Paul's rule of 14 Oct ("use
 * chartmasters for all 5"), all five move together, on one read, through
 * ChartMasters' 16 Nov, a day every page printed, so nothing is inferred.
 * They are paired with kworb's 17 Nov pages, the run taking --kworb-frozen for
 * Wizkid, Tems and Tyla, whose pages were on 16, 15 and 16 Nov, and --force for
 * the career offset's step. These hold the rows to that read, the pairs to
 * kworb's pages as read, the offset's step to both read files, and the
 * shipped board to the reason it was needed.
 *
 * The 18 Oct 2026 re-anchor before it (docs/sourcing/chartmasters/reads/2026-10-18.json)
 * read ChartMasters' public artist pages, all five on one fetch, and dated
 * their newest points to 16 Oct by inference; Tems ran with --kworb-frozen.
 *
 * The 14 Oct 2026 re-anchor before that (docs/sourcing/chartmasters/reads/2026-10-14.json),
 * all five on one read. Paul, 14 Oct: "use chartmasters for all 5 now". kworb's Tems page froze on
 * its 12 Oct build while the other four moved to 13 Oct, so the board, which
 * publishes all five rows on their common day or none, was held on 12 Oct. A
 * Tems-only re-anchor that morning would have published four kworb ledgers
 * beside one ChartMasters read and was reverted; this one moves all five
 * together, on one read, through ChartMasters' 12 Oct (dated by inference:
 * the page prints no day), paired with kworb's 13 Oct pages and run with
 * --kworb-frozen for Tems. These hold the rows to that read and hold the
 * dating to kworb's dailies, so a later edit cannot quietly mix two reads.
 *
 * The 8 Oct 2026 re-anchor before it (docs/sourcing/chartmasters/reads/2026-10-08.json)
 * moved every checkpoint past a 5 Oct kworb hole: kworb skipped its 5 Oct page
 * for Burna Boy, Tems and Asake, their totals fell across the gap, the
 * skipped-day fill refused, and a hole in three ledgers held all five. These
 * hold the rows to the read — ChartMasters' total minus the 2025 close, for
 * one day, all five — and hold the record lines to the rows, so a crossing the
 * bot writes later is said the day it happens and not before.
 *
 * Nothing here pins a board string: the stats bot runs this suite before it
 * commits, and the rows move every day from the anchor.
 */

const json = (p: string) => JSON.parse(readFileSync(join(process.cwd(), p), "utf8"));
const CONFIG = json("scripts/watched-metrics.json");
const READ_FILE = "docs/sourcing/chartmasters/reads/2026-11-18.json";
const READ = json(READ_FILE);
const READ_1018 = json("docs/sourcing/chartmasters/reads/2026-10-18.json");
const READ_1014 = json("docs/sourcing/chartmasters/reads/2026-10-14.json");
const READ_1008 = json("docs/sourcing/chartmasters/reads/2026-10-08.json");
const SERIES = json("docs/sourcing/chartmasters/reads/2026-10-08-series.json");
const CLOSES = json("docs/sourcing/chartmasters/closes-2025.json");
const TOOL_0930 = json("docs/sourcing/chartmasters/reads/2026-10-02.json");

const SLUG: Record<string, string> = {
  "streams-2026-burna": "burna-boy",
  "streams-2026-wizkid": "wizkid",
  "streams-2026-tems": "tems",
  "streams-2026-asake": "asake",
  "streams-2026-tyla": "tyla",
};
const CM_DAY = "November 16, 2026";
const KWORB_DAY = "2026-11-17"; // ChartMasters day N pairs with kworb's page stamped N+1
const CM_DAY_1018 = "October 16, 2026"; // the 18 Oct read's day
const CM_DAY_1014 = "October 12, 2026"; // the 14 Oct read's day
const READ_TAG = `read ${READ.readOn}`; // how each anchor's source names the read it came from
/** The three whose kworb pages had not reached 17 Nov at the read. */
const FROZEN = ["streams-2026-wizkid", "streams-2026-tems", "streams-2026-tyla"];

type Ledger = { id: string; anchor: { date: string; value: number; source: string }; checkpoint: { date: string; value: number }; readings: Record<string, number> };
const group: Ledger[] = CONFIG.metrics.filter((m: { group?: string }) => m.group === "streams-2026");
const cmTotal = (slug: string): number => READ.artists[slug].days[CM_DAY];
const close = (slug: string): number => CLOSES[slug].close;

/** The board as it stood before the re-anchor (origin/main 8e9e1859, the bot's
 *  commit of 17 Nov 21:07 UTC): checkpoints on kworb's 13 Nov, the 14–16 Nov
 *  dailies the bot had banked for four of them, and only her 15 Nov for Tems,
 *  whose kworb page skipped 14 Nov. */
const BEFORE: Record<string, { checkpoint: { date: string; value: number }; readings: Record<string, number> }> = {
  "streams-2026-burna": { checkpoint: { date: "2026-11-13", value: 2_212_866_468 }, readings: { "2026-11-14": 7_004_385, "2026-11-15": 7_184_234, "2026-11-16": 6_176_250 } },
  "streams-2026-wizkid": { checkpoint: { date: "2026-11-13", value: 2_149_578_647 }, readings: { "2026-11-14": 6_125_621, "2026-11-15": 6_111_371, "2026-11-16": 5_395_710 } },
  "streams-2026-tems": { checkpoint: { date: "2026-11-13", value: 2_108_982_127 }, readings: { "2026-11-15": 4_910_160 } },
  "streams-2026-asake": { checkpoint: { date: "2026-11-13", value: 1_777_412_682 }, readings: { "2026-11-14": 5_720_346, "2026-11-15": 5_902_229, "2026-11-16": 5_267_569 } },
  "streams-2026-tyla": { checkpoint: { date: "2026-11-13", value: 1_391_275_525 }, readings: { "2026-11-14": 2_912_808, "2026-11-15": 2_835_239, "2026-11-16": 2_473_752 } },
};
/** Tems' 13 Nov page, as the shipped ledger banked it (lastStamp from 95f142a1,
 *  14 Nov 06:41 UTC, to f5450677, 16 Nov 06:45 UTC; dceedc3f moved it to her 15 Nov
 *  page); her 15 Nov page is the read's kworbStamps.tems. */
const TEMS_STAMP_1113 = { date: "2026-11-13", total: 6_440_717_559, daily: 4_915_454 };
/** The 18 Oct anchors this read replaced: the same relation on the 18 Oct read
 *  (ChartMasters through 16 Oct minus the close), dated by kworb's 17 Oct pages. */
const ANCHOR_1018 = (id: string) => ({ date: "2026-10-17", value: READ_1018.artists[SLUG[id]].days[CM_DAY_1018] - close(SLUG[id]) });
/** The 14 Oct anchors (ChartMasters through 12 Oct minus the close), dated 13 Oct. */
const ANCHOR_1014 = (id: string) => ({ date: "2026-10-13", value: READ_1014.artists[SLUG[id]].days[CM_DAY_1014] - close(SLUG[id]) });

/** The read an anchor's source names: chartmasters-anchor.mjs ends it "read <readOn>". */
const readOf = (source: string): string | undefined => [...source.matchAll(/\bread (\d{4}-\d{2}-\d{2})/g)].at(-1)?.[1];
/** One read: every anchor on one date, every source naming the same read. */
const oneRead = (anchors: { date: string; source: string }[]): boolean =>
  new Set(anchors.map((a) => a.date)).size === 1 && new Set(anchors.map((a) => readOf(a.source))).size === 1;

describe("the 2026 rows are ChartMasters through 16 Nov minus each 2025 close", () => {
  it("every row's anchor is the read's total minus its close, dated by kworb's 17 Nov page", () => {
    expect(group.map((m) => m.id).sort()).toEqual(Object.keys(SLUG).sort());
    for (const m of group) {
      const slug = SLUG[m.id];
      expect(m.anchor.date, m.id).toBe(KWORB_DAY);
      expect(m.anchor.value, m.id).toBe(cmTotal(slug) - close(slug));
      // The source names where the total was read, the day the Tool printed,
      // and what the close is.
      expect(m.anchor.source, m.id).toContain("ChartMasters Playcounts Tool");
      expect(m.anchor.source, m.id).toContain("Streams updated through November 16, 2026");
      expect(m.anchor.source, m.id).toContain(`Audio streams for ${READ.artists[slug].name}`);
      expect(m.anchor.source, m.id).toContain(close(slug).toLocaleString("en-US"));
      expect(m.anchor.source, m.id).toContain(READ_TAG);
    }
  });

  it("all five or none: one date, one read, and the group publishes a common day from it", () => {
    // One read file, one day in it, five artists.
    expect(Object.keys(READ.artists).sort()).toEqual(Object.values(SLUG).sort());
    for (const slug of Object.values(SLUG)) expect(Object.keys(READ.artists[slug].days), slug).toEqual([CM_DAY]);
    expect(oneRead(group.map((m) => m.anchor))).toBe(true);
    for (const m of group) expect(readOf(m.anchor.source), m.id).toBe(READ.readOn);
    const aligned = alignLedgers(group);
    expect(aligned, "the five ledgers cannot reach a common day").not.toBeNull();
    expect(aligned.date >= KWORB_DAY).toBe(true);
  });

  it("why it was needed: the shipped board was stuck on 13 Nov, Tems' 14 Nov a hole the fill refuses", () => {
    const before = alignLedgers(Object.keys(SLUG).map((id) => ({ id, ...BEFORE[id] })));
    expect(before?.date, "Tems had no daily for the 14 Nov her page skipped").toBe("2026-11-13");
    // Her 13 Nov page (banked) to her 15 Nov page (banked, and read again this
    // morning): the total moved less than the 15 Nov page's own daily.
    const tems = BEFORE["streams-2026-tems"];
    const next = { date: READ.kworbStamps.tems.lastUpdated, total: READ.kworbStamps.tems.total, daily: READ.kworbStamps.tems.daily };
    expect(next.date).toBe("2026-11-15");
    expect(next.daily, "the banked 15 Nov daily is the page read").toBe(tems.readings["2026-11-15"]);
    expect(next.total - TEMS_STAMP_1113.total - next.daily).toBeLessThan(0);
    const fill = fillSkippedDays(tems.checkpoint, tems.readings, TEMS_STAMP_1113, next);
    expect(fill.filled).toEqual([]);
    expect(fill.reason).toMatch(/left as a hole/);
    // Negative control: the same stamps with an ordinary day's movement fill it.
    const ordinary = { ...next, total: TEMS_STAMP_1113.total + 2 * next.daily };
    expect(fillSkippedDays(tems.checkpoint, tems.readings, TEMS_STAMP_1113, ordinary).filled).toEqual(["2026-11-14"]);
  });

  it("negative control: a plain run anchors two rows and publishes nothing, and a subset filled by hand is two reads", () => {
    // Without --kworb-frozen the script anchors only the rows whose kworb page
    // had reached 17 Nov (Burna Boy, Asake) and leaves the other three on the
    // 18 Oct anchors and kworb's dailies: no common day, so the board holds.
    const plain = group.map((m) =>
      FROZEN.includes(m.id)
        ? { id: m.id, anchor: { ...ANCHOR_1018(m.id), source: "… read 2026-10-18" }, ...BEFORE[m.id] }
        : { id: m.id, anchor: m.anchor, checkpoint: { date: m.anchor.date, value: m.anchor.value }, readings: {} },
    );
    expect(alignLedgers(plain)).toBeNull();
    // Filled by hand to 17 Nov (Tems' hole and each missing day from the Tool's
    // 16 Nov dailies), alignLedgers alone would publish it, which is why the
    // invariant is the anchors', not the alignment's.
    const day = (id: string): number => READ.toolRead.daily[SLUG[id]];
    const filled = plain.map((m) =>
      FROZEN.includes(m.id)
        ? { ...m, readings: { "2026-11-14": day(m.id), "2026-11-16": day(m.id), ...m.readings, [KWORB_DAY]: day(m.id) } }
        : m,
    );
    expect(alignLedgers(filled)?.date).toBe(KWORB_DAY);
    expect(oneRead(filled.map((m) => m.anchor))).toBe(false);
  });

  it("negative control: the 18 Oct anchors and the 13 Nov board are not the read", () => {
    for (const m of group) {
      expect(m.anchor.value, m.id).not.toBe(ANCHOR_1018(m.id).value);
      expect(m.anchor.date, m.id).not.toBe(ANCHOR_1018(m.id).date);
    }
    for (const [id, b] of Object.entries(BEFORE)) {
      const slug = SLUG[id];
      const now = cmTotal(slug) - close(slug);
      expect(b.checkpoint.value, id).not.toBe(now);
      // Four of ChartMasters' days behind (13–16 Nov), each under 1.5 x 8M.
      expect(now - b.checkpoint.value, id).toBeGreaterThan(4 * 2_000_000);
      expect(now - b.checkpoint.value, id).toBeLessThan(4 * 12_000_000);
      expect((b.checkpoint.value / 1e9).toFixed(3), id).not.toBe((now / 1e9).toFixed(3));
    }
  });

  it("the pairs are kworb's pages as read: Burna Boy and Asake on 17 Nov, the other three frozen and saying so", () => {
    const stamps = Object.fromEntries(Object.entries(SLUG).map(([id, slug]) => [id, READ.kworbStamps[slug].lastUpdated]));
    expect(stamps).toEqual({
      "streams-2026-burna": "2026-11-17",
      "streams-2026-wizkid": "2026-11-16",
      "streams-2026-tems": "2026-11-15",
      "streams-2026-asake": "2026-11-17",
      "streams-2026-tyla": "2026-11-16",
    });
    for (const m of group) {
      const stamp = READ.kworbStamps[SLUG[m.id]];
      if (FROZEN.includes(m.id)) {
        expect(stamp.lastUpdated < KWORB_DAY, m.id).toBe(true);
        expect(m.anchor.source, m.id).toContain(`--kworb-frozen (kworb's newest page was ${stamp.lastUpdated}; dailies resume from the first page stamped after ${KWORB_DAY})`);
        // The page read is the page the shipped ledger last banked.
        expect(BEFORE[m.id].readings[stamp.lastUpdated], m.id).toBe(stamp.daily);
      } else {
        expect(stamp.lastUpdated, m.id).toBe(KWORB_DAY);
        expect(m.anchor.source, m.id).not.toContain("--kworb-frozen");
      }
    }
  });

  it("the same-date pairs carry ChartMasters' 16 Nov: each 17 Nov page's daily within 2% of the Tool's, the 16 Nov page further off", () => {
    for (const slug of ["burna-boy", "asake"]) {
      const p = READ.pairCheck[slug];
      expect(p.toolDaily, slug).toBe(READ.toolRead.daily[slug]);
      expect(p.kworbDaily, slug).toBe(READ.kworbStamps[slug].daily);
      expect(p.kworbPage, slug).toBe(KWORB_DAY);
      expect(Math.abs(p.kworbDaily - p.toolDaily) / p.toolDaily, slug).toBeLessThan(0.02);
      expect(p.toolLast7Days, slug).toBe(READ.toolRead.last7Days[slug]);
      expect(Math.abs(p.kworbPages1111to1117 - p.toolLast7Days) / p.toolLast7Days, slug).toBeLessThan(0.02);
    }
    // Burna Boy's 16 Nov page (ChartMasters' 15 Nov) against the Tool's 16 Nov.
    const tool = READ.toolRead.daily["burna-boy"];
    expect(Math.abs(BEFORE["streams-2026-burna"].readings["2026-11-16"] - tool) / tool).toBeGreaterThan(0.04);
  });

  it("the career offset's step adds up, each side from its own read file, and is over the script's guard", () => {
    const s = READ.offsetStep;
    const p = READ_1018.careerPair;
    expect(s.previousPair).toMatchObject({ chartmasters: READ_1018.artists["burna-boy"].days[p.chartmasters], kworbPage: p.kworbPage, kworbRaw: p.kworbRaw });
    expect(s.previousPair.offset).toBe(s.previousPair.chartmasters - s.previousPair.kworbRaw);
    expect(s.chartmastersGain).toBe(cmTotal("burna-boy") - s.previousPair.chartmasters);
    expect(s.kworbRawGain).toBe(READ.careerPair.kworbRaw - s.previousPair.kworbRaw);
    expect(s.rawBelowDailies).toBe(s.kworbDailies - s.kworbRawGain);
    expect(s.chartmastersAboveDailies).toBe(s.chartmastersGain - s.kworbDailies);
    const offset = CONFIG.metrics.find((m: { id: string }) => m.id === "spotify-total-streams").offset;
    expect(offset - s.previousPair.offset).toBe(s.rawBelowDailies + s.chartmastersAboveDailies);
    expect(offset - s.previousPair.offset, "under 25M the run would not have needed --force").toBeGreaterThan(25_000_000);
    // The pages listed carry the step; the rest net under a million.
    const listed = Object.values(s.pagesOffByMoreThanAMillion as Record<string, number>).reduce((a, v) => a + v, 0);
    expect(Math.abs(s.rawBelowDailies - listed)).toBeLessThan(1_000_000);
    expect(s.kworbPages, "10/18 to 11/17, none skipped").toBe(31);
  });

  it("the step's kworb dailies are the shipped ledger's: the 18 Oct anchor plus them is Burna Boy's 13 Nov checkpoint, his banked 14–16 Nov and the 17 Nov page", () => {
    const b = BEFORE["streams-2026-burna"];
    const ledger = b.checkpoint.value + Object.values(b.readings).reduce((s, v) => s + v, 0) + READ.kworbStamps["burna-boy"].daily;
    expect(ledger - ANCHOR_1018("streams-2026-burna").value).toBe(READ.offsetStep.kworbDailies);
    // ChartMasters' lead over those dailies is the part of the step kworb's
    // roster did not cause.
    expect(cmTotal("burna-boy") - close("burna-boy") - ledger).toBe(READ.offsetStep.chartmastersAboveDailies);
  });

  it("the 18 Oct fan tracker's post was a cross-check only: no ledger carries it", () => {
    for (const m of group) {
      const slug = SLUG[m.id];
      for (const v of Object.values(m.readings ?? {})) expect(v, m.id).not.toBe(READ_1018.crossCheck.figures[slug]);
      expect(m.anchor.source, m.id).not.toMatch(/WITTIEWIZ/);
    }
    expect(READ_1018.crossCheck.$comment).toContain("Not used as data");
  });
});

describe("the read itself", () => {
  it("is the Playcounts Tool's series: each page's September 2026 point equals the Tool's 30 Sep total to the unit", () => {
    for (const slug of Object.values(SLUG)) {
      expect(SERIES.artists[slug].monthEnd["September 2026"], slug).toBe(TOOL_0930.artists[slug].days["September 30, 2026"]);
    }
  });

  it("takes every 16 Nov total from the Playcounts Tool's Total row, through a printed day, all five on one read", () => {
    expect(READ.toolRead.through).toBe(CM_DAY);
    expect(READ.toolRead.validAsOf).toBe("20261116");
    expect(READ.toolRead.readOn).toBe(READ.readOn);
    for (const slug of Object.values(SLUG)) {
      expect(READ.toolRead.totals[slug], slug).toBe(cmTotal(slug));
      expect(READ.toolRead.labels[slug], slug).toBe(`Audio streams for ${READ.artists[slug].name}`);
      expect(READ.artists[slug].source, slug).toContain("Streams updated through November 16, 2026");
      // Nothing inferred: no public-page point to date.
      expect(READ.artists[slug].publicPage, slug).toBeUndefined();
      // A month past the 18 Oct read's total, never behind it.
      expect(cmTotal(slug) - READ_1018.artists[slug].days[CM_DAY_1018], slug).toBeGreaterThan(31 * 2_000_000);
      // The row's columns agree with each other: seven days are about seven of the day.
      expect(READ.toolRead.last7Days[slug], slug).toBeGreaterThan(6 * READ.toolRead.daily[slug]);
      expect(READ.toolRead.last7Days[slug], slug).toBeLessThan(8 * READ.toolRead.daily[slug]);
    }
    expect(READ.dating).toBeUndefined();
    expect(READ.$comment).toContain("DIRECT TOOL READS WITH A PRINTED THROUGH-DATE");
  });

  it("the 18 Oct read took every 16 Oct total from the page's newest point, all five on one fetch, dated by inference and not on the Tool", () => {
    const fetched: number[] = [];
    for (const slug of Object.values(SLUG)) {
      const page = READ_1018.artists[slug].publicPage;
      expect(page.newestPoint, slug).toBe(READ_1018.artists[slug].days[CM_DAY_1018]);
      expect(page.newestPointDated, slug).toBe("2026-10-16 (inferred)");
      expect(page.url, slug).toBe(`https://chartmasters.org/artist/${slug}/`);
      fetched.push(Date.parse(page.fetchedUtc));
      // Past the 14 Oct read's newest point, never behind it.
      expect(page.newestPoint, slug).toBeGreaterThan(READ_1014.artists[slug].publicPage.newestPoint);
    }
    expect(fetched.every(Number.isFinite)).toBe(true);
    expect(Math.max(...fetched) - Math.min(...fetched), "one fetch for all five, inside a minute").toBeLessThan(60_000);
    expect(READ_1018.toolConfirmation).toBeUndefined();
    expect(READ_1018.$comment).toContain("NO PLAYCOUNTS TOOL CONFIRMATION");
  });

  it("the 18 Oct read dated to 16 Oct: kworb's dailies through 16 Oct land within 0.15 of a day of it, a day either side misses by most of a day", () => {
    // ChartMasters' days 13–16 Oct, carried by kworb's pages stamped 14–17 Oct.
    const days = ["2026-10-13", "2026-10-14", "2026-10-15", "2026-10-16"];
    for (const slug of Object.values(SLUG)) {
      const d = READ_1018.dating[slug].dailies;
      expect(Object.keys(d), slug).toEqual(days);
      const growth = READ_1018.artists[slug].days[CM_DAY_1018] - READ_1014.artists[slug].days[CM_DAY_1014];
      const through = (n: number) => growth - days.slice(0, n).reduce((s, k) => s + d[k], 0);
      const day16 = d["2026-10-16"];
      expect(through(4), slug).toBe(READ_1018.dating[slug].residualThrough16Oct);
      expect(Math.abs(through(4)), `${slug}: through 16 Oct`).toBeLessThan(0.15 * day16);
      expect(through(3), `${slug}: through 15 Oct leaves most of a day`).toBeGreaterThan(0.7 * day16);
      // No kworb page carried 17 Oct at that read: one more ordinary day.
      expect(through(4) - day16, `${slug}: through 17 Oct overshoots most of a day`).toBeLessThan(-0.7 * day16);
    }
  });

  it("the 14 Oct read took every 12 Oct total from the page's newest point, on one fetch", () => {
    const fetched = new Set<string>();
    for (const slug of Object.values(SLUG)) {
      const page = READ_1014.artists[slug].publicPage;
      expect(page.newestPoint, slug).toBe(READ_1014.artists[slug].days[CM_DAY_1014]);
      expect(page.newestPointDated, slug).toBe("2026-10-12 (inferred)");
      fetched.add(page.fetchedUtc);
      expect(page.newestPoint, slug).toBeGreaterThan(READ_1008.artists[slug].publicPage.newestPoint);
    }
    expect(fetched.size).toBe(1);
  });

  it("the 8 Oct read took each 5 Oct total from the page's newest point — except Wizkid's, whose page had moved on a day", () => {
    for (const slug of Object.values(SLUG)) {
      const newest = SERIES.artists[slug].monthEnd["October 2026"];
      expect(READ_1008.artists[slug].publicPage.newestPoint, slug).toBe(newest);
      const total1005 = READ_1008.artists[slug].days["October 5, 2026"];
      if (slug === "wizkid") {
        // 11,889,076,613 on the page (6 Oct) against the 5 Oct graphic's
        // 11,882,989,347: one day of his streams, confirmed on the Tool.
        expect(newest - total1005).toBe(6_087_266);
      } else {
        expect(total1005, slug).toBe(newest);
      }
    }
  });

  it("closes are ChartMasters' own December 2025 points; Burna Boy's less the February 2026 reallocation", () => {
    for (const slug of ["wizkid", "tems", "asake", "tyla"]) {
      expect(close(slug), slug).toBe(SERIES.artists[slug].monthEnd["December 2025"]);
    }
    expect(SERIES.artists["burna-boy"].monthEnd["December 2025"] - 309_438_350).toBe(close("burna-boy"));
    // Negative control: the 22 Sep derived closes the 8 Oct read replaced.
    expect(close("asake")).not.toBe(2_904_229_392);
    expect(close("tyla")).not.toBe(3_617_292_368);
    // And Burna Boy's raw point is not his close: it would publish the
    // counter's change as 2026 streams, 309,438,350 short (1,644,482,152 on
    // the 8 Oct read's 5 Oct total).
    const burna = group.find((m) => m.id === "streams-2026-burna")!;
    const rawPoint = cmTotal("burna-boy") - SERIES.artists["burna-boy"].monthEnd["December 2025"];
    expect(rawPoint).toBe(burna.anchor.value - 309_438_350);
    expect(READ_1008.artists["burna-boy"].days["October 5, 2026"] - SERIES.artists["burna-boy"].monthEnd["December 2025"]).toBe(1_644_482_152);
    expect(burna.anchor.value).not.toBe(rawPoint);
  });

  it("the 2025 record the board prints is ChartMasters' own year for Burna Boy", () => {
    const s = SERIES.artists["burna-boy"].monthEnd;
    const year2025 = s["December 2025"] - s["December 2024"];
    expect(year2025).toBe(1_986_007_572);
    expect(`${(year2025 / 1e9).toFixed(3)}B`).toBe(streamsRecord2025!.value);
  });
});

describe("the two-billion lines stand on the board's own row", () => {
  const box = statBoxes.find((b) => b.id === "most-streamed-african-artist")!;
  const row2026 = box.rows!.find((r) => r.label === "2026")!;
  const twoBillion = updates.find((u) => u.date === "2026-10-14" && /Two billion Spotify streams in 2026/.test(u.text));
  const first = allFirsts.find((f) => f.title === "First African artist to pass 2 billion Spotify streams in a calendar year");

  it("the feed's 14 Oct line and the /records/firsts entry are on file", () => {
    expect(twoBillion).toBeTruthy();
    expect(first).toBeTruthy();
    expect(twoBillion!.text).toContain("1,986,007,572");
  });

  it("the anchored figure is past two billion and past the 2025 record, and the board prints Burna Boy past both", () => {
    const burna = group.find((m) => m.id === "streams-2026-burna")!;
    expect(burna.anchor.value).toBeGreaterThan(2e9);
    expect(burna.anchor.value).toBeGreaterThan(streamsOf(streamsRecord2025!.value));
    expect(burna.anchor.value).toBeGreaterThan(1_986_007_572);
    expect(pastMark(row2026.entries, 2e9)).toContain("Burna Boy");
    expect(streamsRecord2025!.passedBy).toContain("Burna Boy");
    expect(row2026.note).toContain("Burna Boy");
    expect(row2026.note).toMatch(/passed two billion|past two billion/);
  });

  it("Wizkid's anchored 2026 is past 2025's record too, and the record line names him beside Burna Boy", () => {
    // A mark the 18 Oct read crossed: 1,992,754,642 printed 1.993B, strictly past
    // the 1.986B row. No /updates entry: the feed carries Burna Boy stories only.
    const record = streamsOf(streamsRecord2025!.value);
    const wizkid = group.find((m) => m.id === "streams-2026-wizkid")!;
    expect(wizkid.anchor.value).toBeGreaterThan(record);
    expect(pastMark(row2026.entries, record)).toEqual(expect.arrayContaining(["Burna Boy", "Wizkid"]));
    expect(streamsRecord2025!.passedBy).toEqual(expect.arrayContaining(["Burna Boy", "Wizkid"]));
    expect(row2026.note).toContain("Wizkid");
    // Negative control: his 14 Oct anchor (1.968B) was not past it.
    expect(ANCHOR_1014("streams-2026-wizkid").value).toBeLessThan(record);
  });

  it("the 18 Nov read crosses no new mark: every mark the board calls has the same names on the 13 Nov board", () => {
    // So no /updates line: Burna Boy's 2.241B crosses nothing, and the feed
    // carries Burna Boy stories only. Asake's 1.802B and Tyla's 1.402B are not
    // marks this board calls.
    const record = streamsOf(streamsRecord2025!.value);
    const rows = (pick: (id: string) => number): RankRow["entries"] =>
      group.map((m) => ({ name: READ.artists[SLUG[m.id]].name, value: `${(pick(m.id) / 1e9).toFixed(3)}B` }));
    const before = rows((id) => BEFORE[id].checkpoint.value);
    const anchored = rows((id) => group.find((m) => m.id === id)!.anchor.value);
    for (const mark of [record, 2e9]) expect(pastMark(anchored, mark).sort(), String(mark)).toEqual(pastMark(before, mark).sort());
    expect(pastMark(anchored, 2e9).sort()).toEqual(["Burna Boy", "Tems", "Wizkid"]);
    // The billion and billion-and-a-half counts the note prints, as billionsSentence counts them.
    const count = (entries: RankRow["entries"], mark: number) => entries.filter((e) => streamsOf(e.value) >= mark).length;
    for (const mark of [1e9, 1.5e9]) expect(count(anchored, mark), String(mark)).toBe(count(before, mark));
  });

  it("negative control: the 12 Oct board's 1.996B, as shipped, was past the record and not past two billion", () => {
    const shipped: RankRow["entries"] = [{ name: "Burna Boy", value: "1.996B" }, { name: "Wizkid", value: "1.961B" }];
    expect(pastMark(shipped, 2e9)).toEqual([]);
    expect(pastMark(shipped, streamsOf(streamsRecord2025!.value))).toEqual(["Burna Boy"]);
  });
});

describe("the record lines follow the rows, and never call a crossing early", () => {
  const box = statBoxes.find((b) => b.id === "most-streamed-african-artist")!;
  const row2026 = box.rows!.find((r) => r.label === "2026")!;
  const row2025 = box.rows!.find((r) => r.label === "2025")!;
  const record = streamsOf(row2025.entries[0].value);

  /** The two rows with the 2026 leader set to `burna`. */
  const rowsWith = (burna: string, wizkid = "1.926B"): RankRow[] => [
    { label: "2026", inProgress: true, entries: [{ name: "Burna Boy", value: burna }, { name: "Wizkid", value: wizkid }, { name: "Tems", value: "1.916B" }] },
    { label: "2025", entries: row2025.entries },
  ];

  it("the shipped notes say what the shipped rows say", () => {
    const past = pastMark(row2026.entries, record);
    const two = pastMark(row2026.entries, 2e9);
    expect(streamsRecord2025!.passedBy).toEqual(past);
    if (!past.length && !two.length) {
      // Word for word the sentence the 2025 row carried before it was derived.
      expect(row2025.note).toBe("Burna Boy's 1.986 billion streams set a record for the biggest streaming year ever by an African artist on Spotify.");
      expect(row2026.note).not.toMatch(/two billion|biggest streaming year/);
    } else {
      expect(row2025.note).toContain(`passed in 2026 by`);
      for (const n of past) expect(row2026.note).toContain(n);
    }
    expect(row2026.note).not.toMatch(/\{\{|\}\}/);
    expect(row2025.note).not.toMatch(/\{\{|\}\}/);
  });

  it("equal printed figures are not a pass: 1.986B against 1.986B keeps the record standing", () => {
    const rec = streamsRecordOf(rowsWith("1.986B"))!;
    expect(rec.passedBy).toEqual([]);
    expect(recordNote2025(rec)).toContain("biggest streaming year ever");
    expect(runningYearMarks(rowsWith("1.986B")[0].entries, rec, "2026")).toBe("");
  });

  it("negative control: /records/visualized's old `<` rule gave the record away on those equal strings", () => {
    const later = [streamsOf("1.986B")];
    const oldStands = Math.max(0, ...later) < streamsOf("1.986B");
    expect(oldStands).toBe(false); // called broken while it may still stand
    expect(streamsRecordOf(rowsWith("1.986B"))!.passedBy.length === 0).toBe(true);
  });

  it("one printed thousandth past is a pass, and both lines say so", () => {
    const rows = rowsWith("1.987B");
    const rec = streamsRecordOf(rows)!;
    expect(rec.passedBy).toEqual(["Burna Boy"]);
    expect(recordNote2025(rec)).toBe(
      "Burna Boy's 1.986 billion streams set the record for the biggest streaming year by an African artist on Spotify — passed in 2026 by Burna Boy, with the year still running.",
    );
    expect(runningYearMarks(rows[0].entries, rec, "2026")).toBe(
      "Burna Boy has already passed 2025's 1.986 billion, the biggest streaming year by an African artist on Spotify before 2026. ",
    );
  });

  it("two billion is called only strictly past the printed 2.000B", () => {
    const at = rowsWith("2.000B");
    const rec = streamsRecordOf(at)!;
    expect(runningYearMarks(at[0].entries, rec, "2026")).not.toContain("two billion");
    const past = rowsWith("2.001B");
    expect(runningYearMarks(past[0].entries, streamsRecordOf(past)!, "2026")).toBe(
      "Burna Boy has already passed two billion, and with it 2025's 1.986 billion, the biggest streaming year by an African artist on Spotify before 2026. ",
    );
  });

  it("names everyone past each mark", () => {
    const rows = rowsWith("2.010B", "1.990B");
    expect(runningYearMarks(rows[0].entries, streamsRecordOf(rows)!, "2026")).toBe(
      "Burna Boy and Wizkid have already passed 2025's 1.986 billion, the biggest streaming year by an African artist on Spotify before 2026. Burna Boy is past two billion. ",
    );
  });
});
