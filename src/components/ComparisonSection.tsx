'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { comparison } from '@/lib/constants';

export default function ComparisonSection() {
  return (
    <section className="bg-[#2C2F21] py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            The <span className="text-[#BA4B1A]">Smart</span> Choice
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            See why professionals choose Wildwood
          </p>
        </motion.div>

        {/* Comparison Grid - Text Only */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* OLD WAY - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#3D4030] rounded-2xl p-8 md:p-10"
          >
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white/50 bg-white/10 rounded-full mb-6">
              THE OLD WAY
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-white/80 mb-8">
              {comparison.oldWay.title}
            </h3>

            {/* Points */}
            <ul className="space-y-5">
              {comparison.oldWay.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-white/60 text-base md:text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* WILDWOOD - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-[#BA4B1A] rounded-2xl p-8 md:p-10"
          >
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-white/20 rounded-full mb-6">
              THE WILDWOOD WAY
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {comparison.newWay.title}
            </h3>

            {/* Points */}
            <ul className="space-y-5">
              {comparison.newWay.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-base md:text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Gold Highlight Border */}
            <div className="absolute inset-0 border-2 border-[#D3841E] rounded-2xl pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-white text-[#2C2F21] hover:bg-[#FDF5EF] font-semibold rounded-lg transition-colors">
            Make the Smart Choice
          </button>
        </motion.div>
      </div>
    </section>
  );
}
