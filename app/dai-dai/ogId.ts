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

// House style is "No. 1", with the space; the card printed "No.1" and
// "Country No.1s" until 25 Sep 2026 (A-30). The first `v` is in the id below,
// so that correction moves this card's id on its own, with no OG_ART bump.
export const ogStats = [
  { v: "No. 1", l: "Global 200" },
  { v: `${daiDaiNumberOnes}`, l: "Country No. 1s" },
  { v: `${daiDaiChartEntryCount}`, l: "Charts" },
  { v: `${daiDaiCertCount}`, l: "Certs" },
];

/** The pill in the card's footer. The halftime show is over, so it says the
 *  song was performed there; it read "Live · World Cup Final · 19 July" until
 *  24 Sep 2026. It is in the id below for the same reason cardUrl is. */
export const DAI_DAI_OG_PILL = "Performed · World Cup Final · 19 July";

// cardUrl is in the id because it is printed ON the card, and because this card
// has been advertising a dead /DAI-DAI since it shipped. An id that does not move
// keeps serving the picture a scraper already cached, so the correction would
// never reach the previews that are wrong — which is the entire point of it.
// The pill joined it on 24 Sep 2026: this card re-versions alone for that
// change, as the Afrobeats and song cards have, rather than through OG_ART,
// which would re-version all thirty-seven cards for one pill.
export const daiDaiOgId = ogId([...ogStats.map((s) => s.v), DAYS_AT_NO1, cardUrl("/dai-dai"), DAI_DAI_OG_PILL].join("-"));
