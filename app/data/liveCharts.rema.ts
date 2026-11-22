// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=rema from kworb's artist page.
  //
  // PLATFORM chart data for Rema: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-22T06:55Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "E-Mortal Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 10,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 10,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 14,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 17,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": 14
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 21,
            "movement": 7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 22,
            "movement": 22
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 29
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": 27
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 27,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 29,
            "movement": 14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 30,
            "movement": 13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 30,
            "movement": 23
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 31,
            "movement": 133
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 33,
            "movement": 23
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 33,
            "movement": 70
          },
          {
            "country": "FR",
            "name": "France",
            "position": 35,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 35,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 46
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 38,
            "movement": 29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 39,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 39,
            "movement": 51
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 50,
            "movement": 47
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 55,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 58,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 70,
            "movement": 38
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 70,
            "movement": 49
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 86,
            "movement": 8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 96,
            "movement": 11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 99,
            "movement": 42
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": -10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 117,
            "movement": -19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 119,
            "movement": 56
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 132,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 155,
            "movement": -30
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 174,
            "movement": -5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 188,
            "movement": -7
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
            "position": 30,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 45,
            "movement": -23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 183,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oh No",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": -15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 38,
            "movement": 45
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": -37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 78,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 120,
            "movement": 43
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 135,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": -22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 199,
            "movement": -29
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 51,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": 10
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 7
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
            "position": 17,
            "movement": 135
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -6
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
            "position": 2,
            "movement": 3
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
            "position": 63,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Feel Alright",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 16,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 20
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 18
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 111
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
            "position": 32,
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
            "position": 14,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Secondhand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": 10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 22,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 26,
            "movement": 7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 31,
            "movement": 23
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 38,
            "movement": -9
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 42,
            "movement": 6
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 56,
            "movement": -49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": -27
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 106,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 107,
            "movement": -8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 115,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -6
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 174,
            "movement": -59
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 184,
            "movement": -48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": -12
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 107,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 172,
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
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 28,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
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
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
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
            "position": 9,
            "movement": 13
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
            "position": 45,
            "movement": 47
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
            "position": 36,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 41
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 79,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 106,
            "movement": -5
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 117,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 185,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": -57
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 199,
            "movement": -12
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
            "position": 60,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TANZANIA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -32
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
            "position": 4,
            "movement": 181
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
            "position": 159,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Velvet",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 137,
            "movement": 46
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 188,
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
            "position": 3,
            "movement": 135
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 74
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
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
            "position": 184,
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
            "position": 49,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 123
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 129,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 176,
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
            "position": 169,
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
            "position": 72,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SUGA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": -69
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -41
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
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 83,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 70
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 123,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 143,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 73,
            "movement": 20
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 79,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 23,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 79,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 106,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": -13
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
            "position": 157,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 21,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 55,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": -6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 79,
            "movement": -17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 111,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -22
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "position": 52,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bang Bang",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -46
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -62
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
            "position": 54,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -146
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
            "movement": 94
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wine",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 38,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 103,
            "movement": -23
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 71,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": 34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 17
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01"
  },
  {
    "title": "Corny",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fi Kan We Kan",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Trouble Maker",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dimension",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1a396a54bf82fb0a7cc1eb27daaf3eea/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses Ultra",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
  