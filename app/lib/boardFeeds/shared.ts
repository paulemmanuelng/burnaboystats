/**
 * The pieces every FaveIQ board feed shares (stage 1 of the board's move to
 * faveiq.com/afrobeats; the contract is FaveIQ's
 * docs/design/round14-afrobeats-board/afrobeats-board-feed-spec-2026-11-25.md).
 *
 * The feeds exist for one reader: FaveIQ's server, which renders the board's
 * pages from them and computes nothing itself. So everything that counts,
 * ranks or words a figure is done here, by the same helpers burnaboystats' own
 * pages call, and three rules hold across every body:
 *
 * - NEUTRAL. No field singles one artist out (no `his`, `isBurna`, `anchor`,
 *   `gold`), and no list moves one artist to the front. Burna Boy is one of
 *   the twenty, his records reshaped into the board's shape (burnaAsBoard
 *   below), because on FaveIQ he is a board artist like any other.
 * - FAVEIQ PATHS. A link to a page in the moved section is a FaveIQ path
 *   ("/afrobeats/…"); a link to a page that stays here is an absolute
 *   burnaboystats.com address. FaveIQ types no address of ours.
 * - BILLBOARD TWICE. Every figure, order or sentence that counts chart rows
 *   comes as { all, withoutBillboard }, so FaveIQ's off switch for Billboard's
 *   charts takes the rows down without recounting anything (spec §7).
 */

import {
  afrobeatsArtists,
  BURNA,
  countryMeta,
  chartCountryMeta,
  pageStamp,
  chartPageStamp,
  type AfroArtist,
  type AfroCert,
  type AfroChartRelease,
  type AfroPeak,
  type AfroRelease,
  type Tier,
} from "../../data/afrobeats";
import {
  albums as burnaAlbums,
  singles as burnaSingles,
  features as burnaFeatures,
  COUNTRIES as BURNA_COUNTRIES,
  CERTS_VERIFIED_ON,
  type Cert as BurnaCert,
  type Release as BurnaRelease,
} from "../../data/certifications";
import {
  albumCharts as burnaAlbumCharts,
  singleCharts as burnaSingleCharts,
  featureCharts as burnaFeatureCharts,
  CHART_COUNTRIES,
  CHARTS_STAMP,
  type ChartRelease as BurnaChartRelease,
} from "../../data/charts";
import { liveBoardFor, liveBoardFromSnapshot, type LiveBoard } from "../../data/liveBoards";
import {
  liveCharts as burnaLiveCharts,
  liveChartsUpdated as burnaLiveUpdated,
  liveChartsBuiltAt as burnaLiveBuiltAt,
} from "../../data/liveCharts";
import { comparableArtists } from "../certUnits";
import { plaqueSource } from "../dataDownloads";
import { BURNA_BOY_REAL_NAME, BURNA_BOY_SAME_AS, CANONICAL_ORIGIN } from "../seo";
import { coverFor } from "../covers";
import { artAt } from "../artAt";
import { routeDay } from "../routeStamps";

// ── Shared types (spec §3) ──────────────────────────────────────────────────

/** A figure, order or sentence that counts chart rows, with and without the
 *  rows read from a Billboard chart (spec §7). */
export type BB<T> = { all: T; withoutBillboard: T };

export type { Tier };

/** A date as ISO and in the long form the pages print ("2 October 2026"). */
export type Dated = { iso: string; long: string };

export type ArtistRef = {
  slug: string;
  name: string;
  fullName: string;
  country: string;
  flag: string;
  /** The original Spotify address; FaveIQ applies the size rule itself. */
  image: string;
  /** The artist's page on FaveIQ: "/afrobeats/<slug>". */
  href: string;
  wikipedia: string;
  spotifyUrl: string;
};

/** Every board artist, Burna Boy included, as one list in burnaboystats'
 *  data order: Burna Boy first, then the board file's own order (the order
 *  FaveIQ's "Next →" walks, spec 4.3). */
export type BoardArtist = AfroArtist;

// ── Dates ───────────────────────────────────────────────────────────────────

/** "2 October 2026" — en-GB, UTC, the way every board page formats a day. */
export const longDay = (iso: string): string =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const dated = (iso: string): Dated => ({ iso, long: longDay(iso) });

/** The newest of a set of ISO days. */
export const newest = (days: readonly (string | undefined)[]): string =>
  days.filter((d): d is string => Boolean(d)).sort().at(-1)!;

// ── Addresses ───────────────────────────────────────────────────────────────

/** An absolute burnaboystats.com address, for a page that stays here. */
export const abs = (path: string): string => `${CANONICAL_ORIGIN}${path}`;

/** The FaveIQ twin of one of the section's burnaboystats paths. The section
 *  moves path for path, except /compare (under /afrobeats/compare) and the
 *  box office (under /afrobeats/box-office), and Burna Boy's own three pages,
 *  which on FaveIQ are /afrobeats/burna-boy… like every other artist's. */
export function faveiqPath(path: string): string {
  const [p, rest = ""] = splitSuffix(path);
  if (p === "/certifications") return `/afrobeats/burna-boy${rest}`;
  if (p === "/records/charts") return `/afrobeats/burna-boy/charts${rest}`;
  if (p === "/live-charts") return `/afrobeats/burna-boy/live${rest}`;
  if (p === "/compare" || p.startsWith("/compare/")) return `/afrobeats${p}${rest}`;
  if (p === "/records/tours/revenue") return `/afrobeats/box-office${rest}`;
  if (p === "/records/tours/revenue/countries") return `/afrobeats/box-office/countries${rest}`;
  if (p === "/afrobeats" || p.startsWith("/afrobeats/")) return `${p}${rest}`;
  throw new Error(`faveiqPath: ${path} is not a page in the moved section`);
}

const splitSuffix = (path: string): [string, string?] => {
  const i = path.search(/[?#]/);
  return i < 0 ? [path] : [path.slice(0, i), path.slice(i)];
};

export const artistHref = (slug: string) => `/afrobeats/${slug}`;
export const chartsHref = (slug: string) => `/afrobeats/${slug}/charts`;
export const liveHref = (slug: string) => `/afrobeats/${slug}/live`;
export const pairHref = (pair: string) => `/afrobeats/compare/${pair}`;

/** The methodology sections the pages link to, by name, as absolute
 *  addresses (spec §2 `links`): those pages stay on burnaboystats. */
export const FEED_LINKS: Readonly<Record<string, string>> = {
  principles: abs("/methodology#principles"),
  sources: abs("/methodology#sources"),
  registers: abs("/methodology#registers"),
  "certified-units": abs("/methodology#certified-units"),
  "threshold-history": abs("/methodology#threshold-history"),
};

// ── Billboard (spec §7) ─────────────────────────────────────────────────────

/** Whether a chart body is one of Billboard's. Paul, 26 Nov 2026: the switch
 *  takes down every chart burnaboystats lists as Billboard's — the US, the two
 *  global charts and every Billboard country chart, 22 codes in all. Decided
 *  by the body a row was READ from, which is the body the pages print beside
 *  it: Burna Boy's Ecuador row was read from IFPI Latin America, the board's
 *  two Ecuador rows from Billboard Ecuador Songs. */
export const isBillboardBody = (body: string): boolean => /\bBillboard\b/.test(body);

// ── Burna Boy, normalised (spec §6) ─────────────────────────────────────────

export const BURNA_SLUG = "burna-boy";

const sameAs = (prefix: string) => {
  const url = BURNA_BOY_SAME_AS.find((u) => u.startsWith(prefix));
  if (!url) throw new Error(`boardFeeds: no ${prefix} address in BURNA_BOY_SAME_AS`);
  return url;
};
const BURNA_WIKIPEDIA = sameAs("https://en.wikipedia.org/");
const BURNA_SPOTIFY = sameAs("https://open.spotify.com/artist/");

/** His sleeves as /compare shows them (certUnits' own lookup, 500px), so his
 *  rows carry the art every other surface gives the same release. */
const burnaComparable = comparableArtists.find((a) => a.slug === BURNA_SLUG)!;
const burnaCover = (title: string): string | undefined =>
  burnaComparable.releases.find((r) => r.title === title)?.cover;

/** One of his plaques in the board's shape. A plaque that is not a register
 *  row says so the board's way, with `source` — his own pages mark his label
 *  plaques by an issuer `body` alone, the same fact (dataDownloads'
 *  plaqueSource draws the line for the CSV and the API already). */
function boardCert(c: BurnaCert): AfroCert {
  const country = BURNA_COUNTRIES[c.c] ?? { name: c.c, flag: "", body: c.c };
  const source = plaqueSource(c, country);
  return {
    c: c.c,
    level: c.level,
    ...(c.x ? { x: c.x } : {}),
    ...(c.plus ? { plus: c.plus } : {}),
    ...(c.body ? { body: c.body } : {}),
    ...(source !== "register" ? { source } : {}),
    ...(c.announced?.on ? { announced: { via: c.announced.via, on: c.announced.on } } : {}),
  };
}

const KINDS: readonly [readonly BurnaRelease[], AfroRelease["kind"]][] = [
  [burnaAlbums, "Albums"],
  [burnaSingles, "Lead singles"],
  [burnaFeatures, "Featured appearances"],
];

/** A chart row as the board stores one: no peak date, which the board's own
 *  rows do not carry. */
const boardPeak = (e: AfroPeak): AfroPeak => ({
  c: e.c,
  peak: e.peak,
  ...(e.note ? { note: e.note } : {}),
  ...(e.weeksAtPeak !== undefined ? { weeksAtPeak: e.weeksAtPeak } : {}),
  ...(e.weeks !== undefined ? { weeks: e.weeks } : {}),
});

const CHART_KINDS: readonly [readonly BurnaChartRelease[], AfroChartRelease["kind"]][] = [
  [burnaAlbumCharts, "Albums"],
  [burnaSingleCharts, "Singles"],
  [burnaFeatureCharts, "Singles"],
];

/** His hook on FaveIQ, from the data (round 14): true only while he leads
 *  the board, which tests/boardFeeds.test.ts holds — the day he does not, the
 *  test fails and Paul picks new words before the feed ships. */
export const burnaHook = (certs: number, countries: number) =>
  `The most certifications on the board: ${certs} in ${countries} countries.`;

const burnaReleases: AfroRelease[] = KINDS.flatMap(([items, kind]) =>
  items.map((r) => {
    const cover = burnaCover(r.title);
    return { title: r.title, kind, ...(cover ? { cover } : {}), certs: r.certs.map(boardCert) };
  }),
);

/** His chart releases' sleeves: the certification ledger's where the release
 *  is certified (the same address the plaque rows carry), else the shared
 *  cover table's, at the 500px rung every board sleeve is stored at (the
 *  table holds 100px addresses; certUnits normalises them the same way). */
const burnaChartCover = (title: string, kind: AfroChartRelease["kind"]): string | undefined => {
  const certified = burnaCover(title);
  if (certified) return certified;
  const shared = coverFor(title, kind === "Albums" ? "album" : "song");
  return shared ? artAt(shared, 500) : undefined;
};

const burnaCharts: AfroChartRelease[] = CHART_KINDS.flatMap(([items, kind]) =>
  items.map((r) => {
    const cover = burnaChartCover(r.title, kind);
    return { title: r.title, kind, ...(cover ? { cover } : {}), entries: r.entries.map(boardPeak) };
  }),
);

/**
 * Burna Boy as a board artist: his certifications, charts and identity in the
 * board's shape, so every board helper (certCount, topAward, offRegisterPhrase,
 * chartNo1s …) counts him exactly as it counts the other nineteen. No credit
 * and no year on his releases, as the board's carry neither (build plan §9,
 * decision 13); his own /certifications keeps them.
 */
export const burnaAsBoard: BoardArtist = {
  slug: BURNA_SLUG,
  name: BURNA.name,
  fullName: BURNA_BOY_REAL_NAME,
  country: BURNA.country,
  flag: BURNA.flag,
  hook: burnaHook(
    burnaReleases.reduce((n, r) => n + r.certs.length, 0),
    new Set(burnaReleases.flatMap((r) => r.certs.map((c) => c.c))).size,
  ),
  spotifyId: BURNA_SPOTIFY.split("/").at(-1)!,
  wikipedia: BURNA_WIKIPEDIA,
  image: BURNA.image,
  verifiedOn: CERTS_VERIFIED_ON,
  swept: true,
  releases: burnaReleases,
  charts: burnaCharts,
};

/** His live board, built from his own snapshot by the board's own builder. */
export const burnaLiveBoard: LiveBoard = liveBoardFromSnapshot(
  BURNA_SLUG,
  burnaLiveCharts,
  burnaLiveUpdated,
  burnaLiveBuiltAt,
);

/** Any board artist's live board, his included; undefined for none. */
export const liveBoardOf = (slug: string): LiveBoard | undefined =>
  slug === BURNA_SLUG ? burnaLiveBoard : liveBoardFor(slug);

/** Every artist on FaveIQ's board, in burnaboystats' data order: Burna Boy,
 *  then the board file. */
export const boardArtists: readonly BoardArtist[] = [burnaAsBoard, ...afrobeatsArtists];

export const isBurna = (a: { slug: string }) => a.slug === BURNA_SLUG;

export const boardArtistBySlug = (slug: string): BoardArtist | undefined =>
  boardArtists.find((a) => a.slug === slug);

export const artistRef = (a: BoardArtist): ArtistRef => ({
  slug: a.slug,
  name: a.name,
  fullName: a.fullName,
  country: a.country,
  flag: a.flag,
  image: a.image,
  href: artistHref(a.slug),
  wikipedia: a.wikipedia,
  spotifyUrl: isBurna(a) ? BURNA_SPOTIFY : `https://open.spotify.com/artist/${a.spotifyId}`,
});

/** The profiles a MusicGroup or a Dataset's `about` pins the artist with. */
export const sameAsOf = (a: BoardArtist): string[] => [a.wikipedia, artistRef(a).spotifyUrl];

// ── Chart rows: their body, and the Billboard twin ──────────────────────────

/** The chart body a row was read from. The board's rows resolve through
 *  chartCountryMeta (with its Mexico and Ecuador overrides, which name the
 *  Billboard charts the sweeps read); his through his own chart table, which
 *  is where his rows were read. */
export function peakMeta(a: { slug: string }, code: string): { name: string; flag: string; body: string } {
  if (isBurna(a)) {
    const c = CHART_COUNTRIES[code];
    if (!c) throw new Error(`boardFeeds: Burna Boy's chart table has no ${code}`);
    return { name: c.name, flag: c.flag, body: c.body };
  }
  return chartCountryMeta(code);
}

export const isBillboardRow = (a: { slug: string }, code: string): boolean => isBillboardBody(peakMeta(a, code).body);

/** The artist with every Billboard row taken down, and every release left
 *  with no row taken down with them (a release that charted only on Billboard
 *  charts is not on the page once they are off). */
export const withoutBillboard = (a: BoardArtist): BoardArtist => ({
  ...a,
  charts: a.charts
    .map((r) => ({ ...r, entries: r.entries.filter((e) => !isBillboardRow(a, e.c)) }))
    .filter((r) => r.entries.length > 0),
});

/** One builder run twice: once over every row, once with Billboard's off. */
export function twin<T>(a: BoardArtist, build: (x: BoardArtist) => T): BB<T> {
  return { all: build(a), withoutBillboard: build(withoutBillboard(a)) };
}

/** The same over the whole board. */
export function boardTwin<T>(build: (artists: readonly BoardArtist[]) => T): BB<T> {
  return { all: build(boardArtists), withoutBillboard: build(boardArtists.map(withoutBillboard)) };
}

// ── Stamps ──────────────────────────────────────────────────────────────────

/** The day an artist's certifications were last changed: pageStamp for a
 *  board artist, the day his registers were last verified for him. */
export const certStamp = (a: BoardArtist): string => (isBurna(a) ? CERTS_VERIFIED_ON : pageStamp(a));

/** The day a page that prints chart rows was last changed: chartPageStamp for
 *  a board artist; his certifications or his chart table, the later. */
export const chartStamp = (a: BoardArtist): string =>
  isBurna(a) ? newest([CERTS_VERIFIED_ON, CHARTS_STAMP]) : chartPageStamp(a);

/** The burnaboystats route a FaveIQ page moves from: its sitemap date is the
 *  page's `lastModified` (spec §2, "Freshness"). */
export function sourceRouteOf(faveiq: string): string {
  if (faveiq === "/afrobeats/burna-boy") return "/certifications";
  if (faveiq === "/afrobeats/burna-boy/charts") return "/records/charts";
  if (faveiq === "/afrobeats/burna-boy/live") return "/live-charts";
  if (faveiq === "/afrobeats/box-office") return "/records/tours/revenue";
  if (faveiq === "/afrobeats/box-office/countries") return "/records/tours/revenue/countries";
  if (faveiq.startsWith("/afrobeats/compare")) return faveiq.slice("/afrobeats".length);
  return faveiq;
}

/** A FaveIQ page's lastModified: the same evidence burnaboystats' sitemap
 *  dates the page it moves from with, or `fallback` where that page has none. */
export const lastModifiedOf = (faveiq: string, fallback: string): string =>
  routeDay(sourceRouteOf(faveiq)) ?? fallback;

// ── Small shared builders ───────────────────────────────────────────────────

/** A country as the certification pages describe it. */
export const certCountry = (code: string) => {
  const m = countryMeta(code);
  return { code, name: m.name, flag: m.flag, body: m.body, ...(m.url ? { url: m.url } : {}) };
};
