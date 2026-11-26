import { liveFeed } from "../../../../../lib/boardFeeds/live";
import { feedBody, feedNotFound, feedResponse } from "../../../../../lib/boardFeeds/envelope";
import { boardArtists, liveBoardOf } from "../../../../../lib/boardFeeds/shared";

// One artist's live platform charts (feed spec 4.5), every row's country
// entries included. Rebuilt with each stats-bot commit, as the live pages are.
export const dynamicParams = true;
export function generateStaticParams() {
  return boardArtists.filter((a) => liveBoardOf(a.slug)).map((a) => ({ artist: a.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ artist: string }> }) {
  const { artist } = await params;
  const endpoint = `/api/v1/board/${artist}/live`;
  const feed = liveFeed(artist);
  if (!feed) return feedNotFound(endpoint);
  return feedResponse(feedBody(endpoint, feed.dataAsOf, feed.data));
}
