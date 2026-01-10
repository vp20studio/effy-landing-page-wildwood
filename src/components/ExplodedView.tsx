'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { explodedLayers } from '@/lib/constants';

export default function ExplodedView() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Layer animations - explode apart as user scrolls
  const topLayerY = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, -80, -120]);
  const bottomLayerY = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 80, 120]);

  // Opacity for labels
  const labelOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#FDF5EF] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#2C2F21] mb-4">
            Anatomy of <span className="text-[#BA4B1A]">Perfection</span>
          </h2>
          <p className="text-lg text-[#5C5F52] max-w-2xl mx-auto">
            Three precision-engineered layers working in harmony
          </p>
        </motion.div>

        {/* Exploded View Container */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          {/* Layer Stack */}
          <div className="relative w-full max-w-3xl">
            {/* Top Layer - Walnut Top */}
            <motion.div
              style={{ y: topLayerY }}
              className="relative"
            >
              <div className="relative aspect-[5/1] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={explodedLayers[0].image}
                  alt={explodedLayers[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Label */}
              <motion.div
                style={{ opacity: labelOpacity }}
                className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 translate-x-full pl-4 md:pl-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 md:w-16 h-px bg-[#BA4B1A]" />
                  <div className="whitespace-nowrap">
                    <p className="text-sm md:text-base font-bold text-[#2C2F21]">
                      {explodedLayers[0].name}
                    </p>
                    <p className="text-xs md:text-sm text-[#5C5F52] hidden md:block">
                      {explodedLayers[0].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Middle Layer - Steel Frame */}
            <motion.div className="relative mt-4">
              <div className="relative aspect-[5/0.75] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={explodedLayers[1].image}
                  alt={explodedLayers[1].name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Label */}
              <motion.div
                style={{ opacity: labelOpacity }}
                className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-4 md:pr-8"
              >
                <div className="flex items-center gap-3 flex-row-reverse">
                  <div className="w-8 md:w-16 h-px bg-[#BA4B1A]" />
                  <div className="whitespace-nowrap text-right">
                    <p className="text-sm md:text-base font-bold text-[#2C2F21]">
                      {explodedLayers[1].name}
                    </p>
                    <p className="text-xs md:text-sm text-[#5C5F52] hidden md:block">
                      {explodedLayers[1].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Layer - Electronics */}
            <motion.div
              style={{ y: bottomLayerY }}
              className="relative mt-4"
            >
              <div className="relative aspect-[5/0.5] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={explodedLayers[2].image}
                  alt={explodedLayers[2].name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Label */}
              <motion.div
                style={{ opacity: labelOpacity }}
                className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 translate-x-full pl-4 md:pl-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 md:w-16 h-px bg-[#BA4B1A]" />
                  <div className="whitespace-nowrap">
                    <p className="text-sm md:text-base font-bold text-[#2C2F21]">
                      {explodedLayers[2].name}
                    </p>
                    <p className="text-xs md:text-sm text-[#5C5F52] hidden md:block">
                      {explodedLayers[2].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-[#5C5F52] mt-8"
        >
          Scroll to see the layers separate
        </motion.p>
      </div>
    </section>
  );
}
