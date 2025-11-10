import { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import { waterStories } from "../data/waterStories";
import StoryPanel from "./StoryPanel";
import { downloadOaiXml } from "../oai"; // ✅ OAI-PMH export eklendi
import "leaflet/dist/leaflet.css";

const exportAllToEuropeanaXML = () => {
  const xmlRecords = waterStories
    .map(
      (story) => `
    <record xmlns:dc="http://purl.org/dc/elements/1.1/">
      <dc:title>${story.name}</dc:title>
      <dc:creator>${story.metadata?.creator || "Unknown"}</dc:creator>
      <dc:subject>${story.type}</dc:subject>
      <dc:description>${story.story}</dc:description>
      <dc:publisher>${story.metadata?.repository || "Unknown"}</dc:publisher>
      <dc:date>${story.metadata?.dateCreated || "Unknown"}</dc:date>
      <dc:type>${story.metadata?.format || "Unknown"}</dc:type>
      <dc:identifier>${story.identifier}</dc:identifier>
      <dc:language>${story.metadata?.language || "Unknown"}</dc:language>
      <dc:coverage>${story.metadata?.coverage || "Unknown"}</dc:coverage>
      <dc:rights>${story.metadata?.rights || "Unknown"}</dc:rights>
    </record>`
    )
    .join("\n");

  const fullXML = `<?xml version="1.0" encoding="UTF-8"?>\n<collection>\n${xmlRecords}\n</collection>`;
  const blob = new Blob([fullXML], { type: "application/xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Venice_Water_Memory_Collection_Europeana.xml";
  link.click();
};

function WaterMap() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("All");
  const audioRef = useRef(new Audio("/sounds/water.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.15;
    audio.play().catch(() => {});
    return () => audio.pause();
  }, []);

  const downloadAllMetadata = () => {
    const collection = {
      datasetTitle: "Venice Water Memory Collection",
      datasetCreator: "Berk Ateşalp",
      datasetDescription:
        "A digital heritage dataset of Venice’s water-related cultural sites, compiled for the 'Water Memory' project, compatible with Dublin Core / Europeana standards.",
      license: "CC BY 4.0",
      totalRecords: waterStories.length,
      generatedAt: new Date().toISOString(),
      items: waterStories.map((story) => ({
        id: story.id,
        identifier: story.identifier,
        name: story.name,
        type: story.type,
        period: story.period,
        coordinates: story.coordinates,
        story: story.story,
        metadata: story.metadata,
        sources: story.sources,
      })),
    };

    const blob = new Blob([JSON.stringify(collection, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Venice_Water_Memory_Collection.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      {/* 🕰️ Filter by Period */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 1000,
          background: "rgba(255,255,255,0.95)",
          borderRadius: "8px",
          padding: "8px 12px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: "600",
            color: "#023e8a",
          }}
        >
          Filter by Period:
        </span>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #0077b6",
            fontSize: "13px",
            background: "white",
            cursor: "pointer",
          }}
        >
          <option value="All">All</option>
          <option value="15th">15th Century</option>
          <option value="16th">16th Century</option>
          <option value="17th">17th Century</option>
          <option value="18th">18th Century</option>
          <option value="19th">19th Century</option>
          <option value="20th">20th Century</option>
        </select>
      </div>

      {/* 💾 Export Buttons — arada mesafe bırakıldı */}
      <div
        style={{
          position: "absolute",
          top: "90px", // ⬅️ filtre ile exportlar arası mesafe
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={downloadAllMetadata}
          style={{
            backgroundColor: "#0077b6",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            cursor: "pointer",
            fontWeight: "500",
            boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
          }}
        >
          💾 Export All Metadata (JSON)
        </button>

        <button
          onClick={exportAllToEuropeanaXML}
          style={{
            backgroundColor: "#023e8a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            cursor: "pointer",
            fontWeight: "500",
            boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
          }}
        >
          🗂️ Export All as Europeana XML
        </button>

        <button
          onClick={downloadOaiXml}
          style={{
            backgroundColor: "#007f5f",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            cursor: "pointer",
            fontWeight: "500",
            boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
          }}
        >
          🪶 Export OAI-PMH XML
        </button>
      </div>

      {/* 🗺️ Harita */}
      <MapContainer
        center={[45.434, 12.336]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* 💧 Noktalar (filtreli) */}
        {waterStories
          .filter(
            (s) =>
              selectedPeriod === "All" ||
              (s.period && s.period.includes(selectedPeriod))
          )
          .map((s) => (
            <CircleMarker
              key={s.id}
              center={s.coordinates}
              radius={10}
              eventHandlers={{
                click: () => {
                  setSelectedStory(s);
                  audioRef.current.play().catch(() => {});
                },
              }}
              pathOptions={{
                color: s.color,
                fillColor: s.color,
                fillOpacity: 0.8,
              }}
            >
              <Popup>
                <h3>{s.name}</h3>
                <p style={{ fontStyle: "italic" }}>{s.type}</p>
                <p>{s.story.slice(0, 80)}...</p>
                <p style={{ color: s.color, fontWeight: "bold" }}>
                  Click the marker to read more →
                </p>
              </Popup>
            </CircleMarker>
          ))}
      </MapContainer>

      {/* 🌊 Hafif su efekti */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 119, 182, 0.1), transparent 70%)",
          pointerEvents: "none",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* 🪶 Story Panel */}
      <StoryPanel
        storyData={selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      {/* 📜 UNESCO Water Heritage etiketi */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          background: "rgba(255,255,255,0.8)",
          padding: "8px 14px",
          borderRadius: "8px",
          fontWeight: "500",
          fontSize: "13px",
          color: "#03045e",
          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
          backdropFilter: "blur(4px)",
        }}
      >
        Venice Water Memory © UNESCO Water Heritage
      </div>
    </div>
  );
}

export default WaterMap;
