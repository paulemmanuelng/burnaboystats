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
  export const liveChartsUpdated = "2026-11-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-08T06:07Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 4,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 5,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 7,
            "movement": 3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 8,
            "movement": 11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": 13
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 15,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": 25
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 20,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 23,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 25,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 27,
            "movement": 3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 28,
            "movement": -17
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 30,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 33,
            "movement": -8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 34,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": -40
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 53,
            "movement": 19
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 61,
            "movement": -35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": 26
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 71,
            "movement": -21
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 72,
            "movement": -33
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 89,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 92,
            "movement": -13
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 98,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 145,
            "movement": -108
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": -51
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 195,
            "movement": -77
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
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": -9
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 83,
            "movement": -25
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 91,
            "movement": -21
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
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 36,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
            "movement": -12
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 59,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 79,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 137,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
            "movement": -44
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
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 26,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 74,
            "movement": -49
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
            "position": 77,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -4
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 10,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": -7
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 30,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 33,
            "movement": 17
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 37,
            "movement": 96
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 39,
            "movement": -30
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 40,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": -34
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 41,
            "movement": -24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 42,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 23
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 52,
            "movement": -39
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 52,
            "movement": 38
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 53,
            "movement": 8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 54,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 56,
            "movement": 96
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 56,
            "movement": 15
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 57,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 63,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": 5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 76,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": -8
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 82,
            "movement": -39
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 84,
            "movement": -32
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 84,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": 54
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 112,
            "movement": 18
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 142,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 158,
            "movement": -13
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 177,
            "movement": -60
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": -27
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 30,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 59,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
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
            "position": 174,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
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
            "position": 119,
            "movement": 34
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
            "position": 31,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 19
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
            "position": 22,
            "movement": -3
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
            "movement": -59
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
            "position": 27,
            "movement": -6
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 9,
            "movement": 94
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 58,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 73,
            "movement": 58
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 196,
            "movement": -14
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 12,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 14,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 23,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 53,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -24
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 52
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -99
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": -14
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
            "position": 115,
            "movement": -7
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
            "position": 130,
            "movement": -14
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
            "position": 38,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 87,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 122,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 170,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 170,
            "movement": -151
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 179,
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
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
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
            "position": 31,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": 55
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": 77
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 190,
            "movement": -111
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
            "position": 18,
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 73,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": -22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 169,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": -3
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
            "position": 127,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 108,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 186,
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
            "position": 69,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 77,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -12
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 125,
            "movement": -21
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 156,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 62
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": -44
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 86,
            "movement": -30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 127,
            "movement": -21
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
            "position": 61,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 34,
            "movement": -7
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 42,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 9,
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
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 24,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": 12
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All the People",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 76,
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
            "country": "PL",
            "name": "Poland",
            "position": 65,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dda3f7dc6c530814d51c9cb6eca57be/500x500-000000-80-0-0.jpg"
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
            "position": 143,
            "movement": 19
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
            "position": 42,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
            "movement": -58
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
            "position": 64,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "country": "PE",
            "name": "Peru",
            "position": 53,
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
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 11,
            "movement": 78
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Karma",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 66,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bridgertn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sability",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 46,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-02",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
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
            "position": 106,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": -75
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 168,
            "movement": -61
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Running",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 183,
            "movement": -155
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
  