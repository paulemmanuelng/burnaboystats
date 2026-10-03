import { ogImage, ogVersions, size, contentType } from "../../../../lib/og-image";
import { revenueByCountry } from "../../../../lib/revenueByCountry";

export { size, contentType };
export const alt = "Box office leaders by country — African artists";

// Derived from the revenue board, so the card is versioned: a new country or a
// new leader changes the URL and a shared preview follows it.
const { countryCount, hisLeads } = revenueByCountry();
const card = {
  kicker: "Box office",
  title: "Leaders by Country",
  sub: `Who leads each of ${countryCount} countries for reported box office by African artists — Burna Boy leads ${hisLeads}`,
};

export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
