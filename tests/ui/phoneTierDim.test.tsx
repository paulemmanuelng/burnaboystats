import { render, within } from "@testing-library/react";
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
import MobileCerts from "../../app/components/MobileCerts";
import phone from "../../app/components/mobileCerts.module.css";
import desk from "../../app/certifications/certifications.module.css";
import { albums, singles, features, allItems, COUNTRIES, totalAwards, countryCount } from "../../app/data/certifications";
import { afrobeatsSlugs, artistBySlug } from "../../app/data/afrobeats";

/**
 * V-afrobeats-09 (debug, 5 Oct 2026). With SILVER picked on the phone's tier
 * rail, /afrobeats/wizkid listed "Come Closer" with all seven of its plaques at
 * full strength, one of them the Silver that kept the row — read live at 390
 * on 6 Oct: 28 Platinum and Gold badges lit beside 12 Silvers, none dimmed.
 * The desktop explorer on the same page dims every plaque the chosen tier is
 * not about. The phone now does the same, and puts the matching plaques first
 * so a row that folds at twelve never hides the one that kept it.
 */

const at = (url: string) => window.history.replaceState({}, "", url);
beforeEach(() => at("/"));
afterEach(() => at("/"));

const TIERS = ["Diamond", "Platinum", "Gold", "Silver"];
const isDim = (b: Element) => b.className.includes(phone.badgeDim);

/** The phone list's rows: the release's title and its badges, in order. */
const phoneRows = () =>
  [...document.querySelectorAll<HTMLElement>(`.${phone.row}`)].map((row) => ({
    title: row.querySelector(`.${phone.rowTitle}`)!.firstChild!.textContent!.trim(),
    badges: [...row.querySelectorAll(`.${phone.badge}`)],
  }));
/** The desktop ledger's lit badge words, by title and plaque count. */
const desktopLit = () => {
  const out = new Map<string, string[]>();
  for (const row of document.querySelectorAll<HTMLElement>(`.${desk.certRow}`)) {
    const title = row.querySelector(`.${desk.certTitle}, .${desk.certTitleLink}`)!.textContent!.trim();
    const badges = [...row.querySelectorAll(`.${desk.cBadge}`)];
    out.set(`${title}|${badges.length}`, badges.filter((b) => !b.className.includes(desk.badgeDim)).map((b) => b.textContent!));
  }
  return out;
};
const tierRow = () =>
  [...document.getElementById("cert-filters")!.querySelectorAll<HTMLElement>(`.${desk.filterRow}`)].find((r) =>
    r.textContent!.startsWith("Tier")
  )!;
const pick = async (tier: string) => {
  await userEvent.click(within(document.getElementById("cert-rail")!).getByRole("button", { name: new RegExp(`^${tier} \\d+$`) }));
  await userEvent.click(within(tierRow()).getByRole("button", { name: tier }));
};

/** With `tier` picked on both layouts: every phone row lights exactly the
 *  plaques the desktop lights for that release, and they lead the row. */
function expectParity(tier: string) {
  const desktop = desktopLit();
  const rows = phoneRows();
  expect(rows.length).toBeGreaterThan(0);
  for (const { title, badges } of rows) {
    const total = Number(
      [...document.querySelectorAll<HTMLElement>(`.${phone.row}`)]
        .find((r) => r.querySelector(`.${phone.rowTitle}`)!.firstChild!.textContent!.trim() === title)!
        .querySelector(`.${phone.rowCount}`)!.textContent!.match(/\d+/)![0]
    );
    const want = desktop.get(`${title}|${total}`);
    expect(want, `${title} on the desktop ledger`).toBeDefined();
    const lit = badges.filter((b) => !isDim(b));
    // A fold shows twelve; the lit ones are among them because they lead.
    expect(lit.length, `${title}: lit plaques with ${tier} picked`).toBe(Math.min(want!.length, badges.length));
    expect(lit.length).toBeGreaterThan(0);
    for (const b of lit) expect(want).toContain(b.textContent);
    const firstDim = badges.findIndex(isDim);
    if (firstDim >= 0) expect(badges.slice(firstDim).every(isDim), `${title}: a lit plaque after a dimmed one`).toBe(true);
  }
}

describe("the phone tier rail dims the plaques it is not about, as the desktop does", () => {
  it("Wizkid, SILVER: 'Come Closer' lights its one Silver and dims the other six (the finding's row)", async () => {
    at("/afrobeats/wizkid");
    await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) }).then(render);
    await pick("Silver");
    const row = phoneRows().find((r) => r.title === "Come Closer")!;
    expect(row).toBeDefined();
    const want = artistBySlug("wizkid")!.releases.find((r) => r.title === "Come Closer")!.certs;
    expect(row.badges).toHaveLength(want.length);
    expect(row.badges.filter((b) => !isDim(b))).toHaveLength(want.filter((c) => c.level === "Silver").length);
    expect(row.badges.filter(isDim)).toHaveLength(want.filter((c) => c.level !== "Silver").length);
    expect(isDim(row.badges[0])).toBe(false);
  });

  it.each(afrobeatsSlugs)("%s: every held tier lights the same plaques on both layouts", async (slug) => {
    at(`/afrobeats/${slug}`);
    await ArtistPage({ params: Promise.resolve({ artist: slug }) }).then(render);
    // No tier picked: nothing is dimmed.
    expect(phoneRows().flatMap((r) => r.badges).some(isDim)).toBe(false);
    const held = new Set(artistBySlug(slug)!.releases.flatMap((r) => r.certs.map((c) => c.level as string)));
    for (const tier of TIERS.filter((t) => held.has(t))) {
      await pick(tier);
      expectParity(tier);
    }
  });

  it("Burna Boy's /certifications: every tier lights the same plaques on both layouts", async () => {
    render(
      <>
        <CertExplorer albums={albums} singles={singles} features={features} countries={COUNTRIES} totalCerts={totalAwards()} home="NG" homeName="Nigeria" />
        <MobileCerts releases={allItems} albums={albums} history={[]} countries={COUNTRIES} total={totalAwards()} countryCount={countryCount} home="NG" homeName="Nigeria" />
      </>
    );
    for (const tier of TIERS) {
      await pick(tier);
      expectParity(tier);
    }
  });
});
