// @vitest-environment node
import { describe, it, expect, afterEach } from "vitest";
import sharp from "sharp";
import Image from "../app/afrobeats/[artist]/charts/opengraph-image";

/**
 * Design review B-20, 8 Oct 2026: Rema's chart share card cut off its second
 * row of "#1" chips. The chip box is capped at two rows (64px + 12px + 64px,
 * seo-19), but each chip was drawn to its content — a flag glyph, 26px type
 * and 12px of padding — and came out about 66px, so the cap sliced the second
 * row's bottom border off at y≈370 (og/rema-charts.png in the review).
 *
 * Read off the rendered card: the second row's first chip ("#1 Nigeria") must
 * show its bottom border, with room under it before the stat tiles. The
 * twemoji the flags fetch from jsDelivr are answered here with a plain square,
 * so the test needs no network and still draws a flag in every chip.
 */
const realFetch = globalThis.fetch;
afterEach(() => {
  globalThis.fetch = realFetch;
});

const FLAG_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><rect width="36" height="36" fill="#777"/></svg>';

async function card(slug: string) {
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input instanceof Request ? input.url : input);
    if (/twemoji|jsdelivr/.test(url)) return new Response(FLAG_SVG, { headers: { "Content-Type": "image/svg+xml" } });
    return realFetch(input as never, init as never);
  }) as typeof fetch;
  const res = await Image({ params: Promise.resolve({ artist: slug }) });
  return sharp(Buffer.from(await res.arrayBuffer())).raw().toBuffer({ resolveWithObject: true });
}

/** Rows (y) where column x is gold-ish: the chips' #ffb627 borders. */
function goldRows({ data, info }: Awaited<ReturnType<typeof card>>, x: number, from: number, to: number) {
  const ys: number[] = [];
  for (let y = from; y < to; y++) {
    const i = (y * info.width + x) * info.channels;
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    if (r > 150 && g > 100 && b < 90 && r - b > 100) ys.push(y);
  }
  return ys;
}

/** Group consecutive ys into runs: one run per horizontal border crossed. */
const runs = (ys: number[]) => ys.reduce<number[][]>((acc, y) => {
  const last = acc.at(-1);
  if (last && y - last.at(-1)! <= 1) last.push(y);
  else acc.push([y]);
  return acc;
}, []);

describe("B-20: the board chart card keeps both rows of chips whole", () => {
  it("Rema: the second row's chips show their bottom border, with room before the stat tiles", async () => {
    const img = await card("rema");
    // x=150 runs down through "#1 Belgium" (row 1) and "#1 Nigeria" (row 2),
    // clear of the flag and the text. Between the title and the tiles it must
    // cross four horizontal borders: each row's top and bottom.
    const crossings = runs(goldRows(img, 150, 215, 395));
    expect(crossings.length, `gold borders at ${JSON.stringify(crossings.map((r) => r[0]))}`).toBe(4);
    const bottom = crossings[3].at(-1)!;
    // The stat tiles' boxes start below; nothing gold or bordered in between.
    expect(bottom).toBeLessThan(380);
  }, 60000);
});
