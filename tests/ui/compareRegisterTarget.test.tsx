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
import { certCountryCodes, countrySlug } from "../../app/lib/certCountry";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareIn-09, the full-site debug of 5 Oct 2026. On a phone a country
 * board's "What one plaque is worth here" card is a fold; opened, it ends on
 * the certifying body's link ("TurnTable's own levels ↗", "RIAA's own
 * levels ↗"). Measured live in headless Chrome at 390x844 (dark and light,
 * 7 Oct): the link was a 20px line (12.5px type on the body's 1.6) with
 * nothing extending it, under a 50px summary row — the one control on the
 * card below the 44px floor every other control on /compare keeps. The
 * desktop card (from 761px, so an iPad's too) shows the same link, 20px.
 *
 * The fix gives the link a ::after centred on it, 44px tall, the way
 * .cbArtistLink already reaches 44px on the same board: the hit area grows,
 * the link does not move. jsdom does no layout, so this reads the
 * stylesheet the way the cascade will (media at the width, selector match on
 * the rendered element's own classes and ancestors, specificity, then source
 * order) and works out the tap height for a one-line and a wrapped link.
 * Checked live by grafting the rule onto the shipped boards (390 and 768
 * touch, 1440; dark and light): the hit-test scan through the link ran 44px,
 * and the link's box and the page height were unchanged to the pixel.
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

const specificity = (sel: string) => (sel.match(/[.#][\w-]+/g) ?? []).length + (sel.match(/::?[\w-]+/g) ?? []).length;

function matches(el: Element, sel: string): boolean {
  try {
    return el.matches(sel);
  } catch {
    return false;
  }
}

type Win = { v: string; spec: number; at: number };
const later = (a: Win | undefined, b: Win) => !a || b.spec > a.spec || (b.spec === a.spec && b.at >= a.at);

/**
 * The winning declaration of `prop` on `el` at `width`, or on its `::after`
 * when `pseudo` is set (only selectors ending in ::after count then).
 */
function winning(css: string, el: Element, prop: string, width: number, pseudo = false): Win | undefined {
  let win: Win | undefined;
  for (const r of rules(css)) {
    if (!mediaAt(r.media, width)) continue;
    const v = decl(r.body, prop);
    if (v === undefined) continue;
    for (const part of r.selector.split(",").map((s) => s.trim())) {
      const isAfter = /::after$/.test(part);
      if (isAfter !== pseudo) continue;
      if (!matches(el, part.replace(/::after$/, ""))) continue;
      const w = { v, spec: specificity(part), at: r.at };
      if (later(win, w)) win = w;
    }
  }
  return win;
}

/** Split a value on top-level spaces: "calc(50% - 22px) 0" → two parts. */
function parts(v: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = "";
  for (const ch of v.trim()) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === " " && depth === 0) {
      if (cur) out.push(cur);
      cur = "";
    } else cur += ch;
  }
  if (cur) out.push(cur);
  return out;
}

/** A px, %, or calc(a ± b) length against a containing block `h` tall. */
function len(v: string, h: number): number {
  const s = v.trim();
  if (s === "0") return 0;
  const calc = s.match(/^calc\((.+)\)$/);
  if (calc) {
    const terms = calc[1].split(/\s+([+-])\s+/);
    let total = len(terms[0], h);
    for (let i = 1; i < terms.length; i += 2) total += (terms[i] === "-" ? -1 : 1) * len(terms[i + 1], h);
    return total;
  }
  const px = s.match(/^(-?\d+(?:\.\d+)?)px$/);
  if (px) return Number(px[1]);
  const pc = s.match(/^(-?\d+(?:\.\d+)?)%$/);
  if (pc) return (h * Number(pc[1])) / 100;
  throw new Error(`not a length: ${v}`);
}

/** One edge of the ::after's offsets, from its longhand or from `inset`, whichever the cascade puts last. */
function offset(css: string, el: Element, width: number, edge: "top" | "right" | "bottom" | "left", h: number): number | null {
  const long = winning(css, el, edge, width, true);
  const short = winning(css, el, "inset", width, true);
  let v: string | undefined;
  if (long && later(short, long)) v = long.v;
  else if (short) {
    const p = parts(short.v);
    const [t, r, b, l] = p.length === 1 ? [p[0], p[0], p[0], p[0]] : p.length === 2 ? [p[0], p[1], p[0], p[1]] : p.length === 3 ? [p[0], p[1], p[2], p[1]] : p;
    v = { top: t, right: r, bottom: b, left: l }[edge];
  }
  if (v === undefined || v === "auto") return null;
  return len(v, h);
}

/**
 * How tall a tap on the link can land for a link box `h` px tall: its own box,
 * plus a ::after that generates a box (content set), positioned absolutely
 * against the link (the link itself positioned).
 */
function target(css: string, el: Element, width: number, h: number): number {
  const content = winning(css, el, "content", width, true)?.v;
  const abs = winning(css, el, "position", width, true)?.v === "absolute";
  const anchored = ["relative", "absolute", "fixed", "sticky"].includes(winning(css, el, "position", width)?.v ?? "static");
  if (content === undefined || content === "none" || !abs || !anchored) return h;
  const t = offset(css, el, width, "top", h);
  const b = offset(css, el, width, "bottom", h);
  if (t === null || b === null) return h;
  return Math.max(h, h - b) - Math.min(0, t);
}

const CSS = readFileSync("app/compare/compare.module.css", "utf8");
const GLOBALS = readFileSync("app/globals.css", "utf8");

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
const compare = async (sp: Record<string, string>) => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));

const links = (page: Element) => [...page.querySelectorAll(`a.${styles.cbRegister}`)];

// Phones, the 760 fold/card edge, the tab-bar band, desktop.
const WIDTHS = [320, 390, 760, 761, 900, 1024, 1440];

/**
 * One line of the link: the module sets no line-height on it or on anything
 * it sits in, so it is the caption size on the body's 1.6 — 20px, as measured
 * live. A wrapped link is two of them.
 */
const CAPTION = Number(GLOBALS.match(/--type-caption:\s*([\d.]+)px/)![1]);
const BODY_LH = Number(GLOBALS.match(/\bbody\s*\{[^}]*?line-height:\s*([\d.]+);/)![1]);
const LINE = CAPTION * BODY_LH;

const COUNTRIES = certCountryCodes().map((code) => countrySlug(code));

/** The rules this change wrote over the shipped one, verbatim. */
const SHIPPED = ".cbRegister { color: var(--gold); font-size: var(--type-caption); }";
const ADDED = `.cbRegister { position: relative; color: var(--gold); font-size: var(--type-caption); }
.cbRegister::after { content: ""; position: absolute; inset: calc(50% - 22px) 0; }`;

const INTERACTIVE = "a, button, summary, input, select, textarea, [tabindex]";

describe("V-compareIn-09: the certifying body's link takes a 44px tap without moving", () => {
  it("one line of the link is 20px, as measured live", () => {
    expect(LINE).toBe(20);
  });

  // 28 since 7 Oct 2026: Turkey's board (label-issued Diamonds, owner's ruling).
  it("all 28 markets are checked", () => {
    expect(COUNTRIES.length).toBe(28);
  });

  it.each(COUNTRIES)("/compare/in/%s", async (slug) => {
    const page = await board(slug);
    const found = links(page);
    // The same link twice: the phone fold, and the desktop card from 761px.
    expect(found.map((a) => (a.closest("details") ? "fold" : "card")).sort()).toEqual(["card", "fold"]);
    for (const a of found) {
      const el = asWritten(a);
      for (const w of WIDTHS) {
        // Nothing in the module sets the link's line box, so one line stays 20px.
        for (let n: Element | null = el; n; n = n.parentElement) {
          expect(winning(CSS, n, "line-height", w), `${slug} @${w}: line-height on ${n.className}`).toBeUndefined();
        }
        expect({ w, one: target(CSS, el, w, LINE), two: target(CSS, el, w, 2 * LINE) }).toEqual({ w, one: 44, two: 44 });
        // It grows up and down only, never across the line beside it.
        expect([offset(CSS, el, w, "left", LINE), offset(CSS, el, w, "right", LINE)]).toEqual([0, 0]);
      }
      // What the 12px above and below reach holds no other control.
      for (const sib of [a.previousElementSibling, a.nextElementSibling]) {
        if (!sib) continue;
        expect(sib.matches(INTERACTIVE) || !!sib.querySelector(INTERACTIVE), `${slug}: control beside the link`).toBe(false);
      }
    }
  });

  it("the query board (features off) is the same component", async () => {
    const page = await compare({ mode: "country", country: "nigeria", feat: "0" });
    const found = links(page);
    expect(found.length).toBe(2);
    for (const a of found) for (const w of WIDTHS) expect(target(CSS, asWritten(a), w, LINE)).toBe(44);
  });
});

describe("negative control: the stylesheet that shipped", () => {
  const shipped = CSS.replace(ADDED, SHIPPED);

  it("is this one with the shipped rule back", () => {
    expect(CSS.split(ADDED).length).toBe(2);
    expect(shipped.split(SHIPPED).length).toBe(2);
  });

  it("left the link a 20px target, as measured live", async () => {
    for (const slug of ["nigeria", "united-states", "greece"]) {
      for (const a of links(await board(slug))) {
        for (const w of WIDTHS) expect({ w, one: target(shipped, asWritten(a), w, LINE) }).toEqual({ w, one: 20 });
      }
    }
  });

  it("the fix changes nothing that sizes or places the link", async () => {
    const [a] = links(await board("nigeria"));
    const el = asWritten(a);
    const PROPS = ["display", "margin", "margin-top", "margin-bottom", "padding", "padding-top", "padding-bottom", "min-height", "height", "line-height", "font-size", "top", "bottom", "inset"];
    for (const w of WIDTHS) {
      for (const p of PROPS) expect({ w, p, v: winning(CSS, el, p, w)?.v }).toEqual({ w, p, v: winning(shipped, el, p, w)?.v });
    }
  });
});
