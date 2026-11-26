import { boardIndex } from "../../../../lib/boardFeeds/board";
import { feedBody, feedResponse } from "../../../../lib/boardFeeds/envelope";

// Every page of the section on FaveIQ (feed spec 4.1): its static params, its
// sitemap, its canonicals and its pair redirects are built from this.
export const dynamic = "force-static";

export function GET() {
  const feed = boardIndex();
  return feedResponse(feedBody("/api/v1/board/index", feed.dataAsOf, feed.data));
}
