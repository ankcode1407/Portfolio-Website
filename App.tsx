
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ResearchNotes from './pages/ResearchNotes';
import Writing from './pages/Writing';
import Contact from './pages/Contact';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors duration-200 ${
        isActive ? 'text-[#4682B4] border-b border-[#4682B4]' : 'text-[#555555] hover:text-[#1a1a1a]'
      }`}
    >
      {children}
    </Link>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-3xl mx-auto px-6 py-12 md:px-12 md:py-24 selection:bg-blue-100 selection:text-blue-900">
      <header className="mb-16 no-print">
        <div className="flex flex-col space-y-6">
          <div className="space-y-1">
            <Link to="/" className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity block">
              Shaurya Mishra
            </Link>
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#888888] font-medium block">
              Policy Research · AI Governance · Institutional Capacity
            </span>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-4 border-b border-gray-200 pb-4">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/research-projects">Research & Projects</NavLink>
            <NavLink to="/research-notes">Research Notes</NavLink>
            <NavLink to="/writing">Writing</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="animate-in fade-in duration-700">
          {children}
        </div>
      </main>

      <footer className="mt-24 pt-8 border-t border-gray-200 text-xs text-[#888888] flex justify-between no-print">
        <p>© {new Date().getFullYear()} Shaurya Mishra</p>
        <p>Institutional Research & AI Governance</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research-projects" element={<Projects />} />
          <Route path="/research-notes" element={<ResearchNotes />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
