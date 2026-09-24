import { siteUrl } from "../../site";
import { apiHeaders, API_VERSION } from "../../lib/api";

// GET /api/<anything the routes beside this one do not serve> → a JSON 404.
//
// Without this, /api/v1/nope, /api/v1/Stats and /api/v1/stats/extra answered
// with the site's HTML 404 page: 47,364 bytes of markup and no
// Access-Control-Allow-Origin, so a browser client could neither parse the
// answer nor read its status (24 Sep 2026). Every real route, static or
// dynamic, is more specific than a catch-all and still wins; only a path
// nothing else claims reaches this handler.
export function GET() {
  return Response.json(
    {
      error: "not_found",
      message: "No API endpoint at this path. Paths are lower case, with no trailing slash.",
      index: `${siteUrl}/api/${API_VERSION}`,
      docs: `${siteUrl}/api`,
    },
    { status: 404, headers: apiHeaders() },
  );
}
