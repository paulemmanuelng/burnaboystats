import Link from "next/link";
import { CERT_THRESHOLDS, CERT_PROGRAMS } from "../data/certThresholds";
import { unsourcedBodies, disputedCounts, correctionsMade } from "../data/rejectedClaims";
import styles from "./methodology.module.css";
import KeepExploring from "../components/KeepExploring";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileMethodology from "../components/MobileMethodology";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../lib/seo";
import { updates } from "../data/updates";
import { totalAwards, countryCount, COUNTRIES, allItems } from "../data/certifications";
import { afrobeatsArtists, countryMeta } from "../data/afrobeats";
import { chartEntryCount, numberOnes, chartSourceSplit, chartCountryCount } from "../data/charts";
import { ceremonyCount } from "../data/awards";
import { tours } from "../data/tours";
import { CAREER_STREAMS_ANCHOR_READ_ON } from "../data/streamingTotals";
import { numberWord } from "../lib/homeData";

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

// The career-streams anchor's last ChartMasters read — one constant, so the
// date cannot fall behind the reads again (it said 17 September on 24 Sep).
const anchorReadLabel = new Date(`${CAREER_STREAMS_ANCHOR_READ_ON}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
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
      "Official certification databases of each market — the RIAA (US), BPI (UK), SNEP (France), BVMI (Germany), FIMI (Italy) and others. A certification is only counted once it appears in the awarding body's own searchable database.",
  },
  {
    area: "Charts",
    count: String(chartCountryCount),
    // The airplay/monitor figure is stated because it used to be hidden inside
    // the "national" one: every carve-out chart — Monitor Latino, TopHit,
    // Radiomonitor, Ipsos, BMAT — was published here as a national industry
    // body's own. See chartSourceSplit in data/charts.ts.
    tag: `${chartSourceSplit.nationalBody} national · ${chartSourceSplit.airplayMonitor} airplay/monitor · ${chartSourceSplit.billboardCountry} Billboard country · ${chartSourceSplit.global} global`,
    detail:
      `The chart body that owns each chart, read from its official run and never from a third-party summary. ${chartSourceSplit.nationalBody} of the tracked charts are the national industry body's own — the Official Charts Company (UK), SNEP (France), GfK (Germany), FIMI (Italy), PROMUSICAE (Spain), ZPAV (Poland), TurnTable (Nigeria) and their equivalents. ${chartSourceSplit.airplayMonitor} are airplay or broadcast-monitor charts — Monitor Latino, TopHit, Radiomonitor, Ipsos, BMAT, PROPHON — and count only where the country publishes no other national chart at all. ${chartSourceSplit.billboardCountry} are Billboard country charts, used only where a territory has no national body chart of its own — including the US and Canada, where Billboard's is the chart of record. The remaining ${chartSourceSplit.global} are Billboard's two worldwide charts. Where a country does publish an official non-airplay chart, that chart wins.`,
  },
  {
    area: "Streaming",
    count: "live",
    tag: "Spotify · YouTube · in-app figures",
    detail:
      `Spotify and YouTube's own in-app figures for monthly listeners, followers and view counts, cross-checked against the platforms directly. The one figure Spotify never publishes — a career stream total — is built from its per-track counts: kworb's mirror of them, summed daily, anchored to a dated read of ChartMasters' Playcounts Tool (last ${anchorReadLabel}), the method streamingTotals.ts documents.`,
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
// Every body behind a certification ANYWHERE on the site — Burna Boy's ledger
// and the Afrobeats Board both. Mexico is board-only (AMPROFON certifies three
// board plaques and none of Burna's, so it is not in COUNTRIES), and building
// this list from COUNTRIES alone left AMPROFON off the page altogether.
//
// A body with no register URL used to be skipped outright by `if (!c.url)
// continue`. That is how Greece, Czechia and Slovakia came to be invisible here
// rather than listed without a link: the section looked complete while three
// registers were missing from it. Nothing is dropped now — a body with no
// register renders as plain text and says so.
const certBodies = (() => {
  const codes = new Set<string>();
  for (const item of allItems) for (const c of item.certs) codes.add(c.c);
  for (const a of afrobeatsArtists) for (const r of a.releases) for (const c of r.certs) codes.add(c.c);

  const byBody = new Map<string, { body: string; url?: string; flags: string; where: string }>();
  for (const code of [...codes].sort()) {
    const c: { name: string; flag: string; body: string; url?: string } = COUNTRIES[code] ?? countryMeta(code);
    const e = byBody.get(c.body);
    if (e) {
      e.flags += ` ${c.flag}`;
      e.where += `, ${c.name}`;
      e.url ??= c.url;
    } else {
      byBody.set(c.body, { body: c.body, url: c.url, flags: c.flag, where: c.name });
    }
  }
  return [...byBody.values()].sort((a, b) => a.body.localeCompare(b.body));
})();

// The bodies whose SINGLE threshold cannot be priced at any ratio. Typed, this
// sentence said "Greece, Belgium, Colombia and the rest" while Belgium's
// thresholds had been found at Ultratop and priced on 10 Sep 2026. Greece left
// the list on 20 Sep 2026, priced at IFPI's June 2013 level and marked ¶
// (`historicBodies` below) — which is when the verb had to start agreeing with
// a one-name list — and Poland, which this sentence used to name separately,
// on 23 Sep 2026, when its złoty were divided by ZPAV's own 2 zł a single.
const unpricedSingleNames = (() => {
  const names = Object.values(CERT_THRESHOLDS)
    .filter((c) => c.single === null)
    .map((c) => countryMeta(c.code).name)
    .sort();
  return names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : (names[0] ?? "");
})();
const unpricedSingleVerb =
  Object.values(CERT_THRESHOLDS).filter((c) => c.single === null).length === 1 ? "publishes" : "publish";

const principles = [
  {
    h: "Primary sources, not summaries",
    p: "A number is verified against the body that owns it — the chart's official run, the certifying database, the platform's own screen or, where the platform publishes no figure, a named and dated tracker method. Search-result snippets and news write-ups go stale and often quote the wrong chart (Global 200 vs Global 200 Excl. US, for example), so an official chart body's own card or database always wins over a summary that paraphrases it.",
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
    h: "A plaque is not a chart entry",
    p: "A certification counts units sold or streamed across a release's whole life; a chart entry counts one week against everything else out that week. A song can clear a certification threshold without ever entering a country's principal chart, so the two are never merged and a plaque is never promoted into a placing. Davido's “Blow My Mind” and “Risky” are the clearest case: both appear on the UK's Official Video Streaming Chart, and neither has ever entered the Official Singles Chart. A component chart is not the chart, and reading one as the other is the most common way these tallies inflate.",
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
    h: "When a source shows less than it awarded",
    p: "A register can publish fewer awards than it has issued, and absence from one is not evidence against it. Nigeria is the sharpest case: TurnTable's public certification page serves a hard cap of 500 rows, and currently no Silver awards at all — for any artist. This site reads that same register's own archived captures alongside the live page, so its Nigerian counts run higher than TurnTable's site shows today. Nothing is inferred: it is the same register, read further back. Open the capture below and search an artist's name to check any figure yourself.",
    href: "https://web.archive.org/web/20260221224010/https://turntablecharts.com/certification",
    linkLabel: "TurnTable's register, Feb 2026 capture",
  },
  {
    h: "Independence",
    p: "A fan-made, portfolio project with no affiliation to Burna Boy or his team, no sponsorship and no advertising. There is no commercial incentive to inflate a number.",
  },
];

const allBodies = Object.keys(CERT_THRESHOLDS).length;
const TIERS = ["silver", "gold", "platinum", "diamond"] as const;
const fmtUnits = (n: number | null | undefined) => (n == null ? "—" : n.toLocaleString("en-GB"));
/** "IFPI Austria (Verband …)" → "IFPI Austria"; "BRMA — Belgian …" → "BRMA". */
const shortBody = (b: string) => b.split(" (")[0].split(" — ")[0];
const raisedBodies = Object.values(CERT_THRESHOLDS)
  .filter((c) => c.vintage)
  .sort((x, y) => countryMeta(x.code).name.localeCompare(countryMeta(y.code).name));
/** Bodies priced at the last level ever published for them, not a current one — the ¶ mark (Greece, 20 Sep 2026). */
// Two kinds of ¶ (see `historic` in certThresholds.ts): a body with no current
// LEVEL, priced at the last one ever published (Greece, IFPI June 2013), and a
// body whose current level is in złoty with no RATE, divided by the złoty a
// single its own rules last printed (Poland, 2 zł, 23 Sep 2026). The prose
// below says different things about each, so they are derived apart.
const historicBodies = Object.values(CERT_THRESHOLDS)
  .filter((c) => c.historic && !c.plnPerSingle)
  .sort((x, y) => countryMeta(x.code).name.localeCompare(countryMeta(y.code).name));
const historicNames = historicBodies.map((c) => countryMeta(c.code).name);
const plnBodies = Object.values(CERT_THRESHOLDS)
  .filter((c) => c.plnPerSingle)
  .sort((x, y) => countryMeta(x.code).name.localeCompare(countryMeta(y.code).name));
const plnNames = plnBodies.map((c) => countryMeta(c.code).name);
/** Every ¶ body, for the record list and the table's marks. */
const paragraphBodies = [...historicBodies, ...plnBodies].sort((x, y) =>
  countryMeta(x.code).name.localeCompare(countryMeta(y.code).name),
);
const joinNames = (xs: string[]) => (xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);
const thresholdRows = Object.values(CERT_THRESHOLDS)
  .slice()
  .sort((x, y) => countryMeta(x.code).name.localeCompare(countryMeta(y.code).name));
const movedBodies = Object.values(CERT_THRESHOLDS).filter((c) => c.floor).length;
const pricedSingles = Object.values(CERT_THRESHOLDS).filter((c) => c.single !== null).length;
const streamBodies = Object.values(CERT_THRESHOLDS).filter((c) => c.singleRaw);
const assumedBodies = streamBodies.filter((c) => c.assumed);

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
        spacer={false}
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
        {/* An accessibility statement, on the methodology page rather than its own
            route: it belongs beside the other statements about how this site is
            built, and a route nobody links reads as compliance theatre. Written
            as what is true today including what is not done, because a statement
            that only claims successes is worth nothing to the person relying on
            it. */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="accessibility">
          <div className={styles.eyebrow}>Accessibility</div>
          <h2 id="accessibility" className={styles.h2}>Who can read this site</h2>
          <p className={styles.p}>
            The target is WCAG 2.1 AA. In practice that means every page works from the
            keyboard alone with a visible focus ring, the interactive parts — search, the
            filters, the tour map — are operable without a mouse, text meets AA contrast
            against the dark ground, images that carry meaning have alt text while
            decorative ones are hidden from screen readers, motion respects
            <code> prefers-reduced-motion</code>, and controls meet the 44px touch
            target — some of them through an extended hit area rather than a larger
            visible box, which is why a few look smaller than they are.
          </p>
          <p className={styles.p}>
            Known gaps, because a statement listing only successes is no use to the person
            relying on it: the world map on the tours page is a visual first and its
            country shapes cannot be reached by keyboard — the same journeys are listed as
            text on the same page, and on a phone the list is what renders. Some data
            tables scroll horizontally on narrow screens. If something here does not work
            for you, the{" "}
            <Link href="/contact" className={styles.link}>contact page</Link> reaches me
            directly and it is worth reporting — it will get fixed.
          </p>
        </section>

        {/* What was checked and NOT published. This lived in comments at the top
            of awards.ts where no reader could see it, and it is the strongest
            evidence of rigour the site has: anyone can publish a big number,
            publishing the ones you refused is the part that is hard to fake.
            It also answers the question an inflated tally raises every few
            months — "why is your count lower" — with a list instead of an
            assertion. */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="rejected">
          <div className={styles.eyebrow}>What did not make it</div>
          <h2 id="rejected" className={styles.h2}>Claims checked and not published</h2>
          <p className={styles.p}>
            Bigger totals for this artist circulate every few months. Each one has been
            walked body by body against the awarding organisation&apos;s own records, and
            what could not be traced is not here. The checks cut both ways —{" "}
            {numberWord(correctionsMade.length).toLowerCase()} of them changed figures on this site.
          </p>

          <h3 className={`${styles.blockH} ${styles.rejectH}`}>No primary source names him</h3>
          <dl className={styles.rejectList}>
            {unsourcedBodies.map((r) => (
              <div key={r.claim} className={styles.rejectRow}>
                <dt className={styles.rejectClaim}>{r.claim}</dt>
                <dd className={styles.rejectReason}>{r.reason}</dd>
              </div>
            ))}
          </dl>

          <h3 className={`${styles.blockH} ${styles.rejectH}`}>Counts that circulate higher than ours</h3>
          <dl className={styles.rejectList}>
            {disputedCounts.map((r) => (
              <div key={r.claim} className={styles.rejectRow}>
                <dt className={styles.rejectClaim}>{r.claim}</dt>
                <dd className={styles.rejectReason}>{r.reason}</dd>
              </div>
            ))}
          </dl>

          <h3 className={`${styles.blockH} ${styles.rejectH}`}>Checks that changed our own figures</h3>
          <dl className={styles.rejectList}>
            {correctionsMade.map((r) => (
              <div key={r.claim} className={styles.rejectRow}>
                <dt className={styles.rejectClaim}>{r.claim}</dt>
                <dd className={styles.rejectReason}>{r.reason}</dd>
              </div>
            ))}
          </dl>
        </section>

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
            6× Platino from the RIAA&apos;s <em>Latin</em> programme — Premios de Oro y
            Platino, which certifies a Platino at 60,000 units and 6× at 360,000, while a
            standard RIAA Platinum is 1,000,000, sixteen times as much. Every award here is
            printed under the name its own programme gives it, and counted on its own line,
            for exactly that reason. Never add tiers across programmes and read the result
            as scale.
          </p>
          <ul className={styles.registerList}>
            {certBodies.map((b) => (
              <li key={b.body} className={styles.registerRow}>
                <span className={styles.registerFlag} aria-hidden="true">{b.flags}</span>
                {b.url ? (
                  <a href={b.url} target="_blank" rel="noopener noreferrer" className={styles.registerLink}>
                    {b.body}
                  </a>
                ) : (
                  <span className={styles.registerLink}>{b.body} <span className={styles.registerWhere}>(publishes no publicly readable register)</span></span>
                )}
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
                {/* One <dt> holding both lines: a <div> between the row and its
                    <dt> is not a definition-list group, so the five terms were
                    orphaned from their descriptions in the accessibility tree. */}
                <dt>
                  <span className={styles.sourceArea}>{s.area}</span>
                  <span className={styles.sourceTag}>{s.tag}</span>
                </dt>
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
                Fast-moving streaming figures — Spotify monthly listeners, song streams and
                video views — are tracked live and updated as they move; follower counts and
                his channel&apos;s all-time YouTube total are read by hand every few weeks. Slower records
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

            {/* Wide blocks go LAST. This is a 2-column grid painting its own
                background behind 1px gaps, so a full-width block placed mid-flow
                leaves the cell beside the preceding half-width block empty — and
                an empty cell here renders as a grey slab, not as space. Putting
                this one second orphaned two of them.
                NOTE: these desktop blocks are hardcoded, while MobileMethodology
                renders the `closingSections` array — the same three sections
                already carry different wording in the two layouts. Anything
                added here must be added there too, or one layout silently ships
                without it. */}
            <div className={`${styles.block} ${styles.blockWide}`}>
              <h2 className={styles.blockH}>When a source shows less than it awarded</h2>
              <p className={styles.blockP}>
                A register can publish fewer awards than it has issued, and absence from one
                is not evidence against it. Nigeria is the sharpest case: TurnTable&apos;s
                public certification page serves a hard cap of 500 rows, and currently no
                Silver awards at all — for any artist. This site reads that same
                register&apos;s own archived captures alongside the live page, so its
                Nigerian counts run higher than TurnTable&apos;s site shows today. Nothing is
                inferred: it is the same register, read further back. Open the capture and
                search an artist&apos;s name to check any figure here yourself.
              </p>
              <div className={styles.blockLinks}>
                <a
                  href="https://web.archive.org/web/20260221224010/https://turntablecharts.com/certification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.blockLink}
                >
                  TurnTable&apos;s register, Feb 2026 capture →
                </a>
                <a href="https://turntablecharts.com/certification" target="_blank" rel="noopener noreferrer" className={styles.blockLink}>
                  The live page, for comparison →
                </a>
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
      </div>

        {/* ONE copy, outside both layout wrappers, so its anchors resolve on a
            phone and on a desktop alike. Each layout hides the other's tree, and
            a fragment that lands on a display:none element scrolls nowhere —
            "How this is counted ↗" on /compare used to reach nothing on a
            phone, because this section lived in the desktop tree only. */}
        <section className={styles.shared} aria-labelledby="certified-units">
          <div className={styles.eyebrow}>Certified units</div>
          <h2 id="certified-units" className={styles.h2}>How /compare counts</h2>
          <p className={styles.p}>
            <Link href="/compare">The compare page</Link> does the one thing the section
            above says a plaque count cannot: it puts two catalogues on a single scale.
            It can only do that by pricing every plaque at <em>its own body&apos;s
            published threshold</em> and being explicit about what that buys, so four
            rules govern it.
          </p>
          <p className={styles.p}>
            <strong>Every figure is a floor.</strong> A Platinum single in the UK means
            at least 600,000 units; it could be 1,190,000 and nobody would know until it
            reached 2×. So the page says &ldquo;at least&rdquo;, and never says
            &ldquo;sold&rdquo;. It is a floor for both sides under identical rules, which
            is what keeps the comparison honest rather than precise.
          </p>
          <p className={styles.p}>
            <strong>Today&apos;s threshold, at every body.</strong> {movedBodies} of the{" "}
            {allBodies} bodies changed their levels inside the window these plaques span,
            and most raised them. Every plaque is priced at the level the body publishes
            today — the figure a reader can check against the body&apos;s own page —
            {/* Greece is the exception to TODAY'S LEVEL; Poland's level is today's
                and only its rate is historic, so it is described after, not counted
                here (review, 23 Sep 2026). */}
            {historicBodies.length > 0
              ? ` with ${historicBodies.length === 1 ? "one exception" : `${numberWord(historicBodies.length).toLowerCase()} exceptions`} marked ¶, below, `
              : " "}
            and wherever that body raised its levels, the page marks the figure with a
            &ldquo;‡&rdquo; and says so: a plaque awarded before the rise may have cleared
            a lower bar than today&apos;s figure implies. A South African Platinum single
            is priced at RiSA&apos;s current 40,000 units; one earned in 2022 needed
            20,000.
            {historicBodies.length > 0 && (
              <>
                {" "}{historicBodies.length === 1 ? "One body" : `${historicBodies.length} bodies`} —{" "}
                {joinNames(historicBodies.map((c) => shortBody(c.body)))} — {historicBodies.length === 1 ? "publishes" : "publish"} no
                current level at all. Its plaques are priced at the last level ever published
                for it: IFPI&apos;s own International Certification Award levels list, updated
                June 2013 (singles Gold 3,000 / Platinum 6,000; international-repertoire albums
                the same), and every such line carries a &ldquo;¶&rdquo; that says so, because
                the body now certifies from its streaming Digital Singles chart and states no
                ratio — a plaque awarded today may sit on a different bar.
              </>
            )}
            {plnBodies.length > 0 && (
              <>
                {" "}{joinNames(plnNames)}&apos;s singles are priced at the level{" "}
                {plnBodies.length === 1 ? "its body prints" : "their bodies print"} today, in złoty of revenue, divided
                by {plnBodies[0].plnPerSingle} zł a single — the rate {plnBodies.length === 1 ? "its" : "their"} own single
                tables used until the end of 2024 — and those lines carry a &ldquo;¶&rdquo; too, for the
                rate rather than the level.
              </>
            )}
            {" "}The alternative — pricing at the lowest level each body has applied
            since 2015 — was established for every body and is kept in the data, but it
            would understate every plaque earned after a rise by as much as it protects
            the earlier ones, and it prices against numbers no body publishes any more.
            One refinement holds either way: for a body that keys thresholds to release
            date, the band a record actually fell in is the one that applies.
          </p>
          <p className={styles.p}>
            <strong>One plaque per release per country, at its current tier.</strong>{" "}
            Gold → Platinum → 2× Platinum is the same sales recertified, not three
            sales. A release&apos;s own upgrades are never added together.
          </p>
          <p className={styles.p}>
            <strong>Units are not a common currency, so some plaques cannot be
            priced.</strong> Of the {allBodies} bodies whose plaques appear here,{" "}
            {pricedSingles} can price a single: {pricedSingles - streamBodies.length - historicBodies.length - plnBodies.length}{" "}
            publish the threshold in sales-equivalent units,{" "}
            {historicBodies.length > 0 && (
              <>{historicBodies.length === 1 ? "one is" : `${historicBodies.length} are`} priced at a historic level (¶), </>
            )}
            {plnBodies.length > 0 && (
              <>{plnBodies.length === 1 ? "one publishes" : `${plnBodies.length} publish`} it in złoty (¶), </>
            )}
            and {streamBodies.length} publish it in streams.{" "}
            {streamBodies.length - assumedBodies.length} of those
            publish their own download-equivalence, which is what this site converts with
            — France at 150 streams to a download, Denmark and Norway at 100, the
            Netherlands at 215, Czechia at 222, Slovakia at 217. {assumedBodies.length === 2 ? "Two" : String(assumedBodies.length)}{" "}
            — Sweden and Mexico — publish their levels in streams and no ratio at all;
            their plaques are converted at 100 streams to a unit, the ratio Denmark and
            Norway publish for the same measure, and every such line carries a
            &ldquo;§&rdquo; that says so. It is the one place the page applies a ratio a
            body did not set, and it is there because a plaque that cannot be summed is
            a plaque that goes unseen. Sweden counts capped streams, so its figure is a
            floor twice over.
            {historicNames.length > 0 && (
              <>
                {" "}It is no longer the only departure from a body&apos;s own published
                figure: {joinNames(historicNames)} {historicNames.length === 1 ? "is" : "are"} priced at
                IFPI&apos;s June 2013 level — the last one ever published for{" "}
                {historicNames.length === 1 ? "it" : "them"} — and marked &ldquo;¶&rdquo;.
              </>
            )}
            {plnBodies.length > 0 && (
              <>
                {" "}{joinNames(plnNames)} {plnBodies.length === 1 ? "sets its" : "set their"} single levels in złoty of
                revenue — Gold is {fmtUnits(plnBodies[0].singleRawPln?.gold ?? null)} zł — and{" "}
                {plnBodies.length === 1 ? "its" : "their"} current rules state no rate, so they are divided by{" "}
                {plnBodies[0].plnPerSingle} zł a single, the rate {plnBodies.length === 1 ? "its" : "their"} own single
                tables used from 2017 to the end of 2024: a Gold single is{" "}
                {fmtUnits(plnBodies[0].single?.gold ?? null)} units, and those lines carry a &ldquo;¶&rdquo; too.
              </>
            )}
            {" "}What remains cannot be converted at any ratio: {unpricedSingleNames}{" "}
            {unpricedSingleVerb} no threshold. Those plaques are{" "}
            <strong>listed and never summed</strong> — and never folded out of sight —
            because scoring them zero in silence would penalise whoever holds more of
            them.
          </p>
          <p className={styles.p}>
            <strong>Nigeria is separated by default.</strong> TCSN&apos;s register is
            request-based — absence from it proves nothing about a record, only that
            nobody applied — so a gap between two artists there can measure paperwork
            rather than sales. It is counted on its own line, never deleted, and folded
            in automatically when both artists hold most of their plaques there or when
            one of them holds none anywhere else. Whenever that happens the page says
            so, in a sentence, on screen.
          </p>

          <h3 id="threshold-history" className={styles.h3}>Which bodies raised their thresholds, and when</h3>
          <p className={styles.p}>
            Wherever a figure on the compare page carries a &ldquo;‡&rdquo;, the body behind it
            raised its levels since 2015. This is the record, body by body; the lower
            levels each body applied are kept in the data.
          </p>
          <ul className={styles.historyList}>
            {raisedBodies.map((c) => (
              <li key={c.code}>
                <strong>{countryMeta(c.code).flag} {shortBody(c.body)}</strong> — {c.vintage}
              </li>
            ))}
          </ul>
          {paragraphBodies.length > 0 && (
            <>
              <p className={styles.p}>
                Wherever a figure carries a &ldquo;¶&rdquo;, it rests on something the body
                published once and no longer prints — the level itself, or the rate its
                level is converted at. The record:
              </p>
              <ul className={styles.historyList}>
                {paragraphBodies.map((c) => (
                  <li key={c.code}>
                    <strong>{countryMeta(c.code).flag} {shortBody(c.body)}</strong> — {c.historic}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h3 id="thresholds" className={styles.h3}>Every threshold the compare page uses</h3>
          <p className={styles.p}>
            Today&apos;s published level at each of the {allBodies} bodies, in units. A dash
            means the body does not award that tier; a row that says <em>listed</em> is a
            body whose plaques appear on the page but are never priced, for the reason
            given.
            {historicBodies.length > 0 && (
              <>
                {" "}{historicBodies.length === 1 ? "A row" : "Rows"} marked &ldquo;¶&rdquo; for{" "}
                {joinNames(historicNames)} {historicBodies.length === 1 ? "is" : "are"} not today&apos;s level but the
                last level the body ever published (IFPI, June 2013), because the body publishes none now.
              </>
            )}
            {plnBodies.length > 0 && (
              <>
                {" "}{joinNames(plnNames)}&apos;s single figures are today&apos;s złoty levels divided by{" "}
                {plnBodies[0].plnPerSingle} zł a single — the rate {plnBodies.length === 1 ? "its" : "their"} own single tables used until the end of
                2024 and no longer state — and each carries a &ldquo;¶&rdquo;.
              </>
            )}
          </p>
          {/* Focusable, so a keyboard can scroll the 720px table on a phone. */}
          <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Threshold table">
            <table className={styles.thresholdTable}>
              <thead>
                <tr>
                  <th scope="col">Body</th>
                  <th scope="col" colSpan={4}>Single · Silver / Gold / Platinum / Diamond</th>
                  <th scope="col" colSpan={4}>Album · Silver / Gold / Platinum / Diamond</th>
                </tr>
              </thead>
              <tbody>
                {thresholdRows.map((r) => (
                  <tr key={r.code}>
                    <th scope="row">
                      <span aria-hidden="true">{countryMeta(r.code).flag}</span> {shortBody(r.body)}
                      {/* A ¶ that covers one format sits on that format's figures, not
                          on the body: Poland's album levels are today's units. */}
                      {r.historic && !r.historicFormat && <span title={r.historic} aria-label="historic level"> ¶</span>}
                      <span className={styles.thresholdCountry}>{countryMeta(r.code).name}</span>
                    </th>
                    {r.single ? (
                      TIERS.map((t) => (
                        <td key={t}>
                          {fmtUnits(r.single![t])}
                          {r.historicFormat === "single" && r.single![t] != null && (
                            <span title={r.historic} aria-label="converted at a historic rate"> ¶</span>
                          )}
                        </td>
                      ))
                    ) : (
                      <td colSpan={4} className={styles.thresholdListed}>listed — {r.singleExcluded ?? "not priced"}</td>
                    )}
                    {r.album ? (
                      TIERS.map((t) => (
                        <td key={t}>
                          {fmtUnits(r.album![t])}
                          {r.historicFormat === "album" && r.album![t] != null && (
                            <span title={r.historic} aria-label="converted at a historic rate"> ¶</span>
                          )}
                        </td>
                      ))
                    ) : (
                      <td colSpan={4} className={styles.thresholdListed}>listed — {r.albumExcluded ?? "not priced"}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.p}>
            The RIAA&apos;s Latin programme certifies at a sixteenth of the standard scale —
            Oro {fmtUnits(CERT_PROGRAMS["RIAA Latin"].single.gold)}, Platino{" "}
            {fmtUnits(CERT_PROGRAMS["RIAA Latin"].single.platinum)}, Diamante{" "}
            {fmtUnits(CERT_PROGRAMS["RIAA Latin"].single.diamond)} — and the three Latin
            plaques on the board are priced on it and marked.
          </p>
        </section>

      <div className={styles.desktopOnly}>
        <KeepExploring current="/methodology" />
      </div>
      {/* The phone screen's own action bar is fixed; this keeps the shared
          section's last line above it (the screen's spacer moved here). */}
      <div className={styles.mobileFoot} aria-hidden="true" />
    </main>
  );
}
