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
  export const liveChartsBuiltAt = "2026-09-28T05:28Z";
  
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 2,
            "movement": -1
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 5,
            "movement": 11
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": 2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 16,
            "movement": 17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 29,
            "movement": 18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": 2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 34,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 36,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 39,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 40,
            "movement": -6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 45,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 51,
            "movement": 30
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 53,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 55,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 61,
            "movement": 117
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 67,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": 60
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 84,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 110,
            "movement": -66
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 120,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 154,
            "movement": 14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
            "movement": 16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 198,
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 19,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 65,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 138,
            "movement": 23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 165,
            "movement": 28
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 58
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 23,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 142
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 26,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": -25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 42,
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
            "position": 11,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -14
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
            "country": "JM",
            "name": "Jamaica",
            "position": 10,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
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
            "position": 50,
            "movement": 5
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 1,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 2
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
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": 49
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 13,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 14,
            "movement": -4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 16,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": 11
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 29,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 34,
            "movement": 131
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 36,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": 19
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 45,
            "movement": -25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 47,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 47,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 48,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 52,
            "movement": 7
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 53,
            "movement": 6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 57,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": -34
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 65,
            "movement": -30
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": -20
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 82,
            "movement": -6
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 101,
            "movement": -20
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 116,
            "movement": -16
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 120,
            "movement": -61
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 138,
            "movement": -21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": -36
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 148,
            "movement": 16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 152,
            "movement": -54
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 157,
            "movement": -75
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 170,
            "movement": -36
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 193,
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
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": -3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -11
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 25,
            "movement": 78
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -33
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 113,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": -33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 156,
            "movement": 41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "position": 75,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 192,
            "movement": -12
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
            "position": 77,
            "movement": 1
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
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
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": -142
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
            "movement": 1
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
            "position": 141,
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
            "position": 74,
            "movement": null,
            "status": "new"
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
            "position": 43,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 102,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": -17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 198,
            "movement": -57
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
            "position": 152,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 20,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 61,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
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
            "country": "FJ",
            "name": "Fiji",
            "position": 76,
            "movement": -14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 192,
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
            "position": 68,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 38
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 99,
            "movement": 41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 128,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 129,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 151,
            "movement": -4
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": -17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 169,
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
            "position": 45,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
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
            "position": 65,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 52,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": 34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
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
            "position": 9,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 29,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 38,
            "movement": 4
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
            "position": 43,
            "movement": -18
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 174,
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": -30
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -39
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
            "position": 104,
            "movement": -11
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
            "position": 68,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
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
            "position": 51,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 99,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": -57
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 95,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -13
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 195,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": -19
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
            "position": 42,
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 21,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 198,
            "movement": -167
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 109,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": 47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -31
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
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
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
            "movement": 8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 57,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 109,
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": -77
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
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
            "position": 154,
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
    "title": "Won Da Mo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee5b8bb977ed14449b1a4cdde235ba53/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 135
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 179,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 195,
            "movement": null,
            "status": "new"
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
  