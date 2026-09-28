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
  export const liveChartsUpdated = "2026-09-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-28T23:19Z";
  
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": 6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 7,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 7,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 10,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 20,
            "movement": 14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 21,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 21,
            "movement": -19
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 22,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 27,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 32,
            "movement": 19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 41,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 43,
            "movement": 12
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 45,
            "movement": 65
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 48,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": 13
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 54,
            "movement": 30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 59,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 67,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 79,
            "movement": 8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 87,
            "movement": 33
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 88,
            "movement": -49
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 100,
            "movement": -39
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 114,
            "movement": 40
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 115,
            "movement": 54
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 154,
            "movement": 12
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": -1
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
            "position": 13,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 20,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 66,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 137,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 141,
            "movement": 24
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
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 14,
            "movement": -11
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 23,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -25
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 28,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 45,
            "movement": -4
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
            "country": "NA",
            "name": "Namibia",
            "position": 16,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -10
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 164,
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
            "position": 17,
            "movement": -2
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": 7
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 11,
            "movement": 18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 12,
            "movement": -8
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 12,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 13,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 20,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 41
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 23,
            "movement": 59
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 26,
            "movement": 31
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 37,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 46,
            "movement": -10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 47,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 52,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 54,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 56,
            "movement": -16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": 67
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 73,
            "movement": 79
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 78,
            "movement": -9
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 86,
            "movement": -52
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 88,
            "movement": -23
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 90,
            "movement": 67
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 96,
            "movement": -44
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 96,
            "movement": 20
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 108,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": 16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 111,
            "movement": 82
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 131,
            "movement": 17
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 147,
            "movement": -104
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 178,
            "movement": -40
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 182,
            "movement": -81
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
            "position": 15,
            "movement": -3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 17,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 76,
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
      }
    ],
    "kind": "album",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 106,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": 20
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 176,
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
            "position": 81,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 191,
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
            "position": 82,
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
            "position": 66,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": -82
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
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
            "position": 33,
            "movement": 0
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
            "position": 78,
            "movement": -27
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
            "position": 143,
            "movement": -2
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
            "movement": 49
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 34,
            "movement": -14
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 61,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": -2
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
            "position": 61,
            "movement": 15
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 159,
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 191,
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
            "country": "VE",
            "name": "Venezuela",
            "position": 81,
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
            "position": 18,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 124,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -38
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 98,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 67,
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 162,
            "movement": 36
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
            "position": 198,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "DZ",
            "name": "Algeria",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 12
          },
          {
            "country": "FR",
            "name": "France",
            "position": 121,
            "movement": 9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 139,
            "movement": -40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 158,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": -91
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 37,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": -25
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 85,
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
            "position": 12,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 31,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 39,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 199,
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
            "country": "AM",
            "name": "Armenia",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 13,
            "movement": 33
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 36,
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
            "position": 20,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 33
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -9
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
            "position": 125,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": -52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 3
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 101,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": -36
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": 19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 190,
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
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": -7
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 148,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": -40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": 37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": -69
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 93,
            "movement": -36
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
            "country": "FM",
            "name": "Micronesia",
            "position": 36,
            "movement": -20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 138,
            "movement": 57
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 127,
            "movement": 27
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": 73
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 15
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": -23
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
            "position": 34,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 114,
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
    "title": "Overloading",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 66,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee5b8bb977ed14449b1a4cdde235ba53/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 182,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
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
            "position": 189,
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
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 127,
            "movement": -98
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
  