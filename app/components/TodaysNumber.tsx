import Link from "next/link";
import styles from "./todaysNumber.module.css";
import { liveHeadline } from "../lib/liveHeadline";
import { changedSentence } from "../lib/recentNumberOnes";
// countryNumberOnes / numberOneCountryCount, not the headline numberOnes and
// chartCountryCount from data/charts: the note below says "on the official
// national charts", and both of those figures count Billboard's Global 200 and
// Global 200 Excl. US. It read "47 No. 1s across 69 countries", which asserts
// he has topped the chart in 69 countries — the same regression
// tests/homeScoreboardParity.test.ts pins for the homepage tile, in prose.
import { countryNumberOnes, numberOneCountryCount } from "../lib/analysis";
import { recentArrivalSentence } from "../lib/recentNumberOnes";
import { spotifyImage } from "../lib/spotifyImage";
import { liveChartsUpdated } from "../data/liveCharts";

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
  const title = live.title ?? "Dai Dai";

  return (
    <>
    <div className={styles.panel}>
      {/* ROW 1 — STREAMING. The live half, and the only gold in the panel.
          Provenance sits at the top, where a sceptic looks first: what this
          number is, and when it was last read. */}
      <div className={styles.kicker}>
        <span className={styles.liveTag}>
          <span className={styles.dot} aria-hidden="true" />
          Live
        </span>
        <span className={styles.kickerLabel}>Streaming charts</span>
        {/* The mock asks for "Updated 2 h ago". The data cannot say that:
            liveChartsUpdated is a DATE, so an hour count would be invented.
            The date is what was read, so the date is what it says. */}
        <span className={styles.stamp}>Updated {shortDate(liveChartsUpdated)}</span>
      </div>

      <div className={styles.row}>
        <div className={styles.figureWrap}>
          <div className={styles.figure}>{live.countries}</div>
          <div className={styles.caption}>
            {live.countries === 1 ? "country" : "countries"} at No.&nbsp;1 with
            &nbsp;&ldquo;{title}&rdquo; right now
          </div>
        </div>
        <Link href="/dai-dai" className={styles.cover}>
          {/* eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN art, as elsewhere on the site */}
          <img
            src={spotifyImage(DAI_DAI_COVER, 300)}
            alt=""
            width={104}
            height={104}
          />
          <span className={styles.coverLabel}>{title} ↗</span>
        </Link>
      </div>

      <p className={styles.note}>{recentArrivalSentence(title)}</p>
    </div>

    {/* ROW 2 — OFFICIAL. The distinction the whole methodology rests on, given
        its own labelled row instead of being whispered as a muted tail on the
        streaming note. Ink, not gold: the figure above is what is happening
        today, this is what has been established.
        No display numeral here on purpose — the scoreboard tile a hundred
        pixels below already carries the 45 at 52px, and a second large 45 in
        one viewport is the duplication finding 5.3 exists to remove. The
        sentence carries the number; the tile carries the numeral. */}
    <div className={styles.official}>
      <div className={styles.officialKicker}>Official national charts</div>
      {/* Two clauses came off this sentence on 9 Sep 2026, both because they
          were checkably false:

          "the figure the records pages are built on" — /records/charts is
          built on numberOnes (47), in its title, its hero tile and its lede.
          The tile links there, so a reader following the 45 landed on a page
          headlined 47. Whether that page should move to 45 is an editorial
          decision, not something this sentence can assert on its behalf.

          "official bodies only" — of the 45, eight are not: five are
          airplay/broadcast-monitor charts (Lebanon x2, Panama, Venezuela,
          Estonia) and three are Billboard-compiled country charts (Colombia,
          Argentina, Luxembourg), by charts.ts's own NOT_A_NATIONAL_BODY
          classifier. /records/charts publishes exactly that split in prose.
          charts.ts already records this mistake being shipped once. The
          wording now matches the linked page's own. */}
      <p className={styles.officialText}>
        Career total: {countryNumberOnes} No.&nbsp;1s across {numberOneCountryCount}{" "}
        countries, on each country&apos;s principal national chart.
      </p>
    </div>

    {/* ROW 3 — the status line, on the page background, divided by the same
        hairline. The green dot moved up to row 1; one live dot in the panel. */}
    <div className={styles.status}>
      <span className={styles.statusText}>{changedSentence}</span>
      <Link href="/live-charts" className={styles.statusLink}>
        Live board ↗
      </Link>
    </div>
    </>
  );
}

/** "9 Sep 2026" — the day the live snapshot was read, in the panel's own voice. */
function shortDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
