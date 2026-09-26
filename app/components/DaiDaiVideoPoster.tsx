"use client"; // swaps the poster for the player on a tap

import { useEffect, useRef, useState } from "react";
import styles from "./DaiDaiFigures.module.css";

/**
 * A YouTube video as a tap-to-play poster.
 *
 * The page ships a static poster image and a button — no iframe, no player
 * script, no third-party request beyond one image — and the player is created
 * only when the reader asks for it (the brief's owner rule: "click to load; no
 * player until tapped"). The embed is youtube-nocookie.com, so even the tap
 * sets no tracking cookie until the video actually plays.
 *
 * YouTube's hqdefault and sddefault posters are 4:3 with the 16:9 frame
 * letterboxed inside them; object-fit: cover on a 16:9 box crops exactly the
 * bars away, so every rung of the srcset shows the same picture.
 *
 * The box is a photo tile: it keeps the dark palette in both themes, because
 * the play disc sits on a photograph (globals.css, .photoTile).
 */
export default function DaiDaiVideoPoster({
  videoId,
  play,
  title,
}: {
  videoId: string;
  /** The button's accessible name, e.g. "Play the halftime show". */
  play: string;
  /** The player's title, once it exists. */
  title: string;
}) {
  const [on, setOn] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);

  // Keyboard users pressed a button that is now gone: hand focus to the player
  // that replaced it rather than dropping it on <body>.
  useEffect(() => {
    if (on) frame.current?.focus();
  }, [on]);

  const img = (f: string) => `https://i.ytimg.com/vi/${videoId}/${f}.jpg`;

  return (
    <div className={`${styles.poster} photoTile`}>
      {on ? (
        <iframe
          ref={frame}
          className={styles.player}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className={styles.posterButton} aria-label={play} onClick={() => setOn(true)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.posterImage}
            src={img("hqdefault")}
            srcSet={`${img("hqdefault")} 480w, ${img("sddefault")} 640w, ${img("maxresdefault")} 1280w`}
            sizes="(max-width: 900px) calc(100vw - 68px), 564px"
            alt=""
            width={640}
            height={360}
            loading="lazy"
            decoding="async"
          />
          <span className={styles.playDisc} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
