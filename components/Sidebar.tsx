import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Book, HelpCircle } from 'lucide-react';
import { Category } from '../types';
import { CATEGORY_ICONS, CATEGORY_DESCRIPTIONS } from '../constants';

const Sidebar: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
  const [tooltipTop, setTooltipTop] = useState<number>(0);

  const handleMouseEnter = (cat: Category, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredCategory(cat);
    setTooltipTop(rect.top);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-20 md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-50 transition-all duration-300">
      <div className="p-6 flex items-center justify-center md:justify-start gap-3 border-b border-slate-800">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-xl">Py</span>
        </div>
        <span className="text-xl font-bold text-slate-100 hidden md:block">PyMaster</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2 relative">
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
            return (
                <div 
                    key={cat} 
                    className="group flex items-center gap-3 p-3 rounded-xl text-slate-400 cursor-default hover:bg-slate-800/50 transition-colors"
                    onMouseEnter={(e) => handleMouseEnter(cat, e)}
                    onMouseLeave={handleMouseLeave}
                >
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

      {/* Tooltip rendered outside nav to avoid overflow issues, but inside fixed aside */}
      {hoveredCategory && (
        <div 
            className="fixed left-20 md:left-64 ml-4 w-64 p-3 bg-slate-800 text-slate-200 rounded-xl shadow-2xl border border-slate-700 z-[60] pointer-events-none animate-in fade-in zoom-in-95 duration-150"
            style={{ top: tooltipTop }}
        >
            <h4 className="font-bold text-blue-400 mb-1 text-sm">{hoveredCategory}</h4>
            <p className="text-xs leading-relaxed text-slate-400">
                {CATEGORY_DESCRIPTIONS[hoveredCategory]}
            </p>
            {/* Arrow */}
            <div className="absolute top-4 -left-1.5 w-3 h-3 bg-slate-800 border-l border-b border-slate-700 transform rotate-45"></div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;