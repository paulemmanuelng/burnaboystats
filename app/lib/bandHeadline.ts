import { updates } from "../data/updates";

/**
 * The live band's headline — whatever moved last, in the band's own words.
 *
 * The band and the "Today's number" panel sat 300px apart stating the SAME
 * fact: the band read "“Dai Dai” — No. 1 in 31 countries on streaming charts"
 * and the panel read "31 / countries at No. 1 on today's streaming charts",
 * both off the same `liveHeadline()` call. Two surfaces, one sentence, in the
 * most valuable space on the site. The design brief's finding 5.3 asks the band
 * to carry a DIFFERENT live fact; the streaming figure stays in the panel,
 * where it has its figure, caption and provenance.
 *
 * WHY THE UPDATES FEED AND NOT certifications.ts. The design's mock shows a
 * certification — "NEW CERTIFICATION — “LAST LAST” · PLATINUM · BPI" — and the
 * brief says to derive it from the newest plaque, falling back to the newest
 * updates entry if that is more recent. `certHistory` cannot answer "newest":
 * its rows carry a `year` and no day, and the array is not in date order — rows
 * dated 2020 sit six from the end, between rows dated 2026. Picking its head or
 * its tail would be picking an arbitrary row and calling it new.
 *
 * `updates` can. Its entries carry an ISO date, the file's own rule is that a
 * new entry goes to the TOP, and a certification lands there the day it is
 * confirmed — so the feed answers the mock's question and the fallback's with
 * the same read. It is also the honest reading of what the band is for: not
 * "the newest plaque" specifically, but whatever moved last.
 *
 * Nothing here is typed. The headline is the entry's own opening clause, so the
 * band rewrites itself the moment a new fact is logged.
 */

/** How much of an entry's opening clause the band will show before it trims. */
const MAX = 72;

/**
 * The first clause of an updates entry — its headline, as written.
 *
 * Every entry in the feed opens with one, by house rule: "Lead with the number,
 * the song, or the milestone." That clause ends at the first colon, full stop or
 * em-dash, whichever comes first — "Nine weeks at No. 1 in France.", "Back on
 * top on YouTube:", "Billboard's summer recaps put “Dai Dai” top of the world
 * outside America:". Taking it rather than writing a second copy is what keeps
 * the band and the feed from drifting apart.
 */
/**
 * Abbreviations whose full stop does NOT end a sentence.
 *
 * Two hand-written lookbehinds ("No", "U.S") shipped first and were not enough.
 * "Excl." is the single most-repeated abbreviation in this feed — Billboard's
 * Global Excl. U.S. chart — and seven entries already contain it; they survived
 * only because a colon happened to come earlier in each. The next entry that
 * opens with it would have published "A 10th week on Billboard's Global Excl."
 * at the top of every page, which is the exact shape of the "Nine weeks at No"
 * bug this function was written to fix.
 */
const ABBREV = ["No", "Vol", "St", "Mr", "Mrs", "Ms", "Dr", "Jr", "Sr", "Excl", "Feat", "ft", "Est", "Inc", "Ltd", "U\\.S", "U\\.K"];

/**
 * The shortest a headline may be before we conclude the cut was wrong.
 *
 * An entry opening with an initial — "J. Cole joins him on the remix: …" —
 * cut to "J". So did a numbered lead ("1. The Shakira collaboration…"). One
 * character is not a headline, and nothing in the suite could see it: the only
 * length check asserts a maximum.
 */
const MIN = 12;

/** Every candidate boundary, so a bad first one can be stepped over. */
const CUT = new RegExp(`(?::\\s|\\s—\\s|(?<!\\b(?:${ABBREV.join("|")}))\\.\\s(?=[A-Z“]))`, "g");

export function openingClause(text: string): string {
  // Take the FIRST boundary that leaves a real headline behind it. A cut that
  // leaves almost nothing is a cut in the wrong place — an initial, an ordinal,
  // an abbreviation the list does not know — so step over it and try the next
  // rather than giving up and returning the whole entry.
  let clause = text;
  for (const m of text.matchAll(CUT)) {
    if (m.index !== undefined && text.slice(0, m.index).trim().length >= MIN) {
      clause = text.slice(0, m.index);
      break;
    }
  }
  clause = clause.trim();
  if (clause.length <= MAX) return balanceQuotes(clause);
  // Trim on a word boundary rather than mid-word, and never leave a dangling
  // separator before the ellipsis.
  const slice = clause.slice(0, MAX);
  const cutAt = slice.lastIndexOf(" ");
  const trimmed = (cutAt > 0 ? slice.slice(0, cutAt) : slice).replace(/[\s,;·—-]+$/, "");
  return `${balanceQuotes(trimmed)}…`;
}

/**
 * Close a curly quote the cut left open.
 *
 * Both the clause cut and the length trim can land inside a “quoted song
 * title”, and this feed puts one in almost every entry. An unclosed “ at the
 * top of the page reads as a rendering fault rather than as an abbreviation.
 */
function balanceQuotes(s: string): string {
  const opens = (s.match(/“/g) || []).length;
  const closes = (s.match(/”/g) || []).length;
  if (opens <= closes) return s;
  // Drop the dangling opener and anything after it, rather than inventing a
  // closing quote around a fragment of a title.
  return s.slice(0, s.lastIndexOf("“")).replace(/[\s,;·—-]+$/, "");
}

export interface BandFact {
  /** Mono kicker — the entry's own category. */
  kicker: string;
  /** Anton headline — the entry's opening clause. */
  headline: string;
  /** ISO date of the entry, for the dateTime attribute. */
  date: string;
  /** Where the fact is written up in full. */
  href: string;
}

/**
 * The newest entry in the feed, as the band renders it.
 *
 * `updates` is maintained newest-first, and `liveClaims.test.ts` and the feed
 * page both rely on that; this reads index 0 rather than re-sorting so a broken
 * order surfaces there rather than being papered over here.
 */
export function bandFact(): BandFact | null {
  const newest = updates[0];
  if (!newest) return null;
  return {
    kicker: newest.category,
    headline: openingClause(newest.text),
    date: newest.date,
    href: newest.href,
  };
}
