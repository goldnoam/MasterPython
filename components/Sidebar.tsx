import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Book, HelpCircle } from 'lucide-react';
import { Category } from '../types';
import { CATEGORY_ICONS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-20 md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-50 transition-all duration-300">
      <div className="p-6 flex items-center justify-center md:justify-start gap-3 border-b border-slate-800">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-xl">Py</span>
        </div>
        <span className="text-xl font-bold text-slate-100 hidden md:block">PyMaster</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
        <NavLink 
            to="/" 
            className={({ isActive }) => 
                `flex items-center gap-3 p-3 rounded-xl transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`
            }
        >
            <Home size={20} />
            <span className="hidden md:block">Dashboard</span>
        </NavLink>
        
        <div className="pt-4 pb-2 px-3 hidden md:block">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Categories</p>
        </div>

        {Object.values(Category).map((cat) => {
            const Icon = CATEGORY_ICONS[cat] || Book;
            // Generate a simple slug for the category filter logic if we had distinct pages, 
            // but here we just link to home with a hash or just display structure.
            // For now, let's keep it simple and just show items.
            return (
                <div key={cat} className="group flex items-center gap-3 p-3 rounded-xl text-slate-400 cursor-default hover:bg-slate-800/50 transition-colors">
                    <Icon size={20} className="group-hover:text-blue-400 transition-colors" />
                    <span className="hidden md:block text-sm font-medium">{cat}</span>
                </div>
            )
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 w-full p-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <HelpCircle size={20} />
            <span className="hidden md:block">About</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
