import { describe, it, expect } from "vitest";
// @ts-expect-error — plain .mjs helper, no types
import { alignLedgers } from "../scripts/stats-lib.mjs";
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
 * The 14 Oct 2026 re-anchor of the 2026 running-streams board, on ChartMasters'
 * public artist pages, all five on one read
 * (docs/sourcing/chartmasters/reads/2026-10-14.json).
 *
 * Paul, 14 Oct: "use chartmasters for all 5 now". kworb's Tems page froze on
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
const READ_FILE = "docs/sourcing/chartmasters/reads/2026-10-14.json";
const READ = json(READ_FILE);
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
const CM_DAY = "October 12, 2026";
const KWORB_DAY = "2026-10-13"; // ChartMasters day N pairs with kworb's page stamped N+1
const READ_TAG = `read ${READ.readOn}`; // how each anchor's source names the read it came from

type Ledger = { id: string; anchor: { date: string; value: number; source: string }; checkpoint: { date: string; value: number }; readings: Record<string, number> };
const group: Ledger[] = CONFIG.metrics.filter((m: { group?: string }) => m.group === "streams-2026");
const cmTotal = (slug: string): number => READ.artists[slug].days[CM_DAY];
const close = (slug: string): number => CLOSES[slug].close;

/** The board as it stood before the re-anchor (origin/main 24aaca50, 14 Oct
 *  2026): checkpoints on kworb's 12 Oct, the 13 Oct dailies the bot had banked
 *  for four of them, and none for Tems, whose kworb page was frozen on 12 Oct. */
const BEFORE: Record<string, { checkpoint: { date: string; value: number }; readings: Record<string, number> }> = {
  "streams-2026-burna": { checkpoint: { date: "2026-10-12", value: 1_996_343_307 }, readings: { "2026-10-13": 6_690_134 } },
  "streams-2026-wizkid": { checkpoint: { date: "2026-10-12", value: 1_961_318_916 }, readings: { "2026-10-13": 5_694_820 } },
  "streams-2026-tems": { checkpoint: { date: "2026-10-12", value: 1_947_409_574 }, readings: {} },
  "streams-2026-asake": { checkpoint: { date: "2026-10-12", value: 1_605_224_127 }, readings: { "2026-10-13": 5_371_096 } },
  "streams-2026-tyla": { checkpoint: { date: "2026-10-12", value: 1_293_642_422 }, readings: { "2026-10-13": 3_036_906 } },
};
/** Tems' last stamped kworb daily (her 12 Oct page), the one ordinary day the
 *  dating allows her for ChartMasters' 12 Oct. */
const TEMS_LAST_DAILY = 4_915_861;
/** The 8 Oct anchors this read replaced (ChartMasters through 5 Oct, dated by
 *  kworb's 6 Oct pages), as shipped. */
const ANCHOR_1008: Record<string, { date: string; value: number }> = {
  "streams-2026-burna": { date: "2026-10-06", value: 1_953_920_502 },
  "streams-2026-wizkid": { date: "2026-10-06", value: 1_926_017_319 },
  "streams-2026-tems": { date: "2026-10-06", value: 1_915_793_850 },
  "streams-2026-asake": { date: "2026-10-06", value: 1_572_594_760 },
  "streams-2026-tyla": { date: "2026-10-06", value: 1_274_515_534 },
};

/** The read an anchor's source names: chartmasters-anchor.mjs ends it "read <readOn>". */
const readOf = (source: string): string | undefined => [...source.matchAll(/\bread (\d{4}-\d{2}-\d{2})/g)].at(-1)?.[1];
/** One read: every anchor on one date, every source naming the same read. */
const oneRead = (anchors: { date: string; source: string }[]): boolean =>
  new Set(anchors.map((a) => a.date)).size === 1 && new Set(anchors.map((a) => readOf(a.source))).size === 1;

describe("the 2026 rows are ChartMasters through 12 Oct minus each 2025 close", () => {
  it("every row's anchor is the read's total minus its close, dated by kworb's 13 Oct page", () => {
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

  it("negative control: a Tems-only re-anchor is two reads — the one-read check refuses what alignLedgers would publish", () => {
    // This morning's attempt: Tems on this read, the other four still on the
    // 8 Oct anchors with kworb's dailies to 13 Oct. alignLedgers alone would
    // publish it (every ledger reaches 13 Oct), which is why the invariant is
    // the anchors', not the alignment's.
    const tems = group.find((m) => m.id === "streams-2026-tems")!;
    const lone = Object.keys(SLUG).map((id) =>
      id === "streams-2026-tems"
        ? { id, anchor: tems.anchor, checkpoint: { date: KWORB_DAY, value: cmTotal("tems") - close("tems") }, readings: {} }
        : { id, anchor: { ...ANCHOR_1008[id], source: "… read 2026-10-08" }, ...BEFORE[id] },
    );
    expect(alignLedgers(lone)?.date).toBe(KWORB_DAY);
    expect(oneRead(lone.map((m) => m.anchor))).toBe(false);
    // And the state before was stuck on 12 Oct by Tems' frozen page.
    const before = alignLedgers(Object.keys(SLUG).map((id) => ({ id, ...BEFORE[id] })));
    expect(before?.date).toBe("2026-10-12");
  });

  it("negative control: the 8 Oct anchors and the 12 Oct board are not the read", () => {
    for (const m of group) {
      expect(m.anchor.value, m.id).not.toBe(ANCHOR_1008[m.id].value);
      expect(m.anchor.date, m.id).not.toBe(ANCHOR_1008[m.id].date);
    }
    for (const [id, b] of Object.entries(BEFORE)) {
      const slug = SLUG[id];
      const now = cmTotal(slug) - close(slug);
      expect(b.checkpoint.value, id).not.toBe(now);
      // One day behind (ChartMasters' 12 Oct), under 1.5 x 8M.
      expect(now - b.checkpoint.value, id).toBeGreaterThan(0);
      expect(now - b.checkpoint.value, id).toBeLessThan(12_000_000);
      expect((b.checkpoint.value / 1e9).toFixed(3), id).not.toBe((now / 1e9).toFixed(3));
    }
  });

  it("the read dates to 12 Oct: kworb's dailies through 12 Oct land within 0.3 of a day of it, a day either side misses by most of a day", () => {
    for (const [id, b] of Object.entries(BEFORE)) {
      const slug = SLUG[id];
      const now = cmTotal(slug) - close(slug);
      // ChartMasters' 12 Oct is kworb's 13 Oct page; Tems has none, so one
      // ordinary day (her last stamped daily) stands in for it.
      const day12 = b.readings[KWORB_DAY] ?? TEMS_LAST_DAILY;
      const residual = now - (b.checkpoint.value + day12);
      expect(Math.abs(residual), `${id}: through 12 Oct`).toBeLessThan(0.3 * day12);
      expect(now - b.checkpoint.value, `${id}: through 11 Oct leaves most of a day`).toBeGreaterThan(0.7 * day12);
      expect(residual - day12, `${id}: through 13 Oct overshoots most of a day`).toBeLessThan(-0.7 * day12);
    }
  });

  it("Tems alone is anchored past her kworb page, and says so; the other four are same-date pairs", () => {
    for (const m of group) {
      if (m.id === "streams-2026-tems") expect(m.anchor.source).toContain("--kworb-frozen (kworb's newest page was 2026-10-12");
      else expect(m.anchor.source, m.id).not.toContain("--kworb-frozen");
    }
  });
});

describe("the read itself", () => {
  it("is the Playcounts Tool's series: each page's September 2026 point equals the Tool's 30 Sep total to the unit", () => {
    for (const slug of Object.values(SLUG)) {
      expect(SERIES.artists[slug].monthEnd["September 2026"], slug).toBe(TOOL_0930.artists[slug].days["September 30, 2026"]);
    }
  });

  it("takes every 12 Oct total from the page's newest point, all five on one fetch, dated by inference and not on the Tool", () => {
    const fetched = new Set<string>();
    for (const slug of Object.values(SLUG)) {
      const page = READ.artists[slug].publicPage;
      expect(page.newestPoint, slug).toBe(cmTotal(slug));
      expect(page.newestPointDated, slug).toBe("2026-10-12 (inferred)");
      expect(page.url, slug).toBe(`https://chartmasters.org/artist/${slug}/`);
      fetched.add(page.fetchedUtc);
      // Past the 8 Oct read's newest point, never behind it.
      expect(cmTotal(slug), slug).toBeGreaterThan(READ_1008.artists[slug].publicPage.newestPoint);
    }
    expect(fetched.size, "one fetch for all five").toBe(1);
    // No Playcounts Tool confirmation was taken for this read; the file says so
    // and carries none, so nothing can cite one.
    expect(READ.toolConfirmation).toBeUndefined();
    expect(READ.$comment).toContain("NO PLAYCOUNTS TOOL CONFIRMATION");
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
