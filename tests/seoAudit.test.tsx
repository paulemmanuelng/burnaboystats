import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { resolveRobots } from "next/dist/lib/metadata/resolvers/resolve-basics";

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

import { INDEXABLE_ROBOTS, BURNA_BOY, BURNA_BOY_ID, pageMetadata } from "../app/lib/seo";
import { robotsProblem } from "../scripts/seo-rules.mjs";
import { totalAwards, countryCount } from "../app/data/certifications";
import { certCountryCodes, countryBoardLinks, countrySlug } from "../app/lib/certCountry";
import CertificationsPage, { metadata as certMeta } from "../app/certifications/page";
import AboutPage from "../app/about/page";
import MusicPage from "../app/music/page";
import SongPage from "../app/music/[song]/page";
import AlbumPage from "../app/music/albums/[album]/page";
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import AnalysisPage from "../app/analysis/page";
import { songSlugs } from "../app/data/songs";
import { albumPageSlugs } from "../app/data/albumPages";

/**
 * The SEO audit of 26 Sep 2026: four of its six fixes, each held to the markup
 * the site served before it. The other two sit beside the guards of their own
 * kind — the song-page picker's preload hints in tests/rscImageHints.test.tsx,
 * the Dai Dai Article's image in tests/daiDaiParity.test.ts.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const doc = (html: string) => new DOMParser().parseFromString(html, "text/html");

// ── 1. max-image-preview:large ─────────────────────────────────────────────
describe("indexable pages allow Discover's large image card", () => {
  const tag = (content: string) => `<meta name="robots" content="${content}"/>`;

  it("the rule refuses the home page that shipped and passes the noindex one", () => {
    // Served by burnaboystats.com/ on 26 Sep 2026: its <head> from the
    // description to the canonical, where Next writes robots — and no robots.
    const shippedHome =
      '<meta name="description" content="Every Burna Boy certification, chart peak, award and tour record — fact-checked and always current. The unofficial stats home of the African Giant."/><link rel="manifest" href="/manifest.webmanifest"/><link rel="canonical" href="https://burnaboystats.com"/>';
    expect(robotsProblem(shippedHome)).not.toBeNull();
    // Served by /search the same day. Noindex pages are not in Discover.
    expect(robotsProblem('<meta name="robots" content="noindex, follow"/>')).toBeNull();
    // A robots tag that says index and nothing more is still a thumbnail.
    expect(robotsProblem(tag("index, follow"))).not.toBeNull();
  });

  it("the root layout declares it, and Next writes it into the tag", () => {
    expect(read("app/layout.tsx")).toMatch(/^\s*robots: INDEXABLE_ROBOTS,$/m);
    const basic = resolveRobots(INDEXABLE_ROBOTS)!.basic!;
    expect(basic).toMatch(/^index, follow\b/);
    expect(robotsProblem(tag(basic))).toBeNull();
  });

  it("a noindex page replaces the block and keeps its noindex", () => {
    // Next does not merge `robots`: the page's own wins outright, which is what
    // keeps /search and the pending board pages out of the index.
    const m = pageMetadata({ title: "t", description: "d", path: "/x", noindex: true });
    expect(resolveRobots(m.robots!)!.basic).toBe("noindex, follow");
    // And an ordinary page sets none, so it inherits the root's.
    expect(pageMetadata({ title: "t", description: "d", path: "/x" }).robots).toBeUndefined();
  });
});

// ── 2. One Burna Boy entity ────────────────────────────────────────────────
/** Every node in a JSON-LD tree that names Burna Boy as a MusicGroup or Person
 *  without the site's @id. */
function unlinked(node: unknown, out: unknown[] = []): unknown[] {
  if (Array.isArray(node)) node.forEach((n) => unlinked(n, out));
  else if (node && typeof node === "object") {
    const o = node as Record<string, unknown>;
    if (o.name === "Burna Boy" && (o["@type"] === "MusicGroup" || o["@type"] === "Person") && o["@id"] !== BURNA_BOY_ID)
      out.push(o);
    Object.values(o).forEach((v) => unlinked(v, out));
  }
  return out;
}
const ldOf = (html: string) =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));

/** Every .ts/.tsx file under app/. */
function sources(dir = "app", out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) sources(p, out);
    else if (/\.tsx?$/.test(e)) out.push(p);
  }
  return out;
}
/** A Burna Boy node written with no @id: `{ "@type": "MusicGroup", name: "Burna Boy" }`. */
const BARE = /"@type":\s*"(?:MusicGroup|Person)",\s*name:\s*"Burna Boy"/;

describe("Burna Boy is one entity in the structured data", () => {
  it("the walk and the source rule both catch what shipped", () => {
    // Served by burnaboystats.com/ on 26 Sep 2026: WebSite.about, no @id.
    const shipped =
      '<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"Burna Boy Stats","alternateName":"BurnaBoyStats","url":"https://burnaboystats.com","inLanguage":"en","about":{"@type":"MusicGroup","name":"Burna Boy","alternateName":"Damini Ebunoluwa Ogulu","genre":["Afrobeats","Afro-fusion","Reggae","Dancehall"],"award":"Grammy Award for Best Global Music Album (2021)","foundingLocation":{"@type":"Place","name":"Port Harcourt, Nigeria"},"sameAs":["https://en.wikipedia.org/wiki/Burna_Boy","https://www.instagram.com/burnaboygram","https://x.com/burnaboy","https://www.youtube.com/channel/UCEzDdNqNkT-7rSfSGSr1hWg","https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa","https://music.apple.com/us/artist/burna-boy/591899010","https://www.facebook.com/Officialburnaboy"]}}</script>';
    expect(unlinked(ldOf(shipped))).toHaveLength(1);
    // The line app/analysis/page.tsx shipped, and the layout's two-line form.
    expect(BARE.test('    about: { "@type": "MusicGroup", name: "Burna Boy" },')).toBe(true);
    expect(BARE.test('  about: {\n    "@type": "MusicGroup",\n    name: "Burna Boy",')).toBe(true);
  });

  it("no source file writes a Burna Boy node without the @id", () => {
    const bare = sources().filter((p) => BARE.test(read(p)));
    expect(bare, "use BURNA_BOY_REF from app/lib/seo.ts").toEqual([]);
  });

  it("the full node names his Wikidata item and is the layout's WebSite.about", () => {
    expect(BURNA_BOY["@id"]).toBe("https://burnaboystats.com/#burna-boy");
    expect(BURNA_BOY.sameAs).toContain("https://www.wikidata.org/wiki/Q17305712");
    // The seven profiles the layout carried before, all still there.
    for (const u of ["wikipedia.org/wiki/Burna_Boy", "instagram.com/burnaboygram", "x.com/burnaboy", "youtube.com/channel/", "open.spotify.com/artist/3wcj11K77LjEY1PkEazffa", "music.apple.com/", "facebook.com/Officialburnaboy"])
      expect(BURNA_BOY.sameAs.some((s) => s.includes(u)), u).toBe(true);
    expect(read("app/layout.tsx")).toMatch(/^\s*about: BURNA_BOY,$/m);
  });

  it("every rendered page that names him points at that node", async () => {
    const pages: [string, () => unknown][] = [
      ["/about", () => <AboutPage />],
      ["/music", () => <MusicPage />],
      ["/dai-dai", () => DaiDaiPage()],
      ["/dai-dai/es", () => DaiDaiPageES()],
      ["/analysis", () => <AnalysisPage />],
      ["/certifications", () => <CertificationsPage />],
      ...songSlugs.map((s): [string, () => unknown] => [`/music/${s}`, () => SongPage({ params: Promise.resolve({ song: s }) })]),
      ...albumPageSlugs.map((s): [string, () => unknown] => [`/music/albums/${s}`, () => AlbumPage({ params: Promise.resolve({ album: s }) })]),
    ];
    for (const [route, el] of pages) {
      const html = renderToStaticMarkup((await el()) as React.ReactElement);
      const ld = ldOf(html);
      expect(unlinked(ld), route).toEqual([]);
      expect(JSON.stringify(ld), `${route} names him`).toContain(BURNA_BOY_ID);
    }
  });
});

// ── 3. /certifications says plaques, not awards ────────────────────────────
describe("/certifications does not call plaques awards", () => {
  const AWARDS = /\bawards?\b/i;

  it("the rule refuses the title that shipped", () => {
    expect(AWARDS.test("Burna Boy Certifications — 248 Awards Across 26 Countries")).toBe(true);
  });

  it("the title and description are data-driven and lead with his name", () => {
    const title = String(certMeta.title);
    expect(title).not.toMatch(AWARDS);
    expect(title).toBe(`Burna Boy Certifications — ${totalAwards()} Plaques in ${countryCount} Countries`);
    expect(String(certMeta.description)).toMatch(/^Burna Boy's /);
    expect(String(certMeta.description)).toContain(`${totalAwards()} Silver`);
  });
});

// ── 4. The country boards are linked from /certifications ──────────────────
describe("every country board is linked from /certifications, in both layouts", () => {
  const boards = certCountryCodes().map((c) => `/compare/in/${countrySlug(c)}`);
  const missing = (html: string) => boards.filter((h) => !html.includes(`href="${h}"`));

  it("the rule refuses the onward links /certifications shipped", () => {
    // Served by burnaboystats.com/certifications on 26 Sep 2026: the page's one
    // band of onward links, and not a board among them.
    const shipped =
      '<nav class="certifications-module__tiv2Qa__sourceBand" aria-label="Compare Burna Boy with…"><div class="certifications-module__tiv2Qa__wide"><p class="certifications-module__tiv2Qa__source">Compare with…<!-- --> <a class="wikiLink" href="/compare/burna-boy-vs-wizkid">Wizkid</a> · <a class="wikiLink" href="/compare/burna-boy-vs-seyi-vibez">Seyi Vibez</a> · <a class="wikiLink" href="/compare/burna-boy-vs-davido">Davido</a> · <a class="wikiLink" href="/compare/burna-boy-vs-rema">Rema</a> · <a class="wikiLink" href="/compare/burna-boy-vs-asake">Asake</a> · <a class="wikiLink" href="/compare/burna-boy-vs-tems">Tems</a> · <a class="wikiLink" href="/compare/burna-boy-vs-bnxn">BNXN</a> · <a class="wikiLink" href="/compare/burna-boy-vs-tyla">Tyla</a> · <a class="wikiLink" href="/compare/burna-boy-vs-omah-lay">Omah Lay</a> · <a class="wikiLink" href="/compare/burna-boy-vs-olamide">Olamide</a> · <a class="wikiLink" href="/compare/burna-boy-vs-ayra-starr">Ayra Starr</a> · <a class="wikiLink" href="/compare/burna-boy-vs-fireboy-dml">Fireboy DML</a> · <a class="wikiLink" href="/compare/burna-boy-vs-kizz-daniel">Kizz Daniel</a> · <a class="wikiLink" href="/compare/burna-boy-vs-ckay">CKay</a> · <a class="wikiLink" href="/compare/burna-boy-vs-black-sherif">Black Sherif</a> · <a class="wikiLink" href="/compare/burna-boy-vs-victony">Victony</a> · <a class="wikiLink" href="/compare/burna-boy-vs-ruger">Ruger</a> · <a class="wikiLink" href="/compare/burna-boy-vs-oxlade">Oxlade</a> · <a class="wikiLink" href="/compare/burna-boy-vs-tiwa-savage">Tiwa Savage</a></p></div></nav>';
    expect(missing(shipped)).toEqual(boards);
  });

  it("links each board once per layout, canonical URLs, the phone copy folded", () => {
    expect(countryBoardLinks().map((l) => l.href)).toEqual(boards);
    const d = doc(renderToStaticMarkup(<CertificationsPage />));
    const navs = [...d.querySelectorAll('nav[aria-label="Certified units by country"]')];
    expect(navs).toHaveLength(2);
    for (const nav of navs) {
      expect([...nav.querySelectorAll("a")].map((a) => a.getAttribute("href"))).toEqual(boards);
      expect(missing(nav.outerHTML)).toEqual([]);
    }
    const folded = navs.filter((n) => n.querySelector("details"));
    expect(folded).toHaveLength(1);
    expect(folded[0].querySelector("details")!.hasAttribute("open")).toBe(false);
    expect(folded[0].querySelector("summary")!.textContent).toContain(`${boards.length} countries`);
  });
});
