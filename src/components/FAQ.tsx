'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How do I use the wireless charging feature on my solid wood table top?',
    answer: 'You can use this feature by placing your phone or tablet directly on top of the wireless charging area indicated by the two L shaped markings on the left-hand side of the desk. The device must be wireless charging compatible and centred on the marked area to activate charging. Sliding/dragging the device onto the indicated area will not activate the wireless charging. We recommend you remove any magnets, wallet cases, pop sockets and similar items before using the wireless charging on your solid wood table top. These items can prevent the wireless charging function on your solid wood table top.',
  },
  {
    question: 'Why is my phone warm after using the wireless charging feature on my solid wood table top?',
    answer: 'It is normal for your phone or tablet to get warm from wireless charging. The use of a case and the thickness of the case can contribute to the increased temperature of your device. Remove the case from your device to reduce the heat generated from wireless charging.',
  },
  {
    question: 'How do I care for my solid wood table top?',
    answer: 'We recommend keeping your table top dry and using coasters when drinking liquids on or near your desk. Repeated exposure to puddles can distort the surface of the solid wood top. To keep your solid wood table top looking its best, we recommend avoiding PVC, rubber, or vinyl desk pads/mats. These materials can sometimes react with natural wood finishes and leave marks or discolouration. For best results, choose felt, fabric, or leather desk pads that are safe for wood surfaces.',
  },
  {
    question: 'Is a showroom available to view the product?',
    answer: 'Yes, our showroom is available for viewing. Please email team@effydesk.ca or call us at 604-715-7577 to set up an appointment!',
  },
  {
    question: 'How long does it take to assemble a desk?',
    answer: 'Moderate assembly is required for the desk and we provide assembly instructions with each desk frame. We recommend assembling the desk with a friend. The assembly process usually takes around 30-45 minutes from start to finish.',
  },
  {
    question: 'Can I use my own desktop?',
    answer: 'You are able to use any desktop you prefer as long as the table is drill-able. Please keep the desktop size between 44" to 80" in width and 27-36" in depth for maximum stability. Keep overhang between 2-5 inches.',
  },
  {
    question: 'Where will my order ship from?',
    answer: 'We ship our products from Vancouver, BC. If you are in the greater lower mainland, we have a local driver and any orders outside of the lower mainland, we will deliver via CANPAR.',
  },
  {
    question: 'Is there a way to reset my desk?',
    answer: 'To reset, unplug and plug the desk for 15 minutes. Then press the Down button and hold for 10-15 seconds until the table stutters and beeps.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[var(--cream)] to-transparent rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[var(--gold)]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--forest)] rounded-full text-white text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4 text-[var(--gold)]" />
            Got Questions?
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--forest)] mb-6">
            We've Got{' '}
            <span className="relative">
              <span className="text-[var(--orange)]">Answers</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--orange)]/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-xl text-[var(--forest)]/60 max-w-2xl mx-auto">
            Real questions from real customers, answered honestly
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-br from-[var(--cream)] to-white shadow-lg border-2 border-[var(--gold)]/20'
                    : 'bg-[var(--cream)]/50 hover:bg-[var(--cream)] border-2 border-transparent'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className={`font-semibold pr-4 transition-colors text-sm md:text-base ${
                    openIndex === index ? 'text-[var(--forest)]' : 'text-[var(--forest)]/80'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-[var(--gold)] to-[var(--orange)]'
                        : 'bg-[var(--forest)]/10'
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className={`w-4 h-4 md:w-5 md:h-5 ${openIndex === index ? 'text-white' : 'text-[var(--forest)]'}`} />
                    ) : (
                      <Plus className={`w-4 h-4 md:w-5 md:h-5 ${openIndex === index ? 'text-white' : 'text-[var(--forest)]'}`} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <div className="pt-2 border-t border-[var(--forest)]/10">
                          <p className="text-[var(--forest)]/70 leading-relaxed pt-4 text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-[var(--cream)] rounded-2xl border border-[var(--cream-dark)]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--orange)] flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-[var(--forest)]/60 mb-1">Still have questions?</p>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a href="mailto:support@effydesk.com" className="text-[var(--orange)] font-semibold hover:underline">
                  support@effydesk.com
                </a>
                <span className="hidden sm:inline text-[var(--forest)]/30">|</span>
                <span className="text-[var(--forest)]/60 text-sm">
                  7 days a week support
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
