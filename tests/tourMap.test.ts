import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { performedCountries } from "../app/data/performedCountries";
import { worldShapes } from "../app/data/worldShapes";

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

  it("the marker count is right in the sentence a READER sees", () => {
    /**
     * This is the one that matters, and the first version of this file did not
     * check it. It policed the JSDoc — the ` * ` in its own regex gave it away —
     * so the comment was corrected, the comment was guarded, and the published
     * footnote went on saying "Ten small island nations" to every phone visitor
     * for another day. A guard that reads the explanation instead of the claim
     * is worse than none: it certifies the wrong copy.
     */
    const src = readFileSync(MOBILE, "utf8");
    const rendered = src.slice(src.indexOf("<p className={styles.footNote}>"));
    const m = /(\w+) territories have no usable shape at 110m/.exec(rendered);
    expect(m, `${MOBILE}: no marker-count sentence in the rendered footnote — was it reworded?`).not.toBeNull();
    expect(
      WORDS[m![1].toLowerCase()],
      `the footnote says "${m![1]}" territories carry a marker; the data has ${markers.length}`
    ).toBe(markers.length);
  });

  it("and in the docstring that explains it", () => {
    const src = readFileSync(MOBILE, "utf8");
    const m = /(\w+) territories have no usable\n \* shape at 110m/.exec(src);
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
