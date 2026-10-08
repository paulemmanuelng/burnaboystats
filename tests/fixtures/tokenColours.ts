import { read } from "./cssRules";

/**
 * Site colour tokens resolved from app/globals.css, for contrast guards.
 *
 * Reads the first `--name: …;` declaration (the :root block) and resolves it
 * per theme: `light-dark(L, D)` picks an arm; an arm may be a hex, an
 * `rgba()`, a `var(--other)` or a `color-mix(in srgb, A N%, B)`. The result is
 * RGBA with alpha 0–1, so a translucent edge or wash can be painted over the
 * ground it sits on with `over()`. Anything else throws, so a token rewritten
 * into a form this cannot read fails loudly instead of passing.
 */
export type Theme = "light" | "dark";
export type RGBA = [number, number, number, number];

const GLOBALS = read("app/globals.css").replace(/\/\*[\s\S]*?\*\//g, "");

function rawToken(name: string): string {
  const at = GLOBALS.search(new RegExp(`(^|[\\s;{])${name}\\s*:`));
  if (at < 0) throw new Error(`no ${name} in globals.css`);
  const start = GLOBALS.indexOf(":", at + 1) + 1;
  let depth = 0;
  let i = start;
  for (; i < GLOBALS.length; i++) {
    const c = GLOBALS[i];
    if (c === "(") depth++;
    else if (c === ")") depth--;
    else if (c === ";" && depth === 0) break;
  }
  return GLOBALS.slice(start, i).trim();
}

/** Split a function's arguments on top-level commas. */
function args(inner: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = "";
  for (const c of inner) {
    if (c === "(") depth++;
    if (c === ")") depth--;
    if (c === "," && depth === 0) {
      out.push(cur.trim());
      cur = "";
    } else cur += c;
  }
  out.push(cur.trim());
  return out;
}
const fnArgs = (v: string, fn: string) => args(v.slice(fn.length + 1, v.lastIndexOf(")")));

export function colour(value: string, theme: Theme): RGBA {
  const v = value.trim();
  if (/^#[0-9a-f]{6}$/i.test(v)) return [1, 3, 5].map((i) => parseInt(v.slice(i, i + 2), 16)).concat(1) as RGBA;
  if (v === "transparent") return [0, 0, 0, 0];
  if (v.startsWith("rgba(")) {
    const [r, g, b, a] = fnArgs(v, "rgba").map(Number);
    return [r, g, b, a];
  }
  if (v.startsWith("var(")) return tokenColour(v.slice(4, -1).trim(), theme);
  if (v.startsWith("light-dark(")) {
    const [l, d] = fnArgs(v, "light-dark");
    return colour(theme === "light" ? l : d, theme);
  }
  if (v.startsWith("color-mix(")) {
    const [space, a, b] = fnArgs(v, "color-mix");
    if (space !== "in srgb") throw new Error(`color-mix space ${space}`);
    const m = a.match(/^(.*\S)\s+([\d.]+)%$/);
    if (!m) throw new Error(`color-mix arm ${a}`);
    const p = Number(m[2]) / 100;
    const x = colour(m[1], theme);
    const y = colour(b, theme);
    // premultiplied sRGB mix, as the CSS spec does it
    const alpha = x[3] * p + y[3] * (1 - p);
    if (alpha === 0) return [0, 0, 0, 0];
    const ch = [0, 1, 2].map((i) => (x[i] * x[3] * p + y[i] * y[3] * (1 - p)) / alpha);
    return [ch[0], ch[1], ch[2], alpha];
  }
  throw new Error(`cannot resolve colour "${v}"`);
}

export const tokenColour = (name: string, theme: Theme): RGBA => colour(rawToken(name), theme);

/** `fg` painted over an opaque `ground`. */
export const over = (fg: RGBA, ground: RGBA): RGBA => {
  const a = fg[3];
  return [0, 1, 2].map((i) => fg[i] * a + ground[i] * (1 - a)).concat(1) as RGBA;
};

const lum = (c: RGBA) =>
  c
    .slice(0, 3)
    .map((v) => v / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)))
    .reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);

/** WCAG 2.x contrast of `fg` (composited over `ground`) against `ground`. */
export function contrast(fg: RGBA, ground: RGBA): number {
  if (ground[3] < 1) throw new Error("contrast needs an opaque ground: paint it over the page with over() first");
  const g = ground;
  const f = over(fg, g);
  const [x, y] = [lum(f), lum(g)];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

/** Contrast of token `fg` on token `ground` in a theme (the ground painted over --bg first if translucent). */
export function tokenContrast(fg: string, ground: string, theme: Theme): number {
  const page = tokenColour("--bg", theme);
  const g = over(tokenColour(ground, theme), page);
  return contrast(tokenColour(fg, theme), g);
}

export const THEMES: Theme[] = ["light", "dark"];
