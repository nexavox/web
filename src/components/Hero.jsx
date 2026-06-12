import React from 'react';
import { Link } from 'react-router-dom';
import NeuralCanvas from './NeuralCanvas';

export default function Hero() {
  return (
    <section className="w-full min-h-[500px] md:min-h-[600px] lg:min-h-[716px] bg-surface-bento bento-border relative overflow-hidden flex flex-col justify-center p-8 md:p-12 lg:p-24">
      {/* Dynamic Background Canvas */}
      <NeuralCanvas />
      
      {/* Tech Grid overlay lines to enforce the Brutalist aesthetic */}
      <div className="absolute inset-0 pointer-events-none border border-grid-line opacity-20 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-4xl select-none">
        <div className="flex items-center gap-3 mb-6">
          <div className="status-dot"></div>
          <span className="font-label-mono text-xs text-primary uppercase tracking-widest font-semibold">System Active</span>
        </div>
        
        <h1 className="font-display-xl text-7xl md:text-[100px] lg:text-[120px] font-extrabold text-on-surface mb-2 leading-none tracking-tighter neon-text-primary">
          AIDEN
        </h1>
        <div className="font-label-mono text-xs md:text-sm text-secondary uppercase tracking-widest font-bold mb-8">
          AI &amp; Data Exploration Network
        </div>
        
        <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
          The premier nexus for AI researchers and data scientists. Explore cutting-edge machine learning topics, connect with elite internships, and dominate algorithmic competitions within a high-density intelligence network.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/learn"
            className="btn-primary font-label-mono text-xs px-6 py-3 uppercase tracking-wider font-semibold text-center leading-normal block"
          >
            Explore Syllabus
          </Link>
          <Link 
            to="/competitions"
            className="btn-secondary font-label-mono text-xs px-6 py-3 uppercase tracking-wider font-semibold text-center leading-normal block"
          >
            Active Challenges
          </Link>
        </div>
      </div>
    </section>
  );
}
