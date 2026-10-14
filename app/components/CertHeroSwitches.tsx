"use client"; // the certs switches, read from and written to the URL's #home=0 / #feat=0

import { effectiveView, type CertSwitches } from "../lib/certScope";
import { useCertView } from "../lib/useCertView";
import CertViewSwitches from "./CertViewSwitches";

/**
 * /certifications desktop: the two certs switches in the hero, under the lede
 * and above the CTA row (J3-6, design review 8 Oct 2026), so the figures they
 * rewrite (the tier rail beside them and the four stat tiles under them) are
 * on the same screen as the switch. The filter card below keeps Tier and
 * Country (CertExplorer `switchesAbove`).
 *
 * The same component and words as everywhere else (CertViewSwitches); the
 * state is the address bar's, so the explorer, the swapped server blocks and
 * the phone screen all follow a flip here (lib/useCertView).
 */
export default function CertHeroSwitches({
  offered,
  homeName,
  className,
}: {
  offered: CertSwitches;
  /** The artist's home country in full — the home switch's name. */
  homeName: string;
  className?: string;
}) {
  const [raw, setView] = useCertView();
  return (
    <CertViewSwitches
      view={effectiveView(raw, offered)}
      offered={offered}
      onPick={setView}
      homeName={homeName}
      className={className}
    />
  );
}
