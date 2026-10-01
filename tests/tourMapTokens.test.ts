import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

/**
 * The tour map's four new token pairs (design response of 30 Sep 2026, §7,
 * item 30), and the reason for them: played vs not played must be at least
 * 3 : 1 in BOTH themes (a data mark, WCAG 1.4.11). The shipped fill was a 42%
 * gold wash in both themes, which on paper is 1.55 : 1 against the unplayed
 * land (brief §3.2) — this file measures that too, as its negative control.
 */

const css = readFileSync("app/globals.css", "utf8");

/** A token's light-dark() pair, split at its top-level comma. */
const pair = (name: string) => {
  const m = new RegExp(`${name}:\\s*light-dark\\((.*)\\);`).exec(css);
  if (!m) return null;
  let depth = 0;
  for (let i = 0; i < m[1].length; i++) {
    const ch = m[1][i];
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    else if (ch === "," && depth === 0) return { light: m[1].slice(0, i).trim(), dark: m[1].slice(i + 1).trim() };
  }
  return null;
};

const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const lum = ([r, g, b]: number[]) => {
  const c = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
};
const ratio = (a: number[], b: number[]) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};
/** a over b at alpha (colour-mix into transparent, painted on b). */
const over = (a: number[], b: number[], alpha: number) => a.map((v, i) => v * alpha + b[i] * (1 - alpha));

describe("the four map token pairs", () => {
  it("are declared as light | dark pairs, with the response's values", () => {
    expect(pair("--map-played")).toEqual({ light: "#a3742a", dark: "#a07820" });
    expect(pair("--map-land")).toEqual({ light: "#efeae1", dark: "#26262c" });
    expect(pair("--map-border")).toEqual({ light: "rgba(23, 20, 15, 0.22)", dark: "rgba(245, 244, 240, 0.14)" });
    expect(pair("--map-sea")).toEqual({ light: "#ffffff", dark: "#141416" });
  });

  it("played outranks not played at 3 : 1 or more, in both themes", () => {
    const played = pair("--map-played")!;
    const land = pair("--map-land")!;
    expect(ratio(rgb(played.light), rgb(land.light))).toBeGreaterThanOrEqual(3);
    expect(ratio(rgb(played.dark), rgb(land.dark))).toBeGreaterThanOrEqual(3);
    // The response's measurements, 3.44 and 3.73.
    expect(ratio(rgb(played.light), rgb(land.light))).toBeCloseTo(3.44, 1);
    expect(ratio(rgb(played.dark), rgb(land.dark))).toBeCloseTo(3.73, 1);
  });

  it("negative control: the shipped 42% gold wash on paper was 1.55 : 1 against the land", () => {
    // map.module.css .on, shipped: color-mix(in srgb, var(--gold-wash-base) 42%, transparent),
    // over the frame's --bg-soft (#ffffff), against .off's --bg-soft-2 (#efeae1).
    const shipped = over(rgb("#945e00"), rgb("#ffffff"), 0.42);
    const r = ratio(shipped, rgb("#efeae1"));
    expect(r).toBeLessThan(3);
    expect(r).toBeCloseTo(1.55, 1);
  });
});
