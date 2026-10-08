// @vitest-environment node
import { describe, it, expect, afterEach } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { findCard, getStatCards, fiveHundredCard } from "../app/lib/statCards";
import {
  roster500,
  rank500,
  ranked500,
  standings500,
  BOARD_AS_OF_500M,
  SOURCE_500M,
  THRESHOLD_500M,
  songTitle500,
  type Roster500,
  type Snapshot500,
} from "../app/data/african500m";
import { statBoxes, HIGHLIGHT } from "../app/data/africasBiggest";
import { BURNA_PORTRAIT } from "../app/lib/artistImages";
import { BURNA_ROLES } from "../app/data/songRoles";
import { GET } from "../app/stat-card/route";
import fixtureSnapshotJson from "./fixtures/african500m.snapshot-2026-10-06.json";

/**
 * The "500m" share card (Paul, 8 Oct 2026): his songs past 500 million Spotify
 * streams, off the 500M board on /records/africas-biggest.
 *
 * The stats bot rewrites the board's kworb snapshot four times a day and runs
 * this suite before it commits, so the live checks re-derive every figure from
 * the board; only the frozen boards below are pinned to the letter.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const MOST = /\bmost\b/i;
const card = getStatCards().find((c) => c.id === "500m")!;
const box = statBoxes.find((b) => b.id === "most-500m-stream-songs")!;

/** The board's data on 8 Oct 2026, frozen (as tests/african500m.test.tsx has it). */
const FIXTURE_SNAPSHOT: Snapshot500 = fixtureSnapshotJson;
const FIXTURE_ROSTER: Roster500 = { ...roster500, readings: (roster500.readings ?? []).filter((r) => r.read <= "2026-10-08") };
const BURNA = roster500.artists.find((a) => a.name === HIGHLIGHT)!;
const REMA = roster500.artists.find((a) => a.name === "Rema")!;
const copy = (s: Snapshot500): Snapshot500 => JSON.parse(JSON.stringify(s));

describe("the live card is the board's figure", () => {
  const him = ranked500.find((r) => r.name === HIGHLIGHT)!;

  it("is listed on /share and resolves on /stat-card", () => {
    expect(card).toBeDefined();
    expect(findCard("500m")).toEqual(card);
    // /share lists whatever getStatCards returns.
    expect(read("app/share/page.tsx")).toContain("getStatCards().map(");
  });

  it("prints the count on his board row, and the board's own date", () => {
    const row = box.entries!.find((e) => e.name === HIGHLIGHT)!;
    expect(card.value).toBe(row.value);
    expect(card.value).toBe(String(standings500.find((r) => r.name === HIGHLIGHT)!.count));
    expect(card.asOf).toBe(BOARD_AS_OF_500M);
    expect(box.meta).toContain(
      new Date(`${card.asOf}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }),
    );
  });

  it("says “the most” only while the board has him alone at the top", () => {
    const alone = ranked500.filter((r) => r.count >= him.count).length === 1;
    expect(MOST.test(`${card.label} ${card.kicker}`)).toBe(alone);
    if (alone) expect(card.kicker.startsWith("The most of any African artist: ")).toBe(true);
  });

  it("names every song the board counts for him, a feature with its lead act", () => {
    for (const s of him.songs) {
      // The site's title for a song the roles file ("Location"), or Spotify's
      // for one they do not hold yet.
      const filed = Object.entries(BURNA_ROLES).find(([, r]) => r.spotifyTitle === s.title)?.[0];
      expect(card.kicker.replace(/\u00a0/g, " "), s.title).toContain(`“${filed ?? songTitle500(s.title)}”`);
      expect(card.detail, s.title).toContain(songTitle500(s.title));
    }
    const location = him.songs.find((s) => s.title === "Location (feat. Burna Boy)");
    if (location) {
      expect(location.role).toBe("featured");
      expect(card.kicker).toContain("“Location” (Dave ft. Burna Boy)");
      expect(card.detail).toContain("featured on “Location (feat. Burna Boy)”");
    }
  });

  it("cites what the board cites, and is gold like every share card", () => {
    expect(card.source).toBe("Spotify · kworb");
    expect(SOURCE_500M).toContain("kworb.net songs page");
    expect(SOURCE_500M).toContain("Spotify's own play count");
    expect(card.href).toBe("/records/africas-biggest");
    expect(card.chip).toBe(`${THRESHOLD_500M / 1e6}M songs`);
    // One renderer for every card, its gold fixed: no per-card colour exists.
    expect(Object.keys(card).sort()).toEqual(["asOf", "chip", "detail", "href", "id", "kicker", "label", "source", "value", "watermark"]);
  });

  it("types nothing: the builder holds no count, song, artist or line", () => {
    const src = read("app/lib/statCards.ts");
    const at = src.indexOf("export function fiveHundredCard");
    const block = src.slice(at, src.indexOf("\n}\n", at));
    expect(block.length).toBeGreaterThan(0);
    expect(block).not.toMatch(/value: "/);
    expect(block).not.toMatch(/\b500\b|million Spotify streams"|Location|Last Last|Dai Dai|Dave|Rema/);
  });
});

describe("the frozen boards", () => {
  it("8 Oct 2026, with the “Dai Dai” reading: three, alone at the top", () => {
    const c = fiveHundredCard(rank500(FIXTURE_ROSTER, FIXTURE_SNAPSHOT), 2);
    expect(c).toEqual({
      id: "500m",
      source: "Spotify · kworb",
      watermark: "500M",
      href: "/records/africas-biggest",
      detail:
        "Every Spotify song he is credited on with 500 million plays or more, lead or featured, as the 500M board counts them: " +
        "featured on “Location (feat. Burna Boy)” 740M · “Last Last” 615M · “Dai Dai” 502M. " +
        "“Dai Dai” is counted at 501,627,594 plays — Spotify's own count, read on 8 October 2026 — while kworb's page shows 499,449,618. " +
        "No other African artist has more than two.",
      value: "3",
      label: "songs past 500 million Spotify streams",
      kicker: "The most of any African artist: “Location” (Dave ft. Burna Boy), “Last\u00a0Last” and “Dai\u00a0Dai”",
      chip: "500M songs",
      asOf: "2026-10-08",
    });
  });

  it("negative control, 7 Oct 2026 (no reading yet): two, one of seven at the top — no “most”", () => {
    const shipped = rank500({ ...FIXTURE_ROSTER, readings: [] }, FIXTURE_SNAPSHOT);
    // The premise, as tests/african500m.test.tsx has the board that shipped.
    expect(shipped.filter((r) => r.rank === 1).map((r) => r.name)).toEqual(["Rema", "Tems", "Tyla", "CKay", "Ayra Starr", "Burna Boy", "Moliy"]);
    for (const listFrom of [1, 2]) {
      const c = fiveHundredCard(shipped, listFrom);
      expect(c.value).toBe("2");
      expect(c.kicker).toBe("Joint first among African artists: “Location” (Dave ft. Burna Boy) and “Last\u00a0Last”");
      expect(MOST.test(`${c.label} ${c.kicker}`)).toBe(false);
      expect(c.detail).toContain("Rema, Tems, Tyla, CKay, Ayra Starr and Moliy have as many.");
      expect(c.detail).not.toContain("read on");
      expect(c.asOf).toBe("2026-10-06");
    }
    // The 8 Oct words would have been false that day.
    expect(fiveHundredCard(shipped).kicker).not.toContain("The most of any African artist");
  });

  it("passed: someone with more takes the top, and the card gives his rank instead", () => {
    const passed = copy(FIXTURE_SNAPSHOT);
    passed.pages[REMA.spotifyId].songs.push(
      { id: "1".repeat(22), title: "Test One", streams: THRESHOLD_500M + 1, kworbStar: false },
      { id: "2".repeat(22), title: "Test Two", streams: THRESHOLD_500M + 2, kworbStar: false },
    );
    const c = fiveHundredCard(rank500(FIXTURE_ROSTER, passed), 2);
    expect(c.value).toBe("3");
    expect(c.kicker.startsWith("No. 2 among African artists: ")).toBe(true);
    expect(MOST.test(`${c.label} ${c.kicker}`)).toBe(false);
    expect(c.detail).toContain("Rema leads the board with four.");
  });

  it("a fourth song joins the count and the names with no edit; a feature with no stored billing keeps the board's words", () => {
    const more = copy(FIXTURE_SNAPSHOT);
    more.pages[BURNA.spotifyId].songs.push({ id: "3".repeat(22), title: "Test Song (feat. Burna Boy)", streams: THRESHOLD_500M + 5, kworbStar: true });
    const c = fiveHundredCard(rank500(FIXTURE_ROSTER, more), 2);
    expect(c.value).toBe("4");
    expect(c.kicker).toBe(
      "The most of any African artist: “Location” (Dave ft. Burna Boy), “Last\u00a0Last”, “Dai\u00a0Dai” and featured on “Test Song (feat. Burna Boy)”",
    );
    expect(c.detail).toContain("No other African artist has more than two.");
  });

  it("one song reads in the singular, and a tie below the top is joint", () => {
    const one = copy(FIXTURE_SNAPSHOT);
    for (const s of one.pages[BURNA.spotifyId].songs) if (s.title !== "Last Last") s.streams = Math.min(s.streams, THRESHOLD_500M - 1);
    const ranked = rank500({ ...FIXTURE_ROSTER, readings: [] }, one);
    const c = fiveHundredCard(ranked, 2);
    expect(c.value).toBe("1");
    expect(c.label).toBe("song past 500 million Spotify streams");
    // He shares seventh with every other artist on one song; until 8 Oct 2026
    // the card said plain "No. 7" here.
    expect(ranked.filter((r) => r.rank === 7).length).toBeGreaterThan(1);
    expect(c.kicker).toBe("Joint No. 7 among African artists: “Last\u00a0Last”");
    expect(c.detail).toContain("Rema, Tems, Tyla, CKay, Ayra Starr and Moliy lead the board with two.");
    expect(c.detail.endsWith(" have as many as Burna Boy.")).toBe(true);
  });
});

describe("/stat-card renders the card", () => {
  const realFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = realFetch;
  });
  const size = (b: Buffer) => ({ w: b.readUInt32BE(16), h: b.readUInt32BE(20) });

  it.each([
    ["square", 1080, 1080],
    ["story", 1080, 1920],
  ] as const)("%s: a %ix%i PNG", async (ratio, w, h) => {
    // No network: the portrait answers a plain dark square.
    const dark = await sharp({ create: { width: 640, height: 640, channels: 3, background: "#0c0a09" } }).png().toBuffer();
    globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input instanceof Request ? input.url : input);
      if (url === BURNA_PORTRAIT) return new Response(new Uint8Array(dark), { headers: { "Content-Type": "image/png" } });
      return realFetch(input as never, init as never);
    }) as typeof fetch;
    const res = GET(new Request(`http://x/stat-card?stat=500m&ratio=${ratio}`));
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("image/png");
    const b = Buffer.from(await res.arrayBuffer());
    expect(b.subarray(0, 4).toString("hex")).toBe("89504e47");
    expect(size(b)).toEqual({ w, h });
  }, 60000);
});
