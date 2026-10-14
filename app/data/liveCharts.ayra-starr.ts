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
  export const liveChartsUpdated = "2026-10-14";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-14T20:36Z";
  
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
            "movement": 1
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
            "country": "DM",
            "name": "Dominica",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 4,
            "movement": 4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 4,
            "movement": 12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 4,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 5,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 7,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 7,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 9,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 10,
            "movement": 1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 11,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 16,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 16,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 17,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 18,
            "movement": 24
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 19,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 20,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 22,
            "movement": 69
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": 7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 25,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 26,
            "movement": -20
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 28,
            "movement": 4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 9
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 32,
            "movement": 42
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 36,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 45,
            "movement": -3
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 77,
            "movement": -54
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 100,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 105,
            "movement": -102
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 115,
            "movement": -46
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 165,
            "movement": 32
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 191,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 16,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 24,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 42,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 43,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 77,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 92,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 94,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 136,
            "movement": 9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 139,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 184,
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
            "position": 4,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 4,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 16,
            "movement": -13
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -20
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 57,
            "movement": 56
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 66,
            "movement": -29
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -20
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 159,
            "movement": -70
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
            "country": "JM",
            "name": "Jamaica",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 21,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 99,
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
            "position": 17,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 1
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 4,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 4,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 6,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 8,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 11
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 9,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": 3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 9,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": 74
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 11,
            "movement": 11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 11,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 13,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 15,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 15,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": 13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 18,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 22,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 27,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 30,
            "movement": -18
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 30,
            "movement": -11
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 33,
            "movement": 19
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 36,
            "movement": -27
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": -16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 37,
            "movement": 56
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 40,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": 4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 50,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 52,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 58,
            "movement": 10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 61,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 58
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 64,
            "movement": -13
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": 3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": -47
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 83,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 86,
            "movement": 7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 125,
            "movement": -62
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 132,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 146,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 160,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 163,
            "movement": 26
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 66,
            "movement": null,
            "status": "new"
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
            "country": "FJ",
            "name": "Fiji",
            "position": 33,
            "movement": -16
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 116,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 146,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 150,
            "movement": 47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 179,
            "movement": null,
            "status": "new"
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 19,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 19,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 44,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 51,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 71,
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
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 35
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": -25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 117,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 179,
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
            "position": 12,
            "movement": -2
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
            "position": 133,
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
            "position": 86,
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
            "position": 10,
            "movement": -7
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 38,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 73,
            "movement": 46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": 48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": 18
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 189,
            "movement": -91
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 32
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 68,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
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
            "position": 77,
            "movement": -4
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
            "position": 40,
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
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": -47
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 78,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 180,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
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
            "position": 75,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
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
            "position": 119,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 99,
            "movement": 60
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
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
            "position": 164,
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
            "position": 39,
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
            "position": 72,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": 86
          },
          {
            "country": "FR",
            "name": "France",
            "position": 112,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": 30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
            "movement": -58
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 142,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 167,
            "movement": -18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 187,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
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
            "position": 50,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": 56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 77,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 58
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 112,
            "movement": 82
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 29
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 198,
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 91
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
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
            "position": 72,
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 60,
            "movement": 2
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 190,
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
            "country": "IT",
            "name": "Italy",
            "position": 21,
            "movement": 12
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
            "position": 61,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 181,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "country": "SC",
            "name": "Seychelles",
            "position": 85,
            "movement": 38
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 86,
            "movement": 26
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 89,
            "movement": -54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": -2
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
            "position": 29,
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
            "position": 64,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
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
            "position": 61,
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
            "position": 91,
            "movement": 17
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
            "position": 158,
            "movement": -121
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
            "position": 44,
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
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 4
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
            "position": 108,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": 62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 148,
            "movement": 28
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
            "position": 50,
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 17
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
            "position": 51,
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 171,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 128,
            "movement": -77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
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
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f338a3ba12d7e5241e1fa13ec3a4ceb1/500x500-000000-80-0-0.jpg"
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
            "position": 46,
            "movement": 41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sability",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 63,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
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
            "position": 26,
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
    "title": "Midnight in New York",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
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
    "title": "Stamina",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
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
    "title": "Love Don't Cost A Dime - Re-Up",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": 9
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
            "position": 76,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dda3f7dc6c530814d51c9cb6eca57be/500x500-000000-80-0-0.jpg"
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
            "position": 151,
            "movement": -18
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
            "position": 94,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ffdc025fa19b2bf8dbb39f79d82e000a/500x500-000000-80-0-0.jpg"
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
            "position": 177,
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
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jazzy's Song",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Bloody Samaritan (with Kelly Rowland) (Remix)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 12,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/b2cf04be7a0c12deb9a39c76c3df01f1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Where Do We Go (Peggy Gou Remix)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/f338a3ba12d7e5241e1fa13ec3a4ceb1/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
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
  