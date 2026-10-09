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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-09";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-09T13:23Z";
  
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
            "country": "SR",
            "name": "Suriname",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "country": "DM",
            "name": "Dominica",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 6,
            "movement": 5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 7,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 10,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 11,
            "movement": 11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 13,
            "movement": 19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 14,
            "movement": 52
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 14,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 15,
            "movement": 13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 18,
            "movement": 8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 18,
            "movement": 18
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 19,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 21,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 25,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 26,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": -16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 41,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": 23
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 56,
            "movement": 12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 66,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 89,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 101,
            "movement": 99
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 137,
            "movement": -61
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -3
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 159,
            "movement": 24
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 193,
            "movement": -38
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 15,
            "movement": 6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 20,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 57,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 71,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 146,
            "movement": 43
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 181,
            "movement": 6
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
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 21,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 23,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 23,
            "movement": -4
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
            "position": 41,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -2
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
            "position": 15,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "FJ",
            "name": "Fiji",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 6,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 12,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 13,
            "movement": 136
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 17,
            "movement": 20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 17,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 19,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 20,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 25,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 26,
            "movement": 4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 29,
            "movement": 21
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 29,
            "movement": 19
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 29,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 31,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 33,
            "movement": 42
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 34,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": -14
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 35,
            "movement": -5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 36,
            "movement": 10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 36,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 37,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 46,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": 72
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 56,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 57,
            "movement": -32
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -17
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 70,
            "movement": -19
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 73,
            "movement": 53
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 81,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 90,
            "movement": -28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 99,
            "movement": 14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 105,
            "movement": 10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 108,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 117,
            "movement": -29
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 119,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": 46
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 146,
            "movement": -15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 178,
            "movement": -92
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 197,
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 154,
            "movement": 38
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 6,
            "movement": 25
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": 68
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
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
            "position": 30,
            "movement": 3
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
            "position": 52,
            "movement": 10
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
            "position": 172,
            "movement": 8
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
            "position": 31,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 41
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 78,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": 72
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": 59
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
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
            "position": 89,
            "movement": 10
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
            "position": 69,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 50,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 57,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -1
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
            "position": 42,
            "movement": 69
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 157,
            "movement": -42
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": -2
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
            "position": 75,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 9
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
            "position": 100,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": 67
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 118,
            "movement": 20
          },
          {
            "country": "FR",
            "name": "France",
            "position": 120,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 131,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 152,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": -38
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
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
            "position": 59,
            "movement": -16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 69,
            "movement": -65
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
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
            "position": 63,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 91
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": 100
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 147,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": 34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
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
            "position": 65,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "FM",
            "name": "Micronesia",
            "position": 62,
            "movement": -15
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": -43
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 187,
            "movement": -42
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
            "position": 135,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 116,
            "movement": -45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": 49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": -34
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 31,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 57,
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
            "position": 41,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 112,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 46,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
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
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 76
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 117,
            "movement": -34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -32
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 112,
            "movement": -14
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
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 110,
            "movement": 44
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 151,
            "movement": -45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 120,
            "movement": -20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 196,
            "movement": -31
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MON BÉBÉ",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 65,
            "movement": 92
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bae1d173c270367dfe0b472d30c7305f/500x500-000000-80-0-0.jpg"
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sability",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime - Re-Up",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 115,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos Love Story",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 199,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayra Starr - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
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
  