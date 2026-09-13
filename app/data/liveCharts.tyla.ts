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
  export const liveChartsUpdated = "2026-09-13";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 13,
            "movement": 12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 14,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -11
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 46,
            "movement": -11
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 47,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": -25
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 62,
            "movement": 10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 66,
            "movement": 78
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 69,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 81,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 101,
            "movement": -36
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 102,
            "movement": 57
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 130,
            "movement": -24
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 142,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 145,
            "movement": -48
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 148,
            "movement": 38
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 149,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
            "movement": -66
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 199,
            "movement": -41
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
            "position": 19,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "NO",
            "name": "Norway",
            "position": 36,
            "movement": 47
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 42,
            "movement": 33
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 44,
            "movement": 56
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": 47
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 58,
            "movement": 29
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 64,
            "movement": 32
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 65,
            "movement": 34
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 70,
            "movement": 22
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 80,
            "movement": 14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 98,
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": -19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 87,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": -19
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 141,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 196,
            "movement": -46
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
            "position": 88,
            "movement": 36
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5abac68deeb720d1aaea68ae179608df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Water",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 94,
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
            "country": "YE",
            "name": "Yemen",
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
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SHE DID IT AGAIN",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 55,
            "movement": -14
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 158,
            "movement": -57
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 179,
            "movement": -12
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 171,
            "movement": -54
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 199,
            "movement": 1
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 196,
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
    "title": "Breathe Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/373ba020e129cca1360301be7dc5701a/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cd07d0b83bcc8a17928619b3771e42df/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PUSH 2 START",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/65d6063121e97ede49869ceedc250875/500x500-000000-80-0-0.jpg"
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
  