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
  export const liveChartsUpdated = "2026-11-09";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-09T06:39Z";
  
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 7,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 9,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 13,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 19,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 23,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 26,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 29,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 29,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 29,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 31,
            "movement": -23
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 35,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 35,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 39,
            "movement": -11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 44,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 17
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 48,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": -10
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 62,
            "movement": 9
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 76,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 96,
            "movement": 49
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 107,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": -56
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": 3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 184,
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
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 38,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 58,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 59,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 84,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 138,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -2
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
            "movement": -1
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
            "position": 13,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": -22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 62,
            "movement": 67
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
            "position": 93,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": -24
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
            "position": 4,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 12,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 18,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": 64
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 22,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 22,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 24,
            "movement": 16
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 27,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 30,
            "movement": 28
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 32,
            "movement": 22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 40,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 49
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 42,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 42,
            "movement": 14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": -31
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 46,
            "movement": 7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 53,
            "movement": 23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 62,
            "movement": -29
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 64,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": 4
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 69,
            "movement": -35
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 70,
            "movement": -18
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 72,
            "movement": -20
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 76,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": -16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 108,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 119,
            "movement": -35
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 119,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": -15
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 126,
            "movement": -44
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 136,
            "movement": 6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 173,
            "movement": -15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 199,
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
            "position": 34,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 64,
            "movement": null,
            "status": "new"
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
            "position": 7,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
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
            "position": 17,
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
            "position": 52,
            "movement": 47
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": -45
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 107,
            "movement": -48
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -4
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
            "position": 160,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
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
            "position": 126,
            "movement": -7
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
            "position": 95,
            "movement": -64
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 3,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 15,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 19,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 21,
            "movement": 2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 55,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -5
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
            "position": 29,
            "movement": -20
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 73,
            "movement": 35
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 110,
            "movement": 38
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 116,
            "movement": -58
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 126,
            "movement": -53
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 198,
            "movement": -27
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
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
            "position": 41,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": -21
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": 28
          },
          {
            "country": "FR",
            "name": "France",
            "position": 81,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 88,
            "movement": 82
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 125,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": -17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 154,
            "movement": 25
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 178,
            "movement": -8
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
            "position": 48,
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
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": -11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
            "movement": 74
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 117,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 177,
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
            "position": 19,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 64,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 91,
            "movement": -33
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": 45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
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
            "position": 111,
            "movement": 4
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
            "position": 144,
            "movement": -15
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 9,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 62,
            "movement": 99
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 77,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": 26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 141,
            "movement": -42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -33
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 172,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
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
            "position": 29,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 129,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": -6
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 179,
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
            "position": 84,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": 22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": 11
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
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": 60
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -9
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
            "country": "SC",
            "name": "Seychelles",
            "position": 101,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 164,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": -3
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 166,
            "movement": -39
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 176,
            "movement": -51
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
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": -14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": 1
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
            "position": 63,
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
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 25,
            "movement": -1
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
            "position": 48,
            "movement": null,
            "status": "new"
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
            "position": 15,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 68,
            "movement": -34
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 105,
            "movement": -63
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
            "position": 121,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": 36
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
            "position": 16,
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 146,
            "movement": -137
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
            "position": 71,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 155,
            "movement": -12
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
            "country": "HN",
            "name": "Honduras",
            "position": 98,
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
    "title": "Karma",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 6,
            "movement": 60
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Toxic",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ms. Paper",
    "platforms": [
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
    "title": "Sability",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 36,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-02",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f338a3ba12d7e5241e1fa13ec3a4ceb1/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": 99
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In Between",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 159,
            "movement": -148
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
  