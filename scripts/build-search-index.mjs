// Writes app/lib/searchIndex.generated.ts from the site's own data.
//
// The logic lives in app/lib/buildSearchDocs.ts so a test can call it directly
// and assert the checked-in file is still current — this script is only the
// serialiser. Run it after any change to certifications, charts, awards, songs
// or album pages; the test will tell you if you forget.
//
//   npx tsx scripts/build-search-index.mjs

import { writeFile } from "node:fs/promises";
import { buildSearchDocs } from "../app/lib/buildSearchDocs.ts";

const OUT = new URL("../app/lib/searchIndex.generated.ts", import.meta.url);
const docs = buildSearchDocs();

const body = `// GENERATED FILE — do not edit by hand.
// Rebuilt by scripts/build-search-index.mjs; tests/searchIndex.test.ts asserts
// this file matches the data it was built from.
//
// Search docs for the site's own records — releases, award bodies and countries
// — so the search box finds a record and not only a page. See
// app/lib/buildSearchDocs.ts for why this is generated rather than imported.

import type { SearchDoc } from "./searchIndex";

export const generatedDocs: SearchDoc[] = ${JSON.stringify(docs, null, 2)};
`;

await writeFile(OUT, body, "utf8");
const by = (s) => docs.filter((d) => d.section === s).length;
console.error(
  `wrote ${docs.length} docs — ${by("Release")} releases, ${by("Awards")} award bodies, ` +
    `${by("Country")} countries (${Math.round(body.length / 1024)}KB)`
);
