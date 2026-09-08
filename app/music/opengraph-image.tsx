import { ogImage, size, contentType } from "../lib/og-image";
import { albums, eps } from "../data/albums";

export { size, contentType };
export const alt = "Burna Boy Discography — albums, EPs & hits";

export default function Image() {
  return ogImage({
    kicker: "Discography",
    title: "The Music",
    // Derived, like the <title> and the description on the same page. It was
    // typed as 8, which is right today and only today.
    sub: `${albums.length} studio albums, ${eps.length} EPs and every certified hit`,
  });
}
