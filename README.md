# 🌊 Venice Water Memory — Digital Heritage Project  

A **digital cultural heritage and archival storytelling platform** about Venice’s water legacy — connecting urban memory, archival metadata, and AI narration through interactive maps and open data standards.  

---

## 🏛️ Project Overview  

The **Venice Water Memory** project visualizes and narrates the relationship between Venice and its aquatic heritage.  
Each point on the interactive map represents a **water-related cultural site**, enriched with:  

- 🏷️ Metadata (repository, date, rights, language)  
- 🧾 Linked archival sources (Europeana, Wikimedia, Venice archives)  
- 🤖 AI-generated short poetic narrations  
- 🗂️ Exportable data in **Dublin Core / Europeana XML** format  

---

## 🧠 Technologies Used  

| Layer | Technology | Description |
|-------|-------------|-------------|
| **Frontend** | React.js, Vite | Interactive UI with React components |
| **Map Visualization** | Leaflet + OpenStreetMap | Geospatial storytelling layer |
| **Animations** | Framer Motion | Smooth water-like animations |
| **AI Integration** | OpenAI GPT-4o | AI narration (“Water Memory Narrator”) |
| **Data Management** | JSON + Europeana XML | Metadata following Dublin Core standard |
| **Backend Proxy** | Node.js + Express | Secure API calls to OpenAI via local proxy |
| **Version Control** | Git + GitHub | Project management & version tracking |

---

## 💾 Data & Metadata  

All water stories are stored in `/src/data/waterStories.js`,  
structured according to **Dublin Core (DCMI)** and **Europeana Data Model (EDM)** recommendations.  

Each entry includes:  
```json
{
  "id": 10,
  "identifier": "VENICE_0002403",
  "name": "Pozzo di Campo Santa Maria Formosa",
  "story": "Before modern aqueducts, Venice relied on rainwater wells...",
  "metadata": {
    "repository": "Archivio di Stato di Venezia",
    "creator": "Venetian Public Works",
    "dateCreated": "1492",
    "format": "Engineering Plans (PDF, TIFF)",
    "rights": "Public Domain",
    "language": "Italian",
    "coverage": "Venice, Castello"
  }
}
