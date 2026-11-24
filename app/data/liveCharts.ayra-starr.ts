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
  export const liveChartsBuiltAt = "2026-11-24T09:59Z";
  
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 12,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 14,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 7
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 14,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 16,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": -3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 23,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 28,
            "movement": 19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 36,
            "movement": 39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 40,
            "movement": 9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 40,
            "movement": 68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": -2
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 55,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": 19
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 59,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": 13
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 62,
            "movement": 6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 64,
            "movement": -6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 66,
            "movement": 10
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 71,
            "movement": -20
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 73,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": 13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 83,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 28
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 91,
            "movement": -34
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 106,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -74
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 121,
            "movement": -6
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 121,
            "movement": 68
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 136,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 169,
            "movement": -53
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 178,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 200,
            "movement": -175
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
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -2
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 21,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -9
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 48,
            "movement": -11
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
            "position": 144,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -12
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": 0
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
            "position": 2,
            "movement": 43
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 4,
            "movement": 26
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 16,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 20,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 29,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 46,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": 83
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": 28
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 54,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 58,
            "movement": -30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 64,
            "movement": 10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 68,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": -19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 79,
            "movement": 112
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -12
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 89,
            "movement": 44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 97,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 78
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 106,
            "movement": -86
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 120,
            "movement": -36
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 123,
            "movement": -37
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 126,
            "movement": 26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 132,
            "movement": -11
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 135,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 145,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 152,
            "movement": 34
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 157,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 162,
            "movement": -29
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 177,
            "movement": -32
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 181,
            "movement": -20
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 194,
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
    "title": "treat u right",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": -71
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": -4
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
            "position": 31,
            "movement": 2
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
            "position": 75,
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 10,
            "movement": 2
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
            "position": 57,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 69,
            "movement": 51
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 172,
            "movement": -7
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 23,
            "movement": -18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": 48
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 78,
            "movement": -33
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 95,
            "movement": -68
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 150,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": -12
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 189,
            "movement": -84
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -10
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 21,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": 51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -57
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": 21
          },
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 164,
            "movement": -90
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 197,
            "movement": -95
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 87,
            "movement": -68
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": 49
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 156,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
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
            "position": 95,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 8
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 136,
            "movement": -53
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": 8
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
            "country": "FM",
            "name": "Micronesia",
            "position": 89,
            "movement": -68
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": -17
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
            "position": 79,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 144,
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
            "position": 162,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 90,
            "movement": -36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": -6
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 70,
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
            "position": 9,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
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
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": -44
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
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": 17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": null,
            "status": "new"
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
            "position": 46,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 67,
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MO",
            "name": "Macau",
            "position": 49,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MO",
            "name": "Macau",
            "position": 50,
            "movement": -11
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 87,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": 9
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
  