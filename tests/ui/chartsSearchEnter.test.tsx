import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { readFileSync } from "node:fs";

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

import ChartExplorer from "../../app/components/ChartExplorer";
import { CHART_COUNTRIES, albumCharts, singleCharts, featureCharts } from "../../app/data/charts";
import { matchesQuery } from "../../app/lib/chartRegions";
import styles from "../../app/records/charts/charts.module.css";
import ledger from "../../app/components/ledgerRow.module.css";

/**
 * Question 24 (live debug 15 Oct 2026, REC-1; Paul: "yes"): in the
 * /records/charts country search, Enter picks the country when exactly one
 * matches. The field had only onChange, so "nig" + Enter left Nigeria a plain
 * chip and the list unfiltered. With two or more matches Enter picks nothing:
 * a match is still not a selection (fix 56).
 */

beforeEach(() => window.history.replaceState(null, "", "/records/charts"));

const burna = [...albumCharts, ...singleCharts, ...featureCharts];
const hits = (q: string) => Object.keys(CHART_COUNTRIES).filter((c) => matchesQuery(q, c, CHART_COUNTRIES[c].name));

function mount() {
  const { container } = render(
    <ChartExplorer albums={albumCharts} singles={singleCharts} features={featureCharts} countries={CHART_COUNTRIES} mostChartedRun />,
  );
  const panel = container.querySelector("#chart-filters") as HTMLElement;
  const field = within(panel).getByRole("searchbox", { name: "Type a country or code" });
  const pressed = () =>
    [...panel.querySelectorAll<HTMLButtonElement>("button[title][aria-pressed='true']")].map((b) => b.textContent!.match(/([A-Z]{2,4})$/)![1]);
  const rows = () => container.querySelectorAll(`.${ledger.row}`).length;
  const meta = () => panel.querySelector(`.${styles.filterMeta}`)?.textContent ?? null;
  return { field, pressed, rows, meta };
}

describe("question 24: Enter in the country search", () => {
  it("“nig” matches Nigeria alone; Enter picks it and filters the releases", async () => {
    expect(hits("nig")).toEqual(["NG"]);
    const s = mount();
    await userEvent.type(s.field, "nig");
    expect(s.pressed()).toEqual([]);
    await userEvent.keyboard("{Enter}");
    expect(s.pressed()).toEqual(["NG"]);
    const kept = burna.filter((r) => r.entries.some((e) => e.c === "NG")).length;
    expect(kept).toBeLessThan(burna.length);
    expect(s.rows()).toBe(kept);
    expect(s.meta()).toContain(`Showing ${kept} of ${burna.length} releases`);
  });

  it("“ni” matches two; Enter picks nothing", async () => {
    expect(hits("ni").length).toBeGreaterThan(1);
    const s = mount();
    await userEvent.type(s.field, "ni{Enter}");
    expect(s.pressed()).toEqual([]);
    expect(s.rows()).toBe(burna.length);
    expect(s.meta()).toBeNull();
  });

  it("“zz” matches none; Enter picks nothing", async () => {
    const s = mount();
    await userEvent.type(s.field, "zz{Enter}");
    expect(s.pressed()).toEqual([]);
    expect(s.rows()).toBe(burna.length);
  });

  it("negative control: main's field (ChartExplorer.tsx:528-537) had no key handler, so Enter could pick nothing", () => {
    const SHIPPED = `<input
                type="search"
                className={styles.searchInput}
                aria-label="Type a country or code"
                placeholder="Type a country or code"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />`;
    const field = (src: string) => src.slice(src.indexOf('type="search"'), src.indexOf("/>", src.indexOf('type="search"')));
    expect(field(SHIPPED)).not.toMatch(/onKeyDown/);
    expect(field(readFileSync("app/components/ChartExplorer.tsx", "utf8"))).toMatch(/onKeyDown/);
  });
});
