import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/afrobeats",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { headlineAward, isLabelPlaque } from "../app/lib/headlineAward";
import { awardRank } from "../app/lib/awardName";
import { afrobeatsArtists, artistBySlug, countryMeta, plaqueLabel, sweptArtists, topAward } from "../app/data/afrobeats";
import { allItems, COUNTRIES } from "../app/data/certifications";
import { plaqueSource } from "../app/lib/dataDownloads";
import { artistFaqs } from "../app/lib/boardFaqs";
import AfrobeatsPage from "../app/afrobeats/page";
import ArtistPage, { generateMetadata as artistMetadata } from "../app/afrobeats/[artist]/page";

/**
 * Owner's ruling, 7 Oct 2026 — "yes keep brazil": a LABEL-ISSUED plaque never
 * counts as an artist's highest award. PR #435 counted Epic Records' TYLA
 * plaque ("Water" 🇹🇷 3× Diamond), and because awards rank by tier, then
 * multiplier, that label's own award became Tyla's headline on the hub tile,
 * the meta description, the share card and the FAQ, over Pro-Música Brasil's
 * register 2× Diamond. The rule lives in app/lib/headlineAward.ts; the label
 * plaques still count everywhere else.
 */

const plaque = (level: string, x?: number, extra: { body?: string; source?: "label" | "announcement"; c?: string } = {}) => ({
  c: extra.c ?? "XX",
  level,
  ...(x ? { x } : {}),
  ...extra,
});

describe("the rule: a label's own plaque never wins the headline pick", () => {
  it("a label plaque loses to a register plaque of any tier, however high it ranks", () => {
    const label = plaque("Diamond", 9, { body: "Some Label", source: "label" });
    const register = plaque("Silver");
    expect(awardRank(label)).toBeGreaterThan(awardRank(register));
    expect(headlineAward([label, register])).toBe(register);
    expect(headlineAward([register, label])).toBe(register);
  });

  it("Tyla's own pair, in either order: Brazil's 2× Diamond over Epic Records' 3×", () => {
    const tr = plaque("Diamond", 3, { c: "TR", body: "Epic Records", source: "label" });
    const br = plaque("Diamond", 2, { c: "BR" });
    expect(headlineAward([tr, br])).toBe(br);
    expect(headlineAward([br, tr])).toBe(br);
  });

  it("only label plaques: no headline at all (the hub's dashed slot), never a label's", () => {
    expect(headlineAward([plaque("Gold", 1, { body: "Sony Music Africa", source: "label" })])).toBeNull();
    expect(headlineAward([])).toBeNull();
  });

  it("reads a label the way the data downloads do: `source`, or an issuer body that is no programme", () => {
    // `source: "label"` — even where the issuer IS the country's listed body
    // (Turkey: COUNTRIES.TR names Sony Music Türkiye, Dai Dai's issuer).
    expect(isLabelPlaque({ body: "Sony Music Türkiye", source: "label" }, "Sony Music Türkiye")).toBe(true);
    // Burna Boy's convention: an issuer `body` with no `source` (Dai Dai 🇨🇴).
    expect(isLabelPlaque({ body: "Sony Music" }, "Pro Música Colombia")).toBe(true);
    // A separately priced PROGRAMME is the body's own scheme, not a label.
    expect(isLabelPlaque({ body: "RIAA Latin" }, "RIAA")).toBe(false);
    // The certifying body's own announcement is not a label's plaque.
    expect(isLabelPlaque({ source: "announcement" }, "SNEP")).toBe(false);
    expect(isLabelPlaque({}, "SNEP")).toBe(false);
    // And a body-less test with no country body is a register row.
    expect(isLabelPlaque({ body: "Sony Music" })).toBe(false);
    const latin = plaque("Platinum", 16, { body: "RIAA Latin" });
    expect(headlineAward([plaque("Gold"), latin], () => "RIAA")).toBe(latin);
    const sony = plaque("Diamond", 1, { body: "Sony Music" });
    const gold = plaque("Gold");
    expect(headlineAward([sony, gold], () => "Pro Música Colombia")).toBe(gold);
  });

  it("agrees with plaqueSource on every plaque the site holds, Burna Boy's and the board's", () => {
    const disagree: string[] = [];
    for (const r of allItems)
      for (const c of r.certs)
        if (isLabelPlaque(c, COUNTRIES[c.c].body) !== (plaqueSource(c, COUNTRIES[c.c]) === "label"))
          disagree.push(`Burna Boy ${r.title} ${c.c}`);
    for (const a of afrobeatsArtists)
      for (const r of a.releases)
        for (const c of r.certs)
          if (isLabelPlaque(c, countryMeta(c.c).body) !== (plaqueSource(c, countryMeta(c.c)) === "label"))
            disagree.push(`${a.name} ${r.title} ${c.c}`);
    expect(disagree).toEqual([]);
  });

  it("no board artist's headline is a label's plaque, and only Tyla's moved", () => {
    for (const a of sweptArtists) {
      const top = topAward(a)!;
      expect(top, a.slug).toBeTruthy();
      expect(isLabelPlaque(top, countryMeta(top.c).body), a.slug).toBe(false);
    }
    // Every other artist who holds a label plaque keeps the headline the plain
    // tier-then-multiplier pick gave: Tems's only one is "No.1" 🇿🇦 Gold.
    const tems = artistBySlug("tems")!;
    expect(plaqueLabel(topAward(tems)!)).toBe("Diamond");
    expect(topAward(tems)!.c).toBe("US");
  });

  it("Burna Boy's headline is a register Diamond, and Dai Dai's Turkish label Diamond is not it", () => {
    const all = allItems.flatMap((r) => r.certs);
    const top = headlineAward(all, (c) => COUNTRIES[c.c]?.body)!;
    expect(top.level).toBe("Diamond");
    expect(top.c).toBe("FR");
    // Same rank as before the rule: his Turkish Diamond never outranked his
    // French ones (all 1×), so nothing on his pages moves.
    const unruled = all.reduce((b, c) => (awardRank(c) > awardRank(b) ? c : b));
    expect(awardRank(top)).toBe(awardRank(unruled));
  });
});

describe("Tyla's headline, on every surface that prints it", () => {
  const tyla = artistBySlug("tyla")!;
  // Each Tyla link's markup, on both layouts of the hub (desktop tile and the
  // phone's row), up to the link's close.
  const tylaLinks = (html: string) =>
    [...html.matchAll(/<a href="\/afrobeats\/tyla"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => m[1].replace(/<[^>]+>/g, " "));

  it("hub tile badge (desktop and phone): 2× Diamond, not Epic Records' 3× — fails on PR #435's main", () => {
    const html = renderToStaticMarkup(AfrobeatsPage());
    const links = tylaLinks(html).filter((t) => /Diamond/.test(t));
    expect(links.length).toBeGreaterThanOrEqual(2);
    for (const t of links) {
      expect(t).toContain("2× Diamond");
      expect(t).not.toContain("3× Diamond");
    }
    expect(html).not.toContain("3× Diamond · Epic Records");
  }, 60_000);

  it("meta description: topped by 2× Diamond", async () => {
    const meta = await artistMetadata({ params: Promise.resolve({ artist: "tyla" }) });
    expect(String(meta.description)).toContain("topped by 2× Diamond,");
    expect(String(meta.description)).not.toContain("3× Diamond");
  }, 60_000);

  it("FAQ answer and its FAQPage node: “Water” (2× Diamond)", async () => {
    expect(artistFaqs(tyla)[0].a).toContain("The most decorated is “Water” (2× Diamond).");
    const html = renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "tyla" }) }));
    const nodes = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]) as Record<string, unknown>);
    const faq = nodes.find((n) => n["@type"] === "FAQPage") as { mainEntity: { acceptedAnswer: { text: string } }[] } | undefined;
    expect(faq).toBeTruthy();
    expect(faq!.mainEntity[0].acceptedAnswer.text).toContain("“Water” (2× Diamond)");
    expect(JSON.stringify(faq)).not.toContain("3× Diamond");
  }, 60_000);
});
