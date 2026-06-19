import Link from "next/link";
import styles from "./KeepExploring.module.css";

// A "what to look at next" block — shown at the bottom of each page so
// visitors click deeper into the site instead of leaving after one page.
export default function KeepExploring({ links }) {
  return (
    <section className={`container ${styles.wrap}`}>
      <p className={styles.eyebrow}>Keep exploring</p>
      <div className={styles.grid}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={styles.card}>
            <span>
              <span className={styles.title}>{l.title}</span>
              <span className={styles.desc}>{l.desc}</span>
            </span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
