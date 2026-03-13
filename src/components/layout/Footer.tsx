import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 border border-white flex items-center justify-center rotate-45">
              <div className="w-4 h-4 bg-white rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-white">AI.Agency</span>
          </div>
          <p className="text-white/40 text-sm max-w-sm leading-relaxed">
            Pioneering the next generation of digital interfaces through artificial intelligence and cinematic design.
          </p>
        </div>
        
        <div>
          <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
          <ul className="flex flex-col gap-4 text-white/40 text-xs uppercase tracking-widest font-medium">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/process" className="hover:text-white transition-colors">Process</a></li>
            <li><a href="/work" className="hover:text-white transition-colors">Work</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Social</h4>
          <ul className="flex flex-col gap-4 text-white/40 text-xs uppercase tracking-widest font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
          © 2024 AI Design Agency // All Rights Reserved
        </div>
        <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
