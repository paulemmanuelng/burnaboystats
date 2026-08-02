import { updates } from "../data/updates";
import { CHART_COUNTRIES } from "../data/charts";

/**
 * Which countries the updates feed reports *arriving* at No. 1 recently.
 *
 * Both home layouts mark those cells, so the signal lives here rather than
 * being derived twice — and it is a real signal, not the first N rows. Naming a
 * country isn't enough: the same week's feed also records a No. 9 in Hungary
 * and a No. 20 in South Africa, and neither is a new No. 1.
 */

const RECENT_DAYS = 7;
const REACHED_NUMBER_ONE = /\bNo\. 1s\b|\btops the\b|\btopped the\b|\benters at No\. 1\b/i;

const ageInDays = (date: string) =>
  (Date.now() - new Date(`${date}T12:00:00Z`).getTime()) / 86_400_000;

const countryNames = Object.values(CHART_COUNTRIES).map((c) => c.name);

const recentUpdates = updates.filter(
  (u) =>
    ageInDays(u.date) <= RECENT_DAYS &&
    REACHED_NUMBER_ONE.test(u.text) &&
    countryNames.some((n) => u.text.includes(n))
);

const recentText = recentUpdates.map((u) => u.text).join(" ");

/** True when this country is one the feed just reported topping. */
export const isRecentNumberOne = (countryName: string) => recentText.includes(countryName);

/** How fresh that news is, in days — Infinity when there is none. */
export const newestArrivalAge = recentUpdates.length
  ? Math.min(...recentUpdates.map((u) => ageInDays(u.date)))
  : Infinity;

/** Wording keyed to the window above, so the copy can never outrun the data. */
export const arrivalWindowPhrase = newestArrivalAge <= 1 ? "in the last 24 hours" : "this week";
export const arrivalChangedPhrase = newestArrivalAge <= 1 ? "today" : "this week";
