/**
 * "1 cert", not "1 certs".
 *
 * Most counts on this site are site-wide totals that are never 1 — 230
 * certifications, 26 countries — so hardcoded plurals were harmless until the
 * same components started rendering PER-ARTIST and per-release numbers. Then
 * Tyla's one-plaque releases read "1 certs", and Seyi Vibez, who charts in
 * exactly one country, got "114 entries across 1 territories".
 *
 * Deliberately dumb: it takes both forms rather than guessing an "s", because
 * the words this site counts in are not all regular (entry/entries), and a
 * clever version would be one more thing to be wrong.
 */
export function plural(n: number, one: string, many: string): string {
  return n === 1 ? one : many;
}

/** The count and its noun together: `count(1, "cert", "certs")` -> "1 cert". */
export function count(n: number, one: string, many: string): string {
  return `${n} ${plural(n, one, many)}`;
}
