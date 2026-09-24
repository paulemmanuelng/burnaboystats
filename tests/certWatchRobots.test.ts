// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { parseRobots, robotsVerdict, agentVerdict } from "../scripts/cert-watch/robots.mjs";
import { fixture } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/** The parser on the robots.txt files the registers really served (24 Sep 2026). */
const rules = (host: string) => parseRobots(fixture(`robots/${host}.txt`));

describe("robots.txt, as served", () => {
  it("BPI disallows us — which is why the UK is a human check", () => {
    const v = robotsVerdict(rules("certified-awards.bpi.co.uk"), "/");
    expect(v.allowed).toBe(false);
    expect(v.by).toBe("*");
    expect(robotsVerdict(rules("certified-awards.bpi.co.uk"), "/?search=dai+dai").allowed).toBe(false);
  });

  it("Dropbox disallows /sh/ (ARIA's list) for us, while allowing it for facebookexternalhit", () => {
    const g = rules("www.dropbox.com");
    expect(robotsVerdict(g, "/sh/abc123/xyz?dl=1").allowed).toBe(false);
    expect(agentVerdict(g, "facebookexternalhit", "/sh/abc123").allowed).toBe(true);
  });

  it("audiogest disallows /uploads, where AFP's PDFs live", () => {
    expect(robotsVerdict(rules("www.audiogest.pt"), "/uploads/tops/2026/TOP_SEMANAL_38.pdf").allowed).toBe(false);
    expect(robotsVerdict(rules("www.audiogest.pt"), "/tops-semanais-2026").allowed).toBe(true);
  });

  it("reads Crawl-delay: musiccanada 30, swisscharts 10", () => {
    expect(robotsVerdict(rules("musiccanada.com"), "/wp-json/wp/v2/award").crawlDelay).toBe(30);
    const ch = robotsVerdict(rules("swisscharts.com"), "/edelmetall/2026");
    expect(ch.allowed).toBe(true);
    expect(ch.crawlDelay).toBe(10);
  });

  it("SNEP and MAHASZ block ClaudeBot but not our User-Agent", () => {
    for (const host of ["snepmusique.com", "slagerlistak.hu"]) {
      expect(agentVerdict(rules(host), "ClaudeBot", "/").allowed, host).toBe(false);
    }
    expect(robotsVerdict(rules("snepmusique.com"), "/les-certifications/").allowed).toBe(true);
    expect(robotsVerdict(rules("slagerlistak.hu"), "/arany-es-platinalemezek/adatbazis/2026").allowed).toBe(true);
  });

  it("RiSA's AI groups do not name our User-Agent (and RiSA stays manual anyway)", () => {
    const g = rules("risa.org.za");
    expect(agentVerdict(g, "ClaudeBot", "/").allowed).toBe(false);
    expect(agentVerdict(g, "Claude-User", "/").allowed).toBe(false);
    const ours = robotsVerdict(g, "/");
    expect(ours.allowed).toBe(true);
    expect(ours.by).toBe("*");
    // Content-Usage: ai=n is kept, visible, for Paul's ruling (SPEC §11.2).
    expect(g.flatMap((x) => x.other).some((o) => o.field === "content-usage" && o.value === "ai=n")).toBe(true);
  });

  it("RIAA allows the list pages and admin-ajax", () => {
    expect(robotsVerdict(rules("www.riaa.com"), "/gold-platinum/?tab_active=platinum-latin&se=Burna+Boy").allowed).toBe(true);
    expect(robotsVerdict(rules("www.riaa.com"), "/wp-admin/admin-ajax.php").allowed).toBe(true);
    expect(robotsVerdict(rules("www.riaa.com"), "/rebooting-the-record-label/").allowed).toBe(false);
  });

  it("an empty robots.txt and an empty Disallow allow everything", () => {
    expect(robotsVerdict(rules("ifpicr.cz"), "/hitparada/30").allowed).toBe(true);
    expect(robotsVerdict(rules("www.olis.pl"), "/api/search").allowed).toBe(true);
  });

  it("longest match wins, and Allow wins a tie", () => {
    const g = parseRobots("User-agent: *\nDisallow: /wp-admin/\nAllow: /wp-admin/admin-ajax.php\n");
    expect(robotsVerdict(g, "/wp-admin/admin-ajax.php").allowed).toBe(true);
    expect(robotsVerdict(g, "/wp-admin/options.php").allowed).toBe(false);
    expect(robotsVerdict(rules("pro-musica.co"), "/wp-admin/admin-ajax.php").allowed).toBe(true);
  });
});
