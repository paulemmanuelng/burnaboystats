import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
  redirect: () => {
    throw new Error("redirect()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import PairPage from "../../app/compare/[pair]/page";
import ComparePage from "../../app/compare/page";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareA-09 (full-site debug, 5 Oct 2026).
 *
 * The fold under a pair's table reads "+ 21 FURTHER COUNTRIES … AT LEAST
 * 8,899,327" in the mono caption, then the action. Read live in headless
 * Chrome, dark and light, 7 Oct, on /compare/burna-boy-vs-seyi-vibez and
 * /compare/burna-boy-vs-davido: at 1440, 1024 and 761 the action was
 * "Show all ↓" in 16px sentence-case sans (weight 400) beside the mono caps
 * caption, and at 761 it broke between "Show" and "all ↓"; at 760 and 390 the
 * same link was "SHOW ALL ↓" in Space Mono 700, 11px, 0.1em, caps. With the
 * rule below grafted onto the live pages every width read Space Mono 700 11px
 * 1.1px caps on one line (78px wide, 16px tall on desktop), the phone's
 * figures were unchanged to the pixel, and no page scrolled sideways.
 *
 * jsdom does no layout, so this reads what the stylesheet gives the link at
 * each width (base rule, then any query that names it), and checks the
 * folded row's "Show all" and the open table's "Show fewer" both carry the
 * class. The same reads run on the shipped rules (quoted), which fail them.
 */

const CSS = readFileSync("app/compare/compare.module.css", "utf8");

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

/** A width query, as the browser would evaluate it at `w`. */
const matches = (query: string, w: number) => {
  const max = query.match(/max-width:\s*(\d+)px/);
  const min = query.match(/min-width:\s*(\d+)px/);
  if (!max && !min) return false;
  return (!max || w <= Number(max[1])) && (!min || w >= Number(min[1]));
};

/** The link's declarations at a width: the base rule, then the queries that apply. */
const showAllAt = (rules: Rule[], w: number) =>
  Object.assign(
    {},
    ...rules.filter((r) => r.selector === ".showAll" && (!r.query || matches(r.query, w))).map((r) => r.decls)
  ) as Record<string, string>;

const TYPE = ["font-family", "font-weight", "font-size", "letter-spacing", "text-transform"] as const;
const label = (d: Record<string, string>) => Object.fromEntries(TYPE.map((p) => [p, d[p]]));

/** The page's mono label, as the phone drew it: Space Mono 700, 11px, 0.1em, caps. */
const MONO_LABEL = {
  "font-family": "var(--font-mono), monospace",
  "font-weight": "700",
  "font-size": "var(--type-label)",
  "letter-spacing": "0.1em",
  "text-transform": "uppercase",
};
const WIDTHS = [320, 390, 760, 761, 900, 1024, 1440];

const html = (el: React.ReactElement) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(el);
  return root;
};
const norm = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

// J0-4 (fix 7): "Show all" and "Show fewer" take no glyph since 8 Oct 2026.
describe("V-compareA-09: 'Show all' is the same mono label on desktop and the phone", () => {
  const rules = parse(CSS);

  it("the base rule gives the link the mono label and keeps it on one line", () => {
    const base = showAllAt(rules, 1440);
    expect(label(base)).toEqual(MONO_LABEL);
    expect(base["white-space"]).toBe("nowrap");
    expect(base["color"]).toBe("var(--gold)");
  });

  it("every width reads the same type: no query sets it again", () => {
    for (const w of WIDTHS) {
      expect(label(showAllAt(rules, w)), `at ${w}px`).toEqual(MONO_LABEL);
    }
    for (const r of rules.filter((r) => r.selector === ".showAll" && r.query)) {
      for (const p of [...TYPE, "white-space"]) expect(r.decls[p], `${r.query} sets ${p}`).toBeUndefined();
    }
  });

  it("the phone keeps its 44px tap row; desktop keeps the 10px gap after the caption", () => {
    expect(showAllAt(rules, 390)["min-height"]).toBe("44px");
    expect(showAllAt(rules, 390)["margin-left"]).toBe("0");
    expect(showAllAt(rules, 761)["margin-left"]).toBe("10px");
  });

  it("the folded row's 'Show all' sits beside the caption and carries the class", async () => {
    for (const slug of ["burna-boy-vs-seyi-vibez", "burna-boy-vs-davido"]) {
      const root = html(await PairPage({ params: Promise.resolve({ pair: slug }) }));
      const link = [...root.querySelectorAll("a")].find((a) => norm(a.textContent) === "Show all");
      expect(link, slug).toBeDefined();
      expect(link!.classList.contains(styles.showAll), slug).toBe(true);
      expect(link!.closest("td")!.querySelector(`.${styles.collapseText}`), slug).not.toBeNull();
    }
  });

  it("the open table's 'Show fewer' is the same control", async () => {
    const root = html(await ComparePage({ searchParams: Promise.resolve({ a: "burna-boy", b: "seyi-vibez", all: "1" }) }));
    const link = [...root.querySelectorAll("a")].find((a) => norm(a.textContent) === "Show fewer");
    expect(link).toBeDefined();
    expect(link!.classList.contains(styles.showAll)).toBe(true);
  });

  it("negative control: the shipped rules gave desktop the body sans", () => {
    // fix/debug-1005-ui-nit, app/compare/compare.module.css, verbatim.
    const SHIPPED_CSS = `.showAll { color: var(--gold); margin-left: 10px; }
@media (max-width: 760px) {
  .showAll { margin-left: 0; min-height: 44px; display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono), monospace; font-weight: 700; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
}`;
    const shipped = parse(SHIPPED_CSS);
    expect(label(showAllAt(shipped, 1440))).not.toEqual(MONO_LABEL);
    expect(showAllAt(shipped, 1440)["font-family"]).toBeUndefined();
    expect(showAllAt(shipped, 761)["white-space"]).toBeUndefined();
    expect(showAllAt(shipped, 390)["text-transform"]).toBe("uppercase");
  });
});
