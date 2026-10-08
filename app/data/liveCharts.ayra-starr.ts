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
  export const liveChartsUpdated = "2026-10-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-08T06:10Z";
  
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
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 10,
            "movement": 156
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 10,
            "movement": 28
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 12,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 16,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 18,
            "movement": 4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 20,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 22,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 23,
            "movement": 7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 26,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 27,
            "movement": 9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 28,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 32,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": -17
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 33,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 36,
            "movement": 33
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 42,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 58,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 64,
            "movement": 21
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 66,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": 6
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 68,
            "movement": 103
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 80,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": -80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": 23
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 155,
            "movement": -17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 160,
            "movement": -89
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 183,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 200,
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
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 17,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 21,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 76,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 89,
            "movement": 25
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 10,
            "movement": 56
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 18,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -144
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
            "position": 51,
            "movement": 60
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
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
            "position": 18,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 27,
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
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 2,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 6,
            "movement": 2
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 12,
            "movement": 5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 15,
            "movement": 14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 15,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 18,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 67
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": 40
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 27,
            "movement": 10
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 28,
            "movement": 33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": -17
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": 31
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 30,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 32,
            "movement": 16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 35,
            "movement": 33
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 35,
            "movement": -10
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 37,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 46,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 48,
            "movement": 85
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 48,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": -8
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 50,
            "movement": 2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 51,
            "movement": 17
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 55,
            "movement": -43
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 62,
            "movement": -15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": -37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 75,
            "movement": -39
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 83,
            "movement": -5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 85,
            "movement": 69
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 88,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 113,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 115,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": 7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 126,
            "movement": 14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 149,
            "movement": -25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 168,
            "movement": 11
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
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": -43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 137,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": 17
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
            "movement": 5
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
            "position": 27,
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
            "position": 174,
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
            "position": 53,
            "movement": -4
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
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 29,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 69,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": 20
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 169,
            "movement": -101
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 199,
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
            "position": 76,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 4
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
            "position": 96,
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
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 56,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -3
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
            "position": 111,
            "movement": -38
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 115,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": -22
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 196,
            "movement": -36
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 69,
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
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 105,
            "movement": -41
          },
          {
            "country": "FR",
            "name": "France",
            "position": 114,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 138,
            "movement": 18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 149,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 91,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": -80
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
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
            "position": 99,
            "movement": -5
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 174,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": 1
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
            "position": 35,
            "movement": 165
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": 83
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 43,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 96,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 103,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": -21
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": 46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 59,
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
            "position": 40,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 70,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
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
            "position": 86,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
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
            "position": 49,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 145,
            "movement": -52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -48
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 150,
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
            "position": 39,
            "movement": -19
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 75,
            "movement": -48
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": 8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 165,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": 14
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
            "position": 77,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 126,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 106,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 6,
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
            "position": 45,
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
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 98,
            "movement": 6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 134,
            "movement": -80
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 129,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": 14
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
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 42,
            "movement": 146
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
            "position": 74,
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 157,
            "movement": -88
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bae1d173c270367dfe0b472d30c7305f/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
  