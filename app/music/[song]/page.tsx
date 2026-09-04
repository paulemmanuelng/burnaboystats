import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./song.module.css";
import KeepExploring from "../../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN } from "../../lib/seo";
import { spotifyImage, spotifySrcSet } from "../../lib/spotifyImage";
import { songBySlug, songSlugs, songs, type Song } from "../../data/songs";
import { allChartItems, CHART_COUNTRIES, chartTier } from "../../data/charts";
import { allItems, COUNTRIES, tierOf } from "../../data/certifications";
import { albumPageByTitle } from "../../data/albumPages";
import MobileMenuButton from "../../components/MobileMenuButton";
import BackLink from "../../components/BackLink";

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

  // Longest unbreakable run in a stat value. Multi-word values ("21 Mar 2019")
  // wrap at the spaces, but a single long word ("Experimental") can't — and at
  // the full display size it overflows the card, so those step down a tier.
  const longestWordLength = (v: string) =>
    Math.max(...v.split(/\s+/).map((w) => w.length));

  // A song the record simply doesn't hold a figure for. The design is explicit
  // that these slots stay on the page as dashes rather than disappearing —
  // an absent record is itself a fact, and a vanished card looks like a bug.
  const historyOnly = entries.length === 0 && certs.length === 0;

  // Auto "by the numbers" from the data, then the song's curated extras.
  // A song with one certification or one No. 1 is common enough that the labels
  // have to agree with their own numbers — "1 countries at No. 1" was showing.
  const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);
  const autoFacts = [
    countryEntries.length > 0 && {
      v: `${countryEntries.length}`,
      l: plural(countryEntries.length, "country charted", "countries charted"),
    },
    bestPeak != null && { v: peakLabel, l: "best chart peak worldwide" },
    no1Countries > 0 && {
      v: `${no1Countries}`,
      l: plural(no1Countries, "country at No. 1", "countries at No. 1"),
    },
    certs.length > 0 && {
      v: `${certs.length}`,
      l: plural(certs.length, "certification worldwide", "certifications worldwide"),
    },
    // Live figure — the stats bot keeps this current hourly.
    song.ytViews && { v: song.ytViews, l: "YouTube views for the official video" },
    song.spotifyStreams && { v: song.spotifyStreams, l: "Spotify streams" },
  ].filter(Boolean) as { v: string; l: string; missing?: boolean; lead?: boolean }[];
  // Em dash, not zero. The badge names the reason so the reader doesn't have to
  // guess whether the figure is absent or the page is broken.
  // ONE dash card, not three. The design's rule stands — an absent record is
  // itself a fact and stays on the page as a dash — but three dash cells each
  // badged "History only", under a hero chip saying the same thing, over a
  // footnote saying it a fifth time, read as a page full of missing teeth.
  // The statement now appears once here and once in the hero, and the rest of
  // the grid is the figures the record DOES hold.
  const missingFacts = historyOnly
    ? [
        { v: "—", l: "chart or certification record", missing: true },
        // Gold, like any figure the record does hold — panel F.
        { v: `${song.year}`, l: "released", lead: true },
      ]
    : [];
  const facts: { v: string; l: string; missing?: boolean; lead?: boolean }[] = [
    ...missingFacts,
    ...autoFacts,
    ...song.extraFacts,
  ].slice(0, 8);

  // Wraps at the end of the list, so "next" is never a dead end.
  const nextSong = songs[(songs.findIndex((s) => s.slug === song.slug) + 1) % songs.length];

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

      <nav className={styles.crumbs} aria-label="Breadcrumb">
        <Link href="/music">← Music</Link>
        <span aria-hidden="true">/</span>
        <span className={styles.crumbCurrent}>{song.title}</span>
      </nav>

      {/* Screen 26's back bar. Mobile only; the crumbs above take over on
          desktop, which is where the design keeps them. */}
      <div className={styles.mobileBackBar}>
        <BackLink href="/music" aria-label="Back to music" className={styles.mobileBackBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.mobileBackLabel}>{song.title}</span>
        <span className={styles.mobileBackYear}>{song.year}</span>
        <MobileMenuButton />
      </div>

      {/* The cover picker — the design's way of moving between songs. Real
          links, so it works without JS and doubles as internal linking. */}
      <section className={styles.pickerPad}>
        <div className={styles.pickerLabel}>All {songs.length} song pages</div>
        <div className={styles.picker}>
          {songs.map((s) => (
            <Link
              key={s.slug}
              href={`/music/${s.slug}`}
              className={`${styles.pick} ${s.slug === song.slug ? styles.pickOn : ""}`}
              aria-current={s.slug === song.slug ? "page" : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN cover at a fixed 30px; next/image adds no value here */}
              <img className={styles.pickCover} src={spotifyImage(s.cover, 64)} alt="" width={30} height={30} />
              {s.title}
              <span className={styles.pickYear}>{s.year}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.heroPad}>
        <div className={styles.heroCard}>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative backdrop; next/image can't blur-scale a remote CDN image here */}
          <img className={styles.heroBackdrop} src={spotifyImage(song.cover, 300)} alt="" aria-hidden="true" />
          <div className={styles.heroScrim} />
          <div className={styles.heroGrid}>
            {/* eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN cover with an explicit srcset */}
            <img
              className={styles.cover}
              src={spotifyImage(song.cover, 300)}
              srcSet={spotifySrcSet(song.cover)}
              sizes="236px"
              alt={`${song.title} cover`}
              width={236}
              height={236}
            />
            <div>
              <div className={styles.kicker}>
                {albumPageByTitle(song.album) ? (
                  <Link href={`/music/albums/${albumPageByTitle(song.album)!.slug}`}>{song.album}</Link>
                ) : (
                  song.album
                )}{" "}
                · {song.year}
              </div>
              <h1 className={`${styles.title} ${song.title.length > 14 ? styles.titleLong : ""}`}>
                {song.title}
              </h1>
              <p className={styles.credit}>{credit}</p>
              <p className={styles.tagline}>{song.tagline}</p>
              <div className={styles.heroActions}>
                {song.spotify && (
                  <a className="btn btnPrimary" href={song.spotify} target="_blank" rel="noopener noreferrer">
                    ▶ Play on Spotify ↗
                  </a>
                )}
                {entries.length === 0 && certs.length === 0 && (
                  <span className={styles.storyOnly}>
                    No chart or certification record — history only
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <p className={styles.blurb}>{song.blurb}</p>
      </section>

      {/* ── By the numbers ───────────────────────────────────── */}
      {facts.length > 0 && (
        <section className={styles.sectionPad} aria-labelledby="song-numbers">
          <h2 id="song-numbers" className={styles.h2}>By the numbers</h2>
          <div className={styles.numGrid}>
            {facts.map((f, i) => (
              <div key={f.l} className={`${styles.numCard} ${i === 0 && !f.missing ? styles.numCardLead : ""}`}>
                <span className={styles.numHead}>
                  <span
                    className={`${styles.numValue} ${
                      f.missing
                        ? styles.numValueMissing
                        : f.lead || i === 0
                          ? styles.numValueLead
                          : ""
                    } ${longestWordLength(f.v) > 9 ? styles.numValueLong : ""}`}
                  >
                    {f.v}
                  </span>
                  {f.missing && <span className={styles.numBadge}>History only</span>}
                </span>
                <span className={styles.numLabel}>{f.l}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Chart peaks ──────────────────────────────────────── */}
      {entries.length > 0 && (
        <section className={styles.sectionPad} aria-labelledby="song-charts">
          <div className={styles.sectionHead}>
            <h2 id="song-charts" className={styles.h2}>Chart peaks</h2>
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
            Peak positions on each country&apos;s principal official chart. See the full{" "}
            <Link href="/records/charts">chart records</Link>.
          </p>
        </section>
      )}

      {/* ── Certifications ───────────────────────────────────── */}
      {certs.length > 0 && (
        <section className={styles.sectionPad} aria-labelledby="song-certs">
          <div className={styles.sectionHead}>
            <h2 id="song-certs" className={styles.h2}>Certifications</h2>
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
            Official certifications (RIAA, BPI, SNEP, and more). See{" "}
            <Link href="/certifications">all certifications</Link>.
          </p>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {/* Deliberately NOT .desktopOnly. The FAQPage structured data above is
          emitted at every width, but this section used to sit inside that
          wrapper — display: none below 900px. So the 32 questions across these
          14 pages ("Is 'Last Last' certified?", "How high did it chart?") were
          answered for a laptop reader and withheld from a phone reader who had
          searched that exact question and landed here. Googlebot renders at
          phone width too, so the schema was describing content the crawler
          could not see, and markup that does not match the page is a spam
          signal rather than a ranking one.
          Flat list, both widths, every answer open: nobody arrives at a song
          page wanting to tap a question they already asked. */}
      <section className={styles.sectionPad} aria-labelledby="song-faq">
        <h2 id="song-faq" className={styles.h2}>Frequently asked</h2>
        <div className={styles.faqList}>
          {song.faqs.map((f) => (
            <div key={f.q} className={styles.faqItem}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Onward ───────────────────────────────────────────── */}
      {song.spotify && (
        <div className={styles.mobileActionBar}>
          <a
            className={styles.mobilePrimary}
            href={song.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Play on Spotify
          </a>
          <Link href="/share" aria-label="Make a stat card" className={styles.mobileShare}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
              <path d="M12 3v12" />
              <path d="m7 8 5-5 5 5" />
            </svg>
          </Link>
        </div>
      )}

      <section className={styles.onward}>
        <Link href="/music" className="btn btnSecondary">← Full discography</Link>
        <Link href={`/music/${nextSong.slug}`} className="btn btnPrimary">
          Next song: {nextSong.title} →
        </Link>
        <Link href="/dai-dai" className="btn btnSecondary">The Dai Dai story ↗</Link>
      </section>

      <div className={styles.desktopOnly}>
        <KeepExploring current="/music" />
      </div>
    </main>
  );
}
