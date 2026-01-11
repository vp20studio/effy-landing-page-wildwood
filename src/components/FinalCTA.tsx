'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck, RotateCcw, Shield } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section bg-gradient-to-br from-[var(--orange)] to-[#A04218] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="gradient-blur w-[500px] h-[500px] -top-48 -right-48 opacity-30 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
      <div className="gradient-blur w-[400px] h-[400px] -bottom-32 -left-32 opacity-20 bg-[radial-gradient(circle,rgba(211,132,30,0.4)_0%,transparent_70%)]" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-6">
              Limited Time Offer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6"
          >
            Ready to Transform Your Workspace?
          </motion.h2>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-xl text-white/50 line-through">$1,599</span>
              <span className="text-5xl md:text-6xl font-bold text-white">$1,299</span>
              <span className="text-xl text-white/80">CAD</span>
            </div>
            <p className="text-white/70">
              Use code <span className="font-bold text-white">NEWYEAR25</span> for an extra 20% off
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <button className="btn-primary bg-white text-[var(--orange)] hover:bg-[var(--cream)] hover:shadow-xl text-lg px-10 py-5">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/80"
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
    </section>
  );
}
