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
  export const liveChartsUpdated = "2026-11-11";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-11T19:39Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "One Dance",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 36,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 65,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 80,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 105,
            "movement": 17
          },
          {
            "country": "US",
            "name": "United States",
            "position": 109,
            "movement": -27
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 118,
            "movement": 5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 120,
            "movement": -18
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 122,
            "movement": 10
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 127,
            "movement": -21
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 139,
            "movement": -24
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 139,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 155,
            "movement": -40
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 156,
            "movement": 20
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 157,
            "movement": -16
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 173,
            "movement": -50
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 174,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 40,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 73,
            "movement": -8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 83,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -11
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "country": "CL",
            "name": "Chile",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 86,
            "movement": -18
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 98,
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
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 62,
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": -39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 94,
            "movement": -32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 160,
            "movement": -35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": -54
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": -43
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
            "position": 84,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 141,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 193,
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
            "position": 48,
            "movement": -3
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 15
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": -37
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 165,
            "movement": 12
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": -42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 106,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 195,
            "movement": -79
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
            "position": 43,
            "movement": -2
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
            "country": "TD",
            "name": "Chad",
            "position": 2,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 27
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": 15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 67,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 184,
            "movement": -53
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
            "position": 114,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": -32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": 27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 193,
            "movement": -1
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 2
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
            "position": 48,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 47
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": 45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -31
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 178,
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
            "position": 18,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": 34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": -69
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
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
            "position": 16,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 153
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -69
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -44
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
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
            "position": 32,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -102
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
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
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "position": 101,
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
            "position": 8,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 31,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 147,
            "movement": -33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
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
            "position": 106,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
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
            "position": 198,
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
            "position": 24,
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
            "position": 72,
            "movement": null,
            "status": "re"
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
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": 70
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "position": 130,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 42,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": -4
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
            "position": 33,
            "movement": 34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": 37
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
            "position": 110,
            "movement": -82
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
            "position": 46,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 51,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": -48
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -2
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
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
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
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 160,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": 20
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
            "position": 143,
            "movement": -95
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
            "position": 186,
            "movement": 0
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
            "position": 31,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 199,
            "movement": -141
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
            "position": 77,
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
            "movement": -29
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
            "position": 115,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 85,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
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
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": -67
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
            "position": 70,
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
            "position": 138,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Daddy Yo",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": -17
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
            "position": 82,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bdda644ec4fca3d3c10425b7091fa74d/500x500-000000-80-0-0.jpg"
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
            "position": 149,
            "movement": -32
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 8
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
            "position": 28,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
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
            "position": 119,
            "movement": 3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 130,
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
            "position": 124,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/022426a926bc2f38da080d86e690b6be/500x500-000000-80-0-0.jpg"
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
            "position": 121,
            "movement": 2
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
            "position": 58,
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
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -82
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e6885c10ca9b754020bd97ae4df040a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -13
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": -83
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4b6e3fe68fe1e1f8bcc5749bddf2955/500x500-000000-80-0-0.jpg"
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
            "position": 32,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "System",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 72,
            "movement": 60
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09"
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
            "position": 98,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec446ac1b021f7777dec6ebbc990404f/500x500-000000-80-0-0.jpg"
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
            "position": 105,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gyrate",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Diamonds",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
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
            "position": 146,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Call Me Every Day",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cc269116fe4da8b1054a18ef7f1e39a8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bend Down Pause",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MT",
            "name": "Malta",
            "position": 66,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7e868a4868f2dbf0ca02ccab6c1166fe/500x500-000000-80-0-0.jpg"
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
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fake Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -86
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea13491b73bc307a022486992ce5a56b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soco",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -87
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 48,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06"
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
            "position": 189,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
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
            "position": 142,
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
  