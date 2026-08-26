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
  export const liveChartsUpdated = "2026-08-26";
  
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
            "movement": -1
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 11,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": 5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 13,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": 33
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 38,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 40,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 45,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 47,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 55,
            "movement": 3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 68,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": 60
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 92,
            "movement": -63
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 101,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 114,
            "movement": 18
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 149,
            "movement": -97
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 155,
            "movement": -47
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 159,
            "movement": -15
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 170,
            "movement": 12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 175,
            "movement": -144
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 186,
            "movement": 12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 188,
            "movement": -21
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
            "position": 57,
            "movement": -5
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
        "numberOnes": 2,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
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
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": -78
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 156,
            "movement": -77
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 197,
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 33,
            "movement": 16
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 62,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 69,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 101,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 145,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": null,
            "status": "new"
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
            "position": 4,
            "movement": 106
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
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 75,
            "movement": 88
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": -41
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
            "position": 41,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": 13
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 61,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
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
            "position": 43,
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
            "position": 14,
            "movement": 95
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
            "position": 43,
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 64,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 181,
            "movement": -70
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 189,
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
            "position": 13,
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
            "position": 139,
            "movement": -128
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
            "movement": 3
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
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 37,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 47,
            "movement": 44
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 49,
            "movement": 48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": -53
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": 11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 140,
            "movement": -31
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 142,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": -26
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 191,
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
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": -1
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
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": 89
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 67
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 168,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
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
            "position": 7,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -27
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
            "position": 109,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 6
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
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
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
            "position": 144,
            "movement": -19
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": -41
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 120,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
            "movement": -23
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
            "position": 13,
            "movement": 94
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
            "position": 30,
            "movement": -15
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 67,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": -1
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": -83
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
            "position": 144,
            "movement": -128
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 17,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 100,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
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
            "position": 81,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 198,
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
            "position": 72,
            "movement": 0
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 43,
            "movement": 47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 117,
            "movement": 72
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": -43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 116,
            "movement": 51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 199,
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
            "position": 34,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 30,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": 62
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": -21
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
            "position": 55,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 80
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 31,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -21
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
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -19
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
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
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
            "position": 61,
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
    "title": "Amazing Grace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -67
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
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
            "position": 118,
            "movement": -21
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
            "position": 10,
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
            "position": 42,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": 23
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 35,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -3
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
            "position": 199,
            "movement": -117
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
            "position": 98,
            "movement": -15
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
            "position": 143,
            "movement": -15
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": 13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 38,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tell Everybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -4
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
            "position": 117,
            "movement": -6
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
            "position": 79,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 1
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
            "position": 102,
            "movement": -14
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
            "position": 95,
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
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": -52
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 193,
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
    "title": "Guide",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -27
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
    "title": "Constantly",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
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
            "position": 167,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 110,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
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
            "position": 180,
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
    "title": "Fans Mi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 56,
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
            "position": 76,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/49e60bcc245747acb829b0a96723c176/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 49,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": -3
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
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
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
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 188,
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
            "position": 111,
            "movement": 5
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "My Light",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -4
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
            "position": 186,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 90,
            "movement": -13
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
            "position": 85,
            "movement": -28
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
            "country": "GM",
            "name": "Gambia",
            "position": 97,
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
    "title": "Maserati",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 4,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg"
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
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
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
            "position": 137,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nakupenda - I Love You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 51,
            "movement": -27
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
            "position": 197,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holiday",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -130
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Omo Baba Olowo: The Genesis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
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
  