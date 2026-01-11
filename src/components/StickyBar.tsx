'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';

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
          <div className="bg-white border-t border-[var(--cream-dark)] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
            <div className="container py-3">
              <div className="flex items-center justify-between gap-4">
                {/* Price Info */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--forest)]/50 line-through">$1,599</span>
                  <span className="text-xl font-bold text-[var(--forest)]">$1,299</span>
                  <span className="badge-gold text-xs">Save $300</span>
                </div>

                {/* CTA Button */}
                <button className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap">
                  Buy Now
                  <ShoppingCart className="w-4 h-4" />
                </button>

                {/* Dismiss Button */}
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-1.5 text-[var(--forest)]/50 hover:text-[var(--forest)] transition-colors"
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
