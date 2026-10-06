import Link from "next/link";
import styles from "./curator.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import MobileCurator from "../components/MobileCurator";
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
// sameAs wants profiles that corroborate the person, not just reach him. The
// contact route stays X — see "Reach me" below.
const LINKEDIN = "https://www.linkedin.com/in/paulemmanuelng";
// Same handle as X, and already linked from the site footer — it belongs in
// sameAs on the same grounds as the other two: it corroborates the person.
const TIKTOK = "https://www.tiktok.com/@paulemmanuelng";
// The site is built in the open and never said so. Every figure here has a
// commit behind it saying what changed and why, which is a stronger claim to
// rigour than any sentence on this page — and it was invisible.
const REPO = "https://github.com/paulemmanuelng/burnaboystats";

// First person throughout — this page is the curator speaking, not the site
// describing him in the third person.
//
// Every sentence lives here once and both layouts print it: the phone screen
// (MobileCurator) and the desktop column below are separate designs, but they
// carry the same words, so a sentence cannot drift between them.

// The page is titled "About the Curator" and used to open on the site's
// purpose, so a reader left knowing the method and nothing about the person.
// This answers the title first. Deliberately kept to what bears on whether the
// data can be trusted — no location beyond the country, no date of birth,
// nothing a private individual shouldn't publish.
const WHO_I_AM =
  "I'm Nigerian, based in the UK, and I've been deep in the music for years — following the releases, the charts and the run-ups long before I ever thought about building a site about them. The rest is the part that made this possible: I work with data and reporting, so checking a number against the source it came from is habit rather than effort, and I write the code, do the research and maintain every page here myself.";

// "Why this site exists" (design response item 45, 30 Sep 2026): the five
// figures that sat mid-sentence are a figure strip now. The sentence ends on
// "Today it tracks:", the strip follows, and the closing clause is its own
// line. Every figure is read off the data, never typed.
const WHY_INTRO =
  "Burna Boy is the most-certified artist Africa has ever produced, but his numbers lived scattered across fan threads, press write-ups and screenshots — often unsourced, often contradicting each other. I kept seeing the same figures repeated with nobody checking them, so in June 2026 I started building the careful home those numbers deserved. Today it tracks:";
const WHY_CLOSE = "Every figure is traced to the body that owns it.";
const tracks = [
  { value: totalAwards(), label: "Certifications" },
  { value: countryCount, label: "Countries certifying" },
  { value: chartEntryCount, label: "Official chart entries" },
  { value: numberOnes, label: "No. 1s" },
  { value: totalWins, label: "Award wins" },
];

// "How I work" (items 46 and 70): the one long paragraph is an intro line, one
// row per kind of figure saying which source wins, then the closing prose.
// Nothing in it is dropped. The certification row keeps the owner-ruled phrase
// word for word (tests/ownerRulings.test.tsx), and "Spotify never publishes
// it" moves into the career-total row.
const HOW_INTRO =
  "Nothing goes up unverified (the methodology page sets the method out). For each kind of figure, one source wins:";
const sources = [
  {
    kind: "Certification",
    source:
      "The certifying body's own database (or, in a market with no current public register, on the label's own plaque).",
  },
  { kind: "Chart peak", source: "The chart's owner, when it publishes it." },
  {
    kind: "Streaming figure",
    source: "The platform's own screen, where it publishes one: monthly listeners, followers, per-track counts.",
  },
  {
    kind: "Career total",
    source: "kworb's per-track sum, anchored on a dated ChartMasters read. Spotify never publishes it.",
  },
];

const INDEPENDENCE =
  "This is a fan-made project with no affiliation to Burna Boy, his team or any label — no sponsorship, no advertising, no commercial reason to inflate anything. I built and maintain it alone: the research, the verification, the data and the site itself.";
const USE_THE_DATA =
  "Everything here is free to use with attribution. The open API serves the verified dataset as JSON under a CC BY 4.0 license, the stat cards are made to be shared, and the press kit has everything a writer or fan page needs to cite a figure properly.";

/** The close of "How I work". `link` is the layout's own class for a link in
 *  running prose; "methodology page" and "updates feed" are links now (item
 *  70). */
const howClose = (link: string) => (
  <>
    When a fan tally and a primary source disagree, the primary source wins — even when
    the fan number is better. The full standard is on the{" "}
    <Link href="/methodology" className={link}>methodology page</Link>, and every change
    worth noting is logged on the{" "}
    <Link href="/updates" className={link}>updates feed</Link>.
  </>
);

/** "Reach me", its two paragraphs. */
const reachMe = (link: string) => [
  <>
    I&apos;m{" "}
    <a href={X_PERSONAL} rel="noopener" target="_blank" className={link}>
      @paulemmanuelng
    </a>{" "}
    on X — the fastest way to reach me — and{" "}
    <a href={TIKTOK} rel="noopener" target="_blank" className={link}>
      the same handle
    </a>{" "}
    on TikTok. Corrections with a primary source are always
    welcome — the{" "}
    <Link href="/contact" className={link}>contact page</Link> explains what to
    send. Writers and fan pages: the{" "}
    <Link href="/press" className={link}>press &amp; data kit</Link> has
    citation-ready figures, and the{" "}
    <Link href="/methodology" className={link}>methodology</Link> shows how each
    one earned its place.
  </>,
  <>
    The site is open source. Every figure on it has a commit behind it recording
    what changed and why, so if you want to check how a number got here — or when
    it last moved — the whole history is at{" "}
    <a href={REPO} rel="noopener" target="_blank" className={link}>
      github.com/paulemmanuelng/burnaboystats
    </a>.
  </>,
];

export default function CuratorPage() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "About the Curator",
    url: `${CANONICAL_ORIGIN}/curator`,
    // No dateModified: the sitemap deliberately ships no lastmod for this page
    // (tests/sitemapEvidence.test.ts), and the value here was the newest date
    // anywhere in the feed, not a change to this page (debug pass 5 Oct 2026,
    // seo-12). The page still prints when the site's data was last reviewed.
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
      sameAs: [X_PERSONAL, LINKEDIN, TIKTOK],
      nationality: { "@type": "Country", name: "Nigeria" },
      description:
        "Nigerian music follower based in the UK, and the researcher behind Burna Boy Stats — a verified record of Burna Boy's certifications, chart runs, awards and streaming milestones, built and maintained single-handedly since June 2026.",
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

      {/* The phone screen: its own back bar, no masthead and no breadcrumb
          (design response items 42–44). Separate design, same words. */}
      <MobileCurator
        reviewedLabel={reviewedLabel}
        whoIAm={WHO_I_AM}
        whyIntro={WHY_INTRO}
        whyClose={WHY_CLOSE}
        tracks={tracks}
        howIntro={HOW_INTRO}
        sources={sources}
        howClose={howClose}
        independence={INDEPENDENCE}
        useTheData={USE_THE_DATA}
        reachMe={reachMe}
      />

      <div className={styles.desktopOnly}>
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
          <div className={styles.block}>
            <h2 className={styles.h2}>Who I am</h2>
            <p className={styles.p}>{WHO_I_AM}</p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>Why this site exists</h2>
            <p className={styles.p}>{WHY_INTRO}</p>
            {/* Figures at rest, so ink (rule 3). A list: it is five items. */}
            <ul className={styles.strip}>
              {tracks.map((t) => (
                <li key={t.label} className={styles.stripCell}>
                  <span className={styles.stripValue}>{t.value}</span>
                  <span className={styles.stripLabel}>{t.label}</span>
                </li>
              ))}
            </ul>
            <p className={`${styles.p} ${styles.after}`}>{WHY_CLOSE}</p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>How I work</h2>
            <p className={styles.p}>{HOW_INTRO}</p>
            <dl className={styles.sources}>
              {sources.map((r) => (
                <div key={r.kind} className={styles.sourceRow}>
                  <dt className={styles.sourceKind}>{r.kind}</dt>
                  <dd className={styles.sourceText}>{r.source}</dd>
                </div>
              ))}
            </dl>
            <p className={`${styles.p} ${styles.after}`}>{howClose(styles.link)}</p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>Independence</h2>
            <p className={styles.p}>{INDEPENDENCE}</p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.h2}>Use the data</h2>
            <p className={styles.p}>{USE_THE_DATA}</p>
          </div>
        </section>

        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="reach">
          <h2 id="reach" className={styles.h2}>Reach me</h2>
          {/* Item 47: a gap between the two paragraphs (they had none). */}
          {reachMe(styles.link).map((body, i) => (
            <p key={i} className={styles.p}>{body}</p>
          ))}
        </section>
      </div>

      {/* Once, for both layouts: the phone screen draws it as the block
          renders at phone width. This page's own list (links.ts, item 57). */}
      <KeepExploring current="/curator" />
    </main>
  );
}
