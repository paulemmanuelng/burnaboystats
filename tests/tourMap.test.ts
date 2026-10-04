import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { performedCountries } from "../app/data/performedCountries";
import { worldShapes } from "../app/data/worldShapes";
import { tours } from "../app/data/tours";
import { tourMapCountries, tourMapTotals } from "../app/lib/tourMapData";

/**
 * Every country on the tour map is actually drawn, and the prose says how many
 * are drawn the second way.
 *
 * The map has TWO encodings, because Natural Earth's 110m geometry has no
 * usable shape for the smallest territories: a shaded country, or a marker.
 * That is easy to forget and easy to miscount — the component's own docstring
 * said "ten island nations" when there are eight, one of which (Kosovo) is
 * landlocked. Nothing failed, because a comment is not executable.
 *
 * It is worth guarding rather than fixing once. A reader auditing the map
 * counts 49 shaded countries against a headline of 57 and concludes eight are
 * missing — which is exactly the wrong conclusion, and one this repo has now
 * reached out loud. The count in that sentence is a published figure like any
 * other, and this file is what stops it going stale.
 */

const MOBILE = "app/components/MobileTourMap.tsx";

describe("the tour map draws every country it counts", () => {
  const shaped = new Set(worldShapes.map((s) => s.code));
  const markers = performedCountries.filter((c) => c.marker);
  const unshaped = performedCountries.filter((c) => !shaped.has(c.code));

  it("no performed country is left undrawn", () => {
    const invisible = unshaped.filter((c) => !c.marker).map((c) => `${c.name} (${c.code})`);
    expect(
      invisible,
      "this country has no 110m shape and no marker, so it is counted in the headline but never rendered"
    ).toEqual([]);
  });

  it("every marker exists because the shape does not", () => {
    // A marker on a country that HAS a shape would double-draw it.
    const redundant = markers.filter((c) => shaped.has(c.code)).map((c) => c.name);
    expect(redundant, "this country is drawn twice — as a shape and as a marker").toEqual([]);
  });

  it("the marker count is real, so the two checks above are not vacuous", () => {
    expect(markers.length).toBeGreaterThan(0);
    expect(markers.length).toBe(unshaped.length);
  });

  const WORDS: Record<string, number> = {
    four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
  };
  const caribbean = markers.filter((c) => c.region === "Caribbean");
  const others = markers.filter((c) => c.region !== "Caribbean").map((c) => c.name);

  /**
   * The counts in the phone footnote as a READER sees it (design response,
   * item 19): "{Eight} small places, {six} Caribbean islands plus Mauritius
   * and Kosovo, are shown as dots." Both counts, and the two names, come from
   * the data. The sentence it replaces said the eight were "territories [with]
   * no usable shape at 110m", which was false for Kosovo (it has a 110m shape;
   * the site's shape file drops it for want of an ISO id).
   */
  const footnoteCounts = (text: string) => {
    const m = /(\w+) small places, (\w+) Caribbean islands plus (.+?), are shown as dots\./.exec(text);
    return m ? { dots: WORDS[m[1].toLowerCase()], caribbean: WORDS[m[2].toLowerCase()], others: m[3].split(" and ") } : null;
  };

  it("the marker counts are right in the sentence a READER sees", () => {
    /**
     * The first version of this file policed the JSDoc — the ` * ` in its
     * own regex gave it away — so the comment was corrected, the comment was
     * guarded, and the published footnote went on saying "Ten small island
     * nations" to every phone visitor for another day. A guard that reads the
     * explanation instead of the claim is worse than none. So this one reads
     * the rendered footnote, in tests/ui/tourMapLayouts.test.tsx, and checks
     * the same derivation here, from the data the component is handed.
     */
    expect(tourMapTotals.dots).toBe(markers.length);
    expect(tourMapTotals.caribbeanDots).toBe(caribbean.length);
    expect(tourMapTotals.otherDotNames).toEqual(others);
    const src = readFileSync(MOBILE, "utf8");
    expect(src, `${MOBILE}: the footnote must print the derived counts, not typed ones`).toContain(
      "{cap(cardinalWord(totals.dots))} small places, {cardinalWord(totals.caribbeanDots)} Caribbean islands plus",
    );
    // What that renders today.
    expect(footnoteCounts("Eight small places, six Caribbean islands plus Mauritius and Kosovo, are shown as dots.")).toEqual({
      dots: markers.length,
      caribbean: caribbean.length,
      others,
    });
  });

  it("negative control: the shipped footnote does not pass the new reading", () => {
    // MobileTourMap.tsx's footnote, shipped until 30 Sep 2026.
    const shipped =
      "Regions and counts are derived from the same 57-country list the desktop map shades. Eight territories have no usable shape at 110m resolution and are plotted as markers rather than filled — the region list above is the accessible equivalent.";
    expect(footnoteCounts(shipped)).toBeNull();
  });

  it("and in the docstring that explains it", () => {
    const src = readFileSync(MOBILE, "utf8");
    const m = /(\w+) small places have no shape\n \* of their own/.exec(src);
    expect(m, `${MOBILE}: no marker-count sentence in the docstring`).not.toBeNull();
    expect(WORDS[m![1].toLowerCase()]).toBe(markers.length);
  });
});

/**
 * Every test file a comment cites actually exists.
 *
 * Three citations in this repo named files that do not: og-lockup.tsx pointed
 * at tests/ogFonts.test.ts (renamed to ogLockup), streamingTotals.ts at a .ts
 * that is .tsx, africasBiggest.ts at hotHundredEntries rather than
 * hotHundredEntryHomes. Each says "this is guarded" and sends the reader
 * nowhere, which is worse than saying nothing — a comment that cites a phantom
 * guard is how an unguarded figure gets treated as a guarded one.
 */
describe("comments cite guards that exist", () => {
  const walk = (dir: string, out: string[] = []): string[] => {
    for (const e of readdirSync(dir)) {
      if (e === "node_modules" || e === ".next") continue;
      const p = join(dir, e);
      if (statSync(p).isDirectory()) walk(p, out);
      else if (/\.(tsx?|mjs)$/.test(p)) out.push(p);
    }
    return out;
  };

  it("no source comment names a test file that is not there", () => {
    const missing: string[] = [];
    let cited = 0;
    for (const f of [...walk("app"), ...walk("scripts")]) {
      const src = readFileSync(f, "utf8");
      for (const m of src.matchAll(/tests\/[A-Za-z0-9_-]+\.test\.tsx?/g)) {
        cited++;
        if (!existsSync(m[0])) missing.push(`${f.slice(process.cwd().length + 1)} cites ${m[0]}`);
      }
    }
    expect(cited, "no test citations found at all — has the convention changed?").toBeGreaterThan(10);
    expect(missing, "a comment claims a guard that does not exist").toEqual([]);
  });
});

// A country card listed two shows and said "…and more" only when a hand-set
// `more` flag was on. Belgium had three tour dates in tours.ts and no flag, so
// its card read as a complete record of two (17 Sep 2026). The design response
// of 30 Sep 2026 drops "…and more" (item 3) and puts a DOCUMENTED line on
// every card with a row instead (item 32): the counts are derived, so this
// checks the counts themselves, against tours.ts, and not only that a line is
// there.
describe("every country with a row carries its documented line", () => {
  const ALIAS: Record<string, string> = { USA: "United States", UK: "United Kingdom" };
  const dates = new Map<string, number>();
  for (const t of tours) for (const d of t.dates ?? []) {
    const name = ALIAS[d.country] ?? d.country;
    dates.set(name, (dates.get(name) ?? 0) + 1);
  }

  it("the tour-date count on every card is tours.ts's own count", () => {
    const off = tourMapCountries.flatMap((c) => {
      const n = dates.get(c.name) ?? 0;
      const want = n === 0 ? null : `${n} tour date${n === 1 ? "" : "s"}`;
      const got = /^(\d+ tour dates?)/.exec(c.documented)?.[1] ?? null;
      return want === got ? [] : [`${c.name}: tours.ts has ${n} tour dates, the card says "${c.documented}"`];
    });
    expect(off).toEqual([]);
  });

  it("Belgium, the reproducer: 3 tour dates, said in the card's own words", () => {
    expect(tourMapCountries.find((c) => c.name === "Belgium")!.documented).toBe("3 tour dates · 2 cities · 2019–2026");
  });

  // Nine until 4 Oct 2026: Ireland's 3Arena night (17 Mar 2022) became a
  // Space Drift tour date, so Ireland's card has a documented line now.
  it("only the eight known from the map's own event lines have none", () => {
    expect(tourMapCountries.filter((c) => !c.documented)).toHaveLength(8);
    expect(tourMapCountries.find((c) => c.name === "Ireland")!.documented).toBe("1 tour date · 1 city · 2022");
  });

  it("no card says '…and more' any more, and the flag is gone from the data", () => {
    // The code, not its comments (the card's docstring says why it went).
    const strip = (src: string) => src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    const code = (f: string) => strip(readFileSync(f, "utf8"));
    for (const f of ["app/components/TourMapCard.tsx", "app/components/TourMapPanel.tsx", "app/components/TourMapDesktop.tsx", "app/components/MobileTourMap.tsx"]) {
      expect(code(f), f).not.toMatch(/and more/);
    }
    // The negative control for this line: the shipped card's JSX.
    expect(strip('{country.more && <span className={styles.cardMore}>…and more</span>}')).toMatch(/and more/);
    expect(readFileSync("app/data/performedCountries.ts", "utf8")).not.toMatch(/more: true/);
  });

  it("negative control: the shipped Belgium card read as a complete record of two", () => {
    // PerformanceMap.tsx's aria-label for Belgium, 17 Sep 2026: two events, no count.
    const shipped = "Belgium: ING Arena, Brussels (2026); Palais 12, Brussels (2019)";
    expect(/^(\d+ tour dates?)/.exec(shipped)).toBeNull();
  });
});

describe("the desktop legend names the dots in reader words", () => {
  // Design response, item 18: "Territories too small to shade" became
  // "Small islands and Kosovo, shown as dots" (Kosovo is not an island,
  // and "110m" is not reader copy).
  const LEGEND = "app/components/TourMapDesktop.tsx";
  it("says what the dots are, and never 'Island nations too small to shade'", () => {
    const src = readFileSync(join(process.cwd(), LEGEND), "utf8");
    expect(src).not.toContain("Island nations too small to shade"); // Kosovo is landlocked
    expect(src).not.toContain("Territories too small to shade");
    expect(src).toContain("Small islands and Kosovo, shown as dots");
    expect(src).toContain("Countries where a show is documented");
    expect(src).toContain("No documented show");
  });
  it("negative control: the shipped legend line fails it", () => {
    const shipped = "Territories too small to shade at 110m";
    expect(shipped.includes("Small islands and Kosovo, shown as dots")).toBe(false);
  });
});
