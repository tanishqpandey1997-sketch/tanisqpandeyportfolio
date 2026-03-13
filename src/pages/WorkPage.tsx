import React from 'react';
import { motion } from "motion/react";
import { ArrowRight } from 'lucide-react';
import { Gallery4 } from '../components/blocks/gallery4';

const workData = [
  {
    id: "ai-saas",
    title: "AI SaaS Platform",
    description: "A comprehensive enterprise solution for predictive analytics and automated resource management, built for scalable performance.",
    href: "#",
    image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?auto=format&fit=crop&q=80&w=1080",
    metrics: [
      { label: "Performance", value: "99/100" },
      { label: "Processing", value: "-45%" }
    ]
  },
  {
    id: "e-comm",
    title: "E-Commerce Redesign",
    description: "Next-generation retail experience focusing on micro-interactions and high-speed checkout optimization.",
    href: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1080",
    metrics: [
      { label: "Conversion", value: "+32%" },
      { label: "Load Time", value: "0.8s" }
    ]
  },
  {
    id: "startup-landing",
    title: "Startup Landing Page",
    description: "High-impact visual storytelling for a Silicon Valley fintech startup, optimized for maximum user retention.",
    href: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
    metrics: [
      { label: "Retention", value: "+28%" },
      { label: "User Score", value: "4.9/5" }
    ]
  },
  {
    id: "fintech-dash",
    title: "Fintech Dashboard",
    description: "Real-time data visualization system with sub-second latency and military-grade security encryption.",
    href: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Latency", value: "12ms" }
    ]
  }
];

const WorkPage = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-24">
      
      {/* Header Section */}
      <section className="px-8 mt-24 mb-12 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl"
        >
          <h1 className="text-[10vw] font-bold tracking-tighter uppercase leading-[0.85] mb-8">
            Selected <br /> Work
          </h1>
          <p className="text-white/40 text-lg md:text-xl font-light tracking-[0.2em] uppercase max-w-2xl mx-auto">
            High-performance websites built using AI-assisted workflows.
          </p>
        </motion.div>
      </section>

      {/* Main Showcase */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Gallery4 
          title="" 
          description="" 
          items={workData} 
        />
      </motion.div>

      {/* Final CTA */}
      <section className="py-48 px-8 text-center bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto relative">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[6vw] md:text-[4vw] font-bold tracking-tighter uppercase leading-none mb-12"
          >
            READY TO BUILD YOUR <br /> NEXT PROJECT?
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

export default WorkPage;
