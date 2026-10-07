import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
import CertExplorer from "../../app/components/CertExplorer";
import { albums, singles, features, COUNTRIES } from "../../app/data/certifications";
import { afrobeatsSlugs, artistBySlug } from "../../app/data/afrobeats";
import { featuredTitlesOf } from "../../app/lib/certUnits";
import explorerStyles from "../../app/certifications/certifications.module.css";

/**
 * V-afrobeats-04 (debug, 5 Oct 2026). The desktop explorer's Tier row offered
 * All / Diamond / Platinum / Gold / Silver on every page. On Tiwa Savage, who
 * holds no Diamond, a click on "Diamond" read "Showing 0 of 12 releases · 0
 * certifications" and "There's no Diamond certification", while the phone's
 * rail on the same page listed only ALL 12 / PLATINUM 6 / GOLD 2 / SILVER 4.
 * Ten board artists hold no Diamond. The desktop row now offers the tiers the
 * switched view holds, as the phone's rail does.
 */

const at = (url: string) => window.history.replaceState({}, "", url);
beforeEach(() => at("/"));
afterEach(() => at("/"));

const artist = async (slug: string) => render(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));

const TIERS = ["Diamond", "Platinum", "Gold", "Silver"];
/** The desktop explorer's Tier row (inside #cert-filters). */
const tierRow = () =>
  [...document.getElementById("cert-filters")!.querySelectorAll<HTMLElement>(`.${explorerStyles.filterRow}`)].find((r) =>
    r.textContent!.startsWith("Tier")
  )!;
const desktopTiers = () => within(tierRow()).getAllByRole("button").map((b) => b.textContent!.trim());
const desktopChip = (name: string) => within(tierRow()).queryByRole("button", { name });
/** The phone's tier rail, its chips without their counts ("Platinum 6" → "Platinum"). */
const phoneTiers = () =>
  [...document.getElementById("cert-rail")!.querySelectorAll("button")].map((b) => b.textContent!.replace(/\s*\d+$/, "").trim());

// The ten the sweep named, as the live page showed them on 6 Oct 2026.
const NO_DIAMOND = [
  "asake", "black-sherif", "bnxn", "davido", "kizz-daniel", "olamide", "ruger", "seyi-vibez", "tiwa-savage", "victony",
];

describe("the desktop Tier row offers only the tiers the page holds", () => {
  it.each(NO_DIAMOND)("%s: no Diamond chip, because the data holds no Diamond", async (slug) => {
    const a = artistBySlug(slug)!;
    expect(a.releases.flatMap((r) => r.certs).some((c) => c.level === "Diamond")).toBe(false);
    at(`/afrobeats/${slug}`);
    await artist(slug);
    expect(desktopChip("Diamond")).toBeNull();
    expect(desktopTiers()[0]).toBe("All");
  });

  it("Tiwa Savage: All, Platinum, Gold, Silver — the phone rail's own list", async () => {
    at("/afrobeats/tiwa-savage");
    await artist("tiwa-savage");
    // The negative control is the live row: All, Diamond, Platinum, Gold, Silver.
    expect(desktopTiers()).toEqual(["All", "Platinum", "Gold", "Silver"]);
    expect(phoneTiers()).toEqual(["All", "Platinum", "Gold", "Silver"]);
  });

  it.each(afrobeatsSlugs)("%s: the desktop row and the phone rail offer the same tiers, in tier order", async (slug) => {
    const held = new Set(artistBySlug(slug)!.releases.flatMap((r) => r.certs.map((c) => c.level as string)));
    at(`/afrobeats/${slug}`);
    await artist(slug);
    const expected = ["All", ...TIERS.filter((t) => held.has(t))];
    expect(desktopTiers()).toEqual(expected);
    expect(phoneTiers()).toEqual(expected);
  });

  it("Burna Boy's ledger still offers all four", () => {
    render(<CertExplorer albums={albums} singles={singles} features={features} countries={COUNTRIES} totalCerts={0} />);
    expect(desktopTiers()).toEqual(["All", ...TIERS]);
  });
});

describe("the row follows the switches", () => {
  // Every Wizkid Diamond is on a featured appearance ("One Dance", "Bella") —
  // read from the data so the case outlives a new plaque. Tems was the case
  // until 7 Oct 2026, when Rule C made "Wait For U", her one Diamond, a lead
  // (the single is in her own Spotify discography).
  const wizkid = artistBySlug("wizkid")!;
  const diamondRows = wizkid.releases.filter((r) => r.certs.some((c) => c.level === "Diamond"));

  it("Wizkid's Diamonds are all featured appearances (the fixture's premise)", () => {
    expect(diamondRows.length).toBeGreaterThan(0);
    // The page's own rule for "featured" (certUnits.featuredTitlesOf).
    const featured = featuredTitlesOf("wizkid");
    expect(diamondRows.every((r) => featured.has(r.title))).toBe(true);
    // Negative control: Tems's Diamond is no longer one.
    const temsDiamond = artistBySlug("tems")!.releases.filter((r) => r.certs.some((c) => c.level === "Diamond"));
    expect(temsDiamond.some((r) => featuredTitlesOf("tems").has(r.title))).toBe(false);
  });

  it("lead credits only: the Diamond chip leaves the row in both layouts", async () => {
    at("/afrobeats/wizkid#feat=0");
    await artist("wizkid");
    expect(desktopChip("Diamond")).toBeNull();
    expect(phoneTiers()).not.toContain("Diamond");
  });

  it("a Diamond picked before the switch reads as no tier after it, not as an empty list", async () => {
    at("/afrobeats/wizkid");
    const { container } = await artist("wizkid");
    await userEvent.click(desktopChip("Diamond")!);
    expect(desktopChip("Diamond")).toHaveAttribute("aria-pressed", "true");
    const featSwitch = within(document.getElementById("cert-filters")!).getByRole("switch", { name: /^Featured appearances$/ });
    await userEvent.click(featSwitch);
    expect(desktopChip("Diamond")).toBeNull();
    expect(desktopChip("All")).toHaveAttribute("aria-pressed", "true");
    expect(container.textContent).not.toContain("There's no Diamond");
    const meta = container.querySelector(`.${explorerStyles.filterMeta}`)!.textContent!.replace(/\s+/g, " ");
    expect(meta).not.toMatch(/Showing 0 of/);
  });
});
