import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import TechStack from './components/TechStack';
import MetricsPreview from './components/MetricsPreview';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background bg-grid-pattern bg-grid-lg relative overflow-x-hidden selection:bg-primary/30 selection:text-white">
      {/* Global decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)] z-0" />
      
      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-32 pb-24 border-x border-white/5 max-w-[1400px] mx-auto bg-background/50 backdrop-blur-[2px]">
          <Hero />
          <Features />
          <Workflow />
          <TechStack />
          <MetricsPreview />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;