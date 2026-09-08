import { ogImage, ogVersions, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "About Burna Boy — biography & career timeline";

const card = {
  kicker: "Biography",
  title: "The African Giant",
  sub: "The story of Damini Ogulu — Afro-Fusion pioneer & Grammy winner",
};

// Versioned by the card's own contents, so a cached preview follows the copy.
//
// Without this the og:image URL carries Next's [contenthash] of THIS FILE — and
// the drawing lives in lib/og-image.tsx, so the lockup landed on the card while
// the URL stayed byte-identical and every already-scraped preview went on
// serving the logo-less image. Fourteen routes were in exactly that state.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
