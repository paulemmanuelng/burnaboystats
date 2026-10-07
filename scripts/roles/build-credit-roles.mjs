#!/usr/bin/env node
// Writes app/data/creditRoles.generated.ts from the decided credit roles.
//
// The logic lives in scripts/roles/credit-roles-lib.mjs so a test can call it
// directly and assert the checked-in file is still current — this script is
// only the writer (the same split as scripts/build-search-index.mjs).
//
//   node scripts/roles/build-credit-roles.mjs

import { readFile, writeFile } from "node:fs/promises";
import { renderCreditRoles } from "./credit-roles-lib.mjs";

const DECIDED = new URL("../../docs/sourcing/roles-decided-2026-10-07.json", import.meta.url);
const OUT = new URL("../../app/data/creditRoles.generated.ts", import.meta.url);

const decided = JSON.parse(await readFile(DECIDED, "utf8"));
await writeFile(OUT, renderCreditRoles(decided), "utf8");
const board = Object.values(decided.board).reduce((n, rows) => n + Object.keys(rows).length, 0);
console.log(`wrote ${Object.keys(decided.burna).length} Burna Boy titles and ${board} board releases`);
