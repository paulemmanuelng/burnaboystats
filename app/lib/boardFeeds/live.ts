/**
 * Artist · Live (spec 4.5): app/afrobeats/[artist]/live/page.tsx's snapshot,
 * with every row's country entries, so FaveIQ answers its own country panels
 * from this body and a visitor's browser never calls burnaboystats. Live
 * charts are platform charts, none of them Billboard's: no twins here.
 *
 * Burna Boy's board is his own snapshot (app/data/liveCharts.ts) through the
 * board's builder, his rows spelled and illustrated as his /live-charts page
 * shows them (lib/liveChartTitles, lib/liveReleaseArt).
 */

import { LICENSE } from "../api";
import { CREDIT_LINE } from "../credit";
import {
  cadenceOf,
  liveTitleRows,
  numberOnesOf,
  platformCountries,
  previewTop,
  reachOf,
  releaseKey,
  withApiCountryCodes,
  LIVE_CADENCE,
  LIVE_CADENCE_ADVERB,
  LIVE_CADENCE_LABEL,
} from "../liveChartMeta";
import { catalogueTitle } from "../liveChartTitles";
import { releaseArt } from "../liveReleaseArt";
import { count } from "../plural";
import type { LiveBoard } from "../../data/liveBoards";
import { aboutOf, segmentsOf, type DataLineOut, type Seo } from "./artist";
import { abs, artistRef, boardArtistBySlug, dated, isBurna, liveBoardOf, type BoardArtist } from "./shared";

/** The record doing the most work on the board right now (the page's
 *  leadRelease). */
const leadRelease = (board: LiveBoard) => {
  const top = liveTitleRows(board.releases)[0];
  return top ? { title: top.title, charts: top.reach, best: top.best } : null;
};

const LIVE_TAILS = [`Spotify, Apple Music, Shazam and more, ${LIVE_CADENCE}.`, `Spotify, Apple Music and more, ${LIVE_CADENCE}.`, `${LIVE_CADENCE_LABEL}.`];

/** The page's meta description: the head, then the longest tail that keeps
 *  it within 160 characters. */
function liveDescription(name: string, board: { placements: number; countries: number }, lead: { title: string; best: number; charts: number } | null): string {
  const head = lead
    ? `${name} has ${count(board.placements, "placement", "placements")} on platform charts in ${count(board.countries, "country", "countries")} right now, led by “${lead.title}”, best No. ${lead.best}, on ${count(lead.charts, "chart", "charts")}.`
    : `Every ${name} release charting right now: ${board.placements} live placements across ${board.countries} countries.`;
  for (const tail of LIVE_TAILS) {
    const full = `${head} ${tail}`;
    if (full.length <= 160) return full;
  }
  return head.slice(0, 160);
}

type Raw = LiveBoard["releases"][number];

function liveRow(a: BoardArtist, r: Raw) {
  const art = releaseArt(r, isBurna(a) ? "burna-boy" : "board-artist");
  const shown = isBurna(a) ? catalogueTitle(r.title) : r.title;
  return {
    key: releaseKey(r),
    title: r.title,
    ...(shown !== r.title ? { displayTitle: shown } : {}),
    kind: r.kind,
    ...(art.cover ? { cover: art.cover } : {}),
    letter: art.letter,
    // The board pages draw no EP tag (their summaries set ep: false); his
    // own page tags his catalogue's EPs.
    ep: isBurna(a) ? art.ep : false,
    total: reachOf(r),
    no1: numberOnesOf(r),
    top: previewTop(r),
    platforms: r.platforms.map((p) => ({
      platform: p.platform,
      countries: platformCountries(p.entries),
      numberOnes: p.numberOnes,
      entries: p.entries.map((e) => ({
        country: e.country,
        name: e.name,
        position: e.position,
        // Kept apart as LiveEntry keeps them: 0 no change, null new or
        // re-entering (with status), absent the platform reports none.
        ...(e.movement !== undefined ? { movement: e.movement } : {}),
        ...(e.status ? { status: e.status } : {}),
      })),
    })),
  };
}

export function liveFeed(slug: string) {
  const a = boardArtistBySlug(slug);
  const board = a ? liveBoardOf(a.slug) : undefined;
  if (!a || !board) return null;

  // The open API's country codes (UK, not GB), as the panels read them.
  const releases = withApiCountryCodes(board.releases) as Raw[];
  const lead = leadRelease(board);
  const dataLine: DataLineOut = {
    // His snapshot is the open API's root live endpoint; a board artist's is
    // /api/v1/live-charts/<slug>, which answers him with a 404.
    json: abs(isBurna(a) ? "/api/v1/live-charts" : `/api/v1/live-charts/${a.slug}`),
    licence: { name: LICENSE.name, url: LICENSE.url },
    cite: CREDIT_LINE,
  };
  const seo: Seo = {
    title: `${a.name} Live Charts — Charting Right Now, Worldwide`,
    description: liveDescription(a.name, board, lead),
    shareTitle: `${a.name} — Live Charts`,
    shareDescription: `${board.placements} live placements across ${board.countries} countries, ${LIVE_CADENCE}.`,
    noindex: false,
    dataset: {
      name: `${a.name} live platform chart placements`,
      description: `Current positions for every charting ${a.name} release across Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country charts — ${board.placements} placements in ${board.countries} countries.`,
      keywords: [a.name, "live charts", "Spotify", "Apple Music", "iTunes", "Shazam", "Deezer"],
      variableMeasured: ["Chart position", "Platform", "Country", "24-hour movement"],
      dateModified: board.updated,
      about: [aboutOf(a)],
    },
  };

  return {
    dataAsOf: board.updated,
    data: {
      artist: artistRef(a),
      segments: segmentsOf(a),
      updated: dated(board.updated),
      builtAt: board.builtAt,
      totals: {
        placements: board.placements,
        countries: board.countries,
        numberOnes: board.numberOnes,
        releases: board.releases.length,
        services: board.services,
      },
      platformTotals: board.platformTotals.map((p) => ({ ...p, cadence: cadenceOf(p.platform) })),
      releases: releases.map((r) => liveRow(a, r)),
      hasChartBoard: a.charts.length > 0,
      cadence: { adverb: LIVE_CADENCE_ADVERB, phrase: LIVE_CADENCE, label: LIVE_CADENCE_LABEL },
      lead,
      dataLine,
      seo,
      lastModified: board.updated,
    },
  };
}
