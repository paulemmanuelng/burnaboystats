import { size, contentType } from "../lib/og-image";
import { BODY, BodyBox, FIG, Headline, MonoLines, monoText, ogFigureCard, ogFigureVersions } from "../lib/og-figure";
import { wrapLines } from "../lib/ogFit";
import { firstClause } from "../lib/bandHeadline";
import { shortStamp } from "../lib/dates";
import { updates } from "../data/updates";

export { size, contentType };

/**
 * The /updates preview leads with the newest entry (Job 6 · J6-4, fix 125,
 * Paul's default (a)): its text up to the first colon or full stop, the
 * site's one clause rule (bandHeadline's firstClause, without the band's
 * dash cut), two lines of Anton at 80 at most, with an ellipsis past them;
 * its date and category beneath. No headline field is added to the feed.
 */
const HEAD = 80;
const WIDTH = BODY.right - BODY.left;

/** The card's words for one entry: its headline lines and its stamp line,
 *  and the alt that reads them: the whole clause, past the card's clamp
 *  (PV-07, live debug 15 Oct 2026). */
const cardFor = (entry: (typeof updates)[number]) => {
  const clause = firstClause(entry.text, { dash: false });
  const stamp = `${shortStamp(entry.date)} · ${entry.category}`;
  return {
    lines: wrapLines(clause.toUpperCase(), "anton", HEAD, WIDTH, 2),
    stamp: monoText(stamp, WIDTH, 1),
    alt: `Burna Boy Stats, latest update (${stamp}): ${clause}`,
  };
};

export const alt = cardFor(updates[0]).alt;

// Versioned by what it prints, so a new entry moves the preview with it.
export const generateImageMetadata = () => {
  const card = cardFor(updates[0]);
  return ogFigureVersions([...card.lines, ...card.stamp], card.alt);
};

export default function Image() {
  const card = cardFor(updates[0]);
  return ogFigureCard(
    <BodyBox>
      <Headline lines={card.lines} size={HEAD} />
      <MonoLines lines={card.stamp} color={FIG.body} style={{ marginTop: 22 }} />
    </BodyBox>,
  );
}
