// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=bnxn from kworb's artist page.
  //
  // PLATFORM chart data for BNXN: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
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
  export const liveChartsUpdated = "2026-09-03";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Back Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 13,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 106
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": 73
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 130,
            "movement": -30
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 148,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -12
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
            "position": 40,
            "movement": -37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -28
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
            "position": 13,
            "movement": 0
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
            "position": 47,
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
            "position": 19,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": 133
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": -62
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
            "position": 24,
            "movement": -2
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
            "position": 75,
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
            "position": 14,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pidgin & English",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": 69
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": -73
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
            "position": 65,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8c088ce8f133901305e47938b4f981a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CAPTAIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": 3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
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
            "position": 22,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Game Needs Us - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 78,
            "movement": -7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -87
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "RnB",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 49
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 169,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -31
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
            "position": 38,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Very Soon",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 62
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 42
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
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sincerely, Benson",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": 28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8c088ce8f133901305e47938b4f981a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "POE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12b39d25fb640779483f443dcbedf748/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Days",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 116,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/99ab461acf3040d231c824f66893a811/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 37
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
            "position": 179,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rum & Soda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
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
            "position": 136,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Since '97",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 101,
            "movement": -5
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
            "position": 8,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8b3586d040e4d5ef670f3987dcfc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PRAY",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 6
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
            "position": 68,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0ce9ce5b82ac7a394e54078a804577ac/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Laye Mi",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": 7
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
            "position": 89,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Already",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 3
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
            "position": 169,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 34
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
            "position": 90,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7f89da381e2508e30a82f7dc2d18287f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Emotional High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 159,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jies",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Set Up",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bae Bae",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 91,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/589173416a36ce1395e49b85c4e6a9f8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Romeo Must Die",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 110,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/10b6b03e8cd85b81b9038c881e91f77f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Alone",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Feeling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d91495fa367186de1d1e217b5b1bdaaf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Still In Charge - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Sorry I'm Late",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/01e3a69fce9ce6cb0acf2e44f1be8280/500x500-000000-80-0-0.jpg"
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
  export const liveCountryCount = new Set(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
  ).size;
  
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
  