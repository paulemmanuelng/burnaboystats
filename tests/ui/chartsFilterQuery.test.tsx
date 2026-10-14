import { render, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ChartsPage from "../../app/records/charts/page";
import ArtistChartsPage from "../../app/afrobeats/[artist]/charts/page";
import ChartExplorer from "../../app/components/ChartExplorer";
import { CHART_COUNTRIES, albumCharts, singleCharts, featureCharts } from "../../app/data/charts";
import { artistBySlug } from "../../app/data/afrobeats";
import { chartGroups, mostCharted, MOST_CHARTED_SHOWN, REGION_ORDER, regionOf } from "../../app/lib/chartRegions";
import styles from "../../app/records/charts/charts.module.css";
import ledger from "../../app/components/ledgerRow.module.css";
import { read, winning } from "../fixtures/cssRules";

/**
 * Job 3 · J3-8 (design review 8 Oct 2026; fixes 56, 58, 71): /records/charts'
 * country filter as continent runs, a "Most charted" run, and a type-to-filter
 * field that narrows the chips. A typed match is a plain chip (fix 56); no
 * match says so with the page's own count and its most-charted code. A
 * continent filters releases the way a country chip does, and is N2 when
 * chosen; a country pick clears it. A board artist's page builds the same
 * groups from its own territories, empty ones left out, no "Most charted".
 */

beforeEach(() => window.history.replaceState(null, "", "/records/charts"));

const burna = [...albumCharts, ...singleCharts, ...featureCharts];
const panel = (c: HTMLElement) => c.querySelector("#chart-filters") as HTMLElement;
const runs = (c: HTMLElement) => [...panel(c).querySelectorAll<HTMLElement>(`.${styles.regionRun}`)];
const runName = (r: HTMLElement) => r.getAttribute("aria-label");
const chipsIn = (r: HTMLElement) =>
  [...r.querySelectorAll<HTMLButtonElement>("button[title]")].map((b) => b.textContent!.match(/([A-Z]{2,4})$/)![1]);
const search = (c: HTMLElement) => within(panel(c)).getByRole("searchbox", { name: "Type a country or code" });

describe("/records/charts: the runs", () => {
  it("Most charted first, then the five continents; every chip once per continent; counts are the run's chips", () => {
    const { container } = render(<ChartsPage />);
    const rs = runs(container);
    expect(rs.map(runName)).toEqual(["Most charted", ...REGION_ORDER]);
    expect(chipsIn(rs[0])).toEqual(mostCharted(burna, MOST_CHARTED_SHOWN));
    const continents = rs.slice(1);
    expect(continents.flatMap(chipsIn).sort()).toEqual(Object.keys(CHART_COUNTRIES).sort());
    for (const r of rs) {
      const n = Number(r.querySelector(`.${styles.regionCount}`)!.textContent);
      expect(n, runName(r)!).toBe(chipsIn(r).length);
    }
    // Nothing folds: no toggle, no "more" inside the runs.
    expect(panel(container).querySelector("details, [aria-expanded]")).toBeNull();
  });

  it("typing “ni” leaves a Matches run of NG and NI as plain chips", async () => {
    const { container } = render(<ChartsPage />);
    await userEvent.type(search(container), "ni");
    const rs = runs(container);
    expect(rs.map(runName)).toEqual(["Matches"]);
    expect(chipsIn(rs[0])).toEqual(["NG", "NI"]);
    expect(rs[0].querySelector(`.${styles.regionCount}`)!.textContent).toBe("2");
    for (const b of rs[0].querySelectorAll("button[title]")) {
      expect(b).toHaveAttribute("aria-pressed", "false");
      expect(b.className).not.toContain(styles.fChipOn);
    }
    // The field filters the chips, not the releases.
    expect(container.querySelectorAll(`.${ledger.row}`)).toHaveLength(burna.length);
    await userEvent.click(within(panel(container)).getByRole("button", { name: "Clear ✕" }));
    expect(runs(container).map(runName)).toEqual(["Most charted", ...REGION_ORDER]);
  });

  it("“zz” prints the derived empty line", async () => {
    const { container } = render(<ChartsPage />);
    await userEvent.type(search(container), "zz");
    expect(runs(container)).toHaveLength(0);
    const n = Object.keys(CHART_COUNTRIES).length;
    const top = mostCharted(burna, 1)[0];
    expect(panel(container).querySelector(`.${styles.searchEmpty}`)!.textContent).toBe(
      `No chart in a territory matching “zz”. All ${n} are listed when the field is cleared — or try a code, like “${top}”.`,
    );
  });

  it("choosing Africa keeps only releases with an African entry; a country pick clears it", () => {
    // The explorer alone, as /records/charts calls it: the phone screen beside
    // it re-renders nothing here, and the full page is slow under load.
    const { container } = render(
      <ChartExplorer albums={albumCharts} singles={singleCharts} features={featureCharts} countries={CHART_COUNTRIES} mostChartedRun />,
    );
    const africa = within(panel(container)).getByRole("button", { name: /^Africa \d+$/ });
    expect(africa).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(africa);
    expect(africa).toHaveAttribute("aria-pressed", "true");
    const kept = burna.filter((r) => r.entries.some((e) => regionOf(e.c) === "Africa"));
    expect(kept.length).toBeLessThan(burna.length);
    const rows = container.querySelectorAll(`.${ledger.row}`);
    expect(rows).toHaveLength(kept.length);
    // A row's non-African pills dim, as a country chip dims the others.
    for (const row of rows)
      for (const p of row.querySelectorAll(`.${styles.peak}`)) {
        const code = p.textContent!.match(/([A-Z]{2,4}) #\d+$/)![1];
        expect(p.className.includes(styles.peakDim), code).toBe(regionOf(code) !== "Africa");
      }
    expect(container.querySelector(`.${styles.filterMeta}`)!.textContent).toContain(`Showing ${kept.length} of ${burna.length} releases`);
    // A country chip clears the continent, and the other way round.
    const ukChip = within(runs(container).find((r) => runName(r) === "Europe")!).getByRole("button", { name: /UK$/ });
    fireEvent.click(ukChip);
    expect(africa).toHaveAttribute("aria-pressed", "false");
    expect(ukChip).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(africa);
    expect(ukChip).toHaveAttribute("aria-pressed", "false");
    // Other runs keep full ink: no run is dimmed.
    for (const r of runs(container)) expect(r.getAttribute("style")).toBeNull();
  });
});

describe("a board artist's chart page", () => {
  it("Tyla's runs are her own non-empty continents, with no Most charted", async () => {
    window.history.replaceState(null, "", "/afrobeats/tyla/charts");
    const { container } = render(await ArtistChartsPage({ params: Promise.resolve({ artist: "tyla" }) }));
    const a = artistBySlug("tyla")!;
    const own = [...new Set(a.charts.flatMap((r) => r.entries.map((e) => e.c)))];
    const want = chartGroups(own).map((g) => g.region);
    expect(want.length).toBeLessThanOrEqual(REGION_ORDER.length);
    expect(runs(container).map(runName)).toEqual(want);
    expect(runs(container).flatMap(chipsIn).sort()).toEqual([...own].sort());
  });
});

describe("the field, the chosen continent and the view toggle (CSS)", () => {
  const css = read("app/records/charts/charts.module.css");
  const top = (m: string | null) => m === null;

  it("the field is a control on --btn-edge; a chosen continent is N2", () => {
    expect(winning(css, ".search", "border", top)).toBe("1px solid var(--btn-edge)");
    const on = '.regionLabel[aria-pressed="true"]';
    expect(winning(css, on, "border-color", top)).toBe("var(--chip-on-edge)");
    expect(winning(css, on, "background", top)).toBe("var(--chip-on-wash)");
    expect(winning(css, on, "color", top)).toBe("var(--chip-on-ink)");
  });

  it("the Cards/Table toggle's selected segment is the ink fill", () => {
    expect(winning(css, ".viewBtnOn", "background-color", top)).toBe("var(--text)");
    expect(winning(css, ".viewBtnOn", "color", top)).toBe("var(--bg)");
  });

  it("at 1240 and up the tiles sit beside the lede (a 560px column); the board's hero has no modifier", () => {
    const split = winning(css, ".heroSplit", "grid-template-columns", (m) => m === "@media (min-width: 1240px)");
    expect(split).toBe("minmax(0, 1fr) 560px");
    expect(read("app/afrobeats/[artist]/charts/page.tsx")).not.toContain("heroSplit");
    expect(read("app/records/charts/page.tsx")).toContain("styles.heroSplit");
  });
});
