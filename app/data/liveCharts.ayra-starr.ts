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
  export const liveChartsBuiltAt = "2026-10-13T00:45Z";
  
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
            "country": "SR",
            "name": "Suriname",
            "position": 1,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 5,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 6,
            "movement": 5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 7,
            "movement": 2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 12,
            "movement": 22
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 13,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 13,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 13,
            "movement": 39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 15
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 13,
            "movement": 21
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 14,
            "movement": 39
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 15,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 15,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 16,
            "movement": 10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 16,
            "movement": 56
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 18,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 19,
            "movement": 19
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 21,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": 26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 32,
            "movement": 26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 53
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 36,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 38,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 40,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 45,
            "movement": 36
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 49,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": 72
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 27
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 78,
            "movement": 83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 20
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 127,
            "movement": -30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 132,
            "movement": 50
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 137,
            "movement": -62
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": 17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 192,
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": null,
            "status": "new"
          },
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
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 9,
            "movement": 58
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 23,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 53,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 66,
            "movement": 66
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 81,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 194,
            "movement": -75
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
            "position": 53,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 2
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
            "country": "FJ",
            "name": "Fiji",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": 41
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 4,
            "movement": 92
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 6,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 8,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 9,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 11,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 14,
            "movement": -5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 15,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
            "movement": -6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 19,
            "movement": 18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 20,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 20,
            "movement": 13
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 22,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 23,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 28,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 31,
            "movement": 27
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 31,
            "movement": 72
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 31,
            "movement": 111
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 32,
            "movement": 35
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 32,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 37,
            "movement": -2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 40,
            "movement": 49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 45,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -29
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 48,
            "movement": 57
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 63,
            "movement": 90
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 74,
            "movement": 30
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 85,
            "movement": 31
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": -52
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 100,
            "movement": -45
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 101,
            "movement": -34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 131,
            "movement": 18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 144,
            "movement": -76
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 173,
            "movement": -6
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 59
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": 25
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 165,
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
            "position": 9,
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 11,
            "movement": 83
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 136
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": 40
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 93,
            "movement": 19
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 103,
            "movement": 35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 199,
            "movement": -27
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
            "position": 24,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 21
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": 27
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 112,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
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
            "position": 98,
            "movement": -1
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
            "position": 31,
            "movement": 20
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 175,
            "movement": null,
            "status": "new"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 5
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
            "position": 47,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 122,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": 41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": -32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -1
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": 57
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -20
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": 32
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 87,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": 39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
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
            "position": 88,
            "movement": -13
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
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 68,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 118,
            "movement": 16
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 118,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 47
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 162,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": 15
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": 0
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 138,
            "movement": 34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
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
            "country": "IT",
            "name": "Italy",
            "position": 98,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 174,
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
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 24
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 172,
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 118,
            "movement": -30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 193,
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 55,
            "movement": 40
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 115,
            "movement": 44
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
            "position": 115,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": 59
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": null,
            "status": "new"
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
            "position": 151,
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
            "position": 18,
            "movement": 123
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 112,
            "movement": 62
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 141,
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
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
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
    "title": "Control",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 7,
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": 90
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
            "position": 104,
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
    "title": "PINACOLADA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 163,
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
            "position": 113,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hypé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 182,
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
    "title": "Need You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ed52a6fe01734b31c35f51d34e6c6d3d/500x500-000000-80-0-0.jpg"
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
  