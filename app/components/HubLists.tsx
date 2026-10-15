import Link from "./SiteLink";
import styles from "./hubLists.module.css";
import { rankLabel } from "../lib/hubTable";
import type { HubList } from "../lib/hubRows";

/**
 * "Widest reach" and "Deepest at home" (site review 8 Oct 2026, Job 5 · J5-4
 * (e), fix 117): the board's two shapes as ranked lists, where the scatter
 * cannot be drawn — under the wall on the phone, and on the desktop page at
 * 901–1239 (the scatter's own range is 1240 up). Five each and any tied with
 * the fifth; "=n" on a shared rank; a thin single-series bar (--other, fix
 * 115) as wide as the value over the list's top. His row is N4: the wash,
 * his figure gold, his name ink (fix 97).
 */
export default function HubLists({ lists, layout }: { lists: HubList[]; layout: "desktop" | "phone" }) {
  const Title = layout === "phone" ? "h2" : "h3";
  return (
    <div className={`${styles.lists} ${layout === "phone" ? styles.phone : styles.desktop}`}>
      {lists.map((l) => (
        <section key={l.title} className={styles.list}>
          <Title className={styles.title}>{l.title}</Title>
          <p className={styles.sub}>{l.sub}</p>
          <ol className={styles.rows}>
            {l.rows.map((r) => (
              <li key={r.row.slug} className={`${styles.row} ${r.row.his ? styles.rowHis : ""}`}>
                <span className={styles.rank}>{rankLabel(r)}</span>
                <span className={styles.body}>
                  <Link href={r.row.href} className={styles.name} prefetch={false}>
                    {r.row.name}
                  </Link>
                  <span className={styles.track} aria-hidden="true">
                    <span className={styles.bar} style={{ width: `${(r.value / l.max) * 100}%` }} />
                  </span>
                </span>
                <span className={`${styles.value} ${r.row.his ? styles.valueHis : ""}`}>{r.value}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
