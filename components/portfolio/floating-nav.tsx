'use client';

import { motion } from 'framer-motion';
import { Home, Settings, Zap } from 'lucide-react';
import { useState } from 'react';

export function FloatingNav() {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Architecture', icon: Zap, href: '#architecture' },
    { name: 'Stack', icon: Settings, href: '#stack' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto flex justify-center"
    >
      <div className="bg-black/50 backdrop-blur-md border border-white/10 shadow-2xl rounded-full px-6 py-3 flex items-center justify-between md:justify-center gap-4 md:gap-8 w-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-cyan-400 transition-all duration-200 group cursor-pointer"
            >
              <Icon size={16} className="group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden md:inline">{item.name}</span>
            </a>
          );
        })}

        <div className="hidden md:block w-px h-6 bg-white/10" />

        <motion.a
          href="mailto:gauravyadavbkn@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative rounded-full font-semibold text-white overflow-hidden group cursor-pointer shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-white/5 border border-cyan-500/50 group-hover:border-transparent rounded-full px-4 py-2 md:px-5 md:py-2 transition-all duration-300 text-sm">
            Connect
          </div>
        </motion.a>
      </div>
    </motion.nav>
  );
}