import { describe, it, expect } from "vitest";
import { decl, read, rules } from "./fixtures/cssRules";

/**
 * Paul, 14 Oct 2026 ("yes all", Job 3 call 1): the desktop /certifications
 * tier share bars (J3-7, #488) move under each tier's figures, so Burna Boy's
 * portrait stays clear at every desktop width. As built they ran across the
 * gap after the percentage, and from 1024 that gap is where his portrait is.
 *
 * Measured on the dev server (14 Oct 2026, light and dark alike), the bars'
 * boxes against the portrait's (.heroArt) box:
 *   before   1024: bar x 304–968, portrait 852–1064  (116px inside it)
 *            1240: bar x 1009–1176, portrait 871–1280 (305px inside)
 *            1440: bar x 1117–1336, portrait 1005–1480 (331px inside)
 * and the figures themselves start at its edge: at 1240 the count's box is
 * at x 870.6, the portrait's at 870.8, and at 1440 the percentage (to
 * 1100.7) runs into it (from 1004.8). A bar under the count and percentage
 * would sit in the box, and at 1240 end at his upper lip. So the bars hang
 * under the dot and the name, the one stretch of the row that clears the box
 * at every width: NOT under the figures as the ruling worded it, which the PR
 * puts back to Paul.
 *
 * The geometry below is the live grid's, read from the stylesheet the way
 * tests/ui/certsPortrait.test.tsx reads it: two columns (1.3fr | 1fr) in a
 * 1360px frame with 40px gutters from 1240, the rail stacked under the copy
 * from a 32px gutter below it.
 */

const CSS = read("app/certifications/certifications.module.css");
const BAND = "@media (max-width: 1239px)";
/** Every declaration the sheet gives `sel` under exactly `media`, its selector lists included, in order. */
const at = (sel: string, media: string | null) =>
  rules(CSS)
    .filter((r) => r.media === media && r.selector.split(",").map((s) => s.trim()).includes(sel))
    .map((r) => r.body)
    .join(";");
const px = (v: string | undefined) => {
  if (v === undefined) throw new Error("missing value");
  if (v === "0") return 0;
  const m = v.match(/^(-?[\d.]+)px$/);
  if (!m) throw new Error(`not a px length: ${v}`);
  return Number(m[1]);
};

// The lede's 60ch at its own size, as certsPortrait takes it (the production
// build's 783px; the dev server's is 795.6, which only moves the photo right).
const LEDE_60CH = 783;

/** The portrait's box at width W: .heroArt's right and width, as the sheet has them. */
function portrait(W: number) {
  const base = at(".heroArt", null);
  expect(decl(base, "right")).toBe("max(-40px, calc(50% - 760px))");
  expect(decl(base, "width")).toBe("min(480px, 33%)");
  const right = Math.max(-40, W / 2 - 760);
  let width = Math.min(480, 0.33 * W);
  if (W >= 901 && W <= 1239) {
    const band = rules(CSS).find((r) => r.media === "@media (min-width: 901px) and (max-width: 1239px)" && r.selector === ".heroArt")!;
    expect(decl(band.body, "width")).toBe("min(480px, 33%, calc(100% - 60ch - 16px))");
    width = Math.min(480, 0.33 * W, W - LEDE_60CH - 16);
  }
  return { l: W - right - width, r: W - right };
}

/** One tier row's padding box (x) at width W. */
function row(W: number) {
  if (W <= 1239) {
    // Stacked: the rail spans the hero inside its 32px gutters, no left border.
    expect(at(".heroGrid", BAND)).toMatch(/padding-inline:\s*32px/);
    return { l: 32, r: W - 32, padLeft: px(decl(at(".tierRow", BAND), "padding-left")) };
  }
  const frame = Math.min(W, 1360);
  const inner = frame - 80;
  const railLeft = (W - frame) / 2 + 40 + (inner * 1.3) / 2.3;
  const pad = decl(at(".tierRow", null), "padding")!.split(/\s+/).map(px);
  return { l: railLeft + 1, r: (W - frame) / 2 + frame - 40, padLeft: pad[3] };
}

/** The bar's box (x) at width W under a given .tierBar rule (and its band override). */
function bar(W: number, rule: string, bandRule: string) {
  const r = row(W);
  if (decl(rule, "position") === "absolute") {
    const left = px(W <= 1239 ? decl(bandRule, "left") ?? decl(rule, "left") : decl(rule, "left"));
    const l = r.l + left;
    return { l, r: l + px(decl(rule, "width")) };
  }
  // In the flow, flex: 1 after the percentage: from the figures' end (dot 10 ·
  // name 92 · count 66 · percentage 40.3 and four 16px gaps, 272.3px from the
  // row's content edge, measured) to the row's end less its margin.
  expect(decl(rule, "flex")).toBe("1");
  return { l: r.l + r.padLeft + 272.3, r: r.r - px(decl(rule, "margin-right")) };
}
const overlaps = (a: { l: number; r: number }, b: { l: number; r: number }) => a.l < b.r && a.r > b.l;

const WIDTHS = Array.from({ length: 2560 - 901 + 1 }, (_, i) => 901 + i);

describe("the tier share bars stay off his portrait at every desktop width", () => {
  const rule = at(".tierBar", null);
  const bandRule = at(".tierBar", BAND);

  it("the bar's box never meets the portrait's, 901–2560px", () => {
    const hits = WIDTHS.filter((W) => overlaps(bar(W, rule, bandRule), portrait(W)));
    expect(hits).toEqual([]);
  });

  it("the measured widths, both bands: 1024, 1240 and 1440 clear the box", () => {
    for (const W of [1024, 1240, 1440]) {
      const b = bar(W, rule, bandRule);
      expect(b.r, `${W}`).toBeLessThan(portrait(W).l);
    }
    // 1240 is the tightest: the dev server measured the bar's end at 854.6
    // and the portrait's box at 870.8.
    expect(portrait(1240).l - bar(1240, rule, bandRule).r).toBeCloseTo(16.2, 0);
  });

  it("it starts under the dot, and spans the dot and the name: 10 + 16 + 92", () => {
    const dot = px(decl(at(".tierDot", null), "width"));
    const gap = px(decl(at(".tierRow", null), "gap"));
    const name = px(decl(at(".tierName", null), "min-width"));
    expect(px(decl(rule, "width"))).toBe(dot + gap + name);
    // Its left is the row's own padding in each band, so it lines up with the dot.
    expect(px(decl(rule, "left"))).toBe(row(1440).padLeft);
    expect(px(decl(bandRule, "left"))).toBe(row(1024).padLeft);
  });

  it("it hangs 8px below the figures' line, inside the row, without changing the row's height", () => {
    expect(decl(at(".tierRow", null), "position")).toBe("relative");
    expect(decl(rule, "position")).toBe("absolute");
    const [padTop, , padBottom] = decl(at(".tierRow", null), "padding")!.split(/\s+/).map(px);
    const count = at(".tierCount", null);
    const countH = px(decl(count, "font-size")) * Number(decl(count, "line-height"));
    const top = decl(rule, "top")!.match(/^calc\(50% \+ ([\d.]+)px\)$/);
    expect(top).not.toBeNull();
    const offset = Number(top![1]);
    expect(offset).toBe((padTop - padBottom) / 2 + countH / 2 + 8);
    // The rows' padding boxes, measured: 72px stacked (1024), 157.1px at 1440.
    for (const H of [72, 157.1]) {
      const countBottom = padTop + (H - padTop - padBottom - countH) / 2 + countH;
      const barTop = H / 2 + offset;
      expect(barTop - countBottom, `${H}`).toBeCloseTo(8, 6);
      expect(barTop + px(decl(rule, "height")), `${H}: inside the row`).toBeLessThanOrEqual(H - 8);
    }
  });

  it("negative control: the rule #488 shipped crosses the portrait at 1024, 1240 and 1440", () => {
    // certifications.module.css on main (c4280e6e), verbatim.
    const SHIPPED = `flex: 1;
  min-width: 0;
  display: block;
  height: 2px;
  margin-right: 24px;
  background: var(--bg-soft-2);`;
    for (const W of [1024, 1240, 1440]) expect(overlaps(bar(W, SHIPPED, ""), portrait(W)), `${W}`).toBe(true);
    // …by what the dev server measured (the bar's end less the box's start).
    expect(bar(1440, SHIPPED, "").r - portrait(1440).l).toBeCloseTo(1336 - 1004.8, 0);
    expect(bar(1024, SHIPPED, "").r - portrait(1024).l).toBeGreaterThan(0);
  });
});
