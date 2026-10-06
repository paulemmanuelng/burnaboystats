import { readFileSync } from "node:fs";
import { join } from "node:path";
import { render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(window.location.search),
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/search",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SearchResults from "../../app/components/SearchResults";
import styles from "../../app/search/search.module.css";

/**
 * V-core-09 (full-site debug, 5 Oct 2026).
 *
 * On the live /search, read in headless Chrome at 1440 and 390, dark and
 * light, 6 Oct: with "dai" typed, the input computed `outline: solid 2px
 * <gold>` at a 2px offset inside the field's own gold edge — two nested gold
 * boxes — and the screenshots showed the browser's own ✕ (type="search")
 * beside the page's "Clear ✕" pill. With these two rules injected into the
 * live page, the same frames show the field's edge alone and the pill alone.
 *
 * search.module.css meant neither: `.input { outline: none }` is one class
 * (0,1,0) and lost to globals.css's `input:focus-visible` (0,1,1). The field's
 * :focus-within edge is the ring, as the stylesheet's own comment says, and the
 * pill is the one clear control.
 *
 * jsdom does not cascade module CSS, so the cascade half is checked on the
 * stylesheets: the module's override must out-rank the global ring.
 */

const ROOT = process.cwd();
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, "");
const SEARCH = strip(readFileSync(join(ROOT, "app/search/search.module.css"), "utf8"));
const GLOBALS = strip(readFileSync(join(ROOT, "app/globals.css"), "utf8"));

/** Declarations of the rule with exactly this selector, or null. */
function decls(css: string, selector: string): Record<string, string> | null {
  const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = new RegExp(`(?:^|[}\\s])${esc}\\s*\\{([^}]*)\\}`).exec(css);
  if (!m) return null;
  return Object.fromEntries(
    m[1]
      .split(";")
      .map((d) => [d.slice(0, d.indexOf(":")).trim(), d.slice(d.indexOf(":") + 1).replace(/\s+/g, " ").trim()])
      .filter(([k]) => k),
  );
}

/** [ids, classes + attributes + pseudo-classes, types + pseudo-elements] of a simple selector chain. */
function specificity(sel: string): [number, number, number] {
  const ids = (sel.match(/#[\w-]+/g) ?? []).length;
  const pseudoEls = (sel.match(/::[\w-]+/g) ?? []).length;
  const rest = sel.replace(/::[\w-]+/g, "");
  const classes = (rest.match(/\.[\w-]+|\[[^\]]*\]|:[\w-]+/g) ?? []).length;
  const types = (rest.replace(/\.[\w-]+|\[[^\]]*\]|:[\w-]+|#[\w-]+/g, " ").match(/[a-z][\w-]*/gi) ?? []).length;
  return [ids, classes, types + pseudoEls];
}
const beats = (a: [number, number, number], b: [number, number, number]) =>
  a[0] !== b[0] ? a[0] > b[0] : a[1] !== b[1] ? a[1] > b[1] : a[2] >= b[2];

describe("V-core-09: the search field draws one ring and one clear control", () => {
  it("the global ring still reaches inputs (so the override below is needed)", () => {
    // The global rule is a selector list; find it by its input member.
    expect(GLOBALS).toMatch(/input:focus-visible,[^{]*\{\s*outline: 2px solid var\(--gold\);/);
  });

  it("the module's focus-visible override removes the input's own outline and out-ranks the global rule", () => {
    const d = decls(SEARCH, ".input:focus-visible");
    expect(d, "no .input:focus-visible rule in search.module.css").not.toBeNull();
    expect(d!["outline"]).toBe("none");
    expect(beats(specificity(".input:focus-visible"), specificity("input:focus-visible"))).toBe(true);
    // Negative control: the shipped rule alone, `.input { outline: none }`, loses.
    expect(decls(SEARCH, ".input")!["outline"]).toBe("none");
    expect(beats(specificity(".input"), specificity("input:focus-visible"))).toBe(false);
  });

  it("the field's own edge still lights on focus: that is the ring", () => {
    expect(decls(SEARCH, ".field:focus-within")).toEqual({ "border-color": "var(--gold)" });
  });

  it("the browser's native ✕ is switched off; the page's Clear pill is the only clear control", () => {
    const d = decls(SEARCH, ".input::-webkit-search-cancel-button");
    expect(d, "no ::-webkit-search-cancel-button rule").not.toBeNull();
    expect(d!["-webkit-appearance"]).toBe("none");
    expect(d!["appearance"]).toBe("none");

    const { container } = render(<SearchResults initialQuery="dai" stats={{}} />);
    const form = container.querySelector('form[role="search"]') as HTMLElement;
    const input = form.querySelector("input") as HTMLInputElement;
    // Still a search field (name="q", the mobile keyboard's search key), now styled by these rules.
    expect(input.type).toBe("search");
    expect(input.className).toContain(styles.input);
    const clears = Array.from(form.querySelectorAll("button")).filter((b) => /clear/i.test(b.textContent ?? ""));
    expect(clears.map((b) => b.textContent?.trim())).toEqual(["Clear ✕"]);
  });
});
