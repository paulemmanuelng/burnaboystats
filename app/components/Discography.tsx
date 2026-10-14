"use client"; // the track-count buttons open the shared tracklist dialog

import Link from "next/link";
import styles from "../music/music.module.css";
import { spotifyBgVars } from "../lib/spotifyImage";
import type { AlbumEntry } from "../data/albums";
import { albumPageByTitle } from "../data/albumPages";
import type { ReleaseLines } from "../lib/releaseFigures";

/**
 * The release grids.
 *
 * One component, three layouts: "grid" is the four-across album wall, "pair"
 * the two-up EP grid, and "wide" the single compilation row. The dialog itself
 * lives in TracklistDialog, rendered once per page, so the mobile screen can
 * open it too.
 *
 * A studio album's card is one plain link to its album page, with its two
 * figures and "Album page →" (Job 4, fixes 82 and 83). Its "{n} tracks"
 * control opens the tracklist dialog and sits OUTSIDE the link, over a ghost
 * of itself that holds its place at the card's foot, so the two never nest.
 * EPs and the compilation have no page: their card is not a link, and the
 * track count is its one control (fix 95).
 */
export default function Discography({
  albums,
  layout = "grid",
  figures = {},
}: {
  albums: AlbumEntry[];
  layout?: "grid" | "pair" | "wide";
  /** Each studio album's figures line, by title, built on the server. */
  figures?: Record<string, ReleaseLines>;
}) {
  // 283px in the four-across wall, so 300 on a 1x screen and 640 on a 2x one.
  const cover = (a: AlbumEntry) => (a.cover ? spotifyBgVars(a.cover, 300) : undefined);

  const open = (title: string) =>
    window.dispatchEvent(new CustomEvent("open-tracklist", { detail: title }));

  // "16 tracks": the count ink, the word the pill's muted label. L.I.F.E
  // keeps its built "(standard)" qualifier and the edition note as a title.
  const tracksLabel = (a: AlbumEntry) => (
    <>
      <span className={styles.cardTracks}>{a.tracks.length}</span>&nbsp;tracks{a.editionNote ? " (standard)" : ""}
    </>
  );
  // `over`: placed over the studio card's ghost rather than in the flow.
  const tracksButton = (a: AlbumEntry, over = false) => (
    <button
      type="button"
      className={over ? `${styles.tracksBtn} ${styles.tracksOver}` : styles.tracksBtn}
      aria-haspopup="dialog"
      // Its words first, then whose: eight "{n} tracks" pills need the title.
      aria-label={`${a.tracks.length} tracks${a.editionNote ? " (standard)" : ""}, ${a.title}`}
      title={a.editionNote}
      onClick={() => open(a.title)}
    >
      {tracksLabel(a)}
    </button>
  );

  if (layout === "wide") {
    return (
      <>
        {albums.map((a) => (
          <div key={a.title} className={`${styles.wideCard} ${styles.staticCard}`}>
            <span className={styles.wideCover} style={cover(a)} />
            <span>
              <span className={styles.wideTitle}>{a.title}</span>
              <span className={styles.cardLabel}>{a.year} · {a.credit ? `${a.credit} · ` : ""}{a.label}</span>
              <span className={styles.cardControl}>{tracksButton(a)}</span>
            </span>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className={layout === "pair" ? styles.pairGrid : styles.albumGrid}>
      {albums.map((a) => {
        const page = albumPageByTitle(a.title);
        const head = (
          <>
            <span className={styles.albumCover} style={cover(a)} />
            <span className={styles.albumRow}>
              <span className={styles.albumTitle}>{a.title}</span>
              <span className={styles.albumYear}>{a.year}</span>
            </span>
          </>
        );
        if (!page) {
          return (
            <div key={a.title} className={`${styles.albumCard} ${styles.staticCard}`}>
              {head}
              <span className={styles.cardLabel}>{a.credit ? `${a.credit} · ` : ""}{a.label}</span>
              <span className={styles.cardControl}>{tracksButton(a)}</span>
            </div>
          );
        }
        const f = figures[a.title];
        return (
          <div key={a.title} className={styles.albumItem}>
            <Link href={`/music/albums/${page.slug}`} prefetch={false} className={styles.albumCard}>
              {head}
              {f ? (
                <span className={`${styles.cardFigures} ${f.empty ? styles.cardFiguresEmpty : ""}`}>{f.desk}</span>
              ) : null}
              <span className={styles.cardFoot}>
                <span className={styles.cardPage}>
                  Album page <span className={styles.cardPageArrow} aria-hidden="true">→</span>
                </span>
                {/* Holds the track button's place, so the label never runs under it. */}
                <span className={styles.tracksGhost} aria-hidden="true">
                  {tracksLabel(a)}
                </span>
              </span>
            </Link>
            {tracksButton(a, true)}
          </div>
        );
      })}
    </div>
  );
}
