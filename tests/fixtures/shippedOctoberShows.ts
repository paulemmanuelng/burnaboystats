import type { UpcomingShow } from "../../app/data/tours";

/**
 * The two October 2026 shows as `upcomingShows` in app/data/tours.ts carried
 * them until 4 Nov 2026, field for field and in the same key order (the
 * fingerprint tests hash JSON.stringify of the lists).
 *
 * Both were played. On 4 Nov 2026 they left the announced list:
 * - the Apple Music Hall night went to `concerts`;
 * - the NFL Paris Game halftime show went to app/data/liveMoments.ts.
 *
 * The tests of how an announced show expires, folds and links were written
 * about these two rows, so they run on them still. The announcedShows deadline
 * alarm reads the real list.
 */
export const SHIPPED_NFL_HALFTIME: UpcomingShow = {
  venue: "Stade de France",
  city: "Paris",
  country: "France",
  when: "25 Oct 2026",
  note: "Headlines the halftime show at the first NFL game ever played in France — Pittsburgh Steelers v New Orleans Saints, 2:30 pm CET (9:30 am ET) — back at the stadium he was the first African artist to headline, in April 2025. One of seven halftime shows across the league's 2026 international games.",
  short: "Halftime show at the first NFL game in France, Steelers v Saints.",
  source: "Announced by the NFL, 17 September 2026",
  noBoxOffice: true,
};

export const SHIPPED_APPLE_MUSIC_HALL: UpcomingShow = {
  venue: "Apple Music Hall",
  city: "London",
  country: "UK",
  when: "29 Oct 2026",
  cap: 600,
  note: "A Thursday-night show at Apple's new venue inside Battersea Power Station, doors 6:30 pm, livestreamed worldwide on Apple Music. He is the only African artist among the eight shows announced for its opening run, from Elton John on 28 September to Charli XCX on 2 December. Tickets went on sale through DICE on 22 October and sold out the same day; DICE now runs a wait list.",
  short: "Apple's new Battersea venue, sold out, livestreamed worldwide on Apple Music.",
  source: "Announced by Apple, 25 September 2026",
  noBoxOffice: true,
};

/** Both, in the order the list carried them, ahead of the shows still to come. */
export const SHIPPED_OCTOBER: UpcomingShow[] = [SHIPPED_NFL_HALFTIME, SHIPPED_APPLE_MUSIC_HALL];

/**
 * For `vi.mock("../app/data/tours", withShippedOctober)`: the module with the
 * two rows put back in front of the real announced list.
 */
export async function withShippedOctober(importOriginal: <T>() => Promise<T>) {
  const actual = await importOriginal<typeof import("../../app/data/tours")>();
  return { ...actual, upcomingShows: [...SHIPPED_OCTOBER, ...actual.upcomingShows] };
}
