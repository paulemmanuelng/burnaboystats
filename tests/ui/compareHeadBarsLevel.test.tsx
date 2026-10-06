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
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../../app/compare/page";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareA-01 (with V-compareB-03), the full-site debug of 5 Oct 2026. Above
 * 760px each side of the head-to-head stacks name, figure, meta line and bar,
 * and the two sides shared no foot: when one meta ran to a second line
 * ("CERTIFIED UNITS · OUTSIDE NIGERIA · 177 OF 178 PLAQUES COUNTED · 1 NOT
 * COMPARABLE") that side's bar sat 20px below the other. Measured in headless
 * Chrome on the live site, dark and light: /compare/burna-boy-vs-wizkid bars
 * at y 803 / 783 at 1440, Dai Dai vs One Dance 823 / 803, and at 1024
 * oxlade-vs-tiwa-savage, asake-vs-oxlade and tems-vs-tiwa-savage 790 / 770.
 * With the committed rule injected on the live pages, every pair's bars sit
 * on the taller side's line, and the figures, names, head height, the row
 * below, the one-side head and the phone (390) are unchanged to the pixel.
 *
 * jsdom does no layout, so this reads the stylesheet the way the cascade will
 * (media at the width, selector match on a head built like the page's,
 * specificity, then source order) and stacks the boxes: a block cell stacks
 * from the top; a flex column hands its free space to an auto top margin, or
 * to the top when it justifies to the end. Both figures and both bars must be
 * level when one side's meta (desktop) or name (phone) takes a second line.
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
    return false; // pseudo-elements and the like never style these boxes
  }
}

/** The winning value of `prop` on `el` at `width`. */
function computed(css: string, el: Element, prop: string, width: number): string | undefined {
  let win: { spec: number; at: number; v: string } | undefined;
  for (const r of rules(css)) {
    if (!mediaAt(r.media, width)) continue;
    const v = decl(r.body, prop);
    if (v === undefined) continue;
    for (const part of r.selector.split(",").map((s) => s.trim())) {
      if (!matches(el, part)) continue;
      const spec = specificity(part);
      if (!win || spec > win.spec || (spec === win.spec && r.at >= win.at)) win = { spec, at: r.at, v };
    }
  }
  return win?.v;
}

const FIGURE = 76; // figure line + its 8px foot margin, the same on both sides

/**
 * Figure and bar tops in each cell of a two-sided head. `lines` gives each
 * side's wrapping label in px including its margin: the meta on desktop, the
 * name on the phone (where the meta is visually hidden and out of flow).
 */
function stack(css: string, width: number, cells: { name: number; meta: number }[]) {
  const doc = new DOMParser().parseFromString(
    `<div class="head" id="result">${cells
      .map(() => `<div class="headCell"><p class="headName"></p><p class="figure"></p><p class="headMeta"></p><div class="bar"></div></div>`)
      .join("")}</div>`,
    "text/html",
  );
  const head = doc.querySelector(".head")!;
  const stretch = !/^(start|end|center|flex-start|flex-end|baseline)$/.test(computed(css, head, "align-items", width) ?? "normal");
  const boxes = [...head.children].map((cell, i) => {
    const [, , meta, bar] = [...cell.children];
    const flexCol = computed(css, cell, "display", width) === "flex" && computed(css, cell, "flex-direction", width) === "column";
    const justifyEnd = /^(flex-)?end$/.test(computed(css, cell, "justify-content", width) ?? "");
    const metaH = computed(css, meta, "position", width) === "absolute" ? 0 : cells[i].meta;
    const mt = computed(css, bar, "margin-top", width) ?? "0";
    const auto = flexCol && mt === "auto";
    const barMt = auto || mt === "auto" ? 0 : parseFloat(mt);
    const barH = parseFloat(computed(css, bar, "height", width) ?? "0");
    const content = cells[i].name + FIGURE + metaH + barMt + barH;
    return { flexCol, justifyEnd, auto, metaH, barMt, barH, content, name: cells[i].name };
  });
  const rowH = Math.max(...boxes.map((b) => b.content));
  return boxes.map((b) => {
    const free = b.flexCol && stretch ? rowH - b.content : 0;
    const top = b.auto ? 0 : b.justifyEnd ? free : 0;
    const figure = top + b.name;
    const bar = b.auto ? rowH - b.barH : figure + FIGURE + b.metaH + b.barMt;
    return { figure, bar };
  });
}

const level = (css: string, width: number, cells: { name: number; meta: number }[]) => {
  const [a, b] = stack(css, width, cells);
  return { figures: b.figure - a.figure, bars: b.bar - a.bar };
};

const CSS = readFileSync("app/compare/compare.module.css", "utf8");

// Desktop: one meta on two lines (40px + 10px margin) against one (20 + 10).
const META_WRAPS = [
  { name: 20, meta: 50 },
  { name: 20, meta: 30 },
];
// Phone: one label on two lines ("KIZZ DANIEL" / "· AT LEAST"), meta hidden.
const NAME_WRAPS = [
  { name: 40, meta: 50 },
  { name: 22, meta: 30 },
];

/** The rules that shipped (compare.module.css on origin/main), verbatim. */
const SHIPPED = `.head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  margin-bottom: 8px;
}
.headCell { min-width: 0; }
.headMeta {
  font-family: var(--font-mono), monospace;
  font-size: var(--type-caption);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 10px;
}
.bar { height: 6px; background: var(--bg-raised); border-radius: 3px; overflow: hidden; }
@media (max-width: 760px) {
  .headMeta { position: absolute; left: 0; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; margin: 0; }
  .bar { height: 4px; margin-top: 10px; }
  .head:not(.headSolo) .headCell { display: flex; flex-direction: column; justify-content: flex-end; }
}`;

describe("V-compareA-01: the two headline bars stay level when one side's meta wraps", () => {
  it.each([1440, 1024, 800, 761])("at %ipx both figures and both bars are level, whichever side wraps", (w) => {
    expect(level(CSS, w, META_WRAPS)).toEqual({ figures: 0, bars: 0 });
    expect(level(CSS, w, [...META_WRAPS].reverse())).toEqual({ figures: 0, bars: 0 });
  });

  it.each([760, 390, 320])("the phone is unchanged at %ipx: a wrapped name still leaves figures and bars level", (w) => {
    expect(level(CSS, w, NAME_WRAPS)).toEqual({ figures: 0, bars: 0 });
    // and the bar keeps its own 10px gap under the figure there
    expect(computed(CSS, new DOMParser().parseFromString(`<div class="headCell"><div class="bar"></div></div>`, "text/html").querySelector(".bar")!, "margin-top", w)).toBe("10px");
  });

  it("the model matches the page: each side of a pair is name, figure, meta, bar, in that order", async () => {
    const html = renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve({ a: "burna-boy", b: "wizkid" }) }));
    const doc = new DOMParser().parseFromString(html, "text/html");
    const head = doc.getElementById("result")!;
    expect(head.classList.contains(styles.headSolo)).toBe(false);
    const cells = [...head.children];
    expect(cells.length).toBe(2);
    for (const cell of cells) {
      expect(cell.classList.contains(styles.headCell)).toBe(true);
      expect([...cell.children].map((c) => c.classList[0])).toEqual([styles.headName, styles.figure, styles.headMeta, styles.bar]);
    }
  });

  it("negative control: the shipped rules drop the wrapped side's bar 20px, as measured live", () => {
    expect(level(SHIPPED, 1440, META_WRAPS)).toEqual({ figures: 0, bars: -20 });
    expect(level(SHIPPED, 1024, [...META_WRAPS].reverse())).toEqual({ figures: 0, bars: 20 });
    // the phone rule that shipped already held
    expect(level(SHIPPED, 390, NAME_WRAPS)).toEqual({ figures: 0, bars: 0 });
  });

  it("negative control: the phone's foot-stacking rule lifted to every width levels the bars but drops a figure", () => {
    const lifted = SHIPPED + `\n.head:not(.headSolo) .headCell { display: flex; flex-direction: column; justify-content: flex-end; }`;
    expect(level(lifted, 1440, META_WRAPS)).toEqual({ figures: 20, bars: 0 });
  });
});
