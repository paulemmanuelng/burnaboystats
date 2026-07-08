import Link from "next/link";
import styles from "./AlbumStrip.module.css";
import { albums } from "../data/albums";

// A horizontal "record shelf" of the studio-album covers (official Spotify
// artwork, shown unmodified — same source/attribution as the Music page).
// Scrolls horizontally on narrow screens. Each cover links to the Music page.
export default function AlbumStrip() {
  const withCovers = albums.filter((a) => a.cover);
  return (
    <div className={styles.shelf}>
      {withCovers.map((a) => (
        <Link key={a.title} href="/music" className={styles.item} aria-label={`${a.title} (${a.year}) — see on the Music page`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.cover}
            src={a.cover}
            alt={`${a.title} album cover`}
            loading="lazy"
            width={300}
            height={300}
          />
          <span className={styles.caption}>
            <span className={styles.capTitle}>{a.title}</span>
            <span className={styles.capYear}>{a.year}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
