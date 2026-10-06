"use client"; // the cards open the shared tracklist dialog

import Link from "next/link";
import styles from "../music/music.module.css";
import { spotifyBgVars } from "../lib/spotifyImage";
import { opensDialog } from "../lib/clickIntent";
import type { AlbumEntry } from "../data/albums";
import { albumPageByTitle } from "../data/albumPages";

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
              <span className={styles.cardLabel}>{a.year} · {a.credit ? `${a.credit} · ` : ""}{a.label}</span>
              <span className={styles.cardTracks} title={a.editionNote}>{a.tracks.length} tracks{a.editionNote ? " (standard)" : ""} ↗</span>
            </span>
          </button>
        ))}
      </>
    );
  }

  // A studio album with its own page is a real link to it: /music printed no
  // /music/albums/ href at all (5 Oct 2026, music-09), so crawlers and no-JS
  // readers had no path from the hub to the eight album pages, and the only
  // route was a button inside a dialog that mounts on tap. The plain click
  // still opens the dialog; EPs and the compilation have no page and stay
  // buttons.
  return (
    <div className={layout === "pair" ? styles.pairGrid : styles.albumGrid}>
      {albums.map((a) => {
        const inner = (
          <>
            <span className={styles.albumCover} style={cover(a)} />
            <span className={styles.albumRow}>
              <span className={styles.albumTitle}>{a.title}</span>
              <span className={styles.albumYear}>{a.year}</span>
            </span>
            <span className={styles.cardLabel}>{a.credit ? `${a.credit} · ` : ""}{a.label}</span>
            <span className={styles.cardTracks} title={a.editionNote}>{a.tracks.length} tracks{a.editionNote ? " (standard)" : ""} ↗</span>
          </>
        );
        const page = albumPageByTitle(a.title);
        return page ? (
          <Link
            key={a.title}
            href={`/music/albums/${page.slug}`}
            prefetch={false}
            className={styles.albumCard}
            aria-haspopup="dialog"
            aria-label={`View the tracklist for ${a.title}`}
            onClick={(e) => {
              if (!opensDialog(e)) return;
              e.preventDefault();
              open(a.title);
            }}
          >
            {inner}
          </Link>
        ) : (
          <button
            key={a.title}
            className={styles.albumCard}
            onClick={() => open(a.title)}
            aria-label={`View the tracklist for ${a.title}`}
          >
            {inner}
          </button>
        );
      })}
    </div>
  );
}
