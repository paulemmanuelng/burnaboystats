import styles from "./DaiDaiReplay.module.css";
import type { ReplayData, ReplayPoint, ReplayRun } from "./daiDaiReplayData";
import type { ReplayLabels } from "./daiDaiReplayLabels";

/**
 * The replay's small multiples: every chart, every week, as one dense table —
 * one row per chart, one cell per frame. It is the reduced-motion default (the
 * player checks matchMedia in JavaScript and shows this first), and the page
 * also renders it inside <noscript>, so a reader without JavaScript gets the
 * week-by-week reading as well as the poster.
 *
 * Rows: the two Billboard globals first, then the 66 countries by peak, a
 * recorded run before a peak-only one, then by weeks at the peak. A peak-only
 * row is ONE cell, "peak No. N · run not recorded" — never twenty cells of
 * guesses. Dense, not folded.
 *
 * No hooks, so the page's server-rendered <noscript> copy and the player's
 * client copy are the same component. `onOpen` is the player's; without it
 * (no JavaScript) there is no button to press.
 */

/** The globals' row heads, as the small multiples draw them. */
const GLOBAL_ROW: Record<string, string> = { GLB: "GLOBAL 200", GLBX: "GLB EXCL US" };

export type Band = "b1" | "b5" | "b10" | "b40" | "rest";
export const bandOf = (p: number): Band => (p === 1 ? "b1" : p <= 5 ? "b5" : p <= 10 ? "b10" : p <= 40 ? "b40" : "rest");

/** Fill a template's {braces}. */
export const fillIn = (s: string, v: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (m, k: string) => (k in v ? String(v[k]) : m));

/** The small multiples' row order. */
export function multiplesOrder(countries: ReplayRun[]): ReplayRun[] {
  return [...countries].sort(
    (a, b) =>
      a.peak - b.peak ||
      Number(b.pts.length > 0) - Number(a.pts.length > 0) ||
      (b.weeksAtPeak ?? 0) - (a.weeksAtPeak ?? 0) ||
      a.code.localeCompare(b.code, "en"),
  );
}

function cellClass(p: ReplayPoint): string {
  if (p.s === "on") return `${styles.mCell} ${styles[bandOf(p.p!)]}`;
  if (p.s === "unread") return `${styles.mCell} ${styles.mUnread}`;
  if (p.s === "no-chart") return `${styles.mCell} ${styles.mNoChart}`;
  return `${styles.mCell} ${styles.mOff}`;
}

function cellLabel(p: ReplayPoint, frame: string, t: ReplayLabels): string {
  if (p.s === "on") return fillIn(t.cellOn, { date: frame, p: p.p! });
  if (p.s === "unread") return fillIn(t.cellUnread, { date: frame });
  if (p.s === "no-chart") return fillIn(t.cellNoChart, { date: frame });
  return fillIn(t.cellOff, { date: frame });
}

export default function DaiDaiReplayMultiples({
  data,
  labels: t,
  onOpen,
}: {
  data: ReplayData;
  labels: ReplayLabels;
  onOpen?: () => void;
}) {
  const rows: ReplayRun[] = [...data.globals, ...multiplesOrder(data.countries)];
  const n = data.frames.length;
  return (
    <div className={styles.multiples}>
      <div className={styles.mHead}>
        <span className={styles.mTitle}>{t.multiplesTitle}</span>
        <span className={styles.mNote}>{fillIn(t.multiplesNote, { rows: rows.length })}</span>
        {onOpen ? (
          <button type="button" className={styles.openPlayer} onClick={onOpen}>
            {t.openPlayer}
          </button>
        ) : null}
      </div>
      <table className={styles.mTable}>
        <caption className="visuallyHidden">
          {fillIn(t.multiplesCaption, { first: data.frames[0], last: data.frames[n - 1] })}
        </caption>
        <colgroup>
          <col className={styles.mColChart} />
          {data.frames.map((f) => (
            <col key={f} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className={styles.mColHead}>
              {t.multiplesChart}
            </th>
            {data.frames.map((f, i) => (
              <th scope="col" key={f} data-i={i}>
                <span aria-hidden="true" className={i % 2 === 0 ? styles.mTickEven : styles.mTickOdd} data-q={i % 4 === 0 ? "1" : undefined}>
                  {data.frameShort[i]}
                </span>
                <span className="visuallyHidden">{f}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code} data-code={r.code}>
              <th scope="row" className={styles.mRowHead}>
                <span aria-hidden="true">{r.flag}</span>
                <span className={styles.mCode} aria-hidden={GLOBAL_ROW[r.code] ? true : undefined}>
                  {GLOBAL_ROW[r.code] ?? r.code}
                </span>
                {GLOBAL_ROW[r.code] ? null : <span className={styles.mPeak}>#{r.peak}</span>}
                <span className="visuallyHidden">{r.name}</span>
              </th>
              {r.pts.length ? (
                r.pts.map((p, i) => (
                  <td key={i} data-s={p.s}>
                    <span className={cellClass(p)} role="img" aria-label={cellLabel(p, data.frames[i], t)} />
                  </td>
                ))
              ) : (
                <td colSpan={n} data-s="peak-only">
                  <span className={styles.mPeakOnly}>
                    <span className={`${styles.mSwatch} ${styles[bandOf(r.peak)]}`} aria-hidden="true" />
                    {fillIn(t.multiplesPeakOnly, { p: r.peak })}
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
