import { boxOfficeFeed } from "../../../lib/boardFeeds/boxOffice";
import { feedBody, feedResponse } from "../../../lib/boardFeeds/envelope";

// Every verified single-show gross by an African artist (feed spec 4.7): the
// full list as /records/tours/revenue shows it, the leader named from the data.
export const dynamic = "force-static";

export function GET() {
  const feed = boxOfficeFeed();
  return feedResponse(feedBody("/api/v1/box-office", feed.dataAsOf, feed.data));
}
