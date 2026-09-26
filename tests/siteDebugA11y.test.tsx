import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(window.location.search),
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

import MethodologyPage from "../app/methodology/page";
import ApiPage from "../app/api/page";
import ScatterChart from "../app/components/ScatterChart";
import MobileTabBar from "../app/components/MobileTabBar";
import Nav from "../app/components/Nav";
import SubscribeBox from "../app/components/SubscribeBox";
import MobileFaq from "../app/components/MobileFaq";
import MobileAbout from "../app/components/MobileAbout";
import SearchResults from "../app/components/SearchResults";
import SpanishDaiDaiLayout from "../app/dai-dai/es/layout";
import DaiDaiPage, { metadata as daiDaiMeta } from "../app/dai-dai/page";
import { metadata as daiDaiEsMeta } from "../app/dai-dai/es/page";
import { metadata as unmergeMeta } from "../app/analysis/spotify-unmerge/page";
import { metadata as methodologyMeta } from "../app/methodology/page";
import { metadata as notFoundMeta } from "../app/not-found";
import { PRE_PAINT_LANG } from "../app/lib/documentLang";
import { pageMetadata } from "../app/lib/seo";
import { DAI_DAI_STORY_PUBLISHED } from "../app/data/daiDai";
import { certCountryCodes, countrySlug, priceCountry } from "../app/lib/certCountry";

/**
 * Accessibility and metadata fixes from the full-site debug of 24 Sep 2026,
 * group E. Each item was reproduced on the live site with axe-core, Chrome's
 * accessibility tree or the served HTML; these pin the markup that removed it.
 *
 * Each negative control is the markup, rule or code the live site shipped,
 * copied from the served page — never invented wording.
 */

const read = (p: string) => readFileSync(p, "utf8");
const doc = (html: string) => new DOMParser().parseFromString(html, "text/html");

type Rule = { media: string | null; selector: string; body: string };
/** Top-level rules and rules one @media deep, comments stripped. */
function rules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media")) walk(body, head);
      else out.push({ media, selector: head, body });
      i = j;
    }
  };
  walk(src, null);
  return out;
}
const decl = (body: string, prop: string) =>
  body.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim();

/** Hidden from sight but still in the accessibility tree. */
const stillSpoken = (body: string) =>
  decl(body, "display") !== "none" && decl(body, "position") === "absolute" && decl(body, "width") === "1px";

describe("E-01: the compare page's mode links and programme chips keep a name on a phone", () => {
  const phone = rules(read("app/compare/compare.module.css")).filter((r) => r.media === "@media (max-width: 760px)");

  it.each([".segLong", ".progLong"])("%s is visually hidden, not display:none", (sel) => {
    const r = phone.find((x) => x.selector === sel);
    expect(r, `${sel} has no phone rule`).toBeTruthy();
    expect(stillSpoken(r!.body)).toBe(true);
  });

  it("negative control: the shipped phone rules removed the only spoken label", () => {
    for (const shipped of [".segLong { display: none; }", ".progLong { display: none; }"]) {
      expect(stillSpoken(rules(shipped)[0].body)).toBe(false);
    }
  });
});

/** A <dl>'s content model: dt/dd groups, optionally each wrapped in one <div>. */
function dlProblems(root: Document): string[] {
  const bad: string[] = [];
  for (const dl of root.querySelectorAll("dl")) {
    for (const c of dl.children) {
      const tag = c.tagName.toLowerCase();
      if (tag === "dt" || tag === "dd" || tag === "script" || tag === "template") continue;
      if (tag === "div" && [...c.children].every((g) => ["dt", "dd"].includes(g.tagName.toLowerCase()))) continue;
      bad.push(`<dl class="${dl.className}"> holds <${tag}>${c.textContent?.slice(0, 30)}`);
    }
  }
  return bad;
}

describe("E-03: definition lists hold only term/description groups", () => {
  it("/methodology's primary-sources list", () => {
    const d = doc(renderToStaticMarkup(MethodologyPage()));
    expect(dlProblems(d)).toEqual([]);
    // Each term still carries both lines, area and tag.
    const terms = [...d.querySelectorAll("dl dt")].map((t) => t.textContent);
    expect(terms).toContain("CertificationsRIAA · BPI · SNEP · BVMI");
  });

  it("the two-programme US board: each programme's name sits before its own list", async () => {
    const { default: CountryPage } = await import("../app/compare/in/[country]/page");
    const d = doc(renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country: "united-states" }) })));
    expect(dlProblems(d)).toEqual([]);
    const names = [...d.querySelectorAll("p")].filter((p) => /^RIAA( Latin)?$/.test(p.textContent ?? ""));
    // One pair in the open card and one in the phone fold.
    expect(names.map((p) => p.textContent)).toEqual(["RIAA", "RIAA Latin", "RIAA", "RIAA Latin"]);
    for (const p of names) expect(p.nextElementSibling?.tagName).toBe("DL");
  });

  it("negative control: the markup the live site shipped fails the same check", () => {
    const methodology =
      '<dl class="methodology-module__hYQhjq__sourceList"><div class="methodology-module__hYQhjq__sourceRow"><div><dt class="methodology-module__hYQhjq__sourceArea">Certifications</dt><div class="methodology-module__hYQhjq__sourceTag">RIAA · BPI · SNEP · BVMI</div></div><dd class="methodology-module__hYQhjq__sourceDetail">Official certification databases of each market</dd></div></dl>';
    const board =
      '<dl class="compare-module__-ZWgpW__cbThList"><p class="compare-module__-ZWgpW__cbThProgram">RIAA</p><div class="compare-module__-ZWgpW__cbThRow"><dt>Single</dt><dd>Gold 500,000 · Platinum 1,000,000 · Diamond 10,000,000</dd></div></dl>';
    // The methodology row's group held a <div> around its <dt>; the board's
    // list held a <p>.
    expect(dlProblems(doc(methodology))).toHaveLength(1);
    expect(dlProblems(doc(board))).toHaveLength(1);
  });

  it("the second programme's divider moved onto its name, and the spacing is unchanged", () => {
    const css = rules(read("app/compare/compare.module.css")).filter((r) => r.media === null);
    const divider = css.find((r) => r.selector === ".cbThList + .cbThProgram");
    expect(divider).toBeTruthy();
    expect(decl(divider!.body, "border-top")).toBe("1px solid var(--rule-soft)");
    expect(css.find((r) => r.selector === ".cbThList + .cbThList")).toBeUndefined();
    // Name to its first row: the card's 10px gap + the name's own margin must
    // equal the shipped 8px list gap + 6px margin.
    const name = css.find((r) => r.selector === ".cbThProgram")!;
    const card = css.find((r) => r.selector === ".cbThresholds")!;
    const bottom = Number(decl(name.body, "margin")!.split(/\s+/)[2].replace("px", ""));
    expect(Number(decl(card.body, "gap")!.replace("px", "")) + bottom).toBe(8 + 6);
  });
});

/** A scroll box is reachable from a keyboard. */
const focusableRegion = (el: Element | null) =>
  !!el && el.getAttribute("tabindex") === "0" && el.getAttribute("role") === "region" && !!el.getAttribute("aria-label");

describe("E-04: every sideways-scrolling box can be reached from a keyboard", () => {
  it("/api's sample response and the phone's sample request", () => {
    const d = doc(renderToStaticMarkup(ApiPage()));
    expect(focusableRegion(d.querySelector("pre"))).toBe(true);
    const curl = [...d.querySelectorAll("code")].find((c) => c.textContent?.startsWith("curl ") && c.parentElement?.tagName === "DIV");
    expect(focusableRegion(curl?.parentElement ?? null)).toBe(true);
  });

  it("/methodology's threshold table", () => {
    const d = doc(renderToStaticMarkup(MethodologyPage()));
    const table = [...d.querySelectorAll("table")].find((t) => t.textContent?.includes("Single · Silver / Gold / Platinum / Diamond"));
    expect(focusableRegion(table?.parentElement ?? null)).toBe(true);
  });

  it("the /records/visualized scatter chart", () => {
    const d = doc(
      renderToStaticMarkup(
        <ScatterChart points={[]} xMax={1} yMax={1} xTicks={[]} yTicks={[]} xLabel="Tickets sold" yLabel="Revenue" ariaLabel="x" />,
      ),
    );
    const wrap = d.querySelector("svg")!.parentElement;
    expect(focusableRegion(wrap)).toBe(true);
    expect(wrap!.getAttribute("aria-label")).toBe("Scatter chart: Tickets sold against revenue");
  });

  it("negative control: the boxes the live site shipped", () => {
    for (const shipped of [
      '<pre class="api-module__JGHx8G__pre"></pre>',
      '<div class="methodology-module__hYQhjq__tableScroll"></div>',
      '<div class="ScatterChart-module__MBJF-G__wrap"></div>',
      '<div class="mobileApi-module__4SIWLq__codeBox"></div>',
    ]) {
      expect(focusableRegion(doc(shipped).body.firstElementChild)).toBe(false);
    }
  });
});

describe("E-05: the two navigation landmarks have different names", () => {
  it("the tab bar is not a second \"Primary\"", () => {
    const label = (html: string) => doc(html).querySelector("nav")?.getAttribute("aria-label");
    const top = label(renderToStaticMarkup(<Nav />));
    const bar = label(renderToStaticMarkup(<MobileTabBar />));
    expect(top).toBe("Primary");
    expect(bar).toBeTruthy();
    expect(bar).not.toBe(top);
  });

  it("negative control: the two landmarks the live site shipped", () => {
    const shipped = doc(
      '<nav class="navInner container" aria-label="Primary"></nav><nav class="mobileTabBar-module__hH78kW__bar mobileTabBarPresent" aria-label="Primary"></nav>',
    );
    const names = [...shipped.querySelectorAll("nav")].map((n) => n.getAttribute("aria-label"));
    expect(new Set(names).size).toBe(1);
  });
});

/** Heading levels in document order, and whether any step skips a level. */
const skipsLevel = (html: string) => {
  const levels = [...doc(html).querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => Number(h.tagName[1]));
  return levels.some((l, i) => i > 0 && l > levels[i - 1] + 1);
};

describe("E-06: no heading skips a level after the page's <h1>", () => {
  const h1 = "<h1>Latest Updates</h1>";

  it("the digest box on /updates", () => {
    expect(skipsLevel(h1 + renderToStaticMarkup(<SubscribeBox id="digest" entries="#entries" />))).toBe(false);
  });

  it("the digest box's confirmed ticket", () => {
    window.history.replaceState({}, "", "/updates?subscribed=1");
    const { container } = render(<SubscribeBox id="digest" entries="#entries" />);
    expect(container.textContent).toContain("You're in.");
    expect(skipsLevel(h1 + container.innerHTML)).toBe(false);
    window.history.replaceState({}, "", "/");
  });

  it("the phone FAQ and About screens", () => {
    const faq = renderToStaticMarkup(
      <MobileFaq
        total={1}
        chips={[{ id: "artist", label: "The artist", count: 1 }]}
        items={[{ group: "The artist", groupId: "artist", q: "Who is Burna Boy?", a: "A Nigerian singer." }]}
        source="Sources"
      />,
    );
    const about = renderToStaticMarkup(
      <MobileAbout facts={[]} timeline={[{ year: "2013", title: "Debut album — L.I.F.E", text: "Released." }]} />,
    );
    expect(skipsLevel(faq)).toBe(false);
    expect(skipsLevel(about)).toBe(false);
    expect(doc(faq).querySelector("h2")?.textContent).toBe("Who is Burna Boy?");
    expect(doc(about).querySelector("h2")?.textContent).toBe("Debut album — L.I.F.E");
  });

  it("negative control: the headings the live site shipped", () => {
    for (const [before, shipped] of [
      [h1, '<h3 class="SubscribeBox-module__yczs_q__head">The week&#x27;s numbers, in one email.</h3>'],
      ["<h1>FAQ</h1>", '<h3 class="mobileFaq-module__4NV0La__q">Who is Burna Boy?</h3>'],
      ["<h1>About</h1>", '<h3 class="mobileAbout-module__L5c8Sa__tTitle">Debut album — L.I.F.E</h3>'],
    ]) {
      expect(skipsLevel(before + shipped)).toBe(true);
    }
  });
});

describe("E-07: the phone board bar on a pair page sits inside <main>", () => {
  it("its link belongs to the main landmark", async () => {
    const { CompareView } = await import("../app/compare/page");
    const tree = await CompareView({ sp: { a: "burna-boy", b: "wizkid" }, path: "/compare/burna-boy-vs-wizkid", leaf: "Burna Boy vs Wizkid" });
    const d = doc(renderToStaticMarkup(tree));
    const bar = d.querySelector(".compareBoardBar");
    expect(bar).toBeTruthy();
    expect(bar!.closest("main")).toBeTruthy();
  });

  it("negative control: the live pair page closed <main> before the bar", () => {
    const d = doc(
      '<main id="content"></main><div class="compare-module__-ZWgpW__boardBar compareBoardBar"><a class="compare-module__-ZWgpW__boardBtn" href="/afrobeats"><span>The Afrobeats Board</span><span aria-hidden="true">↗</span></a></div>',
    );
    expect(d.querySelector(".compareBoardBar")!.closest("main")).toBeNull();
  });
});

describe("E-08: /dai-dai/es says Spanish before paint, and English again on the way out", () => {
  const runPrePaint = (path: string) => {
    window.history.replaceState({}, "", path);
    document.documentElement.lang = "en";
    new Function(PRE_PAINT_LANG)();
    const lang = document.documentElement.lang;
    window.history.replaceState({}, "", "/");
    return lang;
  };

  it("the root layout's pre-paint script sets es on the Spanish route and nowhere else", () => {
    expect(runPrePaint("/dai-dai/es")).toBe("es");
    expect(runPrePaint("/dai-dai/es/")).toBe("es");
    expect(runPrePaint("/dai-dai")).toBe("en");
    expect(runPrePaint("/dai-dai/espanol")).toBe("en");
    expect(runPrePaint("/")).toBe("en");
  });

  it("the layout's inline script carries it", () => {
    expect(read("app/layout.tsx")).toMatch(/__html:\s*\n\s*PRE_PAINT_LANG \+/);
  });

  it("leaving after a full load of the Spanish page sets English, not the es the script wrote", () => {
    document.documentElement.lang = "es"; // what the pre-paint script left
    const view = render(<SpanishDaiDaiLayout>{null}</SpanishDaiDaiLayout>);
    expect(document.documentElement.lang).toBe("es");
    view.unmount();
    expect(document.documentElement.lang).toBe("en");
  });

  it("negative control: the shipped cleanup restored whatever it found, which is now es", () => {
    // DocumentLangEs's effect as shipped, verbatim.
    const shippedEffect = () => {
      const root = document.documentElement;
      const previous = root.lang;
      root.lang = "es";
      return () => {
        root.lang = previous;
      };
    };
    document.documentElement.lang = "es";
    shippedEffect()();
    expect(document.documentElement.lang).toBe("es");
    document.documentElement.lang = "en";
  });
});

describe("E-09: each dynamic share card has its own alt", () => {
  type Mod = {
    generateStaticParams: () => Record<string, string>[];
    generateImageMetadata: (a: { params: Promise<Record<string, string>> }) => Promise<{ alt: string }[]> | { alt: string }[];
    alt: string;
  };
  const routes: [string, () => Promise<Mod>][] = [
    ["compare/[pair]", () => import("../app/compare/[pair]/opengraph-image") as unknown as Promise<Mod>],
    ["compare/in/[country]", () => import("../app/compare/in/[country]/opengraph-image") as unknown as Promise<Mod>],
    ["afrobeats/[artist]", () => import("../app/afrobeats/[artist]/opengraph-image") as unknown as Promise<Mod>],
    ["afrobeats/[artist]/charts", () => import("../app/afrobeats/[artist]/charts/opengraph-image") as unknown as Promise<Mod>],
    ["afrobeats/[artist]/live", () => import("../app/afrobeats/[artist]/live/opengraph-image") as unknown as Promise<Mod>],
    ["music/[song]", () => import("../app/music/[song]/opengraph-image") as unknown as Promise<Mod>],
    ["music/albums/[album]", () => import("../app/music/albums/[album]/opengraph-image") as unknown as Promise<Mod>],
    ["records/cars/[car]", () => import("../app/records/cars/[car]/opengraph-image") as unknown as Promise<Mod>],
  ];

  it.each(routes)("%s: no two pages share an alt, and none is the template's generic one", async (_, load) => {
    const mod = await load();
    const params = mod.generateStaticParams();
    const alts = await Promise.all(
      params.map(async (p) => (await mod.generateImageMetadata({ params: Promise.resolve(p) }))[0].alt),
    );
    expect(params.length).toBeGreaterThan(1);
    expect(new Set(alts).size).toBe(alts.length);
    expect(alts).not.toContain(mod.alt);
  });

  it("names the page's subject", async () => {
    const pair = (await routes[0][1]()).generateImageMetadata({ params: Promise.resolve({ pair: "burna-boy-vs-wizkid" }) });
    expect((await pair)[0].alt).toBe("Burna Boy vs Wizkid — certified units compared at each body's own threshold");
    const uk = await (await routes[1][1]()).generateImageMetadata({ params: Promise.resolve({ country: "united-kingdom" }) });
    // It names the body since the pricing follow-up (25 Sep 2026): the alt
    // used to end "priced at that body's own threshold" on every card, which
    // was wrong for Greece, Poland and Colombia (tests/compareCountryShareCopy).
    expect(uk[0].alt).toBe("Certified units in the United Kingdom — every Afrobeats plaque priced at BPI's own thresholds");
    expect(uk[0].alt).not.toBe("Certified units in the United Kingdom — every Afrobeats plaque priced at that body's own threshold");
  });

  it("names a country the way the board's sentences do: the article where it takes one", async () => {
    const mod = await routes[1][1]();
    const altFor = async (country: string) => (await mod.generateImageMetadata({ params: Promise.resolve({ country }) }))[0].alt;
    const names = (where: string) => new RegExp(`^Certified units in ${where} — `);
    // What E-09's first pass wrote on this branch (commit f74f4ada) before it
    // reached the live site: the bare name, no article.
    const firstPass = "Certified units in United Kingdom — every Afrobeats plaque priced at that body's own threshold";
    expect(firstPass).not.toMatch(names("the United Kingdom"));
    for (const [slug, where] of [
      ["united-kingdom", "the United Kingdom"],
      ["united-states", "the United States"],
      ["netherlands", "the Netherlands"],
      ["czech-republic", "the Czech Republic"],
      ["canada", "Canada"],
      ["greece", "Greece"],
    ]) expect(await altFor(slug), slug).toMatch(names(where));
    // Every card: the alt carries the board's own inSentence, whatever the country.
    for (const code of certCountryCodes()) {
      const board = priceCountry(code);
      expect(await altFor(countrySlug(code)), code).toContain(`Certified units in ${board.inSentence} — `);
    }
  });

  it("negative control: the one alt every pair shipped with", async () => {
    const mod = await routes[0][1]();
    expect(mod.alt).toBe("Two Afrobeats artists' certified units, compared at each body's own threshold");
  });
});

describe("E-11: the article pages say og:type article", () => {
  it.each([
    ["/dai-dai", daiDaiMeta, "2026-07-16"],
    ["/dai-dai/es", daiDaiEsMeta, "2026-07-16"],
    ["/analysis/spotify-unmerge", unmergeMeta, "2026-08-21"],
  ] as const)("%s", (path, meta, published) => {
    const og = meta.openGraph as { type?: string; publishedTime?: string };
    expect(og.type).toBe("article");
    expect(og.publishedTime).toBe(published);
    // The same date as the Article node's datePublished on the page.
    const src = read(path === "/dai-dai" ? "app/dai-dai/page.tsx" : path === "/dai-dai/es" ? "app/dai-dai/es/page.tsx" : "app/analysis/spotify-unmerge/page.tsx");
    // The two Dai Dai editions read one home for the date since 26 Sep 2026
    // (it was typed into each); the analysis page still types its own.
    if (path === "/analysis/spotify-unmerge") expect(src).toContain(`const PUBLISHED = "${published}";`);
    else {
      expect(src).toContain("const PUBLISHED = DAI_DAI_STORY_PUBLISHED;");
      expect(DAI_DAI_STORY_PUBLISHED).toBe(published);
    }
    expect(src).toMatch(/"@type": "Article",[\s\S]*?datePublished: PUBLISHED,/);
  });

  it("every other page stays website", () => {
    expect((methodologyMeta.openGraph as { type?: string }).type).toBe("website");
    const plain = pageMetadata({ title: "t", description: "d", path: "/x" });
    expect((plain.openGraph as { type?: string }).type).toBe("website");
  });

  // Paul ruled on 24 Sep 2026: twitter:creator is his own account on every
  // page, and never @BurnaBoyStats, a fan page he does not run. No
  // twitter:site — the site has no account of its own.
  it("carries twitter:creator @paulemmanuelng, and no twitter:site", () => {
    const plain = pageMetadata({ title: "t", description: "d", path: "/x" });
    for (const m of [plain, methodologyMeta, daiDaiMeta, daiDaiEsMeta, unmergeMeta]) {
      const tw = m.twitter as Record<string, unknown>;
      expect(tw.creator).toBe("@paulemmanuelng");
      expect(tw.site).toBeUndefined();
      expect(JSON.stringify(tw)).not.toContain("@BurnaBoyStats");
    }
    // The pages that set no metadata of their own inherit the root layout's.
    const layout = read("app/layout.tsx");
    expect(layout).toMatch(/twitter: \{[\s\S]*?creator: TWITTER_CREATOR,[\s\S]*?\}/);
    expect(read("app/search/page.tsx")).toContain("creator: TWITTER_CREATOR");
  });
});

describe("E-12: the halftime MusicEvent's attendance mode matches its location", () => {
  const eventOf = (html: string) =>
    [...doc(html).querySelectorAll('script[type="application/ld+json"]')]
      .map((s) => JSON.parse(s.textContent ?? "{}"))
      .find((j) => j["@type"] === "MusicEvent");
  const consistent = (e: { eventAttendanceMode: string; location: unknown }) => {
    const locs = ([] as { "@type": string }[]).concat(e.location as { "@type": string });
    const virtual = locs.some((l) => l["@type"] === "VirtualLocation");
    const physical = locs.some((l) => l["@type"] === "Place");
    if (e.eventAttendanceMode.endsWith("MixedEventAttendanceMode")) return virtual && physical;
    if (e.eventAttendanceMode.endsWith("OnlineEventAttendanceMode")) return virtual;
    return physical && !virtual;
  };

  it("offline, at a Place", () => {
    const e = eventOf(renderToStaticMarkup(<DaiDaiPage />));
    expect(e.eventAttendanceMode).toBe("https://schema.org/OfflineEventAttendanceMode");
    expect(consistent(e)).toBe(true);
  });

  it("negative control: the live page's Mixed mode with a single Place", () => {
    expect(
      consistent({
        eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
        location: { "@type": "Place", name: "MetLife Stadium" },
      }),
    ).toBe(false);
  });
});

describe("E-13: the not-found page is noindex and names no dead canonical", () => {
  it("robots noindex, follow; canonical cleared rather than /404 or the inherited /", () => {
    expect(notFoundMeta.robots).toEqual({ index: false, follow: true });
    expect(notFoundMeta.alternates).toEqual({ canonical: null });
  });

  it("negative control: the canonical the live 404s shipped", () => {
    const shipped = doc('<link rel="canonical" href="https://burnaboystats.com/404"/>');
    expect(shipped.querySelector('link[rel="canonical"]')?.getAttribute("href")).toMatch(/\/404$/);
    expect(read("app/not-found.tsx")).not.toContain('canonical: "/404"');
  });
});

describe("E-14: the tab bar follows the page content in source order", () => {
  const layout = read("app/layout.tsx").replace(/\{\/\*[\s\S]*?\*\/\}/g, "");
  const z = (file: string, sel: string) => {
    const r = rules(read(file)).find((x) => x.selector === sel && decl(x.body, "z-index"));
    return Number(decl(r!.body, "z-index"));
  };

  it("<MobileTabBar /> comes after {children}", () => {
    expect(layout.indexOf("<MobileTabBar />")).toBeGreaterThan(layout.indexOf("{children}"));
  });

  it("the fixed layers that covered it by source order now outrank it", () => {
    const bar = z("app/components/mobileTabBar.module.css", ".bar");
    expect(z("app/components/mobileNavSheet.module.css", ".root")).toBeGreaterThan(bar);
    expect(z("app/components/PeakMap.module.css", ".tip")).toBeGreaterThan(bar);
    expect(z("app/components/BirthdayCelebration.module.css", ".banner")).toBeGreaterThan(bar);
  });

  it("negative control: on the live /music the tab bar preceded <main>", () => {
    const shipped = '<nav class="mobileTabBar-module__hH78kW__bar mobileTabBarPresent" aria-label="Primary"></nav><main id="content"></main>';
    expect(shipped.indexOf("mobileTabBarPresent")).toBeLessThan(shipped.indexOf("<main"));
  });
});

describe("E-15: the search field has a name", () => {
  it('the input is name="q", the parameter /search reads', () => {
    const { container } = render(<SearchResults initialQuery="" stats={{}} />);
    const input = container.querySelector('input[type="search"]');
    expect(input?.getAttribute("name")).toBe("q");
  });

  it("negative control: the field Chrome flagged had neither id nor name", () => {
    const shipped = doc(
      '<input class="search-module__Wrf4ZW__input" type="search" placeholder="Songs, records, countries, awards, pages…" aria-label="Search query" autocomplete="off" value="">',
    ).querySelector("input")!;
    expect(shipped.id || shipped.getAttribute("name")).toBeFalsy();
  });
});
