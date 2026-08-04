import { liveCharts, liveChartsUpdated } from "../../../data/liveCharts";

// GET /api/v1/live-charts → the full live-platform snapshot as JSON.
//
// This exists for two callers: the open-data API (same standing as the other
// /api/v1 endpoints) and the live-charts page itself, whose per-release
// country panels fetch from here on first open instead of shipping all 790+
// rows inside the page. The snapshot only changes when the hourly bot commits
// — which redeploys and busts the CDN — so caching hard is safe.
export function GET() {
  return Response.json(
    { updated: liveChartsUpdated, releases: liveCharts },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
