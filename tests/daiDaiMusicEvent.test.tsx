import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/dai-dai",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import DaiDaiPage, { metadata as enMeta } from "../app/dai-dai/page";
import DaiDaiPageES, { metadata as esMeta } from "../app/dai-dai/es/page";
import { daiDaiOgId, DAI_DAI_OG_PILL, ogStats } from "../app/dai-dai/ogId";
import { daiDaiEsOgId, esCard } from "../app/dai-dai/es/ogId";
import { alt as enCardAlt } from "../app/dai-dai/opengraph-image";
import { daiDaiNumberOnes } from "../app/data/charts";
import { DAI_DAI_HALFTIME_DATE, DAI_DAI_RELEASE_DATE, DAI_DAI_SPOTIFY_NO1_DAYS, DAI_DAI_STORY_PUBLISHED } from "../app/data/daiDai";

/**
 * The SEO follow-ups of 26 Sep 2026.
 *
 * A. /dai-dai/es emitted no MusicEvent while /dai-dai did. It now carries the
 *    same event, in Spanish, matching what the page shows.
 * B. Every figure typed into these pages' metadata, share-card text or
 *    JSON-LD reads its data constant.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
type Node = Record<string, unknown>;
const nodesOf = (html: string): Node[] =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]) as Node);
const eventOf = (html: string) => nodesOf(html).find((n) => n["@type"] === "MusicEvent");

const EN_HTML = renderToStaticMarkup(<DaiDaiPage />);
const ES_HTML = renderToStaticMarkup(<DaiDaiPageES />);
const visible = (html: string) => {
  const host = document.createElement("div");
  host.innerHTML = html.replace(/<script[\s\S]*?<\/script>/g, "");
  return (host.textContent ?? "").replace(/\s+/g, " ");
};

describe("A. both editions carry the halftime MusicEvent", () => {
  const en = eventOf(EN_HTML)!;
  const es = eventOf(ES_HTML)!;

  it("the Spanish page has one, with the same fields as the English", () => {
    expect(en, "English MusicEvent").toBeDefined();
    expect(es, "Spanish MusicEvent").toBeDefined();
    expect(Object.keys(es).sort()).toEqual(Object.keys(en).sort());
  });

  it("the same facts: date, stadium, lineup, producer, recording, and the date-bounded free offer", () => {
    for (const k of ["startDate", "endDate", "eventStatus", "eventAttendanceMode", "location", "performer", "organizer", "about"]) {
      expect(es[k], k).toEqual(en[k]);
    }
    const { url: enUrl, ...enOffer } = en.offers as Node;
    const { url: esUrl, ...esOffer } = es.offers as Node;
    expect(esOffer).toEqual(enOffer);
    expect(enUrl).toBe("https://burnaboystats.com/dai-dai");
    expect(esUrl).toBe("https://burnaboystats.com/dai-dai/es");
  });

  it("in Spanish, at its own URL, citing its own share card", () => {
    expect(es.name).toBe("Show de medio tiempo de la Final del Mundial de la FIFA 2026");
    expect(es.name).not.toBe(en.name);
    expect(es.description).not.toBe(en.description);
    expect(es.url).toBe("https://burnaboystats.com/dai-dai/es");
    expect(es.image).toBe(`https://burnaboystats.com/dai-dai/es/opengraph-image/${daiDaiEsOgId}`);
    expect(en.image).toBe(`https://burnaboystats.com/dai-dai/opengraph-image/${daiDaiOgId}`);
  });

  it("matches what the Spanish page shows: every performer, the stadium, the producer, the date", () => {
    const shown = visible(ES_HTML);
    for (const p of es.performer as Node[]) expect(shown, String(p.name)).toContain(String(p.name));
    expect(shown).toContain("MetLife Stadium");
    expect(shown).toContain("Global Citizen");
    expect(shown).toContain("19 de julio de 2026");
    expect(es.startDate).toBe(DAI_DAI_HALFTIME_DATE);
  });

  it("negative control: the Spanish page as shipped had no MusicEvent", () => {
    // The ES JSON-LD types /dai-dai/es served before this change.
    const shipped = '<script type="application/ld+json">{"@type":"Article"}</script><script type="application/ld+json">{"@type":"FAQPage"}</script>';
    expect(eventOf(shipped)).toBeUndefined();
  });
});

describe("B. figures in metadata, share cards and JSON-LD read their constants", () => {
  const EN = read("app/dai-dai/page.tsx");
  const ES = read("app/dai-dai/es/page.tsx");
  const OG = read("app/dai-dai/opengraph-image.tsx");
  const OG_ID = read("app/dai-dai/ogId.ts");
  const ES_OG = read("app/dai-dai/es/ogId.ts");

  it("the descriptions name the days at No. 1 and the No. 1 countries from data, and stay within 160", () => {
    for (const m of [enMeta, esMeta]) {
      const d = String(m.description);
      expect(d).toContain(String(DAI_DAI_SPOTIFY_NO1_DAYS));
      expect(d).toContain(String(daiDaiNumberOnes));
      expect(d.length).toBeLessThanOrEqual(160);
      expect(String((m.title as { absolute?: string })?.absolute ?? m.title).length).toBeLessThanOrEqual(60);
    }
    expect(EN).toContain("the World Cup anthem: ${DAI_DAI_SPOTIFY_NO1_DAYS} days as Earth's");
    expect(ES).toContain("Burna Boy: ${DAI_DAI_SPOTIFY_NO1_DAYS} días como");
  });

  it("the JSON-LD dates are the constants' values, and no page types one", () => {
    for (const html of [EN_HTML, ES_HTML]) {
      const nodes = nodesOf(html);
      const article = nodes.find((n) => n["@type"] === "Article")!;
      expect(article.datePublished).toBe(DAI_DAI_STORY_PUBLISHED);
      expect((article.about as Node).datePublished).toBe(DAI_DAI_RELEASE_DATE.slice(0, 7));
      const ev = eventOf(html)!;
      expect([ev.startDate, ev.endDate]).toEqual([DAI_DAI_HALFTIME_DATE, DAI_DAI_HALFTIME_DATE]);
      expect((ev.offers as Node).validFrom).toBe(DAI_DAI_RELEASE_DATE);
      expect((ev.offers as Node).validThrough).toBe(DAI_DAI_HALFTIME_DATE);
    }
    const typedDate = /(?:datePublished|startDate|endDate|validFrom|validThrough|PUBLISHED =)\s*:?=?\s*"\d{4}-\d{2}(?:-\d{2})?"/;
    // Negative control: the lines as they shipped.
    for (const line of ['startDate: "2026-07-19",', 'datePublished: "2026-05",', 'validFrom: "2026-05-15",', 'const PUBLISHED = "2026-07-16";']) {
      expect(typedDate.test(line), line).toBe(true);
    }
    expect(EN).not.toMatch(typedDate);
    expect(ES).not.toMatch(typedDate);
  });

  it("the FAQ answers (FAQPage data) read the halftime date, the UK peak and the plaque multiples", () => {
    const faqOf = (html: string) => JSON.stringify(nodesOf(html).find((n) => n["@type"] === "FAQPage"));
    expect(faqOf(EN_HTML)).toContain("19 July 2026");
    expect(faqOf(EN_HTML)).toContain("peaked at No. 2 on the UK Official Singles Chart");
    expect(faqOf(EN_HTML)).toContain("2× Platinum in Canada from Music Canada and 6× Platino in the US");
    expect(faqOf(ES_HTML)).toContain("19 de julio de 2026");
    expect(faqOf(ES_HTML)).toContain("doble platino en Canadá por Music Canada, séxtuple platino (latino)");
    const typed = /(?:on|el) 19 (?:July|de julio de) 2026|peaked at No\. \d+ on the UK|alcanzó el número \d+ de la lista oficial de sencillos del Reino Unido|\d× Platinum in Canada|\d× Platino in the US|doble platino en Canadá|séxtuple platino/;
    const faqSrc = (src: string) => src.slice(src.indexOf("const faqs"), src.indexOf("];", src.indexOf("const faqs")));
    expect(faqSrc(EN)).not.toMatch(typed);
    expect(faqSrc(ES)).not.toMatch(typed);
    // Negative control: an answer as it shipped.
    expect(typed.test("“Dai Dai” peaked at No. 2 on the UK Official Singles Chart")).toBe(true);
  });

  it("the share cards' figures read their constants, and print what they always printed", () => {
    expect(DAI_DAI_OG_PILL).toBe("Performed · World Cup Final · 19 July");
    expect(enCardAlt).toContain("halftime show on 19 July");
    expect(ogStats[0].v).toBe("No. 1");
    expect(esCard.sub).toBe(`El himno de Shakira y Burna Boy — ${DAI_DAI_SPOTIFY_NO1_DAYS} días como la canción más escuchada del mundo`);
    // Code only: the comments quote the old pill on purpose.
    const code = (src: string) => src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    const typed = /19 July"|on 19 July[.;"]|— \d+ días como|v: "No\. \d/;
    for (const line of ['export const DAI_DAI_OG_PILL = "Performed · World Cup Final · 19 July";', '  sub: "El himno de Shakira y Burna Boy — 37 días como la canción más escuchada del mundo",', '  { v: "No. 1", l: "Global 200" },']) {
      expect(typed.test(line), line).toBe(true);
    }
    for (const [name, src] of [["opengraph-image.tsx", OG], ["ogId.ts", OG_ID], ["es/ogId.ts", ES_OG]] as const) {
      expect(code(src), name).not.toMatch(typed);
    }
  });
});
