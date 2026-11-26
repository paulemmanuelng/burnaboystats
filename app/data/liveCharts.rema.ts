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
  export const liveChartsUpdated = "2026-11-26";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-26T08:26Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "E-Mortal Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
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
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 14,
            "movement": -12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 14,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 14,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 15,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 17,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 19,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 19,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 20,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 25,
            "movement": 37
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 26,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 27,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 28,
            "movement": -10
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 28,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 32,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": -20
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 41,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 43,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 45,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 46,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 51,
            "movement": -9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 52,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 53,
            "movement": -13
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 57,
            "movement": -23
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 62,
            "movement": -22
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 63,
            "movement": -25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -18
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 69,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 80,
            "movement": -26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 92,
            "movement": 6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 93,
            "movement": -25
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 96,
            "movement": 33
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 99,
            "movement": -83
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 100,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 102,
            "movement": -12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 127,
            "movement": -64
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 128,
            "movement": -96
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 157,
            "movement": -83
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 158,
            "movement": -11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 163,
            "movement": -130
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 197,
            "movement": -30
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
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -14
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 63,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 107,
            "movement": -44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 134,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": -34
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
            "position": 35,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 58,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -17
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": -1
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
            "position": 48,
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
            "position": 23,
            "movement": 59
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 12,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 26,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 27,
            "movement": 8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 71,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 89,
            "movement": 16
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 120,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 13
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 125,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -30
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 127,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -144
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CN",
            "name": "China",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 164,
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
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 24,
            "movement": -10
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 56,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 97,
            "movement": 11
          },
          {
            "country": "SG",
            "name": "Singapore",
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
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -22
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Feel Alright",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -31
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 99,
            "movement": -33
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": -42
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": -143
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 198,
            "movement": -71
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
            "position": 42,
            "movement": 124
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
            "position": 8,
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
            "position": 8,
            "movement": 81
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": -11
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
            "position": 30,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 21
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "position": 13,
            "movement": -3
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
            "position": 78,
            "movement": -41
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
            "position": 24,
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
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": -8
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
            "position": 31,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -7
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
            "position": 16,
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
            "position": 18,
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
    "title": "Velvet",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
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
            "position": 8,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 9,
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
            "position": 61,
            "movement": 20
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
            "position": 22,
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
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 69,
            "movement": -27
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 83,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 84,
            "movement": 7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 97,
            "movement": 3
          }
        ]
      },
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 18,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 81,
            "movement": 45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": 25
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": -55
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 160,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 200,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 23
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
            "position": 129,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 174,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": -43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": -22
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
    "title": "SUGA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -64
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 17,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
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
            "position": 40,
            "movement": 12
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
            "country": "OM",
            "name": "Oman",
            "position": 68,
            "movement": 116
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 109,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": -18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": 79
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 76
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 51
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": -50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
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
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 143,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
            "movement": -91
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
            "position": 88,
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
            "position": 56,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -63
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 70
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 145,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
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
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 15,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 45,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 51,
            "movement": 14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 59,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": 110
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 178,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IN",
            "name": "India",
            "position": 120,
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
    "title": "Wine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 62,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 177,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 36,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 64
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
            "movement": -70
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
            "movement": -29
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
            "position": 47,
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
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": -69
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": -50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
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
            "position": 95,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": -26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 157,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 200,
            "movement": -41
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
            "position": 28,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": -7
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
            "position": 140,
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
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -53
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01"
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
            "position": 91,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace of Mind",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dcc05a9f00c838cb5af3784bb6932102/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Afro Jigga",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea7c00c6478e9ed0c141e739277c5f02/500x500-000000-80-0-0.jpg"
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
  