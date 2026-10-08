import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Quick win 8, tours part (design review of 8 Oct 2026, T-09): the tours and
 * festivals lists ran their prose at two to three times the site's 62ch
 * reading width — Announced notes 163–182 characters a line at 1440, tour
 * blurbs and record-night notes 134–142, festival notes 138–141, the I Told
 * Them… table note ~170 (in mono), the board's source note 147. Each now
 * stops at --measure (globals.css, Task B), as .chartNote did on 7 Sep.
 */

const ROOT = join(__dirname, "..");
const read = (f: string) => readFileSync(join(ROOT, f), "utf8");
function rule(css: string, selector: string): Record<string, string> | null {
  for (const m of css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (m[1].split(",").map((s) => s.trim()).includes(selector)) {
      const d: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const k = part.indexOf(":");
        if (k > 0) d[part.slice(0, k).trim()] = part.slice(k + 1).replace(/\s+/g, " ").trim();
      }
      return d;
    }
  }
  return null;
}

const TOURS = "app/records/tours/tours.module.css";
const FESTIVALS = "app/records/tours/festivals/festivals.module.css";
const REVENUE = "app/records/tours/revenue/revenue.module.css";

/** Every prose rule the review measured, by file and selector. */
const PROSE: [string, string][] = [
  [TOURS, ".upcomingText"], // Announced notes
  [TOURS, ".tourBlurb"], // tour blurbs
  [TOURS, ".momentText"], // record-night notes
  [TOURS, ".dateNote"], // the table note under a tour's dates
  [TOURS, ".sourceNote"], // the board's source note under the top ten
  [TOURS, ".sourceLine"], // the page's source band
  [FESTIVALS, ".note"], // festival notes
  [FESTIVALS, ".sourceLine"],
  [REVENUE, ".methodRow dd"], // the box-office pages' method notes
];
const atMeasure = (d: Record<string, string> | null) => d?.["max-width"] === "var(--measure)";

describe("tours prose stops at the reading width", () => {
  it("--measure is the site's 62ch", () => {
    expect(read("app/globals.css")).toMatch(/--measure:\s*62ch;/);
  });

  for (const [file, sel] of PROSE) {
    it(`${sel} (${file.split("/").pop()})`, () => {
      expect(atMeasure(rule(read(file), sel))).toBe(true);
    });
  }

  it("the table note is a sentence in the body face, not mono (Task B §2.2)", () => {
    const d = rule(read(TOURS), ".dateNote")!;
    expect(d["font-family"]).not.toMatch(/--font-mono/);
    expect(d["font-size"]).toBe("var(--type-caption)");
  });

  it("negative controls: the widths the rules shipped with fail", () => {
    // tours.module.css and festivals.module.css on origin/main (63e558a9).
    expect(atMeasure(rule(".tourBlurb { display: block; color: var(--text-muted); font-size: 13.5px; margin-top: 6px; max-width: 96ch; line-height: 1.55; }", ".tourBlurb"))).toBe(false);
    expect(atMeasure(rule(".upcomingText { font-size: 14px; line-height: 1.6; color: var(--text-body); margin-top: 8px; }", ".upcomingText"))).toBe(false);
    expect(atMeasure(rule(".sourceNote { font-size: 12.5px; color: var(--text-muted); margin-top: 14px; max-width: 100ch; line-height: 1.6; }", ".sourceNote"))).toBe(false);
    expect(atMeasure(rule(".dateNote { font-family: var(--font-mono), monospace; font-size: 11.5px; color: var(--text-muted); margin-top: 12px; }", ".dateNote"))).toBe(false);
  });
});
