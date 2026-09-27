// @vitest-environment node
import { describe, it, expect, afterEach, vi } from "vitest";
import sharp from "sharp";
import { onThisDayDays } from "../app/lib/onThisDay";
import { dayPreview, previewMetaSize } from "../app/lib/onThisDayShare";
import { PREVIEW_BYTES, compactPreview } from "../app/lib/onThisDayImages";
import { BURNA_PORTRAIT } from "../app/lib/artistImages";

/**
 * The live debug of 27 Sep 2026, On This Day's link previews
 * (/on-this-day/<day>/opengraph-image), measured on burnaboystats.com:
 *
 * - otd-2: beside a cover the meta line wrapped onto two lines and split the
 *   date on 8 and 18 September, 8 December and 23 January — "2026 ·
 *   CERTIFICATION · + 1 MORE ON 18" / "SEPTEMBER". The design draws one.
 * - otd-3: 37 of the 160 previews were over 300 KB, all cover days, the
 *   largest 6 March at 362,298 B.
 *
 * Every render here is offline: a cover answers a stand-in image and the
 * portrait fetch fails, so the faded photo is left off (loadPortrait → null).
 */

const realFetch = globalThis.fetch;
afterEach(() => {
  globalThis.fetch = realFetch;
  vi.doUnmock("../app/lib/onThisDayShare");
  vi.resetModules();
});

/** Serve every cover as `cover`, and fail the portrait. */
function offline(cover: Buffer) {
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input instanceof Request ? input.url : input);
    if (url === BURNA_PORTRAIT) throw new Error("SIMULATED CDN OUTAGE");
    if (url.includes("i.scdn.co")) return new Response(new Uint8Array(cover), { headers: { "Content-Type": "image/png" } });
    return realFetch(input as never, init as never);
  }) as typeof fetch;
}

const blue = () => sharp({ create: { width: 640, height: 640, channels: 3, background: "#0000ff" } }).png().toBuffer();
/** Incompressible: random noise, the worst a cover can do to the byte count. */
function noise(width: number, height: number, channels: 3 | 4 = 3) {
  const raw = Buffer.alloc(width * height * channels);
  let s = 0x2545f491;
  for (let i = 0; i < raw.length; i++) {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    raw[i] = channels === 4 && i % 4 === 3 ? 255 : s & 0xff;
  }
  return raw;
}

async function renderDay(slug: string) {
  const og = await import("../app/on-this-day/[day]/opengraph-image");
  const res = await og.default({ params: Promise.resolve({ day: slug }) });
  return Buffer.from(await res.arrayBuffer());
}

/**
 * The meta line's lines on a rendered preview: bands of its #c9c9d0 ink under
 * the headline's last row of #f5f4f0, in the text column right of the kind
 * mark (x 442 to the right padding at 1136), above the URL footer (y 545).
 * A band is 8 rows or more, so a headline glyph's anti-aliased foot is not one.
 */
async function metaLines(png: Buffer) {
  const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true });
  const lo = (x: number, y: number) => {
    const i = (y * info.width + x) * info.channels;
    return Math.min(data[i], data[i + 1], data[i + 2]);
  };
  const rowMax = (y: number) => {
    let m = 0;
    for (let x = 442; x < 1136; x++) m = Math.max(m, lo(x, y));
    return m;
  };
  let headlineFoot = 110;
  for (let y = 110; y < 545; y++) if (rowMax(y) > 228) headlineFoot = y;
  let bands = 0;
  let run = 0;
  for (let y = headlineFoot + 1; y <= 545; y++) {
    const m = y < 545 ? rowMax(y) : 0;
    if (m >= 150 && m <= 228) run++;
    else {
      if (run >= 8) bands++;
      run = 0;
    }
  }
  return bands;
}

// The cover days with a count on their meta line: the only lines that can run long.
const COVER_DAYS = onThisDayDays.filter((d) => dayPreview(d).cover && d.events.length > 1).map((d) => d.slug);

describe("otd-2: a day preview's meta line is one line", () => {
  it("the four days that wrapped live step to 22px; 16 August, which fit, stays at 24", () => {
    const size = (slug: string) => dayPreview(onThisDayDays.find((d) => d.slug === slug)!).metaSize;
    expect(["8-september", "18-september", "8-december", "23-january"].map(size)).toEqual([22, 22, 22, 22]);
    expect(size("16-august")).toBe(24);
    // Without a cover the line has 1,042px: the longest possible meta fits at 24.
    expect(previewMetaSize("2026 · CERTIFICATION · + 12 MORE ON 10 SEPTEMBER", false)).toBe(24);
    expect(previewMetaSize("2026 · CERTIFICATION · + 12 MORE ON 10 SEPTEMBER", true)).toBe(22);
  });

  it("every cover day's meta line renders on one line", async () => {
    expect(COVER_DAYS.length).toBeGreaterThan(10);
    offline(await blue());
    const wrapped: string[] = [];
    for (const slug of COVER_DAYS) {
      const n = await metaLines(await renderDay(slug));
      if (n !== 1) wrapped.push(`${slug}: ${n}`);
    }
    expect(wrapped).toEqual([]);
  }, 120000);

  it("negative control: the shipped 24px meta wraps 18 September onto two lines", async () => {
    // The route as it shipped: every meta line at 24px, tracked 2.88.
    vi.doMock("../app/lib/onThisDayShare", async (importOriginal) => {
      const real = await importOriginal<typeof import("../app/lib/onThisDayShare")>();
      return { ...real, dayPreview: (d: Parameters<typeof real.dayPreview>[0]) => ({ ...real.dayPreview(d), metaSize: 24 }) };
    });
    vi.resetModules();
    offline(await blue());
    expect(dayPreview(onThisDayDays.find((d) => d.slug === "18-september")!).meta).toBe(
      "2026 · CERTIFICATION · + 1 MORE ON 18 SEPTEMBER",
    );
    expect(await metaLines(await renderDay("18-september"))).toBe(2);
    // And the counter sees the one line of a day that fit at 24.
    expect(await metaLines(await renderDay("16-august"))).toBe(1);
  }, 60000);
});

describe("otd-3: a day preview stays under the 300 KB budget", () => {
  it("a render the lossless pass brings under budget keeps every pixel", async () => {
    // A 1200×630 opaque RGBA frame, deflated as lightly as the renderer does,
    // with a 300px block of noise where a cover sits: 1,200,000-odd bytes in.
    const W = 1200;
    const H = 630;
    const frame = Buffer.alloc(W * H * 4);
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4;
        frame[i] = 10 + Math.round((x / W) * 60);
        frame[i + 1] = 10 + Math.round((y / H) * 40);
        frame[i + 2] = 11;
        frame[i + 3] = 255;
      }
    const tile = noise(150, 150, 4);
    for (let y = 0; y < 150; y++) tile.copy(frame, ((200 + y) * W + 64) * 4, y * 150 * 4, (y + 1) * 150 * 4);
    const drawn = await sharp(frame, { raw: { width: W, height: H, channels: 4 } }).png({ compressionLevel: 0 }).toBuffer();
    // The negative control: the frame as the renderer ships it is over budget.
    expect(drawn.length).toBeGreaterThan(PREVIEW_BYTES);

    const res = await compactPreview(new Response(new Uint8Array(drawn), { headers: { "Content-Type": "image/png" } }));
    expect(res.headers.get("Content-Type")).toBe("image/png");
    const out = Buffer.from(await res.arrayBuffer());
    expect(out.length).toBeLessThan(PREVIEW_BYTES);
    const rgb = (b: Buffer) => sharp(b).removeAlpha().raw().toBuffer();
    expect(Buffer.compare(await rgb(out), await rgb(drawn))).toBe(0);
    expect((await sharp(out).metadata()).isPalette ?? false).toBe(false);
  }, 30000);

  it("a cover of pure noise — the worst case — still ships under budget (the palette pass)", async () => {
    offline(await sharp(noise(640, 640), { raw: { width: 640, height: 640, channels: 3 } }).png().toBuffer());
    const png = await renderDay("18-september");
    expect(png.subarray(0, 4).toString("hex")).toBe("89504e47");
    expect({ w: png.readUInt32BE(16), h: png.readUInt32BE(20) }).toEqual({ w: 1200, h: 630 });
    expect(png.length).toBeLessThan(PREVIEW_BYTES);
    // Lossless could not bring noise under budget; the palette did.
    expect((await sharp(png).metadata()).isPalette).toBe(true);
  }, 60000);

  it("negative control: the largest preview measured live is over the budget", () => {
    expect(362_298).toBeGreaterThan(PREVIEW_BYTES);
  });
});
