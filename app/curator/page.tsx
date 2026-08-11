import Link from "next/link";
import styles from "./curator.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../lib/seo";
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
// sameAs wants profiles that corroborate the person, not just reach him. The
// contact route stays X — see "Reach me" below.
const LINKEDIN = "https://www.linkedin.com/in/paulemmanuelng";

// First person throughout — this page is the curator speaking, not the site
// describing him in the third person.
const sections = [
  {
    // The page is titled "About the Curator" and used to open on the site's
    // purpose, so a reader left knowing the method and nothing about the
    // person. This answers the title first. Deliberately kept to what bears on
    // whether the data can be trusted — no location beyond the country, no
    // date of birth, nothing a private individual shouldn't publish.
    h: "Who I am",
    p: "I'm Nigerian, based in the UK, and I manage programmes for a living — five years of delivery and reporting on technology projects, most recently as regional programme lead at the Starknet Foundation, running 23 events across Nigeria, Kenya, Rwanda and Ghana. Before that I ran client workstreams at Hype, tracking performance and reporting it to stakeholders every cycle. It's work that lives or dies on whether the number you report can be traced back to something real. I'm currently reading for an MSc in Project Management at the University of Chester.",
  },
  {
    h: "Why this site exists",
    p: `I've followed African music closely for years — long before this site — and kept watching the same figures repeated across fan threads, press write-ups and screenshots, often unsourced, often contradicting each other. Burna Boy is the most decorated artist Africa has ever produced and his numbers deserved better than that. I started building this in June 2026: today it tracks ${totalAwards()} certifications across ${countryCount} countries, ${chartEntryCount} official chart entries with ${numberOnes} No. 1s, and ${totalWins} award wins — every figure traced to the body that owns it. It's the reporting discipline from my day job, pointed at something I actually care about.`,
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
    dateModified: asDateTime(lastReviewed),
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: CANONICAL_ORIGIN },
    // knowsAbout used to assert expertise the page never evidenced. The bio
    // above now carries it, and these fields say the same thing in markup.
    // Nothing here that isn't already public on his own profiles, and nothing
    // finer-grained than the country.
    mainEntity: {
      "@type": "Person",
      name: "Ukpaka Emmanuel",
      alternateName: "Paul Emmanuel",
      url: `${CANONICAL_ORIGIN}/curator`,
      sameAs: [X_PERSONAL, LINKEDIN],
      jobTitle: "Programme and project manager",
      nationality: { "@type": "Country", name: "Nigeria" },
      description:
        "Nigerian programme and project manager based in the UK, and the researcher behind Burna Boy Stats — a verified record of Burna Boy's certifications, chart runs, awards and streaming milestones, maintained single-handedly since June 2026.",
      alumniOf: { "@type": "CollegeOrUniversity", name: "University of Chester" },
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
