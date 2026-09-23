#!/bin/bash
# Vercel's Ignored Build Step (vercel.json "ignoreCommand"): exit 0 SKIPS the
# build, exit 1 builds. Anything unexpected must fall through to a build.
#
# Why (Paul, 23 Sep 2026): every production deploy starts the CDN and ISR cache
# for all ~800 pages cold, and 7 of the 68 production deploys in the week to
# 23 Sep changed only docs/ — three within 15 minutes of a Lagos morning — so
# visitors paid the cold path for no content change. Nothing the site builds
# from reads the excluded paths; tests/vercelIgnoreBuild.test.ts guards that.
#
# Production only: previews always build, so a PR's checks never change shape.
[ "$VERCEL_ENV" != "production" ] && exit 1
[ -z "$VERCEL_GIT_PREVIOUS_SHA" ] && exit 1
# A shallow clone may not hold the previous deploy's commit: build.
git cat-file -e "$VERCEL_GIT_PREVIOUS_SHA^{commit}" 2>/dev/null || exit 1
if git diff --quiet "$VERCEL_GIT_PREVIOUS_SHA" "$VERCEL_GIT_COMMIT_SHA" -- . \
  ':(exclude)docs' ':(exclude)tests' ':(exclude).github' ':(exclude,glob)*.md'; then
  echo "Only docs, tests, CI config or root markdown changed since the last production deploy: skipping the build."
  exit 0
fi
exit 1
