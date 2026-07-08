import styles from "./MusicDecor.module.css";

// Decorative, monochrome music motifs scattered around the edges/corners of a
// box (behind its centred text). Purely presentational — aria-hidden and
// non-interactive. Each motif is a small line-art SVG; positions live in the
// CSS module so text stays clear of them.
function svg(children: React.ReactNode) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="#fff" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function MusicDecor() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {/* Vinyl record — top-left */}
      <span className={`${styles.item} ${styles.vinyl}`}>
        {svg(
          <g strokeWidth="2.5">
            <circle cx="50" cy="50" r="44" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="16" />
            <circle cx="50" cy="50" r="4" fill="#fff" stroke="none" />
          </g>
        )}
      </span>

      {/* Beamed eighth notes — top-right */}
      <span className={`${styles.item} ${styles.notes}`}>
        {svg(
          <g strokeWidth="3">
            <line x1="32" y1="26" x2="32" y2="70" />
            <line x1="72" y1="18" x2="72" y2="64" />
            <line x1="30" y1="24" x2="74" y2="16" strokeWidth="7" />
            <ellipse cx="24" cy="72" rx="10" ry="7.5" fill="#fff" stroke="none" />
            <ellipse cx="64" cy="66" rx="10" ry="7.5" fill="#fff" stroke="none" />
          </g>
        )}
      </span>

      {/* Equalizer bars — bottom-left */}
      <span className={`${styles.item} ${styles.equalizer}`}>
        {svg(
          <g fill="#fff" stroke="none">
            <rect x="14" y="46" width="11" height="40" rx="4" />
            <rect x="31" y="28" width="11" height="58" rx="4" />
            <rect x="48" y="10" width="11" height="76" rx="4" />
            <rect x="65" y="34" width="11" height="52" rx="4" />
            <rect x="82" y="52" width="11" height="34" rx="4" />
          </g>
        )}
      </span>

      {/* Cassette tape — bottom-right */}
      <span className={`${styles.item} ${styles.cassette}`}>
        {svg(
          <g strokeWidth="2.5">
            <rect x="10" y="24" width="80" height="56" rx="7" />
            <circle cx="35" cy="52" r="11" />
            <circle cx="65" cy="52" r="11" />
            <line x1="35" y1="52" x2="65" y2="52" strokeWidth="4" />
          </g>
        )}
      </span>

      {/* Treble clef — mid-left */}
      <span className={`${styles.item} ${styles.clef}`}>
        {svg(
          <path
            d="M55 8c-9 3-13 12-12 22 1 9 5 18 8 27 3 10 4 20-3 27-6 6-16 5-19-2-3-6 1-13 8-13 5 0 9 4 8 9"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </span>

      {/* Sound waves — mid-right */}
      <span className={`${styles.item} ${styles.waves}`}>
        {svg(
          <g strokeWidth="3" strokeLinecap="round">
            <path d="M20 30 Q35 50 20 70" />
            <path d="M40 18 Q62 50 40 82" />
            <path d="M60 8 Q90 50 60 92" />
          </g>
        )}
      </span>

      {/* Single quaver — lower-left inner */}
      <span className={`${styles.item} ${styles.note}`}>
        {svg(
          <g strokeWidth="3">
            <line x1="58" y1="20" x2="58" y2="66" />
            <path d="M58 20c14 3 16 18 8 26" strokeWidth="3" />
            <ellipse cx="48" cy="68" rx="12" ry="9" fill="#fff" stroke="none" transform="rotate(-18 48 68)" />
          </g>
        )}
      </span>
    </div>
  );
}
