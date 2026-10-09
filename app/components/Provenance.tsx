import Link from "next/link";
import AnchorTwins from "./AnchorTwins";
import { p2Line, type P3Props, type ProvenanceProps } from "./provenanceParts";
import {
  METHOD_ID,
  METHOD_LABEL,
  METHOD_TWINS,
  MORE_HREF,
  REVIEWED_WORDS,
  methodLeaves,
  p1DateParts,
  p1Shown,
  provDateText,
  provDateTime,
  type DataLine,
  type MethodHref,
  type P1Spec,
  type P2Spec,
  type ProvDate,
} from "../lib/provenance";
import { shortStamp } from "../lib/dates";
import s from "./provenance.module.css";

/**
 * The provenance component, desktop build (design review 8 Oct 2026, J0-9;
 * fixes 9–13; J0-13's one date format). Every figure's source and check date
 * sits where the figure is, in one of four sizes:
 *
 *   p1        the hero line: sources · date · How this is counted · Open data
 *   p2        a board's footer: its source and read date, and its method behind "Method ▾"
 *   p3        the page foot: the method note and the data line
 *   reviewed  "Data last reviewed {date}"
 *
 * No per-page variants: the sources, the date and the links are props, built
 * from data (app/lib/provenanceSpecs.ts); a page's method note is its own copy,
 * passed as children. Pure presentation — no data imports, no hooks, no client
 * code — so it renders inside server pages and client screens alike. The phone
 * build is MobileProvenance. `className` places it (margins); it never sets
 * colour or type.
 */

type Common = { className?: string };
const cx = (...c: (string | undefined | false)[]) => c.filter(Boolean).join(" ");
/** A no-break space before each "·", so a separator never opens a line. */
const SEP = "\u00a0· ";

/** A label and its date, in the component's one format: "Verified 7 Oct 2026". */
export function ProvDateText({ date, className }: { date: ProvDate; className?: string }) {
  const d = p1DateParts(date);
  return (
    <span className={className} data-provenance-date="">
      {d.label}
      {d.text ? (
        <>
          {" "}
          <time className={s.value} dateTime={d.dateTime}>
            {d.text}
          </time>
        </>
      ) : null}
    </span>
  );
}

function MethodLink({ href, label }: { href: MethodHref; label: string }) {
  const out = methodLeaves(href);
  const body = (
    <>
      {label}
      {out ? <span aria-hidden="true">{" ↗"}</span> : null}
    </>
  );
  return out ? (
    <Link className={s.link} href={href} data-provenance-method="">
      {body}
    </Link>
  ) : (
    <a className={s.link} href={href} data-provenance-method="">
      {body}
    </a>
  );
}

function P1({ sources, date, method, openData, className }: P1Spec & Common) {
  const { shown, more } = p1Shown(sources);
  const items = [
    shown.length > 0 && (
      <span data-provenance-sources="">
        {shown.length === 1 && !more ? "Source" : "Sources"} <span className={s.value}>{shown.join(" · ")}</span>
        {more > 0 && (
          <>
            {" "}
            <Link className={s.more} href={MORE_HREF}>
              + {more} more<span className="visuallyHidden"> sources</span>
            </Link>
          </>
        )}
      </span>
    ),
    <ProvDateText key="date" date={date} />,
    <MethodLink key="method" href={method} label={METHOD_LABEL.desktop} />,
    openData && (
      <a className={s.link} href={openData}>
        Open data <span aria-hidden="true">↗</span>
      </a>
    ),
  ].filter(Boolean);
  // Each item opens on its hairline, and the row starts one hairline and one
  // gap left of the line, where .p1 clips it: so every line's first hairline
  // is cut and a wrapped row never ends or opens a line on one (review,
  // 8 Oct 2026: the home P1 left one after "+ 20 more").
  return (
    <p className={cx(s.p1, className)} data-provenance="p1">
      <span className={s.p1Row}>
        {items.map((item, i) => (
          <span key={i} className={s.p1Item}>
            <span className={s.sep} aria-hidden="true" />
            {item}
          </span>
        ))}
      </span>
    </p>
  );
}

function P2({ sources, what, method, className }: P2Spec & Common) {
  return (
    <div className={cx(s.p2, className)} data-provenance="p2">
      <p className={s.p2Line} data-provenance-sources="">
        {p2Line(sources, what)}
      </p>
      {"parts" in method ? (
        // The method disclosure (J0-9): a native details element, so it opens
        // without script and is keyboard-operable. Not a list fold.
        <details className={s.p2Method} data-provenance-disclosure="">
          <summary className={s.p2Summary}>
            Method <span className={s.chev} aria-hidden="true">▾</span>
          </summary>
          {method.parts.map((p, i) => (
            <p key={i} className={s.p2Text}>
              {p}
            </p>
          ))}
        </details>
      ) : (
        <span className={s.p2Aside}>
          <MethodLink href={method.href} label={METHOD_LABEL.desktop} />
        </span>
      )}
    </div>
  );
}

/** Fix 13: "Download CSV ↓ · JSON ↗ · CC BY 4.0 ↗ · cite as “…”". */
function DataTokens({ data }: { data: DataLine }) {
  return (
    <>
      {data.csv && (
        <>
          <a className={s.dataLink} href={data.csv.href} download={data.csv.filename}>
            Download CSV <span aria-hidden="true">↓</span>
          </a>
          {SEP}
        </>
      )}
      <a className={s.dataLink} href={data.json}>
        JSON <span aria-hidden="true">↗</span>
      </a>
      {SEP}
      <a className={s.dataLink} href={data.licence.url} rel="license noopener" target="_blank">
        {data.licence.name} <span aria-hidden="true">↗</span>
      </a>
      {SEP}
      <span className={s.cite}>cite as “{data.cite}”</span>
    </>
  );
}

function P3({ data, date, noteAs = "p", ariaLabel, children, className }: P3Props & Common) {
  const Note = noteAs;
  return (
    <section
      className={cx(s.p3, className)}
      id={METHOD_ID.desktop}
      data-provenance="p3"
      aria-label={ariaLabel ?? METHOD_LABEL.desktop}
    >
      <Note className={s.p3Note} data-provenance-note="">
        {children}
        {date ? (
          <>
            {" "}
            {p1DateParts(date).label} <time dateTime={provDateTime(date)}>{provDateText(date)}</time>.
          </>
        ) : null}
      </Note>
      {data && (
        // One inline run inside the 44px flex row, so each separator keeps its spaces.
        <p className={s.p3Data} data-provenance-data="">
          <span>
            <DataTokens data={data} />
          </span>
        </p>
      )}
      <AnchorTwins pairs={METHOD_TWINS} />
    </section>
  );
}

function Reviewed({ day, className }: { day: string } & Common) {
  return (
    <p className={cx(s.reviewed, className)} data-provenance="reviewed">
      <span className={s.dot} aria-hidden="true" />
      <span>
        {REVIEWED_WORDS}{" "}
        <time className={s.value} dateTime={day}>
          {shortStamp(day)}
        </time>
      </span>
    </p>
  );
}

export default function Provenance(props: ProvenanceProps) {
  switch (props.size) {
    case "p1":
      return <P1 {...props} />;
    case "p2":
      return <P2 {...props} />;
    case "p3":
      return <P3 {...props} />;
    case "reviewed":
      return <Reviewed {...props} />;
  }
}
