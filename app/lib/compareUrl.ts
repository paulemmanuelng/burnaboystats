/**
 * The compare section's only state setter.
 *
 * /compare holds every choice in the query string — the mode, the two sides,
 * the search boxes, the toggles — because a comparison somebody can paste into
 * the argument they are already having is the point of the page. The pretty
 * routes (/compare/<a>-vs-<b>, /compare/in/<country>) render the same tree with
 * a fixed `sp` and no search params of their own, so every control on THEM
 * builds a /compare URL through here and the reader lands back in the tool with
 * their choice applied.
 */
export type SP = Record<string, string | string[] | undefined>;

export const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

/** Rebuild the URL with one thing changed. */
export function href(sp: SP, patch: Record<string, string | null>) {
  const q = new URLSearchParams();
  // An expanded table is a property of one pair. Changing either side, the
  // mode, or a song drops it, so "Show all" does not follow the reader around.
  if (["a", "b", "sa", "sb", "mode"].some((k) => k in patch)) patch = { all: null, ...patch };
  for (const [k, v] of Object.entries(sp)) {
    const s = one(v);
    if (s) q.set(k, s);
  }
  for (const [k, v] of Object.entries(patch)) {
    if (v === null) q.delete(k);
    else q.set(k, v);
  }
  const s = q.toString();
  return s ? `/compare?${s}` : "/compare";
}
