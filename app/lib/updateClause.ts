import { clauseCut } from "./bandHeadline";

/**
 * An /updates entry split at its first clause (Job 4 · J4-8): the lead, set
 * at weight 500 in the desktop row, keeps its closing colon or full stop; the
 * rest is the entry's own text after it. An entry with no such boundary is all
 * lead.
 *
 * The cut is bandHeadline's clauseCut — the site's one clause rule (ABBREV,
 * MIN) — at the first colon or full stop (`dash: false`, fix 125), so a row's
 * bold lead and the /updates link preview's headline are the same words.
 * Server-only in practice: bandHeadline reads the feed, so the page computes
 * the cut and hands the client feed its length.
 */
export function leadClause(text: string): { lead: string; rest: string } {
  const cut = clauseCut(text, { dash: false });
  if (cut === null) return { lead: text, rest: "" };
  return { lead: text.slice(0, cut + 1), rest: text.slice(cut + 1) };
}
