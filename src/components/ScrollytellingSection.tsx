'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { scrollytellingSteps } from '@/lib/constants';

export default function ScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer to detect which step is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0,
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#2C2F21]"
    >
      {/* Section Header */}
      <div className="sticky top-0 z-10 bg-[#2C2F21] py-8 md:py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#D3841E] text-2xl mb-2 block">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Engineered for <span className="text-[#BA4B1A]">Performance</span>
          </h2>
        </div>
      </div>

      {/* Split Layout Container */}
      <div className="flex flex-col md:flex-row">
        {/* LEFT: Sticky Image */}
        <div className="md:w-1/2 md:sticky md:top-24 md:h-[calc(100vh-6rem)] flex items-center justify-center p-6 md:p-12">
          <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden bg-[#3D4030]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={scrollytellingSteps[activeStep].image}
                  alt={scrollytellingSteps[activeStep].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Step Indicator Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {scrollytellingSteps.map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: activeStep === index ? 1.2 : 1,
                    backgroundColor: activeStep === index ? '#BA4B1A' : '#5C5F52',
                  }}
                  className="w-2 h-2 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Scrolling Text Steps */}
        <div className="md:w-1/2">
          {scrollytellingSteps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => { stepRefs.current[index] = el; }}
              className="min-h-screen flex items-center p-6 md:p-12 lg:p-16"
            >
              <motion.div
                initial={{ opacity: 0.3 }}
                animate={{ opacity: activeStep === index ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="max-w-md"
              >
                {/* Step Number */}
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#D3841E] bg-[#D3841E]/10 rounded-full mb-4">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl font-semibold text-[#BA4B1A] mb-6">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeStep === index ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-1 w-16 bg-[#BA4B1A] mt-8 origin-left"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
