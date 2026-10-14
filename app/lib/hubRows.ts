import {
  sweptArtists,
  certCount,
  countryCount,
  topAward,
  plaqueLabel,
  chartEntries,
  chartNo1s,
  BURNA,
  type AfroArtist,
} from "../data/afrobeats";
import { LIVE_BOARDS } from "../data/liveBoards";
import { allItems, totalAwards, countryCount as burnaCountries, COUNTRIES } from "../data/certifications";
import { chartEntryCount, numberOnes } from "../data/charts";
import { livePlacementCount } from "../data/liveCharts";
import { headlineAward } from "./headlineAward";
import { awardLabel } from "./awardName";
import { plaqueMarker } from "./issuerMarker";
import { rankBy, rankRows, boardOrder, type HubRow, type RankedRow } from "./hubTable";

/**
 * The /afrobeats board's rows, built from the data on the server (site review
 * 8 Oct 2026, Job 5 · J5-4): Burna Boy and every swept artist — a scheduled
 * artist has no figures to rank. Every cell is the figure the artist's own
 * pages print: certifications and countries as the tiles count them, the top
 * plaque as the tile badge picks it (never a label's own), chart entries and
 * No. 1s over every entry, and the live board's placements.
 */

const mostInOneCountry = (codes: string[]) => {
  const by = new Map<string, number>();
  for (const c of codes) by.set(c, (by.get(c) ?? 0) + 1);
  return Math.max(0, ...by.values());
};

const burnaCerts = allItems.flatMap((i) => i.certs);
const burnaTop = headlineAward(burnaCerts, (c) => COUNTRIES[c.c]?.body);

const burnaRow: HubRow = {
  slug: "burna-boy",
  name: BURNA.name,
  flag: BURNA.flag,
  href: BURNA.href,
  hook: BURNA.hook,
  his: true,
  certs: totalAwards(),
  countries: burnaCountries,
  topCert: burnaTop
    ? {
        label: [awardLabel(burnaTop), plaqueMarker(burnaTop, COUNTRIES[burnaTop.c]?.body ?? "")].filter(Boolean).join(" · "),
        code: burnaTop.c,
      }
    : null,
  chartEntries: chartEntryCount,
  no1s: numberOnes,
  live: livePlacementCount,
  mostInOneCountry: mostInOneCountry(burnaCerts.map((c) => c.c)),
};

const artistRow = (a: AfroArtist): HubRow => {
  const top = topAward(a);
  return {
    slug: a.slug,
    name: a.name,
    flag: a.flag,
    href: `/afrobeats/${a.slug}`,
    hook: a.hook,
    his: false,
    certs: certCount(a),
    countries: countryCount(a),
    topCert: top ? { label: plaqueLabel(top), code: top.c } : null,
    chartEntries: chartEntries(a),
    no1s: chartNo1s(a),
    live: LIVE_BOARDS.find((b) => b.slug === a.slug)?.placements ?? 0,
    mostInOneCountry: mostInOneCountry(a.releases.flatMap((r) => r.certs.map((c) => c.c))),
  };
};

/** Burna Boy and the swept board, in the board's order (certifications). */
export const hubRows: HubRow[] = [burnaRow, ...sweptArtists.map(artistRow)].sort(boardOrder);

/** The board ranked by certifications — the cards' ranks and the table's at rest. */
export const certRanks: RankedRow<HubRow>[] = rankRows(hubRows, "certs");

/** A tile's rank label by slug: "1", "=3". */
export const certRankOf = (slug: string) => certRanks.find((r) => r.row.slug === slug);

export interface HubList {
  title: string;
  sub: string;
  /** The value the list ranks by, for each row. */
  rows: (RankedRow<HubRow> & { value: number })[];
  max: number;
}

/** The first `n` ranked rows and every row tied with the n-th. */
const topWithTies = <T,>(ranked: RankedRow<T>[], n: number) => {
  const last = ranked[n - 1];
  return ranked.filter((r, i) => i < n || (last !== undefined && r.rank === last.rank));
};

/**
 * The two ranked lists under the wall (fix 117; J5-4 (e)): the widest reach —
 * most countries with a certification — and the deepest at home — most
 * certifications in one country. Five each, plus any tied with the fifth.
 */
export function hubLists(rows: readonly HubRow[] = hubRows, n = 5): HubList[] {
  const make = (title: string, sub: string, value: (r: HubRow) => number): HubList => {
    const ranked = topWithTies(rankBy(rows, value, boardOrder), n).map((r) => ({ ...r, value: value(r.row) }));
    return { title, sub, rows: ranked, max: Math.max(1, ...ranked.map((r) => r.value)) };
  };
  return [
    make("Widest reach", "Most countries with a certification", (r) => r.countries),
    make("Deepest at home", "Most certifications in one country", (r) => r.mostInOneCountry),
  ];
}
