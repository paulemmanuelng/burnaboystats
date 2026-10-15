// @vitest-environment node
import { createElement } from "react";
import { body, fontSizes, tree, type Node } from "./fixtures/ogTree";

/**
 * ogMinText28 (Job 6, design review 8 Oct 2026, fixes 127 and 128): no text
 * in a figure-first preview's BODY is under 28px at full size. The lockup's
 * tagline (about 5.5px) and the 26px foot are the frame, unchanged, so they
 * are not the body.
 *
 * The thirteen redrawn routes are in CARDS.
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

const CARDS: [string, () => Promise<unknown>][] = [
  ["/updates", async () => (await import("../app/updates/opengraph-image")).default()],
  ["/certifications", async () => (await import("../app/certifications/opengraph-image")).default()],
  ["/records/charts", async () => (await import("../app/records/charts/opengraph-image")).default()],
  ["/compare/burna-boy-vs-wizkid", async () => (await import("../app/compare/[pair]/opengraph-image")).default({ params: Promise.resolve({ pair: "burna-boy-vs-wizkid" }) })],
  ["/compare/black-sherif-vs-tiwa-savage", async () => (await import("../app/compare/[pair]/opengraph-image")).default({ params: Promise.resolve({ pair: "black-sherif-vs-tiwa-savage" }) })],
  ["/compare/in/united-kingdom", async () => (await import("../app/compare/in/[country]/opengraph-image")).default({ params: Promise.resolve({ country: "united-kingdom" }) })],
  ["/compare/in/colombia", async () => (await import("../app/compare/in/[country]/opengraph-image")).default({ params: Promise.resolve({ country: "colombia" }) })],
  ["/", async () => (await import("../app/opengraph-image")).default()],
  ["/records/tours/map", async () => (await import("../app/records/tours/map/opengraph-image")).default()],
  ["/records/tours", async () => (await import("../app/records/tours/opengraph-image")).default()],
  ["/records/tours/festivals", async () => (await import("../app/records/tours/festivals/opengraph-image")).default()],
  ["/dai-dai/es", async () => (await import("../app/dai-dai/es/opengraph-image")).default()],
  ["/music/listeners", async () => (await import("../app/music/listeners/opengraph-image")).default()],
  ["/music", async () => (await import("../app/music/opengraph-image")).default()],
  ["/live-charts", async () => (await import("../app/live-charts/opengraph-image")).default()],
];

/** The body's text under 28px. A text node sets its own size: none inherit one. */
const under28 = (root: Node) => fontSizes(body(root)).filter((f) => f.size < 28);
/** Every body node that prints text sets a size: none falls back to the renderer's 16px. */
const unsized = (root: Node) => body(root).filter((n) => n.text.join("").trim() !== "" && n.style.fontSize === undefined);

describe("ogMinText28: the body's smallest text is 28px", () => {
  it.each(CARDS)("%s", async (_route, draw) => {
    const t = await treeOf(draw);
    expect(fontSizes(body(t)).length).toBeGreaterThan(0);
    expect(under28(t)).toEqual([]);
    expect(unsized(t).map((n) => n.text.join(""))).toEqual([]);
  });

  it("negative controls: the Dai Dai card's 18px stat label and the ladder's 13px graph title fail", () => {
    // app/dai-dai/opengraph-image.tsx:139 and og-image.tsx:142, their sizes verbatim.
    for (const [size, text] of [
      [18, "listas"],
      [13, "Top grosses"],
    ] as const) {
      const t = tree(createElement("div", null, createElement("div", { style: { display: "flex", fontSize: size } }, text)));
      expect(under28(t)).toEqual([{ size, text }]);
    }
  });
});
