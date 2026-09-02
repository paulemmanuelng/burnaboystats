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
  export const liveChartsUpdated = "2026-09-02";
  
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 1
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
            "country": "CM",
            "name": "Cameroon",
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
            "country": "ML",
            "name": "Mali",
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
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 5,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 6,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 10,
            "movement": 47
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 18,
            "movement": 35
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 23,
            "movement": 20
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
            "position": 30,
            "movement": 6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": 96
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": -5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 42,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 47,
            "movement": -8
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
            "position": 60,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 64,
            "movement": 19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 69,
            "movement": -22
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 73,
            "movement": 31
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 95,
            "movement": 28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 134,
            "movement": -19
          },
          {
            "country": "FR",
            "name": "France",
            "position": 144,
            "movement": 20
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 152,
            "movement": 16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 160,
            "movement": -125
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 173,
            "movement": -28
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
            "position": 21,
            "movement": -3
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
            "movement": 2
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
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": -2
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": 1
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
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 27
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
            "country": "QA",
            "name": "Qatar",
            "position": 94,
            "movement": 31
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
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": -60
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
            "position": 9,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 39,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": -1
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
            "position": 3,
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
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 9
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
            "position": 10,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 57,
            "movement": -38
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
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 67,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": 33
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": -45
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 88,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -42
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 109,
            "movement": -71
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": -74
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -86
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 151,
            "movement": null,
            "status": "new"
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
            "position": 190,
            "movement": 8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 194,
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
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 1
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
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": -38
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
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": -80
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 53,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
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
            "position": 27,
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
            "position": 95,
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
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 5
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
            "position": 10,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": 6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 41,
            "movement": 139
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": 22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 70,
            "movement": -2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 74,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -37
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": -25
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 109,
            "movement": -45
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 117,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": 8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 167,
            "movement": null,
            "status": "new"
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
            "position": 10,
            "movement": -4
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
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 5
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 12,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 29,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 32,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 34,
            "movement": 26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 60,
            "movement": -9
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
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 123,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": -32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": -91
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 171,
            "movement": -61
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
            "position": 20,
            "movement": -3
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -39
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 124,
            "movement": 37
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 127,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 134,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
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
            "position": 186,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -132
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 194,
            "movement": -101
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
            "movement": -3
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 1
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
            "position": 10,
            "movement": -1
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
            "position": 12,
            "movement": 1
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
            "position": 14,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 64,
            "movement": 59
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
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
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
            "position": 113,
            "movement": -16
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
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 23
          },
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": 3
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
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -7
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
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": -62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
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
            "position": 77,
            "movement": -66
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
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 6
          },
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
            "position": 53,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 64,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 47
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
            "position": 124,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": null,
            "status": "new"
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
            "position": 63,
            "movement": 1
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
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": -4
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
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 54,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 10
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
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
            "position": 7,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 83,
            "movement": -48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 85,
            "movement": -9
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
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": -85
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": 23
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
            "position": 105,
            "movement": 13
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
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 21
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
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -1
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
            "position": 59,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": -59
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": -17
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
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": -1
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
            "position": 45,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 1
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
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -3
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
            "position": 97,
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 2
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
            "position": 49,
            "movement": -4
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
            "position": 125,
            "movement": -7
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
            "position": 21,
            "movement": -3
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
            "position": 39,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -2
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
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
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
            "position": 83,
            "movement": -7
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 0
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
            "position": 81,
            "movement": 6
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
            "position": 141,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
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
            "position": 31,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": 44
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": -69
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
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
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": -67
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": -62
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
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 7
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
            "position": 92,
            "movement": 3
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
            "position": 122,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 4
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
            "position": 28,
            "movement": 7
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
            "position": 72,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": 1
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
            "position": 56,
            "movement": 3
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
            "position": 35,
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
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 63
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
            "movement": -92
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
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
            "position": 89,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 69,
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
            "position": 135,
            "movement": -20
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
            "position": 150,
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
            "position": 115,
            "movement": -5
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
            "position": 90,
            "movement": 4
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
            "position": 145,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
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
            "position": 138,
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
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": null,
            "status": "new"
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
            "position": 134,
            "movement": -1
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
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
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
            "position": 60,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 89
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
            "position": 110,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
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
            "position": 75,
            "movement": -3
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
            "position": 96,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
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
            "position": 155,
            "movement": -1
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
            "position": 8,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 3
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
            "movement": 0
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
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 34
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
            "movement": 11
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
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
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
            "position": 50,
            "movement": -7
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
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 71
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
            "position": 74,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 108,
            "movement": 5
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
            "position": 40,
            "movement": 1
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
            "position": 67,
            "movement": -4
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
            "position": 56,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 179,
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
            "movement": 5
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 3
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
            "position": 168,
            "movement": 29
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
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
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 180,
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
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -17
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
            "position": 47,
            "movement": 32
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
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 65
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 7
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
            "position": 197,
            "movement": null,
            "status": "new"
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
            "position": 162,
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
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": -2
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
            "position": 100,
            "movement": -10
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
            "position": 127,
            "movement": 18
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
            "position": 149,
            "movement": 2
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
            "position": 119,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
    "title": "Bad Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 7
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
            "position": 59,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 184,
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
    "title": "Happiness ​(f​eat​. Asake, Gunna​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 189,
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
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
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
    "title": "Start",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
    "title": "Kings Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
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
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 196,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "kind": "song",
    "platforms": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skating",
    "kind": "song",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Get it Right",
    "platforms": [],
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
  