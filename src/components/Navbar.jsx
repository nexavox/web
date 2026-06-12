import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/learn', label: 'Learn' },
    { path: '/blog', label: 'Blog' },
    { path: '/competitions', label: 'Competitions' },
    { path: '/jobs', label: 'Jobs' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-4 bg-void-black border-b border-grid-line shadow-sm">
      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          className="flex items-center select-none cursor-pointer"
        >
          <img
            src="/main_logo.png"
            alt="AIDEN"
            className="h-7 w-auto object-contain brightness-0"
          />
        </NavLink>
        <nav className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible pr-4 md:pr-0">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `text-xs font-semibold uppercase tracking-wider transition-colors duration-300 whitespace-nowrap pb-1 cursor-pointer ${isActive
                ? 'text-primary border-b-2 border-primary font-bold'
                : 'text-on-surface-variant hover:text-primary'
                }`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* <div className="hidden md:block">
        <span className="font-label-mono text-[10px] text-text-muted">
          INTELLIGENCE MATRIX V2.5 // LIGHT THEME
        </span>
      </div> */}
    </header>
  );
}
