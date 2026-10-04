// @vitest-environment node
import { describe, it, expect } from "vitest";
import { ogLadder } from "../app/lib/og-image";
import Image, { generateImageMetadata } from "../app/records/tours/revenue/countries/opengraph-image";

/**
 * The countries share card (Claude Design round 1, 4 Oct 2026, item 8 and
 * review fix 10) renders through Satori, which lays out flexbox only — a
 * block where it wants flex throws at render time, not at build. Rendered
 * here, in node, the way the route renders it. No flags on it, so it fetches
 * no emoji (tests/ogEmojiFallback.test.ts).
 */
const isPng = (b: Buffer) => b.subarray(0, 4).toString("hex") === "89504e47";

describe("the countries share card", () => {
  it("renders a PNG, with no network", async () => {
    const real = globalThis.fetch;
    const fetched: string[] = [];
    globalThis.fetch = (async (...a: Parameters<typeof fetch>) => {
      fetched.push(String(a[0] instanceof Request ? a[0].url : a[0]));
      return real(...a);
    }) as typeof fetch;
    try {
      const buf = Buffer.from(await Image().arrayBuffer());
      expect(isPng(buf)).toBe(true);
      expect(buf.length).toBeGreaterThan(10000);
      // next/og loads its own wasm and default font from file: and data: URLs;
      // nothing may go over the network (an emoji from the CDN would).
      expect(fetched.filter((u) => /^https?:/.test(u))).toEqual([]);
    } finally {
      globalThis.fetch = real;
    }
  }, 60000);

  it("the split-bar rows render beside the plain ones (the shows card's), and the id is one token", async () => {
    const card = {
      kicker: "k", title: "t", big: "1", bigHis: false, bigCap: "c", graphTitle: "g", path: "/x", foot: "f",
      rows: [
        { label: "United States", note: "Burna Boy", w: 1, his: true, hisShare: 0.576 },
        { label: "Japan", note: "Tyla", w: 0.04, his: false, hisShare: 0 },
        { label: "Burna Boy · London Stadium", w: 1, his: true },
      ],
    };
    expect(isPng(Buffer.from(await ogLadder(card).arrayBuffer()))).toBe(true);
    expect(generateImageMetadata()[0].id).toMatch(/^[a-z0-9]+$/);
  }, 60000);
});
