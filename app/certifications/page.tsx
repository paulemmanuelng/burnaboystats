import Link from "next/link";
import type { CSSProperties } from "react";
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
  totalAwards, certifiedReleaseCount, countryCount,
} from "../data/certifications";
import { pageMetadata, datasetJsonLd } from "../lib/seo";
import { portraitArtFor } from "../lib/portraitArt";
import { andMore, topBody, topPlatform } from "../lib/boardNotes";
import { allChartItems, CHART_COUNTRIES, type ChartRelease } from "../data/charts";
import { livePlatformTotals } from "../data/liveCharts";

export const metadata = pageMetadata({
  title: `Burna Boy Certifications — ${totalAwards()} Awards Across ${countryCount} Countries`,
  description:
    `${totalAwards()} Silver, Gold, Platinum and Diamond certifications across ${countryCount} countries — filter by tier, country or year.`,
  path: "/certifications",
  shareTitle: "Burna Boy Certifications — Every Silver, Gold, Platinum & Diamond",
  shareDescription: `Every certified Burna Boy song and album across ${countryCount} countries.`,
});

const total = totalAwards();

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
  description: `Every Silver, Gold, Platinum and Diamond certification for Burna Boy's songs and albums — ${total} awards across ${countryCount} countries (RIAA, BPI, SNEP and more).`,
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
const TIER_ORDER = ["Diamond", "Platinum", "Gold", "Silver"] as const;
const TIER_INK: Record<string, string> = {
  Diamond: "var(--cyan)",
  Platinum: "var(--silver)",
  Gold: "var(--gold)",
  Silver: "#b8bcc4",
};

const tierRail = TIER_ORDER.map((name) => {
  const count = allItems.reduce(
    (n, item) => n + item.certs.filter((c) => c.level === name).length,
    0
  );
  return { name, count, pct: `${Math.round((count / total) * 100)}%` };
});

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
        chartsHref="/records/charts"
        liveHref="/live-charts"
        chartsNote={burnaChartsNote}
        liveNote={burnaLiveNote}
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
              <Link href="/records/visualized#certifications" className="btn btnSecondary">
                See certifications by country →
              </Link>
              <Link href="/methodology" className="btn btnSecondary">Methodology ↗</Link>
            </div>
          </div>

          <div className={styles.tierRail}>
            {tierRail.map((t) => (
              <div key={t.name} className={styles.tierRow}>
                <span className={styles.tierDot} style={{ background: TIER_INK[t.name] }} aria-hidden="true" />
                <span className={styles.tierName} style={{ color: TIER_INK[t.name] }}>{t.name}</span>
                <span className={styles.tierCount}>{t.count}</span>
                <span className={styles.tierPct}>{t.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Summary strip ────────────────────────────────────────────── */}
      <section className={styles.summary}>
        <div className={styles.summaryGrid}>
          {summary.map((s) => (
            <div key={s.label} className={styles.summaryCell}>
              <div className={styles.summaryValue}>{s.value}</div>
              <div className={styles.summaryLabel}>{s.label}</div>
              <div className={styles.summaryNote}>{s.note}</div>
            </div>
          ))}
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
      />

      {/* ── The dated log ────────────────────────────────────────────── */}
      <CertHistoryByYear history={intlCertHistory} countries={COUNTRIES} />

      <section className={styles.sourceBand}>
        <div className={styles.wide}>
          <p className={styles.source}>
            Sources: RIAA (US), BPI (UK), Music Canada, SNEP (France), BVMI (Germany), FIMI
            (Italy), BEA (Belgium), GLF (Sweden), NVPI (Netherlands), ARIA (Australia), RMNZ
            (New Zealand), Promusicae (Spain), IFPI (Denmark, Norway, Switzerland, Austria),
            ZPAV (Poland), AFP (Portugal), RiSA (South Africa), TCSN (Nigeria) and Pro-Música
            Brasil — cross-checked against Wikipedia&apos;s cited certification tables, as of
            August 2026. Each row shows a release&apos;s current level in every country; “×”
            denotes multi-platinum.
          </p>
        </div>
      </section>

      <KeepExploring current="/certifications" />
      </div>
    </main>
  );
}
