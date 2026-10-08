import { describe, it, expect } from "vitest";
import { read } from "./fixtures/cssRules";

/**
 * Data marks clear 3:1 (WCAG 1.4.11, non-text contrast) against what they sit
 * on — the design review of 8 Oct 2026, Job 0, fix 4 with J0-7.
 *
 * Single-series bars sat on --bar-muted, which measured 2.97:1 light and
 * 1.93:1 dark on the --bg-soft-2 track. Fix 4 moves them to --other, and J0-7
 * nudges --other's light value from #888a93 (2.87:1 on the track) to #84868f
 * (3.03:1) so it clears on the track as well as on the page. Dark is
 * unchanged. --other stays a COOL neutral on paper beside the warm gold
 * (review fix 9, tests/grossShowsDesign.test.tsx).
 */

const GLOBALS = read("app/globals.css");

/** A token's light and dark hex from its `light-dark(#L, #D)` declaration. */
function pair(name: string, css = GLOBALS): [string, string] {
  const m = new RegExp(`${name}:\\s*light-dark\\((#[0-9a-f]{6}),\\s*(#[0-9a-f]{6})\\)`, "i").exec(css);
  if (!m) throw new Error(`no light-dark() hex pair for ${name}`);
  return [m[1].toLowerCase(), m[2].toLowerCase()];
}
const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const lum = (hex: string) =>
  rgb(hex)
    .map((v) => v / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
    .reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
const ratio = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};
const cool = (hex: string) => rgb(hex)[2] >= rgb(hex)[0];

const [PAGE_L, PAGE_D] = pair("--bg");
const [TRACK_L, TRACK_D] = pair("--bg-soft-2");

describe("--other: the neutral data mark clears 3:1 on the page and on the track (J0-7, fix 4)", () => {
  const [light, dark] = pair("--other");

  it("light: #84868f, ≥ 3:1 on --bg and on the --bg-soft-2 track", () => {
    expect(light).toBe("#84868f");
    expect(ratio(light, TRACK_L)).toBeGreaterThanOrEqual(3); // 3.03
    expect(ratio(light, PAGE_L)).toBeGreaterThanOrEqual(3); // 3.31
  });

  it("dark is unchanged (#74747e), ≥ 3:1 on the track and on the page", () => {
    expect(dark).toBe("#74747e");
    expect(ratio(dark, TRACK_D)).toBeGreaterThanOrEqual(3); // 3.67
    expect(ratio(dark, PAGE_D)).toBeGreaterThanOrEqual(3); // 4.28
  });

  it("stays cool beside the warm gold on paper, and apart from it", () => {
    expect(cool(light)).toBe(true);
    // The gold fill his bars use, #945e00 on paper: 1.50 apart in luminance,
    // and apart in hue (cool vs warm).
    const [goldL] = pair("--gold-fill");
    expect(cool(goldL)).toBe(false);
    expect(ratio(light, goldL)).toBeGreaterThanOrEqual(1.49);
  });

  it("negative controls: the shipped --other light value and --bar-muted fail on the track", () => {
    // globals.css:186 and :546 on main d3c39eda.
    const shipped = pair("--other", "--other: light-dark(#888a93, #74747e);");
    expect(ratio(shipped[0], TRACK_L)).toBeLessThan(3); // 2.87
    const barMuted = pair("--bar-muted", "--bar-muted: light-dark(#8d877d, #4a4a52);");
    expect(ratio(barMuted[0], TRACK_L)).toBeLessThan(3); // 2.97
    expect(ratio(barMuted[1], TRACK_D)).toBeLessThan(3); // 1.93
  });
});
