import { liveCharts, liveChartsUpdated } from "../../../data/liveCharts";
import { apiHeaders, API_VERSION, LIVE_CACHE_CONTROL, provenance } from "../../../lib/api";

// force-static like its siblings. This route was the only static-able one
// served on demand, burning a function invocation per request — including the
// live-charts page's own per-release panel fetches — while its own comment
// above says caching hard is safe. The data is rebuilt by a deploy.
export const dynamic = "force-static";

// GET /api/v1/live-charts → the full live-platform snapshot as JSON.
//
// This exists for two callers: the open-data API (same standing as the other
// /api/v1 endpoints) and the live-charts page itself, whose per-release
// country panels fetch from here on first open instead of shipping all 790+
// rows inside the page. The snapshot only changes when the hourly bot commits
// — which redeploys and busts the CDN — so caching hard is safe.
//
// `updated` and `releases` stay at the TOP level: app/lib/useLiveRelease.ts
// reads `d.releases` straight off the body, so this cannot use the apiJson
// envelope, which nests everything under `data`. What it CAN carry is the
// provenance every other endpoint carries — licence, attribution string,
// source, methodology, docs — and the X-License header. It shipped with none
// of it: two headers and a bare object. On a CC BY dataset the attribution is
// the one condition of use, so a consumer who only ever sees this JSON was
// never told there was one.
export function GET() {
  return Response.json(
    {
      artist: "Burna Boy",
      endpoint: `/api/${API_VERSION}/live-charts`,
      description:
        "Where each release is sitting right now on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country charts. These are PLATFORM charts, rebuilt hourly — not official-chart data. The official national peaks behind this site's headline totals are at /api/v1/charts, and the two are never mixed.",
      updated: liveChartsUpdated,
      count: liveCharts.length,
      countOf: "releases",
      ...provenance,
      releases: liveCharts,
    },
    { headers: apiHeaders(LIVE_CACHE_CONTROL) }
  );
}
