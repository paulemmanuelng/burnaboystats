import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

/**
 * V-records-05 (debug of 5 Oct 2026): on a phone, /records/awards puts each
 * award body's "3 of 6 won" tally beside the body's name. The tally was free
 * to shrink, so a long name squeezed it into a stacked "3 / of / 6" (IRAWMA,
 * AAEA, African Entertainment Awards USA, Nigeria South South, Channel O at
 * 390px; 16 bodies at 320px). The name takes the wrap now and the tally holds
 * one line.
 *
 * jsdom does no layout, so this reads the rules. The same check runs on the
 * rule the site shipped (origin/main 9cd6a889, quoted verbatim), so a guard
 * that passed on both would be caught as vacuous. Measured in headless Chrome
 * on the live page with these rules applied: 0 of 48 tallies wrap at 390 and
 * 320, both themes, and no name overflows its box.
 */

const CSS = readFileSync("app/components/mobileAwards.module.css", "utf8");

const SHIPPED = `
.bodyHead { display: flex; align-items: baseline; gap: 8px; padding: 20px 18px 10px; }
.bodyName {
  font-family: var(--font-anton), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.1;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0;
}
.tally {
  margin-left: auto;
  font-family: var(--font-geist-sans), system-ui, sans-serif;
  font-weight: 700;
  font-size: var(--type-small);
  color: var(--dim);
  font-variant-numeric: tabular-nums;
}
.tallyWon { color: var(--gold); }
.tallyLabel {
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dim);
}
`;

const decls = (css: string, selector: string) => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Record<string, string> = {};
  for (const m of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (m[1].trim() !== selector) continue;
    for (const part of m[2].split(";")) {
      const i = part.indexOf(":");
      if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
  }
  return out;
};

/** The flex item cannot shrink: `flex: none`, `flex: 0 0 auto` or `flex-shrink: 0`. */
const noShrink = (d: Record<string, string>) =>
  d["flex"] === "none" || /^0 0\b/.test(d["flex"] ?? "") || d["flex-shrink"] === "0";

const tallyHoldsOneLine = (css: string) => {
  const tally = decls(css, ".tally");
  const label = decls(css, ".tallyLabel");
  const name = decls(css, ".bodyName");
  return {
    tallyNowrap: tally["white-space"] === "nowrap",
    tallyNoShrink: noShrink(tally),
    labelNoShrink: noShrink(label),
    nameShrinks: name["min-width"] === "0",
  };
};

describe("phone awards: the 'N of M won' tally beside a body's name", () => {
  it("never wraps or shrinks; the name takes the wrap", () => {
    expect(tallyHoldsOneLine(CSS)).toEqual({
      tallyNowrap: true,
      tallyNoShrink: true,
      labelNoShrink: true,
      nameShrinks: true,
    });
  });

  it("the same check fails on the rule the site shipped", () => {
    expect(tallyHoldsOneLine(SHIPPED)).toEqual({
      tallyNowrap: false,
      tallyNoShrink: false,
      labelNoShrink: false,
      nameShrinks: false,
    });
  });

  it("the tally is still one element, so nowrap covers the whole figure", () => {
    const tsx = readFileSync("app/components/MobileAwards.tsx", "utf8");
    expect(tsx).toMatch(/className=\{`\$\{styles\.tally\}[^`]*`\}>\s*\{b\.wins\} of \{b\.total\}\s*<\/span>/);
  });
});
