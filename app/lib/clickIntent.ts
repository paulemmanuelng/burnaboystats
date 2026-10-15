import type { MouseEvent } from "react";

/**
 * Whether a click on a link that also opens a dialog should open the dialog.
 *
 * A plain primary click does; a modified or middle click is left to the
 * browser, so the link's page opens in a new tab as any link would. Used by
 * the phone /music album cards (MobileMusic), which are real links to the album
 * pages that open the tracklist dialog on a plain click. (Desktop's cards have
 * been plain links since Job 4, J4-4; the phone grid came back 15 Oct 2026.)
 */
export const opensDialog = (
  e: Pick<MouseEvent, "button" | "metaKey" | "ctrlKey" | "shiftKey" | "altKey">,
): boolean => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
