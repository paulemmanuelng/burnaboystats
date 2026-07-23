"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import styles from "./AlbumStrip.module.css";
import { albums } from "../data/albums";
import { spotifyImage, spotifySrcSet } from "../lib/spotifyImage";

// A horizontal "record shelf" of the studio-album covers (official Spotify
// artwork, shown unmodified — same source/attribution as the Music page).
// Desktop: prev/next arrows + click-drag to scroll. Touch: native swipe.
// Each cover links to the Music page.
export default function AlbumStrip() {
  // Type predicate so `cover` is a string downstream, not string | undefined.
  const withCovers = albums.filter(
    (a): a is (typeof albums)[number] & { cover: string } => Boolean(a.cover)
  );
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const page = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  // Click-and-drag to scroll (mouse only — touch uses native swipe). Tracks
  // whether a real drag happened so the trailing click doesn't follow the link.
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  // Fade the edges the shelf can still scroll toward (not the flush start/end).
  const left = atStart ? "#000 0%" : "transparent 0%, #000 30px";
  const right = atEnd ? "#000 100%" : "#000 calc(100% - 30px), transparent 100%";
  const maskImage = `linear-gradient(to right, ${left}, ${right})`;

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={`${styles.nav} ${styles.prev}`}
        onClick={() => page(-1)}
        disabled={atStart}
        aria-label="Scroll to previous albums"
      >
        ‹
      </button>

      <div
        ref={trackRef}
        className={styles.shelf}
        style={{ maskImage, WebkitMaskImage: maskImage }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        {withCovers.map((a) => (
          <Link key={a.title} href="/music" className={styles.item} aria-label={`${a.title} (${a.year}) — see on the Music page`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.cover}
              src={spotifyImage(a.cover, 300)}
              srcSet={spotifySrcSet(a.cover)}
              sizes="150px"
              alt={`${a.title} album cover`}
              loading="lazy"
              width={300}
              height={300}
              draggable={false}
            />
            <span className={styles.caption}>
              <span className={styles.capTitle}>{a.title}</span>
              <span className={styles.capYear}>{a.year}</span>
            </span>
          </Link>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.nav} ${styles.next}`}
        onClick={() => page(1)}
        disabled={atEnd}
        aria-label="Scroll to more albums"
      >
        ›
      </button>
    </div>
  );
}
