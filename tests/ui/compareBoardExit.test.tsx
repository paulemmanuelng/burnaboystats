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
 * V-compareIn-01, the full-site debug of 5 Oct 2026. Every country board ends
 * on its own "Next" — the head-to-head of its two leaders ("Seyi Vibez vs
 * Asake ↗"), or "Every market ↗" where one artist is certified — in the same
 * .exit strip a pair page ends on. A pair page hides that strip at ≤900px,
 * where its sticky "The Afrobeats Board ↗" bar takes over, and the rule hid
 * every .exit. The bar only renders beside a pair, so on phones and in the
 * 760–900 band all 27 boards had no way onward: measured live in headless
 * Chrome at 320, 390, 800 and 900 (dark and light), the section was
 * display:none, no bar was in the DOM, and the page ended at "How this is
 * counted". At 901 and up it showed.
 *
 * jsdom does no layout, so this reads the stylesheet the way the cascade will
 * (media at the width, selector match on the rendered element's own classes
 * and ancestors, specificity, then source order) and asks for `display`.
 * Checked live by grafting the same result onto the shipped boards (320, 390,
 * 760, 800 and 900, dark and light): the strip sits 40px under the board's
 * notes, as at 1440, its button fits at 320, and nothing overflows.
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

/** The winning `display` on `el` at `width` ("" when no rule sets one). */
function display(css: string, el: Element, width: number): string {
  let win: { spec: number; at: number; v: string } | undefined;
  for (const r of rules(css)) {
    if (!mediaAt(r.media, width)) continue;
    const v = decl(r.body, "display");
    if (v === undefined) continue;
    for (const part of r.selector.split(",").map((s) => s.trim())) {
      if (!matches(el, part)) continue;
      const spec = specificity(part);
      if (!win || spec > win.spec || (spec === win.spec && r.at >= win.at)) win = { spec, at: r.at, v };
    }
  }
  return win?.v ?? "";
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

const shown = (css: string, el: Element | null, width: number) => Boolean(el) && display(css, asWritten(el!), width) !== "none";

const root = (markup: string) => {
  const r = document.createElement("div");
  r.innerHTML = markup;
  return r;
};
const board = async (country: string) => root(renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country }) })));
const pair = async (slug: string) => root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));
const compare = async (sp: Record<string, string>) => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));

const ways = (page: Element) => ({
  exits: [...page.querySelectorAll('section[aria-label="Next"]')],
  bar: page.querySelector(`.${styles.boardBar}`),
});

// Phones, the tab-bar band above this page's 760 switch, the edges, desktop.
const WIDTHS = [320, 390, 760, 761, 800, 900, 901, 1024, 1440];

/** The line that shipped (compare.module.css on origin/main), verbatim. */
const SHIPPED = "@media (max-width: 900px) { .exit { display: none; } }";
const NOW = "@media (max-width: 900px) { .exitPair { display: none; } }";

const COUNTRIES = certCountryCodes().map((code) => countrySlug(code));

describe("V-compareIn-01: every country board keeps its 'Next' on every layout", () => {
  // 28 since 7 Oct 2026: Turkey's board (label-issued Diamonds, owner's ruling).
  it("all 28 markets are checked", () => {
    expect(COUNTRIES.length).toBe(28);
  });

  it.each(COUNTRIES)("/compare/in/%s: the exit shows at every width, and it is the only way onward", async (slug) => {
    const page = await board(slug);
    const { exits, bar } = ways(page);
    expect(exits.length).toBe(1);
    // The board's exit goes to the head-to-head of its leaders, or to every market.
    const link = exits[0].querySelector("a")?.getAttribute("href") ?? "";
    expect(link).toMatch(/^\/compare\/(?:[a-z-]+-vs-[a-z-]+|in)$/);
    // No sticky bar renders on a board, so nothing else stands in for it.
    expect(bar).toBeNull();
    for (const w of WIDTHS) expect(shown(CSS, exits[0], w), `${slug} at ${w}px`).toBe(true);
  });
});

describe("a pair page still shows exactly one exit: the strip on desktop, the sticky bar wherever the tab bar is", () => {
  it.each(["burna-boy-vs-wizkid", "seyi-vibez-vs-asake"])("/compare/%s", async (slug) => {
    const { exits, bar } = ways(await pair(slug));
    expect(exits.length).toBe(1);
    expect(bar).not.toBeNull();
    for (const w of WIDTHS) {
      const strip = shown(CSS, exits[0], w);
      const sticky = shown(CSS, bar, w);
      expect({ w, strip, sticky }).toEqual({ w, strip: w > 900, sticky: w <= 900 });
    }
  });

  it("a song pair the same", async () => {
    const { exits, bar } = ways(await compare({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Last Last", sb: "Essence" }));
    expect(exits.length).toBe(1);
    expect(bar).not.toBeNull();
    for (const w of WIDTHS) expect({ w, strip: shown(CSS, exits[0], w), sticky: shown(CSS, bar, w) }).toEqual({ w, strip: w > 900, sticky: w <= 900 });
  });
});

describe("negative control: the shipped rule", () => {
  it("is the line this change replaced", () => {
    expect(CSS).toContain(NOW);
    expect(CSS).not.toContain(SHIPPED);
  });

  it("hid the board's exit at ≤900 with nothing in its place, and leaves the pair page as it is now", async () => {
    const shipped = CSS.replace(NOW, SHIPPED);
    const { exits } = ways(await board("nigeria"));
    for (const w of WIDTHS) expect({ w, shown: shown(shipped, exits[0], w) }).toEqual({ w, shown: w > 900 });
    const p = ways(await pair("burna-boy-vs-wizkid"));
    for (const w of WIDTHS) {
      expect(shown(shipped, p.exits[0], w)).toBe(shown(CSS, p.exits[0], w));
      expect(shown(shipped, p.bar, w)).toBe(shown(CSS, p.bar, w));
    }
  });
});
