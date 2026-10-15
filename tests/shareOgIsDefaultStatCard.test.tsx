// @vitest-environment node
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { body, foot, lockupWrapper, texts, tree, all, type Node } from "./fixtures/ogTree";
import { getStatCards } from "../app/lib/statCards";
import { ogId } from "../app/lib/og-image";
import { FIGURE_ART } from "../app/lib/og-figure";

/**
 * shareOgIsDefaultStatCard (J6-5, design review 8 Oct 2026, fix 123 (b)):
 * /share's own link preview is the default stat card, re-laid at 1200 x 630,
 * not cropped: the card's figure, label and source on the left as slots, the
 * portrait on the right, inside the plain card's lockup and foot. It was the
 * plain "By the numbers / Stat Cards" card, which showed no figure at all.
 * Only /share draws it.
 */

const drawn = vi.hoisted(() => [] as unknown[]);
const portrait = vi.hoisted(() => ({ value: "data:image/png;base64,AAAA" as string | null }));
vi.mock("next/og", () => ({
  ImageResponse: class {
    constructor(el: unknown) {
      drawn.push(el);
      return new Response("");
    }
  },
}));
vi.mock("../app/lib/onThisDayImages", async (orig) => ({
  ...(await orig<typeof import("../app/lib/onThisDayImages")>()),
  loadPortrait: async () => portrait.value,
}));

const card = getStatCards()[0];

async function treeOf(draw: () => unknown): Promise<Node> {
  const before = drawn.length;
  await draw();
  expect(drawn.length).toBe(before + 1);
  return tree(drawn[before] as never);
}
const shareTree = async () => treeOf(async () => (await import("../app/share/opengraph-image")).default());

/** What a body prints: each text block's lines joined with a space. */
function blocks(t: Node) {
  const b = body(t);
  // A block is a node whose children are all text lines (or that prints itself).
  const lineGroups = b.filter((n) => n.kids.length > 0 && n.kids.every((k) => k.text.length > 0 && k.kids.length === 0));
  const inGroup = new Set(lineGroups.flatMap((g) => g.kids));
  const singles = b.filter((n) => n.text.join("").trim() !== "" && !inGroup.has(n));
  return [...singles.map((n) => n.text.join("")), ...lineGroups.map((g) => g.kids.map((k) => k.text.join("")).join(" "))];
}

describe("shareOgIsDefaultStatCard: /share's preview is the default card, re-laid", () => {
  it("prints the default card's figure, label and source, and nothing else", async () => {
    portrait.value = "data:image/png;base64,AAAA";
    const t = await shareTree();
    expect(blocks(t).sort()).toEqual([card.value, card.label.toUpperCase(), card.source.toUpperCase()].sort());
    // …and every line it prints is a piece of those, so nothing typed rides along.
    const printed = `${card.value} ${card.label.toUpperCase()} ${card.source.toUpperCase()}`;
    for (const line of texts(body(t))) expect(printed).toContain(line);
  });

  it("the figure is Anton, in gold, the largest type on the card", async () => {
    const t = await shareTree();
    const fig = body(t).find((n) => n.text.join("") === card.value)!;
    expect(fig.style.fontFamily).toBe("Anton");
    expect(fig.style.color).toBe("#ffb627");
    const sizes = body(t).map((n) => Number(n.style.fontSize ?? 0));
    expect(Number(fig.style.fontSize)).toBe(Math.max(...sizes));
    expect(Number(fig.style.fontSize)).toBeLessThanOrEqual(220);
  });

  it("the portrait sits on the right, full height; with none, the card draws without it", async () => {
    portrait.value = "data:image/png;base64,AAAA";
    let t = await shareTree();
    const imgs = all(t).filter((n) => n.type === "img");
    expect(imgs.map((n) => n.props.src)).toEqual([portrait.value]);
    expect(imgs[0].style).toMatchObject({ position: "absolute", right: 0, top: 0, height: 630 });
    expect(Number(imgs[0].style.width)).toBeLessThanOrEqual(1200 - 620);
    portrait.value = null;
    t = await shareTree();
    expect(all(t).filter((n) => n.type === "img")).toEqual([]);
    expect(blocks(t)).toContain(card.value);
    expect(lockupWrapper(t)).toHaveLength(1);
    expect(foot(t)).toHaveLength(1);
  });

  it("its id folds FIGURE_ART and the three strings it prints", async () => {
    const { generateImageMetadata, alt } = await import("../app/share/opengraph-image");
    const [meta] = generateImageMetadata();
    expect(meta.id).toBe(ogId([FIGURE_ART, "share", card.value, card.label, card.source].join("|")));
    expect(alt).toBe("Make a Burna Boy Stat Card — Download & Share the Numbers");
  });

  it("only /share draws the default stat card into its preview", () => {
    const routes: string[] = [];
    const walk = (dir: string) => {
      for (const e of readdirSync(dir)) {
        const p = join(dir, e);
        if (statSync(p).isDirectory()) walk(p);
        else if (e === "opengraph-image.tsx") routes.push(p);
      }
    };
    walk(join(process.cwd(), "app"));
    const both = routes.filter((f) => {
      const s = readFileSync(f, "utf8");
      return /\bloadPortrait\b/.test(s) && /\bgetStatCards\b/.test(s);
    });
    expect(both.map((f) => f.slice(process.cwd().length + 1))).toEqual(["app/share/opengraph-image.tsx"]);
  });

  it("negative control: the shipped plain card carries no figure from the default card", async () => {
    // share/opengraph-image.tsx on e85e6efe, lines 6–10, verbatim.
    const { ogImage } = await import("../app/lib/og-image");
    const shipped = { kicker: "By the numbers", title: "Stat Cards", sub: "Pick a Burna Boy record and download a card built for sharing" };
    const t = await treeOf(() => ogImage(shipped));
    expect(texts(body(t))).not.toContain(card.value);
    expect(texts(body(t))).toContain("Stat Cards");
  });
});
