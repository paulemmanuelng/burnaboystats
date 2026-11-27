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
  export const liveChartsUpdated = "2026-11-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-27T08:40Z";
  
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
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 5,
            "movement": 148
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 10,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": -3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 14,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 16,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 51
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 18,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 21,
            "movement": 34
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 24,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 27,
            "movement": -11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 28,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 40,
            "movement": 14
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 45,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 47,
            "movement": -22
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 58,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -18
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 69,
            "movement": -22
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 72,
            "movement": -19
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 74,
            "movement": -22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 76,
            "movement": -23
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 80,
            "movement": -49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": -16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 81,
            "movement": -55
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 82,
            "movement": 35
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 88,
            "movement": 53
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 138,
            "movement": -70
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 141,
            "movement": -21
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 143,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": -40
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 154,
            "movement": -41
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 158,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 184,
            "movement": -118
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
            "position": 18,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 66,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 94,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 142,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 187,
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 28,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -1
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 99,
            "movement": -24
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
            "position": 94,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 5,
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
            "country": "SC",
            "name": "Seychelles",
            "position": 18,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 23,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 11
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 26,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 30,
            "movement": 48
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 42,
            "movement": -6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 50,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 54,
            "movement": -10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 9
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 69,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": -19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 78,
            "movement": 108
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 92,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 97,
            "movement": -62
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 111,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 147,
            "movement": -64
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 160,
            "movement": -84
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 162,
            "movement": -39
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 180,
            "movement": -10
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 196,
            "movement": -142
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 198,
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": -6
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 63,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 72,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MV",
            "name": "Maldives",
            "position": 23,
            "movement": 102
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 28,
            "movement": 21
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 74,
            "movement": -43
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 173,
            "movement": -49
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 193,
            "movement": null,
            "status": "new"
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 196,
            "movement": -5
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
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
            "position": 34,
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
            "position": 53,
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
            "position": 10,
            "movement": 33
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 19,
            "movement": 47
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 63,
            "movement": -13
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 101,
            "movement": -61
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": 21
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 142,
            "movement": -32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -6
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 79
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": -56
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": 23
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
            "position": 187,
            "movement": -5
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
            "position": 32,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": -15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 181,
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
            "country": "FM",
            "name": "Micronesia",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
            "movement": 10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SG",
            "name": "Singapore",
            "position": 53,
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": 14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": -26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
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
            "position": 197,
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 193,
            "movement": -53
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
            "position": 51,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": -54
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": -52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 182,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
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
            "position": 25,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 45
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 58,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 195,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
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
            "position": 100,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 94,
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 38
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f338a3ba12d7e5241e1fa13ec3a4ceb1/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 61
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
            "country": "DM",
            "name": "Dominica",
            "position": 138,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 149,
            "movement": -48
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
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
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c51686553cfcb775a4abbe6ab4518bfc/500x500-000000-80-0-0.jpg"
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
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aye Kan",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b1a13631d26a3e81a34f4abdd139a28/500x500-000000-80-0-0.jpg"
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
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
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
            "position": 183,
            "movement": -7
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
  