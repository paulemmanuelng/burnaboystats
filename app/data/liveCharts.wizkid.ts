// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=wizkid from kworb's artist page.
  //
  // PLATFORM chart data for Wizkid: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-04";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-04T19:49Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "One Dance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 40,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 54,
            "movement": 117
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 71,
            "movement": 34
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 77,
            "movement": 50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 143,
            "movement": 45
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 157,
            "movement": -2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 199,
            "movement": -44
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 42,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 85,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 96,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 102,
            "movement": -19
          },
          {
            "country": "US",
            "name": "United States",
            "position": 117,
            "movement": -15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 125,
            "movement": 56
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 140,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 144,
            "movement": 15
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 149,
            "movement": -22
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 163,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 164,
            "movement": -36
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 169,
            "movement": -10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 171,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 181,
            "movement": -25
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 184,
            "movement": -42
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
            "position": 125,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MONEY CONSTANT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 81,
            "movement": 42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": -90
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 160,
            "movement": -44
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
            "position": 76,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 169,
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
            "position": 60,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 97,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -20
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": 25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 151,
            "movement": 34
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 169,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
            "movement": -80
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 193,
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
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 7
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
            "position": 51,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Come Closer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 100,
            "movement": 39
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 129,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 134,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": 27
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": 88
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 55,
            "movement": 36
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 59,
            "movement": 97
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": 20
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 80,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -26
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 131,
            "movement": -70
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 19,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
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
            "position": 39,
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
            "position": 27,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": 27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": 40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 100,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": -93
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": 22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
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
            "position": 131,
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
            "position": 86,
            "movement": -71
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 43,
            "movement": 51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -21
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 62
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": -26
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
            "position": 55,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Morayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 76
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 39
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": 34
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": -17
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
            "position": 29,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 12,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 172,
            "movement": -61
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
            "position": 94,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 106,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 22
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": -25
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
            "position": 63,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": 62
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": -7
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
            "position": 123,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": 18
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 69,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 149,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -52
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 1,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 15
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 199,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/022426a926bc2f38da080d86e690b6be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 97,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
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
            "country": "ZM",
            "name": "Zambia",
            "position": 195,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "More Love, Less Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": -67
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -42
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 177,
            "movement": -45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": -40
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
            "position": 79,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
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
            "position": 106,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 21,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -2
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
            "position": 111,
            "movement": 68
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 98
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": 7
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
            "movement": 5
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
            "position": 173,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
  },
  {
    "title": "Made In Lagos",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 83,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 27
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
            "position": 24,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -73
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e6885c10ca9b754020bd97ae4df040a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": -84
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 172,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Daddy Yo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -1
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
            "position": 125,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bdda644ec4fca3d3c10425b7091fa74d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nights In The Sun",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a3e5df13a8fa9f76a2125b8c27dc164f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos to Kampala",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
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
            "position": 25,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 75,
            "movement": 96
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -12
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
            "position": 179,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fever",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4b6e3fe68fe1e1f8bcc5749bddf2955/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IDK",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 65,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cddddd44067c884f6959f8d8c229fab8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Show You the Money",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 38,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad To Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": -62
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec446ac1b021f7777dec6ebbc990404f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Situation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 118,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cee6b36e7828e7ac6364376ef1290141/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Can't Believe",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 12,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f25b7d9807558219cbe7646ad27e092/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2 Sugar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Celebrate",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -77
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Man On A Mission",
    "platforms": [
      {
        "platform": "iTunes",
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
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b75fdeb32e6f3fb0760933cda2de95c8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holla at Your Boy",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4e3a6bee57e9a7a41c399565a7cf72c1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "U Don't Know",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cbd8af17625915ac863ee340498d5d9f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Apple Music Live: Wizkid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-04"
  },
  {
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
  