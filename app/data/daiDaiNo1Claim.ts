/**
 * "The most days at No. 1 by any song in 2026" — Dai Dai's claim on Spotify's
 * Global Daily Top Songs chart, true through this chart and always printed with
 * its date, because it can still be overtaken.
 *
 * Re-read 2 Oct 2026 on kworb global_daily_totals (newest chart 30 Sep 2026):
 * Dai Dai "Pk 1 (x37)"; KAROL G's "BbY WOW", the only 2026 song near it, still
 * "(x31)" — it held No. 1 to the 27 Sep chart, then Taylor Swift's "Patient
 * Zero" took it (x4 by 30 Sep) and BbY WOW sat at No. 2, so the tie on 3 Oct
 * and the pass on 4 Oct forecast on 28 Sep did not happen. Djo's "End of
 * Beginning" (32) was the earlier runner-up.
 *
 * Its OWN date, not daiDai.ts's NO1_DAYS_AS_OF: moving that anchor forward must
 * never carry this claim with it. Move this only after re-reading the year's
 * No. 1 totals on that chart; once another 2026 song has more than 37, the claim
 * goes. A module of its own because daiDai.ts and africasBiggest.ts both print
 * it, and daiDai.ts already imports africasBiggest.ts.
 */
export const DAI_DAI_2026_MOST_NO1_THROUGH = "2026-09-30";

const longDate = (iso: string, locale: "en-GB" | "es-ES") =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const DAI_DAI_2026_MOST_NO1_THROUGH_LONG = longDate(DAI_DAI_2026_MOST_NO1_THROUGH, "en-GB");
export const DAI_DAI_2026_MOST_NO1_THROUGH_LONG_ES = longDate(DAI_DAI_2026_MOST_NO1_THROUGH, "es-ES");
