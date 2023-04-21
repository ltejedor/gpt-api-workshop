const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));

app.post("/api/completions", async (req, res) => {
    const apiKey = process.env.API_KEY;
    const requestBody = req.body;
  
    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", requestBody, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
      });
  
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching GPT API response:", error.response);
      res.status(error.response.status).json({ message: "An error occurred. Please try again." });
    }
});

app.post("/api/image_gen", async (req, res) => {
  const apiKey = process.env.API_KEY;
  const requestBody = req.body;

  console.log("Request body:", requestBody);

  try {
    const response = await axios.post("https://api.openai.com/v1/images/generations", requestBody, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching GPT API response:", error.response);
    res.status(error.response.status).json({ message: "An error occurred. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});