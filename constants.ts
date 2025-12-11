import { Category, Topic } from './types';
import { 
  BookOpen, 
  Cpu, 
  Network, 
  Monitor, 
  Zap, 
  Layers 
} from 'lucide-react';

export const CATEGORY_ICONS: Record<Category, any> = {
  [Category.STARTER]: BookOpen,
  [Category.ADVANCED]: Zap,
  [Category.ML]: Layers,
  [Category.CV]: Monitor, // Using Monitor as a proxy for visual stuff
  [Category.NETWORK]: Network,
  [Category.UI]: Cpu, // Generic tech icon
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  [Category.STARTER]: "Master the fundamentals: Variables, Control Flow, and Functions.",
  [Category.ADVANCED]: "Deep dive into Decorators, Generators, and Concurrency.",
  [Category.ML]: "Explore Data Science, Neural Networks, and Predictive Models.",
  [Category.CV]: "Learn Image Processing, Face Detection, and Object Tracking.",
  [Category.NETWORK]: "Understand Sockets, TCP/IP, and Asynchronous I/O.",
  [Category.UI]: "Build modern GUIs and Web Applications."
};

export const TOPICS: Topic[] = [
  // Starter
  { id: 's1', category: Category.STARTER, title: 'Variables & Data Types', description: 'Integers, Strings, Booleans, and Floats.' },
  { id: 's2', category: Category.STARTER, title: 'Control Flow', description: 'If, Else, Elif, and conditional logic.' },
  { id: 's3', category: Category.STARTER, title: 'Loops', description: 'For loops, While loops, and iteration.' },
  { id: 's4', category: Category.STARTER, title: 'Functions', description: 'Defining functions, arguments, and return values.' },
  { id: 's5', category: Category.STARTER, title: 'Lists & Dictionaries', description: 'Managing collections of data.' },

  // Advanced
  { id: 'a1', category: Category.ADVANCED, title: 'Decorators', description: 'Modifying function behavior dynamically.' },
  { id: 'a2', category: Category.ADVANCED, title: 'Generators', description: 'Yield, Iterators, and efficient memory usage.' },
  { id: 'a3', category: Category.ADVANCED, title: 'Context Managers', description: 'The "with" statement and resource management.' },
  { id: 'a4', category: Category.ADVANCED, title: 'Concurrency', description: 'Threading vs Multiprocessing vs AsyncIO.' },
  
  // Machine Learning
  { id: 'm1', category: Category.ML, title: 'NumPy Basics', description: 'High-performance multidimensional array object.' },
  { id: 'm2', category: Category.ML, title: 'Pandas DataFrames', description: 'Data manipulation and analysis.' },
  { id: 'm3', category: Category.ML, title: 'Linear Regression', description: 'Predicting continuous values using Scikit-Learn.' },
  { id: 'm4', category: Category.ML, title: 'Basic Neural Network', description: 'Understanding layers, weights, and activation.' },

  // Computer Vision
  { id: 'c1', category: Category.CV, title: 'OpenCV Basics', description: 'Reading, displaying, and writing images.' },
  { id: 'c2', category: Category.CV, title: 'Image Processing', description: 'Blurring, thresholding, and edge detection.' },
  { id: 'c3', category: Category.CV, title: 'Face Detection', description: 'Using Haar Cascades or HOG.' },
  { id: 'c4', category: Category.CV, title: 'Object Tracking', description: 'Tracking moving objects in video.' },

  // Network
  { id: 'n1', category: Category.NETWORK, title: 'Sockets Intro', description: 'Understanding IP, Ports, and Sockets.' },
  { id: 'n2', category: Category.NETWORK, title: 'TCP Client/Server', description: 'Building a basic chat server.' },
  { id: 'n3', category: Category.NETWORK, title: 'HTTP Requests', description: 'Using requests library and handling APIs.' },
  { id: 'n4', category: Category.NETWORK, title: 'Async Networking', description: 'Non-blocking I/O with asyncio.' },

  // UI
  { id: 'u1', category: Category.UI, title: 'Tkinter Basics', description: 'Creating windows, buttons, and labels.' },
  { id: 'u2', category: Category.UI, title: 'PyQt/PySide', description: 'Advanced GUI widgets and layouts.' },
  { id: 'u3', category: Category.UI, title: 'Flask Web App', description: 'Routing and templates for web UI.' },
  { id: 'u4', category: Category.UI, title: 'Streamlit', description: 'Rapid data app development.' },
];