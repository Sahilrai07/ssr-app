
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI IT Support Assistant for SSR ACS College Student Portal.
Help students with:
- Resetting passwords (direct them to 'Forgot Password' screen).
- Fee payment issues (explain major payment methods like UPI, Cards).
- Downloading hall tickets or marksheet (tell them to check 'Academics' -> 'Results').
- App bugs and wifi access on campus.
Keep your responses professional, helpful, and concise.
If you can't help, suggest they contact Student Services at student-services@ssracs.edu.in.
`;

export const getGeminiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userMessage,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
  return response.text || "I'm sorry, I'm having trouble connecting right now. Please try again later.";
};
