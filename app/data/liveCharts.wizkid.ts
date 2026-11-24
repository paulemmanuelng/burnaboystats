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
  export const liveChartsUpdated = "2026-11-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-24T09:59Z";
  
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
            "position": 42,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 84,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 114,
            "movement": -11
          },
          {
            "country": "US",
            "name": "United States",
            "position": 121,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 125,
            "movement": 7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 152,
            "movement": -20
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 153,
            "movement": 18
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 153,
            "movement": -27
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 166,
            "movement": 22
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 166,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 189,
            "movement": -37
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 195,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 197,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 200,
            "movement": -25
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
            "country": "KW",
            "name": "Kuwait",
            "position": 71,
            "movement": -27
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
            "movement": 14
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 76,
            "movement": 3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": 11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 126,
            "movement": -23
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 184,
            "movement": -66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": -21
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PE",
            "name": "Peru",
            "position": 59,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 81,
            "movement": 0
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
            "position": 69,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/500x500-000000-80-0-0.jpg"
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 60
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 65,
            "movement": -11
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 111,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 124,
            "movement": 38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 166,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 177,
            "movement": -89
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 191,
            "movement": -8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 195,
            "movement": -24
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
            "position": 40,
            "movement": 155
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 84,
            "movement": -54
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
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
    "title": "MONEY CONSTANT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": 30
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": 30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 128,
            "movement": -2
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
            "position": 97,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 116,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
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
            "position": 63,
            "movement": 1
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
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 82,
            "movement": 45
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -61
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": -118
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 198,
            "movement": -104
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
            "position": 39,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 8
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
            "position": 50,
            "movement": 0
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
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": -29
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 103,
            "movement": 6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -42
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 134,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": 15
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 168,
            "movement": -97
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
            "movement": -90
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
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": -10
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
            "position": 69,
            "movement": -7
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
            "position": 86,
            "movement": 14
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
            "position": 26,
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
    "title": "Final",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 114,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -14
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
            "position": 59,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -60
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 105,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": 45
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 135,
            "movement": -47
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 171,
            "movement": -37
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": 81
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": -78
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -47
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 39
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 94
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": -54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
            "movement": -74
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -11
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
            "position": 121,
            "movement": -16
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
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": 84
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": -6
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
            "position": 16,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 74
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 122
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": 41
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -23
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
            "movement": 0
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
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
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
            "country": "EG",
            "name": "Egypt",
            "position": 66,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
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
            "position": 158,
            "movement": -9
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
            "position": 184,
            "movement": -39
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
            "position": 71,
            "movement": 1
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
            "position": 51,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
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
            "position": 123,
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
    "title": "More Love, Less Ego",
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
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
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
            "position": 65,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": -9
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 69,
            "movement": -34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 133,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 48,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": -95
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
            "position": 75,
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
            "position": 151,
            "movement": 7
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
            "position": 15,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
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
            "position": 145,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": 6
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
            "position": 84,
            "movement": null,
            "status": "re"
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
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -25
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 163,
            "movement": -45
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
            "position": 148,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 84,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
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
            "position": 25,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -7
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
            "position": 65,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/022426a926bc2f38da080d86e690b6be/500x500-000000-80-0-0.jpg"
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
            "position": 105,
            "movement": -8
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
            "position": 158,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bdda644ec4fca3d3c10425b7091fa74d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessed",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 200,
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
            "position": 71,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 156,
            "movement": -10
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
            "position": 186,
            "movement": -27
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
            "position": 90,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-16",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4b6e3fe68fe1e1f8bcc5749bddf2955/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bend",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 34,
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
    "title": "No Stress",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 153
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 146,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Energy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
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
            "position": 169,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1079769bab009299da36d7680437e608/500x500-000000-80-0-0.jpg"
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
            "position": 181,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kana",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -61
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 171,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soco",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mood",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cddddd44067c884f6959f8d8c229fab8/500x500-000000-80-0-0.jpg"
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
            "position": 132,
            "movement": -78
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-22"
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
            "position": 192,
            "movement": -17
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
  