import { render, screen, fireEvent } from "@testing-library/react";

// The mobile screen's back button is a real app-router BackLink, which throws
// outside a mounted router. Same stub the other UI tests use.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/charts",
}));

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
import styles from "../../app/components/mobileOfficialCharts.module.css";

/**
 * The phone charts screen folds each release at twelve pills behind a "+N",
 * and a filter dims the pills it does not match. The pills were sorted by
 * peak alone, so the one that matched could sit past the fold: on the live
 * page (5 Oct 2026, 390px, both themes) Nigeria kept Dai Dai with twelve
 * dimmed No. 1s and a "+58", and nothing on the row said why it was listed.
 * 16 of the 17 rail countries had at least one such row; only CH was clean.
 * The code's own comment said "Matching peaks lead". Now they do.
 */

// The screen keeps its rails in the history entry (lib/deepLink saveView),
// which jsdom keeps across tests: a chip left on would be restored.
beforeEach(() => window.history.replaceState(null, "", "/records/charts"));

const releases = [...albumCharts, ...singleCharts, ...featureCharts];
const props = {
  albums: albumCharts,
  singles: singleCharts,
  features: featureCharts,
  countries: CHART_COUNTRIES,
  entryCount: chartEntryCount,
  territoryCount: chartCountryCount,
  numberOnes,
  releaseCount: releases.length,
};
const RAIL = ["NG", "UK", "US", "FR", "NL", "CA", "IE", "BE", "DE", "SE", "CH", "ZA", "IT", "ES", "AU", "AT", "GLB"];
const FOLD = 12;

const chip = (label: string) =>
  screen.getAllByRole("button").find((b) => b.textContent === label && b.hasAttribute("aria-pressed"))!;

/** Rows whose visible (folded) pills are all dimmed. */
const rowsWithNothingLit = (container: HTMLElement) =>
  [...container.querySelectorAll(`.${styles.row}`)]
    .filter((row) =>
      [...row.querySelectorAll<HTMLElement>(`.${styles.pill}`)].every((p) => p.style.opacity !== "1")
    )
    .map((row) => row.querySelector(`.${styles.rowTitle}`)!.textContent);

describe("MobileOfficialCharts: the pill that matched the filter is never folded away", () => {
  it("negative control: sorted by peak alone, today's data hides Dai Dai's Nigerian pill past the fold", () => {
    const daiDai = singleCharts.find((r) => r.title === "Dai Dai")!;
    const byPeak = [...daiDai.entries].sort((a, b) => a.peak - b.peak);
    expect(byPeak.findIndex((e) => e.c === "NG")).toBeGreaterThanOrEqual(FOLD);
  });

  it.each(RAIL)("every row kept by %s shows a lit pill before the '+N'", (code) => {
    const { container } = render(<MobileOfficialCharts {...props} />);
    fireEvent.click(chip(`${CHART_COUNTRIES[code].flag}${code}`));
    const kept = releases.filter((r) => r.entries.some((e) => e.c === code));
    expect(container.querySelectorAll(`.${styles.row}`)).toHaveLength(kept.length);
    expect(rowsWithNothingLit(container)).toEqual([]);
  });

  it("holds with the peak rail on too: Top 10 + US", () => {
    const { container } = render(<MobileOfficialCharts {...props} />);
    fireEvent.click(chip("Top 10"));
    fireEvent.click(chip(`${CHART_COUNTRIES.US.flag}US`));
    const kept = releases.filter((r) => r.entries.some((e) => e.c === "US" && e.peak <= 10));
    expect(container.querySelectorAll(`.${styles.row}`)).toHaveLength(kept.length);
    expect(rowsWithNothingLit(container)).toEqual([]);
  });

  it("leaves the unfiltered order alone: by peak, best first", () => {
    const { container } = render(<MobileOfficialCharts {...props} />);
    const row = [...container.querySelectorAll(`.${styles.row}`)].find(
      (r) => r.querySelector(`.${styles.rowTitle}`)!.textContent === "Last Last"
    )!;
    const shown = [...row.querySelectorAll(`.${styles.pill}`)].map((p) => Number(p.textContent!.match(/#(\d+)/)![1]));
    expect(shown).toEqual([...shown].sort((a, b) => a - b));
    expect(shown).toHaveLength(FOLD);
  });
});
