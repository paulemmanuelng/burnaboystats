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
  export const liveChartsUpdated = "2026-10-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-24T20:54Z";
  
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
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 4,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 5,
            "movement": -3
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 8,
            "movement": 7
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 8,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 9,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 12,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": -9
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 13,
            "movement": -8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 13,
            "movement": -8
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 14,
            "movement": -7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 14,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 16,
            "movement": -7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 17,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 18,
            "movement": 2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 19,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 27,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": 16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 36,
            "movement": -12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 38,
            "movement": -21
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 38,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 38,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 39,
            "movement": -18
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 44,
            "movement": -26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 47,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 57,
            "movement": 130
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 58,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 64,
            "movement": -35
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 72,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -24
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 93,
            "movement": -53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 140,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": -33
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 186,
            "movement": -165
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 26,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 31,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 43,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 65,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 113,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 194,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 2,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 1,
            "movement": 60
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": -3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 37,
            "movement": -36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 46,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 63,
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
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 23,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
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
            "position": 44,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -4
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 9,
            "movement": 55
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 13,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": -14
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 18,
            "movement": -13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 20,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": 7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 22,
            "movement": -7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 23,
            "movement": 61
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 23,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 29,
            "movement": -14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 32,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": 7
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 33,
            "movement": -15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 34,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 38,
            "movement": 21
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 39,
            "movement": -25
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 39,
            "movement": -19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 39,
            "movement": -9
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 40,
            "movement": -34
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 41,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 45,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 45,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 46,
            "movement": -39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 24
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 58,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 25
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 65,
            "movement": 32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": -51
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 93,
            "movement": 27
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 94,
            "movement": -22
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 97,
            "movement": 23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 98,
            "movement": -54
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": 25
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 110,
            "movement": -54
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 113,
            "movement": -29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 117,
            "movement": -27
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 171,
            "movement": -9
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 200,
            "movement": -176
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
            "position": 49,
            "movement": 4
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
            "position": 69,
            "movement": -15
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 44,
            "movement": 109
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 50,
            "movement": 52
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 51,
            "movement": 16
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 156,
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
            "country": "MU",
            "name": "Mauritius",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 167,
            "movement": 3
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 22,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 41,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 143,
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 70
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 48
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 121,
            "movement": -37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
            "movement": 3
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
            "position": 42,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -3
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
            "position": 128,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 4
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
            "position": 132,
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
            "position": 8,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 56
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": -22
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
            "position": 142,
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
            "position": 48,
            "movement": -9
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 5,
            "movement": 14
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 94,
            "movement": -26
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": 22
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 69,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 16,
            "movement": 69
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 78
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 163,
            "movement": -40
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": -132
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -35
          },
          {
            "country": "NA",
            "name": "Namibia",
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 17,
            "movement": -3
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -31
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 25
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 184,
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
            "position": 131,
            "movement": -6
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
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
            "position": 94,
            "movement": -7
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 25
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": -23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 125,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 99,
            "movement": 76
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": -30
          },
          {
            "country": "FR",
            "name": "France",
            "position": 118,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 136,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": -47
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": -56
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 196,
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
            "position": 76,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 117,
            "movement": 5
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
            "position": 81,
            "movement": -44
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 199,
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 67,
            "movement": -20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 133,
            "movement": -29
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 169,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 191,
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 170,
            "movement": -160
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": -6
          },
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
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 93,
            "movement": -60
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pray",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 156,
            "movement": -69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 1
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
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 25,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jazzy's Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 45,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
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
            "position": 121,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 163,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
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
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
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
            "position": 122,
            "movement": 56
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
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
            "position": 198,
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
    "title": "Ayra Starr - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 62,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-24",
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
  