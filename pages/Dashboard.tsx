import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../types';
import { CATEGORY_ICONS, TOPICS, LESSON_DATA } from '../constants';
// Added ChevronRight to the lucide-react imports to fix the error on line 125
import { Search, X, ChevronRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = TOPICS.filter(topic => {
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
    
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    // Deep Search: Check topic fields
    const inTopic = topic.title.toLowerCase().includes(query) || 
                   topic.description.toLowerCase().includes(query);
    
    // Deep Search: Check lesson data fields (explanation and challenge)
    const lesson = LESSON_DATA[topic.id];
    const inLesson = lesson ? (
      lesson.explanation.toLowerCase().includes(query) ||
      lesson.challenge.toLowerCase().includes(query) ||
      lesson.title.toLowerCase().includes(query)
    ) : false;

    return matchesCategory && (inTopic || inLesson);
  });

  return (
    <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 mb-4">
                Master Python
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
                Deep search through lessons, from basic scripts to PyTorch Neural Networks and OpenCV Computer Vision.
            </p>
        </header>

        {/* Filters and Search */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-4 z-30 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 no-scrollbar">
                <button 
                    onClick={() => setSelectedCategory('All')}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        selectedCategory === 'All' 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                    All Topics
                </button>
                {Object.values(Category).map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                            selectedCategory === cat 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="relative w-full md:w-72 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                    type="text" 
                    placeholder="Search titles & content..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all shadow-inner"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-0.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full"
                  >
                    <X size={14} />
                  </button>
                )}
            </div>
        </div>

        {/* Results Info */}
        {searchQuery && (
            <div className="mb-6 px-4 py-2 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 rounded-xl text-blue-700 dark:text-blue-300 text-sm flex items-center justify-between">
                <span>Found <strong>{filteredTopics.length}</strong> topics matching "{searchQuery}"</span>
                <button onClick={() => setSearchQuery('')} className="font-bold underline text-xs">Clear search</button>
            </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic) => {
                const Icon = CATEGORY_ICONS[topic.category];
                return (
                    <div 
                        key={topic.id}
                        onClick={() => navigate(`/lesson/${topic.id}`)}
                        className="group relative bg-white dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        <div className="absolute top-6 right-6 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors opacity-40 group-hover:opacity-100">
                            <Icon size={28} />
                        </div>
                        <div className="mb-4">
                            <span className="inline-block px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                                {topic.category}
                            </span>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {topic.title}
                            </h3>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                            {topic.description}
                        </p>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                            Start Lesson <ChevronRight size={16} className="ml-1" />
                        </div>
                    </div>
                );
            })}
        </div>

        {filteredTopics.length === 0 && (
            <div className="text-center py-32 bg-white dark:bg-slate-900/30 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
                <Search size={48} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">No results found for "{searchQuery}"</p>
                <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">Try searching for different keywords like "Torch", "OpenCV", or "async"</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All')}}
                  className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all"
                >
                  View All Topics
                </button>
            </div>
        )}
    </div>
  );
};

export default Dashboard;