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
  export const liveChartsUpdated = "2026-09-03";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 3
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
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 7,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 8,
            "movement": -2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 8,
            "movement": 2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 9,
            "movement": 102
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 15,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 23,
            "movement": 6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 29,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 29,
            "movement": 40
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 36,
            "movement": 12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 37,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": -16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 47,
            "movement": 87
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 49,
            "movement": 47
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 56,
            "movement": 104
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 60,
            "movement": -19
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 63,
            "movement": -15
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 67,
            "movement": -44
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 73,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 74,
            "movement": 21
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 76,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 76,
            "movement": 69
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 81,
            "movement": 74
          },
          {
            "country": "FR",
            "name": "France",
            "position": 143,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 191,
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
            "position": 42,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 50
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 33,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 64
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 54,
            "movement": 61
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": 28
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 69,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 73,
            "movement": 88
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 81,
            "movement": -24
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 86,
            "movement": 108
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 42
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 114,
            "movement": -28
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 116,
            "movement": 35
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 125,
            "movement": -37
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 141,
            "movement": 58
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": -74
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": -32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -105
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 175,
            "movement": 14
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 179,
            "movement": -106
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 194,
            "movement": -111
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 198,
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
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 1
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": 4
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 41,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 51,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 53,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 62,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
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
            "position": 4,
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
            "position": 5,
            "movement": 6
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
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 26,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 75,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 93,
            "movement": -57
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 123,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 129,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 137,
            "movement": -9
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
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -17
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
            "movement": 1
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
            "movement": 8
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
            "position": 37,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
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
            "country": "NG",
            "name": "Nigeria",
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
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 22,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 25,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 62,
            "movement": 5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 77,
            "movement": 48
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 80,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 102,
            "movement": -31
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 128,
            "movement": -34
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 130,
            "movement": 25
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
            "movement": 20
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 9,
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
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -5
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
            "position": 8,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 26,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -20
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": 3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 42,
            "movement": -30
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 52,
            "movement": 49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 55,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 62,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": 61
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 63,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 56
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 92,
            "movement": 13
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 174,
            "movement": -51
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
            "position": 41,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 29,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 33,
            "movement": 37
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 70,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 93,
            "movement": 55
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
            "movement": -43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -36
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 131,
            "movement": 54
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 133,
            "movement": -20
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 137,
            "movement": -20
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "position": 33,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 72,
            "movement": 114
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 84,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": 55
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": 98
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 125,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 139,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 149,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": 53
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 101,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 173,
            "movement": -14
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
            "movement": 30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 67,
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
            "position": 12,
            "movement": -1
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
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 47,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 63,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
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
            "position": 54,
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
            "position": 9,
            "movement": 7
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
            "position": 38,
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
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 36,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 56,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 94,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
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
            "position": 111,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 52,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": -54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
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
            "position": 10,
            "movement": -1
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
            "position": 69,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -49
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
            "position": 50,
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
            "position": 53,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -76
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 184,
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
            "position": 100,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": 57
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": 39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
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
            "position": 24,
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
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
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
            "position": 88,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
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
            "position": 27,
            "movement": 3
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
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": -77
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
            "position": 86,
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
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": -48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
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
            "position": 28,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 43,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": -40
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
            "position": 168,
            "movement": -124
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
            "position": 31,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": 31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 180,
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
            "position": 96,
            "movement": -5
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
            "position": 73,
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
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 83,
            "movement": -68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
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
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 118
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 156,
            "movement": -90
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": 29
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
            "position": 83,
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
            "position": 40,
            "movement": 8
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
            "position": 74,
            "movement": -10
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
            "position": 53,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": 45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -7
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
            "position": 81,
            "movement": 17
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -1
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
            "position": 96,
            "movement": -13
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
            "position": 57,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 130,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
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
            "position": 126,
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
            "position": 70,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": -38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 46
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 69
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
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
            "position": 147,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -24
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 16
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 188,
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
            "position": 75,
            "movement": 9
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
            "position": 66,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": -49
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
            "position": 48,
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
            "position": 125,
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
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 33,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 143,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
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
            "position": 80,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": -26
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
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": 54
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": 11
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
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 85,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": -40
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
            "position": 133,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": 10
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
            "position": 189,
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
    "title": "Psycho",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": 100
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
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
            "position": 122,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 200,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "country": "GM",
            "name": "Gambia",
            "position": 107,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -5
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
            "position": 188,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 170,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -9
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
            "position": 159,
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
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 21
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
            "position": 94,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 119,
            "movement": 74
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
            "position": 150,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 171,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 108,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 132,
            "movement": -1
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
            "position": 131,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 82,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
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
    "title": "Mogbe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 182,
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
    "title": "Reason",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 187,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kings Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
            "position": 115,
            "movement": -106
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 188,
            "movement": 6
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
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You (PBUY)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
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
  