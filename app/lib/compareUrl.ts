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

/** Every key the compare code reads. Nothing else is state. */
export const COMPARE_KEYS: ReadonlySet<string> = new Set([
  "a", "b", "sa", "sb", "qa", "qb", "mode", "feat", "ng", "all", "country",
]);

/** Far past any real value: the board's longest release titles run well
 *  under half of it, and a slug, a mode or a flag is a few characters. */
export const MAX_VALUE = 200;

/**
 * The state worth carrying into the next URL, in the order it arrived.
 *
 * Every key of the incoming query used to be copied into every link and every
 * search form on the page (24 Sep 2026): `utm_source=newsletter` rode into 16
 * links, a stray `junk=` was echoed 17 times, and a 30,000-character `a=`
 * turned one request into a 1.37MB uncacheable page. Only the keys above are
 * kept, and a value too long to be real is dropped rather than repeated. An
 * over-long `a` or `b` names no artist, so dropping it changes nothing the
 * page shows.
 */
export function carried(sp: SP): [string, string][] {
  const out: [string, string][] = [];
  for (const [k, v] of Object.entries(sp)) {
    if (!COMPARE_KEYS.has(k)) continue;
    const s = one(v);
    if (s && s.length <= MAX_VALUE) out.push([k, s]);
  }
  return out;
}

/** Rebuild the URL with one thing changed. */
export function href(sp: SP, patch: Record<string, string | null>) {
  const q = new URLSearchParams();
  // An expanded table is a property of one pair. Changing either side, the
  // mode, or a song drops it, so "Show all" does not follow the reader around.
  if (["a", "b", "sa", "sb", "mode"].some((k) => k in patch)) patch = { all: null, ...patch };
  for (const [k, s] of carried(sp)) q.set(k, s);
  for (const [k, v] of Object.entries(patch)) {
    if (v === null) q.delete(k);
    else q.set(k, v);
  }
  const s = q.toString();
  return s ? `/compare?${s}` : "/compare";
}
