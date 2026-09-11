import { ogImage, ogVersions, size, contentType } from "../lib/og-image";
import { comparableArtists } from "../lib/certUnits";
import { CERT_THRESHOLDS } from "../data/certThresholds";

export { size, contentType };
export const alt = "Certified units, compared — two Afrobeats artists at each body's own threshold";

// Derived, so the card follows the roster rather than freezing at a typed count.
const plaques = comparableArtists.reduce(
  (n, a) => n + a.releases.reduce((m, r) => m + r.certs.length, 0),
  0,
);

// 27, from the threshold table the page prices against — not Burna's own
// country map, which is 26 and was what this card said. And "plaques across"
// rather than "priced across": some of the 1,212 cannot be priced, and the
// page says so; the card must not claim otherwise.
const bodies = Object.keys(CERT_THRESHOLDS).length;

const card = {
  kicker: "Certified units",
  title: "Compared",
  sub: `${comparableArtists.length} artists · ${plaques.toLocaleString("en-US")} plaques across ${bodies} countries · each priced at its own body's threshold`,
};

export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
