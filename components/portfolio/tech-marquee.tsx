'use client';

import { Code, Database, Cloud, GitBranch, Zap, Cpu } from 'lucide-react';

export function TechMarquee() {
  const technologies = [
    { name: 'Python', icon: Cpu },
    { name: 'FastAPI', icon: Code },
    { name: 'Next.js', icon: Code },
    { name: 'Docker', icon: Database },
    { name: 'Azure', icon: Cloud },
    { name: 'WebSockets', icon: Zap },
    { name: 'Supabase', icon: Database },
    { name: 'LangChain', icon: GitBranch },
  ];

  // Duplicate for seamless loop
  const extendedTechs = [...technologies, ...technologies];

  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8">
        <h3 className="text-lg font-semibold text-slate-300">Tech Stack</h3>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <div className="flex gap-4 animate-scroll">
          {extendedTechs.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${idx}`}
                className="glass-hover rounded-full px-6 py-3 flex items-center gap-2 whitespace-nowrap flex-shrink-0"
              >
                <Icon size={18} className="text-cyan-400" />
                <span className="text-sm font-medium text-white">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
