// @vitest-environment node
import { describe, it, expect } from "vitest";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import * as certs from "../app/data/certifications";
import * as afro from "../app/data/afrobeats";
import { buildSiteIndex, hydrateSiteIndex } from "../scripts/cert-watch/site.mjs";
import { ROOT, LIVE_ARTISTS, config } from "./certWatchHelpers";

/**
 * The workflow loads app/data/*.ts with Node's own type stripping (≥ 22.18;
 * the workflow pins 24). CI's ci.yml runs Node 20, which cannot — so this
 * test runs only where the loader can, and SAYS so in its name. The
 * workflow's own --self-test step is the gate that always runs.
 */
// Vitest never imports load-site.mjs itself (SPEC §2.3); the version rule is
// restated here only to decide whether to spawn it.
const nodeCanStripTypes = (v: string) => {
  const [maj, min] = v.split(".").map(Number);
  return maj > 22 || (maj === 22 && min >= 18);
};
const canLoad = nodeCanStripTypes(process.versions.node);
const name = canLoad
  ? `--self-test prints the counts the modules hold (Node ${process.versions.node})`
  : `SKIPPED on Node ${process.versions.node}: TypeScript loading needs ≥ 22.18 — the workflow's --self-test step covers it`;

describe("load-site.mjs", () => {
  it.skipIf(!canLoad)(name, () => {
    const r = spawnSync(process.execPath, ["--no-warnings", "scripts/cert-watch/index.mjs", "--self-test"], { cwd: ROOT, encoding: "utf8" });
    expect(r.status, r.stderr).toBe(0);
    // Computed here from the modules vitest loaded — never typed.
    const plaques = afro.afrobeatsArtists.reduce((n, a) => n + afro.certCount(a), 0);
    const releases = afro.afrobeatsArtists.reduce((n, a) => n + a.releases.length, 0);
    expect(r.stdout).toContain(
      `certifications.ts: ${certs.albums.length} albums, ${certs.singles.length} singles, ${certs.features.length} features, ${certs.totalAwards()} plaques`
    );
    expect(r.stdout).toContain(`afrobeats.ts: ${afro.afrobeatsArtists.length} artists, ${releases} releases, ${plaques} plaques`);
    const idx = hydrateSiteIndex(buildSiteIndex(certs, afro, LIVE_ARTISTS, config), LIVE_ARTISTS, config);
    expect(r.stdout).toContain(`${idx.leadAliases.length} lead aliases (${idx.certAliases.length} valid for certifications, ${idx.chartOnlyAliases.length} chart only)`);
  });

  it("refuses, by name, to load on a Node that cannot strip types", () => {
    const src = readFileSync(join(ROOT, "scripts/cert-watch/load-site.mjs"), "utf8");
    expect(src).toMatch(/TypeScript loading needs ≥ 22\.18/);
    expect(nodeCanStripTypes("20.19.0")).toBe(false);
    expect(nodeCanStripTypes("22.18.0")).toBe(true);
  });
});
