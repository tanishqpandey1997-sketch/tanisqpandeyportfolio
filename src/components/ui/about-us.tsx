import React from 'react';
import { motion } from "motion/react";
import { ArrowRight, LayoutDashboard, Sparkles, Database, Layout, PenTool, Code, Zap, Rocket } from 'lucide-react';
import RadialOrbitalTimeline from './radial-orbital-timeline';

const timelineData = [
  {
    id: 1,
    title: "Intelligence",
    date: "Phase 1",
    content: "Our neural networks analyze high-fidelity design patterns to identify optimal UI structures.",
    category: "AI",
    icon: Database,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Synthesis",
    date: "Phase 2",
    content: "AI-driven layout generation converts strategic goals into pixel-perfect interface concepts.",
    category: "Design",
    icon: Layout,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Execution",
    date: "Phase 3",
    content: "Rapid deployment of high-performance code, optimized for maximum scalability and speed.",
    category: "Build",
    icon: Code,
    relatedIds: [2],
    status: "pending" as const,
    energy: 40,
  },
];

export default function AboutUsSection() {
  return (
    <section className="relative min-h-screen bg-black text-white py-32 overflow-hidden selection:bg-white selection:text-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-[#111111] z-0" />
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Visual Element (Orbital Timeline) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-white/[0.02] rounded-[3rem] border border-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl">
                <RadialOrbitalTimeline timelineData={timelineData} />
            </div>
            
            {/* Corner Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-2xl" />
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-16">
            
            {/* Headline & Paragraph */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-[6vw] md:text-[5vw] lg:text-[4vw] font-bold tracking-tighter uppercase leading-[0.9] text-[#EAEAEA]">
                Empowering your <br /> digital future today
              </h2>
              <p className="text-lg md:text-xl text-[#BFBFBF] font-light leading-relaxed max-w-xl tracking-tight">
                We combine artificial intelligence with premium design principles to create high-performance websites that look exceptional and work flawlessly.
              </p>
            </motion.div>

            {/* Feature Highlight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <a href="#" className="inline-flex items-center gap-3 text-lg font-bold uppercase tracking-[0.2em] group text-white">
                AI-driven rapid prototyping
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </a>
              <p className="text-[#BFBFBF]/60 leading-relaxed max-w-lg font-light">
                Our AI workflows allow us to rapidly move from concept to fully interactive prototypes, dramatically accelerating the product design process.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  title: "Scalable architectures", 
                  desc: "Built for enterprise growth", 
                  icon: LayoutDashboard 
                },
                { 
                  title: "Intelligent design", 
                  desc: "Data-driven UI decisions", 
                  icon: Sparkles 
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
                  className="p-8 bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl flex flex-col gap-4 group transition-all duration-300 shadow-lg hover:shadow-white/[0.02]"
                >
                  <div className="p-3 bg-white/5 rounded-xl w-fit group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <feature.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-tight text-white mb-1">{feature.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Background Micro-animation: Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
    </section>
  );
}
