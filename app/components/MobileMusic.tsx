"use client"; // the album cards open the shared tracklist dialog

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileMusic.module.css";
import { spotifyImage, spotifySrcSet } from "../lib/spotifyImage";
import type { AlbumEntry } from "../data/albums";

/**
 * The mobile music screen.
 *
 * A distinct screen, not the desktop page narrowed: a four-up count strip, the
 * latest album as a bordered card, a two-up album grid and the song stories as
 * stacked rows. Built from designs/mobile/Burna Boy Stats - Mobile.dc.html,
 * screen 03 — which keeps the five-tab bar at the bottom rather than swapping
 * in an action bar, so nothing is rendered here for that.
 *
 * Every figure derives from app/data.
 */
export default function MobileMusic({
  albums,
  eps,
  compilations,
  songs,
}: {
  albums: AlbumEntry[];
  eps: AlbumEntry[];
  compilations: AlbumEntry[];
  songs: { href: string; cover: string; title: string; tag: string }[];
}) {
  const latest = [...albums].sort((a, b) => b.year - a.year)[0];
  const firstYear = Math.min(...albums.map((a) => a.year));
  const lastYear = Math.max(...albums.map((a) => a.year));

  const counts = [
    { value: String(albums.length), label: "Albums" },
    { value: String(eps.length), label: eps.length === 1 ? "EP" : "EPs" },
    { value: String(compilations.length), label: "Comp" },
    // Inclusive of both ends: 2013–2025 is thirteen years, not twelve.
    { value: String(lastYear - firstYear + 1), label: "Years" },
  ];

  // Newest first — the phone screen leads with what just came out.
  const discography = [...albums].sort((a, b) => b.year - a.year);

  const SONGS_SHOWN = 5;
  const [allSongs, setAllSongs] = useState(false);
  const shownSongs = allSongs ? songs : songs.slice(0, SONGS_SHOWN);

  // One card renderer for albums, EPs and the compilation — same grammar,
  // different lists.
  const releaseCard = (a: AlbumEntry) => (
    <button
      key={a.title}
      type="button"
      className={styles.albumCard}
      aria-label={`View the tracklist for ${a.title}`}
      onClick={() =>
        window.dispatchEvent(new CustomEvent("open-tracklist", { detail: a.title }))
      }
    >
      <span
        className={styles.albumCover}
        style={a.cover ? { backgroundImage: `url(${spotifyImage(a.cover, 300)})` } : undefined}
      />
      <span className={styles.albumTitle}>{a.title}</span>
      <span className={styles.albumMeta}>
        <span>{a.year}</span>
        <span className={styles.albumTracks}>{a.tracks.length} trk</span>
      </span>
    </button>
  );

  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <Link href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Music</span>
        <Link href="/certifications" className={styles.backLink}>Certs ↗</Link>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>The catalogue</div>
        {/* Deliberately not an <h1>. Both layouts sit in the DOM at once — one
            is CSS-hidden, not removed — so a second <h1> would give the page
            two, which the SEO gate rejects. The desktop block keeps the single
            document heading; this renders the same words at the mobile size. */}
        <p className={styles.h1}>
          The <span className={styles.gold}>Music</span>
        </p>
        <p className={styles.lede}>
          {albums.length === 8 ? "Eight" : albums.length} studio albums,{" "}
          {eps.length === 2 ? "two" : eps.length} EPs and{" "}
          {compilations.length === 1 ? "one early compilation" : `${compilations.length} compilations`}{" "}
          — every tracklist, label and release year.
        </p>
        <div className={styles.countGrid}>
          {counts.map((c) => (
            <div key={c.label} className={styles.countCell}>
              <div className={styles.countValue}>{c.value}</div>
              <div className={styles.countLabel}>{c.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest album */}
      <div className={styles.latest}>
        <div className={styles.kicker}>Latest album</div>
        <div className={styles.latestRow}>
          {/* eslint-disable-next-line @next/next/no-img-element -- remote Spotify CDN art */}
          <img
            className={styles.latestCover}
            src={spotifyImage(latest.cover ?? "", 300)}
            srcSet={spotifySrcSet(latest.cover ?? "")}
            sizes="96px"
            alt={`${latest.title} album cover`}
            width={96}
            height={96}
          />
          <div>
            <div className={styles.latestTitle}>{latest.title}</div>
            <div className={styles.latestMeta}>
              {latest.year} · {latest.tracks.length} tracks
            </div>
            <div className={styles.latestText}>
              Travis Scott, Shaboozey, Mick Jagger and Stromae.
            </div>
          </div>
        </div>
        <button
          type="button"
          className={styles.latestCta}
          onClick={() =>
            window.dispatchEvent(new CustomEvent("open-tracklist", { detail: latest.title }))
          }
        >
          See the tracklist<span aria-hidden="true">↗</span>
        </button>
      </div>

      {/* Studio albums */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.kicker}>Discography</div>
            <h2 className={styles.h2}>Studio albums</h2>
          </div>
          <span className={styles.headNote}>Tap for tracks</span>
        </div>
        <div className={styles.albumGrid}>{discography.map(releaseCard)}</div>
      </section>

      {/* EPs and the compilation — not on the design's mobile screen, which
          stops at the studio albums, but the catalogue is incomplete without
          them and every one has a tracklist worth reaching. */}
      <section className={styles.sectionFlush}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.kicker}>Also released</div>
            <h2 className={styles.h2}>
              {eps.length === 1 ? "EP" : "EPs"} &amp;{" "}
              {compilations.length === 1 ? "compilation" : "compilations"}
            </h2>
          </div>
          <span className={styles.headNote}>Tap for tracks</span>
        </div>
        <div className={styles.albumGrid}>
          {[...eps, ...compilations].map(releaseCard)}
        </div>
      </section>

      {/* Song stories */}
      <section className={styles.sectionFlush}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.kicker}>Song stories</div>
            <h2 className={styles.h2}>In depth</h2>
          </div>
          <span className={styles.headNote}>{songs.length} pages</span>
        </div>
        <div className={styles.songList}>
          {shownSongs.map((s) => (
            <Link key={s.href} href={s.href} className={styles.songRow}>
              <span
                className={styles.songCover}
                style={{ backgroundImage: `url(${spotifyImage(s.cover, 300)})` }}
              />
              <span className={styles.songMeta}>
                <span className={styles.songTitle}>{s.title}</span>
                <span className={styles.songTag}>{s.tag}</span>
              </span>
              <span className={styles.songArrow} aria-hidden="true">↗</span>
            </Link>
          ))}
          {songs.length > SONGS_SHOWN && (
            <button
              type="button"
              className={styles.moreBtn}
              aria-expanded={allSongs}
              onClick={() => setAllSongs((o) => !o)}
            >
              {allSongs ? "Show fewer" : `All ${songs.length} song stories`}
              <span aria-hidden="true">{allSongs ? "↑" : `+${songs.length - SONGS_SHOWN}`}</span>
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
