// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=rema from kworb's artist page.
  //
  // PLATFORM chart data for Rema: where each release is sitting RIGHT
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
    "title": "Secondhand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 8,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 14,
            "movement": 6
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 20,
            "movement": -7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 28,
            "movement": 6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 32,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 39,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 57,
            "movement": 13
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 81,
            "movement": 54
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 133,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 137,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 171,
            "movement": 12
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 172,
            "movement": -106
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 180,
            "movement": -28
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 188,
            "movement": -33
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 47,
            "movement": 16
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 54,
            "movement": 10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 60,
            "movement": 18
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 66,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 92,
            "movement": 25
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 95,
            "movement": 20
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 96,
            "movement": 14
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 121,
            "movement": 23
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 123,
            "movement": 19
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 148,
            "movement": 28
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 148,
            "movement": 24
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": 36
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 171,
            "movement": 20
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 199,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 85,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 135,
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
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 128,
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
            "position": 5,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -16
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -39
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
            "position": 49,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 13,
            "movement": 70
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -61
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": 93
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 20
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 133,
            "movement": -77
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -64
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": -19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 100,
            "movement": -68
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 107,
            "movement": 72
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 126,
            "movement": 57
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": -57
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 192,
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
            "country": "MA",
            "name": "Morocco",
            "position": 179,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 90,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": -30
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 101,
            "movement": 60
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 119,
            "movement": -46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 93,
            "movement": -61
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -79
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 188,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 67,
            "movement": 10
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
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 71
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 153,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 56
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 102,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
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
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -39
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
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 124,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": -30
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
            "position": 120,
            "movement": 5
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
            "position": 134,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 65,
            "movement": -55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 168,
            "movement": -77
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 168,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 22,
            "movement": 37
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 23,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AU",
            "name": "Australia",
            "position": 61,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -49
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
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
            "country": "MA",
            "name": "Morocco",
            "position": 164,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -3
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
            "position": 101,
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
            "position": 45,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Trouble Maker",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
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
            "position": 3,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mara",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "4AM",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Commando - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d386058066ab6b2b140515ed5c591a1f/500x500-000000-80-0-0.jpg"
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
  