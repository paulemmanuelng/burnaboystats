import { ogId } from "../lib/og-image";
import { daiDaiNumberOnes, daiDaiChartEntryCount } from "../data/charts";
import { daiDaiCertCount } from "../data/certifications";

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
export const DAYS_AT_NO1 = 37;

export const ogStats = [
  { v: "No.1", l: "Global 200" },
  { v: `${daiDaiNumberOnes}`, l: "Country No.1s" },
  { v: `${daiDaiChartEntryCount}`, l: "Charts" },
  { v: `${daiDaiCertCount}`, l: "Certs" },
];

export const daiDaiOgId = ogId([...ogStats.map((s) => s.v), DAYS_AT_NO1].join("-"));
