import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TOPICS } from '../constants';
import { generateLessonContent, askFollowUp } from '../services/geminiService';
import { LessonContent, ChatMessage } from '../types';
import CodeBlock from '../components/CodeBlock';
import { ArrowLeft, Send, Sparkles, MessageSquare } from 'lucide-react';
import { parse } from 'marked';

const LessonView: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  
  const [content, setContent] = useState<LessonContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Chat state
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const topic = TOPICS.find(t => t.id === topicId);

  useEffect(() => {
    if (!topic) {
        setError("Topic not found");
        setLoading(false);
        return;
    }

    const fetchContent = async () => {
        setLoading(true);
        try {
            const data = await generateLessonContent(topic.title, topic.category);
            setContent(data);
        } catch (err) {
            setError("Failed to generate content. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    fetchContent();
  }, [topic]);

  useEffect(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatOpen]);

  const handleSendMessage = async () => {
      if (!input.trim() || !content) return;
      
      const userMsg = input;
      setInput('');
      setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
      setSending(true);

      const response = await askFollowUp(userMsg, `Topic: ${content.title}. Explanation: ${content.explanation}`);
      
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      setSending(false);
  };

  if (loading) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
              <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-blue-400">
                      <Sparkles size={20} className="animate-pulse" />
                  </div>
              </div>
              <p className="text-slate-400 font-medium animate-pulse">Consulting the AI Tutor...</p>
          </div>
      );
  }

  if (error || !topic || !content) {
      return (
          <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-red-400 mb-4">Error</h2>
              <p className="text-slate-400 mb-6">{error || "Something went wrong."}</p>
              <button 
                onClick={() => navigate('/')}
                className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-colors"
              >
                  Return Home
              </button>
          </div>
      );
  }

  return (
    <div className="max-w-4xl mx-auto pb-20 relative">
      <button 
        onClick={() => navigate('/')}
        className="mb-6 flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium"
      >
          <ArrowLeft size={16} />
          Back to Dashboard
      </button>

      {/* Header */}
      <div className="mb-10 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wide">
                {topic.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {content.title}
          </h1>
          <div 
            className="prose prose-invert prose-lg max-w-none text-slate-300"
            dangerouslySetInnerHTML={{ __html: parse(content.explanation) as string }} 
          />
      </div>

      {/* Code Section */}
      <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">
                  {'</>'}
              </span>
              Live Example
          </h2>
          <CodeBlock code={content.codeExample} />
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Code Analysis</h3>
              <div 
                className="prose prose-invert prose-sm max-w-none text-slate-400"
                dangerouslySetInnerHTML={{ __html: parse(content.codeExplanation) as string }} 
              />
          </div>
      </div>

      {/* Challenge Section */}
      <div className="mb-12 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl p-8 border border-indigo-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
          <h2 className="text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
              <Sparkles size={20} />
              Your Challenge
          </h2>
          <p className="text-indigo-100/80 leading-relaxed relative z-10">
              {content.challenge}
          </p>
      </div>

      {/* Floating Chat Interface */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${chatOpen ? 'w-[90vw] md:w-[400px] h-[500px]' : 'w-auto h-auto'}`}>
          {!chatOpen && (
              <button 
                onClick={() => setChatOpen(true)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-full shadow-2xl shadow-blue-500/30 font-bold transition-all transform hover:scale-105"
              >
                  <MessageSquare size={20} />
                  Ask Tutor
              </button>
          )}

          {chatOpen && (
              <div className="flex flex-col h-full bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
                      <h3 className="font-bold text-white flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          AI Tutor Chat
                      </h3>
                      <button 
                        onClick={() => setChatOpen(false)}
                        className="text-slate-400 hover:text-white"
                      >
                          &times;
                      </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/95">
                      {messages.length === 0 && (
                          <div className="text-center text-slate-500 text-sm mt-10">
                              Ask me anything about this lesson!<br/>
                              e.g., "Why did we use a class here?"
                          </div>
                      )}
                      {messages.map((msg, idx) => (
                          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-200'}`}>
                                  {msg.text}
                              </div>
                          </div>
                      ))}
                      {sending && (
                          <div className="flex justify-start">
                              <div className="bg-slate-800 rounded-2xl px-4 py-3">
                                  <div className="flex gap-1">
                                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></div>
                                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></div>
                                  </div>
                              </div>
                          </div>
                      )}
                      <div ref={chatEndRef}></div>
                  </div>

                  <div className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
                      <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type a question..."
                        className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                      <button 
                        onClick={handleSendMessage}
                        disabled={sending || !input.trim()}
                        className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-xl transition-colors"
                      >
                          <Send size={18} />
                      </button>
                  </div>
              </div>
          )}
      </div>
    </div>
  );
};

export default LessonView;