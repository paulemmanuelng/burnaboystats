import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * "Keep exploring": the label is muted, the arrows stay gold.
 *
 * Design response item 56, owner decision of 30 Sep 2026. Gold on this site
 * marks a live figure or an action (rule 3). The block's label is neither, so
 * it goes to --text-muted; the → on each card is the action and keeps --gold.
 * KeepExploring is one shared component, so the change reaches every page that
 * renders it, /dai-dai and /dai-dai/es ("Sigue explorando") included, which is
 * how the approved Dai Dai and On This Day artboards already draw it.
 */

const CSS = readFileSync(join(process.cwd(), "app/components/KeepExploring.module.css"), "utf8");

/** Every declaration of `prop` in rules whose selector is exactly `selector`. */
const declared = (css: string, selector: string, prop: string) => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: string[] = [];
  for (const m of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (m[1].trim() !== selector) continue;
    for (const d of m[2].split(";")) {
      const i = d.indexOf(":");
      if (i > 0 && d.slice(0, i).trim() === prop) out.push(d.slice(i + 1).trim());
    }
  }
  return out;
};

/** The label rule as it shipped until 30 Sep 2026, verbatim. */
const SHIPPED_EYEBROW = `.eyebrow {
  font-family: var(--font-mono), monospace;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  color: var(--gold);
  margin-bottom: 16px;
}`;

describe("Keep exploring label (item 56)", () => {
  it("sets the label in --text-muted, and nowhere in gold", () => {
    expect(declared(CSS, ".eyebrow", "color")).toEqual(["var(--text-muted)"]);
    // No other rule reaching the label paints it gold again (a media query or
    // a :hover would be a second declaration on the same selector).
    expect(CSS.replace(/\/\*[\s\S]*?\*\//g, "")).not.toMatch(/\.eyebrow[^{]*\{[^}]*--gold/);
  });

  it("keeps the arrows gold: they are the action", () => {
    expect(declared(CSS, ".arrow", "color")).toEqual(["var(--gold)"]);
  });

  it("is one shared block, so the change is site-wide", () => {
    // Every page renders the same component; none carries a copy of the label
    // with its own colour.
    const walk = (dir: string): string[] =>
      readdirSync(dir).flatMap((e) => {
        const p = join(dir, e);
        return statSync(p).isDirectory() ? walk(p) : [p];
      });
    const pages = walk(join(process.cwd(), "app")).filter(
      (f) => f.endsWith(".tsx") && /<KeepExploring\b/.test(readFileSync(f, "utf8")),
    );
    expect(pages.length).toBeGreaterThanOrEqual(30);
    const tsx = readFileSync(join(process.cwd(), "app/components/KeepExploring.tsx"), "utf8");
    expect(tsx).toContain('<p className={styles.eyebrow}>{lang === "es" ? "Sigue explorando" : "Keep exploring"}</p>');
  });

  it("negative control: the rule the site shipped fails the check", () => {
    expect(declared(SHIPPED_EYEBROW, ".eyebrow", "color")).toEqual(["var(--gold)"]);
    expect(declared(SHIPPED_EYEBROW, ".eyebrow", "color")).not.toEqual(["var(--text-muted)"]);
  });
});
