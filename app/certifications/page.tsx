import Link from "next/link";
import { Fragment, type CSSProperties, type ReactNode } from "react";
import styles from "./certifications.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileCerts from "../components/MobileCerts";
import { BURNA } from "../data/afrobeats";
import { releasePageLinks } from "../lib/releasePages";
import CertExplorer from "../components/CertExplorer";
import CertHistoryByYear from "../components/CertHistoryByYear";
import KeepExploring from "../components/KeepExploring";
import { siteUrl } from "../site";
import {
  COUNTRIES, albums as certAlbums, singles, features, certHistory, intlCertHistory, allItems,
  totalAwards, tierCounts, certifiedReleaseCount, countryCount, certSources, CERTS_VERIFIED_ON,
} from "../data/certifications";
import { pageMetadata, datasetJsonLd } from "../lib/seo";
import { portraitArtFor } from "../lib/portraitArt";
import { andMore, topBody, topPlatform } from "../lib/boardNotes";
import { allChartItems, CHART_COUNTRIES, type ChartRelease } from "../data/charts";
import { livePlatformTotals } from "../data/liveCharts";
import { compareWithLinks } from "../lib/comparePairs";
import { countryBoardLinks } from "../lib/certCountry";
import CertViewSwap from "../components/CertViewSwap";
import { featuredTitlesOf } from "../lib/certUnits";
import {
  certTotals, certsInView, creditSwitchable, homeCodeFor, scopeSwitchable, viewKey, viewNoun, viewsOffered,
  type CertView, type CertViewKey,
} from "../lib/certScope";

// Burna Boy's side of the "Compare with…" list the board artists' pages carry:
// one pair page per board artist, each by its canonical URL (E-10, Paul,
// 24 Sep 2026). Same helper, same order as the board's own lists.
const compareWith = compareWithLinks("burna-boy");
// Every /compare/in/<country> board, beside that list. They were linked from
// their own index and nothing else (26 Sep 2026), though this is the page
// that lists the countries.
const countryBoards = countryBoardLinks();

// "Plaques", not "Awards": /records/awards is "Burna Boy Awards: N Wins", and
// while this title said "Awards" too, a "burna boy awards" search showed the
// two results side by side with counts that could not both be his awards
// (26 Sep 2026). Plaque is the site's own word for one certification — the
// board and /compare count in it.
export const metadata = pageMetadata({
  title: `Burna Boy Certifications — ${totalAwards()} Plaques in ${countryCount} Countries`,
  description:
    `Burna Boy's ${totalAwards()} Silver, Gold, Platinum and Diamond certifications across ${countryCount} countries — filter by tier, country or year.`,
  path: "/certifications",
  shareTitle: "Burna Boy Certifications — Every Silver, Gold, Platinum & Diamond",
  shareDescription: `Every certified Burna Boy song and album across ${countryCount} countries.`,
});

const total = totalAwards();
const certsVerifiedLong = new Date(`${CERTS_VERIFIED_ON}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
});

const certJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Certifications", item: `${siteUrl}/certifications` },
  ],
};

const certDataset = datasetJsonLd({
  name: "Burna Boy music certifications",
  description: `Every Silver, Gold, Platinum and Diamond certification for Burna Boy's songs and albums — ${total} plaques across ${countryCount} countries (RIAA, BPI, SNEP and more).`,
  path: "/certifications",
  keywords: ["Burna Boy", "certifications", "RIAA", "BPI", "Gold", "Platinum", "Diamond", "music sales"],
  variableMeasured: ["Certification level", "Country", "Release"],
});

const burnaArt = portraitArtFor("burna-boy");

// Which register and which platform sit behind the two buttons on the phone.
const burnaBodies = topBody(
  allChartItems.flatMap((r: ChartRelease) => r.entries),
  (c) => CHART_COUNTRIES[c]?.body ?? ""
);
const burnaChartsNote = andMore(burnaBodies.top, burnaBodies.total);
const burnaPlats = topPlatform(livePlatformTotals);
const burnaLiveNote = andMore(burnaPlats.top, burnaPlats.total);

// ── Derived figures for the hero rail and the summary strip ───────────────
// A tier's colour IS the tier. These read --cyan for Diamond and --silver for
// Platinum: the Top 10 and Top 40 PEAK-BAND tokens, which globals.css reserves
// for the chart screens in as many words. So the certification ledger painted
// its top two tiers in another palette's colours, and Silver in a raw hex that
// no theme could reach. Same four tokens as MobileCerts now.
const TIER_INK: Record<string, string> = {
  Diamond: "var(--tier-diamond-ink)",
  Platinum: "var(--tier-platinum-ink)",
  Gold: "var(--tier-gold-ink)",
  Silver: "var(--tier-silver-ink)",
};

const tierRail = tierCounts().map(({ name, count }) => ({
  name,
  count,
  pct: `${Math.round((count / total) * 100)}%`,
}));

const thisYear = Math.max(...certHistory.map((e) => e.year));
const issuingBodies = new Set(
  Object.values(COUNTRIES).map((c) => c.body)
).size;

const summary = [
  { value: String(total), label: "Total certifications", note: "Silver → Diamond" },
  { value: String(countryCount), label: "Countries", note: `${issuingBodies} issuing bodies` },
  { value: String(certifiedReleaseCount), label: "Certified releases", note: "Albums, singles, features" },
  {
    value: String(intlCertHistory.filter((e) => e.year === thisYear).length),
    label: `New in ${thisYear}`,
    note: "International awards",
  },
];

// ── The two switches (lib/certScope), /compare's style ───────────────────
// "Nigeria": his home country is read off his own record (BURNA.country), and
// names the switch. "Featured appearances": his guest spots are the ones
// /compare leaves out under "lead credits only" (certUnits.featuredTitlesOf —
// his `features` array), one rule for both pages. Each narrowed view of the
// summary strip is counted by the same helpers from the releases left in it.
// The hero (lede and tier rail) stays the "all" view, which is the static page.
const home = homeCodeFor(BURNA.country);
const featured = featuredTitlesOf("burna-boy");
const offered = { scope: scopeSwitchable(allItems, home), credit: creditSwitchable(allItems, featured) };

function summaryFor(view: CertView): typeof summary {
  const inView = certsInView(allItems, { home, featured }, view);
  const t = certTotals(inView);
  const codes = new Set(inView.flatMap((r) => r.certs.map((c) => c.c)));
  const label = viewNoun(t.total, view);
  return [
    { value: String(t.total), label: label[0].toUpperCase() + label.slice(1), note: "Silver → Diamond" },
    { value: String(t.countries), label: "Countries", note: `${new Set([...codes].map((c) => COUNTRIES[c].body)).size} issuing bodies` },
    {
      value: String(t.releases),
      label: "Certified releases",
      note: view.credit === "lead" ? "Albums and singles" : "Albums, singles, features",
    },
    // "New in 2026 · International awards" is international already, so the
    // home switch leaves it as it is; with features off it counts his own
    // releases only, like the three cells beside it.
    view.credit === "lead"
      ? {
          ...summary[3],
          value: String(intlCertHistory.filter((e) => e.year === thisYear && !featured.has(e.title)).length),
          note: "International awards, lead credits",
        }
      : summary[3],
  ];
}

function tierRailView(rows: typeof tierRail) {
  return rows.map((t) => (
    <div key={t.name} className={styles.tierRow}>
      <span className={styles.tierDot} style={{ background: TIER_INK[t.name] }} aria-hidden="true" />
      <span className={styles.tierName} style={{ color: TIER_INK[t.name] }}>{t.name}</span>
      <span className={styles.tierCount}>{t.count}</span>
      <span className={styles.tierPct}>{t.pct}</span>
    </div>
  ));
}

function summaryView(cells: typeof summary) {
  return cells.map((s) => (
    <div key={s.label} className={styles.summaryCell}>
      <div className={styles.summaryValue}>{s.value}</div>
      <div className={styles.summaryLabel}>{s.label}</div>
      <div className={styles.summaryNote}>{s.note}</div>
    </div>
  ));
}

/** A block in every view the switches offer, or the one it always was. */
function scoped(all: ReactNode, narrowed: (view: CertView) => ReactNode) {
  const views = viewsOffered(offered);
  if (views.length === 1) return all;
  const byKey: Partial<Record<CertViewKey, ReactNode>> & { all: ReactNode } = { all };
  for (const v of views.slice(1)) byKey[viewKey(v)] = narrowed(v);
  return <CertViewSwap views={byKey} offered={offered} />;
}

export default function CertificationsPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(certJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(certDataset) }} />

      {/* Mobile is its own screen in this design — one big total with the tier
          bars under it, then stacked rows — not the desktop page reflowed. */}
      <MobileCerts
        releases={allItems}
        albums={certAlbums}
        history={intlCertHistory}
        countries={COUNTRIES}
        total={total}
        countryCount={countryCount}
        portrait={BURNA.image}
        portraitSlug="burna-boy"
        subject="Burna Boy"
        chartsHref="/records/charts"
        liveHref="/live-charts"
        chartsNote={burnaChartsNote}
        liveNote={burnaLiveNote}
        compareWith={compareWith}
        countryBoards={countryBoards}
        home={home}
        homeName={BURNA.country}
        featured={[...featured]}
      />

      <div className={styles.desktopOnly}>
      <BreadcrumbBar path="/certifications" />

      {/* ── Hero: copy left, tier rail right ─────────────────────────── */}
      <section className={styles.hero}>
        {/* Behind the type: the blurred understudy, the portrait, then the
            scrim the copy is read against. All three are decorative. */}
        <span
          className={styles.heroArtBlur}
          style={{ backgroundImage: `url(${BURNA.image})`, "--focal": burnaArt.focal } as CSSProperties}
          aria-hidden="true"
        />
        <span
          className={styles.heroArt}
          style={{
            backgroundImage: `url(${BURNA.image})`,
            "--focal": burnaArt.focal,
            "--portrait-opacity": burnaArt.opacity,
            "--grayscale": burnaArt.grayscale,
          } as CSSProperties}
          aria-hidden="true"
        />
        <span className={styles.heroScrim} aria-hidden="true" />
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Certified worldwide
            </div>
            <h1 className={styles.h1}>
              Global <span className="inkText">Certifications</span>
            </h1>
            <p className={styles.lede}>
              Burna Boy has {total} music certifications across {countryCount} countries —
              Silver, Gold, Platinum and Diamond awards from bodies including the RIAA (US),
              BPI (UK), SNEP (France) and Music Canada, making him the most-certified African
              artist in history.
            </p>
            <div className={styles.heroButtons}>
              {/* There was no primary action in this head. Compare takes it —
                  the two existing links stay secondary. */}
              <Link href="/compare?a=burna-boy" className="btn btnPrimary">Compare ↗</Link>
              <Link href="/records/visualized#certifications" className="btn btnSecondary">
                See certifications by country →
              </Link>
              <Link href="/methodology" className="btn btnSecondary">Methodology ↗</Link>
            </div>
          </div>

          <div className={styles.tierRail}>
            {/* The all-view, always: it sits beside the lede's "249 music
                certifications across 26 countries" and belongs to that
                sentence. The switches recount the strip below and the
                explorer, where they sit. */}
            {tierRailView(tierRail)}
          </div>
        </div>
      </section>

      {/* ── Summary strip ────────────────────────────────────────────── */}
      <section className={styles.summary}>
        <div className={styles.summaryGrid}>
          {scoped(summaryView(summary), (v) => summaryView(summaryFor(v)))}
        </div>
      </section>

      {/* ── Filter card + the three release groups ───────────────────── */}
      <CertExplorer
        links={releasePageLinks()}
        albums={certAlbums}
        singles={singles}
        features={features}
        countries={COUNTRIES}
        totalCerts={total}
        home={home}
        homeName={BURNA.country}
        featured={[...featured]}
      />

      {/* ── The dated log ────────────────────────────────────────────── */}
      <CertHistoryByYear history={intlCertHistory} countries={COUNTRIES} />

      <section className={styles.sourceBand}>
        <div className={styles.wide}>
          <p className={styles.source}>
            Sources: {certSources()} — each award read at the body&apos;s own register (or, in
            a market with no current public register, from the label&apos;s own plaque), most
            recently on {certsVerifiedLong}. Each row shows a release&apos;s current level in
            every country; “×” denotes multi-platinum.
          </p>
        </div>
      </section>

      {/* The pair pages, by their own URLs — the phone screen carries the same
          list (MobileCerts). A second band in the source band's own styles, so
          the list reads as its own line rather than the sources' last one. */}
      <nav className={styles.sourceBand} aria-label="Compare Burna Boy with…">
        <div className={styles.wide}>
          <p className={styles.source}>
            Compare with…{" "}
            {compareWith.map((c, i) => (
              <Fragment key={c.href}>
                {i > 0 && " · "}
                <Link href={c.href} className="wikiLink">{c.name}</Link>
              </Fragment>
            ))}
          </p>
        </div>
      </nav>

      {/* The country boards, the same way — MobileCerts carries the list too. */}
      <nav className={styles.sourceBand} aria-label="Certified units by country">
        <div className={styles.wide}>
          <p className={styles.source}>
            Certified units by country…{" "}
            {countryBoards.map((c, i) => (
              <Fragment key={c.href}>
                {i > 0 && " · "}
                <Link href={c.href} className="wikiLink">{c.name}</Link>
              </Fragment>
            ))}
          </p>
        </div>
      </nav>

      <KeepExploring current="/certifications" />
      </div>
    </main>
  );
}
