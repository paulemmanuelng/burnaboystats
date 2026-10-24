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
  export const liveChartsBuiltAt = "2026-10-24T04:41Z";
  
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
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "country": "GY",
            "name": "Guyana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 15,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 18,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 18,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": 35
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 21,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 22,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 29,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 35,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 40,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 49,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 63,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 108,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 132,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 187,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 24,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 32,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 112,
            "movement": -16
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 196,
            "movement": -20
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 41,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -16
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 61,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 100,
            "movement": -85
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
            "position": 23,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CL",
            "name": "Chile",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 25,
            "movement": 29
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
            "position": 4,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 15,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 18,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 19,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 24,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 24,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 27,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 44,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 56,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 57,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 64,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 66,
            "movement": 0
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 72,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 73,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 84,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 84,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 97,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 98,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 109,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 120,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 120,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 162,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 200,
            "movement": 0
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
            "position": 62,
            "movement": -17
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
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 170,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 189,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
            "movement": 0
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
            "position": 18,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -3
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
            "position": 133,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
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
            "position": 134,
            "movement": 6
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
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": 0
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
            "position": 13,
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
            "position": 140,
            "movement": -5
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
            "position": 39,
            "movement": 38
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 40,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
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
            "position": 67,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 102,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 153,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 51,
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 0
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 79,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 81,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 193,
            "movement": 0
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
            "position": 87,
            "movement": 5
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 25,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 30,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 68,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 108,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 116,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 119,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 120,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 151,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 102,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 143,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
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
            "position": 36,
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
            "movement": 0
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 85,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 127,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 153,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
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
            "country": "FM",
            "name": "Micronesia",
            "position": 47,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 68,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": 0
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 66,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 122,
            "movement": -5
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
            "position": 58,
            "movement": 117
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 87,
            "movement": 0
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 196,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "movement": 14
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
            "country": "FJ",
            "name": "Fiji",
            "position": 33,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 93,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "movement": 0
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "movement": 0
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
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
            "movement": 0
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
            "movement": 0
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
            "movement": 0
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
            "movement": 0
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
  