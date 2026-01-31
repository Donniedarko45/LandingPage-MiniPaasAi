import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Copy, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Building containerized environment...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 pb-20 px-6 min-h-[85vh] flex flex-col items-center justify-center border-b border-white/5">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-10 w-px h-full bg-white/5"></div>
        <div className="absolute top-0 right-10 w-px h-full bg-white/5"></div>
        <div className="absolute bottom-10 left-0 w-full h-px bg-white/5"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-primary text-xs mb-6 tracking-widest uppercase flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
            <span className="text-glow-primary">System Ready // V2.0 Stable</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-none font-mono"
          >
            DEPLOY<br/>
            BACKEND<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
              SERVICES
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-l-2 border-secondary/50 pl-6 mb-10"
          >
            <p className="text-lg md:text-xl text-slate-400 font-mono leading-relaxed">
              Automated build pipelines.
              <br/>Container orchestration.
              <br/>Zero manual configuration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-primary text-black font-mono font-bold uppercase tracking-wider transition-all clip-path-polygon btn-hud-primary hover:bg-white">
              [ Deploy from GitHub ]
            </button>
            
            <button className="px-8 py-4 bg-transparent border border-white/20 hover:border-primary text-white font-mono uppercase tracking-wider transition-all flex items-center gap-2 group hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="text-secondary group-hover:text-primary transition-colors">&gt;</span> 
              <span className="group-hover:text-glow-primary">Documentation</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Terminal Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          {/* Cyber decorative frame */}
          <div className="absolute -inset-1 border border-white/10 z-0 transition-all duration-300 group-hover:border-primary/30">
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-10"></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-10"></div>
          </div>

          <div className="relative z-10 bg-[#080808] border border-white/10 p-4 font-mono text-sm shadow-2xl overflow-hidden">
             {/* CRT Overlay Effects */}
            <div className="absolute inset-0 crt-overlay pointer-events-none z-20"></div>
            <div className="scanline"></div>

            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2 relative z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              <div className="text-xs text-slate-600 uppercase">bash -- deploy.sh</div>
            </div>
            
            <div className="space-y-2 text-slate-300 h-[300px] overflow-hidden relative z-10">
               <div className="flex gap-2">
                  <span className="text-green-500">➜</span>
                  <span className="text-blue-400">~</span>
                  <span>git push render-lite main</span>
               </div>
               <div className="text-slate-500 text-xs mt-2">Remote: Resolving deltas: 100% (12/12), completed with 4 local objects.</div>
               <div className="text-slate-500 text-xs">Remote: Verifying connectivity... done.</div>
               <div className="mt-4 text-primary text-glow-primary">
                  [RENDER-LITE] Build Triggered ID #8f3a21
               </div>
               <div className="pl-4 border-l border-white/10 text-slate-400 text-xs space-y-1">
                  <div>→ Detecting runtime... <span className="text-green-400">Node.js detected</span></div>
                  <div>→ Install dependencies... <span className="text-green-400">Done (2.4s)</span></div>
                  <div>→ {typedText}<span className="animate-blink bg-primary text-black ml-1 px-1"> </span></div>
               </div>
               
               {/* Simulated future logs */}
               <div className="opacity-50 blur-[1px] mt-2 text-xs">
                  <div>→ Exposing port 3000</div>
                  <div>→ Allocating internal IP 10.0.4.21</div>
               </div>
            </div>

            <div className="absolute bottom-4 right-4 text-xs text-secondary animate-pulse z-10 font-bold tracking-widest">
               STATUS: PROCESSING
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;