"use client"; // the cards open the shared tracklist dialog

import styles from "../music/music.module.css";
import { spotifyBgVars } from "../lib/spotifyImage";
import type { AlbumEntry } from "../data/albums";

/**
 * The release grids.
 *
 * One component, three layouts, because all three open the same dialog:
 * "grid" is the four-across album wall, "pair" the two-up EP grid, and "wide"
 * the single compilation row. The dialog itself lives in TracklistDialog,
 * rendered once per page, so the mobile screen can open it too.
 */
export default function Discography({
  albums,
  layout = "grid",
}: {
  albums: AlbumEntry[];
  layout?: "grid" | "pair" | "wide";
}) {
  // 283px in the four-across wall, so 300 on a 1x screen and 640 on a 2x one.
  const cover = (a: AlbumEntry) => (a.cover ? spotifyBgVars(a.cover, 300) : undefined);

  const open = (title: string) =>
    window.dispatchEvent(new CustomEvent("open-tracklist", { detail: title }));

  if (layout === "wide") {
    return (
      <>
        {albums.map((a) => (
          <button key={a.title} className={styles.wideCard} onClick={() => open(a.title)}>
            <span className={styles.wideCover} style={cover(a)} />
            <span>
              <span className={styles.wideTitle}>{a.title}</span>
              <span className={styles.cardLabel}>{a.year} · {a.label}</span>
              <span className={styles.cardTracks}>{a.tracks.length} tracks ↗</span>
            </span>
          </button>
        ))}
      </>
    );
  }

  return (
    <div className={layout === "pair" ? styles.pairGrid : styles.albumGrid}>
      {albums.map((a) => (
        <button
          key={a.title}
          className={styles.albumCard}
          onClick={() => open(a.title)}
          aria-label={`View the tracklist for ${a.title}`}
        >
          <span className={styles.albumCover} style={cover(a)} />
          <span className={styles.albumRow}>
            <span className={styles.albumTitle}>{a.title}</span>
            <span className={styles.albumYear}>{a.year}</span>
          </span>
          <span className={styles.cardLabel}>{a.label}</span>
          <span className={styles.cardTracks}>{a.tracks.length} tracks ↗</span>
        </button>
      ))}
    </div>
  );
}
