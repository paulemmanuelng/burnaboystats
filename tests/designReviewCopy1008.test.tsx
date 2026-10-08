import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AboutPage from "../app/about/page";
import aboutStyles from "../app/about/about.module.css";
import mobileAboutStyles from "../app/components/mobileAbout.module.css";
import { BURNA_BOY_REAL_NAME } from "../app/lib/seo";
import Home from "../app/page";
import CertificationsPage from "../app/certifications/page";
import ArtistPage from "../app/afrobeats/[artist]/page";
import SongPage from "../app/music/[song]/page";
import AlbumPage from "../app/music/albums/[album]/page";
import AnalysisPage from "../app/analysis/page";
import VisualizedPage from "../app/records/visualized/page";
import MethodologyPage from "../app/methodology/page";
import TimelinePage from "../app/timeline/page";
import FaqPage from "../app/faq/page";
import CountryPage from "../app/compare/in/[country]/page";
import { sectionLinks } from "../app/components/KeepExploring";
import mobileCertStyles from "../app/components/mobileCerts.module.css";
import { totalAwards, countryCount } from "../app/data/certifications";
import { readFileSync } from "node:fs";

/**
 * The copy fixes of the 8 Oct 2026 design review (SUGGESTIONS.md §3, the
 * owner's "go" of 8 Oct). One block per item; every negative control is the
 * line the live site served before the fix.
 */

const dom = (html: string) => new DOMParser().parseFromString(html, "text/html");
const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

// ── Copy 1 (C-10) ─────────────────────────────────────────────────────────

describe("Copy 1 (C-10): /about answers the real-name search in its own heading and opening line", () => {
  /** What a reader who searched "burna boy real name" needs from the first
   *  two lines: whose page it is, then the name. */
  const answers = (h1: string, lede: string) =>
    /Burna Boy/.test(h1) && lede.startsWith(`Burna Boy's real name is ${BURNA_BOY_REAL_NAME}`);

  // Live on burnaboystats.com/about, both layouts, 8 Oct 2026.
  const SHIPPED_H1 = "About the Giant";
  const SHIPPED_LEDE = "The story of Damini Ogulu — Afrobeats' African Giant.";

  it("both layouts: the h1 names him and the lede leads with the real name from lib/seo.ts", () => {
    const d = dom(renderToStaticMarkup(<AboutPage />));
    const h1s = [...d.querySelectorAll("h1")].map(text);
    expect(h1s).toEqual(["About Burna Boy", "About Burna Boy"]);
    const desk = text(d.querySelector(`.${aboutStyles.lede}`));
    const phone = text(d.querySelector(`.${mobileAboutStyles.lede}`));
    for (const lede of [desk, phone]) expect(answers(h1s[0], lede), lede).toBe(true);
    expect(desk).toBe(phone);
    // The fast fact reads the same constant.
    expect(d.body.textContent).toContain(`Real name${BURNA_BOY_REAL_NAME}`);
  });

  it("negative control: the heading and lede the site shipped do not answer it", () => {
    expect(answers(SHIPPED_H1, SHIPPED_LEDE)).toBe(false);
  });
});

// ── Copy 2 (B-10, MU-24) ──────────────────────────────────────────────────

describe("Copy 2 (B-10, MU-24): a plaque is a certification, never an award", () => {
  /** "Awards" used for plaques: a count, a tier or a ledger word before it, or
   *  a plaque phrase after it. Real awards ("83 award wins", "48 award
   *  bodies", "Grammy Award") are left alone. */
  const PLAQUE_AWARD =
    /\b(?:\d+|silver|gold|platinum|diamond|N×|top|highest|sales)\s+awards?\b(?!\s+(?:wins?|bodies|body|nominations?|ceremon|show|from \d+ nominations))|\bawards?\s+(?:across|from the RIAA)\b|counting awards|fewer awards|listed the award\b|the award is real|report awards/gi;
  const misnamed = (t: string) => [...t.matchAll(PLAQUE_AWARD)].map((m) => m[0]);

  // Each line as the live site served it on 8 Oct 2026.
  const SHIPPED = [
    "Certifications · 251 awards across 27 countries", // Keep exploring, most pages
    "Certifications 4 awards", // /music/wgft section meta
    "Certifications 8 awards", // /music/albums/love-damini
    "Silver, Gold, Platinum and Diamond awards from the RIAA, BPI, SNEP, Music Canada and 23 more — across 93 certified releases.", // phone lede
    "251 awards from 27 countries. Filter by tier", // home ledger
    "Highest award", // home ledger column
    "All 8 Diamond awards come from SNEP and Epic Records", // home tier note
    "Counting awards flatters markets that certify early and often", // /analysis
    "crowned by 8 Diamond awards (", // /records/visualized
    "A register can publish fewer awards than it has issued", // /methodology
    "An N× award is priced here as N × Platinum.", // /compare footnotes
    "the award is real, the scale is not published", // /compare/in/colombia
    "Burna Boy's 100th current Platinum award worldwide.", // /timeline
    "The award is real but the rest is not.", // /methodology, claims checked and not published
  ];

  const pages = async () => ({
    home: renderToStaticMarkup(<Home />),
    certs: renderToStaticMarkup(<CertificationsPage />),
    wizkid: renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) })),
    wgft: renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: "wgft" }) })),
    loveDamini: renderToStaticMarkup(await AlbumPage({ params: Promise.resolve({ album: "love-damini" }) })),
    analysis: renderToStaticMarkup(<AnalysisPage />),
    visualized: renderToStaticMarkup(<VisualizedPage />),
    methodology: renderToStaticMarkup(<MethodologyPage />),
    timeline: renderToStaticMarkup(<TimelinePage />),
    faq: renderToStaticMarkup(<FaqPage />),
    colombia: renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country: "colombia" }) })),
    us: renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country: "united-states" }) })),
  });

  it("no page calls a plaque an award — labels, units, ledes, notes", async () => {
    const found: string[] = [];
    for (const [name, html] of Object.entries(await pages())) {
      for (const m of misnamed(text(dom(html).body))) found.push(`${name}: ${m}`);
    }
    expect(found).toEqual([]);
  });

  it("the Keep exploring card and the song and album meta count certifications", async () => {
    expect(sectionLinks.certifications.desc).toBe(`${totalAwards()} certifications across ${countryCount} countries`);
    const p = await pages();
    expect(text(dom(p.wgft).body)).toMatch(/Certifications\s*\d+ certifications/);
    expect(text(dom(p.loveDamini).body)).toMatch(/Certifications\s*\d+ certifications/);
  });

  it("the phone total's unit says Certifications, on Burna Boy's page and a board artist's", async () => {
    const p = await pages();
    for (const html of [p.certs, p.wizkid]) {
      const unit = dom(html).querySelector(`.${mobileCertStyles.totalUnit}`)!;
      expect(unit.innerHTML).toMatch(/^Certifications<br>\d+ countr(y|ies)$/);
    }
    // The board artist's phone lede names the same noun ("Every Wizkid certification, …").
    expect(text(dom(p.wizkid).body)).toContain("Every Wizkid certification, read in the issuing body's own register");
  });

  it("the hub's empty top-tier slot says cert, not award", () => {
    const src = readFileSync("app/components/MobileAfrobeatsHub.tsx", "utf8");
    expect(src).toContain(">top cert<");
    expect(src).not.toContain(">top award<");
  });

  it("negative control: every line the site shipped is caught", () => {
    for (const line of SHIPPED) expect(misnamed(line), line).not.toEqual([]);
  });
});
