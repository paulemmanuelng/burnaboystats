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
  export const liveChartsUpdated = "2026-09-08";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
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
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 4,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 4,
            "movement": 0
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
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 8,
            "movement": 5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 12,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 23,
            "movement": -12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 29,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 38,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 38,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 41,
            "movement": -23
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 47,
            "movement": 93
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 51,
            "movement": 26
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 58,
            "movement": -8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": -57
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 67,
            "movement": 29
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 90,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 100,
            "movement": -56
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 108,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 139,
            "movement": -94
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 154,
            "movement": -103
          },
          {
            "country": "FR",
            "name": "France",
            "position": 167,
            "movement": -12
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 191,
            "movement": 4
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 200,
            "movement": -129
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
            "position": 23,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 22,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 49,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 63,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 40
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 129,
            "movement": 67
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 141,
            "movement": -45
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 193,
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": -50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
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
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
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
            "position": 8,
            "movement": -2
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 30,
            "movement": 35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": 18
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 65,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 101,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 124,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": 21
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 124,
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
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -27
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
            "position": 32,
            "movement": 25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
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
            "position": 25,
            "movement": -2
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
            "position": 36,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude",
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
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 18,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 35,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 36,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 46,
            "movement": 7
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
            "position": 25,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 140,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
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
            "position": 2,
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
            "position": 16,
            "movement": 159
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
            "position": 35,
            "movement": -30
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": 45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 26,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 37,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 40,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 62,
            "movement": 17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 77,
            "movement": -63
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 92,
            "movement": 67
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 108,
            "movement": 38
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": -29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 186,
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
            "position": 81,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 5,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 16,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 17,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 34,
            "movement": 40
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 75
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": 47
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": -54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": -80
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 175,
            "movement": 20
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 189,
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
            "position": 129,
            "movement": -52
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 32,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 59,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": -25
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": 9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 88,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -73
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -65
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 150,
            "movement": -41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 150,
            "movement": 49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 172,
            "movement": -94
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": -1
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
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 50,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 57,
            "movement": 26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 79,
            "movement": -16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 103,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 196,
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
            "position": 99,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 48,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": -51
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
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
            "position": 32,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": -44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": 9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 197,
            "movement": -85
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
            "movement": 168
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -15
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
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
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
            "position": 9,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 75,
            "movement": 50
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 106,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": -36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 10,
            "movement": 1
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
            "position": 122,
            "movement": 16
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
            "movement": 22
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
            "position": 13,
            "movement": -2
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
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 18,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 21,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 42
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 60,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -32
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 137,
            "movement": 5
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
            "position": 72,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 66
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 158,
            "movement": -22
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 23,
            "movement": 1
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
            "movement": 5
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
            "position": 15,
            "movement": 46
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 61,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": -49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 190,
            "movement": -11
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
            "position": 92,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": 119
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 150,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 187,
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
            "position": 104,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
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
            "position": 30,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": 61
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 131,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": -63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
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
            "position": 29,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 31
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 187,
            "movement": 6
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
            "position": 92,
            "movement": 14
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
            "position": 15,
            "movement": -13
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
            "position": 68,
            "movement": 28
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
            "position": 27,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 76
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": -57
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -13
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": -65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 191,
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
            "position": 4,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 23
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "position": 24,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 18
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 64,
            "movement": -47
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": 78
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 164,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": -40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": -46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -48
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 67
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 66
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -37
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 72,
            "movement": 0
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
            "position": 42,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": 72
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 198,
            "movement": -64
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "position": 127,
            "movement": 4
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 95
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 155,
            "movement": -28
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
            "movement": -4
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
            "position": 77,
            "movement": -3
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
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": -59
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 8
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
            "position": 154,
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
            "position": 185,
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
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": -98
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
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
            "position": 131,
            "movement": -4
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
            "position": 77,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 116,
            "movement": 31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 196,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 167,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
            "position": 53,
            "movement": -5
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
            "position": 65,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
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
            "position": 102,
            "movement": -87
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
            "position": 168,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 153,
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
            "position": 62,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 36
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
            "position": 68,
            "movement": -9
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
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
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
            "position": 70,
            "movement": -4
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
            "movement": 62
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": 50
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
            "position": 70,
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
            "position": 66,
            "movement": 1
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
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
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
            "position": 71,
            "movement": -17
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
            "position": 60,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
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
            "position": 120,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": 33
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
            "position": 150,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 190,
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
            "position": 118,
            "movement": -18
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
            "position": 113,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 179,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
            "movement": -10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
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
    "title": "Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 127,
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
            "position": 189,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 0
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
            "position": 198,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -15
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
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1984fe149317952b26571c66ffe624dd/500x500-000000-80-0-0.jpg"
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
            "position": 179,
            "movement": -13
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
            "movement": 2
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
            "position": 56,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yoga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": -18
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
            "position": 95,
            "movement": -8
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 133,
            "movement": 7
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
            "country": "MT",
            "name": "Malta",
            "position": 45,
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
    "title": "Whine",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
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
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": 23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 141,
            "movement": -14
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
            "position": 143,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wave",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
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
            "position": 138,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
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
    "title": "Dull",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
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
    "title": "Getting Paid ​(f​eat​. Asake, Wizkid, Skillibeng​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skating",
    "platforms": [
      {
        "platform": "iTunes",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
  