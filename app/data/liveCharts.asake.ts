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
  export const liveChartsUpdated = "2026-09-01";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 4,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 7,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 11,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 18,
            "movement": 31
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 35,
            "movement": 21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 35,
            "movement": 10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": 96
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 43,
            "movement": -33
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 46,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 47,
            "movement": -21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 53,
            "movement": -14
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 57,
            "movement": -31
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 59,
            "movement": 114
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 61,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 64,
            "movement": 19
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 98,
            "movement": 25
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 104,
            "movement": -27
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 115,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 145,
            "movement": -47
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 157,
            "movement": 23
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 167,
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
            "position": 18,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 10,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 45,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 47,
            "movement": 19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 64,
            "movement": 92
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": -38
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 74,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": -47
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 86,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": -25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 106,
            "movement": -44
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 109,
            "movement": 44
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 130,
            "movement": -61
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 156,
            "movement": -11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 178,
            "movement": -55
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 180,
            "movement": -45
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 24,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 29,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 42,
            "movement": 147
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 45,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 49,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 73,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 98,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 125,
            "movement": -68
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 176,
            "movement": -98
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
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
            "position": 7,
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
            "position": 9,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 22,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 40,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 50,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 58,
            "movement": 13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": 10
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 92,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 141,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
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
            "position": 3,
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
            "position": 22,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 14,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 17,
            "movement": 82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 29,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 51,
            "movement": 78
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 60,
            "movement": 54
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": 23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 30
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 98,
            "movement": 51
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 110,
            "movement": -24
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 139,
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
            "position": 17,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 45,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": -38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 61,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 117,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 127,
            "movement": 5
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
            "position": 23,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 109,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": -32
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
            "position": 39,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
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
            "position": 26,
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
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
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
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 19,
            "movement": 50
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 33,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": 13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 38,
            "movement": 150
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": 39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 95
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -11
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 60,
            "movement": 128
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 64,
            "movement": 90
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 67,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": 33
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 110,
            "movement": 40
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 170,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": -132
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 197,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 61,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": -33
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 93,
            "movement": -66
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -39
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 147,
            "movement": -14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": -94
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
            "position": 9,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 28,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 87,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 123,
            "movement": -37
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 140,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 191,
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
            "position": 97,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 46
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 82,
            "movement": 55
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 134,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
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
            "position": 12,
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
            "position": 12,
            "movement": 65
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
            "position": 138,
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
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 44,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 64,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -56
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -71
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
            "position": 64,
            "movement": -3
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
            "position": 88,
            "movement": -10
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
            "position": 46,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 12
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 76,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 83,
            "movement": -48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": -85
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -85
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
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 39,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": 52
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
            "position": 62,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
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
            "position": 8,
            "movement": 0
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
            "position": 14,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 53,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": -69
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 191,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": -92
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
            "position": 24,
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
            "position": 95,
            "movement": -83
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
            "position": 186,
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
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 24,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": -27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
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
            "position": 30,
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
            "position": 115,
            "movement": -95
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": 66
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": -63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": 32
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
            "position": 20,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 7
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": 47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": 55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": 25
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": -49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 190,
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
            "position": 3,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 39,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": -54
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
            "position": 76,
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
            "position": 3,
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
            "position": 59,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": -67
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
            "movement": 0
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
            "position": 75,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 136,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
            "movement": -50
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
            "movement": 0
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
            "country": "SR",
            "name": "Suriname",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 63
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": -42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 179,
            "movement": -24
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
            "position": 104,
            "movement": -8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": -39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
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
            "position": 59,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": 46
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
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
            "position": 134,
            "movement": -15
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
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
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
            "position": 72,
            "movement": -2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
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
            "position": 110,
            "movement": 7
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 51
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
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
            "position": 154,
            "movement": 2
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -31
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": 71
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": -20
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 43
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 147,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
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
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 61,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 10
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
            "position": 113,
            "movement": -2
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
            "position": 168,
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
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": 6
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
            "position": 67,
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
            "position": 63,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": 24
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
            "position": 95,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
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
            "position": 149,
            "movement": -9
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
            "position": 63,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": 6
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
            "position": 170,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
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
    "title": "Omo Ope",
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
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
            "position": 140,
            "movement": -12
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
            "position": 88,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 119,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 156,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 197,
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
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -16
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
            "position": 171,
            "movement": 7
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
    "title": "Skating",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 69,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Start",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What's Up My G",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 151,
            "movement": 3
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
            "position": 40,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Muse",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 129,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 138,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Getting Paid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 158,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 158,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "My Heart",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Olorun",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
  