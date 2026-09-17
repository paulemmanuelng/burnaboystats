import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { statBoxes, rankOf } from "../app/data/africasBiggest";

// The 2026 streaming row marks a figure `tie: true` when it sits within ten
// million of the row above — the resolution of a count anchored to a fan
// tracker's post — and the note calls a level group "joint", never a lead.
// The marks are written by the stats bot from the same rule; this holds the
// shipped file to it, so a hand edit or a bot regression cannot print a
// ranked list the values do not support.
// The rule is whatever the ledger config says. From 12 to 17 Sep 2026 every
// member carried tieWithin 10,000,000 and rows inside it were shown joint;
// on 17 Sep Paul retired the mark (the trackers had Burna Boy on top by 2.7M
// and the site was still calling the three level), so no member carries it
// and the board calls the lead. If the key comes back, the marks must too.
const config = JSON.parse(readFileSync("scripts/watched-metrics.json", "utf8")) as {
  metrics: { group?: string; tieWithin?: number }[];
};
const WITHIN = config.metrics.find((m) => m.group === "streams-2026" && m.tieWithin != null)?.tieWithin ?? 0;

describe("the 2026 streaming row's joint marks follow its own values", () => {
  const box = statBoxes.find((b) => b.id === "most-streamed-african-artist")!;
  const row = box.rows!.find((r) => r.label === "2026")!;
  const values = row.entries.map((e) => Math.round(parseFloat(e.value!) * 1e9));

  it("marks exactly the rows within ten million of the row above", () => {
    row.entries.forEach((e, i) => {
      if (i === 0) {
        expect(e.tie, "the top row is never a tie").toBeFalsy();
        return;
      }
      const gap = values[i - 1] - values[i];
      expect(Boolean(e.tie), `${e.name}: ${gap / 1e6}M behind ${row.entries[i - 1].name}`).toBe(gap < WITHIN);
    });
  });

  it("prints joint places for the marked rows", () => {
    row.entries.forEach((e, i) => {
      if (e.tie) expect(rankOf(row.entries, i)).toBe(rankOf(row.entries, i - 1));
      else expect(rankOf(row.entries, i)).toBe(i + 1 === 1 ? 1 : rankOf(row.entries, i));
    });
  });

  it("no member carries the joint rule today — the lead is called", () => {
    expect(WITHIN).toBe(0);
    expect(row.entries.some((e) => e.tie)).toBe(false);
    expect(row.note).toMatch(/ahead of|behind/);
  });

  it("the note says joint where the rows are joint, and never calls a joint row a lead", () => {
    const [, second, third] = row.entries;
    const joint = Boolean(second.tie) || Boolean(third.tie);
    expect(/joint/.test(row.note!), row.note).toBe(joint);
    if (second.tie && third.tie) expect(row.note).toMatch(/joint first/);
    if (joint) expect(row.note).not.toMatch(/ahead of|behind/);
  });
});
