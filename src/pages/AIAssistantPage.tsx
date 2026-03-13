import React from 'react';
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap, Code, Layout, BarChart3, ShieldCheck, Cpu } from 'lucide-react';
import { AnimatedAIChat } from '../components/ui/animated-ai-chat';
import AnimatedShaderBackground from '../components/ui/animated-shader-background';
import { Button } from '../components/ui/button';

const capabilities = [
  {
    icon: <Zap size={20} />,
    title: "Performance Audit",
    desc: "Lighthouse snapshot + 3 quick wins."
  },
  {
    icon: <Layout size={20} />,
    title: "Prompt-to-Prototype",
    desc: "Generate hero layout & copy from brief."
  },
  {
    icon: <Cpu size={20} />,
    title: "Asset Optimization",
    desc: "Auto-resize, convert, and lazy-load."
  },
  {
    icon: <Code size={20} />,
    title: "Code Suggestions",
    desc: "Critical CSS & preloading hints."
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Analytics Insights",
    desc: "High-impact KPI recommendations."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Privacy First",
    desc: "No data shared without explicit consent."
  }
];

const AIAssistantPage = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-24 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-8">
        <div className="absolute inset-0 z-0">
          <AnimatedShaderBackground />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <Sparkles size={12} className="text-white/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Beta Transmission</span>
          </div>
          <h1 className="text-[12vw] md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
            AI Assistant
          </h1>
          <p className="text-white/40 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed">
            Instant performance audits, prototype prompts and technical recommendations — powered by our AI + human review.
          </p>
          <motion.button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-white hover:text-white/60 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            Try a demo <ArrowRight size={12} />
          </motion.button>
        </motion.div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-32 px-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto">
          <AnimatedAIChat />
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-48 px-8 bg-white/[0.01]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-10 rounded-[2rem] border border-white/5 bg-white/[0.02] flex flex-col gap-6 group transition-all"
              >
                <div className="text-white/40 group-hover:text-white transition-colors">
                  {cap.icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold uppercase tracking-tighter mb-2">{cap.title}</h3>
                    <p className="text-white/40 text-sm font-light tracking-wide">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-48 px-8 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-24">Privacy & Human Review</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { t: "Consent Driven", d: "No data shared without explicit opt-in." },
              { t: "QA Audited", d: "Automated suggestions reviewed by engineers." },
              { t: "Right to Erase", d: "Delete scans & data on request." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">{item.t}</h4>
                <p className="text-white/40 text-sm leading-relaxed font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Strip */}
      <div className="py-12 bg-white/[0.03] border-y border-white/5">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-8 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
            <span>Connect Analytics</span>
            <span>Export to PDF</span>
            <span>API Access</span>
          </div>
          <Button 
            onClick={() => window.location.href = '/contact?intent=ai-assistant'}
            className="bg-transparent border border-white/20 hover:bg-white text-white hover:text-black px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all"
          >
            Request Custom Integration
          </Button>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-64 px-8 text-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-white shadow-[0_0_500px_rgba(255,255,255,0.05)] opacity-5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase mb-8 leading-none">Ready to automate?</h2>
          <p className="text-white/40 mb-16 uppercase tracking-[0.4em] text-[10px]">Or book a 15-minute demo call with our team.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-black px-12 py-7 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform w-full md:w-auto"
            >
              START YOUR PROJECT →
            </Button>
            <Button 
              className="bg-transparent border border-white/20 px-12 py-7 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/5 transition-all w-full md:w-auto"
            >
              Book Demo Call
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIAssistantPage;
