import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { faqs } from "../app/data/faqs";
import { statBoxes } from "../app/data/africasBiggest";
import { updates } from "../app/data/updates";
import { DAI_DAI_SPOTIFY_NO1_DAYS } from "../app/data/daiDai";

/**
 * The live debug pass of 15 Oct 2026 (part 2), HA-2 and REC-4: "the most days
 * at No. 1 by any song in 2026" was overtaken. kworb's global_daily_totals,
 * newest chart 2026/10/13 (re-read 15 Oct 2026): KAROL G "BbY WOW" Pk 1 (x44),
 * Shakira & Burna Boy "Dai Dai" Pk 1 (x37). The claim's own module said "once
 * another 2026 song has more than 37, the claim goes", so it went: the FAQ,
 * the Spotify Global board on /records/africas-biggest and both /dai-dai
 * editions keep the 37 days and drop the clause, and its constant
 * (DAI_DAI_2026_MOST_NO1_THROUGH, app/data/daiDaiNo1Claim.ts) is retired. The
 * dated /updates log lines stay: each was true on its day.
 */

const EN = /most days at No\. 1 by any song in 2026/;
const ES = /más días en el número 1 de todo 2026/;
const read = (p: string) => readFileSync(p, "utf8");

describe("HA-2 / REC-4: the overtaken 2026 claim is gone everywhere it printed", () => {
  it("the FAQ keeps the 37 days and drops the claim (/faq)", () => {
    const a = faqs.find((f) => f.q === "What is Burna Boy's World Cup song?")!.a;
    expect(a).toContain(`spent ${DAI_DAI_SPOTIFY_NO1_DAYS} days at No. 1 on Spotify's Global Daily Top Songs chart`);
    expect(a).not.toMatch(EN);
    expect(a).not.toMatch(/through the chart dated/);
  });

  it("the Spotify Global board keeps the 37 days and drops the claim (/records/africas-biggest)", () => {
    const note = statBoxes.find((b) => b.id === "highest-spotify-global-peak")!.note ?? "";
    expect(note).toContain(`held that No. 1 for ${DAI_DAI_SPOTIFY_NO1_DAYS} days in total.`);
    expect(note).not.toMatch(EN);
  });

  it("both /dai-dai editions keep the row and drop the claim", () => {
    const en = read("app/dai-dai/page.tsx");
    const es = read("app/dai-dai/es/page.tsx");
    expect(en).toContain("in total at No. 1 on Spotify's Global Daily Top Songs chart — a first for an African artist. A closed total,");
    expect(es).toContain("en total en el número 1 de la lista Global Daily Top Songs de Spotify —algo inédito para un artista africano—. Es un total cerrado:");
    expect(en).not.toMatch(EN);
    expect(es).not.toMatch(ES);
  });

  it("the constant is retired, so nothing can print the claim again by importing it", () => {
    expect(existsSync("app/data/daiDaiNo1Claim.ts")).toBe(false);
    for (const p of ["app/data/faqs.ts", "app/data/africasBiggest.ts", "app/data/daiDai.ts", "app/dai-dai/page.tsx", "app/dai-dai/es/page.tsx"]) {
      expect(read(p), p).not.toMatch(/DAI_DAI_2026_MOST_NO1_THROUGH|daiDaiNo1Claim/);
    }
  });

  it("the dated /updates lines stay as logged", () => {
    const dated = updates.filter((u) => EN.test(u.text)).map((u) => u.date);
    expect(dated.length).toBeGreaterThanOrEqual(1);
  });

  it("negative control: the lines the site served on 15 Oct 2026 fail", () => {
    const shippedFaq =
      "and spent 37 days at No. 1 on Spotify's Global Daily Top Songs chart as the most-streamed song in the world, between 30 June and 22 August 2026 — the most days at No. 1 by any song in 2026 through the chart dated 30 September 2026.";
    const shippedBoard =
      "“Dai Dai” has now held that No. 1 for 37 days in total — the most days at No. 1 by any song in 2026 through the chart dated 30 September 2026.";
    const shippedEs =
      "—algo inédito para un artista africano, y la canción con más días en el número 1 de todo 2026 hasta la lista del 30 de septiembre de 2026—.";
    expect(shippedFaq).toMatch(EN);
    expect(shippedBoard).toMatch(EN);
    expect(shippedEs).toMatch(ES);
  });
});
