'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck, RotateCcw, Shield, ShieldCheck, CreditCard } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--forest)] overflow-hidden">
      {/* Subtle gold glow accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--gold)]/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--orange)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Risk-Free Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/20">
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" />
              100% Risk-Free Purchase
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white text-center mb-6 leading-tight"
          >
            Try Wildwood
            <br />
            <span className="relative">
              <span className="text-[var(--gold)]">Risk-Free for 30 Days</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--gold)]/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 text-center max-w-2xl mx-auto mb-10"
          >
            If the Wildwood doesn't transform your workday, return it for a full refund. We'll even cover the shipping.
          </motion.p>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mb-10"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left: Financing Option */}
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <CreditCard className="w-5 h-5 text-[var(--forest)]/60" />
                    <span className="text-[var(--forest)]/60">Pay in installments</span>
                  </div>
                  <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-[var(--forest)]">$263</span>
                    <span className="text-lg text-[var(--forest)]/60">/payment</span>
                  </div>
                  <p className="text-[var(--forest)]/50 text-sm">
                    4 interest-free payments with Sezzle
                  </p>
                </div>

                {/* Right: CTA */}
                <div className="flex flex-col items-center md:items-end gap-4">
                  <motion.a
                    href="#product-picker"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden bg-[var(--orange)] text-white font-bold text-lg px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Configure Your Desk
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>
                  <p className="text-[var(--forest)]/50 text-sm">
                    Starting at $1,050 CAD
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {[
              { icon: Truck, label: 'Free Shipping', sublabel: 'Canada & US' },
              { icon: RotateCcw, label: '30-Day Trial', sublabel: 'Full refund' },
              { icon: Shield, label: '20-Year Warranty', sublabel: 'Industry leading' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-sm text-white/60">{item.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center text-white/50 text-sm mt-10"
          >
            Questions? Our support team is available 7 days a week
          </motion.p>
        </div>
      </div>
    </section>
  );
}
