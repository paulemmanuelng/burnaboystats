import Link from "next/link";
import styles from "./dai-dai.module.css";
import DaiDaiStory from "../components/DaiDaiStory";
import ShareButton from "../components/ShareButton";
import KeepExploring from "../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { daiDaiNumberOnes, daiDaiChartEntryCount } from "../data/charts";
import { daiDaiCertCount } from "../data/certifications";

export const metadata = pageMetadata({
  title: "Dai Dai at the World Cup Halftime Show — Shakira & Burna Boy's 2026 Anthem",
  description:
    "Shakira and Burna Boy perform “Dai Dai” at the first-ever FIFA World Cup Final halftime show this weekend — joined by Uganda's Triplets Ghetto Kids, on a bill with Madonna, BTS and Justin Bieber. The full story of the World Cup anthem that hit No. 1 on the Billboard Global 200 and became the biggest song in the world.",
  path: "/dai-dai",
  shareTitle: "The Dai Dai Story — Shakira & Burna Boy",
  shareDescription: "Shakira & Burna Boy's World Cup anthem — No.1 worldwide, and live at the Final halftime show.",
});

export default function DaiDaiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dai Dai — Shakira & Burna Boy's 2026 FIFA World Cup Anthem",
    description:
      "The story of “Dai Dai”, the 2026 FIFA World Cup anthem by Shakira and Burna Boy — its record-breaking chart, streaming and certification run, and its live performance at the World Cup Final halftime show.",
    datePublished: "2026-07-16",
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
    organizer: { "@type": "Organization", name: "Global Citizen" },
    about: { "@type": "MusicRecording", name: "Dai Dai" },
    url: `${CANONICAL_ORIGIN}/dai-dai`,
  };

  // Every headline "Dai Dai" figure in one scannable, crawlable block — the
  // song's OWN numbers (not Burna Boy's artist-wide totals).
  const byNumbers: { v: string; l: string }[] = [
    { v: `${daiDaiChartEntryCount}`, l: "official chart entries worldwide — on national singles charts across the globe, plus both of Billboard's global charts" },
    { v: "No. 1", l: "Billboard Global 200 — the first African artist ever to top the US-inclusive worldwide chart, and Shakira's 2nd" },
    { v: "No. 1", l: "Billboard Global 200 (Excl. US)" },
    { v: `${daiDaiNumberOnes}`, l: "countries at No. 1 on their official singles chart — from France and Germany to the UAE" },
    { v: "No. 1", l: "Spotify Global Top Songs, Daily & Weekly — the most-streamed song on Earth, a first for an African artist" },
    { v: "No. 1", l: "Official MENA Chart Top 20, and Billboard's Central America & Caribbean chart" },
    { v: "No. 55", l: "Billboard Hot 100 (US) — extending Burna Boy's record for the most Hot 100 entries by an African artist" },
    { v: `${daiDaiCertCount}`, l: "certifications — 2× Platinum (Latin) in the US, plus Gold in France, Spain, Colombia, Hungary & Slovakia" },
    { v: "19 Jul", l: "Shakira & Burna Boy perform it live at the 2026 FIFA World Cup Final halftime show" },
  ];

  // Answer-first Q&A targeting the exact questions halftime-weekend searchers ask.
  const faqs: { q: string; a: string }[] = [
    {
      q: "Who sings “Dai Dai”?",
      a: "“Dai Dai” is a 2026 collaboration between Colombian pop superstar Shakira and Nigerian Afrobeats star Burna Boy. It is the official song of the 2026 FIFA World Cup.",
    },
    {
      q: "Is “Dai Dai” the 2026 World Cup song?",
      a: "Yes. “Dai Dai” is the official anthem of the 2026 FIFA World Cup, and Shakira and Burna Boy perform it live at the World Cup Final halftime show on 19 July 2026.",
    },
    {
      q: "Did “Dai Dai” reach No. 1?",
      a: "Yes. “Dai Dai” reached No. 1 on the Billboard Global 200 and the Global 200 Excl. US, topped Spotify's Global Top Songs chart on both the Daily and Weekly lists, and hit No. 1 on the official singles chart in 15 countries.",
    },
    {
      q: "When is the 2026 World Cup Final halftime show?",
      a: "The first-ever FIFA World Cup Final halftime show takes place on 19 July 2026 at MetLife Stadium. Shakira and Burna Boy perform “Dai Dai”, joined on stage by Uganda's Triplets Ghetto Kids.",
    },
    {
      q: "Who is performing at the 2026 World Cup Final halftime show?",
      a: "The 2026 FIFA World Cup Final halftime show features Madonna, Shakira and Burna Boy (performing “Dai Dai”), BTS, Justin Bieber, conductor Gustavo Dudamel, and the PS22 Chorus with Coldplay — produced by Global Citizen, on 19 July 2026 at MetLife Stadium.",
    },
    {
      q: "Who are the Ghetto Kids performing with Shakira and Burna Boy?",
      a: "Uganda's Triplets Ghetto Kids — a Kampala-based children's dance group who went viral online — join Shakira and Burna Boy on stage for “Dai Dai” at the 2026 World Cup Final halftime show, after Shakira invited them to the performance.",
    },
    {
      q: "How many certifications does “Dai Dai” have?",
      a: "“Dai Dai” has 6 certifications: 2× Platinum (Latin) in the US from the RIAA, plus Gold in France, Spain, Colombia, Hungary and Slovakia.",
    },
  ];

  // The 19 July halftime bill (FIFA official), with artist photos from Spotify's
  // CDN — the same source the discography uses. Shakira & Burna are the "Dai Dai"
  // headliners; the rest are the co-performers on the first-ever Final show.
  const lineup: { name: string; img: string; tag?: string; headliner?: boolean }[] = [
    { name: "Shakira", img: "https://i.scdn.co/image/ab6761610000e5eb17f15f351cba70561ad8bcac", tag: "“Dai Dai”", headliner: true },
    { name: "Burna Boy", img: "https://i.scdn.co/image/ab6761610000e5ebb4e44d0f4e3e47af2cf06f3f", tag: "“Dai Dai”", headliner: true },
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

      <header className="pageHeader container">
        <h1>
          The <span className="accent">Dai Dai</span> Story
        </h1>
        <p>
          How Shakira &amp; Burna Boy&apos;s 2026 World Cup anthem became the biggest
          song in the world — and lands on the Final halftime stage this weekend.
          Scroll to follow the run.
        </p>
        <div className={styles.shareRow}>
          <ShareButton
            url={`${CANONICAL_ORIGIN}/dai-dai`}
            title="The Dai Dai Story — Shakira & Burna Boy"
            text="Shakira & Burna Boy's World Cup anthem — No.1 worldwide, and live at the Final halftime show on 19 July."
            imageUrl="/dai-dai/opengraph-image"
            fileName="dai-dai.png"
          />
        </div>
      </header>

      <div className="container">
        <DaiDaiStory daiDaiNo1s={daiDaiNumberOnes} daiDaiCerts={daiDaiCertCount} />

        <section className={styles.lineup} aria-labelledby="dd-lineup">
          <h2 id="dd-lineup" className={styles.sectionTitle}>
            The <span className="goldText">halftime show</span> lineup
          </h2>
          <p className={styles.lineupIntro}>
            The first-ever FIFA World Cup Final halftime show — 19 July 2026 at MetLife
            Stadium, produced by Global Citizen. Shakira &amp; Burna Boy perform “Dai Dai”
            on a bill of global superstars.
          </p>
          <ul className={styles.lineupGrid}>
            {lineup.map((a) => (
              <li key={a.name} className={`${styles.lineupCard} ${a.headliner ? styles.lineupHeadliner : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.lineupPhoto} src={a.img} alt={a.name} width={128} height={128} loading="lazy" />
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

        <section className={styles.byNumbers} aria-labelledby="dd-numbers">
          <h2 id="dd-numbers" className={styles.sectionTitle}>
            Dai Dai <span className="goldText">by the numbers</span>
          </h2>
          <div className={styles.numGrid}>
            {byNumbers.map((n) => (
              <div key={n.l} className={styles.numCard}>
                <span className={styles.numValue}>{n.v}</span>
                <span className={styles.numLabel}>{n.l}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="dd-faq">
          <h2 id="dd-faq" className={styles.sectionTitle}>
            Frequently asked <span className="goldText">questions</span>
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

      <KeepExploring current="/dai-dai" />
    </main>
  );
}
