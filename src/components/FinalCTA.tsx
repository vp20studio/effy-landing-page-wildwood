'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck, RotateCcw, Shield, Sparkles, Clock } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)] via-[#C25A1F] to-[#A04218]" />

      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            style={{
              left: `${5 + i * 10}%`,
              top: `${10 + (i % 5) * 18}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--gold)]/20 to-transparent rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/20">
              <Clock className="w-4 h-4" />
              Limited Time Offer
              <Sparkles className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white text-center mb-8 leading-tight"
          >
            Ready to Transform
            <br />
            <span className="relative">
              Your Workspace?
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>

          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-10"
          >
            {/* Glow */}
            <div className="absolute -inset-1 bg-white/20 rounded-3xl blur-xl" />

            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Price */}
                <div className="text-center md:text-left">
                  <div className="flex items-baseline justify-center md:justify-start gap-3 mb-2">
                    <span className="text-2xl text-white/50 line-through">$1,599</span>
                    <span className="text-5xl md:text-6xl font-bold text-white">$1,299</span>
                    <span className="text-xl text-white/70">CAD</span>
                  </div>
                  <p className="text-white/70">
                    Use code <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">NEWYEAR25</span> for an extra 20% off
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-white text-[var(--orange)] font-bold text-lg px-10 py-5 rounded-xl shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all whitespace-nowrap"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Shop Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-[var(--cream)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {[
              { icon: Truck, label: 'Free Shipping', sublabel: 'Canada & US' },
              { icon: RotateCcw, label: '30-Day Trial', sublabel: 'Risk-free' },
              { icon: Shield, label: '10-Year Warranty', sublabel: 'Full coverage' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-sm text-white/60">{item.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Urgency note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-white/50 text-sm mt-10"
          >
            Sale ends soon • Free shipping on orders over $500
          </motion.p>
        </div>
      </div>
    </section>
  );
}
