'use client';

import { motion } from 'framer-motion';
import { Star, Users, Shield, Truck } from 'lucide-react';

const stats = [
  { icon: Star, value: '4.9', label: 'Customer Rating', suffix: '/5' },
  { icon: Users, value: '247', label: 'Happy Reviews', suffix: '+' },
  { icon: Shield, value: '10', label: 'Year Warranty', suffix: 'yr' },
  { icon: Truck, value: 'Free', label: 'Canada-Wide', suffix: '' },
];

export default function SocialProofStats() {
  return (
    <section className="section-white py-12 md:py-16 border-y border-[var(--cream-dark)]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--gold-light)] mb-3">
                <stat.icon className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl md:text-4xl font-bold text-[var(--forest)]">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-lg text-[var(--gold)] font-semibold">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
