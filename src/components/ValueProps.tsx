'use client';

import { motion } from 'framer-motion';
import { Zap, Volume2, TreeDeciduous, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Dual Motors',
    description: '300lb lift capacity with smooth, powerful adjustment',
    stat: '300 lbs',
  },
  {
    icon: Volume2,
    title: 'Whisper Quiet',
    description: 'Under 45dB operation—quieter than a conversation',
    stat: '<45 dB',
  },
  {
    icon: TreeDeciduous,
    title: 'Solid Walnut',
    description: 'Hand-selected premium hardwood with natural grain',
    stat: '100%',
  },
  {
    icon: Smartphone,
    title: 'Wireless Charging',
    description: 'Built-in Qi pad in the smart memory keypad',
    stat: '15W',
  },
];

export default function ValueProps() {
  return (
    <section className="section section-cream">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="badge badge-gold mb-4">Why Wildwood</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--forest)] mb-4">
            Engineered for <span className="text-[var(--orange)]">Excellence</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Every detail crafted for the modern professional
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 md:p-8 text-center group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--orange-light)] to-[var(--gold-light)] mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-[var(--orange)]" />
              </div>

              {/* Stat */}
              <div className="text-2xl font-bold text-[var(--forest)] mb-2">
                {feature.stat}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-[var(--forest)] mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-secondary)] text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
