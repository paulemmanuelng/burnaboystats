import { Fragment, type ReactNode } from "react";
import { p1Shown, sentenceDate, type DataLine, type P1Spec, type P2Spec, type ProvDate } from "../lib/provenance";

/** The props and the one piece of markup both builds of the provenance
 *  component share (Provenance.tsx desktop, MobileProvenance.tsx phone). */

type Common = { className?: string };
export type P3Props = {
  data?: DataLine;
  /** A date printed after the note (Job 1, J1-17); none in Job 0. */
  date?: ProvDate;
  /** "div" when the note holds block content (a <dl>). */
  noteAs?: "p" | "div";
  ariaLabel?: string;
  /** The method note. Absent, the P3 is the data line alone (J1-5: the
   *  certifications end block, whose method is its P2's link). */
  children?: ReactNode;
};
export type ProvenanceProps =
  | ({ size: "p1" } & P1Spec & Common)
  | ({ size: "p2" } & P2Spec & Common)
  | ({ size: "p3" } & P3Props & Common)
  | ({ size: "reviewed"; day: string } & Common);


/** A no-break space before each "·", so a separator never opens a line. */
const SEP = "\u00a0· ";

/** "kworb (Spotify plays) · read 6 Oct 2026 · Spotify's own count · read 8 Oct 2026";
 *  a source with `registers`: "Read at each body's register: TurnTable (TCSN),
 *  BPI, Music Canada, RMNZ + 20 more · verified 7 Oct 2026", where `more`
 *  draws each build's own "+ N more" link (fix 9). */
export function p2Line(sources: P2Spec["sources"], what: string | undefined, more: (n: number) => ReactNode) {
  return sources.map((src, i) => {
    const d = sentenceDate(src.date);
    const regs = src.registers ? p1Shown(src.registers) : null;
    return (
      <Fragment key={i}>
        {i > 0 ? SEP : null}
        {src.name}
        {regs && regs.shown.length > 0 ? (
          <>
            {": "}
            {regs.shown.join(", ")}
            {regs.more > 0 ? <> {more(regs.more)}</> : null}
          </>
        ) : null}
        {i === 0 && what ? ` (${what})` : null}
        {SEP}
        {d.kind}
        {d.text ? (
          <>
            {" "}
            <time dateTime={d.dateTime}>{d.text}</time>
          </>
        ) : null}
      </Fragment>
    );
  });
}

