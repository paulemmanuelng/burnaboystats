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

/**
 * The 8 Oct 2026 re-anchor of the 2026 running-streams board, on ChartMasters'
 * public artist pages (docs/sourcing/chartmasters/reads/2026-10-08.json).
 *
 * The board had been held on kworb's 4 Oct since kworb skipped its 5 Oct page
 * for Burna Boy, Tems and Asake: their totals fell across the gap, the
 * skipped-day fill refused, and a hole in three ledgers held all five. The
 * re-anchor moves every checkpoint past it, together. These hold the rows to
 * the read — ChartMasters' total minus the 2025 close, for one day, all five —
 * and hold the record lines to the rows, so a crossing the bot writes later is
 * said the day it happens and not before.
 *
 * Nothing here pins a board string: the stats bot runs this suite before it
 * commits, and the rows move every day from the anchor.
 */

const json = (p: string) => JSON.parse(readFileSync(join(process.cwd(), p), "utf8"));
const CONFIG = json("scripts/watched-metrics.json");
const READ = json("docs/sourcing/chartmasters/reads/2026-10-08.json");
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
const CM_DAY = "October 5, 2026";
const KWORB_DAY = "2026-10-06"; // ChartMasters day N pairs with kworb's page stamped N+1

type Ledger = { id: string; anchor: { date: string; value: number; source: string }; checkpoint: { date: string; value: number }; readings: Record<string, number> };
const group: Ledger[] = CONFIG.metrics.filter((m: { group?: string }) => m.group === "streams-2026");
const cmTotal = (slug: string): number => READ.artists[slug].days[CM_DAY];
const close = (slug: string): number => CLOSES[slug].close;

/** The board as it stood before the re-anchor (origin/main 63e558a9, 8 Oct
 *  2026): checkpoints on kworb's 4 Oct, the dailies the bot had banked since,
 *  and a 5 Oct hole for Burna Boy, Tems and Asake. */
const BEFORE: Record<string, { checkpoint: { date: string; value: number }; readings: Record<string, number> }> = {
  "streams-2026-burna": { checkpoint: { date: "2026-10-04", value: 1_940_468_231 }, readings: { "2026-10-06": 6_783_330 } },
  "streams-2026-wizkid": { checkpoint: { date: "2026-10-04", value: 1_914_458_563 }, readings: { "2026-10-05": 5_361_728, "2026-10-06": 5_562_361 } },
  "streams-2026-tems": { checkpoint: { date: "2026-10-04", value: 1_905_226_177 }, readings: { "2026-10-06": 5_231_223 } },
  "streams-2026-asake": { checkpoint: { date: "2026-10-04", value: 1_561_045_782 }, readings: { "2026-10-06": 5_097_226 } },
  "streams-2026-tyla": { checkpoint: { date: "2026-10-04", value: 1_267_523_885 }, readings: { "2026-10-05": 2_795_555, "2026-10-06": 3_122_743 } },
};

describe("the 2026 rows are ChartMasters through 5 Oct minus each 2025 close", () => {
  it("every row's anchor is the read's total minus its close, dated by kworb's 6 Oct page", () => {
    expect(group.map((m) => m.id).sort()).toEqual(Object.keys(SLUG).sort());
    for (const m of group) {
      const slug = SLUG[m.id];
      expect(m.anchor.date, m.id).toBe(KWORB_DAY);
      expect(m.anchor.value, m.id).toBe(cmTotal(slug) - close(slug));
      // The source names where the total was read and what the close is.
      expect(m.anchor.source, m.id).toContain("ChartMasters' public artist page");
      expect(m.anchor.source, m.id).toContain(`chartmasters.org/artist/${slug}/`);
      expect(m.anchor.source, m.id).toContain(close(slug).toLocaleString("en-US"));
      expect(m.anchor.source, m.id).toContain("read 2026-10-08");
    }
  });

  it("all five or none: one date, one read, and the group publishes a common day from it", () => {
    expect(new Set(group.map((m) => m.anchor.date)).size).toBe(1);
    const aligned = alignLedgers(group);
    expect(aligned, "the five ledgers cannot reach a common day").not.toBeNull();
    expect(aligned.date >= KWORB_DAY).toBe(true);
  });

  it("negative control: a lone re-anchor holds the board — the 4 Oct ledgers with only Burna Boy moved publish nothing", () => {
    const lone = Object.keys(SLUG).map((id) =>
      id === "streams-2026-burna"
        ? { id, checkpoint: { date: KWORB_DAY, value: cmTotal("burna-boy") - close("burna-boy") }, readings: {} }
        : { id, ...BEFORE[id] },
    );
    expect(alignLedgers(lone)).toBeNull();
    // And the 4 Oct state itself was stuck on 4 Oct by the 5 Oct holes.
    const before = alignLedgers(Object.keys(SLUG).map((id) => ({ id, ...BEFORE[id] })));
    expect(before?.date).toBe("2026-10-04");
  });

  it("negative control: the board's 4 Oct values are not the read — each is short by whole days of streams", () => {
    for (const [id, b] of Object.entries(BEFORE)) {
      const slug = SLUG[id];
      const now = cmTotal(slug) - close(slug);
      expect(b.checkpoint.value, id).not.toBe(now);
      // Two days behind (ChartMasters' 4 and 5 Oct), under 3 x 8M.
      expect(now - b.checkpoint.value, id).toBeGreaterThan(0);
      expect(now - b.checkpoint.value, id).toBeLessThan(24_000_000);
      expect((b.checkpoint.value / 1e9).toFixed(3), id).not.toBe((now / 1e9).toFixed(3));
    }
  });
});

describe("the read itself", () => {
  it("is the Playcounts Tool's series: each page's September 2026 point equals the Tool's 30 Sep total to the unit", () => {
    for (const slug of Object.values(SLUG)) {
      expect(SERIES.artists[slug].monthEnd["September 2026"], slug).toBe(TOOL_0930.artists[slug].days["September 30, 2026"]);
    }
  });

  it("takes each 5 Oct total from the page's newest point — except Wizkid's, whose page had moved on a day", () => {
    for (const slug of Object.values(SLUG)) {
      const newest = SERIES.artists[slug].monthEnd["October 2026"];
      expect(READ.artists[slug].publicPage.newestPoint, slug).toBe(newest);
      if (slug === "wizkid") {
        // 11,889,076,613 on the page (6 Oct) against the 5 Oct graphic's
        // 11,882,989,347: one day of his streams, and confirmed on the Tool
        // before merge (see the reading's $comment).
        expect(newest - cmTotal(slug)).toBe(6_087_266);
      } else {
        expect(cmTotal(slug), slug).toBe(newest);
      }
    }
  });

  it("closes are ChartMasters' own December 2025 points; Burna Boy's less the February 2026 reallocation", () => {
    for (const slug of ["wizkid", "tems", "asake", "tyla"]) {
      expect(close(slug), slug).toBe(SERIES.artists[slug].monthEnd["December 2025"]);
    }
    expect(SERIES.artists["burna-boy"].monthEnd["December 2025"] - 309_438_350).toBe(close("burna-boy"));
    // Negative control: the 22 Sep derived closes the read replaced.
    expect(close("asake")).not.toBe(2_904_229_392);
    expect(close("tyla")).not.toBe(3_617_292_368);
    // And Burna Boy's raw point is not his close: it would publish the
    // counter's change, 1,644,482,152, as 2026 streams.
    expect(cmTotal("burna-boy") - SERIES.artists["burna-boy"].monthEnd["December 2025"]).toBe(1_644_482_152);
    const burna = group.find((m) => m.id === "streams-2026-burna")!;
    expect(burna.anchor.value).not.toBe(1_644_482_152);
  });

  it("the 2025 record the board prints is ChartMasters' own year for Burna Boy", () => {
    const s = SERIES.artists["burna-boy"].monthEnd;
    const year2025 = s["December 2025"] - s["December 2024"];
    expect(year2025).toBe(1_986_007_572);
    expect(`${(year2025 / 1e9).toFixed(3)}B`).toBe(streamsRecord2025!.value);
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
