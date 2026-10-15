// @vitest-environment node
import { all, tree } from "./fixtures/ogTree";
import { Bar, BODY, BodyBox, FIG, HAIRLINE, Headline, jointRanks, MonoLines, monoText, ROOT_BODY, Strip } from "../app/lib/og-figure";
import { monoWidth } from "../app/lib/ogFit";

/**
 * The figure-first previews' parts (lib/og-figure.tsx, Job 6 · J6-4): the
 * two body boxes, lines drawn one child per line, bars that cannot overrun
 * their track, and places that tie (1, 1, 3) rather than invent an order.
 */

describe("og-figure parts", () => {
  it("the plain body is x 90–1110, y 130–540 (fix 128); the root's lines up with its own lockup at 64 (C-2)", () => {
    expect(BODY).toEqual({ left: 90, right: 1110, top: 130, bottom: 540 });
    expect(ROOT_BODY).toEqual({ left: 64, right: 1136, top: 130, bottom: 540 });
    for (const [frame, b] of [["plain", BODY], ["root", ROOT_BODY]] as const) {
      const el = tree(BodyBox({ frame, children: null }));
      expect(el.style).toMatchObject({ position: "absolute", left: b.left, top: b.top, width: b.right - b.left, height: b.bottom - b.top });
    }
  });

  it("a run of lines is one child per line, each sized", () => {
    const lines = monoText("certifications across 27 countries", 300);
    expect(lines.length).toBe(2);
    for (const l of lines) expect(monoWidth(l, 28, 2)).toBeLessThanOrEqual(300);
    const t = tree(MonoLines({ lines }));
    expect(t.kids.map((k) => k.text.join(""))).toEqual(lines);
    expect(t.kids.every((k) => k.style.fontSize === 28)).toBe(true);
    const h = tree(Headline({ lines: ["ONE", "TWO"], size: 80 }));
    expect(h.kids.map((k) => [k.text.join(""), k.style.fontSize])).toEqual([["ONE", 80], ["TWO", 80]]);
  });

  it("a bar's fill is its share of the track, clamped to 0–100%", () => {
    const fill = (share: number) => tree(Bar({ share, color: FIG.gold })).kids[0].style.width;
    expect(fill(0.5)).toBe("50.00%");
    expect(fill(1.4)).toBe("100.00%");
    expect(fill(-1)).toBe("0.00%");
    expect(all(tree(Bar({ share: 0.5, color: FIG.other }))).map((n) => n.style.background)).toEqual([FIG.track, FIG.other]);
  });

  it("a strip's column is its share of the height, clamped; nothing to draw is the hairline, never a gap", () => {
    const t = tree(Strip({ bars: [{ share: 1, color: FIG.gold }, { share: 0.5, color: FIG.other }, { share: 0, color: FIG.muted }, { share: 2, color: FIG.other }], height: 200, gap: 8, labels: ["a", "b", "c", "d"] }));
    const [row, labels] = t.kids;
    expect(row.kids.map((k) => k.style.height)).toEqual([200, 100, HAIRLINE, 200]);
    expect(row.kids.map((k) => k.style.marginLeft)).toEqual([0, 8, 8, 8]);
    expect(labels.kids.map((k) => [k.text.join(""), k.style.fontSize])).toEqual([["a", 28], ["b", 28], ["c", 28], ["d", 28]]);
    // Negative control: a zero-height column, which a reader cannot see.
    expect(row.kids.every((k) => (k.style.height as number) > 0)).toBe(true);
    expect(tree(Strip({ bars: [{ share: 0, color: FIG.muted }], height: 200, gap: 8 })).kids).toHaveLength(1);
  });

  it("joint places: a tie shares its place and the next skips (1, 1, 3)", () => {
    expect(jointRanks([9, 5, 2])).toEqual([1, 2, 3]);
    expect(jointRanks([4, 4, 2])).toEqual([1, 1, 3]);
    expect(jointRanks([1, 1])).toEqual([1, 1]);
    // Negative control: numbering by position, as the page's table does
    // (CountryBoardView place = i + 1), gives a tie two different places.
    const byPosition = [4, 4, 2].map((_, i) => i + 1);
    expect(byPosition).not.toEqual(jointRanks([4, 4, 2]));
  });
});
