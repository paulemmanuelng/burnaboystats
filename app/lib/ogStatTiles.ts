// The stat tiles the share cards print under their headline, singular where a
// count is one. Every label was a hard-coded plural until 5 Oct 2026, so a
// one-country song card read "1 COUNTRIES", "1 CERTS", and a board card "1 NO. 1
// PEAKS" (debug pass, seo-05), while the pages beside them used plural().
//
// Numbers in, tiles out — no data imports — so tests/debug1005Seo.test.tsx can
// hold every label at one and at many. Each card folds `tilesSig` into its
// image id: a label-only change keeps every figure and would otherwise keep the
// old picture in every scraped preview.

import { plural } from "./plural";

export interface StatTile {
  v: string;
  l: string;
}

/** A song card: best peak (as printed), countries charted, plaques. */
export function songTiles(peak: string | null | undefined, countries: number, certs: number): StatTile[] {
  const out: StatTile[] = [];
  if (peak != null) out.push({ v: peak, l: "Best peak" });
  if (countries > 0) out.push({ v: `${countries}`, l: plural(countries, "Country", "Countries") });
  if (certs > 0) out.push({ v: `${certs}`, l: plural(certs, "Cert", "Certs") });
  return out;
}

/** An album card: the song card's three, plus its track count. */
export function albumTiles(peak: string | null | undefined, countries: number, certs: number, tracks: number | null): StatTile[] {
  const out = songTiles(peak, countries, certs);
  if (tracks != null) out.push({ v: `${tracks}`, l: plural(tracks, "Track", "Tracks") });
  return out;
}

/** A board artist's card. */
export function boardArtistTiles(certs: number, countries: number, entries: number, no1s: number): StatTile[] {
  return [
    { v: `${certs}`, l: plural(certs, "Certification", "Certifications") },
    { v: `${countries}`, l: plural(countries, "Country", "Countries") },
    { v: `${entries}`, l: plural(entries, "Chart entry", "Chart entries") },
    { v: `${no1s}`, l: plural(no1s, "No. 1 peak", "No. 1 peaks") },
  ];
}

/** A board artist's charts card. */
export function boardChartTiles(entries: number, territories: number, no1s: number): StatTile[] {
  return [
    { v: `${entries}`, l: plural(entries, "Chart entry", "Chart entries") },
    { v: `${territories}`, l: plural(territories, "Territory", "Territories") },
    { v: `${no1s}`, l: plural(no1s, "No. 1 peak", "No. 1 peaks") },
  ];
}

/** A live board's card. */
export function liveTiles(placements: number, countries: number, platforms: number): StatTile[] {
  return [
    { v: `${placements}`, l: plural(placements, "Placement", "Placements") },
    { v: `${countries}`, l: plural(countries, "Country", "Countries") },
    { v: `${platforms}`, l: plural(platforms, "Platform", "Platforms") },
  ];
}

/** The tiles as printed, for a card's image id. */
export const tilesSig = (tiles: StatTile[]) => tiles.map((t) => `${t.v} ${t.l}`).join(",");
