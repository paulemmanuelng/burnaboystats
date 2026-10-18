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
  export const liveChartsUpdated = "2026-10-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-18T15:55Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "One Dance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 19,
            "movement": 20
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 40,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 52,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 83,
            "movement": -21
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 88,
            "movement": -59
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 92,
            "movement": -21
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 96,
            "movement": 91
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 106,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 148,
            "movement": 48
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 157,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": -27
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 186,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -78
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 195,
            "movement": -80
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 198,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 43,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 77,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 107,
            "movement": -21
          },
          {
            "country": "US",
            "name": "United States",
            "position": 118,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 122,
            "movement": -13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 135,
            "movement": -19
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 135,
            "movement": -20
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 151,
            "movement": 22
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 151,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 161,
            "movement": -20
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 165,
            "movement": -6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 166,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 177,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 177,
            "movement": -41
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 194,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 195,
            "movement": -21
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 88,
            "movement": -27
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 185,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CN",
            "name": "China",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 179,
            "movement": -5
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
            "position": 98,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 92,
            "movement": 52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 114,
            "movement": 23
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 146,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 155,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 1,
            "movement": 95
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
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
            "position": 63,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -2
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
            "position": 59,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 107,
            "movement": 40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": 61
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 158,
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
            "position": 90,
            "movement": -71
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": -12
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 23
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 62,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -24
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": 43
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 134,
            "movement": 58
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": -92
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
            "position": 17,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": 44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 130,
            "movement": -35
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 167,
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
            "position": 93,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": -27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 33,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
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
            "position": 64,
            "movement": -13
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
            "position": 146,
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
            "position": 63,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": 59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 167,
            "movement": 25
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -1
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
            "position": 57,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
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
            "country": "TD",
            "name": "Chad",
            "position": 8,
            "movement": 58
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": 44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 61
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 128,
            "movement": -27
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
            "position": 35,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 49
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 21
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": 49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": -13
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
            "position": 21,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -20
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
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": -85
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
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
            "position": 130,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": 13
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
            "movement": -116
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
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
            "position": 79,
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
            "position": 123,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 75
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": -79
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": -142
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -20
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
            "position": 90,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": -10
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
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 35,
            "movement": 26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 93,
            "movement": 53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -8
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 86,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
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
            "position": 21,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -20
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
            "position": 144,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 119,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": -37
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 165,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
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
            "position": 114,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
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
            "position": 186,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 49,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": 26
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
            "position": 83,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 38,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": 29
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
            "position": 92,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec446ac1b021f7777dec6ebbc990404f/500x500-000000-80-0-0.jpg"
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
            "position": 90,
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
    "title": "Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": 1
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
            "position": 76,
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
    "title": "The Matter",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5956f4fdf351532267e5538e2373615b/500x500-000000-80-0-0.jpg"
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
            "position": 196,
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
            "position": 106,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Après Minuit",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 45,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lose",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Don't Dull",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wine to the Top",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d18f71e03fb2831c2ceac5b8285f068/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Grace",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4e3a6bee57e9a7a41c399565a7cf72c1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IDG",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b12d64d8d1d710d3bf0abe0b3ac0fa5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e6885c10ca9b754020bd97ae4df040a/500x500-000000-80-0-0.jpg"
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
            "position": 168,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pakurumo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23b8a10d5e4139b677723fe9886b163d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 111,
            "movement": 50
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Slow Whine",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1079769bab009299da36d7680437e608/500x500-000000-80-0-0.jpg"
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
            "position": 148,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos to Kampala",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Erima",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alive",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AU",
            "name": "Australia",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Apple Music Live: Wizkid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-18"
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
            "position": 136,
            "movement": 1
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
  