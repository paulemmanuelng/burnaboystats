import { liveCharts, type LiveRelease } from "../data/liveCharts";
import { countriesOf, LIVE_CADENCE } from "./liveChartMeta";
import { plural } from "./plural";

/**
 * The home page's live figure, on both layouts (TodaysNumber on desktop, the
 * phone hero in MobileHome): how many streaming charts have Burna Boy in their
 * Top 10 right now. Paul, 19 Nov 2026: "how many top 10 charts he is on", in
 * place of the countries "Dai Dai" was No. 1 in. One function, so the two
 * layouts cannot print two different numbers.
 *
 * A CHART is one platform's chart in one country, of one kind. kworb files a
 * release's Apple Music and iTunes placements under the same platform name
 * whether they come from the songs chart or the albums chart (only Spotify's
 * weekly albums chart has a platform of its own, "Spotify Albums"), so an
 * album at No. 3 on a country's Apple Music albums chart and a song at No. 5 on
 * its songs chart are two charts, not one: the key carries the release's kind.
 * Two of his releases on the SAME chart count it once: on 19 Nov 2026 iTunes
 * Dominica had "Ye" at No. 4 and "On the Low" at No. 5, one chart. A
 * platform's worldwide chart (kworb's "WW") is a chart as well, so it counts.
 *
 * Derived from the live snapshot, never typed. With nothing in a Top 10 the
 * panel falls back to reach, as liveHeadline() does: the countries he is
 * charting in, by countriesOf, the rule liveCountryCount is counted by (Britain
 * once, the worldwide chart not a country). So the panel never prints a 0: a
 * published board cannot chart nowhere, since the builder refuses to write
 * Burna Boy's below 50 placements (placementFloor, scripts/live-artists.mjs).
 */
export interface LiveTopTen {
  /** The number the panel prints. */
  figure: number;
  /** What it counts: charts with him in the Top 10, or (none being) the countries he charts in. */
  counts: "charts" | "countries";
  /** The words after the figure: lower case on the desktop panel, a capital on the phone's line. */
  caption: { desk: string; phone: string };
}

/** The positions a Top 10 holds. */
const TOP_TEN = 10;

/** One caption, two cases: as the desktop panel prints it after the figure,
 *  and opening on a capital, as the phone's line under the figure does. */
const sentence = (desk: string) => ({ desk, phone: desk.charAt(0).toUpperCase() + desk.slice(1) });

export function liveTopTen(releases: readonly LiveRelease[] = liveCharts): LiveTopTen {
  const charts = new Set<string>();
  for (const r of releases) {
    for (const p of r.platforms) {
      for (const e of p.entries) {
        if (e.position >= 1 && e.position <= TOP_TEN) charts.add(`${p.platform}|${r.kind}|${e.country}`);
      }
    }
  }
  if (charts.size > 0) {
    return {
      figure: charts.size,
      counts: "charts",
      // A no-break space holds "Top" to "10", as the desktop's No. 1 caption
      // held "No.&nbsp;1". The phone sets this in 24px Anton, upper case, in
      // the viewport less 36px: "…IN THE TOP" is 317.7px and "…IN THE TOP 10"
      // 343.2px, so on screens 354 to 379px wide (most Androids are 360, the
      // iPhone SE, mini and 6–8 375) an ordinary space ended line one on
      // "TOP" and opened line two on "10" (review of 19 Nov 2026).
      caption: sentence(`${plural(charts.size, "chart", "charts")} with Burna Boy in the Top\u00a010 right now`),
    };
  }
  const countries = countriesOf(releases.flatMap((r) => r.platforms.flatMap((p) => p.entries)));
  return {
    figure: countries,
    counts: "countries",
    caption: sentence(`${plural(countries, "country", "countries")} he is charting in right now`),
  };
}

/**
 * The line under the figure, both layouts: which charts it is read from, and
 * how often they are read. The desktop note named the featured song's new
 * No. 1 countries (recentArrivalSentence) and the phone's listed them; neither
 * belongs under a Top 10 count beside a song that has not charted yet, so both
 * print the sentence they already fell back to on a day with no arrivals.
 */
export const LIVE_PANEL_NOTE = `On streaming charts right now, ${LIVE_CADENCE}.`;
