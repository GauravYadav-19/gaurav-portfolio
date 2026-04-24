import { FloatingNav } from '@/components/portfolio/floating-nav';
import { HeroSection } from '@/components/portfolio/hero-section';
import { TechMarquee } from '@/components/portfolio/tech-marquee';
import { BentoGrid } from '@/components/portfolio/bento-grid';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <FloatingNav />
      <div id="home">
        <HeroSection />
      </div>
      <div id="stack">
        <TechMarquee />
      </div>
      <div id="architecture">
        <BentoGrid />
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-400 text-sm">
            <p>&copy; 2024 Gaurav Yadav. Crafted with precision.</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/GauravYadav-19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav-yadav19/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
