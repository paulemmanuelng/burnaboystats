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
  export const liveChartsUpdated = "2026-10-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-22T17:14Z";
  
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
            "country": "TD",
            "name": "Chad",
            "position": 2,
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 5,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 5,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 6,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 7,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 7,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 7,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 10,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 11,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 15,
            "movement": 11
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 17,
            "movement": 8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 18,
            "movement": 19
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 18,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": -9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 20,
            "movement": 0
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 21,
            "movement": 120
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 21,
            "movement": -8
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 22,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 29,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 35,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 40,
            "movement": -10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 49,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 63,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 37
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 108,
            "movement": 24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -17
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 132,
            "movement": -54
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 187,
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
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 1
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
            "position": 5,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "re"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 0
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
            "position": 17,
            "movement": 28
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 33,
            "movement": 28
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 31
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 38,
            "movement": 37
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": 15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 18,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 29,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 60,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -15
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 96,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 176,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 26,
            "movement": -19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 27,
            "movement": -13
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 59,
            "movement": -47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -110
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
            "position": 17,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
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
            "position": 54,
            "movement": -41
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 95,
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
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 5,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 6,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 6,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 7,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 7,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 10,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 14,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 15,
            "movement": 6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 15,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 16,
            "movement": -5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 18,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 19,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 20,
            "movement": -13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 21,
            "movement": 5
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 24,
            "movement": 15
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 24,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 27,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 150
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 12
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 35,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 40,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 44,
            "movement": 12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 56,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 57,
            "movement": -28
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 64,
            "movement": -6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 66,
            "movement": -11
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 72,
            "movement": -27
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 84,
            "movement": -53
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 84,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": -58
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 97,
            "movement": -59
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 98,
            "movement": -63
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 109,
            "movement": -27
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 120,
            "movement": -87
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 120,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 162,
            "movement": 35
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 200,
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 21,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": -33
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
            "movement": -5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": 2
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
            "position": 135,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 7,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 69,
            "movement": -61
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": -51
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
            "position": 11,
            "movement": 0
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
            "position": 135,
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
            "position": 77,
            "movement": -35
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
            "position": 16,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -6
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 79,
            "movement": -38
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 81,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -54
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 193,
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
            "position": 96,
            "movement": 5
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
            "position": 76,
            "movement": -20
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
            "position": 87,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 20,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 20,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 23,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 38,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": -7
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
            "position": 67,
            "movement": -35
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 102,
            "movement": -67
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 153,
            "movement": -135
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
            "movement": -17
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 19,
            "movement": -18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 25,
            "movement": -3
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 30,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 39
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 68,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 96,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": -28
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 108,
            "movement": 16
          },
          {
            "country": "FR",
            "name": "France",
            "position": 114,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 116,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 119,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": 31
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 151,
            "movement": 35
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": 18
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
            "position": 52,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 52,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": -49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 102,
            "movement": 16
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 143,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": -53
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 28
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 85,
            "movement": -37
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": -47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 14,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 55
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -6
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 47,
            "movement": -40
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": 39
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
            "position": 43,
            "movement": 0
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
            "position": 41,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "FM",
            "name": "Micronesia",
            "position": 10,
            "movement": 95
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 153,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": 40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": 8
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 62,
            "movement": -9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 117,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": 52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": null,
            "status": "new"
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PA",
            "name": "Panama",
            "position": 180,
            "movement": -4
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
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": 30
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": 76
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 73,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 103,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sability",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 114,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PINACOLADA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ffdc025fa19b2bf8dbb39f79d82e000a/500x500-000000-80-0-0.jpg"
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
            "position": 143,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Toxic",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 196,
            "movement": -168
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
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
  