// @vitest-environment node
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { all, tree, type Node } from "./fixtures/ogTree";
import { statBoxes, HIGHLIGHT } from "../app/data/africasBiggest";
import { ogId } from "../app/lib/og-image";
import Image, { generateImageMetadata } from "../app/records/africas-biggest/opengraph-image";

/**
 * The live debug pass of 15 Oct 2026, previews lane. PV-01: the
 * /records/africas-biggest link preview said "Burna Boy led 2024 & 2025"
 * while its own board shows 2022 as his too ("3 of 4 yrs"). The negative
 * control is the card origin/main (51ad46b1) served.
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
/** The years a "led …" clause names. */
const yearsIn = (s: string) => [...(s.match(/led ([\d, &]+)/)?.[1] ?? "").matchAll(/\d{4}/g)].map((m) => m[0]);

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

  it("the card's sub-line names exactly those years, as 'A, B & C'", async () => {
    const sub = (await cardText()).find((t) => t.startsWith("Spotify's biggest African artists"))!;
    const ys = yearsHeLed();
    expect(yearsIn(sub)).toEqual(ys);
    expect(sub).toBe(`Spotify's biggest African artists — Burna Boy led ${ys.slice(0, -1).join(", ")} & ${ys.at(-1)}`);
  });

  it("the URL moves with the text: the id is the drawn card's", async () => {
    const sub = (await cardText()).find((t) => t.startsWith("Spotify's biggest African artists"))!;
    const [meta] = generateImageMetadata();
    expect(meta.id).toBe(ogId(["Africa's Biggest", "Most-streamed, by year", sub].join("|")));
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
