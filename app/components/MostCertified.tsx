import styles from "./mostCertified.module.css";
import InPageJump from "./InPageJump";
import type { coverTile } from "../lib/coverTile";

/**
 * "Most certified" (design review 8 Oct 2026, Job 3 · J3-3; fixes 68, 69):
 * the ledger's top records by certification count, five across at 1240 and up, three
 * at 901–1239. Each cell is one in-page link to its row in the ledger below,
 * with no glyph (fix 69, the Option A rule for a whole-cell link) and no gold.
 * Desktop only (fix 68). The page builds the cells for each view the switches
 * offer (lib/mostCertified), so the strip follows them.
 */
export interface MostCertifiedCell {
  title: string;
  /** "{n} certifications · {k} {best tier}" (lib/mostCertified stripMeta). */
  meta: string;
  /** The row's id (lib/mostCertified rowAnchor). */
  anchor: string;
  /** The cover tile's attributes, sized for the 44px tile. */
  cover: ReturnType<typeof coverTile>;
}

export default function MostCertified({ cells, heading: Heading = "h3" }: { cells: readonly MostCertifiedCell[]; heading?: "h2" | "h3" }) {
  if (!cells.length) return null;
  return (
    <div className={styles.strip}>
      <div className={styles.head}>
        <Heading className={styles.title}>Most certified</Heading>
        <span className={styles.label}>by certification count · each links to its row</span>
      </div>
      <ol className={styles.cells}>
        {cells.map((c) => (
          <li key={c.anchor} className={styles.item}>
            <InPageJump href={`#${c.anchor}`} className={styles.cell}>
              <span className={styles.cover} aria-hidden="true" {...c.cover} />
              <span className={styles.text}>
                <span className={styles.name}>{c.title}</span>
                <span className={styles.meta}>{c.meta}</span>
              </span>
            </InPageJump>
          </li>
        ))}
      </ol>
    </div>
  );
}
