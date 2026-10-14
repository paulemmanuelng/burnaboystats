import Link from "next/link";
import styles from "./mobileSections.module.css";

/**
 * The sectioned list the design calls `sectioned()`.
 *
 * From designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html — screens 13
 * (Festivals) and 15 (Firsts) share it exactly, which is why it lives here
 * rather than in either screen.
 *
 * Every section is open, each under its own h2, since J4-Q3 (Job 4 · J4-10,
 * fix 81) superseded the accordion: the screens' docking index is the way
 * through a long list now, and its chips jump to each section's id.
 *
 * The two screens draw their rows differently, so `variant` carries that:
 * screen 13 sets the year in mono over a location line; screen 15 leads with
 * the milestone and its detail line, and sets the year at the right as an ink
 * label over "Proof ↗" where the site prints the figure (J4-7, fixes 85 and
 * 96). Same shell, different row.
 */

export interface SectionRow {
  /** The year: the left column on screen 13, the right on screen 15. Ink. */
  lead: string;
  title: string;
  meta?: string;
  /** Screen 15: the page that prints the figure, for "Proof ↗" (J4-7). */
  proof?: string;
}

export interface Section {
  /** The section's anchor id, the dock's jump target ("m-…", the phone's). */
  id: string;
  name: string;
  /** The dock chip's word, where it is not the section's name (Festivals'
   *  "Headlined", the stat cell's own word: fix 81). */
  dockLabel?: string;
  rows: SectionRow[];
}

export default function MobileSections({
  sections,
  variant = "meta",
}: {
  sections: Section[];
  /** "meta" — screen 13's mono year + location. "plain" — screen 15's row,
   *  headline first, the year a mono ink label at the right (J4-7). */
  variant?: "meta" | "plain";
}) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.id} id={s.id} className={styles.section} aria-labelledby={`${s.id}-h`}>
          <h2 id={`${s.id}-h`} className={styles.head}>
            <span className={`${styles.name} ${variant === "plain" ? styles.nameSm : ""}`}>{s.name}</span>
            <span className={styles.count}>({s.rows.length})</span>
          </h2>
          {s.rows.map((r, ri) =>
            variant === "plain" ? (
              <div key={`${ri}-${r.title}`} className={`${styles.row} ${styles.plainRow}`}>
                <div className={styles.main}>
                  <div className={`${styles.title} ${styles.plainTitle}`}>{r.title}</div>
                  {r.meta && <div className={`${styles.meta} ${styles.plainMeta}`}>{r.meta}</div>}
                </div>
                <div className={styles.side}>
                  <span className={styles.year}>{r.lead}</span>
                  {r.proof && (
                    <Link href={r.proof} className={styles.proof}>
                      Proof<span aria-hidden="true"> ↗</span>
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div key={`${ri}-${r.title}`} className={styles.row}>
                <span className={styles.lead}>{r.lead}</span>
                <div className={styles.main}>
                  <div className={styles.title}>{r.title}</div>
                  {r.meta && <div className={styles.meta}>{r.meta}</div>}
                </div>
              </div>
            ),
          )}
        </section>
      ))}
    </>
  );
}
