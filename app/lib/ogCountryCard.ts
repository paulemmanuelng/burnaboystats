import { BODY, FIG, jointRanks, type RankRow } from "./og-figure";
import { fitSize } from "./ogFit";
import { certCountryCodes, priceCountry, type CountryBoard } from "./certCountry";
import { plural } from "./plural";

/**
 * A country board's preview, as data (Job 6 · J6-4, fix 126), apart from the
 * route so the guards can read it.
 *
 * The market's name heads the figure's column, one line (Paul, 15 Oct 2026:
 * the picture alone did not say which market it was): the board's own
 * `name`, the name the page title prints ("Certified Units in the United
 * Kingdom"), without the article the title's sentence takes.
 *
 * The figure says which metric it is: "at least {units} certified units",
 * then "{artists} artists · {plaques} plaques", and the top three in units.
 * A market where nothing can be priced (its body publishes no threshold:
 * `counted === 0`, read from the board, never from a country code) shows
 * "{plaques} plaques", "not priceable", and its top three by plaques. His
 * value is gold when he is in the three; every other value is ink, the
 * market's own total included.
 */

const HIS = "burna-boy"; // the engine's slug for him (lib/certUnits.ts)

/** The two columns: the figure at the left, the top three at the right. */
export const COUNTRY_GAP = 44;
export const COUNTRY_COLUMN = (BODY.right - BODY.left - COUNTRY_GAP) / 2;
/** The figure's size at most. */
export const COUNTRY_FIGURE_CAP = 110;

const n = (x: number) => x.toLocaleString("en-US");
const priced = (board: CountryBoard) => board.counted > 0;
/** The figure a board shows: its units where it is priced, its plaques where it is not. */
const figureOf = (board: CountryBoard) => (priced(board) ? n(board.units) : n(board.plaques));

/**
 * The one figure size for every board's card: the largest, at most the cap,
 * at which the widest board's figure fits its column. Computed once.
 */
let family: number | undefined;
export const countryFamilySize = () =>
  (family ??= fitSize(certCountryCodes().map((code) => figureOf(priceCountry(code))), COUNTRY_COLUMN, COUNTRY_FIGURE_CAP));

export interface CountryCard {
  /** The market, one line over the figure's column: the board's own name. */
  name: string;
  /** "AT LEAST" over a priced figure; nothing over a count of plaques. */
  over: string | null;
  figure: string;
  label: string;
  sub: string;
  rows: RankRow[];
}

/** The card for one market's board. */
export function countryCard(board: CountryBoard): CountryCard {
  const isPriced = priced(board);
  const metric = (l: CountryBoard["lines"][number]) => (isPriced ? l.units : l.plaques);
  // The board's own order (units, then plaques held, then name); a market
  // with nothing priced has no units, so the same order is by plaques.
  const top = board.lines.slice(0, 3);
  const places = jointRanks(top.map(metric));
  return {
    name: board.name,
    over: isPriced ? "at least" : null,
    figure: figureOf(board),
    label: isPriced ? "certified units" : plural(board.plaques, "plaque", "plaques"),
    sub: isPriced
      ? `${board.artists} ${plural(board.artists, "artist", "artists")} · ${n(board.plaques)} ${plural(board.plaques, "plaque", "plaques")}`
      : "not priceable",
    rows: top.map((l, i) => ({
      rank: String(places[i]),
      name: l.artist.name,
      value: n(metric(l)),
      valueColor: l.artist.slug === HIS ? FIG.gold : FIG.ink,
    })),
  };
}

/** Every string a country card prints. */
export const countryCardTexts = (c: CountryCard) => [
  c.name,
  ...(c.over ? [c.over] : []),
  c.figure,
  c.label,
  c.sub,
  ...c.rows.flatMap((r) => [`${r.rank} ${r.name}`, r.value]),
];
