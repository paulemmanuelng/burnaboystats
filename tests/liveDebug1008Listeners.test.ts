import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { read, winning } from "./fixtures/cssRules";
import { readMetrics, type Metrics } from "../app/lib/cardTextWidth";
import { listenerCities, countryName, compactListeners, type ListenerCity } from "../app/data/listeners";

/**
 * Live debug of 8 Oct 2026, phone-P-01: #455 (QW13) raised the phone city
 * list's country label from 10px to the 11px floor, and at 320px wide that
 * cut more country names short. burnaboystats.com served, at 320x640 in both
 * themes, five rows ending in an ellipsis:
 *
 *   NEW YORK CITY  UNITED STA…
 *   MANCHESTER     UNITED KING…
 *   BIRMINGHAM     UNITED KING…
 *   JOHANNESBURG   SOUTH AFR…
 *   LOS ANGELES    UNITED STAT…   (over by 0.36px: whole-pixel scrollWidth
 *                                  hides it, the screenshot does not)
 *
 * At the old 10px three were already cut, two of them by a fifth of a pixel
 * or less: NEW YORK CITY, MANCHESTER and BIRMINGHAM ("UNITED KINGD…").
 *
 * The name cell is one nowrap run (flag, city, country) with an ellipsis, so
 * a wider country label is clipped rather than wrapped. The fix keeps the 11px
 * floor and, below 360, sets the country on its own line under the city.
 *
 * These lay the row out the way the browser does, from the stylesheet and the
 * site's own fonts (public/fonts: Anton for the city and the count, Space Mono
 * for the country), and check the model against the widths measured on the
 * live page before trusting it.
 */

const CSS = read("app/components/mobileListeners.module.css");
const LABEL = Number(read("app/globals.css").match(/--type-label:\s*([\d.]+)px/)![1]);
const anton = readMetrics(readFileSync("public/fonts/Anton-Regular.ttf"));
const mono = readMetrics(readFileSync("public/fonts/SpaceMono-Regular.ttf"));

/** A run's width: each letter's advance, plus the tracking after every letter. */
const run = (m: Metrics, text: string, size: number, tracking: number) => {
  let units = 0;
  let letters = 0;
  for (const ch of text) {
    units += m.advance(m.glyph(ch.codePointAt(0)!));
    letters++;
  }
  return (units * size) / m.unitsPerEm + tracking * letters;
};

/** Does a rule's @media apply at viewport width `w`? Width queries only; a
 *  query on anything else is treated as not applying. */
const at = (w: number) => (media: string | null) => {
  if (media === null) return true;
  const rest = media.replace(/@media|and|\(\s*(?:max|min)-width:\s*[\d.]+px\s*\)/g, "").trim();
  if (rest) return false;
  const max = [...media.matchAll(/max-width:\s*([\d.]+)px/g)].every((m) => w <= Number(m[1]));
  const min = [...media.matchAll(/min-width:\s*([\d.]+)px/g)].every((m) => w >= Number(m[1]));
  return max && min;
};
const css = (w: number, selector: string, prop: string) => winning(CSS, selector, prop, at(w));
/** px from "11px", "var(--type-label)" or "0.08em" (of `size`). */
const px = (v: string | undefined, size = 0) => {
  if (v === undefined || v === "0") return 0;
  if (v === "var(--type-label)") return LABEL;
  if (v.endsWith("em")) return parseFloat(v) * size;
  if (v.endsWith("px")) return parseFloat(v);
  throw new Error(`unread length: ${v}`);
};

type CountryRule = { display: string; marginLeft: number; size: number; trackingEm: number };

/** The country label's rule at width `w`, as the stylesheet sets it. */
const countryRuleAt = (w: number): CountryRule => ({
  display: css(w, ".cityCountry", "display") ?? "inline",
  marginLeft: px(css(w, ".cityCountry", "margin-left")),
  size: px(css(w, ".cityCountry", "font-size")),
  trackingEm: parseFloat(css(w, ".cityCountry", "letter-spacing") ?? "0"),
});

// The flag span ("🇺🇸 ": the flag and Anton's space) at 15px, in Apple's
// colour-emoji face, as Chrome laid it out on the live page on 8 Oct 2026:
// 22.83px. iPhones draw the same face.
const FLAG_SPAN_EM = 22.83 / 15;

/** The widths of the line(s) the name cell sets for `c` under `rule`. */
function lines(c: ListenerCity, w: number, rule: CountryRule): number[] {
  const size = px(css(w, ".cityName", "font-size"));
  const tracking = px(css(w, ".cityName", "letter-spacing"), size);
  const city = FLAG_SPAN_EM * size + run(anton, c.city.toUpperCase(), size, tracking);
  const space = run(anton, " ", size, tracking);
  const country = rule.marginLeft + run(mono, countryName(c).toUpperCase(), rule.size, rule.trackingEm * rule.size);
  return rule.display === "block" ? [city + space, country] : [city + space + country];
}

/** The name cell's width: the row less its padding, the rank track, the two
 *  gaps and the count (Anton, sized to its content). */
function column(c: ListenerCity, w: number): number {
  const padX = px(css(w, ".city", "padding")!.split(/\s+/)[1]);
  const rank = px(css(w, ".city", "grid-template-columns")!.split(/\s+/)[0]);
  const gap = px(css(w, ".city", "gap"));
  const count = run(anton, compactListeners(c.listeners), px(css(w, ".cityCount", "font-size")), 0);
  return w - 2 * padX - rank - 2 * gap - count;
}

/** The rows whose name cell runs past its width — the ones an ellipsis cuts. */
const cutRows = (w: number, rule: CountryRule) =>
  listenerCities.filter((c) => lines(c, w, rule).some((l) => l > column(c, w))).map((c) => c.city);

const city = (name: string) => listenerCities.find((c) => c.city === name)!;

describe("phone-P-01 (live debug 8 Oct 2026): the phone city list shows every country in full", () => {
  // As burnaboystats.com served it on 8 Oct 2026: one line, the 11px label.
  const SHIPPED: CountryRule = { display: "inline", marginLeft: 7, size: 11, trackingEm: 0.08 };

  it("the model is the live page: Chrome's cell and line widths at 320, at 11px and at the old 10px", () => {
    // Each name cell's width and the right edge of its country label, from
    // getBoundingClientRect on the live page (8 Oct 2026, 320x640).
    const LIVE: [string, number, number, number][] = [
      // city, cell, line at 11px, line at 10px
      ["New York City", 207.344, 217.141, 208.141],
      ["Manchester", 204.719, 214.469, 204.781],
      ["Birmingham", 204.719, 214.594, 204.906],
      ["Johannesburg", 204.719, 212.469, 204.156],
      ["Los Angeles", 204.719, 205.078, NaN],
      ["Frankfurt am Main", 207.344, 205.328, NaN],
    ];
    for (const [name, cell, at11, at10] of LIVE) {
      const c = city(name);
      expect(Math.abs(column(c, 320) - cell), `${name} cell`).toBeLessThan(0.1);
      expect(Math.abs(lines(c, 320, SHIPPED)[0] - at11), `${name} at 11px`).toBeLessThan(0.1);
      if (!Number.isNaN(at10)) expect(Math.abs(lines(c, 320, { ...SHIPPED, size: 10 })[0] - at10), `${name} at 10px`).toBeLessThan(0.1);
    }
  });

  it("negative control: the shipped one-line rule cuts the five rows the live page cut, and the old 10px the three it cut", () => {
    expect(cutRows(320, SHIPPED)).toEqual(["New York City", "Manchester", "Birmingham", "Johannesburg", "Los Angeles"]);
    expect(cutRows(320, { ...SHIPPED, size: 10 })).toEqual(["New York City", "Manchester", "Birmingham"]);
    // At 360 the live page cut nothing, at either size.
    expect(cutRows(360, SHIPPED)).toEqual([]);
    expect(cutRows(360, { ...SHIPPED, size: 10 })).toEqual([]);
  });

  it.each([320, 330, 340, 350, 359, 360, 375, 390, 412, 430, 600, 768, 900])(
    "at %ipx no row is cut, and the country stays on the 11px floor",
    (w) => {
      const rule = countryRuleAt(w);
      expect(rule.size).toBeGreaterThanOrEqual(LABEL);
      expect(cutRows(w, rule)).toEqual([]);
    },
  );

  it("the country drops under the city only below 360, where one line cannot hold it", () => {
    for (const w of [320, 359]) expect(countryRuleAt(w)).toMatchObject({ display: "block", marginLeft: 0 });
    // From 360 the row keeps its one line, as designed.
    for (const w of [360, 390, 430]) expect(countryRuleAt(w)).toMatchObject({ display: "inline", marginLeft: 7 });
  });
});
