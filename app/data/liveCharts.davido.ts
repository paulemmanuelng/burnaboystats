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
  export const liveChartsUpdated = "2026-09-02";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "B4 B4",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 4,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 104
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
            "position": 37,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 179,
            "movement": 13
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
            "position": 7,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 17,
            "movement": 2
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -39
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriadé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 23,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 24,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 39,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 46,
            "movement": 33
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 58,
            "movement": 24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": 7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 59,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": -35
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 109,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 114,
            "movement": -59
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 123,
            "movement": -16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 138,
            "movement": -104
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 189,
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
            "position": 72,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": -6
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
            "position": 82,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 139,
            "movement": 3
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
            "position": 42,
            "movement": 12
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
            "position": 88,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -5
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
            "position": 121,
            "movement": 0
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 3,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
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
            "position": 38,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -9
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 4
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
            "movement": -1
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
            "position": 38,
            "movement": -29
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
            "position": 12,
            "movement": -1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": 12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 77,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": -43
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": 90
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": -18
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 155,
            "movement": -41
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 162,
            "movement": -91
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
            "movement": -47
          },
          {
            "country": "ML",
            "name": "Mali",
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 92,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -10
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
            "position": 43,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 143,
            "movement": -8
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
            "position": 52,
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
            "position": 10,
            "movement": 9
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
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 46,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 183,
            "movement": 12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": -19
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
            "position": 90,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": 20
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
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
            "position": 133,
            "movement": -13
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
            "position": 9,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 60
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": -56
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 189,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 200,
            "movement": -56
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
            "position": 20,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": -24
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 137,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
            "movement": -39
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
            "position": 91,
            "movement": -2
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
            "position": 69,
            "movement": -1
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
            "movement": null,
            "status": "re"
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
            "position": 16,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -5
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
            "position": 37,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
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
            "position": 172,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": null,
            "status": "new"
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
            "position": 41,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
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
            "country": "AI",
            "name": "Anguilla",
            "position": 53,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": -35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
            "movement": -38
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
            "position": 23,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 16
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
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": -98
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
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
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": -66
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 132,
            "movement": -84
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 12
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 91,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -19
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
            "position": 159,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -159
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
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 191,
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
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -15
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
            "position": 88,
            "movement": -10
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
            "movement": -38
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
            "position": 53,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": -76
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
            "position": 63,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 46,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -32
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
            "position": 83,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 112
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "On The Road",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 46
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
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
            "position": 20,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Guide",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Spend Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 153,
            "movement": 36
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 50,
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
            "position": 78,
            "movement": 74
          }
        ]
      }
    ],
    "kind": "song"
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
            "movement": 30
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
            "position": 41,
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
    "title": "The Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 190,
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
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": 3
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
            "position": 66,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Constantly",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fans Mi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 10,
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
    "title": "Nwa Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/74fb63756975ed8644a5519be4ad39fc/500x500-000000-80-0-0.jpg"
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
            "position": 25,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 108,
            "movement": 48
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Julie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
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
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": -62
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Para",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 165,
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
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Offa Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 182,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 195,
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
            "country": "LC",
            "name": "St. Lucia",
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 185,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Odo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
    "title": "Intro",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
  