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
  export const liveChartsUpdated = "2026-10-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-01T06:00Z";
  
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 33
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 2,
            "movement": 28
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 7,
            "movement": 21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": 142
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 10,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 15,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 16,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 20,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 25,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 27,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 28,
            "movement": 69
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 31,
            "movement": -15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 40,
            "movement": 1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 41,
            "movement": -3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 45,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 49,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 51,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 52,
            "movement": -14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 57,
            "movement": 46
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 79,
            "movement": 53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 86,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 31
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 111,
            "movement": -33
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 122,
            "movement": 17
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 125,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": 13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 162,
            "movement": -83
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 190,
            "movement": -31
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 192,
            "movement": -29
          },
          {
            "country": "BZ",
            "name": "Belize",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 67,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 111,
            "movement": 14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 123,
            "movement": -9
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 111
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 29,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -45
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": 16
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
            "position": 99,
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
            "position": 4,
            "movement": 4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 5,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 6,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 10,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 10,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 16,
            "movement": -5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 16,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 22,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 27,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 30
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 32,
            "movement": -19
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 32,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 36,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 38,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 43,
            "movement": -28
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 44,
            "movement": 19
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 50,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 56,
            "movement": -28
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 60,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 63,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 65,
            "movement": -37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": -66
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": 44
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 84,
            "movement": -31
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 102,
            "movement": -50
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 107,
            "movement": -15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 112,
            "movement": 84
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 123,
            "movement": -17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 129,
            "movement": -77
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 129,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 130,
            "movement": -12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 142,
            "movement": 14
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 147,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 154,
            "movement": -65
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 190,
            "movement": -78
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "position": 103,
            "movement": -79
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
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 15
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 55,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 102,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 10
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
            "movement": 11
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 55,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 169,
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
            "position": 57,
            "movement": -25
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 189,
            "movement": -75
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
            "movement": -6
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
            "position": 194,
            "movement": 1
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
            "country": "AI",
            "name": "Anguilla",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 59,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 48
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": -30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 127,
            "movement": -25
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 141,
            "movement": -52
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 179,
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
    "title": "treat u right",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": -44
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
            "position": 28,
            "movement": 2
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
            "position": 156,
            "movement": -43
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
            "position": 150,
            "movement": -7
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
            "position": 85,
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
            "movement": -10
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 32
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 86,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
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
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 101,
            "movement": 48
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 116,
            "movement": 7
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
            "position": 70,
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
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 99,
            "movement": -30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -45
          },
          {
            "country": "FR",
            "name": "France",
            "position": 123,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 34
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 144,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": 33
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 44,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 194,
            "movement": 1
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
            "movement": 20
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 37,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 87,
            "movement": -42
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 69,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 66
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 113,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -68
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": 48
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 172,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 87,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 126,
            "movement": 43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 177,
            "movement": 11
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
            "position": 99,
            "movement": -59
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 121,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 157,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
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
            "position": 60,
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
            "position": 95,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 4
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
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -59
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
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": 66
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": -24
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
            "position": 173,
            "movement": -149
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
            "position": 7,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 132,
            "movement": -86
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": -28
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
            "position": 73,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 185,
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
            "position": 32,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
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
            "position": 14,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": -33
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
            "position": 41,
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
            "position": 129,
            "movement": -45
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
    "title": "Bloody Samaritan",
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 3
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
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 142,
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
    "title": "Ayra Starr - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 140,
            "movement": -37
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 144,
            "movement": -76
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
    "title": "Stamina",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0c45088ffcfc5d0d7043c51a98d45082/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gara",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
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
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 111,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Goodbye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 146,
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": -52
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 171,
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
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
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
    "title": "People",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dda3f7dc6c530814d51c9cb6eca57be/500x500-000000-80-0-0.jpg"
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
  