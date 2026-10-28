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
  export const liveChartsUpdated = "2026-10-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-28T22:38Z";
  
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
            "position": 46,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 66,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 91,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 92,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 101,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 105,
            "movement": 5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 111,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 115,
            "movement": 8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 138,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 159,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 159,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 161,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 162,
            "movement": 13
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 163,
            "movement": 4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 190,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 191,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 30,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 65,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 16
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 91,
            "movement": -68
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 111,
            "movement": -62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -10
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 131,
            "movement": 32
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 153,
            "movement": -33
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 157,
            "movement": -66
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 157,
            "movement": -22
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 164,
            "movement": 31
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 186,
            "movement": -47
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 193,
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
            "country": "VE",
            "name": "Venezuela",
            "position": 24,
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
            "movement": -27
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
            "position": 71,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 171,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
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
            "position": 60,
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
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 57
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": 49
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -39
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 99,
            "movement": -79
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": -51
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 187,
            "movement": -70
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
            "position": 56,
            "movement": -1
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
            "position": 73,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
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
            "position": 55,
            "movement": 2
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
            "position": 2,
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": 24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 129,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": -79
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 157,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 165,
            "movement": -12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 195,
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 13,
            "movement": 16
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": -9
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 3
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
            "position": 101,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 44,
            "movement": 2
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
            "position": 43,
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": -13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": -39
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 124,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 156,
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
            "position": 111,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 41
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 76,
            "movement": -64
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 100,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -48
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 163,
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": -27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": -30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": -9
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
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": 98
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
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
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 25
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": 40
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": -64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -49
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": 75
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": 23
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 22,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": 2
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
            "position": 17,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": -32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": 68
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
            "movement": null,
            "status": "new"
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
            "position": 50,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 196,
            "movement": -85
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
            "position": 129,
            "movement": 1
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
            "position": 30,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": 56
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 26
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "position": 85,
            "movement": 5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
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
            "country": "DM",
            "name": "Dominica",
            "position": 25,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
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
            "position": 154,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
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
            "position": 125,
            "movement": -3
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
            "position": 48,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 143,
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
            "position": 141,
            "movement": 31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 68,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 75,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 129,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
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
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 103,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": 20
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
            "position": 34,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 28
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
            "position": 74,
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
            "position": 192,
            "movement": -7
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
            "position": 45,
            "movement": -3
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
            "position": 154,
            "movement": -8
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
    "title": "Show You the Money",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 120,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": 53
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
            "position": 63,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
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
            "position": 105,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -47
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 133,
            "movement": 25
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
            "position": 97,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": -56
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
            "position": 178,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e6885c10ca9b754020bd97ae4df040a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fever",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -21
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
            "position": 54,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4b6e3fe68fe1e1f8bcc5749bddf2955/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": 0
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
            "position": 100,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
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
            "position": 70,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 151,
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
            "position": 94,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 153,
            "movement": 18
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
            "position": 95,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Caro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
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
            "position": 111,
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
    "title": "African Bad Gyal",
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
    "firstSeen": "2026-10-28"
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
            "position": 64,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mood",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cddddd44067c884f6959f8d8c229fab8/500x500-000000-80-0-0.jpg"
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
            "position": 134,
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
    "title": "Bad To Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 139,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec446ac1b021f7777dec6ebbc990404f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 121,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 131,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 163,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4e3a6bee57e9a7a41c399565a7cf72c1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Girl",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 184,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d18f71e03fb2831c2ceac5b8285f068/500x500-000000-80-0-0.jpg"
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
            "position": 189,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
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
            "position": 167,
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
    "title": "A Million Blessings",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -144
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 72,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-27"
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
            "position": 146,
            "movement": -4
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
            "position": 109,
            "movement": 19
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
  