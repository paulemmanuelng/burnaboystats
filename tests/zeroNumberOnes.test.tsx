import { renderToStaticMarkup } from "react-dom/server";

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

import ArtistChartsPage, { generateMetadata as chartsMetadata } from "../app/afrobeats/[artist]/charts/page";
import { generateMetadata as artistMetadata } from "../app/afrobeats/[artist]/page";
import { afrobeatsArtists, chartNo1s } from "../app/data/afrobeats";

/**
 * A board artist with no chart No. 1 has no No. 1 clause in the prose.
 *
 * Oxlade and Tiwa Savage (25 Sep 2026) were the first board artists without
 * one, and the templates printed the zero into the page title, the
 * descriptions and both layouts' intros. The review's line: "It is not wrong,
 * but it reads badly in search results." The clause is now left out when the
 * count is 0; the stat tiles still show the 0 as a figure. Artists with a No. 1
 * read exactly as before.
 *
 * The negative controls are the strings the branch built on 25 Sep 2026 for
 * Oxlade before this fix, when he stood at 34 entries in 11 territories (32 in
 * 9 since his Netherlands and Portugal rows were dropped the same day).
 */

const SHIPPED = {
  title: "Oxlade Chart History — 0 No. 1s & Chart Peaks",
  shareDescription: "34 entries, 11 territories, 0 No. 1s.",
  datasetTail: "including 0 No. 1 peaks.",
  lede: "34 entries across 11 territories, 0 of them at No. 1",
  artistDescription: "and 0 No. 1s — every figure read at source.",
};

const text = (h: string) =>
  h
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, " ");

const params = (slug: string) => ({ params: Promise.resolve({ artist: slug }) });
const zeroes = afrobeatsArtists.filter((a) => a.swept && a.charts.length > 0 && chartNo1s(a) === 0);
const withOnes = afrobeatsArtists.filter((a) => a.swept && a.charts.length > 0 && chartNo1s(a) > 0);

/** Every string a zero could leak into: metadata, share text, Dataset JSON-LD,
 *  both ledes, and the artist page's own description. */
async function surfaces(slug: string) {
  const cm = (await chartsMetadata(params(slug))) as any;
  const am = (await artistMetadata(params(slug))) as any;
  const html = renderToStaticMarkup(await ArtistChartsPage(params(slug)));
  return {
    title: String(cm.title),
    description: String(cm.description),
    shareDescription: String(cm.openGraph?.description ?? ""),
    page: text(html),
    artistDescription: String(am.description),
  };
}

describe("no '0 No. 1' clause for a board artist without a No. 1", () => {
  it("Oxlade and Tiwa Savage are the artists this is about", () => {
    expect(zeroes.map((a) => a.slug).sort()).toEqual(["oxlade", "tiwa-savage"]);
  });

  it.each(zeroes.map((a) => [a.slug, a.name]))("%s: no zero in any title, description or intro", async (slug, name) => {
    const s = await surfaces(slug);
    expect(s.title).toBe(`${name} Chart History & Chart Peaks`);
    const { page, ...meta } = s;
    for (const [k, v] of Object.entries(meta)) expect(v, k).not.toMatch(/\b0 (No\. 1|of them at No\. 1)/);
    // The page keeps "0 No. 1 peaks" in its stat tiles, a figure in a grid of
    // four; the prose around them (the Dataset description, both ledes) drops it.
    expect(page).not.toMatch(/\b0 of them at No\. 1/);
    expect(page).not.toContain("including 0");
    // The figures themselves are still there.
    expect(s.shareDescription).toMatch(/^\d+ entries, \d+ territor(y|ies)\.$/);
    expect(s.page).toMatch(/\d+ entries across \d+ territor(y|ies) — every peak read from/);
    expect(s.artistDescription).toMatch(/official chart entries — every figure read at source\.$/);
  });

  it("negative controls: the strings the branch built for Oxlade are gone", async () => {
    const s = await surfaces("oxlade");
    expect(s.title).not.toBe(SHIPPED.title);
    expect(s.shareDescription).not.toBe(SHIPPED.shareDescription);
    expect(s.page).not.toContain(SHIPPED.datasetTail);
    expect(s.page).not.toContain(SHIPPED.lede);
    expect(s.artistDescription).not.toContain(SHIPPED.artistDescription);
    // …and each control is caught by the pattern the test above uses, so a
    // regression to any of them fails there too.
    for (const v of Object.values(SHIPPED)) expect(v).toMatch(/\b0 (No\. 1|of them at No\. 1)/);
  });

  it("artists with a No. 1 are unchanged", async () => {
    expect(withOnes.length).toBeGreaterThanOrEqual(16);
    for (const a of withOnes) {
      const n = chartNo1s(a);
      const ones = n === 1 ? "1 No. 1" : `${n} No. 1s`;
      const s = await surfaces(a.slug);
      expect(s.title, a.slug).toBe(`${a.name} Chart History — ${ones} & Chart Peaks`);
      expect(s.shareDescription, a.slug).toMatch(new RegExp(`, ${ones.replace(/\./g, "\\.")}\\.$`));
      expect(s.page, a.slug).toContain(`, ${n} of them at No. 1`);
      expect(s.page, a.slug).toContain(`including ${n === 1 ? "1 No. 1 peak" : `${n} No. 1 peaks`}.`);
      expect(s.artistDescription, a.slug).toContain(` and ${ones} — every figure read at source.`);
    }
  });
});
