'use client';

import { motion } from 'framer-motion';
import { Package, Wrench, Smile } from 'lucide-react';
import { howItWorksSteps } from '@/lib/constants';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  'package': Package,
  'wrench': Wrench,
  'smile': Smile,
};

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2F21]">
            Setup in <span className="text-[#BA4B1A]">Minutes</span>
          </h2>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-[#E5E5E0]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-[#BA4B1A] origin-left"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {howItWorksSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || Package;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: 0.3 + index * 0.2,
                    }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#FDF5EF] flex flex-col items-center justify-center relative z-10"
                  >
                    {/* Number Badge */}
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#BA4B1A] text-white text-sm font-bold flex items-center justify-center">
                      {String(step.step).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <Icon className="w-10 h-10 text-[#2C2F21]" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#2C2F21] mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#5C5F52] max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <button className="px-8 py-4 bg-[#BA4B1A] hover:bg-[#9E3F16] text-white font-semibold rounded-md transition-colors">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
