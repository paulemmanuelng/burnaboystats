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
  export const liveChartsUpdated = "2026-11-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-21T19:21Z";
  
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
            "country": "MS",
            "name": "Montserrat",
            "position": 40,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 43,
            "movement": 39
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 50,
            "movement": 5
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 76,
            "movement": 105
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 96,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 111,
            "movement": -66
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 115,
            "movement": -85
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": -44
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 167,
            "movement": -45
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 191,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 36,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 72,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 99,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 135,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 141,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 142,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 142,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 143,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 149,
            "movement": 7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 153,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 188,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 189,
            "movement": -37
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 194,
            "movement": 2
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
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 98,
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
            "position": 26,
            "movement": -12
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 68,
            "movement": -36
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 148,
            "movement": -26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": -13
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
            "position": 92,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
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
            "position": 61,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": -52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 138,
            "movement": -8
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
            "position": 178,
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
            "position": 71,
            "movement": -22
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 8
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
            "position": 45,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -10
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
            "position": 124,
            "movement": -107
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": null,
            "status": "new"
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
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": null,
            "status": "new"
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
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
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
            "position": 19,
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
            "position": 32,
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
    "title": "Come Closer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": 2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 139,
            "movement": -48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 143,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 180,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
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
            "position": 186,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 114
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 36
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": 40
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 133,
            "movement": 34
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 174,
            "movement": -38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": -10
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
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": -7
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
            "position": 56,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -14
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
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": 37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 20
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 177,
            "movement": -136
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
    "title": "Morayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": 37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": -42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 34
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 33
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": -13
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
            "position": 49,
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
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 187,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 76
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
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
            "position": 118,
            "movement": -8
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
            "position": 49,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
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
            "position": 198,
            "movement": -8
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
            "position": 32,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": -90
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 44,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 61,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 64,
            "movement": 73
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": -21
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": 53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
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
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": 53
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": 48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": 4
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": -43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
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
            "position": 128,
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": 11
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 188,
            "movement": -77
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 102,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
            "movement": -16
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
            "position": 156,
            "movement": null,
            "status": "new"
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
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 84,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": -14
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
            "position": 51,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/022426a926bc2f38da080d86e690b6be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Superstar",
    "platforms": [
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
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
            "position": 160,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
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
            "position": 85,
            "movement": 11
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
            "position": 106,
            "movement": -13
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
            "position": 125,
            "movement": -20
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
            "position": 139,
            "movement": -12
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
            "position": 162,
            "movement": -36
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
            "position": 113,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
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
            "position": 54,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessed",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Everyday",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
    "title": "Kana",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 155,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 176,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 179,
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
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
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
    "title": "Show You the Money",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": -19
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -108
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bella",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-16",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Drogba",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 99,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/44d339bd3533e9e28f2e9b298cb9cd9c/500x500-000000-80-0-0.jpg"
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
            "position": 146,
            "movement": -69
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cbd8af17625915ac863ee340498d5d9f/500x500-000000-80-0-0.jpg"
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
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": -118
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cc269116fe4da8b1054a18ef7f1e39a8/500x500-000000-80-0-0.jpg"
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
            "position": 167,
            "movement": -4
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
  