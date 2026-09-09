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
export function openingClause(text: string): string {
  // The full stop is the awkward one. This feed says "No. 1" in almost every
  // entry, so a naive /[:.]\s/ cuts "Nine weeks at No. 1 in France" down to
  // "Nine weeks at No" — which is how the first version of this shipped and why
  // the table below tests that exact string. A stop only ends the clause when it
  // is not the one in "No." or "U.S.", AND the next thing is a new sentence.
  const cut = /^(.+?)(?::\s|\s—\s|(?<!\bNo)(?<!\bU\.S)\.\s(?=[A-Z“]))/.exec(text);
  const clause = (cut ? cut[1] : text).trim();
  if (clause.length <= MAX) return clause;
  // Trim on a word boundary rather than mid-word, and never leave a dangling
  // separator before the ellipsis.
  const slice = clause.slice(0, MAX);
  return `${slice.slice(0, slice.lastIndexOf(" ")).replace(/[\s,;·—-]+$/, "")}…`;
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
