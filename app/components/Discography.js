"use client"; // interactive: tracks which album is open

import { useEffect, useState } from "react";
import AlbumCover from "./AlbumCover";

export default function Discography({ albums, indexOffset = 0 }) {
  // Which album's tracklist is open (index), or null for none.
  const [open, setOpen] = useState(null);
  const album = open !== null ? albums[open] : null;

  // Close on Escape, and stop the page scrolling while the modal is open.
  useEffect(() => {
    if (!album) return;
    function onKey(e) {
      if (e.key === "Escape") setOpen(null);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
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
            <p className="cardMeta" style={{ marginTop: 10 }}>{a.label}</p>
          </div>
        ))}
      </div>

      {/* Tracklist modal */}
      {album && (
        <div
          className="modalOverlay"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${album.title} tracklist`}
        >
          {/* stopPropagation so clicking inside the panel doesn't close it */}
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={() => setOpen(null)} aria-label="Close">
              ×
            </button>
            <div className="modalHead">
              <div className="modalCover">
                <AlbumCover title={album.title} year={album.year} index={indexOffset + open} compact />
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: 6 }}>Album · {album.year}</p>
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
                <svg className="spotifyIcon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.59 14.43a.62.62 0 01-.86.21c-2.35-1.44-5.3-1.76-8.79-.97a.62.62 0 11-.27-1.22c3.8-.86 7.07-.49 9.71 1.12.3.18.39.57.21.86zm1.23-2.74a.78.78 0 01-1.07.26c-2.69-1.66-6.79-2.14-9.97-1.17a.78.78 0 11-.45-1.49c3.63-1.1 8.15-.57 11.24 1.33.36.22.48.71.25 1.07zm.1-2.85C14.8 8.9 9.5 8.72 6.47 9.64a.94.94 0 11-.54-1.8c3.47-1.05 9.32-.85 13.02 1.35a.94.94 0 01-.96 1.61z" />
                </svg>
                Play on Spotify
              </a>
            )}
            <ol className="trackList">
              {album.tracks.map((t, i) => (
                <li key={i} className="track">
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
