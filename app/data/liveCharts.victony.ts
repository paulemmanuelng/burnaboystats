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
  export const liveChartsUpdated = "2026-09-01";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "SLICK",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 8,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 12,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 17,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 17,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 21,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 27,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": 118
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 57,
            "movement": 28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 64,
            "movement": 31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 68,
            "movement": 9
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 91,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 97,
            "movement": 97
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 110,
            "movement": -22
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 112,
            "movement": -15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 130,
            "movement": 45
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 143,
            "movement": 47
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 150,
            "movement": -11
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 152,
            "movement": 31
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 153,
            "movement": -131
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 179,
            "movement": -27
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 188,
            "movement": -27
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
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 10,
            "movement": -1
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
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 18,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 20,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 28,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 49,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 50,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 69,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 72,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 73,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 81,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 84,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 126,
            "movement": -27
          },
          {
            "country": "US",
            "name": "United States",
            "position": 156,
            "movement": -6
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
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 22,
            "movement": 52
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": -26
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 67,
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
            "country": "MU",
            "name": "Mauritius",
            "position": 10,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 83,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 161,
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
            "position": 4,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 40,
            "movement": 21
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
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": -6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 27,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 37,
            "movement": 68
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 38,
            "movement": 30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 40,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 40,
            "movement": 111
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 49,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": -36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 65,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 65,
            "movement": -15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 68,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
            "movement": -16
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 81,
            "movement": -71
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 83,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 86,
            "movement": 17
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 91,
            "movement": 24
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 103,
            "movement": -36
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 122,
            "movement": -55
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 123,
            "movement": 77
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 135,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 150,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": 39
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 200,
            "movement": -147
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 200,
            "movement": -85
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -9
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": -86
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": -65
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 192,
            "movement": -27
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
            "position": 167,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": -1
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
            "position": 33,
            "movement": -3
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
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 24
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 83,
            "movement": -57
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
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": -19
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
            "position": 127,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 161,
            "movement": 6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 54,
            "movement": -2
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
            "position": 34,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
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
            "position": 37,
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
            "position": 34,
            "movement": -12
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
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": 41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
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
            "position": 144,
            "movement": -19
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
            "movement": null,
            "status": "new"
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
            "position": 46,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
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
            "position": 53,
            "movement": -2
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
            "position": 35,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
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
            "position": 46,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
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
            "position": 55,
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
            "position": 157,
            "movement": -15
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
            "position": 127,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
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
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": 18
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
            "position": 101,
            "movement": -4
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
            "position": 161,
            "movement": -12
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
            "position": 92,
            "movement": -5
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
            "position": 153,
            "movement": -21
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
            "position": 103,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MISSIN PIECE",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -15
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
            "position": 160,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FYNE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AMAZON",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risk",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 170,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
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
            "position": 160,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
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
  