// ============================================================================
//  ONE COUNTRY, EVERY ARTIST — certified units pivoted by market
// ============================================================================
//
// /compare prices two artists against each other across every country. This
// pivots the same corpus the other way: pick Canada, and see what each of the
// sixteen artists has cleared THERE, ranked.
//
// IT IS THE SAME ARITHMETIC, DELIBERATELY. Every figure here runs through
// `unitsForCert` and the rule-1 collapse that certUnits.ts already enforces —
// one plaque per release per country, at its current tier, priced at the body's
// own published threshold. Nothing is re-derived: a second implementation of
// the pricing rules would drift from the compare table within a week, and a
// reader who saw Canada say 720,000 here and 715,000 there would be right to
// stop trusting both. tests/compareCountry.test.ts asserts line-for-line
// agreement with priceArtist() for all 27 countries and all 16 artists.
//
// TWO THINGS THIS VIEW CHANGES, AND ONLY TWO:
//
//  1. NIGERIA IS NOT SEPARATED, because here it is the subject rather than a
//     term in a sum. The compare page splits it out so a request-based register
//     cannot quietly decide a head-to-head; a page whose whole content is "what
//     the board holds in Nigeria" has no such risk — but it still carries the
//     provenance note, because the reason the separation exists elsewhere is
//     exactly what a reader of the Nigerian page needs to know.
//
//  2. THE UNIT OF RANKING IS THE ARTIST, not the country. So a plaque that
//     cannot be priced (Colombia; Poland's singles until 23 Sep 2026) does not sink an artist to
//     the bottom in silence: their line carries the plaque, says it is not
//     counted, and ranks on what could be priced.
// ============================================================================

import {
  CERT_PROGRAMS,
  CERT_THRESHOLDS,
  type CertFormat,
  type CountryThresholds,
  type TierUnits,
} from "../data/certThresholds";
import { countryMeta } from "../data/afrobeats";
import type { Tier } from "../data/certifications";
import {
  comparableArtists,
  programOf,
  unitsForCert,
  DEFAULT_OPTIONS,
  type ComparableArtist,
  type UnitsOptions,
} from "./certUnits";

/** One release's highest plaque in this country, priced. */
export interface CountryPlaque {
  title: string;
  credit?: string;
  format: CertFormat;
  isFeature: boolean;
  cover?: string;
  level: Tier;
  x: number;
  /** The award PROGRAMME when it is not the country's default (RIAA Latin). */
  body?: string;
  /** Set when that programme is priced separately — see certUnits.programOf. */
  program?: string;
  /** null = a real plaque this body publishes no usable threshold for. */
  units: number | null;
  /** Why it could not be priced. */
  why?: string;
}

export interface CountryArtistLine {
  artist: ComparableArtist;
  /** undefined on the country's own body; "RIAA Latin" on a programme line. */
  program?: string;
  /** Sum of every priced plaque held here. A FLOOR, like everything on
   *  /compare — a Platinum means "at least", never "sold". */
  units: number;
  /** Plaques that contributed to `units`. */
  counted: number;
  /** Real plaques here that could not be priced. Listed, never summed. */
  notCounted: number;
  /** counted + notCounted — every plaque held here, priced or not. */
  plaques: number;
  /** Highest-priced first, then the unpriced ones by tier. */
  plaqueList: CountryPlaque[];
  /** The biggest plaque behind the line, for the chip. */
  top: CountryPlaque | null;
}

/** One award programme's slice of a country: its own artists, ranked, with its
 *  own subtotal. Every country has at least one — its default body — and the
 *  United States has two, because RIAA Latin certifies a Platino at 60,000
 *  units where RIAA certifies a Platinum at 1,000,000 and the two must never
 *  be summed into one "United States" figure (Paul, 23 Sep 2026). */
export interface CountryProgram {
  /** What awarded these: "RIAA", "RIAA Latin". */
  name: string;
  /** undefined on the country's own body; set on a separately-priced one. */
  program?: string;
  lines: CountryArtistLine[];
  units: number;
  counted: number;
  notCounted: number;
  plaques: number;
  /** What one plaque is worth under THIS programme. */
  single: TierUnits | null;
  album: TierUnits | null;
  /** The programme's own note, where it has one. */
  note?: string;
}

export interface CountryBoard {
  code: string;
  name: string;
  /** The name as it reads INSIDE a sentence. Four of the 27 take the definite
   *  article, and "Every plaque the sixteen artists hold in United States" was
   *  the kind of line a reader stops at. */
  inSentence: string;
  flag: string;
  /** The certifying body — "Music Canada", "BPI", "TCSN". */
  body: string;
  /** Its own register, where the site links a plaque back to. */
  url?: string;
  /** What a plaque is worth here; undefined for a country with no row at all
   *  (cannot happen with today's data — every plaque's country is priced or
   *  explicitly excluded — but the view must not crash if one arrives). */
  thresholds?: CountryThresholds;
  /** The country's own body's lines — the ranked table. */
  lines: CountryArtistLine[];
  /** Every programme awarded in this country, the default body first. A
   *  country with one programme has one entry and renders exactly as before. */
  programs: CountryProgram[];
  /** The COUNTRY's totals — every programme, because a Platino is as much a US
   *  plaque as a Platinum. The split is named beside the figure, and each
   *  programme carries its own subtotal. */
  units: number;
  counted: number;
  notCounted: number;
  plaques: number;
  /** Artists holding at least one plaque here, under any programme. */
  artists: number;
  options: UnitsOptions;
}

/** Countries whose name takes "the" in running prose. */
const TAKES_THE = new Set(["US", "UK", "NL", "CZ"]);
export const inSentence = (code: string): string =>
  `${TAKES_THE.has(code) ? "the " : ""}${countryMeta(code).name}`;

const TIER_RANK: Record<Tier, number> = { Silver: 0, Gold: 1, Platinum: 2, Diamond: 3 };
const rank = (level: Tier, x = 1) => TIER_RANK[level] * 100 + x;

/**
 * Every artist's standing in one country.
 *
 * The collapse key is `title|format`, exactly as in priceArtist: an album and
 * its title-track single are two releases, and keying on the title alone folded
 * them into one.
 */
export function priceCountry(
  code: string,
  options: UnitsOptions = { ...DEFAULT_OPTIONS, includeNigeria: true },
  roster: ComparableArtist[] = comparableArtists,
): CountryBoard {
  const meta = countryMeta(code);
  const t = CERT_THRESHOLDS[code];
  // One bucket per programme: the country's own body, plus any separately
  // priced programme a plaque here was awarded under. Keyed by the programme
  // name or "" for the body's own.
  const buckets = new Map<string, CountryArtistLine[]>();

  for (const artist of roster) {
    const releases = artist.releases.filter((r) => options.includeFeatures || !r.isFeature);
    // Rule 1 still collapses per RELEASE per country — a release holds one
    // plaque here, at its highest tier — and the winner then lands on its own
    // programme's line.
    const best = new Map<string, CountryPlaque>();

    for (const release of releases) {
      for (const cert of release.certs) {
        if (cert.c !== code) continue;
        const { units, why } = unitsForCert(cert, release.format);
        const key = `${release.title}|${release.format}`;
        const held = best.get(key);
        if (held) {
          const better =
            units !== null && held.units !== null
              ? units > held.units
              : units !== null
                ? true
                : held.units !== null
                  ? false
                  : rank(cert.level, cert.x ?? 1) > rank(held.level, held.x);
          if (!better) continue;
        }
        best.set(key, {
          title: release.title,
          credit: release.credit,
          format: release.format,
          isFeature: release.isFeature,
          cover: release.cover,
          level: cert.level,
          x: cert.x ?? 1,
          body: cert.body,
          program: programOf(cert),
          units,
          why: why ?? undefined,
        });
      }
    }

    if (best.size === 0) continue;

    const byProgram = new Map<string, CountryPlaque[]>();
    for (const p of best.values()) {
      const k = p.program ?? "";
      byProgram.set(k, [...(byProgram.get(k) ?? []), p]);
    }
    for (const [k, plaques] of byProgram) {
      const plaqueList = plaques.sort(
        (a, b) =>
          (b.units ?? -1) - (a.units ?? -1) ||
          rank(b.level, b.x) - rank(a.level, a.x) ||
          a.title.localeCompare(b.title),
      );
      const priced = plaqueList.filter((p) => p.units !== null);
      buckets.set(k, [
        ...(buckets.get(k) ?? []),
        {
          artist,
          program: k || undefined,
          units: priced.reduce((n, p) => n + (p.units ?? 0), 0),
          counted: priced.length,
          notCounted: plaqueList.length - priced.length,
          plaques: plaqueList.length,
          plaqueList,
          top: plaqueList[0] ?? null,
        },
      ]);
    }
  }

  // Ranked on what could be priced. Ties go to the artist holding more plaques
  // — a 3× Platinum and a Gold beat one 3× Platinum at the same floor — and
  // then to the name, so the order is stable across builds.
  const ranked = (xs: CountryArtistLine[]) =>
    [...xs].sort(
      (a, b) => b.units - a.units || b.plaques - a.plaques || a.artist.name.localeCompare(b.artist.name),
    );

  const programFor = (key: string): CountryProgram => {
    const lines = ranked(buckets.get(key) ?? []);
    const prog = key ? CERT_PROGRAMS[key] : undefined;
    return {
      name: key || meta.body,
      program: key || undefined,
      lines,
      units: lines.reduce((n, l) => n + l.units, 0),
      counted: lines.reduce((n, l) => n + l.counted, 0),
      notCounted: lines.reduce((n, l) => n + l.notCounted, 0),
      plaques: lines.reduce((n, l) => n + l.plaques, 0),
      single: prog ? prog.single : t?.single ?? null,
      album: prog ? prog.album : t?.album ?? null,
      note: prog?.note,
    };
  };

  // The body's own first, then any programme, alphabetically — the order the
  // page renders them in.
  const keys = [...buckets.keys()].filter(Boolean).sort();
  const programs = [programFor(""), ...keys.map(programFor)].filter((p) => p.lines.length > 0);
  const own = programs.find((p) => !p.program);

  return {
    code,
    name: meta.name,
    inSentence: inSentence(code),
    flag: meta.flag,
    body: meta.body,
    url: meta.url,
    thresholds: t,
    lines: own?.lines ?? [],
    programs,
    units: programs.reduce((n, p) => n + p.units, 0),
    counted: programs.reduce((n, p) => n + p.counted, 0),
    notCounted: programs.reduce((n, p) => n + p.notCounted, 0),
    plaques: programs.reduce((n, p) => n + p.plaques, 0),
    // An artist certified under both programmes is ONE artist certified here.
    artists: new Set(programs.flatMap((p) => p.lines.map((l) => l.artist.slug))).size,
    options,
  };
}

/** Every country the board holds a plaque in, most units first. Derived, never
 *  typed: a sweep that adds the first Irish plaque adds the Irish page. */
export function countryBoards(
  options: UnitsOptions = { ...DEFAULT_OPTIONS, includeNigeria: true },
): CountryBoard[] {
  const codes = new Set<string>();
  for (const a of comparableArtists)
    for (const r of a.releases) for (const c of r.certs) codes.add(c.c);
  return [...codes]
    .map((c) => priceCountry(c, options))
    .filter((b) => b.lines.length > 0)
    .sort((a, b) => b.units - a.units || b.plaques - a.plaques || a.name.localeCompare(b.name));
}

/** Country codes that have a page, in the picker's order (most plaques first).
 *  Features ON, so the list does not shrink when a reader turns them off and
 *  a country whose only plaques are featured appearances vanishes mid-session. */
export function certCountryCodes(): string[] {
  const n = new Map<string, number>();
  for (const a of comparableArtists)
    for (const r of a.releases) for (const c of r.certs) n.set(c.c, (n.get(c.c) ?? 0) + 1);
  return [...n.entries()]
    .sort((x, y) => y[1] - x[1] || countryMeta(x[0]).name.localeCompare(countryMeta(y[0]).name))
    .map(([c]) => c);
}

/** "United Kingdom" -> "united-kingdom". The URL says the country's NAME, not
 *  its ISO code: /compare/in/canada is the thing somebody would type. */
export const countrySlug = (code: string): string =>
  countryMeta(code)
    .name.normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** The country code a slug names, or null. Also accepts the ISO code itself,
 *  so a hand-edited ?country=CA resolves rather than dropping the reader back
 *  at the picker. The ROUTE is generated from the name slugs only — one URL per
 *  market, no /compare/in/ca twin for a crawler to split the page over.
 *
 *  Tolerates an absent slug on purpose: Next probes a dynamic route's
 *  opengraph-image once with NO params while collecting page data, and a bare
 *  `slug.toLowerCase()` there failed the whole build. */
export function countryFromSlug(slug: string | undefined): string | null {
  if (!slug) return null;
  const want = slug.toLowerCase();
  const codes = certCountryCodes();
  return (
    codes.find((c) => countrySlug(c) === want) ??
    codes.find((c) => c.toLowerCase() === want) ??
    null
  );
}

/**
 * Title, description and share copy for one country page, from the live
 * figures. Lengths sit inside Google's display limits for every one of the 27
 * — the post-build gate (scripts/check-seo.mjs) reads them off the rendered
 * HTML, and tests/compareCountry.test.ts checks them before the build runs.
 */
export function countryCopy(board: CountryBoard) {
  const n = (x: number) => x.toLocaleString("en-US");
  const where = board.inSentence;
  const long = `Certified Units in ${where} — Afrobeats Artists Ranked`;
  const plaques = `${n(board.plaques)} plaque${board.plaques === 1 ? "" : "s"}`;
  const artists = `${board.artists} artist${board.artists === 1 ? "" : "s"}`;
  const floor = board.counted
    ? `at least ${n(board.units)} certified units`
    : "no published threshold to price them against";
  return {
    title: long.length <= 60 ? long : `Certified Units in ${where}`,
    description:
      `Every Afrobeats plaque awarded in ${where}, priced at ${board.body}'s own thresholds — ` +
      `${artists}, ${plaques}, ${floor}.`,
    /** The share card's second line. */
    sub: `${artists} · ${plaques} · ${board.counted ? `at least ${n(board.units)} units` : "not priceable"}`,
  };
}
