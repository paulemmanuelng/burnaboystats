import styles from "./loading.module.css";

// Route-level loading UI — shown during navigation while a segment streams in.
// Most pages are statically prerendered (so it rarely flashes), but dynamic
// routes like /search get a branded, on-theme placeholder instead of a blank
// screen. An equalizer-bar pulse keeps it in the site's music language.
export default function Loading() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <div className={styles.bars} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <p className={styles.label}>Loading…</p>
    </div>
  );
}
