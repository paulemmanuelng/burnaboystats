// ============================================================================
//  ONE COUNTRY, EVERY ARTIST — certified units pivoted by market
// ============================================================================
//
// /compare prices two artists against each other across every country. This
// pivots the same corpus the other way: pick Canada, and see what each of the
// roster's artists has cleared THERE, ranked.
//
// IT IS THE SAME ARITHMETIC, DELIBERATELY. Every figure here runs through
// `unitsForCert` and the rule-1 collapse that certUnits.ts already enforces —
// one plaque per release per country, at its current tier, priced at the body's
// own published threshold. Nothing is re-derived: a second implementation of
// the pricing rules would drift from the compare table within a week, and a
// reader who saw Canada say 720,000 here and 715,000 there would be right to
// stop trusting both. tests/compareCountry.test.ts asserts line-for-line
// agreement with priceArtist() for every country and every artist.
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
//
// AND ONE THING THE COUNTRY'S OWN FIGURE DOES THAT NO ARTIST LINE DOES: it
// counts a RECORD once. "Essence" is Wizkid's plaque and Tems's, and each of
// their lines carries it in full — that is the artist's own standing, and it
// matches /compare line for line. But "The board's plaques here · at least
// 2,910,000 certified units" summed those lines, so South Africa counted
// Essence, Ginger and No.1 twice each (Paul, 4 Oct 2026: a bug, fixed). The
// programme and country totals now sum RECORDS (`records`), matched artist
// WITH title — see `sameRecord` — and the lines are untouched.
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
import { awardRank } from "./awardName";
import {
  comparableArtists,
  programOf,
  unitsForCert,
  floorUnits,
  sumUnits,
  DEFAULT_OPTIONS,
  type ComparableArtist,
  type UnitsOptions,
} from "./certUnits";
import type { ExactUnits } from "../data/certThresholds";
import { SHARED_RECORDS } from "../data/sharedRecords";
import { isBilledFirst } from "../data/songRoles";

/** One release's highest plaque in this country, priced. */
export interface CountryPlaque {
  title: string;
  credit?: string;
  format: CertFormat;
  isFeature: boolean;
  cover?: string;
  level: Tier;
  x: number;
  /** A lower tier awarded on top (AMPROFON's "Platino & Oro") — the chip
   *  reads "4× Platinum + Gold"; still one plaque. */
  plus?: Tier;
  /** The award PROGRAMME when it is not the country's default (RIAA Latin). */
  body?: string;
  /** "label" for a label's own plaque — its chip names the issuer even where
   *  it is the country's listed body (Turkey; lib/issuerMarker). */
  source?: "label" | "announcement";
  /** Set when that programme is priced separately — see certUnits.programOf. */
  program?: string;
  /** null = a real plaque this body publishes no usable threshold for. */
  units: number | null;
  /** `units` before it was floored — what a line or a country sums, flooring
   *  the sum once (certUnits.addUnits). Set wherever `units` is. */
  exact?: ExactUnits;
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
  /** The HIGHEST award behind the line, for the chip and the "Highest plaque"
   *  column — by tier, then units (5 Oct 2026: Asake's UK line showed a Silver
   *  single over his Gold album because the single is worth more units). */
  top: CountryPlaque | null;
}

/** One RECORD certified here, however many of the board's artists are
 *  credited on it — what the country's own totals count. */
export interface CountryRecord {
  /** The plaque as priced: the holders' highest, which is every holder's
   *  where the registers agree (tests/countrySharedRecords.test.tsx). */
  plaque: CountryPlaque;
  /** Every board artist whose line carries it: lead credits first, and among
   *  leads the act billed first on the record. */
  holders: { artist: ComparableArtist; featured: boolean }[];
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
  /** One per record: a plaque two artists share is ONE entry here and one on
   *  each of their lines. The four figures below count these, not the lines,
   *  so they are less than the lines' sum by exactly the shared plaques. */
  records: CountryRecord[];
  units: number;
  counted: number;
  notCounted: number;
  plaques: number;
  /** Records held by more than one line — each counted once above. */
  shared: number;
  /** What one plaque is worth under THIS programme. */
  single: TierUnits | null;
  album: TierUnits | null;
  /** The programme's own note, where it has one. */
  note?: string;
}

export interface CountryBoard {
  code: string;
  name: string;
  /** The name as it reads INSIDE a sentence. Four of the boards take the definite
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
  /** Records more than one artist holds here, each counted ONCE in the four
   *  figures above while staying on every holder's line. */
  shared: number;
  /** Artists holding at least one plaque here, under any programme. */
  artists: number;
  options: UnitsOptions;
}

/** Countries whose name takes "the" in running prose. */
const TAKES_THE = new Set(["US", "UK", "NL", "CZ"]);
export const inSentence = (code: string): string =>
  `${TAKES_THE.has(code) ? "the " : ""}${countryMeta(code).name}`;

// Tier, then multiplier, then any half step on top — app/lib/awardName.ts.
const rank = awardRank;

// ---------------------------------------------------------------------------
// ONE RECORD, SEVERAL ARTISTS — matched artist WITH title, never title alone.
// ---------------------------------------------------------------------------

const fold = (s: string) =>
  s.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim();
/** " wizkid ft bnxn " — word-padded, so a name matches a whole word only
 *  ("Rema" is not inside "Remix", "Tems" is not inside "Items"). */
const wordsOf = (s: string) => ` ${fold(s).replace(/[^a-z0-9]+/g, " ").trim()} `;

/** The names a register files an artist under. BNXN was Buju until 2022, and
 *  every register that certified "Mood" before then still says so. */
const ALIASES: Record<string, string[]> = { bnxn: ["Buju"] };
const namesOf = (a: ComparableArtist) => [a.name, ...(ALIASES[a.slug] ?? [])];
const mentions = (text: string | undefined, a: ComparableArtist) =>
  !!text && namesOf(a).some((n) => wordsOf(text).includes(wordsOf(n)));

/** Every artist on the roster, by name — what marks a parenthetical as a
 *  credit rather than part of the title. */
const isCreditNote = (inner: string, roster: ComparableArtist[]) =>
  /\b(ft|feat|featuring|with)\b|w\/|&/i.test(inner) || roster.some((a) => mentions(inner, a));
const parentheticals = (title: string) => [...title.matchAll(/\(([^()]*)\)/g)].map((m) => m[1]);

/**
 * A title with its CREDIT annotations removed: "Mood (Wizkid ft. BNXN)",
 * "Alaye (w/ Asake)" and "Holy Water (Davido)" are how three boards file
 * "Mood", "Alaye" and "Holy Water". A parenthetical that is part of the title
 * stays here — "Goodbye (Warm Up)" keeps its subtitle, "Isaka (6AM)" its
 * "(6AM)". Equal record titles are a CANDIDATE only; `sameRecord` decides.
 *
 * A subtitle does not make a second record on its own, though: Burna Boy's
 * ledger files "Sungba (Remix)" (Asake ft. Burna Boy) where the BPI and TCSN
 * both print the award plainly as "Sungba", the same row as Asake's own board
 * line, on the same sleeve. Such a pair shares a `baseTitle` and is joined on
 * the sleeve or the credit (`sameRecord`, rule 5) — the debug pass of 4 Oct
 * 2026 found it counted twice on the Nigerian and UK boards.
 */
export function recordTitle(title: string, roster: ComparableArtist[] = comparableArtists): string {
  return fold(title.replace(/\s*\(([^()]*)\)/g, (m, inner: string) => (isCreditNote(inner, roster) ? "" : m)));
}

/** The title with EVERY parenthetical removed — "Sungba (Remix)", "Isaka
 *  (6AM)" and "Mood (Wizkid ft. BNXN)" are "sungba", "isaka" and "mood". The
 *  widest candidate key: a pair that shares it but not its `recordTitle` is one
 *  record only on the strongest evidence (`sameRecord`, rule 5). */
export function baseTitle(title: string): string {
  return fold(title.replace(/\s*\([^()]*\)/g, ""));
}

/** What `sameRecord` reads off a row: a country's plaque, or a release as
 *  /compare's song picker holds it (its same-recording refusal asks the same
 *  question). */
export type RecordEvidence = Pick<CountryPlaque, "title" | "credit" | "format" | "cover">;

/**
 * Are two artists' plaques on one record? Same record title and format (the
 * caller has already put them in the same country and programme) AND
 * something that names the ARTISTS together:
 *   1. a credit string naming the other ("Wizkid ft. Burna Boy" on Burna's
 *      "Ginger") — Burna Boy's ledger carries these;
 *   2. a title annotation naming the other ("Mood (Wizkid ft. BNXN)");
 *   3. the same sleeve on both rows — every cross-artist cover was checked
 *      against Deezer's contributor list (tests/afrobeats.test.ts pins them);
 *   4. a register credit naming both, listed in app/data/sharedRecords.ts.
 * Title alone never merges: "Loml" is Cheque ft. Olamide AND Seyi Vibez's own,
 * "Alone" is Burna Boy's and BNXN's — two records each, and both stay.
 *
 *   5. Where only the BASE title agrees ("Sungba (Remix)" against "Sungba"),
 *      the same sleeve or a credit naming the other, and nothing weaker: a
 *      renamed or subtitled title must not hide a shared record (debug pass,
 *      4 Oct 2026), but a title annotation or a register list cannot vouch
 *      for a title it does not carry.
 */
export function sameRecord(
  x: { artist: ComparableArtist; plaque: RecordEvidence },
  y: { artist: ComparableArtist; plaque: RecordEvidence },
  roster: ComparableArtist[] = comparableArtists,
): boolean {
  const px = x.plaque;
  const py = y.plaque;
  if (x.artist.slug === y.artist.slug || px.format !== py.format) return false;
  const title = recordTitle(px.title, roster);
  if (title !== recordTitle(py.title, roster)) {
    if (baseTitle(px.title) !== baseTitle(py.title)) return false;
    return (
      (!!px.cover && px.cover === py.cover) || mentions(px.credit, y.artist) || mentions(py.credit, x.artist)
    );
  }
  if (mentions(px.credit, y.artist) || mentions(py.credit, x.artist)) return true;
  if (parentheticals(px.title).some((p) => mentions(p, y.artist))) return true;
  if (parentheticals(py.title).some((p) => mentions(p, x.artist))) return true;
  if (px.cover && px.cover === py.cover) return true;
  return SHARED_RECORDS.some(
    (r) =>
      recordTitle(r.title, roster) === title &&
      r.artists.includes(x.artist.slug) &&
      r.artists.includes(y.artist.slug),
  );
}

/** One programme's lines folded into RECORDS: a plaque two lines share is one
 *  record with two holders. Grouped by BASE title and format, then joined
 *  only where `sameRecord` says so (union–find, so a three-way record such as
 *  Olamide's "99" joins whichever pairs carry the evidence). Pairs whose record
 *  titles agree are joined first, and two groups that already hold the same
 *  artist are never joined: an artist's own "X" and "X (Remix)" are two of his
 *  plaques, whichever other line names them both. */
export function recordsOf(lines: CountryArtistLine[], roster: ComparableArtist[] = comparableArtists): CountryRecord[] {
  const items = lines.flatMap((l) => l.plaqueList.map((plaque) => ({ artist: l.artist, plaque })));
  const parent = items.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const slugsOf = items.map((it) => new Set([it.artist.slug]));
  const join = (a: number, b: number) => {
    const [ra, rb] = [find(a), find(b)];
    if (ra === rb || [...slugsOf[ra]].some((s) => slugsOf[rb].has(s))) return;
    parent[ra] = rb;
    for (const s of slugsOf[ra]) slugsOf[rb].add(s);
  };
  const byBase = new Map<string, number[]>();
  items.forEach((it, i) => {
    const k = `${baseTitle(it.plaque.title)}|${it.plaque.format}`;
    byBase.set(k, [...(byBase.get(k) ?? []), i]);
  });
  const titleOf = items.map((it) => recordTitle(it.plaque.title, roster));
  for (const exact of [true, false])
    for (const group of byBase.values())
      for (let i = 0; i < group.length; i++)
        for (let j = i + 1; j < group.length; j++) {
          const [a, b] = [group[i], group[j]];
          if ((titleOf[a] === titleOf[b]) !== exact) continue;
          if (sameRecord(items[a], items[b], roster)) join(a, b);
        }

  const clusters = new Map<number, typeof items>();
  items.forEach((it, i) => clusters.set(find(i), [...(clusters.get(find(i)) ?? []), it]));
  return [...clusters.values()].map((members) => {
    // The highest plaque among the holders — every holder's, where the
    // registers agree, which a test holds them to. On a tie a LEAD's row names
    // it, and among leads the row whose title carries no credit note: Wizkid
    // files "Alaye (w/ Asake)", Asake's board files "Alaye" — both leads by
    // Rule C (7 Oct 2026: the song is in each one's own discography), and the
    // record is "Alaye".
    const plainTitle = (p: CountryPlaque) => (fold(p.title) === recordTitle(p.title, roster) ? 1 : 0);
    const score = (p: CountryPlaque) => [p.units ?? -1, rank(p), p.isFeature ? 0 : 1, plainTitle(p)];
    const plaque = members
      .map((m) => m.plaque)
      .reduce((best, p) => {
        const [a, b] = [score(p), score(best)];
        const i = a.findIndex((v, k) => v !== b[k]);
        return i >= 0 && a[i] > b[i] ? p : best;
      });
    const holders = members
      .map((m) => ({ artist: m.artist, featured: m.plaque.isFeature, first: isBilledFirst(m.artist.slug, m.plaque.title) }))
      // Lead credits first: "Omo Ope" is Asake's, Olamide featured (Rule C),
      // however the two rank on this board. Among leads, the act billed first:
      // "Bandana" is Fireboy DML's single with Asake — a lead for both since
      // Rule C (7 Oct 2026), and Asake outranks him here — so Fireboy DML is
      // named first. Otherwise the board's own order stands.
      .sort((a, b) => Number(a.featured) - Number(b.featured) || Number(b.first) - Number(a.first))
      .map(({ artist, featured }) => ({ artist, featured }));
    return { plaque, holders };
  });
}

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
        const { units, why, exact } = unitsForCert(cert, release.format);
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
                  : rank(cert) > rank(held);
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
          ...(cert.plus ? { plus: cert.plus } : {}),
          body: cert.body,
          ...(cert.source ? { source: cert.source } : {}),
          program: programOf(cert),
          units,
          ...(exact ? { exact } : {}),
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
      // The highest AWARD, units breaking a tie, and a full tie kept by the
      // first in the artist's release order — priceArtist's pick exactly, so a
      // pair page and this board name the same record on the same line. Taken
      // BEFORE the sort below, which orders ties by title: the board's
      // "Highest plaque" read "Bella" and "Emiliana" in France where the pair
      // pages read "One Dance" and "love nwantiti" (review, 5 Oct 2026).
      // An unpriced line keeps its highest tier, the first met on a tie, as
      // priceArtist's listed lines do.
      const firstHighest = (xs: CountryPlaque[]) =>
        xs.reduce<CountryPlaque | null>(
          (t, p) => (!t || rank(p) > rank(t) || (rank(p) === rank(t) && (p.units ?? 0) > (t.units ?? 0)) ? p : t),
          null,
        );
      const top = firstHighest(plaques.filter((p) => p.units !== null)) ?? firstHighest(plaques);
      const plaqueList = plaques.sort(
        (a, b) =>
          (b.units ?? -1) - (a.units ?? -1) ||
          rank(b) - rank(a) ||
          a.title.localeCompare(b.title),
      );
      const priced = plaqueList.filter((p) => p.units !== null);
      buckets.set(k, [
        ...(buckets.get(k) ?? []),
        {
          artist,
          program: k || undefined,
          // Summed exactly and floored once — the rule priceArtist applies
          // to the same line (certUnits.addUnits).
          units: floorUnits(sumUnits(priced.map((p) => p.exact))),
          counted: priced.length,
          notCounted: plaqueList.length - priced.length,
          plaques: plaqueList.length,
          plaqueList,
          top,
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
    // The programme's figures count RECORDS. Summing the lines counted every
    // shared plaque once per holder — South Africa's Essence, Ginger and No.1
    // twice each (4 Oct 2026).
    const records = recordsOf(lines, roster);
    const priced = records.filter((r) => r.plaque.units !== null);
    return {
      name: key || meta.body,
      program: key || undefined,
      lines,
      records,
      units: floorUnits(sumUnits(priced.map((r) => r.plaque.exact))),
      counted: priced.length,
      notCounted: records.length - priced.length,
      plaques: records.length,
      shared: records.filter((r) => r.holders.length > 1).length,
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
    shared: programs.reduce((n, p) => n + p.shared, 0),
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

/** Every country board as a link, in the picker's order: the list
 *  /certifications prints beside "Compare with…". Derived like the routes
 *  themselves, so a new market's page is linked the day it exists. */
export function countryBoardLinks(): { code: string; name: string; href: string }[] {
  return certCountryCodes().map((code) => ({
    code,
    name: countryMeta(code).name,
    href: `/compare/in/${countrySlug(code)}`,
  }));
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
 * What a board's plaques are priced at, as a phrase after "priced at" — or null
 * where they are listed and never priced (a body with no published threshold,
 * Colombia today). "The body's own thresholds" only where that is what prices
 * them: IFPI Greece publishes no current level (its row's `pricedAt`, the ¶
 * note), and ZPAV prints its single levels in złoty, converted here at
 * `plnPerSingle` (the ¶ on Polish single lines).
 */
export function pricingPhrase(board: CountryBoard, own = "own thresholds"): string | null {
  if (!board.counted) return null;
  const t = board.thresholds;
  if (t?.pricedAt) return t.pricedAt;
  if (t?.plnPerSingle) return `${bodyOwner(board.body)}'s levels (singles at ${t.plnPerSingle} zł each)`;
  return `${bodyOwner(board.body)}'s ${own}`;
}

/** A body's name ready for a possessive: "TurnTable (TCSN)" → "TurnTable",
 *  "ČNS IFPI (Czechia)" → "ČNS IFPI". The parenthetical tells two bodies'
 *  names apart in a list; before "'s" it printed "TurnTable (TCSN)'s own
 *  published threshold" (debug pass, 5 Oct 2026), and the country is already
 *  the page's subject. */
export const bodyOwner = (body: string): string => body.replace(/\s*\([^)]*\)$/, "");

/**
 * Title, description and share copy for one country page, from the live
 * figures. Lengths sit inside Google's display limits for every one of the boards
 * — the post-build gate (scripts/check-seo.mjs) reads them off the rendered
 * HTML, and tests/compareCountry.test.ts checks them before the build runs.
 */
export function countryCopy(board: CountryBoard) {
  const n = (x: number) => x.toLocaleString("en-US");
  const where = board.inSentence;
  const long = `Certified Units in ${where} — Afrobeats Artists Ranked`;
  const plaques = `${n(board.plaques)} plaque${board.plaques === 1 ? "" : "s"}`;
  const artists = `${board.artists} artist${board.artists === 1 ? "" : "s"}`;
  const priced = pricingPhrase(board);
  return {
    title: long.length <= 60 ? long : `Certified Units in ${where}`,
    description: priced
      ? `Every Afrobeats plaque awarded in ${where}, priced at ${priced} — ` +
        `${artists}, ${plaques}, at least ${n(board.units)} certified units.`
      : `Every Afrobeats plaque awarded in ${where}, listed, not priced: ${board.body} publishes ` +
        `no unit threshold — ${artists}, ${plaques}.`,
    /** The share card's second line. */
    sub: `${artists} · ${plaques} · ${board.counted ? `at least ${n(board.units)} units` : "not priceable"}`,
  };
}

/**
 * The same for the index of those pages: /compare/in, and the index as the
 * query reaches it — /compare?mode=country, the By-country segment's link with
 * features off (&feat=0), or a slug that names no market. Those kept the hub's
 * "Compare Certified Units — Burna Boy vs Wizkid & More" over a "Certified
 * units by country" h1 (V-compareA-11, full-site debug of 5 Oct 2026); the
 * route and the query now read this one copy.
 */
export function countryIndexCopy() {
  return {
    title: "Certified Units by Country — Afrobeats Artists",
    // Not "every plaque priced at that country's own body's threshold": Greece's
    // are priced at IFPI's June 2013 level and Colombia's not at all, as their
    // own pages say (debug pass, 5 Oct 2026).
    description: `Where Afrobeats is certified: ${certCountryCodes().length} markets, each plaque priced at the threshold its country page names, artists ranked market by market.`,
    shareTitle: "Certified units by country",
    shareDescription: "One market, every artist — priced market by market.",
  };
}
