// This service is disabled for offline mode.
// AI features have been removed.

import { LessonContent } from "../types";

export const generateLessonContent = async (topicTitle: string, category: string): Promise<LessonContent> => {
  return {
    title: "Offline Mode",
    explanation: "Content is available offline.",
    codeExample: "# Offline",
    codeExplanation: "N/A",
    challenge: "N/A"
  };
};

export const simulateCodeOutput = async (code: string): Promise<string> => {
    return "Simulation disabled in offline mode.";
};

export const askFollowUp = async (question: string, context: string): Promise<string> => {
     return "Chat disabled in offline mode.";
}