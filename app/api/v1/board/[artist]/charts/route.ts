import { chartsFeed } from "../../../../../lib/boardFeeds/charts";
import { feedBody, feedNotFound, feedResponse } from "../../../../../lib/boardFeeds/envelope";
import { boardArtists } from "../../../../../lib/boardFeeds/shared";

// One artist's official chart peaks (feed spec 4.4), every chart figure with
// and without Billboard's rows. A 404 for an artist with no chart rows.
export const dynamicParams = true;
export function generateStaticParams() {
  return boardArtists.filter((a) => a.charts.length > 0).map((a) => ({ artist: a.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ artist: string }> }) {
  const { artist } = await params;
  const endpoint = `/api/v1/board/${artist}/charts`;
  const feed = chartsFeed(artist);
  if (!feed) return feedNotFound(endpoint);
  return feedResponse(feedBody(endpoint, feed.dataAsOf, feed.data));
}
