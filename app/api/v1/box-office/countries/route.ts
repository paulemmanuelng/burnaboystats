import { boxOfficeCountriesFeed } from "../../../../lib/boardFeeds/boxOffice";
import { feedBody, feedResponse } from "../../../../lib/boardFeeds/envelope";

// Reported box office by country and continent (feed spec 4.8), each
// country's own leader, the overall leader named from the data.
export const dynamic = "force-static";

export function GET() {
  const feed = boxOfficeCountriesFeed();
  return feedResponse(feedBody("/api/v1/box-office/countries", feed.dataAsOf, feed.data));
}
