import { albumCharts, allChartItems, type ChartRelease } from "../data/charts";
import { albums as certAlbums, allItems, type Release } from "../data/certifications";
import { sameTitle } from "./titleKey";
import { count } from "./plural";
import type { Song } from "../data/songs";

/**
 * A release's lead figures, read the one way its page reads them: the
 * countries it charted in, its best peak and its certifications (Job 4).
 *
 * The /music cards print them (fix 82). The lookups are the ones the song and
 * album pages make (songData, albumData): a song by its exact title, an album
 * by sameTitle and by ALBUM plaques only, so a card and its page count the
 * same release. Server-only: it reads the chart and certification data.
 */

export interface ReleaseFigures {
  /** Countries charted: every entry but the two global charts. */
  countries: number;
  /** The best peak on any chart, or null when the release never charted. */
  bestPeak: number | null;
  /** Certifications held, one per plaque. */
  certs: number;
}

/** A song's chart record and certifications, by its exact title. */
export function songRecords(song: Pick<Song, "title">): { chart?: ChartRelease; cert?: Release } {
  return {
    chart: allChartItems.find((r) => r.title === song.title),
    cert: allItems.find((r) => r.title === song.title),
  };
}

/** An album's chart record and its ALBUM certifications, by sameTitle: a
 *  title track's single plaque is the single's, never the album's. */
export function albumRecords(title: string): { chart?: ChartRelease; cert?: Release } {
  return {
    chart: albumCharts.find((r) => sameTitle(r.title, title)),
    cert: certAlbums.find((r) => sameTitle(r.title, title)),
  };
}

function figuresOf({ chart, cert }: { chart?: ChartRelease; cert?: Release }): ReleaseFigures {
  const entries = chart?.entries ?? [];
  return {
    countries: entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX").length,
    bestPeak: entries.length ? Math.min(...entries.map((e) => e.peak)) : null,
    certs: cert?.certs.length ?? 0,
  };
}

export const songFigures = (song: Pick<Song, "title">): ReleaseFigures => figuresOf(songRecords(song));
export const albumFigures = (title: string): ReleaseFigures => figuresOf(albumRecords(title));

/**
 * The /music figures line (fix 82): "Best No. 2 · 8 certifications", or on a
 * phone row "Best No. 2 · 8 certs". A release with nothing to count says so:
 * "Not charted · No certifications".
 */
export function releaseLine(f: ReleaseFigures, form: "desk" | "phone"): string {
  return releaseParts(f, form).join(" · ");
}

/** The line's two figures apart, so a narrow row can wrap between them. */
export function releaseParts(f: ReleaseFigures, form: "desk" | "phone"): [string, string] {
  const peak = f.bestPeak === null ? "Not charted" : `Best No. ${f.bestPeak}`;
  const [one, many] = form === "desk" ? ["certification", "certifications"] : ["cert", "certs"];
  const certs = f.certs === 0 ? `No ${many}` : count(f.certs, one, many);
  return [peak, certs];
}

/** What a /music card needs, as plain strings a client grid can take. */
export interface ReleaseLines {
  desk: string;
  /** The phone row's two figures, printed after the year. */
  phone: [string, string];
  /** Neither charted nor certified: the line prints muted. */
  empty: boolean;
}

export function releaseLines(title: string): ReleaseLines {
  const f = albumFigures(title);
  return { desk: releaseLine(f, "desk"), phone: releaseParts(f, "phone"), empty: f.bestPeak === null && f.certs === 0 };
}
