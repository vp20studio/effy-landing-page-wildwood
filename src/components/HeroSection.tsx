'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { product, heroImage } from '@/lib/constants';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image/Video Container */}
      <motion.div
        style={{ y: backgroundY, scale }}
        className="absolute inset-0 z-0"
      >
        {/* TODO: Replace placeholder with video element for desk rising animation */}
        <Image
          src={heroImage}
          alt="Wildwood Standing Desk"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark Gradient Overlay (using forest green) */}
      <div className="absolute inset-0 z-10 gradient-overlay-dark" />

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-end pb-24 md:pb-32 px-6"
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          {/* Decorative sparkle */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#D3841E] text-3xl mb-4 block"
          >
            ✦
          </motion.span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            {product.tagline.split('.')[0]}.
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#BA4B1A]">
            {product.tagline.split('.')[1]?.trim() || "Engineering's Beast."}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.2em] text-white/60 uppercase">
              Scroll to Explore
            </span>
            <ChevronDown className="w-5 h-5 text-white/60" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Orange accent bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#BA4B1A] z-30" />
    </section>
  );
}
