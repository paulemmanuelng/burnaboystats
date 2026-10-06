import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/methodology",
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

import { tours } from "../app/data/tours";
import { allFirsts, draftFirstGroups, firstGroups, type FirstGroup } from "../app/data/firsts";
import { updates } from "../app/data/updates";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { baseTitle, priceCountry } from "../app/lib/certCountry";
import { allItems } from "../app/data/certifications";
import { featureCharts, singleCharts } from "../app/data/charts";
import { ceremonies } from "../app/data/awards";
import { songs } from "../app/data/songs";
import { revenueShows } from "../app/data/tourRevenue";
import { showsBoard } from "../app/lib/showsBoard";
import { showsBoardTitle } from "../app/lib/showsTitle";
import { metadata as revenueMeta } from "../app/records/tours/revenue/page";
import { alt as revenueAlt } from "../app/records/tours/revenue/opengraph-image";
import MethodologyPage from "../app/methodology/page";
import methodologyStyles from "../app/methodology/methodology.module.css";
import AnchorTwins, { twinOf } from "../app/components/AnchorTwins";
import {
  dayBySlug,
  dayPageDescription,
  dayPageTitle,
  dayShareLine,
  dayShareText,
  guestCredit,
  onThisDayDays,
} from "../app/lib/onThisDay";
import { dayPostCard, dayPreview } from "../app/lib/onThisDayShare";

/**
 * Paul's rulings of 6 Oct 2026 on the owner questions of the full-site debug
 * pass of 5 Oct 2026 (debug-1005). Each case keeps the string or the data the
 * live site shipped as its negative control. The /compare scope line
 * (compareA-02) is in tests/comparePage.test.tsx, the feed's changelog lines
 * (core-07) in tests/updatesBurnaOnly.test.ts and tests/feedGuid.test.ts, and
 * the tour data's new stamp (tourscars-21) in tests/debug1004Data.test.tsx.
 */

const read = (p: string) => readFileSync(p, "utf8");

// ── tourscars-21 ───────────────────────────────────────────────────────────
describe("tourscars-21: the No Sign of Weakness Oceania leg is four shows, not four arenas", () => {
  const nsow = tours.find((t) => t.name === "No Sign of Weakness Tour")!;
  const oceania = nsow.dates.filter((d) => d.country === "Australia" || d.country === "New Zealand");
  const ARENAS = /\bfour arena(?:s\b| shows\b)/i;

  it("the leg is four dates, and one of them is the outdoor Sidney Myer Music Bowl", () => {
    expect(oceania).toHaveLength(4);
    expect(oceania.map((d) => d.venue)).toContain("Sidney Myer Music Bowl");
  });

  it("no line calls the four of them arenas", () => {
    const prose = [nsow.note, ...allFirsts.flatMap((f) => [f.title, f.text]), ...updates.map((u) => u.text)];
    expect(prose.filter((t) => ARENAS.test(t))).toEqual([]);
    expect(nsow.note).toContain("30,946 tickets across its four shows");
    expect(allFirsts.map((f) => f.title)).toContain("First African artist to play four arena-scale shows in a single Oceania tour");
  });

  it("negative control: the three lines as they shipped", () => {
    const shipped = [
      "He became the first Nigerian artist to headline Red Rocks, and the Oceania leg alone grossed $3.12M from 30,946 tickets across four arena shows — the most for an African artist there.",
      "First African artist to play four arenas in a single Oceania tour",
      "Oceania records stack up: the No Sign of Weakness run grossed $3.12M from 30,946 tickets across four arena shows — the highest-grossing tour and most tickets ever by an African act in the region.",
    ];
    expect(shipped.filter((t) => ARENAS.test(t))).toHaveLength(3);
  });
});

// ── music-16 ───────────────────────────────────────────────────────────────
describe("music-16: the Dai Dai chart table's heading covers every row", () => {
  const NATIONAL = /national|nacional/i;
  const labelOf = (src: string) => /\n\s*national: "([^"]+)",/.exec(src)![1];
  const others = (src: string) => (src.match(/const national:[\s\S]*?\n {2}\];/)![0].match(/\bother: "/g) ?? []).length;

  it.each([
    ["app/dai-dai/page.tsx", "Charts"],
    ["app/dai-dai/es/page.tsx", "Listas"],
  ])("%s heads it “%s”", (file, label) => {
    const src = read(file);
    // MENA (regional), Big Top 40 (a radio countdown), Rhythmic Airplay.
    expect(others(src)).toBe(3);
    expect(labelOf(src)).toBe(label);
    expect(labelOf(src)).not.toMatch(NATIONAL);
  });

  it("negative control: the headings that shipped", () => {
    expect(["National charts", "Listas nacionales"].filter((l) => NATIONAL.test(l))).toHaveLength(2);
  });
});

// ── afrobeatsB-02 ──────────────────────────────────────────────────────────
describe("afrobeatsB-02: a record led by an act off the board is filed one way for every board artist on it", () => {
  const raw = JSON.parse(read("docs/sourcing/results/board-raw.json")) as { artist: string; title: string; country: string }[];
  /** The act a register credit bills first: "Ciza, Tems & Omah Lay" → "ciza". */
  const firstBilled = (credit: string) => credit.split(/,| & | ft\.? | feat\.? /i)[0].trim().toLowerCase();

  type Rec = { title: string; holders: { slug: string; name: string; featured: boolean }[] };
  const ngRecords = (): Rec[] =>
    priceCountry("NG")
      .programs.flatMap((p) => p.records)
      .filter((r) => r.holders.length > 1)
      .map((r) => ({
        title: r.plaque.title,
        holders: r.holders.map((h) => ({ slug: h.artist.slug, name: h.artist.name, featured: h.featured })),
      }));

  /** Shared Nigerian records whose TCSN credit names every holder and bills
   *  first an act that is none of them — every board artist on it billed
   *  after its lead. */
  const ledOffBoard = (recs: Rec[]) =>
    recs.flatMap((r) => {
      const row = raw.find(
        (x) =>
          x.country === "NG" &&
          baseTitle(x.title) === baseTitle(r.title) &&
          r.holders.every((h) => x.artist.toLowerCase().includes(h.name.toLowerCase())),
      );
      if (!row) return [];
      const lead = firstBilled(row.artist);
      return r.holders.some((h) => h.name.toLowerCase() === lead) ? [] : [{ ...r, credit: row.artist }];
    });

  /** Such records filed a lead for one holder and a feature for another. */
  const splitFilings = (recs: Rec[]) =>
    ledOffBoard(recs)
      .filter((r) => new Set(r.holders.map((h) => h.featured)).size > 1)
      .map(
        (r) =>
          `${r.title} (${r.credit}): ${[...r.holders]
            .sort((a, b) => a.slug.localeCompare(b.slug))
            .map((h) => `${h.slug} ${h.featured ? "featured" : "lead"}`)
            .join(", ")}`,
      );

  it("every one is filed the same way for each of its board artists", () => {
    const led = ledOffBoard(ngRecords());
    // Not vacuous: Getting Paid, Apala Disco, Big Big Things, Isaka, Pami,
    // People and Won Da Mo are led by Sarz, DJ Tunez, Young Jonn, Ciza,
    // Libianca and Mavins.
    expect(led.length).toBeGreaterThanOrEqual(7);
    expect(led.map((r) => r.title)).toContain("Isaka (6AM)");
    expect(splitFilings(ngRecords())).toEqual([]);
  });

  it("“Isaka (6AM)” — Ciza, Tems & Omah Lay — is a featured appearance on both boards", () => {
    for (const slug of ["tems", "omah-lay"]) {
      const a = afrobeatsArtists.find((x) => x.slug === slug)!;
      expect(a.releases.find((r) => r.title === "Isaka (6AM)")?.kind, slug).toBe("Featured appearances");
    }
  });

  it("“Trumpet” is the ruled exception, stated with the rule: a lead single on both co-leads' boards", () => {
    for (const slug of ["olamide", "ckay"]) {
      const a = afrobeatsArtists.find((x) => x.slug === slug)!;
      expect(a.releases.find((r) => r.title === "Trumpet (Olamide & CKay)")?.kind, slug).toBe("Lead singles");
    }
    expect(read("app/lib/certScope.ts").replace(/\s*\*\s*/g, " ")).toMatch(/The ruled exception is "Trumpet" \(Olamide & CKay\)/);
  });

  it("negative control: the board as it shipped, Tems's “Isaka (6AM)” a lead single, fails", () => {
    const shipped = ngRecords().map((r) =>
      r.title === "Isaka (6AM)" ? { ...r, holders: r.holders.map((h) => (h.slug === "tems" ? { ...h, featured: false } : h)) } : r,
    );
    expect(splitFilings(shipped)).toEqual(["Isaka (6AM) (Ciza, Tems & Omah Lay): omah-lay featured, tems lead"]);
  });
});

// ── records-02 (partial) ───────────────────────────────────────────────────
describe("records-02: one credit per record across the certifications, charts, awards and song data", () => {
  const cert = (t: string) => allItems.find((r) => r.title === t)?.credit;
  const chart = (t: string) => [...singleCharts, ...featureCharts].find((r) => r.title === t)?.credit;

  it.each(["Jerusalema (Remix)", "Tshwala Bam (Remix)", "Yaba Buluku (Remix)"])("%s carries one credit in both files", (t) => {
    expect(cert(t)).toBeTruthy();
    expect(chart(t)).toBe(cert(t));
  });

  it("“Tshwala Bam (Remix)” is credited as TCSN prints it", () => {
    const raw = JSON.parse(read("docs/sourcing/results/burna-raw.json")) as { title: string; country: string; quote?: string }[];
    const row = raw.find((r) => r.title === "Tshwala Bam (Remix)" && r.country === "NG")!;
    expect(row.quote!.split(" | ")[2]).toBe("TitoM, Yuppe & Burna Boy ft. S.N.E");
    expect(cert("Tshwala Bam (Remix)")).toBe("TitoM, Yuppe & Burna Boy ft. S.N.E");
  });

  it("Yaba Buluku's nomination and Jerusalema's song page carry the same credit", () => {
    const works = ceremonies.flatMap((c) => c.noms).filter((n) => n.work?.startsWith("Yaba Buluku (Remix) ("));
    expect(works.map((n) => n.work)).toEqual([`Yaba Buluku (Remix) (${cert("Yaba Buluku (Remix)")})`]);
    expect(songs.find((s) => s.slug === "jerusalema")?.credit).toBe(cert("Jerusalema (Remix)"));
  });

  it("negative control: the strings as they shipped disagreed", () => {
    const shipped = [
      ["Master KG, Nomcebo & Burna Boy", "Master KG ft. Nomcebo Zikode & Burna Boy"],
      ["TitoM & Yuppe ft. S.N.E & Burna Boy", "TitoM, Yuppe & Burna Boy feat. S.N.E"],
      ["DJ Tárico & Burna Boy", "DJ Tárico & Burna Boy ft. Preck & Nelson Tivane", "DJ Tárico ft. Burna Boy"],
    ];
    expect(shipped.filter((forms) => new Set(forms).size === 1)).toEqual([]);
  });
});

// ── records-15 ─────────────────────────────────────────────────────────────
describe("records-15: every firsts category opens with its headline, then runs newest first", () => {
  const headlineOf = (label: string) => draftFirstGroups.find((g) => g.label === label)!.opensWith;
  /** What is out of order in a category, in words. */
  const faults = (g: FirstGroup) => {
    const [lead, ...rest] = g.items;
    const f: string[] = [];
    if (lead?.title !== headlineOf(g.label)) f.push(`opens with “${lead?.title}”`);
    rest.forEach((x, i) => {
      if (i > 0 && Number(x.year) > Number(rest[i - 1].year)) f.push(`${x.year} after ${rest[i - 1].year}`);
    });
    return f.length ? [`${g.label}: ${f.join("; ")}`] : [];
  };

  it("each headline is an item of its own category", () => {
    for (const g of draftFirstGroups) expect(g.items.map((i) => i.title), g.label).toContain(g.opensWith);
  });

  it("both layouts and the home strip read one order: the headline, then the years falling", () => {
    expect(firstGroups.flatMap(faults)).toEqual([]);
    // Nothing gained or lost by the ordering.
    expect(firstGroups.map((g) => g.items.length)).toEqual(draftFirstGroups.map((g) => g.items.length));
  });

  it("Awards opens with the 2021 Grammy, Box office with the 2024 London Stadium record", () => {
    const first = (label: string) => firstGroups.find((g) => g.label === label)!.items[0];
    expect(first("Awards & honours")).toMatchObject({ year: "2021", title: "First winner of the Grammy for Best Global Music Album" });
    expect(first("Box office")).toMatchObject({ year: "2024", title: "Highest-grossing single concert by any African artist" });
  });

  it("negative control: the categories in the order they shipped", () => {
    // The file's own order is the order the site printed until 6 Oct 2026.
    const shipped = draftFirstGroups.map(({ label, items }) => ({ label, items }));
    expect(shipped.flatMap(faults).map((f) => f.split(":")[0])).toEqual([
      "Stadiums & arenas",
      "Awards & honours",
      "Charts & streaming",
      "Box office",
    ]);
  });
});

// ── seo-11 ─────────────────────────────────────────────────────────────────
describe("seo-11: the box-office board's title names its No. 1 night's artist, derived", () => {
  it("the title, the share title and the card's alt are one string", () => {
    const t = `Highest-Grossing African Shows — ${showsBoard().top.artist} Leads`;
    expect(showsBoardTitle(showsBoard().top.artist)).toBe(t);
    expect(revenueMeta.title).toBe(t);
    expect(revenueMeta.openGraph?.title).toBe(t);
    expect(revenueAlt).toBe(t);
  });

  it("is at most 60 characters for every artist on the board", () => {
    const artists = [...new Set(revenueShows.map((s) => s.artist))];
    expect(artists.length).toBeGreaterThan(5);
    expect(artists.map(showsBoardTitle).filter((t) => t.length > 60)).toEqual([]);
  });

  it("follows the No. 1: a bigger night by another artist would retitle the board", () => {
    const rival = { ...revenueShows.find((s) => s.artist !== showsBoard().top.artist)!, revenue: showsBoard().top.revenue + 1 };
    expect(showsBoardTitle(showsBoard([rival, ...revenueShows]).top.artist)).toBe(`Highest-Grossing African Shows — ${rival.artist} Leads`);
  });

  it("negative control: the titles that shipped typed Burna Boy's name over an all-African board", () => {
    for (const shipped of ["Burna Boy Box Office — Highest-Grossing Shows", "Burna Boy — Highest-Grossing Shows"]) {
      expect(shipped).not.toBe(showsBoardTitle(showsBoard().top.artist));
      expect(shipped).not.toMatch(/African/);
    }
  });
});

// ── core-11 ────────────────────────────────────────────────────────────────
describe("core-11: /methodology's statements read on a phone too, and its anchors land there", () => {
  const S = methodologyStyles;
  const html = () => renderToStaticMarkup(MethodologyPage());
  const doc = () => new DOMParser().parseFromString(html(), "text/html");

  it("the accessibility statement, the claims not published and the registers sit outside both layouts' trees", () => {
    const d = doc();
    for (const id of ["accessibility", "rejected", "registers", "certified-units"]) {
      expect(d.querySelectorAll(`[id="${id}"]`), id).toHaveLength(1);
      const h = d.getElementById(id)!;
      expect(h.closest(`.${S.desktopOnly}`), id).toBeNull();
      expect(h.closest(`.${S.shared}`), id).not.toBeNull();
    }
  });

  it("a desktop reads them where it always did: after the four rules, before the primary sources", () => {
    const h = html();
    const at = (id: string) => h.indexOf(`id="${id}"`);
    const order = ["principles", "accessibility", "rejected", "registers", "sources"].map(at);
    expect(order.every((x) => x > 0)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
  });

  it("#principles and #sources have phone twins, and the page maps them", () => {
    const d = doc();
    expect(d.getElementById("m-principles")?.textContent).toBe("How a figure gets verified");
    expect(d.getElementById("m-sources")?.textContent).toBe("Where the numbers come from");
    expect(d.getElementById("principles")?.closest(`.${S.desktopOnly}`)).not.toBeNull();
    const src = read("app/methodology/page.tsx");
    expect(src).toContain('const LAYOUT_TWINS = { principles: "m-principles", sources: "m-sources" } as const;');
    expect(src).toContain("<AnchorTwins pairs={LAYOUT_TWINS} />");
    const pairs = { principles: "m-principles", sources: "m-sources" };
    expect(["principles", "m-principles", "sources", "m-sources"].map((id) => twinOf(id, pairs))).toEqual([
      "m-principles",
      "principles",
      "m-sources",
      "sources",
    ]);
    // The countries board's own rule is untouched.
    expect(twinOf("country-ireland", pairs)).toBe("m-country-ireland");
  });

  it("/methodology#principles on a phone (no box) scrolls to the phone's copy", () => {
    const calls: string[] = [];
    const proto = Element.prototype as unknown as { scrollIntoView?: (o?: ScrollIntoViewOptions) => void };
    const had = proto.scrollIntoView;
    proto.scrollIntoView = function (this: Element) {
      calls.push(this.id);
    };
    const spy = vi.spyOn(Element.prototype, "getClientRects").mockImplementation(function (this: Element) {
      return (this.id.startsWith("m-") ? [{}] : []) as unknown as DOMRectList;
    });
    try {
      window.history.replaceState(null, "", "/methodology#principles");
      const r = render(
        <>
          <h2 id="principles" />
          <h2 id="m-principles" />
          <AnchorTwins pairs={{ principles: "m-principles", sources: "m-sources" }} />
        </>,
      );
      expect(calls).toEqual(["m-principles"]);
      r.unmount();
      // Negative control: with the countries rule alone, as the helper shipped,
      // the fragment names a twin it cannot find, and the page stays put.
      calls.length = 0;
      expect(twinOf("principles")).toBeNull();
      const bare = render(
        <>
          <h2 id="principles" />
          <h2 id="m-principles" />
          <AnchorTwins />
        </>,
      );
      expect(calls).toEqual([]);
      bare.unmount();
    } finally {
      spy.mockRestore();
      proto.scrollIntoView = had;
      window.history.replaceState(null, "", "/");
    }
  });

  it("negative control: the shipped tree kept the three sections inside the desktop wrapper", () => {
    const shipped = `<main><div class="${S.desktopOnly}"><section aria-labelledby="accessibility"><h2 id="accessibility">Who can read this site</h2></section></div></main>`;
    const d = new DOMParser().parseFromString(shipped, "text/html");
    expect(d.getElementById("accessibility")!.closest(`.${S.desktopOnly}`)).not.toBeNull();
  });
});

// ── otd-01 ─────────────────────────────────────────────────────────────────
describe("otd-01: a featured record's share surfaces carry its credit", () => {
  const OWN_IT = "Stormzy ft. Ed Sheeran & Burna Boy";

  it("the days whose lead is someone else's record with Burna Boy featured", () => {
    expect(onThisDayDays.filter((d) => guestCredit(d.lead)).map((d) => `${d.slug}: ${guestCredit(d.lead)}`)).toEqual([
      `3-january: ${OWN_IT}`,
      "10-january: Coldplay ft. Burna Boy & others",
      "25-march: Justin Bieber ft. Burna Boy",
      "31-march: Asake ft. Burna Boy",
      "14-april: Black Sherif ft. Burna Boy",
      "5-may: Dave ft. Burna Boy",
      "18-may: Dave ft. Burna Boy",
      "22-august: Sam Smith ft. Burna Boy",
      "5-november: Wizkid ft. Burna Boy",
    ]);
  });

  it("3 January: the card, the preview, the title, the description and the share text name Stormzy's record", () => {
    const d = dayBySlug("3-january")!;
    expect(dayPostCard(d).record).toBe(OWN_IT);
    expect(dayPreview(d).credit).toBe(OWN_IT);
    expect(dayPreview(d).alt).toBe(`Burna Boy on this day, 3 January: 2020 — “Own It” hit No. 1 in the United Kingdom (${OWN_IT})`);
    expect(dayPageDescription(d)).toBe(`2020: “Own It” hit No. 1 in the United Kingdom (${OWN_IT}). Burna Boy on this day, 3 January.`);
    expect(dayShareLine(d)).toBe(`2020: “Own It” hit No. 1 in the United Kingdom (${OWN_IT}).`);
    expect(dayShareText(d, "https://burnaboystats.com")).toContain(`(${OWN_IT}).`);
    // Credited, the named title outruns Google's 60, so the day is counted.
    expect(dayPageTitle(d)).toBe("Burna Boy on This Day: 3 January — 1 Milestone");
  });

  it("his own leads and joint billings print as they did, and a record line keeps its slot", () => {
    expect(guestCredit({ kind: "chart", detail: "Burna Boy feat. Ed Sheeran · Official Charts Company" })).toBeNull();
    expect(guestCredit({ kind: "chart", detail: "Phyno & Burna Boy · TurnTable Top 100" })).toBeNull();
    expect(guestCredit({ kind: "chart", detail: "TitoM, Yuppe & Burna Boy ft. S.N.E · TurnTable Top 100" })).toBeNull();
    expect(guestCredit({ kind: "show", detail: "Stormzy ft. Burna Boy · Wembley" })).toBeNull();
    // 23 May's lead is that joint billing: no credit line, as before.
    expect(dayPostCard(dayBySlug("23-may")!).record).toBeNull();
    expect(dayPreview(dayBySlug("23-may")!).credit).toBeNull();
    expect(dayPostCard(dayBySlug("28-april")!).record).toBe("First African artist to sell out the world's most famous arena.");
  });

  it("negative control: 3 January's surfaces as they shipped named no one else", () => {
    const d = dayBySlug("3-january")!;
    // Live, 5 Oct 2026.
    const shipped = {
      title: "3 January 2020: “Own It” hit No. 1 in the United Kingdom",
      description: "2020: “Own It” hit No. 1 in the United Kingdom. Burna Boy on this day, 3 January.",
    };
    expect(shipped.description).not.toContain("Stormzy");
    expect(dayPageTitle(d)).not.toBe(shipped.title);
    expect(dayPageDescription(d)).not.toBe(shipped.description);
  });
});
