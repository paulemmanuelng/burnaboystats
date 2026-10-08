import { renderToStaticMarkup } from "react-dom/server";
import { render, screen, fireEvent, within } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/charts",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ChartsPage from "../../app/records/charts/page";
import ChartExplorer from "../../app/components/ChartExplorer";
import styles from "../../app/records/charts/charts.module.css";
import { albumCharts, singleCharts, featureCharts, CHART_COUNTRIES } from "../../app/data/charts";
import { releasePageLinks, releasePathFor, type ReleaseKind } from "../../app/lib/releasePages";
import { albumPages } from "../../app/data/albumPages";
import { songs } from "../../app/data/songs";
import { titleKey } from "../../app/lib/titleKey";

/**
 * CC-09 (design review, 8 Oct 2026): /records/charts had 0 links to /music.
 * At least 9 charted songs and all 6 charted albums have a page of their own,
 * and so does "Dai Dai" (/dai-dai) for its 70-chart row; a reader on the row
 * had no way to it. The desktop ledger's titles now link where a page exists,
 * as /certifications' do, and stay plain where none does.
 *
 * The phone screen is not covered here: its row header is the button that
 * unfolds the chart list, so a title link inside it needs a design call.
 */

const links = releasePageLinks();
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const kindOf = (group: string): ReleaseKind => (group === "Albums" ? "album" : "song");

/** "title → what it should link to, and what it does", for every row that is wrong. */
function rowProblems(list: Element, group: string): string[] {
  const out: string[] = [];
  for (const row of list.querySelectorAll(":scope > [role=listitem]")) {
    const a = row.querySelector(`a.${styles.titleLink}, a.titleLink`);
    const title = (a ?? row.querySelector(`.${styles.title}, .title`))?.textContent ?? "";
    const want = releasePathFor(links, title, kindOf(group));
    const got = a?.getAttribute("href") ?? undefined;
    if (want !== got) out.push(`${title}: want ${want ?? "no link"}, got ${got ?? "no link"}`);
  }
  return out;
}

describe("CC-09: /records/charts rows link to the release pages that exist", () => {
  const doc = parse(renderToStaticMarkup(<ChartsPage />));
  const desk = doc.querySelector(`.${styles.desktopOnly}`)!;
  const lists = [...desk.querySelectorAll(`.${styles.list}[role=list]`)];
  const groupOf = (l: Element) => l.getAttribute("aria-label")!.split(" — ")[0];

  it("the premise: the three groups render, and the pages the review counted exist", () => {
    expect(lists.map(groupOf)).toEqual(["Albums", "Singles", "Featured"]);
    const charted = [...albumCharts].filter((r) => albumPages.some((p) => titleKey(p.title) === titleKey(r.title)));
    expect(charted.length).toBeGreaterThanOrEqual(6);
    const songRows = [...singleCharts, ...featureCharts].filter((r) => songs.some((s) => titleKey(s.title) === titleKey(r.title)));
    expect(songRows.length).toBeGreaterThanOrEqual(9);
  });

  it("every row with a page links to it, and every row without one stays plain", () => {
    for (const l of lists) expect(rowProblems(l, groupOf(l)), groupOf(l)).toEqual([]);
  });

  it("the links are there: every charted album with a page, and Dai Dai to its story", () => {
    const hrefs = [...desk.querySelectorAll(`a.${styles.titleLink}`)].map((a) => a.getAttribute("href"));
    for (const r of albumCharts) {
      const want = releasePathFor(links, r.title, "album");
      if (want) expect(hrefs, r.title).toContain(want);
    }
    expect(hrefs).toContain("/dai-dai");
    expect(hrefs.filter((h) => h?.startsWith("/music/") && !h.startsWith("/music/albums/")).length).toBeGreaterThanOrEqual(9);
  });

  it("an album row never lands on a song page: No Sign of Weakness the single has no page", () => {
    expect(releasePathFor(links, "No Sign of Weakness", "album")).toBe("/music/albums/no-sign-of-weakness");
    expect(releasePathFor(links, "No Sign of Weakness", "song")).toBeUndefined();
  });

  it("the table view links the same titles", () => {
    render(
      <ChartExplorer albums={albumCharts} singles={singleCharts} features={featureCharts} countries={CHART_COUNTRIES} links={links} />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Table" }));
    const table = screen.getByRole("table");
    const dai = within(table).getAllByRole("link", { name: "Dai Dai" });
    expect(dai.length).toBeGreaterThan(0);
    for (const a of dai) expect(a.getAttribute("href")).toBe("/dai-dai");
  });

  // Verbatim from https://burnaboystats.com/records/charts (live 8 Oct 2026).
  it("negative control: the shipped row, a plain title span, is caught", () => {
    const shipped = parse(
      `<div role="list" aria-label="Singles — chart peaks by release"><div role="listitem"><span class="charts-module__kXOZya__rowText"><span class="title">Last Last</span></span></div></div>`,
    ).querySelector("[role=list]")!;
    expect(rowProblems(shipped, "Singles")).toEqual(["Last Last: want /music/last-last, got no link"]);
  });
});
