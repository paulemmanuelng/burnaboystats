// @vitest-environment node
import { readFileSync } from "node:fs";
import { body, texts, tree, type Node } from "./fixtures/ogTree";
import { FIG } from "../app/lib/og-figure";
import { ogImage } from "../app/lib/og-image";
import { totalWins, totalNominations, ceremonyCount } from "../app/data/awards";
import { africaBoards, boardsHeLeads } from "../app/lib/africaBoards";

/**
 * #10 of the live debug of 15 Oct 2026 (PV-04, Paul: "yes to all"). The
 * /records/awards and /records/africas-biggest link previews were still the
 * old text cards (kicker, Geist title, the figures in a small grey sentence).
 * Now they are figure first, like Job 6's thirteen routes: the page's own
 * figures large in Anton, read from the data, gold because they are his,
 * under labels that say what each counts, in the plain card's frame (the
 * suites ogLockupUnchanged, ogMinText28, ogPreviewBudget, ogFigureArtVersion
 * and ogFigureCards' typed-figure guard carry both routes too).
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

const printing = (t: Node, text: string) => body(t).filter((n) => n.text.join("") === text);
const colourOf = (t: Node, text: string) => printing(t, text).map((n) => n.style.color);
const anton = (t: Node) => body(t).filter((n) => n.style.fontFamily === "Anton");
/** The plain text card's body: its kicker, title and sub, the old card's shape. */
const isTextCard = (t: Node) => anton(t).length === 0;

const awards = () => treeOf(async () => (await import("../app/records/awards/opengraph-image")).default());
const biggest = () => treeOf(async () => (await import("../app/records/africas-biggest/opengraph-image")).default());

describe("#10: /records/awards and /records/africas-biggest previews are figure first", () => {
  it("/records/awards: wins, nominations and award bodies, one row, gold, from the data", async () => {
    const t = await awards();
    const [w, n, c] = [totalWins, totalNominations, ceremonyCount].map((x) => x.toLocaleString("en-US"));
    expect(texts(body(t))).toEqual([w, "WINS", n, "NOMINATIONS", c, "AWARD BODIES"]);
    for (const v of [w, n, c]) expect(colourOf(t, v), v).toEqual([FIG.gold]);
    // One size for the three: a slot sized for the longest value.
    expect(new Set(anton(t).map((x) => x.style.fontSize)).size).toBe(1);
    expect(anton(t).map((x) => x.text.join(""))).toEqual([w, n, c]);
  });

  it("/records/africas-biggest: the boards he leads of all the boards, gold, then the years he topped the by-year board", async () => {
    const t = await biggest();
    const lines = texts(body(t));
    expect(lines.slice(0, 2)).toEqual([String(boardsHeLeads), `OF ${africaBoards.length} BOARDS HE LEADS`]);
    expect(colourOf(t, String(boardsHeLeads))).toEqual([FIG.gold]);
    // The page's own count (its hero's "He leads … of … boards"): the boards he tops, of all of them.
    expect(boardsHeLeads).toBe(africaBoards.filter((b) => b.leads).length);
    expect(africaBoards.length).toBeGreaterThan(boardsHeLeads);
    // The by-year board's closed years he topped, on a line of their own.
    const board = africaBoards.find((b) => b.id === "most-streamed-african-artist")!;
    const ys = board.years!.filter((y) => y.his && !y.inProgress).map((y) => y.label).sort();
    expect(lines.slice(2)).toEqual([`${board.title} on Spotify`.toUpperCase(), `IN ${ys.slice(0, -1).join(", ")} & ${ys.at(-1)}`]);
    for (const l of lines.slice(2)) expect(colourOf(t, l)).toEqual([FIG.body]);
  });

  it("neither route draws the old text card any more", async () => {
    expect(isTextCard(await awards())).toBe(false);
    expect(isTextCard(await biggest())).toBe(false);
    for (const f of ["app/records/awards/opengraph-image.tsx", "app/records/africas-biggest/opengraph-image.tsx"]) {
      const src = readFileSync(f, "utf8");
      expect(src, f).toMatch(/ogFigureCard\(/);
      expect(src, f).toMatch(/ogFigureVersions\(/);
      expect(src, f).not.toMatch(/\bogImage\(|\bogVersions\(/);
    }
  });

  it("negative control: the cards origin/main served were text cards with the figures in their sub", async () => {
    // app/records/awards/opengraph-image.tsx and app/records/africas-biggest/
    // opengraph-image.tsx on origin/main (a9574c64), their cards verbatim.
    const shipped = [
      {
        kicker: "Every win, every nod",
        title: "Awards & Nominations",
        sub: `${totalWins} wins from ${totalNominations} nominations across ${ceremonyCount} award bodies worldwide`,
      },
      { kicker: "Africa's Biggest", title: "Most-streamed, by year", sub: "Spotify's biggest African artists — Burna Boy led 2022, 2024 & 2025" },
    ];
    for (const card of shipped) {
      const t = await treeOf(() => ogImage(card));
      expect(isTextCard(t), card.title).toBe(true);
      expect(texts(body(t))).not.toContain(String(totalWins));
      expect(texts(body(t))).not.toContain(String(boardsHeLeads));
    }
  });
});
