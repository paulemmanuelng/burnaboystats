import { dayBySlug, dayCard } from "../../../lib/onThisDay";
import { statCardImage } from "../../../lib/statCardImage";

// GET /on-this-day/<day>/card → the day's post-ready PNG, 1080×1350 (4:5, the
// tallest a feed post runs on Instagram and X uncropped). Drawn by the stat-card
// renderer, so it carries the same face, brand row, source and read date as
// every card /share makes. Rendered on request and cached by the CDN, like
// /stat-card — building ~170 of them into every deploy would buy nothing.
export async function GET(_request: Request, { params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const day = dayBySlug(slug);
  if (!day) return new Response("No milestones are dated on that day.", { status: 404 });
  return statCardImage(dayCard(day), "portrait");
}
