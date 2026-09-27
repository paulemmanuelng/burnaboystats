// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=davido from kworb's artist page.
  //
  // PLATFORM chart data for Davido: where each release is sitting RIGHT
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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-09-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-27T12:07Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Nakupenda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 41,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 116,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": 38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
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
            "position": 62,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 68,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
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
            "position": 52,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NO",
            "name": "Norway",
            "position": 177,
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
            "position": 37,
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
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "B4 B4",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 26,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 185,
            "movement": 4
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 30,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 158,
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
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
            "position": 8,
            "movement": 1
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
            "position": 125,
            "movement": -29
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
            "position": 11,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriadé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": 20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 138,
            "movement": 15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 138,
            "movement": 16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 141,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 170,
            "movement": -64
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 190,
            "movement": -131
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
            "position": 12,
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
            "position": 3,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 25,
            "movement": 145
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": 31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 90,
            "movement": 17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": 41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -21
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "position": 25,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": 70
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
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
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 72,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -29
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
            "position": 141,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
            "movement": -26
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
            "movement": 18
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
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
            "position": 39,
            "movement": 1
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
            "position": 171,
            "movement": -5
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
            "position": 12,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": 41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
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
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
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
            "position": 85,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
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
            "position": 67,
            "movement": -3
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
            "position": 39,
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
            "position": 33,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 123,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 176,
            "movement": -18
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
            "position": 90,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -4
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
            "position": 130,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 140
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 109
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 47
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 107,
            "movement": 53
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 186,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
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
            "position": 93,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": -30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Better Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
            "movement": -29
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
            "position": 125,
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
            "position": 172,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 185,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 13,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 63,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -7
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
            "position": 88,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": 51
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": 64
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 11,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 24
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 89
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": 45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": -45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -9
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
            "position": 172,
            "movement": -30
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
            "position": 76,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 25
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FIA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Champion Sound",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": 1
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
            "position": 69,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 165,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OVER DEM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CFMF",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 23,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Like",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing Grace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Be There Still",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dun Rich",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 161,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f964c43946dc4486205f00b98a75176d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Activate",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/329ae36eecf839ca2e82a46203a10cbc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Son of Mercy - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/50d12a3358fb88c810b8c9231ced0cd6/500x500-000000-80-0-0.jpg"
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
  