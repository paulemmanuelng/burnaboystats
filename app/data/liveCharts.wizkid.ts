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
  export const liveChartsUpdated = "2026-11-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-08T06:07Z";
  
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
            "position": 31,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 59,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 79,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 87,
            "movement": 6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 113,
            "movement": 12
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 113,
            "movement": 14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 120,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 123,
            "movement": -19
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 126,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 128,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 135,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 139,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 143,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 150,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 174,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 189,
            "movement": -33
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BZ",
            "name": "Belize",
            "position": 34,
            "movement": 44
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 39,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 57,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 67,
            "movement": -6
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 69,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 102,
            "movement": -25
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 112,
            "movement": -83
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": 15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 135,
            "movement": 54
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 143,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 156,
            "movement": 10
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 167,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 175,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 175,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 17,
            "movement": -15
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 99,
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 75
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 48,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 71,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 109,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 135,
            "movement": 34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": 39
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 191,
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
            "position": 94,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 100,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 176,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 200,
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
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": 40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 124,
            "movement": 66
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
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
            "position": 47,
            "movement": -3
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
            "position": 140,
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
            "position": 95,
            "movement": -76
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 57,
            "movement": 47
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 84
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 100,
            "movement": 45
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": -27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
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
            "position": 35,
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
            "position": 194,
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
            "position": 79,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 103,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": -63
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 134,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 146,
            "movement": 37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": 45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -24
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
            "position": 48,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -5
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 13,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 21
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 62
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": -54
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": -59
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
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
    "title": "Come Closer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 42,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 100,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 122,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": 32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 135,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
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
            "position": 31,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": 21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": 53
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 29
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
            "position": 90,
            "movement": -16
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
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": 29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 164,
            "movement": -128
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
            "position": 109,
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": 13
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 131
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -74
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 23
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
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 15,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 51,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
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
            "position": 76,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": 53
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": 41
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
            "position": 43,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 107
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 34,
            "movement": 23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 56,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": 47
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 136,
            "movement": 24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 153,
            "movement": 3
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
            "position": 50,
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
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "position": 113,
            "movement": -9
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
            "position": 32,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": -120
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -107
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
            "position": 60,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 79,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 25
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 148,
            "movement": -6
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
            "position": 183,
            "movement": 6
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
            "position": 45,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
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
            "position": 145,
            "movement": 2
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
            "position": 47,
            "movement": 3
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
            "position": 96,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": 3
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -8
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
            "position": 150,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 96,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 90
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
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
            "position": 171,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/022426a926bc2f38da080d86e690b6be/500x500-000000-80-0-0.jpg"
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
            "position": 165,
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
    "title": "Daddy Yo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 25
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
            "position": 105,
            "movement": 8
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
            "position": 112,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": 36
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 156,
            "movement": 3
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
            "position": 30,
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
            "position": 158,
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
            "position": 140,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Apple Music Live: Wizkid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06"
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
            "position": 189,
            "movement": -58
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
            "position": 64,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e6885c10ca9b754020bd97ae4df040a/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": 9
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
            "position": 87,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Caro",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/26df7d9096b19210b3bccce5eca135dc/500x500-000000-80-0-0.jpg"
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
            "position": 128,
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
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
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
    "title": "Bend Down Pause",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MT",
            "name": "Malta",
            "position": 26,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7e868a4868f2dbf0ca02ccab6c1166fe/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f25b7d9807558219cbe7646ad27e092/500x500-000000-80-0-0.jpg"
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
            "position": 167,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fbf2218aa7d8262098c19097bd10cb21/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nights In The Sun",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a3e5df13a8fa9f76a2125b8c27dc164f/500x500-000000-80-0-0.jpg"
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
            "position": 151,
            "movement": 46
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fake Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea13491b73bc307a022486992ce5a56b/500x500-000000-80-0-0.jpg"
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
            "position": 187,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4e3a6bee57e9a7a41c399565a7cf72c1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 163,
            "movement": -72
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 181,
            "movement": 6
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
            "position": 143,
            "movement": 2
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
  