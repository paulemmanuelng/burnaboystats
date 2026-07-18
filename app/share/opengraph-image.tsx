import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Make a Burna Boy Stat Card — Download & Share the Numbers";

export default function Image() {
  return ogImage({
    kicker: "By the numbers",
    title: "Stat Cards",
    sub: "Pick a Burna Boy record and download a card built for sharing",
  });
}
