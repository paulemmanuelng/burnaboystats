import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { homeScoreboard } from "../app/lib/homeScoreboard";
import { numberOnes, chartCountryCount } from "../app/data/charts";
import { numberOneCountryCount } from "../app/lib/analysis";

// The homepage ships two layouts in the same DOM — the desktop scoreboard from
// lib/homeScoreboard.ts and the mobile one built inline in MobileHome.tsx. They
// render the same five tiles, which means they can disagree, and on 27 Aug 2026
// they did: desktop read "48 No. 1s worldwide / 71 countries" while mobile read
// "48 No. 1s worldwide / in 33 countries". Same page, same session, two answers.
//
// 71 was chartCountryCount — every territory he has CHARTED in. Pairing it with
// a No. 1s count asserts he topped the chart in all of them. charts.ts carries
// a comment forbidding precisely that, and quotes the exact string the desktop
// tile was rendering. 33 was closer but counts Billboard's two Global charts as
// countries. The true country-only figure is analysis.numberOneCountryCount,
// which is what both layouts now read; the figures above are left as the
// contemporary record of the bug, not as current values.

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("the homepage No. 1s tile", () => {
  it("counts countries where a release actually reached No. 1", () => {
    const tile = homeScoreboard.find((s) => s.label === "No. 1s worldwide");
    expect(tile, "the No. 1s tile has been renamed or removed").toBeTruthy();
    expect(tile!.value).toBe(String(numberOnes));
    expect(
      tile!.source,
      "the figure beside a No. 1s count must describe those No. 1s, not every territory charted in",
    ).toBe(`${numberOneCountryCount} countries`);
  });

  it("never pairs the No. 1s count with the charted-territory count", () => {
    // The specific regression: chartCountryCount standing in for the No. 1
    // country count. Guard the value, not just the identifier.
    const tile = homeScoreboard.find((s) => s.label === "No. 1s worldwide")!;
    expect(chartCountryCount).not.toBe(numberOneCountryCount); // else this test proves nothing
    expect(tile.source).not.toContain(String(chartCountryCount));
  });

  it("both layouts read the country count from the same module", () => {
    // MobileHome builds its tiles inline, so compare at the source level: both
    // must take numberOneCountryCount from lib/analysis, which excludes the
    // Global pseudo-countries. data/charts exports a same-named constant that
    // does not, and importing that one is how mobile came to say 33.
    const desktop = read("app/lib/homeScoreboard.ts");
    const mobile = read("app/components/MobileHome.tsx");
    for (const [name, src] of [["homeScoreboard.ts", desktop], ["MobileHome.tsx", mobile]] as const) {
      expect(src, `${name} must import numberOneCountryCount from lib/analysis`).toMatch(
        /import \{[^}]*numberOneCountryCount[^}]*\} from "\.\.?\/(?:lib\/)?analysis"/,
      );
      expect(
        /import \{[^}]*\bnumberOneCountryCount\b[^}]*\} from "\.\.\/data\/charts"/.test(src),
        `${name} imports numberOneCountryCount from data/charts, which counts the two Billboard Global charts as countries`,
      ).toBe(false);
    }
  });
});
