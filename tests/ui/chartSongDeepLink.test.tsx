import { render, screen } from "@testing-library/react";

// The mobile screen's back button is a real app-router BackLink, which throws
// outside a mounted router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/charts",
}));

import ChartExplorer from "../../app/components/ChartExplorer";
import MobileOfficialCharts from "../../app/components/MobileOfficialCharts";
import {
  albumCharts,
  singleCharts,
  featureCharts,
  CHART_COUNTRIES,
  chartEntryCount,
  numberOnes,
  chartCountryCount,
} from "../../app/data/charts";

/**
 * The Dai Dai story's "every chart position" link carries ?song=Dai Dai, and
 * /records/charts renders BOTH layouts into the DOM at once — the desktop
 * explorer inside a `.desktopOnly` div, the mobile screen beside it. Only the
 * desktop half ever read the param, so the same link that arrived filtered on a
 * laptop arrived on a phone as the full 60-release list, with nothing on screen
 * to say a filter had been intended.
 *
 * Both layouts are asserted here for that reason: a param read added to one
 * component is invisibly missing from the other, and neither test would fail.
 */

const withSong = (song: string) =>
  window.history.replaceState({}, "", `/records/charts?song=${encodeURIComponent(song)}`);

const mobileProps = {
  albums: albumCharts,
  singles: singleCharts,
  features: featureCharts,
  countries: CHART_COUNTRIES,
  entryCount: chartEntryCount,
  territoryCount: chartCountryCount,
  numberOnes,
  releaseCount: albumCharts.length + singleCharts.length + featureCharts.length,
};

describe("?song= deep link into the official charts", () => {
  afterEach(() => window.history.replaceState({}, "", "/records/charts"));

  it("focuses the release on the mobile screen", () => {
    withSong("Dai Dai");
    render(<MobileOfficialCharts {...mobileProps} />);

    expect(screen.getAllByText("Dai Dai").length).toBeGreaterThan(0);
    expect(screen.queryByText("Last Last")).not.toBeInTheDocument();
    // And says so, with a way back — a filter the reader never set has to be
    // both visible and clearable.
    expect(screen.getByRole("button", { name: /show all releases/i })).toBeInTheDocument();
  });

  it("focuses the release in the desktop explorer", () => {
    withSong("Dai Dai");
    render(
      <ChartExplorer
        albums={albumCharts}
        singles={singleCharts}
        features={featureCharts}
        countries={CHART_COUNTRIES}
      />
    );

    expect(screen.getAllByText("Dai Dai").length).toBeGreaterThan(0);
    expect(screen.queryByText("Last Last")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /show all releases/i })).toBeInTheDocument();
  });

  it("leaves both layouts unfiltered with no param", () => {
    render(<MobileOfficialCharts {...mobileProps} />);
    expect(screen.getAllByText("Last Last").length).toBeGreaterThan(0);
    expect(screen.queryByRole("button", { name: /show all releases/i })).not.toBeInTheDocument();
  });
});
