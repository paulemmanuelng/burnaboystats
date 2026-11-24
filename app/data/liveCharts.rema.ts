// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=rema from kworb's artist page.
  //
  // PLATFORM chart data for Rema: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
  export interface LiveEntry {
    country: string; // ISO alpha-2
    name: string;
    position: number;
    // Movement against the chart's previous edition: 0 = no change, null = the
    // source flagged a new/re-entry, absent = the source reports no movement for
    // this platform at all (YouTube). Absent and null are different facts.
    movement?: number | null;
    /** Why there is no movement: the source flagged a new entry or a re-entry. */
    status?: "new" | "re";
  }
  
  export interface LivePlatform {
    platform: string;
    numberOnes: number;
    entries: LiveEntry[];
  }
  
  export interface LiveRelease {
    title: string;
    kind: "song" | "album";
    /** Release artwork, resolved at build time. Absent means unresolved — the
     *  page draws a monogram rather than borrowing another release's cover. */
    cover?: string;
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-11-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-24T22:30Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "E-Mortal Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 12,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 14,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 16,
            "movement": 6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 18,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": -7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 21,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 22,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 22,
            "movement": -8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 25,
            "movement": -12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 29,
            "movement": -8
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 33,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 34,
            "movement": -15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 37,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 38,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 38,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": 13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 40,
            "movement": -20
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 40,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 43,
            "movement": -21
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 44,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 45,
            "movement": 21
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 47,
            "movement": 75
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 48,
            "movement": -20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 50,
            "movement": 53
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 54,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 62,
            "movement": -40
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 63,
            "movement": -51
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 65,
            "movement": -17
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 66,
            "movement": 84
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 68,
            "movement": 20
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 74,
            "movement": 27
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 82,
            "movement": -68
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 90,
            "movement": -23
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 92,
            "movement": -10
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": -13
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 120,
            "movement": 12
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 129,
            "movement": -89
          },
          {
            "country": "US",
            "name": "United States",
            "position": 146,
            "movement": -43
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 147,
            "movement": -18
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 196,
            "movement": -23
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 196,
            "movement": -109
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 100,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oh No",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 56,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 63,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": 71
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 132,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 135,
            "movement": 15
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 53,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -7
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 7
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -11
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Feel Alright",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 55,
            "movement": 122
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 66,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": 47
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
            "movement": 20
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 127,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 192,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 22,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 68,
            "movement": -52
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 79,
            "movement": -39
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 97,
            "movement": -91
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 42,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 72,
            "movement": -18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 91,
            "movement": -45
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 91,
            "movement": -26
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 100,
            "movement": -16
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 73,
            "movement": 20
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 79,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 54,
            "movement": 36
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 160,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TANZANIA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": 39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": -32
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Secondhand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 15,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 35,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": 95
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 71,
            "movement": -32
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 105,
            "movement": -14
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 116,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 119,
            "movement": 5
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": -16
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 187,
            "movement": -63
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 108,
            "movement": 58
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 14,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 29
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 83,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 117,
            "movement": -22
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 126,
            "movement": -29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": -13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 162,
            "movement": -105
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 200,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Velvet",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 143,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": 61
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": 53
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -84
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": -38
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 110,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 181,
            "movement": -28
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 184,
            "movement": -112
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": -103
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": 9
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": -46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 137,
            "movement": 23
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 146,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": -77
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": -46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 16,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 44,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": -25
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": 9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 58,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 65,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SUGA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 185,
            "movement": -42
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 35
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": -53
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": 12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 190,
            "movement": -75
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": 45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 89,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 183,
            "movement": 11
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 34,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 106,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": -30
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 129,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bang Bang",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": -87
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": -72
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holiday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fi Kan We Kan",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 60
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Trouble Maker",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace of Mind",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dcc05a9f00c838cb5af3784bb6932102/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BENIN BOYS",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": -95
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses Ultra",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  }
];
  
  /** Totals, derived so they can never disagree with the data above. */
  export const livePlacementCount = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
    0
  );
  export const liveNumberOnes = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
    0
  );
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
  /** Placements per platform, biggest first — powers the summary row. */
  export const livePlatformTotals: { platform: string; placements: number; numberOnes: number }[] =
    livePlatforms
      .map((platform) => {
        const blocks = liveCharts.flatMap((r) => r.platforms.filter((p) => p.platform === platform));
        return {
          platform,
          placements: blocks.reduce((n, p) => n + p.entries.length, 0),
          numberOnes: blocks.reduce((n, p) => n + p.numberOnes, 0),
        };
      })
      .sort((a, b) => b.placements - a.placements);
  