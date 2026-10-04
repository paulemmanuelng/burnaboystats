import { useSyncExternalStore } from "react";
import { onDeepLinkChange, readDeepLink } from "./deepLink";
import { SHOWS_PARAM, artistForSlug } from "./showsDeepLink";

/**
 * The artist the "Biggest shows" link names — ?artist=<slug> (or #artist=) —
 * among `artists`, or null for All. Both box-office layouts read it.
 *
 * A store rather than an effect that sets state: the server snapshot is null,
 * so the static HTML is All, and the client snapshot takes over once hydrated,
 * which keeps the page statically rendered (no useSearchParams). The boards
 * keep their own chip state and fall back to this only until a chip is tapped.
 */
export function useLinkedArtist(artists: readonly string[]): string | null {
  return useSyncExternalStore(
    onDeepLinkChange,
    () => artistForSlug(readDeepLink(SHOWS_PARAM), artists),
    () => null
  );
}
