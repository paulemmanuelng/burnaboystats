import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * V-global-08 (debug of 5 Oct 2026): the floating back-to-top button is
 * fixed 28px from the right edge and 46px wide, so it needs a 74px margin.
 * The site's widest content measure is 1360px with 40px side padding, so the
 * margin is (viewport - 1360) / 2 + 40, and below about 1430px the button sat
 * on the content's right-hand figures. Measured in headless Chrome on the
 * live site: at 1024 it covered "$793,707" on /records/tours/revenue,
 * "400,000" on /compare/in and the calendar on /on-this-day; at 1280 and 1340
 * the same grosses, "195,942" on /music/listeners and the OTD rows; at 1440,
 * 0 of 240 sampled frames on 10 pages. The button now shows only from 1440px.
 *
 * jsdom does no layout, so this reads the rules: the button's own box from
 * BackToTop.module.css, and every centred content container in app/ (any
 * top-level rule with a max-width of 1000px or more and auto side margins).
 * At the first width the button shows, each container must leave it a margin
 * with 4px to spare. The same check runs on the rule the site shipped
 * (origin/main, quoted verbatim), so a guard that passed on both would be
 * caught as vacuous.
 */

const BTN_CSS = readFileSync("app/components/BackToTop.module.css", "utf8");
const BTN_TSX = readFileSync("app/components/BackToTop.tsx", "utf8");

const SHIPPED = `
/* Hidden on mobile: a fixed bottom bar always occupies this corner there. */
@media (max-width: 900px) {
  .desktopOnly { display: none; }
}
`;

const stripComments = (css: string) => css.replace(/\/\*[\s\S]*?\*\//g, "");

/** Top-level rules only: @media / @supports / @keyframes blocks are dropped. */
function topLevel(css: string): string {
  css = stripComments(css);
  let out = "";
  let i = 0;
  while (i < css.length) {
    const at = css.indexOf("@", i);
    if (at < 0) {
      out += css.slice(i);
      break;
    }
    out += css.slice(i, at);
    const open = css.indexOf("{", at);
    const semi = css.indexOf(";", at);
    if (open < 0 || (semi >= 0 && semi < open)) {
      i = semi + 1;
      continue;
    }
    let depth = 1;
    let j = open + 1;
    while (j < css.length && depth) {
      if (css[j] === "{") depth++;
      else if (css[j] === "}") depth--;
      j++;
    }
    i = j;
  }
  return out;
}

const decls = (body: string) => {
  const out: Record<string, string> = {};
  for (const part of body.split(";")) {
    const i = part.indexOf(":");
    if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  }
  return out;
};

/** The first viewport width at which the button is not display:none. */
function firstShownWidth(css: string): number {
  const clean = stripComments(css);
  const m = /@media\s*\(max-width:\s*(\d+)px\)\s*\{\s*\.desktopOnly\s*\{\s*display:\s*none;?\s*\}\s*\}/.exec(clean);
  if (!m) throw new Error("no hide rule for .desktopOnly");
  return Number(m[1]) + 1;
}

/** The button's lane: its largest right offset plus its width. */
function buttonLane(css: string): number {
  const clean = topLevel(css);
  const body = /\.btn\s*\{([^}]*)\}/.exec(clean)![1];
  const d = decls(body);
  const width = Number(/^(\d+)px$/.exec(d.width)![1]);
  // right: calc(clamp(16px, 3vw, 28px) + env(safe-area-inset-right, 0px))
  const clampMax = Number(/clamp\([^,]+,[^,]+,\s*(\d+)px\)/.exec(d.right)![1]);
  return clampMax + width;
}

function cssFiles(dir: string, out: string[] = []): string[] {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) cssFiles(p, out);
    else if (p.endsWith(".css")) out.push(p);
  }
  return out;
}

const px = (v: string) => Number(/^(-?\d+(?:\.\d+)?)px$/.exec(v.trim())?.[1] ?? 0);

/** Right padding from padding / padding-inline / padding-right. */
function paddingRight(d: Record<string, string>): number {
  if (d["padding-right"]) return px(d["padding-right"]);
  if (d["padding-inline"]) {
    const v = d["padding-inline"].split(/\s+/);
    return px(v[v.length - 1]);
  }
  if (d.padding) {
    const v = d.padding.split(/\s+/);
    return px(v.length === 1 ? v[0] : v[1]);
  }
  return 0;
}

type Container = { where: string; maxWidth: number; padRight: number };

const CONTAINERS: Container[] = cssFiles("app").flatMap((file) =>
  [...topLevel(readFileSync(file, "utf8")).matchAll(/([^{}]+)\{([^{}]*)\}/g)].flatMap((m) => {
    const d = decls(m[2]);
    const maxWidth = /^(\d+)px$/.exec(d["max-width"] ?? "");
    const centred =
      /\bauto\b/.test(d.margin ?? "") ||
      d["margin-inline"] === "auto" ||
      (d["margin-left"] === "auto" && d["margin-right"] === "auto");
    if (!maxWidth || Number(maxWidth[1]) < 1000 || !centred) return [];
    return [{ where: `${file} ${m[1].trim()}`, maxWidth: Number(maxWidth[1]), padRight: paddingRight(d) }];
  })
);

/** Containers whose right margin at viewport `vw` is narrower than the lane + 4px. */
function containersUnderButton(vw: number, lane: number): string[] {
  return CONTAINERS.filter((c) => (Math.max(0, vw - c.maxWidth) / 2 + c.padRight) < lane + 4).map(
    (c) => `${c.where} (${c.maxWidth}/${c.padRight}px leaves ${Math.max(0, vw - c.maxWidth) / 2 + c.padRight}px)`
  );
}

describe("the back-to-top button never sits on the content column", () => {
  const lane = buttonLane(BTN_CSS);

  it("finds the site's content containers (the scan is not empty)", () => {
    expect(lane).toBe(74);
    expect(CONTAINERS.length).toBeGreaterThan(40);
    expect(Math.max(...CONTAINERS.map((c) => c.maxWidth))).toBe(1360);
  });

  it("shows only where every container leaves it a margin", () => {
    expect(firstShownWidth(BTN_CSS)).toBe(1440);
    expect(containersUnderButton(firstShownWidth(BTN_CSS), lane)).toEqual([]);
  });

  it("the rule the site shipped let it show over the content at 901-1439px (negative control)", () => {
    expect(firstShownWidth(SHIPPED)).toBe(901);
    expect(containersUnderButton(firstShownWidth(SHIPPED), lane).length).toBeGreaterThan(40);
  });

  it("listens for scroll under the same query it is hidden by", () => {
    const hideAt = firstShownWidth(BTN_CSS) - 1;
    expect(BTN_TSX).toContain(`window.matchMedia("(max-width: ${hideAt}px)")`);
  });
});
