import { cardinalWord } from "../lib/plural";
import type { Tier } from "../data/certifications";
import { DAI_DAI_GLOBAL_200_RUN, DAI_DAI_GLOBAL_EXCL_US_NO1 } from "../data/daiDai";
import { globalNo1Spells, plaqueGroups } from "./DaiDaiFigures";
import { countryName } from "./daiDaiCountryName";

/**
 * The story's sentences, where they state a figure the chapter's own figure
 * reads from data — in both editions' words.
 *
 * Until 27 Sep 2026 chapters 01, 02, 05 and 07 typed these ("15 May 2026",
 * "After four straight weeks it slipped to No. 3", "2× Platinum in Canada",
 * "19 July") beside figures that read the same facts from daiDai.ts,
 * charts.ts and certifications.ts: the next plaque would have moved the
 * figure and the FAQ answer, but not the sentence. Every clause here is built
 * from those same entries, so the prose and the figure move together.
 */

export type StoryLang = "en" | "es";

const LOCALE: Record<StoryLang, string> = { en: "en-GB", es: "es-ES" };
const fmt = (iso: string, lang: StoryLang, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(LOCALE[lang], { ...opts, timeZone: "UTC" });

/** "15 May 2026" · "15 de mayo de 2026" */
export const storyLongDate = (iso: string, lang: StoryLang) => fmt(iso, lang, { day: "numeric", month: "long", year: "numeric" });

/** "19 July" · "19 de julio" */
export const storyDayMonth = (iso: string, lang: StoryLang) => fmt(iso, lang, { day: "numeric", month: "long" });

/** Spanish "y" is "e" before an i sound ("Grecia e Italia"), but not before
 *  "hie"/"hia" ("agua y hielo"). */
const andWord = (next: string, lang: StoryLang) =>
  lang === "en" ? "and" : /^h?[iíIÍ]/.test(next) && !/^hi[aeoáéó]/i.test(next) ? "e" : "y";

/** "a, b and c" · "a, b y c" — no comma before the last. */
export function listJoin(xs: readonly string[], lang: StoryLang): string {
  if (xs.length < 2) return xs.join("");
  const last = xs[xs.length - 1];
  return `${xs.slice(0, -1).join(", ")} ${andWord(last, lang)} ${last}`;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// ── Chapter 05: the plaques ────────────────────────────────────────────────

/** Keyed in lower case: a map of words, not of colours (tests/tierColourParity
 *  reads Diamond:/Platinum:… maps as colour maps). */
const TIER_WORDS: Record<StoryLang, Record<Lowercase<Tier>, string>> = {
  en: { diamond: "Diamond", platinum: "Platinum", gold: "Gold", silver: "Silver" },
  // Spanish prose writes the tier in lower case.
  es: { diamond: "diamante", platinum: "platino", gold: "oro", silver: "plata" },
};

/** Spanish names a plaque's multiple in words ("doble platino"); a multiple
 *  the table does not hold falls back to the figure. */
export const MULTIPLE_ES: Record<number, string> = {
  2: "doble",
  3: "triple",
  4: "cuádruple",
  5: "quíntuple",
  6: "séxtuple",
  7: "séptuple",
  8: "óctuple",
  9: "nónuple",
  10: "décuple",
};

/** The names that take an article in running prose. */
const ES_ARTICLE: Record<string, string> = { UK: "el", NL: "los", AE: "los", PH: "las", DO: "la" };

/** A country as the story's sentence names it: "the US", "the Czech
 *  Republic", "Canada" · "Estados Unidos", "el Reino Unido", "Canadá". */
export function proseCountry(code: string, lang: StoryLang): string {
  if (lang === "en") {
    if (code === "US") return "the US";
    if (code === "UK") return "the UK";
    const name = countryName(code, "en");
    return /^(United |Czech Republic$|Dominican Republic$|Netherlands$|Philippines$)/.test(name) ? `the ${name}` : name;
  }
  const name = countryName(code, "es");
  return ES_ARTICLE[code] ? `${ES_ARTICLE[code]} ${name}` : name;
}

/**
 * Every plaque, by tier, in the plaque wall's own grouping and order:
 * "Diamond in France, 2× Platinum in Canada, 6× Platinum (Latin) in the US,
 * Platinum in Spain, …, and Silver in the UK" · "diamante en Francia, doble
 * platino en Canadá, séxtuple platino (latino) en Estados Unidos, …, y plata
 * en el Reino Unido".
 */
export function plaqueSentence(lang: StoryLang): string {
  const groups = plaqueGroups().map((g) => {
    const tier = TIER_WORDS[lang][g.tier.toLowerCase() as Lowercase<Tier>];
    const name = g.x > 1 ? (lang === "es" ? `${MULTIPLE_ES[g.x] ?? `${g.x}×`} ${tier}` : `${g.x}× ${tier}`) : tier;
    const programme = g.programme
      ? /latin/i.test(g.programme)
        ? lang === "es"
          ? " (latino)"
          : " (Latin)"
        : ` (${g.programme})`
      : "";
    return `${name}${programme} ${lang === "es" ? "en" : "in"} ${listJoin(g.codes.map((c) => proseCountry(c, lang)), lang)}`;
  });
  if (groups.length < 2) return groups.join("");
  const last = groups[groups.length - 1];
  // Between the tiers the comma stays before the last, as the page has always
  // written it ("…, and Silver in the UK" · "…, y plata en el Reino Unido").
  return `${groups.slice(0, -1).join(", ")}, ${andWord(last, lang)} ${last}`;
}

// ── Chapter 02: the Global 200 run ─────────────────────────────────────────

/** Chart issues grouped by month: "22 and 29 August and 5 September" · "del
 *  22 y el 29 de agosto y del 5 de septiembre". */
export function issueList(issues: readonly string[], lang: StoryLang): string {
  const months: { month: string; days: string[] }[] = [];
  for (const iso of issues) {
    const month = fmt(iso, lang, { month: "long" });
    const day = fmt(iso, lang, { day: "numeric" });
    const last = months[months.length - 1];
    if (last && last.month === month) last.days.push(day);
    else months.push({ month, days: [day] });
  }
  const said = months.map(({ month, days }) =>
    lang === "es"
      ? `del ${listJoin(days.map((d, i) => (i === 0 ? d : `el ${d}`)), "es")} de ${month}`
      : `${listJoin(days, "en")} ${month}`,
  );
  return listJoin(said, lang);
}

/**
 * The Global 200's shape, as chapter 02 says it: four straight weeks, a week
 * at No. 3, three more (the issues named), seven in all — each read from the
 * run (DAI_DAI_GLOBAL_200_RUN) the figure beside it draws. Only when the run
 * has that shape, with the week between the spells read, as the figure's own
 * note requires; any other run gets just its total.
 */
export function globalRunSentence(lang: StoryLang, weeksAtNo1: number | null): string {
  const run = DAI_DAI_GLOBAL_200_RUN;
  const spells = globalNo1Spells(run);
  const between = spells.length === 2 ? run.slice(spells[0].start + spells[0].length, spells[1].start) : [];
  const total = weeksAtNo1 ?? 0;
  if (!(between.length === 1 && between[0].pos != null)) {
    return lang === "es"
      ? `${cap(cardinalWord(total, "es"))} ${total === 1 ? "semana" : "semanas"} en el número 1 en total.`
      : `${cap(cardinalWord(total, "en"))} ${total === 1 ? "week" : "weeks"} at No. 1 in all.`;
  }
  const [a, b] = spells;
  const dip = between[0].pos!;
  const back = run.slice(b.start, b.start + b.length).map((w) => w.issue);
  if (lang === "es") {
    const first = a.length === 1 ? "Tras una semana en el número 1" : `Tras ${cardinalWord(a.length, "es")} semanas consecutivas`;
    const again = b.length === 1 ? "una semana" : `${cardinalWord(b.length, "es")} semanas`;
    const lists = b.length === 1 ? "la lista" : "las listas";
    return `${first} bajó al N.º ${dip}, y el ${storyDayMonth(back[0], "es")} recuperó la cima por ${again} —${lists} ${issueList(back, "es")}—: ${cardinalWord(total, "es")} semanas en el número 1 en total.`;
  }
  const first = a.length === 1 ? "After a week at No. 1" : `After ${cardinalWord(a.length, "en")} straight weeks`;
  const again = b.length === 1 ? "a week" : `${cardinalWord(b.length, "en")} weeks`;
  const issuesWord = b.length === 1 ? "the issue of" : "the issues of";
  return `${first} it slipped to No. ${dip}, then took the chart back for ${again} — ${issuesWord} ${issueList(back, "en")} — ${cardinalWord(total, "en")} weeks at No. 1 in all.`;
}

/** The Global 200 Excl. US run's span: "4 July to 5 September" · "del 4 de
 *  julio al 5 de septiembre". */
export function exUsSpan(lang: StoryLang): string {
  const [from, to] = DAI_DAI_GLOBAL_EXCL_US_NO1;
  return lang === "es"
    ? `del ${storyDayMonth(from, "es")} al ${storyDayMonth(to, "es")}`
    : `${storyDayMonth(from, "en")} to ${storyDayMonth(to, "en")}`;
}
