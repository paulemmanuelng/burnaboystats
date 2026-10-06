import { ogImage, ogVersions, size, contentType } from "../lib/og-image";
import { comparableArtists, unitsForCert } from "../lib/certUnits";
import { CERT_THRESHOLDS } from "../data/certThresholds";
import { pricedClause } from "../lib/certCountry";

export { size, contentType };
export const alt = "Certified units, compared — two Afrobeats artists at each body's own threshold";

// Derived, so the card follows the roster rather than freezing at a typed count.
const plaques = comparableArtists.reduce(
  (n, a) => n + a.releases.reduce((m, r) => m + r.certs.length, 0),
  0,
);

// 27, from the threshold table the page prices against — not Burna's own
// country map, which is 26 and was what this card said. And "plaques across"
// rather than "priced across": some of these plaques cannot be priced, and the
// page says so; the card must not claim otherwise.
//
// "ARTIST plaques" (F-03/C-08, 4 Oct 2026): the sum counts a record two
// artists share once per holder — the per-artist view this page compares —
// while its sibling /compare/in card counts each record once (1,243 against
// 1,338 on 4 Oct). Two "plaques" totals for one board read as a contradiction;
// the word says which this is.
const bodies = Object.keys(CERT_THRESHOLDS).length;

// How many of those plaques CAN be priced. The sub ended "each priced at its
// own body's threshold" until 5 Oct 2026 while two Colombian plaques (no
// published thresholds) were not — the claim this comment's first paragraph
// already ruled out. Derived, so a newly unpriceable market shows up here.
const priced = comparableArtists.reduce(
  (n, a) => n + a.releases.reduce((m, r) => m + r.certs.filter((c) => unitsForCert(c, r.format).units !== null).length, 0),
  0,
);

const card = {
  kicker: "Certified units",
  title: "Compared",
  sub: `${comparableArtists.length} artists · ${plaques.toLocaleString("en-US")} artist plaques across ${bodies} countries · ${pricedClause(priced, plaques)}`,
};

export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
