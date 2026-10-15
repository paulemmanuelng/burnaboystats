// @vitest-environment node
import { body, fontSizes, texts, tree, type Node } from "./fixtures/ogTree";
import { BODY, FIG, FIG_LH, MONO_LINE, MONO_SIZE, MONO_TRACK, monoText } from "../app/lib/og-figure";
import { monoWidth } from "../app/lib/ogFit";
import { certCountryCodes, countryCopy, countrySlug, priceCountry, type CountryBoard } from "../app/lib/certCountry";
import { COUNTRY_COLUMN, countryCard, countryCardTexts, countryFamilySize } from "../app/lib/ogCountryCard";
import { PREVIEW_BYTES } from "../app/lib/onThisDayImages";

/**
 * ogCountryNamesMarket (Paul, 15 Oct 2026: "yes to Job 6", call 2). A
 * /compare/in/<country> link preview showed the market's units, artists,
 * plaques and top three, but not which market (fix 126 and the drawing left
 * it unnamed): "41,420,000 certified units" could be anywhere. It now heads
 * the figure's column with the market's name, one line, from the board's own
 * data (the name the page title prints), in Space Mono at the cards' 28px,
 * ink, the gold card otherwise unchanged and within the preview budget.
 * Checked for every country board, Colombia's "not priceable" one included.
 */

vi.setConfig({ testTimeout: 180_000 });

// The real renderer, with each card's element tree recorded on the way in.
const drawn = vi.hoisted(() => [] as unknown[]);
vi.mock("next/og", async (orig) => {
  const real = (await orig()) as typeof import("next/og");
  class Recording extends real.ImageResponse {
    constructor(...args: ConstructorParameters<typeof real.ImageResponse>) {
      drawn.push(args[0]);
      super(...args);
    }
  }
  return { ...real, ImageResponse: Recording };
});

const boards = certCountryCodes().map((code) => priceCountry(code));
const n = (x: number) => x.toLocaleString("en-US");

/** Each board's preview, rendered once: its tree and its bytes. */
const cards = new Map<string, { t: Node; bytes: number; type: string | null }>();
beforeAll(async () => {
  const route = await import("../app/compare/in/[country]/opengraph-image");
  for (const b of boards) {
    const before = drawn.length;
    const res = await route.default({ params: Promise.resolve({ country: countrySlug(b.code) }) });
    const bytes = (await res.arrayBuffer()).byteLength;
    expect(drawn.length, b.code).toBe(before + 1);
    cards.set(b.code, { t: tree(drawn[before] as never), bytes, type: res.headers.get("content-type") });
  }
});

const linesOf = (b: CountryBoard) => texts(body(cards.get(b.code)!.t));
const nodeOf = (b: CountryBoard, text: string) => body(cards.get(b.code)!.t).filter((x) => x.text.join("") === text);

describe("ogCountryNamesMarket: every country board's preview names its market", () => {
  it("there are boards to check, Colombia's unpriced one among them", () => {
    expect(boards.length).toBeGreaterThanOrEqual(20);
    expect(boards.filter((b) => b.counted === 0).map((b) => b.code)).toContain("CO");
  });

  it.each(boards.map((b) => [b.code, b] as const))("%s: the name is the first line, over the figure, and the page title's", (_code, b) => {
    const lines = linesOf(b);
    const name = b.name.toUpperCase();
    expect(lines[0]).toBe(name);
    expect(lines.filter((l) => l === name)).toHaveLength(1);
    // one line above the figure: then AT LEAST over a priced figure, or the plaques at once
    const figure = b.counted > 0 ? n(b.units) : n(b.plaques);
    expect(lines.slice(1, b.counted > 0 ? 3 : 2)).toEqual(b.counted > 0 ? ["AT LEAST", figure] : [figure]);
    // the same name the page's title prints
    expect(countryCopy(b).title).toContain(b.name);
    // Space Mono at the cards' 28px, ink: not gold, which is his
    const [node] = nodeOf(b, name);
    expect(node.style.fontFamily).toBe("Space Mono");
    expect(node.style.fontSize).toBe(MONO_SIZE);
    expect(node.style.color).toBe(FIG.ink);
    for (const f of fontSizes(body(cards.get(b.code)!.t))) expect(f.size, f.text).toBeGreaterThanOrEqual(28);
  });

  it("every name fits the figure's column on one line, the longest included", () => {
    for (const b of boards) {
      const name = b.name.toUpperCase();
      expect(monoText(b.name, COUNTRY_COLUMN, 1), b.code).toEqual([name]);
      expect(monoWidth(name, MONO_SIZE, MONO_TRACK), b.code).toBeLessThanOrEqual(COUNTRY_COLUMN);
    }
    const names = boards.map((b) => b.name);
    for (const long of ["United Kingdom", "Czech Republic", "United States"]) expect(names).toContain(long);
  });

  it("the figure's column, with the name, still fits the body's 410px", () => {
    const room = BODY.bottom - BODY.top;
    for (const b of boards) {
      const card = countryCard(b);
      const sub = monoText(card.sub, COUNTRY_COLUMN, 2).length;
      const h = MONO_LINE + 12 + (card.over ? MONO_LINE + 2 : 0) + countryFamilySize() * FIG_LH + 8 + MONO_LINE + 12 + sub * MONO_LINE;
      expect(h, b.code).toBeLessThanOrEqual(room);
    }
  });

  it("Colombia still reads: COLOMBIA, its plaques, not priceable, the three by plaques", () => {
    const co = boards.find((b) => b.code === "CO")!;
    const lines = linesOf(co);
    expect(lines.slice(0, 4)).toEqual(["COLOMBIA", n(co.plaques), co.plaques === 1 ? "PLAQUE" : "PLAQUES", "NOT PRICEABLE"]);
    expect(lines).not.toContain("AT LEAST");
  });

  it("the name re-versions the preview: it is in the card's id texts", () => {
    for (const b of boards) expect(countryCardTexts(countryCard(b))[0], b.code).toBe(b.name);
  });

  it("each preview renders as a PNG within the budget", () => {
    for (const b of boards) {
      const c = cards.get(b.code)!;
      expect(c.type, b.code).toBe("image/png");
      expect(c.bytes, b.code).toBeGreaterThan(10_000);
      expect(c.bytes, b.code).toBeLessThanOrEqual(PREVIEW_BYTES);
    }
  });

  it("negative control: main's card began at AT LEAST and never printed the market", () => {
    // app/lib/ogCountryCard.ts on 51ad46b1: countryCardTexts was over, figure,
    // label, sub and the rows, with no name.
    const uk = priceCountry("UK");
    const { name: _name, ...shipped } = countryCard(uk);
    const mainTexts = [shipped.over!, shipped.figure, shipped.label, shipped.sub, ...shipped.rows.flatMap((r) => [`${r.rank} ${r.name}`, r.value])];
    expect(mainTexts[0]).toBe("at least");
    expect(mainTexts.some((t) => t.toUpperCase().includes(uk.name.toUpperCase()))).toBe(false);
  });
});
