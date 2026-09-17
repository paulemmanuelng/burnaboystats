import { ogImage, ogVersions, size, contentType } from "../../lib/og-image";
import { cityCount, listenerCountryCount, topCity, compactListeners, listenersReadOnLabel } from "../../data/listeners";

export { size, contentType };
export const alt = "Where the World Listens to Burna Boy — His Top Spotify Cities";

const card = {
  kicker: "Spotify listeners",
  title: "Where the World Listens",
  sub: `${cityCount} cities in ${listenerCountryCount} countries — ${topCity.city} first, ${compactListeners(topCity.listeners)} a month · read ${listenersReadOnLabel}`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
