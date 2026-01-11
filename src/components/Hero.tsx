'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Truck, Shield, RotateCcw, Volume2, Zap, ChevronUp, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [deskHeight, setDeskHeight] = useState(50);
  const [isAnimating, setIsAnimating] = useState(true);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);

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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  // Calculate desk position based on height (25" to 50")
  const actualHeight = 25 + (deskHeight / 100) * 25;
  const legHeight = 80 + (deskHeight / 100) * 120; // px values for visualization

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--forest)]"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(211, 132, 30, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(211, 132, 30, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(211, 132, 30, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[var(--gold)]/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            style={{ x: parallaxX, y: parallaxY }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                New Collection 2025
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 leading-[1.1]"
            >
              <span className="text-white">The Standing Desk,</span>{' '}
              <span className="relative">
                <span className="text-[var(--gold)]">Redefined</span>
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
                    stroke="var(--gold)"
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
              className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Handcrafted solid walnut. Whisper-quiet dual motors.
              The desk that transforms how you work.
            </motion.p>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <span className="text-4xl md:text-5xl font-bold text-white">
                $1,299
              </span>
              <span className="text-xl text-white/40 line-through">
                $1,599
              </span>
              <span className="px-3 py-1 bg-[var(--orange)] text-white text-sm font-bold rounded-full">
                Save $300
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button className="group relative overflow-hidden bg-[var(--orange)] text-white font-semibold text-lg px-8 py-4 rounded-xl w-full sm:w-auto flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_40px_rgba(186,75,26,0.4)]">
                <span className="relative z-10">Shop Now</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--orange)] to-[#D35A20] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl w-full sm:w-auto hover:bg-white/20 transition-all">
                View Specs
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/60"
            >
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Trial' },
                { icon: Shield, label: '10-Year Warranty' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Interactive Desk Visualization */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow Effect Behind Desk */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-[80%] h-[80%] rounded-full bg-[var(--gold)]/10 blur-3xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              {/* Desk Visualization */}
              <div className="relative w-full h-full flex items-end justify-center pb-12">
                <div className="relative">
                  {/* Desktop Surface with Wood Grain */}
                  <motion.div
                    className="relative"
                    style={{ marginBottom: legHeight }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  >
                    {/* Desktop */}
                    <div className="relative w-[320px] h-[20px] rounded-lg overflow-hidden shadow-2xl">
                      {/* Wood grain base */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5D4037] via-[#6D4C41] to-[#5D4037]" />
                      {/* Wood grain lines */}
                      <div className="absolute inset-0 opacity-30">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute h-[1px] bg-[#3E2723]/40"
                            style={{
                              top: `${12 + i * 10}%`,
                              left: 0,
                              right: 0,
                              transform: `scaleX(${0.9 + Math.random() * 0.2})`,
                            }}
                          />
                        ))}
                      </div>
                      {/* Shine */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                      {/* Edge highlight */}
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#4E342E]" />
                    </div>

                    {/* Monitor on desk */}
                    <motion.div
                      className="absolute -top-[100px] left-1/2 -translate-x-1/2"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {/* Monitor Stand */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[8px] h-[30px] bg-gradient-to-b from-[#424242] to-[#212121] rounded-t" />
                      <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[40px] h-[6px] bg-gradient-to-b from-[#424242] to-[#212121] rounded-full" />
                      {/* Monitor */}
                      <div className="relative w-[120px] h-[70px] bg-[#1a1a1a] rounded-lg border-[3px] border-[#333] shadow-xl mb-[28px]">
                        {/* Screen */}
                        <div className="absolute inset-[4px] rounded bg-gradient-to-br from-[#1e3a5f] to-[#0d1b2a] overflow-hidden">
                          {/* Screen content hint */}
                          <div className="absolute top-2 left-2 right-2 h-2 bg-white/10 rounded" />
                          <div className="absolute top-6 left-2 w-[60%] h-1.5 bg-white/5 rounded" />
                          <div className="absolute top-9 left-2 w-[40%] h-1.5 bg-white/5 rounded" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Keyboard */}
                    <div className="absolute -top-[12px] left-[60px] w-[80px] h-[30px] bg-gradient-to-b from-[#e0e0e0] to-[#bdbdbd] rounded-[4px] shadow-md">
                      <div className="absolute inset-[3px] rounded-[2px] bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0]">
                        {/* Key hints */}
                        <div className="grid grid-cols-10 gap-[1px] p-[2px]">
                          {[...Array(30)].map((_, i) => (
                            <div key={i} className="aspect-square bg-[#d0d0d0] rounded-[1px]" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mouse */}
                    <div className="absolute -top-[8px] right-[50px] w-[16px] h-[24px] bg-gradient-to-b from-[#e0e0e0] to-[#bdbdbd] rounded-full shadow-md" />

                    {/* Coffee mug */}
                    <div className="absolute -top-[25px] right-[90px] w-[18px] h-[22px] bg-white rounded-b-lg rounded-t-[2px] shadow-md">
                      <div className="absolute top-[4px] right-[-6px] w-[8px] h-[12px] border-2 border-white rounded-full" />
                      <div className="absolute top-[2px] left-[3px] right-[3px] h-[4px] bg-[#4a3728] rounded-full" />
                    </div>
                  </motion.div>

                  {/* Desk Legs */}
                  <div className="absolute bottom-0 left-[30px] right-[30px] flex justify-between">
                    {/* Left Leg */}
                    <div className="relative w-[24px]">
                      <motion.div
                        className="absolute bottom-0 w-full bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a] rounded-b-md origin-bottom"
                        style={{ height: legHeight }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                      >
                        {/* Inner column (telescoping effect) */}
                        <motion.div
                          className="absolute top-[10px] left-[4px] right-[4px] bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-sm"
                          style={{ height: legHeight * 0.4 }}
                        />
                        {/* Motor housing */}
                        <div className="absolute top-[40%] left-0 right-0 h-[20px] bg-gradient-to-b from-[#333] to-[#222] rounded-sm" />
                      </motion.div>
                      {/* Foot */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[6px] bg-gradient-to-b from-[#333] to-[#222] rounded-full" />
                    </div>

                    {/* Right Leg */}
                    <div className="relative w-[24px]">
                      <motion.div
                        className="absolute bottom-0 w-full bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a] rounded-b-md origin-bottom"
                        style={{ height: legHeight }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                      >
                        {/* Inner column (telescoping effect) */}
                        <motion.div
                          className="absolute top-[10px] left-[4px] right-[4px] bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-sm"
                          style={{ height: legHeight * 0.4 }}
                        />
                        {/* Motor housing */}
                        <div className="absolute top-[40%] left-0 right-0 h-[20px] bg-gradient-to-b from-[#333] to-[#222] rounded-sm" />
                      </motion.div>
                      {/* Foot */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[6px] bg-gradient-to-b from-[#333] to-[#222] rounded-full" />
                    </div>
                  </div>

                  {/* Feature Callouts */}
                  <motion.div
                    className="absolute -left-[140px] top-[20px]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                        <div className="flex items-center gap-2 text-white">
                          <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[var(--gold)]" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold">Dual Motors</p>
                            <p className="text-[10px] text-white/60">300lb capacity</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-8 h-[2px] bg-gradient-to-r from-white/40 to-transparent" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -right-[130px] top-[-40px]"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-[2px] bg-gradient-to-l from-white/40 to-transparent" />
                      <div className="px-3 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                        <div className="flex items-center gap-2 text-white">
                          <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/20 flex items-center justify-center">
                            <Volume2 className="w-4 h-4 text-[var(--gold)]" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold">Whisper Quiet</p>
                            <p className="text-[10px] text-white/60">&lt;45dB operation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Height Control */}
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <button
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  onClick={() => { setIsAnimating(false); setDeskHeight(Math.max(0, deskHeight - 10)); }}
                >
                  <ChevronDown className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center">
                  <span className="text-white font-bold text-lg">{actualHeight.toFixed(0)}"</span>
                  <span className="text-white/50 text-xs">Height</span>
                </div>

                <button
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  onClick={() => { setIsAnimating(false); setDeskHeight(Math.min(100, deskHeight + 10)); }}
                >
                  <ChevronUp className="w-5 h-5" />
                </button>
              </motion.div>

              {/* Height Range Label */}
              <motion.div
                className="absolute -right-2 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-white/40 text-xs rotate-90 whitespace-nowrap">25" - 50" range</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--cream)] to-transparent" />
    </section>
  );
}
