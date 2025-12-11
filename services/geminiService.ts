import { GoogleGenAI, Type } from "@google/genai";
import { LessonContent } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// System prompt to guide the model's persona
const SYSTEM_INSTRUCTION = `
You are an expert Python Instructor named "PyMaster". 
Your goal is to provide clear, concise, and highly educational tutorials.
You are teaching a user who wants to master Python from basic scripts to complex ML and Networking.
Always provide modern, PEP-8 compliant code.
When explaining visual concepts (UI/CV), describe clearly what happens on screen.
`;

export const generateLessonContent = async (topicTitle: string, category: string): Promise<LessonContent> => {
  const modelId = "gemini-2.5-flash"; // Fast and capable enough for tutorials

  const prompt = `
    Create a comprehensive lesson for the topic: "${topicTitle}" within the category: "${category}".
    
    The output must be a structured JSON object containing:
    1. title: A catchy title for the lesson.
    2. explanation: A clear, markdown-formatted theoretical explanation (2-3 paragraphs). Use bolding for key terms.
    3. codeExample: A complete, runnable Python code snippet demonstrating the concept. Add comments in the code.
    4. codeExplanation: A detailed markdown explanation of how the code works. Use bullet points for steps, bold text for key variables, and inline code ticks for syntax.
    5. challenge: A small exercise or question for the user to try on their own related to this topic.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            explanation: { type: Type.STRING },
            codeExample: { type: Type.STRING },
            codeExplanation: { type: Type.STRING },
            challenge: { type: Type.STRING },
          },
          required: ["title", "explanation", "codeExample", "codeExplanation", "challenge"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as LessonContent;
    }
    throw new Error("Empty response from Gemini");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      title: "Error Loading Lesson",
      explanation: "We encountered an issue connecting to the AI tutor. Please check your API Key or try again later.",
      codeExample: "# Error generating code",
      codeExplanation: "N/A",
      challenge: "Try refreshing the page."
    };
  }
};

export const simulateCodeOutput = async (code: string): Promise<string> => {
    const modelId = "gemini-2.5-flash";
    const prompt = `
      Act as a Python interpreter. 
      Analyze the following Python code and predict its output exactly as it would appear in a terminal.
      If the code involves a GUI or Image (e.g., Tkinter, OpenCV), describe strictly what the window or image would look like.
      
      Code:
      \`\`\`python
      ${code}
      \`\`\`
    `;
    
    try {
        const response = await ai.models.generateContent({
            model: modelId,
            contents: prompt,
        });
        return response.text || "No output generated.";
    } catch (error) {
        console.error("Simulation Error", error);
        return "Error: Could not simulate output.";
    }
};

export const askFollowUp = async (question: string, context: string): Promise<string> => {
     const modelId = "gemini-2.5-flash";
     const prompt = `
        Context: The user is learning about: ${context}
        
        User Question: ${question}
        
        Answer efficiently and clearly. Provide code if helpful.
     `;
     
     try {
        const response = await ai.models.generateContent({
            model: modelId,
            contents: prompt,
        });
        return response.text || "I couldn't generate an answer.";
     } catch (e) {
         return "Error connecting to AI.";
     }
}