import { size, contentType } from "../lib/og-image";
import { BODY, BodyBox, FIG, Headline, MonoLines, monoText, ogFigureCard, ogFigureVersions } from "../lib/og-figure";
import { wrapLines } from "../lib/ogFit";
import { firstClause } from "../lib/bandHeadline";
import { shortStamp } from "../lib/dates";
import { updates } from "../data/updates";

export { size, contentType };
export const alt = "Burna Boy Stats — Latest Updates";

/**
 * The /updates preview leads with the newest entry (Job 6 · J6-4, fix 125,
 * Paul's default (a)): its text up to the first colon or full stop, the
 * site's one clause rule (bandHeadline's firstClause, without the band's
 * dash cut), two lines of Anton at 80 at most, with an ellipsis past them;
 * its date and category beneath. No headline field is added to the feed.
 */
const HEAD = 80;
const WIDTH = BODY.right - BODY.left;

/** The card's words for one entry: its headline lines and its stamp line. */
const cardFor = (entry: (typeof updates)[number]) => ({
  lines: wrapLines(firstClause(entry.text, { dash: false }).toUpperCase(), "anton", HEAD, WIDTH, 2),
  stamp: monoText(`${shortStamp(entry.date)} · ${entry.category}`, WIDTH, 1),
});

// Versioned by what it prints, so a new entry moves the preview with it.
export const generateImageMetadata = () => {
  const card = cardFor(updates[0]);
  return ogFigureVersions([...card.lines, ...card.stamp], alt);
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
