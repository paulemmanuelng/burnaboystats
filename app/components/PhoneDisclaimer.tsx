import styles from "./phoneDisclaimer.module.css";
import { PHONE_DISCLAIMER, PHONE_DISCLAIMER_SUMMARY } from "../lib/links";

/**
 * The last block of the phone home and phone /about, above the tab bar
 * (SH-09, J1-4). The phone has no footer, so these two screens carry the
 * footer's disclaimer and the artwork credit. It was one muted line; at the
 * owner's request (14 Oct 2026, "make that disclaimer foldable") it is a
 * native <details>, shut by default, so it needs no script and the sentence
 * is still in the served HTML. Shut it reads "Unofficial fan site ▾"; open,
 * the full line sits under it. The ▾ is in its own span and turns to read ▴
 * when open — the "Method ▾" fold's pattern (mobileProvenance.module.css
 * .chev), the arrow rule's (J0-4) in-place toggle.
 */
export default function PhoneDisclaimer() {
  return (
    <details className={styles.disclaimer}>
      <summary className={styles.summary}>
        {PHONE_DISCLAIMER_SUMMARY}
        <span className={styles.chev} aria-hidden="true">▾</span>
      </summary>
      <p className={styles.text}>{PHONE_DISCLAIMER}</p>
    </details>
  );
}
