import type { MouseEvent } from "react";

/**
 * Whether a click on a link that also opens a dialog should open the dialog.
 *
 * A plain primary click does; a modified or middle click is left to the
 * browser, so the link's page opens in a new tab as any link would. Used by
 * the /music album cards on both layouts (Discography, MobileMusic), which are
 * real links to the album pages that open the tracklist dialog on a plain click.
 */
export const opensDialog = (
  e: Pick<MouseEvent, "button" | "metaKey" | "ctrlKey" | "shiftKey" | "altKey">,
): boolean => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
