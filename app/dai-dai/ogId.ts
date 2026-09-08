import { ogId, cardUrl } from "../lib/og-image";
import { daiDaiNumberOnes, daiDaiChartEntryCount } from "../data/charts";
import { daiDaiCertCount } from "../data/certifications";
import { DAI_DAI_SPOTIFY_NO1_DAYS } from "../data/daiDai";

/**
 * The id segment in this page's own share-card URL.
 *
 * It lives here, rather than inside opengraph-image.tsx, because two places
 * need it and they must never disagree: the route uses it to version the card,
 * and the page's MusicEvent JSON-LD uses it to cite a URL that actually
 * resolves. `/dai-dai/opengraph-image` 404s — generateImageMetadata puts the id
 * in the path — so a structured-data `image` built from the bare route would
 * point at a dead URL, which is worse than omitting the field. With the id it
 * is a real 200.
 *
 * Versioned by the numbers ON the card, so a cached preview cannot stay frozen
 * at last month's figures. DAYS_AT_NO1 is part of the id even though it is not
 * in `stats`, because otherwise a card whose only change was that sentence
 * would keep its old id.
 */
/** Re-exported from data/daiDai, which is where the figure and its reading
 *  date now live. Kept as a named export because the figure-homes guard and
 *  the card's cache id both refer to it by this name. */
export const DAYS_AT_NO1 = DAI_DAI_SPOTIFY_NO1_DAYS;

export const ogStats = [
  { v: "No.1", l: "Global 200" },
  { v: `${daiDaiNumberOnes}`, l: "Country No.1s" },
  { v: `${daiDaiChartEntryCount}`, l: "Charts" },
  { v: `${daiDaiCertCount}`, l: "Certs" },
];

// cardUrl is in the id because it is printed ON the card, and because this card
// has been advertising a dead /DAI-DAI since it shipped. An id that does not move
// keeps serving the picture a scraper already cached, so the correction would
// never reach the previews that are wrong — which is the entire point of it.
export const daiDaiOgId = ogId([...ogStats.map((s) => s.v), DAYS_AT_NO1, cardUrl("/dai-dai")].join("-"));
