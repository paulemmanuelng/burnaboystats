import { size, contentType } from "../../../lib/og-image";
import { BodyBox, FIG, Figure, Headline, MonoLines, monoText, ogFigureCard, ogFigureVersions, RankList } from "../../../lib/og-figure";
import { certCountryCodes, countryFromSlug, countrySlug, priceCountry, pricingPhrase } from "../../../lib/certCountry";
import { COUNTRY_COLUMN, COUNTRY_GAP, countryCard, countryCardTexts, countryFamilySize } from "../../../lib/ogCountryCard";

export { size, contentType };
export const alt = "Certified units in one market — every Afrobeats plaque priced at that body's own threshold";

export function generateStaticParams() {
  return certCountryCodes().map((code) => ({ country: countrySlug(code) }));
}

/** The card's own words and figures, from the live board (lib/ogCountryCard.ts,
 *  fix 126), headed by the market's name. No flag: the OG renderer has no
 *  emoji font, and a regional-indicator pair renders as two empty boxes. */
const cardFor = (slug: string) => {
  const code = countryFromSlug(slug);
  return code ? countryCard(priceCountry(code)) : null;
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
  // "United Kingdom".
  const code = countryFromSlug(country);
  const card = cardFor(country);
  return ogFigureVersions(card ? countryCardTexts(card) : ["by country"], code ? altFor(code) : alt);
}

export default async function Image({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const card = cardFor(country);
  if (!card) {
    // Next probes the route once with no params while collecting page data.
    return ogFigureCard(
      <BodyBox>
        <Headline lines={["CERTIFIED UNITS, BY COUNTRY"]} size={80} />
      </BodyBox>,
    );
  }
  return ogFigureCard(
    <BodyBox>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: COUNTRY_COLUMN }}>
          {/* The market, one line over the figure (Paul, 15 Oct 2026). */}
          <MonoLines lines={monoText(card.name, COUNTRY_COLUMN, 1)} style={{ marginBottom: 12 }} />
          {card.over ? <MonoLines lines={monoText(card.over, COUNTRY_COLUMN, 1)} color={FIG.muted} /> : null}
          <Figure value={card.figure} size={countryFamilySize()} color={FIG.ink} style={{ marginTop: card.over ? 2 : 0 }} />
          <MonoLines lines={monoText(card.label, COUNTRY_COLUMN, 1)} style={{ marginTop: 8 }} />
          <MonoLines lines={monoText(card.sub, COUNTRY_COLUMN, 2)} color={FIG.body} style={{ marginTop: 12 }} />
        </div>
        <RankList rows={card.rows} style={{ width: COUNTRY_COLUMN, marginLeft: COUNTRY_GAP }} />
      </div>
    </BodyBox>,
  );
}
