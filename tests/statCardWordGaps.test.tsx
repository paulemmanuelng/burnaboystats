// @vitest-environment node
import { describe, it, expect, vi, afterEach } from "vitest";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { findCard } from "../app/lib/statCards";
import { statCardImage } from "../app/lib/statCardImage";
import { ogFonts } from "../app/lib/og-lockup";
import { kernLookupCount } from "../app/lib/unkernedFont";
import { BURNA_PORTRAIT } from "../app/lib/artistImages";

/**
 * V-core-07, the full-site debug of 5 Oct 2026: the downloadable stat cards
 * (/stat-card, previewed on /share) printed one double-width word gap per
 * line — "CERTIFICATIONS␣␣ACROSS", "FOLLOWERS␣␣—", "BILLBOARD␣␣GLOBAL",
 * "most-certified␣␣African", "most-followed␣␣African" — over strings with
 * one plain space each. The card handed next/og no font list, so it drew in
 * the stock Geist, which Satori measures letter by letter and draws kerned
 * (lib/unkernedFont.ts has the mechanism; the On This Day images were fixed
 * the same way on 26 Sep).
 *
 * Every ImageResponse is recorded here, so the test reads the fonts the card
 * really hands the renderer, not a list it could have used.
 */
const drawn = vi.hoisted(() => [] as { fonts?: { name: string; data: Buffer }[] }[]);
vi.mock("next/og", async (importOriginal) => {
  const actual = await importOriginal<typeof import("next/og")>();
  class Recorded extends actual.ImageResponse {
    constructor(...args: ConstructorParameters<typeof actual.ImageResponse>) {
      super(...args);
      drawn.push((args[1] ?? {}) as (typeof drawn)[number]);
    }
  }
  return { ...actual, ImageResponse: Recorded };
});

type Fonts = typeof ogFonts | undefined;

const realFetch = globalThis.fetch;
afterEach(() => {
  globalThis.fetch = realFetch;
});

/** The fonts one real card is drawn in. No network: the portrait answers a
 *  plain dark square. */
async function cardFonts(id: string, ratio: "square" | "story"): Promise<Fonts> {
  const dark = await sharp({ create: { width: 640, height: 640, channels: 3, background: "#0c0a09" } }).png().toBuffer();
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input instanceof Request ? input.url : input);
    if (url === BURNA_PORTRAIT) return new Response(new Uint8Array(dark), { headers: { "Content-Type": "image/png" } });
    return realFetch(input as never, init as never);
  }) as typeof fetch;
  const card = findCard(id);
  if (!card) throw new Error(`no card ${id}`);
  const before = drawn.length;
  const res = statCardImage(card, ratio);
  await res.arrayBuffer();
  expect(drawn.length).toBe(before + 1);
  return drawn[before].fonts as Fonts;
}

/**
 * Where the text's last ink column lands, laid out as the card lays out a
 * line. With " " each word is its own run, placed where Satori MEASURED the
 * words before it; with a no-break space the words are one run, placed as
 * DRAWN. The two agree only when drawing is measuring — the double space was
 * the difference. (The same probe as tests/onThisDayShareImages.test.tsx.)
 */
async function lastInk(text: string, fontSize: number, fonts: Fonts) {
  const res = new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", padding: 20, background: "#000", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize }}>{text}</div>
      </div>
    ),
    { width: 1400, height: 160, ...(fonts ? { fonts } : {}) },
  );
  const { data, info } = await sharp(Buffer.from(await res.arrayBuffer())).raw().toBuffer({ resolveWithObject: true });
  for (let x = info.width - 1; x >= 0; x--) {
    for (let y = 0; y < info.height; y++) if (data[(y * info.width + x) * info.channels] > 128) return x;
  }
  return -1;
}
const drift = async (words: [string, string], size: number, fonts: Fonts) =>
  Math.abs((await lastInk(words.join(" "), size, fonts)) - (await lastInk(words.join(" "), size, fonts)));

// The five gaps the live cards showed, at the square card's sizes: a label of
// up to 42 characters at 52px (african-giant's 34), up to 64 at 44px
// (followers' 46), longer at 38px (dai-dai's 69); every kicker at 27px. The
// label is set in capitals, so its words are written in capitals here.
const CASES: [string, string, [string, string], number][] = [
  ["african-giant's label", "african-giant", ["CERTIFICATIONS", "ACROSS"], 52],
  ["followers' label", "followers", ["FOLLOWERS", "—"], 44],
  ["dai-dai's label", "dai-dai", ["BILLBOARD", "GLOBAL"], 38],
  ["african-giant's kicker", "african-giant", ["most-certified", "African"], 27],
  ["followers' kicker", "followers", ["most-followed", "African"], 27],
];

describe("the stat cards' word gaps (V-core-07)", () => {
  it("both ratios are drawn in the site's card fonts with Geist's kerning off — the same families, in the same order", async () => {
    for (const ratio of ["square", "story"] as const) {
      const fonts = await cardFonts("african-giant", ratio);
      expect(fonts, `${ratio}: the card hands the renderer no font list, so it draws in the stock, kerned Geist`).toBeDefined();
      expect(fonts!.map((f) => f.name)).toEqual(ogFonts.map((f) => f.name));
      const geist = fonts!.find((f) => f.name === "geist")!.data;
      expect(kernLookupCount(geist)).toBe(0);
      // Not vacuous: the stock Geist kerns, and only the kerning changed.
      expect(kernLookupCount(ogFonts.find((f) => f.name === "geist")!.data)).toBeGreaterThan(0);
      expect(geist.length).toBe(ogFonts.find((f) => f.name === "geist")!.data.length);
    }
  }, 30000);

  it.each(CASES)("%s: the word after the gap sits where it is drawn, not a kerning's width further on", async (_, id, words, size) => {
    const card = findCard(id)!;
    // The pair is really on the card, as one plain space.
    expect(`${card.label} ${card.kicker}`.toUpperCase()).toContain(words.join(" ").toUpperCase());
    expect(await drift(words, size, await cardFonts(id, "square"))).toBeLessThanOrEqual(1);
  }, 30000);

  it.each(CASES)("a negative control, %s in the stock (kerned) Geist: the gap opens", async (_, _id, words, size) => {
    expect(await drift(words, size, ogFonts)).toBeGreaterThanOrEqual(3);
  }, 30000);
});
