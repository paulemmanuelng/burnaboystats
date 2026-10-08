import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Home, { metadata } from "../app/page";
import AboutPage from "../app/about/page";
import { allItems } from "../app/data/certifications";
import { allChartItems } from "../app/data/charts";
import { allNoms, ceremonies } from "../app/data/awards";
import {
  BURNA_BOY_ID,
  BURNA_BOY_SAME_AS,
  BURNA_BOY_PERSON,
  BURNA_BOY_REAL_NAME,
  BURNA_BOY_BIRTH_DATE,
  CANONICAL_ORIGIN,
} from "../app/lib/seo";
import { homeTitle, homeDescription, TITLE_MAX, DESCRIPTION_MAX, type HomeFigures } from "../app/lib/searchSnippets";

/**
 * The home page as the site's Burna Boy page (8 Oct 2026).
 *
 * For the search "burna boy" Search Console showed /music, /faq and /about,
 * and the home page six times in three months at position 12: it set no
 * metadata, so it carried the root layout's "Burna Boy Stats — …" title, and
 * its only JSON-LD was the layout's WebSite. These pin the three things that
 * changed: a title that leads with his name and counts what the site holds, a
 * description that says who he is, and a WebPage whose main entity is him.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const stripComments = (src: string) => src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "");

// The figures, recounted from the rows rather than read off the constants the
// page passes (a reconcile built from its own constants balances for any value).
const live: HomeFigures = {
  certifications: allItems.reduce((n, r) => n + r.certs.length, 0),
  numberOnes: allChartItems.reduce((n, r) => n + r.entries.filter((e) => e.peak === 1).length, 0),
  awardWins: allNoms.filter((n) => n.won).length,
  grammyWins: ceremonies.find((c) => c.name === "Grammy Awards")!.noms.filter((n) => n.won).length,
  realName: "Damini Ebunoluwa Ogulu",
};

const title = String(metadata.title);
const description = String(metadata.description);

/** Leads with the name, not the site's brand, and counts the certifications. */
const leadsWithHimAndCounts = (t: string) => /^Burna Boy — /.test(t) && t.includes(`${live.certifications} Certifications`);
/** Says who he is before what the site holds. */
const saysWhoHeIs = (d: string) => /^Burna Boy is the [\w -]*Nigerian singer born Damini Ebunoluwa Ogulu\./.test(d);

// The <title> and description the home page inherited from the root layout
// until 8 Oct 2026, verbatim (app/layout.tsx).
const SHIPPED_TITLE = "Burna Boy Stats — Certifications, Charts, Awards & Records";
const SHIPPED_DESCRIPTION =
  "Every Burna Boy certification, chart peak, award and tour record — fact-checked and always current. The unofficial stats home of the African Giant.";

describe("the home page's title and description", () => {
  it("are the builders' reading of the live figures", () => {
    expect(title).toBe(homeTitle(live));
    expect(description).toBe(homeDescription(live));
  });

  it("lead with his name, count what the site holds, and say who he is", () => {
    expect(leadsWithHimAndCounts(title)).toBe(true);
    expect(title).toContain(`${live.numberOnes} No. 1s`);
    expect(saysWhoHeIs(description)).toBe(true);
    expect(live.grammyWins, "the premise of “Grammy-winning”").toBeGreaterThan(0);
    expect(description).toContain("Grammy-winning");
    expect(description).toContain(`${live.certifications} certifications`);
  });

  it("fit Google's limits", () => {
    expect(title.length).toBeLessThanOrEqual(TITLE_MAX);
    expect(description.length).toBeLessThanOrEqual(DESCRIPTION_MAX);
  });

  it("move with the data: another certification, another No. 1 or no Grammy changes the line", () => {
    const more = homeTitle({ ...live, certifications: live.certifications + 1 });
    expect(more).not.toBe(title);
    expect(more).toContain(`${live.certifications + 1} Certifications`);
    expect(homeTitle({ ...live, numberOnes: live.numberOnes + 1 })).toContain(`${live.numberOnes + 1} No. 1s`);
    expect(homeDescription({ ...live, grammyWins: 0 })).not.toContain("Grammy");
    // A count that grows a digit shortens the line rather than overrunning it.
    expect(homeTitle({ ...live, certifications: 12345, awardWins: 12345 }).length).toBeLessThanOrEqual(TITLE_MAX);
    expect(homeDescription({ ...live, certifications: 12345, numberOnes: 12345 }).length).toBeLessThanOrEqual(DESCRIPTION_MAX);
  });

  it("types no figure: app/page.tsx builds both from the data", () => {
    const src = stripComments(read("app/page.tsx"));
    const block = src.slice(src.indexOf("const homeFigures"), src.indexOf("export const metadata"));
    expect(block.length).toBeGreaterThan(0);
    expect(block).not.toMatch(/\d/);
    expect(src).not.toMatch(/title:\s*["`]/);
  });

  it("negative control: the inherited title and description fail both checks", () => {
    expect(leadsWithHimAndCounts(SHIPPED_TITLE)).toBe(false);
    expect(saysWhoHeIs(SHIPPED_DESCRIPTION)).toBe(false);
  });

  it("the share card says the same as the search result", () => {
    expect(metadata.openGraph?.title).toBe(title);
    expect(metadata.openGraph?.description).toBe(description);
    expect(metadata.alternates?.canonical).toBe("/");
  });
});

type Node = Record<string, unknown> & { "@type"?: string | string[] };
const nodesIn = (html: string): Node[] => {
  const host = document.createElement("div");
  host.innerHTML = html;
  return [...host.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent ?? "{}"));
};
/** The @id a page's WebPage names as its main entity, or null. */
const mainEntityOf = (nodes: Node[]) => {
  const page = nodes.find((n) => n["@type"] === "WebPage");
  return ((page?.mainEntity as Node | undefined)?.["@id"] as string | undefined) ?? null;
};

describe("the home page names him as its main entity", () => {
  const nodes = nodesIn(renderToStaticMarkup(<Home />));
  const page = nodes.find((n) => n["@type"] === "WebPage")!;

  it("one WebPage node, at the home URL, with the page's own title and description", () => {
    expect(nodes.filter((n) => n["@type"] === "WebPage")).toHaveLength(1);
    expect(page.url).toBe(CANONICAL_ORIGIN);
    expect(page.name).toBe(title);
    expect(page.description).toBe(description);
  });

  it("mainEntity and about are the site's one Burna Boy entity, by @id", () => {
    expect(mainEntityOf(nodes)).toBe(BURNA_BOY_ID);
    expect((page.about as Node)["@id"]).toBe(BURNA_BOY_ID);
  });

  it("the entity is the Person: real name, birth date and the site-wide profiles", () => {
    const who = page.mainEntity as Node;
    expect(who["@type"]).toBe("Person");
    expect(who.name).toBe("Burna Boy");
    expect(who.alternateName).toBe(BURNA_BOY_REAL_NAME);
    expect(who.birthDate).toBe(BURNA_BOY_BIRTH_DATE);
    expect(who.sameAs).toEqual(BURNA_BOY_SAME_AS);
    expect(BURNA_BOY_SAME_AS).toContain("https://www.wikidata.org/wiki/Q17305712");
  });

  it("/about prints the same Person, with its own address", () => {
    const person = nodesIn(renderToStaticMarkup(<AboutPage />)).find((n) => n["@type"] === "Person")!;
    expect(person).toEqual({ "@context": "https://schema.org", ...BURNA_BOY_PERSON, url: `${CANONICAL_ORIGIN}/about` });
    expect(person.birthDate).toBe("1991-07-02");
  });

  it("negative control: the home page's markup as it shipped had no WebPage to name him", () => {
    // The two nodes the home page carried until 8 Oct 2026: the root layout's
    // WebSite and Organization, as app/layout.tsx wrote them (sameAs and
    // descriptions trimmed — neither has a mainEntity).
    const SHIPPED = [
      { "@context": "https://schema.org", "@type": "WebSite", name: "Burna Boy Stats", url: "https://burnaboystats.com", about: { "@type": "MusicGroup", "@id": BURNA_BOY_ID, name: "Burna Boy" } },
      { "@context": "https://schema.org", "@type": "Organization", name: "Burna Boy Stats", url: "https://burnaboystats.com" },
    ];
    expect(mainEntityOf(SHIPPED)).toBeNull();
  });
});
