import { ogId, ogVersions } from "../../lib/og-image";
import { DAI_DAI_SPOTIFY_NO1_DAYS } from "../../data/daiDai";

/**
 * The Spanish share card's copy, and the id in its URL.
 *
 * Split out of opengraph-image.tsx for the same reason the English one was: two
 * places need the id and they must never disagree. The route uses it to version
 * the card; the page's Article JSON-LD uses it to cite an image URL that
 * actually resolves, because once a route has generateImageMetadata the bare
 * `/dai-dai/es/opengraph-image` path 404s and the `image` field would advertise
 * a dead URL.
 *
 * The days figure reads DAI_DAI_SPOTIFY_NO1_DAYS (26 Sep 2026; it was spelled
 * out here until then), and tests/daiDaiFigureHomes.test.ts holds it to the
 * constant by name. The card's id is built from the words the card prints, so
 * it moves the day the figure does.
 */
export const esCard = {
  kicker: "Mundial de la FIFA 2026",
  title: "Dai Dai",
  sub: `El himno de Shakira y Burna Boy — ${DAI_DAI_SPOTIFY_NO1_DAYS} días como la canción más escuchada del mundo`,
};

export const ES_ALT = "Dai Dai — el himno del Mundial 2026 de Shakira y Burna Boy";

export const daiDaiEsOgId = ogId([esCard.kicker, esCard.title, esCard.sub].join("|"));

export const esOgVersions = () => ogVersions(esCard, ES_ALT);
