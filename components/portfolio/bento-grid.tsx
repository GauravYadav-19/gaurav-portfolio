'use client';

import { ProjectCard } from './project-card';
import { Activity, Brain, Package, Server } from 'lucide-react';

export function BentoGrid() {
  const projects = [
    {
      id: 'seg-fault',
      title: 'Seg Fault',
      description: 'Ultra-low latency multi-agent coordination engine with distributed consensus',
      technologies: ['Docker', 'Azure', 'WebSockets'],
      icon: <Server size={64} />,
      highlight: '⚡ Sub-500ms latency',
      gridClass: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 'ui-sentinel',
      title: 'UI Sentinel',
      description: 'AI-powered UI testing with Plan-Act-Observe asynchronous tool-calling loops',
      technologies: ['LLM', 'Vision'],
      icon: <Brain size={48} />,
      highlight: '🤖 Async tool coordination',
      gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'nettra',
      title: 'Nettra',
      description: 'Production observability platform with real-time telemetry and diagnostics',
      technologies: ['Observability', 'Metrics'],
      icon: <Activity size={48} />,
      highlight: '📊 Real-time analytics',
      gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'marg-ai',
      title: 'Marg AI',
      description: 'Dynamic UI rendering engine with JSON constraint-based LLM pipelines',
      technologies: ['LLM', 'JSON', 'React'],
      icon: <Package size={48} />,
      highlight: '📦 Constraint-driven generation',
      gridClass: 'md:col-span-2 md:row-span-1',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Engineering <span className="text-gradient">Architecture</span>
        </h2>
        <p className="text-slate-300 text-lg font-light">
          Showcase of production-grade AI systems and infrastructure
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[300px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${project.gridClass}`}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              icon={project.icon}
              highlight={project.highlight}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
