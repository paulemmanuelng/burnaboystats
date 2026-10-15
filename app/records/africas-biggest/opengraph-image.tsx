import { ogImage, ogVersions, size, contentType } from "../../lib/og-image";
import { africaBoards } from "../../lib/africaBoards";

export { size, contentType };
export const alt = "Africa's Biggest — most-streamed African artists by year on Spotify";

/**
 * The closed years he topped the by-year board, oldest first — the board's
 * own badge reading ("3 of 4 yrs"), never typed. "Burna Boy led 2024 & 2025"
 * was typed on 22 Jun 2026; two days later the 2022 row joined the board,
 * also his, and the card went on saying two years (live debug, 15 Oct 2026).
 * The running year is a lead, not a year won, so it waits until it closes.
 */
const yearsLed = (africaBoards.find((b) => b.id === "most-streamed-african-artist")?.years ?? [])
  .filter((y) => y.his && !y.inProgress)
  .map((y) => y.label)
  .sort();
const listed = yearsLed.length <= 1 ? (yearsLed[0] ?? "") : `${yearsLed.slice(0, -1).join(", ")} & ${yearsLed.at(-1)}`;

const card = {
  kicker: "Africa's Biggest",
  title: "Most-streamed, by year",
  sub: `Spotify's biggest African artists${listed ? ` — Burna Boy led ${listed}` : ""}`,
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
