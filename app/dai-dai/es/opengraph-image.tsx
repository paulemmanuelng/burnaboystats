import { ogImage, size, contentType } from "../../lib/og-image";
import { esCard, ES_ALT, esOgVersions } from "./ogId";

export { size, contentType };
export const alt = ES_ALT;

// Versioned by the card's own copy — and the same id the page's JSON-LD cites.
export const generateImageMetadata = esOgVersions;

export default function Image() {
  return ogImage(esCard);
}
