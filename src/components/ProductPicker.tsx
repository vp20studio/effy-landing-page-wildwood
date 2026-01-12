'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Truck, RotateCcw, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { getCartUrl, PROMO_CODE } from '@/lib/shopify';

// Wood + Frame Combinations
const variants = [
  {
    id: 'walnut-black',
    wood: 'Walnut',
    frame: 'Black',
    woodColor: 'linear-gradient(135deg, #5D4037 0%, #8D6E63 50%, #4E342E 100%)',
    frameColor: '#1a1a1a',
    description: 'Rich chocolate tones',
  },
  {
    id: 'acacia-black',
    wood: 'Acacia',
    frame: 'Black',
    woodColor: 'linear-gradient(135deg, #A1887F 0%, #D7CCC8 50%, #8D6E63 100%)',
    frameColor: '#1a1a1a',
    description: 'Natural grain pattern',
  },
  {
    id: 'pheasantwood-black',
    wood: 'Pheasant Wood',
    frame: 'Black',
    woodColor: 'linear-gradient(135deg, #BF360C 0%, #E65100 50%, #8D6E63 100%)',
    frameColor: '#1a1a1a',
    description: 'Golden red undertones',
  },
  {
    id: 'walnut-white',
    wood: 'Walnut',
    frame: 'White',
    woodColor: 'linear-gradient(135deg, #5D4037 0%, #8D6E63 50%, #4E342E 100%)',
    frameColor: '#f5f5f5',
    description: 'Rich chocolate tones',
  },
  {
    id: 'acacia-white',
    wood: 'Acacia',
    frame: 'White',
    woodColor: 'linear-gradient(135deg, #A1887F 0%, #D7CCC8 50%, #8D6E63 100%)',
    frameColor: '#f5f5f5',
    description: 'Natural grain pattern',
  },
  {
    id: 'pheasantwood-white',
    wood: 'Pheasant Wood',
    frame: 'White',
    woodColor: 'linear-gradient(135deg, #BF360C 0%, #E65100 50%, #8D6E63 100%)',
    frameColor: '#f5f5f5',
    description: 'Golden red undertones',
  },
];

// Size Options
const sizes = [
  { id: 'S', label: 'Small', dimensions: '47" × 29"', price: 1050, originalPrice: 1350 },
  { id: 'M', label: 'Medium', dimensions: '59" × 29"', price: 1150, originalPrice: 1450 },
  { id: 'L', label: 'Large', dimensions: '71" × 29"', price: 1250, originalPrice: 1550 },
];

export default function ProductPicker() {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[1]); // Default to Medium

  const sezzlePayment = Math.round(selectedSize.price / 4);

  const getCheckoutUrl = () => {
    return getCartUrl(
      selectedVariant.wood,
      selectedVariant.frame,
      selectedSize.id,
      PROMO_CODE
    );
  };

  return (
    <section id="product-picker" className="relative py-20 md:py-28 bg-gradient-to-b from-[var(--cream)] to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[var(--gold)]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--orange)]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--forest)] rounded-full text-white text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 text-[var(--gold)]" />
            Configure Your Desk
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--forest)] mb-4">
            Build Your{' '}
            <span className="text-[var(--orange)]">Wildwood</span>
          </h2>
          <p className="text-lg text-[var(--forest)]/60 max-w-xl mx-auto">
            Choose your wood, frame color, and size for the perfect fit
          </p>
        </motion.div>

        {/* Main Picker Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--gold)]/20 via-[var(--orange)]/20 to-[var(--gold)]/20 rounded-3xl blur-xl opacity-50" />

          <div className="relative bg-white rounded-3xl shadow-2xl border border-[var(--cream-dark)]/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Preview */}
              <div className="relative bg-gradient-to-br from-[var(--cream)] to-white p-8 lg:p-12 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedVariant.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Desk Illustration */}
                    <div className="relative w-[280px] h-[200px]">
                      {/* Desktop */}
                      <motion.div
                        className="absolute top-[60px] left-0 right-0 h-[20px] rounded-lg shadow-lg"
                        style={{ background: selectedVariant.woodColor }}
                        layoutId="desktop"
                      >
                        {/* Wood grain lines */}
                        <div className="absolute inset-0 opacity-20">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute h-[1px] bg-black/30"
                              style={{
                                top: `${20 + i * 15}%`,
                                left: '5%',
                                right: '5%',
                              }}
                            />
                          ))}
                        </div>
                        {/* Shine */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-t-lg" />
                      </motion.div>

                      {/* Left Leg */}
                      <motion.div
                        className="absolute bottom-0 left-[30px] w-[20px] h-[120px] rounded-b-md"
                        style={{ backgroundColor: selectedVariant.frameColor }}
                        layoutId="leftLeg"
                      >
                        <div
                          className="absolute inset-x-[3px] top-[10px] h-[50px] rounded"
                          style={{
                            backgroundColor: selectedVariant.frame === 'Black' ? '#0a0a0a' : '#e0e0e0',
                          }}
                        />
                      </motion.div>

                      {/* Right Leg */}
                      <motion.div
                        className="absolute bottom-0 right-[30px] w-[20px] h-[120px] rounded-b-md"
                        style={{ backgroundColor: selectedVariant.frameColor }}
                        layoutId="rightLeg"
                      >
                        <div
                          className="absolute inset-x-[3px] top-[10px] h-[50px] rounded"
                          style={{
                            backgroundColor: selectedVariant.frame === 'Black' ? '#0a0a0a' : '#e0e0e0',
                          }}
                        />
                      </motion.div>

                      {/* Feet */}
                      <div
                        className="absolute bottom-0 left-[15px] w-[50px] h-[6px] rounded-full"
                        style={{ backgroundColor: selectedVariant.frameColor }}
                      />
                      <div
                        className="absolute bottom-0 right-[15px] w-[50px] h-[6px] rounded-full"
                        style={{ backgroundColor: selectedVariant.frameColor }}
                      />
                    </div>

                    {/* Selection Label */}
                    <div className="text-center mt-6">
                      <p className="font-semibold text-[var(--forest)]">
                        {selectedVariant.wood} + {selectedVariant.frame} Frame
                      </p>
                      <p className="text-sm text-[var(--forest)]/50">
                        {selectedSize.dimensions}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Configuration */}
              <div className="p-8 lg:p-12">
                {/* Wood + Frame Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-[var(--forest)] mb-4">
                    Wood & Frame Color
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {variants.map((variant) => (
                      <motion.button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`relative aspect-square rounded-xl overflow-hidden transition-all ${
                          selectedVariant.id === variant.id
                            ? 'ring-2 ring-[var(--orange)] ring-offset-2'
                            : 'ring-1 ring-[var(--cream-dark)] hover:ring-[var(--forest)]/30'
                        }`}
                      >
                        {/* Wood background */}
                        <div
                          className="absolute inset-0"
                          style={{ background: variant.woodColor }}
                        />
                        {/* Frame color indicator */}
                        <div
                          className="absolute bottom-0 right-0 w-1/3 h-1/3"
                          style={{ backgroundColor: variant.frameColor }}
                        />
                        {/* Selection check */}
                        {selectedVariant.id === variant.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-1 left-1 w-5 h-5 bg-[var(--orange)] rounded-full flex items-center justify-center"
                          >
                            <Check className="w-3 h-3 text-white" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                  <p className="text-xs text-[var(--forest)]/50 mt-2">
                    {selectedVariant.wood}: {selectedVariant.description}
                  </p>
                </div>

                {/* Size Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-[var(--forest)] mb-4">
                    Desktop Size
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {sizes.map((size) => (
                      <motion.button
                        key={size.id}
                        onClick={() => setSelectedSize(size)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative p-4 rounded-xl text-center transition-all ${
                          selectedSize.id === size.id
                            ? 'bg-[var(--forest)] text-white'
                            : 'bg-[var(--cream)] text-[var(--forest)] hover:bg-[var(--cream-dark)]'
                        }`}
                      >
                        <span className="block text-lg font-bold">{size.id}</span>
                        <span className={`block text-xs ${
                          selectedSize.id === size.id ? 'text-white/70' : 'text-[var(--forest)]/50'
                        }`}>
                          {size.dimensions}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-6 p-4 bg-gradient-to-r from-[var(--cream)] to-transparent rounded-xl">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-3xl md:text-4xl font-bold text-[var(--forest)]">
                      ${selectedSize.price.toLocaleString()}
                    </span>
                    <span className="text-lg text-[var(--forest)]/40 line-through">
                      ${selectedSize.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold text-[var(--orange)]">
                      CAD
                    </span>
                  </div>
                  <p className="text-sm text-[var(--forest)]/60">
                    or 4 payments of <span className="font-semibold text-[var(--forest)]">${sezzlePayment}</span> with Sezzle
                  </p>
                </div>

                {/* Add to Cart CTA */}
                <motion.a
                  href={getCheckoutUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-3 w-full bg-[var(--orange)] hover:bg-[#a84216] text-white font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-[var(--orange)]/20"
                >
                  <span>Add to Cart</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-6 mt-6 text-[var(--forest)]/60">
                  {[
                    { icon: Truck, label: 'Free Shipping' },
                    { icon: RotateCcw, label: '30-Day Trial' },
                    { icon: Shield, label: '20-Year Warranty' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5 text-xs">
                      <item.icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[var(--forest)]/40 text-sm mt-8"
        >
          Ships within 5-7 business days • Assembly tools included
        </motion.p>
      </div>
    </section>
  );
}
