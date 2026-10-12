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
  export const liveChartsUpdated = "2026-10-12";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-12T15:32Z";
  
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 7,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 10,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 10,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 11,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 15,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 16,
            "movement": -6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 19,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 23,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 26,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 30,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 30,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 34,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 34,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 38,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 38,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 42,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 53,
            "movement": -33
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 57,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 58,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 70,
            "movement": -15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 72,
            "movement": 99
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 75,
            "movement": -11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 81,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": -32
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 97,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 127,
            "movement": -14
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 161,
            "movement": -50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": -33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 182,
            "movement": -15
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 2,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 14,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 32,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": 5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 96,
            "movement": 14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 117,
            "movement": 28
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 167,
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
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 2,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 16,
            "movement": 16
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 21,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 53,
            "movement": -12
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 72,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": -22
          },
          {
            "country": "FR",
            "name": "France",
            "position": 117,
            "movement": -9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 173,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": -10
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
            "position": 45,
            "movement": 14
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 10
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 9,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 13,
            "movement": 2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 13,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": -7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 20,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 21,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -11
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 28,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 32,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 32,
            "movement": 8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 33,
            "movement": -9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 33,
            "movement": 3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 34,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 37,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 44,
            "movement": -27
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 46,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 55,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 58,
            "movement": 53
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 67,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": -41
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 67,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": -25
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 68,
            "movement": 55
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 96,
            "movement": 104
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 103,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 104,
            "movement": 5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 105,
            "movement": -60
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": -27
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 116,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 140,
            "movement": -71
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 149,
            "movement": 11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 153,
            "movement": -48
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 167,
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
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": -50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": -42
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
            "position": 8,
            "movement": -1
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
            "position": 138,
            "movement": 16
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
            "movement": -55
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": -44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 114,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 183,
            "movement": -19
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
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
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
            "position": 97,
            "movement": -15
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
            "country": "FM",
            "name": "Micronesia",
            "position": 94,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 112,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 50
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 120,
            "movement": 7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 157,
            "movement": -51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 180,
            "movement": -5
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
            "position": 50,
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
            "position": 9,
            "movement": 3
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
            "position": 18,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 47,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 3
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
            "position": 51,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 161,
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": -67
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
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
            "position": 171,
            "movement": 22
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": 44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 74,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -63
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 106,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
            "movement": -18
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
            "movement": 6
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
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": -2
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
            "position": 39,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 58,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 179,
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 62
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 103,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": -56
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": -26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 172,
            "movement": -54
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
            "position": 100,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
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
            "position": 163,
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
            "country": "DZ",
            "name": "Algeria",
            "position": 43,
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": -31
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
            "position": 127,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
            "movement": 18
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
            "position": 60,
            "movement": -41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -36
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
            "country": "FJ",
            "name": "Fiji",
            "position": 95,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 159,
            "movement": -7
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
            "position": 96,
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
            "position": 122,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
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
    "title": "Goodbye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 74
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": -87
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PINACOLADA",
    "platforms": [
      {
        "platform": "iTunes",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/ffdc025fa19b2bf8dbb39f79d82e000a/500x500-000000-80-0-0.jpg"
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
            "position": 104,
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
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "My Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Need You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ed52a6fe01734b31c35f51d34e6c6d3d/500x500-000000-80-0-0.jpg"
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
            "position": 155,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
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
  