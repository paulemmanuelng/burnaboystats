#!/usr/bin/env node
// Writes app/data/songRoles.generated.ts: every site release's lead/featured
// role by Rule C (Paul, 7 Oct 2026), from the rule's inputs, each artist's own
// Spotify releases and the three overrides.
//
// The logic lives in scripts/roles/rule-c-lib.mjs so a test can call it
// directly and assert the checked-in file is still current — this script is
// only the writer (the same split as scripts/build-search-index.mjs).
//
//   node scripts/roles/build-song-roles.mjs

import { readFile, writeFile } from "node:fs/promises";
import { decideAll, renderSongRoles } from "./rule-c-lib.mjs";

const read = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), "utf8"));
const inputs = await read("../../docs/sourcing/rule-c-inputs-2026-10-07.json");
const own = await read("../../docs/sourcing/own-releases-2026-10-07.json");
const { overrides } = await read("../../app/data/roleOverrides.json");

await writeFile(new URL("../../app/data/songRoles.generated.ts", import.meta.url), renderSongRoles(inputs, own, overrides), "utf8");
const { burna, board } = decideAll(inputs, own, overrides);
const rows = [...Object.values(burna), ...Object.values(board).flatMap((r) => Object.values(r))];
const tally = (k) => rows.filter((r) => r.role === k).length;
console.log(`wrote ${rows.length} roles (${Object.keys(burna).length} Burna Boy titles): ${tally("lead")} lead, ${tally("featured")} featured`);
