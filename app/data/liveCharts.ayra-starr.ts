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
  export const liveChartsUpdated = "2026-10-16";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-16T11:29Z";
  
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
            "country": "PG",
            "name": "Papua New Guinea",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 5,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 5,
            "movement": 2
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 5,
            "movement": 72
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 6,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 6,
            "movement": 20
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 7,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 20
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 11,
            "movement": 5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 12,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 14,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 14,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 14,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": 6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 17,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 18,
            "movement": 7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 18,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 19,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": 21
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 26,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 30,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 31,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 34,
            "movement": -16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": 43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 98,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 103,
            "movement": 12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 111,
            "movement": 54
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 170,
            "movement": 21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
            "movement": -156
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 24,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 42,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 77,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 92,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 104,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 106,
            "movement": 56
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 127,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 147,
            "movement": -7
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
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 14
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": 33
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 75,
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
            "position": 4,
            "movement": 25
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 10,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 14,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 16,
            "movement": 24
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 20,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 64,
            "movement": -49
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 97,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": -31
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
            "position": 2,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -17
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
            "position": 15,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 2,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 4,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": 20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 6,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 7,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": 28
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 8,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 10,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 10,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 11,
            "movement": -5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 11,
            "movement": -4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 12,
            "movement": 53
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 12,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 14,
            "movement": 4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 14,
            "movement": 1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 15,
            "movement": 15
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 16,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 19,
            "movement": -13
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 20,
            "movement": -5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 21,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 23,
            "movement": 63
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 24,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 27,
            "movement": -17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 27,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -13
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 31,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 31,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": 13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 37,
            "movement": 123
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 41,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 42,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 42,
            "movement": -17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 46,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 66,
            "movement": -8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 68,
            "movement": -32
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 70,
            "movement": -37
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 70,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": -19
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 89,
            "movement": -25
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 92,
            "movement": -18
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 94,
            "movement": 31
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 109,
            "movement": -26
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 134,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 159,
            "movement": -18
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 166,
            "movement": -41
          },
          {
            "country": "FR",
            "name": "France",
            "position": 183,
            "movement": -44
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 195,
            "movement": -32
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 19,
            "movement": 62
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 38,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 116,
            "movement": 30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 172,
            "movement": 17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 180,
            "movement": -30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
            "movement": -69
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 198,
            "movement": -82
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 22,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 41,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
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
            "position": 59,
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
            "position": 2,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 40
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
            "position": 27,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 99,
            "movement": 80
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
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
            "position": 12,
            "movement": 0
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
            "position": 96,
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
            "position": 127,
            "movement": 0
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
            "position": 62,
            "movement": 24
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
            "position": 41,
            "movement": -10
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 40,
            "movement": 33
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 96,
            "movement": -58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -21
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -49
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 182,
            "movement": 7
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 76,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 143,
            "movement": 37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": -79
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": 7
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
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -8
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
            "position": 85,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 29
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 69,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 63
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": 46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": 20
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 176,
            "movement": -100
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
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
            "position": 74,
            "movement": 3
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
            "position": 77,
            "movement": -8
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
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 45
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": 24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 145,
            "movement": -46
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": -15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 190,
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
            "position": 162,
            "movement": 2
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
            "position": 92,
            "movement": -53
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
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 119,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": -27
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 183,
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": 46
          },
          {
            "country": "FR",
            "name": "France",
            "position": 110,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 114,
            "movement": 28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 130,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": -41
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 176,
            "movement": 18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 186,
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 67,
            "movement": 19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 100,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": 11
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 200,
            "movement": -111
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 32,
            "movement": -2
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": null,
            "status": "re"
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 47,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 61,
            "movement": 1
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 159,
            "movement": 12
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
            "position": 102,
            "movement": -68
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
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -3
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
            "position": 59,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 29
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 173,
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
            "position": 2,
            "movement": 59
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 44
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 150,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": -34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -6
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
            "position": 79,
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 67,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 193,
            "movement": -22
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
            "position": 10,
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
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -23
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
            "position": 49,
            "movement": 0
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
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 177,
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
            "country": "JP",
            "name": "Japan",
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rhythm & Blues",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
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
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": -95
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
            "position": 113,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 200,
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
            "position": 97,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f338a3ba12d7e5241e1fa13ec3a4ceb1/500x500-000000-80-0-0.jpg"
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
            "position": 186,
            "movement": -20
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
            "position": 92,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
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
            "position": 165,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "People",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -41
          }
        ]
      }
    ],
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
  