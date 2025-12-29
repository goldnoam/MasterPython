import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LessonView from './pages/LessonView';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 flex flex-col md:flex-row">
        <Sidebar />
        {/* Adjusted padding: bottom-24 for mobile nav, ml-64 for desktop sidebar */}
        <main className="flex-1 transition-all duration-300 p-4 md:p-10 mb-20 md:mb-0 md:ml-64">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/lesson/:topicId" element={<LessonView />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;