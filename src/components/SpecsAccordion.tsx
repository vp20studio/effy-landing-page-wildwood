'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { specifications } from '@/lib/constants';

type SpecCategory = keyof typeof specifications;

export default function SpecsAccordion() {
  const [openSection, setOpenSection] = useState<SpecCategory | null>('dimensions');
  const specKeys = Object.keys(specifications) as SpecCategory[];

  const toggleSection = (key: SpecCategory) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <section className="bg-[#F5F5F0] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2F21]">
            Technical <span className="text-[#BA4B1A]">Specifications</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {specKeys.map((key, index) => {
            const spec = specifications[key];
            const isOpen = openSection === key;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#FDF5EF] transition-colors"
                >
                  <span className="font-semibold text-[#2C2F21] text-lg">
                    {spec.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#5C5F52]" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 border-t border-[#E5E5E0]">
                        <div className="pt-4 space-y-3">
                          {spec.items.map((item) => (
                            <div
                              key={item.label}
                              className="flex justify-between items-center py-2"
                            >
                              <span className="text-[#5C5F52]">{item.label}</span>
                              <span className="font-medium text-[#2C2F21]">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Download Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <button className="text-[#BA4B1A] hover:text-[#9E3F16] font-medium underline transition-colors">
            Download full spec sheet (PDF)
          </button>
        </motion.div>
      </div>
    </section>
  );
}
