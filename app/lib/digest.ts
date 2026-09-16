// The Saturday digest: which of the week's updates go in the email, in what
// order, under what subject. Pure functions over app/data/updates.ts — the send
// script (scripts/send-digest.mjs) and the tests call the same code, so what
// the test proves is what gets sent.
//
// Rules, each of them a decision Paul made on 5 Aug 2026:
//   • the window is the last seven days, ending on the send day (inclusive);
//   • entries marked `big` lead, then the rest ranked by category — a record
//     or a plaque outranks a chart tick, which outranks a streaming tick;
//   • at most eight items; an empty week sends nothing at all, rather than a
//     "nothing happened" email;
//   • the subject leads with the top item's own opening clause.
import type { Update, UpdateCategory } from "../data/updates";
import { ABBREV } from "./bandHeadline";

export const DIGEST_DAYS = 7;
export const DIGEST_CAP = 8;

/** Lower ranks first. Records and plaques are the site's currency; streaming ticks are the most frequent. */
export const CATEGORY_RANK: Record<UpdateCategory, number> = {
  "Firsts & Records": 0,
  Certifications: 1,
  Awards: 2,
  Charts: 3,
  Streaming: 4,
  Tours: 5,
  Lifestyle: 6,
};

const iso = (d: Date) => d.toISOString().slice(0, 10);

/** The seven-day window ending on `now` (UTC dates, inclusive at both ends). */
export function digestWindow(now: Date, days = DIGEST_DAYS): { from: string; to: string } {
  const to = iso(now);
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - (days - 1)));
  return { from: iso(start), to };
}

/** The week's entries, in the order the email prints them. Empty when nothing happened. */
export function selectDigest(
  updates: Update[],
  now: Date,
  { days = DIGEST_DAYS, cap = DIGEST_CAP } = {},
): Update[] {
  const { from, to } = digestWindow(now, days);
  const week = updates.filter((u) => u.date >= from && u.date <= to);
  const ranked = [...week].sort((a, b) => {
    if (Boolean(a.big) !== Boolean(b.big)) return a.big ? -1 : 1;
    if (CATEGORY_RANK[a.category] !== CATEGORY_RANK[b.category]) return CATEGORY_RANK[a.category] - CATEGORY_RANK[b.category];
    return b.date.localeCompare(a.date);
  });
  return ranked.slice(0, cap);
}

/** How many entries the email sets large; the rest follow at the list size. */
export const HEADLINERS_MAX = 2;

/**
 * The email's two sizes, one list: the headliners are the entries marked
 * `big` — at most two, the first two by the existing rank if the data marks
 * more — and a week that marks none still leads with something: its
 * top-ranked entry. Every entry prints whole; size and position are the only
 * difference (design response §4.1).
 */
export function splitDigest(items: Update[]): { headliners: Update[]; rest: Update[] } {
  const big = items.filter((u) => u.big).slice(0, HEADLINERS_MAX);
  const headliners = big.length ? big : items.slice(0, 1);
  const rest = items.filter((u) => !headliners.includes(u));
  return { headliners, rest };
}

/**
 * An entry's opening clause and the rest of it, for the email's bold lede:
 * the clause runs to the first colon (kept), spaced dash (left with the
 * rest) or sentence end (kept) — the same boundary the subject line uses.
 * "A 14th straight week at No. 1 in Switzerland:" + " the Schweizer…".
 */
export function splitClause(text: string): { clause: string; rest: string } {
  const colon = text.indexOf(":");
  const dash = text.indexOf(" — ");
  const stop = SENTENCE_END.exec(text);
  const ends = [
    [colon, colon + 1],
    [dash, dash],
    [stop ? stop.index : -1, stop ? stop.index + 1 : -1],
  ]
    .filter(([at]) => at > 0)
    .sort((a, b) => a[0] - b[0]);
  if (!ends.length) return { clause: text, rest: "" };
  const [, end] = ends[0];
  return { clause: text.slice(0, end), rest: text.slice(end) };
}

/** Cut to `max` characters at a word boundary, with an ellipsis. */
const cutAt = (s: string, max: number) => {
  if (s.length <= max) return s;
  const head = s.slice(0, max - 1);
  return `${head.slice(0, head.lastIndexOf(" "))}…`;
};

/**
 * The preheader — the line under the subject in an inbox list. Never the
 * subject's own clause again (design response §4.5): with two or more
 * entries, the second entry's clause, then the categories present in rank
 * order, then the window; with one, the rest of that entry after its clause.
 * Capped at 120 at a word boundary.
 */
export function digestPreheader(items: Update[], from: string, to: string): string {
  const window = weekRange(from, to);
  if (items.length >= 2) {
    const cats = [...new Set(items.map((u) => u.category))]
      .sort((a, b) => CATEGORY_RANK[a] - CATEGORY_RANK[b])
      .map((c) => c.toLowerCase());
    const list = cats.length < 2 ? cats.join("") : `${cats.slice(0, -1).join(", ")} and ${cats[cats.length - 1]}`;
    return cutAt(`${leadClause(items[1].text, Infinity)} — ${list}, ${window}.`, 120);
  }
  const rest = splitClause(items[0].text).rest.replace(/^[\s—]+/, "").trim();
  return cutAt(rest.charAt(0).toUpperCase() + rest.slice(1), 120);
}

/**
 * A full stop that ends a sentence: followed by a space and not part of an
 * abbreviation the feed uses — "No. 9", "Global Excl. U.S.", "certificate
 * no. 10448". The list is the band's (lib/bandHeadline.ts), so the email's
 * clause and the home page's headline agree on where a sentence ends.
 */
const SENTENCE_END = new RegExp(`(?<!\\b(?:${ABBREV.join("|")}))\\. `, "i");

/** "13–19 September", or "30 August–5 September" across a month end — the masthead's form. */
export function weekRangeShort(from: string, to: string): string {
  const day = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" });
  const sameMonth = from.slice(0, 7) === to.slice(0, 7);
  return sameMonth ? `${Number(from.slice(8))}–${day(to)}` : `${day(from)}–${day(to)}`;
}

/** "13 to 19 September", or "27 September to 3 October" across a month end. */
export function weekRange(from: string, to: string): string {
  const day = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" });
  const sameMonth = from.slice(0, 7) === to.slice(0, 7);
  return sameMonth ? `${Number(from.slice(8))} to ${day(to)}` : `${day(from)} to ${day(to)}`;
}

/**
 * The entry's opening clause — up to the first colon, spaced dash or sentence
 * end — trimmed to fit a subject line. "No. 1" is the site's commonest phrase
 * and is a full stop followed by a space, so that one abbreviation is exempt.
 */
export function leadClause(text: string, max = 72): string {
  const cut = text.split(new RegExp(`:| — |${SENTENCE_END.source}`, "i"))[0].replace(/[“”"]/g, "").trim();
  if (cut.length <= max) return cut;
  const words = cut.slice(0, max).split(" ");
  words.pop();
  return `${words.join(" ")}…`;
}

export function digestSubject(items: Update[], to: string): string {
  const day = new Date(`${to}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" });
  if (!items.length) return `Burna Boy Stats — the week to ${day}`;
  const lead = leadClause(items[0].text);
  const more = items.length - 1;
  return more > 0 ? `${lead} — and ${more} more this week` : lead;
}
