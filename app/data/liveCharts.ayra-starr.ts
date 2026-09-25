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
  export const liveChartsUpdated = "2026-09-25";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-25T17:49Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "country": "DM",
            "name": "Dominica",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 3,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": -6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 17,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": -13
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 19,
            "movement": 36
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 21,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 21,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 25,
            "movement": 33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 26,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 27,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 29,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": 11
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 54,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
            "movement": -29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 71,
            "movement": -21
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 72,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 87,
            "movement": -12
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 102,
            "movement": -12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 161,
            "movement": -24
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 166,
            "movement": -23
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 172,
            "movement": null,
            "status": "new"
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 8,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 22,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 75,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 198,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 63
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 17,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 19,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 29,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -15
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
            "position": 6,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 28,
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
            "position": 38,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
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
            "position": 52,
            "movement": -3
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 5,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 16,
            "movement": -9
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 21,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 23,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 28,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 29,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 32,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 37,
            "movement": 27
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": 34
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 43,
            "movement": -32
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 46,
            "movement": -22
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 50,
            "movement": -27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": -7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 60,
            "movement": -9
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 62,
            "movement": -24
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 62,
            "movement": -22
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 64,
            "movement": 49
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 66,
            "movement": 19
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 82,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 86,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 86,
            "movement": 97
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 94,
            "movement": 6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 95,
            "movement": 75
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 101,
            "movement": -33
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 106,
            "movement": -12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 113,
            "movement": 39
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 116,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": -86
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -59
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 144,
            "movement": -75
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 167,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 190,
            "movement": -55
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
            "position": 8,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 192,
            "movement": -23
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rush",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 46,
            "movement": 6
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 104,
            "movement": -73
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 180,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -15
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 62,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 160,
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
            "country": "ZM",
            "name": "Zambia",
            "position": 196,
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 53,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 74,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 164,
            "movement": -2
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
            "position": 75,
            "movement": -2
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
            "position": 46,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 6,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": 46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 35,
            "movement": -1
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
            "position": 110,
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
            "position": 134,
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
            "position": 21,
            "movement": 4
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": -17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 156,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
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
            "position": 66,
            "movement": -1
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
            "position": 56,
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
            "position": 56,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": 42
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": 17
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 84,
            "movement": 23
          },
          {
            "country": "FR",
            "name": "France",
            "position": 128,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 135,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 191,
            "movement": -41
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
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": 37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": -72
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
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
            "position": 173,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 82,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -12
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -26
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
            "position": 56,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": -3
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 51,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 173,
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
            "movement": 11
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": 34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 110,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": -74
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": 7
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
            "country": "IT",
            "name": "Italy",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 35,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 41,
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
            "position": 31,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 55,
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
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 33
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 103,
            "movement": 53
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 3
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
            "position": 54,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 94,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": -34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": -87
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 35,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": 14
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 38,
            "movement": 62
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 120,
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
            "position": 122,
            "movement": -108
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": 39
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
            "position": 92,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "GM",
            "name": "Gambia",
            "position": 139,
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
            "position": 43,
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
            "position": 133,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
            "movement": -107
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 156,
            "movement": -45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
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
            "position": 87,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Won Da Mo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee5b8bb977ed14449b1a4cdde235ba53/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": -2
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
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
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 41,
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
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 137,
            "movement": -120
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
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
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -126
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
  