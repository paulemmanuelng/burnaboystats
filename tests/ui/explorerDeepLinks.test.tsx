import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// The mobile screens' back buttons are real app-router BackLinks, which throw
// outside a mounted router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/certifications",
}));

import CertExplorer from "../../app/components/CertExplorer";
import MobileCerts from "../../app/components/MobileCerts";
import ChartExplorer from "../../app/components/ChartExplorer";
import MobileOfficialCharts from "../../app/components/MobileOfficialCharts";
import AwardExplorer from "../../app/components/AwardExplorer";
import MobileAwards from "../../app/components/MobileAwards";
import {
  COUNTRIES,
  albums,
  singles,
  features,
  allItems,
  totalAwards,
  countryCount,
} from "../../app/data/certifications";
import {
  albumCharts,
  singleCharts,
  featureCharts,
  CHART_COUNTRIES,
  chartEntryCount,
  numberOnes,
  chartCountryCount,
} from "../../app/data/charts";
import { ceremonies, honours, totalWins } from "../../app/data/awards";

/**
 * The explorers' deep links and filters, as the debug pass of 24 Sep 2026
 * found them on the live site:
 *
 *   C-04  search sent releases, award bodies and countries to bare list pages;
 *         #country= and #body= had no reader at all.
 *   C-05  the desktop ledger's empty state ignored the focus: "There's no
 *         certification from Nigeria. That's a real gap in the record" about
 *         Dai Dai alone, and "There's no certification." about a #release=
 *         naming nothing — which "Clear filters" then did not clear.
 *   C-06  the phone chart screen read only ?song=, so #song=Dai%20Dai focused
 *         nothing; and its "Clear filters" left a ?song=Nope focus standing.
 *   C-09  Back rebuilt every explorer unfiltered under the old scroll offset.
 *   C-10  "Show all releases" left #release= in the address bar, so a reload
 *         put the focus back; and a changed fragment changed nothing on screen.
 */

const at = (url: string) => window.history.replaceState({}, "", url);
const pressed = (name: RegExp) => screen.getByRole("button", { name, pressed: true });

const cert = () => (
  <CertExplorer albums={albums} singles={singles} features={features} countries={COUNTRIES} totalCerts={totalAwards()} />
);
const mobileCerts = () => (
  <MobileCerts
    releases={allItems}
    albums={albums}
    history={[]}
    countries={COUNTRIES}
    total={totalAwards()}
    countryCount={countryCount}
  />
);
const chart = () => (
  <ChartExplorer albums={albumCharts} singles={singleCharts} features={featureCharts} countries={CHART_COUNTRIES} />
);
const mobileChart = () => (
  <MobileOfficialCharts
    albums={albumCharts}
    singles={singleCharts}
    features={featureCharts}
    countries={CHART_COUNTRIES}
    entryCount={chartEntryCount}
    territoryCount={chartCountryCount}
    numberOnes={numberOnes}
    releaseCount={albumCharts.length + singleCharts.length + featureCharts.length}
  />
);

afterEach(() => at("/"));

describe("C-05: the desktop ledger's empty state under a focus", () => {
  it("calls an unknown release a broken link, not a gap in the record", () => {
    at("/certifications#release=Nope");
    render(cert());
    // What the live page said, word for word.
    expect(
      screen.queryByText("There's no certification. That's a real gap in the record, not a missing page.")
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("No release on this page is called “Nope”. That's a broken link, not a gap in the record.")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Drop “Nope”" })).toBeInTheDocument();
  });

  it("names the focus when a country really has nothing for it", async () => {
    // Guard: the sentence below is only true while Dai Dai has no Nigerian
    // plaque. If it gets one, pick a country it still lacks.
    expect(allItems.find((r) => r.title === "Dai Dai")!.certs.some((c) => c.c === "NG")).toBe(false);

    at("/certifications#release=Dai%20Dai");
    render(cert());
    await userEvent.click(screen.getByRole("button", { name: /NG$/ }));

    expect(
      screen.queryByText("There's no certification from Nigeria. That's a real gap in the record, not a missing page.")
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("There's no certification for Dai Dai from Nigeria. That's a real gap in the record, not a missing page.")
    ).toBeInTheDocument();
  });

  it("clears the focus on Clear filters, and takes it out of the address bar", async () => {
    at("/certifications#release=Nope");
    render(cert());
    await userEvent.click(screen.getByRole("button", { name: "Clear filters" }));

    expect(screen.queryByRole("button", { name: /show all releases/i })).not.toBeInTheDocument();
    expect(screen.getAllByText("Last Last").length).toBeGreaterThan(0);
    expect(window.location.hash).toBe("");
  });
});

describe("C-06: the phone chart screen", () => {
  it("reads the #song= fragment", () => {
    at("/records/charts#song=Dai%20Dai");
    render(mobileChart());
    expect(screen.getByRole("button", { name: /show all releases/i })).toBeInTheDocument();
    expect(screen.queryByText("Last Last")).not.toBeInTheDocument();
  });

  it("calls an unknown release a broken link, and Clear filters clears it", async () => {
    at("/records/charts?song=Nope");
    render(mobileChart());
    expect(
      screen.queryByText("There's no chart entry. That's a real gap in the record, not a missing page.")
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("No release on this page is called “Nope”. That's a broken link, not a gap in the record.")
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.queryByRole("button", { name: /show all releases/i })).not.toBeInTheDocument();
    expect(screen.getAllByText("Last Last").length).toBeGreaterThan(0);
    expect(window.location.search).toBe("");
  });

  it("names the focus when a filter combination really is empty", async () => {
    // Big 7 peaked at NG #2 and UK #53 — asking for No. 1 leaves nothing.
    at("/records/charts#song=Big%207");
    render(mobileChart());
    await userEvent.click(screen.getByRole("button", { name: "No. 1" }));
    expect(
      screen.getByText("There's no No. 1 chart entry for Big 7. That's a real gap in the record, not a missing page.")
    ).toBeInTheDocument();
  });
});

describe("C-10: a cleared focus leaves the address bar, and a new fragment is read", () => {
  it.each([
    ["the desktop ledger", cert, "/certifications", "release"],
    ["the phone ledger", mobileCerts, "/certifications", "release"],
    ["the desktop chart table", chart, "/records/charts", "song"],
    ["the phone chart screen", mobileChart, "/records/charts", "song"],
  ] as const)("%s", async (_, ui, path, key) => {
    at(`${path}#${key}=Dai%20Dai`);
    render(ui());
    await userEvent.click(screen.getByRole("button", { name: /show all releases/i }));
    expect(window.location.pathname + window.location.hash).toBe(path);
    expect(screen.getAllByText("Last Last").length).toBeGreaterThan(0);

    window.location.hash = `#${key}=Last%20Last`;
    await waitFor(() => expect(screen.getByRole("button", { name: /show all releases/i })).toBeInTheDocument());
    expect(screen.getByText(/Showing every/).textContent).toMatch(/Last Last$/);
  });
});

describe("C-04: search's #country= and #body= links set the filter", () => {
  it("#country= on the ledger presses that country, and another choice drops it from the URL", async () => {
    at("/certifications#country=FR");
    render(cert());
    expect(pressed(/FR$/)).toBeInTheDocument();
    await userEvent.click(screen.getAllByRole("button", { name: "All" })[1]);
    expect(window.location.hash).toBe("");
  });

  it("#country= on the chart table presses a chart-only territory", () => {
    // Argentina charts and certifies nothing, so search sends it here.
    expect(COUNTRIES.AR).toBeUndefined();
    at("/records/charts#country=AR");
    render(chart());
    expect(pressed(/AR$/)).toBeInTheDocument();
  });

  it("#body= on the desktop awards explorer presses that body", async () => {
    at("/records/awards#body=BET%20Awards");
    render(<AwardExplorer />);
    expect(pressed(/^BET Awards$/)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Grammy Awards" })).not.toBeInTheDocument();
  });

  it("#body= on the phone awards screen brings that body's heading into view", () => {
    const into = vi.fn();
    const had = Element.prototype.scrollIntoView;
    vi.spyOn(Element.prototype, "getClientRects").mockImplementation(() => [{}] as unknown as DOMRectList);
    Element.prototype.scrollIntoView = into;
    at("/records/awards#body=BET%20Awards");
    render(
      <MobileAwards
        ceremonies={ceremonies}
        honours={honours}
        stats={[]}
        wins={totalWins}
        footNote=""
        faqs={[]}
      />
    );
    expect(into).toHaveBeenCalledTimes(1);
    expect(into.mock.contexts[0]).toBe(document.getElementById("award-body-bet-awards"));
    expect((into.mock.contexts[0] as HTMLElement).textContent).toMatch(/^BET Awards/);
    vi.restoreAllMocks();
    Element.prototype.scrollIntoView = had;
  });
});

describe("C-09: Back brings the filters back", () => {
  // Back remounts the explorer on the same history entry, which is what an
  // unmount and a second render on an unchanged history.state reproduce.
  it("the desktop ledger keeps its tier and country", async () => {
    at("/certifications");
    const first = render(cert());
    await userEvent.click(screen.getByRole("button", { name: "Platinum" }));
    await userEvent.click(screen.getByRole("button", { name: /FR$/ }));
    first.unmount();

    render(cert());
    expect(pressed(/^Platinum$/)).toBeInTheDocument();
    expect(pressed(/FR$/)).toBeInTheDocument();
  });

  it("the desktop chart table keeps its peak, country and view", async () => {
    at("/records/charts");
    const first = render(chart());
    await userEvent.click(screen.getByRole("button", { name: "No. 1" }));
    await userEvent.click(screen.getByRole("button", { name: /NG$/ }));
    await userEvent.click(screen.getByRole("button", { name: "Table" }));
    first.unmount();

    render(chart());
    expect(pressed(/^No\. 1$/)).toBeInTheDocument();
    expect(pressed(/NG$/)).toBeInTheDocument();
    expect(pressed(/^Table$/)).toBeInTheDocument();
  });

  it("the phone screens keep their rails", async () => {
    at("/certifications");
    const certs = render(mobileCerts());
    await userEvent.click(screen.getByRole("button", { name: /^Platinum/ }));
    certs.unmount();
    render(mobileCerts());
    expect(screen.getByRole("button", { name: /^Platinum/ }).className).toMatch(/chipOn/);

    at("/records/charts");
    const charts = render(mobileChart());
    await userEvent.click(screen.getByRole("button", { name: "Top 10" }));
    charts.unmount();
    render(mobileChart());
    expect(pressed(/^Top 10$/)).toBeInTheDocument();
  });

  it("a new history entry starts unfiltered", async () => {
    at("/certifications");
    const first = render(cert());
    await userEvent.click(screen.getByRole("button", { name: "Platinum" }));
    first.unmount();

    at("/certifications"); // a fresh entry: no saved state
    render(cert());
    expect(screen.getByRole("button", { name: "Platinum" })).toHaveAttribute("aria-pressed", "false");
  });
});
