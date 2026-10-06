import { ogImage, ogVersions, size, contentType } from "../../lib/og-image";
import { certCountryCodes, countryBoards, pricedClause } from "../../lib/certCountry";

export { size, contentType };
export const alt = "Certified units by country — every market the Afrobeats board is certified in";

// Derived, so the card follows the sweeps rather than freezing at a typed
// count: the day a first Irish plaque lands, this says 28.
const boards = countryBoards();
const plaques = boards.reduce((n, b) => n + b.plaques, 0);
// Each record once, as the plaques figure counts them. "each priced at its own
// body's threshold" until 5 Oct 2026, while Colombia — one of the markets
// counted — publishes no thresholds and its plaques are unpriced.
const priced = boards.reduce((n, b) => n + b.counted, 0);

const card = {
  kicker: "Certified units",
  title: "By country",
  sub: `${certCountryCodes().length} markets · ${plaques.toLocaleString("en-US")} plaques · ${pricedClause(priced, plaques)}`,
};

export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
