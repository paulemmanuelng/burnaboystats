import { describe, it, expect, beforeAll } from "vitest";
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
import { comparableArtists } from "../../app/lib/certUnits";
import styles from "../../app/compare/compare.module.css";

/**
 * The song and album pickers on phones, found 7 Oct 2026 while fixing
 * V-compareB-05. Read live in headless Chrome (390x844, 360x780 and 320x640,
 * dark and light) on every artist's song and album picker and on Davido's
 * pairs: Davido's song picker ran to 557.45px at all three widths, so the page
 * was 557px wide and whole rows of chips ("Risky / Risk", "Away", "Dodo",
 * "Electricity" …) sat past the right edge, out of reach. Two causes, one
 * under the other:
 *
 * - A chip's trailing "(…)" was one nowrap run, so a chip could be no
 *   narrower than its bracket: "Galorizzy (Ecool, Davido, Mavo & Morravey ft.
 *   Scotts Maphuma & Iphxne DJ)" could not go under 541.45px, and at 320
 *   seven chips could not fit the 288px row.
 * - `.pickWrap` is a grid with an implicit auto column, which grows to its
 *   widest item's min-content, so that one chip widened the whole column and
 *   every row of chips in it: Davido's to 557.45 at 390, 360 and 320, Seyi
 *   Vibez's to 345.56 at 360 and 320, Wizkid's and Kizz Daniel's to 312.95 at
 *   320 — past the screen, or into the 16px gutter.
 *
 * Now the column is minmax(0, 1fr) and a chip's bracket is an inline-block,
 * only as wide as the line allows: where the bracket fits it moves to the next
 * line whole, as nowrap did, and only a bracket wider than the whole row wraps
 * inside itself. Grafted onto the live pages (all 20 artists, songs and
 * albums, and Davido on either side of a pair: 43 pages at 390, 360 and 320,
 * dark and light, 5,715 chips a pass): no chip past the gutter, every chip hit
 * by elementFromPoint at its centre, and no page wider than the screen. On
 * the 116 of 129 page-widths that did not overflow every chip is unchanged to
 * the pixel, and the only chips that changed size are the 28 (title, width)
 * cases that were wider than their row. 1440 and 1024 (3,810 chips, both
 * themes) are unchanged to the pixel.
 *
 * jsdom does no layout, so this computes each chip's narrowest width the way
 * Blink does for this markup: Space Mono is monospaced (612/1000 em advance),
 * the chip adds its tracking per character and its padding and border, a
 * space outside a nowrap run is a break opportunity, an inline-block counts as
 * its own longest word, and a text run's width is rounded up to 1/64px. The
 * stylesheet is read the way the cascade reads it (media at the width,
 * selector match on the element as written, specificity, source order,
 * inheritance). On the shipped stylesheet the model puts the end of every
 * picker's rows exactly where the live pages measured it, all 120 cases.
 */

type Rule = { media: string | null; selector: string; body: string; at: number };

/** Top-level rules and rules one @media deep, comments stripped. */
const parsed = new Map<string, Rule[]>();
function rules(css: string): Rule[] {
  const hit = parsed.get(css);
  if (hit) return hit;
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
  parsed.set(css, out);
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

const CSS = readFileSync("app/compare/compare.module.css", "utf8");

/** The stylesheet as shipped before this fix: the three declarations it adds, taken out again. */
function shipped(): string {
  const cuts: [string | RegExp, string][] = [
    [/\.chip \.nowrap \{[^}]*\}/, ""],
    [/(\.pickWrap \{[^}]*?)grid-template-columns: minmax\(0, 1fr\); /, "$1"],
    [/(\.chip \{[^}]*?)\s*max-width: 100%;/, "$1"],
  ];
  let css = CSS;
  for (const [from, to] of cuts) {
    const next = css.replace(from, to);
    if (next === css) throw new Error(`the shipped stylesheet no longer has what ${from} cuts`);
    css = next;
  }
  return css;
}

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
    c.className = [...n.classList].map((k) => SOURCE.get(k) ?? k).join(" ");
    parent.appendChild(c);
    parent = c;
  }
  return parent;
}

/** The element's tag and classes and its ancestors', which is all a selector here can see. */
const chainKey = (el: Element) => {
  const parts: string[] = [];
  for (let n: Element | null = el; n; n = n.parentElement) parts.unshift(`${n.tagName}.${[...n.classList].join(".")}`);
  return parts.join(">");
};

const resolved = new Map<string, string | undefined>();
const cssId = new Map<string, number>();

/** The winning value of `prop` on `el` at `width`, or undefined when no rule sets it. */
function cascade(css: string, el: Element, width: number, prop: string): string | undefined {
  if (!cssId.has(css)) cssId.set(css, cssId.size);
  const key = `${cssId.get(css)}|${width}|${prop}|${chainKey(el)}`;
  if (resolved.has(key)) return resolved.get(key);
  const v = cascadeOnce(css, el, width, prop);
  resolved.set(key, v);
  return v;
}

function cascadeOnce(css: string, el: Element, width: number, prop: string): string | undefined {
  const written = asWritten(el);
  let win: { spec: number; at: number; v: string } | undefined;
  for (const r of rules(css)) {
    if (!mediaAt(r.media, width)) continue;
    const v = decl(r.body, prop);
    if (v === undefined) continue;
    for (const part of r.selector.split(",").map((s) => s.trim())) {
      let hit = false;
      try {
        hit = written.matches(part);
      } catch {
        hit = false;
      }
      if (!hit) continue;
      const spec = specificity(part);
      if (!win || spec > win.spec || (spec === win.spec && r.at >= win.at)) win = { spec, at: r.at, v };
    }
  }
  return win?.v;
}

/** white-space is inherited. */
function whiteSpace(css: string, el: Element, width: number): string {
  for (let n: Element | null = el; n; n = n.parentElement) {
    const v = cascade(css, n, width, "white-space");
    if (v) return v;
  }
  return "normal";
}

const display = (css: string, el: Element, width: number) => cascade(css, el, width, "display") ?? "inline";

/** Space Mono's advance, in em (612 of 1000 units, every glyph). */
const SPACE_MONO_ADVANCE = 0.612;

/** The chip's type and box, from the stylesheets themselves. */
const GLOBALS = readFileSync("app/globals.css", "utf8");
function chipBox(css: string, chip: Element, width: number) {
  const globals = GLOBALS;
  const size = cascade(css, chip, width, "font-size")!;
  const px = size.startsWith("var(")
    ? Number(globals.match(new RegExp(`${size.slice(4, -1)}:\\s*([\\d.]+)px`))![1])
    : Number(size.replace("px", ""));
  const tracking = Number(cascade(css, chip, width, "letter-spacing")!.replace("em", "")) * px;
  const [, padX = "0"] = cascade(css, chip, width, "padding")!.split(/\s+/);
  const border = Number(cascade(css, chip, width, "border")!.match(/([\d.]+)px/)![1]);
  return { ch: px * SPACE_MONO_ADVANCE + tracking, frame: 2 * Number(padX.replace("px", "")) + 2 * border };
}

/** The narrowest some inline content can be set: its longest unbreakable run, in characters
 *  (an inline-block inside counts as its own longest run, glued to whatever touches it).
 *  `ws` is the white-space the content inherits from the box that holds it. */
function minRun(css: string, nodes: Node[], ws: string, width: number): number {
  let best = 0;
  let run = 0;
  const visit = (node: Node, ws: string) => {
    if (node.nodeType === Node.TEXT_NODE) {
      for (const c of (node.textContent ?? "").replace(/\s+/g, " ")) {
        if (c === " " && ws !== "nowrap") {
          best = Math.max(best, run);
          run = 0;
        } else run++;
      }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const child = node as Element;
    const own = whiteSpace(css, child, width);
    if (/^inline-(block|flex|grid)$/.test(display(css, child, width))) {
      run += minRun(css, [...child.childNodes], own, width);
      return;
    }
    for (const n of child.childNodes) visit(n, own);
  };
  for (const n of nodes) visit(n, ws);
  return Math.max(best, run);
}

/** A chip's min-content width at `width`: an inline-flex box whose items sit side by side. */
function chipMin(css: string, chip: Element, width: number): number {
  const { ch, frame } = chipBox(css, chip, width);
  const items = [...chip.childNodes].filter((n) => n.nodeType === Node.ELEMENT_NODE || (n.textContent ?? "").trim() !== "");
  let sum = 0;
  for (const item of items) {
    // A text run is an anonymous item and sets in the chip's white-space; an element in its own.
    sum += item.nodeType === Node.TEXT_NODE
      ? minRun(css, [item], whiteSpace(css, chip, width), width)
      : minRun(css, [...item.childNodes], whiteSpace(css, item as Element, width), width);
  }
  // Blink sets a text run's width in 1/64px units, rounded up.
  return Number((frame + Math.ceil(sum * ch * 64) / 64).toFixed(2));
}

/** The row a picker's chips wrap in at `width`: the page's content box. */
function rowWidth(css: string, picker: Element, width: number): number {
  let wrap: Element | null = picker;
  while (wrap && !wrap.classList.contains(styles.wrap)) wrap = wrap.parentElement;
  const pad = cascade(css, wrap!, width, "padding")!.split(/\s+/);
  const side = Number((pad[1] ?? pad[0]).replace("px", ""));
  return Math.min(width, 1120) - 2 * side;
}

/** The picker's width: an implicit auto column grows to its widest item; minmax(0, 1fr) does not. */
function pickerWidth(css: string, picker: Element, width: number, widestChip: number): number {
  const row = rowWidth(css, picker, width);
  return cascade(css, picker, width, "grid-template-columns") === "minmax(0, 1fr)" ? row : Math.max(row, widestChip);
}

const html = (markup: string) => {
  const root = document.createElement("div");
  root.innerHTML = markup;
  return root;
};
const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const render = async (sp: Record<string, string>) =>
  html(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));

/** Every picker on the page, with its chips (folded ones included: a <details> is in the markup). */
async function pickers(sp: Record<string, string>) {
  const root = await render(sp);
  return [...root.querySelectorAll(`.${styles.pickWrap}`)].map((picker) => ({
    picker,
    chips: [...picker.querySelectorAll(`a.${styles.chip}`)],
  }));
}

const PHONES = [390, 360, 320] as const;

/**
 * Where each picker's chip rows ended as shipped, read live 7 Oct 2026 (the
 * right edge of its `.chips` rows): every other picker, at every width, ended
 * on the 16px gutter, at width − 16.
 */
const LIVE_ROWS_RIGHT: Record<string, Partial<Record<(typeof PHONES)[number], number>>> = {
  "davido songs": { 390: 557.45, 360: 557.45, 320: 557.45 },
  "seyi-vibez songs": { 360: 345.56, 320: 345.56 },
  "wizkid songs": { 320: 312.95 },
  "kizz-daniel songs": { 320: 312.95 },
};

describe("every picker chip fits the phone's row", () => {
  for (const artist of comparableArtists) {
    it(`${artist.name}: every song and album chip is narrower than the row at 390, 360 and 320`, async () => {
      for (const mode of ["songs", "albums"]) {
        for (const { picker, chips } of await pickers({ a: artist.slug, mode })) {
          for (const width of PHONES) {
            const row = rowWidth(CSS, picker, width);
            for (const chip of chips) {
              expect(chipMin(CSS, chip, width), `${width} ${mode}: ${norm(chip.textContent)}`).toBeLessThanOrEqual(row);
            }
            const widest = Math.max(...chips.map((c) => chipMin(CSS, c, width)));
            expect(pickerWidth(CSS, picker, width, widest), `${width} ${mode}: the picker`).toBe(row);
          }
        }
      }
    });
  }
});

describe("negative control: the shipped stylesheet, which the live site measured", () => {
  let SHIPPED = "";
  beforeAll(() => {
    SHIPPED = shipped();
  });

  it("Davido's song picker: 557.45px at 390, 360 and 320 — every row ran off the screen", async () => {
    const [{ picker, chips }] = await pickers({ a: "davido", mode: "songs" });
    for (const width of PHONES) {
      const widest = Math.max(...chips.map((c) => chipMin(SHIPPED, c, width)));
      expect(widest).toBe(541.45);
      // 16px gutter + the picker = the right edge the live rows measured.
      expect(Number((16 + pickerWidth(SHIPPED, picker, width, widest)).toFixed(2))).toBe(557.45);
    }
  });

  it("every artist's song and album picker ends where it ended live, at 390, 360 and 320", async () => {
    let cases = 0;
    for (const artist of comparableArtists) {
      for (const mode of ["songs", "albums"]) {
        for (const { picker, chips } of await pickers({ a: artist.slug, mode })) {
          for (const width of PHONES) {
            const widest = Math.max(...chips.map((c) => chipMin(SHIPPED, c, width)));
            const live = LIVE_ROWS_RIGHT[`${artist.slug} ${mode}`]?.[width] ?? width - 16;
            expect(Number((16 + pickerWidth(SHIPPED, picker, width, widest)).toFixed(2)), `${width} ${artist.slug} ${mode}`).toBe(live);
            cases++;
          }
        }
      }
    }
    expect(cases).toBe(comparableArtists.length * 2 * PHONES.length);
  });

  it("the chips that could not be narrower than the 288px row at 320: seven, all bracketed", async () => {
    const over = new Map<string, number>();
    for (const artist of comparableArtists) {
      for (const mode of ["songs", "albums"]) {
        for (const { picker, chips } of await pickers({ a: artist.slug, mode })) {
          for (const chip of chips) {
            const w = chipMin(SHIPPED, chip, 320);
            if (w > rowWidth(SHIPPED, picker, 320)) over.set(norm(chip.textContent).split(" (")[0], w);
          }
        }
      }
    }
    expect(Object.fromEntries(over)).toEqual({
      Galorizzy: 541.45,
      Nakupenda: 508.86,
      Watawi: 345.86,
      "On God": 329.56,
      Grooving: 305.11,
      Like: 296.95,
      "Easy With Me": 296.95,
    });
  });
});

describe("V-compareB-05 still holds: the bracket moves whole where it fits", () => {
  it("a chip's “(…)” is one atomic box, breakable only inside itself", async () => {
    const [{ chips }] = await pickers({ a: "kizz-daniel", mode: "songs" });
    const buga = chips.find((c) => norm(c.textContent) === "Buga (Lo Lo Lo)")!;
    const paren = buga.querySelector(`.${styles.nowrap}`)!;
    for (const width of [320, 390, 1440]) {
      expect(display(CSS, paren, width)).toBe("inline-block");
      expect(whiteSpace(CSS, paren, width)).toBe("normal");
      // The space before it is a break opportunity outside the box.
      expect(paren.previousSibling?.textContent).toBe("Buga ");
    }
    // Outside a chip — the slot title, the board's plaque titles — it is the plain nowrap run.
    const slot = (await render({ a: "kizz-daniel", mode: "songs", sa: "Buga (Lo Lo Lo)" })).querySelector(`.${styles.slotTitle} .${styles.nowrap}`)!;
    expect(display(CSS, slot, 390)).toBe("inline");
    expect(whiteSpace(CSS, slot, 390)).toBe("nowrap");
  });

  it("only a bracket wider than the whole row wraps inside itself — the ones the live graft wrapped", async () => {
    const wrapped: Record<number, Set<string>> = { 390: new Set(), 360: new Set(), 320: new Set() };
    for (const artist of comparableArtists) {
      for (const { picker, chips } of await pickers({ a: artist.slug, mode: "songs" })) {
        for (const width of PHONES) {
          const inner = rowWidth(CSS, picker, width) - chipBox(CSS, chips[0], width).frame;
          for (const chip of chips) {
            const paren = chip.querySelector(`.${styles.nowrap}`);
            if (!paren) continue;
            // The box's own width is its whole bracket on one line, when the line allows it.
            const oneLine = norm(paren.textContent).length * chipBox(CSS, chip, width).ch;
            if (oneLine > inner) wrapped[width].add(norm(chip.textContent).split(" (")[0]);
          }
        }
      }
    }
    expect([...wrapped[390]].sort()).toEqual(["Galorizzy", "Nakupenda"]);
    expect([...wrapped[360]].sort()).toEqual(["Galorizzy", "Nakupenda", "On God", "Watawi"]);
    expect([...wrapped[320]].sort()).toEqual(["Easy With Me", "Galorizzy", "Grooving", "Like", "Nakupenda", "On God", "Watawi"]);
  });
});
