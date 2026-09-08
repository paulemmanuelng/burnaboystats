import { ogId, ogVersions } from "../../lib/og-image";

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
 * The days figure is spelled out here rather than derived, and
 * tests/daiDaiFigureHomes.test.ts holds it to the same number as the other
 * sixteen statements of it on the site. This file is that guard's ES share-card
 * home — it moved here from the route on 8 Sep 2026.
 */
export const esCard = {
  kicker: "Mundial de la FIFA 2026",
  title: "Dai Dai",
  sub: "El himno de Shakira y Burna Boy — 37 días como la canción más escuchada del mundo",
};

export const ES_ALT = "Dai Dai — el himno del Mundial 2026 de Shakira y Burna Boy";

export const daiDaiEsOgId = ogId([esCard.kicker, esCard.title, esCard.sub].join("|"));

export const esOgVersions = () => ogVersions(esCard, ES_ALT);
