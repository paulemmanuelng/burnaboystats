// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=tyla from kworb's artist page.
  //
  // PLATFORM chart data for Tyla: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-08-17";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "A*POP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 16,
            "movement": 5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 17,
            "movement": 4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 18,
            "movement": 38
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 22,
            "movement": -9
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 23,
            "movement": 77
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 24,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 79
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 28,
            "movement": 20
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 29,
            "movement": 75
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": -3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 33,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 33,
            "movement": -19
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 34,
            "movement": 31
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 40,
            "movement": 6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 41,
            "movement": -10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 42,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 44,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": 8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 48,
            "movement": -21
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": 26
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 49,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 59,
            "movement": -3
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 59,
            "movement": 51
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 64,
            "movement": 43
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 64,
            "movement": 6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 65,
            "movement": -16
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 66,
            "movement": 10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 68,
            "movement": -19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 69,
            "movement": -18
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 80,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 80,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 84,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 17
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 86,
            "movement": 47
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 87,
            "movement": 50
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 89,
            "movement": 16
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 90,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 97,
            "movement": 20
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 101,
            "movement": -18
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 101,
            "movement": 30
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 104,
            "movement": 43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": 31
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 114,
            "movement": 9
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 120,
            "movement": -49
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 135,
            "movement": -35
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 143,
            "movement": 44
          },
          {
            "country": "US",
            "name": "United States",
            "position": 147,
            "movement": -10
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 157,
            "movement": 5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 170,
            "movement": -57
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 178,
            "movement": -13
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 179,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 181,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 184,
            "movement": 15
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 186,
            "movement": -144
          },
          {
            "country": "FR",
            "name": "France",
            "position": 189,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 191,
            "movement": -3
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 191,
            "movement": -31
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 196,
            "movement": -8
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 199,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 159,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SHE DID IT AGAIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": 17
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 66,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 120,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 144,
            "movement": 54
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": 6
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 199,
            "movement": -55
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 33,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 71,
            "movement": 22
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 107,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 142,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NO",
            "name": "Norway",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 32,
            "movement": 41
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 78,
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
            "country": "SE",
            "name": "Sweden",
            "position": 105,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CHANEL",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 46,
            "movement": 26
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 52,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 63,
            "movement": 19
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 81,
            "movement": 16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 82,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 86,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 90,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 91,
            "movement": -9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 96,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 98,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 184,
            "movement": 15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 200,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 13,
            "movement": 9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 19,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": 35
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 33,
            "movement": 17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 108,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IS IT LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 46,
            "movement": 47
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": 103
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": 29
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 49,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 53,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FAIRYTALE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 54,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": 31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 108,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TYLA +",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": 20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 167,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 174,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -29
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DOUBLE BLIND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 124,
            "movement": 28
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 174,
            "movement": -21
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PUSH 2 START",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IS IT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": 33
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
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KISS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MR. NONCHALANT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 150,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DYNAMITE",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LA",
            "name": "Laos",
            "position": 14,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9de2c8e816295f124dd7b227f7fa668/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Talk to Me",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
            "position": 74,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cd07d0b83bcc8a17928619b3771e42df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Water",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
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
  