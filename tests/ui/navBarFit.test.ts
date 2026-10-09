import { readFileSync } from "node:fs";
import { navItems } from "../../app/lib/links";

/**
 * The desktop bar ends at its content edge at every width from 1240 up, on
 * the 40px gutter (J0-10, fix 2) and the three spacing bands of J4-1 (fix 77,
 * design review 8 Oct 2026):
 *
 *   window      link gap  after wordmark  before controls  between  search
 *   1360 up       28          36             >= 24            12     "Search ⌘K"
 *   1280–1359     20          36             >= 24            12     icon + ⌘K
 *   1240–1279     20          24             >= 20            10     icon + ⌘K
 *
 * Seven links (Home went, Compare came; About, FAQ and Contact went to the
 * footer and the sheet), Space Mono 12 / 0.1em at every width (C-12).
 *
 * Measured 8 Oct 2026 in headless Chrome on /music, dark, with overlay
 * scrollbars and with a 17px classic one, at 1240, 1279, 1280, 1359, 1360,
 * 1440, 1500, 1600, 1920 and 2560 (LIVE below): the bar fits at every one
 * with no shrink, so fix 2's fallback (24px for 1240–1279) is not needed. The
 * tightest point is 1360 with a scrollbar (2.6px to spare), then 1240 with
 * one (5.9px). The collapsed search pill measured 75.36px, the width the plan
 * derived (job0-rules-PLAN §4).
 *
 * The #444 history (7–8 Oct 2026), kept as the negative control: on the bar
 * main shipped, above 1500 the right-hand group ran 101.6px past the content
 * edge, and the bands switched on the window's width, which counts a classic
 * scrollbar the bar never gets. #447 fixed it with an equal-share shrink
 * measured against the bar's own box (container units); that safety net
 * stays, now over 10 spaces: the lead, the six gaps between links, the space
 * before the controls and the two between them.
 *
 * jsdom does no layout, so this models the bar the way Blink lays it out:
 * wordmark, lead, the links, the space before the controls (.navRight's gap
 * plus .navLinks' padding-right), the two control gaps, the theme flip, the
 * search trigger and the pill in one row; Space Mono is monospaced (612/1000
 * em) and a link is its characters at that advance plus its tracking, rounded
 * up to 1/64px; the wordmark and the three controls are their measured
 * widths, the search trigger's by whether SearchPalette.module.css shows its
 * label at that width. The stylesheets are read the way the cascade reads
 * them for these selectors (media at the window's width, source order), and
 * var(), calc(), min(), max() and cqi are evaluated against the bar's content
 * box (the window less the scrollbar, held to the max-width, less the
 * padding). On main's stylesheet the model gives all 344 live readings of
 * 8 Oct to the 0.1px they were read to, and on this one the 20 below.
 */

/** Measured 8 Oct 2026 in headless Chrome, fine pointer, both themes. */
const BRAND = 191.4375; // the 22px mark, its 10px gap and "BURNABOYSTATS" in 24px Anton
const FLIP = 34; // the theme flip
const SEARCH_FULL = 130.6875; // "Search ⌘K"
const SEARCH_ICON = 75.359375; // the icon and ⌘K, its label display:none (1240–1359)
const PILL = 139.59375; // Box office, with its ticket
const MONO_ADVANCE = 0.612; // Space Mono, em
/** The spaces that give up a share of a shortfall: lead, the gaps between links, before the controls, the two between them. */
const SPACES = 1 + (navItems.length - 1) + 1 + 2;

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
  /** The wordmark's left edge. */
  brandX: number;
  gap: number;
  lead: number;
  /** From the last link to the theme flip, before any slack. */
  before: number;
  ctl: number;
  search: number;
  padding: number;
  fontSize: string;
  letterSpacing: string;
  /** --nav-need, where the stylesheet sets one. */
  need: number | null;
};

type Variant = { labels?: string[]; searchCss?: string; override?: Record<string, string> };

/** The bar at a window width, with a classic scrollbar of `scrollbar` px (0: overlay). */
function bar(css: string, viewport: number, scrollbar: number, { labels = navItems.map((i) => i.label), searchCss = SEARCH_CSS, override = {} }: Variant = {}): Bar {
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
  const before = ctl + (ul["padding-right"] ? Math.max(0, length(ul["padding-right"], ctx)) : 0);
  const search = cascade(searchCss, ".triggerLabel", viewport)["display"] === "none" ? SEARCH_ICON : SEARCH_FULL;
  const links = labels.reduce((s, label) => s + ceil64(label.length * (MONO_ADVANCE * fs + ls)), 0);
  const width = BRAND + lead + links + (labels.length - 1) * gap + before + 2 * ctl + FLIP + search + PILL;
  const past = width - content;
  const brandX = (layout - box) / 2 + pad;
  return {
    content,
    past,
    pillToWindow: brandX - Math.max(0, past),
    brandX,
    gap,
    lead,
    before,
    ctl,
    search,
    padding: pad,
    fontSize: a["font-size"],
    letterSpacing: a["letter-spacing"],
    need: vars["--nav-need"] ? length(vars["--nav-need"], ctx) : null,
  };
}

const r1 = (x: number) => Math.round(x * 10) / 10 + 0; // + 0: no -0
const WIDTHS = Array.from({ length: 2600 - 1240 + 1 }, (_, k) => 1240 + k);
const SCROLLBARS = [0, 15, 17];

/** Every (width, scrollbar) where the bar runs past its content edge, as runs of widths. */
function overflows(css: string, variant: Variant = {}): string[] {
  const out: string[] = [];
  for (const sb of SCROLLBARS) {
    let run: [number, number, number] | null = null;
    const flush = () => {
      if (run) out.push(`${run[0]}–${run[1]} (scrollbar ${sb}): up to ${r1(run[2])}px past the content edge`);
      run = null;
    };
    for (const w of WIDTHS) {
      const { past } = bar(css, w, sb, variant);
      if (past > 0.01) run = run ? [run[0], w, Math.max(run[2], past)] : [w, w, past];
      else flush();
    }
    flush();
  }
  return out;
}

const CSS = readFileSync("app/globals.css", "utf8");
const SEARCH_CSS = readFileSync("app/components/SearchPalette.module.css", "utf8");

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

/** The ten links main shipped (lib/links.ts on d3c39eda), for the negative control. */
const SHIPPED_LABELS = ["Home", "Music", "Certifications", "Records", "Live Charts", "Afrobeats", "Updates", "About", "FAQ", "Contact"];
/** Main shipped no collapse: the pill read "Search ⌘K" at every desktop width. */
const SHIPPED_SEARCH_CSS = `.triggerLabel {\n  letter-spacing: 0.02em;\n}`;
const SHIPPED: Variant = { labels: SHIPPED_LABELS, searchCss: SHIPPED_SEARCH_CSS };

/** Each band's own spacing (fix 77), on the 40px gutter. */
const BANDS = [
  { name: "1240–1279", at: [1240, 1279], gap: 20, lead: 24, before: 20, ctl: 10, search: SEARCH_ICON },
  { name: "1280–1359", at: [1280, 1359], gap: 20, lead: 36, before: 24, ctl: 12, search: SEARCH_ICON },
  { name: "1360 up", at: [1360, 2600], gap: 28, lead: 36, before: 24, ctl: 12, search: SEARCH_FULL },
] as const;
const bandAt = (w: number) => BANDS.find((b) => w >= b.at[0] && w <= b.at[1])!;
const spacing = (b: { gap: number; lead: number; before: number; ctl: number }) => [b.gap, b.lead, b.before, b.ctl].join("/");

/**
 * Read 8 Oct 2026 in headless Chrome on /music (dark; the bar is the same in
 * light): [window, scrollbar, the room before the controls beyond the band's
 * minimum, the wordmark's x]. No reading needed the shrink: every space was
 * the band's own.
 */
const LIVE: [number, number, number, number][] = [
  [1240, 0, 22.9, 40],
  [1240, 17, 5.9, 40],
  [1279, 0, 61.9, 40],
  [1279, 17, 44.9, 40],
  [1280, 0, 42.9, 40],
  [1280, 17, 25.9, 40],
  [1359, 0, 121.9, 40],
  [1359, 17, 104.9, 40],
  [1360, 0, 19.6, 40],
  [1360, 17, 2.6, 40],
  [1440, 0, 19.6, 80],
  [1440, 17, 19.6, 71.5],
  [1500, 0, 19.6, 110],
  [1500, 17, 19.6, 101.5],
  [1600, 0, 19.6, 160],
  [1600, 17, 19.6, 151.5],
  [1920, 0, 19.6, 320],
  [1920, 17, 19.6, 311.5],
  [2560, 0, 19.6, 640],
  [2560, 17, 19.6, 631.5],
];

describe("the desktop bar fits from 1240 up on the 40px gutter (fix 2, fix 77)", () => {
  it("at 1240, 1280, 1360, 1440 and 1600, with and without a 17px scrollbar, as measured in headless Chrome", () => {
    for (const [w, sb] of [1240, 1280, 1360, 1440, 1600].flatMap((w) => [0, 17].map((sb) => [w, sb]))) {
      const b = bar(CSS, w, sb);
      expect(b.past, `${w}/${sb}`).toBeLessThanOrEqual(0);
      expect(b.padding, `${w}/${sb}`).toBe(40);
    }
    expect(LIVE.map(([w, sb]) => [w, sb, r1(-bar(CSS, w, sb).past), bar(CSS, w, sb).brandX])).toEqual(LIVE);
  });

  it("at every window width from 1240 to 2600, with overlay scrollbars and with a 15 or 17px classic one", () => {
    expect(overflows(CSS)).toEqual([]);
  });

  it("each band's own spacing and search pill, and no shrink anywhere: every width fits at its band's spacing", () => {
    const wrong: string[] = [];
    for (const sb of SCROLLBARS)
      for (const w of WIDTHS) {
        const b = bar(CSS, w, sb);
        const band = bandAt(w);
        const natural = bar(CSS, w, sb, { override: { "--nav-short": "0px" } });
        if (spacing(natural) !== spacing(band)) wrong.push(`${w}/${sb}: the band's spacing is ${spacing(natural)}`);
        if (b.search !== band.search) wrong.push(`${w}/${sb}: the search pill is ${b.search}px`);
        if (natural.past > 0) wrong.push(`${w}/${sb}: ${r1(natural.past)}px short at the band's spacing`);
        if (spacing(b) !== spacing(band)) wrong.push(`${w}/${sb}: fits at ${spacing(band)} but is ${spacing(b)}`);
      }
    expect(wrong).toEqual([]);
  });

  it("the wordmark sits on the pages' edge: x 80 at 1440, 110 at 1500, 40 at 1240 and at 1360 with a scrollbar", () => {
    expect(bar(CSS, 1440, 0).brandX).toBe(80);
    expect(bar(CSS, 1500, 0).brandX).toBe(110);
    expect(bar(CSS, 1240, 0).brandX).toBe(40);
    expect(bar(CSS, 1360, 17).brandX).toBe(40);
  });

  it("--nav-need is each band's bar at its own spacing, from the labels in lib/links.ts; the safety net shares a shortfall over 10 spaces", () => {
    for (const band of BANDS) {
      const w = band.at[0] + 10;
      const natural = bar(CSS, w, 0, { override: { "--nav-short": "0px" } });
      const width = natural.content + natural.past;
      // Rounded up to the pixel: a need below the bar's width would let it run over.
      expect(natural.need, `${band.name}: set --nav-need to ${Math.ceil(width)}px`).toBe(Math.ceil(width - 1e-6));
    }
    expect(SPACES).toBe(10);
    expect(CSS).toMatch(/--nav-short: calc\(max\(0px, var\(--nav-need\) - 100cqi\) \/ 10\);/);
    // The net still works: claim a need 30px past the box and each of the 10 spaces gives up 3px.
    const squeezed = bar(CSS, 1440, 0, { override: { "--nav-need": "1310px" } });
    expect([squeezed.gap, squeezed.lead, squeezed.before, squeezed.ctl].map(r1)).toEqual([25, 33, 21, 9]);
    expect(r1(squeezed.past)).toBe(r1(bar(CSS, 1440, 0).past - 30));
  });

  it("Space Mono 12 / 0.1em at every width (C-12), and the 1240 / 900 breakpoints as they were", () => {
    for (const w of [1240, 1279, 1280, 1359, 1360, 1500, 1501, 1920, 2560]) {
      const b = bar(CSS, w, 0);
      expect([b.fontSize, b.letterSpacing], `${w}`).toEqual(["12px", "0.1em"]);
    }
    const css = CSS.replace(/\/\*[\s\S]*?\*\//g, "");
    expect(css).toMatch(/@media \(max-width: 1239px\) \{[^}]*\.navToggle \{ display: flex; \}\s*\.navLinks \{ display: none; \}/);
    expect(css).toMatch(/@media \(max-width: 900px\) \{\s*\.navBoxOffice \{ display: none; \}\s*\}/);
  });

  it("changes nothing below 1240: the tablet and phone bars keep their gutter, their gaps and no container", () => {
    for (const [w, ctl, pad] of [
      [1239, 10, 24],
      [1024, 10, 24],
      [901, 10, 24],
      [641, 10, 24],
      [640, 10, 18],
      [390, 10, 18],
      [360, 6, 18],
      [320, 6, 18],
    ]) {
      expect(cascade(CSS, ".navInner", w)["container-type"], `${w}`).toBeUndefined();
      const ctx: Ctx = { vars: Object.fromEntries(Object.entries(cascade(CSS, ".navInner", w)).filter(([k]) => k.startsWith("--"))), cqi: NaN, em: 16 };
      expect(length(cascade(CSS, ".navRight", w)["gap"], ctx), `${w}`).toBe(ctl);
      expect(length(cascade(SHIPPED_CSS, ".navRight", w)["gap"], ctx), `${w} on main`).toBe(ctl);
      expect(cascade(CSS, ".navInner", w)["padding-inline"], `${w}`).toBe(`${pad}px`);
      expect(cascade(SHIPPED_CSS, ".navInner", w)["padding-inline"], `${w} on main`).toBe(`${pad}px`);
      // and the search pill keeps its label wherever main showed it (the phone rule drops it at 640)
      expect(cascade(SEARCH_CSS, ".triggerLabel", w)["display"], `${w}`).toBe(w <= 640 ? "none" : undefined);
    }
  });
});

describe("negative controls", () => {
  it("the model gives the bar main shipped, as headless Chrome measured it on 8 Oct 2026", () => {
    // [window, scrollbar, px past the content edge (negative: room left), pill to the window's edge]
    const LIVE_MAIN: [number, number, number, number][] = [
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
    expect(LIVE_MAIN.map(([w, sb]) => [w, sb, r1(bar(SHIPPED_CSS, w, sb, SHIPPED).past), r1(bar(SHIPPED_CSS, w, sb, SHIPPED).pillToWindow)])).toEqual(LIVE_MAIN);
  });

  it("and the fit check catches it", () => {
    expect(overflows(SHIPPED_CSS, SHIPPED)).toEqual([
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

  it("the collapse is load-bearing: with the full \"Search ⌘K\" below 1360 the 1240 band is 49.4px short with a scrollbar", () => {
    const natural = bar(CSS, 1240, 17, { searchCss: SHIPPED_SEARCH_CSS, override: { "--nav-short": "0px" } });
    expect(natural.search).toBe(SEARCH_FULL);
    expect(r1(natural.past)).toBe(49.4);
  });

  it("the ten shipped links do not fit the new bands at their own spacing (so the seven are load-bearing too)", () => {
    const natural = bar(CSS, 1440, 0, { labels: SHIPPED_LABELS, override: { "--nav-short": "0px" } });
    expect(natural.past).toBeGreaterThan(0);
  });
});
