// @vitest-environment node
import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { gunzipSync } from "node:zlib";
import { join, relative } from "node:path";
import * as certs from "../app/data/certifications";
import * as afro from "../app/data/afrobeats";
import { buildSiteIndex, hydrateSiteIndex } from "../scripts/cert-watch/site.mjs";
import { configProblems } from "../scripts/cert-watch/index.mjs";
import { REGISTRY } from "../scripts/cert-watch/adapters/index.mjs";
import { USER_AGENT, hostGap } from "../scripts/cert-watch/http.mjs";
import { LIVE_ARTISTS, config, FIX, ROOT } from "./certWatchHelpers";

const index = hydrateSiteIndex(buildSiteIndex(certs, afro, LIVE_ARTISTS, config), LIVE_ARTISTS);

describe("config.json", () => {
  it("is valid against the REAL site: every ruling names an existing artist and release, with why and on", () => {
    expect(configProblems(config, index)).toEqual([]);
  });

  it("every ruling carries who ruled it", () => {
    for (const list of ["knownDivergences", "heldRows", "leadAliases"]) {
      for (const e of config[list]) expect(e.ruledBy, `${list}: ${JSON.stringify(e)}`).toBeTruthy();
    }
  });

  it("catches a watchlist item naming a release the site does not have", () => {
    const bad = { ...config, watchlist: [{ ...config.watchlist[0], title: "Dai Dai (Remix)" }] };
    expect(configProblems(bad, index).join(" ")).toMatch(/no release "Dai Dai \(Remix\)" for burna-boy/);
    const unknownKey = { ...config, extra: true };
    expect(configProblems(unknownKey)).toContain('unknown key "extra"');
  });

  it("gives every host an adapter reads a politeness gap of at least 1.1 s", () => {
    for (const r of REGISTRY) for (const h of r.hosts ?? []) expect(hostGap(config, h, null), `${r.id} ${h}`).toBeGreaterThanOrEqual(1100);
  });
});

describe("no personal data", () => {
  // An email address, the pattern SPEC §9 names.
  const EMAIL = /[\w.+-]+@[\w-]+\.[\w.]+/g;
  // Third-party addresses printed on real register pages, allowed by EXACT
  // string only. None is in the step-1 fixtures; Grammotex's is listed for
  // the Swedish pages step 2 will save.
  const KNOWN_THIRD_PARTY = new Set(["cd@grammotex.se"]);

  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : [p];
    });
  const text = (p: string) => (p.endsWith(".gz") ? gunzipSync(readFileSync(p)) : readFileSync(p)).toString("utf8");

  it("the User-Agent names the site, not a person", () => {
    expect(USER_AGENT).toBe("burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)");
    expect(USER_AGENT.match(EMAIL)).toBeNull();
    expect(config.userAgent).toBe(USER_AGENT);
  });

  it("no file under scripts/cert-watch, the fixtures or the workflow holds an email address", () => {
    const files = [...walk(join(ROOT, "scripts/cert-watch")), ...walk(FIX), join(ROOT, ".github/workflows/cert-watch.yml")];
    expect(files.length).toBeGreaterThan(50);
    const found: string[] = [];
    for (const f of files) {
      for (const m of text(f).match(EMAIL) ?? []) if (!KNOWN_THIRD_PARTY.has(m)) found.push(`${relative(ROOT, f)}: ${m}`);
    }
    expect(found).toEqual([]);
  });

  it("the check fires on a real address shape (negative control)", () => {
    // The one third-party address SPEC §9 names (Grammotex's, on its pages).
    expect("cd@grammotex.se".match(EMAIL)).toEqual(["cd@grammotex.se"]);
  });
});

describe("fixtures", () => {
  const prov: { file: string; source: string; fetched: string; url: string; note: string; replay?: boolean }[] = JSON.parse(
    readFileSync(join(FIX, "PROVENANCE.json"), "utf8")
  );
  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : [p];
    });

  it("every fixture has a PROVENANCE entry, and every entry a file", () => {
    const files = walk(FIX)
      .map((p) => relative(FIX, p))
      .filter((f) => f !== "PROVENANCE.json")
      .sort();
    const listed = prov.map((e) => e.file).sort();
    expect(files.filter((f) => !listed.includes(f))).toEqual([]);
    expect(listed.filter((f) => !files.includes(f))).toEqual([]);
  });

  it("every entry says where, when and what", () => {
    for (const e of prov) {
      expect(e.source, e.file).toBeTruthy();
      expect(Number.isNaN(Date.parse(e.fetched)), e.file).toBe(false);
      expect(e.url, e.file).toBeTruthy();
      expect(e.note, e.file).toBeTruthy();
    }
  });

  it("every replayed response was fetched by the watcher's own honest User-Agent", () => {
    for (const e of prov.filter((x) => x.replay)) expect((e as { userAgent?: string }).userAgent, e.file).toBe(USER_AGENT);
  });
});

describe("register-specific strings stay in their adapter", () => {
  // The old stats-monitor hook hardcodes FIMI's "Nessuna certificazione" in a
  // generic helper (scripts/stats-lib.mjs, certWatchStatus). It must never
  // appear in the watcher's generic code — only, later, in fimi.mjs.
  const REAL = "Nessuna certificazione";

  it("is proved on the real line the old hook shipped", () => {
    expect(readFileSync(join(ROOT, "scripts/stats-lib.mjs"), "utf8")).toContain(REAL);
  });

  it("never appears in match, report, state, site or the runner", () => {
    for (const f of ["match.mjs", "report.mjs", "state.mjs", "site.mjs", "index.mjs", "http.mjs"]) {
      expect(readFileSync(join(ROOT, "scripts/cert-watch", f), "utf8"), f).not.toContain(REAL);
    }
  });
});

