import Link from "next/link";
import styles from "./todaysNumber.module.css";
import { liveHeadline } from "../lib/liveHeadline";
import { changedSentence } from "../lib/recentNumberOnes";
import { numberOnes, chartCountryCount } from "../data/charts";
import { recentArrivalSentence } from "../lib/recentNumberOnes";
import { spotifyImage } from "../lib/spotifyImage";

// The Dai Dai cover, already used by the hero card and the OG image.
const DAI_DAI_COVER = "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4";

/**
 * The gold "Today's number" panel in the right column of the hero.
 *
 * The figure is the count of countries where his biggest record is currently
 * No. 1 — derived from the live snapshot, never typed, so the panel is always
 * reporting rather than asserting.
 *
 * The design fills this panel with a warm gradient and floating music glyphs
 * rather than a flat gold, which keeps it from reading as a warning banner at
 * this size.
 */
export default function TodaysNumber() {
  const live = liveHeadline();

  return (
    <>
    <div className={styles.panel}>
      <div className={styles.glyphs} aria-hidden="true">
        <span className={styles.g1}>♪</span>
        <span className={styles.g2}>♫</span>
        <span className={styles.g3}>♬</span>
        <span className={styles.g4}>♩</span>
        <span className={styles.g5}>✦</span>
        <span className={styles.ring1} />
        <span className={styles.ring2} />
      </div>

      <div className={styles.kicker}>Today&apos;s number</div>

      <div className={styles.row}>
        <div className={styles.figure}>{live.countries}</div>
        <Link href="/dai-dai" className={styles.cover}>
          {/* eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN art, as elsewhere on the site */}
          <img
            src={spotifyImage(DAI_DAI_COVER, 300)}
            alt=""
            width={146}
            height={146}
          />
          <span className={styles.coverLabel}>{live.title ?? "Dai Dai"} ↗</span>
        </Link>
      </div>

      <div className={styles.caption}>
        {live.countries === 1 ? "country at No. 1" : "countries at No. 1"}
      </div>

      <p className={styles.note}>
        {recentArrivalSentence(live.title ?? "Dai Dai")}{" "}
        Burna&apos;s career total is now {numberOnes} No.&nbsp;1s across{" "}
        {chartCountryCount} countries.
      </p>
    </div>

    {/* Outside the gold: the design sets this status row on the page
        background, divided from the panel by the same hairline. */}
    <div className={styles.status}>
      <span className={styles.statusDot} aria-hidden="true" />
      <span className={styles.statusText}>{changedSentence}</span>
      <Link href="/live-charts" className={styles.statusLink}>
        Live board ↗
      </Link>
    </div>
    </>
  );
}
