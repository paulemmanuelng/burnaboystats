import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// The mobile screens' back buttons are real app-router BackLinks, which throw
// outside a mounted router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/certifications",
}));

import MobileCerts from "../../app/components/MobileCerts";
import MobileOfficialCharts from "../../app/components/MobileOfficialCharts";
import certStyles from "../../app/components/mobileCerts.module.css";
import chartStyles from "../../app/components/mobileOfficialCharts.module.css";
import { COUNTRIES, albums, allItems, totalAwards, countryCount } from "../../app/data/certifications";
import {
  albumCharts,
  singleCharts,
  featureCharts,
  CHART_COUNTRIES,
  chartEntryCount,
  numberOnes,
  chartCountryCount,
} from "../../app/data/charts";
import { generatedDocs } from "../../app/lib/searchIndex.generated";

/**
 * V-records-04 (debug pass, 5 Oct 2026): search links every country to a
 * #country= fragment — the 26 certifying ones to /certifications, the 43 that
 * chart without a plaque to /records/charts — and on a phone the tap did
 * nothing. The phone certs screen read only #release=, so
 * /certifications#country=BE opened the unfiltered 250-plaque ledger; the
 * phone charts screen kept #country= only for its 17 rail chips, so
 * /records/charts#country=AR opened "103 releases" under a lit "All". The
 * desktop applied both (2 releases each).
 *
 * Now every search country result lands filtered on a phone, and says so: the
 * certs screen in a bar, the charts screen with its chip lit or, off the rail,
 * in a bar.
 */

const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));

const mobileCerts = () => (
  <MobileCerts
    releases={allItems}
    albums={albums}
    history={[]}
    countries={COUNTRIES}
    total={totalAwards()}
    countryCount={countryCount}
    home="NG"
    homeName="Nigeria"
  />
);
const chartReleases = [...albumCharts, ...singleCharts, ...featureCharts];
const mobileChart = () => (
  <MobileOfficialCharts
    albums={albumCharts}
    singles={singleCharts}
    features={featureCharts}
    countries={CHART_COUNTRIES}
    entryCount={chartEntryCount}
    territoryCount={chartCountryCount}
    numberOnes={numberOnes}
    releaseCount={chartReleases.length}
  />
);
const RAIL = ["NG", "UK", "US", "FR", "NL", "CA", "IE", "BE", "DE", "SE", "CH", "ZA", "IT", "ES", "AU", "AT", "GLB"];

/** Search's own country results, read from the generated index the search box serves. */
const searchCountries = (page: string) =>
  generatedDocs
    .filter((d) => d.section === "Country" && d.path.startsWith(`${page}#country=`))
    .map((d) => d.path.split("#country=")[1]);
const CERT_CODES = searchCountries("/certifications");
const CHART_CODES = searchCountries("/records/charts");

const certTitles = (container: HTMLElement) =>
  [...container.querySelectorAll(`.${certStyles.row} .${certStyles.rowTitle}`)].map(
    (t) => t.firstChild!.textContent
  );
const chartTitles = (container: HTMLElement) =>
  [...container.querySelectorAll(`.${chartStyles.row} .${chartStyles.rowTitle}`)].map((t) => t.textContent);

describe("search's country links are the ones this guards", () => {
  // 27 and 42 since 7 Oct 2026: Turkey moved from the chart screen to the
  // ledger with "Dai Dai"'s label-issued Diamond (owner's ruling).
  it("27 certifying countries go to the ledger, 42 chart-only ones to the chart screen", () => {
    expect(CERT_CODES).toHaveLength(27);
    expect(CHART_CODES).toHaveLength(42);
    expect(CERT_CODES).toContain("TR");
    expect(CHART_CODES).not.toContain("TR");
    expect(CERT_CODES).toContain("BE");
    expect(CHART_CODES).toContain("AR");
  });

  it("negative control: most chart-only countries have no chip on the phone rail", () => {
    const off = CHART_CODES.filter((c) => !RAIL.includes(c));
    expect(off.length).toBeGreaterThan(40);
    expect(off).toEqual(expect.arrayContaining(["AR", "JP", "IS", "HK"]));
  });
});

describe("the phone certs screen reads #country=", () => {
  it("/certifications#country=BE lands on Belgium's releases with a bar saying so", () => {
    at("/certifications#country=BE");
    const { container } = render(mobileCerts());
    expect(screen.getByText(/Showing certifications from/).textContent).toBe("Showing certifications from Belgium");
    const belgian = allItems.filter((r) => r.certs.some((c) => c.c === "BE")).map((r) => r.title);
    expect(belgian.length).toBeGreaterThan(0);
    expect(certTitles(container).sort()).toEqual([...belgian].sort());
    expect(certTitles(container)).not.toContain("Last Last");
  });

  it.each(CERT_CODES)("#country=%s: every row kept shows its lit plaque from there before the '+N'", (code) => {
    at(`/certifications#country=${code}`);
    const { container } = render(mobileCerts());
    const kept = allItems.filter((r) => r.certs.some((c) => c.c === code));
    const rows = [...container.querySelectorAll<HTMLElement>(`.${certStyles.row}`)];
    expect(rows).toHaveLength(Math.min(kept.length, 10));
    for (const row of rows) {
      const lit = [...row.querySelectorAll(`.${certStyles.badge}`)].filter(
        (b) => !b.className.includes(certStyles.badgeDim)
      );
      expect(lit.length).toBeGreaterThan(0);
      for (const b of lit) expect(b.textContent).toContain(COUNTRIES[code].flag);
    }
  });

  it("negative control: by weight alone Dai Dai folds its Colombian plaque behind the '+N'", () => {
    // The sort the badges had: the twelve heaviest of eighteen.
    const daiDai = allItems.find((r) => r.title === "Dai Dai")!;
    expect(daiDai.certs.length).toBeGreaterThan(15);
    at("/certifications");
    const { container } = render(mobileCerts());
    const row = [...container.querySelectorAll<HTMLElement>(`.${certStyles.row}`)].find((r) =>
      r.textContent!.includes("Dai Dai")
    );
    // Unfiltered, Dai Dai's row is in the top ten and folded; no Colombian badge shows.
    expect(row).toBeDefined();
    expect(row!.textContent).not.toContain(COUNTRIES.CO.flag);
  });

  it("Show all countries clears the focus and the address bar", async () => {
    at("/certifications#country=BE");
    const { container } = render(mobileCerts());
    await userEvent.click(screen.getByRole("button", { name: /show all countries/i }));
    expect(screen.queryByText(/Showing certifications from/)).not.toBeInTheDocument();
    expect(window.location.hash).toBe("");
    expect(certTitles(container)).toContain("Last Last");
    expect(container.querySelectorAll(`.${certStyles.badgeDim}`)).toHaveLength(0);
  });

  it("tier and country meet on one plaque, and Clear filters drops both", async () => {
    // Belgium has no Diamond: the phone's empty state, not a row of dimmed badges.
    expect(allItems.some((r) => r.certs.some((c) => c.c === "BE" && c.level === "Diamond"))).toBe(false);
    at("/certifications#country=BE");
    render(mobileCerts());
    await userEvent.click(screen.getByRole("button", { name: /^Diamond/ }));
    expect(screen.getByText("Nothing matches these filters.")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.queryByText(/Showing certifications from/)).not.toBeInTheDocument();
    expect(window.location.hash).toBe("");
  });

  it("a switch that leaves the country out drops the focus, as the desktop does", async () => {
    at("/certifications#country=NG");
    render(mobileCerts());
    expect(screen.getByText(/Showing certifications from/).textContent).toBe("Showing certifications from Nigeria");
    await userEvent.click(screen.getByRole("switch", { name: /^Nigeria$/ }));
    expect(screen.queryByText(/Showing certifications from/)).not.toBeInTheDocument();
    expect(window.location.hash).toBe("#home=0");
  });

  it("an unknown code is no focus at all", () => {
    at("/certifications#country=ZZ");
    const { container } = render(mobileCerts());
    expect(screen.queryByText(/Showing certifications from/)).not.toBeInTheDocument();
    expect(certTitles(container)).toContain("Last Last");
  });
});

describe("the phone charts screen reads #country= off the rail", () => {
  it("/records/charts#country=AR lands on Argentina's releases with a bar saying so", () => {
    at("/records/charts#country=AR");
    const { container } = render(mobileChart());
    expect(screen.getByText(/Showing chart entries in/).textContent).toBe("Showing chart entries in Argentina");
    const argentine = chartReleases.filter((r) => r.entries.some((e) => e.c === "AR")).map((r) => r.title);
    expect(chartTitles(container).sort()).toEqual([...argentine].sort());
    // No chip claims the list: not the country rail's All.
    const all = screen.getAllByRole("button", { name: "All" });
    expect(all[1]).toHaveAttribute("aria-pressed", "false");
  });

  it.each(CHART_CODES)("#country=%s narrows the list and says how", (code) => {
    at(`/records/charts#country=${code}`);
    const { container } = render(mobileChart());
    const kept = chartReleases.filter((r) => r.entries.some((e) => e.c === code));
    expect(chartTitles(container)).toHaveLength(kept.length);
    expect(kept.length).toBeLessThan(chartReleases.length);
    if (RAIL.includes(code)) {
      expect(screen.getByRole("button", { name: new RegExp(`${code}$`), pressed: true })).toBeInTheDocument();
      expect(screen.queryByText(/Showing chart entries in/)).not.toBeInTheDocument();
    } else {
      expect(screen.getByText(/Showing chart entries in/).textContent).toBe(
        `Showing chart entries in ${CHART_COUNTRIES[code].name}`
      );
    }
  });

  it("Show all countries clears it, lights All and leaves the address bar", async () => {
    at("/records/charts#country=JP");
    const { container } = render(mobileChart());
    await userEvent.click(screen.getByRole("button", { name: /show all countries/i }));
    expect(screen.queryByText(/Showing chart entries in/)).not.toBeInTheDocument();
    expect(window.location.hash).toBe("");
    expect(chartTitles(container)).toHaveLength(chartReleases.length);
    expect(screen.getAllByRole("button", { name: "All" })[1]).toHaveAttribute("aria-pressed", "true");
  });

  it("a rail chip replaces the off-rail country", async () => {
    at("/records/charts#country=AR");
    render(mobileChart());
    await userEvent.click(screen.getByRole("button", { name: /NG$/ }));
    expect(screen.queryByText(/Showing chart entries in/)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /NG$/, pressed: true })).toBeInTheDocument();
    expect(window.location.hash).toBe("");
  });
});
