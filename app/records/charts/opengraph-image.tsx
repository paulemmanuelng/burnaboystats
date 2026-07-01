import { ogImage, size, contentType } from "../../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy Official Chart Entries — Peak Positions Worldwide";

export default function Image() {
  return ogImage({
    kicker: "Peak positions worldwide",
    title: "Official Charts",
    sub: "28 No.1 peaks across 44 countries and territories",
  });
}
