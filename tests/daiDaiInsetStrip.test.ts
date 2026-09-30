import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Job 4 of the 30 Sep 2026 design response (docs: design-response-tour-map-
 * and-phone-screens.md §12; change list items 60 and 61), drawn in
 * designs/desktop/dai-dai-replay-map.html and the checks at the end of
 * designs/desktop/Dai Dai Redesign.dc.html.
 *
 *   60. The Europe inset: option (c), owner decided — a fixed 200 × 172 px at
 *       every width from 901 up, bottom-left, 8px from the edges. It shipped
 *       as 31% of the map box, which grew with the box through 901–1239.
 *
 * Each check resolves the stylesheet the way a browser would at a given
 * viewport width (the rules that apply, by specificity then source order),
 * so a later rule that overrides the change is caught, not just the line.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const REPLAY_CSS = read("app/components/DaiDaiReplay.module.css");
const REPLAY_TSX = read("app/components/DaiDaiReplay.tsx");

// ── A small cascade ──────────────────────────────────────────────────────────

interface Rule {
  /** The at-rule preludes around the rule, outermost first. */
  media: string[];
  selector: string;
  decls: Map<string, string>;
  at: number;
}

/** Every style rule in a stylesheet, with the at-rules around it. */
function parse(src: string): Rule[] {
  const s = src.replace(/\/\*[\s\S]*?\*\//g, (m) => " ".repeat(m.length));
  const out: Rule[] = [];
  const stack: string[] = [];
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") {
      const prelude = s.slice(start, i).trim();
      if (prelude.startsWith("@")) {
        stack.push(prelude);
        start = i + 1;
        continue;
      }
      const close = s.indexOf("}", i);
      const decls = new Map<string, string>();
      for (const d of s.slice(i + 1, close).split(";")) {
        const k = d.indexOf(":");
        if (k > 0) decls.set(d.slice(0, k).trim(), d.slice(k + 1).trim());
      }
      for (const sel of prelude.split(",")) out.push({ media: [...stack], selector: sel.trim(), decls, at: i });
      i = close;
      start = close + 1;
    } else if (s[i] === "}") {
      stack.pop();
      start = i + 1;
    }
  }
  return out;
}

/** Whether a screen `w` px wide, with no motion preference, meets an at-rule. */
function applies(prelude: string, w: number): boolean {
  const m = /^@media\s+(.*)$/.exec(prelude);
  if (!m) return false;
  return m[1].split(/\s+and\s+/).every((q) => {
    const t = q.trim();
    if (t === "screen" || t === "all") return true;
    const c = /^\((max|min)-width:\s*(\d+)px\)$/.exec(t);
    if (!c) return false;
    return c[1] === "max" ? w <= Number(c[2]) : w >= Number(c[2]);
  });
}

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Whether `selector` picks the i-th child (1-based) carrying class `cls`:
 *  the bare class, or the class with one :first-child / :nth-child(An+B). */
function picks(selector: string, cls: string, i: number): boolean {
  if (selector === cls) return true;
  if (selector === `${cls}:first-child`) return i === 1;
  const m = new RegExp(`^${esc(cls)}:nth-child\\(\\s*(?:(\\d*)n\\s*(?:([+-])\\s*(\\d+))?|(\\d+)|(odd|even))\\s*\\)$`).exec(selector);
  if (!m) return false;
  if (m[4]) return i === Number(m[4]);
  if (m[5]) return m[5] === "odd" ? i % 2 === 1 : i % 2 === 0;
  const a = m[1] === "" ? 1 : Number(m[1]);
  const b = m[3] ? (m[2] === "-" ? -Number(m[3]) : Number(m[3])) : 0;
  return a === 0 ? i === b : (i - b) % a === 0 && (i - b) / a >= 0;
}

/** Class and pseudo-class count: enough to order `.x` under `.x:nth-child()`. */
const specificity = (selector: string) => (selector.match(/[.:]/g) ?? []).length;

/** The declarations the i-th `cls` element ends up with on a screen `w` wide. */
function computed(sheet: string, cls: string, w: number, i = 1): Map<string, string> {
  const hits = parse(sheet)
    .filter((r) => r.media.every((p) => applies(p, w)) && picks(r.selector, cls, i))
    .sort((a, b) => specificity(a.selector) - specificity(b.selector) || a.at - b.at);
  const out = new Map<string, string>();
  for (const r of hits) {
    for (const [k, v] of r.decls) {
      if (k === "padding") {
        const [t, r2 = t, b = t, l = r2] = v.split(/\s+/);
        out.set("padding-top", t);
        out.set("padding-right", r2);
        out.set("padding-bottom", b);
        out.set("padding-left", l);
      } else out.set(k, v);
    }
  }
  return out;
}

/** A top-level rule swapped for another, verbatim — how a shipped rule is put back. */
function swapRule(sheet: string, selector: string, replacement: string): string {
  const re = new RegExp(`\\n${esc(selector)} \\{[^}]*\\}`);
  if (!re.test(sheet)) throw new Error(`no top-level ${selector} rule`);
  return sheet.replace(re, `\n${replacement.trim()}`);
}

// ── 60. The Europe inset ─────────────────────────────────────────────────────

/** The inset's drawn size (border-box, as globals.css sets for everything) in
 *  a map box `boxW` × `boxH`: px as written, % of the box, or a height from
 *  aspect-ratio. null when a size does not resolve. */
function insetSize(d: Map<string, string>, boxW: number, boxH: number): { w: number; h: number } | null {
  const len = (v: string | undefined, of: number) =>
    v === undefined || v === "auto" ? null : v.endsWith("px") ? parseFloat(v) : v.endsWith("%") ? (parseFloat(v) / 100) * of : null;
  const w = len(d.get("width"), boxW);
  if (w === null) return null;
  let h = len(d.get("height"), boxH);
  if (h === null) {
    const ar = /^([\d.]+)\s*\/\s*([\d.]+)$/.exec(d.get("aspect-ratio") ?? "");
    if (!ar) return null;
    h = (w * Number(ar[2])) / Number(ar[1]);
  }
  return { w: Math.round(w * 100) / 100, h: Math.round(h * 100) / 100 };
}

/** Viewport widths from 901 up: both ends of the tablet band, the design's
 *  1024 check, the desktop's first width and the approved 1440. */
const DESKTOP_WIDTHS = [901, 1024, 1239, 1240, 1440, 1920];
/** Map boxes of any size: the design's 1024 check draws the box 873 × 416;
 *  the others only prove the size does not follow the box. */
const BOXES: [number, number][] = [[873, 416], [700, 430], [1100, 430]];

/** What is wrong with the inset in a stylesheet, as readable lines. */
function insetMisses(sheet: string): string[] {
  const miss: string[] = [];
  for (const vw of DESKTOP_WIDTHS) {
    const d = computed(sheet, ".europe", vw);
    for (const [bw, bh] of BOXES) {
      const size = insetSize(d, bw, bh);
      if (!size || size.w !== 200 || size.h !== 172) miss.push(`${vw}px, box ${bw}×${bh}: ${size ? `${size.w}×${size.h}` : "unresolved"}`);
    }
    for (const [k, v] of [["position", "absolute"], ["left", "8px"], ["bottom", "8px"]] as const) {
      if (d.get(k) !== v) miss.push(`${vw}px: ${k} ${d.get(k)}`);
    }
  }
  return miss;
}

// The shipped rule (origin/main at cda9fb74, 30 Sep 2026), verbatim. The negative control.
const SHIPPED_EUROPE = `
.europe {
  position: absolute;
  left: 8px;
  bottom: 8px;
  width: 31%;
  aspect-ratio: 1 / 0.86;
  background: var(--bg);
  border: 1px solid var(--rule);
}`;
// The phone's override as shipped, verbatim: item 60 leaves it as it is.
const SHIPPED_PHONE_EUROPE = `
  .europe {
    position: static;
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
    border: 0;
  }`;

describe("60 · the Europe inset is a fixed 200 × 172 from 901 up", () => {
  it("draws 200 × 172 at every desktop width, whatever the map box's size, bottom-left 8px in", () => {
    expect(insetMisses(REPLAY_CSS)).toEqual([]);
  });

  it("negative control: the shipped 31% share fails, and follows the box", () => {
    const shipped = swapRule(REPLAY_CSS, ".europe", SHIPPED_EUROPE);
    expect(shipped).toContain("width: 31%;");
    const misses = insetMisses(shipped);
    expect(misses.length).toBeGreaterThan(0);
    // At the design's 1024 check (box 873 wide) the share drew 270.63 × 232.74.
    expect(misses).toContain("1024px, box 873×416: 270.63×232.74");
  });

  it("keeps the label, border and fill as approved", () => {
    const d = computed(REPLAY_CSS, ".europe", 1440);
    expect(d.get("background")).toBe("var(--bg)");
    expect(d.get("border")).toBe("1px solid var(--rule)");
    const label = computed(REPLAY_CSS, ".europeLabel", 1440);
    expect(label.get("font-size")).toBe("11px");
    expect(label.get("color")).toBe("var(--text-muted)");
  });

  it("leaves the phone's override intact: the Europe map fills the phone's box", () => {
    expect(REPLAY_CSS).toContain(SHIPPED_PHONE_EUROPE);
    for (const vw of [320, 390, 900]) {
      const d = computed(REPLAY_CSS, ".europe", vw);
      expect(d.get("position"), `${vw}`).toBe("static");
      expect(insetSize(d, 390, 300), `${vw}`).toEqual({ w: 390, h: 300 });
    }
  });

  it("keeps the proportion the Europe view is cut to (1 : 0.86)", () => {
    // DaiDaiReplay.tsx widens the Europe viewBox to width = height / 0.86.
    const cut = /const w = Math\.max\(se\.x - sw\.x, h \/ ([\d.]+)\);/.exec(REPLAY_TSX)?.[1];
    expect(cut).toBe("0.86");
    const size = insetSize(computed(REPLAY_CSS, ".europe", 1440), 873, 416)!;
    expect(size.h / size.w).toBeCloseTo(Number(cut), 4);
  });
});
