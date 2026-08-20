import { notFound } from "next/navigation";
import { LIVE_BOARDS, liveBoardFor } from "../../../../data/liveBoards";

export const dynamicParams = false;
export function generateStaticParams() {
  return LIVE_BOARDS.map((b) => ({ artist: b.slug }));
}

// GET /api/v1/live-charts/<artist> → one board artist's live platform snapshot.
//
// The same contract as /api/v1/live-charts, which serves Burna Boy's: the open
// data API, and the page's own country panels, which fetch from here on first
// open rather than shipping every row inside the page. Each snapshot only
// changes when the hourly bot commits — which redeploys and busts the CDN — so
// caching hard is safe.
export async function GET(_req: Request, { params }: { params: Promise<{ artist: string }> }) {
  const { artist } = await params;
  const board = liveBoardFor(artist);
  if (!board) notFound();

  return Response.json(
    { artist, updated: board.updated, releases: board.releases },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
