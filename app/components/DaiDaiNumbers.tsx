import styles from "../dai-dai/dai-dai.module.css";
import DaiDaiCountUp from "./DaiDaiCountUp";
import DaiDaiVideoPoster from "./DaiDaiVideoPoster";

/**
 * "Dai Dai by the numbers" — the song's own figures, as the redesign of
 * 26 Sep 2026 draws them (designs/desktop/Dai Dai Redesign.dc.html, approved
 * by Paul; design response §5, items 7 and 8):
 *
 *   - six lead figures, each with a caption naming its chart — a row of six
 *     hairline cells on desktop, three by two on a tablet, full-width rows on
 *     a phone (the figure in a 118px column, the caption beside it);
 *   - the national charts as a real table: country · chart · peak · weeks at
 *     No. 1 · weeks on chart. A value nobody has read prints "not stated",
 *     never an empty cell, and the phone stacks each row;
 *   - the streaks, the world rankings and the video as ruled lists, the music
 *     video with its tap-to-play poster.
 *
 * The phone's "Show the full breakdown" fold is gone (approved): the table
 * replaces the 5,638px of cards it hid. Every row keeps the page's own dated
 * sentence under its label, so no figure, chart date or reading date the cards
 * carried is lost in the move — the label is what a reader scans, the sentence
 * is what a journalist quotes.
 *
 * A server component. Only the count-ups and the video poster run in the
 * browser, and each is its own client component.
 */

/** A lead figure: the value, and a caption naming its chart. */
export interface LeadFigure {
  v: string;
  cap: string;
  /** A bot-written figure: gold, marked live, and it fades in rather than counts. */
  live?: boolean;
}

/** A ruled-list row: the value, the page's own sentence, and the short label. */
export interface RecordRow {
  v: string;
  l: string;
  k: string;
  live?: boolean;
}

/** A national-charts table row, resolved from charts.ts (see nationalRow). */
export interface NationalRow {
  code: string;
  flag: string;
  country: string;
  chart: string;
  peak: number;
  /** null: not stated. 0: the peak was below No. 1, so there were none. */
  weeksAtNo1: number | null;
  weeksOnChart: number | null;
  /** The page's own dated sentence for this chart. */
  l: string;
}

export interface NumbersLabels {
  national: string;
  cols: { country: string; chart: string; peak: string; weeksAt1: string; weeksOn: string };
  /** "No. {n}" */
  peak: string;
  notStated: string;
  /** Read out for the "—" of a chart whose peak was below No. 1. */
  none: string;
  /** The phone's units, printed after the figure: " wk at No. 1", " wk on chart". */
  wkAt1: string;
  wkOn: string;
  /** The phone's "weeks " before "not stated", when a row has no weeks at all. */
  weeksPrefix: string;
  /** The live marker under a bot-written lead figure. */
  live: string;
  video: { id: string; play: string; title: string };
}

/** The page's sentences start mid-flow ("in total at No. 1 on…"), written to
 *  follow their card's value. Standing under a label, each starts a sentence. */
const sentence = (s: string) => (/^[a-zà-ÿ]/.test(s) && !/^iTunes/.test(s) ? s[0].toUpperCase() + s.slice(1) : s);

export function Leads({ leads, live }: { leads: LeadFigure[]; live: string }) {
  return (
    <ul className={styles.leads}>
      {leads.map((f) => (
        <li key={f.cap} className={styles.lead}>
          <span className={`${styles.leadValue} ${f.live ? styles.liveValue : ""}`}>
            <DaiDaiCountUp value={f.v} live={f.live} />
          </span>
          <span className={styles.leadCaption}>{f.cap}</span>
          {f.live ? (
            <span className={styles.liveMark}>
              <span className={styles.liveDot} aria-hidden="true" />
              {live}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function NationalTable({ rows, t, id }: { rows: NationalRow[]; t: NumbersLabels; id: string }) {
  return (
    <div className={styles.national}>
      <h3 id={id} className={`${styles.listTitle} ${styles.nationalTitle}`}>
        {t.national} · {rows.length}
      </h3>
      {/* Roles restated so the stacked phone rows stay a table to a screen
          reader: a display change on table parts can drop their semantics. */}
      <table className={styles.table} aria-labelledby={id} role="table">
        <colgroup>
          <col className={styles.colCountry} />
          <col />
          <col className={styles.colPeak} />
          <col className={styles.colWeeks} />
          <col className={styles.colLast} />
        </colgroup>
        <thead className={styles.thead} role="rowgroup">
          <tr role="row">
            <th scope="col" role="columnheader">{t.cols.country}</th>
            <th scope="col" role="columnheader">{t.cols.chart}</th>
            <th scope="col" role="columnheader" className={styles.num}>{t.cols.peak}</th>
            <th scope="col" role="columnheader" className={styles.num}>{t.cols.weeksAt1}</th>
            <th scope="col" role="columnheader" className={styles.num}>{t.cols.weeksOn}</th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {rows.map((r) => {
            const w1 = r.weeksAtNo1 === 0 ? "dash" : r.weeksAtNo1 == null ? "missing" : "val";
            const wc = r.weeksOnChart == null ? "missing" : "val";
            return (
              <tr key={`${r.code}-${r.chart}`} role="row" className={`${styles.tr} ${w1 === "val" ? styles.hasW1 : ""}`}>
                <th scope="row" role="rowheader" className={styles.tdCountry}>
                  <span className={styles.flag} aria-hidden="true">{r.flag}</span>
                  {r.country}
                </th>
                <td role="cell" className={styles.tdChart}>
                  <span className={styles.chartName}>{r.chart}</span>
                  <span className={styles.note}>{sentence(r.l)}</span>
                </td>
                <td role="cell" className={`${styles.num} ${styles.tdPeak}`}>{t.peak.replace("{n}", String(r.peak))}</td>
                <td role="cell" className={`${styles.num} ${styles.tdWeeks} ${styles[`w1${w1}`] ?? ""}`}>
                  {w1 === "val" ? (
                    <>
                      {r.weeksAtNo1}
                      <span className={styles.unit}>{t.wkAt1}</span>
                    </>
                  ) : w1 === "dash" ? (
                    <>
                      <span aria-hidden="true">—</span>
                      <span className="visuallyHidden">{t.none}</span>
                    </>
                  ) : (
                    t.notStated
                  )}
                </td>
                <td role="cell" className={`${styles.num} ${styles.tdWeeks} ${styles[`wc${wc}`] ?? ""}`}>
                  {wc === "val" ? (
                    <>
                      {r.weeksOnChart}
                      <span className={styles.unit}>{t.wkOn}</span>
                    </>
                  ) : (
                    <>
                      <span className={styles.unit}>{t.weeksPrefix}</span>
                      {t.notStated}
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function RuledLists({
  lists,
  t,
  idPrefix,
}: {
  lists: { title: string; rows: RecordRow[]; video?: boolean }[];
  t: NumbersLabels;
  idPrefix: string;
}) {
  return (
    <div className={styles.lists}>
      {lists.map((g, gi) => {
        // A row with no figure drops out — the live No. 1 row, on a day the
        // board holds no No. 1 — and the heading counts what is left.
        const rows = g.rows.filter((r) => r.v !== "");
        return (
          <section key={g.title} className={styles.list} aria-labelledby={`${idPrefix}-${gi}`}>
            <h3 id={`${idPrefix}-${gi}`} className={`${styles.listTitle} ${styles.listTitleRuled}`}>
              {g.title} · {rows.length}
            </h3>
            <ul className={styles.rows}>
              {rows.map((r) => (
                <li key={r.k} className={styles.row}>
                  <span className={styles.rowText}>
                    <span className={styles.rowKey}>{r.k}</span>
                    <span className={styles.note}>{sentence(r.l)}</span>
                  </span>
                  <span className={`${styles.rowValue} ${r.live ? styles.liveValue : ""}`}>{r.v}</span>
                </li>
              ))}
            </ul>
            {g.video ? (
              <div className={styles.listVideo}>
                <DaiDaiVideoPoster
                  videoId={t.video.id}
                  play={t.video.play}
                  title={t.video.title}
                  sizes="(max-width: 900px) calc(100vw - 36px), (max-width: 1239px) calc(100vw - 80px), 374px"
                  small
                />
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
