import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function JobBoard({ jobs, sidebarMode = false, onShowMessage }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'All' || 
                            (locationFilter === 'Remote' && job.location === 'Remote') ||
                            (locationFilter === 'On-site' && job.location !== 'Remote');
    return matchesSearch && matchesLocation;
  });

  const handleJobClick = (job) => {
    if (onShowMessage) {
      onShowMessage(`APPLICATION_PORTAL: Connecting to external job node for ${job.title.toUpperCase()} at ${job.company.toUpperCase()}.`, 'success');
    }
  };

  if (sidebarMode) {
    return (
      <section className="bg-surface-bento bento-border p-6 flex flex-col justify-between h-full select-none">
        <div>
          <div className="flex justify-between items-center mb-6 border-b border-grid-line pb-4">
            <div>
              <h3 className="font-label-mono text-xs font-bold text-on-surface uppercase tracking-widest">
                Dedicated Jobs
              </h3>
              <p className="text-[10px] text-on-surface-variant font-label-mono mt-0.5">
                DATABASE: {jobs.length} CARRIER NODES
              </p>
            </div>
            <span className="material-symbols-outlined text-primary text-lg animate-pulse">
              sensors
            </span>
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto pr-1 max-h-[440px]">
            {jobs.slice(0, 3).map((job) => (
              <div 
                key={job.id} 
                className="border border-grid-line p-4 bg-surface-container-low hover:border-primary transition-all duration-300 group flex flex-col justify-between min-h-[140px]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-surface-container-high border border-grid-line flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                      {job.icon || 'terminal'}
                    </span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-sm font-bold text-on-surface leading-tight truncate group-hover:text-primary transition-colors duration-300">
                      {job.title}
                    </h4>
                    <p className="font-label-mono text-[9px] text-text-muted mt-0.5 truncate">
                      {job.company} — {job.location}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] font-label-mono border-t border-grid-line/50 pt-2 mb-3">
                  <span className="px-1.5 py-0.5 bg-primary/10 text-primary border border-primary/20 text-[9px] font-bold">
                    {job.type.toUpperCase()}
                  </span>
                  <span className="text-on-surface font-semibold">
                    {job.salary}
                  </span>
                </div>

                <a 
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleJobClick(job)}
                  className="btn-cyan font-caption-bold text-[10px] py-2 w-full uppercase tracking-wider font-semibold cursor-pointer rounded-none text-center block"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-grid-line pt-4">
          <Link
            to="/jobs"
            className="w-full btn-secondary font-label-mono text-xs py-3 uppercase tracking-wider font-semibold text-center block"
          >
            Open Full Jobs Board
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full select-none">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter bg-surface-bento border border-grid-line p-6">
        <div>
          <label className="block text-[10px] font-bold font-label-mono text-primary-container mb-2 uppercase tracking-wider">
            Search Keyword
          </label>
          <input
            type="text"
            placeholder="Search ML/Data Science..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface-container-lowest border border-grid-line p-3 text-sm text-on-surface focus:outline-none focus:border-primary-container transition-colors font-mono"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold font-label-mono text-primary-container mb-2 uppercase tracking-wider">
            Location Profile
          </label>
          <div className="flex gap-2">
            {['All', 'Remote', 'On-site'].map((loc) => (
              <button
                key={loc}
                onClick={() => setLocationFilter(loc)}
                className={`flex-1 font-label-mono text-xs py-3 border transition-colors duration-300 font-semibold uppercase cursor-pointer ${
                  locationFilter === loc
                    ? 'border-primary-container text-primary-container bg-primary-container/10'
                    : 'border-grid-line text-on-surface-variant hover:border-primary-container'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <p className="font-label-mono text-xs text-text-muted md:text-right pb-3">
            DATABASE STATUS: {filteredJobs.length} POSITIONS FOUND
          </p>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
        {filteredJobs.map((job) => (
          <div 
            key={job.id} 
            className="bg-surface-bento border border-grid-line p-8 flex flex-col justify-between group bento-hover"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="font-label-mono text-xs px-2 py-1 bg-surface-container-high border border-grid-line text-on-surface-variant">
                  {job.type}
                </span>
                <span className="material-symbols-outlined text-primary-container">
                  {job.icon || 'terminal'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface font-headline-md tracking-tight group-hover:text-primary-container transition-colors duration-300 mb-1">
                {job.title}
              </h3>
              <p className="font-label-mono text-xs text-secondary-container mb-4">
                {job.company} — {job.location}
              </p>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                {job.description}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-grid-line pt-6 mt-6">
              <span className="font-label-mono text-sm text-primary-container font-semibold">
                {job.salary}
              </span>
              <a 
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleJobClick(job)}
                className="btn-cyan font-label-mono text-xs px-4 py-2 uppercase tracking-wider font-semibold text-center"
              >
                Apply
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
