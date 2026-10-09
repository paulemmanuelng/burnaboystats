import { describe, it, expect } from "vitest";
import { decl, read, rules } from "./fixtures/cssRules";

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

// ── The bars fix 4 moves onto --other (J0-6) ───────────────────────────────
// Each single-series bar fill, and the track it sits on where it has one. On a
// --bg-soft-2 track --other clears 3:1 in both themes (asserted above); on
// the page (--bg) it clears too. Two tracks are not --bg-soft-2 and are not
// named by fix 4 — the phone /records/visualized bars (--text 7% over the
// page: 2.87:1 light, 3.75:1 dark) and the car page's performance bars
// (--ink-wash-base 8%) — so they are listed, measured, for the owner rather
// than silently changed (Job 0 build, 8 Oct 2026).
const BARS: [file: string, fill: string, track: string | null][] = [
  ["app/components/RankedBars.module.css", ".fill", ".track"],
  ["app/components/RankedBars.module.css", ".muted .fill", ".track"],
  ["app/components/mobileDeepPage.module.css", ".barFill", ".barTrack"],
  ["app/music/listeners/listeners.module.css", ".cityBarFill", ".cityBar"],
  ["app/analysis/analysis.module.css", ".barFill", ".barTrack"],
  ["app/records/africas-biggest/africas-biggest.module.css", ".barFill", null],
  ["app/components/mobileVisualized.module.css", ".barFill", null],
  ["app/records/cars/[car]/car.module.css", ".barFill", null],
];
const bodyOf = (css: string, sel: string) =>
  rules(css)
    .filter((r) => r.selector.split(",").map((x) => x.trim()).includes(sel))
    .map((r) => r.body)
    .join(";");

describe("single-series bars sit on --other (fix 4, J0-6)", () => {
  it.each(BARS)("%s %s is --other", (file, fill, track) => {
    const css = read(file);
    expect(decl(bodyOf(css, fill), "background")).toBe("var(--other)");
    if (track) expect(decl(bodyOf(css, track), "background")).toBe("var(--bg-soft-2)");
  });

  it("negative control: the shipped fills were gold or a faint ink, and fail", () => {
    // RankedBars.module.css .fill and analysis.module.css .barFill on main d3c39eda.
    for (const shipped of [".fill { background: var(--gold-fill); }", ".barFill { height: 8px; border-radius: 999px; background: color-mix(in srgb, var(--ink-wash-base) 26%, transparent); }"]) {
      const sel = shipped.slice(0, shipped.indexOf(" {"));
      expect(decl(bodyOf(shipped, sel), "background")).not.toBe("var(--other)");
    }
  });
});
