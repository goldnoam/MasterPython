import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LessonView from './pages/LessonView';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 flex">
        <Sidebar />
        <main className="flex-1 ml-20 md:ml-64 p-6 md:p-10 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lesson/:topicId" element={<LessonView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
