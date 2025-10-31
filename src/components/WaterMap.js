import { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import { waterStories } from "../data/waterStories";
import StoryPanel from "./StoryPanel";
import "leaflet/dist/leaflet.css";

function WaterMap() {
  const [selectedStory, setSelectedStory] = useState(null);
  const audioRef = useRef(new Audio("/sounds/water.mp3"));

  // 🎧 Arka plan su sesi
  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.15;
    audio.play().catch(() => {});
    return () => audio.pause();
  }, []);

  // 💾 Tüm metadata'yı indir (koleksiyon olarak)
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
      {/* 💾 Export All Metadata (JSON) */}
      <button
        onClick={downloadAllMetadata}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 1000,
          backgroundColor: "#0077b6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 18px",
          cursor: "pointer",
          fontWeight: "500",
          boxShadow: "0 3px 6px rgba(0,0,0,0.25)",
          transition: "0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = "#00b4d8")
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = "#0077b6")
        }
      >
        💾 Export All Metadata (JSON)
      </button>

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

        {/* 💧 Noktalar */}
        {waterStories.map((s) => (
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

      {/* 📜 UNESCO Water Heritage etiketi (geri geldi 🎯) */}
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
