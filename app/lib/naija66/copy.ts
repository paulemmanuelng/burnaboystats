import { NAIJA66_PRIZES, NAIJA66_X_HANDLE } from "../../data/naija66";
import { watHour } from "./clock";

/**
 * The words /naija66 says, once, for both layouts — the phone screen and the
 * desktop page print the same steps and the same rules from here, and the
 * board, the page's metadata and its share card take the prize from PRIZE
 * below, so none of them can drift. Drop times come from the committed
 * schedule, not typed.
 *
 * THE HUNT HAS ENDED (2 Oct 2026, midnight WAT). Every line is past tense: no
 * call to tap, watch or claim, and no time a code "appears" (Paul, 2 Oct 2026:
 * "leave the link functional for now"). The page still names no page and no
 * word a code hid behind.
 */

/**
 * The prize — one each for five winners (Paul, 1 Oct 2026): a month of
 * Spotify Premium Nigeria, worth ₦3,000. Every place that names the prize
 * reads it from here; tests/naija66Copy.test.ts fails on any other wording.
 */
export const PRIZE = {
  /** In a sentence: "won a month of Spotify Premium Nigeria (₦3,000)". */
  long: "a month of Spotify Premium Nigeria (₦3,000)",
  /** A row of the board. */
  board: "Spotify Premium Nigeria · ₦3,000",
} as const;

/** "9am, 12pm, 3pm, 6pm and 9pm" */
const hours = NAIJA66_PRIZES.map((p) => watHour(p.dropsAt).replace(" WAT", ""));
export const DROP_HOURS = `${hours.slice(0, -1).join(", ")} and ${hours.at(-1)}`;

/** A line of copy with a link in it: plain strings, and a link as {href, text}. */
export type Words = readonly (string | { href: string; text: string })[];

/** The hero's opening line, in both layouts. */
export const LEDE = `Five codes hid in words on pages of Burna Boy Stats, one at each drop. The first tap on the right word won ${PRIZE.long}.`;

/** The line where the drop times were: the hunt is over. */
export const ENDED = "The hunt has ended.";
export const DROPPED = `Codes dropped at ${DROP_HOURS} WAT on 1 October.`;

/** The X link's words, beside the drop times (the link adds its own ↗). */
export const X_LINK = `${NAIJA66_X_HANDLE} on X`;

/** The box beside the hero (where "How to win" was). */
export const ENDED_KICKER = "The hunt has ended";
export const ENDED_TEXT = "Claims closed at midnight WAT at the end of 2 October. The board has the final results.";

/** Above the board. */
export const FINAL_NOTICE = "The hunt has ended. These are the final results.";

export const HOW_IT_WORKS: readonly { title: string; words: Words }[] = [
  {
    title: "Where to look",
    words: [`Players followed ${NAIJA66_X_HANDLE} on X for where to look.`],
  },
  {
    title: "The drops",
    words: [`At each drop — ${DROP_HOURS} WAT on 1 October — a code hid in a word on one page of the site.`],
  },
  {
    title: "The right word",
    words: ["The first tap on the right word won the code. After that it showed as claimed."],
  },
  {
    title: "The prize",
    words: [`Winners DMed their code to ${NAIJA66_X_HANDLE} on X for ${PRIZE.long}.`],
  },
];

export const RULES = [
  "Free to play — no purchase, no sign-up, and no personal data collected.",
  `Each prize was ${PRIZE.long}.`,
  "One prize per person.",
  "The first tap on a code's word won that code. After that it showed as claimed for everyone else.",
  "Claims closed at midnight WAT at the end of 2 October.",
  `Winners DMed their winner code to ${NAIJA66_X_HANDLE} on X.`,
  "Not affiliated with Spotify or Burna Boy.",
  "Paul's decision is final.",
] as const;
