import Link from "next/link";
import styles from "./dai-dai.module.css";
import DaiDaiStory from "../components/DaiDaiStory";
import KeepExploring from "../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { daiDaiNumberOnes } from "../data/charts";
import { daiDaiCertCount } from "../data/certifications";

export const metadata = pageMetadata({
  title: "Dai Dai at the World Cup Halftime Show — Shakira & Burna Boy's 2026 Anthem",
  description:
    "Shakira and Burna Boy perform “Dai Dai” at the 2026 FIFA World Cup Final halftime show this weekend — joined by Uganda's Triplets Ghetto Kids, alongside Madonna and BTS. The full story of the World Cup anthem that hit No. 1 on the Billboard Global 200 and became the biggest song in the world.",
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
        { "@type": "MusicGroup", name: "Burna Boy" },
        { "@type": "Person", name: "Shakira" },
      ],
    },
    url: `${CANONICAL_ORIGIN}/dai-dai`,
  };

  // Every headline "Dai Dai" figure in one scannable, crawlable block — the
  // song's OWN numbers (not Burna Boy's artist-wide totals).
  const byNumbers: { v: string; l: string }[] = [
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
      a: "Shakira and Burna Boy perform “Dai Dai” at the 2026 FIFA World Cup Final halftime show on 19 July 2026 at MetLife Stadium, joined on stage by Uganda's Triplets Ghetto Kids, alongside co-headliners Madonna and BTS.",
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

      <header className="pageHeader container">
        <h1>
          The <span className="accent">Dai Dai</span> Story
        </h1>
        <p>
          How Shakira &amp; Burna Boy&apos;s 2026 World Cup anthem became the biggest
          song in the world — and lands on the Final halftime stage this weekend.
          Scroll to follow the run.
        </p>
      </header>

      <div className="container">
        <DaiDaiStory daiDaiNo1s={daiDaiNumberOnes} daiDaiCerts={daiDaiCertCount} />

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
