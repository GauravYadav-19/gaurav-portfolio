'use client';

import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden">
      {/* Radial gradient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/20 via-violet-500/10 to-transparent rounded-full blur-3xl opacity-30" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Name with animated gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-gradient">Gaurav Yadav</span>
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Full-Stack AI Engineer
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Architecting production-grade AI systems with sub-500ms latency, real-time observability,
          and constraint-driven LLM pipelines. Specialized in multi-agent coordination and dynamic UI rendering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <a
            href="https://github.com/GauravYadav-19"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-black rounded-lg px-8 py-4 border border-cyan-500/50 group-hover:border-cyan-500 transition-colors flex items-center gap-2 group-hover:bg-white/5">
              <Github size={20} />
              View GitHub
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>


        </motion.div>
      </motion.div>
    </section>
  );
}
