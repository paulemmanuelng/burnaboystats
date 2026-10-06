import { readFileSync } from "node:fs";
import { render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));

import SearchPalette from "../../app/components/SearchPalette";
import { suggestedSearchDocs } from "../../app/lib/searchSuggested";

/**
 * V-global-19 (full-site debug, 5 Oct 2026).
 *
 * The nav's search pill reads "Search ⌘K". Below 640 the phone gets a 44px
 * circle with no label and no hint, but from 641 up the hint came back for
 * every pointer. Read live in headless Chrome with touch emulation, dark and
 * light, 6 Oct, on /, /compare, /primitives and a 404: at 641, 768, 820, 844
 * (a phone on its side) and 900 the pill showed "⌘K" to a screen that only
 * takes taps, and an iPad's 1024 and 1366 (the desktop bar) did the same.
 * With a (pointer: coarse) rule grafted onto the live page the hint went at
 * all seven touch widths, "Search" stayed, and a mouse at 768, 1024 and 1440
 * kept "Search ⌘K".
 *
 * jsdom does not cascade module CSS or match media queries, so this reads
 * what the stylesheet gives the hint for a pointer and a width.
 */

const CSS = readFileSync("app/components/SearchPalette.module.css", "utf8");

type Rule = { selector: string; decls: Record<string, string>; max?: number; coarse?: boolean };

/** Top-level rules and @media blocks that query only max-width and/or
 *  pointer: coarse, in source order. Anything else (reduced motion) is
 *  skipped: none of it touches the properties read here. */
const parse = (css: string): Rule[] => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const block = (body: string, max?: number, coarse?: boolean) => {
    for (const m of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const decls: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) decls[part.slice(0, i).trim()] = part.slice(i + 1).trim();
      }
      for (const selector of m[1].split(",")) rules.push({ selector: selector.trim(), decls, max, coarse });
    }
  };
  const top = /@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[3]) {
      block(m[3]);
      continue;
    }
    let max: number | undefined;
    let coarse: boolean | undefined;
    let known = true;
    for (const f of m[1].split(/\band\b/).map((s) => s.trim()).filter(Boolean)) {
      const w = f.match(/^\(max-width:\s*(\d+)px\)$/);
      if (w) max = Number(w[1]);
      else if (/^\(pointer:\s*coarse\)$/.test(f)) coarse = true;
      else known = false;
    }
    if (known) block(m[2], max, coarse);
  }
  return rules;
};

/** Is `.kbd` drawn at width `w` for this pointer? (cascade: last match wins) */
const kbdShown = (rules: Rule[], w: number, touch: boolean) => {
  let display: string | undefined;
  for (const r of rules) {
    if (r.selector !== ".kbd" || !("display" in r.decls)) continue;
    if (r.max !== undefined && w > r.max) continue;
    if (r.coarse && !touch) continue;
    display = r.decls.display;
  }
  return display !== "none";
};
const labelShown = (rules: Rule[], w: number) =>
  !rules.some((r) => r.selector === ".triggerLabel" && r.decls.display === "none" && (r.max === undefined || w <= r.max));

const TOUCH_WIDE = [641, 768, 820, 844, 900, 1024, 1366]; // tablets, a phone on its side, iPad landscape
const MOUSE = [641, 768, 1024, 1440, 1920];

describe("V-global-19: the search pill's ⌘K hint is for keyboards, not touch screens", () => {
  const rules = parse(CSS);

  it.each(TOUCH_WIDE)("a touch screen %ipx wide gets 'Search' without '⌘K'", (w) => {
    expect(kbdShown(rules, w, true)).toBe(false);
    expect(labelShown(rules, w)).toBe(true);
  });

  it.each(MOUSE)("a mouse at %ipx still gets 'Search ⌘K'", (w) => {
    expect(kbdShown(rules, w, false)).toBe(true);
    expect(labelShown(rules, w)).toBe(true);
  });

  it("below 640 the phone's circle is unchanged: no label and no hint, for any pointer", () => {
    for (const w of [320, 390, 640]) {
      expect(kbdShown(rules, w, true)).toBe(false);
      expect(kbdShown(rules, w, false)).toBe(false);
      expect(labelShown(rules, w)).toBe(false);
    }
  });

  it("the pill still renders the hint as a <kbd> with that class, so the stylesheet reaches it", () => {
    const { container } = render(<SearchPalette suggested={suggestedSearchDocs()} />);
    const trigger = container.querySelector('button[aria-label="Search the site"]')!;
    const kbd = trigger.querySelector("kbd")!;
    expect(kbd.textContent).toBe("⌘K");
    expect(kbd.className).toMatch(/kbd/);
    // The button's name comes from aria-label, so hiding the hint changes
    // nothing a screen reader hears.
    expect(trigger.getAttribute("aria-label")).toBe("Search the site");
  });

  it("negative control: the shipped stylesheet showed '⌘K' to touch screens from 641 up", () => {
    // origin/main 3504a1ed, app/components/SearchPalette.module.css: the
    // .kbd rule and the 640 block's hide, verbatim.
    const SHIPPED_CSS = `
.kbd {
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  color: var(--text-muted);
  border: 1px solid var(--line);
  border-radius: 5px;
  padding: 1px 5px;
  line-height: 1.4;
}

@media (max-width: 640px) {
  /* On mobile the nav is tight — show just the icon, drop the label + kbd. */
  .triggerLabel,
  .kbd {
    display: none;
  }
}
`;
    const shipped = parse(SHIPPED_CSS);
    for (const w of TOUCH_WIDE) expect(kbdShown(shipped, w, true)).toBe(true);
    expect(kbdShown(shipped, 390, true)).toBe(false);
  });
});
