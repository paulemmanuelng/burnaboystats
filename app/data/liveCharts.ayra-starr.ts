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
  export const liveChartsUpdated = "2026-11-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-10T19:47Z";
  
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 5,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 8,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 8,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 8,
            "movement": 15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 10,
            "movement": 2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 12,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 16,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 20,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 22,
            "movement": 2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 27,
            "movement": 12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 32,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 35,
            "movement": -6
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 36,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 39,
            "movement": -12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 39,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 52,
            "movement": -35
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 53,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 57,
            "movement": 89
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 43
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 65,
            "movement": 42
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 76,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 77,
            "movement": -18
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 81,
            "movement": -33
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 101,
            "movement": -15
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": -77
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
            "movement": -22
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 194,
            "movement": -25
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 15,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
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
            "position": 55,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 82,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 141,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -5
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "re"
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
            "position": 17,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 34,
            "movement": -4
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
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 5,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 27,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 28,
            "movement": -26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 50,
            "movement": -15
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
            "position": 55,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": -4
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
            "position": 93,
            "movement": -27
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
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 11,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 15,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 17,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 53
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 34,
            "movement": 52
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 38,
            "movement": 53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 42,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 43,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 43,
            "movement": 12
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 50,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 52,
            "movement": -20
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 53,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 54,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 58,
            "movement": 45
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 61,
            "movement": 14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 68,
            "movement": 41
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 73,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 76,
            "movement": -33
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 83,
            "movement": -26
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 87,
            "movement": -22
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 95,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 114,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": -43
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 123,
            "movement": -66
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 126,
            "movement": 49
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 139,
            "movement": -51
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 147,
            "movement": -16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 160,
            "movement": 8
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 169,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 44,
            "movement": -10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 185,
            "movement": -86
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 6,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 21,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 22,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": 10
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 55,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 48,
            "movement": -16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 80,
            "movement": 46
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 199,
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
            "position": 47,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 96,
            "movement": null,
            "status": "re"
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
            "position": 86,
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 107,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": -14
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
            "position": 161,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
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
            "position": 136,
            "movement": 32
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
            "position": 130,
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
            "position": 5,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 28
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -18
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
            "position": 21,
            "movement": -4
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
            "position": 33,
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
            "position": 34,
            "movement": -7
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 9,
            "movement": 106
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": 97
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 64,
            "movement": -10
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": -14
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 158,
            "movement": -45
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -17
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": -42
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": -44
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
            "movement": 0
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
            "position": 77,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 52,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 62,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": -15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 105,
            "movement": -84
          },
          {
            "country": "FR",
            "name": "France",
            "position": 106,
            "movement": -30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 140,
            "movement": -54
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 141,
            "movement": -14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 197,
            "movement": -58
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
            "position": 49,
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 61,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": 69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 156,
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
            "position": 113,
            "movement": 1
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
            "position": 157,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": -106
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": -12
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 34,
            "movement": -17
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 106,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": -34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 141,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": -37
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -77
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -14
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
            "position": 72,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 64
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -20
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
            "position": 88,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 158,
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
            "country": "TN",
            "name": "Tunisia",
            "position": 95,
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
            "position": 25,
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
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": 63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -80
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
            "position": 110,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 7
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 25,
            "movement": 80
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 49,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 29,
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
            "position": 85,
            "movement": -45
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": -4
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
            "position": 38,
            "movement": 4
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
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": 116
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IE",
            "name": "Ireland",
            "position": 147,
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 121,
            "movement": -118
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 8
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
            "position": 37,
            "movement": 0
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
            "position": 68,
            "movement": 7
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
            "position": 51,
            "movement": 132
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 123,
            "movement": -117
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
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
    "title": "Running",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 135,
            "movement": null,
            "status": "new"
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
            "position": 159,
            "movement": 2
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
            "position": 145,
            "movement": 55
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayra Starr - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 127,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
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
  