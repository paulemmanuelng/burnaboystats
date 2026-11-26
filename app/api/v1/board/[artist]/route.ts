import { artistFeed } from "../../../../lib/boardFeeds/artist";
import { feedBody, feedNotFound, feedResponse } from "../../../../lib/boardFeeds/envelope";
import { boardArtists } from "../../../../lib/boardFeeds/shared";

// One artist's certifications page (feed spec 4.3), Burna Boy's included.
//
// dynamicParams stays TRUE, as /api/v1/live-charts/<artist> keeps it: the 20
// real slugs are prerendered below and served from the CDN, and anything else
// reaches this handler for a small JSON 404 rather than the site's HTML one.
export const dynamicParams = true;
export function generateStaticParams() {
  return boardArtists.map((a) => ({ artist: a.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ artist: string }> }) {
  const { artist } = await params;
  const endpoint = `/api/v1/board/${artist}`;
  const feed = artistFeed(artist);
  if (!feed) return feedNotFound(endpoint);
  return feedResponse(feedBody(endpoint, feed.dataAsOf, feed.data));
}
