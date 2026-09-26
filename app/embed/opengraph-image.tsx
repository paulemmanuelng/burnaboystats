import { ogImage, ogVersions, size, contentType } from "../lib/og-image";
import { EMBED_NAME_LIST } from "../lib/embedWidgets";

export { size, contentType };
export const alt = "Embed Burna Boy's stats — live boxes of his numbers for any website";

const card = {
  kicker: "Embed the stats",
  title: "Live on your site",
  // Named from the widget list, like the page's description.
  sub: `${EMBED_NAME_LIST.charAt(0).toUpperCase()}${EMBED_NAME_LIST.slice(1)} — one snippet, always current`,
};

// Versioned by the card's own contents, so a cached preview follows the copy
// (see app/press/opengraph-image.tsx).
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
