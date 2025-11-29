import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const generateStrategyResponse = async (userInput: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      You are "Mark", a senior growth strategist at Marketing 31. 
      Your goal is to briefly analyze the user's business input and suggest 1-2 high-impact marketing strategies 
      that Marketing 31 could implement for them.
      Keep the tone professional, direct, and slightly exclusive ("we only work with the best").
      End with a strong call to action to book a call for a full audit.
      Keep the response under 100 words.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userInput,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'd love to discuss this further on a call. Our team can build a custom roadmap for you.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently analyzing high volumes of data. Please book a call directly to speak with a human strategist.";
  }
};