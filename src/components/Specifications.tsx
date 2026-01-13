'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const specifications = [
  { label: 'DIMENSIONS', value: 'W: 40" to 70"\nD: 29"\nH: 23" to 50"' },
  { label: 'LIFTING CAPACITY', value: 'Supports 310 lbs' },
  { label: 'MOTOR TYPE', value: 'Dual' },
  { label: 'LIFTING SPEED', value: '35mm/s' },
  { label: 'NOISE LEVEL', value: 'Less than 45dB' },
  { label: 'COLUMNS', value: 'Reinforced 3-segment' },
  { label: 'FINISHES', value: 'Matte gloss paint' },
  { label: 'FEET', value: 'Reinforced tapered\nW: 3"' },
  { label: 'FRAME WEIGHT', value: '78 lbs' },
  { label: 'TABLE TOP MATERIAL', value: 'Solid Wood' },
];

const tableSizes = [
  { size: 'Small', dimensions: 'W: 47" | D: 29" | H: 1"', weight: '40 lbs' },
  { size: 'Medium', dimensions: 'W: 59" | D: 29" | H: 1"', weight: '50 lbs' },
  { size: 'Large', dimensions: 'W: 71" | D: 29" | H: 1"', weight: '60 lbs' },
];

export default function Specifications() {
  return (
    <section id="specifications" className="relative py-20 md:py-28 bg-[var(--cream)]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-[var(--forest)]/60 tracking-wider mb-2">
            LET'S GET SPECIFIC
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--forest)]">
            Specifications & Dimensions
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Specs List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-between items-start py-3 border-b border-[var(--forest)]/10"
              >
                <span className="text-sm font-semibold text-[var(--forest)] tracking-wide">
                  {spec.label}
                </span>
                <span className="text-sm text-[var(--forest)]/70 text-right whitespace-pre-line">
                  {spec.value}
                </span>
              </motion.div>
            ))}

            {/* Table Top Dimensions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="text-sm font-semibold text-[var(--forest)] tracking-wide mb-3">
                TABLE TOP DIMENSIONS
              </p>
              <div className="space-y-2">
                {tableSizes.map((size) => (
                  <div key={size.size} className="flex justify-between text-sm text-[var(--forest)]/70">
                    <span className="font-medium text-[var(--forest)]">{size.size}</span>
                    <span>{size.dimensions}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Table Top Weight */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4 border-t border-[var(--forest)]/10"
            >
              <p className="text-sm font-semibold text-[var(--forest)] tracking-wide mb-3">
                TABLE TOP WEIGHT
              </p>
              <div className="flex gap-6 text-sm text-[var(--forest)]/70">
                {tableSizes.map((size) => (
                  <span key={size.size}>
                    <span className="font-medium text-[var(--forest)]">{size.size[0]}:</span> {size.weight}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Warranty */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-center py-4 border-t border-[var(--forest)]/10"
            >
              <span className="text-sm font-semibold text-[var(--forest)] tracking-wide">
                WARRANTY
              </span>
              <span className="text-lg font-bold text-[var(--orange)]">
                20 years
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Desk Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              {/* Simple desk illustration */}
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* Desktop */}
                <rect x="50" y="80" width="300" height="12" rx="2" fill="#8B6914" />
                <rect x="50" y="80" width="300" height="4" rx="1" fill="#A1887F" opacity="0.3" />

                {/* Left leg */}
                <rect x="70" y="92" width="20" height="150" fill="#2C2F21" />
                <rect x="73" y="100" width="14" height="60" fill="#1a1a1a" />

                {/* Right leg */}
                <rect x="310" y="92" width="20" height="150" fill="#2C2F21" />
                <rect x="313" y="100" width="14" height="60" fill="#1a1a1a" />

                {/* Feet */}
                <rect x="55" y="242" width="50" height="8" rx="2" fill="#2C2F21" />
                <rect x="295" y="242" width="50" height="8" rx="2" fill="#2C2F21" />

                {/* Dimension lines */}
                {/* Width */}
                <line x1="50" y1="270" x2="350" y2="270" stroke="#666" strokeWidth="1" strokeDasharray="4" />
                <line x1="50" y1="265" x2="50" y2="275" stroke="#666" strokeWidth="1" />
                <line x1="350" y1="265" x2="350" y2="275" stroke="#666" strokeWidth="1" />
                <text x="200" y="285" textAnchor="middle" className="fill-[var(--forest)]/60" fontSize="12" fontStyle="italic">WIDTH</text>

                {/* Depth */}
                <line x1="380" y1="80" x2="380" y2="92" stroke="#666" strokeWidth="1" strokeDasharray="4" />
                <text x="390" y="88" textAnchor="start" className="fill-[var(--forest)]/60" fontSize="12" fontStyle="italic" transform="rotate(90, 390, 88)">DEPTH</text>

                {/* Height */}
                <line x1="30" y1="80" x2="30" y2="250" stroke="#666" strokeWidth="1" strokeDasharray="4" />
                <line x1="25" y1="80" x2="35" y2="80" stroke="#666" strokeWidth="1" />
                <line x1="25" y1="250" x2="35" y2="250" stroke="#666" strokeWidth="1" />
                <text x="15" y="165" textAnchor="middle" className="fill-[var(--forest)]/60" fontSize="12" fontStyle="italic" transform="rotate(-90, 15, 165)">HEIGHT</text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
