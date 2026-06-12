import React, { useState } from 'react';

const initialNews = [
  {
    id: 'news-01',
    title: 'Sparse Attention Architectures for Core Efficiency',
    category: 'RESEARCH',
    date: '2026-06-10',
    summary: 'A new paper demonstrates a 40% memory reduction during training by dynamically pruning attention weights based on activation density.',
    readTime: '6 min read',
    content: 'Researchers have published a novel optimization technique that uses sparse attention matrices during model training. By dynamically identifying low-weight activation pathways, the model prunes unnecessary connection parameters on the fly, leading to substantial energy and memory gains. Tests on 7B models show near-identical benchmark scoring with 40% less memory overhead.',
    isFeatured: true
  },
  {
    id: 'news-02',
    title: 'Distributed Compute Networks: The Decentralization Wave',
    category: 'SYSTEMS',
    date: '2026-06-08',
    summary: 'AIDEN network telemetry registers record-high participation in global volunteer training runs for public alignment models.',
    readTime: '4 min read',
    content: 'The AIDEN decentralized network has achieved a milestone of 10,000 active nodes concurrently contributing compute cycles. Using privacy-preserving federated learning algorithms, the platform successfully aligned a public domain research model on complex logical reasoning datasets without centralized storage hubs.'
  },
  {
    id: 'news-03',
    title: 'Post-Quantum Security Metrics for LLM Gateways',
    category: 'SECURITY',
    date: '2026-06-04',
    summary: 'GatePrep AI releases defensive telemetry criteria to shield model weights against active side-channel attacks.',
    readTime: '8 min read',
    content: 'As quantum computation nears commercial viability, protecting neural model architectures from decryption attacks becomes paramount. The new GatePrep telemetry protocol integrates lattice-based encryption layers directly into model weight storage files, ensuring zero-knowledge query processing at scale.'
  }
];

export default function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="flex flex-col gap-6 w-full select-none">
      {/* Featured News Banner */}
      {initialNews.filter(n => n.isFeatured).map(featured => (
        <div 
          key={featured.id}
          className="bg-surface-bento border border-grid-line p-8 flex flex-col justify-between group bento-hover cursor-pointer"
          onClick={() => setSelectedNews(featured)}
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-label-mono text-xs px-2 py-1 bg-primary-container/10 text-primary-container border border-primary-container/20 font-bold uppercase tracking-wider">
                Featured Research
              </span>
              <span className="font-label-mono text-xs text-text-muted">{featured.date}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold font-headline-md mb-4 text-on-surface group-hover:text-primary-container transition-colors duration-300 tracking-tight leading-tight">
              {featured.title}
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base max-w-3xl leading-relaxed mb-6">
              {featured.summary}
            </p>
          </div>
          <div className="flex items-center gap-4 border-t border-grid-line pt-6 mt-6">
            <span className="font-label-mono text-xs text-primary-container">{featured.readTime}</span>
            <span className="text-text-muted">•</span>
            <button className="font-label-mono text-xs text-on-surface hover:text-primary-container transition-colors uppercase font-semibold">
              Read Document
            </button>
          </div>
        </div>
      ))}

      {/* Grid for secondary news */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
        {initialNews.filter(n => !n.isFeatured).map(item => (
          <div 
            key={item.id}
            className="bg-surface-bento border border-grid-line p-8 flex flex-col justify-between group bento-hover-magenta cursor-pointer"
            onClick={() => setSelectedNews(item)}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-label-mono text-xs text-secondary font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="font-label-mono text-[10px] text-text-muted">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold font-headline-md mb-3 text-on-surface group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {item.summary}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-grid-line pt-4 mt-6">
              <span className="font-label-mono text-xs text-text-muted">{item.readTime}</span>
              <button className="font-label-mono text-xs text-secondary hover:text-white transition-colors uppercase font-semibold">
                Open Node
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* News Article Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-void-black/85 flex items-center justify-center p-4 z-[999] backdrop-blur-md">
          <div className="bg-surface-dim border border-grid-line max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="font-label-mono text-xs px-2 py-1 bg-surface-container-high border border-grid-line text-primary-container font-semibold">
                {selectedNews.category}
              </span>
              <span className="font-label-mono text-xs text-text-muted">{selectedNews.date}</span>
              <span className="font-label-mono text-xs text-text-muted">{selectedNews.readTime}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold font-headline-md mb-4 text-on-surface leading-tight">
              {selectedNews.title}
            </h3>

            <p className="text-sm font-semibold text-secondary mb-6 font-mono border-l-2 border-secondary pl-4 py-1 italic">
              {selectedNews.summary}
            </p>

            <div className="text-on-surface-variant text-sm md:text-base leading-relaxed space-y-4 font-body-md border-t border-grid-line pt-6">
              <p>{selectedNews.content}</p>
              <p>
                This ongoing work feeds directly into the AIDEN platform core systems, providing users with live opportunities to implement corresponding optimization nodes in their own pipelines. Find complete datasets and documentation reference models inside our repositories.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-grid-line flex justify-end">
              <button 
                onClick={() => setSelectedNews(null)}
                className="btn-secondary font-label-mono text-xs px-6 py-2 uppercase tracking-wider font-semibold"
              >
                Close Connection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
