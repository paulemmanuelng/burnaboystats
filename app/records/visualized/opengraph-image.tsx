import { ogImage, ogVersions, size, contentType } from "../../lib/og-image";
import { totalWins } from "../../data/awards";
import { totalAwards } from "../../data/certifications";

export { size, contentType };
export const alt = "Burna Boy, Visualized — his career plotted in charts";

const card = {
  kicker: "Charts & graphs",
  title: "Visualized",
  sub: `${totalAwards()} certifications · ${totalWins} award wins · the biggest tour in African history — charted`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
