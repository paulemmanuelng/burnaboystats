import Link from "next/link";
import styles from "./dai-dai.module.css";
import DaiDaiStory from "../components/DaiDaiStory";
import DaiDaiConquest, { type ConquestCountry } from "../components/DaiDaiConquest";
import KeepExploring from "../components/KeepExploring";
import DaiDaiNumbers from "../components/DaiDaiNumbers";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { lastUpdated } from "../lib/api";
import { daiDaiNumberOnes, daiDaiChartEntryCount, allChartItems, CHART_COUNTRIES } from "../data/charts";
import { liveCharts } from "../data/liveCharts";
import { daiDaiCertCount } from "../data/certifications";
import { spotifyImage, spotifySrcSet } from "../lib/spotifyImage";
import { BURNA_PORTRAIT, SHAKIRA_PORTRAIT } from "../lib/artistImages";

// Countries "Dai Dai" charted in, mapped to the world-map's ISO id space, for
// the animated takeover map. Excludes the two Billboard global charts (not
// Every country the song charted in, for the takeover grid. A flag grid needs
// no map shape, so nothing is dropped — which is what the old SVG map did to
// the three No. 1 countries it had no outline for.
const daiDai = allChartItems.find((r) => r.title === "Dai Dai");
const conquestCountries: ConquestCountry[] = (daiDai?.entries ?? [])
  .filter((e) => e.c !== "GLB" && e.c !== "GLBX")
  .map((e) => ({
    code: e.c,
    flag: CHART_COUNTRIES[e.c]?.flag ?? "🏳",
    name: CHART_COUNTRIES[e.c]?.name ?? e.c,
    peak: e.peak,
  }));
const conquestTotal = conquestCountries.length;
const conquestNo1 = conquestCountries.filter((c) => c.peak === 1).length;
// Built as a plain string (not inline JSX) so the numbers always keep their
// spacing — inline `{n} word` was rendering as "17word".
const conquestIntro = `“Dai Dai” has charted in ${conquestTotal} countries — and reached No. 1 in ${conquestNo1} of them. The No. 1 countries are gold; the rest charted without topping.`;

// Views of the official "Dai Dai" video (youtube.com/watch?v=fcnDmrtj6Sk), shown
// in whole millions. Auto-updated hourly by the live stats bot (the
// dai-dai-video-views metric) — it rewrites this string only when the figure
// ticks over another million, so the page changes exactly when the number does.
const DAI_DAI_VIDEO_VIEWS = "685M";

// The per-platform No. 1 counts, derived from the same hourly live-charts
// snapshot as /live-charts — this line used to be hand-written and drifted
// (Apple 25 vs a real 8) the day the daily charts moved.
const ddLive = liveCharts.find((r) => r.title === "Dai Dai");
const liveOnes = (platform: string) =>
  ddLive?.platforms
    .find((p) => p.platform === platform)
    ?.entries.filter((e) => e.position === 1 && !/world/i.test(e.name)).length ?? 0;
const platformOnes = ["YouTube", "Apple Music", "Deezer", "Spotify", "iTunes", "Shazam"]
  .map((p) => [p, liveOnes(p)] as const)
  .filter(([, n]) => n > 0);
const liveOnesLabel = `right now on the daily charts of ${platformOnes
  .map(([p, n], i) => (i === 0 ? `${p} (${n} countries)` : `${p} (${n})`))
  .join(", ")
  .replace(/, ([^,]*)$/, " and $1")} — refreshed hourly from the live board`;

// Total Spotify streams for "Dai Dai" — same live pipeline as the video count.
const DAI_DAI_SPOTIFY_STREAMS = "294M";

export const metadata = pageMetadata({
  title: "Dai Dai — Shakira & Burna Boy's 2026 World Cup Anthem",
  description:
    "Shakira & Burna Boy's “Dai Dai” — the 2026 FIFA World Cup anthem: 25 days as the world's most-streamed song, No. 1 in 27 countries, and the Final halftime show.",
  path: "/dai-dai",
  shareTitle: "The Dai Dai Story — Shakira & Burna Boy",
  shareDescription: "Shakira & Burna Boy's World Cup anthem — No.1 worldwide, and performed at the Final halftime show.",
});

export default function DaiDaiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dai Dai — Shakira & Burna Boy's 2026 FIFA World Cup Anthem",
    description:
      "The story of “Dai Dai”, the 2026 FIFA World Cup anthem by Shakira and Burna Boy — its record-breaking chart, streaming and certification run, and its live performance at the World Cup Final halftime show.",
    datePublished: "2026-07-16",
    dateModified: lastUpdated,
    image: [`${CANONICAL_ORIGIN}/dai-dai/opengraph-image`],
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
      datePublished: "2026-05",
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
    startDate: "2026-07-19",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
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
    // Search Console flagged five non-critical Event fields as missing
    // (image, description, endDate, organizer.url, offers). None blocked the
    // rich result, but each one it has is a feature the listing can show.
    description:
      "The first-ever halftime show at a FIFA World Cup Final — Shakira and Burna Boy performed “Dai Dai”, the official 2026 tournament anthem, alongside Madonna, BTS, Justin Bieber and Coldplay.",
    image: [`${CANONICAL_ORIGIN}/dai-dai/opengraph-image`],
    // A one-evening show: schema.org wants an endDate even when it equals the
    // start date, or the event reads as open-ended.
    endDate: "2026-07-19",
    // The show itself was not ticketed separately from the match, and it
    // streamed free — which is a real answer to "offers", not a missing one.
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${CANONICAL_ORIGIN}/dai-dai`,
      validFrom: "2026-05-15",
    },
  };

  // Every headline "Dai Dai" figure in one scannable, crawlable block — the
  // song's OWN numbers (not Burna Boy's artist-wide totals).
  const HALFTIME_VIDEO = "https://youtu.be/T3thHUtPdhc";

  // The song's headline figures, tiered: six hero numbers first, then the
  // rest grouped by what they measure. Same crawlable content as the old flat
  // grid — the tiers are volume control, not omission.
  const heroNumbers: { v: string; l: string }[] = [
    { v: `${daiDaiChartEntryCount}`, l: "official chart entries worldwide — on national singles charts across the globe, plus both of Billboard's global charts" },
    { v: `${daiDaiNumberOnes}`, l: "countries at No. 1 on their official singles chart — from France and Germany to the UAE" },
    { v: "No. 1", l: "on both Billboard global charts — a 4th consecutive week atop the Global 200 (a first for an African artist, and Shakira's 2nd) and a 6th consecutive week atop the Global 200 Excl. US" },
    { v: DAI_DAI_SPOTIFY_STREAMS, l: "Spotify streams — 25 days as the most-streamed song on Earth" },
    { v: `${daiDaiCertCount}`, l: "certifications — 2× Platinum (Latin) in the US, Platinum in Spain, France & Slovakia, plus Gold in Colombia, Hungary, Portugal & Greece" },
    { v: "19 Jul", l: "Shakira & Burna Boy performed “Dai Dai” live at the first-ever FIFA World Cup Final halftime show" },
  ];

  const numberGroups: { label: string; intro: string; items: { v: string; l: string }[] }[] = [
    {
      label: "The streaming streaks",
      intro: "The daily and weekly runs — every one still counting.",
      items: [
        { v: "25 days", l: "in total at No. 1 on Spotify's Global Daily Top Songs chart — a first for an African artist — before Ariana Grande took over in early August; 75 days on the chart and counting" },
        { v: "4 weeks", l: "at No. 1 on Spotify's Global Weekly Top Songs chart, peaking at 40.28M streams in a single week" },
        { v: "33 days", l: "at No. 1 on Apple Music's European songs chart, and a 7th day atop the worldwide Apple Music chart" },
        { v: "23 days", l: "at No. 1 on the worldwide iTunes songs chart, and 15 days atop the European iTunes chart" },
        { v: "No. 1", l: liveOnesLabel },
      ],
    },
    {
      label: "The national charts",
      intro: "Country by country, on the official singles charts.",
      items: [
        { v: "8 weeks", l: "at No. 1 on Switzerland's official chart — the longest run at No. 1 by any song there so far this year" },
        { v: "4 weeks", l: "at No. 1 on France's Official Singles Chart (SNEP)" },
        { v: "No. 1", l: "India's IMI International Top 20 Singles Chart — the first Burna Boy song to top a chart in India" },
        { v: "No. 1", l: "Official MENA Chart Top 20 — still on top in the latest week — and Billboard's US World Digital Song Sales chart" },
        { v: "No. 2", l: "UK Official Singles Chart — the first FIFA World Cup song ever to reach the UK Top 10, and by far the highest-charting World Cup song in UK history, beating Shakira's own “Waka Waka” (No. 21)" },
        { v: "No. 3", l: "Billboard Canadian Hot 100 — a new peak and Burna Boy's first-ever top 10 in Canada, where his best song placing had been No. 14. It is also Shakira's first Canadian top 10 since “She Wolf” in 2009" },
        { v: "No. 17", l: "Billboard Hot 100 (US) — a 42-to-17 jump on the chart dated 1 August, the highest-charting World Cup song in Hot 100 history. Luminate logged 8.6M US streams (+69%), 13.9M radio airplay audience (+11%) and 7,000 sold (+322%) in the 17–23 July tracking week" },
      ],
    },
    {
      label: "The world rankings",
      intro: "The charts that rank the whole planet at once.",
      items: [
        { v: "6 weeks", l: "at No. 1 on Mediatraffic's United World Chart — 375,000 points in the week to 8 August, and the first Burna Boy song ever to top it" },
        { v: "No. 1", l: "iTunes song chart in 71 countries — the US, UK, Canada, France, Italy, New Zealand, India, Spain, Portugal, Hungary & dozens more, Latvia the newest" },
        { v: "No. 13", l: "Deezer Worldwide Top 100 — a new peak, charting in 57 countries and No. 1 in 23 of them" },
        { v: "No. 14", l: "Burna Boy's position on the Global Digital Artist ranking (1,739 points) during the run" },
      ],
    },
    {
      label: "The video",
      intro: "The “Dai Dai” video, on a tear of its own.",
      items: [
        { v: DAI_DAI_VIDEO_VIEWS, l: "YouTube views for the “Dai Dai” video — 600 million in 67 days, the fastest music video of either artist's career to the mark and the first and only 2026 video to reach it. It passed 500 million in 59.4 days, the 12th fastest in history" },
        { v: "33 days", l: "as the most-viewed music video on YouTube worldwide, and No. 1 in 59 countries — now past 6.1 million likes" },
      ],
    },
  ];

  // Answer-first Q&A targeting the exact questions halftime-weekend searchers ask.
  const faqs: { q: string; a: string }[] = [
    {
      q: "Who sings “Dai Dai”?",
      a: "“Dai Dai” is a 2026 collaboration between Colombian pop superstar Shakira and Nigerian Afrobeats star Burna Boy. It is the official song of the 2026 FIFA World Cup.",
    },
    {
      q: "Is “Dai Dai” the 2026 World Cup song?",
      a: "Yes. “Dai Dai” is the official anthem of the 2026 FIFA World Cup, and Shakira and Burna Boy performed it live at the World Cup Final halftime show on 19 July 2026.",
    },
    {
      q: "Did “Dai Dai” reach No. 1?",
      a: `Yes. “Dai Dai” reached No. 1 on the Billboard Global 200 and the Global 200 Excl. US, topped Spotify's Global Top Songs chart on both the Daily and Weekly lists, and hit No. 1 on the official singles chart in ${daiDaiNumberOnes} countries.`,
    },
    {
      q: "How high did “Dai Dai” chart in the UK?",
      a: "“Dai Dai” peaked at No. 2 on the UK Official Singles Chart — the first FIFA World Cup song ever to reach the UK Top 10, and by far the highest-charting World Cup song in UK history, surpassing Shakira's own “Waka Waka (This Time for Africa)”, which peaked at No. 21 in 2010.",
    },
    {
      q: "When was the 2026 World Cup Final halftime show?",
      a: "The first-ever FIFA World Cup Final halftime show took place on 19 July 2026 at MetLife Stadium. Shakira and Burna Boy performed “Dai Dai”, joined on stage by Uganda's Triplets Ghetto Kids.",
    },
    {
      q: "Who performed at the 2026 World Cup Final halftime show?",
      a: "The 2026 FIFA World Cup Final halftime show — the first ever — featured Madonna, Shakira and Burna Boy (performing “Dai Dai”), BTS, Justin Bieber, conductor Gustavo Dudamel, and the PS22 Chorus with Coldplay, produced by Global Citizen, on 19 July 2026 at MetLife Stadium.",
    },
    {
      q: "Who are the Ghetto Kids who performed with Shakira and Burna Boy?",
      a: "Uganda's Triplets Ghetto Kids — a Kampala-based children's dance group who went viral online — joined Shakira and Burna Boy on stage for “Dai Dai” at the 2026 World Cup Final halftime show, after Shakira invited them to the performance.",
    },
    {
      q: "How many certifications does “Dai Dai” have?",
      a: "“Dai Dai” has 8 certifications: 2× Platinum (Latin) in the US from the RIAA, Platinum in Spain, France and Slovakia, plus Gold in Colombia, Hungary, Portugal and Greece.",
    },
  ];

  // The 19 July halftime bill (FIFA official), with artist photos from Spotify's
  // CDN — the same source the discography uses. Shakira & Burna are the "Dai Dai"
  // headliners; the rest are the co-performers on the first-ever Final show.
  const lineup: { name: string; img: string; tag?: string; headliner?: boolean }[] = [
    { name: "Shakira", img: SHAKIRA_PORTRAIT, tag: "“Dai Dai”", headliner: true },
    { name: "Burna Boy", img: BURNA_PORTRAIT, tag: "“Dai Dai”", headliner: true },
    { name: "Madonna", img: "https://i.scdn.co/image/ab6761610000e5ebed2208b41d49ebd24687985b" },
    { name: "BTS", img: "https://i.scdn.co/image/ab6761610000e5ebf80ec63ea7a0ef0fba60957d" },
    { name: "Justin Bieber", img: "https://i.scdn.co/image/ab6761610000e5ebaf20f7db5288bce9beede034" },
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

      <section className={`${styles.wrap} ${styles.heroPad}`}>
        <div className={styles.kicker}>2026 FIFA World Cup · official song</div>
        <h1 className={styles.h1}>
          The <span className="inkText">Dai Dai</span> story
        </h1>
        <p className={styles.lede}>
          How Shakira &amp; Burna Boy&apos;s 2026 World Cup anthem became the biggest song
          in the world — and made history at the first-ever FIFA World Cup Final halftime
          show. Scroll to follow the run.
        </p>
        <div className={styles.heroActions}>
          <a
            className="btn btnPrimary"
            href={HALFTIME_VIDEO}
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Watch the halftime show ↗
          </a>
          <a className="btn btnSecondary" href="#numbers">Skip to the numbers</a>
        </div>
      </section>

      <div className={styles.wrap}>
        <DaiDaiStory daiDaiNo1s={daiDaiNumberOnes} daiDaiCerts={daiDaiCertCount} />

        <section className={styles.section} aria-labelledby="dd-lineup">
          <div className={styles.kicker}>19 July 2026 · MetLife Stadium</div>
          <h2 id="dd-lineup" className={styles.h2}>
            The <span className={styles.gold}>halftime show</span> lineup
          </h2>
          <p className={styles.lineupIntro}>
            The first-ever FIFA World Cup Final halftime show, produced by Global Citizen.
            Shakira &amp; Burna Boy performed “Dai Dai” on a bill of global superstars.
          </p>
          <ul className={styles.lineupGrid}>
            {lineup.map((a) => (
              <li key={a.name} className={`${styles.lineupCard} ${a.headliner ? styles.lineupHeadliner : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.lineupPhoto} src={spotifyImage(a.img, 320)} srcSet={spotifySrcSet(a.img)} sizes="128px" alt={a.name} width={128} height={128} loading="lazy" />
                <span className={styles.lineupName}>{a.name}</span>
                {a.tag ? <span className={styles.lineupTag}>{a.tag}</span> : null}
              </li>
            ))}
          </ul>
          <p className={styles.lineupNote}>
            Also on the bill: Uganda&apos;s Triplets Ghetto Kids on stage, conductor
            Gustavo Dudamel and the PS22 Chorus.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="dd-conquest">
          <div className={styles.kicker}>Country by country</div>
          <h2 id="dd-conquest" className={styles.h2}>
            The <span className={styles.gold}>world takeover</span>
          </h2>
          <p className={styles.conquestIntro}>
            {conquestIntro}
          </p>
          <DaiDaiConquest countries={conquestCountries} />
        </section>

        <section id="numbers" className={styles.section} aria-labelledby="dd-numbers">
          <div className={styles.kicker}>The song&apos;s own record</div>
          <h2 id="dd-numbers" className={styles.h2}>
            Dai Dai <span className={styles.gold}>by the numbers</span>
          </h2>
          <p className={styles.numIntro}>
            These are “Dai Dai”&apos;s own figures — not Burna Boy&apos;s career totals.
            Every one is the song&apos;s.
          </p>
          <DaiDaiNumbers hero={heroNumbers} groups={numberGroups} />
        </section>

        <section className={`${styles.section} ${styles.desktopOnly}`} aria-labelledby="dd-faq">
          <div className={styles.kicker}>Answered plainly</div>
          <h2 id="dd-faq" className={styles.h2}>
            Frequently asked <span className={styles.gold}>questions</span>
          </h2>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.outro}>
          <p className={styles.outroLead}>
            One song, a world record, and an African artist at No. 1 on the planet&apos;s
            biggest charts. Dig into the data behind the run:
          </p>
          <div className={styles.outroLinks}>
            <Link href="/records/charts?song=Dai%20Dai" className="btn btnPrimary">Every chart position ↗</Link>
            <Link href="/records/africas-biggest" className="btn btnSecondary">Africa&apos;s biggest ↗</Link>
            <Link href="/music" className="btn btnSecondary">Burna Boy discography ↗</Link>
          </div>
        </section>
      </div>

      {/* Screen 25's action bar — mobile only. The hero keeps its own two
          buttons; this is the persistent one the design pins to the floor. */}
      <div className={styles.mobileActionBar}>
        <a
          className={styles.mobilePrimary}
          href={HALFTIME_VIDEO}
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Watch the halftime show
        </a>
        <Link href="/share" aria-label="Make a stat card" className={styles.mobileShare}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
            <path d="M12 3v12" />
            <path d="m7 8 5-5 5 5" />
          </svg>
        </Link>
      </div>

      <div className={styles.desktopOnly}>
        <KeepExploring current="/dai-dai" />
      </div>
    </main>
  );
}
