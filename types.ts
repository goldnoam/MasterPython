export enum Category {
  STARTER = 'Starter',
  ADVANCED = 'Advanced',
  ML = 'Machine Learning',
  CV = 'Computer Vision',
  NETWORK = 'Network & TCP/IP',
  UI = 'UI & GUI'
}

export interface Topic {
  id: string;
  title: string;
  category: Category;
  description: string;
}

export interface LessonContent {
  title: string;
  explanation: string; // Markdown formatted text
  codeExample: string;
  codeExplanation: string; // Markdown formatted text
  challenge: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}