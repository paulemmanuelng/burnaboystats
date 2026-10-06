import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

/**
 * V-records-06 (debug of 5 Oct 2026): on a phone, /analysis finding 03 sets
 * three stats in a row of thirds. "certifications" is one 102px word of mono
 * and a third holds 73px at 320 (87 at 360, 92 at 375, 97 at 390), so the
 * word ran out of its cell and the next cell painted over it: "Nigeria
 * certificatio", "Diamond certificatio". The label hyphenates now, and only
 * with four letters either side of the break, so short words such as
 * "country" and "awarded" stay whole and the other ten labels break where
 * they did.
 *
 * jsdom does no layout, so this reads the rules. The same check runs on the
 * rule the site shipped (origin/main 9cd6a889, quoted verbatim), so a guard
 * that passed on both would be caught as vacuous. Measured in headless Chrome
 * on the live page with these rules applied: 0 of 12 labels overflow at 320,
 * 360, 375, 390 and 414, both themes; only the two "certifications" labels
 * change ("certifica- / tions"); unlimited hyphens:auto also split "coun-try"
 * and "award-ed" at 375-414, which the limits stop.
 */

const CSS = readFileSync("app/components/mobileAnalysis.module.css", "utf8");

const SHIPPED = `
.statLabel {
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-top: 6px;
  line-height: 1.35;
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

const labelBreaksInsideItsCell = (css: string) => {
  const d = decls(css, ".statLabel");
  // hyphenate-limit-chars: <word> <before> <after>
  const [, before, after] = (d["hyphenate-limit-chars"] ?? "").split(/\s+/);
  return {
    // a word with no break that fits still breaks inside the cell
    backstop: d["overflow-wrap"] === "anywhere" || d["overflow-wrap"] === "break-word",
    hyphenates: d["hyphens"] === "auto",
    // Chrome/Firefox and Safari each keep 4+ letters either side of a hyphen
    limited:
      Number(before) >= 4 &&
      Number(after) >= 4 &&
      Number(d["-webkit-hyphenate-limit-before"]) >= 4 &&
      Number(d["-webkit-hyphenate-limit-after"]) >= 4,
  };
};

describe("phone analysis: a stat label longer than its third of the row", () => {
  it("hyphenates inside its own cell, and keeps short words whole", () => {
    expect(labelBreaksInsideItsCell(CSS)).toEqual({ backstop: true, hyphenates: true, limited: true });
  });

  it("the same check fails on the rule the site shipped", () => {
    expect(labelBreaksInsideItsCell(SHIPPED)).toEqual({ backstop: false, hyphenates: false, limited: false });
  });

  it("the row still gives each stat a third that can shrink below its label", () => {
    expect(decls(CSS, ".statRow")["grid-template-columns"]).toBe("repeat(3, minmax(0, 1fr))");
    const tsx = readFileSync("app/components/MobileAnalysis.tsx", "utf8");
    expect(tsx).toMatch(/<div className=\{styles\.statLabel\}>\{t\.l\}<\/div>/);
  });

  it("the page is English, so the browser has a dictionary to hyphenate with", () => {
    expect(readFileSync("app/layout.tsx", "utf8")).toMatch(/lang="en"/);
  });
});
