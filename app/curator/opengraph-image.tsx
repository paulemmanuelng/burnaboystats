import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "About the Curator — who runs Burna Boy Stats";

export default function Image() {
  return ogImage({
    kicker: "About the curator",
    title: "Who runs this",
    sub: "Researched, verified and maintained by one person — Ukpaka Emmanuel",
  });
}
