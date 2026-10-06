import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
// The prefetch prop is kept, as data-prefetch: next/link never writes it to
// the DOM, and it is the thing under test for the song-page picker.
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} data-prefetch={prefetch === undefined ? undefined : String(prefetch)} {...rest}>
      {children}
    </a>
  ),
}));

import { BURNA_BOY_ID } from "../app/lib/seo";
import PairPage from "../app/compare/[pair]/page";
import { allPairs, pairSlug } from "../app/lib/comparePairs";
import { artistBySlug as boardArtist } from "../app/data/afrobeats";
import CertificationsPage from "../app/certifications/page";
import { countryCount } from "../app/data/certifications";
import { certCountryCodes } from "../app/lib/certCountry";
import SongPage from "../app/music/[song]/page";
import songStyles from "../app/music/[song]/song.module.css";
import { songSlugs } from "../app/data/songs";

/**
 * The live-site debug of PR 349 (26 Sep 2026), the three findings that live in
 * page markup. The two that live in response headers — share cards served
 * noindex, widget fonts served max-age=0 — are in
 * tests/liveDebug349Headers.test.ts. Each negative control is the markup, JSON
 * or source line burnaboystats.com shipped.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const ldOf = (html: string) =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));

// ── One Burna Boy entity on the /compare pair pages ────────────────────────
type Node = Record<string, unknown>;
const datasets = (ld: unknown[]) => ld.filter((n): n is Node => (n as Node)?.["@type"] === "Dataset");
const asList = (x: unknown) => (Array.isArray(x) ? x : x ? [x] : []) as Node[];

/** Every Dataset.about node that is not one real artist: a group named for two
 *  of them ("Burna Boy and Rema"), or Burna Boy without his @id. */
function badAbout(ld: unknown[], names: string[]): Node[] {
  return datasets(ld)
    .flatMap((d) => asList(d.about))
    .filter((n) => {
      const name = String(n.name ?? "");
      const joined = names.some((x) => names.some((y) => x !== y && name === `${x} and ${y}`));
      return joined || (name === "Burna Boy" && n["@id"] !== BURNA_BOY_ID);
    });
}

describe("a /compare pair Dataset is about two artists, Burna Boy by his @id", () => {
  const slugOf = new Map(allPairs().flat().map((a) => [a.name, a.slug]));
  const roster = [...slugOf.keys()];

  it("the rule refuses the Dataset burna-boy-vs-rema shipped", () => {
    // Served by burnaboystats.com/compare/burna-boy-vs-rema on 26 Sep 2026.
    const shipped =
      '<script type="application/ld+json">{"@context":"https://schema.org","@type":"Dataset","name":"Burna Boy vs Rema — certified units","description":"Burna Boy at least 31,060,657 certified units vs Rema 14,713,450 (international) — each plaque priced at its body\'s own threshold, country by country.","url":"https://burnaboystats.com/compare/burna-boy-vs-rema","keywords":["Burna Boy","Rema","certified units","certifications","Afrobeats","head to head"],"isAccessibleForFree":true,"license":"https://creativecommons.org/licenses/by/4.0/","creator":{"@type":"Organization","name":"Burna Boy Stats","url":"https://burnaboystats.com"},"about":{"@type":"MusicGroup","name":"Burna Boy and Rema"},"variableMeasured":["Certified units (floor) per country","Highest certification per release per country","Plaques counted and not counted"],"dateModified":"2026-09-25"}</script>';
    expect(badAbout(ldOf(shipped), roster)).toHaveLength(1);
  });

  it("every Burna Boy pair points at his node and names the other artist on its own", async () => {
    const burnaPairs = allPairs().filter(([a, b]) => a.slug === "burna-boy" || b.slug === "burna-boy");
    expect(burnaPairs.length).toBeGreaterThan(0);
    // One pair of two board artists, for the other shape.
    const boardPair = allPairs().find(([a, b]) => a.slug !== "burna-boy" && b.slug !== "burna-boy")!;
    for (const [a, b] of [...burnaPairs, boardPair]) {
      const slug = pairSlug(a, b);
      const html = renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) }));
      const ld = ldOf(html);
      const [dataset] = datasets(ld);
      expect(dataset, slug).toBeTruthy();
      expect(badAbout(ld, roster), slug).toEqual([]);
      const about = asList(dataset.about);
      expect(about.map((n) => n.name).sort(), slug).toEqual([a.name, b.name].sort());
      for (const n of about) {
        expect(n["@type"], slug).toBe("MusicGroup");
        if (n.name === "Burna Boy") expect(n["@id"], slug).toBe(BURNA_BOY_ID);
        // A board artist carries the profiles its own board page cites.
        else expect(n.sameAs, slug).toContain(boardArtist(slugOf.get(String(n.name))!)!.wikipedia);
      }
    }
  });
});

// ── /certifications: the phone fold does not count boards as countries ─────
describe("the phone fold counts the country boards as markets", () => {
  /** The fold's count, if it calls the boards countries. */
  const countedAsCountries = (summary: string) => summary.match(/\d+\s+countr(?:y|ies)\b/)?.[0] ?? null;

  it("the rule refuses the summary that shipped", () => {
    // Served by burnaboystats.com/certifications on 26 Sep 2026, phone layout,
    // on a page whose hero, stat grid and title all say 26 countries.
    const shipped = parse(
      '<nav class="mobileCerts-module__1wnzXW__logHead" aria-label="Certified units by country"><details class="mobileCerts-module__1wnzXW__compareFold"><summary class="mobileCerts-module__1wnzXW__logKicker mobileCerts-module__1wnzXW__compareSummary">Certified units by country…<span class="mobileCerts-module__1wnzXW__compareCount">27 countries</span><span class="mobileCerts-module__1wnzXW__compareChevron" aria-hidden="true">↓</span></summary></details></nav>'
    );
    expect(countedAsCountries(shipped.querySelector("summary")!.textContent!)).toBe("27 countries");
  });

  it("says markets, /compare/in's word, and every country count on the page is his", () => {
    const html = renderToStaticMarkup(<CertificationsPage />);
    const summary = parse(html).querySelector('nav[aria-label="Certified units by country"] details summary')!;
    expect(countedAsCountries(summary.textContent!)).toBeNull();
    expect(summary.textContent).toContain(`${certCountryCodes().length} markets`);
    // The page's own figure, wherever it says "N countries": one number only.
    const counts = new Set([...parse(html).body.textContent!.matchAll(/(\d+)\s+countries/gi)].map((m) => Number(m[1])));
    expect([...counts]).toEqual([countryCount]);
  });
});

// ── Song pages: a prefetch of one brings no other song's images ────────────
/** The images React turns into preload hints (tests/rscImageHints.test.tsx). */
function hinted(root: ParentNode): Element[] {
  return [...root.querySelectorAll("img")].filter((img) => {
    if (img.getAttribute("loading") === "lazy") return false;
    if (img.getAttribute("fetchpriority") === "low") return false;
    if (!img.getAttribute("src") && !img.getAttribute("srcset")) return false;
    return !img.closest("picture, noscript");
  });
}

/** Every <Link> opening tag in the picker section that still prefetches. */
function prefetchingPickerLinks(src: string): string[] {
  const start = src.indexOf("<section className={styles.pickerPad}>");
  const section = src.slice(start, src.indexOf("</section>", start));
  return [...section.matchAll(/<Link\b[^>]*>/g)].map((m) => m[0]).filter((tag) => !/\bprefetch=\{false\}/.test(tag));
}

describe("a song page prefetches no other song, and a prefetch of it carries no image", () => {
  it("the rules refuse what /music/last-last shipped", () => {
    // Its hero, served on 26 Sep 2026: backdrop and cover, both hinted.
    const shippedHero = parse(
      '<div class="song-module__JUBKta__heroCard"><img class="song-module__JUBKta__heroBackdrop" src="https://i.scdn.co/image/ab67616d00001e02d98e997eaad5f503b9e1f2f2" alt="" aria-hidden="true"/><div class="song-module__JUBKta__heroScrim"></div><div class="song-module__JUBKta__heroGrid"><img class="song-module__JUBKta__cover" src="https://i.scdn.co/image/ab67616d00001e02d98e997eaad5f503b9e1f2f2" srcSet="https://i.scdn.co/image/ab67616d00004851d98e997eaad5f503b9e1f2f2 64w, https://i.scdn.co/image/ab67616d00001e02d98e997eaad5f503b9e1f2f2 300w, https://i.scdn.co/image/ab67616d0000b273d98e997eaad5f503b9e1f2f2 640w" sizes="236px" alt="Last Last cover" width="236" height="236"/></div></div>'
    );
    expect(hinted(shippedHero.body)).toHaveLength(2);
    // Its picker, as origin/main's app/music/[song]/page.tsx wrote it.
    const shippedPicker = `      <section className={styles.pickerPad}>
        <div className={styles.pickerLabel}>All {songPageCount} song pages</div>
        <div className={styles.picker}>
          <Link href={daiDaiStoryPage.href} className={styles.pick}>
          {songs.map((s) => (
            <Link
              key={s.slug}
              href={\`/music/\${s.slug}\`}
              className={\`\${styles.pick} \${s.slug === song.slug ? styles.pickOn : ""}\`}
              aria-current={s.slug === song.slug ? "page" : undefined}
            >
      </section>`;
    expect(prefetchingPickerLinks(shippedPicker)).toHaveLength(2);
  });

  it("the source picker prefetches nothing", () => {
    const src = read("app/music/[song]/page.tsx");
    expect(src).toContain("<section className={styles.pickerPad}>");
    expect(prefetchingPickerLinks(src)).toEqual([]);
  });

  it("on every song page: the chips do not prefetch, and no image is hinted", async () => {
    for (const slug of songSlugs) {
      const doc = parse(renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: slug }) })));
      const chips = [...doc.querySelectorAll("a")].filter((a) =>
        [...a.querySelectorAll("img")].some((i) => i.classList.contains(songStyles.pickCover))
      );
      expect(chips.length, slug).toBeGreaterThan(0);
      expect(chips.filter((a) => a.getAttribute("data-prefetch") !== "false").map((a) => a.getAttribute("href")), slug).toEqual([]);
      // What a prefetch of this page downloads: no image. Its own cover was
      // the one hint until 5 Oct 2026 (tests/ui/prefetchNoImageHints.test.tsx).
      expect(hinted(doc.body).map((i) => i.getAttribute("class")), slug).toEqual([]);
      // The backdrop is still there, still eager, and takes no box of its own.
      const backdrop = [...doc.querySelectorAll("img")].find((i) => i.classList.contains(songStyles.heroBackdrop))!;
      expect(backdrop, slug).toBeTruthy();
      expect(backdrop.getAttribute("loading"), slug).toBeNull();
      expect((backdrop.parentElement as HTMLElement).style.display, slug).toBe("contents");
    }
  });
});
