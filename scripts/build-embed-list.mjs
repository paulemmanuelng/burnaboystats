// Writes app/data/embedWidgetList.json: each embed widget's slug and name, in
// the order app/lib/embedWidgets.ts lists them.
//
// Two readers cannot import that module. next.config.mjs cannot import
// TypeScript, and it needs the slugs to allow framing on /embed/<widget> and
// nowhere else. The site search index (app/lib/searchIndex.ts) ships to every
// page and imports no datasets, which embedWidgets.ts does; it needs only the
// names. So the list is generated here and checked in, like
// comparePairRedirects.json; tests/embedHeaders.test.ts asserts it is current.
//
//   npx tsx scripts/build-embed-list.mjs
import { writeFile } from "node:fs/promises";
import { EMBED_WIDGETS } from "../app/lib/embedWidgets.ts";

const OUT = new URL("../app/data/embedWidgetList.json", import.meta.url);
const rows = EMBED_WIDGETS.map((w) => ({ slug: w.slug, name: w.name }));
await writeFile(OUT, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.error(`wrote ${rows.length} widgets`);
