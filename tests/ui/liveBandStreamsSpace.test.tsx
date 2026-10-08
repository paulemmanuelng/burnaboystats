import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import LiveBand from "../../app/components/LiveBand";
import styles from "../../app/components/liveBand.module.css";
import { spotifyTotalStreams } from "../../app/data/streamingTotals";

/**
 * SH-01 (design review, 8 Oct 2026): the live band at the top of every
 * desktop home view printed "career streams11.15B". The link is
 * `display: inline-flex`, and its label was a bare text node beside the
 * figure's span: an anonymous flex item, whose trailing space collapses. The
 * DOM text kept the space, so a text check passed while the screen ran the two
 * together (the same class as the co-lead tag, 6f64708c, and Biggest shows).
 *
 * jsdom does no layout, so this checks the structure that decides it: the
 * flex link holds ONE element and no bare text, and that element holds the
 * label, a real space and the figure.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");

/** What would collapse the space, in words; [] when the run is whole. */
function flexSpaceProblems(link: Element): string[] {
  const out: string[] = [];
  const bare = [...link.childNodes].filter((n) => n.nodeType === 3 && n.textContent!.trim());
  if (bare.length) out.push(`bare text in the flex link: ${bare.map((n) => JSON.stringify(n.textContent)).join(", ")}`);
  if (link.childNodes.length !== 1) out.push(`${link.childNodes.length} flex items, not one`);
  return out;
}

describe("SH-01: the live band reads \"career streams 11.15B\", with its space", () => {
  const link = parse(renderToStaticMarkup(<LiveBand />)).querySelector(`a.${styles.streams}`)!;

  it("the link is a flex container (the premise: this is where a space collapses)", () => {
    const css = readFileSync(join(process.cwd(), "app/components/liveBand.module.css"), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    expect(css.match(/\.streams\s*\{([^}]*)\}/)?.[1]).toMatch(/display:\s*inline-flex/);
  });

  it("the label and the figure are one inline run inside it", () => {
    expect(flexSpaceProblems(link)).toEqual([]);
    expect(link.textContent).toBe(`career streams ${spotifyTotalStreams}`);
    expect(link.querySelector(`.${styles.streamsFigure}`)?.textContent).toBe(spotifyTotalStreams);
  });

  // Verbatim from https://burnaboystats.com/ (live 8 Oct 2026).
  it("negative control: the link as shipped, label and figure as two flex items, is caught", () => {
    const shipped = parse(
      `<a class="liveBand-module__cuI1fa__streams" href="/music">career streams <span class="liveBand-module__cuI1fa__streamsFigure">11.15B</span></a>`,
    ).querySelector("a")!;
    expect(flexSpaceProblems(shipped)).toEqual([`bare text in the flex link: "career streams "`, "2 flex items, not one"]);
  });
});
