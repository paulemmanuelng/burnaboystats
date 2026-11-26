import { describe, it, expect, vi } from "vitest";
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
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage, { generateMetadata as compareMeta } from "../app/compare/page";
import PairPage, { generateMetadata as pairMeta } from "../app/compare/[pair]/page";
import InPage, { metadata as inMeta } from "../app/compare/in/page";
import CountryPage, { generateMetadata as countryMeta } from "../app/compare/in/[country]/page";
import { GET as viewRoute } from "../app/api/v1/compare/view/route";
import { GET as pairRoute } from "../app/api/v1/compare/[pair]/route";
import { GET as inRoute } from "../app/api/v1/compare/in/route";
import { GET as countryRoute } from "../app/api/v1/compare/in/[country]/route";
import { allPairs, pairSlug } from "../app/lib/comparePairs";
import { certCountryCodes, countrySlug } from "../app/lib/certCountry";
import { compareView, ENGINE_CACHE_CONTROL, normalise } from "../app/lib/boardFeeds/compare";
import { FEED_SCHEMAS, schemaErrors } from "../app/lib/boardFeeds/schema";
import { contentHashOf } from "../app/lib/boardFeeds/envelope";
import { LIVE_CACHE_CONTROL } from "../app/lib/api";

/**
 * The compare engine API (FaveIQ feed spec §5) and its three static feeds
 * (4.6): the same numbers and words as burnaboystats' own compare pages for
 * the same state — every pair, every market, the index and a spread of query
 * states, each held to the rendered page (§5.4, §8).
 */

type Any = any;
const req = (path: string) => new Request(`https://burnaboystats.com${path}`);
const read = async (res: Response) => ({ status: res.status, headers: res.headers, body: (await res.json()) as Any });

/** The page's text as a reader gets it, its note marks (FaveIQ's to place) out. */
const text = (el: React.ReactElement) =>
  renderToStaticMarkup(el)
    .replace(/<[^>]+>/g, "")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/ ?[¹†‡§¶]/g, "");

const PAIRS = allPairs().map(([a, b]) => pairSlug(a, b));
const COUNTRIES = certCountryCodes().map(countrySlug);

/** Every place a view prints a figure or a sentence the page prints too. */
function expectWordsOnPage(view: Any, page: string, label: string) {
  const w = view.words;
  expect(page, `${label} h1`).toContain(w.h1);
  if (w.pairLine) expect(page, `${label} pairLine`).toContain(w.pairLine);
  if (w.lede) expect(page, `${label} lede`).toContain(`${w.lede.before}${w.lede.em ?? ""}${w.lede.after}`);
  if (w.leadLine) expect(page, `${label} leadLine`).toContain(`${w.leadLine.strong}${w.leadLine.rest}`);
  if (w.waiting) expect(page, `${label} waiting`).toContain(w.waiting);
  if (w.nextLead) expect(page, `${label} nextLead`).toContain(w.nextLead);
  if (w.refusal) expect(page, `${label} refusal`).toContain(`${w.refusal.strong}${w.refusal.rest}`);
  if (w.empty) expect(page, `${label} empty`).toContain(w.empty);
  if (view.state.ready || view.state.partial) expect(page, `${label} coverage`).toContain(w.coverage);
  if (view.summary?.lead) expect(page, `${label} summary`).toContain(`${view.summary.lead}${view.summary.rest}`);
  for (const side of ["a", "b"] as const)
    if (view.sides[side]) expect(page, `${label} side ${side}`).toContain(view.sides[side].total.toLocaleString("en-US"));
  for (const r of view.rows) expect(page, `${label} row ${r.country}`).toContain(r.name);
  for (const t of view.collapsed) expect(page, `${label} fold`).toContain(`where only ${t.artist} is certified`);
  if (view.notes.caveats) expect(page, `${label} caveats`).toContain(view.notes.caveats);
  const c = view.country;
  if (c?.kind === "index") {
    expect(page, `${label} index lede`).toContain(c.lede);
    for (const e of c.entries) expect(page, `${label} ${e.name}`).toContain(e.name);
  }
  if (c?.kind === "board") {
    expect(page, `${label} figureMeta`).toContain(c.words.figureMeta);
    expect(page, `${label} next`).toContain(c.words.next.lead);
    if (c.words.sharedLine) expect(page, `${label} shared`).toContain(c.words.sharedLine);
    if (c.moreAtCut) expect(page, `${label} more at cut`).toContain(`+ ${c.moreAtCut.count} more at ${c.moreAtCut.units.toLocaleString("en-US")} units: ${c.moreAtCut.titles.join(", ")}.`);
    for (const n of c.words.notes) expect(page, `${label} note ${n.key}`).toContain(n.text);
    for (const p of c.programs) for (const l of p.lines) expect(page, `${label} ${l.artist.name}`).toContain(l.artist.name);
  }
}

describe("normalising (spec 5.1)", () => {
  it("drops unknown keys, unknown artists, bad values and anything over 200 characters", () => {
    const { query } = normalise(
      new URLSearchParams({ a: "wizkid", b: "nobody", mode: "nonsense", feat: "yes", ng: "maybe", utm_source: "x", qa: "x".repeat(201) }),
    );
    expect(query).toEqual([["a", "wizkid"]]);
  });

  it("collapses equal states to one key, in one order", () => {
    const one = normalise(new URLSearchParams("b=davido&a=wizkid&mode=artists&country=ghana&sa=Essence")).query;
    const two = normalise(new URLSearchParams("a=wizkid&b=davido")).query;
    expect(one).toEqual(two);
    expect(two).toEqual([["a", "wizkid"], ["b", "davido"]]);
  });

  it("keeps a release only in its own format, and a search only while its side is unpicked", () => {
    const songs = normalise(new URLSearchParams("mode=songs&a=wizkid&sa=Essence&qa=ess&b=tems&qb=free")).query;
    expect(songs).toEqual([["mode", "songs"], ["a", "wizkid"], ["b", "tems"], ["sa", "Essence"], ["qb", "free"]]);
    const albums = normalise(new URLSearchParams("mode=albums&a=wizkid&sa=Essence")).query;
    expect(albums).toEqual([["mode", "albums"], ["a", "wizkid"]]);
  });

  it("reads a market by its name or its code, and nothing else in country mode", () => {
    expect(normalise(new URLSearchParams("mode=country&country=UK&a=wizkid&ng=1&all=1")).query).toEqual([["mode", "country"], ["country", "united-kingdom"]]);
    expect(normalise(new URLSearchParams("mode=country&country=atlantis")).query).toEqual([["mode", "country"]]);
  });
});

describe("the engine API route (spec §5)", () => {
  it("never answers 400: junk is dropped and the state echoed", async () => {
    const { status, headers, body } = await read(viewRoute(req("/api/v1/compare/view?a=wizkid&b=%3Cscript%3E&mode=x&ng=2")));
    expect(status).toBe(200);
    expect(headers.get("Cache-Control")).toBe(ENGINE_CACHE_CONTROL);
    expect(headers.get("ETag")).toBe(`"${body.contentHash}"`);
    expect(body.contentHash).toBe(contentHashOf(body.data));
    expect(body.data.query).toEqual([["a", "wizkid"]]);
    expect(schemaErrors(FEED_SCHEMAS.compare, body)).toEqual([]);
  });

  it("answers a reversed pair and an unknown market with the JSON 404", async () => {
    const [x, y] = PAIRS[0].split("-vs-");
    const rev = await read(await pairRoute(req(`/api/v1/compare/${y}-vs-${x}`), { params: Promise.resolve({ pair: `${y}-vs-${x}` }) }));
    expect(rev.status).toBe(404);
    expect(rev.body.error).toBe("not-found");
    const nowhere = await read(await countryRoute(req("/api/v1/compare/in/atlantis"), { params: Promise.resolve({ country: "atlantis" }) }));
    expect(nowhere.status).toBe(404);
  });
});

describe("the static compare feeds equal the pages (spec 4.6, 5.4)", () => {
  it.each(PAIRS)("/compare/%s", async (pair) => {
    const { status, headers, body } = await read(await pairRoute(req(`/api/v1/compare/${pair}`), { params: Promise.resolve({ pair }) }));
    expect(status).toBe(200);
    expect(headers.get("Cache-Control")).toBe(LIVE_CACHE_CONTROL);
    expect(schemaErrors(FEED_SCHEMAS.compare, body), pair).toEqual([]);
    const view = body.data;
    expect(view.state.pairView).toBe(true);
    expect(view.state.ready).toBe(true);
    const meta = await pairMeta({ params: Promise.resolve({ pair }) });
    expect(view.seo.title).toBe(meta.title);
    expect(view.seo.description).toBe(meta.description);
    // A Burna Boy pair canonicals to its burnaboystats page; every other to
    // its FaveIQ twin.
    expect(view.canonical).toBe(pair.includes("burna-boy") ? `https://burnaboystats.com/compare/${pair}` : `/afrobeats/compare/${pair}`);
    expectWordsOnPage(view, text(await PairPage({ params: Promise.resolve({ pair }) })), pair);
  });

  it("/compare/in", async () => {
    const { body } = await read(inRoute());
    expect(schemaErrors(FEED_SCHEMAS.compare, body)).toEqual([]);
    expect(body.data.seo.title).toBe(inMeta.title);
    expect(body.data.country.entries.length).toBe(28);
    expectWordsOnPage(body.data, text(await InPage()), "/compare/in");
  });

  it.each(COUNTRIES)("/compare/in/%s", async (country) => {
    const { status, body } = await read(await countryRoute(req(`/api/v1/compare/in/${country}`), { params: Promise.resolve({ country }) }));
    expect(status).toBe(200);
    expect(schemaErrors(FEED_SCHEMAS.compare, body), country).toEqual([]);
    const meta = await countryMeta({ params: Promise.resolve({ country }) });
    expect(body.data.seo.title).toBe(meta.title);
    expect(body.data.seo.description).toBe(meta.description);
    expectWordsOnPage(body.data, text(await CountryPage({ params: Promise.resolve({ country }) })), country);
  });
});

/** A spread of the tool's other states: arrival, one side either way, the
 *  refusals, both record modes, the switches, and Show all. */
const STATES = [
  "",
  "a=wizkid",
  "b=tems",
  "a=davido&b=davido",
  "a=wizkid&b=davido&ng=0",
  "a=seyi-vibez&b=asake&ng=1",
  "a=burna-boy&b=wizkid&feat=0",
  "a=burna-boy&b=wizkid&all=1",
  "a=tyla&b=ayra-starr&all=1&feat=0",
  "mode=songs",
  "mode=songs&a=wizkid",
  "mode=songs&a=wizkid&sa=Essence",
  "mode=songs&a=wizkid&sa=Essence&b=tems",
  "mode=songs&a=wizkid&sa=Essence&b=tems&sb=Essence",
  "mode=songs&a=rema&sa=Calm%20Down&b=burna-boy&sb=Last%20Last",
  "mode=albums&a=burna-boy&b=wizkid",
  "mode=albums&a=burna-boy&sa=Love%2C%20Damini&b=wizkid&sb=Made%20in%20Lagos",
  "mode=country&feat=0",
  "mode=country&country=nigeria&feat=0",
];

describe("the engine API equals the tool, state by state (spec 5.4)", () => {
  it.each(STATES)("/compare?%s", async (qs) => {
    const { body } = await read(viewRoute(req(`/api/v1/compare/view?${qs}`)));
    expect(schemaErrors(FEED_SCHEMAS.compare, body), qs).toEqual([]);
    const sp = Object.fromEntries(body.data.query);
    const meta = await compareMeta({ searchParams: Promise.resolve(sp) });
    // The tool's own title names Burna Boy first; FaveIQ's is neutral.
    if (meta.title !== "Compare Certified Units — Burna Boy vs Wizkid & More") expect(body.data.seo.title, qs).toBe(meta.title);
    else expect(body.data.seo.title).toBe("Compare Certified Units — Afrobeats Artists Head to Head");
    expect(body.data.seo.description, qs).toBe(meta.description);
    expectWordsOnPage(body.data, text(await ComparePage({ searchParams: Promise.resolve(sp) })), qs || "arrival");
  });

  it("the view is the static feed's for the same state", () => {
    const pair = PAIRS[5];
    const [a, b] = pair.split("-vs-");
    const view = compareView({ a, b });
    expect(view.rows).toEqual(compareView({ a, b }, { path: `/compare/${pair}` }).rows);
  });
});

describe("the compare feeds: neutral and FaveIQ's paths (spec §1, §8)", () => {
  it("no field singles one artist out, and every link in the section is a FaveIQ path", async () => {
    const bodies: Any[] = [];
    for (const qs of STATES) bodies.push((await read(viewRoute(req(`/api/v1/compare/view?${qs}`)))).body);
    for (const pair of PAIRS.slice(0, 25)) bodies.push((await read(await pairRoute(req(""), { params: Promise.resolve({ pair }) }))).body);
    for (const country of COUNTRIES) bodies.push((await read(await countryRoute(req(""), { params: Promise.resolve({ country }) }))).body);
    const walk = function* (v: unknown, path = "$"): Generator<[string, string, unknown]> {
      if (Array.isArray(v)) for (let i = 0; i < v.length; i++) yield* walk(v[i], `${path}[${i}]`);
      else if (v && typeof v === "object")
        for (const [k, x] of Object.entries(v)) {
          yield [path, k, x];
          yield* walk(x, `${path}.${k}`);
        }
    };
    for (const body of bodies)
      for (const [path, key, value] of walk(body.data)) {
        expect(/^(his|isBurna)$|^his[A-Z]/.test(key), `${body.endpoint} ${path}.${key}`).toBe(false);
        // `gold` as a flag is the "this is him" highlight; as a threshold
        // (a programme's Gold level) it is a number.
        if (key === "gold") expect(typeof value, `${body.endpoint} ${path}.gold`).not.toBe("boolean");
        if (typeof value !== "string" || key === "endpoint") continue;
        if (value.startsWith("/")) expect(value.startsWith("/afrobeats"), `${body.endpoint} ${path}.${key} = ${value}`).toBe(true);
        if (/^https:\/\/burnaboystats\.com/.test(value) && key !== "canonical")
          expect(value, `${body.endpoint} ${path}.${key}`).toMatch(/^https:\/\/burnaboystats\.com\/(methodology|api\/|#)/);
      }
  });
});
