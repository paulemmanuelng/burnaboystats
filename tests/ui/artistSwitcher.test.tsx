import { renderToStaticMarkup } from "react-dom/server";
import type { ReactElement } from "react";
import { readFileSync } from "node:fs";
import { afterHitBox, decl, read, rules } from "../fixtures/cssRules";

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
import ArtistChartsPage from "../../app/afrobeats/[artist]/charts/page";
import ArtistLivePage from "../../app/afrobeats/[artist]/live/page";
import CertificationsPage from "../../app/certifications/page";
import ArtistSwitcher from "../../app/components/ArtistSwitcher";
import MobileArtistSwitcher from "../../app/components/MobileArtistSwitcher";
import { afrobeatsArtists, artistBySlug, certCount, chartEntries } from "../../app/data/afrobeats";
import { liveBoardFor } from "../../app/data/liveBoards";
import { artistPageSegments, type ArtistPageKey } from "../../app/lib/artistPages";
import desk from "../../app/components/artistSwitcher.module.css";
import phone from "../../app/components/mobileArtistSwitcher.module.css";
import mobileCerts from "../../app/components/mobileCerts.module.css";
import artistStyles from "../../app/afrobeats/[artist]/artist.module.css";

/**
 * Job 3 · J3-10 (design review 8 Oct 2026; fixes 56, 67, 69): a board artist's
 * three pages — certifications, official charts, live charts — as one switcher
 * on all three pages, both layouts. <nav aria-label="{artist}'s pages"> with
 * the current page aria-current. Desktop: its own row right under the
 * breadcrumb. Phone: under the back bar; on the certifications screen it
 * replaces the two cards at the foot (Burna Boy's /certifications keeps his).
 * A page the artist lacks is left out, never "0"; a pending artist shows no
 * counts. The first segment names certifications, not plaques (B-10).
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const w = artistBySlug("wizkid")!;
const live = liveBoardFor("wizkid")!;
const PAGES: [ArtistPageKey, () => Promise<ReactElement>][] = [
  ["certs", () => ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) })],
  ["charts", () => ArtistChartsPage({ params: Promise.resolve({ artist: "wizkid" }) })],
  ["live", () => ArtistLivePage({ params: Promise.resolve({ artist: "wizkid" }) })],
];
const HREFS = ["/afrobeats/wizkid", "/afrobeats/wizkid/charts", "/afrobeats/wizkid/live"];
const KEYS: ArtistPageKey[] = ["certs", "charts", "live"];

describe("Wizkid: one switcher per layout on each of the three pages", () => {
  it.each(PAGES)("%s page", async (key, page) => {
    const doc = parse(renderToStaticMarkup(await page()));
    const navs = [...doc.querySelectorAll(`nav[aria-label="Wizkid's pages"]`)];
    expect(navs).toHaveLength(2);
    const [d] = navs.filter((n) => n.classList.contains(desk.switcher));
    const [p] = navs.filter((n) => n.classList.contains(phone.switcher));
    expect(d).toBeDefined();
    expect(p).toBeDefined();
    for (const nav of [d, p]) {
      const links = [...nav.querySelectorAll("a")];
      expect(links.map((a) => a.getAttribute("href"))).toEqual(HREFS);
      expect(links.map((a) => a.getAttribute("aria-current"))).toEqual(KEYS.map((k) => (k === key ? "page" : null)));
      // The counts are the pages' own figures, read from the data.
      const counts = links.map((a) => a.querySelector("span")!.textContent);
      expect(counts).toEqual([String(certCount(w)), String(chartEntries(w)), String(live.placements)]);
    }
    expect(d.textContent).toBe(`Certifications${certCount(w)}Charts${chartEntries(w)}Live${live.placements}`);
    expect(p.textContent).toBe(`Certs${certCount(w)}Charts${chartEntries(w)}Live${live.placements}`);
  });

  it.each(PAGES)("the desktop switcher's row comes right after the breadcrumb (%s page)", async (_key, page) => {
    const doc = parse(renderToStaticMarkup(await page()));
    const crumbs = doc.querySelector('nav[aria-label="Breadcrumb"]')!;
    const next = crumbs.nextElementSibling!;
    expect(next.classList.contains(desk.row)).toBe(true);
    expect(next.querySelector(`nav.${desk.switcher}`)).not.toBeNull();
  });

  it("every board artist gets all three today, with the right one current", () => {
    for (const a of afrobeatsArtists)
      for (const k of KEYS) {
        const segs = artistPageSegments(a, k);
        expect(segs.filter((s) => s.current).map((s) => s.key), a.slug).toEqual([k]);
        if (a.swept) for (const s of segs) expect(s.count, `${a.slug} ${s.key}`).toBeGreaterThan(0);
      }
  });
});

describe("the missing-data states (fix 67)", () => {
  const html = (node: ReactElement) => parse(renderToStaticMarkup(node));

  it("an artist with no live board: two segments, two columns, never a zero", () => {
    // Wizkid's record under a slug no live board carries.
    const noLive = { ...w, slug: "no-live-board-fixture" };
    expect(liveBoardFor(noLive.slug)).toBeUndefined();
    const segs = artistPageSegments(noLive, "certs");
    expect(segs.map((s) => s.key)).toEqual(["certs", "charts"]);
    for (const node of [<ArtistSwitcher key="d" name="X" segments={segs} />, <MobileArtistSwitcher key="p" name="X" segments={segs} />]) {
      const links = [...html(node).querySelectorAll("a")];
      expect(links).toHaveLength(2);
      for (const a of links) expect(a.querySelector("span")?.textContent).not.toBe("0");
    }
  });

  it("a pending artist (registers not read): the names, no counts", () => {
    const pending = { ...w, swept: false };
    const segs = artistPageSegments(pending, "certs");
    expect(segs.length).toBe(3);
    for (const node of [<ArtistSwitcher key="d" name="X" segments={segs} />, <MobileArtistSwitcher key="p" name="X" segments={segs} />])
      expect(html(node).body.textContent).not.toMatch(/\d/);
  });

  it("no charts and no live board: nothing to switch between, so no switcher", () => {
    const alone = { ...w, slug: "no-live-board-fixture", charts: [] };
    const segs = artistPageSegments(alone, "certs");
    expect(segs).toHaveLength(1);
    expect(renderToStaticMarkup(<ArtistSwitcher name="X" segments={segs} />)).toBe("");
    expect(renderToStaticMarkup(<MobileArtistSwitcher name="X" segments={segs} />)).toBe("");
  });
});

describe("the phone certifications screen: the switcher replaces the foot cards", () => {
  /** The two cards at the foot of MobileCerts ("Chart peaks ↗" / "Live charts ↗"). */
  const footCards = (doc: Document) => doc.querySelectorAll(`.${mobileCerts.boards} a`).length;

  it.each(afrobeatsArtists.filter((x) => x.charts.length > 0 || liveBoardFor(x.slug)).map((x) => x.slug))(
    "/afrobeats/%s has no foot cards",
    async (slug) => {
      const doc = parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) })));
      expect(footCards(doc), slug).toBe(0);
    },
  );

  it("Burna Boy's /certifications keeps his two", () => {
    expect(footCards(parse(renderToStaticMarkup(<CertificationsPage />)))).toBe(2);
  });

  it("negative control: the 8 Oct phone screen's foot cards on Tyla's page are caught", () => {
    // As burnaboystats.com served /afrobeats/tyla on 8 Oct (job1-scratch/live_afrobeats_tyla.html), cut at the first card.
    const SHIPPED =
      '<div class="mobileCerts-module__1wnzXW__boards"><a class="mobileCerts-module__1wnzXW__boardBtn" href="/afrobeats/tyla/charts"><span class="mobileCerts-module__1wnzXW__boardTop"><span class="mobileCerts-module__1wnzXW__boardLabel">Chart peaks</span><span class="mobileCerts-module__1wnzXW__boardGo" aria-hidden="true">↗</span></span></a></div>';
    const doc = parse(SHIPPED);
    expect(doc.querySelectorAll('[class*="__boards"] a').length).toBeGreaterThan(0);
  });

  it("the desktop hero carries no board buttons and no .heroLive", async () => {
    const doc = parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) })));
    const hero = doc.querySelector(`.${artistStyles.heroActions}`)!;
    expect(hero.querySelector('a[href$="/charts"], a[href$="/live"]')).toBeNull();
    const css = readFileSync("app/afrobeats/[artist]/artist.module.css", "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    expect(css).not.toMatch(/\.heroLive\b|\.heroPair\b/);
  });
});

describe("the phone switcher's segments are 44px targets (V-global-14; review, 14 Oct 2026)", () => {
  // The segment is drawn 38px tall inside the 44px frame (2px padding and a
  // 1px border each side); a 402 screen draws each of three 118px wide.
  // Measured on the dev server at 402 (elementFromPoint down the centre of
  // Ayra Starr's "Certs"): 42px with an inset of -3px, which the ::after takes
  // from the segment's padding box, inside its own 1px border.
  const FRAME = { pad: 2, border: 1, gap: 3 };
  const rule = (css: string, sel: string) => rules(css).find((r) => r.selector === sel)?.body ?? "";
  const drawnHeight = (css: string) => Number.parseFloat(decl(rule(css, ".seg"), "min-height") ?? "NaN");
  const ownBorder = (css: string) => Number.parseFloat(decl(rule(css, ".seg"), "border") ?? "0");
  /** The segment's tap target: its ::after (from the padding box) where it has one, else the drawn box. */
  const hitBox = (css: string): [number, number] => {
    const drawn: [number, number] = [118, drawnHeight(css)];
    const padding: [number, number] = [drawn[0] - 2 * ownBorder(css), drawn[1] - 2 * ownBorder(css)];
    const after = afterHitBox(rule(css, ".seg::after"), padding);
    return Number.isNaN(after[1]) ? drawn : after;
  };
  const SHEET = read("app/components/mobileArtistSwitcher.module.css");

  it("each segment's hit area reaches the frame's outer edge: 44px tall, and over the 3px gap", () => {
    const [width, height] = hitBox(SHEET);
    expect(drawnHeight(SHEET) + 2 * (FRAME.pad + FRAME.border)).toBe(44);
    expect(height).toBeGreaterThanOrEqual(44);
    expect(width - 118).toBeGreaterThanOrEqual(FRAME.gap);
    expect(decl(rule(SHEET, ".seg"), "position")).toBe("relative");
  });

  it("negative control: an inset of -3px, measured at 42px, is caught", () => {
    expect(hitBox(SHEET.replace(/inset:\s*-4px -3px;/, "inset: -3px -2px;"))[1]).toBe(42);
  });

  it("negative control: the segment as first built (bf7e544a) was a 38px target", () => {
    // mobileArtistSwitcher.module.css at bf7e544a, its .seg box verbatim: no
    // ::after, so the target was the drawn 38px.
    const FIRST = `.seg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  min-width: 0;
  min-height: 38px;
  padding: 0 6px;
  border: 1px solid transparent;
  border-radius: 999px;
}`;
    expect(hitBox(FIRST)[1]).toBe(38);
  });
});
