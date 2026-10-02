// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=seyi-vibez from kworb's artist page.
  //
  // PLATFORM chart data for Seyi Vibez: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-02T22:18Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "SWAGUU",
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
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 19,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 21,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 40
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 53,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 70,
            "movement": -13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 83,
            "movement": -13
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 90,
            "movement": 27
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 96,
            "movement": -54
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 109,
            "movement": -32
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 137,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 141,
            "movement": -101
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
            "position": 86,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f0e7e1508278c9c558f8e0a6ea0de3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
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
            "position": 10,
            "movement": -7
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
            "position": 39,
            "movement": 1
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
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f0e7e1508278c9c558f8e0a6ea0de3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Back 2 U",
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
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 5
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 140,
            "movement": -19
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
            "position": 9,
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
            "position": 136,
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
            "position": 11,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/625f9538bb2952a5b160aef95aeb7ed0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ILOME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 117
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": -49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -37
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 109,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -5
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
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PANSA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": -33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -4
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
            "position": 14,
            "movement": -6
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
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "VOLUME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": -63
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -32
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
            "position": 11,
            "movement": -6
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
            "position": 4,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GOD",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": -35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
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
            "position": 15,
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
            "position": 86,
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
            "position": 20,
            "movement": -1
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
            "position": 8,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3f47680977ad5f31c014b7d49127ce8a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MELANIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": -4
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
            "position": 27,
            "movement": -9
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
            "position": 41,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "EL JAJA",
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
            "position": 44,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
            "movement": -90
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
            "position": 17,
            "movement": -5
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
            "position": 29,
            "movement": -2
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Diamonds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -74
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
            "position": 16,
            "movement": -5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 23,
            "movement": -1
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
            "position": 21,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AKPAN AKPARI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -44
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -7
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
            "position": 198,
            "movement": -162
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
            "position": 15,
            "movement": -1
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
            "position": 26,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SWAGUU",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
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
            "position": 37,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
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
            "position": 33,
            "movement": -13
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
            "position": 103,
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
            "position": 24,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f0e7e1508278c9c558f8e0a6ea0de3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUJI MOTO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
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
            "position": 26,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f0e7e1508278c9c558f8e0a6ea0de3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ALUBARIKA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
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
            "position": 25,
            "movement": -8
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
            "position": 64,
            "movement": -2
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
            "position": 32,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MY HEALER",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -45
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ALAFIA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
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
            "position": 35,
            "movement": -7
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
            "position": 40,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/48381e9f42170865f4eaa548d3b014c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Thy Kingdom Come",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -21
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
            "position": 17,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6954c3e880713a3d27089b7a0ad8570d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OBLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
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
            "position": 47,
            "movement": -13
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
            "position": 45,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6954c3e880713a3d27089b7a0ad8570d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Big Big Things",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f160ebeb49e3bcae4edadc24aa7d1cc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Loseyi Professor",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -24
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
            "position": 58,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/44b6b558a027125f253bbf9538541db4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Billion Dollar Baby 2.0",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 170,
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
            "position": 50,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd6ee4f7ca4e570c6a0b6319f7e57730/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Karma",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
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
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8ebad7f5af3f521ca579199d9e05150/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Vibe Till Thy Kingdom Come",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -27
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
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6954c3e880713a3d27089b7a0ad8570d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NSNV",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 88,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3f47680977ad5f31c014b7d49127ce8a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -5
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
            "position": 171,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Where I'm from",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -8
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
            "position": 103,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b4fe00e347d44e64c014306d1f5f778b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MARIO KART",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aa8d9ee07662959c9f52b4e9282a0f54/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nahamciaga - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Doha",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/44b6b558a027125f253bbf9538541db4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUJI MOTO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 59
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Man of The Year",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8ebad7f5af3f521ca579199d9e05150/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pressure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee26d796ad7fe0cc761309d449f775ae/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HOW ARE YOU",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65338596d2138717cab1e115fd412599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GWAGWALADA",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7f89da381e2508e30a82f7dc2d18287f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNIVERSE",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cf3225fd6ccebd61ef2d071f59b1a5d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Instagram",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c75b2cd0abfbe74aa799b7e04caa9018/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/44b6b558a027125f253bbf9538541db4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Billion Dollar Baby",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd6ee4f7ca4e570c6a0b6319f7e57730/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Vibez Incorporation Mixtape, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Children of Africa - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "album"
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
  