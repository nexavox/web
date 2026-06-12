import React from 'react';
import { externalSocialLinks } from '../data';

export default function Footer({ onSelectTab }) {
  return (
    <footer className="w-full px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-void-black border-t border-grid-line select-none">
      <div className="text-label-mono text-[10px] font-bold text-primary opacity-85 hover:opacity-100 transition-opacity uppercase">
        © 2026 AI & Data Exploration Network. ALL RIGHTS RESERVED.
      </div>
      <nav className="flex flex-wrap justify-center gap-6">
        <button
          onClick={() => onSelectTab('learn')}
          className="text-label-mono text-[10px] text-text-muted hover:text-primary transition-colors opacity-85 hover:opacity-100 cursor-pointer"
        >
          Syllabus
        </button>
        <button
          onClick={() => onSelectTab('jobs')}
          className="text-label-mono text-[10px] text-text-muted hover:text-primary transition-colors opacity-85 hover:opacity-100 cursor-pointer"
        >
          Careers
        </button>
        <a
          href={externalSocialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-label-mono text-[10px] text-text-muted hover:text-primary transition-colors opacity-85 hover:opacity-100"
        >
          linkedin
        </a>
        {/* <a 
          href={externalSocialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-label-mono text-[10px] text-text-muted hover:text-primary transition-colors opacity-85 hover:opacity-100"
        >
          GitHub
        </a> */}
      </nav>
    </footer>
  );
}
