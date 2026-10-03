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
  export const liveChartsUpdated = "2026-10-03";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-03T05:22Z";
  
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
            "movement": 2
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
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 10,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 17,
            "movement": -3
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 20,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 28,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 29,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 29,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": -19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 35,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 35,
            "movement": -13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 42,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 42,
            "movement": 57
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 44,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 45,
            "movement": 7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 48,
            "movement": -46
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 50,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -34
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 62,
            "movement": 20
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 64,
            "movement": -27
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 67,
            "movement": -19
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 73,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 86,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": 10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 94,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 97,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
            "movement": -20
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 100,
            "movement": -32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": -23
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 191,
            "movement": -32
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 18,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 20,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 70,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 93,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 111,
            "movement": 22
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
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -10
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": 3
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
            "position": 6,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 29,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -10
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
            "position": 63,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 1,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
            "movement": 31
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
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 10,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 11,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 25,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 26,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 30,
            "movement": 96
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 33,
            "movement": 21
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 33,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": -5
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 38,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 40,
            "movement": -9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 41,
            "movement": -10
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 44,
            "movement": -16
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 45,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": -16
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 48,
            "movement": -25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": -16
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 53,
            "movement": -7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 65,
            "movement": -12
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 75,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": -19
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 75,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 89,
            "movement": 14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 109,
            "movement": -58
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 112,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": -56
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 116,
            "movement": 39
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 144,
            "movement": -54
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 150,
            "movement": -31
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 156,
            "movement": -3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 162,
            "movement": 13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 171,
            "movement": -71
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 174,
            "movement": -33
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 186,
            "movement": -123
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 194,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 19,
            "movement": 59
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 58,
            "movement": 10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -17
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": -22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
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
            "movement": 5
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
            "position": 51,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 74,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -3
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
            "position": 107,
            "movement": -21
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 117,
            "movement": 27
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 186,
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
            "country": "HU",
            "name": "Hungary",
            "position": 111,
            "movement": 25
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
            "position": 43,
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
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
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
            "position": 40,
            "movement": -8
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
            "position": 199,
            "movement": -11
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
            "position": 153,
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
            "position": 25,
            "movement": 71
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
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg"
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
            "position": 55,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 114,
            "movement": -6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 165,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": -12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 173,
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
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
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
            "position": 179,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 5
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
            "position": 83,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
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
            "position": 87,
            "movement": -8
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
            "position": 82,
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
    "title": "The Year I Turned 21",
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
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 74,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 81,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": 3
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": 74
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -1
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
            "position": 79,
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
            "position": 63,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SN",
            "name": "Senegal",
            "position": 62,
            "movement": 11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 124,
            "movement": -34
          },
          {
            "country": "FR",
            "name": "France",
            "position": 130,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 135,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 159,
            "movement": -22
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
            "position": 46,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -38
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 167,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 11,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 23,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 57,
            "movement": -5
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
            "position": 33,
            "movement": 18
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 79,
            "movement": -23
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
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 85
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 134,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -29
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 169,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
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
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 34,
            "movement": -10
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
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": -29
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
            "position": 77,
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
            "position": 7,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": 48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
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
            "position": 5,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 129,
            "movement": 63
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 141,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 164,
            "movement": -157
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 166,
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
    "title": "Ayra Starr - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 63,
            "movement": 38
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 95,
            "movement": 39
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 46
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 63,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": -8
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 38,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 69,
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
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 156,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 185,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
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
  