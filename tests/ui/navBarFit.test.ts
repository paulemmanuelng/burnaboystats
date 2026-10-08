import { readFileSync } from "node:fs";
import { navItems } from "../../app/lib/links";

/**
 * The desktop bar ends at its content edge at every width from 1240 up.
 *
 * Found by the #444 review (7 Oct 2026) and measured 8 Oct 2026 in headless
 * Chrome on /music, with overlay scrollbars and with a 17px classic one: dark
 * at every pixel from 1240 to 1300 and from 1495 to 1525 and in steps between
 * and up to 2560, light at 1240, 1280, 1366, 1440, 1500, 1501, 1600, 1920 and
 * 2560. On main:
 *
 * - Above 1500 the bar is held to 1360/40, a 1280px content box, and at the
 *   design's spacing (17px between links, 26 after the wordmark, 16 between
 *   the controls) it is 1381.6px wide: the right-hand group ran 101.6px past
 *   the content edge at every width from 1501 to 2560. With a 17px scrollbar
 *   a 1501px window left the Box office pill 0.4px from the window's edge.
 * - The bands switch on the window's width, which counts a classic scrollbar
 *   the bar never gets. The 1500 band's spacing needs 1249px, so it ran 1–16px
 *   over at 1281–1296 with no scrollbar and 1–33px over at 1281–1313 with one
 *   (the pill 9px past the window at 1281); the 1240 band's needs 1190px, and
 *   ran 1–15px over at 1240–1254 with one.
 *
 * Now each band keeps its spacing wherever it fits, and where it does not,
 * the bar's 13 spaces give up an equal share of the shortfall, measured
 * against the bar's own box (container units), not the window.
 *
 * jsdom does no layout, so this models the bar the way Blink lays it out:
 * wordmark, lead, ten links, three control gaps, the theme flip, the search
 * trigger and the pill in one row; Space Mono is monospaced (612/1000 em) and
 * a link is its characters at that advance plus its tracking, rounded up to
 * 1/64px; the wordmark and the three controls are their measured widths. The
 * stylesheet is read the way the cascade reads it for these four selectors
 * (media at the window's width, source order), and var(), calc(), min(),
 * max() and cqi are evaluated against the bar's content box (the window less
 * the scrollbar, held to the max-width, less the padding). On main's
 * stylesheet the model gives all 344 live readings to the 0.1px they were read
 * to; on this one, within 0.2px, all on the side of more room (Blink keeps
 * each fractional space to whole 1/64ths of a pixel).
 */

/** Measured 8 Oct 2026 in headless Chrome, fine pointer, both themes. */
const BRAND = 191.4375; // the 22px mark, its 10px gap and "BURNABOYSTATS" in 24px Anton
const CONTROLS = [34, 130.6875, 139.59375]; // the theme flip, "Search ⌘K" and Box office
const MONO_ADVANCE = 0.612; // Space Mono, em
const CONTROL_GAPS = CONTROLS.length; // links → flip → search → pill
const SPACES = 1 + (navItems.length - 1) + CONTROL_GAPS;

type Rule = { conds: string[]; selectors: string[]; body: string };

const splitTop = (s: string, sep: string) => {
  const out: string[] = [];
  let depth = 0;
  let cur = "";
  for (const ch of s) {
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    if (ch === sep && depth === 0) {
      out.push(cur.trim());
      cur = "";
    } else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
};

/** Every style rule with the @media / @supports conditions it sits in, comments stripped. */
const parsed = new Map<string, Rule[]>();
function rules(css: string): Rule[] {
  const hit = parsed.get(css);
  if (hit) return hit;
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, conds: string[]) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).split(";").pop()!.trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media") || head.startsWith("@supports")) walk(body, [...conds, head]);
      else if (!head.startsWith("@")) out.push({ conds, selectors: splitTop(head, ","), body });
      i = j;
    }
  };
  walk(src, []);
  parsed.set(css, out);
  return out;
}

/** A width-only media query at the window's width; any other feature (pointer, scheme, motion) does not apply. */
function condAt(cond: string, viewport: number): boolean {
  if (cond.startsWith("@supports")) return true; // container units: every browser this models
  const rest = cond
    .replace(/^@media\s*/, "")
    .replace(/\((min|max)-width:\s*\d+px\)/g, "")
    .replace(/\band\b/g, "")
    .trim();
  if (rest !== "") return false;
  return [...cond.matchAll(/\((min|max)-width:\s*(\d+)px\)/g)].every(([, kind, n]) =>
    kind === "min" ? viewport >= Number(n) : viewport <= Number(n),
  );
}

/** The declarations `selector` ends up with at this window width, by source order. */
const sheets = new Map<string, number>();
const sheet = (css: string) => sheets.get(css) ?? sheets.set(css, sheets.size).get(css)!;
const cascaded = new Map<string, Record<string, string>>();
const bySelector = new Map<string, Rule[]>();
function cascade(css: string, selector: string, viewport: number): Record<string, string> {
  const sel = `${sheet(css)} ${selector}`;
  const key = `${sel} @ ${viewport}`;
  const hit = cascaded.get(key);
  if (hit) return hit;
  if (!bySelector.has(sel)) bySelector.set(sel, rules(css).filter((r) => r.selectors.includes(selector)));
  const out: Record<string, string> = {};
  for (const r of bySelector.get(sel)!) {
    if (!r.conds.every((c) => condAt(c, viewport))) continue;
    for (const d of splitTop(r.body, ";")) {
      const k = d.indexOf(":");
      if (k > 0) out[d.slice(0, k).trim()] = d.slice(k + 1).trim();
    }
  }
  cascaded.set(key, out);
  return out;
}

type Ctx = { vars: Record<string, string>; cqi: number; em: number };

/** A CSS length: var() substituted, then calc/min/max/clamp over px, em, cqi and plain numbers. */
function length(value: string, ctx: Ctx): number {
  let v = value;
  for (let n = 0; /var\(/.test(v); n++) {
    if (n > 20) throw new Error(`var() loop in ${value}`);
    v = v.replace(/var\((--[\w-]+)\)/g, (_, name: string) => {
      if (!(name in ctx.vars)) throw new Error(`${name} is not set`);
      return ctx.vars[name];
    });
  }
  const toks = v.match(/-?\d*\.?\d+(?:px|em|cqi)?|[a-z]+\(|[()+\-*/,]/g) ?? [];
  let i = 0;
  const num = (t: string) => {
    const m = /^(-?\d*\.?\d+)(px|em|cqi)?$/.exec(t);
    if (!m) throw new Error(`cannot read ${t} in ${v}`);
    const x = Number(m[1]);
    if (m[2] === "em") return x * ctx.em;
    if (m[2] === "cqi") {
      if (Number.isNaN(ctx.cqi)) throw new Error(`cqi with no container: ${v}`);
      return x * ctx.cqi;
    }
    return x;
  };
  const list = (): number[] => {
    const xs = [sum()];
    while (toks[i] === ",") {
      i++;
      xs.push(sum());
    }
    if (toks[i++] !== ")") throw new Error(`unclosed in ${v}`);
    return xs;
  };
  const factor = (): number => {
    const t = toks[i++];
    if (t === "(" || t === "calc(") return list()[0];
    if (t === "min(") return Math.min(...list());
    if (t === "max(") return Math.max(...list());
    if (t === "clamp(") {
      const [lo, x, hi] = list();
      return Math.max(lo, Math.min(x, hi));
    }
    return num(t);
  };
  const product = (): number => {
    let x = factor();
    while (toks[i] === "*" || toks[i] === "/") x = toks[i++] === "*" ? x * factor() : x / factor();
    return x;
  };
  const sum = (): number => {
    let x = product();
    while (toks[i] === "+" || toks[i] === "-") x = toks[i++] === "+" ? x + product() : x - product();
    return x;
  };
  const x = sum();
  if (i !== toks.length) throw new Error(`left over in ${v}: ${toks.slice(i).join(" ")}`);
  return x;
}

const ceil64 = (x: number) => Math.ceil(x * 64 - 1e-6) / 64;

type Bar = {
  content: number;
  /** How far the bar's right-hand end sits past the content edge (negative: the room left). */
  past: number;
  /** The pill's right edge to the window's (the page's) edge. */
  pillToWindow: number;
  gap: number;
  lead: number;
  ctl: number;
  fontSize: string;
  letterSpacing: string;
  /** --nav-need, where the stylesheet sets one. */
  need: number | null;
};

/** The bar at a window width, with a classic scrollbar of `scrollbar` px (0: overlay). */
function bar(css: string, viewport: number, scrollbar: number, override: Record<string, string> = {}): Bar {
  const layout = viewport - scrollbar;
  const inner = cascade(css, ".navInner", viewport);
  const right = cascade(css, ".navRight", viewport);
  const ul = cascade(css, ".navLinks", viewport);
  const a = cascade(css, ".navLinks a", viewport);
  const fs = length(a["font-size"], { vars: {}, cqi: NaN, em: 16 });
  const ls = length(a["letter-spacing"], { vars: {}, cqi: NaN, em: fs });
  const pad = length(inner["padding-inline"], { vars: {}, cqi: NaN, em: 16 });
  const box = Math.min(layout, length(inner["max-width"], { vars: {}, cqi: NaN, em: 16 }));
  const content = box - 2 * pad;
  const vars = { ...Object.fromEntries(Object.entries(inner).filter(([k]) => k.startsWith("--"))), ...override };
  const ctx: Ctx = { vars, cqi: inner["container-type"] === "inline-size" ? content / 100 : NaN, em: fs };
  const gap = Math.max(0, length(ul["gap"], ctx));
  const lead = length(ul["margin-left"], ctx);
  const ctl = Math.max(0, length(right["gap"], ctx));
  const links = navItems.reduce((s, item) => s + ceil64(item.label.length * (MONO_ADVANCE * fs + ls)), 0);
  const width = BRAND + lead + links + (navItems.length - 1) * gap + CONTROL_GAPS * ctl + CONTROLS.reduce((s, w) => s + w, 0);
  const past = width - content;
  return {
    content,
    past,
    pillToWindow: (layout - box) / 2 + pad - Math.max(0, past),
    gap,
    lead,
    ctl,
    fontSize: a["font-size"],
    letterSpacing: a["letter-spacing"],
    need: vars["--nav-need"] ? length(vars["--nav-need"], ctx) : null,
  };
}

const r1 = (x: number) => Math.round(x * 10) / 10 + 0; // + 0: no -0
const WIDTHS = Array.from({ length: 2600 - 1240 + 1 }, (_, k) => 1240 + k);
const SCROLLBARS = [0, 15, 17];

/** Every (width, scrollbar) where the bar runs past its content edge, as runs of widths. */
function overflows(css: string): string[] {
  const out: string[] = [];
  for (const sb of SCROLLBARS) {
    let run: [number, number, number] | null = null;
    const flush = () => {
      if (run) out.push(`${run[0]}–${run[1]} (scrollbar ${sb}): up to ${r1(run[2])}px past the content edge`);
      run = null;
    };
    for (const w of WIDTHS) {
      const { past } = bar(css, w, sb);
      if (past > 0.01) run = run ? [run[0], w, Math.max(run[2], past)] : [w, w, past];
      else flush();
    }
    flush();
  }
  return out;
}

const CSS = readFileSync("app/globals.css", "utf8");

/** globals.css on main (e4b0afc8), the bar's spacing rules, verbatim but for their comments. */
const SHIPPED_CSS = `.navInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  max-width: 1360px;
  padding-inline: 40px;
  white-space: nowrap;
}
.navRight {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  justify-content: flex-end;
}
@media (max-width: 640px) {
  .navRight {
    gap: 10px;
  }
}
.navLinks {
  display: flex;
  gap: 17px;
  list-style: none;
  margin-right: auto;
  margin-left: 26px;
}
.navLinks a {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  font-family: var(--font-mono), monospace;
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
@media (max-width: 1500px) {
  .navInner { padding-inline: 24px; }
  .navLinks { gap: 10px; margin-left: 18px; }
  .navLinks a { letter-spacing: 0.1em; font-size: 12px; }
  .navRight { gap: 10px; }
}
@media (max-width: 1280px) and (min-width: 1240px) {
  .navLinks { gap: 7px; margin-left: 12px; }
  .navLinks a { letter-spacing: 0.07em; }
}
@media (max-width: 640px) {
  .navInner { padding-inline: 18px; }
}
@media (max-width: 360px) {
  .brand { font-size: 1.1rem; gap: 8px; }
  .navRight { gap: 6px; }
}`;

/** Each band's own spacing and type, as main shipped them. */
const BANDS = [
  { name: "1240–1280", at: [1240, 1280], gap: 7, lead: 12, ctl: 10, fontSize: "12px", letterSpacing: "0.07em" },
  { name: "1281–1500", at: [1281, 1500], gap: 10, lead: 18, ctl: 10, fontSize: "12px", letterSpacing: "0.1em" },
  { name: "1501 up", at: [1501, 2600], gap: 17, lead: 26, ctl: 16, fontSize: "12.5px", letterSpacing: "0.12em" },
] as const;
const bandAt = (w: number) => BANDS.find((b) => w >= b.at[0] && w <= b.at[1])!;

describe("the desktop bar ends at its content edge from 1240 up", () => {
  it("at every window width from 1240 to 2600, with overlay scrollbars and with a 15 or 17px classic one", () => {
    expect(overflows(CSS)).toEqual([]);
  });

  it("keeps each band's own spacing wherever it fits, to the pixel, and shrinks only by what it is short", () => {
    const wrong: string[] = [];
    for (const sb of SCROLLBARS)
      for (const w of WIDTHS) {
        const b = bar(CSS, w, sb);
        const band = bandAt(w);
        const natural = bar(CSS, w, sb, { "--nav-short": "0px" });
        if ([natural.gap, natural.lead, natural.ctl].join() !== [band.gap, band.lead, band.ctl].join())
          wrong.push(`${w}/${sb}: the band's spacing is ${natural.gap}/${natural.lead}/${natural.ctl}`);
        if (natural.past <= 0) {
          if (b.gap !== band.gap || b.lead !== band.lead || b.ctl !== band.ctl)
            wrong.push(`${w}/${sb}: fits at ${band.gap}/${band.lead}/${band.ctl} but is ${b.gap}/${b.lead}/${b.ctl}`);
        } else {
          // Short: the bar closes up just enough to end at the edge, every space alike.
          if (b.past < -1) wrong.push(`${w}/${sb}: closed up ${r1(-b.past)}px more than it had to`);
          const given = [band.gap - b.gap, band.lead - b.lead, band.ctl - b.ctl];
          if (Math.max(...given) - Math.min(...given) > 1e-9) wrong.push(`${w}/${sb}: spaces gave up ${given.map(r1).join("/")}`);
        }
      }
    expect(wrong).toEqual([]);
  });

  it("above 1500, where the bar is always 1360 wide, closes up from 17/26/16 to 9.2/18.2/8.2", () => {
    for (const [w, sb] of [
      [1501, 0],
      [1501, 17],
      [1920, 0],
      [2560, 17],
    ]) {
      const b = bar(CSS, w, sb);
      expect([r1(b.gap), r1(b.lead), r1(b.ctl)], `${w}/${sb}`).toEqual([9.2, 18.2, 8.2]);
      expect(b.past, `${w}/${sb}`).toBeLessThanOrEqual(0);
      expect(b.past, `${w}/${sb}`).toBeGreaterThan(-1);
    }
    // The pill ends at the content edge: 40px in from the bar's own edge, not 0.4 from the window's.
    expect(r1(bar(CSS, 1501, 17).pillToWindow)).toBe(102);
  });

  it("--nav-need is each band's bar at its own spacing, from the labels in lib/links.ts", () => {
    for (const band of BANDS) {
      const w = band.at[0] + 10;
      const natural = bar(CSS, w, 0, { "--nav-short": "0px" });
      const width = natural.content + natural.past;
      // Rounded up to the pixel: a need below the bar's width would let it run over.
      expect(natural.need, `${band.name}: set --nav-need to ${Math.ceil(width)}px`).toBe(Math.ceil(width - 1e-6));
    }
    expect(SPACES).toBe(13);
    expect(CSS).toMatch(/--nav-short: calc\(max\(0px, var\(--nav-need\) - 100cqi\) \/ 13\);/);
  });

  it("leaves the type, the order of the bands and the breakpoints as they were", () => {
    for (const w of [1240, 1280, 1281, 1366, 1500, 1501, 1920, 2560]) {
      const b = bar(CSS, w, 0);
      const band = bandAt(w);
      expect([b.fontSize, b.letterSpacing], `${w}`).toEqual([band.fontSize, band.letterSpacing]);
      const was = bar(SHIPPED_CSS, w, 0);
      expect([b.fontSize, b.letterSpacing, b.content], `${w}`).toEqual([was.fontSize, was.letterSpacing, was.content]);
    }
    const css = CSS.replace(/\/\*[\s\S]*?\*\//g, "");
    expect(css).toMatch(/@media \(max-width: 1239px\) \{[^}]*\.navToggle \{ display: flex; \}\s*\.navLinks \{ display: none; \}/);
    expect(css).toMatch(/@media \(max-width: 900px\) \{\s*\.navBoxOffice \{ display: none; \}\s*\}/);
  });

  it("changes nothing below 1240: the tablet and phone bars keep their gaps and no container", () => {
    for (const [w, ctl] of [
      [1239, 10],
      [1024, 10],
      [901, 10],
      [641, 10],
      [640, 10],
      [390, 10],
      [360, 6],
      [320, 6],
    ]) {
      expect(cascade(CSS, ".navInner", w)["container-type"], `${w}`).toBeUndefined();
      const ctx: Ctx = { vars: Object.fromEntries(Object.entries(cascade(CSS, ".navInner", w)).filter(([k]) => k.startsWith("--"))), cqi: NaN, em: 16 };
      expect(length(cascade(CSS, ".navRight", w)["gap"], ctx), `${w}`).toBe(ctl);
      expect(length(cascade(SHIPPED_CSS, ".navRight", w)["gap"], ctx), `${w} on main`).toBe(ctl);
    }
  });
});

describe("negative control: the bar as main shipped it", () => {
  it("the model gives the bar main shipped, as headless Chrome measured it on 8 Oct 2026", () => {
    // [window, scrollbar, px past the content edge (negative: room left), pill to the window's edge]
    const LIVE: [number, number, number, number][] = [
      [1240, 0, -2, 24],
      [1240, 17, 15, 9],
      [1256, 17, -1, 24],
      [1280, 0, -42, 24],
      [1281, 0, 16, 8],
      [1281, 17, 33, -9],
      [1296, 0, 1, 23],
      [1297, 0, 0, 24],
      [1310, 17, 4, 20],
      [1366, 0, -63, 27],
      [1500, 17, -63, 85.5],
      [1501, 0, 101.6, 8.9],
      [1501, 17, 101.6, 0.4],
      [1920, 0, 101.6, 218.4],
      [2560, 17, 101.6, 529.9],
    ];
    expect(LIVE.map(([w, sb]) => [w, sb, r1(bar(SHIPPED_CSS, w, sb).past), r1(bar(SHIPPED_CSS, w, sb).pillToWindow)])).toEqual(LIVE);
  });

  it("and the fit check catches it", () => {
    expect(overflows(SHIPPED_CSS)).toEqual([
      "1281–1296 (scrollbar 0): up to 16px past the content edge",
      "1501–2600 (scrollbar 0): up to 101.6px past the content edge",
      "1240–1253 (scrollbar 15): up to 13px past the content edge",
      "1281–1311 (scrollbar 15): up to 31px past the content edge",
      "1501–2600 (scrollbar 15): up to 101.6px past the content edge",
      "1240–1255 (scrollbar 17): up to 15px past the content edge",
      "1281–1313 (scrollbar 17): up to 33px past the content edge",
      "1501–2600 (scrollbar 17): up to 101.6px past the content edge",
    ]);
  });
});
