import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The design tokens an embed widget paints with, read out of app/globals.css.
 *
 * A widget at /embed/<name> is a document of its own: it is served into an
 * iframe on somebody else's site, so it cannot load the app's stylesheet (whose
 * URL is hashed per build) or its fonts (the same). What it CAN do is carry the
 * token declarations themselves. They are copied from globals.css at build time
 * rather than typed here, because a hex typed into a module is a colour that
 * stops following the site the day the palette moves, which is the rule
 * tests/cssColourTokens.test.ts enforces for the CSS modules.
 *
 * Every token is written light-dark(LIGHT, DARK) there, and so here; the widget
 * sets color-scheme itself (the reader's device, or ?theme=light|dark).
 *
 * The routes are prerendered (force-static), so this runs during `next build`,
 * from the project root, and never on a request.
 */
export const EMBED_TOKENS = [
  "--bg",
  "--bg-soft",
  "--bg-raised",
  "--line",
  "--rule-soft",
  "--text",
  "--text-muted",
  "--text-body",
  "--gold-ink",
  "--gold-bright-ink",
  "--tier-diamond-ink",
  "--tier-platinum-ink",
  "--tier-gold-ink",
  "--tier-silver-ink",
  "--type-label",
  "--type-label-lh",
  "--type-label-tracking",
  "--type-small",
  "--type-small-lh",
  "--type-caption",
  "--type-caption-lh",
] as const;

let cached: string | null = null;

/** `--bg:light-dark(#f7f4ee, #0a0a0b);--bg-soft:…` — each token's FIRST
 *  declaration in globals.css, which is its :root value. Throws on a token that
 *  is not there, so a rename in globals.css fails the build instead of shipping
 *  a widget whose var() resolves to nothing. */
export function embedTokenDeclarations(): string {
  if (cached !== null) return cached;
  const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8").replace(
    /\/\*[\s\S]*?\*\//g,
    ""
  );
  cached = EMBED_TOKENS.map((name) => {
    const m = css.match(new RegExp(`(?:^|[\\s;{])${name}\\s*:\\s*([^;]+);`, "m"));
    if (!m) throw new Error(`embed widgets: ${name} is not declared in app/globals.css`);
    return `${name}:${m[1].trim()}`;
  }).join(";");
  return cached;
}
