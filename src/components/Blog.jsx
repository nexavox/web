import React, { useState } from 'react';

const initialBlogs = [
  {
    id: 'blog-01',
    title: 'Google DeepMind wins CVPR 2026 Best Paper for D4RT',
    category: 'RESEARCH',
    date: '2026-06-12',
    author: 'Aiden Editor',
    imageUrl: '/d4rt_cover.jpg',
    summary: 'Google DeepMind just won the biggest prize in computer vision with D4RT, a single transformer model that changes how AI sees the moving world 300x faster than before.',
    readTime: '5 min read',
    content: `Google DeepMind just won the biggest prize in computer vision and most people haven't heard about it yet. 
It's called D4RT.
And it changes how AI sees the moving world. 

Here's what happened 👇 
Before D4RT, understanding a moving scene in 3D required 3 separate AI tools:
- One to measure depth
- One to track moving objects
- One to figure out camera position.

They were slow, heavy, and had to be stitched together manually. 
D4RT replaces all 3 with a single transformer model. 

It asks just ONE master question: "Where is this pixel in 3D space, at any time, from any camera angle?"  
That's it. One question. Every task solved. 

The results? 
- 18x to 300x faster than previous best models  
- Works on ordinary video, no special sensors 
- Best Paper Award at CVPR 2026 
- Built by Google DeepMind + University of Oxford + UCL 

But here's what the AI community is fighting about: No public code. No open API. Private datasets. Can a paper claim "best research" if nobody can reproduce it?

I think this is the most important AI paper of June 2026, controversy included. What do you think, should Best Paper require open source? 

Paper: https://lnkd.in/gYq2vgaT`
  },
  {
    id: 'blog-02',
    title: 'Beyond D4RT: The Future of Spatial Intelligence in Autonomous Robotics',
    category: 'ROBOTICS',
    date: '2026-06-12',
    author: 'Aiden Editor',
    imageUrl: '/d4rt_cover.jpg',
    summary: 'Following the D4RT breakthrough, we explore how spatial foundation models are redefining navigation and environment mapping in real-time robotics.',
    readTime: '4 min read',
    content: `Following the D4RT breakthrough, the conversation in spatial intelligence has rapidly shifted toward robotics. If a single transformer model can solve depth, tracking, and camera localization 300x faster than previous systems, the implications for autonomous machines are immediate.

Here is what we are looking at next 👇
Traditional robot navigation relies on heavy lidar arrays and complex sensor fusion pipelines. These systems are:
- High power-consuming
- Latency-prone in dynamic environments
- Costly to manufacture at scale.

By adopting D4RT-like unified spatial transformers, future robots can:
- Navigate using standard monocular camera feeds.
- Build instantaneous 4D representations of moving environments.
- Respond to dynamic obstacles in sub-milliseconds.

But the open-access debate remains. Without open weights or reproducible implementations, the robotics community is forced to build their own open-source alternatives. Several labs are already collaborating on open-D4RT initiatives to democratize these architectures.`
  },
  {
    id: 'blog-03',
    title: 'The Closed-Source Controversy in Modern Computer Vision Research',
    category: 'COMMUNITY',
    date: '2026-06-12',
    author: 'Aiden Editor',
    imageUrl: '/d4rt_cover.jpg',
    summary: 'CVPR 2026 sparked a fierce debate: Should prestigious academic awards be granted to papers with private code and closed datasets?',
    readTime: '6 min read',
    content: `The CVPR 2026 Best Paper Award for D4RT has ignited a firestorm within the machine learning community. While the technical achievements of the paper are undisputed, the decision to award the highest honor in computer vision to a completely closed project has reopened deep industry divisions.

Key arguments in the debate 👇
On one side, proponents argue that:
- Breakthrough research is valuable regardless of release status.
- Commercial entities like Google DeepMind must protect IP.
- The theoretical architecture inspires subsequent open models.

On the other side, the open science community is united:
- True science requires reproducibility.
- Private datasets make verification impossible.
- Funding-heavy labs gain awards on unverified claims.

What do you think? Should top-tier conferences like CVPR and NeurIPS enforce open-source requirements for award eligibility? Join the discussion on our community channels.`
  }
];

export default function Blog({ blogs = initialBlogs }) {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-void-black text-on-surface px-4 md:px-8 py-10 select-none animate-fadeIn">
        <div className="max-w-4xl mx-auto bg-surface-bento border border-grid-line p-6 md:p-10">
          {/* Back button */}
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-primary font-label-mono text-xs uppercase tracking-wider mb-8 hover:text-secondary transition-colors duration-300 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Return to Article index
          </button>

          {/* Article Header Image */}
          <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden border border-grid-line mb-8">
            <img 
              src={selectedPost.imageUrl || '/aiden_logo.png'} 
              alt={selectedPost.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="font-label-mono text-xs px-2 py-0.5 bg-primary-container/10 text-primary border border-primary/20 font-bold uppercase tracking-wider">
              {selectedPost.category}
            </span>
            <span className="font-label-mono text-xs text-on-surface-variant">{selectedPost.date}</span>
            <span className="font-label-mono text-xs text-on-surface-variant">{selectedPost.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold font-headline-lg text-on-surface mb-6 tracking-tighter leading-tight">
            {selectedPost.title}
          </h1>

          <div className="flex items-center gap-3 mb-8 border-b border-grid-line pb-6">
            <div className="w-8 h-8 rounded-none bg-surface-container border border-grid-line flex items-center justify-center font-label-mono text-xs text-primary font-bold">
              {selectedPost.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="text-xs font-semibold text-on-surface">{selectedPost.author}</div>
              <div className="text-[10px] font-label-mono text-on-surface-variant uppercase">Core Architect</div>
            </div>
          </div>

          {/* Article Body */}
          <div className="font-body-lg text-on-surface-variant text-base leading-relaxed whitespace-pre-line space-y-6 font-mono border-b border-grid-line pb-8 mb-8">
            {selectedPost.content}
          </div>

          <div className="flex justify-end">
            <button 
              onClick={() => setSelectedPost(null)}
              className="btn-primary font-label-mono text-xs px-6 py-3 uppercase tracking-wider font-semibold cursor-pointer border-none"
            >
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full select-none animate-fadeIn">
      {/* Blog Landing Header */}
      <div className="bg-surface-bento border border-grid-line p-8">
        <h2 className="text-3xl font-bold font-headline-md tracking-tight text-on-surface mb-2">
          Technical Publication Index
        </h2>
        <p className="text-on-surface-variant font-body-md max-w-2xl">
          Deep-dive analysis on distributed machine learning, brutalist interface engineering, and cryptographic node defense models authored by the AIDEN engineering core.
        </p>
      </div>

      {/* Featured Blog */}
      {blogs.filter(b => b.id === 'blog-01').map(featured => (
        <div 
          key={featured.id}
          className="bg-surface-bento border border-grid-line flex flex-col md:flex-row group bento-hover cursor-pointer overflow-hidden"
          onClick={() => setSelectedPost(featured)}
        >
          <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full relative overflow-hidden border-b md:border-b-0 md:border-r border-grid-line">
            <img 
              src={featured.imageUrl || '/aiden_logo.png'} 
              alt={featured.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-8 flex-grow flex flex-col justify-between md:w-1/2">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-label-mono text-xs px-2 py-0.5 bg-primary-container/10 text-primary border border-primary/20 font-bold uppercase tracking-wider">
                  FEATURED REPORT // {featured.category}
                </span>
                <span className="font-label-mono text-xs text-on-surface-variant">{featured.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold font-headline-md mb-4 text-on-surface group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">
                {featured.title}
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {featured.summary}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-grid-line pt-6 mt-6">
              <div className="flex items-center gap-2">
                <span className="font-label-mono text-xs text-primary">{featured.readTime}</span>
                <span className="text-on-surface-variant text-xs">•</span>
                <span className="font-label-mono text-xs text-on-surface-variant">By {featured.author}</span>
              </div>
              <button className="font-label-mono text-xs text-on-surface hover:text-primary transition-colors uppercase font-bold cursor-pointer">
                Read Article
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Secondary Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.filter(b => b.id !== 'blog-01').map(post => (
          <div 
            key={post.id}
            className="bg-surface-bento border border-grid-line flex flex-col group bento-hover-cyan cursor-pointer overflow-hidden"
            onClick={() => setSelectedPost(post)}
          >
            <div className="w-full h-48 relative overflow-hidden border-b border-grid-line">
              <img 
                src={post.imageUrl || '/aiden_logo.png'} 
                alt={post.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-mono text-xs text-secondary font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="font-label-mono text-[10px] text-on-surface-variant">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold font-headline-md mb-3 text-on-surface group-hover:text-secondary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-grid-line pt-4 mt-6">
                <div className="flex items-center gap-2">
                  <span className="font-label-mono text-xs text-on-surface-variant">{post.readTime}</span>
                  <span className="text-on-surface-variant text-xs">•</span>
                  <span className="font-label-mono text-xs text-on-surface-variant">By {post.author}</span>
                </div>
                <button className="font-label-mono text-xs text-secondary hover:text-primary transition-colors uppercase font-bold cursor-pointer">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
