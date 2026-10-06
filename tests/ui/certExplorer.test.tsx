import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CertExplorer from "../../app/components/CertExplorer";
import { albums, singles, features, COUNTRIES } from "../../app/data/certifications";
import explorerStyles from "../../app/certifications/certifications.module.css";

// The explorer keeps its filters in the history entry (lib/deepLink saveView),
// which jsdom keeps across tests: a tier left on would be restored and the next
// click on it would turn it off.
beforeEach(() => window.history.replaceState(null, ""));

describe("CertExplorer", () => {
  it("renders releases and filters them by tier", async () => {
    render(
      <CertExplorer albums={albums} singles={singles} features={features} countries={COUNTRIES} />
    );

    // Both a Diamond release and a non-Diamond release are shown initially.
    expect(screen.getByText("On the Low")).toBeInTheDocument(); // 🇫🇷 Diamond
    expect(screen.getByText("Anybody")).toBeInTheDocument(); // no Diamond

    await userEvent.click(screen.getByRole("button", { name: "Diamond" }));

    // After filtering to Diamond, the non-Diamond release drops out.
    expect(screen.getByText("On the Low")).toBeInTheDocument();
    expect(screen.queryByText("Anybody")).not.toBeInTheDocument();
  });
});

// The live page, 5 Oct 2026 (desktop, both themes): Diamond alone read
// "Showing 7 of 93 releases · 74 certifications" against the hero's 7 Diamonds,
// and Diamond + Nigeria kept Last Last, On the Low and Location with every
// badge dimmed ("· 36 certifications") — one plaque met the tier, another the
// country, and the count added up every plaque on the kept releases.
describe("CertExplorer: the tier and the country meet on one plaque", () => {
  const releases = [...albums, ...singles, ...features];
  const certs = releases.flatMap((r) => r.certs);
  const meta = (container: HTMLElement) =>
    container.querySelector(`.${explorerStyles.filterMeta}`)!.textContent!.replace(/\s+/g, " ");
  const countryChip = (code: string) =>
    screen.getAllByRole("button").find((b) => b.textContent === `${COUNTRIES[code].flag}${code}`)!;

  it("counts the plaques the filters leave lit, not every plaque on the kept releases", async () => {
    const { container } = render(
      <CertExplorer albums={albums} singles={singles} features={features} countries={COUNTRIES} />
    );
    const diamonds = certs.filter((c) => c.level === "Diamond").length;
    const diamondReleases = releases.filter((r) => r.certs.some((c) => c.level === "Diamond")).length;

    await userEvent.click(screen.getByRole("button", { name: "Diamond" }));
    expect(meta(container)).toContain(`Showing ${diamondReleases} of ${releases.length} releases · ${diamonds} certifications`);
    // The negative control: the figure the live page printed.
    const everyPlaque = releases
      .filter((r) => r.certs.some((c) => c.level === "Diamond"))
      .reduce((n, r) => n + r.certs.length, 0);
    expect(everyPlaque).not.toBe(diamonds);
    expect(meta(container)).not.toContain(`${everyPlaque} certifications`);

    await userEvent.click(screen.getByRole("button", { name: "Diamond" }));
    await userEvent.click(countryChip("FR"));
    const fr = certs.filter((c) => c.c === "FR").length;
    expect(meta(container)).toContain(`· ${fr} certifications`);
    expect(container.querySelector('[aria-live="polite"]')!.textContent).toMatch(new RegExp(`, ${fr} certifications$`));
  });

  it("shows the empty state when no single plaque is at that tier in that country", async () => {
    // A pair the old test let through: some release holds the country on one
    // plaque and the tier on another, and no plaque anywhere holds both.
    // Nigeria + Diamond today; read from the data so it outlives a new plaque.
    const tiers = ["Diamond", "Platinum", "Gold", "Silver"];
    let pair: { code: string; tier: string; title: string } | undefined;
    for (const tier of tiers)
      for (const code of Object.keys(COUNTRIES)) {
        if (pair || certs.some((c) => c.c === code && c.level === tier)) continue;
        const r = releases.find((r) => r.certs.some((c) => c.c === code) && r.certs.some((c) => c.level === tier));
        if (r) pair = { code, tier, title: r.title };
      }
    expect(pair).toBeDefined();
    const { code, tier, title } = pair!;

    const { container } = render(
      <CertExplorer albums={albums} singles={singles} features={features} countries={COUNTRIES} />
    );
    await userEvent.click(screen.getByRole("button", { name: tier }));
    await userEvent.click(countryChip(code));

    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(container.textContent).toContain(`There's no ${tier} certification from ${COUNTRIES[code].name}.`);
    expect(meta(container)).toContain(`Showing 0 of ${releases.length} releases · 0 certifications`);
  });
});
