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
  export const liveChartsUpdated = "2026-10-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-13T22:49Z";
  
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
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 19
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 3,
            "movement": 10
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 5,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 8,
            "movement": 5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 8,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 9,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 11,
            "movement": 5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 11,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 12,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 14,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 16,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 16,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": 22
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 17,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 18,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 19,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -6
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 23,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 31,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": 7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 38,
            "movement": 99
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 42,
            "movement": 13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 42,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 58,
            "movement": 69
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 69,
            "movement": -24
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": -48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 66
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": 101
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 104,
            "movement": 28
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 197,
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
            "country": "SN",
            "name": "Senegal",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 6,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 9,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 17,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 23,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 11
          },
          {
            "country": "US",
            "name": "United States",
            "position": 51,
            "movement": 7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 74,
            "movement": 23
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 86,
            "movement": 31
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 87,
            "movement": 9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 145,
            "movement": 22
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 4,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 44,
            "movement": -21
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 89,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 113,
            "movement": -53
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -23
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
            "country": "SN",
            "name": "Senegal",
            "position": 37,
            "movement": 8
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 74,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": 32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 10
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
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 81
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 6,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 9,
            "movement": -5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 10,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 10,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 11,
            "movement": 8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 11,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 11,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 12,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": 7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 12,
            "movement": -4
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 13,
            "movement": 1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 13,
            "movement": 6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 16,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 16,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 19,
            "movement": 1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 19,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 19,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 22,
            "movement": 79
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 26,
            "movement": 11
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 27,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 36,
            "movement": -8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 37,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 16
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 46,
            "movement": -14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 46,
            "movement": 17
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 51,
            "movement": 24
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 52,
            "movement": 121
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": -8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 58,
            "movement": 86
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 68,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 72,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 84,
            "movement": -53
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 92,
            "movement": 39
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 93,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": -16
          },
          {
            "country": "FR",
            "name": "France",
            "position": 137,
            "movement": 46
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 140,
            "movement": 26
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 165,
            "movement": -117
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 169,
            "movement": -37
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 189,
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 7
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
            "position": 10,
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
            "position": 130,
            "movement": 8
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
            "position": 30,
            "movement": 44
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": -2
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 14,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 21
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 98,
            "movement": 62
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 119,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": -63
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 185,
            "movement": 7
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 111
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 95,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": 15
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
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
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
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
            "position": 96,
            "movement": 2
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 17,
            "movement": 14
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": 32
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 197,
            "movement": -31
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
            "position": 11,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 43,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 26
          },
          {
            "country": "FR",
            "name": "France",
            "position": 113,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 148,
            "movement": 14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 149,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 184,
            "movement": -27
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "country": "NE",
            "name": "Niger",
            "position": 51,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -14
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 110,
            "movement": -76
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": 11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 179,
            "movement": -90
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 180,
            "movement": -58
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 70,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": 33
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
            "position": 73,
            "movement": 15
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
            "position": 48,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 159,
            "movement": 21
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
            "position": 178,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": -58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -35
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": -45
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": -53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": -35
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
            "position": 10,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 62,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IE",
            "name": "Ireland",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 33,
            "movement": 51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 112,
            "movement": -57
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 175,
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
            "position": 37,
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": 17
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 149,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 101,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 189,
            "movement": -71
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 87,
            "movement": 64
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
            "position": 115,
            "movement": -99
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 170,
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
            "position": 158,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 51,
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
    "title": "Control",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 57,
            "movement": -50
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
            "position": 115,
            "movement": -15
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
            "position": 175,
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
    "title": "PINACOLADA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ffdc025fa19b2bf8dbb39f79d82e000a/500x500-000000-80-0-0.jpg"
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
            "position": 133,
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
    "title": "My Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
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
            "position": 176,
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 198,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 179,
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
  