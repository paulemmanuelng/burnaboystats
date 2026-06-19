import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy Discography — albums, EPs & hits";

export default function Image() {
  return ogImage({
    kicker: "Discography",
    title: "The Music",
    sub: "8 studio albums, EPs and every certified hit",
  });
}
