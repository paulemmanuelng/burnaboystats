import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
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

import ComparePage, { CompareView } from "../../app/compare/page";
import { artistBySlug, comparableArtists, nigeriaDefault, nigeriaDefaultSolo } from "../../app/lib/certUnits";

/**
 * V-compareA-03, the full-site debug of 5 Oct 2026. With one side filled,
 * /compare priced the artist with Nigeria OFF unless the URL said ng=1, while
 * every pair page applies the Nigeria default. Seyi Vibez, all 102 of whose
 * plaques are Nigerian, alone read "SEYI VIBEZ · AT LEAST 0 CERTIFIED UNITS ·
 * OUTSIDE NIGERIA · 0 OF 0 PLAQUES COUNTED" over "ARTIST TOTALS · 0 COUNTED ·
 * 0 COUNTRIES", where /compare/seyi-vibez-vs-davido reads 11,125,000 with
 * "Nigeria included by default — Seyi Vibez has no certifications outside
 * Nigeria." (live, headless Chrome, 1440 dark and 390 light). Tapping him
 * first on /compare lands there, and so does "Change ✕" on side B of any
 * seyi-vibez-vs-* pair page (/compare?a=seyi-vibez).
 */

const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();

const html = (el: React.ReactElement) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(el);
  return root;
};
const page = async (sp: Record<string, string>) => html(await ComparePage({ searchParams: Promise.resolve(sp) }));
const pair = async (a: string, b: string) => {
  const A = artistBySlug(a)!;
  const B = artistBySlug(b)!;
  return html(await CompareView({ sp: { a, b }, path: `/compare/${a}-vs-${b}`, leaf: `${A.name} vs ${B.name}`, pairTitle: `${A.name} vs ${B.name}` }));
};

function read(root: HTMLElement, side: "a" | "b") {
  const slot = root.querySelector(`#slot-${side}`)!;
  const head = root.querySelector("#result");
  const sw = [...root.querySelectorAll("a")].find((x) => norm(x.textContent).startsWith("Nigeria: "));
  const text = norm(root.textContent);
  return {
    meta: norm(slot.querySelectorAll("p")[1]?.textContent),
    cells: head ? [...head.children].map((c) => [...c.querySelectorAll("p")].map((p) => norm(p.textContent)).join(" ")) : [],
    why: text.match(/Nigeria included by default — [^.]*\./)?.[0] ?? null,
    switchLabel: sw ? norm(sw.textContent) : null,
    switchHref: sw?.getAttribute("href") ?? null,
    text,
  };
}

describe("one side filled takes the artist's Nigeria default", () => {
  it("Seyi Vibez alone reads what his pair pages read", async () => {
    const solo = read(await page({ a: "seyi-vibez" }), "a");
    const p = read(await pair("seyi-vibez", "davido"), "a");

    // The pair page is the reference, and it does include Nigeria.
    expect(p.cells[0]).toMatch(/^Seyi Vibez · at least 11,125,000 certified units · Nigeria included · 102 of 102 certs counted/);

    expect(solo.meta).toBe(p.meta);
    expect(solo.cells).toEqual([p.cells[0]]);
    expect(solo.why).toBe("Nigeria included by default — Seyi Vibez has no certifications outside Nigeria.");
    expect(solo.switchLabel).toBe("Nigeria: included · by default");
    expect(solo.switchHref).toBe("/compare?a=seyi-vibez&ng=0");
    // 28 since 7 Oct 2026: Turkey (label-issued Diamonds, owner's ruling).
    expect(solo.text).toContain("28 countries checked · Nigeria included");

    // Negative control: the strings the live page shipped.
    expect(solo.meta).not.toBe("artist totals · 0 counted · 0 countries");
    expect(solo.text).not.toContain("0 of 0 plaques counted");
    expect(solo.switchLabel).not.toBe("Nigeria: separated");
  });

  it("side B's Change ✕ on a seyi-vibez-vs-* page keeps his counts and figure", async () => {
    for (const other of ["davido", "asake", "ckay", "oxlade"]) {
      const pg = await pair("seyi-vibez", other);
      const clear = pg.querySelector('#slot-b a[aria-label="Choose a different artist"]')!.getAttribute("href");
      expect(clear).toBe("/compare?a=seyi-vibez");
      const landed = read(await page(Object.fromEntries(new URL(clear!, "https://x").searchParams)), "a");
      const before = read(pg, "a");
      expect(landed.meta).toBe(before.meta);
      expect(landed.cells).toEqual([before.cells[0]]);
      expect(landed.why).toBe(before.why);
    }
  });

  it("the switch still separates Nigeria, and turns back to the default", async () => {
    const off = read(await page({ a: "seyi-vibez", ng: "0" }), "a");
    expect(off.switchLabel).toBe("Nigeria: separated");
    expect(off.switchHref).toBe("/compare?a=seyi-vibez");
    expect(off.why).toBeNull();
    expect(off.cells[0]).toMatch(/at least 0 certified units · outside Nigeria/);

    const on = read(await page({ a: "seyi-vibez", ng: "1" }), "a");
    expect(on.switchLabel).toBe("Nigeria: included");
    expect(on.why).toBeNull();
  });

  it("with featured appearances off, the lead-credit count decides and says so", async () => {
    const solo = read(await page({ a: "seyi-vibez", feat: "0" }), "a");
    expect(solo.why).toBe("Nigeria included by default — Seyi Vibez has no certifications outside Nigeria as lead artist.");
    expect(solo.switchHref).toBe("/compare?a=seyi-vibez&feat=0&ng=0");
  });

  it("an artist with plaques outside Nigeria is unchanged", async () => {
    // Asake is a home-market artist (most plaques Nigerian) with plaques
    // abroad: the pair clause about BOTH sides has no second side here.
    for (const slug of ["asake", "burna-boy"]) {
      const solo = read(await page({ a: slug }), "a");
      expect(solo.switchLabel).toBe("Nigeria: separated");
      expect(solo.switchHref).toBe(`/compare?a=${slug}&ng=1`);
      expect(solo.why).toBeNull();
      expect(solo.cells[0]).toMatch(/certified units · outside Nigeria · /);
    }
  });

  it("the same artist twice: the slots carry the counts, and only the refusal speaks", async () => {
    const root = await page({ a: "seyi-vibez", b: "seyi-vibez" });
    const r = read(root, "a");
    expect(r.meta).toBe(read(await pair("seyi-vibez", "davido"), "a").meta);
    expect(read(root, "b").meta).toBe(r.meta);
    expect(r.why).toBeNull();
    expect(r.text).toContain("That is Seyi Vibez on both sides.");
  });

  it("song mode: one song alone is priced as it is with the other artist chosen", async () => {
    const seyi = artistBySlug("seyi-vibez")!;
    const title = seyi.releases.find((x) => x.format === "single")!.title;
    const alone = read(await page({ mode: "songs", a: "seyi-vibez", sa: title }), "a");
    const withB = read(await page({ mode: "songs", a: "seyi-vibez", b: "davido", sa: title }), "a");
    expect(withB.cells).toHaveLength(1);
    expect(withB.cells[0]).not.toMatch(/at least 0 certified/);
    expect(alone.cells).toEqual(withB.cells);
  });

  it("the solo default fires exactly when every pairing of the artist fires", () => {
    for (const feat of [true, false]) {
      for (const x of comparableArtists) {
        const others = comparableArtists.filter((y) => y.slug !== x.slug);
        const every = others.every((y) => nigeriaDefault(x, y, feat).on && nigeriaDefault(y, x, feat).on);
        expect([x.slug, feat, nigeriaDefaultSolo(x, feat).on]).toEqual([x.slug, feat, every]);
      }
    }
  });
});
