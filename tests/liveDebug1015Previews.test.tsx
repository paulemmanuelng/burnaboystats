// @vitest-environment node
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { all, tree, type Node } from "./fixtures/ogTree";
import { statBoxes, HIGHLIGHT } from "../app/data/africasBiggest";
import { ogId } from "../app/lib/og-image";
import { FIGURE_ART } from "../app/lib/og-figure";
import { africaBoards, boardsHeLeads } from "../app/lib/africaBoards";
import Image, { generateImageMetadata } from "../app/records/africas-biggest/opengraph-image";

/**
 * The live debug pass of 15 Oct 2026, previews lane. PV-01: the
 * /records/africas-biggest link preview said "Burna Boy led 2024 & 2025"
 * while its own board shows 2022 as his too ("3 of 4 yrs"). The negative
 * control is the card origin/main (51ad46b1) served.
 *
 * The card went figure first on the same day (#10, Paul "yes"): the years
 * now sit under the boards he leads, on the board's own title, "Most-streamed
 * African artist on Spotify in …", and the id is the figure cards' fold.
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

const ROUTE = "app/records/africas-biggest/opengraph-image.tsx";
const SHIPPED_SUB = "Spotify's biggest African artists — Burna Boy led 2024 & 2025";

/** The closed years he topped, read straight from the board's rows. */
const yearsHeLed = () => {
  const box = statBoxes.find((b) => b.layout === "year" && b.id === "most-streamed-african-artist")!;
  return box.rows!.filter((r) => !r.inProgress && r.entries[0]?.name === HIGHLIGHT).map((r) => r.label!).sort();
};
/** The years a line names. */
const yearsIn = (s: string) => [...s.matchAll(/\b20\d\d\b/g)].map((m) => m[0]);
/** The card's years line: the board's title, then "in {years}" on the line under it. */
const YEARS_LINE = "MOST-STREAMED AFRICAN ARTIST ON SPOTIFY";
const yearsLine = (text: string[]) => {
  const i = text.indexOf(YEARS_LINE);
  return i < 0 ? "" : `${text[i]} ${text[i + 1]}`;
};

async function cardText(): Promise<string[]> {
  const before = drawn.length;
  await Image();
  expect(drawn.length).toBe(before + 1);
  return all(tree(drawn[before] as never) as Node).flatMap((n) => n.text);
}

describe("PV-01: the /records/africas-biggest preview names the years the board gives him", () => {
  const box = statBoxes.find((b) => b.id === "most-streamed-african-artist")!;

  it("the board: 2022, 2024 and 2025 are closed years he topped; the running year is not counted", () => {
    expect(yearsHeLed()).toEqual(expect.arrayContaining(["2022", "2024", "2025"]));
    const running = box.rows!.filter((r) => r.inProgress).map((r) => r.label!);
    expect(running.length).toBeGreaterThan(0);
    for (const y of running) expect(yearsHeLed()).not.toContain(y);
  });

  it("the card's years line names exactly those years, as 'A, B & C'", async () => {
    const line = yearsLine(await cardText());
    const ys = yearsHeLed();
    expect(yearsIn(line)).toEqual(ys);
    expect(line).toBe(`${YEARS_LINE} IN ${ys.slice(0, -1).join(", ")} & ${ys.at(-1)}`);
  });

  it("the URL moves with the text: the id folds the years the card draws", async () => {
    const ys = yearsHeLed();
    const board = africaBoards.find((b) => b.id === "most-streamed-african-artist")!;
    const folded = `${board.title} on Spotify in ${ys.slice(0, -1).join(", ")} & ${ys.at(-1)}`;
    expect(yearsLine(await cardText())).toBe(folded.toUpperCase());
    const [meta] = generateImageMetadata();
    expect(meta.id).toBe(ogId([FIGURE_ART, String(boardsHeLeads), `of ${africaBoards.length} boards he leads`, folded].join("|")));
    expect(meta.id).not.toBe(ogId(["Africa's Biggest", "Most-streamed, by year", SHIPPED_SUB].join("|")));
  });

  it("the route types no year: the list is read from the board", () => {
    const src = readFileSync(ROUTE, "utf8").replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");
    expect(src).not.toMatch(/\b20\d\d\b/);
  });

  it("negative control: the card origin/main served left 2022 out", () => {
    expect(yearsIn(SHIPPED_SUB)).toEqual(["2024", "2025"]);
    expect(yearsIn(SHIPPED_SUB)).not.toEqual(yearsHeLed());
    expect(SHIPPED_SUB).toMatch(/\b20\d\d\b/);
  });
});
