"use client"; // the Cards / Table toggle and the table's sort

import Link from "./SiteLink";
import { useEffect, useLayoutEffect, useMemo, useState, type ReactNode } from "react";
import styles from "./hubBoardView.module.css";
import { readSavedView, saveView } from "../lib/deepLink";
import { HUB_COLUMNS, hubCaption, rankLabel, rankRows, type HubRow, type HubSortKey } from "../lib/hubTable";

/**
 * The /afrobeats board, two ways (site review 8 Oct 2026, Job 5 · J5-4,
 * fixes 102 and 117): the photo wall (Cards, which opens — default (b)) and
 * a sortable Table, one tap away. Both are in the server's HTML; the one not
 * shown carries `hidden`, so a reader with no script gets the cards.
 *
 * The wall is rendered by the page and passed in, so it stays server markup.
 * The table re-sorts by any figure column and re-ranks by it, joint ranks
 * printed "=n" on every tied row (lib/hubTable). The choice is kept in this
 * history entry, as the chart boards keep theirs (lib/deepLink saveView).
 *
 * His row is N4: the row wash, his figure gold, his name in ink (fix 97).
 */
const VIEW_ID = "afrobeats-view";
type View = "cards" | "table";
type Saved = { view: View; key: HubSortKey };

export default function HubBoardView({ cards, rows }: { cards: ReactNode; rows: HubRow[] }) {
  const [shown, setShown] = useState<Saved>({ view: "cards", key: "certs" });
  const [touched, setTouched] = useState(false);
  const { view, key } = shown;

  // Back (or Forward) to this entry: the view the reader left, before paint.
  useLayoutEffect(() => {
    const saved = readSavedView<Saved>(VIEW_ID);
    if (!saved) return;
    const v: View = saved.view === "table" ? "table" : "cards";
    const k = HUB_COLUMNS.find((c) => c.sort === saved.key)?.sort ?? "certs";
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount read of this history entry
    setShown({ view: v, key: k });
  }, []);

  useEffect(() => {
    if (touched) saveView(VIEW_ID, shown);
  }, [touched, shown]);

  const ranked = useMemo(() => rankRows(rows, key), [rows, key]);
  const pick = (v: View) => {
    setTouched(true);
    setShown((s) => ({ ...s, view: v }));
  };
  const sortBy = (k: HubSortKey) => {
    setTouched(true);
    setShown((s) => ({ ...s, key: k }));
  };

  return (
    <div className={styles.board}>
      <div className={styles.viewBar}>
        <p className={styles.caption} aria-live="polite">
          {hubCaption(view, key)}
        </p>
        <div className={styles.toggle} role="group" aria-label="Show the board as">
          {(["cards", "table"] as const).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              className={view === v ? `${styles.seg} ${styles.viewOn}` : styles.seg}
              onClick={() => pick(v)}
            >
              {v === "cards" ? "Cards" : "Table"}
            </button>
          ))}
        </div>
      </div>

      <div hidden={view !== "cards"}>{cards}</div>

      <div hidden={view !== "table"} className={styles.tableWrap}>
        <table className={styles.table}>
          <caption className="visuallyHidden">{hubCaption("table", key)}</caption>
          <thead>
            <tr>
              {HUB_COLUMNS.map((c) => {
                const num = c.sort !== undefined;
                return (
                  <th
                    key={c.head}
                    scope="col"
                    className={`${styles.th} ${num ? styles.num : ""}`}
                    aria-sort={c.sort ? (c.sort === key ? "descending" : "none") : undefined}
                  >
                    {c.sort ? (
                      <button type="button" className={styles.thBtn} onClick={() => sortBy(c.sort!)}>
                        {c.head}
                        <span className={styles.sortMark} aria-hidden="true">
                          {c.sort === key ? "▼" : "↕"}
                        </span>
                      </button>
                    ) : (
                      c.head
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {ranked.map((r) => (
              <tr key={r.row.slug} className={r.row.his ? styles.rowHis : undefined}>
                <td className={styles.rank}>{rankLabel(r)}</td>
                <td className={styles.artist}>
                  <span className={styles.who}>
                    <span className={styles.flag} aria-hidden="true">
                      {r.row.flag}
                    </span>
                    <Link href={r.row.href} className={styles.name} prefetch={false}>
                      {r.row.name}
                    </Link>
                  </span>
                  <span className={styles.hook}>{r.row.hook}</span>
                </td>
                <td className={`${styles.num} ${styles.certs} ${r.row.his ? styles.figHis : ""}`}>{r.row.certs}</td>
                <td className={styles.num}>{r.row.countries}</td>
                <td className={styles.topCert}>{r.row.topCert ? `${r.row.topCert.label} · ${r.row.topCert.code}` : "—"}</td>
                <td className={styles.num}>{r.row.chartEntries}</td>
                <td className={styles.num}>{r.row.no1s}</td>
                <td className={`${styles.num} ${styles.live}`}>{r.row.live}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
