/**
 * A 1x1 transparent GIF, as a data URI.
 *
 * Used as the `src` of an <img> whose real source is supplied by a
 * media-gated <source> inside a <picture>. Desktop and mobile markup both sit
 * in every document with one hidden by display:none, and the two paint
 * mechanisms behave differently there: a hidden background-image is never
 * fetched, but a hidden <img loading="eager"> is. That made "eager" a way to
 * bill every desktop visitor for a phone-only portrait.
 *
 * The preload scanner evaluates a <source media> before it fetches, so gating
 * the real image behind one restores the background's free-when-hidden
 * behaviour while keeping everything an <img> can do that a background cannot:
 * discovery during HTML parse, srcset, and a priority hint. Whichever layout
 * is hidden pays for this string instead, and it costs nothing over the wire.
 */
export const BLANK_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
