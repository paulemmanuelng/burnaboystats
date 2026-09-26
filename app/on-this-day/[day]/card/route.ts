import { dayBySlug, type OnThisDayDay } from "../../../lib/onThisDay";
import { dayPostCard } from "../../../lib/onThisDayShare";
import { loadPortrait, postCardImage } from "../../../lib/onThisDayImages";
import { parsePreviewWidth } from "../../../lib/cardPreview";

// GET /on-this-day/<day>/card → the day's post-ready PNG, 1080×1350 (4:5, the
// tallest a feed post runs on Instagram and X uncropped). The milestone is its
// hero, the date a label over it (lib/onThisDayImages.tsx). Rendered on
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
 * the cover is drawn again without it: the no-art layout, the same headline.
 * A CDN hiccup costs the picture, never the card.
 *
 * The faded portrait (Paul, 26 Sep 2026) is fetched before the render and is
 * null when the fetch fails (loadPortrait); should Satori still refuse its
 * bytes, the last attempt draws the card without it.
 */
async function render(day: OnThisDayDay): Promise<Response> {
  const card = dayPostCard(day);
  const portrait = await loadPortrait();
  const draw = (c: typeof card, p: string | null) => postCardImage(c, p).arrayBuffer();
  let bytes: ArrayBuffer;
  try {
    bytes = await draw(card, portrait);
  } catch (err) {
    if (!card.cover && !portrait) throw err;
    const bare = dayPostCard(day, { withCover: false });
    try {
      bytes = await draw(bare, portrait);
    } catch (again) {
      if (!portrait) throw again;
      bytes = await draw(bare, null);
    }
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
