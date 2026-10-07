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
import CountryIndexPage from "../../app/compare/in/page";
import CountryPage from "../../app/compare/in/[country]/page";
import PairPage from "../../app/compare/[pair]/page";
import { certCountryCodes, countrySlug } from "../../app/lib/certCountry";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareIn-10, the full-site debug of 5 Oct 2026. Every /compare page
 * opens on its kicker ("Certifications › Compare", or "Certified units,
 * compared" on a pair page) straight under the breadcrumb bar. On 4 Oct the
 * phone got 16px between the bar's bottom rule and the kicker (F-11), but the
 * rule sat in the 760px block, so above 760 the kicker box still started on
 * the rule: measured live in headless Chrome at 1440, 1024 and 901 on
 * /compare, /compare/in, /compare/in/nigeria and /compare/burna-boy-vs-wizkid,
 * the bar's bottom was y=118 and the kicker's top y=118 — 0px, the glyphs
 * about 4px under the rule — while every other page with the bar leaves 24px
 * (/on-this-day) to 72px (/updates) before its first line. The 16px now sits
 * on the base rule, so every width has it.
 *
 * jsdom does no layout, so this reads the stylesheet the way the cascade will
 * (media at the width, selector match on the rendered element's own classes
 * and ancestors, specificity, then source order). The kicker is <main>'s
 * first child, <main> follows the bar directly and has no top padding or
 * border, so the kicker's top margin is the whole gap. Checked live by
 * grafting the rule onto the shipped pages (1440, 1024, 900, 800, 761, 760 and
 * 390, dark and light): the kicker sits 16px under the rule on every width,
 * everything under it moves down 16px above 760 and not at all at or below.
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

/** The top side of a box property, from its longhand or its shorthand ("margin: 16px 0 14px"). */
function top(body: string, box: "margin" | "padding" | "border"): string | undefined {
  const long = decl(body, `${box}-top`);
  if (long !== undefined) return long;
  const short = decl(body, box);
  if (short === undefined) return undefined;
  return box === "border" ? short : short.split(/\s+/)[0];
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

/** The winning value of the top side of `box` on `el` at `width` (undefined when no rule sets it). */
function winning(css: Rule[], el: Element, width: number, box: "margin" | "padding" | "border"): string | undefined {
  let win: { spec: number; at: number; v: string } | undefined;
  for (const r of css) {
    if (!mediaAt(r.media, width)) continue;
    const v = top(r.body, box);
    if (v === undefined) continue;
    for (const part of r.selector.split(",").map((s) => s.trim())) {
      if (!matches(el, part)) continue;
      const spec = specificity(part);
      if (!win || spec > win.spec || (spec === win.spec && r.at >= win.at)) win = { spec, at: r.at, v };
    }
  }
  return win?.v;
}

function px(css: Rule[], el: Element, width: number, box: "margin" | "padding"): number {
  const v = winning(css, el, width, box);
  if (v === undefined || v === "0") return 0;
  const n = v.match(/^(-?\d+(?:\.\d+)?)px$/);
  if (!n) throw new Error(`${box}-top: ${v} is not a px value`);
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

/**
 * The room between the breadcrumb bar's bottom rule and the kicker's box at
 * `width`, after checking that nothing else is in between: <main> follows the
 * bar, the kicker is <main>'s first child, and <main> has no top padding or
 * border of its own. <main> is a flex item of body, so the kicker's margin
 * stays inside it rather than collapsing through.
 */
function gap(css: Rule[], page: Element, width: number): number {
  const bar = page.querySelector('nav[aria-label="Breadcrumb"]');
  const main = page.querySelector("main#content");
  expect(bar, "breadcrumb bar").not.toBeNull();
  expect(main?.previousElementSibling, "<main> follows the bar").toBe(bar);
  const kicker = main!.firstElementChild!;
  expect(kicker.classList.contains(styles.kicker), "the kicker opens <main>").toBe(true);
  const m = asWritten(main!);
  expect(px(css, m, width, "padding")).toBe(0);
  expect(winning(css, m, width, "border")).toBeUndefined();
  expect(px(css, m, width, "margin")).toBe(0);
  return px(css, asWritten(kicker), width, "margin");
}

// Phones, the 760 edge, the 760–900 band, the site chrome's 900 edge, desktop.
const WIDTHS = [320, 390, 760, 761, 800, 900, 901, 1024, 1440];
const DESKTOP = WIDTHS.filter((w) => w > 760);

const PAGES: [string, () => Promise<Element>][] = [
  ["/compare", async () => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve({}) })))],
  ["/compare?mode=albums", async () => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve({ mode: "albums" }) })))],
  ["/compare/in", async () => root(renderToStaticMarkup(await CountryIndexPage()))],
  ...certCountryCodes().map((code): [string, () => Promise<Element>] => {
    const country = countrySlug(code);
    return [`/compare/in/${country}`, async () => root(renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country }) })))];
  }),
  ...["burna-boy-vs-wizkid", "seyi-vibez-vs-asake"].map((pair): [string, () => Promise<Element>] => [
    `/compare/${pair}`,
    async () => root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair }) }))),
  ]),
];

/** The rule as it shipped, verbatim: 0 on the base rule, 16px in the 760px block only. */
const NOW = "margin: 16px 0 14px;";
const SHIPPED_BASE = "margin: 0 0 14px;";
const PHONE_ANCHOR = ".wrap { padding: 0 16px 28px; }";
const SHIPPED_PHONE = "  .kicker { margin-top: 16px; }";

describe("V-compareIn-10: the kicker clears the breadcrumb bar's rule on every width", () => {
  // 28 since 7 Oct 2026: Turkey's board (label-issued Diamonds, owner's ruling).
  it("all 28 country boards are checked", () => {
    expect(certCountryCodes().length).toBe(28);
  });

  it.each(PAGES)("%s: 16px between the bar's rule and the kicker", async (_path, load) => {
    const page = await load();
    const css = rules(CSS);
    for (const w of WIDTHS) expect({ w, gap: gap(css, page, w) }).toEqual({ w, gap: 16 });
  });
});

describe("negative control: the stylesheet that shipped", () => {
  const shipped = () => {
    expect(CSS.split(NOW).length).toBe(2);
    expect(CSS.split(PHONE_ANCHOR).length).toBe(2);
    return CSS.replace(NOW, SHIPPED_BASE).replace(PHONE_ANCHOR, `${PHONE_ANCHOR}\n${SHIPPED_PHONE}`);
  };

  it("put the kicker on the rule above 760 (0px, as measured live) and 16px under it at 760 and below", async () => {
    const css = rules(shipped());
    for (const [, load] of PAGES.filter(([p]) => ["/compare", "/compare/in", "/compare/in/nigeria", "/compare/burna-boy-vs-wizkid"].includes(p))) {
      const page = await load();
      for (const w of WIDTHS) expect({ w, gap: gap(css, page, w) }).toEqual({ w, gap: DESKTOP.includes(w) ? 0 : 16 });
    }
  });
});
