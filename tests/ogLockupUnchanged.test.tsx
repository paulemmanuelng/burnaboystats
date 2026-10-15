// @vitest-environment node
import { createElement } from "react";
import { all, foot, lockupWrapper, tree, type Node } from "./fixtures/ogTree";
import { OgLockup } from "../app/lib/og-lockup";

/**
 * ogLockupUnchanged (Job 6, design review 8 Oct 2026, fix 127): a
 * figure-first link preview changes its body only. Each one keeps the plain
 * card's lockup and tagline at top 46 / left 90 and its 26px
 * "BURNABOYSTATS.COM" foot at bottom 50 / left 90, exactly as ogImage draws
 * them. The ladder and bespoke cards are out of scope.
 *
 * The twelve plain routes are in CARDS; the root card is in ROOT_CARDS, with
 * its own 46/64 frame and no foot (C-2).
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

/** The tree a draw hands the renderer. */
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
  ["/records/tours/map", async () => (await import("../app/records/tours/map/opengraph-image")).default()],
  ["/records/tours", async () => (await import("../app/records/tours/opengraph-image")).default()],
  ["/records/tours/festivals", async () => (await import("../app/records/tours/festivals/opengraph-image")).default()],
  ["/dai-dai/es", async () => (await import("../app/dai-dai/es/opengraph-image")).default()],
  ["/music/listeners", async () => (await import("../app/music/listeners/opengraph-image")).default()],
  ["/music", async () => (await import("../app/music/opengraph-image")).default()],
  ["/live-charts", async () => (await import("../app/live-charts/opengraph-image")).default()],
];

/** The root card keeps its own frame as built (fix 127, C-2): 46/64, footless. */
const ROOT_CARDS: [string, () => Promise<unknown>][] = [
  ["/", async () => (await import("../app/opengraph-image")).default()],
];

/** The frame ogImage draws today, read off its own tree. */
async function plainFrame() {
  const { ogImage } = await import("../app/lib/og-image");
  const t = await treeOf(() => ogImage({ kicker: "k", title: "t", sub: "s" }));
  return { lockup: lockupWrapper(t)[0].style, foot: foot(t)[0].style };
}

const LOCKUP = { position: "absolute", top: 46, left: 90 };
const FOOT = { position: "absolute", bottom: 50, left: 90, fontSize: 26, color: "#9b9ba3", letterSpacing: 5 };

/** Does a lockup wrapper's style put it at 46/90? */
const at4690 = (s: Record<string, unknown>) => s.position === "absolute" && s.top === 46 && s.left === 90;

describe("ogLockupUnchanged: the lockup, tagline and foot are the plain card's", () => {
  it("ogImage itself still draws them where fix 127 says", async () => {
    const f = await plainFrame();
    expect(f.lockup).toMatchObject(LOCKUP);
    expect(f.foot).toMatchObject(FOOT);
  });

  it("the figure frame: plain is ogImage's lockup and foot; root is the root card's 46/64, footless (C-2)", async () => {
    const { figureFrame } = await import("../app/lib/og-figure");
    const f = await plainFrame();
    const plain = tree(figureFrame(createElement("div", { style: { display: "flex" } })));
    expect(lockupWrapper(plain).map((n) => n.style)).toEqual([f.lockup]);
    expect(foot(plain).map((n) => n.style)).toEqual([f.foot]);
    const root = tree(figureFrame(createElement("div", { style: { display: "flex" } }), "root"));
    // app/opengraph-image.tsx:27 on main, verbatim: the root card's own wrapper.
    expect(lockupWrapper(root).map((n) => n.style)).toEqual([{ position: "absolute", top: 46, left: 64, display: "flex" }]);
    expect(foot(root)).toEqual([]);
  });

  it.each(CARDS)("%s", async (_route, draw) => {
    const t = await treeOf(draw);
    const wrappers = lockupWrapper(t);
    expect(wrappers).toHaveLength(1);
    expect(at4690(wrappers[0].style)).toBe(true);
    const f = await plainFrame();
    expect(wrappers[0].style).toEqual(f.lockup);
    // The stock lockup: no height of its own, so the tagline is unchanged.
    const lockup = wrappers[0].kids.find((k) => k.type === OgLockup)!;
    expect(lockup.props.h).toBeUndefined();
    const feet = foot(t);
    expect(feet).toHaveLength(1);
    expect(feet[0].style).toEqual(f.foot);
    expect(all(t).filter((n) => n.type === OgLockup)).toHaveLength(1);
  });

  it.each(ROOT_CARDS)("%s keeps the root card's own frame: lockup at 46/64, no foot", async (_route, draw) => {
    const t = await treeOf(draw);
    const wrappers = lockupWrapper(t);
    expect(wrappers.map((w) => w.style)).toEqual([{ position: "absolute", top: 46, left: 64, display: "flex" }]);
    const lockup = wrappers[0].kids.find((k) => k.type === OgLockup)!;
    expect(lockup.props.h).toBeUndefined();
    expect(foot(t)).toEqual([]);
    expect(all(t).filter((n) => n.type === OgLockup)).toHaveLength(1);
  });

  it("negative controls: the root card's and the ladder's 46/64 wrappers are not 46/90", () => {
    // app/opengraph-image.tsx:27 and og-image.tsx:122, verbatim.
    for (const style of [
      { position: "absolute", top: 46, left: 64, display: "flex" },
      { position: "absolute", top: 46, left: 64, display: "flex" },
    ]) {
      const t = tree(createElement("div", null, createElement("div", { style }, createElement(OgLockup))));
      expect(at4690(lockupWrapper(t)[0].style)).toBe(false);
    }
  });
});
