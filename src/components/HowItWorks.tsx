'use client';

import { motion } from 'framer-motion';
import { Package, Wrench, Smile } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Package,
    title: 'Order',
    description: 'Choose your size and wood finish. Free shipping across Canada.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Assemble',
    description: '20-minute setup with included tools. No experience needed.',
  },
  {
    number: '03',
    icon: Smile,
    title: 'Enjoy',
    description: 'Save your heights and adjust with one touch. Transform your workday.',
  },
];

export default function HowItWorks() {
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
          <span className="badge badge-gold mb-4">Simple Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--forest)] mb-4">
            Setup in <span className="text-[var(--orange)]">Minutes</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            From unboxing to working—faster than your lunch break
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[var(--gold)] via-[var(--orange)] to-[var(--gold)]" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Number Badge */}
              <div className="relative z-10 inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-[var(--shadow-lg)] mb-6">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-[var(--gold)] tracking-wider">
                    STEP
                  </span>
                  <span className="text-4xl font-bold text-[var(--forest)]">
                    {step.number}
                  </span>
                </div>
                {/* Icon Badge */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--orange)] to-[var(--gold)] flex items-center justify-center shadow-lg">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif text-[var(--forest)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--text-secondary)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
