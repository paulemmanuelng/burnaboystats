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
    "Shakira and Burna Boy perform “Dai Dai” at the 2026 FIFA World Cup Final halftime show this weekend, alongside Madonna, BTS, Justin Bieber and Coldplay. The full story of the World Cup anthem that hit No. 1 on the Billboard Global 200 and became the biggest song in the world.",
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

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

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

        <section className={styles.outro}>
          <p className={styles.outroLead}>
            One song, a world record, and an African artist at No. 1 on the planet&apos;s
            biggest charts. Dig into the data behind the run:
          </p>
          <div className={styles.outroLinks}>
            <Link href="/records/charts" className="btn btnPrimary">Every chart position ↗</Link>
            <Link href="/records/africas-biggest" className="btn btnSecondary">Africa&apos;s biggest ↗</Link>
            <Link href="/updates" className="btn btnSecondary">Latest updates ↗</Link>
          </div>
        </section>
      </div>

      <KeepExploring current="/dai-dai" />
    </main>
  );
}
