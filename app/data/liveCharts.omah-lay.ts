// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=omah-lay from kworb's artist page.
  //
  // PLATFORM chart data for Omah Lay: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-08-20";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "CLARITY OF MIND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 94,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 112,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 113,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 114,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 133,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 162,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 169,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 172,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 187,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Boy Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 49,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 50,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 86,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 88,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 103,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 134,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 142,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 155,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 156,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 185,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 188,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I AM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 66,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
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
            "position": 41,
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
            "position": 69,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 127,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
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
            "position": 3,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -23
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
            "position": 118,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": 3
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
            "position": 111,
            "movement": 4
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
            "position": 20,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Influence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 123,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": 0
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
            "position": 179,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 30,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 38,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 107,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 170,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
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
            "position": 47,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": null,
            "status": "re"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 92,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "i'm a mess",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 169,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 170,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 182,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
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
            "position": 152,
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
            "position": 92,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Infinity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Get Layd - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 124,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 166,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 184,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 190,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Gut Genug",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 19
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
            "position": 174,
            "movement": 22
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BY",
            "name": "Belarus",
            "position": 68,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4f5c145b06c62888141b2a7eabad4b3/500x500-000000-80-0-0.jpg"
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
            "position": 25,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 128,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Waist",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
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
            "position": 56,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 183,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forever",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 104,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 193,
            "movement": -32
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DON'T LOVE ME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WATER SPIRIT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Namek",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 66,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 135,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "reason",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 186,
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
            "position": 64,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": 26
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "understand",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebaba8c1ec645c396628a92f7aca871b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 64,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1724f66c550648b497bd7ccec64b9179/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "how to luv",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "COPING MECHANISM",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "10 Toes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CANADA BREEZE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What Have We Done - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 0
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
  