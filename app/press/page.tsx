import Link from "next/link";
import styles from "./press.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import CopyButton from "../components/CopyButton";
import { CREDIT_LINE, creditLineHtml } from "../lib/credit";
import MobilePress from "../components/MobilePress";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, BURNA_BOY_REF } from "../lib/seo";
import { totalAwards, countryCount } from "../data/certifications";
import { chartEntryCount, numberOnes } from "../data/charts";
// The country figure, not the headline territory figure: the site's
// "territories" count adds Billboard's Global 200 and Global 200 Excl. US to
// the countries, and neither is a country. This strip is quoted by
// journalists, so the number and the word under it have to match — it used to
// print this country figure under the word "territories", which is what
// /records/charts and /records/by-the-numbers call the two-higher figure. Same
// word, two numbers, on pages a writer reads together.
import { chartedCountryCount } from "../lib/analysis";
import { totalWins, totalNominations } from "../data/awards";
import { countryCount as performedCountryCount, regionCount } from "../data/performedCountries";
import { spotifyTotalStreams } from "../data/streamingTotals";
import Provenance from "../components/Provenance";
import { reviewedOn } from "../lib/provenanceSpecs";
import { numberWord } from "../lib/homeData";
import { EMBED_NAME_LIST, EMBED_WIDGETS } from "../lib/embedWidgets";
import {
  DATA_DOWNLOADS,
  DATASET_CITATION,
  downloadFilename,
} from "../lib/dataDownloads";

export const metadata = pageMetadata({
  title: "Press & Data Kit — Cite Burna Boy Stats",
  description:
    "Verified Burna Boy figures, free to use with attribution — citation lines, an open JSON API under CC BY 4.0, stat cards and a direct line to the curator.",
  path: "/press",
  shareTitle: "Press & Data Kit",
  shareDescription: "Verified Burna Boy figures, free to use with attribution — API, stat cards and citation-ready numbers.",
});

const lastReviewed = reviewedOn();

// The site's one credit line (lib/credit.ts), plain and linked.
const CITATION = CREDIT_LINE;
const CITATION_LINKED = creditLineHtml();

// The headline figures a writer most often needs, every one derived live from
// the same data the pages render — this strip can never go stale on its own.
// `live` marks the one figure that moves by itself (the daily career total):
// it stays gold, and the five figures at rest are ink (rule 3, item 53).
const figures = [
  { value: String(totalAwards()), label: "Certifications", sub: `${countryCount} countries`, href: "/certifications" },
  { value: String(chartEntryCount), label: "Chart entries", sub: `${chartedCountryCount} countries`, href: "/records/charts" },
  { value: String(numberOnes), label: "No. 1 placements", sub: "worldwide", href: "/records/charts" },
  { value: String(totalWins), label: "Award wins", sub: `${totalNominations} nominations`, href: "/records/awards" },
  { value: spotifyTotalStreams, label: "Career streams", sub: "Spotify, all credits", href: "/records/by-the-numbers", live: true },
  { value: String(performedCountryCount), label: "Countries performed in", sub: `${regionCount} regions`, href: "/records/tours/map" },
];

// The three copy boxes, verbatim, each with the one-line label its footer
// prints (item 49: one box-and-footer layout for all three, nothing removed).
const credits = [
  { code: CITATION, kind: "Plain text", button: "Copy" },
  { code: CITATION_LINKED, kind: "HTML, with the link", button: "Copy HTML" },
];
const datasetCitation = { code: DATASET_CITATION, kind: "Dataset citation", button: "Copy" };

// The CSV files as a download list (items 50 and 72): the real /api/v1 paths,
// a dated file name, the derived count and the full description (its artist
// counts are read off the board in app/lib/dataDownloads.ts).
const downloads = DATA_DOWNLOADS.map((d) => ({
  slug: d.slug,
  file: `${d.slug}.csv`,
  href: d.path,
  filename: downloadFilename(d.slug),
  count: d.count.toLocaleString("en-GB"),
  countOf: d.countOf,
  what: d.what,
}));

const X_CONTACT = "https://x.com/paulemmanuelng";

// Every sentence lives here once and both layouts print it: the phone screen
// (MobilePress) and the desktop column are separate designs carrying the same
// words. A function takes the layout's own class for a link in running prose.
const LEDE =
  "Every figure on this site is verified against primary sources and free to use — all I ask is a credit with a link. This page has everything you need to cite, embed or build on the data.";
const FIGURES_INTRO =
  "Rendered live from the same dataset as the rest of the site, so they are always current. Each links to a page with the full breakdown and sourcing.";
const CREDIT_INTRO = "In an article, a tweet or a video description — one line does it:";
const DEEP_LINK =
  "Deep-link to the page you used where you can — e.g. burnaboystats.com/certifications for a certification figure.";
// The number of files is the list's own length: it said "three" in words
// until tours.csv joined the list (design review of 8 Oct 2026, T-11).
const DOWNLOADS_INTRO = `The dataset as ${numberWord(DATA_DOWNLOADS.length).toLowerCase()} spreadsheets — CSV, one row per record — that open straight in Excel, Google Sheets or Numbers. They are built from the same data as these pages, so a download always matches the site.`;

const apiProse = (link: string) => (
  <>
    The verified chart and certification dataset is served as JSON at{" "}
    <Link href="/api" className={link}>burnaboystats.com/api</Link>, licensed{" "}
    <a
      href="https://creativecommons.org/licenses/by/4.0/"
      rel="noopener"
      target="_blank"
      className={link}
    >
      CC BY 4.0
    </a>{" "}
    — free for articles, visualisations, bots and research, with attribution. If you
    build something with it, tell me and I&apos;ll share it.
  </>
);

// Every clause here is held to the file by tests/dataDownloads.test.tsx:
// units are blank only where the plaque cannot be priced, and units_note
// carries the same notes /compare prints.
const unitsProse = (link: string) => (
  <>
    A certification is a floor, not a sale: the release passed that body&apos;s
    threshold for the tier, and certified units price each certification at that threshold.
    The units_note column flags each figure that rests on more than the body prints
    today — a rule for multiples it never wrote or no longer runs, a stream-to-unit ratio it never
    published, a level or rate from an older rulebook — or is today&apos;s level at a
    body that has since raised it, in the words the{" "}
    <Link href="/compare" className={link}>comparison tool</Link> prints beside
    the same figure. Units are blank only where a body publishes no threshold at all,
    and unpriced_reason says why. The source column says what each certification was read
    from: a register row, a label&apos;s own plaque or the certifying body&apos;s own
    announcement. Nigeria&apos;s TCSN register is request-based, so a
    missing Nigerian certification is not evidence of none. The full rules are on the{" "}
    <Link href="/methodology" className={link}>methodology page</Link>.
  </>
);

const cardsProse = (link: string) => (
  <>
    Every major figure is available as a shareable image — timeline and story sizes,
    rendered from live data — on the{" "}
    <Link href="/share" className={link}>stat cards page</Link>. Need a figure
    as a card that isn&apos;t there? Ask — custom cards for fan pages are usually a
    same-day turnaround.
  </>
);

// The widget count and names come from the widget list itself, so this
// sentence moves the day a box is added.
const embedsProse = (link: string) => (
  <>
    For a blog post, a fan page or a live article: {EMBED_WIDGETS.length} small boxes (
    {EMBED_NAME_LIST}) that keep their figures current by
    themselves and link back to the page each one comes from. Pick one on the{" "}
    <Link href="/embed" className={link}>embed page</Link>, copy one snippet of
    HTML and paste it in.
  </>
);

const trustProse = (link: string) => (
  <>
    The verification standard is public: primary sources only, conflicts resolve to
    the body that owns the data, and nothing ships unverified — the{" "}
    <Link href="/methodology" className={link}>methodology</Link> spells it
    out, the source is open at{" "}
    <a
      href="https://github.com/paulemmanuelng/burnaboystats"
      rel="noopener"
      target="_blank"
      className={link}
    >
      github.com/paulemmanuelng/burnaboystats
    </a>{" "}
    with a commit behind every figure, and the{" "}
    <Link href="/curator" className={link}>curator page</Link>{" "}
    says who does the work. For data requests, corrections or anything else, DM{" "}
    <a href={X_CONTACT} rel="noopener" target="_blank" className={link}>
      @paulemmanuelng
    </a>{" "}
    or use the <Link href="/contact" className={link}>contact page</Link>.
  </>
);

export default function PressPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Press & Data Kit",
    description:
      "Verified Burna Boy statistics, free to use with attribution — citation formats, open API and shareable stat cards.",
    url: `${CANONICAL_ORIGIN}/press`,
    // No dateModified: the sitemap deliberately ships no lastmod for this page
    // (tests/sitemapEvidence.test.ts), and the value here was the newest date
    // anywhere in the feed, not a change to this page (debug pass 5 Oct 2026,
    // seo-12). The page still prints when the site's data was last reviewed.
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: BURNA_BOY_REF,
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    license: "https://creativecommons.org/licenses/by/4.0/",
  };

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* The phone screen: its own back bar, no masthead and no breadcrumb
          (design response items 42–44). Separate design, same words. */}
      <MobilePress
        reviewedOn={lastReviewed}
        lede={LEDE}
        figures={figures}
        figuresIntro={FIGURES_INTRO}
        creditIntro={CREDIT_INTRO}
        credits={credits}
        deepLink={DEEP_LINK}
        apiProse={apiProse}
        downloadsIntro={DOWNLOADS_INTRO}
        downloads={downloads}
        datasetCitation={datasetCitation}
        unitsProse={unitsProse}
        cardsProse={cardsProse}
        embedsProse={embedsProse}
        trustProse={trustProse}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/press" />

        <section className={`${styles.wrap} ${styles.heroPad}`}>
          <div className={styles.kicker}>For journalists, bloggers &amp; fan pages</div>
          <h1 className={styles.h1}>
            Press &amp; <span className="inkText">Data Kit</span>
          </h1>
          <p className={styles.lede}>{LEDE}</p>
          <Provenance size="reviewed" day={lastReviewed} className={styles.reviewedSlot} />
        </section>

        {/* From 1240 the sections below are the reading column at x 80 and
            "Download the data" sits in a 420px column to their right (J0-10's
            frame, design review 8 Oct 2026; C-10: the column holds the
            downloads only). Source order is unchanged, so below 1240 the page
            reads top to bottom as before. */}
        <div className={styles.split}>
        {/* ── The numbers, citation-ready ─────────────────────── */}
        {/* Each tile is itself the link, so it takes the site's cue for one:
            → at its foot, --bg-raised on hover (item 48). */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="figures">
          <h2 id="figures" className={styles.h2}>The headline figures</h2>
          <p className={styles.p}>{FIGURES_INTRO}</p>
          <div className={styles.figures}>
            {figures.map((f) => (
              <Link key={f.label} href={f.href} className={styles.figure}>
                <span className={`${styles.figureValue} ${f.live ? styles.figureLive : ""}`}>{f.value}</span>
                <span className={styles.figureLabel}>{f.label}</span>
                <span className={styles.figureFoot}>
                  <span className={styles.figureSub}>{f.sub}</span>
                  <span className={styles.figureArrow} aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── How to credit ───────────────────────────────────── */}
        {/* One box-and-footer layout for all three copy boxes (item 49): the
            text at full width, a label and the button in the box's footer.
            CopyButton draws itself, the site's one Copy button. */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="cite">
          <h2 id="cite" className={styles.h2}>How to credit</h2>
          <p className={styles.p}>{CREDIT_INTRO}</p>
          <div className={styles.credits}>
            {credits.map((c) => (
              <div key={c.kind} className={styles.copyBox}>
                <code className={styles.copyCode}>{c.code}</code>
                <div className={styles.copyFoot}>
                  <span className={styles.copyKind}>{c.kind}</span>
                  <CopyButton value={c.code} label={c.button} />
                </div>
              </div>
            ))}
          </div>
          <p className={styles.small}>{DEEP_LINK}</p>
        </section>

        {/* ── The open API ────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="api">
          <h2 id="api" className={styles.h2}>The open API</h2>
          <p className={styles.p}>{apiProse(styles.link)}</p>
        </section>

        {/* ── Download the data ───────────────────────────────── */}
        {/* The same records as the API, flattened for a spreadsheet. Every count
            and the citation's date are derived (app/lib/dataDownloads.ts), and a
            plain <a download>, not <Link>: these are files, not pages to
            prefetch. The whole row is the link (item 50). */}
        <section className={`${styles.wrap} ${styles.sectionPad} ${styles.splitSide}`} aria-labelledby="downloads">
          <h2 id="downloads" className={styles.h2}>Download the data</h2>
          <p className={styles.p}>{DOWNLOADS_INTRO}</p>
          <div className={styles.dlList}>
            {downloads.map((d) => (
              <a
                key={d.slug}
                href={d.href}
                download={d.filename}
                className={styles.dlRow}
                aria-label={`Download ${d.file} (${d.count} ${d.countOf})`}
                aria-describedby={`dl-what-${d.slug}`}
              >
                <span className={styles.dlText}>
                  <span className={styles.dlFile}>
                    {d.file}{" "}
                    <span className={styles.dlMeta}>
                      · <span className={styles.dlCount}>{d.count}</span> {d.countOf}
                    </span>
                  </span>
                  <span id={`dl-what-${d.slug}`} className={styles.dlWhat}>{d.what}</span>
                </span>
                <span className={styles.dlPill}>
                  <span aria-hidden="true">↓</span> Download
                </span>
              </a>
            ))}
          </div>
          <div className={styles.citeBlock}>
            <h3 className={styles.kicker}>How to cite</h3>
            <div className={styles.copyBox}>
              <code className={styles.copyCode}>{datasetCitation.code}</code>
              <div className={styles.copyFoot}>
                <span className={styles.copyKind}>{datasetCitation.kind}</span>
                <CopyButton value={datasetCitation.code} label={datasetCitation.button} />
              </div>
            </div>
            <p className={styles.small}>{unitsProse(styles.link)}</p>
          </div>
        </section>

        {/* ── Stat cards ──────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="cards">
          <h2 id="cards" className={styles.h2}>Ready-made stat cards</h2>
          <p className={styles.p}>{cardsProse(styles.link)}</p>
        </section>

        {/* ── Embeds ──────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="embeds">
          <h2 id="embeds" className={styles.h2}>Live stat boxes for your site</h2>
          <p className={styles.p}>{embedsProse(styles.link)}</p>
        </section>

        {/* ── Trust & contact ─────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="trust">
          <h2 id="trust" className={styles.h2}>Why the numbers hold up</h2>
          <p className={styles.p}>{trustProse(styles.link)}</p>
        </section>
        </div>
      </div>

      {/* Once, for both layouts: the phone screen draws it as the block
          renders at phone width. This page's own list (links.ts, item 57). */}
      <KeepExploring current="/press" />
    </main>
  );
}
