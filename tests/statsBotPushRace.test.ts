import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// 14 Oct 2026, 17:13 UTC: the stats bot refreshed every figure and passed its
// gate, then `git push origin HEAD:main` was rejected ("fetch first") because a
// PR merged during the ~8-minute gate, and the refresh was lost until the next
// slot. The commit step now retries a rejected push — but only by replaying
// onto main when nothing that landed touches a file the refresh writes, and
// never by force.

const WF = readFileSync(join(process.cwd(), ".github/workflows/stats-live.yml"), "utf8");

/** The run block of the "Commit to main" step. */
const commitStep = (wf: string) => {
  const at = wf.indexOf("- name: Commit to main");
  const next = wf.indexOf("\n      - name:", at + 1);
  return wf.slice(at, next < 0 ? undefined : next);
};

const retries = (step: string) =>
  /for attempt in 1 2 3/.test(step) &&
  /if git push origin HEAD:main; then/.test(step) &&
  /git fetch origin main/.test(step) &&
  /comm -12/.test(step) &&
  /git rebase FETCH_HEAD \|\| \{ git rebase --abort;/.test(step);

describe("the stats bot's push survives a merge during its gate", () => {
  const step = commitStep(WF);

  it("retries a rejected push after replaying onto main", () => {
    expect(step).toContain("chore(stats): live refresh of tracked figures [skip ci]");
    expect(retries(step)).toBe(true);
  });

  it("stops, never forces, when main changed a file the refresh writes", () => {
    expect(step).toMatch(/if \[ -n "\$shared" \]; then[\s\S]*?exit 1/);
    expect(step).not.toMatch(/--force|\s-f\b|\+HEAD:main|reset --hard|-X (ours|theirs)|--strategy-option/);
  });

  it("gives up loudly after three rejections", () => {
    expect(step).toMatch(/three pushes were rejected[^\n]*\n\s*exit 1\n/);
  });

  it("negative control: the shipped single push is caught", () => {
    const shipped = `      - name: Commit to main
        run: |
          set -euo pipefail
          git add -A
          git commit -m "chore(stats): live refresh of tracked figures [skip ci]"
          git push origin HEAD:main
`;
    expect(retries(commitStep(shipped))).toBe(false);
  });
});
