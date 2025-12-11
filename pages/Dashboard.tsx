import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Category, Topic } from '../types';
import { CATEGORY_ICONS, TOPICS } from '../constants';
import { Search } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = TOPICS.filter(topic => {
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
                          topic.title.toLowerCase().includes(query) || 
                          topic.description.toLowerCase().includes(query);
                          
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
                Master Python
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
                From basic scripts to Neural Networks and Network Engineering. 
                Select a topic below to start an interactive lesson.
            </p>
        </header>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-4 z-30 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 no-scrollbar">
                <button 
                    onClick={() => setSelectedCategory('All')}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        selectedCategory === 'All' 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
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
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <input 
                    type="text" 
                    placeholder="Search topics and descriptions..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-full pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                />
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic) => {
                const Icon = CATEGORY_ICONS[topic.category];
                return (
                    <div 
                        key={topic.id}
                        onClick={() => navigate(`/lesson/${topic.id}`)}
                        className="group relative bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        <div className="absolute top-6 right-6 text-slate-600 group-hover:text-blue-500 transition-colors opacity-50 group-hover:opacity-100">
                            <Icon size={24} />
                        </div>
                        <div className="mb-4">
                            <span className="inline-block px-2 py-1 rounded-md bg-slate-900/50 border border-slate-700 text-xs font-semibold text-slate-400 mb-2">
                                {topic.category}
                            </span>
                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                                {topic.title}
                            </h3>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            {topic.description}
                        </p>
                        <div className="flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Start Lesson &rarr;
                        </div>
                    </div>
                );
            })}
        </div>

        {filteredTopics.length === 0 && (
            <div className="text-center py-20">
                <p className="text-slate-500 text-lg">No topics found matching your search.</p>
            </div>
        )}
    </div>
  );
};

export default Dashboard;