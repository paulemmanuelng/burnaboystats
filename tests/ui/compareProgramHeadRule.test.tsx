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

import CountryPage from "../../app/compare/in/[country]/page";
import { certCountryCodes, countrySlug, priceCountry } from "../../app/lib/certCountry";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareIn-08, the full-site debug of 5 Oct 2026. The United States board
 * is the one country split into programmes (RIAA and RIAA Latin), each opened
 * by a head line with its own subtotal. Measured live in headless Chrome
 * (1440 light and dark, 1024, 800, 390 dark and light): the country head's
 * bottom rule was followed 26px later by the RIAA head's own top rule with
 * nothing between them — an empty double line on both layouts — and at 1440
 * the subtotals ("66,000,000", "1,440,000") ended at x=1256 while the units
 * column they total, and its "Certified units" header, end at 1242: the
 * table's cells are inset 14px and the head line was not.
 *
 * Now the rule opens the second programme only (the first sits under the
 * country head's rule), and the subtotal carries the cells' 14px inset on
 * desktop and their 0 on a phone. jsdom does no layout, so this reads the
 * stylesheet the way the cascade will (media at the width, selector match on
 * the rendered board with the stylesheet's own class names, specificity, then
 * source order). Checked live by grafting the rules onto the shipped board.
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

/** The block's declarations in source order. */
const decls = (body: string) =>
  body
    .split(";")
    .map((d) => d.match(/^\s*([\w-]+)\s*:\s*([\s\S]+?)\s*$/))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => [m[1], m[2]] as const);

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

/**
 * The winning value of a box edge on `el` at `width`, from its longhand or its
 * shorthand, whichever comes last in the winning block; "" when nothing sets it.
 */
function edge(css: string, el: Element, width: number, longhand: string, shorthand: string, pick: (v: string[]) => string): string {
  let win: { spec: number; at: number; v: string } | undefined;
  for (const r of rules(css)) {
    if (!mediaAt(r.media, width)) continue;
    let v: string | undefined;
    for (const [prop, val] of decls(r.body)) {
      if (prop === longhand) v = val;
      else if (prop === shorthand) v = pick(val.split(/\s+/));
    }
    if (v === undefined) continue;
    for (const part of r.selector.split(",").map((s) => s.trim())) {
      if (!matches(el, part)) continue;
      const spec = specificity(part);
      if (!win || spec > win.spec || (spec === win.spec && r.at >= win.at)) win = { spec, at: r.at, v };
    }
  }
  return win?.v ?? "";
}

/** Does a visible border sit on that edge? */
const ruled = (v: string) => v !== "" && !/^(0|none|0px)(\s|$)/.test(v) && !/\bnone\b/.test(v);
const borderTop = (css: string, el: Element, w: number) => edge(css, el, w, "border-top", "border", (v) => v.join(" "));
const borderBottom = (css: string, el: Element, w: number) => edge(css, el, w, "border-bottom", "border", (v) => v.join(" "));
/** padding: a | a b | a b c | a b c d — right is the second value, or the first. */
const padRight = (css: string, el: Element, w: number) => {
  const v = edge(css, el, w, "padding-right", "padding", (p) => p[1] ?? p[0]);
  if (v === "" || v === "0") return 0;
  const n = v.match(/^(\d+(?:\.\d+)?)px$/);
  if (!n) throw new Error(`padding-right: ${v} is not a px value`);
  return Number(n[1]);
};

const CSS = readFileSync("app/compare/compare.module.css", "utf8");

/** The module's class names as the stylesheet spells them, keyed by the name the test build gives them. */
const SOURCE = new Map(
  [...new Set([...CSS.matchAll(/\.([A-Za-z_][\w-]*)/g)].map((m) => m[1]))].map((n) => [String((styles as Record<string, string>)[n]), n]),
);

/** The rendered board, every element's classes rewritten to the stylesheet's own names, so its selectors (siblings included) match. */
async function board(slug: string): Promise<HTMLElement> {
  const markup = renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country: slug }) }));
  const doc = document.implementation.createHTMLDocument("");
  doc.body.innerHTML = markup;
  for (const el of [...doc.body.querySelectorAll("[class]")]) {
    el.className = [...el.classList].map((k) => SOURCE.get(k) ?? k).join(" ");
  }
  return doc.body;
}

// Phones, the 760 edge, the tablet band, desktop.
const WIDTHS = [320, 390, 760, 761, 1024, 1440];

/** Every board split into programmes. Today that is the United States alone. */
const SPLIT = certCountryCodes()
  .filter((code) => priceCountry(code).programs.filter((p) => p.lines.length > 0).length > 1)
  .map((code) => countrySlug(code));

/** The rules as they shipped, verbatim: this change's three edits undone. */
const SHIPPED = (() => {
  const undo: [string, string][] = [
    [
      "  margin: 18px 0 8px;\n}\n",
      "  margin: 18px 0 8px;\n  padding-top: 14px;\n  border-top: 1px solid var(--rule);\n}\n",
    ],
    [".cbProgram + .cbProgram .cbProgramHead {\n  padding-top: 14px;\n  border-top: 1px solid var(--rule);\n}\n", ""],
    [".cbProgramUnits { margin-left: auto; padding-right: 14px; }", ".cbProgramUnits { margin-left: auto; }"],
    ["  .cbProgramUnits { padding-right: 0; }\n", ""],
  ];
  let css = CSS;
  for (const [now, then] of undo) {
    if (css.split(now).length !== 2) throw new Error(`expected exactly one ${JSON.stringify(now)} in the stylesheet`);
    css = css.replace(now, then);
  }
  return css;
})();

/** What sits between the country head and each programme's subtotal, at one width. */
function read(css: string, root: HTMLElement, width: number) {
  const hero = root.querySelector("#result")!;
  const progs = [...root.querySelectorAll(".cbProgram")];
  return {
    heroRule: ruled(borderBottom(css, hero, width)),
    progs: progs.map((p) => {
      const head = p.querySelector(".cbProgramHead")!;
      const units = head.querySelector(".cbProgramUnits")!;
      return {
        name: head.querySelector(".cbProgramName")!.textContent,
        rule: ruled(borderTop(css, head, width)),
        unitsInset: padRight(css, units, width),
        cellInset: padRight(css, p.querySelector("tbody td.cbUnitsCell")!, width),
        headerInset: padRight(css, p.querySelector("thead th.thNum")!, width),
      };
    }),
  };
}

describe("V-compareIn-08: a programme-split board draws one rule under its head and totals each column flush with it", () => {
  it("the United States is the board split into programmes, RIAA then RIAA Latin", async () => {
    expect(SPLIT).toEqual(["united-states"]);
    const root = await board("united-states");
    expect([...root.querySelectorAll(".cbProgramName")].map((n) => n.textContent)).toEqual(["RIAA", "RIAA Latin"]);
    expect(root.querySelectorAll(".cbProgram + .cbProgram .cbProgramHead")).toHaveLength(1);
  });

  for (const slug of ["united-states"]) {
    for (const width of WIDTHS) {
      it(`${slug} at ${width}px: one rule between the country head and the first programme; the second keeps its own`, async () => {
        const r = read(CSS, await board(slug), width);
        expect(r.heroRule).toBe(true);
        expect(r.progs.map((p) => [p.name, p.rule])).toEqual([
          ["RIAA", false],
          ["RIAA Latin", true],
        ]);
      });

      it(`${slug} at ${width}px: each subtotal ends where its units column and header end`, async () => {
        const r = read(CSS, await board(slug), width);
        for (const p of r.progs) {
          expect(p.cellInset).toBe(p.headerInset);
          expect({ name: p.name, inset: p.unitsInset }).toEqual({ name: p.name, inset: p.cellInset });
        }
        // 14px on desktop, 0 where the phone layout strips the cells' padding.
        expect(r.progs[0].unitsInset).toBe(width <= 760 ? 0 : 14);
      });
    }
  }

  it("negative control: the shipped rules draw the double rule and leave the desktop subtotal 14px past its column", async () => {
    const root = await board("united-states");
    for (const width of WIDTHS) {
      const r = read(SHIPPED, root, width);
      expect(r.heroRule).toBe(true);
      expect(r.progs[0].rule).toBe(true);
      expect(r.progs[0].unitsInset).toBe(0);
      if (width > 760) expect(r.progs[0].cellInset).toBe(14);
    }
  });
});
