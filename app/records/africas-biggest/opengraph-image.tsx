import { ogImage, size, contentType } from "../../lib/og-image";

export { size, contentType };
export const alt = "Africa's Biggest — most-streamed African artists by year on Spotify";

export default function Image() {
  return ogImage({
    kicker: "Africa's Biggest",
    title: "Most-streamed, by year",
    sub: "Spotify's biggest African artists — Burna Boy led 2024 & 2025",
  });
}
