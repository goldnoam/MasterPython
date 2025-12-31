import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TOPICS, LESSON_DATA } from '../constants';
import { LessonContent, UserProgress } from '../types';
import CodeBlock from '../components/CodeBlock';
import QuizSection from '../components/QuizSection';
import { ArrowLeft, Sparkles, ChevronLeft, ChevronRight, RotateCcw, RotateCw, Share2, Download, CheckCircle2 } from 'lucide-react';
import { parse } from 'marked';

const PROGRESS_KEY = 'pymaster_progress';

const LessonView: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  
  const [content, setContent] = useState<LessonContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const topic = TOPICS.find(t => t.id === topicId);

  // Navigation Logic with Wrap-around
  const categoryTopics = topic ? TOPICS.filter(t => t.category === topic.category) : [];
  const currentIndex = topic ? categoryTopics.findIndex(t => t.id === topic.id) : -1;
  
  let prevTopic = null;
  let nextTopic = null;
  let isPrevWrap = false;
  let isNextWrap = false;

  if (categoryTopics.length > 1 && currentIndex !== -1) {
    const prevIndex = (currentIndex - 1 + categoryTopics.length) % categoryTopics.length;
    prevTopic = categoryTopics[prevIndex];
    isPrevWrap = currentIndex === 0;

    const nextIndex = (currentIndex + 1) % categoryTopics.length;
    nextTopic = categoryTopics[nextIndex];
    isNextWrap = currentIndex === categoryTopics.length - 1;
  }

  // Update Progress in LocalStorage with error handling
  const updateProgress = (id: string) => {
    try {
      const saved = localStorage.getItem(PROGRESS_KEY);
      let progress: UserProgress = saved ? JSON.parse(saved) : { lastLessonId: null, history: [], completed: [] };
      
      progress.lastLessonId = id;
      
      // Maintain unique history of last 5 lessons
      const newHistory = [id, ...progress.history.filter(h => h !== id)].slice(0, 5);
      progress.history = newHistory;
      
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
      setIsCompleted(progress.completed.includes(id));
      
      // Dispatch custom event to notify sidebar
      window.dispatchEvent(new Event('progress-updated'));
    } catch (e) {
      console.warn('LocalStorage unavailable or full. Progress tracking disabled.', e);
    }
  };

  const toggleComplete = () => {
    if (!topicId) return;
    try {
      const saved = localStorage.getItem(PROGRESS_KEY);
      let progress: UserProgress = saved ? JSON.parse(saved) : { lastLessonId: null, history: [], completed: [] };
      
      if (progress.completed.includes(topicId)) {
        progress.completed = progress.completed.filter(id => id !== topicId);
        setIsCompleted(false);
      } else {
        progress.completed.push(topicId);
        setIsCompleted(true);
      }
      
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
      window.dispatchEvent(new Event('progress-updated'));
    } catch (e) {
      console.warn('LocalStorage unavailable or full. Progress tracking disabled.', e);
    }
  };

  useEffect(() => {
    if (!topic) {
        setError("Topic not found");
        setLoading(false);
        return;
    }

    setIsVisible(false);

    const fetchContent = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 250));
        
        if (topicId && LESSON_DATA[topicId]) {
            setContent(LESSON_DATA[topicId]);
            setError(null);
            updateProgress(topicId);
            setTimeout(() => setIsVisible(true), 50);
        } else {
            setError("Content coming soon!");
        }
        setLoading(false);
    };

    fetchContent();
  }, [topicId, topic]); 

  const handleNavigate = (id: string) => {
    setIsVisible(false);
    setTimeout(() => navigate(`/lesson/${id}`), 200);
  };

  const handleShare = async () => {
    if (!content) return;
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Learn Python: ${content.title}`,
          text: `Check out this interactive Python lesson: ${content.title}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Lesson link copied to clipboard!');
      }
    } catch (err) {
      // Common error if sharing is cancelled or blocked
      if (err instanceof Error && err.name !== 'AbortError') {
        await navigator.clipboard.writeText(window.location.href);
        alert('Sharing blocked. Link copied to clipboard instead.');
      }
    }
  };

  const handleExport = () => {
    if (!content) return;
    const mdContent = `# ${content.title}\n\n*PyMaster: Interactive Python Learning*\n\n---\n\n## Explanation\n${content.explanation}\n\n## Code Example\n\`\`\`python\n${content.codeExample}\n\`\`\`\n\n### Why it works\n${content.codeExplanation}\n\n## Your Challenge\n> ${content.challenge}\n\n---\n*Generated by PyMaster - Learn Python Offline*`;
    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${content.title.replace(/\s+/g, '_')}_Lesson.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading && !content) {
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
    <div className={`pb-20 relative transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium group"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
        </button>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleComplete}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-bold ${
              isCompleted 
                ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-600 dark:text-emerald-400' 
                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <CheckCircle2 size={14} className={isCompleted ? 'fill-emerald-500/20' : ''} />
            {isCompleted ? 'Completed' : 'Mark Complete'}
          </button>
          
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>

          <button 
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs font-bold"
            title="Share this lesson"
          >
            <Share2 size={14} />
            Share
          </button>
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs font-bold"
            title="Download lesson as Markdown"
          >
            <Download size={14} />
            Export MD
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">
                {topic.category}
            </span>
            {isCompleted && (
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                <CheckCircle2 size={12} />
                Done
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {content.title}
          </h1>
          <div 
            className="prose dark:prose-invert prose-lg max-w-none text-slate-600 dark:text-slate-300"
            dangerouslySetInnerHTML={{ __html: parse(content.explanation) as string }} 
          />
      </div>

      {/* Code Section */}
      <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm">
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
      <div className="mb-12 bg-gradient-to-br from-indigo-50 dark:from-indigo-900/20 to-purple-50 dark:to-purple-900/20 rounded-2xl p-6 md:p-8 border border-indigo-200 dark:border-indigo-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
          <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-4 flex items-center gap-2">
              <Sparkles size={20} />
              Your Challenge
          </h2>
          <div className="text-indigo-900 dark:text-indigo-100/80 leading-relaxed relative z-10 text-sm md:text-base">
              {content.challenge}
          </div>
      </div>

      {/* Quiz Section */}
      {content.quiz && (
        <div className="mb-12">
           <QuizSection quiz={content.quiz} />
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <button 
              onClick={() => prevTopic && handleNavigate(prevTopic.id)}
              disabled={!prevTopic}
              className={`flex items-center gap-2 px-3 md:px-5 py-3 rounded-xl border transition-all ${
                  prevTopic 
                  ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer shadow-sm' 
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
              }`}
          >
              {isPrevWrap ? <RotateCcw size={18} className="text-slate-400 shrink-0" /> : <ChevronLeft size={18} className="shrink-0" />}
              <div className="text-left overflow-hidden">
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase truncate">
                    {isPrevWrap ? 'Loop End' : 'Prev'}
                  </div>
                  <div className="font-bold text-xs md:text-sm truncate">{prevTopic ? prevTopic.title : 'None'}</div>
              </div>
          </button>

          <button 
              onClick={() => nextTopic && handleNavigate(nextTopic.id)}
              disabled={!nextTopic}
              className={`flex items-center justify-end gap-2 px-3 md:px-5 py-3 rounded-xl border transition-all ${
                  nextTopic 
                  ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer shadow-sm' 
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
              }`}
          >
              <div className="text-right overflow-hidden">
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase truncate">
                    {isNextWrap ? 'Loop Start' : 'Next'}
                  </div>
                  <div className="font-bold text-xs md:text-sm truncate">{nextTopic ? nextTopic.title : 'None'}</div>
              </div>
              {isNextWrap ? <RotateCw size={18} className="text-slate-400 shrink-0" /> : <ChevronRight size={18} className="shrink-0" />}
          </button>
      </div>
    </div>
  );
};

export default LessonView;