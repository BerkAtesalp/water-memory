// proxy.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.post("/api/generate", async (req, res) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Proxy server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Proxy running at http://localhost:${PORT}`));
