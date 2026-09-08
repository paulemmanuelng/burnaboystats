import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
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

  it("the component's docstring states the marker count correctly", () => {
    // The failure this replaces: the sentence said "ten island nations" over a
    // set of eight, and named them all islands when one is landlocked.
    const src = readFileSync(MOBILE, "utf8");
    const m = /(\w+) territories have no usable\n \* shape at 110m/.exec(src);
    expect(m, `${MOBILE}: no marker-count sentence found — was the docstring reworded?`).not.toBeNull();
    const WORDS: Record<string, number> = {
      four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
    };
    expect(
      WORDS[m![1].toLowerCase()],
      `${MOBILE} says "${m![1]}" territories carry a marker; the data has ${markers.length}`
    ).toBe(markers.length);
  });
});
