// @vitest-environment node
import sharp from "sharp";
import { PREVIEW_BYTES } from "../app/lib/onThisDayImages";
import { getStatCards } from "../app/lib/statCards";
import { statCardImage } from "../app/lib/statCardImage";

/**
 * ogPreviewBudget (Job 6, design review 8 Oct 2026): every figure-first link
 * preview stays under PREVIEW_BYTES (300 KB) after compactPreview, because a
 * preview dropped for its size may sit in a crawler's cache as "no image".
 * Rendered for real, with every cover from Spotify's image host stubbed as
 * 640 x 640 noise at a photo's grain (blurred at σ 1), the hardest content a
 * photograph gives the encoder. The thirteen redrawn routes are in CARDS.
 */

vi.setConfig({ testTimeout: 60_000 });

let noise: Buffer;
beforeAll(async () => {
  const px = Buffer.alloc(640 * 640 * 3);
  let seed = 12345;
  for (let i = 0; i < px.length; i++) {
    seed = (seed * 1103515245 + 12345) >>> 0;
    px[i] = seed >>> 24;
  }
  noise = await sharp(px, { raw: { width: 640, height: 640, channels: 3 } }).blur(1).png().toBuffer();
  const real = globalThis.fetch;
  vi.stubGlobal("fetch", async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input instanceof Request ? input.url : input);
    if (url.startsWith("https://i.scdn.co/")) return new Response(new Uint8Array(noise), { headers: { "content-type": "image/png" } });
    return real(input, init);
  });
});
afterAll(() => vi.unstubAllGlobals());

const bytes = async (res: Response | Promise<Response>) => (await (await res).arrayBuffer()).byteLength;

const CARDS: [string, () => Promise<Response>][] = [
  ["/updates", async () => (await import("../app/updates/opengraph-image")).default()],
  ["/certifications", async () => (await import("../app/certifications/opengraph-image")).default()],
  ["/records/charts", async () => (await import("../app/records/charts/opengraph-image")).default()],
  ["/compare/burna-boy-vs-wizkid", async () => (await import("../app/compare/[pair]/opengraph-image")).default({ params: Promise.resolve({ pair: "burna-boy-vs-wizkid" }) })],
  ["/compare/black-sherif-vs-tiwa-savage", async () => (await import("../app/compare/[pair]/opengraph-image")).default({ params: Promise.resolve({ pair: "black-sherif-vs-tiwa-savage" }) })],
  ["/compare/in/united-kingdom", async () => (await import("../app/compare/in/[country]/opengraph-image")).default({ params: Promise.resolve({ country: "united-kingdom" }) })],
  ["/compare/in/colombia", async () => (await import("../app/compare/in/[country]/opengraph-image")).default({ params: Promise.resolve({ country: "colombia" }) })],
  ["/", async () => (await import("../app/opengraph-image")).default()],
  ["/records/tours/map", async () => (await import("../app/records/tours/map/opengraph-image")).default()],
  ["/records/tours", async () => (await import("../app/records/tours/opengraph-image")).default()],
  ["/records/tours/festivals", async () => (await import("../app/records/tours/festivals/opengraph-image")).default()],
  ["/dai-dai/es", async () => (await import("../app/dai-dai/es/opengraph-image")).default()],
  ["/music/listeners", async () => (await import("../app/music/listeners/opengraph-image")).default()],
  ["/music", async () => (await import("../app/music/opengraph-image")).default()],
  ["/live-charts", async () => (await import("../app/live-charts/opengraph-image")).default()],
];

describe("ogPreviewBudget: each figure card is under 300 KB", () => {
  it.each(CARDS)("%s", async (_route, draw) => {
    const n = await bytes(draw());
    expect(n).toBeGreaterThan(10_000); // a real picture, not an empty stand-in
    expect(n).toBeLessThanOrEqual(PREVIEW_BYTES);
  });

  it("negative control: the default square stat card, uncompacted, is over the budget", async () => {
    // The probe can see an over-budget card: the full PNG the /share download
    // serves (cardSizes.ts: "745 KB for the desktop square").
    expect(await bytes(statCardImage(getStatCards()[0], "square"))).toBeGreaterThan(PREVIEW_BYTES);
  });
});
