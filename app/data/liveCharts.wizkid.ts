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
  export const liveChartsBuiltAt = "2026-11-24T22:30Z";
  
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
            "country": "SR",
            "name": "Suriname",
            "position": 22,
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
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 84,
            "movement": -12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 95,
            "movement": -19
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 114,
            "movement": 36
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 116,
            "movement": 35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 125,
            "movement": -21
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 131,
            "movement": 53
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 138,
            "movement": -12
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 141,
            "movement": -70
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": 20
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 191,
            "movement": -19
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
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
            "position": 48,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 83,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 117,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 138,
            "movement": -17
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
            "movement": 52
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 150,
            "movement": -25
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 157,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 162,
            "movement": 4
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 165,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 189,
            "movement": -37
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 199,
            "movement": -33
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 200,
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
            "position": 78,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 86,
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
    "title": "Feel Alright",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 55,
            "movement": 122
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 66,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": 47
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
            "movement": 20
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 127,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 192,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 198,
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
            "position": 99,
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
            "position": 11,
            "movement": 5
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
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 74,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": -39
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 192,
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
            "movement": 9
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
            "position": 59,
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
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 55
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 95,
            "movement": -38
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 109,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": 28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 178,
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
            "position": 199,
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
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 49
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -89
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 73
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -25
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 190,
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
            "position": 87,
            "movement": 15
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
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 3,
            "movement": 168
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
            "position": 24,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": 49
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 67
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": -57
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 195,
            "movement": -14
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 200,
            "movement": -95
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 64,
            "movement": 50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 4
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
            "movement": 1
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
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
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
            "position": 62,
            "movement": 7
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 34,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 97
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 85,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": -46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": -85
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 185,
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 83
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": -76
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
            "movement": 0
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 96,
            "movement": 54
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -98
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": -95
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
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
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -31
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": -42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": -95
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": 54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": -99
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -17
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
            "position": 46,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
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
            "position": 42,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 190,
            "movement": -120
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
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
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 67,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 138,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
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
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 36,
            "movement": 53
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 149,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": 21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 199,
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
            "position": 152,
            "movement": 14
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
            "position": 29,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
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
            "position": 133,
            "movement": 12
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": 0
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
            "position": 111,
            "movement": 14
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
            "movement": -4
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
            "position": 26,
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
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 170,
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
    "title": "Daddy Yo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
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
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
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
            "position": 152,
            "movement": -3
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
            "movement": -9
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
            "position": 171,
            "movement": 15
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
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 72,
            "movement": 120
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
    "title": "IDK",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 31,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 79,
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
    "title": "Blessed",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
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
            "position": 167,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 92,
            "movement": -85
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 98,
            "movement": -85
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": -2
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
            "movement": -29
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-16",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 150,
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
    "title": "Mood",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
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
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
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
  