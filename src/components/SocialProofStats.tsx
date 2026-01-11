'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Star, Users, Shield, Truck } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { icon: Star, value: 4.9, label: 'Customer Rating', suffix: '/5', decimals: 1 },
  { icon: Users, value: 233, label: 'Verified Reviews', suffix: '+', decimals: 0 },
  { icon: Shield, value: 20, label: 'Year Warranty', suffix: 'yr', decimals: 0 },
  { icon: Truck, value: 0, label: 'Shipping Cost', suffix: '', prefix: 'Free', decimals: 0 },
];

function AnimatedCounter({ value, decimals }: { value: number; decimals: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <>{decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue)}</>;
}

export default function SocialProofStats() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--forest) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-30" />

      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              className="text-center group"
            >
              {/* Icon container with animated ring */}
              <div className="relative inline-flex items-center justify-center mb-4">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--gold)]/20 to-[var(--orange)]/20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[var(--cream)] to-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow border border-[var(--gold)]/20">
                  <stat.icon className="w-7 h-7 text-[var(--gold)]" />
                </div>
              </div>

              {/* Value with animated counter */}
              <div className="flex items-baseline justify-center gap-1">
                {stat.prefix ? (
                  <span className="text-3xl md:text-4xl font-bold text-[var(--forest)]">
                    {stat.prefix}
                  </span>
                ) : (
                  <motion.span
                    className="text-3xl md:text-4xl font-bold text-[var(--forest)]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter value={stat.value} decimals={stat.decimals} />
                  </motion.span>
                )}
                {stat.suffix && (
                  <span className="text-lg text-[var(--gold)] font-bold">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <p className="text-sm text-[var(--forest)]/60 mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-30" />
    </section>
  );
}
