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
 * The 18 Oct 2026 re-anchor of the 2026 running-streams board, on ChartMasters'
 * public artist pages, all five on one read, with the career offset
 * (docs/sourcing/chartmasters/reads/2026-10-18.json).
 *
 * The board was held at its 14 Oct checkpoint: kworb skipped Tems' 15 Oct page
 * (14 Oct -> 16 Oct), the stats bot's runs since 16 Oct 21:12 UTC stopped
 * before committing, so the committed ledgers never banked kworb's 16 Oct
 * pages, and by 18 Oct Burna Boy's 16 Oct was a hole the skipped-day fill
 * refuses. On Paul's rule of 14 Oct ("use chartmasters for all 5"), all five
 * move together, on one read, through ChartMasters' 16 Oct (dated by
 * inference), paired with kworb's 17 Oct pages and run with --kworb-frozen for
 * Tems, whose page was on 16 Oct. These hold the rows to that read and the
 * dating to kworb's dailies, the 14 Oct read and the shipped ledgers.
 *
 * The 14 Oct 2026 re-anchor before it (docs/sourcing/chartmasters/reads/2026-10-14.json),
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
const READ_FILE = "docs/sourcing/chartmasters/reads/2026-10-18.json";
const READ = json(READ_FILE);
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
const CM_DAY = "October 16, 2026";
const KWORB_DAY = "2026-10-17"; // ChartMasters day N pairs with kworb's page stamped N+1
const CM_DAY_1014 = "October 12, 2026"; // the 14 Oct read's day
const READ_TAG = `read ${READ.readOn}`; // how each anchor's source names the read it came from

type Ledger = { id: string; anchor: { date: string; value: number; source: string }; checkpoint: { date: string; value: number }; readings: Record<string, number> };
const group: Ledger[] = CONFIG.metrics.filter((m: { group?: string }) => m.group === "streams-2026");
const cmTotal = (slug: string): number => READ.artists[slug].days[CM_DAY];
const close = (slug: string): number => CLOSES[slug].close;

/** The board as it stood before the re-anchor (origin/main ec55043c, last bot
 *  commit db35e489 of 16 Oct 16:53 UTC): checkpoints on kworb's 14 Oct, the
 *  15 Oct dailies the bot had banked for four of them, and none for Tems, whose
 *  kworb page skipped 15 Oct. */
const BEFORE: Record<string, { checkpoint: { date: string; value: number }; readings: Record<string, number> }> = {
  "streams-2026-burna": { checkpoint: { date: "2026-10-14", value: 2_010_260_369 }, readings: { "2026-10-15": 6_852_693 } },
  "streams-2026-wizkid": { checkpoint: { date: "2026-10-14", value: 1_974_030_006 }, readings: { "2026-10-15": 5_872_449 } },
  "streams-2026-tems": { checkpoint: { date: "2026-10-14", value: 1_957_913_974 }, readings: {} },
  "streams-2026-asake": { checkpoint: { date: "2026-10-14", value: 1_617_274_987 }, readings: { "2026-10-15": 5_336_272 } },
  "streams-2026-tyla": { checkpoint: { date: "2026-10-14", value: 1_300_036_138 }, readings: { "2026-10-15": 3_325_074 } },
};
/** kworb's pages as the shipped ledgers last banked them: Tems' 14 Oct page and
 *  Burna Boy's 15 Oct page (lastStamp in db35e489). */
const TEMS_STAMP_1014 = { date: "2026-10-14", total: 6_284_532_247, daily: 5_074_081 };
const BURNA_STAMP_1015 = { date: "2026-10-15", total: 11_058_966_683, daily: 6_852_693 };
/** The 14 Oct anchors this read replaced: the same relation on the 14 Oct read
 *  (ChartMasters through 12 Oct minus the close), dated by kworb's 13 Oct pages. */
const ANCHOR_1014 = (id: string) => ({ date: "2026-10-13", value: READ_1014.artists[SLUG[id]].days[CM_DAY_1014] - close(SLUG[id]) });
/** ChartMasters' days 13–16 Oct, carried by kworb's pages stamped 14–17 Oct. */
const DAYS = ["2026-10-13", "2026-10-14", "2026-10-15", "2026-10-16"];

/** The read an anchor's source names: chartmasters-anchor.mjs ends it "read <readOn>". */
const readOf = (source: string): string | undefined => [...source.matchAll(/\bread (\d{4}-\d{2}-\d{2})/g)].at(-1)?.[1];
/** One read: every anchor on one date, every source naming the same read. */
const oneRead = (anchors: { date: string; source: string }[]): boolean =>
  new Set(anchors.map((a) => a.date)).size === 1 && new Set(anchors.map((a) => readOf(a.source))).size === 1;

describe("the 2026 rows are ChartMasters through 16 Oct minus each 2025 close", () => {
  it("every row's anchor is the read's total minus its close, dated by kworb's 17 Oct page", () => {
    expect(group.map((m) => m.id).sort()).toEqual(Object.keys(SLUG).sort());
    for (const m of group) {
      const slug = SLUG[m.id];
      expect(m.anchor.date, m.id).toBe(KWORB_DAY);
      expect(m.anchor.value, m.id).toBe(cmTotal(slug) - close(slug));
      // The source names where the total was read and what the close is.
      expect(m.anchor.source, m.id).toContain("ChartMasters' public artist page");
      expect(m.anchor.source, m.id).toContain(`chartmasters.org/artist/${slug}/`);
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

  it("why it was needed: the shipped board was stuck on 14 Oct, and with kworb's later pages Burna Boy's 16 Oct was a hole the fill refuses", () => {
    const before = alignLedgers(Object.keys(SLUG).map((id) => ({ id, ...BEFORE[id] })));
    expect(before?.date, "Tems had no daily after her 14 Oct page").toBe("2026-10-14");
    // Burna Boy's 15 Oct page (banked) to his 17 Oct page (read this morning)
    // skips 16 Oct, and his page's totals leave far more than a day for it.
    const next = { date: KWORB_DAY, total: READ.kworbStamps["burna-boy"].total, daily: READ.kworbStamps["burna-boy"].daily };
    const fill = fillSkippedDays(BEFORE["streams-2026-burna"].checkpoint, BEFORE["streams-2026-burna"].readings, BURNA_STAMP_1015, next);
    expect(fill.filled).toEqual([]);
    expect(fill.reason).toMatch(/left as a hole/);
    // Negative control: the same stamps with an ordinary day's movement fill it.
    const ordinary = { ...next, total: BURNA_STAMP_1015.total + 2 * next.daily };
    expect(fillSkippedDays(BEFORE["streams-2026-burna"].checkpoint, BEFORE["streams-2026-burna"].readings, BURNA_STAMP_1015, ordinary).filled).toEqual(["2026-10-16"]);
  });

  it("negative control: a subset re-anchor is two reads — the one-read check refuses what alignLedgers would publish", () => {
    // The four whose kworb pages reached 17 Oct on this read, and Tems left on
    // her kworb ledger, filled to 17 Oct from the fan tracker's post: alignLedgers
    // alone would publish it (every ledger reaches 17 Oct), which is why the
    // invariant is the anchors', not the alignment's.
    const tems = BEFORE["streams-2026-tems"];
    // (The four sit on their anchors, not their live checkpoints, which the bot
    // rolls forward every day.)
    const temsFilled = { "2026-10-15": READ.dating.tems.dailies["2026-10-14"], "2026-10-16": READ.kworbStamps.tems.daily, "2026-10-17": READ.crossCheck.figures.tems };
    const mixed = group.map((m) =>
      m.id === "streams-2026-tems"
        ? { id: m.id, anchor: { ...ANCHOR_1014(m.id), source: "… read 2026-10-14" }, checkpoint: tems.checkpoint, readings: temsFilled }
        : { id: m.id, anchor: m.anchor, checkpoint: { date: m.anchor.date, value: m.anchor.value }, readings: {} },
    );
    expect(alignLedgers(mixed)?.date).toBe(KWORB_DAY);
    expect(oneRead(mixed.map((m) => m.anchor))).toBe(false);
  });

  it("negative control: the 14 Oct anchors and the 14 Oct board are not the read", () => {
    for (const m of group) {
      expect(m.anchor.value, m.id).not.toBe(ANCHOR_1014(m.id).value);
      expect(m.anchor.date, m.id).not.toBe(ANCHOR_1014(m.id).date);
    }
    for (const [id, b] of Object.entries(BEFORE)) {
      const slug = SLUG[id];
      const now = cmTotal(slug) - close(slug);
      expect(b.checkpoint.value, id).not.toBe(now);
      // Three days behind (kworb's 15, 16 and 17 Oct), each under 1.5 x 8M.
      expect(now - b.checkpoint.value, id).toBeGreaterThan(0);
      expect(now - b.checkpoint.value, id).toBeLessThan(3 * 12_000_000);
      expect((b.checkpoint.value / 1e9).toFixed(3), id).not.toBe((now / 1e9).toFixed(3));
      // The shipped checkpoint is the 14 Oct anchor plus kworb's 14 Oct daily,
      // the first day of the dating below.
      expect(b.checkpoint.value - ANCHOR_1014(id).value, id).toBe(READ.dating[slug].dailies["2026-10-13"]);
    }
  });

  it("the dating's dailies are kworb's pages as shipped and as read: the 15 Oct banked, the 17 Oct read this morning, Tems' skipped day from her pages' totals", () => {
    for (const [id, b] of Object.entries(BEFORE)) {
      const slug = SLUG[id];
      const d = READ.dating[slug].dailies;
      expect(Object.keys(d), id).toEqual(DAYS);
      const stamp = READ.kworbStamps[slug];
      if (id === "streams-2026-tems") {
        // Her page skipped 15 Oct and had not reached 17 Oct.
        expect(stamp.lastUpdated).toBe("2026-10-16");
        expect(d["2026-10-14"]).toBe(stamp.total - TEMS_STAMP_1014.total - stamp.daily);
        expect(d["2026-10-15"]).toBe(stamp.daily);
        // One ordinary day (her last stamped daily) for the 17 Oct page she lacks.
        expect(d["2026-10-16"]).toBe(stamp.daily);
      } else {
        expect(stamp.lastUpdated, id).toBe(KWORB_DAY);
        expect(d["2026-10-14"], id).toBe(b.readings["2026-10-15"]);
        expect(d["2026-10-16"], id).toBe(stamp.daily);
      }
    }
  });

  it("the read dates to 16 Oct: kworb's dailies through 16 Oct land within 0.15 of a day of it, a day either side misses by most of a day", () => {
    for (const slug of Object.values(SLUG)) {
      const d = READ.dating[slug].dailies;
      const growth = cmTotal(slug) - READ_1014.artists[slug].days[CM_DAY_1014];
      const through = (n: number) => growth - DAYS.slice(0, n).reduce((s, k) => s + d[k], 0);
      const day16 = d["2026-10-16"];
      expect(through(4), slug).toBe(READ.dating[slug].residualThrough16Oct);
      expect(Math.abs(through(4)), `${slug}: through 16 Oct`).toBeLessThan(0.15 * day16);
      expect(through(3), `${slug}: through 15 Oct leaves most of a day`).toBeGreaterThan(0.7 * day16);
      // No kworb page carries 17 Oct yet: one more ordinary day.
      expect(through(4) - day16, `${slug}: through 17 Oct overshoots most of a day`).toBeLessThan(-0.7 * day16);
    }
  });

  it("Tems alone is anchored past her kworb page, and says so; the other four are same-date pairs", () => {
    for (const m of group) {
      if (m.id === "streams-2026-tems") expect(m.anchor.source).toContain("--kworb-frozen (kworb's newest page was 2026-10-16");
      else expect(m.anchor.source, m.id).not.toContain("--kworb-frozen");
    }
  });

  it("the fan tracker's 16 Oct post is a cross-check only: no ledger carries it", () => {
    for (const m of group) {
      const slug = SLUG[m.id];
      for (const v of Object.values(m.readings ?? {})) expect(v, m.id).not.toBe(READ.crossCheck.figures[slug]);
      expect(m.anchor.source, m.id).not.toMatch(/WITTIEWIZ/);
    }
    expect(READ.crossCheck.$comment).toContain("Not used as data");
  });
});

describe("the read itself", () => {
  it("is the Playcounts Tool's series: each page's September 2026 point equals the Tool's 30 Sep total to the unit", () => {
    for (const slug of Object.values(SLUG)) {
      expect(SERIES.artists[slug].monthEnd["September 2026"], slug).toBe(TOOL_0930.artists[slug].days["September 30, 2026"]);
    }
  });

  it("takes every 16 Oct total from the page's newest point, all five on one fetch, dated by inference and not on the Tool", () => {
    const fetched: number[] = [];
    for (const slug of Object.values(SLUG)) {
      const page = READ.artists[slug].publicPage;
      expect(page.newestPoint, slug).toBe(cmTotal(slug));
      expect(page.newestPointDated, slug).toBe("2026-10-16 (inferred)");
      expect(page.url, slug).toBe(`https://chartmasters.org/artist/${slug}/`);
      fetched.push(Date.parse(page.fetchedUtc));
      // Past the 14 Oct read's newest point, never behind it.
      expect(cmTotal(slug), slug).toBeGreaterThan(READ_1014.artists[slug].publicPage.newestPoint);
    }
    expect(fetched.every(Number.isFinite)).toBe(true);
    expect(Math.max(...fetched) - Math.min(...fetched), "one fetch for all five, inside a minute").toBeLessThan(60_000);
    // No Playcounts Tool confirmation was taken for this read; the file says so
    // and carries none, so nothing can cite one.
    expect(READ.toolConfirmation).toBeUndefined();
    expect(READ.$comment).toContain("NO PLAYCOUNTS TOOL CONFIRMATION");
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
    // A mark the 18 Oct read crosses: 1,992,754,642 prints 1.993B, strictly past
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
