// @vitest-environment node
import { body, texts, tree, type Node } from "./fixtures/ogTree";
import { allPairs, canonicalPair, pairCopy, pairSlug } from "../app/lib/comparePairs";
import { monoWidth, wrapLines } from "../app/lib/ogFit";
import { BODY, MONO_SIZE, MONO_TRACK } from "../app/lib/og-figure";
import { pairVerdict, pairUnits, verdictLine, VERDICT_TRACKS } from "../app/lib/ogPairCard";

/**
 * #12 of the live debug of 15 Oct 2026 (PV-06, Paul: "yes to all"). The pair
 * link preview's small verdict line was the page's own sentence (pairCopy's
 * sub): "{lead} leads by at least {n} · {a} vs {b} certified units ·
 * {scope}". The two totals are already printed large above it, so it
 * repeated them and wrapped to two lines. The card now has its own verdict,
 * "{lead} leads by at least {n} · {scope}" (e.g. "Wizkid leads by at least
 * 9,993,110 · outside Nigeria"), derived, on one line on every pair card; the
 * page's description and sub are untouched.
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

async function pairTree(pair: string): Promise<Node> {
  const before = drawn.length;
  await (await import("../app/compare/[pair]/opengraph-image")).default({ params: Promise.resolve({ pair }) });
  expect(drawn.length).toBe(before + 1);
  return tree(drawn[before] as never);
}

const WIDTH = BODY.right - BODY.left;
const pairs = allPairs().map(([x, y]) => canonicalPair(x, y));

/** The verdict the ruling reads, re-derived from the comparison. */
function expected(a: (typeof pairs)[number][0], b: (typeof pairs)[number][1]) {
  const copy = pairCopy(a, b);
  const [x, y] = copy.totals;
  if (x === y) return `Level · ${copy.scope}`;
  return `${(x > y ? a : b).name} leads by at least ${(Math.abs(x - y)).toLocaleString("en-US")} · ${copy.scope}`;
}

describe("#12: the pair preview's verdict, on one line", () => {
  it("every pair: who leads, by how much, and the scope; no total repeated", () => {
    expect(pairs.length).toBeGreaterThan(100);
    for (const [a, b] of pairs) {
      const copy = pairCopy(a, b);
      const v = pairVerdict(a, b, copy);
      expect(v, `${a.name} vs ${b.name}`).toBe(expected(a, b));
      for (const total of copy.totals) {
        // A total can only appear as the lead itself, never as itself.
        if (pairUnits(total) !== pairUnits(Math.abs(copy.totals[0] - copy.totals[1]))) expect(v).not.toContain(pairUnits(total));
      }
      expect(v.endsWith(` · ${copy.scope}`)).toBe(true);
    }
  });

  it("every pair: one line inside the body at the 28px floor, at the labels' tracking or the widest tighter step that fits", () => {
    for (const [a, b] of pairs) {
      const { lines, tracking } = verdictLine(pairVerdict(a, b));
      expect(lines, `${a.name} vs ${b.name}`).toHaveLength(1);
      expect(monoWidth(lines[0], MONO_SIZE, tracking)).toBeLessThanOrEqual(WIDTH);
      expect(VERDICT_TRACKS).toContain(tracking);
      // Never tighter than it has to be: the next wider step does not fit.
      const wider = VERDICT_TRACKS[VERDICT_TRACKS.indexOf(tracking as (typeof VERDICT_TRACKS)[number]) - 1];
      if (wider !== undefined) expect(monoWidth(lines[0], MONO_SIZE, wider)).toBeGreaterThan(WIDTH);
    }
    // Some keep the labels' own tracking: Burna Boy vs Wizkid's fits as it is.
    expect(pairs.some(([a, b]) => verdictLine(pairVerdict(a, b)).tracking === MONO_TRACK)).toBe(true);
  });

  it("the cards draw it: Burna Boy vs Wizkid and the pair with the widest verdict, one line, last in the body, at its tracking", async () => {
    const widest = [...pairs].sort(([a, b], [c, d]) => monoWidth(pairVerdict(c, d).toUpperCase(), 28, 2) - monoWidth(pairVerdict(a, b).toUpperCase(), 28, 2))[0];
    for (const [a, b] of [pairs.find(([x, y]) => pairSlug(x, y) === "burna-boy-vs-wizkid")!, widest]) {
      const t = await pairTree(pairSlug(a, b));
      const want = verdictLine(pairVerdict(a, b));
      const lines = texts(body(t));
      expect(lines.at(-1)).toBe(expected(a, b).toUpperCase());
      const node = body(t).find((n) => n.text.join("") === lines.at(-1))!;
      expect(node.style.letterSpacing).toBe(want.tracking);
      expect(node.style.fontSize).toBe(28);
      // The line before it is a column's label, not a second verdict line.
      expect(lines.at(-2)).toMatch(/ · UNITS$/);
    }
  });

  it("the page keeps its own sentence: pairCopy's sub and description still carry both totals", () => {
    for (const [a, b] of pairs.slice(0, 10)) {
      const copy = pairCopy(a, b);
      if (copy.totals[0] === copy.totals[1]) continue;
      expect(copy.sub).toContain(`${pairUnits(copy.totals[0])} vs ${pairUnits(copy.totals[1])} certified units`);
    }
  });

  it("negative control: the verdict origin/main drew repeated both totals and took two lines", () => {
    // app/compare/[pair]/opengraph-image.tsx on origin/main (a9574c64):
    // `const verdict = monoText(copy.sub, PAIR_WIDTH, 2);`
    const [a, b] = pairs.find(([x, y]) => pairSlug(x, y) === "burna-boy-vs-wizkid")!;
    const copy = pairCopy(a, b);
    const shipped = wrapLines(copy.sub.toUpperCase(), "mono", MONO_SIZE, WIDTH, 2, MONO_TRACK);
    expect(shipped).toHaveLength(2);
    expect(shipped.join(" ")).toContain(pairUnits(copy.totals[0]));
    expect(shipped.join(" ")).toContain(pairUnits(copy.totals[1]));
    expect(shipped.join(" ")).not.toBe(expected(a, b).toUpperCase());
  });
});
