import { ogImage, ogVersions, size, contentType } from "../../lib/og-image";
import { firstsCount } from "../../data/firsts";

export { size, contentType };
export const alt = "Burna Boy Firsts & Records — History-Making Milestones";

const card = {
  kicker: "History-making milestones",
  title: "Firsts & Records",
  sub: `${firstsCount} records broken by the African Giant`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
