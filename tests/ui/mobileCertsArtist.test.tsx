import { render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

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

import ArtistPage from "../../app/afrobeats/[artist]/page";
import CertificationsPage from "../../app/certifications/page";
import { afrobeatsArtists, artistBySlug, countryCount } from "../../app/data/afrobeats";
import { certKicker, certTotals, certsInView, homeCodeFor, type CertView } from "../../app/lib/certScope";
import { featuredTitlesOf } from "../../app/lib/certUnits";
import { ACTION_BAR_ROUTES, hasOwnActionBar } from "../../app/lib/mobileScreens";
import { PORTRAIT_ART } from "../../app/lib/portraitArt";
import m from "../../app/components/mobileCerts.module.css";
import { read, rules, decl } from "../fixtures/cssRules";
import { colour, contrast, tokenContrast } from "../fixtures/tokenColours";

/**
 * Job 3 · J3-9 (design review 8 Oct 2026; fixes 57, 63, 72): the phone
 * board-artist hero. Under the back bar and the switcher, a 52px portrait chip
 * and the artist's name in Anton 40 — the phone h1, so "the name is visible at
 * display size" (the response's test) — then the total, the hero figure, with
 * the view's certKicker beside it. The portrait wash goes. Ayra Starr's name
 * takes her gradient, her figure and kicker her accent ink. Burna Boy's
 * /certifications screen is unchanged. There is no tab bar on these pages
 * (fix 57): the Compare bar is the screen's foot.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));
const phoneOf = (root: ParentNode) => root.querySelector(`.${m.screen}`)!;
const swept = afrobeatsArtists.filter((a) => a.swept);
const pageHtml = async (slug: string) => parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) })));

describe("every swept board page: the name is the phone h1, at display size", () => {
  it.each(swept.map((a) => a.slug))("%s", async (slug) => {
    const a = artistBySlug(slug)!;
    const phone = phoneOf(await pageHtml(slug));
    const h1s = [...phone.querySelectorAll("h1")];
    expect(h1s).toHaveLength(1);
    expect(h1s[0].textContent).toBe(a.name);
    expect(h1s[0].classList.contains(m.artistName)).toBe(true);
    // The figure is the hero figure, not a heading.
    const total = phone.querySelector(`.${m.hero} .${m.total}`)!;
    expect(total.closest("h1, h2, h3")).toBeNull();
    expect(total.textContent).not.toBe("");
    // The identity row: the 52px chip, phone-gated, focal from PORTRAIT_ART, and the country.
    const chip = phone.querySelector(`img.${m.portraitChip}`)!;
    expect(chip.getAttribute("width")).toBe("52");
    expect(chip.closest("picture")!.querySelector("source")!.getAttribute("media")).toBe("(max-width: 900px)");
    expect(chip.getAttribute("style")).toContain(`object-position:${PORTRAIT_ART[slug]?.focal ?? "center 24%"}`);
    expect(chip.getAttribute("fetchpriority")).toBeNull();
    expect(phone.querySelector(`.${m.identityKicker}`)!.textContent).toBe(a.country);
    // No portrait wash and no hero preload.
    expect(phone.querySelector(`.${m.heroArt}, .${m.heroScrim}`)).toBeNull();
    expect(phone.querySelector('link[rel="preload"][as="image"]')).toBeNull();
  });

  it("Anton 40, one line, wrapping below 360 (CSS)", () => {
    const css = rules(read("app/components/mobileCerts.module.css"));
    const base = css.find((r) => r.media === null && r.selector === ".artistName")!;
    expect(decl(base.body, "font-family")).toMatch(/--font-anton/);
    expect(decl(base.body, "font-size")).toBe("40px");
    expect(decl(base.body, "white-space")).toBe("nowrap");
    const narrow = css.find((r) => r.media === "@media (max-width: 359px)" && r.selector === ".artistName")!;
    expect(decl(narrow.body, "white-space")).toBe("normal");
  });

  it("negative control: Tyla's phone h1 as served on 8 Oct is the total, not the name", () => {
    // job1-scratch/live_afrobeats_tyla.html, the phone heading, cut after the figure.
    const SHIPPED =
      '<h1 class="mobileCerts-module__1wnzXW__totalRow"><span class="visuallyHidden">Tyla<!-- -->, <!-- -->certifications<!-- -->: </span><span class="mobileCerts-module__1wnzXW__total">76</span></h1>';
    const h1 = parse(SHIPPED).querySelector("h1")!;
    expect(h1.textContent).not.toBe("Tyla");
  });
});

describe("the label beside the figure is the view's certKicker (fix 72)", () => {
  const VIEWS: [string, CertView][] = [
    ["", { scope: "all", credit: "all" }],
    ["#feat=0", { scope: "all", credit: "lead" }],
    ["#home=0", { scope: "intl", credit: "all" }],
    ["#home=0&feat=0", { scope: "intl", credit: "lead" }],
  ];
  it.each(VIEWS)("Wizkid %s", (hash, view) => {
    const a = artistBySlug("wizkid")!;
    at(`/afrobeats/wizkid${hash}`);
    return ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) }).then((tree) => {
      const { container } = render(tree);
      const phone = phoneOf(container);
      const label = phone.querySelector(`.${m.totalRow} .${m.kicker}`)!;
      expect(label.textContent).toBe(certKicker(view, a.country));
      const inView = certTotals(certsInView(a.releases, { home: homeCodeFor(a.country), featured: new Set(featuredTitlesOf("wizkid")) }, view));
      expect(phone.querySelector(`.${m.total}`)!.textContent).toBe(String(inView.total));
      if (hash === "#home=0&feat=0") expect(label.textContent).toBe("Outside Nigeria · Lead credits");
      // The old kicker line above the figure is not drawn on board pages.
      expect(phone.querySelectorAll(`.${m.kicker}`)).toHaveLength(1);
    });
  });

  it("Seyi Vibez: one country reads “1 country”", async () => {
    const a = artistBySlug("seyi-vibez")!;
    const phone = phoneOf(await pageHtml("seyi-vibez"));
    const unit = phone.querySelector(`.${m.totalRow} .${m.totalUnit}`)!.textContent!;
    expect(unit).toContain(`${countryCount(a)} ${countryCount(a) === 1 ? "country" : "countries"}`);
  });
});

describe("Ayra Starr (fix 63): her name in her gradient, her figure and kicker in her ink", () => {
  const css = read("app/components/mobileCerts.module.css");
  const all = rules(css);
  const bodyOf = (sel: string) => all.filter((r) => r.selector.split(",").map((s) => s.trim()).includes(sel)).map((r) => r.body).join(";");

  it("the name: grad-1 to grad-3, clipped to the text, the accent ink beneath", () => {
    // The gradient sits in an @supports block, which the rule reader does not
    // descend into: read the raw sheet for every rule naming the selector.
    const flat = css.replace(/\/\*[\s\S]*?\*\//g, "");
    const grad = [...flat.matchAll(/\[data-brand="starrgirl"\] \.artistName\s*\{([^}]*)\}/g)].map((x) => x[1]).join(";");
    expect(grad).toMatch(/var\(--brand-grad-1\)/);
    expect(grad).toMatch(/var\(--brand-grad-3\)/);
    expect(grad).toMatch(/background-clip:\s*text/);
    expect(grad).toMatch(/color:\s*var\(--brand-accent-ink\)/);
    expect(bodyOf('[data-brand="starrgirl"] .total')).toMatch(/color:\s*var\(--brand-accent-ink\)/);
    expect(bodyOf('[data-brand="starrgirl"] .kicker')).toMatch(/color:\s*var\(--brand-accent-ink\)/);
  });

  it("her screen carries the brand and the kicker beside her figure takes it", async () => {
    const phone = phoneOf(await pageHtml("ayra-starr"));
    expect(phone.getAttribute("data-brand")).toBe("starrgirl");
    expect(phone.querySelector(`h1.${m.artistName}`)!.textContent).toBe(artistBySlug("ayra-starr")!.name);
    expect(phone.querySelector(`.${m.totalRow} .${m.kicker}`)).not.toBeNull();
  });

  it("her accent ink reads 4.5:1 on paper; the canvas's #f06ae0 did not", () => {
    expect(tokenContrast("--brand-accent-ink", "--bg", "light")).toBeGreaterThanOrEqual(4.5);
    // Negative control: the literal Ledgers.dc.html drew her in.
    expect(contrast(colour("#f06ae0", "light"), colour("#f7f4ee", "light"))).toBeLessThan(4.5);
  });
});

describe("Burna Boy's /certifications screen is unchanged", () => {
  it("its phone h1 is still the total row, named, with “Certifications”", () => {
    const phone = phoneOf(parse(renderToStaticMarkup(<CertificationsPage />)));
    const h1s = [...phone.querySelectorAll("h1")];
    expect(h1s).toHaveLength(1);
    expect(h1s[0].classList.contains(m.totalRow)).toBe(true);
    expect(h1s[0].textContent).toContain("Certifications");
    expect(phone.querySelector(`.${m.identity}`)).toBeNull();
    expect(phone.querySelector(`.${m.hero} img.${m.heroArt}`)).not.toBeNull();
  });
});

describe("fix 57: no tab bar on a board artist's page — the Compare bar is its foot", () => {
  it("the route is an action-bar screen, by the board-artist rule", () => {
    expect(hasOwnActionBar("/afrobeats/wizkid")).toBe(true);
    // Negative control: the route set alone does not hold it, so without
    // isBoardArtistPage the five-tab bar would render under the Compare bar.
    expect(ACTION_BAR_ROUTES.has("/afrobeats/wizkid")).toBe(false);
  });

  it("the screen ends in the action bar, Compare Wizkid ↗", async () => {
    const phone = phoneOf(await pageHtml("wizkid"));
    const bar = phone.querySelector(`.${m.actionBar}`)!;
    expect(bar).not.toBeNull();
    expect(phone.lastElementChild).toBe(bar);
    expect(bar.querySelector(`.${m.actionPrimary}`)!.textContent).toBe("Compare Wizkid ↗");
  });
});
