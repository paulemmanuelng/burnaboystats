import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The mobile hero's running order (design response §1.2).
 *
 * The point of the rebuild was one measurement: on a 390×667 screen the first
 * fact used to arrive at y=452, below a ticker, a 62px name, a lede and two
 * pills — so a reader met the site's furniture before they met a number. The
 * figure now leads at y=121 and the whole statistic is complete by y=296.
 *
 * That is a property of the ORDER, not of any single rule, and it is exactly
 * the kind of thing a later edit undoes by accident: re-adding the ticker, or
 * moving the name back above the figure, costs nothing at review time and puts
 * the fold back where it was. So the order is asserted here, along with the two
 * blocks whose return would reintroduce the 452.
 *
 * Positions are checked as source order rather than by rendering: jsdom has no
 * layout, so a rendered test could confirm the elements exist but not that the
 * figure precedes the name — which is the whole claim.
 */

const HERO = readFileSync(join(process.cwd(), "app/components/MobileHome.tsx"), "utf8");
const CSS = readFileSync(join(process.cwd(), "app/components/mobileHome.module.css"), "utf8");

/** Source position of a `styles.x` reference; -1 when absent. */
const at = (cls: string) => HERO.indexOf(`styles.${cls}`);

describe("mobile hero running order", () => {
  it("leads with the live figure, then the caption, then the name", () => {
    const order = ["liveLine", "figure", "caption", "arrivals", "statusRow", "divider", "title", "lede", "primary"];
    for (const cls of order) expect(at(cls), `styles.${cls} is missing`).toBeGreaterThan(-1);
    const positions = order.map(at);
    expect(positions, order.join(" → ")).toEqual([...positions].sort((a, b) => a - b));
  });

  it("puts the figure above the name, not below it", () => {
    expect(at("figure")).toBeLessThan(at("title"));
  });

  it("does not bring back the ticker band or the Today's-number card", () => {
    // Comments still name them; class references are what would restore them.
    for (const gone of ["band", "bandText", "today", "todayInner", "todayFigure", "todayGlyphs"]) {
      expect(at(gone), `styles.${gone} is back`).toBe(-1);
      expect(CSS.includes(`\n.${gone} `), `.${gone} rule is back`).toBe(false);
      expect(CSS.includes(`\n.${gone} {`), `.${gone} rule is back`).toBe(false);
    }
  });

  it("keeps the name as the page's h1, at the design's 30px", () => {
    expect(HERO).toMatch(/<h1 className=\{styles\.title\}>Burna Boy<\/h1>/);
    expect(CSS).toMatch(/\.title \{[^}]*font-size: 30px;/s);
  });

  it("spends its one gradient on the figure and its one glow on the status dot", () => {
    const rules = CSS.split(/\n(?=\.)/);
    const gradients = rules.filter((r) => /(linear|radial)-gradient/.test(r)).map((r) => r.split(" ")[0]);
    const glows = rules.filter((r) => /box-shadow: 0 0 /.test(r)).map((r) => r.split(" ")[0]);
    expect(gradients).toEqual([".figure"]);
    expect(glows).toEqual([".statusDot"]);
  });
});
