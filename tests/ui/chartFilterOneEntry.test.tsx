import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/charts",
}));

import ChartExplorer from "../../app/components/ChartExplorer";
import { albumCharts, singleCharts, featureCharts, CHART_COUNTRIES } from "../../app/data/charts";
import { afrobeatsArtists } from "../../app/data/afrobeats";
import styles from "../../app/records/charts/charts.module.css";

// The explorer keeps its filters in the history entry (lib/deepLink saveView),
// which jsdom keeps across tests: a chip left on would be restored and the next
// click on it would turn it off.
beforeEach(() => window.history.replaceState(null, ""));

// The live page, 5 Oct 2026 (desktop cards view, both themes): No. 1 + NG read
// "Showing 13 of 103 releases" while the Table view listed 9 NG No. 1s and the
// phone said 9 releases. Dai Dai, Last Last, We Pray and Jerusalema (Remix) were
// kept with every chip dimmed: a No. 1 somewhere else met the peak filter and a
// lower Nigerian peak met the country filter.
describe("ChartExplorer: the peak and the country meet on one chart entry", () => {
  const releases = [...albumCharts, ...singleCharts, ...featureCharts];
  const meta = (container: HTMLElement) =>
    container.querySelector(`.${styles.filterMeta}`)!.textContent!.replace(/\s+/g, " ");
  const countryChip = (code: string) =>
    screen
      .getAllByRole("button")
      .find((b) => b.textContent === `${CHART_COUNTRIES[code].flag}${code}`)!;

  it("keeps only releases with a No. 1 in Nigeria, every card with a lit chip", async () => {
    const both = releases.filter((r) => r.entries.some((e) => e.c === "NG" && e.peak === 1));
    const split = releases.filter(
      (r) => r.entries.some((e) => e.c === "NG") && r.entries.some((e) => e.peak === 1)
    );
    // The negative control: the two readings still differ on today's data, so
    // this test would have caught the shipped count.
    expect(split.length).toBeGreaterThan(both.length);

    const { container } = render(
      <ChartExplorer
        albums={albumCharts}
        singles={singleCharts}
        features={featureCharts}
        countries={CHART_COUNTRIES}
      />
    );
    await userEvent.click(screen.getByRole("button", { name: "No. 1" }));
    await userEvent.click(countryChip("NG"));

    expect(meta(container)).toContain(`Showing ${both.length} of ${releases.length} releases`);
    expect(meta(container)).not.toContain(`Showing ${split.length} of`);
    for (const r of split.filter((r) => !both.includes(r)))
      expect(screen.queryByText(r.title, { selector: `.${styles.title}` })).not.toBeInTheDocument();

    // Every card left standing shows the chip that kept it.
    const cards = container.querySelectorAll(`.${styles.row}`);
    expect(cards).toHaveLength(both.length);
    for (const card of cards)
      expect(card.querySelectorAll(`.${styles.peak}:not(.${styles.peakDim})`).length).toBeGreaterThan(0);

    // And the cards agree with the table, which always counted entries.
    await userEvent.click(screen.getByRole("button", { name: "Table" }));
    const entries = releases.reduce((n, r) => n + r.entries.length, 0);
    expect(meta(container)).toContain(`Showing ${both.length} of ${entries} chart entries`);
  });

  it("leaves the unfiltered list whole on every chart page", () => {
    // The one-entry test drops a release with no chart entries; none exists,
    // so "All" still lists every release, Burna's and the board's.
    for (const r of releases) expect(r.entries.length).toBeGreaterThan(0);
    for (const a of afrobeatsArtists) for (const r of a.charts) expect(r.entries.length).toBeGreaterThan(0);
  });
});
