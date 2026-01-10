'use client';

import { motion } from 'framer-motion';
import { pressLogos } from '@/lib/constants';

export default function PressLogos() {
  return (
    <section className="bg-[#FDF5EF] py-12 md:py-16 border-y border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm text-[#8B8D85] tracking-widest uppercase mb-8"
        >
          As Seen In
        </motion.p>

        {/* Logo Strip */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FDF5EF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FDF5EF] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
            className="flex gap-16 items-center"
          >
            {/* Double the logos for seamless loop */}
            {[...pressLogos, ...pressLogos].map((press, index) => (
              <div
                key={`${press.name}-${index}`}
                className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                {/* Placeholder text logo - replace with actual SVGs */}
                <span className="text-xl md:text-2xl font-bold text-[#2C2F21] whitespace-nowrap tracking-tight">
                  {press.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Static version for users who prefer reduced motion */}
        <noscript>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {pressLogos.map((press) => (
              <span
                key={press.name}
                className="text-lg font-bold text-[#2C2F21]/40"
              >
                {press.name}
              </span>
            ))}
          </div>
        </noscript>
      </div>
    </section>
  );
}
