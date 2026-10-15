import { size, contentType } from "../../lib/og-image";
import { BODY, BodyBox, FIG, Figure, MonoLines, monoText, ogFigureCard, ogFigureVersions } from "../../lib/og-figure";
import { fitSize } from "../../lib/ogFit";
import { plural } from "../../lib/plural";
import { africaBoards, boardsHeLeads } from "../../lib/africaBoards";

export { size, contentType };
export const alt = "Africa's Biggest — most-streamed African artists by year on Spotify";

/**
 * The /records/africas-biggest preview, figure first like Job 6's thirteen
 * (J6-4; live debug 15 Oct 2026, Paul "yes"): the boards he leads, of all
 * the page's boards, the count its own hero and phone tile print ("He leads
 * 12 of 20 boards"), read from the boards; under it, the years he topped the
 * by-year board.
 *
 * Those years are the board's own badge reading ("3 of 4 yrs"), never typed.
 * "Burna Boy led 2024 & 2025" was typed on 22 Jun 2026; two days later the
 * 2022 row joined the board, also his, and the card went on saying two years
 * (live debug, 15 Oct 2026). The running year is a lead, not a year won, so
 * it waits until it closes.
 */
const WIDTH = BODY.right - BODY.left;

const byYear = africaBoards.find((b) => b.id === "most-streamed-african-artist");
const yearsLed = (byYear?.years ?? [])
  .filter((y) => y.his && !y.inProgress)
  .map((y) => y.label)
  .sort();
const listed = yearsLed.length <= 1 ? (yearsLed[0] ?? "") : `${yearsLed.slice(0, -1).join(", ")} & ${yearsLed.at(-1)}`;

const figure = boardsHeLeads.toLocaleString("en-US");
const label = `of ${africaBoards.length} ${plural(africaBoards.length, "board", "boards")} he leads`;
// The board's own title ("Most-streamed African artist"), on the platform its
// figures are read from; the years on a line of their own, so the list never
// breaks across the two.
const years =
  byYear && listed
    ? { text: `${byYear.title} on Spotify in ${listed}`, lines: [...monoText(`${byYear.title} on Spotify`, WIDTH, 1), ...monoText(`in ${listed}`, WIDTH, 1)] }
    : null;
const FIGURE = fitSize([figure], WIDTH, 220);

// Versioned by what it prints, so a board he takes or loses, or a year he
// tops, moves the preview.
export const generateImageMetadata = () => ogFigureVersions([figure, label, ...(years ? [years.text] : [])], alt);

export default function Image() {
  return ogFigureCard(
    <BodyBox>
      <Figure value={figure} size={FIGURE} />
      <MonoLines lines={monoText(label, WIDTH)} style={{ marginTop: 18 }} />
      {years ? <MonoLines lines={years.lines} color={FIG.body} style={{ marginTop: 12 }} /> : null}
    </BodyBox>,
  );
}
