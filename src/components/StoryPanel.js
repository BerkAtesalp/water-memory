import { motion } from "framer-motion";
import AIGenerator from "./AIGenerator"; // ✅ AI Narrator bileşeni eklendi

// 🧩 Europeana XML Export Fonksiyonu
const exportToEuropeanaXML = (storyData) => {
  const xml = `
  <record xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${storyData.name}</dc:title>
    <dc:creator>${storyData.metadata?.creator || "Unknown"}</dc:creator>
    <dc:subject>${storyData.type}</dc:subject>
    <dc:description>${storyData.story}</dc:description>
    <dc:publisher>${storyData.metadata?.repository || "Unknown"}</dc:publisher>
    <dc:date>${storyData.metadata?.dateCreated || "Unknown"}</dc:date>
    <dc:type>${storyData.metadata?.format || "Unknown"}</dc:type>
    <dc:identifier>${storyData.identifier}</dc:identifier>
    <dc:language>${storyData.metadata?.language || "Unknown"}</dc:language>
    <dc:coverage>${storyData.metadata?.coverage || "Unknown"}</dc:coverage>
    <dc:rights>${storyData.metadata?.rights || "Unknown"}</dc:rights>
  </record>
  `.trim();

  const blob = new Blob([xml], { type: "application/xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${storyData.name.replace(/\s+/g, "_")}_Europeana.xml`;
  link.click();
};

function StoryPanel({ storyData, onClose }) {
  if (!storyData) return null;

  // 📦 Metadata'yı JSON olarak indir
  const downloadMetadata = () => {
    const metadataObject = {
      id: storyData.id,
      identifier: storyData.identifier,
      name: storyData.name,
      type: storyData.type,
      period: storyData.period,
      coordinates: storyData.coordinates,
      story: storyData.story,
      metadata: storyData.metadata,
      sources: storyData.sources,
    };

    const blob = new Blob([JSON.stringify(metadataObject, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${storyData.name.replace(/\s+/g, "_")}_metadata.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ x: -400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -400, opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "340px",
        background: "rgba(255, 255, 255, 0.96)",
        boxShadow: "4px 0 10px rgba(0,0,0,0.25)",
        padding: "22px",
        overflowY: "auto",
        zIndex: 999,
        borderRight: "4px solid #0077b6",
      }}
    >
      {/* ✖️ Kapat Butonu */}
      <button
        onClick={onClose}
        style={{
          border: "none",
          background: "none",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#0077b6",
          cursor: "pointer",
          position: "absolute",
          top: "10px",
          right: "15px",
        }}
      >
        ✕
      </button>

      {/* 📍 Başlık */}
      <h2 style={{ color: "#03045e", fontFamily: "Playfair Display" }}>
        {storyData.name}
      </h2>

      {/* 🖼 Görsel (Varsa) */}
      {storyData.image && (
        <img
          src={storyData.image}
          alt={storyData.name}
          referrerPolicy="no-referrer"
          style={{
            width: "100%",
            borderRadius: "8px",
            marginTop: "10px",
            marginBottom: "12px",
            maxHeight: "200px",
            objectFit: "cover",
          }}
        />
      )}

      {/* 🏷️ Tür & Dönem */}
      <p style={{ fontStyle: "italic", color: "#0077b6", marginBottom: "5px" }}>
        {storyData.type} — <b>{storyData.period}</b>
      </p>

      {/* 🧾 Metadata */}
      {storyData.metadata && (
        <div
          style={{
            background: "rgba(240,248,255,0.6)",
            padding: "10px",
            borderRadius: "6px",
            marginBottom: "10px",
            fontSize: "13px",
          }}
        >
          <p><strong>Repository:</strong> {storyData.metadata.repository}</p>
          <p><strong>Creator:</strong> {storyData.metadata.creator}</p>
          <p><strong>Date Created:</strong> {storyData.metadata.dateCreated}</p>
          <p><strong>Digitized:</strong> {storyData.metadata.dateDigitized}</p>
          <p><strong>Format:</strong> {storyData.metadata.format}</p>
          <p><strong>Rights:</strong> {storyData.metadata.rights}</p>
          <p><strong>Language:</strong> {storyData.metadata.language}</p>
          <p><strong>Coverage:</strong> {storyData.metadata.coverage}</p>
        </div>
      )}

      {/* 🖋️ Hikâye */}
      <p style={{ lineHeight: 1.6, fontSize: "15px" }}>{storyData.story}</p>

      {/* ✨ AI Anlatıcı */}
      <AIGenerator storyData={storyData} />

      {/* 🔗 Kaynaklar */}
      {storyData.sources && (
        <div style={{ marginTop: "10px" }}>
          <h4 style={{ color: "#03045e", marginBottom: "6px" }}>
            Archival Sources
          </h4>
          <ul style={{ paddingLeft: "18px" }}>
            {storyData.sources.map((src, i) => (
              <li key={i} style={{ marginBottom: "5px" }}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0077b6",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {src.label}
                </a>{" "}
                <span style={{ color: "#555", fontSize: "12px" }}>
                  ({src.type})
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 💾 Metadata İndir (JSON) */}
      <button
        onClick={downloadMetadata}
        style={{
          marginTop: "15px",
          backgroundColor: "#0096c7",
          color: "white",
          padding: "8px 14px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: "500",
          width: "100%",
        }}
      >
        ⬇ Download Metadata (JSON)
      </button>

      {/* 💾 Europeana XML Export */}
      <button
        onClick={() => exportToEuropeanaXML(storyData)}
        style={{
          marginTop: "10px",
          backgroundColor: "#0077b6",
          color: "white",
          padding: "8px 14px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: "500",
          width: "100%",
        }}
      >
        💾 Export as Europeana XML
      </button>
    </motion.div>
  );
}

export default StoryPanel;
