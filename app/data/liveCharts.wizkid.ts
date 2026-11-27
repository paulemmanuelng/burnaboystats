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
  export const liveChartsUpdated = "2026-11-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-27T21:22Z";
  
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
            "country": "KW",
            "name": "Kuwait",
            "position": 47,
            "movement": 101
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 64,
            "movement": 67
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 81,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 92,
            "movement": 62
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 100,
            "movement": -39
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 141,
            "movement": -107
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": 6
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 170,
            "movement": -12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 183,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 200,
            "movement": -72
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
            "position": 45,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 90,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 114,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 127,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 150,
            "movement": -8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 151,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 153,
            "movement": 10
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 158,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 161,
            "movement": -23
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 175,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 178,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 187,
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
            "position": 126,
            "movement": -22
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 176,
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
            "country": "KR",
            "name": "South Korea",
            "position": 92,
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": 2
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
            "position": 107,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": -25
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
            "position": 56,
            "movement": 3
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
            "position": 19,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -25
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": -58
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -27
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 146,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 186,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
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
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 76,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -11
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 151,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": -6
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
            "position": 63,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": -6
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
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
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
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
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
            "position": 58,
            "movement": -3
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
            "position": 79,
            "movement": -4
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
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 58,
            "movement": 84
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": -50
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": -61
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -34
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 177,
            "movement": -140
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
    "title": "Come Closer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 140,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 169,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 178,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": -36
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 89,
            "movement": 46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -54
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
            "position": 4,
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
            "position": 8,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4c0bef97144f51d9a3e1a188deadb4e8/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 107,
            "movement": -46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -21
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
            "position": 70,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 78
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
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
            "position": 52,
            "movement": -2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -12
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
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
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
            "position": 123,
            "movement": -5
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
            "position": 2,
            "movement": 2
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": -81
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": -31
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
            "position": 31,
            "movement": -2
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
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 140,
            "movement": -28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": -54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": -37
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
            "position": 116,
            "movement": 7
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
            "position": 72,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 98,
            "movement": -43
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": 12
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
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 119,
            "movement": 36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": 8
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
            "position": 144,
            "movement": 3
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 73
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": -45
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
            "position": 78,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 177,
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
            "position": 57,
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
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 189,
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 112,
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
    "title": "Made In Lagos",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 84,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
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
            "position": 26,
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
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 2
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
            "position": 37,
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
            "position": 154,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
  },
  {
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
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
            "position": 105,
            "movement": 25
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
            "position": 158,
            "movement": 14
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 125,
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
            "position": 99,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 163,
            "movement": 25
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
            "position": 181,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/022426a926bc2f38da080d86e690b6be/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 137,
            "movement": 1
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
            "position": 33,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Grace",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Karamo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turn Up",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aca1a95f974679518b40edf09f382a3c/500x500-000000-80-0-0.jpg"
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
            "movement": -15
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
            "position": 166,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
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
            "position": 174,
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
    "title": "Don't Dull",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -107
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
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
            "position": 82,
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
    "title": "Sisi",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -104
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bc0d04683a3ba1691887cf597749de93/500x500-000000-80-0-0.jpg"
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
            "position": 199,
            "movement": -4
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
            "position": 80,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec91c9f741208370ed9ab6b9029e90cc/500x500-000000-80-0-0.jpg"
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
  