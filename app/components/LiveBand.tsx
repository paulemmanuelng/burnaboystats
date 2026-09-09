import Link from "next/link";
import styles from "./liveBand.module.css";
import { bandFact } from "../lib/bandHeadline";
import { spotifyTotalStreams } from "../data/streamingTotals";

/**
 * The band that runs full-width under the nav — the site's "what moved last".
 *
 * Two things changed here in the September design pass, and they are the same
 * change seen from two sides.
 *
 * IT NO LONGER REPEATS THE PANEL. The band used to read "“Dai Dai” — No. 1 in
 * 31 countries on streaming charts" while the gold panel 300px to its right read
 * "31 / countries at No. 1 on today's streaming charts" — one fact, two
 * surfaces, in the most expensive space on the site. The streaming figure now
 * lives only in the panel, where it has its figure, caption and provenance, and
 * the band carries whatever moved last instead. See lib/bandHeadline.ts for why
 * that comes from the updates feed rather than from certifications.ts.
 *
 * IT IS NO LONGER GOLD. As a full-width gold field it was the largest gold mass
 * above the fold and it fought the hero for the eye. The region now follows one
 * rule — gold marks what is LIVE and what is the ACTION, everything else is ink
 * — so the band is --bg-soft with a hairline under it, and the only colour in it
 * is the green live dot. Gold above the strip is now exactly four things: the
 * "Boy" in the wordmark, the live figure, the primary button, and links.
 */
export default function LiveBand() {
  const fact = bandFact();
  if (!fact) return null;

  return (
    <div className={styles.band}>
      <div className={styles.inner}>
        <span className={styles.livePill}>
          <span className={styles.dot} aria-hidden="true" />
          LIVE
        </span>

        <Link href={fact.href} className={styles.headlineLink}>
          <span className={styles.headline}>{fact.headline}</span>
        </Link>

        <span className={styles.sub}>
          {fact.kicker} · <time dateTime={fact.date}>{longDate(fact.date)}</time>
        </span>

        <Link href="/music" className={styles.streams}>
          career streams <span className={styles.streamsFigure}>{spotifyTotalStreams}</span>
        </Link>
      </div>
    </div>
  );
}

/** "9 September 2026" — the band's own spelling, derived from the entry's date. */
function longDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
