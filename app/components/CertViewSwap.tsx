"use client"; // picks one of the server-rendered views by the URL's #home=0 / #feat=0

import type { ReactNode } from "react";
import { effectiveView, viewKey, type CertSwitches, type CertViewKey } from "../lib/certScope";
import { useCertView } from "../lib/useCertView";

/**
 * A server-rendered block in each of its views — the headline numbers, the
 * tier rail, the country strip — swapped by the certs switches (the
 * home-country and "Featured appearances" switches).
 *
 * Every view is built on the server from the same data helpers
 * (lib/certScope), so no data module rides into the client bundle. Only the
 * "all" view is in the static HTML: the server snapshot of both switches is
 * "all", and another view reaches the page only when a reader picks it. A
 * switch the artist does not get (`offered`) is read as "all", so a shared
 * link naming it opens the view the page does have.
 */
export default function CertViewSwap({
  views,
  offered,
}: {
  views: Partial<Record<CertViewKey, ReactNode>> & { all: ReactNode };
  offered: CertSwitches;
}) {
  const [raw] = useCertView();
  return <>{views[viewKey(effectiveView(raw, offered))] ?? views.all}</>;
}
