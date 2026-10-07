import type { ComponentProps } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/charts",
}));

import ChartExplorer from "../../app/components/ChartExplorer";
import { albumCharts, singleCharts, featureCharts, CHART_COUNTRIES, chartEntryCount } from "../../app/data/charts";
import { afrobeatsArtists, chartCountryMeta } from "../../app/data/afrobeats";
import styles from "../../app/records/charts/charts.module.css";

// The live Table view, 6 Oct 2026 (desktop, dark and light): with a filter on,
// the count line read "Showing 9 of all chart entries" on /records/charts
// (No. 1 + NG) and "Showing 52 of all chart entries" on /afrobeats/davido/charts
// (Top 10) — a count with nothing to measure it against, while Cards on the same
// page read "Showing 9 of 103 releases". And #song=Last Last with No. 1 put
// "1 chart entries · click a header to sort" in the hint.
beforeEach(() => window.history.replaceState(null, "", "/records/charts"));
afterEach(() => window.history.replaceState(null, "", "/records/charts"));

const text = (container: HTMLElement, cls: string) =>
  container.querySelector(`.${cls}`)!.textContent!.replace(/\s+/g, " ");

type Props = ComponentProps<typeof ChartExplorer>;
const pages: (Pick<Props, "albums" | "singles" | "features" | "countries"> & { name: string })[] = [
  { name: "Burna Boy", albums: albumCharts, singles: singleCharts, features: featureCharts, countries: CHART_COUNTRIES },
  ...afrobeatsArtists
    .filter((a) => a.charts.length > 0)
    .map((a) => {
      const codes = [...new Set(a.charts.flatMap((r) => r.entries.map((e) => e.c)))];
      return {
        name: a.name,
        albums: a.charts.filter((r) => r.kind === "Albums"),
        singles: a.charts.filter((r) => r.kind === "Singles"),
        features: [],
        countries: Object.fromEntries(codes.map((c) => [c, chartCountryMeta(c)])),
      };
    }),
];

describe("ChartExplorer Table view: the count line has a total", () => {
  it.each(pages.map((p) => [p.name, p] as const))("%s: Showing n of <every entry> chart entries", async (_, p) => {
    const all = [...p.albums, ...p.singles, ...p.features];
    const total = all.reduce((n, r) => n + r.entries.length, 0);
    const top40 = all.reduce((n, r) => n + r.entries.filter((e) => e.peak <= 40).length, 0);

    const { container } = render(
      <ChartExplorer albums={p.albums} singles={p.singles} features={p.features} countries={p.countries} />
    );
    await userEvent.click(screen.getByRole("button", { name: "Table" }));
    await userEvent.click(screen.getByRole("button", { name: "Top 40" }));

    const meta = text(container, styles.filterMeta);
    expect(meta).not.toContain("of all");
    expect(meta).toContain(`Showing ${top40} of ${total} chart entries`);
    expect(text(container, styles.viewHint)).toBe(`${top40} chart entries · click a header to sort`);
    cleanup();
  });

  it("Burna Boy's total is the site's published entry count", () => {
    const total = [...albumCharts, ...singleCharts, ...featureCharts].reduce((n, r) => n + r.entries.length, 0);
    expect(total).toBe(chartEntryCount);
  });

  it("one entry is '1 chart entry' (#song=Last Last + No. 1)", async () => {
    const lastLast = [...albumCharts, ...singleCharts, ...featureCharts].find((r) => r.title === "Last Last")!;
    // The negative control: today's data still leaves exactly one No. 1 here.
    expect(lastLast.entries.filter((e) => e.peak === 1)).toHaveLength(1);

    window.history.replaceState(null, "", "/records/charts#song=Last%20Last");
    const { container } = render(
      <ChartExplorer albums={albumCharts} singles={singleCharts} features={featureCharts} countries={CHART_COUNTRIES} />
    );
    await userEvent.click(screen.getByRole("button", { name: "No. 1" }));

    expect(text(container, styles.viewHint)).toBe("1 chart entry · click a header to sort");
    expect(text(container, styles.filterMeta)).toContain(`Showing 1 of ${chartEntryCount} chart entries`);
  });
});
