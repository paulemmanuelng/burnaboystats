/**
 * Naija @ 66 — the Independence Day code hunt (1–2 October 2026). FINISHED.
 *
 * The hunt closed at midnight WAT going into 3 October (NAIJA66_CLOSES) with
 * all five prizes won, and the machinery that ran it — the word taps, the
 * claim and spot routes, the store — is gone. What is left is the record the
 * /naija66 page prints: each prize's drop time and how it was won.
 *
 * Prizes 1 and 2 were awarded by Paul on X (1 Oct 2026, 18:00 WAT). Prizes 3,
 * 4 and 5 were claimed on the site; for those the board showed the claim time
 * and the winner code's last two characters, and still does — exactly what the
 * live board showed at the close, and nothing more.
 * No full code, and no word or page a code hid behind, is written anywhere.
 *
 * Times are UTC. Nigeria is WAT, UTC+1 all year (no daylight saving), so the
 * drops were 9am, 12pm, 3pm, 6pm and 9pm WAT.
 */

export type Naija66Prize = {
  /** 1 to 5, in drop order. */
  prize: number;
  /** When this prize's code dropped, ISO UTC. */
  dropsAt: string;
  /** Won off the site: Paul gave prizes 1 and 2 to winners on X. */
  awarded?: true;
  /** When a prize claimed on the site was claimed, ISO UTC. */
  claimedAt?: string;
  /** The winner code's last two characters, as the board showed them. */
  tail?: string;
};

export const NAIJA66_PRIZES: readonly Naija66Prize[] = [
  { prize: 1, dropsAt: "2026-10-01T08:00:00Z", awarded: true },
  { prize: 2, dropsAt: "2026-10-01T11:00:00Z", awarded: true },
  { prize: 3, dropsAt: "2026-10-01T14:00:00Z", claimedAt: "2026-10-01T21:01:41.458Z", tail: "EK" },
  { prize: 4, dropsAt: "2026-10-01T17:00:00Z", claimedAt: "2026-10-01T20:38:07.313Z", tail: "QR" },
  { prize: 5, dropsAt: "2026-10-01T20:00:00Z", claimedAt: "2026-10-01T20:00:36.025Z", tail: "BY" },
];

/** When claims closed: midnight WAT into 3 October. */
export const NAIJA66_CLOSES = "2026-10-02T23:00:00Z";

/** The account winners DMed. */
export const NAIJA66_X_HANDLE = "@paulemmanuelng";
export const NAIJA66_X_URL = "https://x.com/paulemmanuelng";
