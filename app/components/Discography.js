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
