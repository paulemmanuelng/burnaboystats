import { ogImage, ogVersions, size, contentType } from "../../lib/og-image";
import { totalWins, totalNominations, ceremonyCount } from "../../data/awards";

export { size, contentType };
export const alt = "Burna Boy Awards & Nominations — Grammy, BET, Headies, AFRIMA & more";

const card = {
  kicker: "Every win, every nod",
  title: "Awards & Nominations",
  sub: `${totalWins} wins from ${totalNominations} nominations across ${ceremonyCount} award bodies worldwide`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
