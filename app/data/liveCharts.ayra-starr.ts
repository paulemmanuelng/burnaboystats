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
  export const liveChartsUpdated = "2026-10-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-21T17:16Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 4,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 1,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": 28
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
            "movement": 75
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 6,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 9,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 10,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 11,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 12,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 12,
            "movement": 23
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 13,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 18,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 25,
            "movement": 6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 25,
            "movement": -7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 26,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 28,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 30,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 37,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 57,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -7
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 66,
            "movement": -12
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 78,
            "movement": 23
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 129,
            "movement": -15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 132,
            "movement": -75
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": -10
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 141,
            "movement": -37
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
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 28,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 55,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 88,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 161,
            "movement": -19
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 12,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 14,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 29,
            "movement": -11
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 31,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 69,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
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
            "movement": 33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
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
            "position": 14,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -6
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 6,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 7,
            "movement": 5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 8,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 10,
            "movement": -7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 10,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": 9
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 12,
            "movement": 140
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 14,
            "movement": -7
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 14,
            "movement": 2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 16,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 19,
            "movement": -8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 19,
            "movement": 33
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 21,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 23,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 26,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -18
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 29,
            "movement": 28
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 31,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 31,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 33,
            "movement": -23
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 35,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 38,
            "movement": 16
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 39,
            "movement": 68
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 40,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 44,
            "movement": -11
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 45,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 55,
            "movement": -26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 56,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 58,
            "movement": 14
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 58,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 91,
            "movement": 8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 106,
            "movement": -33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": -46
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 155,
            "movement": -44
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 182,
            "movement": -30
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 182,
            "movement": -39
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 190,
            "movement": -111
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 197,
            "movement": -82
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
            "position": 35,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": 65
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -15
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
            "movement": 2
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
            "position": 132,
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
            "position": 42,
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 20,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 26,
            "movement": 0
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
            "position": 72,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 18,
            "movement": -8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 32,
            "movement": -9
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 92,
            "movement": 24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 153,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 171,
            "movement": 17
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
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -35
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
            "position": 99,
            "movement": 39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -79
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
            "movement": -1
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
            "position": 134,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -16
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
            "position": 137,
            "movement": 4
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
            "position": 36,
            "movement": -8
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 22,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 34,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 60,
            "movement": 68
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": 92
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": -24
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 6,
            "movement": 187
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 31
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 119,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": 46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -3
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
            "position": 56,
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 113,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 124,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": -16
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 193,
            "movement": -17
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 166,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": -29
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
            "country": "FM",
            "name": "Micronesia",
            "position": 48,
            "movement": -39
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 76,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -64
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
            "movement": 11
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -80
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": 41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 124,
            "movement": 8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 143,
            "movement": 25
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 108,
            "movement": -3
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
            "position": 168,
            "movement": -134
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": -67
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": 33
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
            "position": 60,
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": 37
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 176,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 105,
            "movement": -35
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 151,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 170,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
            "movement": 21
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
            "position": 32,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -113
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": -48
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
            "position": 177,
            "movement": -114
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
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
    "title": "Toxic",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": 84
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
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
            "position": 42,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
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
            "country": "FJ",
            "name": "Fiji",
            "position": 109,
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
    "title": "Rhythm & Blues",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 113,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
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
            "position": 131,
            "movement": -8
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
  