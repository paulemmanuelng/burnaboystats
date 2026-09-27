import { CHART_COUNTRIES } from "../data/charts";

const esRegions = new Intl.DisplayNames(["es"], { type: "region" });

/** A country's name in the edition's language. English is the site's own
 *  table (CHART_COUNTRIES); Spanish is the ICU region name, read on the server
 *  so the browser's own ICU can never disagree with the HTML.
 *
 *  Its own module so the chapter figures (DaiDaiFigures) can name countries
 *  too: DaiDaiRecord, which re-exports it, imports the figures, and chapter
 *  03's cells gave the Spanish edition English names ("Switzerland",
 *  "Germany") until 27 Sep 2026. */
export function countryName(code: string, lang: "en" | "es"): string {
  if (lang === "en") return CHART_COUNTRIES[code]?.name ?? code;
  return esRegions.of(code === "UK" ? "GB" : code) ?? CHART_COUNTRIES[code]?.name ?? code;
}
