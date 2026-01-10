'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, Check } from 'lucide-react';
import { comparison } from '@/lib/constants';

export default function ComparisonSection() {
  return (
    <section className="bg-[#2C2F21] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The <span className="text-[#BA4B1A]">Smart</span> Choice
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See why professionals choose Wildwood over standard desks
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* OLD WAY - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#3D4030] rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] grayscale">
              <Image
                src={comparison.oldWay.image}
                alt={comparison.oldWay.title}
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D4030] via-[#3D4030]/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white/60 bg-white/10 rounded-full mb-4">
                THE OLD WAY
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {comparison.oldWay.title}
              </h3>

              {/* Points */}
              <ul className="space-y-4">
                {comparison.oldWay.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/60">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* WILDWOOD - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#BA4B1A] rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[4/3]">
              <Image
                src={comparison.newWay.image}
                alt={comparison.newWay.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#BA4B1A] via-[#BA4B1A]/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#D3841E] bg-white/20 rounded-full mb-4">
                THE WILDWOOD WAY
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {comparison.newWay.title}
              </h3>

              {/* Points */}
              <ul className="space-y-4">
                {comparison.newWay.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Gold Highlight Border */}
            <div className="absolute inset-0 border-2 border-[#D3841E] rounded-2xl pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-white/60 mb-6">
            Join thousands of professionals who made the switch
          </p>
          <button className="px-8 py-4 bg-white text-[#2C2F21] hover:bg-[#FDF5EF] font-semibold rounded-md transition-colors">
            Make the Smart Choice
          </button>
        </motion.div>
      </div>
    </section>
  );
}
