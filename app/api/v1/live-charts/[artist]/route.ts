import { LIVE_BOARDS, liveBoardFor } from "../../../../data/liveBoards";
import { apiHeaders, API_VERSION, LIVE_CACHE_CONTROL, provenance } from "../../../../lib/api";

// dynamicParams stays TRUE so this handler runs for a slug that is not on the
// board. It was false, which made Next answer an unknown artist with the
// site's HTML 404 page WITHOUT ever invoking this code: 61KB of markup, served
// as text/html, with no Access-Control-Allow-Origin. A browser client could not
// parse it and could not even read the status — the fetch failed on CORS rather
// than returning a clean 404. For a public JSON API that is the wrong answer to
// a perfectly ordinary question.
//
// The cost is small and bounded: the real slugs are all still prerendered by
// generateStaticParams below and still served from the CDN with the same
// Cache-Control, so nothing about the happy path changes. Only unrecognised
// slugs reach the function, and they get a few dozen bytes that is itself
// cacheable, so a crawler probing names cannot turn this into repeated work.
export const dynamicParams = true;
export function generateStaticParams() {
  return LIVE_BOARDS.map((b) => ({ artist: b.slug }));
}

// Hard caching is safe on both answers: a snapshot only changes when the hourly
// bot commits, which redeploys and busts the CDN, and the set of known slugs
// only changes when an artist joins the board — also a deploy.
//
// The headers come from lib/api now rather than being spelled out here, so this
// route sends the same Access-Control-Allow-Methods and X-License as every
// other /api/v1 answer. It sent neither: a licence a consumer can only find by
// reading a different endpoint is not a licence they have been given.
const HEADERS = apiHeaders(LIVE_CACHE_CONTROL);

// GET /api/v1/live-charts/<artist> → one board artist's live platform snapshot.
//
// The same contract as /api/v1/live-charts, which serves Burna Boy's: the open
// data API, and the page's own country panels, which fetch from here on first
// open rather than shipping every row inside the page.
export async function GET(_req: Request, { params }: { params: Promise<{ artist: string }> }) {
  const { artist } = await params;
  const board = liveBoardFor(artist);

  if (!board) {
    // Echo the slug back so a consumer can see what it actually asked for, but
    // BOUNDED: the value is arbitrary user input and it appears twice in this
    // body, so an unbounded one would let a 10KB path produce a 20KB error.
    // Not an XSS vector — the response is application/json and next.config.mjs
    // sends X-Content-Type-Options: nosniff — but reflecting unbounded input is
    // worth refusing on its own.
    const echoed = artist.length > 64 ? `${artist.slice(0, 64)}…` : artist;
    // Name every board, so a consumer that guessed wrong can correct itself from
    // the error alone rather than having to go and read the docs page.
    return Response.json(
      {
        error: "not_found",
        message: `No live-charts board for "${echoed}".`,
        artist: echoed,
        known: LIVE_BOARDS.map((b) => b.slug),
      },
      // No provenance block on the error: it carries no data to licence, and
      // this body is deliberately tiny — it replaced a 61KB HTML 404.
      { status: 404, headers: HEADERS }
    );
  }

  // `artist`, `updated` and `releases` stay at the top level — this artist's
  // page reads `d.releases` off the body the same way Burna Boy's does — with
  // the provenance the other endpoints carry added around them.
  return Response.json(
    {
      artist,
      endpoint: `/api/${API_VERSION}/live-charts/${artist}`,
      description:
        "One Afrobeats Board artist's current PLATFORM positions — Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country charts, rebuilt hourly. Not official-chart data; the board's official chart records are at /api/v1/afrobeats.",
      updated: board.updated,
      count: board.releases.length,
      countOf: "releases",
      ...provenance,
      releases: board.releases,
    },
    { headers: HEADERS }
  );
}
