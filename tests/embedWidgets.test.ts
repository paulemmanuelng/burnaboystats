import { describe, it, expect } from "vitest";
import { GET } from "../app/embed/[widget]/route";
import { EMBED_WIDGETS, EMBED_SLUGS, renderEmbed, latestContent, LATEST_SIZED_FOR } from "../app/lib/embedWidgets";
import { EMBED_TOKENS } from "../app/lib/embedTheme";
import { embedSnippet, embedPath } from "../app/lib/embedSnippet";
import { spotifyTotalStreams, spotifyTotalStreamsExact } from "../app/data/streamingTotals";
import { allItems, COUNTRIES } from "../app/data/certifications";
import { allChartItems } from "../app/data/charts";
import { DAI_DAI_SPOTIFY_NO1_DAYS } from "../app/data/daiDai";
import { updates, type Update } from "../app/data/updates";
import sitemap from "../app/sitemap";
import { searchIndex } from "../app/lib/searchIndex";
import { siteUrl } from "../app/site";

/**
 * The embed widgets, /embed/<widget>: small live boxes other sites frame.
 *
 * A box on somebody else's page is the one place a figure from this site is
 * read with no way back to the page that proves it except the box's own link.
 * So every figure here is checked against the RAW data — the certificate
 * rows, the chart entries, the feed — counted again in this file, not against
 * the constant the widget module imports (a check built from the same constant
 * on both sides balances for any value). And every box is checked for the
 * link it exists to carry: one normal, followed link to the canonical domain.
 */

async function fetchWidget(slug: string) {
  const res = await GET(new Request(`https://burnaboystats.com/embed/${slug}`), {
    params: Promise.resolve({ widget: slug }),
  });
  return { res, doc: new DOMParser().parseFromString(await res.text(), "text/html") };
}

const text = (doc: Document, sel: string) => doc.querySelector(sel)?.textContent?.trim() ?? null;

describe("the embed widgets render the data's own figures", () => {
  it("serves one HTML document per widget, and nothing for an unknown name", async () => {
    expect(EMBED_SLUGS).toEqual(["career-streams", "certifications", "dai-dai", "latest"]);
    for (const slug of EMBED_SLUGS) {
      const { res, doc } = await fetchWidget(slug);
      expect(res.status, slug).toBe(200);
      expect(res.headers.get("content-type")).toBe("text/html; charset=utf-8");
      expect(doc.querySelector("title")?.textContent, slug).toMatch(/Burna Boy/);
    }
    const { res } = await fetchWidget("net-worth");
    expect(res.status).toBe(404);
  });

  it("career streams: the site's published figure, and the exact total rounds to it", async () => {
    const { doc } = await fetchWidget("career-streams");
    expect(text(doc, ".figure")).toBe(spotifyTotalStreams);
    expect(text(doc, ".detail")).toContain(spotifyTotalStreamsExact);
    // Anchored outside the widget: the unrounded total, in billions to two
    // places, is the compact figure. A box that printed a stale compact string
    // beside a fresh exact one would fail here.
    const exact = Number(spotifyTotalStreamsExact.replace(/,/g, ""));
    expect(`${(exact / 1e9).toFixed(2)}B`).toBe(spotifyTotalStreams);
  });

  it("certifications: every plaque, every certifying country, and the tier split, counted from the rows", async () => {
    const { doc } = await fetchWidget("certifications");
    const plaques = allItems.flatMap((r) => r.certs);
    const countries = new Set(plaques.map((c) => c.c));
    expect(text(doc, ".figure")).toBe(String(plaques.length));
    expect(text(doc, ".label")).toBe(`certifications in ${countries.size} countries`);
    // Every country in the register list holds at least one plaque, so the two
    // country counts are the same number; if they ever part, the box's label
    // has to say which one it means.
    expect(countries.size).toBe(Object.keys(COUNTRIES).length);

    const cells = [...doc.querySelectorAll(".stat")].map((s) => ({
      v: s.querySelector(".statV")?.textContent,
      l: s.querySelector(".statL")?.textContent,
    }));
    expect(cells.map((c) => c.l)).toEqual(["Diamond", "Platinum", "Gold", "Silver"]);
    for (const c of cells) {
      expect(c.v, c.l ?? "").toBe(String(plaques.filter((p) => p.level === c.l).length));
    }
    expect(cells.reduce((n, c) => n + Number(c.v), 0)).toBe(plaques.length);
  });

  it("Dai Dai: country No. 1s, Global 200 weeks, Spotify days and chart entries, from the chart rows", async () => {
    const { doc } = await fetchWidget("dai-dai");
    const dd = allChartItems.find((r) => r.title === "Dai Dai")!;
    const countryOnes = dd.entries.filter((e) => e.peak === 1 && e.c !== "GLB" && e.c !== "GLBX").length;
    expect(text(doc, ".figure")).toBe(String(countryOnes));
    expect(text(doc, ".label")).toMatch(/countries at No\. 1/);

    const stat = (label: RegExp) =>
      [...doc.querySelectorAll(".stat")].find((s) => label.test(s.querySelector(".statL")?.textContent ?? ""))
        ?.querySelector(".statV")?.textContent;
    const glb = dd.entries.find((e) => e.c === "GLB")!;
    expect(stat(/Billboard Global 200/)).toBe(String(glb.weeksAtPeak));
    expect(stat(/Spotify/)).toBe(String(DAI_DAI_SPOTIFY_NO1_DAYS));
    expect(stat(/official chart entries/)).toBe(String(dd.entries.length));
  });

  it("latest milestone: the newest entry in the feed, every word of it once, under its own category and date", async () => {
    const { doc } = await fetchWidget("latest");
    const newest = [...updates].sort((a, b) => b.date.localeCompare(a.date))[0];
    // The feed is kept newest first; the box reads the top, which must be the
    // newest by date as well.
    expect(updates[0].date).toBe(newest.date);
    const headline = text(doc, ".headline");
    const body = text(doc, ".body") ?? "";
    const printed = headline ? `${headline} ${body}` : body;
    // The headline plus the body is the entry: nothing dropped, nothing
    // printed twice. Separators the cut consumed (": ", ". ", " — ") are
    // ignored, on both sides alike.
    const squash = (s: string) => s.replace(/[\s:.—–-]+/g, " ").trim();
    expect(squash(printed)).toBe(squash(updates[0].text));
    const meta = text(doc, ".meta") ?? "";
    expect(meta).toContain(updates[0].category);
    const day = new Date(`${updates[0].date}T12:00:00Z`).getUTCDate();
    expect(meta).toMatch(new RegExp(`\\b${day}\\b`));
  });

  /** What in the widget's stylesheet would cut the body text off. */
  function cutProblems(html: string): string[] {
    const body = html.match(/\.body\{[^}]*\}/)?.[0];
    if (!body) return ["no .body rule"];
    return ["line-clamp", "text-overflow", "overflow:hidden", "max-height"].filter((p) => body.includes(p));
  }

  /** Feed entries the latest box, at its fixed height, was not measured for. */
  function oversize(entries: Update[]): string[] {
    return entries.flatMap((u) => {
      const c = latestContent(u);
      const headline = c.headline?.length ?? 0;
      const out: string[] = [];
      if (headline > LATEST_SIZED_FOR.headline) out.push(`${u.date}: headline of ${headline}`);
      if (headline + c.body.length > LATEST_SIZED_FOR.entry) out.push(`${u.date}: ${headline + c.body.length} characters`);
      // Meta is Space Mono — one width per character — so its length is its width.
      if (c.meta.length > LATEST_SIZED_FOR.meta.length) out.push(`${u.date}: meta "${c.meta}"`);
      return out;
    });
  }

  it("latest milestone: nothing in the stylesheet cuts the text off", () => {
    // The check above reads textContent, which holds the whole entry even when
    // CSS hides half of it: the box shipped with a four-line clamp, printed
    // "He is the only African artist among the…", and that check passed.
    expect(cutProblems(renderEmbed("latest")!)).toEqual([]);
  });

  it("latest milestone: every entry in the feed fits the entry the box's height was measured for", () => {
    // The height is fixed in the snippet on other people's pages, and the box
    // changes with every new entry, so it is sized once for the longest entry
    // the feed allows (LATEST_SIZED_FOR) and every entry is checked against
    // that, not only today's. An entry past it would run off the bottom of the
    // box; this fails first.
    expect(oversize(updates), "re-measure the latest box's height at 300 px, then raise LATEST_SIZED_FOR").toEqual([]);
  });

  it("negative control: the clamp the box shipped with, and an entry past the cap, both fail", () => {
    // The .body rule exactly as commit c80f699a shipped it.
    const SHIPPED_BODY =
      ".body{font-size:var(--type-small);line-height:var(--type-small-lh);color:var(--text-body);margin-top:8px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden}";
    const clamped = renderEmbed("latest")!.replace(/\.body\{[^}]*\}/, SHIPPED_BODY);
    expect(cutProblems(clamped)).toEqual(["line-clamp", "overflow:hidden"]);
    // Two real entries run together: longer than the feed's cap allows.
    const long = { ...updates[0], text: `${updates[0].text} ${updates[1].text}` };
    const found = oversize([long]);
    expect(found).toHaveLength(1);
    expect(found[0]).toMatch(new RegExp(`^${long.date}: \\d+ characters$`));
  });
});

describe("every widget links back to burnaboystats.com", () => {
  /** What a box owes the site, as a list of problems (empty when it pays). */
  function backlinkProblems(html: string): string[] {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const out: string[] = [];
    const links = [...doc.querySelectorAll("a[href]")];
    if (links.length !== 1) out.push(`${links.length} links, want 1`);
    const a = links[0];
    if (!a) return out;
    const href = a.getAttribute("href") ?? "";
    if (!href.startsWith("https://burnaboystats.com/")) out.push(`links to ${href}`);
    if (a.getAttribute("target") !== "_blank") out.push("does not open in a new tab");
    const rel = (a.getAttribute("rel") ?? "").split(/\s+/);
    if (!rel.includes("noopener")) out.push("no rel=noopener");
    // A normal, followed link: nofollow/ugc/sponsored would tell search
    // engines to ignore it, and noreferrer would hide the widget as the
    // source of the visit.
    for (const bad of ["nofollow", "ugc", "sponsored", "noreferrer"]) if (rel.includes(bad)) out.push(`rel=${bad}`);
    if (!/burnaboystats\.com/.test(a.textContent ?? "")) out.push("does not print burnaboystats.com");
    if (!/^Source: \S/.test(doc.querySelector(".source")?.textContent ?? "")) out.push("no Source line");
    return out;
  }

  it.each(EMBED_SLUGS)("%s carries one followed link to its page on the site", (slug) => {
    const html = renderEmbed(slug)!;
    expect(backlinkProblems(html)).toEqual([]);
    const w = EMBED_WIDGETS.find((x) => x.slug === slug)!;
    expect(html).toContain(`href="https://burnaboystats.com${w.content.href}"`);
  });

  it("negative control: a nofollowed box to another host fails", () => {
    const shipped = renderEmbed("career-streams")!;
    const broken = shipped
      .replace('rel="noopener"', 'rel="nofollow noopener"')
      .replace("https://burnaboystats.com/", "https://example.com/");
    expect(backlinkProblems(broken)).toEqual(["links to https://example.com/records/by-the-numbers", "rel=nofollow"]);
  });

  it("is noindex on its own, readable where it is embedded", () => {
    for (const slug of EMBED_SLUGS) {
      expect(renderEmbed(slug)).toContain('<meta name="robots" content="noindex, indexifembedded">');
    }
  });
});

describe("the widget document stands alone", () => {
  it("declares every token its stylesheet uses, from globals.css", () => {
    for (const slug of EMBED_SLUGS) {
      const html = renderEmbed(slug)!;
      const used = new Set([...html.matchAll(/var\((--[a-z0-9-]+)\)/g)].map((m) => m[1]));
      const declared = new Set(EMBED_TOKENS as readonly string[]);
      expect([...used].filter((t) => !declared.has(t)), slug).toEqual([]);
      // Declared with the site's own value, not a copy typed here.
      expect(html).toMatch(/--bg:light-dark\(#[0-9a-f]{6}, #[0-9a-f]{6}\)/i);
    }
  });

  it("loads nothing from another host, and runs only the theme switch", () => {
    for (const slug of EMBED_SLUGS) {
      const doc = new DOMParser().parseFromString(renderEmbed(slug)!, "text/html");
      const srcs = [...doc.querySelectorAll("[src], link[href]")].map((e) => e.getAttribute("src") ?? e.getAttribute("href"));
      expect(srcs.every((s) => s?.startsWith("/")), slug).toBe(true);
      const scripts = [...doc.querySelectorAll("script")];
      expect(scripts).toHaveLength(1);
      expect(scripts[0].textContent).toContain('URLSearchParams(location.search).get("theme")');
    }
  });
});

describe("the snippet", () => {
  const w = EMBED_WIDGETS[0];

  it("frames the canonical widget URL at its suggested size, with a plain credit link", () => {
    const s = embedSnippet(w, "auto");
    expect(s).toContain(`<iframe src="https://burnaboystats.com/embed/${w.slug}"`);
    expect(s).toContain(`width="${w.width}" height="${w.height}"`);
    expect(s).toContain(`<a href="https://burnaboystats.com${w.creditHref}">`);
  });

  it("carries the theme only when one is picked", () => {
    expect(embedPath("dai-dai", "auto")).toBe("/embed/dai-dai");
    expect(embedPath("dai-dai", "light")).toBe("/embed/dai-dai?theme=light");
    expect(embedSnippet(w, "dark")).toContain(`/embed/${w.slug}?theme=dark"`);
  });
});

describe("/embed is findable, the widgets are not", () => {
  const paths = sitemap().map((r) => r.url.replace(siteUrl, "") || "/");

  it("puts the index page in the sitemap and the site search", () => {
    expect(paths).toContain("/embed");
    expect(searchIndex.some((d) => d.path === "/embed")).toBe(true);
  });

  it("keeps every noindex widget out of the sitemap", () => {
    expect(paths.filter((p) => p.startsWith("/embed/"))).toEqual([]);
  });
});
