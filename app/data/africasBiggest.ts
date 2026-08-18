import { spotifyFollowersDisplay } from "./spotify";

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
const BURNA_PEAK_LISTENERS = "60.13M";

/** His YouTube Music monthly audience, at its peak. Exported because four
 *  files quoted this figure by hand — it sat at 840M in eight places while
 *  YouTube Music itself showed 844M. One home, imported everywhere. */
export const BURNA_YT_AUDIENCE = "929M";
export const BURNA_YT_AUDIENCE_WORDS = "929 million";

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
}

export interface RankRow {
  label?: string; // usually a year ("year" layout)
  entries: RankEntry[];
  inProgress?: boolean;
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

export const statBoxes: LeaderboardBox[] = [
  {
    id: "billboard-global-200-peak",
    title: "Highest Billboard Global 200 peak",
    meta: "Billboard Global 200 · African artists · best peak",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 “Dai Dai” (with Shakira)", value: "No. 1" },
      { name: "CKay", sub: "🇳🇬 “Love Nwantiti”", value: "No. 2" },
      { name: "Rema", sub: "🇳🇬 “Calm Down” (with Selena Gomez)", value: "No. 3" },
      { name: "Tyla", sub: "🇿🇦 “Water”", value: "No. 9" },
      { name: "Libianca", sub: "🇨🇲 “People”", value: "No. 20" },
    ],
    note: "“Dai Dai” made Burna Boy the first African artist ever to top Billboard's US-inclusive Global 200 — leading the five biggest African crossover hits on the chart. (Wizkid & Tems' “Essence” sits just outside, at No. 28.)",
    source: "Best peak on Billboard's Global 200 chart (US-inclusive), per Billboard and each song's Wikipedia-cited chart history. Several of these peaked even higher on the separate Global 200 Excl. US chart. Verified July 2026.",
  },
  {
    id: "billboard-hot-100-peak",
    title: "Highest Billboard Hot 100 peak",
    meta: "Billboard Hot 100 · African artists · best peak",
    layout: "list",
    entries: [
      { name: "Wizkid", sub: "🇳🇬 “One Dance” (with Drake)", value: "No. 1" },
      { name: "Tems", sub: "🇳🇬 “Wait for U” (Future & Drake)", value: "No. 1" },
      { name: "Rema", sub: "🇳🇬 “Calm Down” (with Selena Gomez)", value: "No. 3" },
      { name: "Tyla", sub: "🇿🇦 “Water”", value: "No. 7" },
      { name: "Burna Boy", sub: "🇳🇬 “WGFT” (with Gunna)", value: "No. 16" },
    ],
    note: "The highest any African artist has charted on the Billboard Hot 100, counting lead and featured credits — Wizkid and Tems both hit No. 1 via global smashes with Drake and Future. Burna Boy's best is “WGFT” at No. 16 (his real Hot 100 record is entries, where he leads all African acts with nine).",
    source: "Best Billboard Hot 100 peak (lead or featured credit), per Billboard and Wikipedia-cited chart histories. As of July 2026.",
  },
  {
    id: "most-streamed-african-artist",
    title: "Most-streamed African artist",
    meta: "Total Spotify streams · global · per year",
    layout: "year",
    rows: [
      {
        label: "2026",
        entries: [
          { name: "Tems", value: "1.654B" },
          { name: "Wizkid", value: "1.622B" },
          { name: "Burna Boy", value: "1.573B" },
          { name: "Asake", value: "1.274B" },
          { name: "Tyla", value: "1.10B" },
        ],
        inProgress: true,
        note: "Five African artists have passed a billion Spotify streams in 2026 so far — and three are past a billion and a half, with Burna Boy third behind Tems and Wizkid. The top three totals now update daily from each day's streams.",
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
      "Ranked by total Spotify streams each year (2022–2026), sourced from streaming trackers. Totals are shown for 2025, and for 2026 auto-accumulated daily for the top three (each day's streams added to a running total, checkpointed against a chart tracker's cumulative count) — not an official Spotify report and not projected forward from a daily average. 2026 is still running, so both the totals and the order will change.",
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
    note: `Burna Boy is the first African artist ever to reach 50 million Spotify monthly listeners — and now the first past ${Math.floor(parseFloat(BURNA_PEAK_LISTENERS))} million, a milestone no African act had crossed before, with his peak still climbing.`,
    source:
      "Peak Spotify monthly listeners, as of August 2026. Burna Boy, Tyla, Tems and Rema are kworb's recorded peaks; CKay's is his Spotify peak from the “Love Nwantiti” run, which predates kworb's coverage of him. Burna Boy's figure is his current peak and still rising, so it updates as Spotify's numbers change.",
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
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "9" },
      { name: "Tems", sub: "🇳🇬 Nigeria", value: "8" },
      { name: "Seether", sub: "🇿🇦 South Africa", value: "7" },
      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: "5" },
      { name: "Tyla & Hugh Masekela", sub: "🇿🇦 South Africa · tied", value: "4" },
    ],
    note: "Burna Boy has the most Billboard Hot 100 entries of any African artist in history — 9, extended by “Dai Dai” with Shakira. Tems is next with 8 — the most ever by an African woman. Hugh Masekela and Tyla are tied on 4; Masekela was the first African act to top the chart (“Grazing in the Grass,” No. 1, 1968).",
    source:
      "Career Billboard Hot 100 entries by African artists, from Billboard chart histories. Burna Boy (9), Tems (8) and Tyla (4) confirmed via Billboard; Seether (7), Wizkid (5) and Hugh Masekela (4) cross-checked against Billboard and chart-stat trackers. As of July 2026.",
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
      { name: "Rema", sub: "🇳🇬 Nigeria · tied", value: "6" },
      { name: "Wizkid, CKay & Omah Lay", sub: "🇳🇬 Nigeria · tied", value: "3" },
    ],
    note: "Burna Boy has the most songs past 200 million Spotify streams of any African artist — 15, well clear of the field. He owns the 300M tier too: “Dai Dai” crossed it in August 2026 as his 8th song past 300 million, and no other African act has more than Tems's five. Counts include lead and featured credits, and separate song versions are counted individually (as trackers list them).",
    source:
      "Songs with 200M+ Spotify streams (all credits), counted from kworb.net stream totals. As of August 2026 — figures shift as songs cross the threshold.",
  },
  {
    id: "most-followed-spotify",
    title: "Most-followed African artist on Spotify",
    meta: "Spotify followers · African artists · current",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: spotifyFollowersDisplay },
      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: "12.36M" },
      { name: "Davido", sub: "🇳🇬 Nigeria", value: "11.62M" },
      { name: "Asake", sub: "🇳🇬 Nigeria", value: "10.14M" },
      { name: "Tyla", sub: "🇿🇦 South Africa", value: "5.28M" },
    ],
    note: "Burna Boy is the most-followed African artist on Spotify — just under 5 million clear of Wizkid in second, with Asake now past ten million too.",
    source:
      "Spotify follower counts, read directly from each artist's own Spotify page rather than a tracker. Every figure re-read on 10 August 2026; they move continuously, so treat them as that day's reading.",
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
    note: "Burna Boy is the first and only African artist to reach No. 1 on Spotify's Global Daily Top Songs chart — no other African artist has ever cracked the top 4.",
    source:
      "Peak positions on Spotify's Daily Top Songs Global chart, each artist's best-charting song across all credits, from chart-tracking accounts. As of July 2026.",
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
    id: "apple-music-global-no1",
    title: "African No. 1s on the Apple Music Global chart",
    meta: "Apple Music Global Top 100 · African No. 1 songs",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 “Dai Dai” (with Shakira)", value: "No. 1" },
      { name: "Tems", sub: "🇳🇬 “Wait for U” (with Future & Drake)", value: "No. 1" },
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
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "14.75M" },
      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: "14.59M" },
    ],
    note: "Burna Boy is the No. 1 best-selling African artist of all time by equivalent album sales — and his lead over Wizkid has stretched from about 30,000 to some 164,000 through the “Dai Dai” run. Counts albums, physical and digital singles and streaming album-track equivalents.",
    source: "Total equivalent album sales (EAS), per ChartMasters (CSPC methodology), read from their own Afrobeats board on 10 August 2026 (their figures dated 9 August): Burna Boy 14,750,000 to Wizkid's 14,586,000. The two have traded this lead before, so it is worth re-reading rather than assuming.",
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
