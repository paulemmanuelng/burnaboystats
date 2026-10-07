import { render, within } from "@testing-library/react";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/music",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MusicPage from "../../app/music/page";
import { ROLE_STREAMS } from "../../app/data/roleStreams";
import { albums as certAlbums, singles, features } from "../../app/data/certifications";
import { albumCharts, singleCharts, featureCharts } from "../../app/data/charts";
import { CM_FEATURES_GROUP_BURNA, BURNA_ROLES } from "../../app/data/creditRoles";
import { spotifyLeadStreams, SPOTIFY_LEAD_STREAMS_READ_ON_LONG } from "../../app/data/africasBiggest";
import musicStyles from "../../app/music/music.module.css";
import mobileStyles from "../../app/components/mobileMusic.module.css";

// /music's "Lead vs featured" (the credit-role rule, Paul, 6 Oct 2026), on
// both layouts. Every figure is recounted HERE from the raw data — the role
// streams the bot writes and the ledgers' own groups — not by lib/leadFeatured,
// so the page and this test cannot drift together.

const B = (n: number) => `${(n / 1e9).toFixed(2)}B`;
const M = (n: number) => `${(n / 1e6).toFixed(1)}M`;
const byRole = (role: string) => ROLE_STREAMS.tracks.filter((t) => t.role === role).sort((a, b) => b.streams - a.streams);
const sum = (ts: { streams: number }[]) => ts.reduce((n, t) => n + t.streams, 0);
const lead = byRole("lead");
const featured = byRole("featured");
const plaques = (rs: { certs: unknown[] }[]) => rs.reduce((n, r) => n + r.certs.length, 0);
const no1 = (rs: { entries: { peak: number }[] }[]) => rs.reduce((n, r) => n + r.entries.filter((e) => e.peak === 1).length, 0);
const flat = (el: Element) => el.textContent!.replace(/\s+/g, " ").trim();

function sections() {
  const { container } = render(<MusicPage />);
  const desk = container.querySelector(`section[aria-labelledby="lead-vs-featured"]`)!;
  const phone = container.querySelector(`section[aria-labelledby="m-lead-vs-featured"]`)!;
  return { container, desk, phone };
}

describe("/music, Lead vs featured: both layouts", () => {
  it("renders on desktop (an altSection, after the song stories) and on the phone (after In depth)", () => {
    const { container, desk, phone } = sections();
    expect(desk).not.toBeNull();
    expect(phone).not.toBeNull();
    expect(desk.className).toContain(musicStyles.altSection);
    expect(desk.closest(`.${musicStyles.desktopOnly}`)).not.toBeNull();
    expect(phone.closest(`.${mobileStyles.screen}`)).not.toBeNull();
    for (const s of [desk, phone]) expect(within(s as HTMLElement).getByRole("heading", { level: 2 }).textContent).toBe("Lead vs featured");
    // Order: the new section follows the song stories on each layout.
    const text = container.textContent!;
    expect(text.indexOf("The songs, in depth")).toBeLessThan(text.indexOf("Top songs as lead"));
  });

  it("prints the two totals and the song counts, recounted from the role streams", () => {
    const { desk, phone } = sections();
    for (const s of [desk, phone]) {
      const t = flat(s);
      expect(t).toContain(`${B(sum(lead))}streams as lead${lead.length} songs`);
      expect(t).toContain(`${B(sum(featured))}streams as featured${featured.length} songs`);
    }
    // The bar, labelled for a screen reader, on both.
    const pct = Math.round((sum(lead) / (sum(lead) + sum(featured))) * 100);
    for (const s of [desk, phone]) {
      const bar = s.querySelector('[role="img"]')!;
      expect(bar.getAttribute("aria-label")).toBe(`${pct}% of his Spotify streams are as lead`);
      expect((bar.firstElementChild as HTMLElement).style.width).toBe(`${pct}%`);
    }
  });

  it("lists the top five per role, with the co-lead tag where the song is one", () => {
    const { desk, phone } = sections();
    const deskRows = [...desk.querySelectorAll(`.${musicStyles.roleRow}`)].map(flat);
    expect(deskRows).toHaveLength(10);
    const want = (ts: typeof lead) =>
      ts.slice(0, 5).map((t, i) => `${String(i + 1).padStart(2, "0")}${t.title}${BURNA_ROLES[t.title]?.coLeadWith?.length ? "co-lead" : ""}${M(t.streams)}`);
    expect(deskRows).toEqual([...want(lead), ...want(featured)]);
    // Today's top lead song is a co-lead ("Location", Dave ft. Burna Boy) and the
    // top featured is "Be Honest" — read from the data, not typed into the page.
    expect(lead[0].title).toBe("Location");
    expect(featured[0].title).toBe("Be Honest");
    const phoneTitles = [...phone.querySelectorAll(`.${mobileStyles.songTitle}`)].map((e) => e.textContent);
    expect(phoneTitles).toEqual([...lead.slice(0, 5), ...featured.slice(0, 5)].map((t) => t.title));
    expect(phone.querySelectorAll(`.${mobileStyles.roleTag}`).length).toBe(desk.querySelectorAll(`.${musicStyles.roleTag}`).length);
  });

  it("the certifications and No. 1s lines come from the ledgers' own groups", () => {
    const { desk, phone } = sections();
    for (const s of [desk, phone]) {
      const t = flat(s);
      expect(t).toContain(`Certifications: ${plaques(singles)} on lead releases · ${plaques(features)} on featured · ${plaques(certAlbums)} on albums`);
      expect(t).toContain(`No. 1s: ${no1(singleCharts)} as lead · ${no1(featureCharts)} featured · ${no1(albumCharts)} albums`);
      expect(s.querySelector('a[href="/certifications"]')).not.toBeNull();
      expect(s.querySelector('a[href="/records/charts"]')).not.toBeNull();
    }
  });

  it("the ChartMasters line names exactly the songs it files as features and prints their streams", () => {
    const { desk, phone } = sections();
    const cm = spotifyLeadStreams.find((r) => r.name === "Burna Boy")!;
    const songs = ROLE_STREAMS.tracks.filter((t) => (CM_FEATURES_GROUP_BURNA as readonly string[]).includes(t.title));
    expect(songs.map((t) => t.title).sort()).toEqual([...CM_FEATURES_GROUP_BURNA].sort());
    for (const s of [desk, phone]) {
      const t = flat(s);
      expect(t).toContain(
        `ChartMasters, read ${SPOTIFY_LEAD_STREAMS_READ_ON_LONG}, counts ${(cm.lead / 1e9).toFixed(1)}B as lead and ${(cm.feat / 1e9).toFixed(1)}B as featured`,
      );
      expect(t).toContain("most of the gap is “Location”, “Own It”, “We Pray” and “Loved by You”");
      expect(t).toContain(`(${B(sum(songs))} together)`);
      expect(t).toContain(`Lead and featured add up to kworb's list, ${B(sum(ROLE_STREAMS.tracks))}`);
    }
    // Every one of them is a lead by Spotify's credits — that is the gap.
    for (const t of CM_FEATURES_GROUP_BURNA) expect(BURNA_ROLES[t].role).toBe("lead");
  });

  it("both layouts say the same source and cross-check lines", () => {
    const { desk, phone } = sections();
    const lines = (s: Element, cls: string) => [...s.querySelectorAll(`.${cls}`)].map(flat);
    expect(lines(phone, mobileStyles.roleSource)).toEqual(lines(desk, musicStyles.roleSource));
  });
});

describe("no typed figure, no colour that cannot theme", () => {
  const page = readFileSync("app/music/page.tsx", "utf8");
  const section = page.slice(page.indexOf("Lead vs featured (the credit-role rule"), page.indexOf('<KeepExploring current="/music" />'));
  const mobile = readFileSync("app/components/MobileMusic.tsx", "utf8");
  const mobileSection = mobile.slice(mobile.indexOf("Lead vs featured — the desktop section"));
  const lib = readFileSync("app/lib/leadFeatured.ts", "utf8");

  it("no streams or count literal in the section's source", () => {
    for (const [name, src] of [["page", section], ["phone", mobileSection], ["lib", lib]] as const) {
      expect(src.length, name).toBeGreaterThan(200);
      expect(/\d+\.\d+[BM]\b/.test(src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "")), `${name}: a typed streams figure`).toBe(false);
      expect(/\b(204|224|240|44|36)\b/.test(src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "")), `${name}: a typed count`).toBe(false);
    }
    // Negative control: the design's own example line, typed, is caught.
    expect(/\d+\.\d+[BM]\b/.test("9.86B · streams as lead · 240 songs")).toBe(true);
  });

  it.each([
    ["app/music/music.module.css"],
    ["app/components/mobileMusic.module.css"],
  ])("%s: the section's rules use tokens only, and no gold", (file) => {
    const css = readFileSync(file, "utf8");
    const rules = [...css.matchAll(/\n\.(role[A-Za-z]*)[^{]*\{([^}]*)\}/g)];
    expect(rules.length).toBeGreaterThanOrEqual(8);
    for (const [, name, body] of rules) {
      expect(body, name).not.toMatch(/#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(/i);
      expect(body, name).not.toMatch(/--gold/);
    }
    expect(css).toMatch(/\.roleBar \{[^}]*background: var\(--bar-muted\)/);
    expect(css).toMatch(/\.roleBarLead \{[^}]*background: var\(--text\)/);
  });
});
