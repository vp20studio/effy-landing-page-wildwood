'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/constants';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            Frequently Asked <span className="text-[#BA4B1A]">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                {/* FAQ Header */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-start justify-between hover:bg-[#FDF5EF] transition-colors text-left"
                >
                  <span className={`font-medium text-[#2C2F21] pr-4 ${isOpen ? 'font-semibold' : ''}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown className="w-5 h-5 text-[#5C5F52]" />
                  </motion.div>
                </button>

                {/* FAQ Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 border-t border-[#E5E5E0]">
                        <p className="pt-4 text-[#5C5F52] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-[#5C5F52] mb-4">
            Still have questions?
          </p>
          <button className="px-6 py-3 border-2 border-[#BA4B1A] text-[#BA4B1A] hover:bg-[#BA4B1A] hover:text-white font-semibold rounded-md transition-colors">
            Contact Support →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
