import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Methodology & Sources — how Burna Boy Stats verifies its numbers";

export default function Image() {
  return ogImage({
    kicker: "Methodology & sources",
    title: "How we verify",
    sub: "Primary sources, no unverified claims — every figure traced to the body that owns it",
  });
}
