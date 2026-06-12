import React, { useState, useEffect, useRef } from 'react';

export default function Dashboard({ initialLogs = [], onShowMessage }) {
  const [logs, setLogs] = useState([
    'SYSTEM_BOOT: AIDEN telemetry matrix initialized.',
    'SECURITY_CHECK: Node validation successful. Handshake protocol completed.',
    'NETWORK_STATUS: Connection latency 12ms. Packet drop rate 0.00%.',
    'AI_AGENT_CORE: Listening on active training data streams...',
    ...initialLogs
  ]);
  const [score, setScore] = useState(8740);
  const [epochs, setEpochs] = useState(140);
  const [loss, setLoss] = useState(0.85);
  const [isTraining, setIsTraining] = useState(false);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (initialLogs.length > 0) {
      setLogs((prev) => [...prev, ...initialLogs]);
    }
  }, [initialLogs]);

  useEffect(() => {
    // Scroll terminal to bottom
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Simulate telemetry feeds
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const mockEvents = [
          `STREAM_INGEST: Processed ${Math.floor(Math.random() * 200 + 50)} items. Latency: ${Math.floor(Math.random() * 5 + 3)}ms.`,
          `NEURAL_SYNAPSE: Weights updated for core validation node ${Math.floor(Math.random() * 100)}.`,
          `VAL_METRIC: Current validation precision: ${(Math.random() * 0.05 + 0.92).toFixed(4)}.`,
          `SYSTEM_CHECK: Core temperature 42.5°C. Cooling system at 18% output.`
        ];
        const logLine = mockEvents[Math.floor(Math.random() * mockEvents.length)];
        setLogs((prev) => [...prev, logLine]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const triggerTraining = () => {
    if (isTraining) return;
    setIsTraining(true);
    setLogs((prev) => [...prev, 'TRAIN_PROTOCOL: INITIALIZING PROTOCOL EPOCH_RUN...']);

    let currentEpoch = 0;
    const maxEpochs = 5;

    const interval = setInterval(() => {
      currentEpoch++;
      const nextLoss = Math.max(0.02, loss - (Math.random() * 0.12));
      const addedScore = Math.floor(Math.random() * 150 + 50);

      setLoss(Number(nextLoss.toFixed(4)));
      setScore((prev) => prev + addedScore);
      setEpochs((prev) => prev + 1);

      setLogs((prev) => [
        ...prev,
        `TRAIN_EPOCH: Run ${currentEpoch}/${maxEpochs} completed. Loss: ${nextLoss.toFixed(4)}. Accuracy: ${(1 - nextLoss * 0.5).toFixed(4)}. Core points: +${addedScore}.`
      ]);

      if (currentEpoch === maxEpochs) {
        clearInterval(interval);
        setIsTraining(false);
        setLogs((prev) => [...prev, 'TRAIN_PROTOCOL: PROTOCOL RUN SUCCESSFUL. SYSTEM STABILIZED.']);
        onShowMessage(`TRAIN_SUCCESS: Epoch runs completed. Accuracy converged to ${(1 - nextLoss * 0.5).toFixed(4)}.`);
      }
    }, 1200);
  };

  // Generate SVG training loss path
  const lossPoints = [
    { x: 0, y: 150 },
    { x: 100, y: 120 },
    { x: 200, y: 95 },
    { x: 300, y: 70 },
    { x: 400, y: Math.max(10, 150 * loss) }
  ];
  const svgPath = `M ${lossPoints.map(p => `${p.x} ${p.y}`).join(' L ')}`;

  return (
    <div className="flex flex-col gap-6 w-full select-none">
      {/* Top dashboard panels */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-grid-gutter">
        <div className="bg-surface-bento border border-grid-line p-6 flex flex-col justify-between">
          <span className="font-label-mono text-xs text-text-muted uppercase tracking-wider">SECURE SCORE</span>
          <h3 className="text-3xl font-extrabold text-primary-container font-mono mt-2">{score}</h3>
          <span className="text-[10px] font-label-mono text-secondary uppercase tracking-wider mt-4">Rank: #42 / 2.4k</span>
        </div>
        <div className="bg-surface-bento border border-grid-line p-6 flex flex-col justify-between">
          <span className="font-label-mono text-xs text-text-muted uppercase tracking-wider">EPOCHS RUN</span>
          <h3 className="text-3xl font-extrabold text-on-surface font-mono mt-2">{epochs}</h3>
          <span className="text-[10px] font-label-mono text-primary-container uppercase tracking-wider mt-4">Telemetry: Nominal</span>
        </div>
        <div className="bg-surface-bento border border-grid-line p-6 flex flex-col justify-between">
          <span className="font-label-mono text-xs text-text-muted uppercase tracking-wider">CONVERGENCE LOSS</span>
          <h3 className="text-3xl font-extrabold text-secondary font-mono mt-2">{loss.toFixed(4)}</h3>
          <span className="text-[10px] font-label-mono text-text-muted uppercase tracking-wider mt-4">Target: &lt; 0.0500</span>
        </div>
        <div className="bg-surface-bento border border-grid-line p-6 flex flex-col justify-between">
          <span className="font-label-mono text-xs text-text-muted uppercase tracking-wider">ACTIVE PIPELINES</span>
          <h3 className="text-3xl font-extrabold text-on-surface font-mono mt-2">3 / 4</h3>
          <span className="text-[10px] font-label-mono text-primary-container uppercase tracking-wider mt-4">Bandwidth: 100Gb/s</span>
        </div>
      </div>

      {/* Main dashboard content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
        {/* Terminal log panel */}
        <div className="lg:col-span-8 bg-surface-container-lowest border border-grid-line p-6 flex flex-col h-[400px]">
          <div className="flex justify-between items-center border-b border-grid-line pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="status-dot"></div>
              <span className="font-label-mono text-xs text-on-surface font-semibold">TELEMETRY SECURE SHELL</span>
            </div>
            <span className="font-label-mono text-[10px] text-text-muted">PORT: 8080 // SECURE</span>
          </div>
          
          <div className="flex-grow overflow-y-auto font-label-mono text-xs text-on-surface-variant flex flex-col gap-2 pr-2">
            {logs.map((log, idx) => (
              <div key={idx} className="leading-relaxed border-l border-grid-line pl-3">
                <span className="text-primary-container mr-2">&gt;</span>
                {log}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
        </div>

        {/* Neural Convergence Visualizer */}
        <div className="lg:col-span-4 bg-surface-bento border border-grid-line p-6 flex flex-col justify-between min-h-[400px]">
          <div>
            <h4 className="font-label-mono text-xs text-on-surface uppercase tracking-wider border-b border-grid-line pb-3 mb-4 font-semibold">
              Training Convergence
            </h4>
            <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
              Visualize real-time validation loss across epoch steps. Trigger active runs to train the network.
            </p>
            
            <div className="bg-surface-container-lowest border border-grid-line h-[160px] w-full flex items-center justify-center relative">
              <svg className="w-full h-full p-2 overflow-visible" viewBox="0 0 400 160">
                {/* Grid Lines */}
                <line x1="0" y1="40" x2="400" y2="40" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="100" y1="0" x2="100" y2="160" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="200" y1="0" x2="200" y2="160" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="300" y1="0" x2="300" y2="160" stroke="#1A1A1A" strokeWidth="1" />

                {/* Training curve path */}
                <path
                  d={svgPath}
                  fill="none"
                  stroke="#00d1ff"
                  strokeWidth="2.5"
                  className="transition-all duration-500"
                />

                {/* Nodes */}
                {lossPoints.map((p, idx) => (
                  <circle
                    key={idx}
                    cx={p.x}
                    cy={p.y}
                    r="4"
                    fill={idx === lossPoints.length - 1 ? '#cf5cff' : '#00d1ff'}
                    className="transition-all duration-500"
                  />
                ))}
              </svg>
              
              <div className="absolute bottom-2 right-2 font-label-mono text-[9px] text-text-muted">
                LOSS: {loss.toFixed(4)}
              </div>
            </div>
          </div>

          <button
            onClick={triggerTraining}
            disabled={isTraining}
            className={`w-full py-4 font-label-mono text-xs uppercase tracking-wider font-bold cursor-pointer rounded-none transition-all duration-300 ${
              isTraining 
                ? 'bg-grid-line text-text-muted cursor-not-allowed border border-grid-line'
                : 'btn-primary border border-primary-container'
            }`}
          >
            {isTraining ? 'Training Node...' : 'Run Epoch Step'}
          </button>
        </div>
      </div>
    </div>
  );
}
