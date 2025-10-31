// ✅ Venice Water Memory Dataset — Blue-Toned Harmonized (IDs 1–10)

export const waterStories = [
  {
    id: 1,
    identifier: "EUROPEANA_0001712",
    name: "Rio di San Trovaso",
    coordinates: [45.4316, 12.3275],
    story:
      "The Squero di San Trovaso is one of the oldest surviving gondola yards in Venice, representing centuries of maritime craftsmanship.",
    type: "Craft Heritage",
    color: "#0077b6", // Lagoon Blue
    period: "17th–20th century",
    image: "/images/water/san_trovaso.jpg",
    sources: [
      {
        label: "Europeana — Boatbuilder Guild Record (1712)",
        url: "https://www.europeana.eu/en/item/2022703/boatbuilders_guild_1712",
        type: "Primary Source",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Venetian Boatbuilders’ Guild",
      dateCreated: "1712",
      dateDigitized: "2021-06-10",
      format: "Manuscript (PDF)",
      rights: "CC BY 4.0",
      language: "Italian",
      coverage: "Venice, Dorsoduro",
    },
  },
  {
    id: 2,
    identifier: "EUROPEANA_0001820",
    name: "Rio dei Greci",
    coordinates: [45.4342, 12.3402],
    story:
      "This canal leads toward the Greek Orthodox quarter, symbolizing Venice’s multicultural water routes and faith coexistence.",
    type: "Faith Heritage",
    color: "#1a759f", // Canal Blue
    period: "16th–19th century",
    image: "/images/water/rio_dei_greci.jpg",
    sources: [
      {
        label: "Greek Institute of Venice — Parish Records",
        url: "https://istitutoellenicovenezia.org/",
        type: "Primary Source",
      },
    ],
    metadata: {
      repository: "Greek Institute of Venice",
      creator: "Greek Orthodox Community",
      dateCreated: "1650–1800",
      dateDigitized: "2019-04-15",
      format: "Parish Records (PDF, TIFF)",
      rights: "CC BY-NC 3.0",
      language: "Greek, Italian",
      coverage: "Venice, Castello",
    },
  },
  {
    id: 3,
    identifier: "EUROPEANA_0001978",
    name: "Rio della Fornace",
    coordinates: [45.4348, 12.3355],
    story:
      "This canal once supplied Murano-style glass workshops in Dorsoduro, transporting pigments and molten glass by boat.",
    type: "Artisan Heritage",
    color: "#468faf", // Misty Blue
    period: "17th–19th century",
    image: "/images/water/rio_della_fornace.jpg",
    sources: [
      {
        label: "Museo del Vetro di Murano — Furnace Plans",
        url: "https://museovetro.visitmuve.it/",
        type: "Primary Source",
      },
    ],
    metadata: {
      repository: "Museo del Vetro di Murano",
      creator: "Glassmakers’ Guild",
      dateCreated: "1780",
      dateDigitized: "2020-09-03",
      format: "Plans (JPEG, PDF)",
      rights: "CC BY-SA 4.0",
      language: "Italian",
      coverage: "Venice, Dorsoduro",
    },
  },
  {
    id: 4,
    identifier: "EUROPEANA_0001881",
    name: "Rio del Magazen",
    coordinates: [45.437, 12.3322],
    story:
      "Named from the Arabic 'makhzan', this canal once stored spices and fabrics, echoing Venice’s eastern trade and watery commerce.",
    type: "Trade Heritage",
    color: "#2c7da0", // Deeper Canal Blue
    period: "18th century",
    image: "/images/water/rio_del_magazen.jpg",
    sources: [
      {
        label: "Archivio di Stato — Dogana da Mar Inventories",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Primary Source",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Dogana da Mar",
      dateCreated: "1750",
      dateDigitized: "2021-01-22",
      format: "Ledger (TIFF, PDF)",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Venice, San Marco",
    },
  },
  {
    id: 5,
    identifier: "EUROPEANA_0001902",
    name: "Rio di San Pantalon",
    coordinates: [45.4382, 12.3269],
    story:
      "Near San Pantalon Church, where Fumiani’s painted ceiling mirrors onto canal waters — sacred art reflected by water.",
    type: "Spiritual Heritage",
    color: "#023e8a", // Deep Ocean Blue
    period: "17th century",
    image: "/images/water/san_pantalon.jpg",
    sources: [
      {
        label: "Wikimedia Commons — San Pantalon Frescoes",
        url: "https://commons.wikimedia.org/wiki/Category:San_Pantalon_(Venice)",
        type: "Visual Record",
      },
    ],
    metadata: {
      repository: "Parrocchia San Pantalon",
      creator: "G. A. Fumiani",
      dateCreated: "1690",
      dateDigitized: "2021-07-10",
      format: "Fresco (JPEG, PDF)",
      rights: "CC BY 4.0",
      language: "Italian",
      coverage: "Venice, Dorsoduro",
    },
  },
  {
    id: 6,
    identifier: "EUROPEANA_0002015",
    name: "Ponte dei Sospiri",
    coordinates: [45.4338, 12.3407],
    story:
      "Prisoners crossed this bridge from the Doge’s Palace to the New Prisons, catching a last glimpse of the lagoon — water as final freedom.",
    type: "Judicial Water Memory",
    color: "#03045e", // Venetian Midnight Blue
    period: "17th century",
    image: "/images/water/ponte_dei_sospiri.jpg",
    sources: [
      {
        label: "Archivio di Stato — Trial Records",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Primary Source",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Antonio Contino",
      dateCreated: "1603",
      dateDigitized: "2021-09-14",
      format: "Architectural Plan (PDF)",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Venice, San Marco",
    },
  },
  {
    id: 7,
    identifier: "VENICE_0002101",
    name: "Libreria Acqua Alta",
    coordinates: [45.4373, 12.3402],
    story:
      "Books are stored in gondolas and bathtubs to resist acqua alta floods — where knowledge literally floats above water.",
    type: "Flood Heritage",
    color: "#1d3557", // Dark Indigo Blue
    period: "20th–21st century",
    image: "/images/water/libreria_acqua_alta.jpg",
    sources: [
      {
        label: "Comune di Venezia — Acqua Alta Records",
        url: "https://www.comune.venezia.it/",
        type: "Municipal Archive",
      },
    ],
    metadata: {
      repository: "Private Archive — Libreria Acqua Alta",
      creator: "Luigi Frizzo",
      dateCreated: "2004",
      dateDigitized: "2022-03-11",
      format: "Photographs, Oral Testimony",
      rights: "CC BY-NC 4.0",
      language: "Italian",
      coverage: "Venice, Castello",
    },
  },
  {
    id: 8,
    identifier: "EUROPEANA_0002210",
    name: "Fontego dei Turchi",
    coordinates: [45.4406, 12.3289],
    story:
      "Former Ottoman merchant residence and warehouse on the Grand Canal — where trade, water and diplomacy intertwined.",
    type: "Trade & Diaspora Heritage",
    color: "#2c7da0", // Canal Blue
    period: "17th–19th century",
    image: "/images/water/fontego_dei_turchi.jpg",
    sources: [
      {
        label: "Europeana — Ottoman Trade Records",
        url: "https://www.europeana.eu",
        type: "Primary Source",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Venetian Senate",
      dateCreated: "1621",
      dateDigitized: "2020-05-22",
      format: "Trade Ledgers (PDF, TIFF)",
      rights: "Public Domain",
      language: "Italian, Ottoman Turkish",
      coverage: "Venice, Santa Croce",
    },
  },
  {
    id: 9,
    identifier: "VENICE_0002308",
    name: "Rialto Fish Market",
    coordinates: [45.4381, 12.3358],
    story:
      "For centuries, fishermen arrived by boat at dawn, unloading their catch on the water’s edge — a living rhythm of lagoon and trade.",
    type: "Commercial Water Heritage",
    color: "#1a759f", // Harbour Blue
    period: "11th–21st century",
    image: "/images/water/rialto_market.jpg",
    sources: [
      {
        label: "Archivio Storico — Rialto Market Records",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Primary Source",
      },
    ],
    metadata: {
      repository: "Archivio Storico del Comune di Venezia",
      creator: "Venetian Republic",
      dateCreated: "1097",
      dateDigitized: "2022-01-10",
      format: "Trade Records (Manuscript, PDF)",
      rights: "CC BY 4.0",
      language: "Italian",
      coverage: "Venice, San Polo",
    },
  },
    {
    id: 10,
    identifier: "VENICE_0002403",
    name: "Pozzo di Campo Santa Maria Formosa",
    coordinates: [45.4357, 12.3419],
    story:
      "Before modern aqueducts, Venice relied on rainwater wells. This historic cistern collected filtered freshwater beneath the square, sustaining local residents during dry seasons and high tides.",
    type: "Urban Water Infrastructure",
    color: "#468faf", // Misty Blue
    period: "15th–19th century",
    image: "/images/water/pozzo_santa_maria_formosa.jpg",
    sources: [
      {
        label: "Archivio di Stato — Water Supply Records",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Primary Source",
      },
      {
        label: "Europeana — Venetian Cistern Systems",
        url: "https://www.europeana.eu",
        type: "Technical Archive",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Venetian Public Works Office",
      dateCreated: "1492",
      dateDigitized: "2021-12-04",
      format: "Engineering Plans (PDF, TIFF)",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Venice, Castello district",
    },
  },
  {
    id: 11,
    identifier: "VENICE_0002501",
    name: "Ponte di Rialto",
    coordinates: [45.4380, 12.3357],
    story:
      "The Rialto Bridge arches over the Grand Canal, once the commercial heart of Venice. Merchants watched the tides bring ships from the Orient bearing silk, spices, and glass. Water and commerce were inseparable at this crossing.",
    type: "Trade Waterway",
    color: "#0077b6", // Lagoon Blue
    period: "16th century",
    image: "/images/water/ponte_di_rialto.jpg",
    sources: [
      {
        label: "Archivio di Stato — Rialto Trade Records",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Primary Source",
      },
      {
        label: "Europeana — Venetian Commercial Routes",
        url: "https://www.europeana.eu",
        type: "Digital Archive",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Antonio da Ponte",
      dateCreated: "1591",
      dateDigitized: "2022-02-18",
      format: "Architectural Plans (PDF)",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Venice, San Polo",
    },
  },
  {
    id: 12,
    identifier: "VENICE_0002502",
    name: "Arsenale & Bucintoro Dock",
    coordinates: [45.4396, 12.3531],
    story:
      "Within the Venetian Arsenal, the Bucintoro — the Doge’s ceremonial ship — was constructed. Each year during the Festa della Sensa, it sailed from this dock to 'marry' the sea in a ritual affirming Venice’s dominion over the waters.",
    type: "Ceremonial Maritime Heritage",
    color: "#023e8a", // Deep Ocean Blue
    period: "12th–18th century",
    image: "/images/water/arsenale_di_venezia.jpg",
    sources: [
      {
        label: "Archivio Storico — Bucintoro Ship Plans",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Primary Source",
      },
      {
        label: "Museo Storico Navale — Naval Ceremony Records",
        url: "https://www.marina.difesa.it",
        type: "Institutional Archive",
      },
    ],
    metadata: {
      repository: "Museo Storico Navale di Venezia",
      creator: "Venetian Arsenal Shipwrights",
      dateCreated: "1727",
      dateDigitized: "2021-05-20",
      format: "Ship Blueprints (TIFF, PDF)",
      rights: "CC BY 4.0",
      language: "Italian",
      coverage: "Venice, Castello district",
    },
  },
  {
    id: 13,
    identifier: "VENICE_0002503",
    name: "Festa della Sensa – Ponte della Paglia",
    coordinates: [45.4334, 12.3409],
    story:
      "From Ponte della Paglia, citizens watched the Doge board the Bucintoro for the ‘Marriage of the Sea’ ritual. A gold ring was thrown into the Adriatic, sealing Venice’s sacred and political union with water.",
    type: "Ritual Water Heritage",
    color: "#1a759f", // Canal Blue
    period: "1000–19th century",
    image: "/images/water/festa_della_sensa.jpg",
    sources: [
      {
        label: "Codex Trevisanus — Sposalizio del Mare",
        url: "https://www.europeana.eu",
        type: "Medieval Manuscript",
      },
      {
        label: "Biblioteca Marciana — Festa della Sensa Records",
        url: "https://marciana.venezia.sbn.it",
        type: "Historical Archive",
      },
    ],
    metadata: {
      repository: "Biblioteca Nazionale Marciana",
      creator: "Ducal Chancellery of Venice",
      dateCreated: "1177",
      dateDigitized: "2020-04-12",
      format: "Illuminated Manuscript (PDF)",
      rights: "Public Domain",
      language: "Latin, Venetian",
      coverage: "Venice, San Marco",
    },
  },
  {
    id: 14,
    identifier: "VENICE_0002504",
    name: "Pozzo di Campo San Barnaba",
    coordinates: [45.4338, 12.3262],
    story:
      "This public well collected rainwater filtered through sand beneath the square. It was once a vital water source and a social gathering point for Venetian residents.",
    type: "Urban Water Infrastructure",
    color: "#2c7da0", // Muted Sea Blue
    period: "15th–19th century",
    image: "/images/water/san_barnaba.jpg",
    sources: [
      {
        label: "Archivio di Stato — Venetian Well System",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Technical Archive",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Venetian Public Works Office",
      dateCreated: "1480",
      dateDigitized: "2022-01-08",
      format: "Cistern Plans (TIFF, PDF)",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Venice, Dorsoduro",
    },
  },
    {
    id: 15,
    identifier: "VENICE_0002505",
    name: "Murano Glass Canal",
    coordinates: [45.458, 12.3536],
    story:
      "Along this canal in Murano, barges carried molten glass and pigments between furnaces and artisans. The water reflected flames and sand, symbolizing the marriage of fire and water in glassmaking.",
    type: "Artisan Water Route",
    color: "#468faf", // Misty Lagoon Blue
    period: "13th–19th century",
    image: "/images/water/murano_glass_canal.jpg",
    sources: [
      {
        label: "Museo del Vetro — Glassmakers’ Guild Records",
        url: "https://museovetro.visitmuve.it/",
        type: "Primary Source",
      },
      {
        label: "Europeana — Murano Glass Collections",
        url: "https://www.europeana.eu",
        type: "Digital Archive",
      },
    ],
    metadata: {
      repository: "Museo del Vetro di Murano",
      creator: "Murano Glassmakers’ Guild",
      dateCreated: "1291",
      dateDigitized: "2020-09-11",
      format: "Guild Records (PDF, JPEG)",
      rights: "CC BY-SA 4.0",
      language: "Italian",
      coverage: "Murano, Venetian Lagoon",
    },
  },
  {
    id: 16,
    identifier: "VENICE_0002601",
    name: "MOSE Flood Barriers",
    coordinates: [45.4131, 12.4039],
    story:
      "The MOSE system is Venice’s modern defense against acqua alta. Massive underwater gates rise to block the Adriatic Sea, protecting the lagoon city while preserving its relationship with water.",
    type: "Modern Water Infrastructure",
    color: "#023e8a",
    period: "21st century",
    image: "/images/water/mose_barriers.jpg",
    sources: [
      {
        label: "MOSE Project — Consorzio Venezia Nuova",
        url: "https://www.mosevenezia.eu",
        type: "Technical Archive",
      },
      {
        label: "UNESCO — Venice and Rising Sea Levels",
        url: "https://www.unesco.org",
        type: "Report",
      },
    ],
    metadata: {
      repository: "Consorzio Venezia Nuova",
      creator: "Ministero delle Infrastrutture e dei Trasporti",
      dateCreated: "2003–2020",
      dateDigitized: "2023-03-14",
      format: "Engineering Reports (PDF)",
      rights: "All Rights Reserved",
      language: "Italian",
      coverage: "Venetian Lagoon Entrances",
    },
  },
  {
    id: 17,
    identifier: "VENICE_0002602",
    name: "Punta della Dogana",
    coordinates: [45.4303, 12.3365],
    story:
      "Where the Grand Canal meets the Giudecca Canal, the Dogana da Mar stood as Venice’s maritime customs point. Here, incoming ships were inspected, taxed, and recorded in water-bound ledgers.",
    type: "Trade & Maritime Heritage",
    color: "#0077b6",
    period: "15th–19th century",
    image: "/images/water/punta_della_dogana.jpg",
    sources: [
      {
        label: "Archivio di Stato — Dogana da Mar Ledgers",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Primary Source",
      },
      {
        label: "Europeana — Maritime Venice Collection",
        url: "https://www.europeana.eu",
        type: "Digital Archive",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Venetian Republic Customs Office",
      dateCreated: "1677",
      dateDigitized: "2021-06-08",
      format: "Tax Registers (PDF)",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Venice, Dorsoduro",
    },
  },
  {
    id: 18,
    identifier: "VENICE_0002603",
    name: "Burano Lagoon Fisheries",
    coordinates: [45.4855, 12.4174],
    story:
      "The fishermen of Burano relied on tides, bricole poles, and lagoon knowledge to harvest fish and shellfish. Water shaped both survival and identity in this island community.",
    type: "Fishing Water Heritage",
    color: "#1a759f",
    period: "16th–21st century",
    image: "/images/water/burano_canals.jpg",
    sources: [
      {
        label: "Museo del Merletto — Burano Fishing Records",
        url: "https://museomerletto.visitmuve.it/",
        type: "Local Archive",
      },
      {
        label: "UNESCO — Lagoon Cultural Practices",
        url: "https://www.unesco.org",
        type: "Cultural Report",
      },
    ],
    metadata: {
      repository: "Comune di Venezia — Burano Archives",
      creator: "Burano Fishing Community",
      dateCreated: "1600–ongoing",
      dateDigitized: "2022-10-05",
      format: "Oral Testimonies, Maps",
      rights: "CC BY-NC 4.0",
      language: "Italian, Venetian",
      coverage: "Burano Island, Northern Lagoon",
    },
  },
  {
    id: 19,
    identifier: "VENICE_0002604",
    name: "Torcello Island",
    coordinates: [45.4943, 12.4188],
    story:
      "One of the earliest lagoon settlements, Torcello was a refuge from mainland invasions. Its canals, marshes, and ancient basilica trace the beginnings of Venice’s water civilization.",
    type: "Early Lagoon Settlement",
    color: "#2c7da0",
    period: "5th–10th century",
    image: "/images/water/torcello_island.jpg",
    sources: [
      {
        label: "Museo di Torcello — Archaeological Finds",
        url: "https://www.chorusvenezia.org",
        type: "Archaeological Source",
      },
      {
        label: "Europeana — Early Venetian Settlements",
        url: "https://www.europeana.eu",
        type: "Digital Archive",
      },
    ],
    metadata: {
      repository: "Museo Provinciale di Torcello",
      creator: "Byzantine & Early Venetian Settlers",
      dateCreated: "450–900 AD",
      dateDigitized: "2021-09-21",
      format: "Archaeological Reports",
      rights: "Public Domain",
      language: "Latin, Venetian",
      coverage: "Torcello Island, Lagoon",
    },
  },
  {
    id: 20,
    identifier: "VENICE_0002605",
    name: "Palazzo Ducale — Pozzi Prisons",
    coordinates: [45.4340, 12.3394],
    story:
      "Beneath the Doge’s Palace lie the Pozzi prisons, damp stone cells partly below water level. Prisoners could hear the lagoon echoing beyond the walls—freedom just out of reach.",
    type: "Carceral Water Memory",
    color: "#03045e",
    period: "16th–18th century",
    image: "/images/water/pozzi_prisons.jpg",
    sources: [
      {
        label: "Archivio di Stato — Ducal Prison Records",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Primary Source",
      },
      {
        label: "Europeana — Justice & Inquisition Records",
        url: "https://www.europeana.eu",
        type: "Historical Archive",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Council of Ten",
      dateCreated: "1500–1750",
      dateDigitized: "2022-02-14",
      format: "Court Manuscripts (PDF)",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Venice, San Marco",
    },
  },
  {
    id: 21,
    identifier: "VENICE_0002606",
    name: "Basilica di Santa Maria della Salute",
    coordinates: [45.4309, 12.3346],
    story:
      "Built after the plague of 1630, the Salute Basilica rises at the meeting of the Grand Canal and the lagoon. Each year, a floating bridge is built so Venetians can cross water to give thanks.",
    type: "Spiritual Water Vow",
    color: "#023e8a",
    period: "17th century",
    image: "/images/water/santa_maria_salute.jpg",
    sources: [
      {
        label: "Archivio Patriarcale — Plague Vows",
        url: "https://www.patriarcatovenezia.it/",
        type: "Primary Source",
      },
      {
        label: "Europeana — Plague Devotion Collections",
        url: "https://www.europeana.eu",
        type: "Cultural Archive",
      },
    ],
    metadata: {
      repository: "Archivio Patriarcale di Venezia",
      creator: "Baldassare Longhena",
      dateCreated: "1631–1687",
      dateDigitized: "2020-09-10",
      format: "Architectural Drawings",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Venice, Dorsoduro",
    },
  },
  {
    id: 22,
    identifier: "VENICE_0002607",
    name: "Lido di Venezia – Adriatic Gateway",
    coordinates: [45.4104, 12.3768],
    story:
      "The Lido island separates the lagoon from the Adriatic Sea. It hosted historic arrivals, pilgrim departures, and later became a seaside retreat—the threshold between Venice and the open sea.",
    type: "Maritime Threshold",
    color: "#0077b6",
    period: "10th–20th century",
    image: "/images/water/lido_di_venezia.jpg",
    sources: [
      {
        label: "Archivio Storico — Lido Beach Records",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Municipal Archive",
      },
      {
        label: "UNESCO — Coastal Lagoon Studies",
        url: "https://www.unesco.org",
        type: "Research Document",
      },
    ],
    metadata: {
      repository: "Archivio Storico del Comune di Venezia",
      creator: "Municipal Engineers of Venice",
      dateCreated: "1890–1920",
      dateDigitized: "2023-03-01",
      format: "Maps, Photographs",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Lido di Venezia",
    },
  },
  {
    id: 23,
    identifier: "VENICE_0002608",
    name: "San Zaccaria Flooded Crypt",
    coordinates: [45.4343, 12.3446],
    story:
      "The crypt beneath San Zaccaria Church is permanently flooded. Columns and tombs are reflected in water, blending sacred architecture with lagoon tides in a haunting scene.",
    type: "Submerged Sacred Heritage",
    color: "#1a759f",
    period: "15th century",
    image: "/images/water/san_zaccaria_flooded.jpg",
    sources: [
      {
        label: "Parrocchia di San Zaccaria — Church Archive",
        url: "https://www.patriarcatovenezia.it/",
        type: "Primary Source",
      },
      {
        label: "Wikimedia Commons — Flooded Crypt Images",
        url: "https://commons.wikimedia.org",
        type: "Visual Record",
      },
    ],
    metadata: {
      repository: "Parrocchia di San Zaccaria Archive",
      creator: "Antonio Gambello & Mauro Codussi",
      dateCreated: "1458–1515",
      dateDigitized: "2021-06-12",
      format: "Architectural Photos (JPEG)",
      rights: "CC BY 4.0",
      language: "Italian",
      coverage: "Venice, Castello",
    },
  },
  {
    id: 24,
    identifier: "VENICE_0002609",
    name: "Ca’ d’Oro – Water Palace",
    coordinates: [45.4414, 12.3368],
    story:
      "Ca’ d’Oro, the ‘Golden House’, stands directly on the Grand Canal. Its façade once shimmered in gold leaf, reflecting sunlight and water—symbolizing Venetian wealth revealed to the lagoon.",
    type: "Palatial Waterfront Heritage",
    color: "#2c7da0",
    period: "15th century",
    image: "/images/water/cadoro.jpg",
    sources: [
      {
        label: "Galleria Franchetti — Architectural Sketches",
        url: "https://cadoro.visitmuve.it/",
        type: "Museum Archive",
      },
      {
        label: "Europeana — Venetian Palaces on Water",
        url: "https://www.europeana.eu",
        type: "Visual Heritage",
      },
    ],
    metadata: {
      repository: "Galleria Giorgio Franchetti alla Ca’ d’Oro",
      creator: "Giovanni & Bartolomeo Bon",
      dateCreated: "1428–1430",
      dateDigitized: "2021-11-27",
      format: "Architectural Plans (JPEG, PDF)",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Venice, Cannaregio",
    },
  },
    {
    id: 25,
    identifier: "VENICE_0002610",
    name: "Giudecca Canal & Redentore Festival",
    coordinates: [45.4255, 12.3318],
    story:
      "Every July, a floating bridge is built across the Giudecca Canal for the Redentore Festival. Thousands walk over water to the Church of the Redeemer, giving thanks for deliverance from the plague—faith carried by the lagoon.",
    type: "Ritual Water Festival",
    color: "#468faf", // Misty Lagoon Blue
    period: "16th–21st century",
    image: "/images/water/la_festa_del.jpg",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Festa_del_Redentore_2018.jpg",
    sources: [
      {
        label: "Archivio Patriarcale — Redentore Records",
        url: "https://www.patriarcatovenezia.it/",
        type: "Church Archive",
      },
      {
        label: "Wikimedia Commons — Festa del Redentore Images",
        url: "https://commons.wikimedia.org",
        type: "Visual Record",
      },
    ],
    metadata: {
      repository: "Patriarcato di Venezia",
      creator: "Baldassare Longhena (Church Architect)",
      dateCreated: "1577–1630",
      dateDigitized: "2022-08-15",
      format: "Festival Photos, Architectural Plans (PDF, JPEG)",
      rights: "CC BY 4.0",
      language: "Italian",
      coverage: "Venice, Giudecca Canal",
    },
  },
  {
    id: 28,
    identifier: "VENICE_0002613",
    name: "Riva degli Schiavoni",
    coordinates: [45.4339, 12.3436],
    story:
      "Riva degli Schiavoni was a major landing point for Dalmatian sailors ('Schiavoni'). This waterfront became a lively area of maritime trade, migration, and Adriatic connections.",
    type: "Maritime Trade & Migration",
    color: "#2c7da0",
    period: "14th–19th century",
    image: "/images/water/riva_degli_schiavoni.jpg",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Riva_degli_Schiavoni_Venice.jpg",
    sources: [
      {
        label: "Archivio di Stato — Adriatic Trade Records",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Primary Source",
      },
      {
        label: "Europeana — Adriatic Maritime Collections",
        url: "https://www.europeana.eu",
        type: "Digital Archive",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Venetian Maritime Offices",
      dateCreated: "1350–1800",
      dateDigitized: "2022-01-21",
      format: "Maritime Ledgers",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Venice, San Marco",
    },
  },
  {
    id: 29,
    identifier: "VENICE_0002614",
    name: "Chiesa di San Moisè",
    coordinates: [45.4331, 12.3359],
    story:
      "The Church of San Moisè features a dramatic Baroque façade with seashells and water motifs. Built after a flood, it expresses Venice’s devotion, fear, and dependence on water.",
    type: "Spiritual & Flood Heritage",
    color: "#03045e",
    period: "17th century",
    image: "/images/water/chiesa_Di.jpg",
    sources: [
      {
        label: "Patriarcato di Venezia — Church Archives",
        url: "https://www.patriarcatovenezia.it/",
        type: "Ecclesiastical Record",
      },
      {
        label: "Wikimedia Commons — San Moisè Images",
        url: "https://commons.wikimedia.org",
        type: "Visual Record",
      },
    ],
    metadata: {
      repository: "Parrocchia di San Moisè",
      creator: "Alessandro Tremignon",
      dateCreated: "1688",
      dateDigitized: "2021-10-02",
      format: "Architectural Drawings, Photos",
      rights: "CC BY 4.0",
      language: "Italian",
      coverage: "Venice, San Marco district",
    },
  },
  {
    id: 30,
    identifier: "VENICE_0002615",
    name: "Pellestrina Island & Murazzi Sea Walls",
    coordinates: [45.2865, 12.2962],
    story:
      "Pellestrina is a thin island between lagoon and sea. Its stone sea walls, the Murazzi, protect Venice from storm tides. Local fishing communities have lived here for centuries, between saltwater and marsh.",
    type: "Coastal Defence & Lagoon Life",
    color: "#0077b6",
    period: "18th–21st century",
    image: "/images/water/pellestrina.jpg",
    sources: [
      {
        label: "Archivio di Stato — Murazzi Engineering Records",
        url: "https://www.archiviodistatovenezia.it/",
        type: "Technical Archive",
      },
      {
        label: "Wikimedia Commons — Pellestrina Island",
        url: "https://commons.wikimedia.org",
        type: "Visual Record",
      },
    ],
    metadata: {
      repository: "Archivio di Stato di Venezia",
      creator: "Magistrato alle Acque",
      dateCreated: "1744–1782",
      dateDigitized: "2021-08-23",
      format: "Engineering Plans, Maps",
      rights: "Public Domain",
      language: "Italian",
      coverage: "Pellestrina, Venetian Lagoon",
    },
  },
];



