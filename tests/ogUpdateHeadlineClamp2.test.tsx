// @vitest-environment node
import { readFileSync } from "node:fs";
import { body, texts, tree, type Node } from "./fixtures/ogTree";
import { updates } from "../app/data/updates";
import { firstClause } from "../app/lib/bandHeadline";
import { antonWidth, wrapLines } from "../app/lib/ogFit";
import { shortStamp } from "../app/lib/dates";
import { BODY, FIG } from "../app/lib/og-figure";

/**
 * ogUpdateHeadlineClamp2 (Job 6 · J6-4, design review 8 Oct 2026, fix 125,
 * Paul's default (a)): the /updates preview's headline is the newest entry's
 * text up to its first colon or full stop, at most two lines of Anton at 80
 * in the 1020px body, an ellipsis past them, with "{date} · {category}"
 * beneath, the whole body above the foot. The newest entry is computed, never
 * pinned: the feed gains entries every week.
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

const WIDTH = BODY.right - BODY.left;
const clause = (text: string) => firstClause(text, { dash: false });
const stampOf = (u: (typeof updates)[number]) => `${shortStamp(u.date)} · ${u.category}`.toUpperCase();

/** The body's height as drawn: each line's size × line height, plus margins. */
function bodyHeight(t: Node) {
  const box = body(t)[0];
  let h = 0;
  for (const block of box.kids) {
    h += Number(block.style.marginTop ?? 0);
    for (const line of block.kids) h += Number(line.style.fontSize) * Number(line.style.lineHeight);
  }
  return h;
}

/** The longest first clause in the feed, by its drawn width. */
const longest = [...updates].sort((a, b) => antonWidth(clause(b.text), 80) - antonWidth(clause(a.text), 80))[0];

describe("ogUpdateHeadlineClamp2: the newest entry's first clause, two lines at 80", () => {
  it("the card prints the newest entry's first clause, clamped, then its date and category", async () => {
    const t = await treeOf(async () => (await import("../app/updates/opengraph-image")).default());
    const newest = updates[0];
    const lines = wrapLines(clause(newest.text).toUpperCase(), "anton", 80, WIDTH, 2);
    expect(texts(body(t))).toEqual([...lines, stampOf(newest)]);
    expect(lines.length).toBeLessThanOrEqual(2);
    for (const l of lines) expect(antonWidth(l, 80)).toBeLessThanOrEqual(WIDTH);
    // Anton 80 in ink, the stamp in Space Mono 28 under it.
    const [head, stamp] = body(t)[0].kids;
    expect(head.kids.every((k) => k.style.fontFamily === "Anton" && k.style.fontSize === 80 && k.style.color === FIG.ink)).toBe(true);
    expect(stamp.kids.map((k) => [k.style.fontFamily, k.style.fontSize])).toEqual([["Space Mono", 28]]);
    expect(BODY.top + bodyHeight(t)).toBeLessThanOrEqual(BODY.bottom);
  });

  it("the longest real first clause clamps to exactly two lines ending in …, and the body still clears the foot", async () => {
    const lines = wrapLines(clause(longest.text).toUpperCase(), "anton", 80, WIDTH, 2);
    expect(lines).toHaveLength(2);
    expect(lines[1].endsWith("…")).toBe(true);
    expect(lines[1]).not.toMatch(/[,;:·—]…$/);
    for (const l of lines) expect(antonWidth(l, 80)).toBeLessThanOrEqual(WIDTH);
    // Drawn as the newest entry, through the route itself: the feed array is
    // the route's own (one module), put back as it was afterwards.
    const was = [...updates];
    updates.splice(0, updates.length, longest, ...was.filter((u) => u !== longest));
    let t: Node;
    try {
      t = await treeOf(async () => (await import("../app/updates/opengraph-image")).default());
    } finally {
      updates.splice(0, updates.length, ...was);
    }
    expect(updates[0]).toBe(was[0]);
    expect(texts(body(t))).toEqual([...lines, stampOf(longest)]);
    expect(BODY.top + bodyHeight(t)).toBeLessThanOrEqual(BODY.bottom);
  });

  it("negative controls: the shipped card's words are not from the feed; the drawing's placeholder is not in it", () => {
    // updates/opengraph-image.tsx on main, verbatim: the card printed this for
    // every entry the feed ever had.
    const shipped = { title: "Latest Updates", sub: "New chart peaks, certifications & records" };
    expect(shipped.title.toUpperCase()).not.toBe(wrapLines(clause(updates[0].text).toUpperCase(), "anton", 80, WIDTH, 2)[0]);
    expect(updates.some((u) => clause(u.text) === shipped.title)).toBe(false);
    // Sharing.dc.html's length test drew placeholder prose (fix 125).
    const placeholder = "The longest headline in updates.ts";
    expect(readFileSync("app/data/updates.ts", "utf8")).not.toContain(placeholder);
  });
});
