'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { materialsInfo } from '@/lib/constants';

export default function MaterialsDeepDive() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effect for image
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={containerRef} className="bg-[#FDF5EF] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT: Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={materialsInfo.image}
                alt={materialsInfo.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Decorative Orange Corner */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#BA4B1A] rounded-2xl -z-10" />
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            {/* Sparkle */}
            <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2F21] mb-2">
              {materialsInfo.title}
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-[#BA4B1A] font-semibold mb-6">
              {materialsInfo.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-[#5C5F52] mb-8 leading-relaxed">
              {materialsInfo.description}
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {materialsInfo.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#BA4B1A]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#BA4B1A]" />
                  </div>
                  <span className="text-[#2C2F21]">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <button className="text-[#BA4B1A] hover:text-[#9E3F16] font-medium underline transition-colors">
                See all wood options →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
