import { liveCharts, liveChartsUpdated } from "../../../../data/liveCharts.wizkid";

// GET /api/v1/live-charts/wizkid → Wizkid's live platform snapshot as JSON.
//
// The same contract as /api/v1/live-charts, which serves Burna Boy's: the open
// data API, and the page's own country panels, which fetch from here on first
// open rather than shipping every row inside the page. The snapshot only
// changes when the hourly bot commits — which redeploys and busts the CDN — so
// caching hard is safe.
export function GET() {
  return Response.json(
    { artist: "Wizkid", updated: liveChartsUpdated, releases: liveCharts },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
