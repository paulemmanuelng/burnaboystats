import { readFileSync } from "node:fs";
import { join } from "node:path";
import { render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  usePathname: () => "/music",
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn() }),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Nav from "../../app/components/Nav";
import { navItems } from "../../app/lib/links";
import { suggestedSearchDocs } from "../../app/lib/searchSuggested";

/**
 * V-core-11 (full-site debug, 5 Oct 2026).
 *
 * On the live site, read in headless Chrome at 1240, 1440 and 1920, dark and
 * light, 6 Oct: Tab from the top of / went Skip link → wordmark → theme flip
 * (x 1060 at 1440) → Search (1104) → Stat card (1244) → Home (273) → Music …
 * Contact (919). On screen the ten section links sit at the left beside the
 * wordmark and the three controls at the far right, so the focus ring jumped
 * right, then back left, then along the row. The links sat LAST in Nav.tsx's
 * source and globals.css moved them to the front with `order: -1`, which moves
 * the boxes but not the Tab order.
 *
 * Fixed in the source: the links come first, and nothing in the bar is
 * reordered by CSS, so Tab follows the row as drawn. Desktop only — below 1240
 * the links are display:none and the phone bar (wordmark, flip, search,
 * hamburger) was already in source order.
 *
 * jsdom does not lay out, so the two halves are checked separately: the
 * source order on the rendered component, and the absence of any `order`
 * on the bar's items in the stylesheets.
 */

const ROOT = process.cwd();
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, "");
const read = (p: string) => strip(readFileSync(join(ROOT, p), "utf8"));

/** Things Tab can land on, in source order, by their accessible name. */
function tabStops(root: HTMLElement): string[] {
  return [...root.querySelectorAll<HTMLElement>("a[href], button, input, [tabindex]")]
    .filter((el) => el.getAttribute("tabindex") !== "-1")
    .map((el) => (el.getAttribute("aria-label") ?? el.textContent ?? "").replace(/\s+/g, " ").trim());
}

/**
 * Every rule (at any @media depth) whose selector targets one of `classes`
 * itself — not a descendant of it — and declares `order`.
 */
function reordered(css: string, classes: readonly string[]): string[] {
  const hits: string[] = [];
  for (const m of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selectors = m[1].split(",").map((s) => s.trim());
    const own = selectors.filter((sel) =>
      classes.some((c) => new RegExp(`\\.${c}(?![\\w-])(?::[\\w-]+(?:\\([^)]*\\))?)*$`).test(sel)),
    );
    if (own.length && /(?:^|[;\s])order\s*:/.test(m[2])) hits.push(own.join(", "));
  }
  return hits;
}

describe("V-core-11: the desktop header's Tab order follows the row on screen", () => {
  it("the section links come straight after the wordmark, before the theme flip, search and Stat card", () => {
    const { container } = render(<Nav suggested={suggestedSearchDocs()} />);
    const nav = container.querySelector<HTMLElement>('nav[aria-label="Primary"]')!;
    const stops = tabStops(nav);
    const labels = navItems.map((i) => i.label);

    expect(stops[0]).toBe("BurnaBoyStats");
    expect(stops.slice(1, 1 + labels.length)).toEqual(labels);
    // The far-right controls all follow the last section link.
    const last = stops.indexOf(labels[labels.length - 1]);
    for (const control of ["Search the site", "Stat card"]) {
      expect(stops.indexOf(control), control).toBeGreaterThan(last);
    }
    expect(stops.findIndex((s) => /^Switch to (dark|light) mode$/.test(s))).toBeGreaterThan(last);
  });

  it("nothing in the bar is moved by CSS `order`, so what is drawn is what Tab walks", () => {
    expect(reordered(read("app/globals.css"), ["navRight", "navLinks", "navStatCard", "navToggle", "brand"])).toEqual([]);
    expect(reordered(read("app/components/themeToggle.module.css"), ["mini", "seg", "compact"])).toEqual([]);
    expect(reordered(read("app/components/SearchPalette.module.css"), ["trigger"])).toEqual([]);
  });

  it("negative control: the rule the site shipped is caught", () => {
    const SHIPPED = `.navLinks {
  display: flex;
  gap: 17px;
  list-style: none;
  order: -1;
  margin-right: auto;
  margin-left: 26px;
}`;
    expect(reordered(SHIPPED, ["navLinks"])).toEqual([".navLinks"]);
    // …but a descendant rule or a border shorthand is not mistaken for it.
    expect(reordered(".navLinks a { border: 0; order: 2; }\n.navLinks { border-bottom: 0; }", ["navLinks"])).toEqual([]);
  });
});
