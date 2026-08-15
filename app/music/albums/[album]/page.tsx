import Link from "next/link";
import { notFound } from "next/navigation";
// The album page IS the song-page design at album scale, so it shares that
// route's stylesheet — one design, one file. Album-only pieces (the tracklist)
// live in the local module.
import styles from "../../[song]/song.module.css";
import albumStyles from "./album.module.css";
import KeepExploring from "../../../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN } from "../../../lib/seo";
import { spotifyImage, spotifySrcSet } from "../../../lib/spotifyImage";
import { albumPageBySlug, albumPageSlugs, albumPages } from "../../../data/albumPages";
import { albums } from "../../../data/albums";
import { songs } from "../../../data/songs";
import { albumCharts, CHART_COUNTRIES, chartTier } from "../../../data/charts";
import { allItems, COUNTRIES, tierOf } from "../../../data/certifications";
import MobileMenuButton from "../../../components/MobileMenuButton";
import BackLink from "../../../components/BackLink";

// Only the known album slugs are valid routes — anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return albumPageSlugs.map((album) => ({ album }));
}

// Everything derived from the live chart + cert data, looked up by title, so
// an album page never drifts from /records/charts or /certifications.
function albumData(title: string) {
  const record = albums.find((a) => a.title === title);
  const chart = albumCharts.find((r) => r.title === title);
  const cert = allItems.find((r) => r.title === title);

  const entries = chart ? [...chart.entries].sort((a, b) => a.peak - b.peak) : [];
  const countryEntries = entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX");
  const bestPeak = entries.length ? entries[0].peak : null;

  const certs = cert ? [...cert.certs] : [];
  const tierRank = { diamond: 0, platinum: 1, gold: 2, silver: 3 } as const;
  certs.sort(
    (a, b) => tierRank[tierOf(a.level)] - tierRank[tierOf(b.level)] || (b.x ?? 1) - (a.x ?? 1)
  );

  return { record, entries, countryEntries, bestPeak, certs };
}

// A track that has its own deep-dive page links there. Track names carry
// feature credits ("Level Up (feat. Youssou N'Dour)"); song titles don't.
function songPageFor(track: string) {
  const bare = track.replace(/\s*\(feat\..*$/i, "").trim();
  return songs.find((s) => s.title.toLowerCase() === bare.toLowerCase());
}

export async function generateMetadata({ params }: { params: Promise<{ album: string }> }) {
  const { album: slug } = await params;
  const page = albumPageBySlug(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/music/albums/${page.slug}`,
    shareTitle: `${page.title} — Burna Boy`,
    shareDescription: page.tagline,
  });
}

export default async function AlbumPage({ params }: { params: Promise<{ album: string }> }) {
  const { album: slug } = await params;
  const page = albumPageBySlug(slug);
  if (!page) notFound();

  const { record, entries, countryEntries, bestPeak, certs } = albumData(page.title);
  if (!record) notFound();

  const peakLabel = bestPeak === 1 ? "No. 1" : bestPeak != null ? `No. ${bestPeak}` : "—";
  const longestWordLength = (v: string) =>
    Math.max(...v.split(/\s+/).map((w) => w.length));

  const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);
  const facts = [
    countryEntries.length > 0 && {
      v: `${countryEntries.length}`,
      l: plural(countryEntries.length, "country charted", "countries charted"),
    },
    bestPeak != null && { v: peakLabel, l: "best album-chart peak worldwide" },
    certs.length > 0 && {
      v: `${certs.length}`,
      l: plural(certs.length, "certification worldwide", "certifications worldwide"),
    },
    ...page.extraFacts,
  ].filter(Boolean) as { v: string; l: string }[];

  // Wraps at the end of the list, so "next" is never a dead end once more
  // albums have pages; with one page it simply links itself away via /music.
  const idx = albumPages.findIndex((a) => a.slug === page.slug);
  const nextAlbum = albumPages[(idx + 1) % albumPages.length];

  const albumJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: page.title,
    byArtist: { "@type": "MusicGroup", name: "Burna Boy" },
    datePublished: String(record.year),
    numTracks: record.tracks.length,
    url: `${CANONICAL_ORIGIN}/music/albums/${page.slug}`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Music", item: `${CANONICAL_ORIGIN}/music` },
      { "@type": "ListItem", position: 3, name: page.title, item: `${CANONICAL_ORIGIN}/music/albums/${page.slug}` },
    ],
  };

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(albumJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className={styles.crumbs} aria-label="Breadcrumb">
        <Link href="/music">← Music</Link>
        <span aria-hidden="true">/</span>
        <span className={styles.crumbCurrent}>{page.title}</span>
      </nav>

      <div className={styles.mobileBackBar}>
        <BackLink href="/music" aria-label="Back to music" className={styles.mobileBackBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.mobileBackLabel}>{page.title}</span>
        <span className={styles.mobileBackYear}>{record.year}</span>
        <MobileMenuButton />
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.heroPad}>
        <div className={styles.heroCard}>
          {record.cover && (
            // eslint-disable-next-line @next/next/no-img-element -- decorative backdrop; next/image can't blur-scale a remote CDN image here
            <img className={styles.heroBackdrop} src={spotifyImage(record.cover, 300)} alt="" aria-hidden="true" />
          )}
          <div className={styles.heroScrim} />
          <div className={styles.heroGrid}>
            {record.cover && (
              // eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN cover with an explicit srcset
              <img
                className={styles.cover}
                src={spotifyImage(record.cover, 300)}
                srcSet={spotifySrcSet(record.cover)}
                sizes="236px"
                alt={`${page.title} cover`}
                width={236}
                height={236}
              />
            )}
            <div>
              <div className={styles.kicker}>Studio album · {record.year} · {record.label}</div>
              <h1 className={`${styles.title} ${page.title.length > 14 ? styles.titleLong : ""}`}>
                {page.title}
              </h1>
              <p className={styles.tagline}>{page.tagline}</p>
              <div className={styles.heroActions}>
                {record.spotify && (
                  <a className="btn btnPrimary" href={record.spotify} target="_blank" rel="noopener noreferrer">
                    ▶ Play on Spotify ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <p className={styles.blurb}>{page.blurb}</p>
      </section>

      {/* ── By the numbers ───────────────────────────────────── */}
      <section className={styles.sectionPad} aria-labelledby="album-numbers">
        <h2 id="album-numbers" className={styles.h2}>By the numbers</h2>
        <div className={styles.numGrid}>
          {facts.slice(0, 8).map((f, i) => (
            <div key={f.l} className={`${styles.numCard} ${i === 0 ? styles.numCardLead : ""}`}>
              <span className={styles.numHead}>
                <span
                  className={`${styles.numValue} ${i === 0 ? styles.numValueLead : ""} ${
                    longestWordLength(f.v) > 9 ? styles.numValueLong : ""
                  }`}
                >
                  {f.v}
                </span>
              </span>
              <span className={styles.numLabel}>{f.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Chart peaks ──────────────────────────────────────── */}
      {entries.length > 0 && (
        <section className={styles.sectionPad} aria-labelledby="album-charts">
          <div className={styles.sectionHead}>
            <h2 id="album-charts" className={styles.h2}>Album chart peaks</h2>
            <span className={styles.sectionMeta}>
              {entries.length} {entries.length === 1 ? "chart" : "charts"} · best No. {bestPeak}
            </span>
            <div className={styles.legend}>
              <span className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.dotOne}`} aria-hidden="true" />
                No. 1
              </span>
              <span className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.dotTen}`} aria-hidden="true" />
                Top 10
              </span>
              <span className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.dotForty}`} aria-hidden="true" />
                Top 40
              </span>
            </div>
          </div>
          <div className={styles.pills}>
            {entries.map((e) => {
              const c = CHART_COUNTRIES[e.c];
              return (
                <span
                  key={e.c}
                  className={`${styles.peak} ${styles[chartTier(e.peak)]}`}
                  title={`${c.name} — ${c.body}`}
                >
                  <span className={styles.flag} aria-hidden="true">{c.flag}</span>#{e.peak}
                  <span className={styles.peakName}>{c.name}</span>
                </span>
              );
            })}
          </div>
          <p className={styles.source}>
            Peak positions on each country&apos;s principal official albums chart. See the full{" "}
            <Link href="/records/charts">chart records</Link>.
          </p>
        </section>
      )}

      {/* ── Certifications ───────────────────────────────────── */}
      {certs.length > 0 && (
        <section className={styles.sectionPad} aria-labelledby="album-certs">
          <div className={styles.sectionHead}>
            <h2 id="album-certs" className={styles.h2}>Certifications</h2>
            <span className={styles.sectionMeta}>
              {certs.length} {certs.length === 1 ? "award" : "awards"}
            </span>
          </div>
          <div className={styles.pills}>
            {certs.map((cert) => {
              const c = COUNTRIES[cert.c];
              return (
                <span
                  key={cert.c}
                  className={`${styles.cert} ${styles[tierOf(cert.level)]}`}
                  title={`${c?.name ?? cert.c} — ${cert.x ? `${cert.x}× ` : ""}${cert.level}`}
                >
                  <span className={styles.flag} aria-hidden="true">{c?.flag}</span>
                  {cert.x ? `${cert.x}× ` : ""}{cert.level}
                  <span className={styles.certCountry}>{c?.name ?? cert.c}</span>
                </span>
              );
            })}
          </div>
          <p className={styles.source}>
            Official certifications, read from each issuing body. See{" "}
            <Link href="/certifications">all certifications</Link>.
          </p>
        </section>
      )}

      {/* ── Tracklist ────────────────────────────────────────── */}
      <section className={styles.sectionPad} aria-labelledby="album-tracks">
        <div className={styles.sectionHead}>
          <h2 id="album-tracks" className={styles.h2}>Tracklist</h2>
          <span className={styles.sectionMeta}>{record.tracks.length} tracks</span>
        </div>
        <ol className={albumStyles.trackList}>
          {record.tracks.map((t, i) => {
            const sp = songPageFor(t);
            return (
              <li key={`${t}-${i}`} className={albumStyles.track}>
                <span className={albumStyles.trackNum}>{i + 1}</span>
                {sp ? (
                  <Link href={`/music/${sp.slug}`} className={albumStyles.trackLink}>
                    {t}
                    <span className={albumStyles.trackMore}>song page →</span>
                  </Link>
                ) : (
                  <span className={albumStyles.trackName}>{t}</span>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className={`${styles.sectionPad} ${styles.desktopOnly}`} aria-labelledby="album-faq">
        <h2 id="album-faq" className={styles.h2}>Frequently asked</h2>
        <div className={styles.faqList}>
          {page.faqs.map((f) => (
            <div key={f.q} className={styles.faqItem}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Onward ───────────────────────────────────────────── */}
      <section className={styles.onward}>
        <Link href="/music" className="btn btnSecondary">← Full discography</Link>
        {nextAlbum.slug !== page.slug && (
          <Link href={`/music/albums/${nextAlbum.slug}`} className="btn btnPrimary">
            Next album: {nextAlbum.title} →
          </Link>
        )}
        <Link href="/records/awards" className="btn btnSecondary">Awards &amp; wins ↗</Link>
      </section>

      <div className={styles.desktopOnly}>
        <KeepExploring current="/music" />
      </div>
    </main>
  );
}
