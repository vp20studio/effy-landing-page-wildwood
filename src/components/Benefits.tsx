'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Timer, Volume2 } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    headline: 'End Back Pain',
    stat: '54%',
    description: 'reduction in back discomfort with regular sit-stand transitions',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: Brain,
    headline: 'Boost Focus',
    stat: '46%',
    description: 'increase in productivity reported by standing desk users',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Timer,
    headline: 'Built to Last',
    stat: '20yr',
    description: 'warranty with 310lb capacity solid hardwood construction',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Volume2,
    headline: 'Whisper Quiet',
    stat: '<45dB',
    description: 'operation—take calls while adjusting your desk height',
    gradient: 'from-amber-500 to-orange-600',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--forest)] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(211, 132, 30, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 60%, rgba(211, 132, 30, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 40%, rgba(211, 132, 30, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--gold)]/30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/10"
          >
            <Heart className="w-4 h-4 text-[var(--gold)]" />
            Transform Your Workday
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Not Just a Desk.{' '}
            <span className="relative">
              <span className="text-[var(--gold)]">A Better You.</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--gold)]/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
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
              className="group relative"
            >
              {/* Card glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--gold)]/40 to-[var(--orange)]/40 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 h-full">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                {/* Stat */}
                <div className="text-4xl md:text-5xl font-bold text-[var(--gold)] mb-2">
                  {benefit.stat}
                </div>

                {/* Headline */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.headline}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
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
            className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-white transition-colors font-medium"
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
