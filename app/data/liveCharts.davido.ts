// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=davido from kworb's artist page.
  //
  // PLATFORM chart data for Davido: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-16";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
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
            "movement": 0
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
            "position": 3,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 42,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 84,
            "movement": 70
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": 67
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 176,
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
            "position": 14,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": 46
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 91,
            "movement": -19
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 159,
            "movement": -81
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": null,
            "status": "re"
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
            "position": 5,
            "movement": 107
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 59,
            "movement": -12
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
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
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
            "position": 2,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nakupenda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 67,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 159,
            "movement": -32
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
            "position": 61,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": -40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -46
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": null,
            "status": "re"
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
            "position": 29,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriadé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 13,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 14,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 39,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 85,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": 64
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 129,
            "movement": -54
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 131,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 160,
            "movement": -63
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 163,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": -17
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
            "position": 100,
            "movement": 0
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
            "position": 20,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": 103
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 71,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 78,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": 35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": 23
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 144,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 189,
            "movement": null,
            "status": "new"
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
            "position": 65,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": -31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": -59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": -99
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 189,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 28,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -13
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
            "position": 139,
            "movement": -47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": 28
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
            "position": 119,
            "movement": 5
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
            "position": 10,
            "movement": 8
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
            "position": 6,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
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
            "position": 21,
            "movement": 2
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
            "position": 17,
            "movement": 112
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
            "position": 121,
            "movement": -69
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
            "position": 18,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 77,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
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
            "position": 53,
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
            "position": 105,
            "movement": -66
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
            "position": 93,
            "movement": -43
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
            "position": 52,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": 40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": 94
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": 54
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 141,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 169,
            "movement": 30
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
            "position": 103,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
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
            "position": 67,
            "movement": 0
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
            "position": 70,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 184,
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
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
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
            "position": 184,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 26
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 99,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -57
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 48,
            "movement": -33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 23
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 17,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 72
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": 29
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
            "position": 13,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": 52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": 54
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
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
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": null,
            "status": "new"
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
            "position": 30,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": -5
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
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 74
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": 11
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
            "position": 70,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
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
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": -67
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
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
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 93,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 96,
            "movement": -18
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
            "position": 111,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lover Boy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": 0
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
            "position": 140,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Julie",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Titanium",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Electricity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dd374a6d185e39c6c4f847704afc827e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gbagbe Oshi",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/50d12a3358fb88c810b8c9231ced0cd6/500x500-000000-80-0-0.jpg"
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
            "position": 193,
            "movement": -110
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Way Too Fly",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 126,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/023dee1034571bf8438cfb99b1059866/500x500-000000-80-0-0.jpg"
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
            "position": 164,
            "movement": 10
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
            "position": 182,
            "movement": 0
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
  