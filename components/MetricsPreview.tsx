import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { time: 'T-9', cpu: 12, mem: 240 },
  { time: 'T-8', cpu: 15, mem: 250 },
  { time: 'T-7', cpu: 45, mem: 400 },
  { time: 'T-6', cpu: 30, mem: 320 },
  { time: 'T-5', cpu: 55, mem: 450 },
  { time: 'T-4', cpu: 40, mem: 380 },
  { time: 'T-3', cpu: 25, mem: 290 },
  { time: 'T-2', cpu: 35, mem: 310 },
  { time: 'T-1', cpu: 80, mem: 600 },
  { time: 'NOW', cpu: 60, mem: 520 },
];

const MetricsPreview: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 mb-20">
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Header / Text */}
        <div className="lg:col-span-1">
          <div className="border-l-2 border-primary pl-6">
            <h2 className="text-4xl font-mono font-bold text-white mb-6 uppercase text-glow-white">
              System<br/>Telemetry
            </h2>
            <p className="text-slate-400 font-sans mb-8">
              Granular observability into application performance. No external agents required.
            </p>
            <ul className="font-mono text-sm space-y-4">
               <li className="flex items-center gap-3 group cursor-default">
                  <span className="w-3 h-3 border border-primary bg-primary/20 group-hover:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-shadow"></span>
                  <span className="text-white group-hover:text-primary transition-colors">CPU_LOAD_AVG</span>
               </li>
               <li className="flex items-center gap-3 group cursor-default">
                  <span className="w-3 h-3 border border-secondary bg-secondary/20 group-hover:shadow-[0_0_10px_rgba(255,42,109,0.5)] transition-shadow"></span>
                  <span className="text-white group-hover:text-secondary transition-colors">MEM_USAGE_HEAP</span>
               </li>
            </ul>
          </div>
        </div>

        {/* Dashboard UI */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-black border border-white/20 p-1 relative hover:border-white/40 transition-colors duration-500"
        >
          {/* Header */}
          <div className="bg-[#111] p-2 flex justify-between items-center border-b border-white/10 mb-4">
             <span className="font-mono text-xs text-primary text-glow-primary">root@render-lite:~# htop --visual</span>
             <div className="flex gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <span className="font-mono text-xs text-green-500">LIVE</span>
             </div>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Chart */}
             <div className="md:col-span-2 h-64 border border-dashed border-white/10 bg-white/5 relative">
                <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-500">RESOURCE_MONITOR</div>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorMem" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff2a6d" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#ff2a6d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={true} />
                    <XAxis dataKey="time" stroke="#444" fontSize={10} fontFamily="Space Mono" tickLine={false} axisLine={false} />
                    <YAxis stroke="#444" fontSize={10} fontFamily="Space Mono" tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#000', border: '1px solid #333', fontFamily: 'Space Mono' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="step" dataKey="cpu" stroke="#00f0ff" strokeWidth={2} fillOpacity={1} fill="url(#colorCpu)" />
                    <Area type="step" dataKey="mem" stroke="#ff2a6d" strokeWidth={2} fillOpacity={1} fill="url(#colorMem)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>

             {/* Stat Blocks */}
             <div className="border border-white/10 p-4 bg-[#0a0a0a] hover:border-primary/30 transition-colors group">
                <div className="text-[10px] font-mono text-slate-500 mb-2">PID: 8821 // NODE</div>
                <div className="text-2xl font-mono text-primary font-bold group-hover:text-glow-primary transition-all">45ms</div>
                <div className="text-xs text-slate-400">Avg Latency</div>
             </div>
             
             <div className="border border-white/10 p-4 bg-[#0a0a0a] hover:border-white/30 transition-colors group">
                <div className="text-[10px] font-mono text-slate-500 mb-2">UPTIME</div>
                <div className="text-2xl font-mono text-white font-bold group-hover:text-glow-white transition-all">14d 02h</div>
                <div className="text-xs text-slate-400">Since Last Deploy</div>
             </div>
          </div>
          
          {/* Decorative Corner */}
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsPreview;