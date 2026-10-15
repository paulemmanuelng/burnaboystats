// @vitest-environment node
import { body, texts, tree, type Node } from "./fixtures/ogTree";
import { allPairs, canonicalPair, pairCopy } from "../app/lib/comparePairs";
import { antonWidth, fitSize, wrapLines } from "../app/lib/ogFit";
import { BODY, FIG } from "../app/lib/og-figure";
import { PAIR_COLUMN, PAIR_FIGURE_CAP, pairBodyHeight, pairFamilySize, pairFigureSize } from "../app/lib/ogPairCard";

/**
 * ogLongestPairFits (Job 6 · J6-4, design review 8 Oct 2026, fixes 128 and
 * 129): the pair previews are sized for the longest pair on the board by its
 * drawn Anton width, measured, never a guessed worst case; the title wraps
 * to two lines before anything shrinks; with two title lines the figures
 * step down and the body still ends above the foot; every total fits its
 * column at the one family size. Colour follows the data: his total and bar
 * gold when he is in the pair, the other side ink on the neutral bar; a pair
 * without him has no gold at all. Totals keep "at least"; the verdict is the
 * page's own pairCopy sub.
 */

const drawn = vi.hoisted(() => [] as unknown[]);
vi.mock("next/og", () => ({
  ImageResponse: class {
    constructor(el: unknown) {
      drawn.push(el);
      return new Response("");
    }
  },
}));

async function treeOf(draw: () => unknown): Promise<Node> {
  const before = drawn.length;
  await draw();
  expect(drawn.length).toBe(before + 1);
  return tree(drawn[before] as never);
}

const route = () => import("../app/compare/[pair]/opengraph-image");
const pairTree = async (pair: string) => treeOf(async () => (await route()).default({ params: Promise.resolve({ pair }) }));

const WIDTH = BODY.right - BODY.left;
const COLUMN = PAIR_COLUMN;
const units = (n: number) => n.toLocaleString("en-US");
const pairs = allPairs().map(([x, y]) => canonicalPair(x, y));
const titles = pairs.map(([a, b]) => `${a.name} vs ${b.name}`.toUpperCase());
const longest = [...titles].sort((x, y) => antonWidth(y, 80) - antonWidth(x, 80))[0];
const totals = pairs.flatMap(([a, b]) => pairCopy(a, b).totals.map(units));
const verdictLines = Math.max(...pairs.map(([a, b]) => wrapLines(pairCopy(a, b).sub.toUpperCase(), "mono", 28, WIDTH, 9, 2).length));

/** The colour of each body node that prints `text`. */
const colourOf = (t: Node, text: string) => body(t).filter((n) => n.text.join("") === text).map((n) => n.style.color);
/** The bars: a track with one fill inside, in body order. */
const bars = (t: Node) =>
  body(t)
    .filter((n) => n.style.background === FIG.track && n.kids.length === 1)
    .map((n) => ({ fill: n.kids[0].style.background, width: n.kids[0].style.width }));

describe("ogLongestPairFits: the longest pair, measured, fits", () => {
  it("the longest title by drawn width wraps within two lines at 80, never clamped", () => {
    const lines = wrapLines(longest, "anton", 80, WIDTH, 2);
    expect(lines.length).toBeLessThanOrEqual(2);
    expect(lines.join(" ")).toBe(longest);
    for (const t of titles) expect(wrapLines(t, "anton", 80, WIDTH, 2).join(" "), t).toBe(t);
  });

  it("the body stays inside y 130–540 for the real title lines and for two (fix 128)", () => {
    const room = BODY.bottom - BODY.top;
    const real = wrapLines(longest, "anton", 80, WIDTH, 2).length;
    for (const n of [real, 2]) {
      const fig = pairFigureSize(n, verdictLines);
      expect(fig, `${n} title lines`).toBeGreaterThanOrEqual(28);
      expect(pairBodyHeight(n, verdictLines, fig), `${n} title lines`).toBeLessThanOrEqual(room);
    }
    // Two lines step the figures down; one keeps the family size.
    expect(pairFigureSize(2, verdictLines)).toBeLessThan(pairFigureSize(1, verdictLines));
    expect(verdictLines).toBeLessThanOrEqual(2);
  });

  it("every total on the board fits its column at the one family size", async () => {
    const family = fitSize(totals, COLUMN, PAIR_FIGURE_CAP);
    expect(pairFamilySize()).toBe(family);
    for (const t of totals) expect(antonWidth(t, family), t).toBeLessThanOrEqual(COLUMN);
    // The cards draw that size: one size, the same on every one-line pair card.
    for (const pair of ["burna-boy-vs-wizkid", "black-sherif-vs-tiwa-savage"]) {
      const t = await pairTree(pair);
      const sizes = body(t).filter((n) => n.style.fontFamily === "Anton" && /^[\d,]+$/.test(n.text.join(""))).map((n) => n.style.fontSize);
      expect(sizes, pair).toEqual([family, family]);
    }
  });

  it("a Burna Boy pair: his total and bar gold, the other side ink on the neutral bar (fix 129)", async () => {
    const [a, b] = pairs.find(([x, y]) => x.slug === "burna-boy" && y.slug === "wizkid") ?? pairs.find(([x, y]) => y.slug === "burna-boy" && x.slug === "wizkid")!;
    const copy = pairCopy(a, b);
    const t = await pairTree("burna-boy-vs-wizkid");
    const [his, theirs] = a.slug === "burna-boy" ? [0, 1] : [1, 0];
    expect(colourOf(t, units(copy.totals[his]))).toEqual([FIG.gold]);
    expect(colourOf(t, units(copy.totals[theirs]))).toEqual([FIG.ink]);
    const [first, second] = bars(t);
    expect([first, second][his].fill).toBe(FIG.gold);
    expect([first, second][theirs].fill).toBe(FIG.other);
    // The larger total's bar is full; the other is its share of it.
    const top = Math.max(...copy.totals);
    expect([first, second].map((x) => x.width)).toEqual(copy.totals.map((n) => `${((n / top) * 100).toFixed(2)}%`));
  });

  it("a pair without him: no gold anywhere in the body; totals keep \"at least\"; the verdict is pairCopy's sub", async () => {
    const [a, b] = pairs.find(([x, y]) => `${x.slug}-vs-${y.slug}` === "black-sherif-vs-tiwa-savage")!;
    const copy = pairCopy(a, b);
    const t = await pairTree("black-sherif-vs-tiwa-savage");
    const colours = body(t).flatMap((n) => [n.style.color, n.style.background]).filter(Boolean);
    expect(colours).not.toContain(FIG.gold);
    expect(bars(t).map((x) => x.fill)).toEqual([FIG.other, FIG.other]);
    const lines = texts(body(t));
    expect(lines.filter((l) => l === "AT LEAST")).toHaveLength(2);
    const verdict = wrapLines(copy.sub.toUpperCase(), "mono", 28, WIDTH, 2, 2);
    expect(lines.slice(-verdict.length)).toEqual(verdict);
    expect(verdict.join(" ")).toBe(copy.sub.toUpperCase());
  });

  it("negative control: the drawing's length test, Fireboy DML vs Kizz Daniel, is not the longest pair", () => {
    // Sharing.dc.html drew "Fireboy DML vs Kizz Daniel" as the worst case; the
    // board's longest is wider.
    expect(longest).not.toBe("FIREBOY DML VS KIZZ DANIEL");
    expect(antonWidth(longest, 80)).toBeGreaterThan(antonWidth("Fireboy DML vs Kizz Daniel", 80));
  });
});
