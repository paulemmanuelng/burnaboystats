import { ogImage, ogVersions, size, contentType } from "../../../lib/og-image";
import { revenueShows } from "../../../data/tourRevenue";

export { size, contentType };
export const alt = "Burna Boy — Highest Revenue Per Show";

// The count is derived, so this card follows the list as shows are reported.
// That makes it a data-driven card, which means it also needs versioning —
// otherwise the URL never changes and a shared preview stays frozen.
const card = {
  kicker: "Box office",
  title: "Highest Revenue Per Show",
  sub: `The ${revenueShows.length} highest-grossing single shows by an African artist, ranked`,
};

export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
