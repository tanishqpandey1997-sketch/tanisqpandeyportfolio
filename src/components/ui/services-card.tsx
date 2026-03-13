"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { Button } from "./button";

type CarouselApi = UseEmblaCarouselType[1];
type CarouselProps = {
  opts?: any;
  plugins?: any;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
  carouselRef: any;
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a <Carousel />");
  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel({ ...opts, axis: orientation === "horizontal" ? "x" : "y" }, plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => { api?.off("select", onSelect); };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider value={{ carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
        <div ref={ref} className={cn("relative", className)} role="region" aria-roledescription="carousel" {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div ref={ref} className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)} {...props} />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return (
    <div ref={ref} role="group" aria-roledescription="slide" className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)} {...props} />
  );
});
CarouselItem.displayName = "CarouselItem";

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex h-[400px] w-full flex-col justify-between overflow-hidden rounded-[2rem] p-10 border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]"
    >
      <div className="z-10 flex w-full justify-between items-start">
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase font-mono">
           {service.number}
        </span>
        <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
           <service.icon className="h-6 w-6" />
        </div>
      </div>
      
      <div className="z-10">
        <h3 className="mb-4 text-2xl font-bold uppercase tracking-tighter leading-none">
          {service.title}
        </h3>
        <p className="text-sm font-light leading-relaxed text-white/40 group-hover:text-white/70 transition-colors duration-500">
          {service.description}
        </p>
      </div>

      {/* Modern Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </motion.div>
  );
};

export const ServiceCarousel = ({ services }: { services: Service[] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="w-full">
      <Carousel
        ref={ref}
        opts={{ align: "start", loop: true }}
        className="relative"
      >
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <CarouselContent className="ml-0">
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-8">
                <ServiceCard service={service} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>
      </Carousel>
    </div>
  );
};
