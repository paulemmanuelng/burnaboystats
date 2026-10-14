import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ledgerRow.module.css";
import CoLeadTag from "./CoLeadTag";
import { count as countOf } from "../lib/plural";
import type { coverTile } from "../lib/coverTile";

/**
 * One desktop ledger row (design review 8 Oct 2026, Job 3 · J3-1; fixes 61,
 * 56): the row CertExplorer and ChartExplorer both print, so /certifications,
 * /afrobeats/{artist}, /records/charts and /afrobeats/{artist}/charts read in
 * one line each.
 *
 * A fixed title column (340px; 280px at 901–1239) holds the 28px cover, the
 * Anton title and the meta line; the pills start at that column's edge and
 * flow left to right, so every row's first pill sits on one start line (x 440
 * at 1440, x 332 at 1024). A single-line row is 56px and grows a line at a
 * time. Desktop only: the phone screens have their own rows.
 *
 * The meta line keeps what #441 put there (fix 61): "{credit} · {year}" and
 * the co-lead tag, then, on a certifications row, "· {n} certifications". Only
 * the credit ellipsizes; the year, the tag and the count never do. The count is
 * the optional part, so it never takes the credit's room: when the whole line
 * does not fit, the count drops to a line of its own (its "·" goes with it)
 * and the credit keeps the first line — at 1024 Dai Dai's credit had shrunk to
 * "S…" beside it (review, 14 Oct 2026). Past three
 * words — the line's words, the "·" and the tag aside ("2022 · 1
 * certification" is three) — it is a sentence, not a label, so it is set in
 * Geist (fix 61, J0-8); otherwise it stays the mono label it was.
 *
 * No data import: each explorer passes its row's cover, title and figures.
 */

export interface LedgerMeta {
  credit?: string;
  year?: number | string;
  /** The other main artists, when the row is a co-lead (CoLeadTag). */
  coLead?: readonly string[];
  /** The explorer's own `.roleTag` class, so the tag keeps its module's face. */
  tagClassName?: string;
  /** The row's plaques in view — certifications rows only. */
  count?: number;
}

/** The meta line's words for the face rule (fix 61: "when it runs past three
 *  words"): the credit's, the year's and the count's tokens that carry a
 *  letter or a digit ("&" and "·" are not words; the co-lead tag is a tag). */
export function metaWords(meta: Pick<LedgerMeta, "credit" | "year" | "count">): number {
  return [meta.credit, meta.year, meta.count === undefined ? undefined : countOf(meta.count, "certification", "certifications")]
    .filter((x) => x !== undefined && x !== "")
    .join(" ")
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

export default function LedgerRow({
  cover,
  title,
  href,
  meta,
  note,
  id,
  listItem = false,
  pillsLabel,
  children,
}: {
  /** The cover tile's attributes (lib/coverTile, sized for the 28px tile). */
  cover: ReturnType<typeof coverTile>;
  title: string;
  /** The release's own page, when it has one. */
  href?: string;
  meta: LedgerMeta;
  /** A line under the meta (a chart release's note). */
  note?: ReactNode;
  id?: string;
  /** ChartExplorer's list semantics: the row is a list item… */
  listItem?: boolean;
  /** …and its pills a list, named. */
  pillsLabel?: string;
  /** The pills. */
  children: ReactNode;
}) {
  const hasLine = !!meta.credit || meta.year !== undefined;
  const showMeta = hasLine || meta.count !== undefined;
  const long = metaWords(meta) > 3;
  return (
    // An addressed row takes focus when a link jumps to it (InPageJump), so a
    // keyboard reader lands on it; -1 keeps it out of the tab order.
    <div className={styles.row} id={id} tabIndex={id ? -1 : undefined} role={listItem ? "listitem" : undefined}>
      <div className={styles.head}>
        {/* The cover centres on the title and its meta, never on a note under
            them (a chart row's note sat the cover ~50px below its title). */}
        <span className={styles.line}>
          <span className={styles.cover} aria-hidden="true" {...cover} />
          <span className={styles.text}>
            {/* One line; a title that runs past the column ellipsizes, and its
                hover names it in full. */}
            {href ? (
              <Link href={href} className={`${styles.title} ${styles.titleLink}`} title={title}>
                {title}
              </Link>
            ) : (
              <span className={styles.title} title={title}>
                {title}
              </span>
            )}
            {showMeta && (
              <span className={long ? `${styles.meta} ${styles.metaLong}` : styles.meta}>
                {hasLine && (
                  <span className={styles.metaLine}>
                    {/* Only the credit gives way when the line is full (fix 61); its
                        hover names it in full. */}
                    {meta.credit && (
                      <span className={styles.metaCredit} title={meta.credit}>
                        {meta.credit}
                      </span>
                    )}
                    {meta.credit && meta.year !== undefined && <span className={styles.metaSep}>{" · "}</span>}
                    {meta.year !== undefined && <span className={styles.metaYear}>{meta.year}</span>}
                    <CoLeadTag names={meta.coLead} className={[meta.tagClassName, styles.metaTag].filter(Boolean).join(" ")} />
                  </span>
                )}
                {meta.count !== undefined && (
                  <span className={styles.metaCount}>
                    {/* Out of flow, in the gap before the count: on a line of
                        its own the count starts at the column edge and its "·"
                        falls outside the meta, which clips it. */}
                    {hasLine && <span className={`${styles.metaSep} ${styles.countSep}`}>{" · "}</span>}
                    {countOf(meta.count, "certification", "certifications")}
                  </span>
                )}
              </span>
            )}
          </span>
        </span>
        {note && <span className={styles.note}>{note}</span>}
      </div>
      <div
        className={styles.pills}
        role={pillsLabel ? "list" : undefined}
        aria-label={pillsLabel}
      >
        {children}
      </div>
    </div>
  );
}
