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
  export const liveChartsUpdated = "2026-10-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-10T21:49Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 2,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 7,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 8,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": 56
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 9,
            "movement": -3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 14,
            "movement": 3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 16,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 17,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": -9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 20,
            "movement": -2
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 20,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 23,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 26,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 29,
            "movement": -3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 30,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 30,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 37,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 41,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": -39
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 55,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 38
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 56,
            "movement": -16
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 59,
            "movement": 18
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 64,
            "movement": -38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 81,
            "movement": 47
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 111,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 113,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 124,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": -36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 167,
            "movement": -11
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 171,
            "movement": -124
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
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 12,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 19,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 53,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 57,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 128,
            "movement": 18
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 172,
            "movement": 9
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 8,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -19
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 33,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -56
          },
          {
            "country": "FR",
            "name": "France",
            "position": 97,
            "movement": 86
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 112,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JP",
            "name": "Japan",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 35,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 41,
            "movement": 7
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
            "position": 49,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 4
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 5,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 11,
            "movement": 10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 11,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 37
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 15,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 16,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 17,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 17,
            "movement": 7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 22,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 23,
            "movement": 2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 24,
            "movement": 10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 24,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 32,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": -12
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 39,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 40,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": 16
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 56,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": -7
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 63,
            "movement": -25
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 69,
            "movement": -38
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": 10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 88,
            "movement": 23
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 103,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 105,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 109,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 111,
            "movement": -61
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 113,
            "movement": -9
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 119,
            "movement": 60
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 119,
            "movement": -56
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 123,
            "movement": -44
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 135,
            "movement": -19
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 153,
            "movement": -76
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 160,
            "movement": -17
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 170,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 200,
            "movement": -4
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
            "position": 12,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 120,
            "movement": 34
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
            "position": 2,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 87
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 92,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 57
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
            "movement": 18
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
            "position": 154,
            "movement": 18
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
            "position": 25,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": -14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 125,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": 29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
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
            "position": 76,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -11
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
            "position": 82,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 102,
            "movement": -40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": -20
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "position": 81,
            "movement": 1
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
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": 52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": 16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 158,
            "movement": -22
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 193,
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
            "position": 193,
            "movement": 6
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
            "position": 74,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -21
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": 33
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 106,
            "movement": 21
          },
          {
            "country": "FR",
            "name": "France",
            "position": 136,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": -42
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 168,
            "movement": -56
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 175,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -12
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
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 48,
            "movement": 9
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 50,
            "movement": 0
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
            "position": 74,
            "movement": 8
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
            "position": 56,
            "movement": -11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 184,
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 89,
            "movement": -18
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 103,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 28
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 177,
            "movement": -99
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 72,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 93,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "position": 145,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 55,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 82,
            "movement": -75
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 90,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
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
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 195,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 19,
            "movement": 117
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 154,
            "movement": 13
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
            "position": 20,
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
            "position": 118,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": 35
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
            "position": 38,
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
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": -18
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 164,
            "movement": -52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 175,
            "movement": -71
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": 80
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 86,
            "movement": 30
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 152,
            "movement": -41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Santa",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PA",
            "name": "Panama",
            "position": 189,
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": 44
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 84,
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
    "title": "All The Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 46
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Great One",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 179,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 186,
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
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/227c27e8b3db2fc1be8808745b5c9fc1/500x500-000000-80-0-0.jpg"
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
  