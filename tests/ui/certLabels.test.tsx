import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ArtistPage from "../../app/afrobeats/[artist]/page";
import CertificationsPage from "../../app/certifications/page";
import { albums, allItems, singles } from "../../app/data/certifications";
import { artistBySlug } from "../../app/data/afrobeats";
import { featuredTitlesOf } from "../../app/lib/certUnits";
import { certTotals, LOG_WHOLE_NOTE, viewKey, viewNoun, type CertView } from "../../app/lib/certScope";
import mobileStyles from "../../app/components/mobileCerts.module.css";
import certStyles from "../../app/certifications/certifications.module.css";

/**
 * Every label tied to a number the certs switches recount says which plaques
 * it counts — Paul, 3 Oct 2026: "when someone toggle, since the number
 * changes, it should adapt, that the best ux feature". He had seen the phone
 * kicker read "CERTIFIED WORLDWIDE" above "64 international awards as lead
 * artist".
 *
 * Both layouts, because they are separate components: the phone screen
 * (MobileCerts) and Burna Boy's desktop hero (app/certifications/page.tsx —
 * eyebrow, lede and tier rail). The expected figures are counted here from the
 * data by hand — his albums + singles for "lead", NG rows dropped for "home
 * left out" — not by the helpers the page uses.
 */

const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));

const ALL: CertView = { scope: "all", credit: "all" };
const INTL: CertView = { scope: "intl", credit: "all" };
const LEAD: CertView = { scope: "all", credit: "lead" };
const BOTH: CertView = { scope: "intl", credit: "lead" };

/** The string the page shipped above every view until this change — in the
 *  phone kicker and the desktop eyebrow alike (CSS uppercases it). */
const SHIPPED_KICKER = "Certified worldwide";

const VIEWS: [hash: string, view: CertView, kicker: string][] = [
  ["", ALL, "Certified worldwide"],
  ["#home=0", INTL, "Outside Nigeria"],
  ["#feat=0", LEAD, "Worldwide · Lead credits"],
  ["#feat=0&home=0", BOTH, "Outside Nigeria · Lead credits"],
];

/** Burna Boy's releases in a view, filtered by hand. */
function burnaByHand(view: CertView) {
  const base = view.credit === "lead" ? [...albums, ...singles] : allItems;
  return view.scope === "intl"
    ? base.map((r) => ({ ...r, certs: r.certs.filter((c) => c.c !== "NG") })).filter((r) => r.certs.length > 0)
    : base;
}

const mobileH1 = () => screen.getAllByRole("heading", { level: 1 }).find((h) => /awards?/.test(h.textContent ?? ""))!;

describe("/certifications: the hero adapts to the view, phone and desktop", () => {
  it.each(VIEWS)("%s — kicker, units, lede, rail and live region", (hash, view, kicker) => {
    at(`/certifications${hash}`);
    const { container } = render(<CertificationsPage />);
    const t = certTotals(burnaByHand(view));
    const narrowed = viewKey(view) !== "all";

    // The kicker: the phone's and the desktop eyebrow say the same words.
    expect(container.querySelector(`.${mobileStyles.kicker}`)!.textContent).toBe(kicker);
    expect(container.querySelector(`.${certStyles.eyebrow}`)!.textContent).toBe(kicker);

    // The units under the big number.
    const unit = narrowed ? viewNoun(t.total, view, "award", "awards") : "awards";
    expect(mobileH1().textContent).toBe(`Burna Boy: ${t.total}${unit}${t.countries} countries`);

    // The lede: one server-built sentence per narrowed view, printed by both.
    const phoneLede = container.querySelector(`.${mobileStyles.lede}`)!.textContent!;
    const deskLede = container.querySelector(`.${certStyles.lede}`)!.textContent!;
    if (narrowed) {
      expect(deskLede).toBe(phoneLede);
      expect(deskLede.startsWith(`Burna Boy has ${t.total} ${viewNoun(t.total, view)} across ${t.countries} countries — `)).toBe(true);
      // A claim about the FULL count; it stays with the all-view.
      expect(deskLede).not.toContain("most-certified African artist");
    } else {
      expect(deskLede).toContain(`Burna Boy has ${t.total} music certifications across ${t.countries} countries`);
      expect(deskLede).toContain("making him the most-certified African artist in history.");
      expect(phoneLede).toMatch(/^Silver, Gold, Platinum and Diamond awards from the RIAA, BPI, SNEP, Music Canada and \d+ more/);
    }

    // The desktop hero rail sums to the view's own total.
    const railCounts = [...container.querySelectorAll(`.${certStyles.tierRail} .${certStyles.tierCount}`)].map((n) =>
      Number(n.textContent)
    );
    expect(railCounts).toEqual([t.tiers.Diamond, t.tiers.Platinum, t.tiers.Gold, t.tiers.Silver]);

    // The polite live region still says the count.
    const live = [...container.querySelectorAll('[aria-live="polite"]')].map((n) => n.textContent);
    expect(live).toContain(`${t.total} ${viewNoun(t.total, view)} across ${t.countries} countries`);

    // The dated log is not narrowed by the switches, and says so while one is off.
    expect(container.textContent!.includes(LOG_WHOLE_NOTE)).toBe(narrowed);
  });

  it("the guard: no narrowed view prints the kicker the page shipped, in either layout", async () => {
    for (const [hash, view] of VIEWS.slice(1)) {
      at(`/certifications${hash}`);
      const { container, unmount } = render(<CertificationsPage />);
      expect(container.textContent, viewKey(view)).not.toContain(SHIPPED_KICKER);
      unmount();
    }
  });

  it("flipping a switch changes the kicker in place, on both layouts", async () => {
    at("/certifications");
    const { container } = render(<CertificationsPage />);
    const kickers = () => [
      container.querySelector(`.${mobileStyles.kicker}`)!.textContent,
      container.querySelector(`.${certStyles.eyebrow}`)!.textContent,
    ];
    expect(kickers()).toEqual([SHIPPED_KICKER, SHIPPED_KICKER]);
    const feat = screen.getAllByRole("switch", { name: /^Featured appearances:/ })[0];
    await userEvent.click(feat);
    expect(kickers()).toEqual(["Worldwide · Lead credits", "Worldwide · Lead credits"]);
    await userEvent.click(screen.getAllByRole("switch", { name: /^Nigeria:/ })[0]);
    expect(kickers()).toEqual(["Outside Nigeria · Lead credits", "Outside Nigeria · Lead credits"]);
  });

  it("the static HTML is the all-view hero, word for word", async () => {
    const html = renderToStaticMarkup(<CertificationsPage />);
    expect(html).toContain(SHIPPED_KICKER);
    expect(html).toContain("making him the most-certified African");
    expect(html).not.toContain("Outside Nigeria");
    expect(html).not.toContain("Lead credits");
    expect(html).not.toContain(LOG_WHOLE_NOTE);
  });
});

describe("a board artist's phone hero adapts too", () => {
  const artist = async (slug: string) => render(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));

  it.each([
    ["#home=0", INTL, "Outside South Africa"],
    ["#feat=0", LEAD, "Worldwide · Lead credits"],
    ["#feat=0&home=0", BOTH, "Outside South Africa · Lead credits"],
  ] as const)("Tyla %s: the kicker names South Africa in full; units and lede follow", async (hash, view, kicker) => {
    at(`/afrobeats/tyla${hash}`);
    const { container } = await artist("tyla");
    const tyla = artistBySlug("tyla")!;
    const featured = featuredTitlesOf("tyla");
    const rel = tyla.releases
      .filter((r) => view.credit === "all" || !featured.has(r.title))
      .map((r) => ({ ...r, certs: r.certs.filter((c) => view.scope === "all" || c.c !== "ZA") }))
      .filter((r) => r.certs.length > 0);
    const t = certTotals(rel);
    expect(container.querySelector(`.${mobileStyles.kicker}`)!.textContent).toBe(kicker);
    expect(container.textContent).not.toContain(SHIPPED_KICKER);
    expect(mobileH1().textContent).toBe(`Tyla: ${t.total}${viewNoun(t.total, view, "award", "awards")}${t.countries} countries`);
    const lede = container.querySelector(`.${mobileStyles.lede}`)!.textContent!;
    expect(lede).toContain(`— ${t.total} across ${t.countries} countries, from ${rel.length} certified releases.`);
    expect(lede.startsWith(`Every ${view.scope === "intl" ? "international " : ""}Tyla plaque${view.credit === "lead" ? " on a lead credit" : ""},`)).toBe(true);
  });

  it("Tyla's all-view phone kicker is the shipped one", async () => {
    at("/afrobeats/tyla");
    const { container } = await artist("tyla");
    expect(container.querySelector(`.${mobileStyles.kicker}`)!.textContent).toBe(SHIPPED_KICKER);
  });
});
