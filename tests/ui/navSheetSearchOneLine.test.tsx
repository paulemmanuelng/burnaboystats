import { readFileSync } from "node:fs";
import { render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
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
 * V-global-21 (full-site debug, 5 Oct 2026).
 *
 * The menu sheet's search pill reads "Search 250 certs, 384 entries…". Read
 * live in headless Chrome at 320x640, dark and light, 6 Oct: the pill left
 * the text 226px and it needed 242, so it broke onto a second line (38px of
 * text in the 48px pill); 340, 360, 375, 390, 768 and 1024 were one line.
 * The rule below grafted onto the live page held 320 to one line ending
 * "…384 entri…" (scrollWidth 242 in a 226px box), in both themes, and left
 * every wider width reading in full.
 *
 * jsdom does no layout, so this reads what the stylesheet gives the hint's
 * span at each width (no width or height query may undo it), and checks the
 * full hint is still in the DOM, the ellipsis being paint only. The same
 * reads run on the shipped rule (origin/main, quoted), which fail them.
 */

const CSS = readFileSync("app/components/mobileNavSheet.module.css", "utf8");

type Rule = { selector: string; decls: Record<string, string>; query?: string };

/** Top-level rules and @media blocks (any query), in source order. */
const parse = (css: string): Rule[] => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const block = (body: string, query?: string) => {
    for (const m of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const decls: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) decls[part.slice(0, i).trim()] = part.slice(i + 1).trim();
      }
      for (const selector of m[1].split(",")) rules.push({ selector: selector.trim(), decls, query });
    }
  };
  const top = /@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[3]) block(m[3]);
    else block(m[2], m[1].trim());
  }
  return rules;
};

/** The hint's span, as every rule that names it would leave it. */
const searchText = (rules: Rule[]) => {
  const own = rules.filter((r) => r.selector === ".searchText");
  const base = Object.assign({}, ...own.filter((r) => !r.query).map((r) => r.decls)) as Record<string, string>;
  return { base, overrides: own.filter((r) => r.query) };
};

/** One line, cut with an ellipsis, and allowed to shrink inside the flex pill. */
const holdsOneLine = (d: Record<string, string>) =>
  d["white-space"] === "nowrap" &&
  d["overflow"] === "hidden" &&
  d["text-overflow"] === "ellipsis" &&
  d["min-width"] === "0";

describe("V-global-21: the menu sheet's search hint stays on one line", () => {
  const rules = parse(CSS);

  it("the hint's span is held to one line and ends in an ellipsis when it runs out of room", () => {
    const { base } = searchText(rules);
    expect(base["flex"]).toBe("1");
    expect(holdsOneLine(base)).toBe(true);
  });

  it("no width or height query lets it wrap again (320 and short phones included)", () => {
    const { overrides } = searchText(rules);
    for (const r of overrides) {
      for (const prop of ["white-space", "overflow", "text-overflow", "min-width"]) {
        expect(r.decls[prop], `${r.query} sets ${prop}`).toBeUndefined();
      }
    }
  });

  it("the whole hint is still the link's text: the ellipsis is paint, not a shorter string", () => {
    const { container } = render(
      <MobileNavSheet groups={navGroups} updated="6 Oct 2026" searchHint={navSearchHint} />
    );
    const link = container.querySelector('a[href="/search"]')!;
    const span = link.querySelector('[class*="searchText"]')!;
    expect(span.textContent).toBe(`Search ${navSearchHint}…`);
    expect(link.textContent?.trim()).toBe(`Search ${navSearchHint}…`);
  });

  it("negative control: the shipped rule let the hint wrap", () => {
    // origin/main, app/components/mobileNavSheet.module.css, verbatim.
    const SHIPPED_CSS = `.searchText { flex: 1; }`;
    const { base } = searchText(parse(SHIPPED_CSS));
    expect(base["flex"]).toBe("1");
    expect(holdsOneLine(base)).toBe(false);
  });
});
