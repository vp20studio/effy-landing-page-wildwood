'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { product } from '@/lib/constants';

export default function StickyConversionBar() {
  const { scrollY } = useScroll();

  // Bar fades in after scrolling 100vh (past hero)
  const opacity = useTransform(scrollY, [0, 800, 900], [0, 0, 1]);
  const translateY = useTransform(scrollY, [0, 800, 900], [100, 100, 0]);

  return (
    <motion.div
      style={{ opacity, y: translateY }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-strong border-t border-[#E5E5E0] shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Product Name - Hidden on small mobile */}
          <div className="hidden sm:block flex-1">
            <h3 className="font-semibold text-[#2C2F21] text-sm md:text-base">
              {product.name}
            </h3>
            <p className="text-xs text-[#5C5F52]">
              Solid Wood Electric Standing Desk
            </p>
          </div>

          {/* Mobile: Just show name */}
          <div className="sm:hidden flex-1">
            <h3 className="font-semibold text-[#2C2F21] text-sm">
              Wildwood Desk
            </h3>
          </div>

          {/* Price */}
          <div className="text-right mr-4">
            <p className="text-lg sm:text-xl font-bold text-[#2C2F21]">
              ${product.price.toLocaleString()}
            </p>
            <p className="text-xs text-[#5C5F52]">{product.currency}</p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#BA4B1A] hover:bg-[#9E3F16] text-white font-semibold text-sm sm:text-base rounded-md transition-colors shadow-md"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
