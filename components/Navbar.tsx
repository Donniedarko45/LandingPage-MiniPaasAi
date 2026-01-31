import React, { useState } from 'react';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 border-b border-white/10 backdrop-blur-md">
      {/* Top tiny ticker */}
      <div className="w-full bg-surface border-b border-white/5 py-1 px-4 hidden md:flex justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest">
        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>System Status: Operational</span>
        <span>Region: US-EAST-1</span>
        <span>Latency: 12ms</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 border border-primary/50 flex items-center justify-center bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <span className="text-lg font-mono font-bold tracking-tight text-white group-hover:text-primary transition-colors group-hover:text-glow-primary">
            RENDER_LITE<span className="animate-pulse text-primary">_</span>
          </span>
        </div>

        {/* Desktop Links - HUD Style */}
        <div className="hidden md:flex items-center gap-1">
          {['Product', 'Features', 'Deployments', 'Docs'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 text-xs font-mono font-bold text-slate-400 hover:text-primary transition-all uppercase relative group"
            >
              <span className="opacity-0 group-hover:opacity-100 absolute left-2 text-primary transition-opacity text-glow-primary">[</span>
              <span className="group-hover:text-glow-primary transition-all">{link}</span>
              <span className="opacity-0 group-hover:opacity-100 absolute right-2 text-primary transition-opacity text-glow-primary">]</span>
            </a>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-xs font-mono text-slate-300 hover:text-secondary hover:underline underline-offset-4 decoration-secondary transition-all hover:text-glow-secondary">
            // LOGIN
          </button>
          <button className="px-6 py-2 text-xs font-mono font-bold text-black bg-primary hover:bg-white transition-all duration-300 uppercase tracking-wider skew-x-[-10deg] btn-hud-primary">
             <span className="block skew-x-[10deg]">Initialize</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-primary border border-white/10 p-2 hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-mono">
              {['Product', 'Features', 'Deployments', 'Docs'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-slate-400 hover:text-primary hover:text-glow-primary uppercase border-l-2 border-transparent hover:border-primary pl-4 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <button className="text-left text-sm text-secondary uppercase hover:text-glow-secondary">
                &gt; Login Sequence
              </button>
              <button className="w-full py-3 text-sm font-bold text-black bg-primary uppercase hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow">
                Initialize Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;