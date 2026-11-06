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
  export const liveChartsUpdated = "2026-11-06";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-06T19:28Z";
  
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
            "position": 31,
            "movement": 18
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 39,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 62,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 67,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 77,
            "movement": 33
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 78,
            "movement": 75
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 106,
            "movement": -35
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 125,
            "movement": -16
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 134,
            "movement": 9
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": -37
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 143,
            "movement": 43
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 192,
            "movement": -42
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
            "position": 35,
            "movement": 8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 67,
            "movement": 15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 84,
            "movement": 12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 100,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 104,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 122,
            "movement": 7
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 126,
            "movement": 17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 127,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 131,
            "movement": 16
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 142,
            "movement": 22
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 146,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 146,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 161,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 166,
            "movement": -10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 169,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 1,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 49,
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
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": 48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": 47
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 169,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 197,
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
            "position": 85,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": 5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 178,
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
            "position": 47,
            "movement": 4
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
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": 44
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": -46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": -42
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 143,
            "movement": -89
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 183,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 195,
            "movement": 5
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
            "position": 19,
            "movement": -1
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
            "position": 49,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": 6
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
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -27
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 86,
            "movement": 64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": 71
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 104,
            "movement": -11
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 145,
            "movement": 30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": -19
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 184,
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
    "title": "Come Closer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 105,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 121,
            "movement": 30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 164,
            "movement": -37
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 165,
            "movement": -94
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
            "position": 3,
            "movement": 128
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 77,
            "movement": -32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -23
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -28
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 139,
            "movement": -59
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 147,
            "movement": -41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
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
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": 41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -5
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
            "position": 44,
            "movement": 3
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
            "position": 126,
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
            "position": 19,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 70
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
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
            "position": 15,
            "movement": 181
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 20,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 76
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 114,
            "movement": 41
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 138,
            "movement": -54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": -78
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
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": -34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": 52
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": -18
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
            "position": 187,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 166,
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
            "position": 54,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": 36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": -59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 149,
            "movement": -79
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
            "position": 70,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -2
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
            "position": 57,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": 1
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
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
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
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": 13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 112,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 199,
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
            "position": 189,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": 36
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 58,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": 8
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
            "position": 38,
            "movement": -26
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
            "position": 58,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -36
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
            "position": 72,
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
            "position": 122,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -2
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
            "position": 46,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 89
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
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
            "position": 157,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
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
            "position": 35,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 14
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
            "position": 108,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 70
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 166,
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
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 84,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": 5
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
            "movement": -21
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
            "position": 159,
            "movement": 40
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": -36
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
            "position": 113,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bdda644ec4fca3d3c10425b7091fa74d/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
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
    "title": "Nights In The Sun",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -93
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
            "position": 177,
            "movement": 21
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
            "position": 27,
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
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 116,
            "movement": 72
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 134,
            "movement": 55
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": -25
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
            "position": 141,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e6885c10ca9b754020bd97ae4df040a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessed",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 26,
            "movement": 132
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mighty Wine",
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
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
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
            "position": 41,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec446ac1b021f7777dec6ebbc990404f/500x500-000000-80-0-0.jpg"
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
            "position": 32,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No Stress",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 91,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Piece of Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 92,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "True Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Smile",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sweet One",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 101,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 118,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": -3
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
            "position": 144,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jaiye Jaiye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Energy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4e3a6bee57e9a7a41c399565a7cf72c1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soco",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": null,
            "status": "new"
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
            "position": 34,
            "movement": null,
            "status": "new"
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
            "position": 187,
            "movement": -3
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
            "position": 145,
            "movement": -3
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
  