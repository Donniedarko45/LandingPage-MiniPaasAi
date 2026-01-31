import React from 'react';
import { motion } from 'framer-motion';
import { Github, Container, Network, Activity, ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: "SOURCE_CONTROL",
    subtitle: "Automated Integration",
    description: "Instantaneous sync with GitHub repositories. Push events trigger atomic builds.",
    icon: Github,
    color: "text-white"
  },
  {
    title: "ISOLATION",
    subtitle: "Docker Runtime",
    description: "Services encapsulated in ephemeral containers. Strict resource bounding enabled.",
    icon: Container,
    color: "text-primary"
  },
  {
    title: "ROUTING_LAYER",
    subtitle: "Zero Configuration",
    description: "Traefik ingress controller manages SSL termination and subdomain assignment automatically.",
    icon: Network,
    color: "text-secondary"
  },
  {
    title: "OBSERVABILITY",
    subtitle: "Real-time Telemetry",
    description: "Live stream of stdout/stderr. CPU & Memory heuristics visualized in dashboard.",
    icon: Activity,
    color: "text-blue-400"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="max-w-[1400px] mx-auto px-6">
      <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest text-glow-primary">
            // System Modules
          </h2>
          <div className="text-3xl font-bold text-white font-mono tracking-tight">
            CORE CAPABILITIES
          </div>
        </div>
        <div className="hidden md:block text-right font-mono text-xs text-slate-500">
          MODULE_COUNT: 04<br/>
          STATUS: ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="hud-border p-8 bg-surface/50 hover:bg-surface transition-colors group relative overflow-hidden"
          >
            {/* Hover Scan effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />

            <div className="flex justify-between items-start mb-6">
              <feature.icon className={`w-8 h-8 ${feature.color} opacity-80 group-hover:text-glow-primary transition-all duration-300`} strokeWidth={1.5} />
              <span className="font-mono text-xs text-slate-600 group-hover:text-primary transition-colors">0{index + 1}</span>
            </div>
            
            <h3 className="text-lg font-mono font-bold text-white mb-1 tracking-tight group-hover:text-glow-white transition-all">{feature.title}</h3>
            <div className="text-xs text-primary mb-4 font-mono uppercase group-hover:text-glow-primary">{feature.subtitle}</div>
            
            <p className="text-slate-400 text-sm leading-relaxed font-sans border-l-2 border-white/5 pl-3 group-hover:border-primary/30 transition-colors">
              {feature.description}
            </p>

            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;