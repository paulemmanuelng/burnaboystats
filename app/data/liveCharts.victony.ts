// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=victony from kworb's artist page.
  //
  // PLATFORM chart data for Victony: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-07";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "SLICK",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 3,
            "movement": 15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 23,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 24,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": -6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 28,
            "movement": 105
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 50,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 57,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 70,
            "movement": 65
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 77,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 81,
            "movement": 38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 93,
            "movement": 22
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 98,
            "movement": 87
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 103,
            "movement": -18
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 110,
            "movement": -27
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 131,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": -19
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 145,
            "movement": 33
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 177,
            "movement": -20
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 198,
            "movement": 2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 18,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 30,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 73,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 74,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 78,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 94,
            "movement": -10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 94,
            "movement": -13
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 137,
            "movement": -11
          },
          {
            "country": "US",
            "name": "United States",
            "position": 161,
            "movement": -5
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
            "position": 6,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 10,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": -5
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 117,
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
            "position": 16,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3be386ed5da6f28d57ce4808d7d07802/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 6,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 181
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 18,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 36,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 38,
            "movement": 56
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 38,
            "movement": 10
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": 130
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": 40
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 52,
            "movement": 18
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 58,
            "movement": -44
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 64,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 71,
            "movement": 33
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 75,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 79,
            "movement": 90
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 82,
            "movement": 67
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 82,
            "movement": 35
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 107,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 113,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 118,
            "movement": -26
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 183,
            "movement": -96
          },
          {
            "country": "FR",
            "name": "France",
            "position": 197,
            "movement": -48
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FRE$H",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 130,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
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
            "position": 174,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": -8
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
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
            "position": 44,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 52,
            "movement": 95
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 77,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": -15
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 133,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": -42
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
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
            "position": 43,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2FRESH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": -62
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 169,
            "movement": -53
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
            "movement": -133
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
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
            "position": 93,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TWIN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
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
            "position": 70,
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
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risk",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": -54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": -49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -89
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TOO LIT",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -9
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
            "position": 158,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PINO",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -3
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
            "position": 137,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ARMED & DANGEROUS",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
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
            "position": 173,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jaga Jaga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TYPO",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hello",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jailer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AMAZON",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PITY THIS BOY",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OHEMA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Babylon",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2d663b939236f5b42b169e75ec16fc14/500x500-000000-80-0-0.jpg"
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
  