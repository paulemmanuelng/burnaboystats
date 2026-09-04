// @vitest-environment node
import { describe, it, expect, afterEach } from "vitest";

/**
 * The artist chart card must survive jsDelivr being unreachable.
 *
 * next/og ships no emoji glyphs, so every flag on this card is resolved by
 * satori through `loadAdditionalAsset`, which fetches twemoji from jsDelivr AT
 * RENDER TIME — one request per flag, eight on a typical card. These fifteen
 * cards are NOT prerendered (zero paths in the prerender manifest), so that
 * happens on a real request, and the stats bot's redeploys keep busting the
 * cache that would otherwise hide it.
 *
 * The failure mode is narrow and worth stating exactly, because a broader claim
 * would be wrong: a 404 or an empty 200 from the CDN degrades gracefully and
 * the card still renders. Only a THROWN fetch — host unreachable, DNS failure,
 * connection refused — rejects the whole render. Measured, not assumed.
 *
 * Returning the ImageResponse directly meant that rejection landed mid-stream,
 * after headers had gone out: an empty reply on the wire, a 500 at the edge.
 * Same shape as the hardcoded-MIME bug that 500'd all fifteen car cards.
 */
const realFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = realFetch; });

async function render(slug: string) {
  const mod = await import("../app/afrobeats/[artist]/charts/opengraph-image");
  return (mod.default as (a: { params: Promise<{ artist: string }> }) => Promise<Response>)({
    params: Promise.resolve({ artist: slug }),
  });
}

const isPng = (b: Buffer) => b.subarray(0, 4).toString("hex") === "89504e47";

describe("the artist chart OG card", () => {
  it("still renders a PNG when the emoji CDN is unreachable", async () => {
    let blocked = 0;
    globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input instanceof Request ? input.url : input);
      if (url.includes("jsdelivr") || url.includes("twemoji")) {
        blocked++;
        throw new Error("SIMULATED CDN OUTAGE");
      }
      return realFetch(input as never, init as never);
    }) as typeof fetch;

    const res = await render("tyla");
    expect(res.status).toBe(200);
    const buf = Buffer.from(await res.arrayBuffer());
    expect(isPng(buf)).toBe(true);
    expect(buf.length).toBeGreaterThan(1000);

    // Without this the test passes for the wrong reason: satori caches emoji
    // in-process, so a sibling test rendering first leaves nothing to fetch and
    // the outage is never actually simulated. It has to have been hit.
    expect(blocked, "the CDN block never fired — this test proved nothing").toBeGreaterThan(0);
  }, 60000);

  it("renders a real PNG normally", async () => {
    const res = await render("wizkid");
    expect(res.status).toBe(200);
    const buf = Buffer.from(await res.arrayBuffer());
    expect(isPng(buf)).toBe(true);
  }, 60000);
});
