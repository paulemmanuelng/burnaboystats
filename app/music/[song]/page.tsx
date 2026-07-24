import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./song.module.css";
import KeepExploring from "../../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN } from "../../lib/seo";
import { spotifyImage, spotifySrcSet } from "../../lib/spotifyImage";
import { songBySlug, songSlugs, type Song } from "../../data/songs";
import { allChartItems, CHART_COUNTRIES, chartTier } from "../../data/charts";
import { allItems, COUNTRIES, tierOf } from "../../data/certifications";

// Only the known song slugs are valid routes — anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return songSlugs.map((song) => ({ song }));
}

// Everything derived from the live chart + cert data, looked up by title, so a
// song page never drifts from /records/charts or /certifications.
function songData(song: Song) {
  const chart = allChartItems.find((r) => r.title === song.title);
  const cert = allItems.find((r) => r.title === song.title);

  const entries = chart ? [...chart.entries].sort((a, b) => a.peak - b.peak) : [];
  const countryEntries = entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX");
  const bestPeak = entries.length ? entries[0].peak : null;
  const no1Countries = countryEntries.filter((e) => e.peak === 1).length;

  const certs = cert ? [...cert.certs] : [];
  const tierRank = { diamond: 0, platinum: 1, gold: 2, silver: 3 } as const;
  certs.sort(
    (a, b) => tierRank[tierOf(a.level)] - tierRank[tierOf(b.level)] || (b.x ?? 1) - (a.x ?? 1)
  );

  return { entries, countryEntries, bestPeak, no1Countries, certs };
}

export async function generateMetadata({ params }: { params: Promise<{ song: string }> }) {
  const { song: slug } = await params;
  const song = songBySlug(slug);
  if (!song) return {};
  return pageMetadata({
    title: song.metaTitle,
    description: song.metaDescription,
    path: `/music/${song.slug}`,
    shareTitle: `${song.title} — Burna Boy`,
    shareDescription: song.tagline,
  });
}

export default async function SongPage({ params }: { params: Promise<{ song: string }> }) {
  const { song: slug } = await params;
  const song = songBySlug(slug);
  if (!song) notFound();

  const { entries, countryEntries, bestPeak, no1Countries, certs } = songData(song);
  const credit = song.credit ?? `Burna Boy · ${song.year}`;
  const peakLabel = bestPeak === 1 ? "No. 1" : bestPeak != null ? `No. ${bestPeak}` : "—";

  // Auto "by the numbers" from the data, then the song's curated extras.
  const autoFacts = [
    countryEntries.length > 0 && { v: `${countryEntries.length}`, l: "countries charted" },
    bestPeak != null && { v: peakLabel, l: "best chart peak worldwide" },
    no1Countries > 0 && { v: `${no1Countries}`, l: "countries at No. 1" },
    certs.length > 0 && { v: `${certs.length}`, l: "certifications worldwide" },
    // Live figure — the stats bot keeps this current hourly.
    song.ytViews && { v: song.ytViews, l: "YouTube views for the official video" },
  ].filter(Boolean) as { v: string; l: string }[];
  const facts = [...autoFacts, ...song.extraFacts].slice(0, 8);

  const recordingJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: song.title,
    byArtist: song.credit
      ? song.credit.split(" ft. ").flatMap((n) => n.split(" & ")).map((name) => ({ "@type": "MusicGroup", name: name.trim() }))
      : { "@type": "MusicGroup", name: "Burna Boy" },
    inAlbum: { "@type": "MusicAlbum", name: song.album },
    datePublished: String(song.year),
    url: `${CANONICAL_ORIGIN}/music/${song.slug}`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: song.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 3, name: song.title, item: `${CANONICAL_ORIGIN}/music/${song.slug}` },
    ],
  };

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recordingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="container">
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/music">← Music</Link>
        </nav>

        <header className={styles.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.cover}
            src={spotifyImage(song.cover, 300)}
            srcSet={spotifySrcSet(song.cover)}
            sizes="(max-width: 560px) 40vw, 220px"
            alt={`${song.title} cover`}
            width={220}
            height={220}
          />
          <div className={styles.heroText}>
            <span className={styles.kicker}>{song.album} · {song.year}</span>
            <h1 className={styles.title}>{song.title}</h1>
            <p className={styles.credit}>{credit}</p>
            <p className={styles.tagline}>{song.tagline}</p>
            {song.spotify && (
              <a className="btn btnPrimary" href={song.spotify} target="_blank" rel="noopener noreferrer">
                ▶ Play on Spotify ↗
              </a>
            )}
          </div>
        </header>

        <p className={styles.blurb}>{song.blurb}</p>

        <section className={styles.numbers} aria-labelledby="song-numbers">
          <h2 id="song-numbers" className={`secTitle ${styles.secTitle}`}>
            <span className="goldText">By the numbers</span>
          </h2>
          <div className={styles.numGrid}>
            {facts.map((f) => (
              <div key={f.l} className={styles.numCard}>
                <span className={styles.numValue}>{f.v}</span>
                <span className={styles.numLabel}>{f.l}</span>
              </div>
            ))}
          </div>
        </section>

        {entries.length > 0 && (
          <section className={styles.section} aria-labelledby="song-charts">
            <h2 id="song-charts" className={`secTitle ${styles.secTitle}`}>
              <span className="goldText">Chart peaks</span>
            </h2>
            <div className={styles.peaks}>
              {entries.map((e) => {
                const c = CHART_COUNTRIES[e.c];
                return (
                  <span
                    key={e.c}
                    className={`${styles.peak} ${styles[chartTier(e.peak)]}`}
                    title={`${c.name} — ${c.body}`}
                  >
                    <span className={styles.flag}>{c.flag}</span>#{e.peak}
                  </span>
                );
              })}
            </div>
            <p className={styles.source}>
              Peak positions on each country&apos;s principal official chart. See the full{" "}
              <Link href="/records/charts">chart records</Link>.
            </p>
          </section>
        )}

        {certs.length > 0 && (
          <section className={styles.section} aria-labelledby="song-certs">
            <h2 id="song-certs" className={`secTitle ${styles.secTitle}`}>
              <span className="goldText">Certifications</span>
            </h2>
            <div className={styles.certs}>
              {certs.map((cert) => {
                const c = COUNTRIES[cert.c];
                return (
                  <span key={cert.c} className={`${styles.cert} ${styles[tierOf(cert.level)]}`}>
                    <span className={styles.flag}>{c?.flag}</span>
                    {cert.x ? `${cert.x}× ` : ""}{cert.level}
                    <span className={styles.certCountry}>{c?.name ?? cert.c}</span>
                  </span>
                );
              })}
            </div>
            <p className={styles.source}>
              Official certifications (RIAA, BPI, SNEP, and more). See{" "}
              <Link href="/certifications">all certifications</Link>.
            </p>
          </section>
        )}

        <section className={styles.section} aria-labelledby="song-faq">
          <h2 id="song-faq" className={`secTitle ${styles.secTitle}`}>
            <span className="goldText">Frequently asked</span>
          </h2>
          <div className={styles.faqList}>
            {song.faqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <KeepExploring current="/music" />
    </main>
  );
}
