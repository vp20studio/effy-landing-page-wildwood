'use client';

import { motion } from 'framer-motion';
import { Zap, Volume2, TreeDeciduous, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Dual Motors',
    description: '300lb lift capacity with smooth, powerful adjustment',
    stat: '300',
    unit: 'lbs',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Volume2,
    title: 'Whisper Quiet',
    description: 'Under 45dB operation—quieter than a conversation',
    stat: '<45',
    unit: 'dB',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: TreeDeciduous,
    title: 'Solid Walnut',
    description: 'Hand-selected premium hardwood with natural grain',
    stat: '100',
    unit: '%',
    gradient: 'from-amber-600 to-yellow-700',
  },
  {
    icon: Smartphone,
    title: 'Wireless Charging',
    description: 'Built-in Qi pad in the smart memory keypad',
    stat: '15',
    unit: 'W',
    gradient: 'from-blue-500 to-indigo-600',
  },
];

export default function ValueProps() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--cream)] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--gold)]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--orange)]/10 to-transparent rounded-full blur-3xl" />
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
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
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
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
            Why Wildwood
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--forest)] mb-6">
            Engineered for{' '}
            <span className="relative">
              <span className="text-[var(--orange)]">Excellence</span>
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
            Every detail crafted for the modern professional
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--cream-dark)] overflow-hidden h-full">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-[var(--orange)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20 blur-xl`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Stat */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-[var(--forest)]">
                    {feature.stat}
                  </span>
                  <span className="text-lg font-semibold text-[var(--gold)]">
                    {feature.unit}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-[var(--forest)] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--forest)]/60 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
