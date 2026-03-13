import React from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface Contact2Props {
  title?: string;
  description?: string;
  email?: string;
}

export const Contact2 = ({
  title = "Start A Project",
  description = "Tell us about your objectives and we'll send a 2-minute performance audit and three quick wins.",
  email = "tanishqpandey1997@gmail.com",
}: Contact2Props) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto flex max-w-screen-md flex-col items-center justify-center gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl"
      >
        <div className="p-4 rounded-full bg-white text-black mb-4">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-4xl font-bold uppercase tracking-tighter">Transmission Received</h2>
        <p className="text-white/40 max-w-sm tracking-wide">
          Thanks — we’ll email a 2-minute audit and 3 quick wins within 24 hours. Expect a follow-up to schedule a 15-minute call.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 bg-transparent border border-white/20 hover:bg-white/10 rounded-full px-8 py-6 uppercase tracking-widest text-[10px] font-bold"
        >
          Return to Form
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-16 lg:flex-row lg:gap-24">
      {/* Context Column */}
      <div className="flex flex-col justify-between gap-12 lg:w-1/3">
        <div className="text-left">
          <h2 className="mb-6 text-5xl font-bold uppercase tracking-tighter leading-none">
            {title}
          </h2>
          <p className="text-white/40 text-lg font-light leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
              TRUSTED PERFORMANCE
            </h3>
            <ul className="space-y-6">
              {[
                "AI-assisted design + human QA",
                "Average Performance Score — 98",
                "Avg. Launch Time — 4 weeks"
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-medium tracking-wide">
                  <div className="h-1 w-1 rounded-full bg-white" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
              DIRECT CHANNEL
            </h3>
            <a href={`mailto:${email}`} className="text-xl font-bold hover:text-white/60 transition-colors border-b border-white/10 pb-1 inline-block">
              {email}
            </a>
          </div>
        </div>
      </div>

      {/* Form Column */}
      <motion.form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-10 lg:p-14 lg:w-2/3 backdrop-blur-md relative overflow-hidden group shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-3">
            <Label htmlFor="firstname">Full Name</Label>
            <Input id="firstname" placeholder="J. DOE" required />
          </div>
          <div className="space-y-3">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="ACME AI" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="HELLO@EXAMPLE.COM" required />
          </div>
          <div className="space-y-3">
            <Label htmlFor="website">Website (URL)</Label>
            <Input type="url" id="website" placeholder="HTTPS://AI.AGENCY" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-3">
            <Label htmlFor="type">Project Type</Label>
            <select id="type" className="flex h-12 w-full rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-white/20">
              <option>WEBSITE BUILD</option>
              <option>REDESIGN</option>
              <option>PERFORMANCE AUDIT</option>
              <option>ONGOING OPTIMIZATION</option>
            </select>
          </div>
          <div className="space-y-3">
            <Label htmlFor="budget">Budget</Label>
            <select id="budget" className="flex h-12 w-full rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-white/20">
              <option>&lt; $15K</option>
              <option>$15K - $50K</option>
              <option>$50K+</option>
            </select>
          </div>
        </div>

        <div className="space-y-3 relative z-10">
          <Label htmlFor="message">Brief</Label>
          <Textarea id="message" placeholder="WHAT ARE WE BUILDING?" required />
        </div>

        <div className="flex items-center space-x-3 py-2 relative z-10">
          <input type="checkbox" id="consent" required className="w-4 h-4 rounded-full accent-white bg-black border-white/20" />
          <Label htmlFor="consent" className="normal-case tracking-normal text-white/40">
            I AGREE TO RECEIVE A SHORT AUDIT & AGREE TO THE PRIVACY POLICY.
          </Label>
        </div>

        <Button className="w-full h-16 rounded-full bg-white text-black font-bold uppercase tracking-[0.2em] text-sm hover:scale-[1.02] transition-transform relative z-10 mt-4 group">
          START YOUR PROJECT
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.form>
    </div>
  );
};
