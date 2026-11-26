/**
 * The index of the section (spec 4.1) and the Board itself (4.2).
 *
 * The Board is app/afrobeats/page.tsx's figures, ranks and sentences, built by
 * the same helpers (hubTable's ranks and lists, boardCadence, offRegister),
 * with three differences the move asks for: Burna Boy is a row like every
 * other (built from his normalised record, his hook the data's line); every
 * list keeps its own order (the board's, or its figure's) with no artist
 * moved to the front; and every chart figure comes in its Billboard twin.
 */

import comparePairRedirects from "../../data/comparePairRedirects.json";
import {
  pendingArtists,
  certCount,
  countryCount,
  countryMeta,
  topAward,
  plaqueLabel,
  chartEntries,
  chartNo1s,
  AFROBEATS_LAST_FULL_SWEEP,
} from "../../data/afrobeats";
import { boardOrder, rankLabel, rankRows, type HubRow, type HubSortKey, type RankedRow } from "../hubTable";
import { hubLists } from "../hubRows";
import { rereadClause, withLatestRead } from "../boardCadence";
import { provenanceTileSentence } from "../offRegister";
import { allPairs, featuredPairs, pairSlug } from "../comparePairs";
import { certCountryCodes, countrySlug } from "../certCountry";
import {
  abs,
  artistHref,
  artistRef,
  boardArtists,
  boardTwin,
  BURNA_SLUG,
  certStamp,
  chartsHref,
  dated,
  lastModifiedOf,
  liveBoardOf,
  liveHref,
  newest,
  pairHref,
  type ArtistRef,
  type BB,
  type BoardArtist,
  type Dated,
} from "./shared";

// ── Ranks ───────────────────────────────────────────────────────────────────

export type Rank = { rank: number; joint: boolean; label: string };

export const rankOf = (r: { rank: number; joint: boolean }): Rank => ({ rank: r.rank, joint: r.joint, label: rankLabel(r) });

/** Ranks keyed by slug. */
const bySlug = (ranked: RankedRow<HubRow>[]): Record<string, Rank> =>
  Object.fromEntries(ranked.map((r) => [r.row.slug, rankOf(r)]));

// ── Rows ────────────────────────────────────────────────────────────────────

const mostInOneCountry = (a: BoardArtist) => {
  const by = new Map<string, number>();
  for (const r of a.releases) for (const c of r.certs) by.set(c.c, (by.get(c.c) ?? 0) + 1);
  return Math.max(0, ...by.values());
};

/** One artist's row, as lib/hubRows builds a board artist's. `his` is false
 *  for every row: the table's type carries it, the feed never does. */
export function hubRowOf(a: BoardArtist): HubRow {
  const top = topAward(a);
  return {
    slug: a.slug,
    name: a.name,
    flag: a.flag,
    href: artistHref(a.slug),
    hook: a.hook,
    his: false,
    certs: certCount(a),
    countries: countryCount(a),
    topCert: top ? { label: plaqueLabel(top), code: top.c } : null,
    chartEntries: chartEntries(a),
    no1s: chartNo1s(a),
    live: liveBoardOf(a.slug)?.placements ?? 0,
    mostInOneCountry: mostInOneCountry(a),
  };
}

/** The swept board, Burna Boy included, in the board's order. */
export const boardRows = (artists: readonly BoardArtist[] = boardArtists): HubRow[] =>
  artists.filter((a) => a.swept).map(hubRowOf).sort(boardOrder);

const ROWS: BB<HubRow[]> = boardTwin(boardRows);

/** The board's order — certifications, then name — over any set of artists. */
const inBoardOrder = (artists: readonly BoardArtist[]) => {
  const at = new Map(ROWS.all.map((r, i) => [r.slug, i]));
  return [...artists].sort((x, y) => (at.get(x.slug) ?? Infinity) - (at.get(y.slug) ?? Infinity));
};

// ── 4.1 The index ───────────────────────────────────────────────────────────

export type PageKind =
  | "board"
  | "artist"
  | "artist-charts"
  | "artist-live"
  | "compare"
  | "pair"
  | "country-index"
  | "country"
  | "box-office"
  | "box-office-countries";

export type IndexPage = {
  path: string;
  kind: PageKind;
  slug?: string;
  pair?: string;
  country?: string;
  /** null: the page is its own canonical. Burna Boy's 22 name his
   *  burnaboystats originals (handoff §5). */
  canonical: string | null;
  noindex: boolean;
  lastModified: string;
};

const PAIRS = allPairs().map(([a, b]) => ({ slug: pairSlug(a, b), a: a.slug, b: b.slug }));
const COUNTRY_CODES = certCountryCodes();

/** Burna Boy's FaveIQ pages and the burnaboystats original each points to. */
const BURNA_CANONICAL: Readonly<Record<string, string>> = {
  [`/afrobeats/${BURNA_SLUG}`]: abs("/certifications"),
  [`/afrobeats/${BURNA_SLUG}/charts`]: abs("/records/charts"),
  [`/afrobeats/${BURNA_SLUG}/live`]: abs("/live-charts"),
};

/** A pair with Burna Boy on either side: its canonical is his own
 *  head-to-head here (the slug follows plaque counts, so either order). */
const isBurnaPair = (p: { a: string; b: string }) => p.a === BURNA_SLUG || p.b === BURNA_SLUG;

export function boardIndex() {
  const pages: Omit<IndexPage, "lastModified">[] = [{ path: "/afrobeats", kind: "board", canonical: null, noindex: false }];
  const artists = boardArtists.map((a) => {
    const charts = a.charts.length > 0;
    const live = Boolean(liveBoardOf(a.slug));
    const own = (path: string) => BURNA_CANONICAL[path] ?? null;
    pages.push({ path: artistHref(a.slug), kind: "artist", slug: a.slug, canonical: own(artistHref(a.slug)), noindex: !a.swept });
    if (charts) pages.push({ path: chartsHref(a.slug), kind: "artist-charts", slug: a.slug, canonical: own(chartsHref(a.slug)), noindex: false });
    if (live) pages.push({ path: liveHref(a.slug), kind: "artist-live", slug: a.slug, canonical: own(liveHref(a.slug)), noindex: false });
    return { slug: a.slug, name: a.name, swept: a.swept, pages: { certs: true as const, charts, live } };
  });
  pages.push({ path: "/afrobeats/compare", kind: "compare", canonical: null, noindex: false });
  for (const p of PAIRS)
    pages.push({
      path: pairHref(p.slug),
      kind: "pair",
      pair: p.slug,
      canonical: isBurnaPair(p) ? abs(`/compare/${p.slug}`) : null,
      noindex: false,
    });
  pages.push({ path: "/afrobeats/compare/in", kind: "country-index", canonical: null, noindex: false });
  const countries = COUNTRY_CODES.map((code) => ({ code, slug: countrySlug(code), name: countryMeta(code).name }));
  for (const c of countries)
    pages.push({ path: `/afrobeats/compare/in/${c.slug}`, kind: "country", country: c.slug, canonical: null, noindex: false });
  pages.push({ path: "/afrobeats/box-office", kind: "box-office", canonical: null, noindex: false });
  pages.push({ path: "/afrobeats/box-office/countries", kind: "box-office-countries", canonical: null, noindex: false });

  // A page with no sitemap evidence of its own is dated by the board's
  // certifications, the newest stamp the section reads.
  const fallback = withLatestRead(boardArtists.map(certStamp));
  const dated = pages.map((p) => ({ ...p, lastModified: lastModifiedOf(p.path, fallback) }));

  return {
    dataAsOf: newest(dated.map((p) => p.lastModified)),
    data: {
      pages: dated,
      artists,
      pairs: PAIRS,
      pairOrder: comparePairRedirects.map((r) => ({
        from: r.source.replace(/^\/compare\//, ""),
        to: r.destination.replace(/^\/compare\//, ""),
      })),
      countries,
      featuredPairs: featuredPairs().map(([a, b]) => ({ slug: pairSlug(a, b), a: a.slug, b: b.slug })),
    },
  };
}

// ── 4.2 The Board ───────────────────────────────────────────────────────────

/** The live rail's caption, word for word as app/afrobeats/page.tsx sets it
 *  (tests/boardFeeds.test.tsx holds the two equal). */
export const LIVE_CADENCE_NOTE =
  "Live placements across Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country charts — platform charts, not official ones.";

export const BOARD_TITLE = "The Afrobeats Board — Certifications & Charts";
export const BOARD_COLLECTION_DESCRIPTION =
  "Certification and chart records for Afrobeats' biggest artists, each read in the issuing body's own register or, where it holds no row or only a lower tier, the body's own announcement or the label's own award.";

type BoardRowOut = {
  artist: ArtistRef;
  hook: string;
  certs: number;
  countries: number;
  topCert: { label: string; code: string } | null;
  chartEntries: BB<number>;
  no1s: BB<number>;
  live: number;
  mostInOneCountry: number;
  rank: Rank;
};

type RailChip = { slug: string; name: string; href: string; value: number };

/** A rail sorted on its own figure, ties in the board's order. */
const rail = (rows: readonly HubRow[], value: (r: HubRow) => number, href: (slug: string) => string): RailChip[] =>
  [...rows]
    .sort((x, y) => value(y) - value(x) || boardOrder(x, y))
    .map((r) => ({ slug: r.slug, name: r.name, href: href(r.slug), value: value(r) }));

export function boardFeed() {
  const rows = ROWS;
  const bySlugOf = (list: HubRow[]) => new Map(list.map((r) => [r.slug, r]));
  const noBB = bySlugOf(rows.withoutBillboard);
  const certRanks = bySlug(rankRows(rows.all, "certs"));
  const artistOf = new Map(boardArtists.map((a) => [a.slug, a]));
  const rank = (key: HubSortKey, list: HubRow[]) => bySlug(rankRows(list, key));

  const out: BoardRowOut[] = rows.all.map((r) => {
    const a = artistOf.get(r.slug)!;
    const nb = noBB.get(r.slug)!;
    return {
      artist: artistRef(a),
      hook: a.hook,
      certs: r.certs,
      countries: r.countries,
      topCert: r.topCert,
      chartEntries: { all: r.chartEntries, withoutBillboard: nb.chartEntries },
      no1s: { all: r.no1s, withoutBillboard: nb.no1s },
      live: r.live,
      mostInOneCountry: r.mostInOneCountry,
      rank: certRanks[r.slug],
    };
  });

  // The rails: every swept artist's chart entries, and every artist with a
  // live board (a scheduled artist's included, as the page does).
  const liveRows = inBoardOrder(boardArtists.filter((a) => liveBoardOf(a.slug))).map(hubRowOf);
  const fullSweep: Dated = dated(AFROBEATS_LAST_FULL_SWEEP);

  // The names the description leads with: the swept board's first five, in
  // the board's order, and how many more (the page's own count, which leaves
  // a scheduled artist out).
  const names = rows.all.map((r) => r.name);
  const nameList = `${names.slice(0, 5).join(", ")} and ${names.length - 5} more`;
  const stamp = withLatestRead(boardArtists.map(certStamp));

  const lists = hubLists(rows.all).map((l) => ({
    title: l.title,
    sub: l.sub,
    max: l.max,
    rows: l.rows.map((x) => ({ slug: x.row.slug, name: x.row.name, href: artistHref(x.row.slug), value: x.value, rank: rankOf(x) })),
  }));

  const field = inBoardOrder(boardArtists.filter((a) => a.swept)).map((a) => ({
    slug: a.slug,
    name: a.name,
    countries: countryCount(a),
    plaques: certCount(a),
  }));

  return {
    dataAsOf: stamp,
    data: {
      count: rows.all.length,
      rows: out,
      ranksBy: {
        certs: certRanks,
        countries: rank("countries", rows.all),
        chartEntries: { all: rank("chartEntries", rows.all), withoutBillboard: rank("chartEntries", rows.withoutBillboard) },
        no1s: { all: rank("no1s", rows.all), withoutBillboard: rank("no1s", rows.withoutBillboard) },
        live: rank("live", rows.all),
      },
      pending: inBoardOrder(pendingArtists).map((a) => ({ artist: artistRef(a), hook: a.hook })),
      field,
      lists,
      rails: {
        chartEntries: {
          all: rail(rows.all, (r) => r.chartEntries, chartsHref),
          withoutBillboard: rail(rows.withoutBillboard, (r) => r.chartEntries, chartsHref),
        },
        live: rail(liveRows, (r) => r.live, liveHref),
      },
      cadence: {
        fullSweep,
        reread: rereadClause([AFROBEATS_LAST_FULL_SWEEP]),
        rereadCurly: rereadClause([AFROBEATS_LAST_FULL_SWEEP], "’"),
      },
      provenanceTile: provenanceTileSentence(),
      liveNote: LIVE_CADENCE_NOTE,
      seo: {
        title: BOARD_TITLE,
        description: `${nameList}, counted by one rule — every plaque read from the body or label that issued it, never a fan tally.`,
        shareTitle: "The Afrobeats Board",
        shareDescription: "The genre's biggest names, counted by one rule.",
        noindex: false,
        collectionPage: { name: "The Afrobeats Board", description: BOARD_COLLECTION_DESCRIPTION },
        itemList: [
          ...rows.all.map((r) => ({ name: r.name, path: artistHref(r.slug) })),
          ...inBoardOrder(pendingArtists).map((a) => ({ name: a.name, path: artistHref(a.slug) })),
        ],
      },
      share: {
        dots: field.map((f) => ({ slug: f.slug, plaques: f.plaques, countries: f.countries })),
        total: boardArtists.reduce((n, a) => n + certCount(a), 0),
      },
      lastModified: lastModifiedOf("/afrobeats", stamp),
    },
  };
}

/** The board's order (certifications, then name) as slugs: the order the
 *  artist feeds' head-to-head reads its opponent from (round 14's rule). */
export const boardOrderSlugs = (): string[] => ROWS.all.map((r) => r.slug);
