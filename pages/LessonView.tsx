import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TOPICS, LESSON_DATA } from '../constants';
import { LessonContent } from '../types';
import CodeBlock from '../components/CodeBlock';
import QuizSection from '../components/QuizSection';
import { ArrowLeft, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { parse } from 'marked';

const LessonView: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  
  const [content, setContent] = useState<LessonContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const topic = TOPICS.find(t => t.id === topicId);

  // Navigation Logic
  const categoryTopics = topic ? TOPICS.filter(t => t.category === topic.category) : [];
  const currentIndex = topic ? categoryTopics.findIndex(t => t.id === topic.id) : -1;
  const prevTopic = currentIndex > 0 ? categoryTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex !== -1 && currentIndex < categoryTopics.length - 1 ? categoryTopics[currentIndex + 1] : null;

  useEffect(() => {
    if (!topic) {
        setError("Topic not found");
        setLoading(false);
        return;
    }

    // Reset state for new topic
    setContent(null);

    const fetchContent = async () => {
        setLoading(true);
        // Simulate network delay for a smoother feel, though it's instant offline
        await new Promise(resolve => setTimeout(resolve, 300));
        
        if (topicId && LESSON_DATA[topicId]) {
            setContent(LESSON_DATA[topicId]);
            setError(null);
        } else {
            setError("Content coming soon!");
        }
        setLoading(false);
    };

    fetchContent();
  }, [topicId, topic]); 

  if (loading) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
              <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-blue-400">
                      <Sparkles size={20} className="animate-pulse" />
                  </div>
              </div>
              <p className="text-slate-400 font-medium animate-pulse">Loading Lesson...</p>
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
          <CodeBlock 
              code={content.codeExample} 
              explanation={content.codeExplanation} 
              expectedOutput={content.expectedOutput}
          />
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

      {/* Quiz Section */}
      {content.quiz && (
        <div className="mb-12">
           <QuizSection quiz={content.quiz} />
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <button 
              onClick={() => prevTopic && navigate(`/lesson/${prevTopic.id}`)}
              disabled={!prevTopic}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${
                  prevTopic 
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-400 cursor-pointer' 
                  : 'bg-slate-900/50 border-slate-800 text-slate-600 cursor-not-allowed'
              }`}
          >
              <ChevronLeft size={20} />
              <div className="text-left">
                  <div className="text-xs text-slate-500 font-medium">Previous</div>
                  <div className="font-semibold">{prevTopic ? prevTopic.title : 'Start of Category'}</div>
              </div>
          </button>

          <button 
              onClick={() => nextTopic && navigate(`/lesson/${nextTopic.id}`)}
              disabled={!nextTopic}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${
                  nextTopic 
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-400 cursor-pointer' 
                  : 'bg-slate-900/50 border-slate-800 text-slate-600 cursor-not-allowed'
              }`}
          >
              <div className="text-right">
                  <div className="text-xs text-slate-500 font-medium">Next</div>
                  <div className="font-semibold">{nextTopic ? nextTopic.title : 'End of Category'}</div>
              </div>
              <ChevronRight size={20} />
          </button>
      </div>
    </div>
  );
};

export default LessonView;