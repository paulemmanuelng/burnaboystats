/**
 * The co-lead tag's words — pure, with no data import, so the client
 * explorers can use it. The data that says WHO is a co-lead lives in
 * app/data/creditRoles.ts, which is server-only: the pages pass each
 * explorer a title → names map, the way `featured` already travels.
 */

/** "A", "A and B", "A, B and C". */
export const andList = (names: readonly string[]): string =>
  names.length <= 1 ? (names[0] ?? "") : `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;

/** The tag's visible word, lower case in the list rows. */
export const CO_LEAD_TAG = "co-lead";

/** The tag's hover text: who else Spotify credits as a main artist. */
export const coLeadTitle = (names: readonly string[]): string =>
  `Spotify credits Burna Boy as a main artist alongside ${andList(names)}`;
