import { ogImage, ogVersions, size, contentType } from "../../../lib/og-image";
import { certCountryCodes, countryCopy, countryFromSlug, countrySlug, priceCountry, pricingPhrase } from "../../../lib/certCountry";

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

/** The alt names what THIS board is priced at, in the words its page
 *  description uses (pricingPhrase). Every card used to end "priced at that
 *  body's own threshold", which was wrong for three boards. Greece is priced
 *  at IFPI's June 2013 level, Polish singles are converted at 2 zł each, and
 *  Colombia is not priced at all. */
const altFor = (code: string) => {
  const board = priceCountry(code);
  const priced = pricingPhrase(board);
  return priced
    ? `Certified units in ${board.inSentence} — every Afrobeats plaque priced at ${priced}`
    : `Certified units in ${board.inSentence} — every Afrobeats plaque listed, not priced: ${board.body} publishes no unit threshold`;
};

export async function generateImageMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  // Figures move with every sweep; fold them into the id so a cached preview
  // follows the board rather than freezing at first scrape. The alt names the
  // market: all 27 cards carried the one generic alt above. It names it the
  // way the board's own sentences do (inSentence): "the United Kingdom", not
  // "United Kingdom". The card's drawn title keeps the bare name.
  const code = countryFromSlug(country);
  return ogVersions(
    cardFor(country),
    code ? altFor(code) : alt,
  );
}

export default async function Image({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return ogImage(cardFor(country));
}
