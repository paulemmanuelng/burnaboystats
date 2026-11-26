import { apiHeaders } from "../../../../lib/api";
import { contentHashOf, FEED_CACHE_CONTROL } from "../../../../lib/boardFeeds/envelope";
import { feedSchemaDocument } from "../../../../lib/boardFeeds/schema";

// The JSON Schema of every board feed body (feed spec 4.9). The document
// itself, not wrapped in the feeds' envelope: FaveIQ's nightly check reads it
// as a schema.
export const dynamic = "force-static";

export function GET() {
  const doc = feedSchemaDocument();
  return Response.json(doc, { headers: { ...apiHeaders(FEED_CACHE_CONTROL), ETag: `"${contentHashOf(doc)}"` } });
}
