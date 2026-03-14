import React, { useState, useCallback, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { Play, Loader2, ArrowRight, Globe } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import FUIHeroWithBorders from '../components/ui/herowith-logos';
import AboutUsSection from '../components/ui/about-us';

interface VeoState {
  status: 'idle' | 'uploading' | 'generating' | 'completed' | 'error';
  videoUrl?: string;
  error?: string;
}

export default function LandingPage() {
  const [veoState, setVeoState] = useState<VeoState>({ status: 'idle' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [apiKeySelected, setApiKeySelected] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if ((window as any).aistudio) {
        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        setApiKeySelected(hasKey);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if ((window as any).aistudio) {
      await (window as any).aistudio.openSelectKey();
      setApiKeySelected(true);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setVeoState({ status: 'idle' });
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false
  } as any);

  const generateVideo = async () => {
    if (!selectedImage) return;

    if (!apiKeySelected) {
      await handleSelectKey();
    }

    setVeoState({ status: 'generating' });

    try {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).GEMINI_API_KEY });
      const base64Data = selectedImage.split(',')[1];

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'A cinematic, high-end website interface coming to life with fluid animations and glowing elements, monochrome style.',
        image: {
          imageBytes: base64Data,
          mimeType: 'image/png',
        },
        config: {
          numberOfVideos: 1,
          resolution: '1080p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(downloadLink, {
          method: 'GET',
          headers: {
            'x-goog-api-key': (process.env as any).GEMINI_API_KEY || '',
          },
        });
        const blob = await response.blob();
        const videoUrl = URL.createObjectURL(blob);
        setVeoState({ status: 'completed', videoUrl });
      } else {
        throw new Error('No video URL returned');
      }
    } catch (err: any) {
      console.error('Veo Error:', err);
      setVeoState({ status: 'error', error: err.message || 'Something went wrong' });
    }
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-white selection:text-black bg-black relative">
      <div className="relative h-screen p-3 md:p-5">
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black shadow-2xl">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-60 grayscale contrast-125"
              src="https://www.shutterstock.com/shutterstock/videos/3568704447/preview/stock-footage-animation-of-spinning-globe-of-the-earth-planet-from-glowing-blue-particulars-on-dark-background.webm"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <main className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
            <div className="max-w-5xl z-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[9vw] font-bold tracking-tighter uppercase leading-[0.85] mb-8"
              >
                Future <br /> Sites Now
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[#FFFFFF] font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                We use artificial intelligence to build high-performance websites that look amazing and work perfectly. No complexity, just results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-8"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-white opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
                  <button
                    {...getRootProps()}
                    className="relative bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform flex items-center gap-3"
                  >
                    <input {...getInputProps()} />
                    {selectedImage ? 'Change Vision' : 'Start Your Project'}
                    <ArrowRight size={18} />
                  </button>
                </div>

                <AnimatePresence>
                  {selectedImage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="w-48 aspect-video border border-white/20 rounded-lg overflow-hidden bg-white/5">
                        {veoState.status === 'completed' && veoState.videoUrl ? (
                          <video src={veoState.videoUrl} autoPlay loop muted className="w-full h-full object-cover" />
                        ) : veoState.status === 'generating' ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <Loader2 className="animate-spin text-white/40" size={24} />
                          </div>
                        ) : (
                          <img src={selectedImage} alt="Preview" className="w-full h-full object-cover opacity-50" />
                        )}
                      </div>
                      {veoState.status === 'idle' && (
                        <button
                          onClick={generateVideo}
                          className="text-[10px] uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-2"
                        >
                          <Play size={12} fill="currentColor" />
                          Animate Preview
                        </button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-8 flex gap-1 text-[10px] text-white/20">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className={i > 8 ? 'text-white/40' : ''}>◀</span>
              ))}
            </div>

            <div className="absolute bottom-8 right-8 flex flex-col items-end gap-4">
              <div className="relative w-24 h-24 border border-white/20 rounded-lg flex items-center justify-center">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
                <Globe className="text-white/20 animate-[spin_10s_linear_infinite]" size={40} strokeWidth={1} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
                Node 01 // Active
              </div>
            </div>
          </main>
        </div>
      </div>

      <FUIHeroWithBorders />
      <AboutUsSection />
    </div>
  );
}
