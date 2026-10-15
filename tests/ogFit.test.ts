// @vitest-environment node
import { antonWidth, fitSize, geistWidth, monoWidth, wrapLines } from "../app/lib/ogFit";
import { cardTextWidth } from "../app/lib/cardTextWidth";

/**
 * The figure-first previews' measuring (lib/ogFit.ts, Job 6): Anton and Space
 * Mono widths from the fonts' own tables, the largest size that fits a slot,
 * and lines broken before the renderer can break them.
 */

describe("ogFit", () => {
  it("measures Anton upper-cased and Space Mono as given, from the fonts the cards load", () => {
    // The plan's measurement of the shipped /compare/fireboy-dml-vs-kizz-daniel
    // title (job6-scratch/widths.mjs, the same font files): 836.9px at 80.
    expect(antonWidth("Fireboy DML vs Kizz Daniel", 80)).toBeCloseTo(836.875, 3);
    expect(antonWidth("fireboy dml vs kizz daniel", 80)).toBe(antonWidth("FIREBOY DML VS KIZZ DANIEL", 80));
    // Space Mono is monospaced: every letter the same advance, tracking after each.
    expect(monoWidth("ABC", 28, 2)).toBeCloseTo(3 * (monoWidth("A", 28) + 2), 6);
  });

  it("fitSize: the cap when it fits, the largest size that fits otherwise, never under the floor", () => {
    expect(fitSize(["251"], 530, 220)).toBe(220);
    const s = fitSize(["Fireboy DML vs Kizz Daniel"], 600, 80);
    expect(antonWidth("Fireboy DML vs Kizz Daniel", s)).toBeLessThanOrEqual(600);
    expect(antonWidth("Fireboy DML vs Kizz Daniel", s + 1)).toBeGreaterThan(600);
    expect(fitSize(["Fireboy DML vs Kizz Daniel"], 10, 80)).toBe(28);
    // A family takes one size: the longest member's.
    expect(fitSize(["1", "47,815,770"], 300, 200)).toBe(fitSize(["47,815,770"], 300, 200));
  });

  it("wrapLines: greedy lines within the box; past the limit, a word-boundary cut with an ellipsis", () => {
    const lines = wrapLines("CERTIFICATIONS ACROSS 27 COUNTRIES", "mono", 28, 530, 2, 2);
    expect(lines).toEqual(["CERTIFICATIONS ACROSS 27", "COUNTRIES"]);
    for (const l of lines) expect(monoWidth(l, 28, 2)).toBeLessThanOrEqual(530);
    const cut = wrapLines("one two three, four five six seven eight nine ten", "mono", 28, 200, 2);
    expect(cut).toHaveLength(2);
    expect(cut[1].endsWith("…")).toBe(true);
    expect(cut[1]).not.toMatch(/[,;:·—]…$/);
    for (const l of cut) expect(monoWidth(l, 28)).toBeLessThanOrEqual(200);
    expect(wrapLines("short", "anton", 80, 1020, 2)).toEqual(["short"]);
  });

  it("Geist, the cards' running face, is measured by the plain cards' own reading (cardTextWidth)", () => {
    const s = "El himno de Shakira y Burna Boy — 37 días como la canción más escuchada del mundo";
    expect(geistWidth(s, 28)).toBe(cardTextWidth(s, 28));
    const lines = wrapLines(s, "geist", 28, 696, 2);
    expect(lines.join(" ")).toBe(s);
    for (const l of lines) expect(geistWidth(l, 28)).toBeLessThanOrEqual(696);
  });
});
