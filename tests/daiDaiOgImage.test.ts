import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { daiDaiOgId } from "../app/dai-dai/ogId";

/**
 * The MusicEvent's `image` points at a share-card URL that actually resolves.
 *
 * Search Console reported "Missing field image" on the Events report, and the
 * field had been left out on purpose: `/dai-dai/opengraph-image` 404s, because
 * generateImageMetadata puts a hashed id in the path, and a recommended field
 * aimed at a dead URL is worse than an absent one.
 *
 * So the id is shared between the route that names the card and the page that
 * cites it. This guard holds them together — if they ever diverge, the JSON-LD
 * starts advertising a 404 again, and nothing rendered on the page would show it.
 */

const PAGE = readFileSync("app/dai-dai/page.tsx", "utf8");
const ROUTE = readFileSync("app/dai-dai/opengraph-image.tsx", "utf8");

describe("the Dai Dai MusicEvent image resolves", () => {
  it("the page builds its image from the shared id, not the bare route", () => {
    expect(PAGE).toMatch(/image:\s*`\$\{CANONICAL_ORIGIN\}\/dai-dai\/opengraph-image\/\$\{daiDaiOgId\}`/);
    // The bare path is the 404. It must not appear as an image value.
    expect(PAGE).not.toMatch(/image:\s*`\$\{CANONICAL_ORIGIN\}\/dai-dai\/opengraph-image`/);
  });

  it("the share-card route names the same id the page cites", () => {
    expect(ROUTE).toContain("daiDaiOgId");
    expect(ROUTE).toMatch(/generateImageMetadata\s*=\s*\(\)\s*=>\s*\[\{\s*id:\s*daiDaiOgId/);
  });

  it("the id is a non-empty slug, so the URL has a path segment", () => {
    expect(daiDaiOgId).toMatch(/^[a-z0-9]+$/);
    expect(daiDaiOgId.length).toBeGreaterThan(2);
  });
});
