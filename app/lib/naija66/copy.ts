import { NAIJA66_PRIZES, NAIJA66_X_HANDLE } from "../../data/naija66";
import { watHour } from "./clock";

/**
 * The words the hunt says, once, for every place that says them — the phone
 * screen and the desktop page print the same steps and the same rules from
 * here, and the home banner, the win card, the board, the page's metadata and
 * its share card take the prize from PRIZE below, so none of them can drift.
 * Drop times come from the committed schedule, not typed.
 *
 * Wording (Paul, 30 Sep 2026): the hunt hides five CODES; each shows at its
 * time as the small key badge, and the words for them are "code" and "key
 * badge" only. The hunt names NO page (Paul, 1 Oct 2026, 03:50: "remove the
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

export const HOW_IT_WORKS: readonly { title: string; words: Words }[] = [
  {
    title: "Where to look",
    words: [`Follow ${NAIJA66_X_HANDLE} on X to find out where to look for each code.`],
  },
  {
    title: "Spot the badge",
    words: [
      `Each code appears at its time — ${DROP_HOURS} WAT on 1 October — as a small green-white-green key badge at the foot of its page.`,
    ],
  },
  {
    title: "Enter it first",
    words: [
      "Type the code in the box on this page. The first person to enter it wins that prize, and the board marks it claimed.",
    ],
  },
  {
    title: "Claim your Premium",
    words: [
      `Win, and this page gives you a winner code. DM it to ${NAIJA66_X_HANDLE} on X as soon as you get it, for ${PRIZE.long}.`,
    ],
  },
];

export const RULES = [
  "Free to play — no purchase, no sign-up, and no personal data collected.",
  `Each prize is ${PRIZE.long}.`,
  "One prize per person.",
  "Codes are not case-sensitive.",
  "The first valid code entered wins its prize. A claimed code never opens again.",
  "Claims close at midnight WAT at the end of 2 October.",
  `Winners DM their winner code to ${NAIJA66_X_HANDLE} on X as soon as they get it.`,
  "Not affiliated with Spotify or Burna Boy.",
  "Paul's decision is final.",
] as const;

/** What a winner is told. */
export const WINNER_LINE = `DM this code to ${NAIJA66_X_HANDLE} on X now to claim ${PRIZE.long}.`;

/**
 * Under a winner's code: keep it, and keep it to yourself — whoever DMs the
 * code first is paid, so a posted screenshot hands the prize to a stranger.
 */
export const WINNER_KEEP_LINE =
  "Only this browser can show this code. Screenshot it, but don't post it: the first DM with the code gets the prize.";

/** After "Too slow — prize N was claimed…", while another code is still out or still to drop. */
export const NEXT_CODE_LINE = `Follow ${NAIJA66_X_HANDLE} on X for where to look next.`;
/**
 * …and instead once the board shows every other prize claimed, so nothing is
 * left to find (Naija66Play.tsx nothingLeft). Never from the clock alone: at
 * 9:30pm, with prize 5 gone, a morning code can still be out.
 */
export const LAST_CODE_LINE = "That was the last code.";
