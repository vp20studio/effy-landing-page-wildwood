'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, RotateCcw } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--forest)]">
      {/* Gradient Blur Decorations */}
      <div className="gradient-blur gradient-blur-orange w-[600px] h-[600px] -top-48 -right-48 opacity-40" />
      <div className="gradient-blur gradient-blur-gold w-[500px] h-[500px] -bottom-32 -left-32 opacity-30" />

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge badge-gold mb-6">
              New Collection 2025
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6 text-balance"
          >
            The Standing Desk,{' '}
            <span className="text-[var(--gold)]">Redefined</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8"
          >
            Handcrafted solid walnut. Whisper-quiet dual motors.
            The desk that transforms how you work.
          </motion.p>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="text-4xl md:text-5xl font-bold text-white">
              $1,299
            </span>
            <span className="text-xl text-white/40 line-through">
              $1,599
            </span>
            <span className="badge badge-orange">
              Save $300
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary bg-transparent border-white/30 text-white hover:bg-white hover:text-[var(--forest)] w-full sm:w-auto">
              View Specs
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/60"
          >
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              <span className="text-sm font-medium">30-Day Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">10-Year Warranty</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--cream)] to-transparent" />
    </section>
  );
}
