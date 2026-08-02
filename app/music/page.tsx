import Link from "next/link";
import BreadcrumbBar from "../components/BreadcrumbBar";
import TracklistTrigger from "../components/TracklistTrigger";
import MobileMusic from "../components/MobileMusic";
import TracklistDialog from "../components/TracklistDialog";
import Discography from "../components/Discography";
import styles from "./music.module.css";
import { albums, eps, compilations } from "../data/albums";
import KeepExploring from "../components/KeepExploring";
import { spotifyImage, spotifySrcSet } from "../lib/spotifyImage";
import { songs as songPages } from "../data/songs";
import { siteUrl } from "../site";
import { pageMetadata } from "../lib/seo";

// Deep-dive song pages, Dai Dai (its own bespoke page) featured first.
const songStories = [
  {
    href: "/dai-dai",
    cover: "https://i.scdn.co/image/ab67616d0000b27303cadf1b3fe324c1dc710ed4",
    title: "Dai Dai",
    tag: "The 2026 FIFA World Cup anthem, with Shakira",
  },
  ...songPages.map((s) => ({ href: `/music/${s.slug}`, cover: s.cover, title: s.title, tag: s.tagline })),
];

export const metadata = pageMetadata({
  title: `Burna Boy Discography — All ${albums.length} Studio Albums, EPs & Songs`,
  description: `Burna Boy's full discography: ${albums.length} studio albums (L.I.F.E to No Sign of Weakness), ${eps.length} EPs, tracklists, biggest hits and guest features.`,
  path: "/music",
  shareTitle: "Burna Boy Discography",
  shareDescription: "Albums, EPs, tracklists and hits.",
});

// Structured data: the album catalogue + breadcrumb trail for rich results.
const musicJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      name: "Burna Boy",
      url: `${siteUrl}/music`,
      album: [...albums, ...eps, ...compilations].map((a) => ({
        "@type": "MusicAlbum",
        name: a.title,
        datePublished: String(a.year),
        numTracks: a.tracks.length,
        byArtist: { "@type": "MusicGroup", name: "Burna Boy" },
        ...(a.cover ? { image: a.cover } : {}),
        ...(a.spotify ? { sameAs: a.spotify } : {}),
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Music", item: `${siteUrl}/music` },
      ],
    },
  ],
};

const latest = [...albums].sort((a, b) => b.year - a.year)[0];
const allYears = [...albums, ...eps, ...compilations].map((a) => a.year);
const firstYear = Math.min(...albums.map((a) => a.year));
const lastYear = Math.max(...albums.map((a) => a.year));

const counts = [
  { value: String(albums.length), label: "Studio albums" },
  { value: String(eps.length), label: eps.length === 1 ? "EP" : "EPs" },
  { value: String(compilations.length), label: compilations.length === 1 ? "Compilation" : "Compilations" },
  // Inclusive of both ends: 2013–2025 is thirteen years, not twelve.
  { value: String(lastYear - firstYear + 1), label: `Years, ${firstYear}—${lastYear}` },
];

export default function MusicPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(musicJsonLd) }} />

      {/* One dialog for the page, outside the desktop-only wrapper so the
          mobile grid can open it too. */}
      <TracklistDialog
        releases={[
          ...albums.map((a) => ({ ...a, kind: "Album" })),
          ...eps.map((a) => ({ ...a, kind: "EP" })),
          ...compilations.map((a) => ({ ...a, kind: "Compilation" })),
        ]}
      />

      {/* Mobile is its own screen in this design — a count strip, the latest
          album as a card, a two-up grid and stacked song rows. */}
      <MobileMusic albums={albums} eps={eps} compilations={compilations} songs={songStories} />

      <div className={styles.desktopOnly}>
      <BreadcrumbBar path="/music" />

      {/* ── Hero: catalogue counts left, the latest album right ──────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              The catalogue
            </div>
            <h1 className={styles.h1}>
              The <span className="inkText">Music</span>
            </h1>
            <p className={styles.lede}>
              {albums.length === 8 ? "Eight" : albums.length} studio albums,{" "}
              {eps.length === 2 ? "two" : eps.length} EPs and{" "}
              {compilations.length === 1 ? "one early compilation" : `${compilations.length} compilations`}{" "}
              — every tracklist, label and release year, with the song stories behind the
              biggest records.
            </p>
            <div className={styles.counts}>
              {counts.map((c) => (
                <div key={c.label} className={styles.countCell}>
                  <div className={styles.countValue}>{c.value}</div>
                  <div className={styles.countLabel}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.latest}>
            <div className={styles.kicker}>Latest album</div>
            <div className={styles.latestRow}>
              {/* eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN art */}
              <img
                className={styles.latestCover}
                src={spotifyImage(latest.cover ?? "", 600)}
                srcSet={spotifySrcSet(latest.cover ?? "")}
                sizes="160px"
                alt={`${latest.title} album cover`}
                width={160}
                height={160}
              />
              <div>
                <h2 className={styles.latestTitle}>{latest.title}</h2>
                <div className={styles.latestMeta}>
                  {latest.year} · {latest.label} · {latest.tracks.length} tracks
                </div>
                <p className={styles.latestText}>
                  His {albums.length === 8 ? "eighth" : `${albums.length}th`} studio album,
                  featuring Travis Scott, Shaboozey, Mick Jagger and Stromae. In 2026 he
                  followed it with “Dai Dai” alongside Shakira — the official FIFA World Cup
                  song.
                </p>
              </div>
            </div>
            <div className={styles.latestActions}>
              <TracklistTrigger title={latest.title} />
              <Link href="/dai-dai" className="btn btnSecondary">The Dai Dai story ↗</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Studio albums ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.wide}>
          <div className={styles.head}>
            <div>
              <div className={styles.kicker}>Discography</div>
              <h2 className={styles.h2}>Studio albums</h2>
            </div>
            <p className={styles.headLede}>
              Tap any cover for the full tracklist and a link to listen. Artwork via Spotify.
            </p>
            <Link href="/certifications" className={`btn btnSecondary ${styles.headBtn}`}>
              Certifications ↗
            </Link>
          </div>
          <Discography albums={albums} layout="grid" />
        </div>
      </section>

      {/* ── EPs + compilation ────────────────────────────────────────── */}
      <section className={styles.altSection}>
        <div className={`${styles.wide} ${styles.splitGrid}`}>
          <div>
            <div className={styles.kicker}>Also released</div>
            <h2 className={styles.h2Tight}>{eps.length === 1 ? "EP" : "EPs"}</h2>
            <p className={styles.blockLede}>Two short-form releases, seven years apart.</p>
            <Discography albums={eps} layout="pair" />
          </div>
          <div>
            <div className={styles.kicker}>From the vault</div>
            <h2 className={styles.h2Tight}>
              {compilations.length === 1 ? "Compilation" : "Compilations"}
            </h2>
            <p className={styles.blockLede}>
              An early Aristokrat-era collection, released before the studio catalogue.
            </p>
            <Discography albums={compilations} layout="wide" />
          </div>
        </div>
      </section>

      {/* ── Song stories ─────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.wide}>
          <div className={styles.head}>
            <div>
              <div className={styles.kicker}>Song stories</div>
              <h2 className={styles.h2}>The songs, in depth</h2>
            </div>
            <p className={styles.headLede}>
              The full history, chart run and certifications behind his biggest records.
            </p>
            <span className={styles.pageCount}>{songStories.length} pages</span>
          </div>
          <div className={styles.songGrid}>
            {songStories.map((s) => (
              <Link key={s.href} href={s.href} className={styles.songCard}>
                {/* eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN art */}
                <img
                  className={styles.songCover}
                  src={spotifyImage(s.cover, 300)}
                  srcSet={spotifySrcSet(s.cover)}
                  sizes="72px"
                  alt=""
                  width={72}
                  height={72}
                  loading="lazy"
                />
                <span className={styles.songMeta}>
                  <span className={styles.songTitle}>{s.title}</span>
                  <span className={styles.songTag}>{s.tag}</span>
                </span>
                <span className={styles.songArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <KeepExploring current="/music" />
      </div>
    </main>
  );
}
