import React from 'react';

export default function ModuleCard({ module, onSelect }) {
  const { id, title, description, code, icon, isSecondary } = module;

  return (
    <div 
      className={`bg-surface-bento bento-border p-8 flex flex-col justify-between min-h-[300px] cursor-pointer group ${
        isSecondary ? 'bento-hover-blue' : 'bento-hover'
      }`}
      onClick={() => onSelect(module)}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <span 
            className={`font-label-mono text-xs px-2 py-1 rounded-sm uppercase tracking-wider ${
              isSecondary 
                ? 'text-secondary bg-secondary/10' 
                : 'text-primary-container bg-primary-container/10'
            }`}
          >
            {code}
          </span>
          <span 
            className={`material-symbols-outlined ${
              isSecondary ? 'text-secondary' : 'text-primary-container'
            }`} 
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            {icon}
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-on-surface mb-2 font-headline-md tracking-tight group-hover:text-primary-container transition-colors duration-300">
          {title}
        </h2>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onSelect(module);
        }}
        className={`mt-6 font-label-mono text-xs flex items-center gap-2 transition-colors duration-300 self-start group/btn ${
          isSecondary ? 'text-secondary hover:text-white' : 'text-primary-container hover:text-white'
        }`}
      >
        Explore Syllabus 
        <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </button>
    </div>
  );
}
