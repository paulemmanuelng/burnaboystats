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
  export const liveChartsUpdated = "2026-11-25";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-25T21:46Z";
  
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
            "position": 52,
            "movement": 43
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 73,
            "movement": 11
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 101,
            "movement": 15
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 101,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 138,
            "movement": 60
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 151,
            "movement": -129
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 154,
            "movement": 37
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 163,
            "movement": -38
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 175,
            "movement": -29
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 176,
            "movement": -45
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": -26
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
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 82,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 116,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": 17
          },
          {
            "country": "US",
            "name": "United States",
            "position": 142,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 144,
            "movement": 6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 151,
            "movement": 6
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 158,
            "movement": 7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 169,
            "movement": -7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 179,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 189,
            "movement": -37
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 195,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 200,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 91,
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
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 82,
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 99,
            "movement": -33
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": -42
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": -143
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 198,
            "movement": -71
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
            "position": 3,
            "movement": -2
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
            "position": 11,
            "movement": 72
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
    "title": "MONEY CONSTANT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 1
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
            "position": 17,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 53,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 139,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
            "movement": 24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 186,
            "movement": -58
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
            "position": 101,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 116,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": -30
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
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -10
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 51,
            "movement": 44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 105,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 105,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
            "movement": -29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
            "movement": -36
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
            "position": 200,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
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
            "position": 28,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": -20
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
            "position": 60,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
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
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 84,
            "movement": 89
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": -36
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": -37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 180,
            "movement": -68
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 189,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 55,
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
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 10
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
            "position": 6,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": -56
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": -107
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
            "position": 75,
            "movement": 11
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
            "position": 60,
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
            "country": "TN",
            "name": "Tunisia",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
            "movement": -47
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 86,
            "movement": 114
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": -78
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
            "position": 69,
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
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 116
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -57
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 179,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 172
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 187,
            "movement": -154
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
            "position": 55,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
            "movement": -88
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
            "movement": 22
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
            "position": 6,
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
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 72,
            "movement": 89
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 46
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": -70
          },
          {
            "country": "SI",
            "name": "Slovenia",
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
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 80,
            "movement": 53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
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
            "position": 184,
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
            "position": 189,
            "movement": -5
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
            "position": 60,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -26
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": 5
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
            "position": 126,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": 77
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 77,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
            "movement": -39
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
            "position": 102,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": 70
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 168,
            "movement": -19
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
            "position": 146,
            "movement": 2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": 96
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 60
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
            "position": 173,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
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
    "title": "Daddy Yo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 193,
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
            "position": 174,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bdda644ec4fca3d3c10425b7091fa74d/500x500-000000-80-0-0.jpg"
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
            "movement": 0
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
            "position": 99,
            "movement": 12
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
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": 13
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
            "position": 140,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
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
            "position": 140,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
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
            "position": 96,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 63,
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
            "position": 77,
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
    "title": "Lagos to Kampala",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -22
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
            "position": 162,
            "movement": -6
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
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -7
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
            "position": 59,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 183,
            "movement": -12
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
    "title": "Can't Believe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 17,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f25b7d9807558219cbe7646ad27e092/500x500-000000-80-0-0.jpg"
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
    "title": "Blessed",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
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
    "title": "Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -6
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
            "position": 174,
            "movement": 9
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
            "position": 192,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 164,
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
    "title": "Show You the Money",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
            "movement": -28
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
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pakurumo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
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
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23b8a10d5e4139b677723fe9886b163d/500x500-000000-80-0-0.jpg"
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
            "position": 193,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cddddd44067c884f6959f8d8c229fab8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Piece of My Heart",
    "platforms": [
      {
        "platform": "iTunes",
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
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23dec0c82a7bb91327d048b0019004bd/500x500-000000-80-0-0.jpg"
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
            "position": 197,
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
  