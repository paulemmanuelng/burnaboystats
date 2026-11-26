/**
 * The compare engine as an API (FaveIQ feed spec §5): every state of the
 * compare tool answered server-side, so the engine (certUnits, certCountry,
 * comparePairs, comparePicker, compareSummary, comparePairLine) is never
 * copied to FaveIQ. Its answer is the view model app/compare/page.tsx's
 * CompareView renders, built by the same engine calls and the same wording;
 * tests/compareView.test.tsx renders the real page for every pair, every
 * market and a spread of query states and holds the two equal.
 *
 * The move's differences (round 14): links are FaveIQ paths; the breadcrumb
 * starts at the Afrobeats Board and the tool's back link is the Board (its
 * /certifications stays here); the tool's title is neutral; a Burna Boy pair
 * canonicals straight to its burnaboystats page; and no field marks any
 * artist's row.
 */

import { countryMeta, pageStamp } from "../../data/afrobeats";
import { CERT_PROGRAMS, CERT_THRESHOLDS, type CertFormat, type TierUnits } from "../../data/certThresholds";
import { numberWord } from "../homeData";
import { PICKER_FOLD, fold, pickerArtists, pickerReleases, plaqueCount } from "../comparePicker";
import { canonicalPair, compareWithLinks, featuredPairs, pairCopy, pairSlug } from "../comparePairs";
import { pairLine } from "../comparePairLine";
import { rereadClause, withLatestRead } from "../boardCadence";
import { joinListed, listedOnly, marketSummary, summaryWords } from "../compareSummary";
import { MAX_VALUE, href as compareHref, one, type SP } from "../compareUrl";
import {
  artistBySlug,
  caveatParagraph,
  comparableArtists,
  compare,
  marketKey,
  nigeriaDefault,
  nigeriaDefaultSolo,
  notCountedNotes,
  priceArtist,
  priceRelease,
  type ArtistUnits,
  type ComparableArtist,
  type ComparableRelease,
  type ComparisonRow,
  type CountryLine,
} from "../certUnits";
import {
  bodyOwner,
  certCountryCodes,
  countryBoards,
  countryCopy,
  countryFromSlug,
  countryIndexCopy,
  countrySlug,
  marketLeader,
  priceCountry,
  pricingPhrase,
  sameRecord,
  type CountryArtistLine,
  type CountryBoard,
  type CountryPlaque,
} from "../certCountry";
import { awardLabel, tierWord } from "../awardName";
import { plaqueMarker } from "../issuerMarker";
import { jointRankLabels } from "../jointRanks";
import { monogramFor } from "../monogram";
import { aboutOf, type Seo } from "./artist";
import { abs, artistRef, boardArtistBySlug, faveiqPath, isBurna, longDay } from "./shared";

// ── The page's constants, derived as it derives them ────────────────────────

const nameOf = (code: string) => (code === "NL" ? "the Netherlands" : code === "CZ" ? "the Czech Republic" : countryMeta(code).name);
const byName = (a: string, b: string) => a.replace(/^the /, "").localeCompare(b.replace(/^the /, ""));
const T = Object.values(CERT_THRESHOLDS);
const streamRatioNames = T.filter((t) => t.singleRaw && !t.assumed).map((t) => nameOf(t.code)).sort(byName);
const assumedNames = T.filter((t) => t.assumed).map((t) => nameOf(t.code)).sort(byName);
const revenueNames = T.filter((t) => t.singleExcluded && !t.albumExcluded).map((t) => nameOf(t.code)).sort(byName);
const noThresholdNames = T.filter((t) => t.singleExcluded && t.albumExcluded).map((t) => nameOf(t.code)).sort(byName);
const historicNames = T.filter((t) => t.historic && !t.plnPerSingle).map((t) => nameOf(t.code)).sort(byName);
const plnBodies = T.filter((t) => t.plnPerSingle).sort((a, b) => byName(nameOf(a.code), nameOf(b.code)));
const labelNames = T.filter((t) => t.labelLevel).map((t) => nameOf(t.code)).sort(byName);
const assumedRatio = (() => {
  const t = T.find((x) => x.assumed && x.singleRaw?.platinum && x.single?.platinum);
  return t ? Math.round(t.singleRaw!.platinum! / t.single!.platinum!) : 100;
})();
const coveredBodies = Object.keys(CERT_THRESHOLDS);
const ukPlatinum = CERT_THRESHOLDS.UK.single!.platinum!;
const fmt = (n: number) => n.toLocaleString("en-US");
const nb = (clause: string) => clause.replace(/ /g, " ");
const boardCodes = new Set(certCountryCodes());

const programShort = (name: string, country: string) => {
  const own = countryMeta(country).body;
  const tail = name.startsWith(own) ? name.slice(own.length).trim() : name;
  return `${country} · ${(tail || name).toUpperCase()}`;
};

// ── Modes ───────────────────────────────────────────────────────────────────

export type Mode = "songs" | "albums" | "artists" | "country";
const readMode = (v: string | undefined): Mode =>
  v === "songs" ? "songs" : v === "albums" ? "albums" : v === "country" ? "country" : "artists";
const isRecordMode = (m: Mode) => m === "songs" || m === "albums";
const formatOf = (m: Mode) => (m === "albums" ? "album" : "single") as "album" | "single";
const noun = (m: Mode, plural = false) => (m === "albums" ? (plural ? "albums" : "album") : plural ? "songs" : "song");

const MODES = [
  { key: "songs", long: "Song vs song", short: "Songs" },
  { key: "albums", long: "Album vs album", short: "Albums" },
  { key: "artists", long: "Artist totals", short: "Artists" },
  { key: "country", long: "By country", short: "Country" },
] as const;

/** A link of the tool, as FaveIQ addresses it. */
const to = (path: string) => faveiqPath(path);
const href = (sp: SP, patch: Record<string, string | null>) => to(compareHref(sp, patch));

// ── 5.1 Normalising ─────────────────────────────────────────────────────────

/** The order `query` lists its keys in: FaveIQ's cache key. */
export const QUERY_ORDER = ["mode", "a", "b", "sa", "sb", "qa", "qb", "feat", "ng", "all", "country"] as const;

/**
 * The state a raw query names, with everything the page would not act on
 * dropped (spec 5.1): unknown keys; a slug that is not on the board; a title
 * that is not that artist's release in the mode's format; any other value of
 * mode, feat, ng or all; a value over 200 characters (dropped, not cut, as
 * compareUrl's carried() drops it); and a key the state never reads (a market
 * outside country mode, a side's search once its release is chosen, the two
 * sides in country mode, Nigeria in country mode, "all" outside a pair), so
 * equal states share one key. The defaults are dropped too: mode=artists is
 * the absent mode.
 */
export function normalise(raw: URLSearchParams | SP): { sp: SP; query: [string, string][] } {
  const first = (k: string): string | undefined => {
    const v = raw instanceof URLSearchParams ? (raw.get(k) ?? undefined) : one(raw[k]);
    return v !== undefined && v.length <= MAX_VALUE && v.length > 0 ? v : undefined;
  };
  const out: Record<string, string> = {};
  const modeRaw = first("mode");
  const mode: Mode = modeRaw === "songs" || modeRaw === "albums" || modeRaw === "country" ? modeRaw : "artists";
  if (mode !== "artists") out.mode = mode;
  if (first("feat") === "0") out.feat = "0";
  if (mode === "country") {
    const code = countryFromSlug(first("country") ?? "");
    if (code) out.country = countrySlug(code);
  } else {
    const a = artistBySlug(first("a") ?? "");
    const b = artistBySlug(first("b") ?? "");
    if (a) out.a = a.slug;
    if (b) out.b = b.slug;
    if (isRecordMode(mode)) {
      const format = formatOf(mode);
      for (const [art, s, q] of [[a, "sa", "qa"], [b, "sb", "qb"]] as const) {
        if (!art) continue;
        const title = first(s);
        const rel = title ? art.releases.find((r) => r.title === title && r.format === format) : undefined;
        if (rel) out[s] = rel.title;
        else if (first(q)) out[q] = first(q)!;
      }
    }
    const ng = first("ng");
    if (ng === "1" || ng === "0") out.ng = ng;
    if (mode === "artists" && out.a && out.b && first("all") === "1") out.all = "1";
  }
  const query = QUERY_ORDER.filter((k) => k in out).map((k) => [k, out[k]] as [string, string]);
  return { sp: Object.fromEntries(query), query };
}

// ── Shapes ──────────────────────────────────────────────────────────────────

type PlaqueTop = { title: string; level: string; x: number; body?: string; source?: "label" | "announcement"; plus?: string };

/** A pill as chips.tsx prints it: the award's words, and the programme or
 *  issuer marker beside it. */
const plaqueOut = (top: PlaqueTop, country: string) => {
  const marker = plaqueMarker(top, countryMeta(country).body);
  return {
    title: top.title,
    level: top.level,
    x: top.x,
    ...(top.plus ? { plus: top.plus } : {}),
    ...(top.body ? { body: top.body } : {}),
    ...(top.source ? { source: top.source } : {}),
    label: awardLabel(top),
    ...(marker ? { marker } : {}),
  };
};

const lineOut = (l: CountryLine | null) =>
  l
    ? {
        units: l.units,
        releases: l.releases,
        counted: l.counted,
        ...(l.reason ? { reason: l.reason } : {}),
        ...(l.caveat ? { caveat: l.caveat } : {}),
        ...(l.vintage ? { vintage: l.vintage } : {}),
        ...(l.assumed ? { assumed: l.assumed } : {}),
        ...(l.historic ? { historic: l.historic } : {}),
        top: l.top ? plaqueOut(l.top, l.country) : null,
        ...(l.notCounted
          ? { notCounted: { plaques: l.notCounted.plaques, top: plaqueOut(l.notCounted.top, l.country), reason: l.notCounted.reason } }
          : {}),
      }
    : null;

/** An artist of the engine as FaveIQ links it: their board page. */
const artistOf = (x: ComparableArtist) => {
  const board = boardArtistBySlug(x.slug);
  if (!board) throw new Error(`compare feed: ${x.slug} is not a board artist`);
  return artistRef(board);
};

const countriesHeld = (x: ArtistUnits) => new Set([...x.byCountry, ...x.listed].map((l) => l.country)).size;

const sideOut = (name: string, x: ArtistUnits, release: ComparableRelease | null) => ({
  name,
  artist: artistOf(x.artist),
  ...(release
    ? {
        release: {
          title: release.title,
          ...(release.credit ? { credit: release.credit } : {}),
          ...(release.cover ? { cover: release.cover } : {}),
          letter: monogramFor(release.title),
        },
      }
    : {}),
  total: x.total,
  pricedPlaques: x.pricedPlaques,
  excludedPlaques: x.excludedPlaques,
  plaquesHeld: x.pricedPlaques + x.excludedPlaques,
  countries: countriesHeld(x),
  nigeria: { units: x.nigeria.units, plaques: x.nigeria.plaques },
});

// ── Country mode (5.3) ──────────────────────────────────────────────────────

const tierRun = (t: TierUnits, body?: string) =>
  ([
    ["Silver", t.silver],
    ["Gold", t.gold],
    ["Platinum", t.platinum],
    ["Diamond", t.diamond],
  ] as const)
    .filter(([, n]) => n !== null)
    .map(([name, n]) => nb(`${tierWord(name, body)} ${fmt(n as number)}`))
    .join(" · ");

const indexHref = (includeFeatures: boolean) => to(includeFeatures ? "/compare/in" : "/compare?mode=country&feat=0");
const boardHref = (code: string, includeFeatures: boolean) =>
  to(includeFeatures ? `/compare/in/${countrySlug(code)}` : `/compare?mode=country&country=${countrySlug(code)}&feat=0`);

const formatOnBoard = (board: CountryBoard, format?: CertFormat) =>
  !format || board.programs.some((x) => x.lines.some((l) => l.plaqueList.some((p) => p.format === format)));

const boardMarks = (board: CountryBoard): string[] => {
  const t = board.thresholds;
  return [
    t?.assumed && formatOnBoard(board, t.assumedFormat) ? "§" : null,
    t?.historic && formatOnBoard(board, t.historicFormat) ? "¶" : null,
  ].filter((m): m is string => Boolean(m));
};

const andList = (xs: string[]) => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);

const pickOf = (x: ComparableArtist) => ({ slug: x.slug, name: x.name, image: x.image, href: artistOf(x).href });

function countryIndexOut(includeFeatures: boolean) {
  const boards = countryBoards({ includeNigeria: true, includeFeatures });
  const totalPlaques = boards.reduce((n, b) => n + b.plaques, 0);
  const elsewhere = boards.filter((b) => b.counted && b.thresholds?.pricedAt).map((b) => `${b.name}'s at ${b.thresholds!.pricedAt}`);
  const unpriced = boards.filter((b) => !b.counted).map((b) => `${b.name}'s`);
  const lede =
    `${boards.length} countries, ${fmt(totalPlaques)} certifications — a record two artists share counted once — ` +
    `${boards[0]?.artists ?? 0} artists deep in the biggest. Every figure is a floor, priced at the body named beside it` +
    `${elsewhere.length ? ` — ${andList(elsewhere)}` : ""}` +
    `${unpriced.length ? `${elsewhere.length ? ", " : " — "}${andList(unpriced)} not at all` : ""}.`;
  const entries = boards.map((b) => {
    const lead = marketLeader(b);
    return {
      code: b.code,
      slug: countrySlug(b.code),
      name: b.name,
      flag: b.flag,
      body: b.body,
      href: boardHref(b.code, includeFeatures),
      artists: b.artists,
      plaques: b.plaques,
      units: b.units,
      counted: b.counted,
      notCounted: b.notCounted,
      marks: boardMarks(b),
      leader:
        lead.kind === "one"
          ? { kind: "one" as const, artist: pickOf(lead.artist), units: lead.units }
          : lead.kind === "level"
            ? { kind: "level" as const, artists: lead.artists.map(pickOf), units: lead.units }
            : { kind: "none" as const },
    };
  });
  return {
    kind: "index" as const,
    entries,
    lede,
    share: {
      countries: boards.length,
      plaques: totalPlaques,
      top: boards.slice(0, 3).map((b) => ({ name: b.name, units: b.units })),
    },
  };
}

const plaqueRowOut = (p: CountryPlaque, code: string) => ({ ...plaqueOut(p, code), format: p.format, units: p.units });

function countryBoardOut(code: string, includeFeatures: boolean) {
  const board = priceCountry(code, { includeNigeria: true, includeFeatures });
  const t = board.thresholds;
  const programmes = board.programs.filter((p) => p.program).map((p) => p.name);
  const records = board.programs.flatMap((x) => x.records).filter((r) => r.plaque.units !== null);
  const multiplied = board.programs.some((x) => x.lines.some((l) => l.plaqueList.some((p) => p.x > 1 || !!p.plus)));
  const onBoard = (format?: CertFormat) => formatOnBoard(board, format);
  const byUnits = records
    .map((r) => ({ p: r.plaque, holders: r.holders.map((h) => ({ name: h.artist.name, featured: h.featured })) }))
    .sort((x, y) => (y.p.units ?? 0) - (x.p.units ?? 0) || x.p.title.localeCompare(y.p.title));
  const biggest = byUnits.slice(0, 10);
  const cut = biggest.length === 10 ? biggest[9].p.units : null;
  const moreAtCut = cut === null ? [] : byUnits.slice(10).filter((r) => r.p.units === cut);
  const sharedLine = board.shared
    ? `${board.shared} ${board.shared === 1 ? "record" : "records"} shared by two or more artists, counted once`
    : "";
  const top2 = board.lines.slice(0, 2).map((l) => l.artist);
  const tiedTop = board.lines.filter((l) => l.units === board.lines[0]?.units);
  const tiedSecond = board.lines.slice(1).filter((l) => l.units === board.lines[1]?.units);
  const names = (ls: CountryArtistLine[]) =>
    ls.length < 2 ? ls.map((l) => l.artist.name).join("") : `${ls.slice(0, -1).map((l) => l.artist.name).join(", ")} and ${ls[ls.length - 1].artist.name}`;
  const pair = top2.length === 2 ? canonicalPair(top2[0], top2[1]) : null;
  const n = comparableArtists.length;

  const figureMeta = board.counted
    ? ["certified units", `${board.artists} of ${n} artists certified`, `${board.counted} of ${board.plaques} cert${board.plaques === 1 ? "" : "s"} counted`, board.notCounted ? `${board.notCounted} not counted` : ""]
        .filter(Boolean)
        .map(nb)
        .join(" · ")
    : [`${board.plaques} cert${board.plaques === 1 ? "" : "s"} held by ${board.artists} artist${board.artists === 1 ? "" : "s"}`, "none priceable"].map(nb).join(" · ");

  const levelsText = t?.sourceUrl
    ? (t.sourceLinkText ?? t.pricedAt ?? (t.single || t.album ? `${bodyOwner(board.body)}'s own levels` : `${bodyOwner(board.body)}'s register`))
    : null;

  const nextLead = pair
    ? board.counted && tiedTop.length > 2
      ? `${tiedTop.slice(0, -1).map((l) => l.artist.name).join(", ")} and ${tiedTop[tiedTop.length - 1].artist.name} share the lead in ${board.inSentence}. The head-to-head puts ${board.lines[0].artist.name} and ${board.lines[1].artist.name} side by side in every country at once.`
      : board.counted && tiedTop.length === 1 && tiedSecond.length > 1
        ? `${board.lines[0].artist.name} leads ${board.inSentence}; ${names(tiedSecond)} share second. The head-to-head puts ${board.lines[0].artist.name} and ${board.lines[1].artist.name} side by side in every country at once.`
        : board.counted
          ? `${board.lines[0].artist.name} and ${board.lines[1].artist.name} lead ${board.inSentence}. The head-to-head puts them side by side in every country at once.`
          : `No certification here can be priced, so nobody leads ${board.inSentence}. The head-to-head compares ${board.lines[0].artist.name} and ${board.lines[1].artist.name} everywhere one can.`
    : `${board.lines[0]?.artist.name} is the only one of the ${n} certified in ${board.inSentence}. Every other market is one tap away.`;

  const notes: { key: "not-priced" | "shared" | "separate"; text: string }[] = [];
  if (board.notCounted > 0 || t?.singleExcluded || t?.albumExcluded)
    notes.push({
      key: "not-priced",
      text:
        `${board.notCounted > 0 ? `${board.notCounted} certification${board.notCounted === 1 ? "" : "s"} here ${board.notCounted === 1 ? "is" : "are"} real and cannot be put on this page's scale. ` : ""}` +
        `${[...new Set([t?.singleExcluded, t?.albumExcluded].filter(Boolean) as string[])].join(" ")} Listed, never summed.`.trimStart(),
    });
  if (board.shared > 0)
    notes.push({
      key: "shared",
      text: `${board.shared === 1 ? "one record here is" : `${board.shared} records here are`} credited to more than one of the board's artists. Each artist's line carries the certification in full, because it is theirs; the country's figure counts it once, because it is one certification.`,
    });
  if (programmes.length > 0)
    notes.push({
      key: "separate",
      text: `${programmes.join(", ")} ${programmes.length === 1 ? "runs" : "run"} beside ${board.body} here at ${programmes.length === 1 ? "its" : "their"} own levels, so ${programmes.length === 1 ? "its certifications have" : "their certifications have"} a table of their own: summing them into the ${board.body} line would report certifications ${board.body} never issued. ${programmes.map((p) => CERT_PROGRAMS[p]?.note).filter(Boolean).join(" ")}`.trimEnd(),
    });

  const linePlaces = (prog: (typeof board.programs)[number]) => (prog.counted ? jointRankLabels(prog.lines.map((l) => l.units)) : prog.lines.map(() => null));

  return {
    kind: "board" as const,
    code: board.code,
    slug: countrySlug(board.code),
    name: board.name,
    flag: board.flag,
    body: board.body,
    inSentence: board.inSentence,
    counted: board.counted,
    units: board.units,
    notCounted: board.notCounted,
    plaques: board.plaques,
    shared: board.shared,
    artists: board.artists,
    roster: n,
    changeHref: indexHref(includeFeatures),
    programs: board.programs.map((prog) => {
      const places = linePlaces(prog);
      return {
        name: prog.name,
        ...(prog.program ? { program: prog.program } : {}),
        counted: prog.counted,
        units: prog.units,
        plaques: prog.plaques,
        single: prog.single ? { ...prog.single, words: tierRun(prog.single, prog.program) } : null,
        album: prog.album ? { ...prog.album, words: tierRun(prog.album, prog.program) } : null,
        head: `${prog.lines.length} artist${prog.lines.length === 1 ? "" : "s"} · ${prog.plaques} certification${prog.plaques === 1 ? "" : "s"} · ${prog.single?.platinum ? `${tierWord("Platinum", prog.program)} ${fmt(prog.single.platinum)}` : "no published level"}`,
        lines: prog.lines.map((l, i) => ({
          artist: pickOf(l.artist),
          units: l.units,
          counted: l.counted,
          notCounted: l.notCounted,
          plaques: l.plaques,
          top: l.top ? plaqueRowOut(l.top, board.code) : null,
          place: places[i],
          ownProgram: Boolean(l.program),
        })),
      };
    }),
    pricing: pricingPhrase(board),
    copy: countryCopy(board),
    biggest: biggest.map(({ p, holders }) => ({
      title: p.title,
      format: p.format,
      ...(p.cover ? { cover: p.cover } : {}),
      letter: monogramFor(p.title),
      label: awardLabel(p),
      ...(plaqueMarker(p, countryMeta(board.code).body) ? { marker: plaqueMarker(p, countryMeta(board.code).body)! } : {}),
      level: p.level,
      units: p.units ?? 0,
      holders,
    })),
    moreAtCut: moreAtCut.length && cut !== null ? { count: moreAtCut.length, units: cut, titles: moreAtCut.map((r) => r.p.title) } : null,
    words: {
      figureMeta,
      programSplit: board.counted > 0 && board.programs.length > 1 ? board.programs.map((p) => nb(`${p.plaques} at ${p.name}`)).join(", ") : null,
      sharedLine: sharedLine || null,
      levelsLink: t?.sourceUrl && levelsText ? { href: t.sourceUrl, text: levelsText } : null,
      thresholdNotes: [
        t?.vintage && onBoard(t.vintageFormat) ? { mark: "‡", text: t.vintage } : null,
        t?.assumed && onBoard(t.assumedFormat) ? { mark: "§", text: t.assumed } : null,
        t?.historic && onBoard(t.historicFormat) ? { mark: "¶", text: t.historic } : null,
        t?.caveat && multiplied ? { mark: "†", text: t.caveat } : null,
      ].filter((x): x is { mark: string; text: string } => Boolean(x)),
      notes,
      next: {
        lead: nextLead,
        pair: pair ? { slug: pairSlug(pair[0], pair[1]), a: pair[0].slug, b: pair[1].slug, href: to(`/compare/${pairSlug(pair[0], pair[1])}`), label: `${pair[0].name} vs ${pair[1].name}` } : null,
        everyMarketHref: pair ? null : indexHref(includeFeatures),
      },
    },
    share: {
      units: board.units,
      artists: board.artists,
      roster: n,
      plaques: board.plaques,
      top: board.lines.slice(0, 3).map((l) => ({ name: l.artist.name, units: l.units })),
    },
  };
}

// ── 5.2 The view ────────────────────────────────────────────────────────────

/** Where a state is served from: the tool (a query state), or one of the
 *  section's own pages (spec 4.6), which carry their own breadcrumb leaf and
 *  a pair's own title. */
export type ServedAt = { path: string; leaf?: string; pairTitle?: string };

const NEUTRAL_TITLE = "Compare Certified Units — Afrobeats Artists Head to Head";
const BASE = {
  description:
    "Compare two Afrobeats artists, two songs or two albums by the units behind their plaques — or one market at a time, at each body's published threshold.",
  shareTitle: "Certified units, compared",
  shareDescription:
    "Two records, or two catalogues, priced at each certifying body's own threshold. A floor for both sides under identical rules.",
};

const SEGMENT = { compare: "Compare", in: "By country" } as const;

export function compareView(sp: SP, served: ServedAt = { path: "/compare" }) {
  const mode = readMode(one(sp.mode));
  const record = isRecordMode(mode);
  const format = formatOf(mode);
  const countryMode = mode === "country";
  const countryCode = countryMode ? countryFromSlug(one(sp.country) ?? "") : null;
  const a = artistBySlug(one(sp.a) ?? "") ?? null;
  const b = artistBySlug(one(sp.b) ?? "") ?? null;
  const showAll = one(sp.all) === "1";
  const songA = record && a ? (a.releases.find((r) => r.title === one(sp.sa) && r.format === format) ?? null) : null;
  const songB = record && b ? (b.releases.find((r) => r.title === one(sp.sb) && r.format === format) ?? null) : null;
  const both = Boolean(a && b);
  const ngParam = one(sp.ng) === "1" ? "1" : one(sp.ng) === "0" ? "0" : undefined;
  const includeFeatures = one(sp.feat) !== "0";
  const sameRecording = Boolean(
    record && songA && songB && a && b && a.slug !== b.slug &&
      songA.title.toLowerCase() === songB.title.toLowerCase() &&
      sameRecord({ artist: a, plaque: songA }, { artist: b, plaque: songB }),
  );
  const sameArtist = Boolean(a && b && a.slug === b.slug);
  const pairView = mode === "artists" && Boolean(a && b) && !sameArtist && !countryMode;
  const c = !countryMode && both && !sameRecording && !sameArtist
    ? compare(a!, b!, { ...(ngParam ? { includeNigeria: ngParam === "1" } : {}), includeFeatures })
    : null;
  const solo = a ?? b;
  const soloSide = solo && !countryMode && (!both || sameArtist) ? solo : null;
  const soloDefault = soloSide ? nigeriaDefaultSolo(soloSide, includeFeatures) : null;
  const soloNg = ngParam ? ngParam === "1" : Boolean(soloDefault?.on);
  const soloPriced = soloSide ? priceArtist(soloSide, { includeNigeria: soloNg, includeFeatures }) : null;
  const refused = Boolean(sameArtist || sameRecording);
  const songPriced = (art: ComparableArtist | null, rel: ComparableRelease | null, ngIn: boolean) =>
    art && rel ? priceRelease(art, rel.title, { includeNigeria: ngIn, includeFeatures: true }) : null;
  const ngForSongs = c?.options.includeNigeria ?? soloNg;
  const spa = songPriced(a, songA, ngForSongs);
  const spb = songPriced(b, songB, ngForSongs);
  const useSongs = Boolean(record && spa && spb && !sameRecording && !sameArtist);
  const ready = countryMode ? false : record ? useSongs : both && !refused;
  const partial = countryMode || refused ? false : record ? Boolean(spa || spb) : Boolean(solo);
  const sideA: ArtistUnits | null = record ? (spa ?? (ready ? null : spb)) : (c?.a ?? soloPriced ?? null);
  const sideB: ArtistUnits | null = record ? spb : (c?.b ?? null);
  const totalA = sideA?.total ?? 0;
  const totalB = sideB?.total ?? 0;
  const nameA = record && songA ? songA.title : record && songB && !spa ? songB.title : (solo?.name ?? "");
  const nameB = record && songB ? songB.title : (b?.name ?? "");
  const releaseA = record ? (songA ?? (spa ? null : songB)) : null;

  const byMax = (x: ComparisonRow, y: ComparisonRow) =>
    Math.max(y.a?.units ?? 0, y.b?.units ?? 0) - Math.max(x.a?.units ?? 0, x.b?.units ?? 0) || x.country.localeCompare(y.country);
  const pinNg = (rs: ComparisonRow[], on: boolean) => (on ? [...rs.filter((r) => r.country === "NG"), ...rs.filter((r) => r.country !== "NG")] : rs);
  const rows: ComparisonRow[] = useSongs
    ? (() => {
        const keyOf = (l: CountryLine) => marketKey(l.country, l.program);
        const codes = [...new Set([...spa!.byCountry.map(keyOf), ...spa!.listed.map(keyOf), ...spb!.byCountry.map(keyOf), ...spb!.listed.map(keyOf)])];
        const find = (p: typeof spa, key: string) => p!.byCountry.find((l) => keyOf(l) === key) ?? p!.listed.find((l) => keyOf(l) === key) ?? null;
        return pinNg(
          codes
            .map((key) => {
              const la = find(spa, key);
              const lb = find(spb, key);
              const line = (la ?? lb)!;
              return { country: line.country, program: line.program, body: line.body, a: la, b: lb, contested: Boolean(la && lb) };
            })
            .sort(byMax),
          ngForSongs,
        );
      })()
    : c
      ? showAll
        ? pinNg([...c.rows, ...c.collapsed.flatMap((t) => t.rows)].sort(byMax), c.options.includeNigeria)
        : c.rows
      : [];

  const summary = marketSummary(useSongs ? rows : c ? [...c.rows, ...c.collapsed.flatMap((t) => t.rows)] : []);
  const summaryText = summaryWords(nameA, nameB, summary);
  const listedNames = [...new Set(listedOnly(rows).map((r) => countryMeta(r.country).name))];
  const noteSource = useSongs
    ? {
        notCounted: notCountedNotes([...spa!.listed, ...spb!.listed, ...spa!.byCountry.filter((l) => l.notCounted), ...spb!.byCountry.filter((l) => l.notCounted)]),
        caveats: [...new Set([...spa!.caveats, ...spb!.caveats])],
        vintages: [...new Set([...spa!.vintages, ...spb!.vintages])],
        assumptions: [...new Set([...spa!.assumptions, ...spb!.assumptions])],
        historics: [...new Set([...spa!.historics, ...spb!.historics])],
      }
    : c
      ? { notCounted: c.notCounted, caveats: c.caveats, vintages: c.vintages, assumptions: c.assumptions, historics: c.historics }
      : { notCounted: [], caveats: [], vintages: [], assumptions: [], historics: [] };
  const visibleNotCounted = rows.some((r) => (r.a && !r.a.counted) || (r.b && !r.b.counted) || r.a?.notCounted || r.b?.notCounted);
  const visibleCaveat = rows.some((r) => r.a?.caveat || r.b?.caveat);
  const visibleVintage = rows.some((r) => r.a?.vintage || r.b?.vintage);
  const visibleAssumed = rows.some((r) => r.a?.assumed || r.b?.assumed);
  const visibleHistoric = rows.some((r) => r.a?.historic || r.b?.historic);
  const shown = (k: "caveat" | "assumed" | "historic") => new Set(rows.flatMap((r) => [r.a?.[k], r.b?.[k]]).filter(Boolean) as string[]);
  const shownCaveats = noteSource.caveats.filter((x) => shown("caveat").has(x));
  const shownAssumptions = noteSource.assumptions.filter((x) => shown("assumed").has(x));
  const shownHistorics = noteSource.historics.filter((x) => shown("historic").has(x));
  const unpricedIn = (l: CountryLine | null) => (!l ? 0 : !l.counted ? l.releases : (l.notCounted?.plaques ?? 0));
  const foldedIn = (rowsIn: ComparisonRow[]) => rowsIn.reduce((m, r) => m + unpricedIn(r.a) + unpricedIn(r.b), 0);
  const foldedNotCounted = c && !showAll ? c.collapsed.reduce((n, t) => n + foldedIn(t.rows), 0) : 0;

  const tie = ready && totalA === totalB;
  const leadA = totalA >= totalB;
  const max = Math.max(totalA, totalB, 1);
  const diff = Math.abs(totalA - totalB);
  const ratio = Math.min(totalA, totalB) > 0 ? Math.max(totalA, totalB) / Math.min(totalA, totalB) : null;
  const ratioWords = (r: number) => (r >= 10 ? Math.round(r).toLocaleString("en-US") : r.toFixed(1));
  const ngOn = c?.options.includeNigeria ?? soloNg;
  const ngDefault = a && b && !refused && !record ? nigeriaDefault(a, b, includeFeatures).on : Boolean(soloDefault?.on);
  const ngWhy = ngParam || refused ? null : c ? (c.nigeria.on ? c.nigeria.reason : null) : soloDefault?.on ? soloDefault.reason : null;
  const scope = ngOn
    ? `${coveredBodies.length} countries checked · Nigeria included`
    : `${coveredBodies.filter((x) => x !== "NG").length} countries checked · outside Nigeria`;
  const registers =
    ready && a && b && !record
      ? (a.registersReadOn === b.registersReadOn
          ? ` · both registers read ${longDay(a.registersReadOn)}`
          : ` · registers read ${longDay(a.registersReadOn)} (${a.name}) and ${longDay(b.registersReadOn)} (${b.name})`) +
        rereadClause([a.registersReadOn, b.registersReadOn])
      : "";
  const trailing = (n: string) => (n.endsWith("s") ? `${n}'` : `${n}'s`);
  const countryBoard = countryCode ? priceCountry(countryCode, { includeNigeria: true, includeFeatures }) : null;

  // ── Title, canonical, crumbs ─────────────────────────────────────────────
  const pair = mode === "artists" && a && b && a.slug !== b.slug ? canonicalPair(a, b) : null;
  const pairPath = pair ? `/compare/${pairSlug(pair[0], pair[1])}` : null;
  const canonical = countryMode
    ? to(countryCode ? `/compare/in/${countrySlug(countryCode)}` : "/compare/in")
    : pairPath
      ? pair!.some((x) => isBurna(x))
        ? abs(pairPath)
        : to(pairPath)
      : to("/compare");

  const seo: Seo = (() => {
    if (countryMode) {
      if (!countryCode) {
        const i = countryIndexCopy();
        return { title: i.title, description: i.description, shareTitle: i.shareTitle, shareDescription: i.shareDescription, noindex: false };
      }
      const copy = countryCopy(priceCountry(countryCode));
      return { title: copy.title, description: copy.description, shareTitle: copy.title, shareDescription: copy.sub, noindex: false };
    }
    if (pair) {
      const copy = pairCopy(a!, b!);
      return {
        title: copy.title,
        description: copy.description,
        shareTitle: copy.title,
        shareDescription: copy.sub,
        noindex: false,
        ...(ready && !record
          ? {
              dataset: {
                name: `${a!.name} vs ${b!.name} — certified units`,
                description: copy.description,
                keywords: [a!.name, b!.name, "certified units", "certifications", "Afrobeats", "head to head"],
                variableMeasured: ["Certified units (floor) per country", "Highest certification per release per country", "Plaques counted and not counted"],
                dateModified: withLatestRead([pageStamp(a!), pageStamp(b!)]),
                about: [a!, b!].map((x) => aboutOf(boardArtistBySlug(x.slug)!)),
              },
            }
          : {}),
      };
    }
    if (record && a && b) {
      const ra = a.releases.find((r) => r.title === one(sp.sa) && r.format === format);
      const rb = b.releases.find((r) => r.title === one(sp.sb) && r.format === format);
      if (ra && rb && !(ra.title === rb.title && a.slug === b.slug)) {
        const title = `${ra.title} vs ${rb.title}: Certified Units Compared`;
        return {
          title: title.length <= 60 ? title : `${ra.title} vs ${rb.title}`,
          description: `${ra.title} (${a.name}) against ${rb.title} (${b.name}) by the units behind their plaques — priced at each body's own threshold.`.slice(0, 160),
          shareTitle: BASE.shareTitle,
          shareDescription: BASE.shareDescription,
          noindex: false,
        };
      }
    }
    return { title: NEUTRAL_TITLE, ...BASE, noindex: false };
  })();

  // The breadcrumb from the Afrobeats Board, the path's own segments after it.
  const trail: { name: string; path: string }[] = [{ name: "Afrobeats Board", path: "/afrobeats" }];
  let acc = "";
  for (const seg of served.path.split("/").filter(Boolean)) {
    acc += `/${seg}`;
    trail.push({ name: SEGMENT[seg as keyof typeof SEGMENT] ?? seg, path: to(acc) });
  }
  if (served.leaf) trail[trail.length - 1].name = served.leaf;
  const back = countryMode
    ? countryCode
      ? { label: countryMeta(countryCode).name, path: to("/compare/in") }
      : { label: SEGMENT.in, path: to("/compare") }
    : mode === "artists" && a && b && !sameArtist
      ? { label: `${a.name} vs ${b.name}`, path: to("/compare") }
      : { label: SEGMENT.compare, path: "/afrobeats" };

  // ── Words (rule 8) ────────────────────────────────────────────────────────
  const genericLede = {
    before: "Every certification is a floor — a Platinum single in the UK means ",
    em: "at least",
    after: ` ${fmt(ukPlatinum)}, and could be ${fmt(ukPlatinum * 2 - 10_000)}. This page adds those floors up for two records or two artists, at each certifying body's own published threshold, under identical rules.`,
  };
  const roster = numberWord(comparableArtists.length).toLowerCase();
  const lede = pairView
    ? null
    : countryBoard
      ? countryBoard.counted
        ? {
            before: `Every certification the ${roster} artists hold in ${countryBoard.inSentence}, priced at ${pricingPhrase(countryBoard, "own published threshold")} and ranked. Each figure is a floor — a certification says `,
            em: "at least",
            after: ", never what a record sold.",
          }
        : {
            before: `Every certification the ${roster} artists hold in ${countryBoard.inSentence}. ${countryBoard.body} publishes no unit threshold, so these certifications are listed here and never summed — each is real, the scale is not published.`,
            em: null,
            after: "",
          }
      : countryMode
        ? {
            before: `Who leads where — the ${countryBoards({ includeNigeria: true, includeFeatures }).length} countries where the board's ${roster} artists hold a certification, the artist on top in each, and the certified units its priced certifications add up to.`,
            em: null,
            after: "",
          }
        : genericLede;

  const leadLine = ready
    ? tie
      ? { strong: "Level", rest: ` — both at least ${fmt(totalA)} certified units.` }
      : {
          strong: leadA ? nameA : nameB,
          rest: ` leads by at least ${fmt(diff)} certified units${ratio && ratio >= 1.05 ? ` — a floor ${ratioWords(ratio)}× the size of ${trailing(leadA ? nameB : nameA)}` : ""}.`,
        }
    : null;
  const waiting =
    partial && !ready
      ? record
        ? `Pick ${mode === "albums" ? "an album" : "a song"} on each side — the country-by-country table appears once both are chosen.`
        : includeFeatures
          ? "The country-by-country table appears when both sides are filled. Every certification the artist holds counts, featured appearances included."
          : "The country-by-country table appears when both sides are filled. Featured appearances are off — lead credits only."
      : null;

  const isSongA = Boolean(record && songA);
  const isSongB = Boolean(record && songB);
  const clearHref = (side: "a" | "b", isSong: boolean) =>
    isSong && !refused
      ? `${href(sp, { [side === "a" ? "sa" : "sb"]: null })}#pick-${side}`
      : href(sp, { [side]: null, [side === "a" ? "sa" : "sb"]: null, [side === "a" ? "qa" : "qb"]: null });
  const pickFor = (side: "a" | "b") => {
    const otherSlug = one(sp[side === "a" ? "b" : "a"]);
    return pickerArtists(otherSlug).map((o) => ({
      slug: o.slug,
      name: o.name,
      image: o.image,
      plaques: plaqueCount(o),
      href: `${href(sp, { [side]: o.slug })}#${otherSlug ? "result" : `slot-${side === "a" ? "b" : "a"}`}`,
    }));
  };
  const releasesFor = (side: "a" | "b", art: ComparableArtist | null, chosen: ComparableRelease | null, otherChosen: boolean, otherArtist: boolean) => {
    if (!record || !art || chosen) return null;
    const field = side === "a" ? "qa" : "qb";
    const target = side === "a" ? "sa" : "sb";
    const landing = otherChosen ? "result" : otherArtist ? `pick-${side === "a" ? "b" : "a"}` : `slot-${side === "a" ? "b" : "a"}`;
    return pickerReleases(art, fold(one(sp[field]) ?? ""), format).map((r) => ({
      title: r.title,
      ...(r.credit ? { credit: r.credit } : {}),
      format: r.format,
      plaques: r.certs.length,
      ...(r.cover ? { cover: r.cover } : {}),
      letter: monogramFor(r.title),
      href: `${href(sp, { [target]: r.title, [field]: null })}#${landing}`,
    }));
  };

  const ngToggle = href(sp, { ng: ngOn ? (ngDefault ? "0" : null) : ngDefault ? null : "1" });
  const showMore = (x: ComparableArtist, other: ComparableArtist) => {
    const all = compareWithLinks(x.slug);
    return {
      links: all.filter((l) => l.slug !== other.slug).map((l) => ({ slug: l.slug, name: l.name, href: to(l.href) })),
      total: all.length,
      allHref: artistOf(x).href,
    };
  };

  return {
    state: {
      mode,
      ready,
      partial,
      pairView,
      refused: sameArtist ? ("same-artist" as const) : sameRecording ? ("same-recording" as const) : null,
      showAll,
      includeFeatures,
      includeNigeria: ngOn,
    },
    canonical,
    seo,
    crumbs: { trail, back },
    modes: MODES.map((m) => ({
      key: m.key,
      long: m.long,
      short: m.short,
      current: m.key === mode,
      href:
        m.key === "country"
          ? to(includeFeatures ? "/compare/in" : "/compare?mode=country&feat=0")
          : href(sp, { mode: m.key, sa: null, sb: null, qa: null, qb: null, country: null }),
    })),
    picker: countryMode
      ? null
      : {
          fold: PICKER_FOLD,
          artists: { a: a ? null : pickFor("a"), b: b ? null : pickFor("b") },
          releases: {
            a: releasesFor("a", a, songA, Boolean(songB), Boolean(b)),
            b: releasesFor("b", b, songB, Boolean(songA), Boolean(a)),
          },
          queries: { a: one(sp.qa) ?? "", b: one(sp.qb) ?? "" },
          noun: { one: noun(mode), many: noun(mode, true) },
          clear: { a: a ? clearHref("a", isSongA) : null, b: b ? clearHref("b", isSongB) : null },
        },
    // The head prints only for a comparison or one filled side (ready or
    // partial): a refusal prints its refusal and nothing else.
    sides: {
      a: (ready || partial) && sideA ? sideOut(nameA || sideA.artist.name, sideA, releaseA) : null,
      b: ready && sideB ? sideOut(nameB, sideB, record ? songB : null) : null,
    },
    lead: {
      tie,
      leader: ready ? (tie ? null : leadA ? ("a" as const) : ("b" as const)) : null,
      diff,
      ratio,
      ratioWords: ratio ? ratioWords(ratio) : null,
      max,
    },
    words: {
      kicker: served.pairTitle ? "Certified units, compared" : "Afrobeats Board › Compare",
      h1: served.pairTitle ?? (countryBoard ? `Certified units in ${countryBoard.inSentence}` : countryMode ? "Certified units by country" : "Certified units, compared"),
      lede,
      pairLine:
        pairView && c
          ? pairLine({
              nameA: a!.name,
              nameB: b!.name,
              plaquesA: c.a.pricedPlaques + c.a.excludedPlaques,
              plaquesB: c.b.pricedPlaques + c.b.excludedPlaques,
              totalA: c.a.total,
              totalB: c.b.total,
            })
          : null,
      coverage: `${scope}${registers}`,
      leadLine,
      waiting,
      floor: { atLeast: ukPlatinum, couldBe: ukPlatinum * 2 - 10_000 },
      nextLead: ready
        ? `Two artists priced against each other — the other ${numberWord(comparableArtists.length - 2).toLowerCase()} are one tap away, each with a ledger you can bring back here.`
        : null,
      refusal: sameArtist
        ? { strong: `That is ${a!.name} on both sides.`, rest: " Pick a different artist for one of them." }
        : sameRecording
          ? { strong: "That is the same recording on both sides.", rest: ` “${songA!.title}” is one record with one set of certifications; pick a different ${noun(mode)} for one of them.` }
          : null,
      empty: ready && rows.length === 0 ? `Neither ${nameA} nor ${nameB} holds a certification ${ngOn ? "anywhere on the board" : "outside Nigeria"}${!ngOn ? " — include Nigeria to compare them" : ""}.` : null,
      legend: useSongs ? "the certification" : "the top certification",
    },
    nigeria: countryMode
      ? null
      : { on: ngOn, byDefault: !ngParam, reason: ngWhy ? ngWhy.replace(/^Nigeria included: /, "") : null, toggleHref: ngToggle },
    features: countryMode || mode === "artists" ? { on: includeFeatures, toggleHref: href(sp, { feat: includeFeatures ? "0" : null }) } : null,
    // The table, its fold and its notes print only under a comparison.
    rows: (ready ? rows : []).map((r) => {
      const m = countryMeta(r.country);
      return {
        country: r.country,
        name: m.name,
        flag: m.flag,
        ...(r.program ? { program: r.program, programShort: programShort(r.program, r.country) } : {}),
        body: r.body,
        contested: r.contested,
        href: boardCodes.has(r.country) ? to(`/compare/in/${countrySlug(r.country)}`) : null,
        a: lineOut(r.a),
        b: lineOut(r.b),
      };
    }),
    collapsed: ready && !useSongs && !showAll && c ? c.collapsed.map((t) => ({ side: t.side, artist: t.artist, countries: t.countries, units: t.units, notCounted: foldedIn(t.rows) })) : [],
    showAllHref: ready && !useSongs && !showAll && c && c.collapsed.length > 0 ? href(sp, { all: "1" }) : null,
    showFewerHref: ready && !useSongs && showAll && c && c.collapsed.length > 0 ? `${href(sp, { all: null })}#country-table` : null,
    summary: ready && rows.length > 0 ? { lead: summary.priced > 0 ? summaryText.lead : "", rest: summary.priced > 0 ? summaryText.rest : "", listed: listedNames, listedWords: listedNames.length ? `${joinListed(listedNames)} ${listedNames.length === 1 ? "is" : "are"} listed, not priced` : null } : null,
    notes: {
      notCounted:
        ready && rows.length > 0 && (visibleNotCounted || foldedNotCounted > 0) && noteSource.notCounted.length > 0
          ? noteSource.notCounted.map((n) => ({ country: n.country, name: countryMeta(n.country).name, body: n.body, ...(n.issuer ? { issuer: n.issuer } : {}), reason: n.reason }))
          : [],
      caveats: ready && visibleCaveat && shownCaveats.length > 0 ? caveatParagraph(shownCaveats) : "",
      vintages: ready && visibleVintage ? noteSource.vintages : [],
      assumptions: ready && visibleAssumed ? shownAssumptions : [],
      historics: ready && visibleHistoric ? shownHistorics : [],
      foldedNotCounted: ready ? foldedNotCounted : 0,
    },
    method: {
      streamRatio: streamRatioNames,
      assumed: assumedNames,
      revenue: revenueNames,
      noThreshold: noThresholdNames,
      historic: historicNames,
      pln: plnBodies.map((t) => ({ name: nameOf(t.code), perSingle: t.plnPerSingle! })),
      label: labelNames,
      assumedRatio,
      covered: coveredBodies.length,
      ukPlatinum,
      registers: registers.replace(/^ · /, ""),
    },
    more: pairView ? { a: showMore(a!, b!), b: showMore(b!, a!) } : null,
    featured: mode === "artists" && !a && !b
      ? featuredPairs().map(([x, y]) => ({ slug: pairSlug(x, y), a: x.slug, b: y.slug, label: `${x.name} vs ${y.name}`, href: to(`/compare/${pairSlug(x, y)}`) }))
      : [],
    country: countryMode ? (countryCode ? countryBoardOut(countryCode, includeFeatures) : countryIndexOut(includeFeatures)) : null,
    share: pair ? (({ title, sub, totals, scope: s }) => ({ title, sub, totals: [totals[0], totals[1]], scope: s }))(pairCopy(a!, b!)) : null,
  };
}

export type CompareViewOut = ReturnType<typeof compareView>;

/** The stamp of a compare answer: the newest register read behind it. */
export const compareStamp = (sp: SP): string => {
  const a = artistBySlug(one(sp.a) ?? "");
  const b = artistBySlug(one(sp.b) ?? "");
  const sides = [a, b].filter((x): x is ComparableArtist => Boolean(x));
  return withLatestRead(sides.length ? sides.map(pageStamp) : comparableArtists.map(pageStamp));
};

/** The engine answer's cache rule (spec 5.4): an hour at the edge per full
 *  address, a day stale while it revalidates; FaveIQ caches each normalised
 *  state for an hour on its side too. */
export const ENGINE_CACHE_CONTROL = "public, s-maxage=3600, stale-while-revalidate=86400";
