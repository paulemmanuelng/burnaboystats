import { describe, it, expect } from "vitest";
import { statBoxes, streamsOf, billionsSentence } from "../app/data/africasBiggest";

/**
 * The 2026 most-streamed note counts how many of the board's five are past a
 * billion and a billion and a half. Both counts used to be typed, and the
 * second went stale: on 26 Sep 2026 the note said "three are past a billion
 * and a half" beside Asake's 1.516B — four. The counts are now thresholds on
 * the rows, and this reads the number words back out of the printed sentence
 * and holds them to the rows.
 */
const WORD: Record<string, number> = {
  no: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
};

/** The two counts a sentence claims, read from its prose. */
function claimed(note: string): { billion: number | null; half: number } {
  const b = /^(\w+) African artists? (?:have|has) passed a billion/i.exec(note);
  const h = /and (?:all )?(\w+) (?:are|is) past a billion and a half/.exec(note);
  return {
    billion: b ? WORD[b[1].toLowerCase()] ?? null : null,
    half: h ? WORD[h[1].toLowerCase()] ?? -1 : 0,
  };
}

const box = statBoxes.find((b) => b.id === "most-streamed-african-artist")!;
const row = box.rows!.find((r) => r.label === "2026")!;
const values = row.entries.map((e) => streamsOf(e.value));

describe("the 2026 note's billion counts come from the rows", () => {
  it("every row value parses", () => {
    for (const v of values) expect(Number.isNaN(v)).toBe(false);
  });

  it("the printed counts match the rows", () => {
    const c = claimed(row.note!);
    expect(c.billion, row.note).toBe(values.filter((v) => v >= 1e9).length);
    expect(c.half, row.note).toBe(values.filter((v) => v >= 1.5e9).length);
  });

  it("no template token survives into the printed note", () => {
    expect(row.note).not.toMatch(/\{\{|\}\}/);
  });

  it("negative control: the sentence the site shipped on 26 Sep 2026 fails against the same rows", () => {
    const shipped =
      "Five African artists have passed a billion Spotify streams in 2026 so far — and three are past a billion and a half, with Burna Boy ahead of Wizkid and Tems, the three of them separated by about 24 million. All five totals are read together, as of 26 September 2026, so the gaps stay comparable; they move together, never one without the others.";
    const shippedRows = [1.886e9, 1.868e9, 1.862e9, 1.516e9, 1.242e9];
    const c = claimed(shipped);
    expect(c.billion).toBe(shippedRows.filter((v) => v >= 1e9).length);
    expect(c.half).not.toBe(shippedRows.filter((v) => v >= 1.5e9).length);
    // …and the same rows now print four.
    const fixed = billionsSentence(shippedRows, "with Burna Boy ahead of Wizkid and Tems", 24);
    expect(claimed(fixed).half).toBe(4);
    expect(fixed).toBe(
      "Five African artists have passed a billion Spotify streams in 2026 so far — and four are past a billion and a half. The top three are separated by about 24 million, with Burna Boy ahead of Wizkid and Tems.",
    );
  });

  it("keeps the one-clause wording when exactly the named three are past a billion and a half", () => {
    const s = billionsSentence([1.9e9, 1.8e9, 1.7e9, 1.4e9, 1.1e9], "with Burna Boy ahead of Wizkid and Tems", 200);
    expect(s).toBe(
      "Five African artists have passed a billion Spotify streams in 2026 so far — and three are past a billion and a half, with Burna Boy ahead of Wizkid and Tems, the three of them separated by about 200 million.",
    );
  });

  it("reads a sub-billion row written in millions as millions", () => {
    expect(streamsOf("998M")).toBe(998e6);
    expect(streamsOf("1.886B")).toBe(1.886e9);
    const s = billionsSentence([1.9e9, 1.8e9, 1.7e9, 1.2e9, 998e6], "with Burna Boy ahead of Wizkid and Tems", 200);
    expect(claimed(s)).toEqual({ billion: 4, half: 3 });
  });
});
