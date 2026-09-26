// Lets Node load the site's TypeScript data files as they are.
//
// Node 24 strips types from .ts on its own, but the data files import each
// other without an extension ("./certifications"), the way Next's bundler
// resolves them. This resolve hook retries such a relative import with ".ts"
// appended, and only for an importer that is itself a .ts file.

import { registerHooks } from "node:module";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

registerHooks({
  resolve(specifier, context, next) {
    try {
      return next(specifier, context);
    } catch (err) {
      const relative = specifier.startsWith("./") || specifier.startsWith("../");
      if (relative && context.parentURL?.endsWith(".ts") && !/\.[cm]?[jt]sx?$/.test(specifier)) {
        const url = new URL(`${specifier}.ts`, context.parentURL);
        if (existsSync(fileURLToPath(url))) return next(url.href, context);
      }
      throw err;
    }
  },
  // The repo's package.json declares no "type", so Node would first try each
  // .ts file as CommonJS and print a warning when it reparses it as a module.
  // They are all ES modules; say so up front.
  load(url, context, next) {
    if (url.startsWith("file:") && url.endsWith(".ts")) return next(url, { ...context, format: "module-typescript" });
    return next(url, context);
  },
});
