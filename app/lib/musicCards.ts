// The figures on the /music song and album share cards, with their labels —
// the counterpart of boardCards.ts, which holds the Afrobeats Board's cards,
// and on its CardStat shape: each card folds cardSig of these into its image
// id, so a label-only change moves the card's URL and a cached preview is
// re-scraped.
//
// Every label was a hard-coded plural until 5 Oct 2026, so a one-country song
// card read "1 COUNTRIES", "1 CERTS" (debug pass, seo-05), while the pages
// beside them used plural(). Numbers in, stats out — no data imports — so
// tests/debug1005Seo.test.tsx can hold every label at one and at many.

import { plural } from "./plural";
import type { CardStat } from "./boardCards";

/** A song card: best peak (as printed), countries charted, plaques. */
export function songCardStats(peak: string | null | undefined, countries: number, certs: number): CardStat[] {
  const out: CardStat[] = [];
  if (peak != null) out.push({ v: peak, l: "Best peak" });
  if (countries > 0) out.push({ v: `${countries}`, l: plural(countries, "Country", "Countries") });
  if (certs > 0) out.push({ v: `${certs}`, l: plural(certs, "Cert", "Certs") });
  return out;
}

/** An album card: the song card's three, plus its track count. */
export function albumCardStats(peak: string | null | undefined, countries: number, certs: number, tracks: number | null): CardStat[] {
  const out = songCardStats(peak, countries, certs);
  if (tracks != null) out.push({ v: `${tracks}`, l: plural(tracks, "Track", "Tracks") });
  return out;
}
