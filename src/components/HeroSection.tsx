'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { product, heroImage, productMeta } from '@/lib/constants';

// Animated Desk SVG Component - Shows desk rising from sitting to standing height
function AnimatedDesk() {
  const [isStanding, setIsStanding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsStanding((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.svg
      viewBox="0 0 400 300"
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {/* Floor */}
      <rect x="50" y="280" width="300" height="4" fill="#3D4030" rx="2" />

      {/* Left Leg */}
      <motion.g
        animate={{ y: isStanding ? 0 : 60 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <rect x="80" y="120" width="12" height="160" fill="#2C2F21" rx="3" />
        <rect x="76" y="275" width="20" height="6" fill="#2C2F21" rx="2" />
      </motion.g>

      {/* Right Leg */}
      <motion.g
        animate={{ y: isStanding ? 0 : 60 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <rect x="308" y="120" width="12" height="160" fill="#2C2F21" rx="3" />
        <rect x="304" y="275" width="20" height="6" fill="#2C2F21" rx="2" />
      </motion.g>

      {/* Crossbar */}
      <motion.rect
        x="80"
        y="200"
        width="240"
        height="8"
        fill="#3D4030"
        rx="2"
        animate={{ y: isStanding ? 200 : 260 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Desktop - Walnut wood with grain */}
      <motion.g
        animate={{ y: isStanding ? 0 : 60 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Main desktop */}
        <rect x="50" y="100" width="300" height="20" fill="#8B5A2B" rx="4" />
        {/* Wood grain lines */}
        <rect x="60" y="105" width="80" height="3" fill="#A0522D" opacity="0.4" rx="1" />
        <rect x="160" y="108" width="100" height="2" fill="#A0522D" opacity="0.3" rx="1" />
        <rect x="280" y="105" width="50" height="3" fill="#A0522D" opacity="0.4" rx="1" />

        {/* Monitor */}
        <rect x="160" y="50" width="80" height="50" fill="#2C2F21" rx="4" />
        <rect x="165" y="55" width="70" height="40" fill="#4A5568" rx="2" />
        <rect x="190" y="100" width="20" height="8" fill="#2C2F21" />

        {/* Keyboard */}
        <rect x="150" y="108" width="60" height="8" fill="#3D4030" rx="2" />

        {/* Coffee mug */}
        <rect x="260" y="95" width="15" height="18" fill="#BA4B1A" rx="2" />
        <rect x="275" y="100" width="5" height="8" fill="#BA4B1A" rx="2" />

        {/* Keypad with wireless charging glow */}
        <rect x="80" y="105" width="40" height="12" fill="#2C2F21" rx="2" />
        <motion.circle
          cx="110"
          cy="111"
          r="4"
          fill="#D3841E"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.g>

      {/* Height indicator */}
      <motion.g
        animate={{ y: isStanding ? 0 : 60 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <rect x="35" y="100" width="2" height="30" fill="#D3841E" opacity="0.6" />
        <motion.text
          x="25"
          y="118"
          fill="#D3841E"
          fontSize="10"
          fontWeight="600"
          animate={{ opacity: isStanding ? 1 : 0.3 }}
        >
          {isStanding ? '50"' : '28"'}
        </motion.text>
      </motion.g>
    </motion.svg>
  );
}

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
      {/* Background Image Container */}
      <motion.div
        style={{ y: backgroundY, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroImage}
          alt="Wildwood Standing Desk"
          fill
          className="object-cover opacity-40"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#2C2F21]/60 via-[#2C2F21]/40 to-[#2C2F21]" />

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-5xl mx-auto text-center">
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
            className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            {product.tagline}
          </motion.p>

          {/* Animated Desk Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="my-8 md:my-12"
          >
            <AnimatedDesk />
          </motion.div>

          {/* Price and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
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
              className="group relative px-8 py-4 bg-[#BA4B1A] text-white text-lg font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(186,75,26,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#9E3F16] to-[#BA4B1A] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-sm text-white/50 flex items-center gap-4 mt-2"
            >
              <span>Free Shipping</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>30-Day Trial</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>10-Year Warranty</span>
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
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
