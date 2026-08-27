# Raw sweep output — working data, NOT conclusions

Everything in this directory is **unreviewed agent output**, kept as an audit
trail. Do not read a row here as a verified fact.

**The reviewed conclusions live one level up**, in `BURNA-FINDINGS.md`,
`BOARD-FINDINGS.md`, `LASTSWEEP-FINDINGS.md`, `SWEDEN-FINAL.md`,
`NETHERLANDS.md`, `RETRACTIONS.md` and `PLAQUE-CHANGES.md`.

## Known-bad data in these files

- **All South African rows are unreliable.** `burna-raw.json` contains a row
  crediting *"Wizkid feat. Burna Boy"* for **"No Stress"**, which is a Wizkid
  solo track. Across 1,908 archived RiSA captures there is no "No Stress"
  capture at all, and RiSA's own archived URL for *Ginger* — the track that
  genuinely does feature Burna Boy — reads plain `artist=Wizkid`. The tiers in
  those rows were also inferred from award-image filenames rather than text.
- **`board-tier-diffs.json` overstates disagreement.** It was generated before
  the artist+title matching rule was applied. Five of its Nigerian "upgrades"
  belong to entirely different artists — TCSN's own parenthetical disambiguators
  name the owner. See `RETRACTIONS.md`.
- **Swiss rows in `burna-raw.json` were demoted** after audit: they cited
  swisscharts.com, a Hung Medien aggregator mirror, not IFPI Schweiz.
- **Nigerian award dates are unusable.** Every TCSN row carries the same
  "Feb 6, 2026" stamp, a register-wide migration date rather than an award date.
  The field was renamed `awardDateUnusable` for that reason.

## The one rule these files exist to enforce

A certification is identified by **artist together with title**, using the
register's own credit string. Matching on a normalised title alone produced a
duplicate release entry, nine double-counted plaques and five phantom tier
upgrades in a single day.
