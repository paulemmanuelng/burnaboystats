// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=ayra-starr from kworb's artist page.
  //
  // PLATFORM chart data for Ayra Starr: where each release is sitting RIGHT
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
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 4,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 7,
            "movement": 23
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 8,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 9,
            "movement": 3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 9,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 24,
            "movement": 11
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 27,
            "movement": 44
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 27,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 41,
            "movement": 159
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 42,
            "movement": 41
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 44,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": 12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 45,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -20
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": -37
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": 10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 52,
            "movement": 12
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 58,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 62,
            "movement": -26
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 64,
            "movement": -36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 71,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 72,
            "movement": -58
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 74,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 79,
            "movement": -13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 85,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 105,
            "movement": -82
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 106,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 106,
            "movement": 15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 126,
            "movement": 10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 129,
            "movement": -8
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 131,
            "movement": 47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 1
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 184,
            "movement": -135
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": 2
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": null,
            "status": "re"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 28,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": -11
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 13,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 66,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 81,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 126,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 181,
            "movement": -28
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 3,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 23,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -10
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 53,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -67
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 107,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 98,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 14,
            "movement": -12
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 15,
            "movement": -11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 18,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": -4
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 34,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -7
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 42,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 14
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 44,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 53,
            "movement": 15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 67,
            "movement": 27
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 69,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": -17
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 79,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": -43
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 93,
            "movement": -29
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": 10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 120,
            "movement": 15
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 127,
            "movement": -48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -28
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 134,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": -67
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 153,
            "movement": -47
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 157,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 165,
            "movement": -39
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 180,
            "movement": -57
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 185,
            "movement": -40
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 189,
            "movement": -57
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 197,
            "movement": -20
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
            "position": 20,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 139,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rush",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 36,
            "movement": 33
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 152,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 176,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 197,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 15,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": 1
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
            "position": 41,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 63,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "treat u right",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -33
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
            "position": 33,
            "movement": -2
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
            "position": 33,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": 67
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 1
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
            "position": 195,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 42,
            "movement": -19
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 79,
            "movement": 71
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 96,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
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
            "position": 72,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 184,
            "movement": -40
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
            "position": 151,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 79
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": 47
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 148,
            "movement": -61
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 105,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": -22
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 171,
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
            "position": 125,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
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
            "country": "SC",
            "name": "Seychelles",
            "position": 138,
            "movement": -7
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 150,
            "movement": -61
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": 10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 25,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 37,
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 158,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 197,
            "movement": -41
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 93,
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
            "country": "MO",
            "name": "Macau",
            "position": 55,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 47,
            "movement": 40
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pray",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 133,
            "movement": 45
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 166,
            "movement": 23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
            "movement": -121
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Santa",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 4,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 80,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hypé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 22,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rhythm & Blues",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 70,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MO",
            "name": "Macau",
            "position": 54,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Birds Sing of Money",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -88
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "My Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Overloading",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg"
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
  