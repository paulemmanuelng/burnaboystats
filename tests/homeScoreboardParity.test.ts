import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { homeScoreboard } from "../app/lib/homeScoreboard";
import { numberOnes, chartCountryCount } from "../app/data/charts";
import { numberOneCountryCount, countryNumberOnes, globalChartsTopped, isGlobalChart } from "../app/lib/analysis";
import { allChartItems } from "../app/data/charts";

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

/** The tile, however it is labelled — matched on its href, which is stable. */
const no1Tile = () => homeScoreboard.find((s) => s.href === "/records/charts");

describe("the homepage No. 1s tile", () => {
  it("counts No. 1s on the same basis as the countries beside them", () => {
    const tile = no1Tile();
    expect(tile, "the No. 1s tile has been renamed or removed").toBeTruthy();
    // 9 Sep 2026: the tile moved from `numberOnes` (47, which counts Billboard's
    // Global 200 and Global 200 Excl. US) to `countryNumberOnes` (45), so the
    // numerator and the denominator finally count the same kind of thing.
    expect(tile!.value).toBe(String(countryNumberOnes));
    expect(
      tile!.source,
      "the figure beside a No. 1s count must describe those No. 1s, not every territory charted in",
    ).toContain(`${numberOneCountryCount} countries`);
  });

  // THE ONE THIS FILE EXISTS FOR NOW. The tile said 47 while the panel four
  // hundred pixels to its right said "45 No. 1s across 30 countries" — both
  // derived, neither typed, from two different variables. A test that pinned
  // one and not the other is what let that ship, so this pins both.
  it("the tile and the panel prose cannot disagree", () => {
    const panel = read("app/components/TodaysNumber.tsx");
    expect(
      /countryNumberOnes/.test(panel),
      "TodaysNumber.tsx no longer renders countryNumberOnes — if the panel's figure moved, the tile must move with it",
    ).toBe(true);
    // Only the VALUE is policed. The file still reads `numberOnes` on purpose —
    // the source line derives the disclosure from it (numberOnes -
    // countryNumberOnes) — so a blanket ban on the identifier would fail on the
    // very code that fixes the bug.
    expect(
      /value:\s*String\(numberOnes\)/.test(read("app/lib/homeScoreboard.ts")),
      "homeScoreboard.ts is back to `value: String(numberOnes)` — that is the 47 that contradicted the panel",
    ).toBe(false);
    expect(
      /value:\s*String\(numberOnes\)/.test(read("app/components/MobileHome.tsx")),
      "MobileHome.tsx is back to `value: String(numberOnes)` — desktop would say 45 and mobile 47",
    ).toBe(false);
    // And the numbers themselves, not just the identifiers.
    expect(no1Tile()!.value).toBe(String(countryNumberOnes));
    expect(countryNumberOnes).not.toBe(numberOnes); // else this proves nothing
  });

  // The two global charts are not hidden by the fix — they are named, so a
  // reader can still reach 47 by adding the line up.
  it("names the non-country charts rather than folding them away", () => {
    expect(globalChartsTopped, "no global chart is topped any more — check the tile should still disclose one").toBeGreaterThan(0);
    expect(
      no1Tile()!.source,
      "the source line must disclose the No. 1s that are not country No. 1s",
    ).toContain(`${globalChartsTopped} global charts`);
  });

  // The disclosure counts CHARTS. It used to be written `numberOnes -
  // countryNumberOnes`, which is a count of PLACEMENTS — 2 today only because
  // one release tops both global charts, and 3 the day a second release tops
  // one. The old guard built its expectation from that same expression, so it
  // balanced for any value: the constant sat on both sides, which is the
  // failure mode a Spotify constant already shipped through this year.
  // This anchors to the world instead: there are exactly two global charts, so
  // the printed number can never exceed two.
  it("cannot print more global charts than exist", () => {
    const codes = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c)).filter(isGlobalChart));
    expect(globalChartsTopped).toBeLessThanOrEqual(codes.size);
    const printed = Number(/\+(\d+) global charts/.exec(no1Tile()!.source)?.[1]);
    expect(printed, "the tile prints a number of global charts that do not exist").toBeLessThanOrEqual(codes.size);
    expect(printed).toBe(globalChartsTopped);
  });

  it("never pairs the No. 1s count with the charted-territory count", () => {
    // The original regression: chartCountryCount standing in for the No. 1
    // country count. Guard the value, not just the identifier.
    const tile = no1Tile()!;
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

  // The section BELOW the tiles had the same disease and no guard. Desktop's
  // board CTA read "All 47 career No. 1s" (placements); mobile's read "All 30"
  // (countries) with no noun at all — two different facts behind one link,
  // one click apart. Both now render careerNumberOnes with its noun.
  it("both layouts label the No. 1 board link with the same figure", () => {
    const desktop = read("app/page.tsx");
    const mobile = read("app/components/MobileHome.tsx");
    const LABEL = /All \{careerNumberOnes\} career No\. 1s/;
    expect(desktop, "app/page.tsx no longer renders the board CTA as expected").toMatch(LABEL);
    expect(mobile, "MobileHome's board CTA must say the same thing as desktop's").toMatch(LABEL);
    // The shape that was wrong: a bare count with no noun.
    expect(mobile).not.toMatch(/All \{numberOneCountries\.length\}/);
  });
});
