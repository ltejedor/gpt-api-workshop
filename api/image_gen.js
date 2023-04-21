const axios = require("axios");
const app = require('express')();

module.exports = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const requestBody = req.body;

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
};
