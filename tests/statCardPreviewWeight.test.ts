// @vitest-environment node
import { describe, it, expect, afterEach } from "vitest";
import sharp from "sharp";
import { GET } from "../app/stat-card/route";
import { BURNA_PORTRAIT } from "../app/lib/artistImages";
import { STAT_CARD_PREVIEW_WIDTH, statCardFile, statCardPreview } from "../app/lib/cardSizes";

/**
 * Design review C-05, 8 Oct 2026: /share's preview loaded the full 1080px
 * download file — a 1080×1920 PNG of 831 KB in a 354×629 box on a phone, a
 * 1080×1080 PNG of 745 KB in 460×460 on a laptop — and every chip tap fetched
 * another. Page image weight 1,576 KB against 0 KB on the other content pages.
 *
 * The route now serves the same drawing at ?w=720 as a WebP for the preview,
 * and the full PNG only to the save. tests/sharePreviewGate.test.tsx checks
 * the two makers ask for it; this checks the route answers it.
 */

const realFetch = globalThis.fetch;
afterEach(() => {
  globalThis.fetch = realFetch;
});

/** No network: the portrait answers a plain, noisy square so the PNG weighs
 *  what a photo-backed card weighs rather than a flat colour's few KB. */
async function stubPortrait() {
  const noise = Buffer.alloc(640 * 640 * 3);
  for (let i = 0; i < noise.length; i++) noise[i] = (i * 2654435761) >>> 24;
  const photo = await sharp(noise, { raw: { width: 640, height: 640, channels: 3 } }).jpeg({ quality: 80 }).toBuffer();
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input instanceof Request ? input.url : input);
    if (url === BURNA_PORTRAIT) return new Response(new Uint8Array(photo), { headers: { "Content-Type": "image/jpeg" } });
    return realFetch(input as never, init as never);
  }) as typeof fetch;
}

const get = (path: string) => GET(new Request(`https://burnaboystats.com${path}`));

describe("/stat-card serves /share a light preview, and the full PNG to the save (C-05)", () => {
  it.each([
    ["story", 1920],
    ["square", 1080],
  ] as const)("%s: ?w=720 is a WebP 720 wide, a fraction of the file it previews", async (ratio, height) => {
    await stubPortrait();
    const full = await get(statCardFile("african-giant", ratio));
    expect(full.headers.get("Content-Type")).toBe("image/png");
    const fullBytes = Buffer.from(await full.arrayBuffer());
    const fullMeta = await sharp(fullBytes).metadata();
    expect([fullMeta.width, fullMeta.height]).toEqual([1080, height]);

    const res = await get(statCardPreview("african-giant", ratio));
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("image/webp");
    expect(res.headers.get("Cache-Control")).toBe(full.headers.get("Cache-Control"));
    const bytes = Buffer.from(await res.arrayBuffer());
    const meta = await sharp(bytes).metadata();
    expect(meta.format).toBe("webp");
    expect([meta.width, meta.height]).toEqual([STAT_CARD_PREVIEW_WIDTH, Math.round((height * STAT_CARD_PREVIEW_WIDTH) / 1080)]);
    expect(bytes.length, `preview ${bytes.length} B vs the file's ${fullBytes.length} B`).toBeLessThan(fullBytes.length / 4);
  }, 60000);

  it("asks for one preview width only — any other is refused, not rendered", async () => {
    const res = await get("/stat-card?stat=african-giant&ratio=story&w=1080");
    expect(res.status).toBe(400);
  });

  it("the preview URL is the file's URL plus the width, and the file's carries none", () => {
    expect(statCardFile("dai-dai", "story")).toBe("/stat-card?stat=dai-dai&ratio=story");
    expect(statCardPreview("dai-dai", "story")).toBe("/stat-card?stat=dai-dai&ratio=story&w=720");
    expect(statCardPreview("dai-dai", "story", 2)).toBe("/stat-card?stat=dai-dai&ratio=story&w=720&r=2");
  });
});
