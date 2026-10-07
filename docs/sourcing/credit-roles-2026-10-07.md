# Lead or featured: Spotify's credit roles (read 7 Oct 2026)

## The rule

Paul, 6 Oct 2026: an artist's role on a song is **Spotify's own credit role** for that artist in the track's "View credits" panel (track ⋯ → View credits → the Artist block). "Main Artist" is **lead**; "Featured Artist" is **featured**. Where a release is not on Spotify with that artist, or Spotify carries only a different version, the **release billing** decides ("X ft. ARTIST" = featured, anything else = lead), and the release is listed below. Wikipedia, Genius and fan pages are not used. ChartMasters' per-artist Spotify "Lead streams" / "Feat streams" are a cross-check only.

One role per (artist, release as stored). One record can be lead for one artist and featured for another: "Like" (Iyanya ft. Davido & Kizz Daniel) credits Davido as Main Artist and Kizz Daniel as Featured Artist; "Won Da Mo" (Mavins) credits Rema as Main and Ayra Starr as Featured. This supersedes the 6 Oct ruling that the board artists billed after one lead are filed one way (debug rulings item 3).

Burna Boy's **co-leads** are his lead releases whose billing is not his own ("Dave ft. Burna Boy", "Shakira & Burna Boy"): the names in the tag are Spotify's other Main Artists on the track, in the site's spelling, stored in the data and never parsed from a credit line. His own songs with a guest ("For My Hand" feat. Ed Sheeran, "TaTaTa" feat. Travis Scott, "Pardon" with Stromae) are plain lead even where Spotify lists the guest as a Main Artist too.

## Files

| File | What it is |
|---|---|
| `credit-roles-2026-10-07.json` | The raw reads: one row per Spotify track id (1,311), `{ spotifyId, spotifyTitle, artists: [{ name, role }], readAt, from }`. |
| `roles-decided-2026-10-07.json` | The decision per release: role, source (spotify / billing), Spotify id and credits or the billing basis, the filing on 7 Oct before this change, and `coLeadWith` for Burna Boy's 30 co-leads. |
| `app/data/creditRoles.generated.ts` | Generated from the decided file by `scripts/roles/build-credit-roles.mjs`; `tests/creditRoles.test.ts` asserts it is current and traces every row to the raw reads. |
| `app/data/burnaTrackRoles.json` | Burna Boy's role on all 284 tracks on his kworb songs page (page 2026/10/06), from the raw reads. The daily pipeline (`scripts/build-role-streams.mjs`) sums kworb's per-song totals by these roles into `app/data/roleStreams.ts`. |

## Method

- **Inventory.** Every release the site files for Burna Boy or a board artist (certified, charted, or with a song page) was matched to a Spotify track id by title and credited artist on that artist's kworb songs page: 1,318 releases, 1,133 matched to a track (the other 185 are 96 albums, which are billed to the artist and keep their own group, and 89 songs with no Spotify credit for the artist).
- **Read.** Each track's credits dialog was read in the Browser pane, signed in, read-only (nothing played, liked, saved or followed), with a script that moves between tracks through the web player's own navigation, opens "More options" → "View credits", parses the dialog's Artist block and closes it (~1.5 s per track). A stale dialog (credits title ≠ page title) is flagged and re-read.
- **Check.** 581 stored rows were re-read with the slow click recipe — every row where a board artist is not plain Main Artist, every row with two or more Main Artists including a board artist, and one random row per chunk — plus two alternates. **0 mismatches** in names, roles or order; 0 missing, 0 duplicate rows.
- **Burna Boy's whole catalogue.** The other 176 tracks on his kworb page were read the same way on 7 Oct (~17:00–17:45 BST), so all **284 of 284** have a row and his stream split uses no kworb-marker guess.
- **Two inventory corrections.** The inventory matched Olamide's "Julie" to Davido's "Julie" (42fepRl6xoJePQXvgFKJjf, Davido only) and Fireboy DML's "Running" to Ayra Starr's "Running" (1tKsfYB65Kz74yk0HMCdcH, Ayra Starr and Lojay). The right tracks were re-read: Olamide's own "Julie" (58f9RS1Wkaapezwhu5Cu3L, Olamide Main) and LADIPOE's "Running" (6858xmZthZ7jEe06VyZxbN, LADIPOE Main, Fireboy DML Main). The decided file uses those.

Role values across the raw rows: "Main Artist", "Featured Artist", and one "Main Artist • Featured Artist" (Daecolm on "99", not a board artist).

## What moved (7 Oct 2026)

Nothing moved from lead to featured anywhere. From featured to lead:

- **Burna Boy, /certifications:** 14 releases (Featured appearances 23 → 9): 4 Kampé II, Lenu (Remix), Location, Loved by You, My Oasis, Own It, Play Play, Rollin', Second Sermon (Remix), Talibans II, Tshwala Bam (Remix), We Pray, WGFT, Yaba Buluku (Remix).
- **Burna Boy, /records/charts:** 27 releases (Featured 35 → 8): the chart-listed ones of the 14 above, plus All My Life (Burna Boy Remix), Birthday, Coming Home, Do I, Good Time, I FEEL IT, Just Like Me, Laho II, Masculine, Mera Na, Only You, ROBOSHOTTA, Rotate, Teary Eyes.
- **What stays featured for him** is exactly where Spotify says Featured Artist: Be Honest, Ginger, Jerusalema (Remix), Sungba (Remix), Simmer, Enjoy Yourself (Remix), Donne-moi l'accord, All Eyes on Me, Hey Boy, Siberia — and two billing fallbacks, Baddest and She's Not Anyone.
- **Board:** 143 certified releases move, Featured appearances 197 → 54. Tyla, Victony, CKay and Ruger hold no featured certified release after it.

## Releases decided by billing (no Spotify credit for the artist)

| Artist | Release | Role | Billing / basis |
|---|---|---|---|
| burna-boy | Baddest | featured | "AKA ft. Burna Boy, Khuli Chana & Yanga Chief" (not on Spotify with Burna Boy) |
| burna-boy | She's Not Anyone | featured | "D-Block Europe ft. Burna Boy" (Spotify carries it without Burna Boy in the artist list) |
| asake | Military | lead | filed lead by the sweep; billing string not stored |
| black-sherif | Come & Go | featured | "Arrdee ft. Black Sherif" (TCSN); Spotify's remix credits him only as Remixer |
| black-sherif | First Sermon | lead | "Black Sherif" (TCSN) |
| black-sherif | Yard | lead | "Poco Lee, Black Sherif, Bella Shmurda & Alpha P" (TCSN, co-billed) |
| bnxn | Confident | lead | "Savage & BNXN" (TCSN) |
| bnxn | Hustle | featured | "Reminisce ft. BNXN & D Smoke" (TCSN) |
| bnxn | Italy | lead | "BNXN ft. Blaq Diamond" (TCSN) |
| bnxn | Omo Elewa | lead | "T.Y.E & BNXN" (TCSN) |
| davido | All (Rexxie ft. Davido) | featured | "Rexxie ft. Davido" |
| davido | Baddest Boy | featured | "Skiibii ft. Davido" (sweep doc) |
| davido | Dodo | lead | filed lead by the sweep (billed first); billing string not stored |
| davido | Maserati (Remix) (Olakira ft. Davido) | featured | "Olakira ft. Davido" |
| davido | Yebo Lapho | **lead** (was featured) | "TxC, Davido ft. Tony Duardo, LeeMcKrazy & Djy Biza" (RiSA, co-billed) |
| fireboy-dml | Outside | lead | "Fireboy DML" (sweep doc) |
| fireboy-dml | Southy Love | featured | filed featured by the sweep (billed after the lead); billing string not stored |
| kizz-daniel | Currently | lead | "Kizz Daniel ft. Falz, Olamide & LK Kuddy" (TCSN) |
| kizz-daniel | Unleash | **lead** (was featured) | "Poco Lee & Kizz Daniel" (TCSN, co-billed) |
| olamide | Currency | lead | "Young Jonn & Olamide" (TurnTable chart row) |
| olamide | Currently | featured | "Kizz Daniel ft. Falz, Olamide & LK Kuddy" (TCSN) |
| olamide | Hate Me | lead | "Olamide ft. Wande Coal" (TurnTable chart row) |
| olamide | Loml | featured | "Cheque ft. Olamide" (TCSN) |
| olamide | Ojemba | lead | "Phyno & Olamide" (TCSN) |
| olamide | Vision 2020 | featured | "Bella Shmurda ft. Olamide" (TCSN) |
| olamide | We Outside | lead | "Olamide" (TCSN) |
| olamide | Zazoo Zehh | featured | "Portable & Poco Lee ft. Olamide" (TCSN) |
| oxlade | Kolo | featured | "Ice Prince ft. Oxlade" (TurnTable) |
| rema | Soweto | lead | "Victony, Tempoe & Rema ft. Don Toliver" (co-billed); Spotify credits Rema only on "Soweto - Sped Up" |
| seyi-vibez | 234 | lead | "Seyi Vibez" (TCSN) |
| seyi-vibez | 40 BTC | featured | "Rexxie ft. Seyi Vibez" (sweep doc) |
| seyi-vibez | Alaska | lead | filed lead by the sweep; billing string not stored |
| seyi-vibez | Apala Interlude | lead | "Seyi Vibez" (TCSN) |
| seyi-vibez | G.O.A.T | lead | filed lead by the sweep; billing string not stored |
| seyi-vibez | IG Story | lead | filed lead by the sweep; billing string not stored |
| seyi-vibez | On God (Kashy) | featured | "Kashy ft. Seyi Vibez" |
| seyi-vibez | Para Boi | lead | "Seyi Vibez" (TCSN) |
| seyi-vibez | Professor Peller | lead | "Seyi Vibez ft. Zlatan" (sweep doc) |
| tiwa-savage | 100 Million | **lead** (was featured) | "ODUMODUBLVCK & Tiwa Savage" (TCSN, co-billed) |
| tiwa-savage | Gbese | **lead** (was featured) | "Majeeed & Tiwa Savage" (TCSN, co-billed) |
| tiwa-savage | Jaiye Foreign | lead | "Tiwa Savage & Zinoleesky" (TCSN) |
| tiwa-savage | Pick Up | lead | "Tiwa Savage" (TCSN) |
| wizkid | IDG (Asa ft. Wizkid) | featured | "Asa ft. Wizkid" |

Six were filed by the sweep with no billing string stored (Dodo, Military, Alaska, G.O.A.T, IG Story, Southy Love); they keep the sweep's filing, and a TCSN register re-read would settle them.

Differently-titled Spotify versions read as the record, because they are the only versions carrying the artist: BNXN "Alone" ("alone - Remix"), Wizkid and Seyi Vibez "Apala Disco" ("APALA DISCO … - Remix"), Davido "Ogechi" ("Ogechi (feat. Davido) - Remix") and "Dada" ("Dada (feat. Davido) [Remix]"), Ayra Starr "Love Don't Cost a Dime" ("Re-Up"), Asake "Blessings" ("Blessings - Remix"), Tems and Omah Lay "Isaka (6AM)" ("Isaka II (6am)"), Burna Boy "Do I" ("Do I - Remix") and "Tshwala Bam (Remix)" ("Tshwala Bam (feat. S.N.E)").

## Streams by role, against ChartMasters

Burna Boy, Spotify, kworb's per-song totals (page 2026/10/06) summed by his credit on each of his 284 tracks: **9.86B as lead (240 songs), 1.17B as featured (44 songs)**, 11.03B in all. ChartMasters, read 7 Oct 2026, prints **8.0B lead / 3.1B featured** (11.1B).

The gap is ChartMasters' own filing. Its public song table for him (the top 20) files "Location" (740M), "Own It" (416M), "WE PRAY" (256M) and "Loved By You" (156M) under "Features"; Spotify's credits panel lists Burna Boy as Main Artist on all four. Those four (1.568B) are about 85% of the 1.86B lead gap; their other versions on his kworb page (four alternate "WE PRAY" versions and "Be Our Guest", 118.7M; the "Own It" Toddla T Remix, 11.2M) bring it to about 91%. The rest is smaller songs Spotify credits him as Main on ("Miss You Bad" 50.0M, "Second Sermon - Remix" 43.8M, "All My Life (feat. Burna Boy)" 11.0M, "Aboboyaa" 9.9M, …), whose ChartMasters filing is not public. ChartMasters also re-files songs from week to week: Tyla read 4.7b lead / 136.8m feat on 30 Sep and 4.4b / 486.8m on 7 Oct, "Show Me Love" (349M) having moved into its Features group.

The board, the same method (board tracks outside the inventory — uncertified, uncharted — are filed by kworb's marker, "*" = featured). CM figures as printed on 7 Oct (±0.05B on a "b" value). Δ = rule minus CM, over CM.

| Artist | kworb page | Tracks read (share of streams) | Lead (rule) | Featured (rule) | CM lead | CM feat | Δ lead | Δ feat |
|---|---|---|---|---|---|---|---|---|
| Burna Boy | 2026/10/06 | 284/284 (100%) | 9.86B | 1.166B | 8.0b | 3.1b | +23.2% | -62.4% |
| Olamide | 2026/10/05 | 81/255 (81%) | 1.36B | 0.178B | 1.5b | 336.1m | -9.5% | -47.1% |
| Black Sherif | 2026/10/02 | 30/64 (72%) | 0.71B | 0.117B | 739.1m | 245.1m | -3.5% | -52.5% |
| BNXN | 2026/10/04 | 82/126 (95%) | 2.03B | 0.159B | 2.0b | 326.1m | +1.7% | -51.2% |
| Wizkid | 2026/10/05 | 115/247 (86%) | 5.22B | 6.425B | 5.0b | 6.9b | +4.4% | -6.9% |
| Davido | 2026/10/05 | 113/269 (77%) | 3.11B | 0.731B | 3.4b | 798.8m | -8.6% | -8.5% |
| Rema | 2026/10/05 | 62/135 (56%) | 6.08B | 0.660B | 6.4b | 409.3m | -5.0% | +61.3% |
| Tems | 2026/10/06 | 25/61 (88%) | 5.77B | 0.475B | 4.8b | 1.5b | +20.3% | -68.3% |
| Tyla | 2026/10/05 | 26/61 (91%) | 4.72B | 0.149B | 4.4b | 486.8m | +7.4% | -69.4% |
| Ayra Starr | 2026/10/04 | 62/124 (91%) | 3.72B | 0.348B | 3.6b | 775.0m | +3.2% | -55.1% |
| Asake | 2026/10/05 | 86/121 (96%) | 4.20B | 0.253B | 4.1b | 400.5m | +2.5% | -36.8% |
| Omah Lay | 2026/10/03 | 67/91 (95%) | 3.39B | 0.357B | 3.1b | 653.2m | +9.4% | -45.4% |
| Seyi Vibez | 2026/10/06 | 117/148 (94%) | 1.84B | 0.158B | 1.9b | 232.9m | -3.4% | -32.2% |
| Victony | 2026/10/02 | 44/115 (63%) | 1.48B | 0.051B | 1.4b | 160.0m | +5.6% | -67.9% |
| Fireboy DML | 2026/10/02 | 54/119 (64%) | 2.39B | 0.292B | 2.6b | 178.0m | -8.1% | +63.8% |
| CKay | 2026/10/05 | 24/99 (56%) | 2.97B | 0.098B | 3.0b | 77.2m | -0.9% | +27.4% |
| Kizz Daniel | 2026/10/02 | 46/129 (81%) | 1.54B | 0.178B | 1.6b | 175.8m | -4.0% | +1.3% |
| Ruger | 2026/10/05 | 31/71 (91%) | 1.20B | 0.034B | 1.3b | 20.3m | -7.7% | +65.5% |
| Oxlade | 2026/09/30 | 19/85 (61%) | 0.89B | 0.119B | 511.4m | 169.0m | +73.9% | -29.8% |
| Tiwa Savage | 2026/09/26 | 27/154 (52%) | 0.52B | 0.283B | 678.7m | 267.1m | -23.8% | +6.1% |

Where it differs, the cause is the same for 14 of the 20: ChartMasters files a song in its "Features" group that Spotify credits the artist on as Main Artist (BNXN "Mood", "Cold Outside"; Wizkid "BROWN SKIN GIRL", "Link Up (Spider-Verse Remix)", "MMS"; Davido "Hmmm"; Rema "Favourite Girl"; Tems "Raindance", "Fountains"; Tyla "Show Me Love"; Ayra Starr "People", "Ngozi", "2 Sugar", "Overloading", "GOOD FEELiNGS"; Omah Lay "People", "Another Vibe"; Black Sherif "WOTOWOTO SEASONING"; Victony "Babylon", "Different Size", "golibe"; CKay "La La"; Oxlade "Mistaken"; Tiwa Savage "Dis Love"). The rest is coverage: ChartMasters and kworb count different tracks under an artist (ChartMasters leaves out Oxlade's "KU LO SA - A COLORS SHOW", 452.9M, his top track on kworb).

**On the site, only Burna Boy's split comes from this method** (/music, "Lead vs featured", refreshed daily). The board's lead-streams list on /records/africas-biggest stays ChartMasters' own figures for all 20 artists (`docs/sourcing/spotify-lead-streams-2026-10-07.md`), because it compares 20 artists on one source and the board's own reads cover 52–96% of their streams.
