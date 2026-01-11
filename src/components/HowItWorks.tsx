'use client';

import { motion } from 'framer-motion';
import { Package, Wrench, Smile, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Package,
    title: 'Order',
    description: 'Choose your size and wood finish. Free shipping across Canada & US.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Assemble',
    description: '20-minute setup with included tools. No experience needed.',
    color: 'from-[var(--gold)] to-[var(--orange)]',
  },
  {
    number: '03',
    icon: Smile,
    title: 'Enjoy',
    description: 'Save your heights and adjust with one touch. Transform your workday.',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--cream)] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[var(--gold)]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-[var(--orange)]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[var(--gold)]/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
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
            Simple Process
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--forest)] mb-6">
            Setup in{' '}
            <span className="relative">
              <span className="text-[var(--orange)]">Minutes</span>
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
            From unboxing to working—faster than your lunch break
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-[var(--gold)] to-emerald-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                className="relative text-center"
              >
                {/* Step Circle */}
                <div className="relative z-10 inline-block mb-8">
                  {/* Animated ring */}
                  <motion.div
                    className={`absolute -inset-3 rounded-full bg-gradient-to-br ${step.color} opacity-20`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />

                  {/* Main circle */}
                  <div className="relative w-32 h-32 rounded-full bg-white shadow-xl flex flex-col items-center justify-center border-2 border-[var(--cream-dark)]">
                    <span className="text-xs font-bold text-[var(--gold)] tracking-widest">STEP</span>
                    <span className="text-4xl font-bold text-[var(--forest)]">{step.number}</span>
                  </div>

                  {/* Icon badge */}
                  <motion.div
                    className={`absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif text-[var(--forest)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--forest)]/60 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Arrow (mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-8 flex justify-center">
                    <ArrowRight className="w-6 h-6 text-[var(--gold)] rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
