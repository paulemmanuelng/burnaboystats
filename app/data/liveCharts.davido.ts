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
  export const liveChartsUpdated = "2026-09-11";
  
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 26,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 61,
            "movement": 38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": -27
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 9,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 72,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 88,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 169,
            "movement": -24
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
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 71,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": -17
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
            "position": 7,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
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
            "position": 4,
            "movement": 2
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
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 127,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 198,
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 37,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -9
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
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
            "position": 25,
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
            "position": 30,
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
            "position": 73,
            "movement": null,
            "status": "new"
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 1
          },
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
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 44,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 65,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 72,
            "movement": 18
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 97,
            "movement": -11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 99,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 108,
            "movement": 25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": -43
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 128,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": 40
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 151,
            "movement": 4
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
            "position": 69,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 52,
            "movement": 100
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 116,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
            "movement": -80
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
            "movement": -63
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
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
            "position": 17,
            "movement": 1
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
            "position": 35,
            "movement": -12
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
            "position": 17,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": -22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": -46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 177,
            "movement": -51
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 184,
            "movement": -124
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -79
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 196,
            "movement": -57
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IL",
            "name": "Israel",
            "position": 58,
            "movement": -39
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": 30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 10,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -20
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
            "position": 18,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": null,
            "status": "re"
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
            "position": 97,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": 40
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
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
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
            "position": 65,
            "movement": -39
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 178,
            "movement": -35
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
            "position": 10,
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
            "position": 25,
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
            "position": 51,
            "movement": -10
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
            "position": 20,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": -23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": -84
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": 15
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
            "position": 66,
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
            "position": 59,
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
            "position": 68,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 58,
            "movement": 69
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": -27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 101,
            "movement": 23
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 192,
            "movement": -94
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 52,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": 56
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 65,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -65
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": 65
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 134,
            "movement": -78
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
            "movement": -71
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 200,
            "movement": -75
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 81,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": -50
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": -62
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 63
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 152,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -44
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -6
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
            "position": 195,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
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
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 93,
            "movement": -17
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
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
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": 3
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -106
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
            "position": 100,
            "movement": -9
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
            "position": 52,
            "movement": -28
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": -105
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
            "position": 99,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": -23
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
            "position": 187,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 67
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 199,
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
    "title": "The Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": 38
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 22,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tell Everybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -101
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Maserati",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 40,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fans Mi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 105,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/49e60bcc245747acb829b0a96723c176/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "On The Road",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
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
    "title": "Like",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
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
            "position": 62,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NA MONEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
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
    "title": "All of You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 174,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 184,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Shakabulizzy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/acd552a8f2ba4e9f448a876eacb65d4d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
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
    "title": "Dun Rich",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 154,
            "movement": -64
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f964c43946dc4486205f00b98a75176d/500x500-000000-80-0-0.jpg"
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
            "position": 187,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/329ae36eecf839ca2e82a46203a10cbc/500x500-000000-80-0-0.jpg"
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
            "position": 198,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
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
  },
  {
    "title": "Baddest Boy",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0c0d1ba509c2a896097f11edcc957edf/500x500-000000-80-0-0.jpg"
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
  