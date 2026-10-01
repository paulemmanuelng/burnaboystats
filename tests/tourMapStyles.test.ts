import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

/**
 * The tour map's look, read from its stylesheets (design response of 30 Sep
 * 2026, change list items 8, 12, 22–28 and 30a, and the review of 1 Oct).
 *
 * Each guard runs the same check on the rule as it is now and on the line the
 * site shipped before the redesign (origin/main cda9fb74, quoted verbatim
 * below), so a guard that passes on both would be caught as vacuous. Where the
 * redesign renamed a class (.countBig became .figValue, .cardRegion became the
 * card sheet's .region), the check is the same and only the selector differs.
 */

const MAP = readFileSync("app/records/tours/map/map.module.css", "utf8");
const SVG = readFileSync("app/components/tourMapSvg.module.css", "utf8");
const CARD = readFileSync("app/components/tourMapCard.module.css", "utf8");
const PHONE = readFileSync("app/components/mobileTourMap.module.css", "utf8");

const stripComments = (css: string) => css.replace(/\/\*[\s\S]*?\*\//g, "");

/** The body of one @media block, by its exact query text. */
const media = (css: string, query: string) => {
  const clean = stripComments(css);
  const at = clean.indexOf(`@media ${query}`);
  if (at < 0) return "";
  const open = clean.indexOf("{", at);
  let depth = 0;
  for (let i = open; i < clean.length; i++) {
    if (clean[i] === "{") depth++;
    else if (clean[i] === "}" && --depth === 0) return clean.slice(open + 1, i);
  }
  return "";
};

/** The top level only: comments and @media blocks removed. */
const top = (css: string) => stripComments(css).replace(/@media[^{]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g, "");

/** Rules in source order: [selector, declarations]. Selectors are
 *  whitespace-normalised, so ".a,\n.b" reads ".a, .b". */
const rules = (css: string) =>
  [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => {
    const d: Record<string, string> = {};
    for (const part of m[2].split(";")) {
      const i = part.indexOf(":");
      if (i > 0) d[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
    return [m[1].trim().replace(/\s+/g, " "), d] as const;
  });

/** The declarations of one exact selector, later rules winning. */
const decls = (css: string, selector: string) =>
  Object.assign({}, ...rules(css).filter(([s]) => s === selector).map(([, d]) => d)) as Record<string, string>;

const px = (v: string | undefined) => (v === undefined ? NaN : parseFloat(v));

// ── The shipped lines (origin/main cda9fb74), verbatim ─────────────────────
const SHIPPED_MAP = `
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 40px; }
.kicker {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--gold);
}
.countBig {
  font-family: var(--font-anton), sans-serif;
  font-weight: 400;
  font-size: 58px;
  line-height: 0.9;
  color: var(--gold);
  font-variant-numeric: tabular-nums;
}
.frame { position: relative; border: 1px solid var(--line); background: var(--bg-soft); }
.swatch {
  width: 14px;
  height: 14px;
  background: color-mix(in srgb, var(--gold-wash-base) 42%, transparent);
  border: 1px solid var(--gold);
  display: block;
  flex: none;
}
.namesCell { font-size: 13.5px; line-height: 1.7; color: var(--text-body); }
.pills { display: flex; gap: 10px; flex-wrap: wrap; padding: 40px 0 72px; }
.on {
  fill: color-mix(in srgb, var(--gold-wash-base) 42%, transparent);
  stroke: color-mix(in srgb, var(--scrim-base) 90%, transparent);
  stroke-width: 0.4;
  cursor: pointer;
  transition: fill 0.15s ease;
  outline: none;
}
.on:hover,
.on:focus-visible { fill: var(--gold-hit); }
.activePath { fill: var(--gold-hit); }
.card {
  position: fixed;
  z-index: 50;
  pointer-events: none;
  background: color-mix(in srgb, var(--veil-base) 97%, transparent);
  border: 1px solid var(--gold);
  box-shadow: 0 10px 34px color-mix(in srgb, var(--shadow-base) calc(55% * var(--shadow-strength)), transparent);
  padding: 12px 14px;
  max-width: 280px;
}
.cardAbove .arrow { bottom: -7px; border-top: 7px solid var(--gold); }
.cardBelow .arrow { top: -7px; border-bottom: 7px solid var(--gold); }
.cardRegion {
  display: block;
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--gold);
  margin-top: 4px;
}
`;
// ── Desktop pills: inside the content column ────────────────────────────────

/** The side padding an element carrying every one of these classes gets
 *  (same specificity, so source order decides), from the top level. */
const sidePadding = (css: string, classes: string[]) => {
  let left: string | undefined, right: string | undefined;
  for (const [sel, d] of rules(top(css))) {
    if (!classes.includes(sel)) continue;
    if (d.padding) {
      const v = d.padding.split(/\s+/);
      right = v[1] ?? v[0];
      left = v[3] ?? v[1] ?? v[0];
    }
    if (d["padding-inline"]) {
      const v = d["padding-inline"].split(/\s+/);
      left = v[0];
      right = v[1] ?? v[0];
    }
    if (d["padding-left"]) left = d["padding-left"];
    if (d["padding-right"]) right = d["padding-right"];
  }
  return { left, right };
};

describe("the desktop pills sit in the content column (TM Desktop: padX column, margin 24px 0 64px)", () => {
  it("the page renders them on one element with .wrap", () => {
    expect(readFileSync("app/components/TourMapDesktop.tsx", "utf8")).toContain("className={`${styles.wrap} ${styles.pills}`}");
  });

  it("they keep .wrap's 40px sides, with 24px above and 64px below", () => {
    expect(sidePadding(MAP, [".wrap", ".pills"])).toEqual({ left: "40px", right: "40px" });
    expect(decls(top(MAP), ".pills")).toMatchObject({ "padding-top": "24px", "padding-bottom": "64px" });
  });

  it("negative control: the shipped `padding: 40px 0 72px` zeroed the sides (x 100 at 1440, not 140)", () => {
    expect(sidePadding(SHIPPED_MAP, [".wrap", ".pills"])).toEqual({ left: "0", right: "0" });
  });

  it("negative control: so did the first build's `padding: 24px 0 64px`", () => {
    const firstBuild = `.wrap { max-width: 1240px; margin: 0 auto; padding: 0 40px; }
.pills { display: flex; gap: 12px; flex-wrap: wrap; padding: 24px 0 64px; }`;
    expect(sidePadding(firstBuild, [".wrap", ".pills"]).left).toBe("0");
  });
});
