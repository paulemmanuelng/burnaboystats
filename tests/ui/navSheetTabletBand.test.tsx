import { readFileSync } from "node:fs";
import { render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/music",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileNavSheet from "../../app/components/MobileNavSheet";
import { navGroups, navSearchHint } from "../../app/lib/navGroups";

/**
 * V-global-17 (full-site debug, 5 Oct 2026).
 *
 * From 901 to 1239px the desktop bar collapses to its hamburger, which opens
 * the phone's nav sheet. Read live in headless Chrome at 1024x768, 1100x800,
 * 1180x820 and 1239x824, dark and light, 6 Oct: the sheet spanned the whole
 * window ([0,0,1024,692] at 1024, [0,0,1239,748] at 1239), so its rows ran
 * 1000px+ wide, Appearance became a full-width three-part bar, and "tap to
 * dismiss" sat under a mouse pointer: a phone screen stretched across a
 * laptop. The same CSS grafted onto the live page put a 402px panel (panel
 * G's own width) at the right edge, [622,0,1024,692] at 1024, under the
 * hamburger, the hint gone and a click on the dimmed page still closing it;
 * 390, 768 and 900 (the phone layout, fluid to 900 by design) were unchanged.
 *
 * jsdom does no layout, so this reads what the stylesheet gives the sheet
 * and the hint at a given viewport width. The same reads run on the shipped
 * rules (origin/main 3504a1ed, quoted), which fail them.
 */

const CSS = readFileSync("app/components/mobileNavSheet.module.css", "utf8");

type Rule = { selector: string; decls: Record<string, string>; min?: number; max?: number };

/** Top-level rules and width-only @media blocks, in source order. A block
 *  that queries anything else (motion, height) is skipped: none of them
 *  touches the properties read here. */
const parse = (css: string): Rule[] => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const block = (body: string, min?: number, max?: number) => {
    for (const m of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const decls: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) decls[part.slice(0, i).trim()] = part.slice(i + 1).trim();
      }
      for (const selector of m[1].split(",")) rules.push({ selector: selector.trim(), decls, min, max });
    }
  };
  const top = /@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[3]) {
      block(m[3]);
      continue;
    }
    const features = m[1].split(/\band\b/).map((f) => f.trim()).filter(Boolean);
    let min: number | undefined;
    let max: number | undefined;
    let widthOnly = true;
    for (const f of features) {
      const w = f.match(/^\((min|max)-width:\s*(\d+)px\)$/);
      if (!w) widthOnly = false;
      else if (w[1] === "min") min = Number(w[2]);
      else max = Number(w[2]);
    }
    if (widthOnly) block(m[2], min, max);
  }
  return rules;
};

/** The cascaded value of one property of a selector at viewport width `w`. */
const at = (rules: Rule[], selector: string, prop: string, w: number) => {
  let v: string | undefined;
  for (const r of rules) {
    if (r.selector !== selector || !(prop in r.decls)) continue;
    if ((r.min === undefined || w >= r.min) && (r.max === undefined || w <= r.max)) v = r.decls[prop];
  }
  return v;
};

/** Left and right edge of the sheet (position: absolute in a fixed, full-
 *  viewport root) and whether the dismiss hint is drawn, at width `w`. */
const layout = (rules: Rule[], w: number) => {
  const left = at(rules, ".sheet", "left", w);
  const right = at(rules, ".sheet", "right", w);
  const width = at(rules, ".sheet", "width", w);
  const px = (v: string | undefined) => (v === undefined || v === "auto" ? undefined : parseFloat(v));
  const r = px(right) ?? 0;
  const x1 = w - r;
  const x0 = px(left) ?? (px(width) !== undefined ? x1 - px(width)! : 0);
  return {
    sheet: [x0, x1] as const,
    hintShown: at(rules, ".dismissHint", "display", w) !== "none",
    rootShown: at(rules, ".root", "display", w) !== "none",
  };
};

const BAND = [901, 1024, 1100, 1180, 1239]; // the desktop bar's hamburger
const PHONE = [320, 390, 768, 900]; // the phone layout, fluid to 900

describe("V-global-17: the nav sheet in the 901-1239 band", () => {
  const rules = parse(CSS);

  it.each(BAND)("at %ipx wide it is panel G's 402px, hung from the right edge, with no 'tap to dismiss'", (w) => {
    const l = layout(rules, w);
    expect(l.rootShown).toBe(true);
    expect(l.sheet).toEqual([w - 402, w]);
    expect(l.hintShown).toBe(false);
  });

  it.each(PHONE)("at %ipx wide (the phone layout) it still spans the screen with the hint, as designed", (w) => {
    const l = layout(rules, w);
    expect(l.rootShown).toBe(true);
    expect(l.sheet).toEqual([0, w]);
    expect(l.hintShown).toBe(true);
  });

  it("from 1240 the sheet is gone, as before (the bar shows its links)", () => {
    for (const w of [1240, 1440, 1920]) expect(layout(rules, w).rootShown).toBe(false);
  });

  it("only the hint goes: the dimmed page beside the panel is still the button that closes it", () => {
    const { container } = render(
      <MobileNavSheet groups={navGroups} updated="4 Oct 2026" searchHint={navSearchHint} />
    );
    const hint = container.querySelector('[class*="dismissHint"]')!;
    const backdrop = hint.closest("button")!;
    expect(backdrop).not.toBeNull();
    expect(backdrop.className).toMatch(/backdrop/);
    // The hint is the backdrop's only content, so hiding it leaves the
    // backdrop (inset: 0) covering the page beside the panel.
    expect(backdrop.children).toHaveLength(1);
    expect(at(rules, ".backdrop", "inset", 1024)).toBe("0");
    expect(at(rules, ".backdrop", "display", 1024)).toBe("flex");
  });

  it("negative control: the shipped sheet ran edge to edge, hint and all, across the band", () => {
    // origin/main 3504a1ed, app/components/mobileNavSheet.module.css: the
    // .sheet edges, the hint, and the one width query, verbatim.
    const SHIPPED_CSS = `
.dismissHint {
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--text-body);
}

.sheet {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  bottom: 76px; /* the strip of page that stays visible */
  display: flex;
  flex-direction: column;
}

@media (min-width: 1240px) {
  .root { display: none; }
}
`;
    const shipped = parse(SHIPPED_CSS);
    for (const w of BAND) {
      const l = layout(shipped, w);
      expect(l.sheet).toEqual([0, w]);
      expect(l.hintShown).toBe(true);
    }
  });
});
