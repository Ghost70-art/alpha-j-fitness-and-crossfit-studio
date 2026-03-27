import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const getFitnessAdvice = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const model = ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: 'user',
          parts: [{ text: "You are the AI assistant for Alpha J Fitness & Cross Studio. You help users with fitness advice, workout plan suggestions, and information about the gym. Alpha J Fitness is premium, spacious, and has a dedicated cross-training zone. Keep responses concise, energetic, and professional. Use red accents in your tone (metaphorically)." }]
        },
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        maxOutputTokens: 500,
      }
    });

    const response = await model;
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of a workout cramp right now. Can you try asking again?";
  }
};
