# 🌊 Venice Water Memory

An interactive digital heritage project visualizing the **water-related memory of Venice**, combining storytelling, archival metadata, and AI narration — compatible with **Europeana** and **Dublin Core** metadata standards.

---

## 🧭 Overview

**Venice Water Memory** is an interactive map that connects canals, wells, and festivals of Venice with their cultural and archival stories.  
Each location features:
- 🏛️ Archival metadata (Europeana / Dublin Core format)  
- 🖼️ Historical imagery  
- 🤖 AI-powered narration (“Water Memory Narrator”)  
- 🌍 Optional export in Europeana XML & OAI-PMH compatible formats  

---

## 🧱 Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| Frontend | React + Vite | Core app framework |
| Map | React Leaflet | Interactive water heritage map |
| Animation | Framer Motion | Water ripple & fade-in UI animations |
| AI Narration | OpenAI GPT-4o mini (via Proxy) | Generates poetic water stories |
| Data Export | JSON / Europeana XML / OAI-PMH Ready | Archival metadata export |
| Sound | Ambient Water Loop | Immersive audio background |

---

## 🗂️ Metadata Standards

The project follows:
- **Dublin Core Metadata Initiative (DCMI)**  
- **Europeana Data Model (EDM)**  
- **OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting)** — *the metadata structure is compatible with future OAI endpoints.*

### Export Options:
- 💾 **JSON Export:** full dataset (`Venice_Water_Memory_Collection.json`)
- 🗂️ **Europeana XML Export:** Dublin Core formatted records (`Venice_Water_Memory_Collection_Europeana.xml`)

---

## 🧠 AI Narrator

A custom feature called **“Water Memory Narrator”** uses OpenAI’s GPT-4o model  
to generate short poetic reflections about each water site.

> Example prompt:  
> “You are a poetic Venetian water narrator. Speak about this place’s memory in one paragraph.”

---

## 🌐 Future Roadmap

- [ ] Add multilingual AI narration (IT / EN / TR)  
- [ ] Integrate **OAI-PMH API endpoint** (`/api/oai?verb=ListRecords`)  
- [ ] Enable **SPARQL** metadata queries  
- [ ] Add **voice narration (TTS)** in Italian  
- [ ] Deploy to GitHub Pages or Vercel  

---

## 👤 Author

**Berk Ateşalp**  
Digital Heritage & Cultural Informatics Researcher  
[GitHub: @BerkAtesalp](https://github.com/BerkAtesalp)

---

## 📜 License

This project is released under **CC BY 4.0** — feel free to remix and expand,  
crediting the original “Venice Water Memory” dataset.

---
