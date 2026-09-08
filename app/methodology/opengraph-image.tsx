import { ogImage, ogVersions, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Methodology & Sources — how Burna Boy Stats verifies its numbers";

const card = {
  kicker: "Methodology & sources",
  title: "How we verify",
  sub: "Primary sources, no unverified claims — every figure traced to the body that owns it",
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
