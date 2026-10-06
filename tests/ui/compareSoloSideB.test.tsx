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

/**
 * V-compareA-02, the full-site debug of 5 Oct 2026. One filled side is one
 * filled side, whichever slot it sits in. With only side A chosen, /compare
 * printed the slot meta "ARTIST TOTALS · 88 COUNTED · 20 COUNTRIES" and the
 * solo headline "AT LEAST 42,290,770"; with only side B chosen the same artist
 * printed "ARTIST TOTALS" and no figure at all (live, headless Chrome, 1440
 * dark and 390 light: /compare?b=davido, /compare?b=wizkid&feat=0&ng=1). Every
 * pair page's side-A "Change ✕" lands in that state: /compare/burna-boy-vs-wizkid
 * → /compare?b=wizkid. The page priced side A only (soloPriced off `a`, the
 * head gated on Boolean(a)).
 */

const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();

async function page(sp: Record<string, string>) {
  const html = renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) }));
  const root = document.createElement("div");
  root.innerHTML = html;
  return root;
}

/** The filled slot's title and meta line, and the head-to-head's cells. */
function read(root: HTMLElement, side: "a" | "b") {
  const slot = root.querySelector(`#slot-${side}`)!;
  const ps = slot.querySelectorAll("p");
  const head = root.querySelector("#result");
  return {
    title: norm(ps[0]?.textContent),
    meta: norm(ps[1]?.textContent),
    cells: head ? [...head.children].map((c) => [...c.querySelectorAll("p")].map((p) => norm(p.textContent)).join(" ")) : [],
    hint: norm(root.textContent).includes("The country-by-country table appears when both sides are filled."),
  };
}

describe("only side B filled reads the same as only side A filled", () => {
  it.each([
    ["davido", {}],
    ["wizkid", { feat: "0", ng: "1" }],
    ["seyi-vibez", { ng: "1" }],
    ["burna-boy", { feat: "0" }],
  ] as const)("%s %o", async (slug, extra) => {
    const onA = read(await page({ ...extra, a: slug }), "a");
    const onB = read(await page({ ...extra, b: slug }), "b");

    // Side A is the reference, and it does carry the counts and a figure —
    // otherwise the comparison below is vacuous.
    expect(onA.meta).toMatch(/^artist totals · \d+ counted · \d+ countr(y|ies)$/);
    expect(onA.cells).toHaveLength(1);
    expect(onA.cells[0]).toMatch(/· at least [\d,]*[1-9][\d,]* certified units · /);

    expect(onB.title).toBe(onA.title);
    expect(onB.meta).toBe(onA.meta);
    expect(onB.cells).toEqual(onA.cells);
    expect(onB.hint).toBe(true);
    // Negative control: the slot meta that shipped, counts missing.
    expect(onB.meta).not.toBe("artist totals");
  });

  it("a pair page's side-A Change ✕ lands on side B's counts and headline", async () => {
    const pair = document.createElement("div");
    pair.innerHTML = renderToStaticMarkup(
      await CompareView({ sp: { a: "burna-boy", b: "wizkid" }, path: "/compare/burna-boy-vs-wizkid", leaf: "Burna Boy vs Wizkid", pairTitle: "Burna Boy vs Wizkid" }),
    );
    const clear = pair.querySelector('#slot-a a[aria-label="Choose a different artist"]')!.getAttribute("href");
    expect(clear).toBe("/compare?b=wizkid");

    const pairB = read(pair, "b");
    const landed = read(await page(Object.fromEntries(new URL(clear!, "https://x").searchParams)), "b");
    // The slot keeps the counts it had on the pair page …
    expect(landed.meta).toBe(pairB.meta);
    // … and the one head card is Wizkid's, at the pair page's own figure.
    expect(landed.cells).toHaveLength(1);
    expect(landed.cells[0]).toBe(pairB.cells[1]);
  });

  it("song mode with only an artist on side B still waits for a song", async () => {
    // Record modes describe a RECORD; an artist with no song picked is not
    // one, on either side.
    for (const sp of [{ mode: "songs", a: "wizkid" }, { mode: "songs", b: "wizkid" }]) {
      const root = await page(sp);
      expect(root.querySelector("#result")).toBeNull();
    }
  });
});
