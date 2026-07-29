import { ogImage, ogVersions, size, contentType } from "../../lib/og-image";
import { totalAwards } from "../../data/certifications";
import { totalWins } from "../../data/awards";

export { size, contentType };
export const alt = "Burna Boy by the Numbers — every career stat in one place";

const card = {
  kicker: "Burna Boy",
  title: "By the Numbers",
  sub: `${totalAwards()} certifications · ${totalWins} award wins · the biggest tour in African history`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
