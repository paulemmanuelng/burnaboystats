import { render, fireEvent } from "@testing-library/react";
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

import CertificationsPage from "../../app/certifications/page";
import ArtistPage from "../../app/afrobeats/[artist]/page";
import { albums, singles, features, type Cert } from "../../app/data/certifications";
import { artistBySlug } from "../../app/data/afrobeats";
import { badgeWeight, byMostCertified } from "../../app/lib/certs";
import { byStripOrder, mostCertified, stripMeta } from "../../app/lib/mostCertified";
import { certsInView, homeCodeFor, ALL_VIEW, type CertView } from "../../app/lib/certScope";
import { featuredTitlesOf } from "../../app/lib/certUnits";
import strip from "../../app/components/mostCertified.module.css";
import ledger from "../../app/components/ledgerRow.module.css";
import { read } from "../fixtures/cssRules";
import { at } from "../fixtures/ledgerRowChecks";

/**
 * Job 3 · J3-3 (design review 8 Oct 2026; fixes 68, 69): "Most certified" —
 * a ledger's top five by plaque count, under "Where the certifications are" on
 * every board page and under the stat tiles on /certifications, desktop only.
 * Fix 68's order: plaques, then the highest tier weight (`badgeWeight`), then
 * title. It follows the switches (One Dance leaves Wizkid's when featured
 * appearances are off). Meta "{n} certifications · {k} {best tier}". Each cell
 * is one in-page link to its row, with no glyph (fix 69) and no gold.
 */

type R = { title: string; certs: readonly Cert[] };
const TIERS = ["Diamond", "Platinum", "Gold", "Silver"];
/** Fix 68's order, written out again here from the fixes file, so the strip is checked against the rule and not against itself. */
const fix68 = (rs: readonly R[]) =>
  [...rs]
    .filter((r) => r.certs.length > 0)
    .sort(
      (a, b) =>
        b.certs.length - a.certs.length ||
        Math.max(...b.certs.map(badgeWeight)) - Math.max(...a.certs.map(badgeWeight)) ||
        a.title.localeCompare(b.title, "en"),
    )
    .slice(0, 5);
const meta = (r: R) => {
  const best = TIERS.find((t) => r.certs.some((c) => c.level === t))!;
  const k = r.certs.filter((c) => c.level === best).length;
  return `${r.certs.length} ${r.certs.length === 1 ? "certification" : "certifications"} · ${k} ${best}`;
};

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const cellsOf = (root: ParentNode) =>
  [...root.querySelectorAll<HTMLAnchorElement>(`.${strip.cell}`)].map((a) => ({
    a,
    title: a.querySelector(`.${strip.name}`)!.textContent!,
    meta: a.querySelector(`.${strip.meta}`)!.textContent!,
    href: a.getAttribute("href")!,
  }));

const burnaView = (v: CertView) => {
  const ctx = { home: homeCodeFor("Nigeria"), featured: featuredTitlesOf("burna-boy") };
  return [...certsInView(albums, ctx, v), ...certsInView(singles, ctx, v), ...certsInView(features, ctx, v)];
};
const boardView = (slug: string, v: CertView) => {
  const a = artistBySlug(slug)!;
  return certsInView(a.releases, { home: homeCodeFor(a.country), featured: featuredTitlesOf(slug) }, v);
};
const LEAD: CertView = { scope: "all", credit: "lead" };
const at_ = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at_("/"));

describe("J3-3: the strip is fix 68's top five, with its meta", () => {
  it("/certifications, all view: five cells, in fix 68's order, under the stat tiles", () => {
    const doc = parse(renderToStaticMarkup(<CertificationsPage />));
    const cells = cellsOf(doc);
    const want = fix68(burnaView(ALL_VIEW));
    expect(cells.map((c) => c.title)).toEqual(want.map((r) => r.title));
    expect(cells.map((c) => c.meta)).toEqual(want.map(meta));
    // Under the tiles: the strip's band follows the summary band.
    const band = doc.querySelector(`.${strip.strip}`)!.closest("section")!;
    expect(band.previousElementSibling!.querySelector('[class*="summaryCell"]')).not.toBeNull();
  });

  it("/afrobeats/wizkid, all view: One Dance first, and Come Closer ahead of Made in Lagos (7 plaques each)", async () => {
    const doc = parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) })));
    const cells = cellsOf(doc);
    const want = fix68(boardView("wizkid", ALL_VIEW));
    expect(cells.map((c) => c.title)).toEqual(want.map((r) => r.title));
    expect(cells.map((c) => c.meta)).toEqual(want.map(meta));
    expect(cells[0].title).toBe("One Dance");
    const t = cells.map((c) => c.title);
    // Fix 68's own example, read from the data: Essence 8, Made in Lagos 7, with a tie.
    const essence = want.find((r) => r.title === "Essence")!;
    const mil = want.find((r) => r.title === "Made in Lagos")!;
    const cc = want.find((r) => r.title === "Come Closer")!;
    expect(essence.certs.length).toBeGreaterThan(mil.certs.length);
    expect(cc.certs.length).toBe(mil.certs.length);
    expect(t.indexOf("Come Closer")).toBeLessThan(t.indexOf("Made in Lagos"));
  });

  it("follows the switches: with featured appearances off, One Dance leaves Wizkid's strip", async () => {
    at_("/afrobeats/wizkid#feat=0");
    const { container } = render(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) }));
    const titles = cellsOf(container).map((c) => c.title);
    expect(titles).toEqual(fix68(boardView("wizkid", LEAD)).map((r) => r.title));
    expect(titles).not.toContain("One Dance");
    expect(featuredTitlesOf("wizkid").has("One Dance")).toBe(true);
  });

  it("/certifications with features off: the lead list", () => {
    at_("/certifications#feat=0");
    const { container } = render(<CertificationsPage />);
    expect(cellsOf(container).map((c) => c.title)).toEqual(fix68(burnaView(LEAD)).map((r) => r.title));
  });

  it("stripMeta and mostCertified are fix 68's rule on every board artist", () => {
    for (const a of ["wizkid", "tyla", "rema", "davido", "asake", "seyi-vibez"]) {
      const rs = boardView(a, ALL_VIEW);
      expect(mostCertified(rs, 5).map((r) => r.title), a).toEqual(fix68(rs).map((r) => r.title));
      for (const r of mostCertified(rs, 5)) expect(stripMeta(r)).toBe(meta(r));
    }
  });
});

describe("J3-3 / fix 69: each cell is one in-page link to its row, no glyph, no gold", () => {
  it("every href names a row in the same desktop tree", async () => {
    for (const html of [
      renderToStaticMarkup(<CertificationsPage />),
      renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) })),
      renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "tyla" }) })),
    ]) {
      const doc = parse(html);
      const cells = cellsOf(doc);
      expect(cells.length).toBe(5);
      for (const c of cells) {
        expect(c.href).toMatch(/^#row-(album|song)-[a-z0-9-]+$/);
        const row = doc.getElementById(c.href.slice(1))!;
        expect(row, c.href).not.toBeNull();
        expect(row.classList.contains(ledger.row)).toBe(true);
        expect(row.querySelector(`.${ledger.title}`)!.textContent).toBe(c.title);
        // Desktop only, the row and the strip alike.
        expect(c.a.closest('[class*="desktopOnly"]'), "the strip is desktop only").not.toBeNull();
        expect(row.closest('[class*="desktopOnly"]')).not.toBeNull();
        // One link per cell, its whole content; no arrow (Option A, fix 7).
        expect(c.a.textContent).not.toMatch(/[↓↗→↘]/);
      }
    }
  });

  it("a jump keeps the switches: the fragment is left alone and the row takes focus", async () => {
    at_("/afrobeats/wizkid#feat=0");
    const scroll = vi.fn();
    const was = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = scroll;
    try {
      const { container } = render(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) }));
      const [first] = cellsOf(container);
      fireEvent.click(first.a);
      expect(window.location.hash).toBe("#feat=0");
      expect(scroll).toHaveBeenCalledTimes(1);
      expect(document.activeElement?.id).toBe(first.href.slice(1));
    } finally {
      Element.prototype.scrollIntoView = was;
    }
  });

  it("the CSS: no gold anywhere, five across, three at 901–1239", () => {
    const css = read("app/components/mostCertified.module.css");
    expect(css.replace(/\/\*[\s\S]*?\*\//g, "")).not.toMatch(/--gold|#945e00|#ffb627|--color-accent/i);
    expect(at(css, ".cells", "grid-template-columns", 1440)).toBe("repeat(5, minmax(0, 1fr))");
    expect(at(css, ".cells", "grid-template-columns", 1024)).toBe("repeat(3, minmax(0, 1fr))");
    expect(at(css, ".item:nth-child(n + 4)", "display", 1024)).toBe("none");
    expect(at(css, ".item:nth-child(n + 4)", "display", 1440)).toBeUndefined();
    expect(at(css, ".cover", "width", 1440)).toBe("44px");
    expect(at(css, ".name", "font-size", 1440)).toBe("18px");
    expect(at(css, ".meta", "font-size", 1440)).toBe("var(--type-caption)");
    expect(at(css, ".title", "font-size", 1440)).toBe("32px");
  });

  it("the board covers are fetched at the 44px tile's 3x", async () => {
    const doc = parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) })));
    const sized = [...doc.querySelectorAll(`.${strip.cover}[style]`)].map((e) => e.getAttribute("style")!.match(/\/(\d+)x\1/)?.[1]).filter(Boolean);
    expect(sized.length).toBeGreaterThan(0);
    for (const s of sized) expect(Number(s)).toBe(132);
  });
});

describe("J3-3 negative controls: what shipped fails", () => {
  it("the 8 Oct board strip, as served, links no row and gives no row an id", () => {
    // burnaboystats.com/afrobeats/tyla on 8 Oct 2026, the country strip's
    // section verbatim to its second pill (the other 23 pills cut).
    const html = `<section class="artist-module__co1L-q__sectionPad" aria-labelledby="countries"><div class="artist-module__co1L-q__sectionHead"><h2 id="countries" class="artist-module__co1L-q__h2">Where the plaques are</h2><span class="artist-module__co1L-q__sectionMeta">25 countries<!-- --> · best tier shown</span></div><div class="artist-module__co1L-q__pills"><span class="artist-module__co1L-q__cert artist-module__co1L-q__diamond" title="Turkey — Epic Records, label-issued plaque"><span class="artist-module__co1L-q__flag" aria-hidden="true">🇹🇷</span>3× Diamond<span class="artist-module__co1L-q__badgeProgram artist-module__co1L-q__badgeIssuer">Epic Records</span><span class="artist-module__co1L-q__certCountry">Turkey</span></span><span class="artist-module__co1L-q__cert artist-module__co1L-q__diamond" title="Brazil — Pro-Música Brasil"><span class="artist-module__co1L-q__flag" aria-hidden="true">🇧🇷</span>2× Diamond<span class="artist-module__co1L-q__certCountry">Brazil</span></span></div></section>`;
    const doc = parse(html);
    expect(doc.querySelector("#countries")?.textContent).toBe("Where the plaques are");
    expect(cellsOf(doc)).toHaveLength(0);
    expect(doc.querySelectorAll('a[href^="#row-"]')).toHaveLength(0);
    expect(doc.querySelectorAll('[id^="row-"]')).toHaveLength(0);
  });

  it("the shipped comparator, byMostCertified, orders Wizkid's real seven-plaque pair the other way", () => {
    const w = artistBySlug("wizkid")!;
    const cc = w.releases.find((r) => r.title === "Come Closer")!;
    const mil = w.releases.find((r) => r.title === "Made in Lagos")!;
    expect(cc.certs.length).toBe(mil.certs.length);
    // Summed weight puts Made in Lagos (seven Golds) first; fix 68's top plaque, Come Closer.
    expect(Math.sign(byMostCertified(cc, mil))).toBe(1);
    expect(Math.sign(byStripOrder(cc, mil))).toBe(-1);
    const old = [...w.releases].sort(byMostCertified).slice(0, 5).map((r) => r.title);
    expect(old).not.toEqual(fix68(w.releases).map((r) => r.title));
  });
});
