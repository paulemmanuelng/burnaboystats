// The figures on the Afrobeats Board's share cards, with their labels — one
// derivation for what a card draws and for the id its URL carries.
//
// The labels were fixed strings: Black Sherif's card printed "1 COUNTRIES"
// and "1 NO. 1 PEAKS", his charts card "1 TERRITORIES", while the desktop
// grids on the same pages already said "Territory" and "No. 1 peak" (debug
// pass, 5 Oct 2026). The card's id is built from these same pairs, so a
// label that changes moves the card's URL with it and a cached preview is
// re-scraped — the rule ogId sets out, applied to the words as well as the
// numbers.

import { plural } from "./plural";
import {
  certCount,
  countryCount,
  chartEntries,
  chartTerritories,
  chartNo1s,
  type AfroArtist,
} from "../data/afrobeats";

export interface CardStat {
  v: string;
  l: string;
}

/** The artist card: /afrobeats/[artist]. */
export const artistCardStats = (a: AfroArtist): CardStat[] => [
  { v: `${certCount(a)}`, l: plural(certCount(a), "Certification", "Certifications") },
  { v: `${countryCount(a)}`, l: plural(countryCount(a), "Country", "Countries") },
  { v: `${chartEntries(a)}`, l: plural(chartEntries(a), "Chart entry", "Chart entries") },
  { v: `${chartNo1s(a)}`, l: plural(chartNo1s(a), "No. 1 peak", "No. 1 peaks") },
];

/** The charts card: /afrobeats/[artist]/charts. */
export const chartsCardStats = (a: AfroArtist): CardStat[] => [
  { v: `${chartEntries(a)}`, l: plural(chartEntries(a), "Chart entry", "Chart entries") },
  { v: `${chartTerritories(a)}`, l: plural(chartTerritories(a), "Territory", "Territories") },
  { v: `${chartNo1s(a)}`, l: plural(chartNo1s(a), "No. 1 peak", "No. 1 peaks") },
];

/** "4|Country|…" — what a card's id folds in. */
export const cardSig = (stats: CardStat[]) => stats.map((s) => `${s.v}|${s.l}`).join("|");
