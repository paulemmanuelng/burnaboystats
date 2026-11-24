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
  export const liveChartsUpdated = "2026-11-23";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-23T23:58Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "E-Mortal Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
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
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 11,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 12,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 12,
            "movement": 85
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 12,
            "movement": 181
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 13,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 13,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 14,
            "movement": 93
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": -9
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 15,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 18,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
            "movement": 154
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 20,
            "movement": 60
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 22,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 22,
            "movement": 19
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 22,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 25,
            "movement": 33
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 27,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 28,
            "movement": 13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 33,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": -30
          },
          {
            "country": "FR",
            "name": "France",
            "position": 35,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 40,
            "movement": 17
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 40,
            "movement": 35
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 42,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 45,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 48,
            "movement": 36
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 48,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 51,
            "movement": -9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 66,
            "movement": 4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": -9
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 82,
            "movement": 11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 88,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 91,
            "movement": 54
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 101,
            "movement": -16
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 103,
            "movement": 17
          },
          {
            "country": "US",
            "name": "United States",
            "position": 103,
            "movement": -16
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 113,
            "movement": 5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 122,
            "movement": -25
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 123,
            "movement": -51
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 129,
            "movement": -58
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 132,
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 138,
            "movement": -99
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 150,
            "movement": -76
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 154,
            "movement": -18
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 173,
            "movement": -16
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 183,
            "movement": -135
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
            "position": 54,
            "movement": -12
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 75,
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
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 55,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 85,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 135,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": -69
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": -20
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 191,
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
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 55,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 171,
            "movement": -3
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
            "movement": -1
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
            "position": 68,
            "movement": -4
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 65,
            "movement": -11
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 111,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 124,
            "movement": 38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 166,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 177,
            "movement": -89
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 191,
            "movement": -8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 195,
            "movement": -24
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
            "position": 14,
            "movement": 117
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 73,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
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
            "position": 79,
            "movement": -65
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 48,
            "movement": -39
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 91,
            "movement": -6
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 89,
            "movement": 67
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": -73
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": -43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": -13
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 2
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
            "movement": -3
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
            "position": 184,
            "movement": -170
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
            "position": 45,
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
            "movement": 5
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
            "movement": -16
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
            "position": 61,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 45
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "movement": 1
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
            "position": 14,
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
            "position": 81,
            "movement": null,
            "status": "new"
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
            "position": 12,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 13,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": -9
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 35,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 39,
            "movement": -2
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 83,
            "movement": -34
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 91,
            "movement": 33
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 111,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 33
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 124,
            "movement": -8
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": -29
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 174,
            "movement": -61
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 199,
            "movement": -66
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
            "position": 109,
            "movement": -13
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 171,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 166,
            "movement": -22
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
            "position": 41,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": -12
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 57,
            "movement": 96
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 82,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": 54
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 97,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 49
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -55
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": 8
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 160,
            "movement": -26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
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
            "position": 4,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": 51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 3
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
            "position": 7,
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
            "position": 178,
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
            "position": 80,
            "movement": null,
            "status": "new"
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
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": -87
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": -62
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 142,
            "movement": -92
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": 27
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
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
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": 71
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 160,
            "movement": -59
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
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
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -24
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": -75
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 72,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 143,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": -38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
            "movement": null,
            "status": "new"
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
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": -87
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
    "title": "SUGA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": -50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": -28
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
            "movement": -2
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
            "position": 103,
            "movement": 90
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -15
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": 61
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -99
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 21,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 139
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 28,
            "movement": 25
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 62,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 62,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 183,
            "movement": -119
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
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
            "position": 72,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": null,
            "status": "new"
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
            "position": 66,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 34,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
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
            "position": 62,
            "movement": -25
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
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 98
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": 26
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
            "position": 2,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": -2
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
            "position": 72,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holiday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
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
            "position": 158,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
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
            "position": 157,
            "movement": -28
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Only You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b8e2659cffdd87f60cc27dd9d4a204d7/500x500-000000-80-0-0.jpg"
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
            "position": 113,
            "movement": null,
            "status": "new"
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
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01"
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
  