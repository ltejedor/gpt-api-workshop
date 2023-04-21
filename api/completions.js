const axios = require("axios");

module.exports = async (req, res) => {
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
};