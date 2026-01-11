'use client';

import { motion } from 'framer-motion';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';

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
    <section className="section section-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge badge-gold mb-4">Compare</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--forest)] mb-4">
            The <span className="text-[var(--orange)]">Smart</span> Investment
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            See why professionals choose Wildwood over standard desks
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Standard Desk */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--cream)] rounded-[var(--radius-2xl)] p-6 md:p-8 border border-[var(--cream-dark)]"
          >
            <div className="text-center mb-6">
              <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                The Old Way
              </span>
              <h3 className="text-2xl font-serif text-[var(--text-secondary)] mt-2">
                Standard Desk
              </h3>
              <div className="mt-4">
                <span className="text-3xl font-bold text-[var(--text-secondary)]">$400-800</span>
                <span className="text-[var(--text-muted)] ml-2">average</span>
              </div>
            </div>

            <ul className="space-y-4">
              {standardFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-[var(--text-secondary)]">{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Wildwood */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-gradient-to-br from-[var(--forest)] to-[var(--forest-light)] rounded-[var(--radius-2xl)] p-6 md:p-8 border-2 border-[var(--gold)]"
          >
            {/* Recommended Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 px-4 py-1 bg-[var(--gold)] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                <Sparkles className="w-3 h-3" />
                Recommended
              </span>
            </div>

            <div className="text-center mb-6 pt-2">
              <span className="text-xs font-semibold tracking-wider text-[var(--gold)] uppercase">
                The Wildwood Way
              </span>
              <h3 className="text-2xl font-serif text-white mt-2">
                Wildwood Desk
              </h3>
              <div className="mt-4">
                <span className="text-lg text-white/50 line-through mr-2">$1,599</span>
                <span className="text-3xl font-bold text-white">$1,299</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {wildwoodFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-white">{feature.text}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary w-full bg-[var(--gold)] hover:bg-[var(--orange)]">
              Get Wildwood
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-[var(--text-muted)] text-sm mt-8"
        >
          Join thousands of professionals who made the smart choice
        </motion.p>
      </div>
    </section>
  );
}
