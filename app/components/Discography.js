"use client"; // interactive: tracks which album is open

import { useEffect, useRef, useState } from "react";
import AlbumCover from "./AlbumCover";
import SpotifyIcon from "./SpotifyIcon";

export default function Discography({ albums, indexOffset = 0 }) {
  // Which album's tracklist is open (index), or null for none.
  const [open, setOpen] = useState(null);
  const album = open !== null ? albums[open] : null;
  const modalRef = useRef(null);
  const lastFocused = useRef(null);

  // While the modal is open: trap focus inside it, close on Escape, lock page
  // scroll, and restore focus to the trigger when it closes.
  useEffect(() => {
    if (!album) return;
    lastFocused.current = document.activeElement;
    const node = modalRef.current;
    const getFocusable = () =>
      node
        ? Array.from(
            node.querySelectorAll('a[href], button, input, textarea, [tabindex]:not([tabindex="-1"])')
          )
        : [];

    // Move focus into the dialog.
    const focusables = getFocusable();
    if (focusables[0]) focusables[0].focus();

    function onKey(e) {
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
      if (lastFocused.current && lastFocused.current.focus) lastFocused.current.focus();
    };
  }, [album]);

  return (
    <>
      <div className="coverGrid">
        {albums.map((a, i) => (
          <div key={a.title}>
            <button
              className="coverBtn"
              onClick={() => setOpen(i)}
              aria-label={`View the tracklist for ${a.title}`}
            >
              <AlbumCover title={a.title} year={a.year} index={indexOffset + i} />
            </button>
            <p className="cardMeta cardMetaTop">{a.label}</p>
          </div>
        ))}
      </div>

      {/* Tracklist modal */}
      {album && (
        <div className="modalOverlay" onClick={() => setOpen(null)} role="presentation">
          <div
            className="modal"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${album.title} tracklist`}
          >
            <button className="modalClose" onClick={() => setOpen(null)} aria-label="Close dialog">
              ×
            </button>
            <div className="modalHead">
              <div className="modalCover">
                <AlbumCover title={album.title} year={album.year} index={indexOffset + open} compact />
              </div>
              <div>
                <p className="eyebrow eyebrowTight">Album · {album.year}</p>
                <h3 className="modalTitle">{album.title}</h3>
                <p className="cardMeta">{album.label} · {album.tracks.length} tracks</p>
              </div>
            </div>
            {album.spotify && (
              <a
                className="spotifyBtn"
                href={album.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpotifyIcon />
                Play on Spotify
              </a>
            )}
            <ol className="trackList">
              {album.tracks.map((t, i) => (
                <li key={t + i} className="track">
                  <span className="trackNum">{String(i + 1).padStart(2, "0")}</span>
                  <span className="trackName">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  );
}
