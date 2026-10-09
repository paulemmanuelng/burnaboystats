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
  phoneHref,
  provDateText,
  provDateTime,
  type DataLine,
  type MethodHref,
  type P1Spec,
  type P2Spec,
  type ProvDate,
} from "../lib/provenance";
import { shortStamp } from "../lib/dates";
import s from "./mobileProvenance.module.css";

/**
 * The provenance component, phone build (design review 8 Oct 2026, J0-9).
 * The same props and sizes as the desktop build (Provenance.tsx), drawn for a
 * phone: P1 is two lines — the sources in Geist, then a 44px row with the date
 * and "How it's counted" — and drops "Open data", which P3 carries; every
 * tappable token is a 44px target. Pure presentation, so the client screens
 * render it with props their server page built.
 */

type Common = { className?: string };
const cx = (...c: (string | undefined | false)[]) => c.filter(Boolean).join(" ");
const SEP = "\u00a0·\u00a0";

function DateRow({ date }: { date: ProvDate }) {
  const d = p1DateParts(date);
  return (
    <span data-provenance-date="">
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

function MethodLink({ href }: { href: MethodHref }) {
  const out = methodLeaves(href);
  const body = (
    <>
      {METHOD_LABEL.phone}
      {out ? <span aria-hidden="true">{" ↗"}</span> : null}
    </>
  );
  return out ? (
    <Link className={s.link} href={href} data-provenance-method="">
      {body}
    </Link>
  ) : (
    <a className={s.link} href={phoneHref(href)} data-provenance-method="">
      {body}
    </a>
  );
}

function P1({ sources, date, method, className }: P1Spec & Common) {
  const { shown, more } = p1Shown(sources);
  return (
    <div className={cx(s.p1, className)} data-provenance="p1">
      {shown.length > 0 && (
        <p className={s.p1Sources} data-provenance-sources="">
          {shown.length === 1 && !more ? "Source:" : "Sources:"} {shown.join(", ")}
          {more > 0 && (
            <>
              {" "}
              <Link className={s.more} href={MORE_HREF}>
                + {more} more<span className="visuallyHidden"> sources</span>
              </Link>
            </>
          )}
        </p>
      )}
      <div className={s.p1Row}>
        <DateRow date={date} />
        <MethodLink href={method} />
      </div>
    </div>
  );
}

function P2({ sources, what, method, className }: P2Spec & Common) {
  return (
    <div className={cx(s.p2, className)} data-provenance="p2">
      <p className={s.p2Line} data-provenance-sources="">
        {p2Line(sources, what)}
      </p>
      {"parts" in method ? (
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
          <MethodLink href={method.href} />
        </span>
      )}
    </div>
  );
}

/** Each token is one 44px target in a wrapping row, and opens on its "·" in
 *  a fixed box (the first token's box is empty). The row starts one box left
 *  of the line, where .p3Data clips it, so every line's first "·" is cut: no
 *  "·" ever ends or opens a line (review, 8 Oct 2026: one dangled after
 *  "CC BY 4.0 ↗" when "cite as …" wrapped at 390). No-break spaces round the
 *  dot, so the line reads "… ↓ · JSON ↗ · …" as text too. */
function DataTokens({ data }: { data: DataLine }) {
  const tokens = [
    data.csv && (
      <a className={s.dataLink} href={data.csv.href} download={data.csv.filename}>
        Download CSV <span aria-hidden="true">↓</span>
      </a>
    ),
    <a key="json" className={s.dataLink} href={data.json}>
      JSON <span aria-hidden="true">↗</span>
    </a>,
    <a key="licence" className={s.dataLink} href={data.licence.url} rel="license noopener" target="_blank">
      {data.licence.name} <span aria-hidden="true">↗</span>
    </a>,
    <span key="cite" className={s.cite}>
      cite as “{data.cite}”
    </span>,
  ].filter(Boolean);
  return (
    <>
      {tokens.map((t, i) => (
        <span key={i} className={s.tok}>
          <span className={s.tokSep}>{i === 0 ? "" : SEP}</span>
          {t}
        </span>
      ))}
    </>
  );
}

function P3({ data, date, noteAs = "p", ariaLabel, children, className }: P3Props & Common) {
  const Note = noteAs;
  return (
    <section
      className={cx(s.p3, className)}
      id={METHOD_ID.phone}
      data-provenance="p3"
      aria-label={ariaLabel ?? METHOD_LABEL.phone}
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
        <p className={s.p3Data} data-provenance-data="">
          <span className={s.p3DataRow}>
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

export default function MobileProvenance(props: ProvenanceProps) {
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
