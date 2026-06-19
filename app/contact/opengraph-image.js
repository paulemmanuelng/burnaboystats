import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Contact — Burna Boy Stats";

export default function Image() {
  return ogImage({
    kicker: "Get in touch",
    title: "Contact",
    sub: "Questions, corrections, or just here for the music",
  });
}
