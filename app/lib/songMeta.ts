// A song page's meta description, for the rows of data/songs.ts that leave
// theirs out: written from charts.ts and certifications.ts, the same rows the
// page's own chart and plaque tables read.
//
// SERVER-ONLY. data/songs.ts cannot do this itself: lib/covers.ts imports it,
// and two client components import coverFor from covers.ts (MobileCerts,
// CertExplorer). When the "Alone" row built its description in a getter there
// (8 Oct 2026), data/charts.ts rode that chain into the browser bundle of
// /certifications and all 19 /afrobeats artist pages — about 25 KB raw, 6.9 KB
// gzipped each, for one string only the server reads. Only the song page's
// generateMetadata calls this (tests/songMetaServerOnly.test.ts).

import type { Song } from "../data/songs";
import { allChartItems, CHART_COUNTRIES } from "../data/charts";
import { allItems } from "../data/certifications";
import { cardinalWord } from "./plural";
import { songChartDescription } from "./searchSnippets";

/** A country as a peak line names it: "the UK", "the Netherlands", "France". */
const TAKES_THE = new Set(["NL", "CZ"]);
const peakPlace = (code: string) =>
  code === "UK" ? "the UK" : code === "US" ? "the US" : `${TAKES_THE.has(code) ? "the " : ""}${CHART_COUNTRIES[code]?.name ?? code}`;

/** How many countries certify a title, read off certifications.ts. A meta line
 *  that typed the count went stale: “Alone” said “certified in five countries”
 *  after Portugal's Gold (30 Sep 2026) made it six (5 Oct 2026 debug pass). */
const certCountriesOf = (title: string): string =>
  cardinalWord(new Set(allItems.find((r) => r.title === title)?.certs.map((c) => c.c) ?? []).size);

/** Where a title charted, read off charts.ts: how many countries (Billboard's
 *  two global charts are not countries), and its peaks, best first. */
const chartLineOf = (title: string): { countries: string; peaks: string[] } => {
  const national = (allChartItems.find((r) => r.title === title)?.entries ?? []).filter((e) => e.c !== "GLB" && e.c !== "GLBX");
  return {
    countries: cardinalWord(national.length),
    peaks: [...national].sort((a, b) => a.peak - b.peak).map((e) => `No. ${e.peak} in ${peakPlace(e.c)}`),
  };
};

/** The row's own description when it has one; otherwise what the page holds —
 *  where it charted, its best peaks, where it is certified. */
export function songMetaDescription(song: Song): string {
  if (song.metaDescription) return song.metaDescription;
  return songChartDescription({
    song: `Burna Boy's “${song.title}”`,
    from: [song.album, song.album.replace(/^Black Panther: /, "")],
    year: song.year,
    ...chartLineOf(song.title),
    certified: certCountriesOf(song.title),
  });
}
