import { ogImage, ogVersions, size, contentType } from "../../lib/og-image";

export { size, contentType };
export const alt =
  "Did Burna Boy lose Spotify streams to bots? No — Spotify un-merged two remixes and moved about 309 million streams to the original recordings.";

// The card carries the answer, not the question. A link preview is often the
// only thing someone reads before deciding whether the claim is true, so the
// preview itself should settle it.
const card = {
  kicker: "The February 2026 correction",
  title: "Not a bot purge — an un-merge",
  sub: "~309M streams moved to the recordings that earned them · nothing was deleted",
};

export const generateImageMetadata = () => ogVersions(card, alt);
export default function Image() {
  return ogImage(card);
}
