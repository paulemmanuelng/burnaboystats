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

  const h1s = (html.match(/<h1[^>]*>/g) ?? []).length;
  if (h1s !== 1) problems.push(`${route}: ${h1s} <h1> tags (want exactly 1)`);
}

if (problems.length) {
  console.error(`SEO check failed — ${problems.length} problem(s) across ${checked} pages:\n`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.error(`SEO check passed — ${checked} pages: titles, descriptions, canonicals, og:image, single h1.`);
