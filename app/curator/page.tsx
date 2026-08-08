import Link from "next/link";
import styles from "./curator.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME } from "../lib/seo";
import { totalAwards, countryCount } from "../data/certifications";
import { chartEntryCount, numberOnes } from "../data/charts";
import { totalWins } from "../data/awards";
import { updates } from "../data/updates";

export const metadata = pageMetadata({
  title: "About the Curator — Who Runs Burna Boy Stats",
  description:
    "Burna Boy Stats is researched, verified and maintained by one person: Ukpaka Emmanuel. Who he is, why the site exists, and how to reach him.",
  path: "/curator",
  shareTitle: "About the Curator",
  shareDescription: "The one person who researches, verifies and maintains every figure on Burna Boy Stats.",
});

// The same honest freshness signal the methodology page uses: driven by the
// newest logged update, never a hand-maintained date.
const lastReviewed = updates
  .map((u) => u.date)
  .sort()
  .at(-1)!;
const reviewedLabel = new Date(`${lastReviewed}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const X_PERSONAL = "https://x.com/paulemmanuelng";

// First person throughout — this page is the curator speaking, not the site
// describing him in the third person.
const sections = [
  {
    h: "Why this site exists",
    p: `Burna Boy is the most decorated artist Africa has ever produced, but his numbers lived scattered across fan threads, press write-ups and screenshots — often unsourced, often contradicting each other. I built Burna Boy Stats to be the careful home those numbers deserve: today it tracks ${totalAwards()} certifications across ${countryCount} countries, ${chartEntryCount} official chart entries with ${numberOnes} No. 1s, and ${totalWins} award wins — every figure traced to the body that owns it.`,
  },
  {
    h: "How I work",
    p: "Nothing goes up unverified. A certification is counted when it appears in the certifying body's own database, a chart peak when the chart's owner publishes it, a streaming figure from the platform's own screen. When a fan tally and a primary source disagree, the primary source wins — even when the fan number is better. The full standard is on the methodology page, and every change worth noting is logged on the updates feed.",
  },
  {
    h: "Independence",
    p: "This is a fan-made project with no affiliation to Burna Boy, his team or any label — no sponsorship, no advertising, no commercial reason to inflate anything. I built and maintain it alone: the research, the verification, the data and the site itself.",
  },
  {
    h: "Use the data",
    p: "Everything here is free to use with attribution. The open API serves the verified dataset as JSON under a CC BY 4.0 license, the stat cards are made to be shared, and the press kit has everything a writer or fan page needs to cite a figure properly.",
  },
];

export default function CuratorPage() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "About the Curator",
    url: `${CANONICAL_ORIGIN}/curator`,
    dateModified: lastReviewed,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: CANONICAL_ORIGIN },
    mainEntity: {
      "@type": "Person",
      name: "Ukpaka Emmanuel",
      alternateName: "Paul Emmanuel",
      url: `${CANONICAL_ORIGIN}/curator`,
      sameAs: [X_PERSONAL],
      knowsAbout: ["Burna Boy", "Afrobeats", "music charts", "music certifications", "streaming data"],
      affiliation: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    },
  };

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <BreadcrumbBar path="/curator" />

      <section className={`${styles.wrap} ${styles.heroPad}`}>
        <div className={styles.kicker}>The person behind the numbers</div>
        <h1 className={styles.h1}>
          About the <span className="inkText">Curator</span>
        </h1>
        <p className={styles.lede}>
          I&apos;m <strong>Ukpaka Emmanuel</strong> — Paul, on X — and Burna Boy Stats is
          researched, verified and maintained by me, one figure at a time.
        </p>
        <p className={styles.reviewed}>
          <span className={styles.reviewedDot} aria-hidden="true" />
          Data last reviewed <strong>{reviewedLabel}</strong>
        </p>
      </section>

      <section className={`${styles.wrap} ${styles.sectionPad}`}>
        {sections.map((s) => (
          <div key={s.h} className={styles.block}>
            <h2 className={styles.h2}>{s.h}</h2>
            <p className={styles.p}>{s.p}</p>
          </div>
        ))}
      </section>

      <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="reach">
        <h2 id="reach" className={styles.h2}>Reach me</h2>
        <p className={styles.p}>
          I&apos;m{" "}
          <a href={X_PERSONAL} rel="noopener" target="_blank" className={styles.link}>
            @paulemmanuelng
          </a>{" "}
          on X — the fastest way to reach me. Corrections with a primary source are always
          welcome — the{" "}
          <Link href="/contact" className={styles.link}>contact page</Link> explains what to
          send. Writers and fan pages: the{" "}
          <Link href="/press" className={styles.link}>press &amp; data kit</Link> has
          citation-ready figures, and the{" "}
          <Link href="/methodology" className={styles.link}>methodology</Link> shows how each
          one earned its place.
        </p>
      </section>

      <KeepExploring current="/curator" />
    </main>
  );
}
