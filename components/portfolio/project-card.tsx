'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: ReactNode;
  highlight?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  icon,
  highlight,
  className = '',
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`glass-glow rounded-2xl p-6 flex flex-col justify-between h-full border border-white/10 transition-all duration-300 ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-300 mb-3 leading-relaxed">{description}</p>
          {highlight && (
            <p className="text-xs text-cyan-300 font-semibold">{highlight}</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-white/8 border border-white/20 rounded-full px-3 py-1 text-slate-200 hover:bg-white/12 hover:border-white/30 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity">
        <div className="text-cyan-400">{icon}</div>
      </div>
    </motion.div>
  );
}
