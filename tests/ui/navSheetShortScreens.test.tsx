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
 * V-global-04 (debug of 5 Oct 2026): in the menu sheet only the list of 30
 * rows scrolled, and the head (111px), search (62), Appearance (101) and foot
 * (75) stayed pinned round it, so the list got whatever height was left:
 * 242px on a 667px phone (iPhone SE/8, and about what Safari leaves of an
 * 844px iPhone with its bars showing), three rows whole; 143px at 568, one
 * row; and 18px on a phone on its side, no row at all, with the foot spilling
 * onto the dismiss strip (measured live in headless Chrome, dark and light).
 *
 * Now, below 780px tall, everything under the head scrolls as one: 5 rows
 * show on opening at 568, 7 at 667, 8 at 736, and every row is reachable in
 * landscape, the foot ending on the sheet's edge. From 812px (the design's
 * screen) up, the sheet is pixel-identical to the shipped one at 375x812,
 * 390x844, 414x896 and 768x1024 (the change applied to the live page).
 *
 * jsdom does no layout, so this reads which element the stylesheet makes
 * scroll at a given height, and checks that element holds Appearance and the
 * foot. The same check runs on the shipped rules and markup (origin/main
 * 9cd6a889, quoted), which it fails.
 */

const CSS = readFileSync("app/components/mobileNavSheet.module.css", "utf8");

type Rule = { selector: string; decls: Record<string, string>; maxHeight?: number };

const parse = (css: string): Rule[] => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const block = (body: string, maxHeight?: number) => {
    for (const m of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const decls: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) decls[part.slice(0, i).trim()] = part.slice(i + 1).trim();
      }
      for (const selector of m[1].split(",")) rules.push({ selector: selector.trim(), decls, maxHeight });
    }
  };
  // In source order, as the cascade reads it. Of the @media blocks only a
  // max-height query bears on height; the others (width, motion) are skipped.
  const top = /@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[3]) block(m[3]);
    else {
      const h = m[1].match(/^\s*\(max-height:\s*(\d+)px\)\s*$/);
      if (h) block(m[2], Number(h[1]));
    }
  }
  return rules;
};

/** The computed value of one property of a selector on a screen `h` tall. */
const at = (rules: Rule[], selector: string, prop: string, h: number) => {
  let v: string | undefined;
  for (const r of rules) {
    if (r.selector !== selector || !(prop in r.decls)) continue;
    if (r.maxHeight === undefined || h <= r.maxHeight) v = r.decls[prop];
  }
  return v;
};

const scrolls = (rules: Rule[], selector: string, h: number) =>
  ["auto", "scroll"].includes(at(rules, selector, "overflow-y", h) ?? "visible");

/** The element under the head that scrolls on a screen `h` tall, and what it
 *  holds. Exactly one may scroll: two nested scrollers would trap a thumb. */
const scrollerAt = (rules: Rule[], dom: HTMLElement, h: number) => {
  const local = (el: Element) =>
    [...el.classList].map((c) => c.match(/^_?([a-zA-Z]+)_/)?.[1] ?? c).find((n) => rules.some((r) => r.selector === `.${n}`));
  const sheet = dom.querySelector('[class*="sheet"]')!;
  const scrolling = [...sheet.querySelectorAll("*")].filter((el) => {
    const n = local(el);
    return n !== undefined && scrolls(rules, `.${n}`, h);
  });
  expect(scrolling).toHaveLength(1);
  const el = scrolling[0];
  const holds = (name: string) => !!el.querySelector(`[class*="${name}"]`);
  return {
    name: local(el),
    holdsAppearance: holds("appearance"),
    holdsFoot: holds("foot"),
    holdsRows: el.querySelectorAll('a[class*="row"]').length,
    headStays: !el.querySelector('[class*="head"]') && !!sheet.querySelector('[class*="head"] [aria-label="Close menu"]'),
  };
};

const SHORT = [375, 390, 568, 640, 664, 667, 736, 760]; // landscape, SE 1st gen, Androids, SE/8, Safari on 844, 8 Plus
const TALL = [812, 844, 896, 1024]; // the design's screen and up

const renderSheet = () =>
  render(<MobileNavSheet groups={navGroups} updated="4 Oct 2026" searchHint={navSearchHint} />).container;

describe("V-global-04: the menu sheet on a short screen", () => {
  const rules = parse(CSS);

  it.each(SHORT)("at %ipx tall, Appearance and the foot scroll with the 30 rows, under a head that stays", (h) => {
    const s = scrollerAt(rules, renderSheet(), h);
    expect(s.name).toBe("content");
    expect(s.holdsRows).toBe(30);
    expect(s.holdsAppearance).toBe(true);
    expect(s.holdsFoot).toBe(true);
    expect(s.headStays).toBe(true);
  });

  it.each(TALL)("at %ipx tall, only the list scrolls and Appearance and the foot stay pinned, as designed", (h) => {
    const s = scrollerAt(rules, renderSheet(), h);
    expect(s.name).toBe("list");
    expect(s.holdsRows).toBe(30);
    expect(s.holdsAppearance).toBe(false);
    expect(s.holdsFoot).toBe(false);
  });

  it("the column under the head can shrink, so on a tall screen the list takes the rest", () => {
    expect(at(rules, ".content", "display", 900)).toBe("flex");
    expect(at(rules, ".content", "flex-direction", 900)).toBe("column");
    expect(at(rules, ".content", "min-height", 900)).toBe("0");
    expect(at(rules, ".list", "flex", 900)).toBe("1");
    // and on a short one the list is its full length inside the scroller
    expect(at(rules, ".list", "flex", 667)).toBe("none");
  });

  it("negative control: the shipped sheet scrolls only the list at 667px, leaving Appearance and the foot pinned", () => {
    // origin/main 9cd6a889, app/components/mobileNavSheet.module.css (the
    // scrolling rules) and MobileNavSheet.tsx (the sheet's children).
    const SHIPPED_CSS = `
.sheet { position: absolute; display: flex; flex-direction: column; }
.head { padding: 52px 18px 14px; display: flex; }
.search { margin: 14px 18px 0; min-height: 48px; }
.list {
  flex: 1;
  overflow-y: auto;
  padding: 18px 0 0;
  -webkit-overflow-scrolling: touch;
}
.appearance { border-top: 1px solid var(--rule-soft); padding: 14px 18px 12px; }
.foot { border-top: 1px solid var(--line); padding: 14px 18px 16px; }
`;
    const dom = document.createElement("div");
    dom.innerHTML = `<div class="_sheet_x"><div class="_head_x"><button aria-label="Close menu"></button></div>
      <a class="_search_x" href="/search"></a>
      <div class="_list_x">${'<a class="_row_x" href="/"></a>'.repeat(30)}</div>
      <div class="_appearance_x"></div><div class="_foot_x"></div></div>`;
    const shipped = parse(SHIPPED_CSS);
    for (const h of SHORT) {
      const s = scrollerAt(shipped, dom, h);
      expect(s.name).toBe("list");
      expect(s.holdsAppearance || s.holdsFoot).toBe(false);
    }
    expect(shipped.some((r) => r.maxHeight !== undefined)).toBe(false);
  });
});
