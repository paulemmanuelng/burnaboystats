/**
 * The box-office board's title: /records/tours/revenue's <title>, its share
 * title and its card's alt, one string.
 *
 * The board ranks every African artist's verified single-show grosses (since
 * 3 Oct 2026), and its title still read "Burna Boy Box Office — Highest-Grossing
 * Shows" (debug pass 5 Oct 2026, seo-11). Paul kept Burna Boy's name in it,
 * DERIVED (6 Oct 2026): the artist is the board's No. 1 night's, so the day
 * another night takes No. 1 the title names its artist, never a typed one.
 * At most 60 characters for every artist on the board — what Google shows
 * (tests/debug1005Rulings.test.tsx).
 */
export const showsBoardTitle = (topArtist: string): string => `Highest-Grossing African Shows — ${topArtist} Leads`;
