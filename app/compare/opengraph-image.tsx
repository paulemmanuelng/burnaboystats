import { ogImage, ogVersions, size, contentType } from "../lib/og-image";
import { comparableArtists } from "../lib/certUnits";
import { countryCount } from "../data/certifications";

export { size, contentType };
export const alt = "Certified units, compared — two Afrobeats artists at each body's own threshold";

// Derived, so the card follows the roster rather than freezing at a typed count.
const plaques = comparableArtists.reduce(
  (n, a) => n + a.releases.reduce((m, r) => m + r.certs.length, 0),
  0,
);

const card = {
  kicker: "Certified units",
  title: "Compared",
  sub: `${comparableArtists.length} artists · ${plaques.toLocaleString("en-US")} plaques · priced at each body's own threshold across ${countryCount} countries`,
};

export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
