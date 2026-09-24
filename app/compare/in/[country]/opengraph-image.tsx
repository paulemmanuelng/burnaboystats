import { ogImage, ogVersions, size, contentType } from "../../../lib/og-image";
import { certCountryCodes, countryCopy, countryFromSlug, countrySlug, priceCountry } from "../../../lib/certCountry";

export { size, contentType };
export const alt = "Certified units in one market — every Afrobeats plaque priced at that body's own threshold";

export function generateStaticParams() {
  return certCountryCodes().map((code) => ({ country: countrySlug(code) }));
}

/** The card's own words, from the live board. No flag: the OG renderer has no
 *  emoji font, and a regional-indicator pair renders as two empty boxes. */
const cardFor = (slug: string) => {
  const code = countryFromSlug(slug);
  const board = code ? priceCountry(code) : null;
  return board
    ? { kicker: "Certified units", title: board.name, sub: countryCopy(board).sub }
    : { kicker: "Certified units", title: "By country" };
};

export async function generateImageMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  // Figures move with every sweep; fold them into the id so a cached preview
  // follows the board rather than freezing at first scrape. The alt names the
  // market: all 27 cards carried the one generic alt above.
  const code = countryFromSlug(country);
  return ogVersions(
    cardFor(country),
    code ? `Certified units in ${priceCountry(code).name} — every Afrobeats plaque priced at that body's own threshold` : alt,
  );
}

export default async function Image({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return ogImage(cardFor(country));
}
