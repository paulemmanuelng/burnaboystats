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

/**
 * The entry's opening clause — up to the first colon, spaced dash or sentence
 * end — trimmed to fit a subject line. "No. 1" is the site's commonest phrase
 * and is a full stop followed by a space, so that one abbreviation is exempt.
 */
export function leadClause(text: string, max = 72): string {
  const cut = text.split(/:| — |(?<!\bNo)\. /)[0].replace(/[“”"]/g, "").trim();
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
