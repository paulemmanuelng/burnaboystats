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

/**
 * Numbers as words, for prose that counts.
 *
 * The narrative on /dai-dai says "a fifth week" and "eight weeks in", not "a
 * 5th week" and "8 weeks in" — so deriving those from the data needs the word,
 * not the digit. Without this the story paragraph keeps its own hardcoded copy
 * of two numbers that change most weeks, which is exactly how the chart note it
 * sits beside came to claim a 4th week during the 5th.
 *
 * Spanish ordinals are feminine because the only noun they count here is
 * "semana". Anything past twelve falls back to digits rather than guessing:
 * these runs are weeks at No. 1, and a run that long would deserve rewritten
 * prose anyway.
 */
const WORDS = {
  en: {
    card: ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"],
    ord: ["", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"],
  },
  es: {
    card: ["", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce"],
    ord: ["", "primera", "segunda", "tercera", "cuarta", "quinta", "sexta", "séptima", "octava", "novena", "décima", "undécima", "duodécima"],
  },
} as const;

export function cardinalWord(n: number | null, lang: "en" | "es" = "en"): string {
  return WORDS[lang].card[n ?? -1] ?? String(n);
}

export function ordinalWord(n: number | null, lang: "en" | "es" = "en"): string {
  return WORDS[lang].ord[n ?? -1] ?? String(n);
}
