import Link from "next/link";
import Reveal from "../components/Reveal";
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

export default function MusicPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(musicJsonLd) }} />
      <header className="pageHeader container">
        <h1>
          The <span className="accent">Music</span>
        </h1>
        <p>Eight studio albums and a catalogue of global hits</p>
      </header>

      <div className="container">
        {/* LATEST ALBUM */}
        <Reveal>
          <div className="panel block">
            <p className="eyebrow" style={{ marginBottom: 8 }}>Latest Album</p>
            <h2 className="secTitle">
              No Sign of Weakness{" "}
              <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "1rem" }}>
                (2025)
              </span>
            </h2>
            <p className="lead" style={{ marginTop: 12 }}>
              His eighth studio album — 16 tracks featuring Travis Scott,
              Shaboozey, Mick Jagger and Stromae. In 2026 he followed it with
              “Dai Dai” alongside Shakira, the official FIFA World Cup 2026 song.
            </p>
          </div>
        </Reveal>

        {/* DISCOGRAPHY */}
        <div className="block">
          <Reveal>
            <p className="eyebrow">Discography</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="secTitle">
              Studio <span className="goldText">albums</span>
            </h2>
          </Reveal>
          <p className="cardMeta" style={{ marginTop: 6, marginBottom: 6 }}>
            Tap an album to see its full tracklist.
          </p>
          <Discography albums={albums} />
          <p className="cardMeta" style={{ marginTop: 18, opacity: 0.7 }}>
            Album &amp; EP artwork via Spotify. Tap any cover for the tracklist and a link to listen.
          </p>
        </div>

        {/* EPs + COMPILATION — two columns, one release type each */}
        <div className="block">
          <div className="twoColGrid">
            {/* EPs (left) */}
            <div>
              <Reveal>
                <p className="eyebrow">Also Released</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="secTitle">
                  <span className="goldText">EPs</span>
                </h2>
              </Reveal>
              <p className="cardMeta" style={{ marginTop: 6, marginBottom: 6 }}>
                Tap an EP to see its tracklist.
              </p>
              <Discography albums={eps} indexOffset={4} />
            </div>

            {/* Compilation (right — the slot the features panel used to fill) */}
            <div>
              <Reveal>
                <p className="eyebrow">From the Vault</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="secTitle">
                  <span className="goldText">Compilation</span>
                </h2>
              </Reveal>
              <p className="cardMeta" style={{ marginTop: 6, marginBottom: 6 }}>
                An early Aristokrat-era collection — tap for the full tracklist.
              </p>
              <Discography albums={compilations} indexOffset={6} />
            </div>
          </div>
        </div>

        {/* SONG STORIES — deep-dive pages per signature song (bottom of page) */}
        <div className="block">
          <Reveal>
            <p className="eyebrow">Song stories</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="secTitle">
              The songs, <span className="goldText">in depth</span>
            </h2>
          </Reveal>
          <p className="cardMeta" style={{ marginTop: 6, marginBottom: 14 }}>
            The full history, chart run and certifications behind his biggest records.
          </p>
          <div className={styles.songGrid}>
            {songStories.map((s) => (
              <Link key={s.href} href={s.href} className={styles.songCard}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
      </div>

      <KeepExploring current="/music" />
    </main>
  );
}
