import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { count } from "../app/lib/plural";
import { sweptArtists, chartNo1s, chartEntries, chartTerritories } from "../app/data/afrobeats";

/**
 * A counted noun in generated metadata has to agree with its number.
 *
 * The chart-board <title> read `${chartNo1s(a)} No.1s`, which is correct for
 * fourteen of the board and wrong for the three artists who have exactly one —
 * Black Sherif, Victony and Fireboy DML each shipped "1 No.1s" in the title
 * tag, the most visible string a page has.
 *
 * The same function already used the count() pluraliser two lines below, for
 * entries and territories. Only the No.1s figure was interpolated bare.
 */
describe("generated metadata plurals", () => {
  it("no board's counted nouns disagree with their number", () => {
    const wrong: string[] = [];
    for (const a of sweptArtists as any[]) {
      const strings = [
        count(chartNo1s(a), "No.1", "No.1s"),
        count(chartEntries(a), "entry", "entries"),
        count(chartTerritories(a), "territory", "territories"),
      ];
      for (const s of strings) {
        // "1 entries" / "1 No.1s" / "2 entry" all fail; "1 entry" passes.
        if (/^1 \w+(s|ies)$/.test(s) || /^(?!1 )\d+ (entry|territory|No\.1)$/.test(s))
          wrong.push(`${a.slug}: "${s}"`);
      }
    }
    expect(wrong).toEqual([]);
  });

  it("the chart-board page never interpolates a bare figure before a plural noun", () => {
    // The guard above only covers figures this test knows to build. This one
    // catches a NEW bare interpolation being added beside a hardcoded plural.
    const src = readFileSync("app/afrobeats/[artist]/charts/page.tsx", "utf8");
    const bare = [...src.matchAll(/\$\{(?!count\()[^}]*\([^)]*\)\}\s+[A-Za-z][A-Za-z0-9.]*s\b/g)].map((m) => m[0]);
    expect(bare, "wrap this in count(n, singular, plural)").toEqual([]);
  });
});
