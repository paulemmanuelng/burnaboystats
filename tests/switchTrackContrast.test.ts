import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

// Debug pass, 3 Oct 2026 (k5): the switch track in the OFF state was
// var(--rule-soft) with no edge — 1.95:1 on the light page, 2.0:1 on the dark
// card, under WCAG 1.4.11's 3:1 for a component boundary. The off track then
// carried a 1px inset edge at var(--rule) (3.30:1 by its own token note in
// app/globals.css); since Job 0's control edges (J0-11, 8 Oct 2026) it is the
// control edge, var(--btn-edge) (3.95 / 3.78, tests/controlEdges.test.ts).
// The certs switches copy /compare's, and their header asks that the two stay
// in step, so both are held here.
const FILES = ["app/components/certSwitches.module.css", "app/compare/compare.module.css"];
const rule = (css: string, sel: string) =>
  css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .match(new RegExp(`(?:^|})\\s*\\${sel}\\s*\\{([^}]*)\\}`))?.[1]
    ?.replace(/\s+/g, " ")
    .trim();
const EDGE = /box-shadow:\s*inset 0 0 0 1px var\(--btn-edge\)\s*;/;

describe("the off switch track has a 3:1 edge, in both stylesheets", () => {
  it.each(FILES)("%s", (f) => {
    const css = readFileSync(f, "utf8");
    expect(rule(css, ".dot")).toMatch(EDGE);
    expect(rule(css, ".dotOn")).toMatch(/box-shadow:\s*none/);
  });

  it("the two .dot / .dotOn rules are identical", () => {
    const [a, b] = FILES.map((f) => readFileSync(f, "utf8"));
    expect(rule(a, ".dot")).toBe(rule(b, ".dot"));
    expect(rule(a, ".dotOn")).toBe(rule(b, ".dotOn"));
  });

  it("the edge token clears 3:1 where the fill token does not", () => {
    const g = readFileSync("app/globals.css", "utf8");
    // --btn-edge is the control edge (55% / 42% ink); computed in
    // tests/controlEdges.test.ts at 3.95 / 3.78 on the page.
    expect(g).toMatch(/--btn-edge:\s*light-dark\(rgba\(23, 20, 15, 0\.55\), rgba\(245, 244, 240, 0\.42\)\)/);
    expect(g).toMatch(/--rule-soft:\s*light-dark\([^;]+;\s*\/\*\s*1\.97:1/);
  });

  it("negative control: the .dot that shipped had no edge, and the 3 Oct edge was --rule", () => {
    expect(rule(".dot { border-radius: 999px; box-shadow: inset 0 0 0 1px var(--rule); }", ".dot")).not.toMatch(EDGE);
    const shipped = `.dot {
  position: relative;
  width: 30px;
  height: 16px;
  flex: 0 0 30px;
  border-radius: 999px;
  background: var(--rule-soft);
  transition: background var(--dur) var(--ease);
}`;
    expect(rule(shipped, ".dot")).not.toMatch(EDGE);
  });
});
