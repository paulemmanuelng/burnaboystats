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
  export const liveChartsUpdated = "2026-10-04";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-04T12:26Z";
  
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 11,
            "movement": -6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 12,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 40
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 16,
            "movement": -5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 18,
            "movement": -8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 18,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 21,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 29,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": 3
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 31,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 44,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 44,
            "movement": -15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 46,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 46,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 55,
            "movement": 9
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 56,
            "movement": -36
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 61,
            "movement": -11
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 61,
            "movement": -19
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 63,
            "movement": -19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 66,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 66,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 73,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 82,
            "movement": 18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 89,
            "movement": 2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 89,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 6
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 97,
            "movement": -55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 103,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 136,
            "movement": -38
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 147,
            "movement": -74
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
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 18,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 19,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 21,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 91,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 104,
            "movement": -16
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
            "position": 3,
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
            "position": 8,
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
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 36,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": -127
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -29
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
            "position": 76,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
            "movement": -47
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
            "position": 9,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 63,
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
            "position": 5,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 6,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 13,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 16,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 21,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 32,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 32,
            "movement": 9
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 32,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 34,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 36,
            "movement": 21
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 37,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 39,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 40,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": -8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 53,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 19
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 56,
            "movement": 33
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 57,
            "movement": -12
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 59,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 65,
            "movement": 47
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": 21
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 67,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 85,
            "movement": 31
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 91,
            "movement": -16
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": -26
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 105,
            "movement": 4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 107,
            "movement": -32
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 112,
            "movement": -47
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 116,
            "movement": -4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 121,
            "movement": -88
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 122,
            "movement": 22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 141,
            "movement": 30
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 149,
            "movement": 7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 156,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 159,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 161,
            "movement": 37
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 196,
            "movement": null,
            "status": "new"
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 199,
            "movement": -23
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
            "position": 42,
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
            "position": 163,
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 99,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 164,
            "movement": -57
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
            "position": 15,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 53,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 1
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
            "position": 105,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 110,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": -47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
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
            "position": 100,
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 102,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -37
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
            "position": 87,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 8
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
            "position": 116,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 67,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": 33
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 189,
            "movement": -38
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 192,
            "movement": -14
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
            "country": "FM",
            "name": "Micronesia",
            "position": 6,
            "movement": 68
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 100,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 195,
            "movement": -12
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 123,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 158,
            "movement": -34
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 161,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": -19
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
            "position": 53,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": 56
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 129,
            "movement": 44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -46
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "FM",
            "name": "Micronesia",
            "position": 58,
            "movement": -14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 113,
            "movement": 54
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": 49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 86,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 126,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 61,
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
            "position": 30,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
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
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": -22
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
            "position": 46,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -124
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
            "movement": -28
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
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 65,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 171,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 28,
            "movement": 136
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
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
            "position": 38,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -1
          },
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": 41
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 138,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
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
    "title": "Lagos Love Story",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 39,
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
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 58,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 59,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bae1d173c270367dfe0b472d30c7305f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 117,
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
            "position": 94,
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
    "title": "Sability",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
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
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
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
    "title": "Midnight in New York",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
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
            "country": "TN",
            "name": "Tunisia",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
  