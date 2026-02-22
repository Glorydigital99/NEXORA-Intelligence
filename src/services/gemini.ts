// src/services/gemini.ts
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
// 1. Fungsi Utama untuk Audit (Jangan sampe ilang bro!)
export const getGrowthAudit = async (targetUrl: string) => {
  const prompt = `Analyze this website: ${targetUrl}. 
  Provide a growth audit in JSON format with: "score" (number 0-100), "summary" (string), "pros" (array), "cons" (array). 
  Just JSON.`;

  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("Google API Error:", data.error.message);
      return { score: 0, summary: `Error: ${data.error.message}`, pros: [], cons: [] };
    }

    if (!data.candidates) return null;

    const rawText = data.candidates[0].content.parts[0].text;
    const cleanJson = rawText.replace(/```json|```/g, "").trim();
    return JSON.parse(cleanJson);
  } catch (err) {
    console.error("System Audit failed:", err);
    return null;
  }
};
// update key check
// 2. Fungsi Tes untuk deteksi masalah Key (Sesuai permintaan tadi)
export const testKey = async () => {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await response.json();
    console.log("Daftar Model Lu:", data);
  } catch (err) {
    console.error("Test Key Failed:", err);
  }
};