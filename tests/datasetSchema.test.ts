import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

// Search Console reported "Missing field license" against the Dataset on
// /live-charts (first detected 10 Jul 2026). The cause was structural: that
// page hand-rolls its Dataset object instead of using lib/seo's helper, so it
// never picked up the CC BY 4.0 line the rest of the site publishes. Google
// treats it as non-critical, but a Dataset with no licence is a dataset nobody
// can safely reuse — which is the whole point of publishing one.
//
// Assert it at the source: every Dataset block in the app must carry a licence.
const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

// A plain recursive walk, not fs.globSync — that needs Node 22 and CI runs 20,
// so the glob version passed locally and failed in CI.
function walk(dir: string): string[] {
  return readdirSync(join(process.cwd(), dir), { withFileTypes: true }).flatMap((e) => {
    const rel = `${dir}/${e.name}`;
    if (e.isDirectory()) return walk(rel);
    return /\.tsx?$/.test(e.name) ? [rel] : [];
  });
}

const FILES = walk("app");

describe("Dataset structured data", () => {
  const withDataset = FILES.filter((f) => read(f).includes('"@type": "Dataset"'));

  it("finds every Dataset block in the app", () => {
    // Four: lib/seo's shared helper, /api, /live-charts, and the board's live
    // boards at /afrobeats/[artist]/live — which hand-roll theirs for the same
    // reason /live-charts does, a dateModified the helper does not take.
    // (/press publishes a licence too, but on a WebPage, not a Dataset.) If
    // this count rises, a new Dataset has appeared and the licence assertion
    // below now covers it.
    expect(withDataset.length).toBe(4);
  });

  it("gives every Dataset a license", () => {
    for (const f of withDataset) {
      const src = read(f);
      // Count Dataset declarations and licence lines in the same file: a file
      // declaring two Datasets needs two licences.
      const datasets = (src.match(/"@type": "Dataset"/g) ?? []).length;
      const licenses = (src.match(/license:\s*"https:\/\/creativecommons\.org/g) ?? []).length;
      expect(licenses, `${f} declares ${datasets} Dataset(s) but ${licenses} licence(s)`)
        .toBeGreaterThanOrEqual(datasets);
    }
  });
});
