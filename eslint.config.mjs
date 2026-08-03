import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // The redesign handoff drops prototype HTML/JS here. It is gitignored and
    // never ships, but ESLint still walks the working tree — and the
    // prototypes use ReactDOM.render and assign to `module`, which fails the
    // build for code we are only reading as a spec.
    "design/**",
  ]),
]);

export default eslintConfig;
