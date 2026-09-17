import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { performedCountries } from "../app/data/performedCountries";
import { worldShapes } from "../app/data/worldShapes";
import { tours } from "../app/data/tours";

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

// A country card lists two shows and says "…and more" only when `more` is
// set. Belgium had three tour dates in tours.ts and no flag, so the card read
// as a complete record of two (17 Sep 2026). tours[].dates carries a typed
// `country`, so the count is anchored there — festivals and one-offs have
// free-form locations and are not counted.
describe("a country with more tour dates than its card shows says so", () => {
  const ALIAS: Record<string, string> = { USA: "United States", UK: "United Kingdom" };
  it("every performed country with more than two tour dates carries `more`", () => {
    const dates = new Map<string, number>();
    for (const t of tours) for (const d of t.dates ?? []) {
      const name = ALIAS[d.country] ?? d.country;
      dates.set(name, (dates.get(name) ?? 0) + 1);
    }
    const missing = performedCountries
      .filter((c) => (dates.get(c.name) ?? 0) > 2 && !c.more)
      .map((c) => `${c.name} has ${dates.get(c.name)} tour dates in tours.ts but no \`more\` flag — the card reads as a complete record`);
    expect(missing).toEqual([]);
    // The reproducer, in the words the card now speaks.
    const be = performedCountries.find((c) => c.name === "Belgium")!;
    expect(`${be.name}: ${be.events.slice(0, 2).join("; ")}${be.more ? " and more" : ""}`).toMatch(/ and more$/);
  });

  it("the desktop legend no longer calls the markers island nations", () => {
    const page = readFileSync(join(process.cwd(), "app/records/tours/map/page.tsx"), "utf8");
    expect(page).not.toContain("Island nations too small to shade"); // Kosovo is landlocked
    expect(page).toContain("Territories too small to shade");
  });
});
