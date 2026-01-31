import React from 'react';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020202] pt-12 pb-8 font-mono">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 border border-white/20 flex items-center justify-center bg-white/5">
                <Terminal className="w-4 h-4 text-slate-400" />
             </div>
             <div>
                <span className="block text-lg font-bold text-white tracking-tight">RENDER_LITE</span>
                <span className="text-[10px] text-slate-500">PLATFORM_VER: 2.0.4</span>
             </div>
           </div>
           
           <div className="flex gap-8 text-xs text-slate-400 uppercase tracking-wider">
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">API Reference</a>
              <a href="#" className="hover:text-primary transition-colors">Status</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
           </div>
        </div>
        
        <div className="border-t border-dashed border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase">
           <p>© {new Date().getFullYear()} RENDER_LITE INC. ALL RIGHTS RESERVED.</p>
           <p className="mt-2 md:mt-0">
             <span className="text-green-900 mr-2">●</span>
             SYSTEMS ONLINE
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;