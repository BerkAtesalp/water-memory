import { useState,useEffect } from "react";

export default function AIGenerator({ storyData }) {
  const [aiStory, setAiStory] = useState("");
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    setAiStory("");
  }, [storyData]);


  const generateStory = async () => {
    console.log("API key var mı?", process.env.REACT_APP_OPENAI_KEY);
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/generate", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,

        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "You are a poetic Venetian water narrator who speaks briefly and emotionally about Venice's relationship with water.",
            },
            {
              role: "user",
              content: `Create a short (max 100 words) reflective narration for "${storyData.name}", based on this info:
              Type: ${storyData.type}, Period: ${storyData.period}, Story: ${storyData.story}`,
            },
          ],
        }),
      });

      const data = await response.json();
      console.log("🔥 API response:", data); // gelen cevabı görmek için
      setAiStory(data?.choices?.[0]?.message?.content || data?.error?.message || "No story generated.");

    } catch (error) {
      console.error(error);
      setAiStory("Sorry, I couldn’t generate a narration right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <button
        onClick={generateStory}
        disabled={loading}
        style={{
          backgroundColor: "#0077b6",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",
          fontWeight: "500",
        }}
      >
        {loading ? "Generating..." : "✨ Generate AI Narration"}
      </button>

      {aiStory && (
        <div
          style={{
            marginTop: "12px",
            padding: "10px",
            background: "rgba(240,248,255,0.6)",
            borderRadius: "6px",
            fontSize: "14px",
            fontStyle: "italic",
            color: "#03045e",
          }}
        >
          {aiStory}
        </div>
      )}
    </div>
  );
}
