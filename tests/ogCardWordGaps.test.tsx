// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { ogImage, ogLadder, OG_ART } from "../app/lib/og-image";
import { ogFonts } from "../app/lib/og-lockup";
import { kernLookupCount } from "../app/lib/unkernedFont";

/**
 * Design review C-03, 8 Oct 2026: the plain link-preview card — lib/og-image's
 * ogImage(), drawn by 33 routes, and its ladder variant drawn by the two
 * box-office routes — printed double word gaps over strings with one plain
 * space each: "Verified␣␣figures" on /press, "unverified␣␣claims" on
 * /methodology, "certifications,␣␣tours" on /faq, "verified␣␣and maintained"
 * on /curator. The stat cards were fixed for the same bug on 6 Oct
 * (tests/statCardWordGaps.test.tsx); these two templates still handed the
 * renderer the stock, kerned Geist.
 *
 * Every ImageResponse is recorded, so the test reads the fonts the two cards
 * really hand the renderer.
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

function fontsOf(draw: () => unknown): Fonts {
  const before = drawn.length;
  draw();
  expect(drawn.length).toBe(before + 1);
  return drawn[before].fonts as Fonts;
}

/** The literal sub lines the four cards shipped (read from their routes). */
const sub = (route: string) => {
  const m = readFileSync(join(process.cwd(), "app", route, "opengraph-image.tsx"), "utf8").match(/sub: "([^"]+)"/);
  if (!m) throw new Error(`no literal sub on ${route}`);
  return m[1];
};

/** Where the text's last ink column lands — the probe statCardWordGaps uses.
 *  With " " the words are separate runs placed where Satori MEASURED them;
 *  with a no-break space they are one run placed as DRAWN. */
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

// The pairs the review measured, at the sub line's 34px.
const CASES: [string, string, [string, string]][] = [
  ["/press", "press", ["Verified", "figures"]],
  ["/methodology", "methodology", ["unverified", "claims"]],
  ["/faq", "faq", ["certifications,", "tours"]],
  ["/curator", "curator", ["verified", "and"]],
];

const LADDER = {
  kicker: "Box office",
  title: "Highest-grossing shows",
  big: "$6,147,209",
  bigHis: true,
  bigCap: "one night",
  graphTitle: "Top shows",
  rows: [{ label: "Burna Boy · London Stadium", w: 1, his: true }],
  path: "/records/tours/revenue",
  foot: "TouringData",
};

describe("the plain and ladder link-preview cards' word gaps (C-03)", () => {
  it("both shared templates draw in the site's card fonts with Geist's kerning off — same families, same order", () => {
    for (const [name, draw] of [
      ["ogImage", () => ogImage({ kicker: "Press & data kit", title: "Cite the numbers", sub: sub("press") })],
      ["ogLadder", () => ogLadder(LADDER)],
    ] as const) {
      const fonts = fontsOf(draw);
      expect(fonts, `${name} hands the renderer no font list`).toBeDefined();
      expect(fonts!.map((f) => f.name)).toEqual(ogFonts.map((f) => f.name));
      const geist = fonts!.find((f) => f.name === "geist")!.data;
      expect(kernLookupCount(geist), `${name} still draws in the kerned Geist`).toBe(0);
      // Not vacuous: the stock Geist kerns, and only the kerning changed.
      expect(kernLookupCount(ogFonts.find((f) => f.name === "geist")!.data)).toBeGreaterThan(0);
      expect(geist.length).toBe(ogFonts.find((f) => f.name === "geist")!.data.length);
    }
  });

  it.each(CASES)("%s: the word after the gap sits where it is drawn", async (_, route, words) => {
    // The pair is really on the card, as one plain space.
    expect(sub(route)).toContain(words.join(" "));
    const fonts = fontsOf(() => ogImage({ kicker: "k", title: "t", sub: sub(route) }));
    expect(await drift(words, 34, fonts)).toBeLessThanOrEqual(1);
  }, 30000);

  it.each(CASES)("a negative control, %s in the stock (kerned) Geist: the gap opens", async (_, _route, words) => {
    expect(await drift(words, 34, ogFonts)).toBeGreaterThanOrEqual(3);
  }, 30000);

  it("the art version moved, so X and WhatsApp re-fetch the redrawn previews", () => {
    // The key the unkerned drawing replaced (git show origin/main:app/lib/og-image.tsx).
    expect(OG_ART).not.toBe("stat-cards-asof-1");
  });
});
