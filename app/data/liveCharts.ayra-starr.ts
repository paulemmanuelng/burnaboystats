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
  export const liveChartsBuiltAt = "2026-10-04T21:31Z";
  
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
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": 16
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
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 8,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 11,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 33,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 36,
            "movement": -5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 40,
            "movement": -22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 42,
            "movement": 2
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 45,
            "movement": -14
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 45,
            "movement": -16
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 51,
            "movement": -45
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 52,
            "movement": -8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 54,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 55,
            "movement": 27
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 58,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 58,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 60,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 62,
            "movement": 85
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 67,
            "movement": -21
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 68,
            "movement": -5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 75,
            "movement": -2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 80,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 100,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 122,
            "movement": -56
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 123,
            "movement": -34
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 125,
            "movement": -79
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 140,
            "movement": -37
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 148,
            "movement": -59
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 152,
            "movement": -55
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
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
            "position": 10,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 84
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 36,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
            "movement": -34
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
            "position": 72,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 200,
            "movement": -55
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
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 70
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 7,
            "movement": 32
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 13
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 11,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 11,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 15,
            "movement": 90
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 18,
            "movement": 35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": -3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 20,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 26,
            "movement": -5
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 29,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 37,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 37,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 43,
            "movement": 69
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 44,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 45,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 59,
            "movement": -27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": -6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 66,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 71,
            "movement": -12
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 86,
            "movement": -54
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 89,
            "movement": -33
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 91,
            "movement": 16
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 97,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 104,
            "movement": -19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 116,
            "movement": 33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": -7
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 126,
            "movement": -59
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 164,
            "movement": -67
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 164,
            "movement": -5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 167,
            "movement": -76
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 196,
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
            "position": 12,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 21,
            "movement": 75
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
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
            "position": 38,
            "movement": 4
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 31
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 142,
            "movement": -40
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
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
            "position": 96,
            "movement": 20
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
            "position": 15,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 54,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
            "movement": 7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 173,
            "movement": -74
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 173,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
            "movement": -35
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
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": 33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 108,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": 40
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 139,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
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
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 125,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -9
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
            "position": 86,
            "movement": 14
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 127,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -37
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 145,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": 5
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 155,
            "movement": -88
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -30
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
            "position": 11,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 89,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 6
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
            "position": 18,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 20,
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -40
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 149,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 169,
            "movement": 29
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
            "country": "TD",
            "name": "Chad",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 36
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 185,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 79,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 196,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 95,
            "movement": 41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -51
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
            "position": 8,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 163,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 44,
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
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 92,
            "movement": -34
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
            "position": 19,
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
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 178,
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
            "country": "DZ",
            "name": "Algeria",
            "position": 132,
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
    "title": "Lagos Love Story",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 54,
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
            "position": 110,
            "movement": -82
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 176,
            "movement": -7
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -92
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 154,
            "movement": -117
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
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
  