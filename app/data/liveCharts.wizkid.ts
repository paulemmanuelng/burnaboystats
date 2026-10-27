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
  export const liveChartsUpdated = "2026-10-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-27T18:06Z";
  
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
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 65,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 78,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 81,
            "movement": 4
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 109,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 115,
            "movement": -8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 142,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 143,
            "movement": 29
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 147,
            "movement": -15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 154,
            "movement": 11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 156,
            "movement": 32
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 159,
            "movement": 6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 163,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 191,
            "movement": -31
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 196,
            "movement": -14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 196,
            "movement": -2
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
            "position": 60,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 15
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 77,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 89,
            "movement": -31
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 92,
            "movement": 49
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 122,
            "movement": 65
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 141,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 178,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 66,
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
            "position": 5,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 51,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 120,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
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
            "position": 74,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -12
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 174,
            "movement": 10
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
            "movement": -2
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
            "position": 90,
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": 148
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 112,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": 72
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": -39
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
            "position": 102,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 133,
            "movement": -47
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
            "position": 96,
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
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 96
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 146,
            "movement": -7
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 152,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 127,
            "movement": 24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 130,
            "movement": 24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 139,
            "movement": 24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
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
            "position": 27,
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
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 23
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 50,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 173,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
    "title": "Jogodo",
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
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 50
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
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
            "position": 50,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": -47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": 17
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": -48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": -6
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
            "position": 105,
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
            "position": 149,
            "movement": null,
            "status": "new"
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 20,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": -4
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
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": 45
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": 49
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": -65
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 147,
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
            "position": 172,
            "movement": 11
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
            "position": 28,
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
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
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
    "title": "More Love, Less Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 62,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 111,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 183,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": -36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -2
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
            "movement": 13
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
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 151,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -1
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
            "position": 160,
            "movement": -7
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
            "position": 35,
            "movement": -1
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
            "position": 41,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
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
            "position": 179,
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
    "title": "Made In Lagos",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 85,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -3
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
    "title": "Daddy Yo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 9
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
            "position": 129,
            "movement": 51
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
            "position": 92,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24"
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
            "position": 149,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": null,
            "status": "new"
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
            "position": 72,
            "movement": 81
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": 21
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
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 115,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
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
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
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
            "position": 200,
            "movement": -30
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
            "country": "BM",
            "name": "Bermuda",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joy",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 49,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
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
            "position": 69,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 142,
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
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 120,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Piece of My Heart",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23dec0c82a7bb91327d048b0019004bd/500x500-000000-80-0-0.jpg"
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
            "position": 147,
            "movement": -5
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
            "position": 95,
            "movement": -7
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
            "position": 171,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d18f71e03fb2831c2ceac5b8285f068/500x500-000000-80-0-0.jpg"
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
            "position": 110,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
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
            "position": 182,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
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
            "position": 184,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 127,
            "movement": 0
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
            "position": 120,
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
  