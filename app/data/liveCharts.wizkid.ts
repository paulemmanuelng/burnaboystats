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
  export const liveChartsBuiltAt = "2026-11-27T08:40Z";
  
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
            "position": 48,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 87,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 107,
            "movement": 9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 135,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 138,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 142,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 148,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 163,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 166,
            "movement": 34
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 169,
            "movement": -11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 182,
            "movement": 13
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 183,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 189,
            "movement": -37
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
            "position": 34,
            "movement": 117
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 40,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 61,
            "movement": 9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 80,
            "movement": -7
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 128,
            "movement": -47
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 131,
            "movement": 45
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 148,
            "movement": -47
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 154,
            "movement": -53
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 158,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": -37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": 30
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 179,
            "movement": -25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 189,
            "movement": 3
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
            "position": 121,
            "movement": -25
          },
          {
            "country": "NO",
            "name": "Norway",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 84,
            "movement": -21
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
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": 8
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 37,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 146,
            "movement": 22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 188,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
            "movement": -59
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
            "position": 137,
            "movement": 0
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
            "position": 59,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 12,
            "movement": 155
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 135,
            "movement": -36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": 26
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
            "position": 197,
            "movement": -155
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
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 154,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": -56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 181,
            "movement": -97
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
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
            "position": 67,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
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
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": 42
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 136,
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
            "position": 55,
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
            "position": 79,
            "movement": -4
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
            "position": 28,
            "movement": 32
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
            "position": 20,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 33
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": -62
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 41
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": -58
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 165,
            "movement": -126
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
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 26,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 46
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 77,
            "movement": 69
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": -67
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 172,
            "movement": -86
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 172,
            "movement": -160
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 95,
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
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": -62
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -24
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
            "position": 64,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": 0
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
            "position": 14,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 123,
            "movement": -18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 146,
            "movement": -41
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -19
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": 27
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 190,
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -16
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
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
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
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": 45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 55,
            "movement": 22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 100,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": -2
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
            "position": 38,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -75
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
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
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
            "movement": -7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ES",
            "name": "Spain",
            "position": 56,
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
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": -6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 155,
            "movement": 13
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
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": -38
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 182,
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
            "position": 148,
            "movement": -17
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
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -18
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
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
            "position": 113,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fever",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 177,
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
    "title": "Blessed",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 130,
            "movement": -17
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
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 110,
            "movement": -47
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
            "position": 82,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-16",
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
            "position": 146,
            "movement": -6
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
            "position": 188,
            "movement": -14
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
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 180,
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
    "title": "Karamo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
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
    "title": "Don't Dull",
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
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
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
            "position": 138,
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
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
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
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
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
    "title": "Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
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
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/26df7d9096b19210b3bccce5eca135dc/500x500-000000-80-0-0.jpg"
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
            "position": 41,
            "movement": null,
            "status": "new"
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
            "position": 195,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cddddd44067c884f6959f8d8c229fab8/500x500-000000-80-0-0.jpg"
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
            "position": 79,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
            "position": 190,
            "movement": 7
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
  