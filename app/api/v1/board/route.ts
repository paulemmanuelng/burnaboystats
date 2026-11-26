import { boardFeed } from "../../../lib/boardFeeds/board";
import { feedBody, feedResponse } from "../../../lib/boardFeeds/envelope";

// The Board (FaveIQ feed spec 4.2): app/afrobeats/page.tsx's figures, ranks
// and sentences, for faveiq.com/afrobeats. Rebuilt by every deploy.
export const dynamic = "force-static";

export function GET() {
  const feed = boardFeed();
  return feedResponse(feedBody("/api/v1/board", feed.dataAsOf, feed.data));
}
