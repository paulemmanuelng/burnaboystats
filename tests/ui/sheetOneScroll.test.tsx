import { readFileSync } from "node:fs";
import { act, fireEvent, render } from "@testing-library/react";
import { winning } from "../fixtures/cssRules";

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
 * sheetOneScroll: the menu sheet scrolls as one column (Job 4, J4-2, fix 78).
 *
 * Only the head (brand and the close button) stays fixed. The search, the
 * three groups from lib/navGroups.ts, Appearance and the foot scroll together
 * at every height, under a 40px fade that shows while there is more below.
 * Before, from 781px tall only the list scrolled, with the search, Appearance
 * and the foot pinned round it, and below that everything scrolled (5 Oct
 * 2026, V-global-04): two behaviours, one per height band.
 *
 * jsdom does no layout, so this reads which element the stylesheet makes
 * scroll on a screen of a given height, and checks what that element holds.
 * The same read on the shipped rules (main e85e6efe, quoted) fails on every
 * tall screen.
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

const overflowY = (rules: Rule[], selector: string, h: number) =>
  at(rules, selector, "overflow-y", h) ?? at(rules, selector, "overflow", h) ?? "visible";
const scrolls = (rules: Rule[], selector: string, h: number) => ["auto", "scroll"].includes(overflowY(rules, selector, h));

/** The CSS-module class name an element carries ("_content_x1" → "content"). */
const localName = (rules: Rule[], el: Element) =>
  [...el.classList].map((c) => c.match(/^_?([a-zA-Z]+)_/)?.[1] ?? c).find((n) => rules.some((r) => r.selector === `.${n}`));

/** The element under the head that scrolls on a screen `h` tall, and what it
 *  holds. Exactly one may scroll: two nested scrollers would trap a thumb. */
const scrollerAt = (rules: Rule[], dom: HTMLElement, h: number) => {
  const sheet = dom.querySelector('[class*="sheet"]')!;
  const scrolling = [...sheet.querySelectorAll("*")].filter((el) => {
    const n = localName(rules, el);
    return n !== undefined && scrolls(rules, `.${n}`, h);
  });
  expect(scrolling).toHaveLength(1);
  const el = scrolling[0];
  const holds = (name: string) => !!el.querySelector(`[class*="${name}"]`);
  return {
    name: localName(rules, el),
    holdsSearch: !!el.querySelector('a[href="/search"]'),
    holdsAppearance: holds("appearance"),
    holdsFoot: holds("foot"),
    holdsRows: el.querySelectorAll('a[class*="row"]').length,
    headStays: !el.querySelector('[class*="head"]') && !!sheet.querySelector('[class*="head"] [aria-label="Close menu"]'),
  };
};

// Landscape, SE 1st gen, Androids, SE/8, Safari on 844, 8 Plus, the design's
// 812, 844, 402 x 874, 896 and a tablet: the one rule holds at all of them.
const HEIGHTS = [375, 390, 568, 640, 664, 667, 736, 760, 812, 844, 874, 896, 1024];
const TALL = [812, 844, 874, 896, 1024];

const ROWS = navGroups.flatMap((g) => g.items);

const renderSheet = () =>
  render(<MobileNavSheet groups={navGroups} updated="4 Oct 2026" searchHint={navSearchHint} />).container;

describe("sheetOneScroll: one column scrolls under a fixed head (fix 78)", () => {
  const rules = parse(CSS);

  it.each(HEIGHTS)("at %ipx tall the column under the head scrolls, holding the search, every row, Appearance and the foot", (h) => {
    const s = scrollerAt(rules, renderSheet(), h);
    expect(s.name).toBe("content");
    expect(s.holdsSearch).toBe(true);
    expect(s.holdsRows).toBe(ROWS.length);
    expect(s.holdsAppearance).toBe(true);
    expect(s.holdsFoot).toBe(true);
    expect(s.headStays).toBe(true);
  });

  it("no height band: the sheet's stylesheet carries no max-height query", () => {
    expect(rules.some((r) => r.maxHeight !== undefined)).toBe(false);
    expect(CSS).not.toMatch(/max-height\s*:\s*\d+px\s*\)/);
  });

  it("the column can shrink inside the sheet, and the list is its full length within it", () => {
    expect(at(rules, ".content", "flex", 900)).toBe("1");
    expect(at(rules, ".content", "min-height", 900)).toBe("0");
    expect(at(rules, ".content", "overscroll-behavior", 900)).toBe("contain");
    expect(at(rules, ".list", "flex", 900)).toBe("none");
  });

  it("the rows are navGroups' own, in its order and wording, with each derived count", () => {
    const dom = renderSheet();
    const content = dom.querySelector('[class*="content"]')!;
    const rows = [...content.querySelectorAll('a[class*="row"]')];
    expect(rows.map((a) => a.getAttribute("href"))).toEqual(ROWS.map((r) => r.href));
    expect(rows.map((a) => a.querySelector('[class*="label"]')?.textContent)).toEqual(ROWS.map((r) => r.label));
    expect(rows.map((a) => a.querySelector('[class*="meta"]')?.textContent ?? "")).toEqual(ROWS.map((r) => r.meta));
    const groups = [...content.querySelectorAll('[class*="groupName"]')].map((g) => g.textContent);
    expect(groups).toEqual(navGroups.map((g) => g.name));
  });

  it("the foot keeps its green dot and \"Box office ↗\", as built", () => {
    const foot = renderSheet().querySelector('[class*="foot"]')!;
    expect(foot.querySelector('[class*="dot"]')).not.toBeNull();
    const link = foot.querySelector('a[href="/records/tours/revenue"]')!;
    expect(link.textContent).toBe("Box office ↗");
    expect(winning(CSS, ".dot", "background", (m) => m === null)).toMatch(/var\(--green/);
  });
});

describe("sheetOneScroll: the 40px fade over the cut", () => {
  it("is a hidden, tap-through 40px band at the sheet's foot, outside the scrolling column", () => {
    const dom = renderSheet();
    const fade = dom.querySelector('[class*="fade"]')!;
    expect(fade).not.toBeNull();
    expect(fade.getAttribute("aria-hidden")).toBe("true");
    expect(fade.closest('[class*="content"]')).toBeNull();
    expect(fade.parentElement!.className).toMatch(/sheet/);
    const top = (p: string) => winning(CSS, ".fade", p, (m) => m === null);
    expect(top("position")).toBe("absolute");
    expect(top("bottom")).toBe("0");
    expect(top("height")).toBe("40px");
    expect(top("pointer-events")).toBe("none");
    expect(top("background")).toBe("linear-gradient(to bottom, transparent, var(--bg))");
    // Shown only while there is more below.
    expect(top("opacity")).toBe("0");
    expect(winning(CSS, ".fade[data-more]", "opacity", (m) => m === null)).toBe("1");
    // and it appears without a transition under reduced motion
    expect(winning(CSS, ".fade", "transition", (m) => !!m && /prefers-reduced-motion:\s*reduce/.test(m))).toBe("none");
  });

  it("shows while the column has more below and goes at its end", () => {
    const dom = renderSheet();
    act(() => {
      window.dispatchEvent(new CustomEvent("mobile-nav-open", { detail: null }));
    });
    const content = dom.querySelector('[class*="content"]') as HTMLElement;
    const fade = dom.querySelector('[class*="fade"]')!;
    // jsdom does no layout: give the column a 1,400px scroll in a 600px box.
    Object.defineProperty(content, "scrollHeight", { configurable: true, value: 1400 });
    Object.defineProperty(content, "clientHeight", { configurable: true, value: 600 });
    content.scrollTop = 0;
    fireEvent.scroll(content);
    expect(fade.hasAttribute("data-more")).toBe(true);
    content.scrollTop = 400;
    fireEvent.scroll(content);
    expect(fade.hasAttribute("data-more")).toBe(true);
    content.scrollTop = 800;
    fireEvent.scroll(content);
    expect(fade.hasAttribute("data-more")).toBe(false);
  });
});

describe("sheetOneScroll: negative control", () => {
  it("the shipped rules make the list the scroller on every tall screen, pinning Appearance and the foot", () => {
    // main e85e6efe, app/components/mobileNavSheet.module.css: .content,
    // .list and the max-height block, verbatim.
    const SHIPPED_CSS = `
.content {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.list {
  flex: 1;
  overflow-y: auto;
  padding: 18px 0 0;
  -webkit-overflow-scrolling: touch;
}
@media (max-height: 780px) {
  .content {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .list {
    flex: none;
    overflow-y: visible;
  }
}
.sheet { position: absolute; }
.head { display: flex; }
.appearance { padding: 14px 18px 12px; }
.foot { padding: 14px 18px 16px; }
`;
    const shipped = parse(SHIPPED_CSS);
    const dom = renderSheet();
    for (const h of TALL) {
      const s = scrollerAt(shipped, dom, h);
      expect(s.name).toBe("list");
      expect(s.holdsAppearance || s.holdsFoot || s.holdsSearch).toBe(false);
    }
    expect(shipped.some((r) => r.maxHeight !== undefined)).toBe(true);
  });
});
