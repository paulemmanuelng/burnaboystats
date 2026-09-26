import { dayBySlug, dayCard } from "../../../lib/onThisDay";
import { statCardImage } from "../../../lib/statCardImage";
import { parsePreviewWidth } from "../../../lib/cardPreview";

// GET /on-this-day/<day>/card → the day's post-ready PNG, 1080×1350 (4:5, the
// tallest a feed post runs on Instagram and X uncropped). Drawn by the stat-card
// renderer, so it carries the same face, brand row, source and read date as
// every card /share makes. Rendered on request and cached by the CDN, like
// /stat-card — building ~170 of them into every deploy would buy nothing.
//
// ?w=560 and ?w=320 return the same drawing as a WebP that wide, for the day
// pages' previews (lib/cardPreview.ts). The route still takes only a day and
// one of two widths, never text, so nobody can mint a card through the URL.
export async function GET(request: Request, { params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const day = dayBySlug(slug);
  if (!day) return new Response("No milestones are dated on that day.", { status: 404 });
  const width = parsePreviewWidth(new URL(request.url).searchParams.get("w"));
  if (width === null) return new Response("The card is served full size, or at ?w=320 or ?w=560.", { status: 400 });
  const png = statCardImage(dayCard(day), "portrait");
  return width === undefined ? png : preview(png, width);
}

const CACHE = "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400";

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
