/**
 * "The most days at No. 1 by any song in 2026" — Dai Dai's claim on Spotify's
 * Global Daily Top Songs chart, true through this chart and always printed with
 * its date, because it is about to be overtaken. KAROL G's "BbY WOW" had 31
 * days at No. 1 on the 27 Sep 2026 chart and was No. 1 on it (kworb
 * global_daily_totals "Pk 1 (x31)"); held there, it ties Dai Dai's 37 on the
 * 3 Oct chart and passes it on the 4 Oct. The claim used to name Djo's "End of
 * Beginning" (32) as the runner-up, which BbY WOW passes within days.
 *
 * Its OWN date, not daiDai.ts's NO1_DAYS_AS_OF: moving that anchor forward must
 * never carry this claim with it. Move this only after re-reading the year's
 * No. 1 totals on that chart; once another 2026 song has more than 37, the claim
 * goes. A module of its own because daiDai.ts and africasBiggest.ts both print
 * it, and daiDai.ts already imports africasBiggest.ts.
 */
export const DAI_DAI_2026_MOST_NO1_THROUGH = "2026-09-27";

const longDate = (iso: string, locale: "en-GB" | "es-ES") =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const DAI_DAI_2026_MOST_NO1_THROUGH_LONG = longDate(DAI_DAI_2026_MOST_NO1_THROUGH, "en-GB");
export const DAI_DAI_2026_MOST_NO1_THROUGH_LONG_ES = longDate(DAI_DAI_2026_MOST_NO1_THROUGH, "es-ES");
