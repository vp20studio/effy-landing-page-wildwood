'use client';

import { motion } from 'framer-motion';
import { Zap, Volume2 } from 'lucide-react';

// Simplified for cold traffic - 2 key features, icons instead of AI images
const features = [
  {
    id: 'dual-motors',
    icon: Zap,
    title: 'Dual Motors',
    stat: '300 lbs',
    statLabel: 'Lift Capacity',
    description: 'Industrial-grade dual motor system delivers smooth, powerful height adjustment.',
  },
  {
    id: 'whisper-quiet',
    icon: Volume2,
    title: 'Whisper Quiet',
    stat: '< 45dB',
    statLabel: 'Noise Level',
    description: 'Quieter than a library. Take calls while adjusting your desk height.',
  },
];

export default function ScrollytellingSection() {
  return (
    <section className="bg-[#2C2F21] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[#D3841E] text-2xl mb-2 block">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Engineered for <span className="text-[#BA4B1A]">Performance</span>
          </h2>
        </motion.div>

        {/* Feature Cards - Simple Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#3D4030] rounded-2xl p-8 md:p-10"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#BA4B1A]/20 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#BA4B1A]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {feature.title}
              </h3>

              {/* Stat */}
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-[#BA4B1A]">
                  {feature.stat}
                </span>
                <span className="text-sm text-white/60 ml-2">
                  {feature.statLabel}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
