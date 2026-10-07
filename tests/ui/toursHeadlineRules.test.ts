import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

/**
 * V-tourscars-09 (full-site debug, 5 Oct 2026).
 *
 * The desktop /records/tours strip ($30.46M · $6.15M · 300K+) gave every cell
 * a left rule. Read live in headless Chrome, 7 Oct, dark and light, at 1440,
 * 1240 and 1024: all three cells had a 1px left border and none a right one,
 * so the strip opened with a rule at the content edge (x=80 at 1440, x=40 at
 * 1024) and the third cell ran on with nothing to close it. Records, Firsts
 * and Awards build the same strip and drop the first cell's rule, so the rules
 * sit only between the cells. With that rule grafted onto the live page the
 * first cell measured 0px, the other two 1px, at all three widths and both
 * themes. The phone screen (MobileTours) draws its stats as a gap-seamed grid
 * with no side rules, so it never had this.
 *
 * jsdom does not resolve `1px solid var(--line)` in getComputedStyle, so this
 * runs a small cascade (matching selector, then specificity, then source
 * order, plus any width query that applies) over the module's own rules. The
 * same check runs on the rule the site shipped (origin/main, verbatim), which
 * fails it.
 */

type Rule = { selector: string; decls: Record<string, string>; query?: string; order: number };

const parse = (css: string): Rule[] => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const block = (body: string, query?: string) => {
    for (const m of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const decls: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) decls[part.slice(0, i).trim()] = part.slice(i + 1).trim();
      }
      for (const selector of m[1].split(",")) rules.push({ selector: selector.trim(), decls, query, order: rules.length });
    }
  };
  const top = /@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[3]) block(m[3]);
    else block(m[2], m[1].trim());
  }
  return rules;
};

const queryApplies = (query: string | undefined, width: number) => {
  if (!query) return true;
  const max = query.match(/max-width:\s*(\d+)px/);
  const min = query.match(/min-width:\s*(\d+)px/);
  if (!max && !min) return false; // not a width query: leave it out
  return (!max || width <= Number(max[1])) && (!min || width >= Number(min[1]));
};

/** Classes, attributes and pseudo-classes count 10; ids 100; type selectors 1. */
const specificity = (sel: string) =>
  (sel.match(/#[\w-]+/g)?.length ?? 0) * 100 +
  (sel.match(/\.[\w-]+|\[[^\]]*\]|:(?!:)[\w-]+/g)?.length ?? 0) * 10 +
  (sel.match(/(^|[\s>+~])[a-z][\w-]*/gi)?.length ?? 0);

/** Whether a border shorthand or longhand value leaves a visible line. */
const visible = (v: string) => !/\b(none|hidden)\b/.test(v) && !/^0(px)?(\s|$)/.test(v);

/** The left and right rule each cell gets, at one viewport width. */
const sideRules = (css: string, width: number, cells: Element[]) => {
  const rules = parse(css).filter((r) => queryApplies(r.query, width));
  return cells.map((el) => {
    const hits = rules
      .filter((r) => {
        try {
          return el.matches(r.selector);
        } catch {
          return false; // :global(…) and other module-only syntax
        }
      })
      .sort((a, b) => specificity(a.selector) - specificity(b.selector) || a.order - b.order);
    const side = (s: "left" | "right") => {
      let on = false;
      for (const r of hits) {
        for (const [prop, v] of Object.entries(r.decls)) {
          if (prop === "border" || prop === `border-${s}`) on = visible(v);
          else if (prop === `border-${s}-style` || prop === `border-${s}-width`) on = on && visible(v);
        }
      }
      return on;
    };
    return { left: side("left"), right: side("right") };
  });
};

/** The strip as page.tsx renders it: three cells straight inside the grid. */
const strip = () => {
  document.body.innerHTML =
    '<div class="headlineGrid">' +
    '<div class="headlineCell">$30.46M</div><div class="headlineCell">$6.15M</div><div class="headlineCell">300K+</div>' +
    "</div>";
  return [...document.querySelectorAll(".headlineCell")];
};

const BETWEEN_ONLY = [
  { left: false, right: false },
  { left: true, right: false },
  { left: true, right: false },
];

// Desktop renders from 901px; 1239 and below is the narrower-desktop block.
const WIDTHS = [1440, 1240, 1239, 1024, 901];

describe("V-tourscars-09: the tours stat strip has rules between its cells only", () => {
  const css = readFileSync("app/records/tours/tours.module.css", "utf8");

  it.each(WIDTHS)("at %ipx no rule opens the strip and none closes it", (w) => {
    expect(sideRules(css, w, strip())).toEqual(BETWEEN_ONLY);
  });

  it("the cells are the grid's direct children in data order, so :first-child is the first stat", () => {
    const tsx = readFileSync("app/records/tours/page.tsx", "utf8");
    expect(tsx).toMatch(
      /<div className=\{styles\.headlineGrid\}>\s*\{headline\.map\(\(s\) => \(\s*<div key=\{s\.label\} className=\{styles\.headlineCell\}>/
    );
  });

  it("matches the same strip on Records, Firsts and Awards", () => {
    for (const f of ["app/records/records.module.css", "app/records/firsts/firsts.module.css", "app/records/awards/awards.module.css"]) {
      expect(sideRules(readFileSync(f, "utf8"), 1440, strip()), f).toEqual(BETWEEN_ONLY);
    }
  });

  it("negative control: the shipped rule put a rule before the first cell", () => {
    // origin/main, app/records/tours/tours.module.css:82, verbatim.
    const SHIPPED = `.headlineCell { padding: 28px 24px 26px; border-left: 1px solid var(--line); }`;
    expect(sideRules(SHIPPED, 1440, strip())).toEqual([
      { left: true, right: false },
      { left: true, right: false },
      { left: true, right: false },
    ]);
  });
});
