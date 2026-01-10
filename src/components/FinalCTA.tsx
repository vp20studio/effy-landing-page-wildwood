'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { product, productMeta } from '@/lib/constants';

const trustPoints = [
  'Free shipping',
  '30-day trial',
  '10-year warranty',
];

export default function FinalCTA() {
  return (
    <section className="bg-[#BA4B1A] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Decorative Sparkle */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[#D3841E] text-3xl mb-6 block"
        >
          ✦
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8"
        >
          Ready to Transform Your Workspace?
        </motion.h2>

        {/* Product Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 mb-2"
        >
          {product.name.toUpperCase()}
        </motion.p>

        {/* Price */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          ${productMeta.currentPrice.toLocaleString()} CAD
        </motion.p>

        {/* Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-white text-sm md:text-base">{point}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 bg-[#2C2F21] hover:bg-[#3D4030] text-white font-bold text-lg rounded-md transition-colors shadow-lg"
          >
            Add to Cart — ${productMeta.currentPrice.toLocaleString()}
          </motion.button>
        </motion.div>

        {/* Promo Reminder */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-white/70 text-sm mt-6"
        >
          Limited time: Use code <span className="font-semibold text-white">{productMeta.promoCode}</span> for {productMeta.promoDiscount} off
        </motion.p>
      </div>
    </section>
  );
}
