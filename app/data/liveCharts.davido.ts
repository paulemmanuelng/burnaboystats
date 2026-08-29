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
  export const liveChartsUpdated = "2026-08-29";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
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
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 18,
            "movement": 76
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 194,
            "movement": -70
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 17,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 70,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 127,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": 8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 157,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -15
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 5
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 4,
            "movement": 73
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 15,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 16,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 25,
            "movement": 6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 31,
            "movement": 72
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 42,
            "movement": 117
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 45,
            "movement": 8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 46,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 59,
            "movement": -27
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 62,
            "movement": -20
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 98,
            "movement": -20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 129,
            "movement": 57
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 148,
            "movement": -29
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 156,
            "movement": -63
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 167,
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
            "position": 89,
            "movement": -12
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
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 16,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 190,
            "movement": -9
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
            "position": 35,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 52,
            "movement": -8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 67,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
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
            "position": 35,
            "movement": 8
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 5,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 65,
            "movement": 109
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 92,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -9
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
            "position": 44,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 199,
            "movement": -22
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
            "position": 19,
            "movement": 6
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
            "position": 13,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": 89
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": -46
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": -18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 116,
            "movement": 24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": -23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
            "movement": -41
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 199,
            "movement": -127
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 34,
            "movement": 98
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -13
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": 25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": -9
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 200,
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
            "position": 5,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 51
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 100,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
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
            "position": 38,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 146,
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
            "position": 18,
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
            "position": 185,
            "movement": -161
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
            "position": 24,
            "movement": 5
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
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": 6
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
            "position": 29,
            "movement": -24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": -6
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
            "position": 101,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
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
            "position": 134,
            "movement": 6
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
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": 39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": 43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": 13
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
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
            "position": 65,
            "movement": 4
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
            "position": 15,
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
            "movement": 3
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
            "position": 32,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 67
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": 44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": 34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 38
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 182,
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": -43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": 36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
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
            "position": 67,
            "movement": -10
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
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 19
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
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
    "title": "A Better Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": -24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": -93
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": -35
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
            "position": 194,
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
            "position": 77,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": 45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 85,
            "movement": 47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": 19
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
            "position": 60,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": 31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": -67
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": 27
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
            "position": 27,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
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
            "position": 74,
            "movement": -12
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
            "position": 63,
            "movement": 30
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
    "title": "Fall",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 13,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -4
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
            "position": 92,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": -37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -37
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 96,
            "movement": -94
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
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 11,
            "movement": 1
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
            "position": 42,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 42,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
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
            "position": 48,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
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
            "position": 155,
            "movement": -55
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
            "position": 66,
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
    "title": "On The Road",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
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
            "position": 168,
            "movement": -59
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
            "position": 191,
            "movement": -158
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
            "position": 49,
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
    "title": "Amazing Grace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 6
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
            "position": 71,
            "movement": -10
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
            "position": 67,
            "movement": -9
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
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -34
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -38
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
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
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
            "position": 95,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 65
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": 60
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "movement": -45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
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
    "title": "Julie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": -41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
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
            "movement": 13
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
            "position": 110,
            "movement": 62
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
    "title": "Ogechi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 72,
            "movement": -65
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 128,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
    "title": "Nwa Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
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
    "title": "Odo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -10
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
            "country": "UG",
            "name": "Uganda",
            "position": 160,
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
    "title": "10 Kilo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
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
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": -27
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 113,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 181,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Titanium",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
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
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
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
    "title": "Don't Know",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
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
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 189,
            "movement": 7
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
  