"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  metrics?: { label: string; value: string }[];
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Selected Work",
  description = "High-performance websites built using AI-assisted workflows.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-8">
        <div className="mb-16 flex items-end justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="text-[5vw] font-bold tracking-tighter uppercase leading-none">
              {title}
            </h2>
            <p className="max-w-lg text-white/40 text-lg font-light tracking-wide uppercase">
              {description}
            </p>
          </div>
          <div className="hidden shrink-0 gap-4 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white disabled:opacity-20 transition-all duration-300"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white disabled:opacity-20 transition-all duration-300"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            loop: true,
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full md:basis-1/2 lg:basis-1/3 pl-8"
              >
                <div className="group relative flex flex-col h-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:-translate-y-2">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>
                  
                  <div className="flex flex-col p-8 flex-grow">
                    <h3 className="text-2xl font-bold tracking-tighter uppercase mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                      {item.description}
                    </p>
                    
                    {item.metrics && (
                      <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                        {item.metrics.map((metric, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-white/20 mb-1">
                              {metric.label}
                            </span>
                            <span className="text-lg font-bold tracking-tight">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <a 
                      href={item.href} 
                      className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors group/link"
                    >
                      View Case Study
                      <ArrowRight className="size-3 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="mt-12 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-1 transition-all duration-500 rounded-full ${
                currentSlide === index ? "w-12 bg-white" : "w-4 bg-white/10"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
