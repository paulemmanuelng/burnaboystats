import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
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

import { generateImageMetadata } from "../app/compare/in/[country]/opengraph-image";
import { generateMetadata } from "../app/compare/in/[country]/page";
import { buildSearchDocs } from "../app/lib/buildSearchDocs";
import { certCountryCodes, countrySlug, priceCountry, pricingPhrase } from "../app/lib/certCountry";

/**
 * /compare/in/<country>: what the share card and the search result say about
 * the board, country by country.
 *
 * Every card's alt ended "priced at that body's own threshold". Three boards
 * are not: Greece is priced at IFPI's last published level (June 2013), Polish
 * singles are converted from złoty at 2 zł each, and Colombia is listed and
 * not priced at all. The page's own description already said so, through
 * pricingPhrase(); the alt now says what the description says.
 *
 * And the titles a share or a search result shows named the market bare —
 * "Certified units in United Kingdom" — where the page, the alt and every
 * sentence on the board say "the United Kingdom" (inSentence).
 */

const altFor = async (code: string) =>
  (await generateImageMetadata({ params: Promise.resolve({ country: countrySlug(code) }) }))[0].alt;
const metaFor = async (code: string) => {
  const m = await generateMetadata({ params: Promise.resolve({ country: countrySlug(code) }) });
  return {
    og: (m.openGraph as { title?: string }).title,
    twitter: (m.twitter as { title?: string }).title,
  };
};

/** The alt every card shipped with, filled the way it was filled (inSentence,
 *  since E-09). The negative controls below run these real strings. */
const shippedAlt = (code: string) =>
  `Certified units in ${priceCountry(code).inSentence} — every Afrobeats plaque priced at that body's own threshold`;
/** The share and search title the pages shipped with: the bare name. */
const shippedTitle = (code: string) => `Certified units in ${priceCountry(code).name}`;

/** A check that the alt states THIS board's basis — failed by the shipped alt. */
function statesItsBasis(code: string, alt: string): string | null {
  const board = priceCountry(code);
  const priced = pricingPhrase(board);
  if (priced === null) {
    if (/priced at/.test(alt)) return `${code}: claims a price, and the board is not priced`;
    if (!alt.includes("not priced")) return `${code}: does not say it is not priced`;
    return null;
  }
  if (!alt.includes(`priced at ${priced}`)) return `${code}: does not say "priced at ${priced}"`;
  return null;
}

describe("the country share card's alt states that board's own pricing", () => {
  it("names each basis the page's description names", async () => {
    for (const code of certCountryCodes()) {
      const alt = await altFor(code);
      expect(statesItsBasis(code, alt), alt).toBeNull();
      expect(alt, code).not.toContain("that body's own threshold");
      expect(alt.startsWith(`Certified units in ${priceCountry(code).inSentence} — `), alt).toBe(true);
    }
  });

  it("says it outright for the three boards the generic line was wrong about", async () => {
    expect(await altFor("GR")).toBe(
      "Certified units in Greece — every Afrobeats plaque priced at IFPI's last published level (June 2013)",
    );
    expect(await altFor("PL")).toBe(
      "Certified units in Poland — every Afrobeats plaque priced at ZPAV's levels (singles at 2 zł each)",
    );
    const co = await altFor("CO");
    expect(co).not.toMatch(/priced at/);
    expect(co).toBe(
      `Certified units in Colombia — every Afrobeats plaque listed, not priced: ${priceCountry("CO").body} publishes no unit threshold`,
    );
    // And a body-priced board names its body.
    expect(await altFor("UK")).toBe(
      "Certified units in the United Kingdom — every Afrobeats plaque priced at BPI's own thresholds",
    );
  });

  it("covers every basis there is: body-priced, a fixed level, a converted level, and not priced", () => {
    const kinds = new Set(
      certCountryCodes().map((c) => {
        const t = priceCountry(c).thresholds;
        return pricingPhrase(priceCountry(c)) === null ? "none" : t?.pricedAt ? "level" : t?.plnPerSingle ? "converted" : "own";
      }),
    );
    expect([...kinds].sort()).toEqual(["converted", "level", "none", "own"]);
  });

  it("negative control: the shipped alt fails the check for Greece, Poland and Colombia", () => {
    for (const code of ["GR", "PL", "CO"]) expect(statesItsBasis(code, shippedAlt(code)), code).not.toBeNull();
    expect(shippedAlt("CO")).toBe(
      "Certified units in Colombia — every Afrobeats plaque priced at that body's own threshold",
    );
  });
});

describe("the share title and the search title say 'the United Kingdom', as the page does", () => {
  it("og:title and twitter:title use the in-sentence name", async () => {
    for (const code of certCountryCodes()) {
      const want = `Certified units in ${priceCountry(code).inSentence}`;
      const { og, twitter } = await metaFor(code);
      expect(og, code).toBe(want);
      expect(twitter, code).toBe(want);
    }
    expect((await metaFor("UK")).og).toBe("Certified units in the United Kingdom");
    expect((await metaFor("US")).twitter).toBe("Certified units in the United States");
    expect((await metaFor("CA")).og).toBe("Certified units in Canada");
  });

  it("the search index's country docs use it too, and the checked-in index carries it", () => {
    const docs = buildSearchDocs().filter((d) => d.path.startsWith("/compare/in/"));
    expect(docs.length).toBe(certCountryCodes().length);
    for (const code of certCountryCodes()) {
      const doc = docs.find((d) => d.path === `/compare/in/${countrySlug(code)}`);
      expect(doc?.title, code).toBe(`Certified units in ${priceCountry(code).inSentence}`);
    }
    const generated = readFileSync("app/lib/searchIndex.generated.ts", "utf8");
    expect(generated).toContain('"title": "Certified units in the United Kingdom"');
    for (const code of ["UK", "US", "NL", "CZ"]) expect(generated, code).not.toContain(`"title": "${shippedTitle(code)}"`);
  });

  it("negative control: the shipped titles are the bare-name strings the check rejects", () => {
    const takesThe = certCountryCodes().filter((c) => priceCountry(c).inSentence !== priceCountry(c).name);
    expect(takesThe.sort()).toEqual(["CZ", "NL", "UK", "US"]);
    for (const code of takesThe) {
      expect(shippedTitle(code)).not.toBe(`Certified units in ${priceCountry(code).inSentence}`);
    }
    expect(shippedTitle("UK")).toBe("Certified units in United Kingdom");
  });
});
