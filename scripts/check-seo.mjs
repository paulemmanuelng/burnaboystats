#!/usr/bin/env node
// Post-build SEO gate. Runs over the rendered HTML, because that is the only
// place the final title/description exist — most are template literals built
// from live data, so their length is not knowable from the source.
//
// Catches the class of problem that shipped silently: five song descriptions
// had grown to 161-191 characters, which Google truncates mid-sentence.
//
//   node scripts/check-seo.mjs
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = ".next/server/app";
const TITLE_MAX = 60;    // Google shows ~60 characters
const DESC_MAX = 160;    // ~160 before the ellipsis

const unescape = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
   .replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'");

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith(".html") && !e.name.startsWith("_")) yield p;
  }
}

const problems = [];
let checked = 0;

for await (const file of walk(ROOT)) {
  const route = "/" + file.slice(ROOT.length + 1).replace(/\.html$/, "");
  if (route.startsWith("/_")) continue;
  const html = await readFile(file, "utf8");
  checked++;

  const title = unescape(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const desc = unescape(html.match(/name="description" content="([^"]*)"/)?.[1] ?? "");

  if (!title) problems.push(`${route}: no <title>`);
  else if (title.length > TITLE_MAX) problems.push(`${route}: title ${title.length} chars (max ${TITLE_MAX})`);

  if (!desc) problems.push(`${route}: no meta description`);
  else if (desc.length > DESC_MAX) problems.push(`${route}: description ${desc.length} chars (max ${DESC_MAX})`);

  if (!/<link rel="canonical"/.test(html)) problems.push(`${route}: no canonical`);
  if (!/property="og:image"/.test(html)) problems.push(`${route}: no og:image`);

  // One <h1> per LAYOUT, not per document.
  //
  // Most routes ship a mobile screen and a desktop page in the same HTML, one
  // hidden by CSS at any given width. Demanding a single <h1> per document
  // meant only the desktop copy could have one — so at phone width, which is
  // how crawlers render and how most readers arrive, the page's only heading
  // was display:none and screen readers started at <h2>.
  //
  // So: two are allowed exactly when the page carries both layouts, which the
  // desktopOnly wrapper marks. Anything else is still an error.
  const h1s = (html.match(/<h1[^>]*>/g) ?? []).length;
  const split = /desktopOnly/.test(html);
  const allowed = split ? [1, 2] : [1];
  if (!allowed.includes(h1s)) {
    problems.push(
      `${route}: ${h1s} <h1> tags (want ${split ? "1 per layout, so 1 or 2" : "exactly 1"})`
    );
  }
}

if (problems.length) {
  console.error(`SEO check failed — ${problems.length} problem(s) across ${checked} pages:\n`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.error(`SEO check passed — ${checked} pages: titles, descriptions, canonicals, og:image, one h1 per layout.`);
