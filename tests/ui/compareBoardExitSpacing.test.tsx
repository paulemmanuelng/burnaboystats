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

import ComparePage from "../../app/compare/page";
import CountryPage from "../../app/compare/in/[country]/page";
import PairPage from "../../app/compare/[pair]/page";
import { certCountryCodes, countrySlug } from "../../app/lib/certCountry";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareIn-03, the full-site debug of 5 Oct 2026. A pair page ends on its
 * "Next" strip; a country board's "Next" (the head-to-head of its leaders,
 * "Burna Boy vs Wizkid ↗", or "Every market ↗") comes BEFORE the method
 * notes, and the strip had space above it only. Measured live in headless
 * Chrome at 1440 (dark and light) on all 27 /compare/in boards: the exit's
 * padding-bottom and margin-bottom were 0, so the method notes' 1px rule ran
 * along the gold button's bottom edge — 0px between them — and the button
 * read as cut off by the rule. The notes above the strip leave 40px before
 * its rule; the strip now leaves the same before the next one.
 *
 * jsdom does no layout, so this reads the stylesheet the way the cascade will
 * (media at the width, selector match on the rendered element's own classes
 * and ancestors, specificity, then source order) and adds up the space
 * between the exit's button and the method's rule. Checked live by grafting
 * the rule onto the shipped boards (1440 dark and light, 900, 390 and 320
 * light): the button sits 40px above the rule, the 40px above the strip and
 * everything above it are unchanged to the pixel, and nothing overflows.
 */

type Rule = { media: string | null; selector: string; body: string; at: number };

/** Top-level rules and rules one @media deep, comments stripped. */
function rules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null, base: number) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media")) walk(body, head, base + open + 1);
      else out.push({ media, selector: head, body, at: base + i });
      i = j;
    }
  };
  walk(src, null, 0);
  return out;
}

const decl = (body: string, prop: string) =>
  body.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim();

/** One side of a box property, from its longhand or its shorthand ("margin: 0 0 40px"). */
function side(body: string, box: "margin" | "padding", edge: "top" | "bottom"): string | undefined {
  const long = decl(body, `${box}-${edge}`);
  const short = decl(body, box);
  // Whichever comes later in the block wins; a block here sets one or the other.
  if (long !== undefined) return long;
  if (short === undefined) return undefined;
  const v = short.split(/\s+/);
  return edge === "top" ? v[0] : v[v.length === 1 || v.length === 2 ? 0 : 2];
}

/** A width-only media query at `width`; anything else (motion, hover) does not apply. */
function mediaAt(media: string | null, width: number): boolean {
  if (media === null) return true;
  const rest = media.replace(/^@media\s*/, "").replace(/\((min|max)-width:\s*\d+px\)/g, "").replace(/\band\b/g, "").trim();
  if (rest !== "") return false;
  return [...media.matchAll(/\((min|max)-width:\s*(\d+)px\)/g)].every(([, kind, n]) =>
    kind === "min" ? width >= Number(n) : width <= Number(n),
  );
}

const specificity = (sel: string) => (sel.match(/[.#][\w-]+/g) ?? []).length;

function matches(el: Element, sel: string): boolean {
  try {
    return el.matches(sel);
  } catch {
    return false;
  }
}

/** The winning px value of one side of `box` on `el` at `width` (0 when no rule sets it). */
function px(css: string, el: Element, width: number, box: "margin" | "padding", edge: "top" | "bottom"): number {
  let win: { spec: number; at: number; v: string } | undefined;
  for (const r of rules(css)) {
    if (!mediaAt(r.media, width)) continue;
    const v = side(r.body, box, edge);
    if (v === undefined) continue;
    for (const part of r.selector.split(",").map((s) => s.trim())) {
      if (!matches(el, part)) continue;
      const spec = specificity(part);
      if (!win || spec > win.spec || (spec === win.spec && r.at >= win.at)) win = { spec, at: r.at, v };
    }
  }
  if (!win) return 0;
  const n = win.v.match(/^(-?\d+(?:\.\d+)?)px$/);
  if (win.v === "0" || win.v === "auto") return 0;
  if (!n) throw new Error(`${box}-${edge}: ${win.v} is not a px value`);
  return Number(n[1]);
}

const CSS = readFileSync("app/compare/compare.module.css", "utf8");

/** The module's class names as the stylesheet spells them, keyed by the name the test build gives them. */
const SOURCE = new Map(
  [...new Set([...CSS.matchAll(/\.([A-Za-z_][\w-]*)/g)].map((m) => m[1]))].map((n) => [String((styles as Record<string, string>)[n]), n]),
);

/** The element and its ancestors rebuilt with the stylesheet's own class names, so its selectors match. */
function asWritten(el: Element): Element {
  const chain: Element[] = [];
  for (let n: Element | null = el; n; n = n.parentElement) chain.unshift(n);
  const doc = document.implementation.createHTMLDocument("");
  let parent: Element = doc.body;
  for (const n of chain) {
    const c = doc.createElement(n.tagName.toLowerCase());
    for (const a of [...n.attributes]) if (a.name !== "class") c.setAttribute(a.name, a.value);
    c.className = [...n.classList].map((k) => SOURCE.get(k) ?? k).join(" ");
    parent.appendChild(c);
    parent = c;
  }
  return parent;
}

const root = (markup: string) => {
  const r = document.createElement("div");
  r.innerHTML = markup;
  return r;
};
const board = async (country: string) => root(renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country }) })));
const pair = async (slug: string) => root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));
const compare = async (sp: Record<string, string>) => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));

/** The next sibling in the flow: the visually hidden "How this is counted" heading is out of it. */
const nextInFlow = (el: Element) => {
  let n = el.nextElementSibling;
  while (n && n.classList.contains("visuallyHidden")) n = n.nextElementSibling;
  return n;
};

/**
 * The strip's two gaps at `width`: above its rule (what the block before it
 * leaves) and below its button (to the next block's rule, or to nothing).
 * Both positive and in block flow, so the touching margins collapse to the
 * larger.
 */
function gaps(css: string, exit: Element, width: number) {
  const e = asWritten(exit);
  const before = asWritten(exit.previousElementSibling!);
  const after = nextInFlow(exit);
  const above = Math.max(px(css, before, width, "margin", "bottom"), px(css, e, width, "margin", "top"));
  const below =
    px(css, e, width, "padding", "bottom") +
    Math.max(px(css, e, width, "margin", "bottom"), after ? px(css, asWritten(after), width, "margin", "top") : 0);
  return { above, below, after };
}

// Phones, the tab-bar band, the 760/900 edges, desktop.
const WIDTHS = [320, 390, 760, 761, 900, 901, 1024, 1440];

const COUNTRIES = certCountryCodes().map((code) => countrySlug(code));

/** The rule this change added, verbatim; without it is the page that shipped. */
const ADDED = ".exitBoard { margin-bottom: 40px; }";

describe("V-compareIn-03: a country board's 'Next' leaves the same room under its button as above its rule", () => {
  it("all 27 markets are checked", () => {
    expect(COUNTRIES.length).toBe(27);
  });

  it.each(COUNTRIES)("/compare/in/%s", async (slug) => {
    const page = await board(slug);
    const exits = [...page.querySelectorAll('section[aria-label="Next"]')];
    expect(exits.length).toBe(1);
    for (const w of WIDTHS) {
      const g = gaps(CSS, exits[0], w);
      // What follows the strip is the method notes, whose top is a rule.
      expect(g.after?.classList.contains(styles.method), `${slug}: method notes follow the exit`).toBe(true);
      expect({ w, above: g.above, below: g.below }).toEqual({ w, above: 40, below: 40 });
    }
  });

  it("the query board (features off) is the same component", async () => {
    const page = await compare({ mode: "country", country: "nigeria", feat: "0" });
    const [exit] = page.querySelectorAll('section[aria-label="Next"]');
    for (const w of WIDTHS) expect({ w, below: gaps(CSS, exit, w).below }).toEqual({ w, below: 40 });
  });
});

describe("a pair page's strip is the last block and stays as it was", () => {
  it.each(["burna-boy-vs-wizkid", "seyi-vibez-vs-asake"])("/compare/%s: no room added under it", async (slug) => {
    const page = await pair(slug);
    const [exit] = page.querySelectorAll('section[aria-label="Next"]');
    expect(exit.classList.contains(styles.exitBoard)).toBe(false);
    const e = asWritten(exit);
    for (const w of WIDTHS) {
      expect(px(CSS, e, w, "margin", "bottom") + px(CSS, e, w, "padding", "bottom")).toBe(0);
    }
  });
});

describe("negative control: the stylesheet that shipped", () => {
  it("is this one less the added rule", () => {
    expect(CSS.split(ADDED).length).toBe(2);
  });

  it("put the method notes' rule on the button's bottom edge: 0px, as measured live", async () => {
    const shipped = CSS.replace(ADDED, "");
    for (const slug of ["nigeria", "south-africa", "hungary"]) {
      const [exit] = (await board(slug)).querySelectorAll('section[aria-label="Next"]');
      for (const w of WIDTHS) expect({ w, ...gaps(shipped, exit, w), after: undefined }).toEqual({ w, above: 40, below: 0, after: undefined });
    }
  });
});
