'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { product, heroImage, productMeta } from '@/lib/constants';

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
      className="relative min-h-screen w-full overflow-hidden bg-[#2C2F21]"
    >
      {/* Background Image - More prominent */}
      <motion.div
        style={{ y: backgroundY, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroImage}
          alt="Wildwood Standing Desk"
          fill
          className="object-cover opacity-60"
          priority
        />
      </motion.div>

      {/* Gradient Overlay - Lighter to show more image */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#2C2F21]/40 via-transparent to-[#2C2F21]/90" />

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative sparkle */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="text-[#D3841E] text-3xl mb-6 block"
          >
            ✦
          </motion.span>

          {/* Product Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm md:text-base tracking-[0.3em] text-[#D3841E] uppercase mb-4"
          >
            Introducing
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            {product.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            {product.tagline}
          </motion.p>

          {/* Price and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Price */}
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl md:text-4xl font-bold text-white">
                ${productMeta.currentPrice.toLocaleString()}
              </span>
              <span className="text-lg text-white/50 line-through">
                ${productMeta.originalPrice.toLocaleString()}
              </span>
              <span className="px-2 py-1 bg-[#BA4B1A] text-white text-xs font-bold rounded">
                SAVE ${productMeta.savings}
              </span>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 bg-[#BA4B1A] text-white text-lg font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(186,75,26,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#9E3F16] to-[#BA4B1A] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sm text-white/60 flex items-center gap-4 mt-4"
            >
              <span>Free Shipping</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>30-Day Trial</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>10-Year Warranty</span>
            </motion.p>
          </motion.div>
        </div>

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
            <span className="text-xs tracking-[0.2em] text-white/40 uppercase">
              Scroll to Explore
            </span>
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Orange accent bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#BA4B1A] z-30" />
    </section>
  );
}
