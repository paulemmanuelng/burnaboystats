import Link from "next/link";
import styles from "./dai-dai.module.css";
import DaiDaiStory from "../components/DaiDaiStory";
import DaiDaiConquest, { type ConquestCountry } from "../components/DaiDaiConquest";
import DaiDaiReplay from "../components/DaiDaiReplay";
import DaiDaiReplayMultiples from "../components/DaiDaiReplayMultiples";
import { buildReplayData } from "../components/daiDaiReplayData";
import { EN_REPLAY_LABELS } from "../components/daiDaiReplayLabels";
import KeepExploring from "../components/KeepExploring";
import { Leads, NationalTable, RuledLists, type LeadFigure, type NumbersLabels, type RecordRow } from "../components/DaiDaiNumbers";
import { RecordBand, SectionHead, Lineup, nationalRow, daiDaiCountries, countryName, topPlaque, plaqueCountries, byVisibleName, plaqueX, thousands } from "../components/DaiDaiRecord";
import { EN_FIGURE_LABELS } from "../components/DaiDaiFigures";
import FaqList from "../components/FaqList";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../lib/seo";
import { lastUpdated } from "../lib/api";
import { cardinalWord } from "../lib/plural";
import { daiDaiNumberOnes, daiDaiChartEntryCount, CHART_COUNTRIES, weeksAtPeak, weeksOnChart } from "../data/charts";
import { liveCharts } from "../data/liveCharts";
import { daiDaiCertCount } from "../data/certifications";
import { DAI_DAI_COVER, DAI_DAI_RELEASE_DATE, DAI_DAI_HALFTIME_DATE, DAI_DAI_VIDEO_ID, DAI_DAI_SPOTIFY_BODY_READ, DAI_DAI_VIDEO_VIEWS, DAI_DAI_1B_DAYS, DAI_DAI_1B_RANK_EN, DAI_DAI_SPOTIFY_STREAMS, DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG, DAI_DAI_SPOTIFY_NO1_READ_ON_LONG, DAI_DAI_SPOTIFY_NO1_FIRST_LONG, DAI_DAI_SPOTIFY_NO1_LAST_LONG, DAI_DAI_SPOTIFY_TOP10_DAYS, DAI_DAI_SPOTIFY_DAYS_OFF, DAI_DAI_SPOTIFY_NO1_DAYS, DAI_DAI_ITUNES_NO1_COUNTRIES, DAI_DAI_STORY_PUBLISHED, DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS, DAI_DAI_APPLE_EUROPE_NO1_DAYS, DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS, DAI_DAI_UWC_NO1_WEEKS, DAI_DAI_DEEZER_WORLDWIDE_PEAK, DAI_DAI_SPOTIFY_MUSIC_VIDEO_NO1_DAYS, BURNA_GLOBAL_DIGITAL_ARTIST_POSITION, BURNA_GLOBAL_DIGITAL_ARTIST_POINTS, daiDaiSpotifyDaysOnChart, daiDaiSpotifyStraightDays, daiDaiYouTubeDaysAtNo1 } from "../data/daiDai";
import { spotifyImage, spotifySrcSet } from "../lib/spotifyImage";
import { BURNA_PORTRAIT, SHAKIRA_PORTRAIT } from "../lib/artistImages";
import { daiDaiOgId } from "./ogId";
import LangSwitch from "./LangSwitch";
import { BLANK_PIXEL } from "../lib/blankPixel";
import { LIVE_CADENCE } from "../lib/liveChartMeta";

// Every country the song charted in, for the takeover grid — flag, name and
// peak, the name in this edition's language. A flag grid needs no map shape, so
// nothing is dropped — which is what the old SVG map did to the three No. 1
// countries it had no outline for. Within a peak, the cells run in the order
// of the names this edition prints (byVisibleName), not of the ISO codes.
const conquestCountries: ConquestCountry[] = byVisibleName(
  daiDaiCountries.map((e) => ({
    code: e.c,
    flag: CHART_COUNTRIES[e.c]?.flag ?? "🏳",
    name: countryName(e.c, "en"),
    peak: e.peak,
  })),
  "en",
);
const conquestTotal = conquestCountries.length;
const conquestNo1 = conquestCountries.filter((c) => c.peak === 1).length;
// Longevity is read from the chart entries, not typed here. These used to be
// hand-written numbers in the sentences below, which is how the same figures
// went stale elsewhere on the site — see the weeksAtPeak comment in charts.ts.
// The national-charts table reads every peak and week count itself
// (nationalRow); these are the ones the rows' own sentences still quote.
const weeksUK = weeksAtPeak("Dai Dai", "UK");
const runUK = weeksOnChart("Dai Dai", "UK");
const runAT = weeksOnChart("Dai Dai", "AT");
const runSE = weeksOnChart("Dai Dai", "SE");
const runNL = weeksOnChart("Dai Dai", "NL");
// The Spotify entry position, as Spotify's own chart row prints it.
const debutAt = DAI_DAI_SPOTIFY_BODY_READ.debutPosition;
// The halftime date, as the lineup's line and the sixth lead figure print it.
const halftime = (opts: Intl.DateTimeFormatOptions) =>
  new Date(`${DAI_DAI_HALFTIME_DATE}T12:00:00Z`).toLocaleDateString("en-GB", { ...opts, timeZone: "UTC" });
const halftimeShort = halftime({ day: "numeric", month: "short" });
const halftimeLong = halftime({ day: "numeric", month: "long", year: "numeric" });
// The UK peak, for the FAQ answer that is also FAQPage structured data.
const peakUK = daiDaiCountries.find((e) => e.c === "UK")?.peak;
// The Global Digital Artist row's points, grouped as this edition writes them.
const gdaPoints = thousands(BURNA_GLOBAL_DIGITAL_ARTIST_POINTS, ",");
// The plaques, for the fifth lead figure's caption: how many countries, and
// the top plaque and its country in words, both read from the plaque wall.
const certCountries = plaqueCountries();
const topPlaqueWords = topPlaque(EN_FIGURE_LABELS.tiers, "en", " in ");

// The replay under the grid: Dai Dai's official chart run, week by week, from
// app/data/daiDaiRuns.ts. Its end frame is this grid.
const replayData = buildReplayData("en");

const conquestIntro = `“Dai Dai” charted in ${conquestTotal} countries and reached No. 1 in ${conquestNo1} of them — each cell shows its peak.`;


// The per-platform No. 1 counts, derived from the same hourly live-charts
// snapshot as /live-charts — this line used to be hand-written and drifted
// (Apple 25 vs a real 8) the day the daily charts moved.
// The SONG: a title alone can name an album too (releaseKey, liveChartMeta.ts).
const ddLive = liveCharts.find((r) => r.kind === "song" && r.title === "Dai Dai");
const liveOnes = (platform: string) =>
  ddLive?.platforms
    .find((p) => p.platform === platform)
    ?.entries.filter((e) => e.position === 1 && !/world/i.test(e.name)).length ?? 0;
const platformOnes = ["YouTube", "Apple Music", "Deezer", "Spotify", "iTunes", "Shazam"]
  .map((p) => [p, liveOnes(p)] as const)
  .filter(([, n]) => n > 0);
// Not "daily": YouTube's country charts, which supply most of these No. 1s,
// are weekly (cadenceOf in lib/liveChartMeta.ts).
const liveOnesLabel = `right now on the country charts of ${platformOnes
  .map(([p, n], i) => (i === 0 ? `${p} (${n} countries)` : `${p} (${n})`))
  .join(", ")
  .replace(/, ([^,]*)$/, " and $1")} — ${LIVE_CADENCE} from the live board`;
// The same counts as a ruled-list row: "No. 1 right now: YouTube countries ·
// Spotify", "21 · 1". Empty when nothing is No. 1, and the row then drops out.
const liveOnesKey = `No. 1 right now: ${platformOnes.map(([p], i) => (i === 0 ? `${p} countries` : p)).join(" · ")}`;
const liveOnesValue = platformOnes.map(([, n]) => n).join(" · ");


// The story's publication date: the Article node's datePublished and the
// og:type "article" date both read it, from its one home in daiDai.ts, which
// the Spanish edition reads too.
const PUBLISHED = DAI_DAI_STORY_PUBLISHED;

export const metadata = pageMetadata({
  title: "Dai Dai — Shakira & Burna Boy's 2026 World Cup Anthem",
  description: `Shakira & Burna Boy's “Dai Dai” — the World Cup anthem: ${DAI_DAI_SPOTIFY_NO1_DAYS} days as Earth's most-streamed song, No. 1 in ${daiDaiNumberOnes} countries, and the Final halftime show.`,
  path: "/dai-dai",
  shareTitle: "The Dai Dai Story — Shakira & Burna Boy",
  shareDescription: "Shakira & Burna Boy's World Cup anthem — No. 1 worldwide, and performed at the Final halftime show.",
  languages: { en: "/dai-dai", es: "/dai-dai/es", "x-default": "/dai-dai" },
  article: { publishedTime: PUBLISHED },
});

export default function DaiDaiPage() {
  // No `image` on these nodes on purpose. The bare /dai-dai/opengraph-image
  // path 404s — the route uses generateImageMetadata, so the real URL carries
  // an id segment hashed from the card's own stats — and a recommended field
  // pointing at a dead URL is worse than its absence. og:image is emitted
  // correctly by the metadata export and is what consumers actually read.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dai Dai — Shakira & Burna Boy's 2026 FIFA World Cup Anthem",
    description:
      "The story of “Dai Dai”, the 2026 FIFA World Cup anthem by Shakira and Burna Boy — its record-breaking chart, streaming and certification run, and its live performance at the World Cup Final halftime show.",
    datePublished: PUBLISHED,
    dateModified: asDateTime(lastUpdated),
    inLanguage: "en",
    author: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: {
      "@type": "MusicRecording",
      name: "Dai Dai",
      byArtist: [
        { "@type": "Person", name: "Shakira" },
        { "@type": "MusicGroup", name: "Burna Boy" },
      ],
      datePublished: DAI_DAI_RELEASE_DATE.slice(0, 7),
      genre: ["Afrobeats", "Latin pop"],
      inLanguage: "en",
    },
    url: `${CANONICAL_ORIGIN}/dai-dai`,
  };

  // The halftime performance as a MusicEvent — helps the page surface for the
  // huge global "2026 World Cup halftime show / lineup" search demand.
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: "2026 FIFA World Cup Final Halftime Show",
    startDate: DAI_DAI_HALFTIME_DATE,
    eventStatus: "https://schema.org/EventScheduled",
    // Offline: the location is the stadium alone. "Mixed" also asks for a
    // VirtualLocation, and the node names no sourced broadcast URL to give one.
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "MetLife Stadium",
      address: {
        "@type": "PostalAddress",
        addressLocality: "East Rutherford",
        addressRegion: "NJ",
        addressCountry: "US",
      },
    },
    performer: [
      { "@type": "Person", name: "Shakira" },
      { "@type": "MusicGroup", name: "Burna Boy" },
      { "@type": "Person", name: "Madonna" },
      { "@type": "MusicGroup", name: "BTS" },
      { "@type": "Person", name: "Justin Bieber" },
      { "@type": "MusicGroup", name: "Coldplay" },
    ],
    organizer: {
      "@type": "Organization",
      name: "Global Citizen",
      url: "https://www.globalcitizen.org",
    },
    about: { "@type": "MusicRecording", name: "Dai Dai" },
    url: `${CANONICAL_ORIGIN}/dai-dai`,
    // Search Console asked for `image` and it was omitted because the bare
    // /dai-dai/opengraph-image path 404s — generateImageMetadata puts a hashed
    // id in the path, so the field would have pointed at a dead URL. That is
    // fixed rather than worked around: the id is now shared (./ogId), so this
    // cites the same 200 the og:image tag does, and it re-versions with the
    // card instead of going stale.
    image: `${CANONICAL_ORIGIN}/dai-dai/opengraph-image/${daiDaiOgId}`,
    // Search Console flagged five non-critical Event fields as missing
    // (image, description, endDate, organizer.url, offers). None blocked the
    // rich result, but each one it has is a feature the listing can show.
    description:
      "The first-ever halftime show at a FIFA World Cup Final — Shakira and Burna Boy performed “Dai Dai”, the official 2026 tournament anthem, alongside Madonna, BTS, Justin Bieber and Coldplay.",
    // A one-evening show: schema.org wants an endDate even when it equals the
    // start date, or the event reads as open-ended.
    endDate: DAI_DAI_HALFTIME_DATE,
    // The show itself was not ticketed separately from the match, and it
    // streamed free — which is a real answer to "offers", not a missing one.
    //
    // `availability` was left out twice before, on the reasoning that every
    // schema.org value misdescribes a free broadcast that has already happened:
    // SoldOut and OutOfStock both imply stock that ran out, and a bare InStock
    // reads as "you can still get in". That reasoning was half right. What it
    // missed is that availability is a property OF THIS OFFER, and this offer
    // is explicitly bounded — validFrom 15 May, validThrough 19 July 2026. Read
    // with its own dates, InStock says "during that window this was available
    // to everyone at no charge", which is exactly what happened. The dates are
    // what carry "it is over"; that is what dates are for.
    //
    // Google's Event documentation accepts InStock, SoldOut and PreOrder, and
    // of the three only InStock is true of a free stream nobody was turned away
    // from. So the field is present and honest rather than absent and safe.
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
      url: `${CANONICAL_ORIGIN}/dai-dai`,
      validFrom: DAI_DAI_RELEASE_DATE,
      validThrough: DAI_DAI_HALFTIME_DATE,
    },
  };

  // "Dai Dai by the numbers" — the song's OWN figures (not Burna Boy's
  // artist-wide totals), as the record's redesign draws them: six lead figures,
  // each captioned with its chart; the national charts as a table; the streaks,
  // world rankings and the video as ruled lists. Every row keeps its dated
  // sentence, so no figure, chart date or reading date the old cards carried
  // went with them. Same crawlable content as ever, and no fold.
  const leads: LeadFigure[] = [
    { v: `${daiDaiChartEntryCount}`, cap: `Official chart entries — ${conquestTotal} national charts plus both Billboard globals` },
    { v: `${daiDaiNumberOnes}`, cap: "Countries at No. 1 on their own official chart" },
    // The Global 200's "first for an African artist" note is the old card's,
    // word for word (restored 26 Sep 2026; never reworded, README §6).
    { v: "No. 1", cap: "On both Billboard globals: the Global 200 (a first for an African artist, and Shakira's 2nd) and the Global 200 Excl. US" },
    { v: DAI_DAI_SPOTIFY_STREAMS, cap: "Spotify streams — Burna Boy's 8th song past 300 million, the most of any African act", live: true },
    { v: `${daiDaiCertCount}`, cap: `Certifications, in ${certCountries} countries — ${topPlaqueWords}` },
    { v: halftimeShort, cap: "Performed at the first World Cup Final halftime show" },
  ];

  // The national charts, one row per chart. Each row names its chart and the
  // page's own sentence for it; the country, chart name, peak and week counts
  // are read from charts.ts (or, for the three charts it does not hold, from
  // DAI_DAI_OTHER_CHARTS) by nationalRow — none of them is typed here.
  const national: { c: string; l: string; other?: "MENA" | "BIG_TOP_40" | "RHYTHMIC" }[] = [
    { c: "DE", l: "at No. 1 on Germany's official singles chart — and named the country's official Sommerhit 2026 by GfK Entertainment, which compiles the charts, after nearly 60 million German streams" },
    { c: "CH", l: "at No. 1 on Switzerland's official chart — the longest run at No. 1 by any song there so far this year" },
    { c: "FR", l: "at No. 1 on France's Official Singles Chart (SNEP)" },
    { c: "AT", l: `at No. 1 on Austria's Ö3 Top 40 — an unbroken run since late June, and ${runAT} weeks on the chart` },
    { c: "BE", l: "at No. 1 on the Ultratop 50 in Wallonia — nine straight, and No. 1 in Flanders too" },
    { c: "NL", l: `at No. 1 on the Dutch Single Top 100 — two in June, then five more from late July, in a ${runNL}-week run` },
    { c: "SE", l: `at No. 1 on Sweden's Sverigetopplistan, retaken in week 34 after a week at No. 2 — ${runSE} weeks on the list` },
    { c: "NO", l: "at No. 1 on Norway's VG-lista Topp 40 — four consecutive weeks, from week 31" },
    { c: "IN", l: "India's IMI International Top 20 Singles Chart — the first Burna Boy song to top a chart in India" },
    // The "still on top in the latest week" clause was dropped on 9 Sep 2026: it
    // had not been re-read since 4 Aug, and the feed entry of that date states
    // only that the song was "still leading the Official MENA Chart's latest
    // week" — it never names the week, so the claim could not be dated without
    // publishing a chart week nobody had read. The peak stands; the currency
    // claim does not.
    { c: "AE", l: "Official MENA Chart Top 20 — and Billboard's US World Digital Song Sales chart", other: "MENA" },
    { c: "UK", l: `UK Official Singles Chart — ${cardinalWord(weeksUK, "en")} weeks at that peak, 30 July to 27 August 2026, in a ${runUK}-week stay counted through the chart of 24 September (No. 31). The first FIFA World Cup song ever to reach the UK Top 10, and by far the highest-charting World Cup song in UK history, beating Shakira's own “Waka Waka” (No. 21)` },
    { c: "CA", l: "Billboard Canadian Hot 100 — a new peak and Burna Boy's first-ever top 10 in Canada, where his best song placing had been No. 14. It is also Shakira's first Canadian top 10 since “She Wolf” in 2009" },
    { c: "US", l: "Billboard Hot 100 (US) — a 42-to-17 jump on the chart dated 1 August, the highest-charting World Cup song in Hot 100 history. Luminate logged 8.6M US streams (+69%), 13.9M radio airplay audience (+11%) and 7,000 sold (+322%) in the 17–23 July tracking week" },
    { c: "UK", l: "at No. 1 on the UK's Big Top 40 (the charts of 9 to 30 August 2026) — the Capital and Heart networks' national countdown, with Burna Boy presented the No. 1 plaque", other: "BIG_TOP_40" },
    { c: "US", l: "at No. 1 on Billboard's Rhythmic Airplay chart (dated 5 and 12 September 2026) — Shakira's first-ever No. 1 on the format, twenty years after “Hips Don't Lie” peaked at No. 5 — and No. 2 on the chart dated 19 September; on that 19 September chart it is No. 26 on Pop Airplay, equalling the peak it first set on the chart dated 15 August", other: "RHYTHMIC" },
  ];
  const nationalRows = national.map((r) => nationalRow(r, "en"));

  // The ruled lists. `v` is the figure, `l` the page's own sentence (dated
  // where the figure was read off a chart), `k` the label a reader scans.
  const numberLists: { title: string; rows: RecordRow[]; video?: boolean }[] = [
    {
      title: "Streaming streaks",
      rows: [
        { v: `${DAI_DAI_SPOTIFY_NO1_DAYS} days`, l: `in total at No. 1 on Spotify's Global Daily Top Songs chart — a first for an African artist, and the most days at No. 1 by any song in 2026, five clear of Djo's “End of Beginning” (32) and six of Justin Bieber & Nicki Minaj's “Beauty And A Beat” (31). A closed total, the first of them on the chart dated ${DAI_DAI_SPOTIFY_NO1_FIRST_LONG} and the last on ${DAI_DAI_SPOTIFY_NO1_LAST_LONG}, confirmed day by day through the chart dated ${DAI_DAI_SPOTIFY_NO1_READ_ON_LONG} — with ${DAI_DAI_SPOTIFY_TOP10_DAYS} days inside the global Top 10 in all, counted through that same chart`, k: "Spotify global daily, No. 1" },
        { v: `${DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS} weeks`, l: "at No. 1 on Spotify's Global Weekly Top Songs chart — a run that closed on the chart dated 27 August — in a 16-week stay counted through the chart dated 10 September 2026, peaking at 40.28M streams in a single week", k: "Spotify global weekly, No. 1" },
        { v: `${daiDaiSpotifyStraightDays}`, l: `it entered Spotify's Global Daily Top Songs chart on 15 May 2026, its release day — it fell straight back off for ${cardinalWord(DAI_DAI_SPOTIFY_DAYS_OFF, "en")} days, returned on 22 May and has not left since: ${daiDaiSpotifyStraightDays} straight days on the chart and ${daiDaiSpotifyDaysOnChart} in all, counted through the chart dated ${DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG}, which prints both figures in its own columns (Spotify Charts)`, k: `Spotify global daily — entered at No. ${debutAt}, then straight days on the chart`, live: true },
        { v: `${DAI_DAI_APPLE_EUROPE_NO1_DAYS} days`, l: "at No. 1 on Apple Music's European songs chart — plus 11 days atop the worldwide Apple Music chart", k: "Apple Music Europe, No. 1" },
        { v: `${DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS} days`, l: "at No. 1 on the worldwide iTunes songs chart, and 15 days atop the European iTunes chart", k: "iTunes worldwide, No. 1" },
        { v: liveOnesValue, l: liveOnesLabel, k: liveOnesKey, live: true },
      ],
    },
    {
      title: "World rankings",
      rows: [
        { v: `${DAI_DAI_UWC_NO1_WEEKS} weeks`, l: "at No. 1 on Mediatraffic's United World Chart — 230,000 points in the chart week dated 26 September, and the first Burna Boy song ever to top it", k: "United World Chart, No. 1" },
        { v: `${DAI_DAI_ITUNES_NO1_COUNTRIES}`, l: `iTunes song chart in ${DAI_DAI_ITUNES_NO1_COUNTRIES} countries — the US, UK, Canada, France, Italy, New Zealand, India, Spain, Portugal, Hungary & dozens more, Belarus the newest`, k: "iTunes No. 1, countries" },
        // A dated, past-tense peak: the site's own log of 26 Jul 2026 is the read,
        // and the chart has not bettered No. 13 since (runHistory, from 9 Aug).
        // "No. 1 in 23 of them" had no source and is gone (Paul, 24 Sep 2026).
        { v: `No. ${DAI_DAI_DEEZER_WORLDWIDE_PEAK}`, l: "Deezer Worldwide Top 100 — its peak, reached on 26 July 2026, when it was charting in 57 countries", k: "Deezer Worldwide, peak" },
        { v: `${DAI_DAI_SPOTIFY_MUSIC_VIDEO_NO1_DAYS} days`, l: "at No. 1 on Spotify's Global Music Video chart, as last counted on the chart of 23 August — the chart is a daily playlist with no archive, so the count is kept by hand", k: "Spotify Global Music Video, No. 1" },
        { v: `No. ${BURNA_GLOBAL_DIGITAL_ARTIST_POSITION}`, l: `Burna Boy's position on the Global Digital Artist ranking (${gdaPoints} points) during the run`, k: "Global Digital Artist ranking" },
      ],
    },
    {
      title: "The video",
      video: true,
      rows: [
        { v: DAI_DAI_VIDEO_VIEWS, l: `YouTube views for the “Dai Dai” video — one billion in ${DAI_DAI_1B_DAYS} days, ${DAI_DAI_1B_RANK_EN} fastest in YouTube history and the first 2026 video to reach it. Before that: 500 million in 59.4 days, 600 million in 67 days (the fastest of either artist's career to the mark) and 700 million in 74.8 days`, k: "Views on YouTube", live: true },
        { v: `${daiDaiYouTubeDaysAtNo1} days`, l: "straight at No. 1 as the most-viewed music video on YouTube worldwide, from 9 June through the chart of 27 August. That run then broke — the video sat at No. 2 on the charts dated 5 and 6 September — and it retook the top: No. 1 again on the chart dated 7 September 2026, on its 108th day on the chart. That second spell ended too — No. 2 on the chart dated 14 September, behind a new entry. The 80 is a closed count, not a running one", k: "Straight at No. 1 on YouTube's global music-video chart" },
      ],
    },
  ];

  const numbersLabels: NumbersLabels = {
    national: "National charts",
    cols: { country: "Country", chart: "Chart", peak: "Peak", weeksAt1: "Weeks at No. 1", weeksOn: "Weeks on chart" },
    peak: "No. {n}",
    notStated: "not stated",
    none: "none",
    wkAt1: " wk at No. 1",
    wkOn: " wk on chart",
    weeksPrefix: "weeks ",
    live: LIVE_CADENCE,
    video: { id: DAI_DAI_VIDEO_ID, play: "Play the “Dai Dai” video", title: "Shakira and Burna Boy — “Dai Dai” (official video)" },
  };

  // Answer-first Q&A targeting the exact questions halftime-weekend searchers ask.
  const faqs: { q: string; a: string }[] = [
    {
      q: "Who sings “Dai Dai”?",
      a: "“Dai Dai” is a 2026 collaboration between Colombian pop superstar Shakira and Nigerian Afrobeats star Burna Boy. It is the official song of the 2026 FIFA World Cup.",
    },
    {
      q: "Is “Dai Dai” the 2026 World Cup song?",
      a: `Yes. “Dai Dai” is the official anthem of the 2026 FIFA World Cup, and Shakira and Burna Boy performed it live at the World Cup Final halftime show on ${halftimeLong}.`,
    },
    {
      q: "Did “Dai Dai” reach No. 1?",
      a: `Yes. “Dai Dai” reached No. 1 on the Billboard Global 200 and the Global 200 Excl. US, topped Spotify's Global Top Songs chart on both the Daily and Weekly lists, and hit No. 1 on the official singles chart in ${daiDaiNumberOnes} countries.`,
    },
    {
      q: "How high did “Dai Dai” chart in the UK?",
      a: `“Dai Dai” peaked at No. ${peakUK} on the UK Official Singles Chart — the first FIFA World Cup song ever to reach the UK Top 10, and by far the highest-charting World Cup song in UK history, surpassing Shakira's own “Waka Waka (This Time for Africa)”, which peaked at No. 21 in 2010.`,
    },
    {
      q: "When was the 2026 World Cup Final halftime show?",
      a: `The first-ever FIFA World Cup Final halftime show took place on ${halftimeLong} at MetLife Stadium. Shakira and Burna Boy performed “Dai Dai”, joined on stage by Uganda's Triplets Ghetto Kids.`,
    },
    {
      q: "Who performed at the 2026 World Cup Final halftime show?",
      a: `The 2026 FIFA World Cup Final halftime show — the first ever — featured Madonna, Shakira and Burna Boy (performing “Dai Dai”), BTS, Justin Bieber, conductor Gustavo Dudamel, and the PS22 Chorus with Coldplay, produced by Global Citizen, on ${halftimeLong} at MetLife Stadium.`,
    },
    {
      q: "Who are the Ghetto Kids who performed with Shakira and Burna Boy?",
      a: "Uganda's Triplets Ghetto Kids — a Kampala-based children's dance group who went viral online — joined Shakira and Burna Boy on stage for “Dai Dai” at the 2026 World Cup Final halftime show, after Shakira invited them to the performance.",
    },
    {
      q: "How many certifications does “Dai Dai” have?",
      a: `“Dai Dai” has ${daiDaiCertCount} certifications: Diamond in France from SNEP, ${plaqueX("CA")}× Platinum in Canada from Music Canada and ${plaqueX("US")}× Platino in the US from the RIAA's Latin programme, Platinum in Spain, Slovakia, Portugal, Hungary, Austria, Greece and Sweden, Gold in Colombia, the Czech Republic, Italy, Poland, Belgium and Germany, and Silver in the UK from the BPI.`,
    },
  ];

  // The 19 July halftime bill (FIFA official), with artist photos from Spotify's
  // CDN — the same source the discography uses. Shakira & Burna are the "Dai Dai"
  // headliners; the rest are the co-performers on the first-ever Final show.
  const lineup: { name: string; img: string; tag?: string; headliner?: boolean }[] = [
    { name: "Shakira", img: SHAKIRA_PORTRAIT, tag: "Dai Dai", headliner: true },
    { name: "Burna Boy", img: BURNA_PORTRAIT, tag: "Dai Dai", headliner: true },
    { name: "Madonna", img: "https://i.scdn.co/image/ab6761610000e5ebed2208b41d49ebd24687985b", tag: "Music" },
    { name: "BTS", img: "https://i.scdn.co/image/ab6761610000e5ebf80ec63ea7a0ef0fba60957d", tag: "Dynamite" },
    { name: "Justin Bieber", img: "https://i.scdn.co/image/ab6761610000e5ebaf20f7db5288bce9beede034", tag: "Everything Hallelujah" },
    { name: "Coldplay", img: "https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb", tag: "with PS22 Chorus" },
  ];

  const straight = (s: string) => s.replace(/[“”]/g, '"');
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: straight(f.q),
      acceptedAnswer: { "@type": "Answer", text: straight(f.a) },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_ORIGIN },
      { "@type": "ListItem", position: 2, name: "The Dai Dai Story", item: `${CANONICAL_ORIGIN}/dai-dai` },
    ],
  };

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />

      {/* The hero: one primary action and the EN/ES switch (design response §5,
          item 1). The halftime link moved into chapter 07's poster, and the
          blurred cover backdrop is gone. The cover beside the h1 is drawn on
          the desktop artboard only: on desktop it is the largest first paint
          (a real image, so it asks for a high priority), and a <source> gate
          keeps a phone from ever fetching it. */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.kicker}>2026 FIFA World Cup · official song</div>
          <h1 className={styles.h1}>
            The <span className={`inkText ${styles.name}`}>Dai Dai</span> story
          </h1>
          <p className={styles.lede}>
            <span className={styles.ledeWide}>
              Shakira × Burna Boy&apos;s official World Cup song — from a May release to the
              first-ever halftime show at a World Cup Final, then every chart, plaque and stream
              behind it.
            </span>
            <span className={styles.ledeNarrow}>
              Shakira × Burna Boy&apos;s official World Cup song, from release to the first World
              Cup Final halftime show.
            </span>
          </p>
          <div className={styles.heroActions}>
            <a className={`btn btnPrimary ${styles.skip}`} href="#numbers">Skip to the numbers</a>
            <LangSwitch current="en" label="Language" />
          </div>
        </div>
        <figure className={styles.heroCover}>
          <picture>
            <source media="(max-width: 900px)" srcSet={BLANK_PIXEL} />
            <img
              className={styles.heroCoverImg}
              src={spotifyImage(DAI_DAI_COVER, 640)}
              srcSet={spotifySrcSet(DAI_DAI_COVER)}
              sizes="360px"
              alt="Dai Dai single cover — Shakira × Burna Boy, 2026 FIFA World Cup"
              width={360}
              height={360}
              fetchPriority="high"
            />
          </picture>
          <figcaption className={styles.heroCoverCaption}>
            Shakira × Burna Boy · single · {DAI_DAI_RELEASE_DATE.slice(0, 4)}
          </figcaption>
        </figure>
      </section>

      <DaiDaiStory />

      {/* "The record": the break between the story and the reference
          sections (design response §5, item 4). */}
      <RecordBand
        title="The record"
        lead="The song's own figures, not Burna Boy's career totals."
        more="Each one names its chart."
      />

      <div className={styles.wrap}>
        <Lineup
          id="dd-lineup"
          title="The halftime show lineup"
          meta={`${halftimeLong} · MetLife Stadium · produced by Global Citizen`}
          note="Also on the bill: Uganda's Triplets Ghetto Kids on stage, conductor Gustavo Dudamel and the PS22 Chorus."
          lineup={lineup}
        />

        <section className={`${styles.section} ${styles.sectionTakeover}`} aria-labelledby="dd-conquest">
          <SectionHead id="dd-conquest" title="The world takeover" aside={conquestIntro} stackOnPhone />
          <DaiDaiConquest countries={conquestCountries} />
          {/* "How it got there" (design response §5, item 6): the replay, beside
              the grid rather than merged with it. The server renders its end
              frame; nothing plays until Play is pressed. Without JavaScript the
              week-by-week table is the reading. */}
          <DaiDaiReplay data={replayData} labels={EN_REPLAY_LABELS} />
          <noscript>
            <DaiDaiReplayMultiples data={replayData} labels={EN_REPLAY_LABELS} />
          </noscript>
        </section>

        <section id="numbers" className={`${styles.section} ${styles.sectionNumbers}`} aria-labelledby="dd-numbers">
          <SectionHead
            id="dd-numbers"
            title="Dai Dai by the numbers"
            aside="The song's own figures, not Burna Boy's career totals."
            hideAsideOnPhone
          />
          <Leads leads={leads} live={numbersLabels.live} />
          <NationalTable rows={nationalRows} t={numbersLabels} id="dd-national" />
          <RuledLists lists={numberLists} t={numbersLabels} idPrefix="dd-list" />
        </section>

        {/* Deliberately NOT .desktopOnly. The FAQPage JSON-LD emitted at the top
            of this page goes out at every width, but this section used to sit
            inside that wrapper — display: none below 900px — so all eight
            answers were rendered for a laptop reader and withheld from a phone
            one. This is the site's most-trafficked page and these are live
            searches right now ("When was the 2026 World Cup Final halftime
            show?", "Who are the Ghetto Kids who performed with Shakira and
            Burna Boy?"): somebody who searched that exact question landed on
            the page that answers it and got only the lineup note above, which
            NAMES the Ghetto Kids without answering who they are.
            Googlebot renders at phone width too, so the schema was describing
            content the crawler could not see, and markup that does not match
            the page is a spam signal rather than a ranking one.
            On a laptop: a heading column and the answers at a 72ch measure,
            every answer open. On a phone these eight fold, first one open,
            because the owner asked for it. What keeps that from being the same
            bug in a nicer coat is the order FaqList does it in: the server
            renders this open list and an effect collapses it after mount, so
            the eight answers are in the HTML at every width and a phone with no
            JavaScript still shows all of them. The Keep-exploring rail at the
            foot of this file stays .desktopOnly on purpose: the five-tab bar is
            how a phone moves around this site. */}
        <section className={styles.faq} aria-labelledby="dd-faq">
          <div className={styles.faqHead}>
            <h2 id="dd-faq" className={styles.h2}>
              Frequently asked questions
            </h2>
          </div>
          <FaqList
            items={faqs}
            classes={{
              list: styles.faqList,
              item: styles.faqItem,
              q: styles.faqQ,
              a: styles.faqA,
            }}
          />
        </section>

        {/* Left-aligned, 48px of rule-topped space under the FAQ, and a
            sentence that restates no figure (design response §5, item 10). */}
        <section className={styles.outro} aria-label="More on the run">
          <p className={styles.outroLead}>Every figure on this page names the chart or body that published it.</p>
          <div className={styles.outroLinks}>
            <Link href="/records/charts?song=Dai%20Dai" className={styles.outroLink}>Every chart position <span aria-hidden="true">↗</span></Link>
            <Link href="/records/africas-biggest" className={styles.outroLink}>Africa&apos;s biggest <span aria-hidden="true">↗</span></Link>
            <Link href="/music" className={styles.outroLink}>Burna Boy discography <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </div>

      {/* .exploreRail sets the shared rail's side padding to this page's
          40px, so its cards line up with the content column above (120–1320
          at 1440). The shared component itself is untouched. */}
      <div className={`${styles.desktopOnly} ${styles.exploreRail}`}>
        <KeepExploring current="/dai-dai" />
      </div>
    </main>
  );
}
