import { read, rules, decl } from "./fixtures/cssRules";
import { updates } from "../app/data/updates";

/**
 * Owner question #14 (live debug 15 Oct 2026, HA-4; Paul: "yes to all"): at
 * 1440 the /updates desktop filter strip hid half of its last chip under the
 * 44px end fade, and a mouse wheel cannot scroll it sideways. From 1240 the
 * chips are tightened so all eight fit at 1440; below 1240 the rail scrolls
 * under its fades as J4-8 drew it.
 *
 * The anchor is the live measurement, not this stylesheet: at 16px chip
 * sides and 10px gaps the eight chips needed 1061px (stripRail scrollWidth)
 * and the rail was 1025px wide, 1009px once the month label grows (1440,
 * light and dark, 15 Oct 2026). Each pixel of side padding comes off every
 * chip twice; each pixel of gap comes off the seven gaps.
 */

const CSS = read("app/updates/updates.module.css");

/** Whether an @media prelude applies at a viewport width (width terms only). */
function appliesAt(media: string | null, w: number): boolean {
  if (media === null) return true;
  if (!/width/.test(media)) return false;
  const min = media.match(/min-width:\s*(\d+)px/);
  const max = media.match(/max-width:\s*(\d+)px/);
  return (!min || w >= Number(min[1])) && (!max || w <= Number(max[1]));
}
/** The value the cascade gives `prop` on `sel` at width `w` (same specificity: last wins). */
function at(css: string, sel: string, prop: string, w: number) {
  let v: string | undefined;
  for (const r of rules(css)) {
    if (r.selector !== sel || !appliesAt(r.media, w)) continue;
    const d = decl(r.body, prop);
    if (d !== undefined) v = d;
  }
  return v;
}
const px = (v: string | undefined) => Number(v?.match(/(\d+)px\s*$/)?.[1] ?? NaN);

const CHIPS = 1 + new Set(updates.map((u) => u.category)).size;
const MEASURED = { width: 1061, pad: 16, gap: 10, rail: 1009 };
/** The chips' width for a side padding and gap, from the 1440 measurement. */
const needed = (pad: number, gap: number) =>
  MEASURED.width - CHIPS * 2 * (MEASURED.pad - pad) - (CHIPS - 1) * (MEASURED.gap - gap);

describe("#14: the /updates strip's eight chips fit at 1440", () => {
  it("the strip holds eight chips, the count the 1061px measurement was taken with", () => {
    // "All" and one chip per category. A ninth needs a new measurement.
    expect(CHIPS).toBe(8);
  });

  it("from 1240: 12px chip sides and 8px gaps", () => {
    expect(at(CSS, ".chip", "padding", 1440)).toBe("0 12px");
    expect(at(CSS, ".stripRail", "gap", 1440)).toBe("8px");
    expect(at(CSS, ".chip", "padding", 1240)).toBe("0 12px");
  });

  it("at 1440 they fit the narrowest rail with room for a two-digit count", () => {
    const w = needed(px(at(CSS, ".chip", "padding", 1440)), px(at(CSS, ".stripRail", "gap", 1440)));
    expect(w).toBe(983);
    expect(w).toBeLessThanOrEqual(MEASURED.rail - 20);
  });

  it("below 1240 nothing moves: 16px sides, 10px gaps, the rail scrolling under its fades", () => {
    for (const w of [1024, 1239]) {
      expect(at(CSS, ".chip", "padding", w), String(w)).toBe("0 16px");
      expect(at(CSS, ".stripRail", "gap", w), String(w)).toBe("10px");
    }
    expect(decl(rules(CSS).find((r) => r.media === null && r.selector === ".stripRail")!.body, "overflow-x")).toBe("auto");
  });
});

describe("#14 negative control: the strip main shipped", () => {
  it("origin/main a9574c64 drew every chip at 16px sides and 10px gaps at every width, 1061px in a 1009px rail", () => {
    // updates.module.css on main, the two rules verbatim; it had no 1240 block.
    const SHIPPED = `.stripRail { flex: 1; min-width: 0; height: 100%; display: flex; align-items: center; gap: 10px; overflow-x: auto; scrollbar-width: none; }
.chip { flex: none; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; min-height: 40px; padding: 0 16px; }`;
    const w = needed(px(at(SHIPPED, ".chip", "padding", 1440)), px(at(SHIPPED, ".stripRail", "gap", 1440)));
    expect(w).toBe(MEASURED.width);
    expect(w).toBeGreaterThan(MEASURED.rail);
  });
});
