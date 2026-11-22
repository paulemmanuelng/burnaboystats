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
  export const liveChartsBuiltAt = "2026-11-22T19:45Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "E-Mortal Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
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
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 2,
            "movement": 2
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 11,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 11,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 12,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 13,
            "movement": 14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 14,
            "movement": 7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 14,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 14,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 15,
            "movement": 24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 15,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 16,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 24,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 31,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 35,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 35,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 39,
            "movement": 74
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 41,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 41,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 42,
            "movement": -8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 42,
            "movement": -7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 46,
            "movement": -13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 48,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 57,
            "movement": -19
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 58,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 70,
            "movement": -20
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 71,
            "movement": -13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 72,
            "movement": -63
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 74,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 74,
            "movement": 114
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 75,
            "movement": 17
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 79,
            "movement": -19
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 80,
            "movement": -49
          },
          {
            "country": "US",
            "name": "United States",
            "position": 83,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 84,
            "movement": -54
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 85,
            "movement": 57
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 93,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 97,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 97,
            "movement": -80
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 107,
            "movement": -8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 120,
            "movement": -24
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 124,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 129,
            "movement": -59
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 138,
            "movement": 42
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 145,
            "movement": -26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 145,
            "movement": -75
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 156,
            "movement": -29
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 161,
            "movement": -12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 173,
            "movement": -83
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 184,
            "movement": -56
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 193,
            "movement": -89
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
            "position": 36,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 50,
            "movement": -19
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
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 2
          },
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 0
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
            "country": "MU",
            "name": "Mauritius",
            "position": 78,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 108,
            "movement": null,
            "status": "new"
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
            "position": 130,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": -22
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 185,
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
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 57,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
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
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -116
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
            "movement": -1
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
            "movement": -36
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 88,
            "movement": null,
            "status": "new"
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 156,
            "movement": 13
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": 6
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
            "position": 122,
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
            "position": 15,
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
            "position": 14,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 127
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": -8
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 69,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -4
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": 9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 103,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": -29
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 134,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": -63
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": -66
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 153,
            "movement": -116
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 158,
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
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 1
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
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -2
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
            "country": "MW",
            "name": "Malawi",
            "position": 86,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -2
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
            "position": 29,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -1
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
            "movement": -2
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
            "position": 14,
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
            "position": 45,
            "movement": -2
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
            "position": 18,
            "movement": 4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 28,
            "movement": 14
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
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 79,
            "movement": -65
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 111,
            "movement": -5
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 113,
            "movement": -57
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": -12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 115,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 124,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": -5
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
            "position": 144,
            "movement": -37
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 187,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TANZANIA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": -4
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
            "position": 23,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 5
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
            "position": 63,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": -11
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 71
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
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
            "position": 9,
            "movement": -5
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
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -14
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -12
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
            "position": 168,
            "movement": -31
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
            "position": 7,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
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
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 23,
            "movement": -4
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
            "position": 85,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 157,
            "movement": -51
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SG",
            "name": "Singapore",
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SUGA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": -35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": 45
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
            "position": 159,
            "movement": -40
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
            "position": 14,
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
            "position": 193,
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
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 4
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
            "position": 58,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -73
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": -19
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -29
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 123,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 142,
            "movement": -59
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
            "position": 176,
            "movement": 23
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 50,
            "movement": 135
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": -47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": -3
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 123
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": -34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": 76
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 17
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
            "position": 182,
            "movement": -13
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
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 95,
            "movement": -71
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": -45
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
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
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": -13
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
            "country": "SN",
            "name": "Senegal",
            "position": 20,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 53,
            "movement": 15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 55,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 64,
            "movement": 47
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 140,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": -65
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": 42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": 6
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
            "position": 11,
            "movement": 118
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -42
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
            "position": 200,
            "movement": -115
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bang Bang",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -64
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
            "position": 37,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": 5
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
            "position": 81,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": null,
            "status": "new"
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
            "position": 162,
            "movement": -4
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
            "position": 34,
            "movement": -11
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
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
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": -37
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
    "title": "AZAMAN",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
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
            "position": 129,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holiday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
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
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
  