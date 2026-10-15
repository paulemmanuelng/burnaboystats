import NextLink from "next/link";
import type { ComponentProps } from "react";
import { noPrefetch } from "../lib/noPrefetch";

/**
 * next/link with the site's one prefetch rule: a link into /compare never
 * prefetches (lib/noPrefetch.ts — the firewall's per-IP rate limit on that
 * path). Every other link gets exactly the props it was given.
 *
 * The only module in app/ that imports next/link: every other file imports
 * this as `Link` and its JSX stays as it was. That is the whole mechanism. An
 * href can come from anywhere, a literal, a prop, a data list several modules
 * away (the tour map's country boards, the home band's updates entry), so the
 * decision is made here, from the href itself, when the link renders.
 * Navigation is unchanged — it is still next/link, so a click is still a
 * client-side transition; only the background fetch of the page behind the
 * link is gone. No directive: a server component renders it on the server, a
 * client component bundles it.
 *
 * tests/compareNoPrefetch.test.tsx renders the pages and states that carry
 * compare links and fails any other module that loads next/link;
 * eslint.config.mjs refuses the import too.
 */
export default function SiteLink(props: ComponentProps<typeof NextLink>) {
  return noPrefetch(props.href) ? <NextLink {...props} prefetch={false} /> : <NextLink {...props} />;
}
