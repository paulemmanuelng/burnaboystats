import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
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

import { GET as boardRoute } from "../app/api/v1/board/route";
import { GET as indexRoute } from "../app/api/v1/board/index/route";
import { GET as schemaRoute } from "../app/api/v1/board/schema/route";
import { GET as artistRoute } from "../app/api/v1/board/[artist]/route";
import { GET as chartsRoute } from "../app/api/v1/board/[artist]/charts/route";
import { GET as liveRoute } from "../app/api/v1/board/[artist]/live/route";
import { GET as boxOfficeRoute } from "../app/api/v1/box-office/route";
import { GET as boxOfficeCountriesRoute } from "../app/api/v1/box-office/countries/route";

import ArtistPage, { generateMetadata as artistMeta } from "../app/afrobeats/[artist]/page";
import ChartsPage, { generateMetadata as chartsMeta } from "../app/afrobeats/[artist]/charts/page";
import { generateMetadata as liveMeta } from "../app/afrobeats/[artist]/live/page";
import { metadata as boardMeta } from "../app/afrobeats/page";
import { metadata as revenueMeta } from "../app/records/tours/revenue/page";
import { metadata as revenueCountriesMeta } from "../app/records/tours/revenue/countries/page";

import { afrobeatsArtists, sweptArtists } from "../app/data/afrobeats";
import { totalAwards, countryCount as burnaCountries } from "../app/data/certifications";
import { chartEntryCount, numberOnes } from "../app/data/charts";
import { livePlacementCount } from "../app/data/liveCharts";
import { hubLists, hubRows } from "../app/lib/hubRows";
import { showsBoard, pct } from "../app/lib/showsBoard";
import { heroFigures, revenueByCountry } from "../app/lib/revenueByCountry";
import { allPairs, pairSlug } from "../app/lib/comparePairs";
import { LIVE_CACHE_CONTROL } from "../app/lib/api";
import { contentHashOf, FEED_SCHEMA } from "../app/lib/boardFeeds/envelope";
import { FEED_SCHEMAS, schemaErrors } from "../app/lib/boardFeeds/schema";
import { boardArtists, burnaAsBoard, isBillboardBody, liveBoardOf } from "../app/lib/boardFeeds/shared";
import { LIVE_CADENCE_NOTE } from "../app/lib/boardFeeds/board";

/**
 * The FaveIQ board feeds (FaveIQ's docs/design/round14-afrobeats-board/
 * afrobeats-board-feed-spec-2026-11-25.md, §8): every body against the
 * schema the feeds serve, nothing that singles one artist out, every link in
 * the section a FaveIQ path, the index's 283 pages, every artist's totals
 * equal to its board row, Burna Boy's hook, and the Billboard twins differing
 * only where a Billboard row exists. Then the pages: what each feed says,
 * the page it moves from says, word for word.
 */

type Json = Record<string, unknown>;
type Body = { schema: string; endpoint: string; dataAsOf: string; contentHash: string; data: Json; [k: string]: unknown };

async function read(res: Response): Promise<{ status: number; headers: Headers; body: Body }> {
  return { status: res.status, headers: res.headers, body: (await res.json()) as Body };
}
const params = (artist: string) => ({ params: Promise.resolve({ artist }) });
const req = (path: string) => new Request(`https://burnaboystats.com${path}`);

const slugs = boardArtists.map((a) => a.slug);

// Every body once, read through its route, as FaveIQ's server will read it.
const bodies = await (async () => {
  const out: { schema: keyof typeof FEED_SCHEMAS; res: Awaited<ReturnType<typeof read>> }[] = [];
  out.push({ schema: "index", res: await read(indexRoute()) });
  out.push({ schema: "board", res: await read(boardRoute()) });
  for (const s of slugs) {
    out.push({ schema: "artist", res: await read(await artistRoute(req(`/api/v1/board/${s}`), params(s))) });
    out.push({ schema: "artist-charts", res: await read(await chartsRoute(req(`/api/v1/board/${s}/charts`), params(s))) });
    out.push({ schema: "artist-live", res: await read(await liveRoute(req(`/api/v1/board/${s}/live`), params(s))) });
  }
  out.push({ schema: "box-office", res: await read(boxOfficeRoute()) });
  out.push({ schema: "box-office-countries", res: await read(boxOfficeCountriesRoute()) });
  return out;
})();

const bodyAt = (endpoint: string) => {
  const b = bodies.find((x) => x.res.body.endpoint === endpoint);
  if (!b) throw new Error(`no body for ${endpoint}`);
  return b.res.body;
};
type Any = any;
const data = (endpoint: string) => bodyAt(endpoint).data as Any;

/** Every [path, key, value] in a JSON value. */
function* walk(v: unknown, path = "$"): Generator<[string, string, unknown]> {
  if (Array.isArray(v)) for (let i = 0; i < v.length; i++) yield* walk(v[i], `${path}[${i}]`);
  else if (v && typeof v === "object")
    for (const [k, x] of Object.entries(v)) {
      yield [path, k, x];
      yield* walk(x, `${path}.${k}`);
    }
}

const unescapeHtml = (s: string) =>
  s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const textOf = (html: string) => unescapeHtml(html.replace(/<[^>]+>/g, ""));

describe("the board feeds: envelope and headers (spec §2)", () => {
  it("answers every page of the section, 200 and JSON", () => {
    expect(bodies.length).toBe(2 + slugs.length * 3 + 2);
    for (const b of bodies) expect(b.res.status, b.res.body.endpoint).toBe(200);
  });

  it("wraps every body in the faveiq-board/1 envelope", () => {
    for (const { res } of bodies) {
      const b = res.body;
      expect(b.schema).toBe(FEED_SCHEMA);
      expect(b.dataAsOf).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(b.license).toMatchObject({ name: "CC BY 4.0" });
      expect(Object.keys(b.links as object)).toEqual(["principles", "sources", "registers", "certified-units", "threshold-history"]);
      // The hash is of `data` alone, and the strong ETag is the same hash.
      expect(b.contentHash).toBe(contentHashOf(b.data));
      expect(res.headers.get("ETag")).toBe(`"${b.contentHash}"`);
      expect(res.headers.get("Cache-Control")).toBe(LIVE_CACHE_CONTROL);
      expect(res.headers.get("Access-Control-Allow-Origin")).toBe("*");
      expect(res.headers.get("X-License")).toBe("CC-BY-4.0");
    }
  });

  it("answers an unknown artist with a small JSON 404 that no cache keeps", async () => {
    for (const [route, path] of [
      [artistRoute, "/api/v1/board/nobody"],
      [chartsRoute, "/api/v1/board/nobody/charts"],
      [liveRoute, "/api/v1/board/nobody/live"],
    ] as const) {
      const { status, headers, body } = await read(await route(req(path), params("nobody")));
      expect(status).toBe(404);
      expect(headers.get("Cache-Control")).toBe("no-store");
      expect(body).toEqual({ error: "not-found", endpoint: path });
      expect(schemaErrors(FEED_SCHEMAS["not-found"], body)).toEqual([]);
    }
  });
});

describe("the board feeds: the schema (spec 4.9, §8)", () => {
  it("every body validates against the schema the feeds serve", () => {
    for (const { schema, res } of bodies) expect(schemaErrors(FEED_SCHEMAS[schema], res.body), res.body.endpoint).toEqual([]);
  });

  it("negative control: a broken body fails it", () => {
    const board = structuredClone(bodyAt("/api/v1/board")) as Any;
    delete board.data.count;
    board.data.rows[0].isBurna = true;
    board.data.rows[1].certs = "many";
    const errors = schemaErrors(FEED_SCHEMAS.board, board).join("\n");
    expect(errors).toContain('missing "count"');
    expect(errors).toContain('unexpected "isBurna"');
    expect(errors).toContain("$.data.rows[1].certs: expected integer, got string");
  });

  it("serves the schema document, one entry per endpoint", async () => {
    const { status, body } = await read(schemaRoute());
    expect(status).toBe(200);
    const doc = body as unknown as { endpoints: { path: string; schema: string }[]; $defs: Record<string, unknown> };
    expect(doc.endpoints.map((e) => e.path)).toEqual([
      "/api/v1/board/index",
      "/api/v1/board",
      "/api/v1/board/{artist}",
      "/api/v1/board/{artist}/charts",
      "/api/v1/board/{artist}/live",
      "/api/v1/box-office",
      "/api/v1/box-office/countries",
      "/api/v1/compare/view?{query}",
      "/api/v1/compare/{a}-vs-{b}",
      "/api/v1/compare/in",
      "/api/v1/compare/in/{country}",
    ]);
    for (const e of doc.endpoints) expect(doc.$defs[e.schema.replace("#/$defs/", "")]).toBeTruthy();
  });
});

describe("the board feeds: neutral (spec §1.3, §8)", () => {
  it("no body holds a field that singles one artist out", () => {
    for (const { res } of bodies)
      for (const [path, key, value] of walk(res.body.data)) {
        expect(/^(his|isBurna|gold)$|^his[A-Z]/.test(key), `${res.body.endpoint} ${path}.${key}`).toBe(false);
        // `anchor` as an HTML id ("row-song-calm-down") is a page anchor;
        // as a flag it is the scatter's "this is him" (spec §1.3).
        if (key === "anchor") expect(typeof value, `${res.body.endpoint} ${path}.anchor`).toBe("string");
      }
  });

  it("the box office's artist chips are by nights, most first, with no artist moved up", () => {
    const chips = data("/api/v1/box-office").chips as { artist: string; nights: number }[];
    const nights = chips.map((c) => c.nights);
    expect(nights).toEqual([...nights].sort((x, y) => y - x));
    // burnaboystats' chipOrder pins Burna Boy first whatever his count; here a
    // tie keeps the board's own order, and he leads only on his nights.
    const burna = chips.findIndex((c) => c.artist === "Burna Boy");
    expect(chips.slice(0, burna).every((c) => c.nights >= chips[burna].nights)).toBe(true);
  });

  it("every rail is sorted on its own figure", () => {
    const rails = data("/api/v1/board").rails;
    for (const list of [rails.chartEntries.all, rails.chartEntries.withoutBillboard, rails.live] as { value: number }[][]) {
      const v = list.map((r) => r.value);
      expect(v).toEqual([...v].sort((x, y) => y - x));
    }
  });
});

describe("the board feeds: links (spec §1.2, §8)", () => {
  it("every in-section link is a FaveIQ path; every other is an absolute burnaboystats address", () => {
    for (const { res } of bodies)
      for (const [path, key, value] of walk(res.body.data)) {
        if (typeof value !== "string" || key === "endpoint") continue;
        if (value.startsWith("/")) expect(value.startsWith("/afrobeats"), `${res.body.endpoint} ${path}.${key} = ${value}`).toBe(true);
        if (/^https?:\/\/(www\.)?burnaboystats\.com/.test(value) && key !== "canonical")
          // Only pages that stay here: the methodology, the open data and
          // its documents, never a page of the moved section.
          expect(value, `${res.body.endpoint} ${path}.${key}`).toMatch(/^https:\/\/burnaboystats\.com\/(methodology|api\/|#)/);
      }
  });
});

describe("the board feeds: the index (spec 4.1, §8)", () => {
  const index = data("/api/v1/board/index");
  const pages = index.pages as { path: string; kind: string; canonical: string | null; noindex: boolean }[];

  it("holds 283 pages, ten types, each once", () => {
    expect(pages.length).toBe(283);
    expect(new Set(pages.map((p) => p.path)).size).toBe(283);
    const kinds = Object.fromEntries([...new Set(pages.map((p) => p.kind))].map((k) => [k, pages.filter((p) => p.kind === k).length]));
    expect(kinds).toEqual({
      board: 1,
      artist: 20,
      "artist-charts": 20,
      "artist-live": 20,
      compare: 1,
      pair: 190,
      "country-index": 1,
      country: 28,
      "box-office": 1,
      "box-office-countries": 1,
    });
    expect(index.pairs.length).toBe(190);
    expect(index.pairOrder.length).toBe(190);
    expect(index.countries.length).toBe(28);
    expect(index.featuredPairs.length).toBe(11);
    expect(index.pairs.map((p: { slug: string }) => p.slug)).toEqual(allPairs().map(([a, b]) => pairSlug(a, b)));
  });

  it("gives Burna Boy's 22 the canonicals handoff §5 lists, and no other page one", () => {
    // Typed as the handoff gives them: a real-string control, not the code's
    // own map read back.
    const expected: Record<string, string> = {
      "/afrobeats/burna-boy": "https://burnaboystats.com/certifications",
      "/afrobeats/burna-boy/charts": "https://burnaboystats.com/records/charts",
      "/afrobeats/burna-boy/live": "https://burnaboystats.com/live-charts",
    };
    for (const a of afrobeatsArtists) {
      const pair = pages.find(
        (p) => p.kind === "pair" && (p.path.endsWith(`/burna-boy-vs-${a.slug}`) || p.path.endsWith(`/${a.slug}-vs-burna-boy`)),
      );
      expect(pair, a.slug).toBeTruthy();
      expected[pair!.path] = `https://burnaboystats.com/compare/${pair!.path.split("/").at(-1)}`;
    }
    const withCanonical = Object.fromEntries(pages.filter((p) => p.canonical).map((p) => [p.path, p.canonical]));
    expect(Object.keys(withCanonical).length).toBe(22);
    expect(withCanonical).toEqual(expected);
  });

  it("marks no page noindex today (every artist is swept)", () => {
    expect(pages.filter((p) => p.noindex)).toEqual([]);
  });
});

describe("the board feeds: one figure, one count (spec §8)", () => {
  const board = data("/api/v1/board");

  it("Burna Boy's normalised record counts what his own pages count", () => {
    const row = (board.rows as Any[]).find((r) => r.artist.slug === "burna-boy");
    expect(row.certs).toBe(totalAwards());
    expect(row.countries).toBe(burnaCountries);
    expect(row.chartEntries.all).toBe(chartEntryCount);
    expect(row.no1s.all).toBe(numberOnes);
    expect(row.live).toBe(livePlacementCount);
  });

  it("every row is burnaboystats' own board row", () => {
    expect((board.rows as Any[]).map((r) => r.artist.slug)).toEqual(hubRows.map((r) => r.slug));
    for (const r of hubRows) {
      const row = (board.rows as Any[]).find((x) => x.artist.slug === r.slug);
      expect(
        { certs: row.certs, countries: row.countries, topCert: row.topCert, chartEntries: row.chartEntries.all, no1s: row.no1s.all, live: row.live },
        r.slug,
      ).toEqual({ certs: r.certs, countries: r.countries, topCert: r.topCert, chartEntries: r.chartEntries, no1s: r.no1s, live: r.live });
    }
    expect(board.count).toBe(sweptArtists.length + 1);
  });

  it("the two lists are the page's own, rank for rank", () => {
    const mine = (board.lists as Any[]).map((l) => ({ title: l.title, rows: l.rows.map((r: Any) => [r.slug, r.value, r.rank.label]) }));
    const page = hubLists().map((l) => ({
      title: l.title,
      rows: l.rows.map((r) => [r.row.slug, r.value, `${r.joint ? "=" : ""}${r.rank}`]),
    }));
    expect(mine).toEqual(page);
  });

  it("head to head is the board's order: No. 1 meets No. 2, everyone else meets No. 1", () => {
    const order = (board.rows as Any[]).map((r) => r.artist.slug);
    for (const slug of slugs) {
      const h = data(`/api/v1/board/${slug}`).headToHead;
      expect(h.opponent.artist.slug, slug).toBe(slug === order[0] ? order[1] : order[0]);
    }
  });

  it("Next walks the data order, Burna Boy first, and wraps (14.6: Wizkid's is Davido)", () => {
    expect(data("/api/v1/board/wizkid").next.slug).toBe("davido");
    expect(data("/api/v1/board/burna-boy").next.slug).toBe(afrobeatsArtists[0].slug);
    expect(data(`/api/v1/board/${afrobeatsArtists.at(-1)!.slug}`).next.slug).toBe("burna-boy");
  });

  it("every reversed pair points at its canonical slug", () => {
    const index = data("/api/v1/board/index");
    const canonical = new Set((index.pairs as Any[]).map((p) => p.slug));
    for (const { from, to } of index.pairOrder as { from: string; to: string }[]) {
      expect(canonical.has(to), to).toBe(true);
      const [x, y] = to.split("-vs-");
      expect(from).toBe(`${y}-vs-${x}`);
    }
  });

  it.each(slugs)("%s: every feed's totals equal its board row", (slug) => {
    const row = (board.rows as Any[]).find((r) => r.artist.slug === slug);
    const a = data(`/api/v1/board/${slug}`);
    const c = data(`/api/v1/board/${slug}/charts`);
    const l = data(`/api/v1/board/${slug}/live`);
    expect(a.views.all.total).toBe(row.certs);
    expect(a.views.all.countries).toBe(row.countries);
    expect(a.share.total).toBe(row.certs);
    expect(a.chartsCard.entries).toEqual(row.chartEntries);
    expect(a.chartsCard.no1s).toEqual(row.no1s);
    expect(a.liveCard.placements).toBe(row.live);
    expect({ all: c.stats.all.entries, withoutBillboard: c.stats.withoutBillboard.entries }).toEqual(row.chartEntries);
    expect({ all: c.stats.all.no1s, withoutBillboard: c.stats.withoutBillboard.no1s }).toEqual(row.no1s);
    expect(l.totals.placements).toBe(row.live);
    // The ledger holds every plaque the views count.
    expect((a.releases as Any[]).reduce((n, r) => n + r.certs.length, 0)).toBe(row.certs);
  });

  it("Burna Boy's hook is true: he leads the board on certifications", () => {
    // Round 14's words are true only while he is No. 1. The day another
    // artist passes him, this fails, and Paul picks new words before the feed
    // ships (spec §6, build plan open question 8).
    const [first, second] = board.rows as Any[];
    expect(first.artist.slug).toBe("burna-boy");
    expect(first.certs).toBeGreaterThan(second.certs);
    expect(first.hook).toBe(`The most certifications on the board: ${totalAwards()} in ${burnaCountries} countries.`);
    expect(burnaAsBoard.hook).toBe(first.hook);
  });
});

describe("the Billboard switch (spec §7)", () => {
  // The 22 codes whose chart burnaboystats names as Billboard's (Paul, 26 Nov
  // 2026: the switch takes every one of them down). Typed, not derived.
  const BILLBOARD_22 = [
    "US", "CA", "HK", "RO", "LU", "AR", "CO", "VN", "BR", "JP", "CL", "HR", "PE", "BO", "GLB", "GLBX",
    "PH", "TH", "ID", "TW", "MX", "EC",
  ];

  it("flags exactly the rows read from a Billboard chart", () => {
    for (const slug of slugs) {
      for (const r of data(`/api/v1/board/${slug}/charts`).releases as Any[])
        for (const e of r.entries) {
          expect(e.billboard, `${slug} ${r.title} ${e.c}`).toBe(isBillboardBody(e.body));
          if (slug !== "burna-boy") expect(e.billboard, `${slug} ${r.title} ${e.c}`).toBe(BILLBOARD_22.includes(e.c));
          else if (e.billboard) expect(BILLBOARD_22, `burna-boy ${r.title} ${e.c}`).toContain(e.c);
        }
    }
  });

  it("negative control: Burna Boy's Ecuador row was read from IFPI Latin America, and stays up", () => {
    const ec = (data("/api/v1/board/burna-boy/charts").releases as Any[]).flatMap((r) => r.entries).filter((e) => e.c === "EC");
    expect(ec.length).toBeGreaterThan(0);
    for (const e of ec) {
      expect(e.body).toBe("IFPI Latin America");
      expect(e.billboard).toBe(false);
    }
  });

  it.each(slugs)("%s: the twins differ only by the flagged rows", (slug) => {
    const c = data(`/api/v1/board/${slug}/charts`);
    const a = data(`/api/v1/board/${slug}`);
    const flagged = (c.releases as Any[]).flatMap((r) => r.entries).filter((e) => e.billboard).length;
    expect(c.stats.all.entries - c.stats.withoutBillboard.entries).toBe(flagged);
    if (flagged === 0) {
      for (const field of ["order", "railOrder", "mostCharted", "stats", "sourceClause", "ledes", "sourceNote", "seo", "share"])
        expect(c[field].withoutBillboard, `${slug} charts ${field}`).toEqual(c[field].all);
      expect(a.seo.withoutBillboard).toEqual(a.seo.all);
      for (const f of a.faqs as Any[]) expect(f.a.withoutBillboard).toBe(f.a.all);
    }
    // A FAQ answer that moves is the No. 1s one, and only it.
    for (const f of a.faqs as Any[])
      if (f.a.withoutBillboard !== f.a.all) expect(f.q).toMatch(/^How many No\. 1s does /);
  });

  it("the whole board twins on the same rule", () => {
    const board = data("/api/v1/board");
    for (const row of board.rows as Any[]) {
      const c = data(`/api/v1/board/${row.artist.slug}/charts`);
      expect(row.chartEntries.withoutBillboard).toBe(c.stats.withoutBillboard.entries);
      expect(row.no1s.withoutBillboard).toBe(c.stats.withoutBillboard.no1s);
    }
  });
});

describe("the feeds say what the pages say, word for word", () => {
  it("the Board's title, description and live note", () => {
    const seo = data("/api/v1/board").seo;
    expect(seo.title).toBe(boardMeta.title);
    expect(seo.description).toBe(boardMeta.description);
    expect(readFileSync("app/afrobeats/page.tsx", "utf8")).toContain(`"${LIVE_CADENCE_NOTE}"`);
  });

  it.each(afrobeatsArtists.map((a) => a.slug))("/afrobeats/%s: title, description and the phone's sentences", async (slug) => {
    const feed = data(`/api/v1/board/${slug}`);
    const meta = await artistMeta({ params: Promise.resolve({ artist: slug }) });
    expect(feed.seo.all.title).toBe(meta.title);
    expect(feed.seo.all.description).toBe(meta.description);
    const text = textOf(renderToStaticMarkup(await ArtistPage(params(slug))));
    const all = feed.views.all;
    expect(text).toContain(all.lede);
    if (all.provenanceShort) expect(text).toContain(all.provenanceShort);
    expect(text).toContain(feed.verified.sentence);
    for (const pill of all.strip) expect(text).toContain(pill.label);
    for (const f of feed.faqs as Any[]) {
      // The rival question is round 14's (the board's order), not the page's
      // curated pairing, so it is the one answer that may differ.
      if (f.q.startsWith("Is ")) continue;
      expect(text).toContain(f.q);
      expect(text).toContain(f.a.all);
    }
  });

  it.each(afrobeatsArtists.filter((a) => a.charts.length > 0).map((a) => a.slug))("/afrobeats/%s/charts: title, description, ledes", async (slug) => {
    const feed = data(`/api/v1/board/${slug}/charts`);
    const meta = await chartsMeta({ params: Promise.resolve({ artist: slug }) });
    expect(feed.seo.all.title).toBe(meta.title);
    expect(feed.seo.all.description).toBe(meta.description);
    const text = textOf(renderToStaticMarkup(await ChartsPage(params(slug))));
    expect(text).toContain(feed.ledes.all.desktop);
    expect(text).toContain(feed.ledes.all.phone);
    // The source note is round 14's neutral form of the page's own sentence.
    expect(text).toContain(feed.sourceNote.all.replace("the same standard for every artist on the board", "the same standard used for Burna Boy"));
  });

  it.each(afrobeatsArtists.filter((a) => liveBoardOf(a.slug)).map((a) => a.slug))("/afrobeats/%s/live: title and description", async (slug) => {
    const feed = data(`/api/v1/board/${slug}/live`);
    const meta = await liveMeta({ params: Promise.resolve({ artist: slug }) });
    expect(feed.seo.title).toBe(meta.title);
    expect(feed.seo.description).toBe(meta.description);
  });

  it("the box office: title, description, and the leader the page names", () => {
    const feed = data("/api/v1/box-office");
    expect(feed.seo.title).toBe(revenueMeta.title);
    expect(feed.seo.description).toBe(revenueMeta.description);
    const b = showsBoard();
    expect(feed.leader.artist).toBe(b.artists[0].artist);
    if (feed.leader.artist === "Burna Boy") {
      expect(feed.leader.top10).toBe(b.hisTop10);
      expect(feed.leader.share.pct).toBe(pct(b.hisShare));
      expect(feed.leader.nights).toBe(b.hisCount);
    }
  });

  it("the box office by country: title, description, and the leaders the page names", () => {
    const feed = data("/api/v1/box-office/countries");
    expect(feed.seo.title).toBe(revenueCountriesMeta.title);
    expect(feed.seo.description).toBe(revenueCountriesMeta.description);
    const b = revenueByCountry();
    const hero = heroFigures(b);
    if (feed.overallLeader.artist === "Burna Boy") {
      expect(feed.overallLeader.total).toBe(hero.hisTotal);
      expect(feed.overallLeader.share.pct).toBe(pct(hero.hisShare));
      expect(feed.others.total).toBe(hero.othersTotal);
      expect(feed.others.artists).toBe(hero.otherArtists);
    }
    if (feed.mostLed.artist === "Burna Boy") expect(feed.mostLed.count).toBe(b.hisLeads);
    expect(feed.seo.shareDescription).toBe(revenueCountriesMeta.openGraph?.description);
  });
});
