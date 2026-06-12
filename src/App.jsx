import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModuleCard from './components/ModuleCard';
import JobBoard from './components/JobBoard';
import Competitions from './components/Competitions';
import Blog from './components/Blog';
import Footer from './components/Footer';

import { defaultModules, defaultJobs, defaultCompetitions, externalSocialLinks } from './data';

// Sub-view component for landing page content to keep route setup clean
function HomeView({ learningModules, handleModuleSelect, jobs, competitions, showToast }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Banner */}
      <Hero />

      {/* Bento Modular Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
        {/* Left Column - Learning Cards */}
        <section className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
          {learningModules.slice(0, 2).map((mod) => (
            <ModuleCard 
              key={mod.id} 
              module={mod} 
              onSelect={handleModuleSelect} 
            />
          ))}
        </section>

        {/* Right Column - Dedicated Job Board */}
        <section className="lg:col-span-4">
          <JobBoard 
            jobs={jobs} 
            sidebarMode={true} 
            onShowMessage={(msg) => showToast(msg, 'success')} 
          />
        </section>
      </div>

      {/* Top 2 New Competitions Section */}
      <section className="bg-surface-bento border border-grid-line p-8 flex flex-col gap-6">
        <div className="flex justify-between items-end border-b border-grid-line pb-4">
          <div>
            <h2 className="text-2xl font-bold font-headline-md text-on-surface tracking-tight">
              Active Challenges
            </h2>
            <p className="text-on-surface-variant text-sm font-body-md mt-1">
              Join the highest-density algorithmic competitions. Deploy optimized neural models to win real-world stakes.
            </p>
          </div>
          <button 
            onClick={() => navigate('/competitions')}
            className="text-xs font-semibold font-label-mono text-secondary hover:text-primary transition-colors duration-200 cursor-pointer uppercase flex items-center gap-1"
          >
            View All Contests
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitions.slice(0, 2).map((challenge) => (
            <div 
              key={challenge.id} 
              className="border border-grid-line bg-surface-container-low flex flex-col md:flex-row group bento-hover-blue overflow-hidden"
            >
              {/* Competition Image */}
              {challenge.imageUrl && (
                <div className="w-full md:w-2/5 min-h-[200px] md:min-h-full relative overflow-hidden border-b md:border-b-0 md:border-r border-grid-line">
                  <img 
                    src={challenge.imageUrl} 
                    alt={challenge.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-void-black/10"></div>
                </div>
              )}

              {/* Competition Details */}
              <div className="p-6 flex-grow flex flex-col justify-between select-none">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-label-mono text-[10px] px-2 py-0.5 bg-secondary-container/10 text-secondary border border-secondary/20 uppercase tracking-widest font-semibold">
                      {challenge.difficulty}
                    </span>
                    <span className="material-symbols-outlined text-secondary text-lg">
                      {challenge.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-headline-md text-on-surface mb-2 group-hover:text-secondary transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed mb-4 line-clamp-3">
                    {challenge.description}
                  </p>
                </div>

                <div className="border-t border-grid-line pt-4 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-[10px] font-label-mono">
                    <span className="text-text-muted">REWARD POOL</span>
                    <span className="font-bold text-on-surface">{challenge.prize}</span>
                  </div>
                  
                  <a 
                    href={challenge.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => showToast(`REDIRECT_INITIALIZED: Connecting to external hackathon challenge nodes at ${challenge.title.toUpperCase()}.`, 'success')}
                    className="btn-blue font-label-mono text-center py-2.5 w-full text-xs uppercase tracking-wider font-semibold block mt-1"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function App() {
  const navigate = useNavigate();
  const [toasts, setToasts] = useState([]);
  
  // App States
  const [jobs, setJobs] = useState(defaultJobs);
  const [learningModules, setLearningModules] = useState(defaultModules);
  const [competitions, setCompetitions] = useState(defaultCompetitions);
  const [selectedModule, setSelectedModule] = useState(null);

  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove toast after 4s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
  };

  const handleRegisterTeam = (compId) => {
    setCompetitions((prev) => prev.map((c) => 
      c.id === compId ? { ...c, registered: c.registered + 1 } : c
    ));
  };

  const handleFooterNavigate = (tab) => {
    navigate(tab === 'home' ? '/' : `/${tab}`);
  };

  return (
    <div className="antialiased min-h-screen flex flex-col bg-void-black text-on-surface font-sans">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow pt-24 px-4 md:px-8 pb-16 flex flex-col gap-6 bg-grid-line">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomeView 
                learningModules={learningModules} 
                handleModuleSelect={handleModuleSelect} 
                jobs={jobs} 
                competitions={competitions}
                showToast={showToast} 
              />
            } 
          />
          <Route 
            path="/learn" 
            element={
              <div className="flex flex-col gap-6 select-none">
                <div className="bg-surface-bento border border-grid-line p-8">
                  <h2 className="text-3xl font-bold font-headline-md tracking-tight text-on-surface mb-2">
                    Intelligence Syllabus
                  </h2>
                  <p className="text-on-surface-variant font-body-md max-w-2xl">
                    Access direct, high-density machine learning and data science training modules. Master theoretical mechanics and deploy active code implementations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
                  {learningModules.map((mod) => (
                    <ModuleCard 
                      key={mod.id} 
                      module={mod} 
                      onSelect={handleModuleSelect} 
                    />
                  ))}
                </div>
              </div>
            } 
          />
          <Route path="/blog" element={<Blog />} />
          <Route 
            path="/competitions" 
            element={
              <Competitions 
                competitions={competitions} 
                onRegisterTeam={handleRegisterTeam}
                onShowMessage={(msg) => showToast(msg, 'success')} 
              />
            } 
          />
          <Route 
            path="/jobs" 
            element={
              <JobBoard 
                jobs={jobs} 
                sidebarMode={false} 
                onShowMessage={(msg) => showToast(msg, 'success')} 
              />
            } 
          />
        </Routes>
      </main>

      {/* Reusable Footer */}
      <Footer onSelectTab={handleFooterNavigate} />

      {/* Syllabus Detail Modal */}
      {selectedModule && (
        <div className="fixed inset-0 bg-void-black/85 flex items-center justify-center p-4 z-[999] backdrop-blur-md">
          <div className="bg-surface-dim border border-grid-line max-w-md w-full p-8 relative">
            <button 
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-2xl font-bold font-headline-md mb-2 text-primary">
              Syllabus Index
            </h3>
            <p className="text-xs text-on-surface-variant mb-6 font-label-mono border-b border-grid-line pb-4">
              {selectedModule.code.toUpperCase()} // "{selectedModule.title.toUpperCase()}"
            </p>
            <div className="flex flex-col gap-4 mb-6 select-none">
              {selectedModule.syllabus.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="font-label-mono text-xs text-secondary mt-0.5">0{index + 1}.</span>
                  <span className="text-sm font-mono text-on-surface-variant leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Initialize Course Button redirects to deepmind repository per instructions */}
            <a
              href={selectedModule.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                showToast(`SYLLABUS_INITIALIZED: Connecting to external course repository nodes for ${selectedModule.title.toUpperCase()}.`, 'success');
                setTimeout(() => {
                  setSelectedModule(null);
                }, 150);
              }}
              className="w-full bg-primary-container text-void-black py-4 font-label-mono text-xs uppercase tracking-wider font-bold cursor-pointer border-none text-center block"
            >
              Initialize Course Portal
            </a>
          </div>
        </div>
      )}

      {/* Floating Toast System */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[1000] max-w-sm w-full select-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`border p-4 shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-0 flex items-start gap-3 ${
              toast.type === 'success'
                ? 'border-primary bg-surface-dim/95 text-primary'
                : 'border-secondary bg-surface-dim/95 text-secondary'
            }`}
          >
            <span className="material-symbols-outlined text-md">
              {toast.type === 'success' ? 'check_circle' : 'info'}
            </span>
            <div className="flex-grow">
              <div className="font-label-mono text-[9px] uppercase tracking-wider opacity-60">
                SYSTEM MESSAGE // {toast.type.toUpperCase()}
              </div>
              <div className="text-xs font-mono mt-1 text-on-surface leading-normal">
                {toast.message}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
