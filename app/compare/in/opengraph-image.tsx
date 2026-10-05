import { ogImage, ogVersions, size, contentType } from "../../lib/og-image";
import { certCountryCodes, countryBoards } from "../../lib/certCountry";

export { size, contentType };
export const alt = "Certified units by country — every market the Afrobeats board is certified in";

// Derived, so the card follows the sweeps rather than freezing at a typed
// count: the day a first Irish plaque lands, this says 28.
const boards = countryBoards();
const plaques = boards.reduce((n, b) => n + b.plaques, 0);

const card = {
  kicker: "Certified units",
  title: "By country",
  // Records counted once (a plaque two artists share is one plaque in its
  // country), and no claim that each is priced at its own body's threshold —
  // Greece's and Colombia's are not (debug pass, 5 Oct 2026).
  sub: `${certCountryCodes().length} markets · ${plaques.toLocaleString("en-US")} plaques, each record counted once · priced market by market`,
};

export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
