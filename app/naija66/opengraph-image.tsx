import { ogImage, ogVersions, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Naija @ 66 — the Burna Boy Stats Independence Day key hunt";

// The site's gold card with the lockup, like every other page's. The page
// itself wears the flag's green; share cards stay gold for every page.
const card = {
  kicker: "Naija @ 66 · 1 October",
  title: "The key hunt",
  sub: "Five keys hidden across the site for Independence Day — find one first, win a month of Spotify Premium",
};

// Versioned by the card's own contents, so a cached preview follows the copy.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
