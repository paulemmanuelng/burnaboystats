import Link from "next/link";
import styles from "./liveBand.module.css";
import { liveHeadline } from "../lib/liveHeadline";
import { spotifyTotalStreams } from "../data/streamingTotals";

/**
 * The gold band that runs full-width under the nav.
 *
 * This is where the redesign puts the one fact that is only true today, and it
 * settles a question the old layout never answered well: the live figure was a
 * pill floating in the hero, competing with the wordmark for the same space.
 * Full width, above everything, is unambiguous — and being the only gold fill
 * above the fold, it reads as the site's pulse rather than as decoration.
 *
 * Every value is derived. The count comes from the live chart snapshot, so the
 * band rewrites itself as the data moves.
 */
export default function LiveBand() {
  const live = liveHeadline();

  return (
    <div className={styles.band}>
      <div className={styles.inner}>
        <span className={styles.livePill}>
          <span className={styles.dot} aria-hidden="true" />
          LIVE
        </span>

        <span className={styles.headline}>
          {live.title
            ? `“${live.title}” — No. 1 in ${live.countries} countries`
            : live.lead}
        </span>

        <span className={styles.sub}>most-streamed song on Earth · Spotify Global</span>

        <Link href="/live-charts" className={styles.streams}>
          career streams {spotifyTotalStreams}
        </Link>
      </div>
    </div>
  );
}
