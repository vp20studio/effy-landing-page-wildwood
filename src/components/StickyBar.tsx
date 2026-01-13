'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';
import { getDefaultCartUrl, PROMO_CODE } from '@/lib/shopify';

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 100vh)
      const shouldShow = window.scrollY > window.innerHeight * 0.8;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] sticky-bottom">
            <div className="container py-4">
              <div className="flex items-center justify-between gap-3">
                {/* Price Info */}
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-[var(--forest)]">From $740</span>
                  <span className="text-xs text-[var(--orange)] font-medium">Save 20%</span>
                </div>

                {/* CTA Button */}
                <a
                  href="#product-picker"
                  className="btn-primary text-sm px-6 py-3 whitespace-nowrap flex-1 max-w-[200px] justify-center"
                >
                  Shop Now
                  <ShoppingCart className="w-4 h-4" />
                </a>

                {/* Dismiss Button */}
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 text-[var(--forest)]/50 hover:text-[var(--forest)] transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
