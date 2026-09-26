import { dayBySlug, type OnThisDayDay } from "../../../lib/onThisDay";
import { dayPostCard } from "../../../lib/onThisDayShare";
import { postCardImage } from "../../../lib/onThisDayImages";
import { parsePreviewWidth } from "../../../lib/cardPreview";

// GET /on-this-day/<day>/card → the day's post-ready PNG, 1080×1350 (4:5, the
// tallest a feed post runs on Instagram and X uncropped). The date is its
// identity and the milestone its hero (lib/onThisDayImages.tsx). Rendered on
// request and cached by the CDN, like /stat-card — building ~170 of them into
// every deploy would buy nothing.
//
// ?w=560 and ?w=320 return the same drawing as a WebP that wide, for the day
// pages' and the home card's previews (lib/cardPreview.ts). The route still
// takes only a day and one of two widths, never text, so nobody can mint a
// card through the URL.
export async function GET(request: Request, { params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const day = dayBySlug(slug);
  if (!day) return new Response("No milestones are dated on that day.", { status: 404 });
  const width = parsePreviewWidth(new URL(request.url).searchParams.get("w"));
  if (width === null) return new Response("The card is served full size, or at ?w=320 or ?w=560.", { status: 400 });
  const png = await render(day);
  return width === undefined ? png : preview(png, width);
}

const CACHE = "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400";

/**
 * The card, rendered to bytes before a header goes out. The cover is fetched
 * from Spotify's CDN at render time, and a THROWN fetch rejects the whole
 * render (tests/ogEmojiFallback.test.ts measured it on the chart cards) — sent
 * as a stream, that is an empty 200 on the wire. So a render that fails with
 * the cover is drawn again without it: the no-art layout, the numeral at full
 * size. A CDN hiccup costs the picture, never the card.
 */
async function render(day: OnThisDayDay): Promise<Response> {
  const card = dayPostCard(day);
  const draw = (c: typeof card) => postCardImage(c).arrayBuffer();
  let bytes: ArrayBuffer;
  try {
    bytes = await draw(card);
  } catch (err) {
    if (!card.cover) throw err;
    bytes = await draw(dayPostCard(day, { withCover: false }));
  }
  return new Response(bytes, { headers: { "Content-Type": "image/png", "Cache-Control": CACHE } });
}

/** The PNG, resized and re-encoded as WebP. Should the encoder be missing on
 *  a host, the full PNG is still an image — a heavier preview, never a hole. */
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
