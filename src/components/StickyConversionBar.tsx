'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart, Star, Truck } from 'lucide-react';
import { product, productMeta } from '@/lib/constants';

export default function StickyConversionBar() {
  const { scrollY } = useScroll();

  // Bar fades in after scrolling past hero
  const opacity = useTransform(scrollY, [0, 600, 700], [0, 0, 1]);
  const translateY = useTransform(scrollY, [0, 600, 700], [100, 100, 0]);

  return (
    <motion.div
      style={{ opacity, y: translateY }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E5E5E0] shadow-[0_-4px_30px_rgba(0,0,0,0.15)]"
    >
      {/* Desktop Layout */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Product Image + Info */}
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-[#F5F5F0] flex-shrink-0">
              <Image
                src="/images/product-full.jpg"
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-[#2C2F21] text-base">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#D3841E] text-[#D3841E]" />
                  ))}
                </div>
                <span className="text-[#5C5F52]">
                  {productMeta.rating} ({productMeta.reviewCount})
                </span>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="text-right">
            <div className="flex items-baseline gap-2 justify-end">
              <span className="text-2xl font-bold text-[#2C2F21]">
                ${productMeta.currentPrice.toLocaleString()}
              </span>
              <span className="text-sm text-[#8B8D85] line-through">
                ${productMeta.originalPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#4ADE80] justify-end">
              <Truck className="w-3 h-3" />
              <span>Free Shipping</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(186, 75, 26, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-4 bg-[#BA4B1A] hover:bg-[#9E3F16] text-white font-semibold text-base rounded-lg transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </motion.button>
        </div>

        {/* Promo bar - Desktop only */}
        <div className="mt-3 pt-3 border-t border-[#E5E5E0]">
          <p className="text-center text-sm text-[#5C5F52]">
            Use code <span className="font-semibold text-[#BA4B1A]">{productMeta.promoCode}</span> for {productMeta.promoDiscount} off · 30-Day Trial · 10-Year Warranty
          </p>
        </div>
      </div>

      {/* Mobile Layout - Full width CTA, minimal info */}
      <div className="md:hidden px-4 py-3">
        <div className="flex items-center gap-3 mb-3">
          {/* Price - prominent */}
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#2C2F21]">
                ${productMeta.currentPrice.toLocaleString()}
              </span>
              <span className="text-xs text-[#8B8D85] line-through">
                ${productMeta.originalPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#4ADE80]">
              <Truck className="w-3 h-3" />
              <span>Free Shipping</span>
            </div>
          </div>
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#D3841E] text-[#D3841E]" />
            <span className="text-sm font-medium text-[#2C2F21]">{productMeta.rating}</span>
            <span className="text-xs text-[#5C5F52]">({productMeta.reviewCount})</span>
          </div>
        </div>

        {/* Full-width CTA button for mobile */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 py-4 bg-[#BA4B1A] active:bg-[#9E3F16] text-white font-bold text-base rounded-lg"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart - ${productMeta.currentPrice.toLocaleString()}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
