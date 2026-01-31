import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    cmd: "git push origin",
    desc: "Commit triggers webhook",
    status: "COMPLETE"
  },
  {
    id: "02",
    cmd: "nixpacks build",
    desc: "Runtime detection & image gen",
    status: "OPTIMIZED"
  },
  {
    id: "03",
    cmd: "docker run",
    desc: "Container spin-up initiated",
    status: "ISOLATED"
  },
  {
    id: "04",
    cmd: "proxy bind",
    desc: "Public URL assignment",
    status: "LIVE"
  }
];

const Workflow: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">

          <div className="md:w-1/3">
            <h2 className="text-sm font-mono text-secondary mb-2 uppercase tracking-widest text-glow-secondary">
              // Execution Pipeline
            </h2>
            <h3 className="text-3xl font-mono font-bold text-white mb-6">
              FROM CODE<br />TO CLOUD
            </h3>
            <p className="text-slate-400 font-sans leading-relaxed mb-8">
              RenderLite abstracts the infrastructure layer.
              Our engine handles build contexts, caching, and networking directives automatically.
            </p>
            <div className="p-4 border border-dashed border-white/10 bg-white/5 font-mono text-xs text-slate-400">
              {'>'} System efficiency: <span className="text-green-400">99.9%</span><br />
              {'>'} Avg deployment time: <span className="text-green-400">45s</span>
            </div>
          </div>

          <div className="md:w-2/3 relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Node Connector */}
                  <div className="absolute left-[13px] md:left-[29px] top-2 w-2 h-2 bg-background border border-primary rounded-full z-10 transition-colors duration-500">
                    <div className="absolute inset-0 bg-primary opacity-50 animate-ping rounded-full"></div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between border border-white/5 p-4 bg-surface hover:border-primary/50 transition-colors group cursor-default">
                    <div>
                      <div className="font-mono text-xs text-slate-500 mb-1">STEP_{step.id}</div>
                      <div className="font-mono text-lg text-white font-bold mb-1 flex items-center gap-2 group-hover:text-glow-white transition-all">
                        <span className="text-primary group-hover:text-glow-primary">$</span> {step.cmd}
                      </div>
                      <div className="text-sm text-slate-400">{step.desc}</div>
                    </div>
                    <div className="mt-4 md:mt-0 font-mono text-xs px-2 py-1 bg-white/5 text-primary border border-white/5 group-hover:bg-primary group-hover:text-black transition-colors group-hover:shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                      [{step.status}]
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Workflow;