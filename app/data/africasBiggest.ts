import { spotifyFollowersRead, followersCompact, SPOTIFY_FOLLOWERS_READ_ON, spotifyGlobalRank } from "./spotify";
import { monthlyListenersSeries } from "./trends";
import {
  hot100Top,
  hot100Standings,
  hot100PeakStandings,
  HOT100_TOP,
  HOT100_COUNTRIES,
  HOT100_METHOD,
  HOT100_SOURCE,
  HOT100_CHART_DATE_LONG,
  HOT100_PUBLISHED_ON_LONG,
  HOT100_READ_ON_LONG,
  hot100StillChartingLine,
  coCreditsOf,
  peakReachedOn,
  shortTitle,
} from "./hot100Weeks";
import { count, cardinalWord } from "../lib/plural";
import { DAI_DAI_2026_MOST_NO1_THROUGH_LONG } from "./daiDaiNo1Claim";

// His peak Spotify monthly listeners, in one place. The note under the
// leaderboard used to spell the milestone out ("past 56 million") while the
// value beside it had already climbed past it — so the threshold is derived
// from this string rather than written twice.
//
// This constant is also the stats bot's write target for `spotify-peak-listeners`,
// which anchors on the NAME below rather than on the leaderboard's id — see
// scripts/watched-metrics.json. An id-anchored find/replace matched the first
// literal after the board's id, and because this cell holds a constant rather
// than a literal, that was the next artist's value instead of his.
export const BURNA_PEAK_LISTENERS = "60.13M";

/**
 * The day that peak was set — DERIVED, never typed.
 *
 * The board used to call the figure "still climbing" and its source line said
 * it was "his current peak and still rising". Neither was true: the peak is
 * monotonic by construction (`kind: "peak"` in watched-metrics.json, so it can
 * only ever move up), it had not moved for 25 days when this was found, and
 * Spotify's own artist page read 52,813,789 on 4 Sep 2026 — 7.3 million BELOW
 * the published peak. A peak that has stopped moving is still a peak; calling
 * it a climb turns an all-time high into a claim about right now.
 *
 * The bot appends a dated point to `monthlyListenersSeries` on every new high
 * (the `trendSeries` block of the same metric), so the newest point in that
 * series IS the day the peak was set. Reading it from there means the date
 * moves itself the next time the peak does, and cannot drift from the figure
 * beside it the way a hand-typed date would.
 */
const peakPoint = monthlyListenersSeries.reduce((best, p) =>
  p.value > best.value || (p.value === best.value && p.date > best.date) ? p : best
);
export const BURNA_PEAK_LISTENERS_SET_ON = peakPoint.date;

const monthYear = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/**
 * "10 August 2026" — one spelling of that day, for every mention of it.
 *
 * The leaderboard note lower down /records/africas-biggest already dated the
 * peak; the hero at the top of the SAME page did not, and said the opposite.
 * Both read this now, so the page cannot print two different accounts of one
 * figure again.
 */
export const BURNA_PEAK_LISTENERS_SET_ON_LONG = monthYear(BURNA_PEAK_LISTENERS_SET_ON);

/**
 * The rise the hero on /records/africas-biggest draws, WITH the two readings it
 * is measured between.
 *
 * That hero printed "▲ +26.9% this month". The percentage was real; the label
 * was not. It is measured 1 Jul → 10 Aug — a 40-day window that had closed 25
 * days before the page was being read — and "this month" was a hardcoded string
 * that knew nothing about either endpoint, so it would have gone on saying
 * "this month" however old the window got. Beside it the prose read "Climbing
 * fast on the “Dai Dai” World Cup run" while the peak had not moved since 10
 * August and Spotify's own artist page read 52,813,789 on 4 Sep 2026 — 7.3
 * million BELOW the figure the hero was calling a climb.
 *
 * So the window travels with the number: both endpoints are real logged points
 * and the label is formatted from them, which means the next time the bot
 * appends a new high the label moves with it. There is no sentence left that can
 * go stale on its own.
 *
 * `to` is the PEAK point, not simply the newest one. The figure beside it is the
 * peak, so a percentage measured to some later, lower reading would not be the
 * change the displayed number represents. They are the same point today; they
 * stop being the same point the moment monthly listeners fall and the series
 * keeps logging.
 */
export const BURNA_PEAK_LISTENERS_RISE = {
  from: monthlyListenersSeries[0],
  to: peakPoint,
  pct:
    ((peakPoint.value - monthlyListenersSeries[0].value) / monthlyListenersSeries[0].value) * 100,
};

/** His monthly audience on YouTube (YouTube for Artists), at its peak.
 *  Exported because four files quoted this figure by hand — it sat at 840M in
 *  eight places while the platform itself showed 844M. One home, imported
 *  everywhere, and one name: "YouTube", as the board's source says. */
export const BURNA_YT_AUDIENCE = "929M";
export const BURNA_YT_AUDIENCE_WORDS = "929 million";
/** The day the peak was set — TYPED, because no trendSeries tracks the YouTube
 *  Music audience the way peakPoint tracks Spotify listeners. Bump it in the
 *  same edit as BURNA_YT_AUDIENCE, never one without the other; the feed entry
 *  of 12 Aug 2026 is where the 929M was read. */
export const BURNA_YT_AUDIENCE_SET_ON = "2026-08-12";
export const BURNA_YT_AUDIENCE_SET_ON_LONG = monthYear(BURNA_YT_AUDIENCE_SET_ON);

/** His career Billboard Hot 100 entries — the record for any African artist.
 *
 *  Exported for the same reason as the YouTube figure above: this one number
 *  was published in eight places across five files, in three spellings ("9",
 *  "nine", "Nine"), with nothing holding them together. The next entry would
 *  have had to be found and changed eight times by hand, and the miss would
 *  have shown as two answers to one question on pages that link to each other.
 *
 *  It is a hand-maintained figure, NOT derived from data/charts.ts, and must
 *  stay that way: that file is a per-release table of peak positions for the
 *  releases this site tracks, and it carries three US singles entries. The 9
 *  is Billboard's career total for him, features and older entries included.
 *  Deriving it from the peak table would publish 3. Update it here when
 *  Billboard adds an entry; tests/hotHundredEntryHomes.test.ts holds every
 *  published mention to this constant. */
export const BURNA_HOT_100_ENTRIES = 9;
/** Capitalised, like `numberWord` — call `.toLowerCase()` mid-sentence. */
export const BURNA_HOT_100_ENTRIES_WORD = "Nine";

// "Africa's Biggest" — leaderboard-style stat boxes comparing African artists.
// Two box layouts:
//   • "year" — a ranked Top-5 per year (e.g. most-streamed artist by year).
//     Mostly rankings only; a year may carry stream totals where they're
//     reliably sourced (e.g. 2025).
//   • "list" — a single ranked list, optionally with a value per entry
//     (e.g. peak monthly listeners, which ARE visible on Spotify).

export interface RankEntry {
  name: string;
  sub?: string; // optional secondary label, e.g. an album title ("list" boxes)
  value?: string; // e.g. "46.58M" (only used in "list" boxes)
  /** Shares the rank of the entry above it — "Despacito" at 97 days beside
   *  "Shape of You" at 97. Both renderers and the badge read rankOf(). */
  tie?: true;
}

/** Competition ranking: a run of ties takes the rank of its first member. */
export function rankOf(entries: RankEntry[], i: number): number {
  let j = i;
  while (j > 0 && entries[j].tie) j--;
  return j + 1;
}

export interface RankRow {
  label?: string; // usually a year ("year" layout)
  entries: RankEntry[];
  inProgress?: boolean;
  /** ISO date the row's live figures are read at — the source's own stamp,
   *  written by the stats bot beside the values it belongs to. */
  asOf?: string;
  note?: string;
}

export interface LeaderboardBox {
  id: string;
  title: string;
  meta: string; // metric + source descriptor
  layout: "year" | "list";
  rows?: RankRow[]; // for layout "year"
  entries?: RankEntry[]; // for layout "list"
  note?: string; // box-level highlight / record callout
  source: string;
}

// Name highlighted across every box (the site's subject).
export const HIGHLIGHT = "Burna Boy";

/** An act's Hot 100 entries — one per song its credit line names — off the
 *  Billboard rows the weeks board is built from (data/hot100Weeks.ts). The
 *  entries board typed these and stamped them "As of July 2026" beside a
 *  30 Sep 2026 read that confirms every one (5 Oct 2026, crossSite-13). */
const hot100SongsOf = (name: string): number => {
  const s = hot100Standings.find((x) => x.name === name);
  if (!s) throw new Error(`${name} has no Hot 100 rows in data/hot100Weeks.ts`);
  return s.songs;
};

/** The one figure a shared row prints for acts tied on Hot 100 entries. The
 *  entries board's "Tyla & Hugh Masekela · tied" row and its note's "tied on
 *  N" read one count for two acts, so this throws at load the day their
 *  counts part, rather than print a tie that no longer holds. */
export const tiedHot100Count = (...names: string[]): number => {
  const counts = names.map(hot100SongsOf);
  if (counts.some((n) => n !== counts[0]))
    throw new Error(
      `Hot 100 entries: ${names.map((n, i) => `${n} ${counts[i]}`).join(", ")} are no longer tied — give each act its own row`,
    );
  return counts[0];
};
const TYLA_MASEKELA_HOT100 = tiedHot100Count("Tyla", "Hugh Masekela");

/**
 * The rows of "Most weeks on the Billboard Hot 100". Every figure is computed
 * in data/hot100Weeks.ts from Billboard's own rows, one per credited song; this
 * only formats them the way the page's other boards read — flag and detail
 * under the name, the figure on the right. A tie shares its rank.
 */
const hot100WeeksEntries: RankEntry[] = hot100Top.map((s, i) => ({
  name: s.name,
  sub: `${HOT100_COUNTRIES[s.country].flag} ${count(s.songs, "song", "songs")} · best No. ${s.bestPeak}`,
  value: `${s.weeks} weeks`,
  ...(i > 0 && s.rank === hot100Top[i - 1].rank ? { tie: true as const } : {}),
}));

/**
 * The followers board, written from one day's reading (app/data/spotify.ts).
 *
 * Its note and source line used to be typed beside five typed values, and the
 * next re-read had to find and change every copy by hand — the note's "next"
 * pair and the source line's order both went stale that way (Ruger, Seyi Vibez
 * and Kizz Daniel, each past six million on the 27 Sep read, were not in a line
 * that had Fireboy DML, on 5.7 million, following Ayra Starr). Now the rows, the
 * gaps and the counts are all read off the list, so a re-read is one edit.
 */
const withCommas = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const andList = (xs: string[]) =>
  xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;
/** A gap between two follower counts, the way the note says it. */
const followerGap = (n: number) =>
  n >= 1e6 ? `${(n / 1e6).toFixed(2)} million` : `about ${withCommas(Math.round(n / 1000) * 1000)}`;

const followers = [...spotifyFollowersRead].sort((a, b) => b.followers - a.followers);
const followersTop = followers.slice(0, 5);
const followersNote = (() => {
  const [f1, f2, f3, f4, f5, f6, f7] = followers;
  return (
    `${f1.name} is the most-followed African artist on Spotify — ${followerGap(f1.followers - f2.followers)} clear of ${f2.name} in second. ` +
    `${f3.name} and ${f4.name} sit ${followerGap(f3.followers - f4.followers)} apart for third, ` +
    `and ${f5.name} is past ${cardinalWord(Math.floor(f5.followers / 1e6))} million too; ` +
    `${f6.name} (${followersCompact(f6.followers)}) and ${f7.name} (${followersCompact(f7.followers)}) are next.`
  );
})();
const followersSource = (() => {
  const counted = (xs: typeof followers) => xs.map((r) => `${r.name} ${withCommas(r.followers)}`);
  const rest = followers.slice(7);
  const over = rest.filter((r) => r.followers >= 2e6);
  const under = rest.filter((r) => r.followers < 2e6).map((r) => r.name);
  return (
    `Spotify follower counts, read directly from each artist's own Spotify page (the About panel prints the exact count) rather than a tracker, all on ${monthYear(SPOTIFY_FOLLOWERS_READ_ON)} — ` +
    `${counted(followersTop).join(", ")} (then ${andList(counted(followers.slice(5, 7)))}; ` +
    `${andList(counted(over))} follow, and ${andList(under)} are under 2 million). ` +
    // The previous reading, typed: it is a fixed, dated fact about the past.
    "The 27 September reading had the five at 17,954,252 / 12,891,692 / 12,053,961 / 11,970,673 / 10,832,377."
  );
})();

/**
 * The rows of "Highest Billboard Hot 100 peak", read off the same Billboard
 * rows as the weeks board (data/hot100Weeks.ts), so the two cannot disagree.
 *
 * They were typed until 30 Sep 2026, and wrong by omission. They left out Hugh
 * Masekela, who topped the chart as the lead act in 1968 (the entries board on
 * this same page said so), and Miriam Makeba, whose "Pata Pata" peaked above
 * his best, so Burna Boy's row printed fifth when he is seventh; and Tems' No. 1
 * carried no tie mark, so she printed second. The "biggest artist in Africa"
 * answer, read off this board, then called Wizkid and Tems the joint holders.
 *
 * The top five, ties included, then every act down to his row when he sits
 * below it: a row with a gap above it would print a rank he does not hold.
 */
const hot100PeakRows = (() => {
  const his = hot100PeakStandings.findIndex((s) => s.name === HIGHLIGHT);
  return hot100PeakStandings.filter((s, i) => s.rank <= HOT100_TOP || i <= his);
})();
/** "Drake & Kyla", "A, B & C" — how the page's subs join a credit. */
const ampList = (xs: string[]) =>
  xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} & ${xs[xs.length - 1]}`;
const hot100PeakEntries: RankEntry[] = hot100PeakRows.map((s, i) => {
  const others = coCreditsOf(s.song, s.name);
  return {
    name: s.name,
    sub: `${HOT100_COUNTRIES[s.country].flag} “${shortTitle(s.song.title)}”${others.length ? ` (with ${ampList(others)})` : ""}`,
    value: `No. ${s.peak}`,
    ...(i > 0 && s.peak === hot100PeakRows[i - 1].peak ? { tie: true as const } : {}),
  };
});
const hot100PeakNote = (() => {
  const no1s = hot100PeakStandings.filter((s) => s.peak === 1);
  const him = hot100PeakStandings.find((s) => s.name === HIGHLIGHT);
  const [first] = no1s;
  const firstHit = first
    ? `“${shortTitle(first.song.title)}” in ${peakReachedOn(first.song).slice(0, 4)}`
    : "";
  const no1Line = !first
    ? ""
    : no1s.length === 1
      ? `${first.name} is the only African act to reach No. 1, with ${firstHit}. `
      : `${andList(no1s.map((s) => s.name))} have all reached No. 1, ${first.name} first, with ${firstHit}. `;
  const hisLine = him
    ? `${HIGHLIGHT}'s best is “${shortTitle(him.song.title)}” at No. ${him.peak} (his real Hot 100 record is entries, where he leads all African acts with ${BURNA_HOT_100_ENTRIES_WORD.toLowerCase()}).`
    : "";
  return `The highest any African artist has charted on the Billboard Hot 100, counting lead and featured credits. ${no1Line}${hisLine}`.trim();
})();
const hot100PeakSource = (() => {
  const extended = hot100PeakRows.some((s) => s.rank > HOT100_TOP);
  return (
    `Best Billboard Hot 100 peak, lead or featured credit, from the same rows the weeks board is summed from: ` +
    `each act's Hot 100 chart history on billboard.com, read ${HOT100_READ_ON_LONG}, as of the chart dated ${HOT100_CHART_DATE_LONG} (published ${HOT100_PUBLISHED_ON_LONG}). ` +
    `African artists by nationality. Acts on the same peak share a rank and are listed in the order they reached it.` +
    (extended
      ? ` The top ${cardinalWord(HOT100_TOP)}, then every act down to ${HIGHLIGHT}'s row, so his row prints the rank he holds.`
      : "")
  );
})();

/**
 * The day the best-selling board's top two are counted to. ChartMasters stamps
 * each artist's streams with a date, and Burna Boy and Wizkid are read as a
 * same-date pair, so this one day dates both totals. The board's source line
 * prints it, and so does the "best-selling African artist" answer on
 * /records/africas-biggest — which is why it lives here rather than inside the
 * sentence: typed into the source line alone, the answer would either have to
 * copy it (and be left behind by the next re-read) or go undated.
 * Typed, like BURNA_YT_AUDIENCE_SET_ON: bump it in the same edit as the two
 * values, never one without the other.
 */
export const EAS_STREAMS_COUNTED_TO = "2026-09-28";

/**
 * Spotify streams as a LEAD artist, African artists by nationality: the measure
 * the "most-streamed African artist on Spotify" answer leads with (Paul, 30 Sep
 * 2026), because a featured credit on someone else's hit is not the artist's
 * own streaming. Read 30 Sep 2026 from each artist's ChartMasters page
 * (chartmasters.org/artist/<slug>/, "Spotify statistics": Lead streams and
 * Feat streams), as the page prints them. ChartMasters files a song as lead
 * where it is on one of the artist's own Spotify releases or the artist is
 * listed first on it ("Rule C", app/data/songRoles.ts — so "Dai Dai" is lead
 * for both Shakira and Burna Boy, "Location" a feature). kworb, which counts
 * only the first-listed artist as lead, gives the same order at the top on its
 * 28–29 Sep pages: Burna Boy 6.26B, Rema 4.99B, Tyla 4.21B, Wizkid 3.41B. Both
 * tables: docs/sourcing/spotify-lead-streams-2026-09-30.md. Re-read the whole
 * list on one day; never one row.
 */
export const SPOTIFY_LEAD_STREAMS_READ_ON = "2026-09-30";
export const SPOTIFY_LEAD_STREAMS_READ_ON_LONG = new Date(`${SPOTIFY_LEAD_STREAMS_READ_ON}T00:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
export interface LeadStreamsReading {
  name: string;
  /** Streams as lead, at the precision ChartMasters prints. */
  lead: number;
  /** Streams as a featured artist, likewise. */
  feat: number;
}
export const spotifyLeadStreams: LeadStreamsReading[] = [
  { name: "Burna Boy", lead: 8.0e9, feat: 3.1e9 },
  { name: "Rema", lead: 6.3e9, feat: 407.7e6 },
  { name: "Wizkid", lead: 4.9e9, feat: 6.9e9 },
  { name: "Tems", lead: 4.8e9, feat: 1.5e9 },
  { name: "Tyla", lead: 4.7e9, feat: 136.8e6 },
  { name: "Asake", lead: 4.0e9, feat: 396.0e6 },
  { name: "Ayra Starr", lead: 3.5e9, feat: 771.0e6 },
  { name: "Davido", lead: 3.4e9, feat: 816.7e6 },
  { name: "Omah Lay", lead: 3.1e9, feat: 651.7e6 },
  { name: "CKay", lead: 3.0e9, feat: 76.9e6 },
];
/** "8.0B" / "407.7M", the precision the source prints. */
export const streamsShort = (n: number) => (n >= 1e9 ? `${(n / 1e9).toFixed(1)}B` : `${(n / 1e6).toFixed(1)}M`);
/** "28 September" — how the source line has always written the stamp. */
const dayMonth = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  });

export const statBoxes: LeaderboardBox[] = [
  {
    id: "billboard-global-200-peak",
    title: "Highest Billboard Global 200 peak",
    meta: "Billboard Global 200 · African artists · best peak",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 “Dai Dai” (with Shakira)", value: "No. 1" },
      { name: "CKay", sub: "🇳🇬 “Love Nwantiti”", value: "No. 2" },
      { name: "Tems", sub: "🇳🇬 “Wait for U” (Future & Drake)", value: "No. 2", tie: true },
      { name: "Rema", sub: "🇳🇬 “Calm Down” (with Selena Gomez)", value: "No. 3" },
      { name: "Tyla", sub: "🇿🇦 “Water”", value: "No. 6" },
    ],
    note: "“Dai Dai” made Burna Boy the first African artist ever to top Billboard's US-inclusive Global 200 — leading the five biggest African crossover hits on the chart. (Libianca's “People” sits just outside, at No. 20.)",
    source: "Best peak on Billboard's Global 200 chart (US-inclusive), lead or featured credit, per Billboard and each song's Wikipedia-cited chart history. Rema's “Calm Down” peaked higher still on the separate Global 200 Excl. US chart, at No. 1. Re-read at Billboard's own chart histories, September 2026.",
  },
  {
    id: "billboard-hot-100-peak",
    title: "Highest Billboard Hot 100 peak",
    meta: "Billboard Hot 100 · African artists · best peak",
    layout: "list",
    // Nothing here is typed: see hot100PeakEntries above.
    entries: hot100PeakEntries,
    note: hot100PeakNote,
    source: hot100PeakSource,
  },
  {
    id: "most-streamed-african-artist",
    title: "Most-streamed African artist",
    meta: "Total Spotify streams · global · per year",
    layout: "year",
    rows: [
      {
        label: "2026",
        // The /* live:… */ markers are the stats bot's anchors. Its anchored
        // replace resolves with indexOf, and `{ name: "Burna Boy", value: "`
        // occurs three times in this file — here, in the 2025 row below, and on
        // the daily-peak board. It hit the right row only because this block
        // happens to come first; adding a `sub:` field to these entries to match
        // the other boards' styling would have silently redirected the daily
        // write into the 2025 historical row. Keep a marker on every row the bot
        // writes, and keep them unique. tests/watchedMetrics.test.ts enforces it.
        //
        // All five are live, and all five are one reading: a chart tracker's
        // published count carried forward with kworb's per-artist dailies under
        // the date each page is stamped with, through the day in `asOf` — the
        // newest day every one of the five ledgers covers. Until 12 Sep 2026 the
        // top three were summed once per calendar day of the bot's own clock,
        // which counted three days twice and missed three; the bottom two were
        // typed and never moved. The bot keeps the rows sorted. From 12 to
        // 17 Sep 2026 a row within ten million of the row above was marked
        // `tie: true` and shown joint; Paul retired that on 17 Sep — the board
        // calls the lead the count gives, as the trackers do — so no row
        // carries the mark now, though the loader below still honours one.
        entries: [
          /* live:streams-2026-burna */ { name: "Burna Boy", value: "1.940B" },
          /* live:streams-2026-wizkid */ { name: "Wizkid", value: "1.914B" },
          /* live:streams-2026-tems */ { name: "Tems", value: "1.905B" },
          /* live:streams-2026-asake */ { name: "Asake", value: "1.561B" },
          /* live:streams-2026-tyla */ { name: "Tyla", value: "1.268B" },
        ],
        /* live:streams-2026-asof */ asOf: "2026-10-04",
        inProgress: true,
        // {{billions2026}} and {{asOf2026}} are filled from the row itself at
        // load (see billionsSentence below), so the sentence follows the
        // numbers when the order changes — "Burna Boy third behind Tems and
        // Wizkid" was typed, and stayed typed the day the board (wrongly, as it
        // turned out) had him pass Wizkid. The counts are derived for the same
        // reason: "three are past a billion and a half" was typed, and was
        // still printed on 26 Sep 2026 with Asake at 1.516B — four.
        note: "{{billions2026}} All five totals are read together, as of {{asOf2026}}, so the gaps stay comparable; they move together, never one without the others.",
      },
      {
        label: "2025",
        entries: [
          { name: "Burna Boy", value: "1.986B" },
          { name: "Wizkid", value: "1.947B" },
          { name: "Tyla", value: "1.798B" },
          { name: "Rema", value: "1.267B" },
          { name: "Tems", value: "1.195B" },
        ],
        note: "Burna Boy's 1.986 billion streams set a record for the biggest streaming year ever by an African artist on Spotify.",
      },
      {
        label: "2024",
        entries: [
          { name: "Burna Boy" },
          { name: "Tyla" },
          { name: "Ayra Starr" },
          { name: "Rema" },
          { name: "Tems" },
        ],
      },
      {
        label: "2023",
        entries: [
          { name: "Rema" },
          { name: "Burna Boy" },
          { name: "Wizkid" },
          { name: "Tems" },
          { name: "Ayra Starr" },
        ],
      },
      {
        label: "2022",
        entries: [
          { name: "Burna Boy" },
          { name: "Wizkid" },
          { name: "Rema" },
          { name: "Tems" },
          { name: "Asake" },
        ],
      },
    ],
    source:
      "Ranked by total Spotify streams each year (2022–2026), sourced from streaming trackers. The 2026 row is the five artists' running totals as read together on one day, stated in the note: a chart tracker's published count, carried forward day by day from kworb's per-artist daily streams under the date each page is stamped with — not an official Spotify report and not projected forward from a daily average. The order is the count's: the leader is named, and a lead of a few million is a lead of a few million — the note prints the spread. 2026 is still running, so both the totals and the order will change.",
  },
  {
    // Verified against kworb's PkListeners column, which agrees to the digit on
    // Burna Boy (60.13M), Tyla (46.58M) and Rema (40.01M), and to the decimal
    // on Tems once unrounded (45.58M).
    //
    // CKay is the exception and must NOT be "corrected" from kworb: it lists
    // his peak as 15.50M against the 34.78M here. That column records the peak
    // since kworb began watching an artist, not an all-time high, and CKay
    // peaked during the 2021 “Love Nwantiti” run — before that coverage. The
    // 34.78M is his verified Spotify peak and stands.
    id: "monthly-listeners-peak",
    title: "Highest monthly-listeners peak",
    meta: "Spotify · African artists · all-time peak",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: BURNA_PEAK_LISTENERS },
      { name: "Tyla", sub: "🇿🇦 South Africa", value: "46.58M" },
      { name: "Tems", sub: "🇳🇬 Nigeria", value: "45.58M" },
      { name: "Rema", sub: "🇳🇬 Nigeria", value: "40.01M" },
      { name: "CKay", sub: "🇳🇬 Nigeria", value: "34.78M" },
    ],
    note: `Burna Boy is the first African artist ever to reach 50 million Spotify monthly listeners — and the first past ${Math.floor(parseFloat(BURNA_PEAK_LISTENERS))} million, a milestone no African act had crossed before. That ${BURNA_PEAK_LISTENERS} is an all-time high set on ${BURNA_PEAK_LISTENERS_SET_ON_LONG}, not a reading of today: monthly listeners rise and fall with a release cycle, and this board records each artist at their highest.`,
    source: `Peak Spotify monthly listeners, as of August 2026. Burna Boy, Tyla, Tems and Rema are kworb's recorded peaks; CKay's is his Spotify peak from the “Love Nwantiti” run, which predates kworb's coverage of him. Burna Boy's peak was last raised on ${BURNA_PEAK_LISTENERS_SET_ON_LONG} and moves only when he sets a new high. Where he sits today is another figure: No. ${spotifyGlobalRank} among all artists worldwide by current monthly listeners, on kworb's live listener chart.`,
  },
  {
    id: "biggest-spotify-debut",
    title: "Biggest Spotify debut",
    meta: "African albums · global · first-week streams",
    layout: "list",
    entries: [
      { name: "Asake", sub: "🇳🇬 M$NEY", value: "55.98M" },
      { name: "Wizkid", sub: "🇳🇬 Morayo", value: "52.8M" },
      { name: "Davido", sub: "🇳🇬 5ive", value: "51.95M" },
      { name: "Tyla", sub: "🇿🇦 Tyla", value: "46.4M" },
      { name: "Burna Boy", sub: "🇳🇬 I Told Them…", value: "37.6M" },
    ],
    note: "Burna Boy's I Told Them… is one of the five biggest first-week debuts ever for an African album on Spotify — the record belongs to Asake's M$NEY (55.98M).",
    source: "Biggest opening-week streams for African albums on Spotify (global), sourced from streaming trackers.",
  },
  {
    id: "most-hot-100-entries",
    title: "Most Billboard Hot 100 entries",
    meta: "African artists · career · US Billboard Hot 100",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: `${BURNA_HOT_100_ENTRIES}` },
      { name: "Tems", sub: "🇳🇬 Nigeria", value: `${hot100SongsOf("Tems")}` },
      { name: "Seether", sub: "🇿🇦 South Africa", value: `${hot100SongsOf("Seether")}` },
      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: `${hot100SongsOf("Wizkid")}` },
      { name: "Tyla & Hugh Masekela", sub: "🇿🇦 South Africa · tied", value: `${TYLA_MASEKELA_HOT100}` },
    ],
    note: `Burna Boy has the most Billboard Hot 100 entries of any African artist in history — ${BURNA_HOT_100_ENTRIES}, extended by “Dai Dai” with Shakira. Tems is next with ${hot100SongsOf("Tems")} — the most ever by an African woman. Hugh Masekela and Tyla are tied on ${TYLA_MASEKELA_HOT100}; Masekela was the first African act to top the chart (“Grazing in the Grass,” No. 1, 1968).`,
    source:
      `Career Billboard Hot 100 entries by African artists — one per song whose credit line names the artist, lead or featured — counted from the Billboard chart-history rows the weeks board on this page is built from: Burna Boy (${BURNA_HOT_100_ENTRIES}), Tems (${hot100SongsOf("Tems")}), Seether (${hot100SongsOf("Seether")}), Wizkid (${hot100SongsOf("Wizkid")}), Tyla (${hot100SongsOf("Tyla")}) and Hugh Masekela (${hot100SongsOf("Hugh Masekela")}). Read ${HOT100_READ_ON_LONG}, as of the chart dated ${HOT100_CHART_DATE_LONG}.`,
  },
  {
    // Paul, 27 Sep 2026: this board lives here and nowhere else. Scope is every
    // African artist, by nationality (the site's rule of 17 Sep 2026). Nothing
    // in it is typed: the rows, note and source are all built in
    // data/hot100Weeks.ts, where the read and its nationality calls are kept.
    id: "most-hot-100-weeks",
    title: "Most weeks on the Billboard Hot 100",
    meta: `Top ${HOT100_TOP} · African artists`,
    layout: "list",
    entries: hot100WeeksEntries,
    note: [HOT100_METHOD, hot100StillChartingLine()].filter(Boolean).join(" "),
    source: HOT100_SOURCE,
  },
  {
    id: "most-200m-stream-songs",
    title: "Most songs over 200M Spotify streams",
    meta: "African artists · all credits · Spotify",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "15" },
      { name: "Tems", sub: "🇳🇬 Nigeria", value: "8" },
      { name: "Tyla", sub: "🇿🇦 South Africa · tied", value: "6" },
      { name: "Rema", sub: "🇳🇬 Nigeria · tied", value: "6", tie: true },
      { name: "CKay & Seether", sub: "🇳🇬 Nigeria · 🇿🇦 South Africa · tied", value: "4" },
    ],
    note: "Burna Boy has the most songs past 200 million Spotify streams of any African artist — 15, well clear of the field. He owns the 300M tier too, and is now nine deep in it: “Dai Dai” crossed in August 2026 as his eighth, and Gunna’s “WGFT” became the ninth on 1 September. The next-deepest is Tyla with six, then Tems with five. Counts include lead and featured credits, and separate song versions are counted individually (as trackers list them).",
    source:
      "Songs with 200M+ Spotify streams (all credits), counted from kworb.net stream totals, read 28 September 2026 — figures shift as songs cross the threshold. CKay’s fourth is the North African remix of “love nwantiti” (204M), a separate version the rule above counts on its own; Tyla’s sixth is WizTheMc’s “Show Me Love (with Tyla)”. Seether’s four are “Fake It”, “Remedy”, “Fine Again” and their “Careless Whisper” (205M).",
  },
  {
    id: "most-followed-spotify",
    title: "Most-followed African artist on Spotify",
    meta: "Spotify followers · African artists · current",
    layout: "list",
    entries: followersTop.map((r) => ({ name: r.name, sub: r.sub, value: followersCompact(r.followers) })),
    note: followersNote,
    source: followersSource,
  },
  {
    id: "highest-spotify-global-peak",
    title: "Highest-charting song on Spotify Global",
    meta: "Spotify Daily Top Songs Global · peak position · all credits",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 “Dai Dai” (with Shakira)", value: "#1" },
      { name: "Wizkid & Tems", sub: "🇳🇬 “One Dance” / “Raindance” · tied", value: "#5" },
      { name: "Rema & Tyla", sub: "🇳🇬🇿🇦 “Calm Down” (Remix) / “Water” & “Chanel” · tied", value: "#8" },
      { name: "CKay", sub: "🇳🇬 “love nwantiti (ah ah ah)”", value: "#9" },
    ],
    note: `Burna Boy is the first and only African artist to reach No. 1 on Spotify's Global Daily Top Songs chart — no other African artist has ever cracked the top 4. “Dai Dai” has now held that No. 1 for 37 days in total — the most days at No. 1 by any song in 2026 through the chart dated ${DAI_DAI_2026_MOST_NO1_THROUGH_LONG}.`,
    source:
      "Peak positions on Spotify's Daily Top Songs Global chart, each artist's best-charting song across all credits, from chart-tracking accounts. As of August 2026.",
  },
  {
    // Paul asked for this board on 25 Sep 2026 ("build top 5 leaderboard for
    // that spotify page"). Every row was read on Spotify's own chart page,
    // charts.spotify.com/charts/view/album-global-weekly/<Thursday>, that day:
    // Love, Damini #17 NEW (2022-07-14; #31 the week after), M$NEY #18 NEW
    // (2026-05-07), Morayo #22 NEW (2024-11-28), Rave & Roses #24
    // (2023-05-04; #32 the week before, then #26, #30, #37), TYLA #29 NEW
    // (2024-03-28), 5ive #29 NEW (2025-04-24). Checked and lower: I Told Them…
    // #30, The Year I Turned 21 #37, SWAGUU #40, Lungu Boy #45, No Sign of
    // Weakness #50, Timeless #54 NEW (2023-04-06), Born in the Wild #81 NEW,
    // Work of Art #135 NEW, Made in Lagos #190 NEW (Nov 2020; the deluxe was
    // off the chart in Aug 2021). One row per artist, his or her best album,
    // as the song board beside it; a tie is one row, earlier peak named first.
    // Platform data: never copy these into charts.ts or an album page's
    // official-chart peaks. tests/africaBoards.test.ts holds the note to the rows.
    id: "spotify-global-album-peak",
    title: "Highest-charting African album on Spotify Global",
    meta: "Spotify Weekly Top Albums Global · peak position · African artists' own albums",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Love, Damini", value: "#17" },
      { name: "Asake", sub: "🇳🇬 M$NEY", value: "#18" },
      { name: "Wizkid", sub: "🇳🇬 Morayo", value: "#22" },
      { name: "Rema", sub: "🇳🇬 Rave & Roses", value: "#24" },
      { name: "Tyla & Davido", sub: "🇿🇦🇳🇬 TYLA / 5ive · tied", value: "#29" },
    ],
    note: "Burna Boy's Love, Damini is the highest-charting African album on Spotify's Weekly Top Albums Global chart: No. 17 in its first week, in July 2022, one place above Asake's M$NEY. Tyla's TYLA is the best from outside Nigeria, level with Davido's 5ive at No. 29.",
    source:
      "Peak positions on Spotify's Weekly Top Albums Global chart (Friday-to-Thursday weeks), each artist's highest-charting album of their own; nationality decides who counts. Soundtracks and compilations are left out: Black Panther: Wakanda Forever – Music From and Inspired By, which Spotify credits to Rihanna and Tems, reached No. 7 on 11–17 November 2022. The chart's archive begins in October 2020. The week each peak was set: Love, Damini No. 17, 8–14 July 2022; M$NEY No. 18, 1–7 May 2026; Morayo No. 22, 22–28 November 2024; Rave & Roses No. 24, 28 April–4 May 2023; TYLA No. 29, 22–28 March 2024; 5ive No. 29, 18–24 April 2025. All but Rave & Roses peaked in their first week (it entered at No. 32 the week before). Checked and lower: I Told Them… No. 30, The Year I Turned 21 No. 37, SWAGUU No. 40, Lungu Boy No. 45, No Sign of Weakness No. 50, Timeless No. 54, Born in the Wild No. 81, Work of Art No. 135 and Made in Lagos No. 190. The six peaks above were read on charts.spotify.com, 25 September 2026; the lower checks there and in kworb's archived copies of the chart.",
  },
  {
    id: "daily-peak-streams-ng",
    title: "Biggest single day on Spotify",
    meta: "Spotify · Nigerian artists · best day on record",
    layout: "list",
    entries: [
      { name: "Wizkid", value: "21.6M" },
      { name: "Asake", value: "18M" },
      { name: "Davido", value: "17.3M" },
      { name: "Burna Boy", value: "14.3M" },
      { name: "Tems", value: "10.6M" },
    ],
    note: "Burna Boy does not lead this board, and it is here for that reason. It counts one day's streams across an artist's entire catalogue, which peaks hardest the day an album lands — so it rewards the size of a release week rather than the length of a run. His best day is 14.3 million, fourth behind Wizkid, Asake and Davido.",
    source:
      "Highest single-day Spotify streams across an artist's full catalogue, from chart-tracking accounts, as of 22 August 2026. Nigerian artists only — a national list, not the pan-African comparison the rest of this page makes. Top five shown; the ranking continues CKay (8.2M), Ayra Starr (7.8M), Omah Lay (7.7M), ODUMODUBLVCK (7.5M) and Olamide (7.4M).",
  },
  {
    id: "youtube-music-audience-peak",
    title: "Highest monthly audience peak on YouTube",
    meta: "YouTube · African artists · all-time peak",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: BURNA_YT_AUDIENCE },
      { name: "Tyla", sub: "🇿🇦 South Africa", value: "654M" },
      { name: "Moliy", sub: "🇬🇭 Ghana", value: "602M" },
      { name: "Rema", sub: "🇳🇬 Nigeria", value: "471M" },
    ],
    note: `Burna Boy's monthly-audience peak on YouTube has climbed to ${BURNA_YT_AUDIENCE_WORDS} — the first African artist ever past 700 million, and now past 900 million too, by some distance the highest of any African artist — the next-highest African peak is Tyla's 654 million. Worldwide it is the sixth-biggest audience ever recorded, above Lady Gaga (862M) and Michael Jackson (741M).`,
    source:
      "Peak monthly audience on YouTube (YouTube for Artists), from chart-tracking accounts. As of August 2026 — figures update as they climb.",
  },
  {
    id: "youtube-audience-world",
    // Six deep: the top five plus Burna Boy, who closes the list on merit —
    // he passed Lady Gaga (862M) on 8 Aug 2026, so the Gaga and Michael
    // Jackson scaffolding rows are gone. At 929M the next target is Rosé
    // (959M). Shakira set a new all-time peak of 1.04B on 11 Aug 2026, taking
    // the record from Bruno Mars — hence her row moving above his.
    title: "Biggest monthly audience on YouTube — worldwide",
    meta: "YouTube · all artists · all-time peak",
    layout: "list",
    entries: [
      { name: "Alan Walker", sub: "🇳🇴 Norway", value: "1.12B" },
      { name: "Alok", sub: "🇧🇷 Brazil", value: "1.11B" },
      { name: "Shakira", sub: "🇨🇴 Colombia", value: "1.04B" },
      { name: "Bruno Mars", sub: "🇺🇸 United States", value: "1.02B" },
      { name: "Rosé", sub: "🇰🇷 South Korea", value: "959M" },
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: BURNA_YT_AUDIENCE },
    ],
    note: `Not an African leaderboard — a world one. At ${BURNA_YT_AUDIENCE_WORDS}, Burna Boy has the sixth-biggest YouTube monthly audience ever recorded, and the only one belonging to an African artist — now ahead of Lady Gaga (862M) and Michael Jackson (741M), heights no African act had reached before.`,
    source:
      "Highest monthly audience peaks on YouTube for any artist worldwide (YouTube for Artists), from chart-tracking accounts. As of August 2026 — live figures, so the order can change as they climb.",
  },
  {
    id: "fastest-to-a-billion-youtube",
    title: "Fastest music video to a billion YouTube views",
    meta: "YouTube · all artists · days from premiere to 1,000,000,000 views",
    layout: "list",
    // The top five, ties included — six rows. Lower is better, so this is the
    // one list on the page whose values rise down the board; the ordering test
    // reads "N days" as a placing. Read from Chart Data's and Pop Core's
    // published lists on 11 Sep 2026, which agree row for row.
    entries: [
      { name: "Adele", sub: "🇬🇧 “Hello”", value: "88 days" },
      { name: "Ed Sheeran", sub: "🇬🇧 “Shape of You”", value: "97 days" },
      { name: "Luis Fonsi", sub: "🇵🇷 “Despacito” (feat. Daddy Yankee)", value: "97 days", tie: true },
      { name: "J Balvin", sub: "🇨🇴 “Mi Gente” (with Willy William)", value: "103 days" },
      { name: "ROSÉ", sub: "🇰🇷 “APT.” (with Bruno Mars)", value: "105 days" },
      { name: "Burna Boy", sub: "🇳🇬 “Dai Dai” (with Shakira)", value: "105 days", tie: true },
    ],
    note: "A world board, not an African one: the “Dai Dai” video reached a billion views in 105 days — joint fifth-fastest music video in YouTube history, level with “APT.”, the first 2026 video to a billion, and the only African record on the list.",
    source:
      "Days from each video's premiere to its billionth view, as published by Chart Data and Pop Core, read 11 September 2026. A tie shares its rank.",
  },
  {
    id: "apple-music-global-no1",
    title: "African No. 1s on the Apple Music Global chart",
    meta: "Apple Music Global Top 100 · African No. 1 songs",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 “Dai Dai” (with Shakira)", value: "No. 1" },
      // Level with Burna Boy, so it shares rank 1 (the page's rule: a tie
      // shares its rank). It read "2" until 5 Oct 2026 (records-18).
      { name: "Tems", sub: "🇳🇬 “Wait for U” (with Future & Drake)", value: "No. 1", tie: true },
    ],
    note: "Only two African artists have ever sent a song to No. 1 on Apple Music's Global Top 100 — Burna Boy with “Dai Dai” (the first and only male African artist to do it) and Tems with “Wait for U”. Burna Boy is also the only African artist with two songs peaking inside the global top two: “Dai Dai” at No. 1 and “WGFT” (with Gunna) at No. 2.",
    source: "Songs by African artists to reach No. 1 on the Apple Music Global Top 100. As of July 2026.",
  },
  {
    id: "best-selling-african-artist-eas",
    title: "Best-selling African artist of all time",
    meta: "Equivalent album sales · global · ChartMasters",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "15.34M" },
      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: "15.00M" },
      { name: "Asake", sub: "🇳🇬 Nigeria", value: "11.45M" },
    ],
    note: "Burna Boy is the best-selling African artist of all time, and his lead over Wizkid, now past 15 million equivalent album sales himself, has stretched from about 30,000 to some 339,000 across the “Dai Dai” run. Asake is the third African artist on ChartMasters' 696-name board. Read the scope with the figure: these three are the only artists from any African country on it (the board also tags Colombia's Beéle, 11.02M, as Afrobeats).",
    /* Re-reading this board (moved out of the public source line on 1 Oct 2026,
       live debug: these were instructions to whoever re-reads the data, and
       the dropdown printed them to visitors).
       - Read the rank from the g# column, not the # column. The leading # is a
         client-side row counter that resets to 1 under any search or filter,
         so a re-read that searches for a name and copies the first number will
         publish a rank of 1. g# is the real position; sorting all rows by
         Total EAS reproduces it exactly.
       - The board no longer prints a country column. Read the country with its
         own search: on 30 Sep "country:nigeria" returned exactly Burna Boy,
         WizKid and Asake, and every other African country returned no rows.
       - CSPC check, against a negative control rather than assumed: for all
         three, the studio-album, other-LP, physical-single and digital-single
         columns read 0 and Total EAS equals the streaming figure to the digit.
         Neighbours who DO have studies render non-zero in the same read (30
         Sep: Carly Rae Jepsen, rank 539, 1,777,000 studio and 31,940,000
         digital singles). Board-wide on 30 Sep, 236 of the 696 had all-zero
         sales columns and 460 a completed study; these three are in the 236.
         ChartMasters makes no claim about African artists on that page.
       - Previous reading, 24 Sep: 15,280,000 (534) to 14,956,000 (538), so by
         30 Sep Burna gained 61,000 and Wizkid 46,000, and the board grew from
         695 names to 696.
       - Nationality decides who counts (Paul, 17 Sep 2026): an artist's
         nationality and where the career sits, not parentage or birthplace.
         Akon (rank 501, 16,736,000 EAS on 30 Sep, ahead of Burna Boy) is
         tagged United States by ChartMasters and is an American artist, as
         GIMS and Aya Nakamura are French. DJ Khaled and Dido are on the board
         and are not African artists either. The two have traded this lead
         before, so re-read it rather than assume. */
    source: `Total equivalent album sales (EAS) on ChartMasters' daily Best-Selling Artists of All-Time board, all 696 rows read 30 September 2026: Burna Boy 15,341,000 (rank 532), Wizkid 15,002,000 (rank 538), Asake 11,445,000 (rank 638). Burna Boy's and Wizkid's streams are both stamped ${dayMonth(EAS_STREAMS_COUNTED_TO)}, a same-date pair; Asake's are still stamped 18 September, so his figure trails his real total by some ten days of streams. ChartMasters has not completed a CSPC sales study for any of the three, so all three totals are streaming-only estimates that would understate a full sales count. Artists are counted by nationality: Akon (rank 501, 16,736,000) is on the board, but he is an American artist, as ChartMasters also lists him, so he is not in this comparison.`
  },
  {
    id: "spotify-top-artists-peak",
    title: "Highest peak on Spotify's Global Weekly Top Artists chart",
    meta: "Spotify Weekly Top Artists · Nigerian artists · all-time peak",
    layout: "list",
    entries: [
      { name: "CKay", sub: "🇳🇬 Nigeria", value: "No. 56" },
      { name: "Asake", sub: "🇳🇬 Nigeria", value: "No. 63" },
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "No. 64" },
      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: "No. 96" },
      { name: "Tems", sub: "🇳🇬 Nigeria", value: "No. 105" },
    ],
    note: "Burna Boy hit a new career peak of No. 64 on Spotify's Global Weekly Top Artists chart in the week of 17–23 July 2026, on the back of the “Dai Dai” run. Note the scope: this is a NIGERIAN ranking, not an African one — Tyla is absent from it, and her peak monthly-listeners figure (46.58M) is higher than Tems' (45.58M), who places No. 105 here, so a full African list would very likely include her.",
    source:
      "Best all-time peak on Spotify's Global Weekly Top Artists chart, per chart-tracking accounts. Nigerian artists only — the underlying list does not cover the rest of Africa. As of July 2026.",
  },
];

/**
 * The 2026 streaming row quotes the spread between its top three, and the stats
 * bot rewrites those three values most days — so a typed spread is wrong within
 * a day of being written. It said "about 53 million" against an actual 38.
 *
 * Resolved here rather than in the literal above because the bot finds each row
 * by the `/* live:… *\/` marker that must sit immediately before it; hoisting
 * the entries into consts to make them readable would move those markers and
 * silently redirect the daily write into the 2025 historical row. The note
 * carries a token instead, and nothing about the array shape changes.
 */
/** "2026-09-22" → "22 September 2026". Exported because the phone's year
 *  board prints the same stamp beside the running year's figures, and a
 *  second copy of this would be a second way to write a date. */
export const asOfLabel = (iso: string): string => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][m - 1]} ${y}`;
};

/** "1.886B" → 1,886,000,000 and "998M" → 998,000,000; NaN for anything else.
 *  The bot writes these rows in billions today, but a row that slips under a
 *  billion is written in millions, and a bare parseFloat would read "998M" as
 *  998 billion. */
export const streamsOf = (value?: string): number => {
  const m = /^(\d+(?:\.\d+)?)([BM])$/.exec(value ?? "");
  return m ? parseFloat(m[1]) * (m[2] === "B" ? 1e9 : 1e6) : NaN;
};

const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * The 2026 row's opening sentence, counted from the row's own values.
 *
 * Both counts are thresholds on the five figures the bot writes each day, so
 * both are derived: the note said "three are past a billion and a half" and was
 * still saying it with four rows past 1.5B. The billion count can only speak for
 * the board's own five — the top five, so if the fifth is past a billion, "five"
 * is what the board can vouch for.
 *
 * `order` is the "with Burna Boy ahead of …" phrase and `spread` the top three's
 * gap in millions; both are computed by the loop below.
 */
export function billionsSentence(values: number[], order: string, spread: number): string {
  const pastBillion = values.filter((v) => v >= 1e9).length;
  const pastHalf = values.filter((v) => v >= 1.5e9).length;
  const lead =
    pastBillion === 0
      ? "No African artist has passed a billion Spotify streams in 2026 yet"
      : pastBillion === 1
        ? "One African artist has passed a billion Spotify streams in 2026 so far"
        : `${capitalise(cardinalWord(pastBillion))} African artists have passed a billion Spotify streams in 2026 so far`;
  // Exactly the three the order names: one clause carries both.
  if (pastHalf === 3) {
    return `${lead} — and three are past a billion and a half, ${order}, the three of them separated by about ${spread} million.`;
  }
  const half =
    pastHalf === 0
      ? ""
      : pastHalf === 1
        ? " — and one is past a billion and a half"
        : pastHalf === values.length
          ? ` — and all ${cardinalWord(pastHalf)} are past a billion and a half`
          : ` — and ${cardinalWord(pastHalf)} are past a billion and a half`;
  return `${lead}${half}. The top three are separated by about ${spread} million, ${order}.`;
}

for (const box of statBoxes) {
  for (const row of box.rows ?? []) {
    if (!row.note || !/\{\{(billions|asOf)2026\}\}/.test(row.note)) continue;
    // The date the bot last wrote beside the values; the note never carries a
    // typed one, because a typed date is stale the morning after it is typed.
    row.note = row.note.replace("{{asOf2026}}", row.asOf ? asOfLabel(row.asOf) : "the latest reading");
    const m = row.entries.map((e) => streamsOf(e.value)).filter((n) => !Number.isNaN(n));
    const spread = Math.round((Math.max(...m.slice(0, 3)) - Math.min(...m.slice(0, 3))) / 1e6);
    // The order sentence follows the rows, which the bot keeps sorted by value
    // and marks joint where a gap is inside the method's resolution — a joint
    // row is never called a lead, in either direction.
    const top = row.entries.slice(0, 3);
    const [first, second, third] = top.map((e) => e.name);
    const t1 = Boolean(top[1]?.tie);
    const t2 = Boolean(top[2]?.tie);
    const order = t1 && t2
      ? `with ${first}, ${second} and ${third} joint first`
      : t1
        ? `with ${first} and ${second} joint first and ${third} third`
        : t2
          ? `with ${first} first and ${second} and ${third} joint second`
          : third === "Burna Boy"
            ? `with Burna Boy third behind ${first} and ${second}`
            : second === "Burna Boy"
              ? `with Burna Boy second behind ${first} and ahead of ${third}`
              : `with Burna Boy ahead of ${second} and ${third}`;
    row.note = row.note.replace("{{billions2026}}", billionsSentence(m, order, spread));
  }
}
