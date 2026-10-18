import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { statBoxes, BURNA_PEAK_LISTENERS_SET_ON } from "../app/data/africasBiggest";
import {
  spotifyFollowersRead,
  spotifyFollowersDisplay,
  followersCompact,
  SPOTIFY_FOLLOWERS_READ_ON,
} from "../app/data/spotify";
import { CERTS_VERIFIED_ON } from "../app/data/certifications";
import { allFirsts } from "../app/data/firsts";
import { updates } from "../app/data/updates";
import { getStatCards, findCard } from "../app/lib/statCards";
import { lastUpdated } from "../app/lib/api";
import { titleKey } from "../app/lib/titleKey";
import { GET as statsRoute } from "../app/api/v1/stats/route";

const read = (p: string) => readFileSync(p, "utf8");

/**
 * The Spotify audit of 27 Sep 2026 found figures that were true when typed and
 * had gone stale beside the data that should have written them. Each block holds
 * one fix to its data, with the line the site shipped as the negative control.
 */

describe("the followers board is one day's reading, and says so", () => {
  const box = statBoxes.find((b) => b.id === "most-followed-spotify")!;
  const sorted = [...spotifyFollowersRead].sort((a, b) => b.followers - a.followers);

  it("shows the reading's top five, in order, at the reading's values", () => {
    expect(box.entries!.map((e) => e.name)).toEqual(sorted.slice(0, 5).map((r) => r.name));
    expect(box.entries!.map((e) => e.value)).toEqual(sorted.slice(0, 5).map((r) => followersCompact(r.followers)));
  });

  it("puts Burna Boy first — the claim his stat card makes", () => {
    expect(sorted[0].name).toBe("Burna Boy");
    expect(box.entries![0].value).toBe(spotifyFollowersDisplay);
    expect(getStatCards().find((c) => c.id === "followers")!.value).toBe(spotifyFollowersDisplay);
  });

  it("dates the source line to the reading and quotes every count in it", () => {
    const day = new Date(`${SPOTIFY_FOLLOWERS_READ_ON}T12:00:00Z`).toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
    });
    expect(box.source).toContain(`all on ${day}`);
    for (const r of sorted.filter((r) => r.followers >= 2e6)) {
      expect(box.source).toContain(`${r.name} ${r.followers.toLocaleString("en-US")}`);
    }
  });

  it("names the next two by the reading", () => {
    const [, , , , , sixth, seventh] = sorted;
    expect(box.note).toContain(`${sixth.name} (${followersCompact(sixth.followers)}) and ${seventh.name} (${followersCompact(seventh.followers)}) are next`);
  });

  it("negative control: the note shipped on 24 Sep's numbers fails against this reading", () => {
    const shipped =
      "Burna Boy is the most-followed African artist on Spotify — just over 5 million clear of Wizkid in second. Davido and Rema sit within a hundred thousand of each other for third, and Asake is past ten million too; Omah Lay (8.02M) and Ayra Starr (7.83M) are next.";
    const [, , , , , sixth, seventh] = sorted;
    expect(shipped).not.toContain(`${sixth.name} (${followersCompact(sixth.followers)})`);
    expect(shipped).not.toContain(`${seventh.name} (${followersCompact(seventh.followers)})`);
  });
});

describe("each stat card is dated by its own figure", () => {
  const cards = getStatCards();
  const byId = (id: string) => cards.find((c) => c.id === id)!;

  it("every card carries an ISO date", () => {
    for (const c of cards) expect(c.asOf, c.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("the peak card is dated to the day the peak was set, not the feed's newest entry", () => {
    expect(byId("listeners").asOf).toBe(BURNA_PEAK_LISTENERS_SET_ON);
    // Negative control: what the card printed for every figure until 27 Sep.
    expect(BURNA_PEAK_LISTENERS_SET_ON).not.toBe(lastUpdated);
  });

  it("the followers card is dated to the followers reading, the certification cards to the register read", () => {
    expect(byId("followers").asOf).toBe(SPOTIFY_FOLLOWERS_READ_ON);
    expect(byId("african-giant").asOf).toBe(CERTS_VERIFIED_ON);
    expect(findCard("cert-location")!.asOf).toBe(CERTS_VERIFIED_ON);
  });

  it("the image prints the card's date, not the site's", () => {
    const src = read("app/lib/statCardImage.tsx");
    expect(src).toContain("As of {card.asOf}");
    expect(src).not.toContain("As of {lastUpdated}");
  });

  it("the peak card names kworb, which recorded the peak, and not Spotify's page", () => {
    const c = byId("listeners");
    expect(c.detail).not.toContain("Read from Spotify's own artist page rather than a tracker");
    expect(c.detail).toContain("kworb's recorded peak");
    expect(c.source).toContain("kworb");
  });
});

describe("the five-past-400M first is dated by the reading that first had it", () => {
  const f = allFirsts.find((x) => x.title === "First African artist with five songs past 400 million Spotify streams")!;

  it("does not date the crossing after a feed entry that already counted it", () => {
    // The 2 Sep entry lists "Dai Dai" among the five past 400 million.
    const earliest = updates
      .filter((u) => /past 400 million/.test(u.text) && u.text.includes("Dai Dai"))
      .map((u) => u.date)
      .sort()[0];
    expect(earliest).toBe("2026-09-02");
    const m = /became the fifth (?:on|by) the (\d+) (\w+) 2026 reading/.exec(f.text);
    expect(m, f.text).not.toBeNull();
    const iso = new Date(`${m![1]} ${m![2]} 2026 12:00 UTC`).toISOString().slice(0, 10);
    expect(iso <= earliest, `${iso} is after ${earliest}`).toBe(true);
    // Negative control: the line the site shipped.
    expect("“Dai Dai” became the fifth on the 16 September 2026 reading (449.5 million)").toMatch(/16 September/);
    expect(f.text).not.toContain("16 September 2026 reading");
  });

  it("no longer has Tems on three, and dates the rivals' counts to the page they came from", () => {
    expect(f.text).not.toContain("Tems and Tyla are next with three each");
    expect(f.text).toContain("kworb's 26 September 2026 pages");
    expect(f.asOf).toBe("2026-09-26");
    expect(findCard(`first-${titleKey(f.title)}`)!.asOf).toBe(f.asOf);
  });
});

describe("wording the audit corrected", () => {
  it("the 3 Aug entry ranks him by monthly listeners, which is what No. 38 was", () => {
    const e = updates.find((u) => u.date === "2026-08-03" && u.text.includes("59,482,941"))!;
    expect(e.text).not.toContain("most-followed");
    expect(e.text).toContain("by monthly listeners");
  });

  it("the stats API no longer says the current listener figure is unpublished", async () => {
    const body = await (statsRoute() as Response).json();
    expect(body.description).not.toContain("the current figure is not published");
    expect(body.description).toContain("/music/listeners");
    expect(read("app/api/page.tsx")).not.toContain("the current figure is not published");
  });

  it("the Dai Dai caption reads as the crossing order in both editions", () => {
    expect(read("app/dai-dai/page.tsx")).not.toContain("Burna Boy's 8th song past 300 million");
    expect(read("app/dai-dai/page.tsx")).toContain("the 8th of Burna Boy's songs to pass 300 million");
    expect(read("app/dai-dai/es/page.tsx")).not.toContain("la octava canción de Burna Boy que supera");
    expect(read("app/dai-dai/es/page.tsx")).toContain("la octava de las canciones de Burna Boy en superar");
  });

  it("the career-streams notes describe the current anchor", () => {
    const src = read("app/data/streamingTotals.ts");
    expect(src).not.toMatch(/Displayed in\s+(?:\/\/\s*)?whole billions/);
    const cfg = JSON.parse(read("scripts/watched-metrics.json"));
    const m = cfg.metrics.find((x: { id: string }) => x.id === "spotify-total-streams");
    const offset = m.offset.toLocaleString("en-US");
    // Re-anchored? scripts/chartmasters-anchor.mjs moves the offset but not the
    // prose: lead this note and the streamingTotals.ts header with the new pair.
    expect(m.note.slice(0, 200), "the note must lead with the offset in force").toContain(offset);
    expect(src, "streamingTotals.ts's CURRENT ANCHOR block").toMatch(new RegExp(`CURRENT ANCHOR[\\s\\S]{0,600}offset\\s+${offset}`));
    // The anchor's arithmetic, from the read on file: ChartMasters through
    // 16 Oct (reads/2026-10-18.json) minus kworb's raw on its 17 Oct page, as
    // the read file records the pair and the kworb page it read that morning.
    // (14 Oct: 11,203,035,730 − 11,071,692,901 = 131,342,829;
    //  8 Oct: 11,153,473,176 − 11,025,107,311 = 128,365,865.)
    const cm = JSON.parse(read("docs/sourcing/chartmasters/reads/2026-10-18.json"));
    const pair = cm.careerPair;
    expect(pair.chartmasters).toBe("October 16, 2026");
    expect(pair.kworbPage, "ChartMasters' day N pairs with kworb's page N+1").toBe("2026-10-17");
    expect(cm.kworbStamps["burna-boy"].lastUpdated, "the page the pair names is the page read").toBe(pair.kworbPage);
    expect(cm.kworbStamps["burna-boy"].total).toBe(pair.kworbRaw);
    expect(cm.artists["burna-boy"].days[pair.chartmasters] - pair.kworbRaw).toBe(m.offset);
    // Negative controls: the offsets it replaced, each from its own read file.
    const cm1014 = JSON.parse(read("docs/sourcing/chartmasters/reads/2026-10-14.json"));
    expect(m.offset).not.toBe(cm1014.artists["burna-boy"].days["October 12, 2026"] - 11_071_692_901);
    expect(m.offset).not.toBe(128_365_865);
  });
});
