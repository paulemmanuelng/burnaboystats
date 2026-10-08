import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render } from "@testing-library/react";

const nav = vi.hoisted(() => ({ pathname: "/" }));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => nav.pathname,
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

import CuratorPage from "../app/curator/page";
import MobileTabBar from "../app/components/MobileTabBar";
import { BACK_BAR_ROUTES, ACTION_BAR_ROUTES, hasOwnMobileChrome, hasOwnActionBar } from "../app/lib/mobileScreens";
import { totalAwards, countryCount } from "../app/data/certifications";
import { chartEntryCount, numberOnes } from "../app/data/charts";
import { totalWins } from "../app/data/awards";
import { dom, text, trees, declared } from "./fixtures/phoneTrees";
import phoneStyles from "../app/components/mobileCurator.module.css";

/**
 * /curator gets a phone screen.
 *
 * Design response of 30 Sep 2026, §11 and items 42–47, 57–58, 70–71
 * (designs/mobile/CPC Phone.dc.html, designs/desktop/Curator Press
 * Correction.dc.html). The page now renders two trees, the way its siblings
 * (/about, /api, /methodology) do: the phone screen first, then the desktop
 * page inside `.desktopOnly`. Every negative control below is built from what
 * the page shipped with before the split, so each check is shown to fail on it.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

/** The mobile chrome a route gets, against a given back-bar list. */
const chromeOf = (routes: Set<string>, path: string) => routes.has(path);

const PHONE_ROUTES = ["/curator"];

describe("routing: a back bar on the phone, and the five-tab bar stays (items 42–44, 58)", () => {
  it.each(PHONE_ROUTES)("%s has its own phone chrome and no action bar", (path) => {
    expect(BACK_BAR_ROUTES.has(path)).toBe(true);
    expect(hasOwnMobileChrome(path)).toBe(true);
    // The owner's decision: the tab bar stays, so NOT an action-bar route.
    expect(ACTION_BAR_ROUTES.has(path)).toBe(false);
    expect(hasOwnActionBar(path)).toBe(false);
  });

  it.each(PHONE_ROUTES)("%s keeps the five-tab bar with no tab lit", (path) => {
    nav.pathname = path;
    const { container } = render(<MobileTabBar />);
    const bar = container.querySelector("nav");
    expect(bar, "the tab bar should render on this route").not.toBeNull();
    expect(bar!.querySelectorAll("a").length).toBe(5);
    expect(bar!.querySelector('[aria-current="page"]')).toBeNull();
    nav.pathname = "/";
  });

  it("negative controls: the shipped list gave them no chrome; an action-bar route hides the tabs", () => {
    const shipped = new Set([...BACK_BAR_ROUTES].filter((r) => !PHONE_ROUTES.includes(r)));
    for (const path of PHONE_ROUTES) expect(chromeOf(shipped, path)).toBe(false);
    nav.pathname = "/api";
    expect(render(<MobileTabBar />).container.querySelector("nav")).toBeNull();
    nav.pathname = "/";
  });
});

describe("/curator", () => {
  const html = renderToStaticMarkup(<CuratorPage />);
  const { d, main, desktop, phone } = trees(html);
  const both = () => [phone!, desktop!];

  it("renders the phone screen first, then the desktop column, one h1 in each", () => {
    expect(phone, "no phone screen").toBeTruthy();
    expect(desktop, "no desktop wrapper").toBeTruthy();
    expect(phone!.compareDocumentPosition(desktop!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(phone!.querySelectorAll("h1").length).toBe(1);
    expect(desktop!.querySelectorAll("h1").length).toBe(1);
    expect(d.querySelectorAll("h1").length).toBe(2);
    // The split word is the only gold in each h1 (owner decision, 30 Sep).
    expect(text(phone!.querySelector("h1 span"))).toBe("Curator");
  });

  it("keeps the breadcrumb bar on desktop only (item 42)", () => {
    const crumbs = [...d.querySelectorAll('nav[aria-label="Breadcrumb"]')];
    expect(crumbs.length).toBe(1);
    expect(desktop!.contains(crumbs[0])).toBe(true);
  });

  it("opens the phone screen on the back bar: home, 'About the curator', no badge", () => {
    const back = phone!.querySelector('a[aria-label="Back"]');
    expect(back?.getAttribute("href")).toBe("/");
    const bar = back!.parentElement!;
    expect(text(bar)).toBe("About the curator");
    expect(bar.querySelector('button[aria-label="Open menu"]')).not.toBeNull();
  });

  it("sets the phone lede on --type-lede, 18px on the phone (item 71)", () => {
    expect(declared(read("app/components/mobileCurator.module.css"), ".lede", "font-size")).toEqual(["var(--type-lede)"]);
    // Negative control: what a phone got until 30 Sep 2026, the desktop
    // module's own override inside its max-width: 720px query.
    const shipped = ".lede { font-size: 16.5px; }";
    expect(declared(shipped, ".lede", "font-size")).not.toEqual(["var(--type-lede)"]);
  });

  it("prints the live review date in both trees", () => {
    for (const t of both()) expect(text(t)).toMatch(/Data last reviewed \d{1,2} \w+ \d{4}/);
  });

  describe("Why this site exists (item 45)", () => {
    const FIGURES = [
      [totalAwards(), "Certifications"],
      [countryCount, "Countries certifying"],
      [chartEntryCount, "Official chart entries"],
      [numberOnes, "No. 1s"],
      [totalWins, "Award wins"],
    ].map(([v, l]) => `${v} ${l}`);
    // Value and label are two elements in each cell; read them apart.
    const strip = (t: Element) =>
      [...t.querySelectorAll("ul li")].map((li) => [...li.children].map((c) => text(c)).join(" "));

    it("ends the sentence on 'Today it tracks:' and sets the five figures, from data, as a strip", () => {
      for (const t of both()) {
        expect(text(t)).toContain("so in June 2026 I started building the careful home those numbers deserved. Today it tracks:");
        expect(strip(t)).toEqual(FIGURES);
        expect(text(t)).toContain("Every figure is traced to the body that owns it.");
      }
    });

    it("negative control: the shipped sentence carried them mid-sentence, with no strip", () => {
      const shipped = dom(
        `<p>…so in June 2026 I started building the careful home those numbers deserved: today it tracks ${totalAwards()} certifications across ${countryCount} countries, ${chartEntryCount} official chart entries with ${numberOnes} No. 1s, and ${totalWins} award wins — every figure traced to the body that owns it.</p>`,
      ).body;
      expect(strip(shipped)).not.toEqual(FIGURES);
      expect(text(main)).not.toContain("deserved: today it tracks");
    });
  });

  describe("How I work (items 46, 70)", () => {
    const rows = (t: Element) =>
      [...t.querySelectorAll("dl > div")].map((r) => [text(r.querySelector("dt")), text(r.querySelector("dd"))]);
    // The owner's words, kept verbatim; since 5 Oct 2026 the no-row route
    // ("All Eyes on Me"'s 19× Platinum) follows them inside the bracket (core-12).
    const PLAQUE = "(or, in a market with no current public register, on the label's own plaque";
    const NO_ROW = "; where the register holds no row for the title, on the label's own plaque)";

    it("sets an intro line, one row per kind of figure, and the closing prose", () => {
      for (const t of both()) {
        expect(text(t)).toContain(
          "Nothing goes up unverified (the methodology page sets the method out). For each kind of figure, one source wins:",
        );
        expect(rows(t).map((r) => r[0])).toEqual(["Certification", "Chart peak", "Streaming figure", "Career total"]);
        expect(rows(t)[0][1]).toBe(`The certifying body's own database ${PLAQUE}${NO_ROW}.`);
        expect(rows(t)[3][1]).toBe("kworb's per-track sum, anchored on a dated ChartMasters read. Spotify never publishes it.");
      }
    });

    it("keeps the owner-ruled plaque phrase word for word in the page source", () => {
      expect(read("app/curator/page.tsx")).toContain(PLAQUE);
    });

    it("links 'methodology page' and 'updates feed' in the closing prose", () => {
      for (const t of both()) {
        const close = [...t.querySelectorAll("p")].find((p) => /When a fan tally/.test(p.textContent ?? ""))!;
        expect(text(close)).toBe(
          "When a fan tally and a primary source disagree, the primary source wins — even when the fan number is better. The full standard is on the methodology page, and every change worth noting is logged on the updates feed.",
        );
        const links = [...close.querySelectorAll("a")].map((a) => [text(a), a.getAttribute("href")]);
        expect(links).toEqual([
          ["methodology page", "/methodology"],
          ["updates feed", "/updates"],
        ]);
      }
    });

    it("negative control: the shipped paragraph had no rows and no links", () => {
      const shipped = dom(
        `<p>Nothing goes up unverified. A certification is counted when it appears in the certifying body's own database ${PLAQUE}, a chart peak when the chart's owner publishes it, … The full standard is on the methodology page, and every change worth noting is logged on the updates feed.</p>`,
      ).body;
      expect(rows(shipped)).toEqual([]);
      expect(shipped.querySelectorAll("a").length).toBe(0);
    });
  });

  describe("Reach me (item 47)", () => {
    const gap = (css: string) => /\.p\s*\+\s*\.p\s*\{[^}]*margin-top:\s*16px/.test(css.replace(/\/\*[\s\S]*?\*\//g, ""));

    it("puts 16px between the two paragraphs in both layouts", () => {
      expect(gap(read("app/components/mobileCurator.module.css"))).toBe(true);
      expect(gap(read("app/curator/curator.module.css"))).toBe(true);
      for (const t of both()) {
        const h = [...t.querySelectorAll("h2")].find((x) => text(x) === "Reach me")!;
        expect(h.nextElementSibling?.tagName).toBe("P");
        expect(h.nextElementSibling?.nextElementSibling?.tagName).toBe("P");
      }
    });

    it("negative control: the shipped paragraph rule set no gap", () => {
      const shipped = ".p { font-size: 15.5px; line-height: 1.75; color: var(--text-muted); max-width: 72ch; margin: 0; }";
      expect(gap(shipped)).toBe(false);
    });
  });

  describe("the repository link breaks rather than pushing the page sideways (artboard; measured at 320)", () => {
    // Unbroken, "github.com/paulemmanuelng/burnaboystats" is 326px wide; at 320
    // the column is 284, and the page scrolled 28px sideways (1 Oct 2026). The
    // artboard draws overflow-wrap:anywhere on that link.
    const REPO_HREF = "https://github.com/paulemmanuelng/burnaboystats";
    const breaks = (css: string) => declared(css, ".link", "overflow-wrap");

    it("sets overflow-wrap:anywhere on the phone link class, which the repository link carries", () => {
      expect(breaks(read("app/components/mobileCurator.module.css"))).toEqual(["anywhere"]);
      const repo = phone!.querySelector(`a[href="${REPO_HREF}"]`);
      expect(text(repo)).toBe("github.com/paulemmanuelng/burnaboystats");
      expect(repo!.className.split(" ")).toContain(phoneStyles.link);
    });

    it("negative control: the shipped phone link rule set no break", () => {
      expect(breaks(".link { color: var(--gold); }")).toEqual([]);
    });
  });

  it("renders Keep exploring once, outside both trees, with its own list", () => {
    const blocks = [...d.querySelectorAll('nav[aria-label="Explore more pages"]')];
    expect(blocks.length).toBe(1);
    expect(phone!.contains(blocks[0]) || desktop!.contains(blocks[0])).toBe(false);
    expect([...blocks[0].querySelectorAll("a")].map((a) => a.getAttribute("href"))).toEqual([
      "/methodology",
      "/api",
      "/share",
    ]);
  });
});
