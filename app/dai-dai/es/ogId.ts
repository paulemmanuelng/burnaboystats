import { contentType, ogId, size } from "../../lib/og-image";
import { FIGURE_ART } from "../../lib/og-figure";
import { DAI_DAI_SPOTIFY_NO1_DAYS } from "../../data/daiDai";
import { ogStats } from "../ogId";

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


/**
 * The card's four tiles: the English card's (ogStats), in Spanish (Job 6 ·
 * J6-4, fix 130). The values are ogStats' own, with the Spanish page's "N.º"
 * for "No." (C-15, Paul 14 Oct 2026: the preview matches the page); each
 * label is keyed by the English one, and a chart's own name
 * (Global 200) stays as it is.
 */
const ES_LABELS: Record<string, string> = {
  "Country No. 1s": "N.º 1 por país",
  Charts: "listas",
  Certs: "certificaciones",
};
export const esTiles = ogStats.map((s) => ({ v: s.v.replace(/^No\. /, "N.º "), l: ES_LABELS[s.l] ?? s.l }));

/** The card's alt, in Spanish: its title, its sentence and its four tiles, the
 *  figures it prints (PV-07, live debug 15 Oct 2026). */
export const ES_ALT = `${esCard.title}: ${esCard.sub}; ${esTiles.map((t) => `${t.v} ${t.l}`).join(", ")}`;

/** Every string the Spanish card prints: its title, its sentence, its tiles. */
export const esCardTexts = () => [esCard.title, esCard.sub, ...esTiles.flatMap((t) => [t.v, t.l])];

/** The id the route versions the card by and the page's JSON-LD cites: the
 *  figure cards' fold (FIGURE_ART and every string the card prints), so a
 *  figure moves it, and the redraw moved it once. */
export const daiDaiEsOgId = ogId([FIGURE_ART, ...esCardTexts()].join("|"));

export const esOgVersions = () => [{ id: daiDaiEsOgId, alt: ES_ALT, size, contentType }];
