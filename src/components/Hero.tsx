'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, RotateCcw, ChevronUp, ChevronDown, Check } from 'lucide-react';

// Wood configurations with texture images
const woodTypes = {
  walnut: {
    name: 'Walnut',
    gradient: 'linear-gradient(90deg, #5D4037 0%, #8B7355 50%, #5D4037 100%)',
    swatch: '#6D4C41',
    image: 'https://effydesk.com/cdn/shop/files/wildwood-standing-desk-1090966.jpg?v=1765489975&width=1346',
  },
  acacia: {
    name: 'Acacia',
    gradient: 'linear-gradient(90deg, #8B6914 0%, #C4A77D 50%, #8B6914 100%)',
    swatch: '#A1887F',
    image: 'https://effydesk.com/cdn/shop/files/wildwood-standing-desk-9900632.jpg?v=1765489975&width=1346',
  },
  pheasant: {
    name: 'Pheasant Wood',
    gradient: 'linear-gradient(90deg, #8D4004 0%, #C9834A 50%, #8D4004 100%)',
    swatch: '#BF6C3B',
    image: 'https://effydesk.com/cdn/shop/files/wildwood-standing-desk-6103063.jpg?v=1765489975&width=1346',
  },
};

const frameColors = {
  black: { name: 'Black', color: '#1a1a1a', inner: '#0a0a0a' },
  white: { name: 'White', color: '#f0f0f0', inner: '#e0e0e0' },
};

export default function Hero() {
  const [deskHeight, setDeskHeight] = useState(50);
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedWood, setSelectedWood] = useState<keyof typeof woodTypes>('acacia');
  const [selectedFrame, setSelectedFrame] = useState<keyof typeof frameColors>('black');

  // Pricing by wood type (Small size starting prices)
  const woodPricing = {
    walnut: { price: 960, originalPrice: 1200 },
    acacia: { price: 740, originalPrice: 925 },
    pheasant: { price: 840, originalPrice: 1050 },
  };
  const currentPricing = woodPricing[selectedWood];

  // Auto-animate desk height on load
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setDeskHeight(prev => {
        const next = prev >= 80 ? 30 : prev + 1;
        if (next === 30) {
          setTimeout(() => setIsAnimating(false), 2000);
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Calculate desk position based on height (25" to 50")
  const actualHeight = 25 + (deskHeight / 100) * 25;
  const legHeight = 80 + (deskHeight / 100) * 120;

  const wood = woodTypes[selectedWood];
  const frame = frameColors[selectedFrame];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[var(--cream)] via-white to-white pt-20 md:pt-20">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-bl from-[var(--gold)]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-tr from-[var(--orange)]/5 to-transparent rounded-full blur-3xl" />

      <div className="container relative z-10 pt-8 pb-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--forest)] rounded-full text-white text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                New Collection 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-4 md:mb-6 leading-[1.1]"
            >
              <span className="text-[var(--forest)]">The Standing Desk,</span>{' '}
              <span className="relative">
                <span className="text-[var(--orange)]">Redefined</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <motion.path
                    d="M0 4 Q50 0, 100 4 T200 4"
                    fill="none"
                    stroke="var(--orange)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-xl text-[var(--forest)]/70 max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8"
            >
              Handcrafted solid hardwood. Whisper-quiet dual motors.
              The desk that transforms how you work.
            </motion.p>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-6 md:mb-8"
            >
              <span className="text-3xl md:text-5xl font-bold text-[var(--forest)]">
                From ${currentPricing.price.toLocaleString()}
              </span>
              <span className="text-xl text-[var(--forest)]/40 line-through">
                ${currentPricing.originalPrice.toLocaleString()}
              </span>
              <span className="px-3 py-1 bg-[var(--orange)] text-white text-sm font-bold rounded-full">
                Save 20%
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#product-picker"
                className="group relative overflow-hidden bg-[var(--orange)] text-white font-semibold text-lg px-8 py-4 rounded-xl w-full sm:w-auto flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_40px_rgba(186,75,26,0.3)]"
              >
                <span className="relative z-10">Configure Yours</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#specifications" className="bg-[var(--forest)]/5 border border-[var(--forest)]/20 text-[var(--forest)] font-semibold px-8 py-4 rounded-xl w-full sm:w-auto hover:bg-[var(--forest)]/10 transition-all text-center">
                View Specs
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[var(--forest)]/60"
            >
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Trial' },
                { icon: Shield, label: '20-Year Warranty' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Interactive Desk Visualization */}
          <motion.div
            className="relative order-2 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Desk Preview Area */}
              <div className="relative bg-[var(--cream)]/50 rounded-2xl md:rounded-3xl p-4 pb-14 md:p-8 md:pb-16">
                {/* Desk Visualization */}
                <div className="relative h-[200px] md:h-[300px] flex items-end justify-center">
                  <div className="relative">
                    {/* Desktop Surface */}
                    <motion.div
                      className="relative"
                      style={{ marginBottom: legHeight }}
                      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    >
                      {/* Desktop with wood grain */}
                      <div
                        className="relative w-[280px] h-[16px] rounded-lg shadow-lg"
                        style={{ background: wood.gradient }}
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-t-lg" />
                        {/* Bottom edge */}
                        <div
                          className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-lg"
                          style={{ backgroundColor: `color-mix(in srgb, ${wood.swatch} 80%, black)` }}
                        />

                      </div>
                    </motion.div>

                    {/* Desk Legs */}
                    <div className="absolute bottom-0 left-[20px] right-[20px] flex justify-between">
                      {/* Left Leg */}
                      <div className="relative w-[20px]">
                        <motion.div
                          className="absolute bottom-0 w-full rounded-b-md origin-bottom"
                          style={{
                            height: legHeight,
                            backgroundColor: frame.color,
                          }}
                          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                        >
                          {/* Inner column */}
                          <motion.div
                            className="absolute top-[8px] left-[3px] right-[3px] rounded-sm"
                            style={{
                              height: legHeight * 0.4,
                              backgroundColor: frame.inner,
                            }}
                          />
                        </motion.div>
                        {/* Foot */}
                        <div
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[36px] h-[5px] rounded-full"
                          style={{ backgroundColor: frame.color }}
                        />
                      </div>

                      {/* Right Leg */}
                      <div className="relative w-[20px]">
                        <motion.div
                          className="absolute bottom-0 w-full rounded-b-md origin-bottom"
                          style={{
                            height: legHeight,
                            backgroundColor: frame.color,
                          }}
                          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                        >
                          {/* Inner column */}
                          <motion.div
                            className="absolute top-[8px] left-[3px] right-[3px] rounded-sm"
                            style={{
                              height: legHeight * 0.4,
                              backgroundColor: frame.inner,
                            }}
                          />
                        </motion.div>
                        {/* Foot */}
                        <div
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[36px] h-[5px] rounded-full"
                          style={{ backgroundColor: frame.color }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selection Label */}
                <div className="text-center mt-4">
                  <p className="font-semibold text-[var(--forest)]">
                    {wood.name} + {frame.name} Frame
                  </p>
                  <p className="text-sm text-[var(--forest)]/50">
                    {actualHeight.toFixed(0)}" height
                  </p>
                </div>

                {/* Height Control */}
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <button
                    className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[var(--forest)] hover:bg-gray-50 transition-colors"
                    onClick={() => { setIsAnimating(false); setDeskHeight(Math.max(0, deskHeight - 10)); }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>

                  <div className="flex flex-col items-center px-4">
                    <span className="text-[var(--forest)] font-bold text-lg">{actualHeight.toFixed(0)}"</span>
                    <span className="text-[var(--forest)]/50 text-xs">Height</span>
                  </div>

                  <button
                    className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[var(--forest)] hover:bg-gray-50 transition-colors"
                    onClick={() => { setIsAnimating(false); setDeskHeight(Math.min(100, deskHeight + 10)); }}
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>

              {/* Wood & Frame Selectors */}
              <motion.div
                className="mt-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {/* Wood Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--forest)]/60 mb-2 text-center">
                    WOOD TYPE
                  </label>
                  <div className="flex justify-center gap-3">
                    {(Object.keys(woodTypes) as Array<keyof typeof woodTypes>).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedWood(key)}
                        className={`relative w-12 h-12 rounded-full overflow-hidden transition-all ${
                          selectedWood === key
                            ? 'ring-2 ring-[var(--orange)] ring-offset-2'
                            : 'hover:scale-105'
                        }`}
                        style={{
                          backgroundImage: `url(${woodTypes[key].image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                        title={woodTypes[key].name}
                      >
                        {selectedWood === key && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center bg-black/20"
                          >
                            <Check className="w-5 h-5 text-white drop-shadow-md" />
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frame Color Selector */}
                <div className="mb-8 md:mb-0">
                  <label className="block text-xs font-semibold text-[var(--forest)]/60 mb-2 text-center">
                    FRAME COLOR
                  </label>
                  <div className="flex justify-center gap-3">
                    {(Object.keys(frameColors) as Array<keyof typeof frameColors>).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedFrame(key)}
                        className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                          selectedFrame === key
                            ? 'ring-2 ring-[var(--orange)] ring-offset-2'
                            : 'hover:scale-105'
                        } ${key === 'white' ? 'border-gray-200' : 'border-transparent'}`}
                        style={{ backgroundColor: frameColors[key].color }}
                        title={frameColors[key].name}
                      >
                        {selectedFrame === key && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Check className={`w-5 h-5 ${key === 'white' ? 'text-[var(--forest)]' : 'text-white'}`} />
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
