import Link from "next/link";
import styles from "./methodology.module.css";
import KeepExploring from "../components/KeepExploring";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileMethodology from "../components/MobileMethodology";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../lib/seo";
import { updates } from "../data/updates";
import { totalAwards, countryCount, COUNTRIES } from "../data/certifications";
import { chartEntryCount, numberOnes, chartSourceSplit, chartCountryCount } from "../data/charts";
import { ceremonyCount } from "../data/awards";
import { tours } from "../data/tours";

export const metadata = pageMetadata({
  title: "Methodology — How Burna Boy Stats Verifies Every Number",
  description:
    "How every figure here is sourced, verified and kept current — the primary sources we use, how we resolve conflicts, and how to report a correction.",
  path: "/methodology",
  shareTitle: "Methodology & Sources",
  shareDescription: "How Burna Boy Stats sources, verifies and updates every number.",
});

// Human-readable "last reviewed" date, driven by the newest logged update so it
// stays honest without a hand-maintained date.
const lastReviewed = updates
  .map((u) => u.date)
  .sort()
  .at(-1)!;
const reviewedLabel = new Date(`${lastReviewed}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// Primary sources, grouped by what they verify. Deliberately names the chart
// bodies and databases so readers (and search engines) can see the numbers are
// traceable to authoritative origins, not blogs or aggregators.
const sources = [
  {
    area: "Certifications",
    count: String(countryCount),
    tag: "RIAA · BPI · SNEP · BVMI",
    detail:
      "Official certification databases of each market — the RIAA (US), BPI (UK), SNEP (France), BVMI (Germany), CAPIF (Argentina) and others. A certification is only counted once it appears in the awarding body's own searchable database.",
  },
  {
    area: "Charts",
    count: String(chartCountryCount),
    tag: `${chartSourceSplit.nationalBody} national · ${chartSourceSplit.billboardCountry} Billboard country · ${chartSourceSplit.global} global`,
    detail:
      `The chart body that owns each chart, read from its official run and never from a third-party summary. ${chartSourceSplit.nationalBody} of the tracked charts are the national industry body's own — the Official Charts Company (UK), SNEP (France), GfK (Germany), FIMI (Italy), PROMUSICAE (Spain), ZPAV (Poland), TurnTable (Nigeria) and their equivalents. ${chartSourceSplit.billboardCountry} are Billboard country charts, used only where a territory has no national body chart of its own — including the US and Canada, where Billboard's is the chart of record. The remaining ${chartSourceSplit.global} are Billboard's two worldwide charts. Where a country does publish an official chart, that chart wins.`,
  },
  {
    area: "Streaming",
    count: "live",
    tag: "Spotify · YouTube · in-app figures",
    detail:
      "Spotify and YouTube's own in-app figures for monthly listeners, followers and view counts, cross-checked against the platforms directly. Fast-moving totals are tracked live and updated as they move, not pulled from a scraper.",
  },
  {
    area: "Awards",
    count: String(ceremonyCount),
    tag: `${ceremonyCount} award bodies`,
    detail:
      "The awarding organisation's official winners and nominees lists — the Recording Academy (Grammys), BET, the BRIT Awards, MOBO, MTV and others — plus contemporaneous reporting from established outlets for the ceremony itself.",
  },
  {
    area: "Tours & live",
    count: String(tours.length),
    tag: "Boxscore · Pollstar · venue capacities",
    detail:
      "Box-office and attendance figures from Billboard Boxscore and Pollstar where available, verified venue capacities, and primary reporting for one-off shows and festival billings.",
  },
];

// The band under the hero — what the standard below is applied to.
const counts = [
  { value: String(totalAwards()), label: "Certifications tracked" },
  { value: String(countryCount), label: "Certifying countries" },
  { value: String(chartEntryCount), label: "Chart entries" },
  { value: String(numberOnes), label: "Worldwide No. 1s" },
];

// Certifying bodies the site actually cites AND whose register has a confirmed
// link. Derived from COUNTRIES so it cannot list a body no plaque here came
// from, and cannot miss one that gains a URL later.
const certBodies = (() => {
  const byBody = new Map<string, { body: string; url: string; flags: string; where: string }>();
  for (const [, c] of Object.entries(COUNTRIES)) {
    if (!c.url) continue;
    const e = byBody.get(c.body);
    if (e) {
      e.flags += ` ${c.flag}`;
      e.where += `, ${c.name}`;
    } else {
      byBody.set(c.body, { body: c.body, url: c.url, flags: c.flag, where: c.name });
    }
  }
  return [...byBody.values()].sort((a, b) => a.body.localeCompare(b.body));
})();

const principles = [
  {
    h: "Primary sources, not summaries",
    p: "A number is verified against the body that owns it — the chart's official run, the certifying database, the platform's own screen. Search-result snippets and news write-ups go stale and often quote the wrong chart (Global 200 vs Global 200 Excl. US, for example), so an official chart body's own card or database always wins over a summary that paraphrases it.",
  },
  {
    h: "Nothing goes up unverified",
    p: "If a claim can't be traced to a primary source, it doesn't appear as fact. Where something is credible but not yet confirmed, it's labelled as such (for example, cars in the collection marked “unconfirmed”) rather than stated flatly.",
  },
  {
    h: "The right metric, precisely",
    p: `Similar-sounding figures are kept distinct — chart entries versus peaks, worldwide charts versus US-inclusive ones, and “No. 1s” counted as the number of times a song reached the top spot, not the number of songs released. Today the site tracks ${chartEntryCount} chart entries, ${numberOnes} worldwide No. 1s and ${totalAwards()} certifications across ${countryCount} countries.`,
  },
  {
    h: "Conflicts resolve to the source of record",
    p: "When two sources disagree, the one that owns the data wins: SNEP for the French chart, Billboard for the Global 200, the RIAA for US certifications. A louder or more recent headline doesn't override the official record.",
  },
];

// The closing sections, in the design's tightened mobile wording. The desktop
// blocks below carry the fuller version plus their onward links; screen 22
// draws heading and paragraph only.
const closingSections = [
  {
    h: "How often it's updated",
    p: "Fast-moving streaming figures are tracked live and updated as they move. Slower records — certifications, chart peaks, awards — are updated as each milestone is confirmed. Every change worth noting is logged on the updates feed.",
  },
  {
    h: "Spotted something wrong?",
    p: "Accuracy matters more than being first. Send the primary source — an official chart card, a certification database entry, a platform screenshot — via the contact page. Verified corrections are applied quickly and noted on the feed.",
  },
  {
    h: "Independence",
    p: "A fan-made, portfolio project with no affiliation to Burna Boy or his team, no sponsorship and no advertising. There is no commercial incentive to inflate a number.",
  },
];

export default function MethodologyPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Methodology & Sources",
    description:
      "How every figure on Burna Boy Stats is sourced, verified and kept current.",
    url: `${CANONICAL_ORIGIN}/methodology`,
    dateModified: asDateTime(lastReviewed),
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: { "@type": "MusicGroup", name: "Burna Boy" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
  };

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Mobile is screen 22 — three stacked blocks of prose, not a row list.
          It used to be five rows with a value column, which is the one shape
          this content cannot take. No badge and no stat strip: the design gives
          neither, because nothing on this screen is a figure. */}
      <MobileMethodology
        lede="Every number here is meant to be trusted — so here is exactly where the figures come from, how they're checked, and how often they're refreshed."
        reviewedLabel={reviewedLabel}
        principles={principles}
        sources={sources}
        sections={closingSections}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/methodology" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.heroPad}`}>
          <div className={styles.kicker}>The standard every figure is held to</div>
          <h1 className={styles.h1}>
            Methodology &amp; <span className="inkText">Sources</span>
          </h1>
          <p className={styles.lede}>
            Every number here is meant to be trusted — so here is exactly where the figures
            come from, how they&apos;re checked, and how often they&apos;re refreshed.
          </p>
          <p className={styles.intro}>
            Burna Boy Stats is an independent, unofficial site that tracks Burna Boy&apos;s
            certifications, charts, streaming and career records. It runs on curated data,
            and the value of that data is only as good as its sourcing.
          </p>
          <p className={styles.reviewed}>
            <span className={styles.reviewedDot} aria-hidden="true" />
            Data last reviewed <strong>{reviewedLabel}</strong>
          </p>
        </section>

        {/* ── What the standard covers ───────────────────────── */}
        <section className={`${styles.wrap} ${styles.countsPad}`}>
          <div className={styles.counts}>
            {counts.map((c) => (
              <div key={c.label} className={styles.count}>
                <div className={styles.countValue}>{c.value}</div>
                <div className={styles.countLabel}>{c.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── The four rules ─────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="principles">
          <div className={styles.eyebrow}>Four rules</div>
          <h2 id="principles" className={styles.h2}>How a figure gets verified</h2>
          <div className={styles.principleGrid}>
            {principles.map((pr, i) => (
              <div key={pr.h} className={styles.principle}>
                <div className={styles.principleHead}>
                  <span className={styles.principleNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.principleH}>{pr.h}</h3>
                </div>
                <p className={styles.principleP}>{pr.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Primary sources ────────────────────────────────── */}
        {/* The registers themselves, and the one thing a plaque count hides.
            The site names these bodies on nearly every figure and linked none
            of them, which is an odd gap on a page whose claim is that each
            number is traced to whoever awarded it. Only bodies whose page has
            been opened and confirmed are listed — a dead link to a primary
            source is worse than no link. */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="registers">
          <div className={styles.eyebrow}>The registers</div>
          <h2 id="registers" className={styles.h2}>Who awards a plaque, and what it means</h2>
          <p className={styles.p}>
            A certification is awarded by one country&apos;s industry body against that
            body&apos;s own threshold, and the thresholds are not the same. A tier is a
            statement about one market, not a common unit — so the totals on this
            site count <strong>plaques</strong>, and a plaque count is never a sales
            figure. The clearest example is on this site already: &ldquo;Dai Dai&rdquo; holds
            2× Platinum from the RIAA&apos;s <em>Latin</em> programme, which certifies at
            120,000 units, while a standard RIAA Platinum is 1,000,000 — the same two
            words meaning roughly a sixteenth as much. Never add tiers across
            programmes and read the result as scale.
          </p>
          <ul className={styles.registerList}>
            {certBodies.map((b) => (
              <li key={b.body} className={styles.registerRow}>
                <span className={styles.registerFlag} aria-hidden="true">{b.flags}</span>
                <a href={b.url} target="_blank" rel="noopener noreferrer" className={styles.registerLink}>
                  {b.body}
                </a>
                <span className={styles.registerWhere}>{b.where}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="sources">
          <div className={styles.eyebrow}>Primary sources</div>
          <h2 id="sources" className={styles.h2}>Where the numbers come from</h2>
          <dl className={styles.sourceList}>
            {sources.map((s) => (
              <div key={s.area} className={styles.sourceRow}>
                <div>
                  <dt className={styles.sourceArea}>{s.area}</dt>
                  <div className={styles.sourceTag}>{s.tag}</div>
                </div>
                <dd className={styles.sourceDetail}>{s.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Closing blocks ─────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.blocks}>
            <div className={styles.block}>
              <h2 className={styles.blockH}>How often it&apos;s updated</h2>
              <p className={styles.blockP}>
                Fast-moving streaming figures — Spotify monthly listeners, follower counts,
                YouTube views — are tracked live and updated as they move. Slower records
                such as certifications, chart peaks and awards are updated as each new
                milestone is confirmed. Every change worth noting is logged on the Latest
                Updates feed, so you can always see what changed and when.
              </p>
              <div className={styles.blockLinks}>
                <Link href="/updates" className={styles.blockLink}>Latest updates →</Link>
                <a href="/rss.xml" className={styles.blockLink}>RSS feed →</a>
              </div>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockH}>Spotted something wrong?</h2>
              <p className={styles.blockP}>
                Accuracy matters more than being first. If a figure looks off — or a new
                milestone has been reached — send the primary source (an official chart
                card, a certification database entry, a platform screenshot) via the contact
                page. Verified corrections are applied quickly and noted on the updates
                feed.
              </p>
              <div className={styles.blockLinks}>
                <Link href="/contact" className={styles.blockLink}>Contact →</Link>
                <Link href="/faq" className={styles.blockLink}>FAQ →</Link>
              </div>
            </div>

            <div className={`${styles.block} ${styles.blockWide}`}>
              <h2 className={styles.blockH}>Independence</h2>
              <p className={styles.blockP}>
                This is a fan-made, portfolio project with no affiliation to Burna Boy or
                his team, no sponsorship and no advertising. There&apos;s no commercial
                incentive to inflate a number — the only goal is to be the most accurate
                Burna Boy stats resource on the web.
              </p>
              <div className={styles.blockLinks}>
                <Link href="/about" className={styles.blockLink}>About this project →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Onward ─────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.pills}`}>
          <Link href="/records" className="btn btnSecondary">← Career records</Link>
          <Link href="/analysis" className="btn btnPrimary">What the numbers say ↗</Link>
          <Link href="/api" className="btn btnSecondary">Open data API ↗</Link>
        </section>

        <KeepExploring current="/methodology" />
      </div>
    </main>
  );
}
