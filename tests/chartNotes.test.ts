import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

/**
 * A run note must agree with the number beside it.
 *
 * Several chart rows carry a prose note explaining a non-consecutive run —
 * "six weeks at No.1, not consecutive - it fell to No.3 in the 15 August issue".
 * The note is written once and the figure moves every week, so the two drift
 * apart silently: the 6 Sep sweep raised Global 200 to seven weeks at No. 1 and
 * left the note saying six, which would have shipped a row contradicting itself
 * inside a single pair of braces.
 */
const WORDS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
  eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13,
  fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18,
};

describe("chart run notes", () => {
  it("a note's spelled-out week count matches its own weeksAtPeak", () => {
    const src = readFileSync("app/data/charts.ts", "utf8");
    const bad: string[] = [];
    const re = /\{ c: "(\w+)", peak: \d+, weeksAtPeak: (\d+)[^}]*?note: "(\w+) weeks at No\.\s?1/g;
    let m: RegExpExecArray | null;
    let checked = 0;
    while ((m = re.exec(src))) {
      const [, code, wap, word] = m;
      const spelled = WORDS[word.toLowerCase()];
      if (spelled === undefined) continue;
      checked++;
      if (spelled !== Number(wap))
        bad.push(`${code}: weeksAtPeak is ${wap} but its note says "${word}"`);
    }
    // Anti-vacuity: if the regex stops matching, this test would pass while
    // checking nothing. Several rows carry such a note today.
    expect(checked).toBeGreaterThanOrEqual(5);
    expect(bad).toEqual([]);
  });
});
