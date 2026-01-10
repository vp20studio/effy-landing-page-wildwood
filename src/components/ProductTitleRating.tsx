'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { product, productMeta } from '@/lib/constants';

export default function ProductTitleRating() {
  return (
    <section className="bg-[#FDF5EF] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Decorative Sparkle */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[#D3841E] text-2xl mb-4 block"
        >
          ✦
        </motion.span>

        {/* Product Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2F21] mb-4"
        >
          {product.name.toUpperCase()}
        </motion.h2>

        {/* Star Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          {/* Stars */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05 }}
              >
                <Star
                  className={`w-5 h-5 ${
                    i < Math.floor(productMeta.rating)
                      ? 'fill-[#D3841E] text-[#D3841E]'
                      : 'fill-[#D3841E]/30 text-[#D3841E]/30'
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Rating Text */}
          <span className="text-[#5C5F52] text-sm md:text-base">
            <span className="font-semibold text-[#2C2F21]">{productMeta.rating}</span>/5
            <span className="mx-2">·</span>
            <button className="underline hover:text-[#BA4B1A] transition-colors">
              {productMeta.reviewCount} reviews
            </button>
          </span>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          {/* Current Price */}
          <span className="text-3xl md:text-4xl font-bold text-[#2C2F21]">
            ${productMeta.currentPrice.toLocaleString()} CAD
          </span>

          {/* Original Price */}
          <span className="text-lg text-[#8B8D85] line-through">
            ${productMeta.originalPrice.toLocaleString()}
          </span>

          {/* Savings Badge */}
          <motion.span
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.3 }}
            className="px-3 py-1 bg-[#BA4B1A] text-white text-sm font-semibold rounded-full"
          >
            SAVE ${productMeta.savings}
          </motion.span>
        </motion.div>

        {/* Promo Code Reminder */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[#5C5F52] text-sm mb-8"
        >
          Use code <span className="font-semibold text-[#BA4B1A]">{productMeta.promoCode}</span> for {productMeta.promoDiscount} off at checkout
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button className="px-10 py-4 bg-[#BA4B1A] hover:bg-[#9E3F16] text-white font-semibold rounded-md transition-colors text-lg">
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
