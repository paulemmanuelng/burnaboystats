import { NAIJA66_DM_BY, NAIJA66_PRIZES, NAIJA66_X_HANDLE } from "../../data/naija66";
import { watHour } from "./clock";

/**
 * The words /naija66 says, once, for both layouts — the phone screen and the
 * desktop page print the same steps and the same rules from here, so the two
 * cannot drift. Drop times come from the committed schedule, not typed.
 */

/** "9am, 12pm, 3pm, 6pm and 9pm" */
const hours = NAIJA66_PRIZES.map((p) => watHour(p.dropsAt).replace(" WAT", ""));
export const DROP_HOURS = `${hours.slice(0, -1).join(", ")} and ${hours.at(-1)}`;

export const HOW_IT_WORKS = [
  {
    title: "Follow the clue",
    text: `At each drop — ${DROP_HOURS} WAT on 1 October — Paul posts one clue on X from ${NAIJA66_X_HANDLE}.`,
  },
  {
    title: "Find the page",
    text: "Each clue leads to one page on Burna Boy Stats. From its drop time, that page carries a small green-white-green key badge at its foot.",
  },
  {
    title: "Enter the key",
    text: "Type the key in the box on this page. The first person to enter it wins that prize, and the board marks it claimed.",
  },
  {
    title: "Claim your Premium",
    text: `Winners get a code. DM it to ${NAIJA66_X_HANDLE} on X by ${NAIJA66_DM_BY} for a month of Spotify Premium.`,
  },
] as const;

export const RULES = [
  "Free to play — no purchase, no sign-up, and no personal data collected.",
  "One prize per person.",
  "Keys are not case-sensitive.",
  "The first valid key entered wins its prize. A claimed key never opens again.",
  "Claims close at midnight WAT at the end of 2 October.",
  `Winners must DM their code to ${NAIJA66_X_HANDLE} on X by ${NAIJA66_DM_BY}.`,
  "Not affiliated with Spotify or Burna Boy.",
  "Paul's decision is final.",
] as const;

/** What a winner is told, word for word from the brief. */
export const WINNER_LINE = `DM this code to ${NAIJA66_X_HANDLE} on X by ${NAIJA66_DM_BY} to claim your month of Spotify Premium.`;
