import { apiHeaders } from "../../../../lib/api";
import { compareStamp, compareView, ENGINE_CACHE_CONTROL, normalise } from "../../../../lib/boardFeeds/compare";
import { feedBody } from "../../../../lib/boardFeeds/envelope";

// The compare engine for FaveIQ (feed spec §5): any state of the compare tool,
// answered per request from the query, so the engine itself never leaves this
// site. Never a 400: values the engine cannot use are dropped, and the answer
// echoes the normalised state in `query`, FaveIQ's cache key. Cached at the
// edge per full address (ENGINE_CACHE_CONTROL).
export function GET(req: Request) {
  const { sp, query } = normalise(new URL(req.url).searchParams);
  const body = feedBody("/api/v1/compare/view", compareStamp(sp), { query, ...compareView(sp) });
  return Response.json(body, { headers: { ...apiHeaders(ENGINE_CACHE_CONTROL), ETag: `"${body.contentHash}"` } });
}
