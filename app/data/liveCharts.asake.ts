// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=asake from kworb's artist page.
  //
  // PLATFORM chart data for Asake: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-08-30";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 5,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 6,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 15,
            "movement": 15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 17,
            "movement": 21
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 18,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 22,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 26,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 28,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 31,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 31,
            "movement": 18
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 37,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": -25
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 47,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 52,
            "movement": 7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 62,
            "movement": -12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 74,
            "movement": -58
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 78,
            "movement": -57
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 94,
            "movement": -7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 105,
            "movement": -86
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 120,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 137,
            "movement": -38
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 143,
            "movement": -26
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 147,
            "movement": -79
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 155,
            "movement": 43
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 194,
            "movement": -129
          },
          {
            "country": "FR",
            "name": "France",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 200,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 17,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 44,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 58,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 69,
            "movement": -16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 75,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": -37
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 156,
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
            "position": 22,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 95,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 179,
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
            "position": 52,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
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
            "position": 5,
            "movement": -2
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
            "position": 14,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 16,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 40,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 42,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 63,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 68,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 79,
            "movement": 7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 93,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 131,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 137,
            "movement": -67
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 188,
            "movement": -7
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
            "position": 8,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
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
            "position": 10,
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
            "position": 3,
            "movement": 53
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
            "position": 7,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 58
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 11,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 16,
            "movement": 14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 17,
            "movement": 57
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 36,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 45,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": 49
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 95,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": -47
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": 10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 189,
            "movement": -127
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 196,
            "movement": -5
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
            "position": 66,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": 45
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": -33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 116,
            "movement": 42
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 126,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 129,
            "movement": 0
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 93,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 18,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -141
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
            "position": 32,
            "movement": -6
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
            "movement": -49
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 28,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 29,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 30,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 79
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 71,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 166,
            "movement": -109
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 179,
            "movement": -119
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
            "position": 50,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 57
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": -13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 40,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 65,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -33
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 122,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 128,
            "movement": -99
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": -114
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
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
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": -13
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 46,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 51,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 51,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": 86
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 129,
            "movement": -85
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 153,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
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
            "position": 54,
            "movement": -49
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
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
            "position": 60,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
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
            "position": 4,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 21,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 100,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 135,
            "movement": 23
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
            "position": 108,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 15,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 18,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 62,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": -40
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
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -73
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
            "movement": -9
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
            "position": 62,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 32
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 58,
            "movement": -24
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 58,
            "movement": 45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 75,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": -47
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 161,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
            "movement": -13
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
            "position": 14,
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
            "position": 50,
            "movement": -46
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
            "position": 144,
            "movement": 3
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
            "position": 89,
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
            "position": 11,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": -18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 124,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 160,
            "movement": -37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
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
            "position": 37,
            "movement": -9
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
            "position": 65,
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
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
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
            "position": 57,
            "movement": 19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
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
            "position": 99,
            "movement": -14
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
            "position": 197,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 70,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": -39
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 128,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -8
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
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 49
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": -72
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
            "position": 34,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
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
            "position": 27,
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
            "position": 29,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": -78
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 134,
            "movement": -117
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": -44
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
            "position": 22,
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
            "position": 68,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -49
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 199,
            "movement": -60
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
            "position": 17,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 2
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": 98
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": 12
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
            "position": 84,
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
            "position": 5,
            "movement": -2
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
            "position": 22,
            "movement": 62
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": -37
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
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": -53
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": -90
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
            "position": 75,
            "movement": -16
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
            "position": 67,
            "movement": -50
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": 77
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": -56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": 12
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
            "position": 132,
            "movement": -33
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
            "position": 181,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
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
            "position": 47,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
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
            "position": 158,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 110
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
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
            "position": 137,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
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
            "position": 60,
            "movement": 1
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
            "position": 198,
            "movement": -137
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": 4
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
            "position": 58,
            "movement": 2
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
            "position": 78,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
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
            "position": 70,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 80,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
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
            "position": 193,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 2
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
            "movement": 3
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
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": -18
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
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
            "position": 101,
            "movement": -89
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": -11
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
            "position": 190,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 173,
            "movement": -61
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
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
            "position": 90,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": 43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -75
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Olorun",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
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
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Gratitude - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -8
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 19,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Boy - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Great Guy",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Psycho",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness ​(f​eat​. Asake, Gunna​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What's Up My G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mogbe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Muse",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Getting Paid ​(f​eat​. Asake, Wizkid, Skillibeng​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
  