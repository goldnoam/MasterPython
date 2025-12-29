import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Book, HelpCircle, Sun, Moon, WifiOff, History, PlayCircle, CheckCircle2, AlertTriangle, Database } from 'lucide-react';
import { Category, UserProgress, Topic } from '../types';
import { CATEGORY_ICONS, CATEGORY_DESCRIPTIONS, TOPICS } from '../constants';

const PROGRESS_KEY = 'pymaster_progress';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
  const [tooltipTop, setTooltipTop] = useState<number>(0);
  const [isDark, setIsDark] = useState(true);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [storageError, setStorageError] = useState<'unavailable' | 'full' | null>(null);

  const isStorageAvailable = () => {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  };

  const loadProgress = () => {
    if (!isStorageAvailable()) {
      setStorageError('unavailable');
      return;
    }

    try {
      const saved = localStorage.getItem(PROGRESS_KEY);
      if (saved) {
        setProgress(JSON.parse(saved));
      }
      setStorageError(null);
    } catch (e) {
      console.error('Failed to load progress:', e);
      // Check if it's a parsing error or something else
      setStorageError('unavailable');
    }
  };

  // Sync theme with document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    loadProgress();
    // Listen for progress updates from LessonView
    const handleUpdate = () => {
      // Small delay to ensure state is committed in LessonView before we read it
      // though localStorage is synchronous, this handles cross-tab or async triggers
      loadProgress();
    };
    
    window.addEventListener('progress-updated', handleUpdate);
    // Also listen for storage events (e.g. from other tabs)
    window.addEventListener('storage', (e) => {
      if (e.key === PROGRESS_KEY) loadProgress();
    });
    
    return () => {
      window.removeEventListener('progress-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleMouseEnter = (cat: Category, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredCategory(cat);
    setTooltipTop(rect.top);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/about", icon: HelpCircle, label: "About" },
  ];

  const recentLessons = progress?.history
    ?.map(id => TOPICS.find(t => t.id === id))
    .filter((t): t is Topic => !!t) || [];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-around md:hidden z-[100] px-4">
        {navItems.map((item) => (
          <NavLink 
            key={item.to}
            to={item.to}
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400'}`
            }
          >
            <item.icon size={20} />
            <span className="text-[10px] font-bold uppercase">{item.label}</span>
          </NavLink>
        ))}
        <button onClick={toggleTheme} className="flex flex-col items-center gap-1 text-slate-400">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          <span className="text-[10px] font-bold uppercase">Theme</span>
        </button>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col z-50 transition-all duration-300">
        <div className="p-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xl">Py</span>
            </div>
            <span className="text-xl font-bold text-slate-800 dark:text-slate-100">PyMaster</span>
          </div>
          <div title="Offline Ready" className="text-emerald-500 flex items-center gap-2">
            <WifiOff size={16} />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2 relative">
          <NavLink 
              to="/" 
              className={({ isActive }) => 
                  `flex items-center gap-3 p-3 rounded-xl transition-colors ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`
              }
          >
              <Home size={20} />
              <span className="font-medium">Dashboard</span>
          </NavLink>

          {/* Storage Status / Errors */}
          {storageError && (
            <div className="mx-3 my-2 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-1">
                <AlertTriangle size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Tracking Disabled</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                {storageError === 'unavailable' 
                  ? 'Your browser settings are blocking local storage. Progress won\'t be saved.' 
                  : 'Local storage is full. Please clear some browser data to resume tracking.'}
              </p>
            </div>
          )}

          {/* Resume Section */}
          {!storageError && progress?.lastLessonId && (
            <div className="pt-2">
              <div className="px-3 mb-2">
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Jump Back In</p>
              </div>
              <button 
                onClick={() => navigate(`/lesson/${progress.lastLessonId}`)}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-blue-600 dark:text-blue-400 bg-blue-500/5 dark:bg-blue-500/10 hover:bg-blue-500/10 dark:hover:bg-blue-500/20 transition-all group"
              >
                <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
                <div className="text-left overflow-hidden">
                  <span className="block text-sm font-bold truncate">Resume Lesson</span>
                  <span className="block text-[10px] opacity-70 truncate">
                    {TOPICS.find(t => t.id === progress.lastLessonId)?.title}
                  </span>
                </div>
              </button>
            </div>
          )}

          {/* Recent History Section */}
          {!storageError && recentLessons.length > 0 && (
            <div className="pt-4">
              <div className="px-3 mb-2 flex items-center gap-2">
                <History size={12} className="text-slate-400" />
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Recent</p>
              </div>
              <div className="space-y-1">
                {recentLessons.map(lesson => (
                  <button
                    key={lesson.id}
                    onClick={() => navigate(`/lesson/${lesson.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left group"
                  >
                    <span className="truncate pr-2">{lesson.title}</span>
                    {progress?.completed.includes(lesson.id) && (
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-4 pb-2 px-3">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Categories</p>
          </div>

          {Object.values(Category).map((cat) => {
              const Icon = CATEGORY_ICONS[cat] || Book;
              return (
                  <div 
                      key={cat} 
                      className="group flex items-center gap-3 p-3 rounded-xl text-slate-500 dark:text-slate-400 cursor-default hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                      onMouseEnter={(e) => handleMouseEnter(cat, e)}
                      onMouseLeave={handleMouseLeave}
                  >
                      <Icon size={20} className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      <span className="text-sm font-medium">{cat}</span>
                  </div>
              )
          })}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <button 
              onClick={toggleTheme}
              className="flex items-center gap-3 w-full p-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          </button>

          <NavLink 
              to="/about"
              className={({ isActive }) => 
                  `flex items-center gap-3 w-full p-3 rounded-xl transition-colors ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`
              }
          >
              <HelpCircle size={20} />
              <span>About</span>
          </NavLink>
        </div>

        {hoveredCategory && (
          <div 
              className="fixed left-64 ml-4 w-64 p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 z-[60] pointer-events-none animate-in fade-in zoom-in-95 duration-150"
              style={{ top: tooltipTop }}
          >
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1 text-sm">{hoveredCategory}</h4>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {CATEGORY_DESCRIPTIONS[hoveredCategory]}
              </p>
              <div className="absolute top-4 -left-1.5 w-3 h-3 bg-white dark:bg-slate-800 border-l border-b border-slate-200 dark:border-slate-700 transform rotate-45"></div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;