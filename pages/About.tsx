import React from 'react';
import { Category } from '../types';
import { CATEGORY_ICONS, CATEGORY_DESCRIPTIONS } from '../constants';
import { Award, Code, Terminal, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          About PyMaster
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Your comprehensive, offline-first platform for mastering Python programming. 
          From basic scripting to Deep Learning and Computer Vision.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
            <Code size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Interactive Learning</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Every lesson comes with live code examples you can analyze, challenges to test your skills, and quizzes to verify your understanding.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
            <Terminal size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Practical Skills</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Focus on real-world applications including Machine Learning (PyTorch), Data Science (Pandas), Computer Vision (OpenCV), and GUIs (PyQt).
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
        <Award className="text-yellow-600 dark:text-yellow-500" />
        Curriculum Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.values(Category).map((cat) => {
          const Icon = CATEGORY_ICONS[cat];
          return (
            <div key={cat} className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/50 hover:border-blue-500/50 dark:hover:border-slate-700 transition-colors shadow-sm">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">
                  <Icon size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">{cat}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-tight">{CATEGORY_DESCRIPTIONS[cat]}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 p-8 bg-gradient-to-br from-indigo-50 dark:from-indigo-900/20 to-blue-50 dark:to-blue-900/20 rounded-3xl border border-indigo-200 dark:border-indigo-500/20 text-center shadow-lg">
        <Brain className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to start?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          Explore our enhanced sections on PyTorch, Pandas, and OpenCV.
          Select a topic from the dashboard to begin your journey.
        </p>
      </div>
    </div>
  );
};

export default About;