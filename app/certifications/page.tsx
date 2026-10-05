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
  totalAwards, tierCounts, certifiedReleaseCount, countryCount, certSources, CERTS_VERIFIED_ON, announcedClause,
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
import { withIssuerProvenance } from "../lib/certs";
import {
  ALL_VIEW, certCountPhrase, certKicker, certTotals, certsInView, creditSwitchable, homeCodeFor, scopeSwitchable, viewKey,
  viewsOffered, type CertView, type CertViewKey,
} from "../lib/certScope";
import { plural } from "../lib/plural";
import { showsHrefFor } from "../lib/showsBoard";
import { SHOWS_LABEL } from "../lib/showsDeepLink";

// Burna Boy's side of the "Compare with…" list the board artists' pages carry:
// one pair page per board artist, each by its canonical URL (E-10, Paul,
// 24 Sep 2026). Same helper, same order as the board's own lists.
const compareWith = compareWithLinks("burna-boy");
// Every /compare/in/<country> board, beside that list. They were linked from
// their own index and nothing else (26 Sep 2026), though this is the page
// that lists the countries.
const countryBoards = countryBoardLinks();
// "Biggest shows": the box-office board opened on his nights, derived from the
// board's rows (lib/showsBoard) — the phone bar's second action, and a
// secondary button beside Compare in the desktop hero.
const burnaShows = showsHrefFor("burna-boy");

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
  // The day the registers were last read — the date the page prints under its
  // sources and the sitemap's lastmod for this route (D-04, 4 Oct 2026).
  dateModified: CERTS_VERIFIED_ON,
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
// The hero recounts with them too — kicker, lede and tier rail (Paul, 3 Oct
// 2026: "since the number changes, it should adapt") — on both layouts.
const home = homeCodeFor(BURNA.country);
const featured = featuredTitlesOf("burna-boy");
const offered = { scope: scopeSwitchable(allItems, home), credit: creditSwitchable(allItems, featured) };

function summaryFor(view: CertView): typeof summary {
  const inView = certsInView(allItems, { home, featured }, view);
  const t = certTotals(inView);
  const codes = new Set(inView.flatMap((r) => r.certs.map((c) => c.c)));
  // The label stays as short as the all-view's: "International certifications
  // as lead artist" ran to two lines at 1440 and dropped its note 18px below
  // the other three (debug pass, 3 Oct 2026). The narrowing goes in the note.
  const narrowing = [view.scope === "intl" ? `Outside ${BURNA.country}` : "", view.credit === "lead" ? "lead credits" : ""]
    .filter(Boolean)
    .join(" · ");
  return [
    {
      value: String(t.total),
      label: plural(t.total, "Certification", "Certifications"),
      note: narrowing[0].toUpperCase() + narrowing.slice(1),
    },
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

/** The hero rail's four tiers, counted from the releases in a view, each as a
 *  share of THAT view's total. All four rows always, a zero included, so the
 *  rail keeps its height when a switch flips. */
function tierRailFor(view: CertView): typeof tierRail {
  const t = certTotals(certsInView(allItems, { home, featured }, view));
  return tierRail.map(({ name }) => ({
    name,
    count: t.tiers[name],
    pct: `${t.total ? Math.round((t.tiers[name] / t.total) * 100) : 0}%`,
  }));
}

// The four bodies the all-view lede names, by code — each named in a narrowed
// view only while that view still holds a plaque from it.
const LEDE_BODIES: readonly [code: string, name: string][] = [
  ["US", "the RIAA (US)"], ["UK", "BPI (UK)"], ["FR", "SNEP (France)"], ["CA", "Music Canada"],
];
const listed = (xs: readonly string[]) =>
  xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;

/**
 * The hero sentence for a NARROWED view, built here once and printed by both
 * layouts, the way each layout's all-view sentence is printed:
 *
 *   phone   (MobileCerts' `ledes`)  the tiers and the bodies — the count is
 *           the big number and its units right above it, as in the all-view,
 *           whose phone lede carries no count either
 *   desktop (the hero below)        "Burna Boy has {count phrase} — " + the
 *           SAME tiers-and-bodies text, word for word; the desktop hero has
 *           no big number, so its lede says the count, as in the all-view
 *
 * The all-view keeps each layout's own sentence, the static page as it has
 * always read. "the most-certified African artist in history" is a claim about
 * the FULL count, so it stays with the all-view and no narrowed sentence makes
 * it.
 */
function heroLedeBody(view: CertView): string {
  const inView = certsInView(allItems, { home, featured }, view);
  const t = certTotals(inView);
  const codes = new Set(inView.flatMap((r) => r.certs.map((c) => c.c)));
  const tiers = (["Silver", "Gold", "Platinum", "Diamond"] as const).filter((x) => t.tiers[x] > 0);
  const bodies = LEDE_BODIES.filter(([c]) => codes.has(c)).map(([, n]) => n);
  return `${listed(tiers)} awards${bodies.length ? ` from bodies including ${listed(bodies)}` : ""}.`;
}
function heroLede(view: CertView): string {
  const t = certTotals(certsInView(allItems, { home, featured }, view));
  return `Burna Boy has ${certCountPhrase(t.total, t.countries, view)} — ${heroLedeBody(view)}`;
}
const narrowedViews = viewsOffered(offered).slice(1);
const perView = (f: (v: CertView) => string) =>
  Object.fromEntries(narrowedViews.map((v) => [viewKey(v), f(v)])) as Partial<Record<CertViewKey, string>>;
/** The phone's narrowed ledes, and the desktop's (the same text, led by the count). */
const phoneLedes = perView(heroLedeBody);
const heroLedes = perView(heroLede);

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
        releases={withIssuerProvenance(allItems)}
        albums={withIssuerProvenance(certAlbums)}
        history={intlCertHistory}
        countries={COUNTRIES}
        total={total}
        countryCount={countryCount}
        portrait={BURNA.image}
        portraitSlug="burna-boy"
        portraitSlot="square"
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
        ledes={phoneLedes}
        showsHref={burnaShows}
      />

      <div className={styles.desktopOnly}>
      <BreadcrumbBar path="/certifications" />

      {/* ── Hero: copy left, tier rail right ─────────────────────────── */}
      <section className={styles.hero}>
        {/* Behind the type: the blurred understudy, the portrait, then the
            scrim the copy is read against. All three are decorative. */}
        <span
          className={styles.heroArtBlur}
          style={{ backgroundImage: `url(${BURNA.image})`, "--focal": burnaArt.focal, "--grayscale": burnaArt.grayscale } as CSSProperties}
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
              {/* The phone kicker's own words, per view (certKicker). */}
              {scoped(certKicker(ALL_VIEW, BURNA.country), (v) => certKicker(v, BURNA.country))}
            </div>
            <h1 className={styles.h1}>
              Global <span className="inkText">Certifications</span>
            </h1>
            <p className={styles.lede}>
              {scoped(
                <>
                  Burna Boy has {total} music certifications across {countryCount} countries —
                  Silver, Gold, Platinum and Diamond awards from bodies including the RIAA (US),
                  BPI (UK), SNEP (France) and Music Canada, making him the most-certified African
                  artist in history.
                </>,
                (v) => heroLedes[viewKey(v)]
              )}
            </p>
            <div className={styles.heroButtons}>
              {/* There was no primary action in this head. Compare takes it —
                  the two existing links stay secondary. */}
              <Link href="/compare?a=burna-boy" className="btn btnPrimary">Compare ↗</Link>
              {/* His nights on the box-office board, beside Compare (the
                  owner, 4 Oct 2026); the phone bar carries it too. */}
              {burnaShows && (
                <Link href={burnaShows} className="btn btnSecondary">
                  {SHOWS_LABEL} ↗
                </Link>
              )}
              <Link href="/records/visualized#certifications" className="btn btnSecondary">
                See certifications by country →
              </Link>
              <Link href="/methodology" className="btn btnSecondary">Methodology ↗</Link>
            </div>
          </div>

          <div className={styles.tierRail}>
            {/* Recounted with the switches, like the lede beside it: each
                tier's count and its share of the view's own total. The
                all-view is the static page. */}
            {scoped(tierRailView(tierRail), (v) => tierRailView(tierRailFor(v)))}
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
        albums={withIssuerProvenance(certAlbums)}
        singles={withIssuerProvenance(singles)}
        features={withIssuerProvenance(features)}
        countries={COUNTRIES}
        totalCerts={total}
        home={home}
        homeName={BURNA.country}
        featured={[...featured]}
      />

      {/* ── The dated log ────────────────────────────────────────────── */}
      <CertHistoryByYear history={intlCertHistory} countries={COUNTRIES} switched />

      <section className={styles.sourceBand}>
        <div className={styles.wide}>
          <p className={styles.source}>
            Sources: {certSources()} — each award read at the body&apos;s own register (or, in
            a market with no current public register, from the label&apos;s own plaque
            {announcedClause("; or from ")}), most recently on {certsVerifiedLong}. Each row shows a release&apos;s current level in
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
