// ✅ proxy.js — Final Version
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✨ AI text narration endpoint
app.post("/api/generate", async (req, res) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.VITE_OPENAI_KEY}`,
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ OpenAI Chat API Error:", errorText);
      return res.status(response.status).send(errorText);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("🔥 Proxy server error (chat):", err);
    res.status(500).json({ error: "Internal Server Error (chat)" });
  }
});

// 🎙️ AI voice generation (TTS) endpoint
app.post("/api/speak", async (req, res) => {
  try {
    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.VITE_OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "tts-1-hd",
        voice: "verse", // alternative voices: verse, coral, soft
        input: req.body.text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ OpenAI TTS API Error:", errorText);
      return res.status(response.status).send(errorText);
    }

    const arrayBuffer = await response.arrayBuffer();
    res.setHeader("Content-Type", "audio/mpeg");
    res.send(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error("🔥 Proxy server error (TTS):", err);
    res.status(500).json({ error: "Internal Server Error (TTS)" });
  }
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ Proxy running successfully at http://localhost:${PORT}`)
);
