import { render, screen, within, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

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
import CertExplorer from "../../app/components/CertExplorer";
import MobileCerts from "../../app/components/MobileCerts";
import {
  albums, allItems, COUNTRIES, features, singles, totalAwards, countryCount as burnaCountries,
} from "../../app/data/certifications";
import { certTotals, certsInScope, creditInScope } from "../../app/lib/certScope";
import { artistBySlug, featuredTitlesOf } from "../../app/lib/certUnits";
import artistStyles from "../../app/afrobeats/[artist]/artist.module.css";
import mobileStyles from "../../app/components/mobileCerts.module.css";
import explorerStyles from "../../app/certifications/certifications.module.css";

/**
 * The certs views' two switches — /compare's own toggle style (Paul, 3 Oct
 * 2026: "use the compare togglr style"): the home-country switch, named in
 * full ("South Africa", "Nigeria"), "included" / "left out"; and "Featured
 * appearances", "on · every plaque held" / "off · lead credits only" — on the
 * real pages and in both layouts. The phone screen (MobileCerts) and the
 * desktop explorer (CertExplorer) are separate components, and both sit in
 * every document. Either layout's switch drives both, because the state is the
 * address bar's #home=0 and #feat=0 (/compare's own feat param).
 *
 * Tyla's figures, re-read from the data after #402 added "Chanel" ZA Gold: 75
 * certifications across 24 countries, 65 international across 23 (her ten
 * South African plaques out), 74 as lead artist, 64 with both switches off.
 * Burna Boy's Lead figures come from the data's own groups, read here by a
 * separate path (his albums + singles), not by the page.
 */

const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));

const artist = async (slug: string) => render(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));

/** The desktop explorer's filter panel; the phone's switches sit outside it. */
const panel = () => document.getElementById("cert-filters")!;
// Stable names since the debug pass of 3 Oct 2026 (c4): the state is
// aria-checked plus a description, never part of the name.
const FEAT = /^Featured appearances$/;
const homeName = (country: string) => new RegExp(`^${country}$`);
/** Every copy of a switch on the page — one per layout where it is offered. */
const switches = (name: RegExp) => screen.queryAllByRole("switch", { name });
const desktop = (name: RegExp) => switches(name).find((b) => panel()?.contains(b))!;
const mobile = (name: RegExp) => switches(name).find((b) => !panel()?.contains(b))!;
const press = (b: HTMLElement) => userEvent.click(b);
/** The switch rows, desktop and phone. */
const rows = () => screen.queryAllByRole("group", { name: "Which plaques count" });
const mobileH1 = () => screen.getAllByRole("heading", { level: 1 }).find((h) => /awards?/i.test(h.textContent ?? ""))!;
const hashParams = () => Object.fromEntries(new URLSearchParams(window.location.hash.replace(/^#/, "")));
const ZA = homeName("South Africa");
const NG = homeName("Nigeria");

describe("Tyla's page: both switches in both layouts", () => {
  it("renders compare's two switches per layout, both ON by default, and no All of their own", async () => {
    at("/afrobeats/tyla");
    await artist("tyla");
    expect(switches(ZA)).toHaveLength(2);
    expect(switches(FEAT)).toHaveLength(2);
    for (const b of [desktop(ZA), mobile(ZA), desktop(FEAT), mobile(FEAT)])
      expect(b).toHaveAttribute("aria-checked", "true");
    // Owner, 3 Oct 2026: "this should only have internal and lead, since the
    // button below already has ALL" — each row holds exactly the two switches,
    // in /compare's order (Paul, 3 Oct 2026: "same"): compare's features
    // switch first, in compare's words, then the home country, named in full.
    // /compare's own row is read below, so the two cannot drift apart.
    expect(rows()).toHaveLength(2);
    for (const r of rows()) {
      expect(within(r).queryAllByRole("button")).toHaveLength(0);
      expect(within(r).getAllByRole("switch").map((b) => [b.getAttribute("aria-label"), b.textContent])).toEqual([
        ["Featured appearances", "on · every plaque held"],
        ["South Africa", "included"],
      ]);
      expect(r.textContent).toMatch(/^Featured appearances/);
      expect(r.textContent).toContain("Featureson · every plaque held");
      expect(r.textContent).not.toMatch(/\bSA\b|\bZA\b/);
    }
    expect(mobileH1().textContent).toMatch(/Tyla, certifications: 75Awards24 countries/);
  });

  it("keeps /compare's own order: its controls row names Featured appearances before Nigeria", () => {
    // Read from compare's markup, not restated: if compare's row is ever
    // reordered, this fails and the two are put back in step.
    const compare = readFileSync("app/compare/page.tsx", "utf8");
    const row = compare.slice(compare.indexOf("className={styles.controls}"));
    const feat = row.indexOf(">Featured appearances<");
    const home = row.indexOf(">Nigeria<");
    expect(feat).toBeGreaterThan(-1);
    expect(home).toBeGreaterThan(-1);
    expect(feat).toBeLessThan(home);
  });

  it("the switches speak their state as words once off", async () => {
    at("/afrobeats/tyla#home=0&feat=0");
    await artist("tyla");
    for (const r of rows())
      expect(within(r).getAllByRole("switch").map((b) => [b.textContent, b.getAttribute("aria-checked")])).toEqual([
        ["off · lead credits only", "false"],
        ["left out", "false"],
      ]);
  });

  it("is keyboard operable: Tab to the switch, Space flips it", async () => {
    at("/afrobeats/tyla");
    await artist("tyla");
    const b = mobile(ZA);
    b.focus();
    expect(b).toHaveFocus();
    await userEvent.keyboard(" ");
    expect(window.location.hash).toBe("#home=0");
    expect(mobile(ZA)).toHaveAttribute("aria-checked", "false");
    await userEvent.keyboard("{Enter}");
    expect(window.location.hash).toBe("");
  });

  it("the desktop South Africa switch recounts both layouts, drops the ZA chip, and writes #home=0", async () => {
    at("/afrobeats/tyla");
    const { container } = await artist("tyla");
    expect(screen.getByRole("button", { name: /ZA$/ })).toBeInTheDocument();
    expect(container.textContent).toContain("certifications worldwide");

    await press(desktop(ZA));

    expect(window.location.hash).toBe("#home=0");
    expect(desktop(ZA)).toHaveAttribute("aria-checked", "false");
    // The count phrase, desktop explorer.
    expect(container.textContent).toContain("65 international certifications across 23 countries");
    // The headline cards, swapped on the server-rendered half.
    expect(container.textContent).not.toContain("certifications worldwide");
    expect(screen.queryByRole("button", { name: /ZA$/ })).not.toBeInTheDocument();
    // The phone screen follows the same switch.
    expect(mobileH1().textContent).toMatch(/Tyla, international certifications: 65Awards23 countries/);
    expect(mobile(ZA)).toHaveAttribute("aria-checked", "false");

    // Pressed again, it is back on: every plaque back.
    await press(desktop(ZA));
    expect(desktop(ZA)).toHaveAttribute("aria-checked", "true");
    expect(window.location.hash).toBe("");
    expect(mobileH1().textContent).toMatch(/Tyla, certifications: 75Awards24 countries/);
    expect(container.textContent).toContain("certifications worldwide");
  });

  it("the phone switch recounts the hero, the tier rail and the live region", async () => {
    at("/afrobeats/tyla");
    const { container } = await artist("tyla");
    await press(mobile(ZA));
    expect(window.location.hash).toBe("#home=0");
    expect(mobileH1().textContent).toMatch(/Tyla, international certifications: 65Awards23 countries/);
    expect(screen.getByRole("button", { name: "All 65" })).toBeInTheDocument();
    const live = [...container.querySelectorAll('[aria-live="polite"]')].map((n) => n.textContent);
    expect(live).toContain("65 international certifications across 23 countries");
  });

  it("Lead and International compose: 64 international plaques as lead artist in 23 countries", async () => {
    at("/afrobeats/tyla");
    const { container } = await artist("tyla");
    await press(mobile(FEAT));
    expect(hashParams()).toEqual({ feat: "0" });
    expect(mobileH1().textContent).toMatch(/Tyla, certifications as lead artist: 74Awards24 countries/);
    expect(container.textContent).toContain("74 certifications as lead artist across 24 countries");
    await press(desktop(ZA));
    expect(hashParams()).toEqual({ feat: "0", home: "0" });
    expect(mobileH1().textContent).toMatch(/Tyla, international certifications as lead artist: 64Awards23 countries/);
    expect(container.textContent).toContain("64 international certifications as lead artist across 23 countries");
    // Turning one switch off leaves the other standing.
    await press(mobile(FEAT));
    expect(hashParams()).toEqual({ home: "0" });
    expect(container.textContent).toContain("65 international certifications across 23 countries");
  });

  it("a selected home-country chip is cleared by the switch", async () => {
    at("/afrobeats/tyla");
    const { container } = await artist("tyla");
    await userEvent.click(screen.getByRole("button", { name: /ZA$/ }));
    await press(desktop(ZA));
    // Showing every international plaque, not "no certification from South Africa".
    expect(container.textContent).toContain("65 international certifications across 23 countries");
    expect(window.location.hash).toBe("#home=0");
  });

  it("a shared #home=0&feat=0 link opens that view", async () => {
    at("/afrobeats/tyla#home=0&feat=0");
    const { container } = await artist("tyla");
    expect(mobileH1().textContent).toMatch(/Tyla, international certifications as lead artist: 64Awards23 countries/);
    expect(container.textContent).toContain("64 international certifications as lead artist across 23 countries");
  });

  it("a ?home=0 link is read too, and switching back on takes it out of the address bar", async () => {
    at("/afrobeats/tyla?home=0");
    await artist("tyla");
    expect(mobileH1().textContent).toMatch(/Tyla, international certifications: 65Awards23 countries/);
    expect(desktop(ZA)).toHaveAttribute("aria-checked", "false");
    await press(desktop(ZA));
    expect(window.location.search + window.location.hash).toBe("");
  });

  it("a hand-edited fragment is followed", async () => {
    at("/afrobeats/tyla");
    await artist("tyla");
    await act(async () => {
      window.location.hash = "#feat=0";
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
    expect(mobileH1().textContent).toMatch(/Tyla, certifications as lead artist: 74Awards24 countries/);
  });

  it("the static HTML is the All view — nothing a crawler reads changes", async () => {
    const html = renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "tyla" }) }));
    expect(html).toContain("certifications worldwide");
    expect(html).not.toContain("international certifications across");
    expect(html).not.toContain("as lead artist across");
    expect(html).not.toContain("international awards");
  });
});

describe("Burna Boy's /certifications", () => {
  const featured = featuredTitlesOf("burna-boy");
  const lead = certTotals([...albums, ...singles]);

  it("both layouts carry both switches; Nigeria left out drops the NG plaques", async () => {
    at("/certifications");
    const { container } = render(<CertificationsPage />);
    expect(switches(NG)).toHaveLength(2);
    expect(switches(FEAT)).toHaveLength(2);
    for (const r of rows()) expect(r.textContent).toMatch(/^Featured appearances.*Nigeria/);
    const intl = certTotals(certsInScope(allItems, "NG", "intl"));
    expect(mobileH1().textContent).toContain(`Burna Boy, certifications: ${totalAwards()}Awards${burnaCountries} countries`);

    await press(desktop(NG));
    expect(mobileH1().textContent).toContain(`Burna Boy, international certifications: ${intl.total}Awards${intl.countries} countries`);
    expect(container.textContent).toContain(`${intl.total} international certifications across ${intl.countries} countries`);
    // The hero's summary strip swaps with it: a short label, the narrowing in
    // its note (debug pass, 3 Oct 2026 — the long label wrapped at 1440).
    const first = () => container.querySelector(`.${explorerStyles.summaryCell}`)!;
    expect(first().querySelector(`.${explorerStyles.summaryValue}`)!.textContent).toBe(String(intl.total));
    expect(first().querySelector(`.${explorerStyles.summaryLabel}`)!.textContent).toBe("Certifications");
    expect(first().querySelector(`.${explorerStyles.summaryNote}`)!.textContent).toBe("Outside Nigeria");
    expect(screen.queryByRole("button", { name: /NG$/ })).not.toBeInTheDocument();
  });

  it("Featured appearances off hides his guest spots — Location goes, Dai Dai and For My Hand stay", async () => {
    at("/certifications");
    const { container } = render(<CertificationsPage />);
    expect(screen.getAllByRole("heading", { name: "Featured Appearances" }).length).toBeGreaterThan(0);
    // "Location" is also named in the dated log below the list, so the test is
    // that its row goes, not that the word does.
    const rowsBefore = screen.getAllByText("Location").length;
    const daiDaiBefore = screen.getAllByText("Dai Dai").length;
    const handBefore = screen.getAllByText("For My Hand").length;

    await press(desktop(FEAT));

    expect(window.location.hash).toBe("#feat=0");
    expect(lead.total).toBe(totalAwards() - features.reduce((n, r) => n + r.certs.length, 0));
    expect(container.textContent).toContain(`${lead.total} certifications as lead artist across ${lead.countries} countries`);
    expect(mobileH1().textContent).toContain(`Burna Boy, certifications as lead artist: ${lead.total}Awards${lead.countries} countries`);
    expect(screen.queryByRole("heading", { name: "Featured Appearances" })).not.toBeInTheDocument();
    expect(screen.queryAllByText("Location").length).toBeLessThan(rowsBefore);
    expect(screen.getAllByText("Dai Dai")).toHaveLength(daiDaiBefore);
    expect(screen.getAllByText("For My Hand")).toHaveLength(handBefore);
    // The summary strip, counted from the same releases.
    const first = container.querySelector(`.${explorerStyles.summaryCell}`)!;
    expect(first.querySelector(`.${explorerStyles.summaryValue}`)!.textContent).toBe(String(lead.total));
    expect(first.querySelector(`.${explorerStyles.summaryNote}`)!.textContent).toBe("Lead credits");
    expect(container.textContent).toContain("Albums and singles");
    // Its "New in <year>" cell too — his own releases only, labelled so.
    expect(container.textContent).toContain("International awards, lead credits");
  });

  it("the desktop hero rail recounts with the switches, each tier a share of the view's own total", async () => {
    // Paul, 3 Oct 2026: "since the number changes, it should adapt". The rail
    // was the all-view always until then. Counted here from the data's own
    // groups (his albums + singles), not by the page's helpers.
    at("/certifications");
    const { container } = render(<CertificationsPage />);
    const rail = () =>
      [...container.querySelectorAll(`.${explorerStyles.tierRail} .${explorerStyles.tierRow}`)].map((r) => r.textContent);
    const railOf = (t: ReturnType<typeof certTotals>) =>
      (["Diamond", "Platinum", "Gold", "Silver"] as const).map(
        (n) => `${n}${t.tiers[n]}${t.total ? Math.round((t.tiers[n] / t.total) * 100) : 0}%`
      );
    expect(rail()).toEqual(railOf(certTotals(allItems)));
    await press(desktop(FEAT));
    expect(rail()).toEqual(railOf(lead));
    await press(desktop(NG));
    const both = certTotals(
      [...albums, ...singles].map((r) => ({ ...r, certs: r.certs.filter((c) => c.c !== "NG") })).filter((r) => r.certs.length)
    );
    expect(rail()).toEqual(railOf(both));
    expect(rail()).not.toEqual(railOf(certTotals(allItems)));
  });

  it("a country he is certified in only as a guest leaves the chip row, and its selection resets", async () => {
    const leadCodes = new Set([...albums, ...singles].flatMap((r) => r.certs.map((c) => c.c)));
    const guestOnly = Object.keys(COUNTRIES).filter((c) => !leadCodes.has(c));
    expect(guestOnly.length).toBeGreaterThan(0);
    at("/certifications");
    const { container } = render(<CertificationsPage />);
    const code = guestOnly[0];
    await userEvent.click(screen.getByRole("button", { name: new RegExp(`${code}$`) }));
    await press(desktop(FEAT));
    expect(screen.queryByRole("button", { name: new RegExp(`${code}$`) })).not.toBeInTheDocument();
    // Every lead plaque, not "no certification from <that country>".
    expect(container.textContent).toContain(`${lead.total} certifications as lead artist across ${lead.countries} countries`);
    expect(creditInScope(allItems, featured, "lead").length).toBe(albums.length + singles.length);
  });
});

describe("Wizkid: his lead with a guest stays with features off", () => {
  it("\"Essence\" (ft. Tems) is kept", async () => {
    at("/afrobeats/wizkid#feat=0");
    await artist("wizkid");
    expect(screen.getAllByText("Essence").length).toBeGreaterThan(0);
    expect(screen.queryByRole("heading", { name: "Featured Appearances" })).not.toBeInTheDocument();
  });
});

describe("a switch only where it changes something", () => {
  it.each([
    ["black-sherif", "no plaque in Ghana"],
    ["seyi-vibez", "every plaque in Nigeria"],
  ])("%s gets no home-country switch (%s), but does get Featured appearances", async (slug) => {
    at(`/afrobeats/${slug}`);
    await artist(slug);
    expect(switches(/^(Ghana|Nigeria):/)).toHaveLength(0);
    expect(switches(FEAT)).toHaveLength(2);
  });

  it("no featured appearances, no features switch — in either layout", () => {
    render(
      <>
        <MobileCerts
          releases={[...albums, ...singles]}
          albums={albums}
          history={[]}
          countries={COUNTRIES}
          total={certTotals([...albums, ...singles]).total}
          countryCount={certTotals([...albums, ...singles]).countries}
          home="NG"
          homeName="Nigeria"
          featured={[]}
        />
        <CertExplorer albums={albums} singles={singles} features={[]} countries={COUNTRIES} totalCerts={0} home="NG" homeName="Nigeria" />
      </>
    );
    expect(switches(FEAT)).toHaveLength(0);
    expect(switches(NG)).toHaveLength(2);
  });

  it("an artist offered neither switch gets no row at all", () => {
    render(
      <>
        <MobileCerts
          releases={[...albums, ...singles]}
          albums={albums}
          history={[]}
          countries={COUNTRIES}
          total={certTotals([...albums, ...singles]).total}
          countryCount={certTotals([...albums, ...singles]).countries}
          featured={[]}
        />
        <CertExplorer albums={albums} singles={singles} features={[]} countries={COUNTRIES} totalCerts={0} />
      </>
    );
    expect(rows()).toHaveLength(0);
    expect(screen.queryAllByRole("switch")).toHaveLength(0);
  });

  it("a view that holds nothing reads 0, not NaN (BNXN, International + Lead)", async () => {
    at("/afrobeats/bnxn#home=0&feat=0");
    const { container } = await artist("bnxn");
    expect(mobileH1().textContent).toMatch(/BNXN, international certifications as lead artist: 0Awards0 countries/);
    expect(container.textContent).not.toContain("NaN");
    expect(container.textContent).toContain("There's no international certification as lead artist");
  });
});

describe("an empty view's Clear turns the switches back on", () => {
  // BNXN: every international plaque is a guest spot, so both switches off
  // leave nothing. Clear used to reset the tier and the focus only — a dead
  // button (review, 3 Oct 2026).
  const bnxn = artistBySlug("bnxn")!;
  const all = bnxn.releases.reduce((n, r) => n + r.certs.length, 0);

  it("the phone's Clear filters", async () => {
    at("/afrobeats/bnxn#home=0&feat=0");
    await artist("bnxn");
    expect(mobileH1().textContent).toMatch(/international certifications as lead artist: 0Awards/);
    // The phone's empty state is its own role="status" block (MobileCerts).
    const phoneClear = screen.getAllByRole("button", { name: "Clear filters" }).find((b) => b.closest('[role="status"]'))!;
    await userEvent.click(phoneClear);
    expect(mobileH1().textContent).toContain(`${all}Awards`);
    expect(window.location.hash).toBe("");
    for (const b of screen.getAllByRole("switch")) expect(b).toHaveAttribute("aria-checked", "true");
  });

  it("the desktop's Clear filters, and its Drop names the narrowest switch", async () => {
    at("/afrobeats/bnxn#home=0&feat=0");
    await artist("bnxn");
    expect(screen.getByRole("button", { name: "Drop “lead credits only”" })).toBeInTheDocument();
    const clears = screen.getAllByRole("button", { name: "Clear filters" });
    await userEvent.click(clears.find((b) => !b.closest('[role="status"]'))!);
    expect(window.location.hash).toBe("");
    expect(mobileH1().textContent).toContain(`${all}Awards`);
  });
});

describe("a flip never moves the switch under the finger", () => {
  afterEach(() => vi.restoreAllMocks());

  it("scrolls by however far the content above moved it, instantly, with anchoring held off", async () => {
    // Olamide's phone page, Nigeria left out: the hero and lede above the row
    // shrink, and the switch rose 148px where the browser has no scroll
    // anchoring (review, 3 Oct 2026). Stand that in: the switch's top is 347
    // before and 199 after.
    at("/afrobeats/olamide");
    await artist("olamide");
    const b = mobile(NG);
    vi.spyOn(b, "getBoundingClientRect").mockImplementation(
      () => ({ top: window.location.hash.includes("home=0") ? 199 : 347 }) as DOMRect
    );
    const scrollBy = vi.spyOn(window, "scrollBy").mockImplementation(() => {});
    let anchorDuring = "";
    scrollBy.mockImplementation(() => {
      anchorDuring = document.documentElement.style.overflowAnchor;
    });
    await press(b);
    expect(b).toHaveAttribute("aria-checked", "false");
    expect(scrollBy).toHaveBeenCalledWith({ top: -148, behavior: "instant" });
    expect(anchorDuring).toBe("none");
    await vi.waitFor(() => expect(document.documentElement.style.overflowAnchor).toBe(""));
  });

  it("two flips inside one frame still hand anchoring back", async () => {
    at("/afrobeats/olamide");
    await artist("olamide");
    await press(mobile(NG));
    await press(mobile(FEAT));
    await vi.waitFor(() => expect(document.documentElement.style.overflowAnchor).toBe(""));
  });

  it("does not scroll when nothing above moved", async () => {
    at("/afrobeats/olamide");
    await artist("olamide");
    const b = desktop(FEAT);
    vi.spyOn(b, "getBoundingClientRect").mockImplementation(() => ({ top: 500 }) as DOMRect);
    const scrollBy = vi.spyOn(window, "scrollBy").mockImplementation(() => {});
    await press(b);
    expect(b).toHaveAttribute("aria-checked", "false");
    expect(scrollBy).not.toHaveBeenCalled();
  });
});

// ── Merged with #401 (issuer marker) and #402 ("Chanel" ZA Gold) ───────────
describe("the switched views keep #401's issuer marker and #402's caveat true", () => {
  it("Tyla's headline caveat recounts with the view: South Africa left out leaves only France's post", async () => {
    at("/afrobeats/tyla");
    const { container } = await artist("tyla");
    const prov = () => container.querySelector(`.${artistStyles.provenance}`)!.textContent ?? "";
    expect(prov()).toContain(
      "— except 10 plaques in South Africa, 9 read from the label's own award and 1 from its own announcement, and 1 in France, read from SNEP's own announcement, which the registers do not hold"
    );
    await press(desktop(ZA));
    expect(prov()).toContain("— except 1 plaque in France, read from SNEP's own announcement, which the register does not hold");
    expect(prov()).not.toContain("South Africa");
    // The phone's provenance caption, the short form, follows the same switch
    // (item 26b): it moved out of the lede's bracket in round 2.
    expect(container.textContent).toContain("Read off-register: 1 plaque in France from SNEP's own announcement.");
  });

  it("Tems with features off: her one label plaque is a guest spot, so the caveat goes", async () => {
    at("/afrobeats/tems#feat=0");
    const { container } = await artist("tems");
    const prov = container.querySelector(`.${artistStyles.provenance}`)!.textContent ?? "";
    expect(prov).not.toContain("except");
    expect(prov).toContain("lead credits only");
  });

  it("Tyla with features off: every Sony Music Africa marker still carries the issuer class, strip and explorer", async () => {
    at("/afrobeats/tyla#feat=0");
    const { container } = await artist("tyla");
    const strip = [...container.getElementsByClassName(artistStyles.badgeProgram)];
    const explorer = [...container.getElementsByClassName(explorerStyles.badgeProgram)];
    const phone = [...container.getElementsByClassName(mobileStyles.badgeProgram)];
    expect(strip).toHaveLength(1);
    // Ten ZA plaques, all lead credits, so all ten stay in this view.
    expect(explorer).toHaveLength(10);
    expect(phone.length).toBeGreaterThan(0);
    for (const el of strip) expect(el.classList.contains(artistStyles.badgeIssuer)).toBe(true);
    for (const el of explorer) expect(el.classList.contains(explorerStyles.badgeIssuer)).toBe(true);
    for (const el of phone) expect(el.classList.contains(mobileStyles.badgeIssuer)).toBe(true);
  });

  it("a country chip's hover counts the plaques the view shows, not the full ledger's", async () => {
    // A fixture: South Africa holds a register row on the artist's own single
    // and a label plaque on a guest spot. All: "(1 not a register row)".
    // Features off leaves only the register row, so the chip reads as a plain
    // register chip — the hover describes what a click on it will show.
    const own = { title: "Own Single", certs: [{ c: "ZA", level: "Gold" as const }] };
    const guest = {
      title: "Guest Spot",
      certs: [{ c: "ZA", level: "Gold" as const, body: "Sony Music Africa", provenance: "label-issued plaque" }, { c: "US", level: "Gold" as const }],
    };
    const countries = { ZA: { name: "South Africa", flag: "🇿🇦", body: "RiSA" }, US: COUNTRIES.US };
    at("/");
    render(<CertExplorer albums={[]} singles={[own]} features={[guest]} countries={countries} totalCerts={3} home="ZA" homeName="South Africa" featured={["Guest Spot"]} />);
    const chip = () => screen.getByRole("button", { name: /ZA$/ });
    expect(chip()).toHaveAttribute("title", "South Africa — RiSA (1 not a register row)");
    await press(desktop(FEAT));
    expect(chip()).toHaveAttribute("title", "South Africa — RiSA");
  });
});

// Debug pass, 3 Oct 2026 (c4): the switches' accessible names read
// "Featured appearances: off · lead credits only" and "South Africa: left
// out" — a name that changed with every flip, and the state announced twice
// (in the name and by aria-checked). The name is now the control alone; the
// state is aria-checked, and the state words are its description.
describe("each switch keeps one accessible name; its state is checked + described", () => {
  it("Tyla, both layouts, before and after a flip", async () => {
    at("/afrobeats/tyla");
    await artist("tyla");
    for (const b of [desktop(FEAT), mobile(FEAT)]) {
      expect(b).toHaveAccessibleName("Featured appearances");
      expect(b).toHaveAccessibleDescription("on · every plaque held");
    }
    for (const b of [desktop(ZA), mobile(ZA)]) {
      expect(b).toHaveAccessibleName("South Africa");
      expect(b).toHaveAccessibleDescription("included");
    }
    await press(mobile(FEAT));
    await press(mobile(ZA));
    for (const b of [desktop(FEAT), mobile(FEAT)]) {
      expect(b).toHaveAccessibleName("Featured appearances");
      expect(b).toHaveAccessibleDescription("off · lead credits only");
      expect(b).toHaveAttribute("aria-checked", "false");
    }
    for (const b of [desktop(ZA), mobile(ZA)]) {
      expect(b).toHaveAccessibleName("South Africa");
      expect(b).toHaveAccessibleDescription("left out");
    }
    // Negative control: the names that shipped are gone.
    expect(screen.queryAllByRole("switch", { name: "Featured appearances: off · lead credits only" })).toHaveLength(0);
    expect(screen.queryAllByRole("switch", { name: "South Africa: left out" })).toHaveLength(0);
  });
});
