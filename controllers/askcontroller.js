import fetch from "node-fetch";
export const askGemini = async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ message: "Question is required." });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res
      .status(500)
      .json({ message: "Gemini API key is not configured on the server." });
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        parts: [{ text: question }],
      },
    ],
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Gemini API responded with status ${response.status}`);
    }

    const data = await response.json();
    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No answer found.";
    res.json({ answer });
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    res.status(500).json({ message: "Failed to get a response from Gemini." });
  }
};
