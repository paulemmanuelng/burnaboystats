import { render, within } from "@testing-library/react";
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

import CertificationsPage from "../../app/certifications/page";
import ArtistPage from "../../app/afrobeats/[artist]/page";
import CertExplorer from "../../app/components/CertExplorer";
import { albums, singles, features, COUNTRIES, totalAwards } from "../../app/data/certifications";
import { certTotals, homeCodeFor } from "../../app/lib/certScope";
import { featuredTitlesOf } from "../../app/lib/certUnits";
import { withIssuerProvenance } from "../../app/lib/certs";
import styles from "../../app/certifications/certifications.module.css";
import artistStyles from "../../app/afrobeats/[artist]/artist.module.css";
import { read, winning } from "../fixtures/cssRules";

/**
 * Job 3 · J3-6 (design review 8 Oct 2026): on /certifications desktop the two
 * certs switches move into the hero, under the lede and above the CTA row,
 * so the tier rail and the four stat tiles they recount are on the same screen.
 * Same component, same words ("on · every cert held" / "off · lead credits
 * only", "included" / "left out"). The filter card keeps Tier and Country;
 * the board's pages keep the pair in their card.
 */

const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));

const FEAT = /^Featured appearances$/;
const NG = /^Nigeria$/;
const before = (a: Node, b: Node) => !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);

/** Where the desktop half of /certifications draws its switches — every
 *  problem with J3-6's placement, or none. */
function placementProblems(desktop: Element): string[] {
  const out: string[] = [];
  const all = [...desktop.querySelectorAll('[role="switch"]')];
  const panel = desktop.querySelector("#cert-filters");
  const hero = desktop.querySelector(`.${styles.hero}`);
  if (all.length !== 2) out.push(`${all.length} switches on the desktop half, not one pair`);
  const inCard = panel ? panel.querySelectorAll('[role="switch"]').length : 0;
  if (inCard) out.push(`${inCard} switches in the filter card`);
  const lede = hero?.querySelector(`.${styles.lede}`);
  const buttons = hero?.querySelector(`.${styles.heroButtons}`);
  for (const s of all) {
    if (!hero?.contains(s)) out.push(`"${s.getAttribute("aria-label")}" is outside the hero`);
    else if (!lede || !buttons || !before(lede, s) || !before(s, buttons))
      out.push(`"${s.getAttribute("aria-label")}" is not between the lede and the CTA row`);
  }
  return out;
}

const desktopOf = (c: HTMLElement) => c.querySelector(`.${styles.desktopOnly}`)!;

describe("/certifications desktop: the switches sit in the hero", () => {
  it("one pair, inside the hero, after the lede and before the CTA row; the filter card holds none", () => {
    at("/certifications");
    const { container } = render(<CertificationsPage />);
    const desktop = desktopOf(container);
    expect(placementProblems(desktop)).toEqual([]);
    // The card keeps Tier and Country.
    const labels = [...desktop.querySelectorAll(`#cert-filters .${styles.filterLabel}`)].map((e) => e.textContent);
    expect(labels).toEqual(["Tier", "Country"]);
    // The same words as everywhere else.
    const hero = desktop.querySelector(`.${styles.hero}`) as HTMLElement;
    expect(within(hero).getByRole("switch", { name: FEAT })).toHaveTextContent("on · every cert held");
    expect(within(hero).getByRole("switch", { name: NG })).toHaveTextContent("included");
    // Swapped with the blocks it recounts, so a #feat=0 link never paints "on" first.
    expect(hero.querySelector(`.${styles.heroSwitches}`)!.hasAttribute("data-cert-swap")).toBe(true);
  });

  it("negative control: main's explorer call (no switchesAbove) puts the pair in the card", () => {
    // app/certifications/page.tsx on main rendered <CertExplorer … /> with the
    // switches at the head of its card: <CertViewSwitches … className={styles.switchRow} />
    // inside <div id="cert-filters" …>.
    at("/certifications");
    const { container } = render(
      <div className={styles.desktopOnly}>
        <section className={styles.hero}>
          <p className={styles.lede}>lede</p>
          <div className={styles.heroButtons} />
        </section>
        <CertExplorer
          albums={withIssuerProvenance(albums)}
          singles={withIssuerProvenance(singles)}
          features={withIssuerProvenance(features)}
          countries={COUNTRIES}
          totalCerts={totalAwards()}
          home={homeCodeFor("Nigeria")}
          homeName="Nigeria"
          featured={[...featuredTitlesOf("burna-boy")]}
        />
      </div>,
    );
    const problems = placementProblems(desktopOf(container));
    expect(problems).toContain("2 switches in the filter card");
    expect(problems.filter((p) => p.includes("outside the hero"))).toHaveLength(2);
  });

  it("the board's pages keep the pair in the card (Tyla)", async () => {
    at("/afrobeats/tyla");
    const { container } = render(await ArtistPage({ params: Promise.resolve({ artist: "tyla" }) }));
    const panel = container.querySelector("#cert-filters")!;
    expect(within(panel as HTMLElement).getAllByRole("switch")).toHaveLength(2);
    expect(container.querySelector(`.${artistStyles.hero} .${styles.heroSwitches}`)).toBeNull();
    expect(container.querySelector(`.${styles.heroSwitches}`)).toBeNull();
  });

  it("the hero's Featured switch recounts the tiles, and drops a chosen country the view leaves out", async () => {
    // A country he holds plaques in only as a guest, read from the data's own
    // groups (his albums + singles are his leads), not from the page.
    const leadCodes = new Set([...albums, ...singles].flatMap((r) => r.certs.map((c) => c.c)));
    const guestOnly = Object.keys(COUNTRIES).filter((c) => !leadCodes.has(c));
    expect(guestOnly.length).toBeGreaterThan(0);
    const code = guestOnly[0];
    const lead = certTotals([...albums, ...singles]);

    at("/certifications");
    const { container } = render(<CertificationsPage />);
    const desktop = desktopOf(container) as HTMLElement;
    const panel = () => desktop.querySelector("#cert-filters") as HTMLElement;
    const chip = () => within(panel()).queryByRole("button", { name: new RegExp(`${code}$`) });
    const firstTile = () => desktop.querySelector(`.${styles.summaryCell} .${styles.summaryValue}`)!.textContent;
    const heroSwitch = () => within(desktop.querySelector(`.${styles.hero}`) as HTMLElement).getByRole("switch", { name: FEAT });

    expect(firstTile()).toBe(String(totalAwards()));
    await userEvent.click(chip()!);
    expect(chip()).toHaveAttribute("aria-pressed", "true");

    await userEvent.click(heroSwitch());
    expect(window.location.hash).toBe("#feat=0");
    expect(heroSwitch()).toHaveAttribute("aria-checked", "false");
    expect(firstTile()).toBe(String(lead.total));
    expect(chip()).toBeNull();

    // Back on: the chip returns unchosen — the selection was cleared, not hidden.
    await userEvent.click(heroSwitch());
    expect(firstTile()).toBe(String(totalAwards()));
    expect(chip()).toHaveAttribute("aria-pressed", "false");
    expect(new URLSearchParams(window.location.hash.slice(1)).get("country")).toBeNull();
  });

  it("the switches are spaced under the lede (CSS)", () => {
    const css = read("app/certifications/certifications.module.css");
    expect(winning(css, ".heroSwitches", "margin-top", (m) => m === null)).toBe("18px");
  });
});
