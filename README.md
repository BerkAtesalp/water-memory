# 🌊 Venice Water Memory

An interactive digital heritage project visualizing the **water-related memory of Venice**, combining storytelling, archival metadata, and AI narration — compatible with **Europeana**, **Dublin Core**, and **OAI-PMH** metadata standards.

---

## 🧭 Overview

**Venice Water Memory** is an interactive map that connects canals, wells, and festivals of Venice with their cultural and archival stories.  
Each location features:
- 🏛️ Archival metadata (Europeana / Dublin Core format)  
- 🖼️ Historical imagery  
- 🤖 AI-powered narration (“Water Memory Narrator”)  
- 🌍 Export options in JSON and Europeana XML (OAI-PMH ready)

---

## 🧱 Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| Frontend | React + Vite | Core app framework |
| Map | React Leaflet | Interactive water heritage map |
| Animation | Framer Motion | Water ripple & ambient fade animations |
| AI Narration | OpenAI GPT-4o mini (via Proxy) | Generates poetic water stories |
| Data Export | JSON / Europeana XML / OAI-PMH Ready | Archival metadata export |
| Sound | Ambient Water Loop | Immersive background audio |

---

## 🗂️ Metadata Standards

The project follows:
- **Dublin Core Metadata Initiative (DCMI)**  
- **Europeana Data Model (EDM)**  
- **OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting)**  
  → *Metadata structure is fully compatible with future OAI endpoints.*

### Export Options
- 💾 **JSON Export:** `Venice_Water_Memory_Collection.json`  
- 🗂️ **Europeana XML Export:** `Venice_Water_Memory_Collection_Europeana.xml`

---

## 🤖 AI Narrator — “Water Memory Voice”

A custom feature using **OpenAI GPT-4o mini**, accessed securely via local proxy.  
When a user selects a water site, an AI-generated poetic narration appears.

> **Example Prompt:**  
> “You are a poetic Venetian water narrator. Speak briefly and emotionally about Venice’s relationship with water.”

This adds a narrative layer to heritage data — bridging **emotion, culture, and technology**.

---

## 🧩 Technical Architecture

```text
                    ┌───────────────────────────────┐
                    │        User Interface         │
                    │  React + Leaflet + Framer UI  │
                    │   • Interactive Venice Map    │
                    │   • Story Panel (Sidebar)     │
                    │   • Water Animation Layer     │
                    └──────────────┬────────────────┘
                                   │
                      [User clicks on a water site]
                                   │
                    ┌──────────────▼────────────────┐
                    │         StoryPanel.js          │
                    │  • Displays archival metadata  │
                    │  • Shows historical image      │
                    │  • Calls AI Narrator           │
                    └──────────────┬────────────────┘
                                   │
                     [Request to OpenAI via Proxy]
                                   │
                    ┌──────────────▼────────────────┐
                    │        AIGenerator.js         │
                    │  • Sends prompt to GPT-4o     │
                    │  • Receives poetic narration  │
                    │  • Returns text to panel      │
                    └──────────────┬────────────────┘
                                   │
                     [Metadata Export Functionality]
                                   │
        ┌──────────────────────────┴──────────────────────────┐
        │                     WaterMap.js                    │
        │  • Displays all markers                            │
        │  • JSON + Europeana XML export buttons             │
        │  • Generates Dublin Core / OAI-PMH XML             │
        └──────────────────────────┬──────────────────────────┘
                                   │
                   [Archival Standards Integration Layer]
                                   │
            ┌──────────────────────▼──────────────────────┐
            │           Europeana / Dublin Core           │
            │  • Dublin Core XML schema (dc:title, etc.)  │
            │  • Future OAI-PMH endpoint (/api/oai)       │
            └────────────────────────────────────────────┘
