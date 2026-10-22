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
  export const liveChartsUpdated = "2026-10-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-22T04:53Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","iTunes"];
  
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
            "position": 44,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 62,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 93,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 100,
            "movement": -18
          },
          {
            "country": "US",
            "name": "United States",
            "position": 104,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 114,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 118,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 128,
            "movement": -16
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 142,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 142,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 143,
            "movement": -22
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 147,
            "movement": -20
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 158,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 165,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 181,
            "movement": -16
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 181,
            "movement": -24
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 188,
            "movement": -38
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 195,
            "movement": -12
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
            "position": 67,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 18
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 95,
            "movement": 52
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 102,
            "movement": -57
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 105,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 117,
            "movement": -46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 185,
            "movement": -65
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 192,
            "movement": 7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 75,
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
            "country": "CN",
            "name": "China",
            "position": 75,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 159,
            "movement": 7
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
            "position": 7,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 34,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 92,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 165,
            "movement": -54
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 172,
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
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 158,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
            "movement": -27
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
            "position": 62,
            "movement": -6
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
            "position": 27,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": 64
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": 73
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -23
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 115,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 136,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": 42
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 198,
            "movement": -22
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 198,
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
            "country": "TN",
            "name": "Tunisia",
            "position": 82,
            "movement": 38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -13
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
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 1
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
            "position": 27,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 42,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 181,
            "movement": -49
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 30,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": 22
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": -66
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 190,
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 35
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -55
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
            "position": 52,
            "movement": 6
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
            "position": 199,
            "movement": -23
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
            "position": 54,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": 24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 198,
            "movement": -8
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
            "position": 51,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": 69
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 65
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": 8
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
            "position": 103,
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
            "position": 136,
            "movement": -116
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 146
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -43
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 147,
            "movement": -91
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": -35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": -88
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
            "movement": -87
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
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
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -13
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
            "position": 38,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 52,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": -36
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": -15
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
    "title": "Final",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": 45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 15,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": -57
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": -68
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 193,
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
            "position": 144,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
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
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": -19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": 25
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
            "country": "DM",
            "name": "Dominica",
            "position": 23,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
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
            "position": 159,
            "movement": 0
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
            "position": 182,
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
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 85,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": -2
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
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": 39
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 109,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
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
            "position": 165,
            "movement": 28
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
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
            "position": 99,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 107,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
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
            "position": 140,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 162,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 200,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 121,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
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
    "title": "Lagos to Kampala",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 9
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
            "position": 138,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
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
            "position": 145,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
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
            "position": 130,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Matter",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5956f4fdf351532267e5538e2373615b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Apple Music Live: Wizkid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": -62
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 155,
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
    "title": "Manya",
    "platforms": [
      {
        "platform": "iTunes",
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
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2743eaf3ad111a1da4f940966bfea480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 38,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fever",
    "platforms": [
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4b6e3fe68fe1e1f8bcc5749bddf2955/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Reckless",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sweet One",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d18f71e03fb2831c2ceac5b8285f068/500x500-000000-80-0-0.jpg"
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
            "position": 135,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 151,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4e3a6bee57e9a7a41c399565a7cf72c1/500x500-000000-80-0-0.jpg"
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
            "position": 121,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
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
            "position": 123,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Low",
    "platforms": [
      {
        "platform": "iTunes",
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
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ma Lo",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ab78245a891d3dad863b735b8afc1b89/500x500-000000-80-0-0.jpg"
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
            "position": 113,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Can't Believe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f25b7d9807558219cbe7646ad27e092/500x500-000000-80-0-0.jpg"
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
            "position": 192,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": null,
            "status": "new"
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
            "position": 123,
            "movement": 24
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
  