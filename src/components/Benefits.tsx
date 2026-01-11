'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Timer, Volume2 } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    headline: 'End Back Pain',
    stat: '54%',
    description: 'reduction in back discomfort with regular sit-stand transitions',
  },
  {
    icon: Brain,
    headline: 'Boost Focus',
    stat: '46%',
    description: 'increase in productivity reported by standing desk users',
  },
  {
    icon: Timer,
    headline: 'Built to Last',
    stat: '20yr',
    description: 'warranty with 310lb capacity solid hardwood construction',
  },
  {
    icon: Volume2,
    headline: 'Whisper Quiet',
    stat: '<45dB',
    description: 'operation—take calls while adjusting your desk height',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--cream)] overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[var(--gold)]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--orange)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative z-10">
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
            <Heart className="w-4 h-4 text-[var(--gold)]" />
            Transform Your Workday
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--forest)] mb-6">
            Not Just a Desk.{' '}
            <span className="relative">
              <span className="text-[var(--orange)]">A Better You.</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--orange)]/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-xl text-[var(--forest)]/60 max-w-2xl mx-auto">
            The Wildwood doesn't just elevate your workspace—it transforms how you feel
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.headline}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 h-full transition-shadow hover:shadow-xl">
                {/* Icon with brand gradient */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--orange)] to-[var(--gold)] flex items-center justify-center mb-5 shadow-lg">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                {/* Stat */}
                <div className="text-4xl md:text-5xl font-bold text-[var(--orange)] mb-2">
                  {benefit.stat}
                </div>

                {/* Headline */}
                <h3 className="text-xl font-semibold text-[var(--forest)] mb-3">
                  {benefit.headline}
                </h3>

                {/* Description */}
                <p className="text-[var(--forest)]/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#product-picker"
            className="inline-flex items-center gap-2 text-[var(--orange)] hover:text-[var(--forest)] transition-colors font-medium"
          >
            <span>Configure your Wildwood</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
