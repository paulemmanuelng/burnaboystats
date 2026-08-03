"use client"; // owns the dialog's state, focus trap and scroll lock

import { useEffect, useRef, useState } from "react";
import styles from "../music/music.module.css";
import { spotifyImage } from "../lib/spotifyImage";
import type { AlbumEntry } from "../data/albums";

/**
 * The tracklist dialog, rendered once for the whole page.
 *
 * Both layouts open it by dispatching `open-tracklist` with a release title,
 * so the desktop grid and the mobile grid share one dialog — and the mobile
 * screen can reach a tracklist at all, which the prototype could not (its
 * cards simply linked back to the same page).
 */
export type Release = AlbumEntry & { kind: string };

export default function TracklistDialog({ releases }: { releases: Release[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const album = releases.find((a) => a.title === open) ?? null;
  const kind = album?.kind ?? "";
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => setOpen((e as CustomEvent<string>).detail);
    window.addEventListener("open-tracklist", onOpen);
    return () => window.removeEventListener("open-tracklist", onOpen);
  }, []);

  // While the modal is open: trap focus inside it, close on Escape, lock page
  // scroll, and restore focus to the trigger when it closes.
  useEffect(() => {
    if (!album) return;
    lastFocused.current = document.activeElement as HTMLElement | null;
    const node = modalRef.current;
    const getFocusable = (): HTMLElement[] =>
      node
        ? Array.from(
            node.querySelectorAll<HTMLElement>(
              'a[href], button, input, textarea, [tabindex]:not([tabindex="-1"])'
            )
          )
        : [];

    const focusables = getFocusable();
    if (focusables[0]) focusables[0].focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null);
        return;
      }
      if (e.key === "Tab") {
        const els = getFocusable();
        if (els.length === 0) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocused.current?.focus();
    };
  }, [album]);

  const cover = (a: Release) =>
    a.cover ? { backgroundImage: `url(${spotifyImage(a.cover, 600)})` } : undefined;

  if (!album) return null;

  return (
        <div className={styles.backdrop} onClick={() => setOpen(null)} role="presentation">
          <div
            className={styles.dialog}
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${album.title} tracklist`}
          >
            <div className={styles.dialogHead}>
              <span className={styles.dialogCover} style={cover(album)} />
              <div className={styles.dialogMeta}>
                <div className={styles.dialogKicker}>{kind} · {album.year}</div>
                <h3 className={styles.dialogTitle}>{album.title}</h3>
                <div className={styles.dialogSub}>
                  {album.label} · {album.tracks.length} tracks
                </div>
              </div>
              <button
                className={styles.dialogClose}
                onClick={() => setOpen(null)}
                aria-label="Close dialog"
              >
                ×
              </button>
            </div>
            <div className={styles.dialogBody}>
              {album.spotify && (
                <a
                  className={`btn ${styles.spotifyBtn}`}
                  href={album.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play on Spotify ↗
                </a>
              )}
              <div className={styles.trackList}>
                {album.tracks.map((t, i) => (
                  <div key={`${t}-${i}`} className={styles.track}>
                    <span className={styles.trackNum}>{i + 1}</span>
                    <span className={styles.trackName}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  );
}
