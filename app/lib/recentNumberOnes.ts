import { updates } from "../data/updates";
import { allChartItems, CHART_COUNTRIES } from "../data/charts";

/**
 * Which countries the updates feed reports *arriving* at No. 1 recently.
 *
 * Both home layouts mark those cells, so the signal lives here rather than
 * being derived twice — and it is a real signal, not the first N rows. Naming a
 * country isn't enough: the same week's feed also records a No. 9 in Hungary
 * and a No. 20 in South Africa, and neither is a new No. 1.
 */

// Four days, not seven: at a week the badge outlived the news — cells from
// the previous Thursday were still shouting NEW the following Wednesday.
const RECENT_DAYS = 4;
const REACHED_NUMBER_ONE = /\bNo\. 1s\b|\btops the\b|\btopped the\b|\benters at No\. 1\b/i;

const ageInDays = (date: string) =>
  (Date.now() - new Date(`${date}T12:00:00Z`).getTime()) / 86_400_000;

// Real countries only. CHART_COUNTRIES also holds the two Billboard Global
// charts, and any update mentioning "Billboard Global 200" would otherwise list
// "Global" as a country that just arrived at No. 1.
const countryNames = Object.entries(CHART_COUNTRIES)
  .filter(([code]) => code !== "GLB" && code !== "GLBX")
  .map(([, c]) => c.name);
// Every release title the chart data knows, for reading WHICH song an update
// reported — the feed writes titles exactly as charts.ts does.
const knownTitles = allChartItems.map((r) => r.title);

const recentUpdates = updates.filter(
  (u) =>
    ageInDays(u.date) <= RECENT_DAYS &&
    REACHED_NUMBER_ONE.test(u.text) &&
    countryNames.some((n) => u.text.includes(n))
);

// The country has to sit in the SAME CLAUSE as the No.-1 wording. Scanning the
// whole update was the bug the doc comment above warns about: one feed entry
// reads "tops the Official MENA Chart's Top 20 and Luxembourg's Billboard
// chart, debuts at No.14 in Egypt and climbs to new peaks of No.26 in Hungary
// and No.21 in Israel" — a single "tops the" that published Egypt, Hungary and
// Israel as fresh No. 1s alongside the one country that had actually arrived.
// Splitting on clause punctuation keeps "tops the ... Luxembourg" together and
// leaves the No.14 / No.26 / No.21 clauses out.
const numberOneClauses = (text: string) =>
  text.split(/[,.;:]\s|[.;:]$/).filter((c) => REACHED_NUMBER_ONE.test(c));

/** Countries an update reports ARRIVING at No. 1. Exported for tests. */
export const arrivalsIn = (text: string) => {
  const clauses = numberOneClauses(text);
  return countryNames.filter((n) => clauses.some((c) => c.includes(n)));
};

const recentArrivalSet = new Set(recentUpdates.flatMap((u) => arrivalsIn(u.text)));

/** True when this country is one the feed just reported topping. */
export const isRecentNumberOne = (countryName: string) => recentArrivalSet.has(countryName);

/**
 * WHICH release the feed reported topping that country — the same update that
 * makes a cell NEW names the song, so the cell can carry its cover. Longest
 * title wins when several match, so "Last Last" never loses to a title that
 * happens to be a substring of the update's prose.
 */
export const recentNumberOneTitle = (countryName: string): string | undefined => {
  const update = recentUpdates.find((u) => arrivalsIn(u.text).includes(countryName));
  if (!update) return undefined;
  return knownTitles
    .filter((t) => update.text.includes(t))
    .sort((a, b) => b.length - a.length)[0];
};

/** How fresh that news is, in days — Infinity when there is none. */
export const newestArrivalAge = recentUpdates.length
  ? Math.min(...recentUpdates.map((u) => ageInDays(u.date)))
  : Infinity;

/** Wording keyed to the window above, so the copy can never outrun the data. */
export const arrivalWindowPhrase = newestArrivalAge <= 1 ? "in the last 24 hours" : "this week";
export const arrivalChangedPhrase = newestArrivalAge <= 1 ? "today" : "this week";

// ── Sentences the hero panel and the mobile card share ─────────────────────
const listNames = (xs: string[]) => {
  const shown = xs.length <= 4 ? xs : xs.slice(0, 3);
  const rest = xs.length - shown.length;
  if (rest > 0) return `${shown.join(", ")} and ${rest} more`;
  return shown.length < 2 ? shown.join("") : `${shown.slice(0, -1).join(", ")} and ${shown.at(-1)}`;
};

/** Countries the feed just reported topping, in the order the data holds them. */
export const recentArrivals = countryNames.filter((n) => recentArrivalSet.has(n));

/** "'Dai Dai' with Shakira added X, Y and Z this week —" */
export const recentArrivalSentence = (title: string) =>
  recentArrivals.length
    ? `“${title}” added ${listNames(recentArrivals)} ${arrivalWindowPhrase}.`
    : "On streaming charts right now, refreshed hourly.";

/** "N charts changed this week" */
export const changedSentence = recentArrivals.length
  ? `${recentArrivals.length} chart${recentArrivals.length === 1 ? "" : "s"} changed ${arrivalChangedPhrase}`
  : "Refreshed hourly";
