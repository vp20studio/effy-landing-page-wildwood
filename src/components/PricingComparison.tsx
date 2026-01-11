'use client';

import { motion } from 'framer-motion';
import { X, Check, ArrowRight, Sparkles, Crown } from 'lucide-react';

const standardFeatures = [
  { text: 'Particle board desktop', included: false },
  { text: 'Single motor (150lb max)', included: false },
  { text: 'Basic manual controls', included: false },
  { text: '1-year limited warranty', included: false },
  { text: 'Visible cable clutter', included: false },
];

const wildwoodFeatures = [
  { text: 'Solid walnut hardwood', included: true },
  { text: 'Dual motors (300lb capacity)', included: true },
  { text: 'Smart memory keypad', included: true },
  { text: '10-year comprehensive warranty', included: true },
  { text: 'Integrated cable management', included: true },
];

export default function PricingComparison() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)]/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[var(--gold)]/5 to-[var(--orange)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--forest)] rounded-full text-white text-sm font-medium mb-6"
          >
            <Crown className="w-4 h-4 text-[var(--gold)]" />
            Compare & Choose
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--forest)] mb-6">
            The{' '}
            <span className="relative">
              <span className="text-[var(--orange)]">Smart</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--orange)]/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>{' '}
            Investment
          </h2>
          <p className="text-xl text-[var(--forest)]/60 max-w-2xl mx-auto">
            See why professionals choose Wildwood over standard desks
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Desk */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10 border border-gray-200 h-full">
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                  The Old Way
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-500 mb-4">
                  Standard Desk
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-gray-400">$400-800</span>
                  <span className="text-gray-400">avg</span>
                </div>
              </div>

              <ul className="space-y-4">
                {standardFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <span className="text-gray-500">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-400 text-sm">
                  Compromises on quality and durability
                </p>
              </div>
            </div>
          </motion.div>

          {/* Wildwood */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', delay: 0.1 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--gold)] to-[var(--orange)] rounded-[28px] blur opacity-30" />

            <div className="relative bg-gradient-to-br from-[var(--forest)] to-[#1a1f16] rounded-3xl p-8 md:p-10 border-2 border-[var(--gold)] h-full overflow-hidden">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(211, 132, 30, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(211, 132, 30, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(211, 132, 30, 0.3) 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Recommended Badge */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[var(--gold)] to-[var(--orange)] text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Recommended
                </span>
              </motion.div>

              <div className="relative text-center mb-8 pt-4">
                <span className="inline-block px-3 py-1 bg-[var(--gold)]/20 text-[var(--gold)] text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                  The Wildwood Way
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                  Wildwood Desk
                </h3>
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-lg text-white/40 line-through">$1,599</span>
                  <span className="text-4xl md:text-5xl font-bold text-white">$1,299</span>
                </div>
                <p className="text-[var(--gold)] text-sm mt-2 font-medium">Save $300 today</p>
              </div>

              <ul className="relative space-y-4">
                {wildwoodFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="text-white">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="relative mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="w-full group relative overflow-hidden bg-gradient-to-r from-[var(--gold)] to-[var(--orange)] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(211,132,30,0.5)] transition-all">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Wildwood
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--forest)]/50 text-sm">
            Join <span className="font-semibold text-[var(--forest)]">2,500+</span> professionals who made the smart choice
          </p>
        </motion.div>
      </div>
    </section>
  );
}
