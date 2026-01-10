'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { keypadFeatures, keypadImage } from '@/lib/constants';

export default function KeypadShowcase() {
  return (
    <section className="bg-white py-24 md:py-32">
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#2C2F21] mb-4">
            Smart <span className="text-[#BA4B1A]">Memory Keypad</span>
          </h2>
          <p className="text-lg text-[#5C5F52] max-w-2xl mx-auto">
            Intelligent controls at your fingertips
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT: Keypad Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FDF5EF] shadow-2xl">
              <Image
                src={keypadImage}
                alt="Smart Memory Keypad"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Orange Corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#BA4B1A] rounded-2xl -z-10" />
          </motion.div>

          {/* RIGHT: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {keypadFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex gap-4"
              >
                {/* Checkmark Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#BA4B1A]/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#BA4B1A]" />
                </div>

                {/* Feature Text */}
                <div>
                  <h3 className="text-xl font-bold text-[#2C2F21] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[#5C5F52]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <button className="px-8 py-4 bg-[#BA4B1A] hover:bg-[#9E3F16] text-white font-semibold rounded-md transition-colors">
                See Full Specifications
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
