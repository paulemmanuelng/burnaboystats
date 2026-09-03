import { render, screen } from "@testing-library/react";
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

import CertExplorer from "../../app/components/CertExplorer";
import AwardExplorer from "../../app/components/AwardExplorer";
import ChartExplorer from "../../app/components/ChartExplorer";
import MobileOfficialCharts from "../../app/components/MobileOfficialCharts";
import { albums, singles, features, COUNTRIES } from "../../app/data/certifications";
import {
  albumCharts,
  singleCharts,
  featureCharts,
  CHART_COUNTRIES,
  chartEntryCount,
  chartCountryCount,
  numberOnes,
} from "../../app/data/charts";

/**
 * Accessibility invariants that a browser will never complain about.
 *
 * Every one of these looked right in the markup and right on screen. The
 * failure only exists for a reader who cannot see it, so nothing surfaces it
 * except a test that states the rule.
 */

/**
 * A live region inside a `display: none` element is announced by nothing.
 *
 * All three explorers parked their filter status inside `.filterToggle`, the
 * mobile collapse button — which the redesign left at `display: none` at every
 * width these components are actually shown at (each sits inside the page's
 * `.desktopOnly` wrapper, hidden under 900px, and the toggle only leaves
 * `display: none` under 640px). So the status was in the DOM, correct, and
 * silent. jsdom applies no CSS, so the rule is stated structurally instead: the
 * status is never a descendant of the toggle button.
 */
describe("filter status is announced", () => {
  const liveRegion = (container: HTMLElement) =>
    container.querySelector<HTMLElement>('[aria-live="polite"]');

  it("CertExplorer counts releases and certifications outside the toggle", async () => {
    const { container } = render(
      <CertExplorer
        albums={albums}
        singles={singles}
        features={features}
        countries={COUNTRIES}
        totalCerts={0}
      />
    );

    const status = liveRegion(container);
    expect(status).not.toBeNull();
    expect(status!.closest("button")).toBeNull();

    const before = status!.textContent;
    await userEvent.click(screen.getByRole("button", { name: "Diamond" }));
    expect(status!.textContent).not.toBe(before);
    expect(status!.textContent).toMatch(/releases? shown, \d+ certifications?/);
  });

  it("AwardExplorer counts nominations outside the toggle", async () => {
    const { container } = render(<AwardExplorer />);

    const status = liveRegion(container);
    expect(status).not.toBeNull();
    expect(status!.closest("button")).toBeNull();

    const before = status!.textContent;
    await userEvent.click(screen.getByRole("button", { name: "Won" }));
    expect(status!.textContent).not.toBe(before);
    expect(status!.textContent).toMatch(/nominations? shown/);
  });

  it("ChartExplorer has a status at all, and it counts releases", async () => {
    // This one had none — the other two at least had a region to move.
    const { container } = render(
      <ChartExplorer
        albums={albumCharts}
        singles={singleCharts}
        features={featureCharts}
        countries={CHART_COUNTRIES}
      />
    );

    const status = liveRegion(container);
    expect(status).not.toBeNull();
    expect(status!.closest("button")).toBeNull();

    const before = status!.textContent;
    await userEvent.click(screen.getByRole("button", { name: "No. 1" }));
    expect(status!.textContent).not.toBe(before);
    expect(status!.textContent).toMatch(/releases? shown/);
  });
});

/**
 * The mobile chart pills are a flag emoji and "#1". The country lived only in
 * a `title`, which a touch device never shows — on the one layout this screen
 * exists for, the pill had no name at all.
 */
describe("mobile chart peak pills name their country", () => {
  it("puts the country in text, not just the tooltip", () => {
    const { container } = render(
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

    const pills = [...container.querySelectorAll<HTMLElement>('[title*="peak #"]')];
    expect(pills.length).toBeGreaterThan(0);

    for (const pill of pills) {
      // The tooltip is "Nigeria — peak #1"; the pill's own text has to carry
      // that name, and carry it clipped so nothing on screen moves.
      const name = pill.title.split(" — ")[0];
      expect(pill.querySelector(".visuallyHidden")).not.toBeNull();
      expect(pill.textContent, `pill "${pill.title}" announces no country`).toContain(name);
    }
  });
});

/**
 * `opacity: 0` hides a control from eyes only. The back-to-top button stayed in
 * the tab order while invisible, so tabbing from the top of a long page stopped
 * on a control nobody could see. `visibility: hidden` removes it from the tab
 * order and still transitions, which `display: none` would not.
 *
 * Asserted against the stylesheet because jsdom resolves no CSS module.
 */
describe("BackToTop is not focusable while invisible", () => {
  // Comments stripped first: the rule explains itself by quoting the very
  // declarations asserted below, and a comment would satisfy every match.
  const css = readFileSync("app/components/BackToTop.module.css", "utf8").replace(
    /\/\*[\s\S]*?\*\//g,
    ""
  );
  const rule = (selector: string) =>
    css.match(new RegExp(`\\${selector}\\s*\\{([^}]*)\\}`))![1];

  it("hides the resting state from the tab order", () => {
    expect(rule(".btn")).toMatch(/visibility:\s*hidden/);
  });

  it("puts the shown state back", () => {
    expect(rule(".show")).toMatch(/visibility:\s*visible/);
  });

  it("keeps the fade — visibility is transitioned, not switched", () => {
    expect(rule(".btn")).toMatch(/transition:[^;]*visibility/);
  });
});
