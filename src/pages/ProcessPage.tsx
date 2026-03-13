import React from 'react';
import { motion } from "motion/react";
import { ArrowRight, Database, Layout, PenTool, Code, Zap, Rocket, ChevronRight } from 'lucide-react';
import AnoAI from '../components/ui/animated-shader-background';

const workflowSteps = [
  {
    id: "01",
    title: "DISCOVER",
    icon: <Database size={24} />,
    description: "We analyze business goals, user behavior and product vision to define the perfect digital strategy."
  },
  {
    id: "02",
    title: "BLUEPRINT",
    icon: <Layout size={24} />,
    description: "We create information architecture, user flows and structure optimized for conversion and clarity."
  },
  {
    id: "03",
    title: "AI DESIGN",
    icon: <PenTool size={24} />,
    description: "Our AI generates interface concepts and layouts which are refined into premium user experiences."
  },
  {
    id: "04",
    title: "BUILD",
    icon: <Code size={24} />,
    description: "We develop fast, scalable and optimized code using modern frameworks and automation."
  },
  {
    id: "05",
    title: "OPTIMIZE",
    icon: <Zap size={24} />,
    description: "Performance tuning, SEO optimization and accessibility improvements ensure maximum efficiency."
  },
  {
    id: "06",
    title: "LAUNCH",
    icon: <Rocket size={24} />,
    description: "The product is deployed with monitoring systems and analytics ready to scale."
  }
];

const metrics = [
  { label: "Performance Score", value: "98/100" },
  { label: "Average Load Time", value: "<1.2s" },
  { label: "Accessibility", value: "AA Standard" },
  { label: "Conversion Increase", value: "+35%" }
];

const processCards = [
  {
    title: "E-Commerce Platform",
    result: "Page load time reduced by 60%",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "SaaS Dashboard",
    result: "Conversion rate increased by 32%",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Portfolio Website",
    result: "Lighthouse performance score 99",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  }
];

const ProcessPage = () => {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      
      {/* SECTION 1 — PROCESS HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden">
        <AnoAI />
        <div className="relative z-10 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-none mb-8"
          >
            OUR AI BUILD <br /> PROCESS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/60 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            A streamlined AI-driven workflow designed to create high-performance websites with speed, precision and scalability.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — AI WORKFLOW (MAIN PROCESS) */}
      <section className="py-32 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-24">
            {workflowSteps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}
              >
                {/* Visual Connector Line (Vertical for Mobile) */}
                {index !== workflowSteps.length - 1 && (
                  <div className="absolute top-full left-1/2 md:left-auto md:right-auto h-24 w-[1px] bg-gradient-to-b from-white/40 to-transparent z-0 md:hidden" />
                )}

                {/* Node */}
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white relative group shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl" />
                    {step.icon}
                    <div className="absolute -top-3 -right-3 text-[10px] font-bold bg-white text-black px-2 py-1 rounded">
                      {step.id}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">{step.title}</h3>
                  <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — PERFORMANCE METRICS */}
      <section className="py-32 bg-[#050505] border-y border-white/5 pb-48">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
            {metrics.map((metric, index) => (
              <motion.div 
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <svg className="w-24 h-24 -rotate-90">
                    <circle 
                      cx="48" cy="48" r="45" 
                      fill="none" stroke="currentColor" strokeWidth="2" 
                      className="text-white/5" 
                    />
                    <motion.circle 
                      cx="48" cy="48" r="45" 
                      fill="none" stroke="currentColor" strokeWidth="2" 
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      whileInView={{ strokeDashoffset: 70 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="text-white" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold tracking-tighter uppercase">
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">{metric.value}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — RESULTS / CASE SNAPSHOT */}
      <section className="py-32 px-8 -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processCards.map((card, index) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10"
              >
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 rounded-3xl" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-sm font-bold tracking-[0.3em] uppercase mb-2 text-white/40">{card.title}</h4>
                  <p className="text-2xl font-bold tracking-tighter uppercase leading-tight">{card.result}</p>
                  <div className="mt-6 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest">View Case</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FINAL CTA */}
      <section className="py-48 px-8 text-center bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto relative">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[6vw] md:text-[4vw] font-bold tracking-tighter uppercase leading-none mb-12"
          >
            READY TO BUILD YOUR <br /> NEXT WEBSITE?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group inline-block"
          >
            <div className="absolute -inset-1 bg-white opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
            <a 
              href="/contact"
              className="relative bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform flex items-center gap-3"
            >
              START YOUR PROJECT
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ProcessPage;
