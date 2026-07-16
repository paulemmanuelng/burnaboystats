import Link from "next/link";
import styles from "./dai-dai.module.css";
import DaiDaiStory from "../components/DaiDaiStory";
import KeepExploring from "../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { numberOnes } from "../data/charts";
import { certHistory } from "../data/certifications";
import { monthlyListenersSeries, monthlyListenersValues } from "../data/trends";

const certs2026 = certHistory.filter((e) => e.year === 2026).length;
const listenersPeak = `${monthlyListenersSeries[monthlyListenersSeries.length - 1].value}M`;

export const metadata = pageMetadata({
  title: "The Dai Dai Story — How Burna Boy & Shakira's World Cup Song Conquered 2026",
  description:
    "The story of “Dai Dai”, Shakira and Burna Boy's 2026 FIFA World Cup anthem: from launch to No. 1 on the Billboard Global 200 — the first African artist ever — to the biggest song in the world, told through the numbers.",
  path: "/dai-dai",
  shareTitle: "The Dai Dai Story",
  shareDescription: "How Burna Boy & Shakira's World Cup anthem became the biggest song in the world.",
});

export default function DaiDaiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Dai Dai Story — How Burna Boy & Shakira's World Cup Song Conquered 2026",
    description:
      "The story of “Dai Dai”, the 2026 FIFA World Cup anthem by Shakira and Burna Boy, told through its record-breaking chart, streaming and certification run.",
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
          How Shakira &amp; Burna Boy&apos;s 2026 World Cup anthem became the biggest song
          in the world — told through the numbers. Scroll to follow the run.
        </p>
      </header>

      <div className="container">
        <DaiDaiStory
          numberOnes={numberOnes}
          listenersPeak={listenersPeak}
          listenersSeries={monthlyListenersValues}
          certs2026={certs2026}
        />

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
