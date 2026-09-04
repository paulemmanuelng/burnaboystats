import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/charts",
}));

import ChartExplorer from "../../app/components/ChartExplorer";
import {
  albumCharts,
  singleCharts,
  featureCharts,
  CHART_COUNTRIES,
} from "../../app/data/charts";

/**
 * The deep-linked focus is a FILTER, and the explorer did not treat it as one.
 *
 * Two consequences, both on /records/charts?song=…, and the first is the worst
 * thing this site can do:
 *
 *   1. The empty state's sentence ends "That's a real gap in the record, not a
 *      missing page." That is the site asserting it looked and found nothing.
 *      It was printed for a ?song= naming a release this page does not carry,
 *      where the true answer is that the link is wrong — and it was printed
 *      without naming the focus at all, so a reader who arrived focused on one
 *      release was told there was no chart entry *anywhere*.
 *   2. "Clear filters" cleared country and peak and left the focus standing, so
 *      on the one screen the button exists for it did nothing at all.
 *
 * Sibling of chartSongDeepLink.test.tsx, which covers the param being read.
 * This file covers what the page then SAYS.
 */

const props = {
  albums: albumCharts,
  singles: singleCharts,
  features: featureCharts,
  countries: CHART_COUNTRIES,
};

// A real release with a modest chart run: NG #2, UK #53 — so "No. 1" excludes
// it while it stays a release the page genuinely carries.
const REAL = "Big 7";
const NOT_REAL = "Songs Burna Never Recorded";

const withQuery = (song: string) =>
  window.history.replaceState({}, "", `/records/charts?song=${encodeURIComponent(song)}`);
const withHash = (song: string) =>
  window.history.replaceState({}, "", `/records/charts#song=${encodeURIComponent(song)}`);

describe("ChartExplorer — what the empty state claims under a ?song= focus", () => {
  afterEach(() => window.history.replaceState({}, "", "/records/charts"));

  it("does not call an unknown release a gap in the record", () => {
    withQuery(NOT_REAL);
    render(<ChartExplorer {...props} />);

    // The falsehood, in the exact words it was published in.
    expect(screen.queryByText(/a real gap in the record/i)).not.toBeInTheDocument();
    // And the true statement, naming the release the link asked for.
    expect(screen.getByText(new RegExp(`No release on this page is called`, "i"))).toHaveTextContent(
      NOT_REAL
    );
  });

  it("names the focus when a filter combination really is empty", async () => {
    withQuery(REAL);
    render(<ChartExplorer {...props} />);
    // Big 7 peaked at #2 and #53 — asking for No. 1 leaves nothing.
    await userEvent.click(screen.getByRole("button", { name: "No. 1" }));

    // "There's no No. 1 chart entry for Big 7." — a true sentence. Without the
    // focus in it, the page claimed there was no No. 1 chart entry at all.
    const empty = screen.getByText(/a real gap in the record/i);
    expect(empty).toHaveTextContent(/no No\. 1 chart entry for Big 7\b/);
  });

  it("clears the focus when the reader presses Clear filters", async () => {
    withQuery(NOT_REAL);
    render(<ChartExplorer {...props} />);
    expect(screen.queryByText("Last Last")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /clear filters/i }));

    // The button's whole promise: the list comes back.
    expect(screen.getAllByText("Last Last").length).toBeGreaterThan(0);
    expect(screen.queryByRole("button", { name: /show all releases/i })).not.toBeInTheDocument();
  });

  it("offers the focus as the narrowest filter to drop", async () => {
    withQuery(REAL);
    render(<ChartExplorer {...props} />);
    await userEvent.click(screen.getByRole("button", { name: "No. 1" }));

    // The focus is one release out of sixty — narrower than any country or peak
    // band, and the filter the reader never set.
    await userEvent.click(screen.getByRole("button", { name: `Drop “${REAL}”` }));
    expect(screen.getAllByText("Last Last").length).toBeGreaterThan(0);
  });
});

describe("ChartExplorer — deep-link forms", () => {
  afterEach(() => window.history.replaceState({}, "", "/records/charts"));

  it("reads the fragment, as CertExplorer does", () => {
    withHash("Dai Dai");
    render(<ChartExplorer {...props} />);

    expect(screen.getAllByText("Dai Dai").length).toBeGreaterThan(0);
    expect(screen.queryByText("Last Last")).not.toBeInTheDocument();
  });

  it("still reads the query string, so links already in the wild keep working", () => {
    withQuery("Dai Dai");
    render(<ChartExplorer {...props} />);

    expect(screen.getAllByText("Dai Dai").length).toBeGreaterThan(0);
    expect(screen.queryByText("Last Last")).not.toBeInTheDocument();
  });

  it("prefers the fragment when a URL somehow carries both", () => {
    window.history.replaceState({}, "", "/records/charts?song=Last%20Last#song=Dai%20Dai");
    render(<ChartExplorer {...props} />);

    expect(screen.getAllByText("Dai Dai").length).toBeGreaterThan(0);
    expect(screen.queryByText("Last Last")).not.toBeInTheDocument();
  });
});
