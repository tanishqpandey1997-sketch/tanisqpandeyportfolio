import React from 'react';
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Contact2 } from '../components/ui/contact-2';
import AnimatedShaderBackground from '../components/ui/animated-shader-background';
import { Button } from '../components/ui/button';

const faqs = [
  {
    q: "How long until I get an audit?",
    a: "Within 24 hours. Our automated engine runs an initial scan immediately, followed by human analysis of three quick wins."
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes — simply include an NDA request in your brief or mention it during our initial discovery call."
  },
  {
    q: "What does the audit include?",
    a: "A performance snapshot (PSI scores), 3 identified quick wins for conversion, and a recommended technology roadmap."
  }
];

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-white/5 py-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left"
      >
        <span className="text-xl font-bold uppercase tracking-tighter">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-white/20"
        >
          <ChevronDown />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pt-6 text-white/40 leading-relaxed font-light">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-24">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <AnimatedShaderBackground />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
            Let's Build <br /> Something Fast
          </h1>
          <p className="text-white/40 text-lg md:text-xl font-light tracking-[0.1em] uppercase max-w-2xl mx-auto mb-10">
            Tell us about your project and we’ll send a 2-minute performance audit and three quick wins.
          </p>
          <a href="/process" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-white/60 transition-colors flex items-center justify-center gap-2">
            See our process <ArrowRight size={12} />
          </a>
        </motion.div>
      </section>

      {/* Primary Contact Section */}
      <section className="py-32 px-8">
        <div className="container mx-auto">
          <Contact2 
             email="tanishqpandey1997@gmail.com"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-48 px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[6vw] font-bold tracking-tighter uppercase mb-24 text-center"
          >
            F.A.Q.
          </motion.h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
          </div>
          
          <p className="mt-24 text-center text-[10px] uppercase tracking-[0.4em] text-white/20">
            WE RESPECT YOUR PRIVACY. SUBMITTED FILES AND DATA ARE USED ONLY TO PREPARE YOUR AUDIT.
          </p>
        </div>
      </section>

      {/* Final Footer CTA */}
      <section className="py-48 px-8 text-center bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[6vw] md:text-[4vw] font-bold tracking-tighter uppercase mb-6">Ready to start?</h2>
          <p className="text-white/40 mb-12 uppercase tracking-widest text-[10px]">Or request a free 2-minute performance audit.</p>
          
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-black px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform"
          >
            START YOUR PROJECT →
          </Button>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
