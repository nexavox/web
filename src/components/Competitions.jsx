import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <div className="font-label-mono text-xs text-primary-container flex gap-1 font-semibold select-none">
      <span>{days}D</span>:
      <span>{String(hours).padStart(2, '0')}H</span>:
      <span>{String(minutes).padStart(2, '0')}M</span>:
      <span>{String(secs).padStart(2, '0')}S</span>
    </div>
  );
}

export default function Competitions({ competitions, onShowMessage }) {
  return (
    <div className="flex flex-col gap-6 w-full select-none">
      {/* Header section */}
      <div className="bg-surface-bento border border-grid-line p-8">
        <h2 className="text-3xl font-bold font-headline-md tracking-tight text-on-surface mb-2">
          Algorithmic Competitions
        </h2>
        <p className="text-on-surface-variant font-body-md max-w-2xl">
          Test your boundaries. Push deep learning models to their computational limits, optimize complex distributed graph datasets, and secure neural network models against adversarial attacks to win real-world stakes.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {competitions.map((challenge) => (
          <div 
            key={challenge.id}
            className="bg-surface-bento border border-grid-line flex flex-col justify-between group bento-hover-blue overflow-hidden"
          >
            <div>
              {/* Competition Card Image */}
              <div className="w-full h-48 relative overflow-hidden border-b border-grid-line">
                <img 
                  src={challenge.imageUrl || '/aiden_logo.png'} 
                  alt={challenge.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-mono text-xs px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 font-semibold uppercase tracking-wider">
                    {challenge.difficulty}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-lg">
                    {challenge.icon}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold font-headline-md mb-2 text-on-surface group-hover:text-secondary transition-colors duration-300">
                  {challenge.title}
                </h3>
                
                <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex flex-col gap-4">
              <div className="flex flex-col gap-4 border-t border-grid-line pt-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-label-mono text-text-muted">REWARD POOL</span>
                  <span className="font-label-mono font-bold text-on-surface">{challenge.prize}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-label-mono text-text-muted">ENDS IN</span>
                  <CountdownTimer initialSeconds={challenge.endsInSeconds} />
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-label-mono text-text-muted">REGISTERED TEAMS</span>
                  <span className="font-mono text-on-surface font-semibold">{challenge.registered}</span>
                </div>

                <a
                  href={challenge.learnMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onShowMessage(`REDIRECT_INITIALIZED: Connecting to external hackathon challenge nodes at ${challenge.title.toUpperCase()}.`)}
                  className="btn-blue font-label-mono text-xs py-3 w-full uppercase tracking-wider font-semibold cursor-pointer rounded-none border-none text-center block"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
