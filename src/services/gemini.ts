// src/services/gemini.ts
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export const getGrowthAudit = async (targetUrl: string) => {
  const prompt = `Analyze this website: ${targetUrl}. 
  Provide a growth audit in JSON format with these exact keys: 
  "score" (0-100), "summary" (1 sentence), "pros" (array), "cons" (array). 
  No prose, just JSON.`;

  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    
    // Membersihkan blok kode markdown jika ada
    return JSON.parse(rawText.replace(/```json|```/g, ""));
  } catch (err) {
    console.error("Audit failed:", err);
    return null;
  }
};