import { NAIJA66_PRIZES, NAIJA66_X_HANDLE } from "../../data/naija66";
import { watClock, watHour } from "./clock";

/**
 * The words the hunt says, once, for every place that says them — the phone
 * screen and the desktop page print the same steps and the same rules from
 * here, and the home banner, the win card, the board, the page's metadata and
 * its share card take the prize from PRIZE below, so none of them can drift.
 * Drop times come from the committed schedule, not typed.
 *
 * Wording (Paul, 30 Sep 2026): the hunt hides five CODES. Since 1 Oct 2026
 * (evening) each one hides in a WORD on its page: the first tap on that word
 * gets the code, and everyone after sees it claimed. No copy says which word,
 * or that a page holds one. The hunt names NO page (Paul, 1 Oct 2026, 03:50: "remove the
 * cue/link of where the code appear" — code 1's page had been named from 30 Sep
 * 23:00); players follow NAIJA66_X_HANDLE on X to find out where to look.
 */

/**
 * The prize — one each for five winners (Paul, 1 Oct 2026): a month of
 * Spotify Premium Nigeria, worth ₦3,000. Every place that names the prize
 * reads it from here; tests/naija66Copy.test.ts fails on any other wording.
 */
export const PRIZE = {
  /** In a sentence: "win a month of Spotify Premium Nigeria (₦3,000)". */
  long: "a month of Spotify Premium Nigeria (₦3,000)",
  /** A row of the board. */
  board: "Spotify Premium Nigeria · ₦3,000",
  /**
   * The home banner, all five at once — worded to keep the whole "Today 9am
   * WAT: the Naija @ 66 hunt — …" line inside the strip's two lines on a 360px
   * phone (", ₦3,000 each" at the end was clamped there).
   */
  banner: "five ₦3,000 Spotify Premium prizes",
} as const;

/** "9am, 12pm, 3pm, 6pm and 9pm" */
const hours = NAIJA66_PRIZES.map((p) => watHour(p.dropsAt).replace(" WAT", ""));
export const DROP_HOURS = `${hours.slice(0, -1).join(", ")} and ${hours.at(-1)}`;

/** A line of copy with a link in it: plain strings, and a link as {href, text}. */
export type Words = readonly (string | { href: string; text: string })[];

/** The X link's words, beside the drop times (the link adds its own ↗). */
export const WHERE_NEXT = `Where to look next: ${NAIJA66_X_HANDLE} on X`;

/** "9am, 12pm, 3pm, 6pm, 9pm" — Paul's own listing, in the flow line below. */
const HOURS_LIST = hours.join(", ");

/** The whole mechanic in one paragraph (Paul, 1 Oct 2026) — the /naija66 box. */
export const FLOW = `At each drop (${HOURS_LIST} WAT) a code hides in a word on one page of the site. Follow ${NAIJA66_X_HANDLE} on X for where to look. Tap the right word first and the code is yours — after that it shows as claimed. DM it to ${NAIJA66_X_HANDLE} as soon as you get it.`;

export const HOW_IT_WORKS: readonly { title: string; words: Words }[] = [
  {
    title: "Where to look",
    words: [`Follow ${NAIJA66_X_HANDLE} on X for where to look.`],
  },
  {
    title: "Watch the drops",
    words: [`At each drop — ${DROP_HOURS} WAT on 1 October — a code hides in a word on one page of the site.`],
  },
  {
    title: "Tap the right word",
    words: ["Tap the right word first and the code is yours. After that it shows as claimed."],
  },
  {
    title: "Claim your Premium",
    words: [`DM the code to ${NAIJA66_X_HANDLE} on X as soon as you get it, for ${PRIZE.long}.`],
  },
];

export const RULES = [
  "Free to play — no purchase, no sign-up, and no personal data collected.",
  `Each prize is ${PRIZE.long}.`,
  "One prize per person.",
  "The first tap on a code's word wins that code. After that it shows as claimed for everyone else.",
  "Claims close at midnight WAT at the end of 2 October.",
  `Winners DM their winner code to ${NAIJA66_X_HANDLE} on X as soon as they get it.`,
  "Not affiliated with Spotify or Burna Boy.",
  "Paul's decision is final.",
] as const;

// ── The card a tap on the word brings up (HuntKeySlot.tsx) ─────────────────

/** The quiet toast past 40 taps a minute (the reveal route's 429). */
export const SLOW_DOWN = "Slow down a little — try again in a minute.";
export const cardClaimed = (prize: number, at: string | null) =>
  `Code ${prize} was claimed${at ? ` at ${watClock(at)}` : ""}. Follow ${NAIJA66_X_HANDLE} on X for the next one.`;
export const ALREADY_WON_LINE = "You've already won a prize today. One per person.";

/** What a winner is told. */
export const WINNER_LINE = `DM this code to ${NAIJA66_X_HANDLE} on X now to claim ${PRIZE.long}.`;

/**
 * Under a winner's code: keep it, and keep it to yourself — whoever DMs the
 * code first is paid, so a posted screenshot hands the prize to a stranger.
 */
export const WINNER_KEEP_LINE =
  "Only this browser can show this code. Screenshot it, but don't post it: the first DM with the code gets the prize.";
