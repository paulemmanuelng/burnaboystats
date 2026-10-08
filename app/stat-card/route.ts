import { findCard, getStatCards } from "../lib/statCards";
import { statCardImage } from "../lib/statCardImage";
import { STAT_CARD_PREVIEW_WIDTH, type CardRatio } from "../lib/cardSizes";

// GET /stat-card?stat=<id>&ratio=square|story → a downloadable PNG for that
// stat. Square is 1080×1080 (timeline), story is 1080×1920 (Instagram/WhatsApp).
//
// &w=720 returns the same drawing as a WebP that wide, for /share's previews
// (lib/cardSizes.ts): the full PNG is the file a reader saves, and only the
// save fetches it. One width and no others.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("stat");
  const ratio: CardRatio = searchParams.get("ratio") === "story" ? "story" : "square";
  const w = searchParams.get("w");
  if (w !== null && w !== String(STAT_CARD_PREVIEW_WIDTH)) {
    return new Response(`The card is served full size, or at ?w=${STAT_CARD_PREVIEW_WIDTH}.`, { status: 400 });
  }
  // findCard resolves the canned cards plus the per-release and per-first
  // families; anything unknown falls back to the flagship card rather than
  // erroring, same as before.
  const card = findCard(id) ?? getStatCards()[0];
  const png = statCardImage(card, ratio);
  return w === null ? png : preview(png, STAT_CARD_PREVIEW_WIDTH);
}

const CACHE = "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400";

/** The PNG, resized and re-encoded as WebP — the On This Day card route's
 *  recipe. Should the encoder be missing on a host, the full PNG is still an
 *  image: a heavier preview, never a hole. */
async function preview(png: Response, width: number): Promise<Response> {
  const cache = png.headers.get("Cache-Control") ?? CACHE;
  const bytes = Buffer.from(await png.arrayBuffer());
  try {
    const { default: sharp } = await import("sharp");
    const webp = await sharp(bytes).resize({ width }).webp({ quality: 80 }).toBuffer();
    return new Response(new Uint8Array(webp), { headers: { "Content-Type": "image/webp", "Cache-Control": cache } });
  } catch {
    return new Response(new Uint8Array(bytes), { headers: { "Content-Type": "image/png", "Cache-Control": cache } });
  }
}
