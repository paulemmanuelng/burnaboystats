import { describe, it, expect, vi, afterEach } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { render, fireEvent } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
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

import RevenuePage from "../app/records/tours/revenue/page";
import ArtistPage from "../app/afrobeats/[artist]/page";
import CertificationsPage from "../app/certifications/page";
import mobileStyles from "../app/components/mobileCerts.module.css";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { nightCounts, railChips, shownLine } from "../app/lib/showsChips";
import { RAIL_FADE } from "../app/components/ScrollRail";
import { artistsWithNights, showsHrefFor } from "../app/lib/showsBoard";
import { SHOWS_LABEL, SHOWS_SHORT, artistForSlug, artistSlug, showsHref } from "../app/lib/showsDeepLink";

/**
 * "Biggest shows" (the owner, 4 Oct 2026): a button on the certifications
 * pages that opens the highest-grossing-shows board on that artist's nights.
 *
 *  1. /records/tours/revenue?artist=<slug> selects that artist's chip on both
 *     layouts (desktop RevenueBoard, phone MobileRevenue); an unknown or absent
 *     slug leaves All on; the chips behave as ever afterwards.
 *  2. The phone action bar: on Burna Boy's /certifications "Compare ↗ · Stat
 *     card" became "Compare ↗ · Biggest shows" (the Stat card link removed);
 *     every board artist with a reported single night gets "Compare <Name> ↗"
 *     + "Biggest shows"; everyone else's bar is unchanged. Compare stays the
 *     one gold action.
 *  3. Desktop: the same button beside Compare in the hero; the desktop stat-card
 *     control stays where it is.
 *
 * Every figure here is read off app/data — counts, slugs, which artists have
 * nights — never typed; the owner's 4 Oct list is an external anchor only.
 */

const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));
const counts = nightCounts(revenueShows.map((s) => s.artist));
const TOTAL = revenueShows.length;

// ── The slugs ─────────────────────────────────────────────────────────────────
describe("the slugs come off the artists' names", () => {
  it("every board artist's own slug is its name, slugged — and Burna Boy's is burna-boy", () => {
    for (const a of afrobeatsArtists) expect(artistSlug(a.name), a.name).toBe(a.slug);
    expect(artistSlug("Burna Boy")).toBe("burna-boy");
  });

  it("the owner's list of 4 Oct 2026 is among the artists with nights (an anchor, not the source)", () => {
    const slugs = artistsWithNights().map(artistSlug);
    for (const s of ["burna-boy", "tiwa-savage", "davido", "asake", "rema", "tems", "tyla", "fireboy-dml", "wizkid"]) {
      expect(slugs).toContain(s);
    }
  });

  it("artistForSlug: a known slug names its artist; empty, absent and unknown are All (null)", () => {
    const artists = Object.keys(counts);
    expect(artistForSlug("tiwa-savage", artists)).toBe("Tiwa Savage");
    expect(artistForSlug("FIREBOY-DML", artists)).toBe("Fireboy DML");
    expect(artistForSlug(null, artists)).toBeNull();
    expect(artistForSlug("", artists)).toBeNull();
    expect(artistForSlug("ayra-starr", artists)).toBeNull();
    expect(artistForSlug("tiwa", artists)).toBeNull();
  });

  it("showsHrefFor: the board's link for an artist with a night, nothing for one without", () => {
    expect(showsHrefFor("burna-boy")).toBe("/records/tours/revenue?artist=burna-boy");
    expect(showsHrefFor("tiwa-savage")).toBe(showsHref("Tiwa Savage"));
    expect(showsHrefFor("ayra-starr")).toBeUndefined();
  });

  it("the link follows the single nights it is given — revenueShows, never the runs", () => {
    const rows = [{ ...revenueShows[0], artist: "Somebody Else" }];
    expect(showsHrefFor("somebody-else", rows)).toBe("/records/tours/revenue?artist=somebody-else");
    expect(showsHrefFor("burna-boy", rows)).toBeUndefined();
  });
});

// ── 1. The deep link, both layouts ────────────────────────────────────────────
function mountRevenue(url: string) {
  at(url);
  const r = render(<RevenuePage />);
  const desktop = r.container.querySelector('[class*="desktopOnly"]') as HTMLElement;
  const phone = [...r.container.querySelectorAll("main > div")].find((d) => /screen/.test(d.className)) as HTMLElement;
  return { ...r, desktop, phone };
}
/** A chip's label, without its count. */
const label = (b: Element) => b.childNodes[0].textContent;
const chipsOf = (tree: HTMLElement) => [...tree.querySelectorAll("button[aria-pressed]")];
const pressed = (tree: HTMLElement) => chipsOf(tree).filter((b) => b.getAttribute("aria-pressed") === "true").map(label);
const chip = (tree: HTMLElement, name: string) => chipsOf(tree).find((b) => label(b) === name) as HTMLElement;
const live = (tree: HTMLElement) => text(tree.querySelector('[aria-live="polite"]'));

describe("?artist=<slug> opens the board on that artist's chip", () => {
  it.each(Object.keys(counts))("%s — both layouts, the count read off the data", (artist) => {
    const { desktop, phone, unmount } = mountRevenue(`/records/tours/revenue?artist=${artistSlug(artist)}`);
    expect(pressed(desktop)).toEqual([artist]);
    expect(pressed(phone)).toEqual([artist]);
    // Both layouts word it the same since the debug pass of 4 Oct 2026 (A-11):
    // the desktop said "16 of 82 shown" and named nobody.
    expect(live(desktop)).toBe(shownLine(counts[artist], TOTAL, artist));
    expect(live(phone)).toBe(`${counts[artist]} of ${TOTAL} shows · ${artist}`);
    expect(live(desktop)).toBe(live(phone));
    // Every row the desktop shows is theirs.
    const rows = [...desktop.querySelectorAll('[role="table"] [role="row"]')].slice(1);
    expect(rows.length).toBe(counts[artist]);
    unmount();
  });

  it.each([
    ["an unknown slug", "/records/tours/revenue?artist=ayra-starr"],
    ["a partial name", "/records/tours/revenue?artist=tiwa"],
    ["an empty value", "/records/tours/revenue?artist="],
    ["no parameter", "/records/tours/revenue"],
  ])("%s leaves All on, on both layouts", (_, url) => {
    const { desktop, phone, unmount } = mountRevenue(url);
    expect(pressed(desktop)).toEqual(["All artists"]);
    expect(pressed(phone)).toEqual(["All"]);
    expect(live(desktop)).toBe(shownLine(TOTAL, TOTAL));
    unmount();
  });

  it("the chips behave as ever afterwards: another artist, the same one again (back to All), All", () => {
    const { desktop, phone, unmount } = mountRevenue("/records/tours/revenue?artist=tiwa-savage");
    fireEvent.click(chip(desktop, "Davido"));
    expect(pressed(desktop)).toEqual(["Davido"]);
    fireEvent.click(chip(desktop, "Davido"));
    expect(pressed(desktop)).toEqual(["All artists"]);
    // The phone keeps its own state: still on the linked chip.
    expect(pressed(phone)).toEqual(["Tiwa Savage"]);
    fireEvent.click(chip(phone, "Davido"));
    expect(pressed(phone)).toEqual(["Davido"]);
    fireEvent.click(chip(phone, "All"));
    expect(pressed(phone)).toEqual(["All"]);
    fireEvent.click(chip(phone, "Tiwa Savage"));
    fireEvent.click(chip(phone, "Tiwa Savage"));
    expect(pressed(phone)).toEqual(["All"]);
    unmount();
  });

  it("the phone rail brings the linked chip clear of its edge fade, instantly; an unknown slug scrolls nothing", () => {
    // jsdom has no layout: give each chip a place on a 390px rail, 100px
    // apart and 90px wide, and the rail its scroll width.
    const scrollTo = vi.fn();
    const proto = HTMLElement.prototype as unknown as { scrollTo?: unknown };
    const had = proto.scrollTo;
    proto.scrollTo = scrollTo;
    const isChip = (el: Element) => el.matches("button[aria-pressed]");
    const isRail = (el: Element) => !!el.querySelector(":scope > button[aria-pressed]");
    const idx = (el: Element) => [...(el.parentElement?.children ?? [])].indexOf(el);
    const rect = (left: number, width: number) => ({ left, width, right: left + width, top: 0, bottom: 44, height: 44, x: left, y: 0, toJSON() {} }) as DOMRect;
    const W = 390;
    const spies = [
      vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function (this: HTMLElement) {
        return isChip(this) ? rect(idx(this) * 100, 90) : rect(0, W);
      }),
      vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockImplementation(function (this: HTMLElement) {
        return isRail(this) ? this.children.length * 100 : W;
      }),
      vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(() => W),
    ];
    try {
      // The second-to-last chip: far enough along to need the scroll, and
      // short of the rail's end, so the end fade stays on beside it.
      const order = railChips("All", counts, TOTAL, revenueStands.length).map((c) => c.label);
      const artist = order[order.length - 2];
      const a = mountRevenue(`/records/tours/revenue?artist=${artistSlug(artist)}`);
      const railCalls = scrollTo.mock.calls.filter(([o]) => o && typeof o === "object" && "left" in o);
      expect(railCalls.length).toBeGreaterThan(0);
      const [opts] = railCalls[railCalls.length - 1];
      // "instant", not "auto": the rail's scroll-behavior: smooth animated
      // "auto" (E-05) — the shipped call passed "auto".
      expect(opts.behavior).toBe("instant");
      const i = order.indexOf(artist);
      const max = order.length * 100 - W;
      const right = i * 100 + 90 - opts.left;
      expect(opts.left).toBeLessThan(max - 2); // the end fade is still on…
      expect(right).toBeLessThanOrEqual(W - RAIL_FADE); // …and the chip ends clear of it (A-01)
      // Negative control: the shipped pad of 18px left the chip's last 26px
      // under the 44px fade (Tiwa Savage at 233–371 in a 390 rail, live).
      const shipped = i * 100 + 90 - (i * 100 + 90 + 18 - W);
      expect(shipped).toBe(372);
      expect(shipped).toBeGreaterThan(W - RAIL_FADE);
      a.unmount();

      scrollTo.mockClear();
      const b = mountRevenue("/records/tours/revenue?artist=nobody");
      expect(scrollTo).not.toHaveBeenCalled();
      b.unmount();
    } finally {
      spies.forEach((s) => s.mockRestore());
      proto.scrollTo = had;
    }
  });
});

// ── 2. The phone action bar ───────────────────────────────────────────────────
const barOf = (root: ParentNode) => root.querySelector(`.${mobileStyles.screen} .${mobileStyles.actionBar}`)!;
const links = (bar: Element) => [...bar.querySelectorAll("a")].map((a) => ({ text: text(a), href: a.getAttribute("href") }));

/**
 * What is wrong with a phone bar, given whose it is and whether they have a
 * night on the board. Empty = right. Run against the bars as they shipped in
 * #415 below, it must find fault — or it proves nothing.
 */
function barProblems(bar: Element, slug: string, name: string, nights: boolean): string[] {
  const p: string[] = [];
  const ls = links(bar);
  const compare = slug === "burna-boy" ? "Compare ↗" : `Compare ${name} ↗`;
  if (ls[0]?.text !== compare || ls[0]?.href !== `/compare?a=${slug}`) p.push("Compare is not first");
  if (bar.querySelector('a[href="/share"]')) p.push("a stat card link in the bar");
  const shows = ls.filter((l) => l.href?.startsWith("/records/tours/revenue"));
  if (nights) {
    if (shows.length !== 1 || shows[0].text !== SHOWS_LABEL || shows[0].href !== `/records/tours/revenue?artist=${slug}`) p.push("no Biggest shows link");
  } else if (shows.length) p.push("a Biggest shows link without nights");
  if (bar.querySelectorAll('[class*="actionPrimary"]').length !== 1) p.push("not exactly one gold action");
  return p;
}

const artistPage = async (slug: string) => renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");

describe("the phone action bar", () => {
  it("Burna Boy's /certifications: Compare ↗ + Biggest shows, the filter icon, no stat card", () => {
    const doc = parse(renderToStaticMarkup(<CertificationsPage />));
    const bar = barOf(doc);
    expect(barProblems(bar, "burna-boy", "Burna Boy", true)).toEqual([]);
    expect(links(bar)).toEqual([
      { text: "Compare ↗", href: "/compare?a=burna-boy" },
      { text: SHOWS_LABEL, href: "/records/tours/revenue?artist=burna-boy" },
    ]);
    expect(bar.querySelector('button[aria-label="Filter by tier"]')).not.toBeNull();
  });

  it("Tiwa Savage (nights): Compare Tiwa Savage ↗ + Biggest shows; the icon gives way", async () => {
    const bar = barOf(parse(await artistPage("tiwa-savage")));
    expect(barProblems(bar, "tiwa-savage", "Tiwa Savage", true)).toEqual([]);
    expect(links(bar)).toEqual([
      { text: "Compare Tiwa Savage ↗", href: "/compare?a=tiwa-savage" },
      { text: SHOWS_LABEL, href: "/records/tours/revenue?artist=tiwa-savage" },
    ]);
    expect(bar.querySelector("button")).toBeNull();
  });

  it("Ayra Starr (no nights): the bar as it was — Compare Ayra Starr ↗ and the filter icon, nothing else", async () => {
    const bar = barOf(parse(await artistPage("ayra-starr")));
    expect(barProblems(bar, "ayra-starr", "Ayra Starr", false)).toEqual([]);
    expect([...bar.children].map((c) => `${c.tagName.toLowerCase()}:${text(c) || c.getAttribute("aria-label")}`)).toEqual([
      "a:Compare Ayra Starr ↗",
      "button:Filter by tier",
    ]);
  });

  it.each(afrobeatsArtists.map((a) => [a.name, a.slug] as const))(
    "%s: the button iff a reported single night (by name, off revenueShows)",
    async (name, slug) => {
      const nights = revenueShows.some((s) => s.artist === name);
      const bar = barOf(parse(await artistPage(slug)));
      expect(barProblems(bar, slug, name, nights)).toEqual([]);
    }
  );

  it("the set of board artists with the button is the set with nights", () => {
    const withButton = afrobeatsArtists.filter((a) => showsHrefFor(a.slug)).map((a) => a.name).sort();
    const withNights = [...new Set(revenueShows.map((s) => s.artist))].filter((n) => afrobeatsArtists.some((a) => a.name === n)).sort();
    expect(withButton).toEqual(withNights);
    expect(withButton.length).toBeGreaterThanOrEqual(8);
  });

  it("the shows link is secondary: one gold fill in the stylesheet, and it is .actionPrimary's", () => {
    const css = readFileSync(join(process.cwd(), "app/components/mobileCerts.module.css"), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    const gold = [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
      .filter((m) => /background(?:-color|-image)?:[^;]*(--gold-fill|--gold-bright)/.test(m[2]))
      .map((m) => m[1].trim());
    expect(gold).toEqual([".actionPrimary"]);
    const html = renderToStaticMarkup(<CertificationsPage />);
    const shows = barOf(parse(html)).querySelector('a[href^="/records/tours/revenue"]')!;
    expect(shows.className).toBe(mobileStyles.actionSecondary);
  });

  it("the label is one inline run in the flex link, so the space after \"Biggest\" survives", () => {
    const shows = barOf(parse(renderToStaticMarkup(<CertificationsPage />))).querySelector('a[href^="/records/tours/revenue"]')!;
    expect(shows.childNodes.length).toBe(1);
    expect(text(shows.firstElementChild)).toBe(SHOWS_LABEL);
  });

  it("negative control: the label as first built — two flex items — is caught (it rendered BIGGESTSHOWS at 390)", () => {
    const first = parse(`<a class="x" href="/records/tours/revenue?artist=burna-boy"><span class="showsLong">Biggest </span>shows</a>`).body.firstElementChild!;
    expect(first.childNodes.length).not.toBe(1);
  });

  it("under 390px it reads \"Shows\": the long word is visually hidden, never removed", () => {
    expect(SHOWS_LABEL.endsWith(SHOWS_SHORT.toLowerCase())).toBe(true);
    const css = readFileSync(join(process.cwd(), "app/components/mobileCerts.module.css"), "utf8");
    expect(css).toMatch(/@media \(max-width: 389px\) \{\s*\.showsLong \{[^}]*clip-path: inset\(50%\)/);
    expect(css).not.toMatch(/\.showsLong \{[^}]*display: none/);
  });
});

// ── Negative controls: the bars as they shipped in #415 ───────────────────────
describe("negative controls: the bars as shipped in #415 fail the checks", () => {
  // Verbatim from https://burnaboystats.com/certifications and
  // /afrobeats/tiwa-savage (live 4 Oct 2026, main bf99ada3, after #415).
  const ICON = `<button type="button" aria-label="Filter by tier" class="mobileCerts-module__1wnzXW__actionIcon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M7 12h10M10 17h4"></path></svg></button>`;
  const SHIPPED_BURNA = `<div class="mobileCerts-module__1wnzXW__actionBar"><a class="mobileCerts-module__1wnzXW__actionPrimary" href="/compare?a=burna-boy">Compare ↗</a><a class="mobileCerts-module__1wnzXW__actionSecondary" href="/share">Stat card</a>${ICON}</div>`;
  const SHIPPED_TIWA = `<div class="mobileCerts-module__1wnzXW__actionBar"><a class="mobileCerts-module__1wnzXW__actionPrimary" href="/compare?a=tiwa-savage">Compare Tiwa Savage ↗</a>${ICON}</div>`;
  const bar = (html: string) => parse(html).body.firstElementChild!;

  it("Burna Boy's shipped bar: the Stat card → /share, and no Biggest shows", () => {
    expect(barProblems(bar(SHIPPED_BURNA), "burna-boy", "Burna Boy", true)).toEqual([
      "a stat card link in the bar",
      "no Biggest shows link",
    ]);
  });

  it("Tiwa Savage's shipped bar: no Biggest shows", () => {
    expect(barProblems(bar(SHIPPED_TIWA), "tiwa-savage", "Tiwa Savage", true)).toEqual(["no Biggest shows link"]);
  });

  it("a second gold action is caught", () => {
    const two = SHIPPED_TIWA.replace("</a>", `</a><a class="mobileCerts-module__1wnzXW__actionPrimary" href="/records/tours/revenue?artist=tiwa-savage">${SHOWS_LABEL}</a>`);
    expect(barProblems(bar(two), "tiwa-savage", "Tiwa Savage", true)).toEqual(["not exactly one gold action"]);
  });
});

// ── 3. Desktop ────────────────────────────────────────────────────────────────
describe("desktop: Biggest shows beside Compare in the hero", () => {
  const desktopOf = (doc: Document) => doc.querySelector('[class*="desktopOnly"]')!;
  const afterCompare = (root: Element, compareHref: string) => {
    const compare = [...root.querySelectorAll(`a[href="${compareHref}"]`)][0];
    return compare?.nextElementSibling;
  };

  it("/certifications: a secondary button right after Compare; the stat card stays where it was", () => {
    const desk = desktopOf(parse(renderToStaticMarkup(<CertificationsPage />)));
    const next = afterCompare(desk, "/compare?a=burna-boy")!;
    expect(next.getAttribute("href")).toBe("/records/tours/revenue?artist=burna-boy");
    expect(text(next)).toBe(`${SHOWS_LABEL} ↗`);
    expect(next.className).toMatch(/\bbtnSecondary\b/);
    expect(next.className).not.toMatch(/\bbtnPrimary\b/);
    expect(desk.querySelector('a[href="/share"]')).not.toBeNull();
  });

  it("Davido (nights): the button follows Compare in the hero row; Ayra Starr (none): no button", async () => {
    const davido = desktopOf(parse(await artistPage("davido")));
    const next = afterCompare(davido, "/compare?a=davido")!;
    expect(next.getAttribute("href")).toBe("/records/tours/revenue?artist=davido");
    expect(next.className).toMatch(/\bbtnSecondary\b/);
    const ayra = desktopOf(parse(await artistPage("ayra-starr")));
    expect(ayra.querySelector('a[href^="/records/tours/revenue"]')).toBeNull();
  });
});
