import { compareStamp, compareView } from "../../../../lib/boardFeeds/compare";
import { feedBody, feedResponse } from "../../../../lib/boardFeeds/envelope";

// The country index (feed spec 4.6): every market, who leads it and its
// certified units, as /compare/in shows them.
export const dynamic = "force-static";

export function GET() {
  const sp = { mode: "country" };
  const view = compareView(sp, { path: "/compare/in" });
  return feedResponse(feedBody("/api/v1/compare/in", compareStamp(sp), { query: Object.entries(sp), ...view }));
}
