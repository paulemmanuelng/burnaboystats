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
  export const liveChartsUpdated = "2026-08-23";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Oriadé",
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 15,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 19,
            "movement": 42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 28,
            "movement": 3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 28,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": 81
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 38,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 45,
            "movement": 32
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 73,
            "movement": 29
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 77,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": 11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 90,
            "movement": 27
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 113,
            "movement": 36
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 120,
            "movement": -89
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 148,
            "movement": 33
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": -16
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
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
            "position": 43,
            "movement": 56
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "B4 B4",
    "platforms": [
      {
        "platform": "Apple Music",
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 11,
            "movement": 34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 35,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 40,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 162,
            "movement": 26
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 190,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 48,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 52,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 78,
            "movement": -12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 137,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": -10
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
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 78,
            "movement": null,
            "status": "new"
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
            "position": 14,
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
            "position": 2,
            "movement": 3
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 199,
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
            "position": 50,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 59,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
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
            "position": 45,
            "movement": 13
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 56,
            "movement": 80
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 75,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": -27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 179,
            "movement": -35
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 182,
            "movement": -153
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
            "position": 26,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 165,
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
            "position": 12,
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
            "position": 6,
            "movement": 78
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
            "movement": 12
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 72
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 80
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 134,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": -9
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
            "position": 114,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 186,
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
            "position": 2,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -38
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
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
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
            "position": 137,
            "movement": -5
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
    "title": "Already Falling",
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
            "position": 8,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": -16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
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
            "position": 21,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 107,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
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
            "position": 11,
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
            "position": 4,
            "movement": 4
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
            "movement": 32
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
            "position": 25,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 15,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 88,
            "movement": 30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": -32
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 126,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 179,
            "movement": -98
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
            "position": 4,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 13,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 65
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 48
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": -83
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
            "position": 78,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
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
            "position": 71,
            "movement": 4
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
            "position": 84,
            "movement": -57
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
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 44,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 73,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 159,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 159,
            "movement": -126
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": -25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
            "movement": -56
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
            "movement": -39
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
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 73,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": 70
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 116,
            "movement": -52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
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
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fall",
    "platforms": [
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 153,
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
            "position": 64,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 85,
            "movement": -32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 144,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": 46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
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
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 111
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tell Everybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -2
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
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
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
            "position": 112,
            "movement": -3
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
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
            "position": 100,
            "movement": 2
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
            "position": 36,
            "movement": -2
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
            "position": 11,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 40,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 54,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 143,
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
            "position": 45,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
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
            "position": 55,
            "movement": 4
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
            "position": 56,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -17
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
            "position": 56,
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
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -16
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
            "position": 79,
            "movement": 9
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
            "position": 112,
            "movement": -11
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
            "position": 105,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -34
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
            "position": 96,
            "movement": -1
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 174,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
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
    "title": "Guide",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -11
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
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Constantly",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
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
            "position": 129,
            "movement": 11
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
            "position": 60,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Zanzibar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -25
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
            "position": 187,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Julie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
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
            "position": 193,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "My Light",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
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
            "position": 156,
            "movement": -4
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
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": 141
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "position": 41,
            "movement": -28
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
            "position": 79,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/49e60bcc245747acb829b0a96723c176/500x500-000000-80-0-0.jpg"
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
            "position": 24,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriade",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 87,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 69,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Intro",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 109
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All Of You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Sound",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": 72
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/80fe4f71f92865be0d0f8d558cf54a72/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Twe Twe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": -88
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 52,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AWAY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 150,
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
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
            "position": 173,
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
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Shakabulizzy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Aye",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
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
            "position": 193,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/132d4358890f5675bd291681812647e5/500x500-000000-80-0-0.jpg"
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
            "position": 194,
            "movement": -5
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
    "title": "Nakupenda: I Love You Summer Pack",
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
  