// Load app/data/*.ts in plain Node — no tsx, no npm ci.
// Spec: docs/cert-watcher/SPEC.md §2.3.
//
// Node ≥ 22.18 strips TypeScript types natively; the one thing it will not do
// is resolve the extension-less relative imports the site's modules use
// ("./certifications"), so a resolve hook retries a failed relative import
// with ".ts". The workflow pins Node 24. Vitest NEVER loads this file: CI's
// ci.yml runs Node 20, which cannot strip types — the tests import the data
// through vitest and call buildSiteIndex, or pass --site-json.

import * as nodeModule from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

export class LoaderError extends Error {}

export function nodeCanStripTypes(version = process.versions.node) {
  const [maj, min] = version.split(".").map(Number);
  return maj > 22 || (maj === 22 && min >= 18);
}

let hooked = false;
function hook() {
  if (hooked) return;
  if (!nodeCanStripTypes()) {
    throw new LoaderError(`Node ${process.versions.node}: TypeScript loading needs ≥ 22.18 (the workflow pins 24)`);
  }
  nodeModule.registerHooks({
    resolve(specifier, context, nextResolve) {
      try {
        return nextResolve(specifier, context);
      } catch (e) {
        if (e?.code === "ERR_MODULE_NOT_FOUND" && /^\.\.?\//.test(specifier)) return nextResolve(`${specifier}.ts`, context);
        throw e;
      }
    },
  });
  hooked = true;
}

export async function loadSite(repo) {
  hook();
  const certs = await import(pathToFileURL(path.join(repo, "app/data/certifications.ts")).href);
  const afro = await import(pathToFileURL(path.join(repo, "app/data/afrobeats.ts")).href);
  return { certs, afro };
}
