import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// Paul, 14 Oct 2026, after #485 turned off the bounce past the page's ends on
// phones: "that bounces screen removed the reload feature? take it back to how
// it was". overscroll-behavior-y: none on the root is what stops pull-down-to-
// refresh, so the root scroller keeps the browser's own overscroll everywhere.
// The brief bounce past the last line comes back with it; that is his choice.

const CSS = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
const rootNoBounce = (css: string) =>
  /(^|[\s,}])(html|body)(\s*,\s*(html|body))?\s*\{[^}]*overscroll-behavior(-y)?:\s*(none|contain)/.test(css);

describe("pull-down-to-refresh works on the phone layout", () => {
  it("neither html nor body turns the root scroller's overscroll off", () => {
    expect(rootNoBounce(CSS)).toBe(false);
  });

  it("negative control: #485's phone rule would turn it off", () => {
    const shipped = "@media (max-width: 900px) {\n  html,\n  body {\n    overscroll-behavior-y: none;\n  }\n}\n";
    expect(rootNoBounce(shipped)).toBe(true);
  });
});
