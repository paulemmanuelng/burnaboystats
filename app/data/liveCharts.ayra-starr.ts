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
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-18T07:15Z";
  
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
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 5,
            "movement": 4
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 5,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 5,
            "movement": 6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 6,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 7,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 7,
            "movement": 9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 10,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -5
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 12,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 13,
            "movement": -3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 14,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 17,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 17,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 18,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 18,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 22,
            "movement": -19
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 25,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 29,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 30,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 35,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 36,
            "movement": 16
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 43,
            "movement": 34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 49,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 13
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 53,
            "movement": -43
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 67,
            "movement": -65
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": -58
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 114,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 159,
            "movement": -121
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 199,
            "movement": -95
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 1,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 6,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 21,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 25,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 43,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 101,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 103,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 117,
            "movement": -15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 120,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 152,
            "movement": 0
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
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "re"
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
            "country": "GD",
            "name": "Grenada",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 9,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 14,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 14,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 24,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 50,
            "movement": -34
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 56,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
            "movement": 30
          },
          {
            "country": "FR",
            "name": "France",
            "position": 118,
            "movement": -73
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -136
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 34
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 19,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 32,
            "movement": -22
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
            "position": 40,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": 8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 4,
            "movement": 11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 6,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 7,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 10,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 11,
            "movement": 5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 12,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 12,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 15,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 15,
            "movement": 57
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 19,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 20,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 23,
            "movement": 75
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 24,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 42
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 27,
            "movement": 12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 29,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": 13
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 31,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 38,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 39,
            "movement": 10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 46,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 46,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 55,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 59,
            "movement": 7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 65,
            "movement": 49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 65,
            "movement": -49
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 70,
            "movement": 10
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 73,
            "movement": -50
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 63
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 82,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 88,
            "movement": -9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 95,
            "movement": -10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 105,
            "movement": -57
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 128,
            "movement": -103
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 160,
            "movement": 9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 167,
            "movement": 12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 188,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 192,
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
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": 67
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 13,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 22,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 24,
            "movement": -2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 41,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
            "movement": -29
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 190,
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
            "position": 31,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 53,
            "movement": -20
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 138,
            "movement": -132
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 199,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 10,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
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
            "position": 14,
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
            "position": 3,
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
            "position": 126,
            "movement": 14
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
            "position": 98,
            "movement": -36
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
    "firstSeen": "2026-01-01",
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
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 90
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 109,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
            "movement": -52
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "position": 95,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 22
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
            "position": 125,
            "movement": -37
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 2,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 59,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": 7
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 140,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 184,
            "movement": -158
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 59,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": 43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": -70
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
            "position": 55,
            "movement": 37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
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
            "position": 195,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 71,
            "movement": -49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 195,
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
            "position": 125,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
            "movement": -98
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
            "position": 101,
            "movement": -24
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
    "firstSeen": "2026-01-01",
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
            "position": 73,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 131,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 142,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": -11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 51,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": -47
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": 31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -73
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 47,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 87,
            "movement": -3
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 186,
            "movement": -28
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
            "position": 89,
            "movement": 77
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 78,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": -13
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 148,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -21
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -54
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
            "position": 41,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 1,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": -22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": -11
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
            "position": 29,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 159,
            "movement": -40
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 197,
            "movement": -85
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
            "position": 36,
            "movement": -3
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
    "firstSeen": "2026-01-01",
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
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": 58
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 159,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PA",
            "name": "Panama",
            "position": 151,
            "movement": 49
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 64,
            "movement": -30
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 140,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 109,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "country": "DM",
            "name": "Dominica",
            "position": 47,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 82
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pressure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 118,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -129
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Goodbye (Warm Up)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
  