import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: "FE",
    name: "FRONTEND_CTX",
    items: ["Next.js", "React", "TailwindCSS"],
  },
  {
    id: "RT",
    name: "RUNTIME_ENV",
    items: ["Node.js", "Python", "Go", "Rust"],
  },
  {
    id: "INF",
    name: "INFRA_CORE",
    items: ["Docker", "Traefik", "Nixpacks"],
  },
  {
    id: "DAT",
    name: "DATA_LAYER",
    items: ["Postgres", "Redis", "Prisma"],
  }
];

const TechStack: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6">
      <div className="mb-12 text-center">
        <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">
          // DEPENDENCY MATRIX
        </h2>
        <p className="text-slate-500 font-mono text-xs">
          Supported frameworks and infrastructure components.
        </p>
      </div>

      <div className="border border-white/10 bg-surface/30 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 hover:bg-white/5 transition-colors"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs text-slate-500">REF: {cat.id}</span>
                <div className="w-2 h-2 bg-primary/50 rounded-sm"></div>
              </div>
              <h3 className="font-mono font-bold text-white mb-4">{cat.name}</h3>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-sm font-mono text-slate-300 flex items-center gap-3">
                    <span className="text-secondary opacity-70">{'>>'}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Matrix Footer */}
        <div className="border-t border-white/10 p-2 bg-black/50 text-[10px] font-mono text-slate-600 flex justify-between">
           <span>MATRIX_VER: 2.4.1</span>
           <span>ALL SYSTEMS COMPATIBLE</span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;