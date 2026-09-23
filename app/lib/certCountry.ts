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
//     cannot be priced (Colombia, Poland's singles) does not sink an artist to
//     the bottom in silence: their line carries the plaque, says it is not
//     counted, and ranks on what could be priced.
// ============================================================================

import { CERT_THRESHOLDS, type CertFormat, type CountryThresholds } from "../data/certThresholds";
import { countryMeta } from "../data/afrobeats";
import type { Tier } from "../data/certifications";
import {
  comparableArtists,
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
  /** null = a real plaque this body publishes no usable threshold for. */
  units: number | null;
  /** Why it could not be priced. */
  why?: string;
}

export interface CountryArtistLine {
  artist: ComparableArtist;
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
  lines: CountryArtistLine[];
  units: number;
  counted: number;
  notCounted: number;
  plaques: number;
  /** Artists holding at least one plaque here. */
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
  const lines: CountryArtistLine[] = [];

  for (const artist of roster) {
    const releases = artist.releases.filter((r) => options.includeFeatures || !r.isFeature);
    const best = new Map<string, CountryPlaque>();

    for (const release of releases) {
      for (const cert of release.certs) {
        if (cert.c !== code) continue;
        const { units, why } = unitsForCert(cert, release.format);
        const key = `${release.title}|${release.format}`;
        const held = best.get(key);
        // Rule 1: the HIGHEST award this release holds here, and nothing else.
        // Priced and unpriced plaques are ranked on different scales — units
        // where there are units, tier where there are none — so a release that
        // somehow held both keeps the priced one, which is the one that can be
        // shown on the same axis as the rest of the table.
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
          units,
          why: why ?? undefined,
        });
      }
    }

    if (best.size === 0) continue;

    const plaqueList = [...best.values()].sort(
      (a, b) =>
        (b.units ?? -1) - (a.units ?? -1) ||
        rank(b.level, b.x) - rank(a.level, a.x) ||
        a.title.localeCompare(b.title),
    );
    const priced = plaqueList.filter((p) => p.units !== null);
    lines.push({
      artist,
      units: priced.reduce((n, p) => n + (p.units ?? 0), 0),
      counted: priced.length,
      notCounted: plaqueList.length - priced.length,
      plaques: plaqueList.length,
      plaqueList,
      top: plaqueList[0] ?? null,
    });
  }

  // Ranked on what could be priced. Ties go to the artist holding more plaques
  // — a 3× Platinum and a Gold beat one 3× Platinum at the same floor — and
  // then to the name, so the order is stable across builds.
  lines.sort(
    (a, b) => b.units - a.units || b.plaques - a.plaques || a.artist.name.localeCompare(b.artist.name),
  );

  return {
    code,
    name: meta.name,
    inSentence: inSentence(code),
    flag: meta.flag,
    body: meta.body,
    url: meta.url,
    thresholds: CERT_THRESHOLDS[code],
    lines,
    units: lines.reduce((n, l) => n + l.units, 0),
    counted: lines.reduce((n, l) => n + l.counted, 0),
    notCounted: lines.reduce((n, l) => n + l.notCounted, 0),
    plaques: lines.reduce((n, l) => n + l.plaques, 0),
    artists: lines.length,
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
 *  so /compare/in/ca resolves rather than 404s.
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
