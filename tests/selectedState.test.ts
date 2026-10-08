import { describe, it, expect } from "vitest";
import { decl, read, rules, winning } from "./fixtures/cssRules";
import { THEMES, colour, contrast, over, tokenColour, tokenContrast } from "./fixtures/tokenColours";

/**
 * Job 0 · J0-5 with fix 8 (design review 8 Oct 2026, panel 3): a selected
 * segment or tab is an INK FILL with a page-colour label (16.73 / 17.98 : 1),
 * so it can never be mistaken for the screen's one gold action or for his
 * data. The controls are named, never bare `.seg` — that class means four
 * different things on this site.
 *
 * The /certifications year buttons keep their built size and face (52px,
 * Anton 21, "2026 · 37"). Unselected: a --btn-edge edge, no wash, the year in
 * --text and the count in --text-muted.
 */

const GOLD = /--gold|--color-accent|--display-ramp|--ink-on-gold|#945e00|#ffb627|255,\s*182,\s*39/i;
const top = (m: string | null) => m === null;
const bodies = (css: string, sel: string) =>
  rules(css)
    .filter((r) => r.selector.split(",").map((s) => s.trim()).includes(sel))
    .map((r) => r.body);
const fill = (css: string, sel: string) =>
  winning(css, sel, "background-color", top) ?? winning(css, sel, "background", top);

// file, selector, what it is
const CONTROLS: [string, string, string][] = [
  ["app/components/themeToggle.module.css", ".on", "Appearance: the desktop footer and the phone menu sheet"],
  ["app/compare/compare.module.css", ".segOn", "the compare mode (the reference: ink already)"],
  ["app/embed/embed.module.css", ".segOn", "the /embed theme picker, desktop"],
  ["app/components/mobileEmbed.module.css", ".segOn", "the /embed theme picker, phone"],
  ["app/certifications/certifications.module.css", ".yearBtnOn", "the /certifications year buttons"],
];

// Selected segments fix 8 does not name, with the job that owns them. Listed
// so this set cannot grow silently; each must still exist where it says.
const NOT_YET: [string, string, string][] = [
  ["app/globals.css", ".segOpt:has(input:checked)", "the home ledger segment — not named by fix 8"],
  ["app/records/charts/charts.module.css", ".viewBtnOn", "the /records/charts view toggle — Job 3 (fix 71)"],
  ["app/components/StatCardMaker.module.css", ".ratioOn", "the /share ratio segment — Job 6"],
  ["app/components/statCardButton.module.css", ".ratioOn", "the stat-card dialog ratio segment — Job 6"],
];

describe("J0-5: every named selected control is an ink fill with a page-colour label", () => {
  it.each(CONTROLS)("%s %s (%s)", (file, sel) => {
    const css = read(file);
    expect(bodies(css, sel).length, `${file} ${sel} exists`).toBeGreaterThan(0);
    expect(fill(css, sel)).toBe("var(--text)");
    expect(winning(css, sel, "color", top)).toBe("var(--bg)");
    // no gold anywhere in its rules: not the fill, the edge, the glow or the label
    for (const b of bodies(css, sel)) expect(b).not.toMatch(GOLD);
  });

  it("page colour on ink reads at ≥16.7:1 in both themes", () => {
    for (const t of THEMES) expect(tokenContrast("--bg", "--text", t)).toBeGreaterThanOrEqual(16.7);
  });

  it("where a label sets -webkit-text-fill-color, it is the page colour too", () => {
    for (const [file, sel] of CONTROLS) {
      const f = winning(read(file), sel, "-webkit-text-fill-color", top);
      if (f !== undefined) expect(f, `${file} ${sel}`).toBe("var(--bg)");
    }
  });
});

describe("J0-5: the /certifications year buttons keep their built size and face", () => {
  const CSS = read("app/certifications/certifications.module.css");

  it("52px Anton 21 at --radius-sm, as built", () => {
    expect(winning(CSS, ".yearBtn", "min-height", top)).toBe("52px");
    expect(winning(CSS, ".yearBtn", "font-size", top)).toBe("21px");
    expect(winning(CSS, ".yearBtn", "font-family", top)).toMatch(/--font-anton/);
    expect(winning(CSS, ".yearBtn", "border-radius", top)).toBe("var(--radius-sm)");
  });

  it("unselected: --btn-edge edge, no wash, the year in --text, the count in --text-muted", () => {
    expect(winning(CSS, ".yearBtn", "border", top)).toBe("1px solid var(--btn-edge)");
    expect(winning(CSS, ".yearBtn", "background", top)).toBe("transparent");
    expect(winning(CSS, ".yearBtn", "color", top)).toBe("var(--text)");
    for (const b of bodies(CSS, ".yearBtn")) expect(b).not.toMatch(GOLD);
    expect(winning(CSS, ".yearCount", "color", top)).toBe("var(--text-muted)");
    // the count keeps the one fade token (NPD-01) and still clears AA after it
    expect(winning(CSS, ".yearCount", "opacity", top)).toBe("var(--text-fade)");
    for (const t of THEMES) {
      const page = tokenColour("--bg", t);
      const fade = t === "dark" ? 0.9 : 1;
      const muted = tokenColour("--text-muted", t);
      expect(contrast([muted[0], muted[1], muted[2], fade], page)).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("selected: the count turns page colour with the label, and the fill holds under the pointer", () => {
    expect(winning(CSS, ".yearBtnOn .yearCount", "color", top)).toBe("inherit");
    expect(winning(CSS, ".yearBtnOn", "background-image", top)).toBe("none");
    expect(winning(CSS, ".yearBtnOn", "box-shadow", top)).toBe("none");
    expect(winning(CSS, ".yearBtnOn:hover", "background-color", top)).toBe("var(--text)");
    // .yearBtnOn:hover is declared after .yearBtn:hover, so it wins on the selected tab
    const order = rules(CSS).filter((r) => r.media === null).map((r) => r.selector);
    expect(order.lastIndexOf(".yearBtnOn:hover")).toBeGreaterThan(order.lastIndexOf(".yearBtn:hover"));
  });

  it("the --btn-edge edge clears 3:1 on the page in both themes", () => {
    for (const t of THEMES) expect(tokenContrast("--btn-edge", "--bg", t)).toBeGreaterThanOrEqual(3);
  });
});

describe("J0-5: selected segments fix 8 does not name are listed, not changed here", () => {
  it.each(NOT_YET)("%s %s still exists (%s)", (file, sel) => {
    expect(bodies(read(file), sel).length).toBeGreaterThan(0);
  });
});

describe("J0-5 negative controls: the shipped gold fills fail", () => {
  it("Appearance .on as shipped (themeToggle.module.css on d3c39eda)", () => {
    const shipped = `.on {
  background: var(--gold-fill);
  color: var(--ink-on-gold);
}`;
    expect(fill(shipped, ".on")).not.toBe("var(--text)");
    expect(bodies(shipped, ".on")[0]).toMatch(GOLD);
  });

  it("the year buttons as shipped: the gold ramp on the selected tab and a gold wash at rest", () => {
    const shipped = `.yearBtn {
  border: 1px solid var(--gold-dim);
  border-radius: var(--radius-sm);
  background: color-mix(in srgb, var(--gold-wash-base) calc(7% * var(--wash-strength)), transparent);
  color: var(--gold-bright-ink);
}
.yearBtnOn {
  background-color: var(--gold-fill);
  background-image: linear-gradient(180deg, var(--gold-bright) 0%, var(--gold-fill) 48%, var(--gold-dim) 100%);
  border-color: var(--gold);
  color: var(--ink-on-gold);
}`;
    expect(fill(shipped, ".yearBtnOn")).not.toBe("var(--text)");
    expect(winning(shipped, ".yearBtn", "border", top)).not.toBe("1px solid var(--btn-edge)");
    expect(decl(bodies(shipped, ".yearBtn")[0], "color")).toMatch(GOLD);
  });

  it("the resolver itself: ink on ink is 1:1, so a fill that kept --text for its label would fail", () => {
    const ink = over(colour("var(--text)", "light"), tokenColour("--bg", "light"));
    expect(contrast(ink, ink)).toBeCloseTo(1, 5);
  });
});
