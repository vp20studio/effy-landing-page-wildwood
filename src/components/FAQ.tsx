'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Why is the Wildwood more expensive than competitors?',
    answer: 'Unlike most standing desks that use particleboard, MDF, or laminate, the Wildwood features a solid hardwood desktop (Walnut, Acacia, or Pheasant Wood). This means better durability, a premium look that gets compliments, and a desk that actually feels like furniture—not office equipment. Combined with our dual-motor system and 20-year warranty, you\'re investing in a desk that will outlast 3-4 budget alternatives.',
  },
  {
    question: 'Is assembly really that easy? What if I need help?',
    answer: 'Yes—most customers finish assembly in 30-45 minutes. Everything you need is included: tools, hardware, and a step-by-step guide with QR codes linking to video tutorials. If you get stuck, our support team is available 7 days a week via chat, email, or phone. We also offer White Glove Installation ($149) where our technicians deliver, assemble, and set up your desk for you.',
  },
  {
    question: 'What if I don\'t like it after it arrives?',
    answer: 'No problem. We offer a 30-day satisfaction guarantee. If the Wildwood doesn\'t meet your expectations for any reason, contact us within 30 days for a full refund. We\'ll even cover the return shipping. Most returns are due to incorrect size orders—so measure your space carefully!',
  },
  {
    question: 'How does the 20-year warranty actually work?',
    answer: 'Our 20-year warranty covers the frame, motors, and all electronics against manufacturing defects. If anything fails during normal use, we\'ll replace the parts free of charge, including shipping. The solid wood desktop is covered for 5 years against warping or defects. No receipts to save—we track everything by your order number.',
  },
  {
    question: 'Will this fit in my small apartment or office?',
    answer: 'Probably! Our small size (47" × 29") fits most spaces while still accommodating dual monitors. We recommend at least 6" clearance on each side for comfortable movement. The desk adjusts from 23" to 50" in height, so it works whether you\'re 5\'2" or 6\'5". Tip: Use painter\'s tape to mark the dimensions on your floor before ordering.',
  },
  {
    question: 'How does the wireless charging work?',
    answer: 'A Qi-compatible wireless charging pad is built into the desktop surface (marked by a subtle icon). Just place your phone on the spot—no cables needed. Works with all iPhones 8+ and most Android phones. It\'s integrated flush with the surface, so it doesn\'t interrupt your workflow or create clutter.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Most orders ship within 2-3 business days and arrive within 5-7 business days anywhere in Canada or the continental US. Shipping is always free for standing desks. You\'ll receive tracking information via email once your order ships. Expedited shipping is available at checkout for an additional fee.',
  },
  {
    question: 'Do you offer financing or payment plans?',
    answer: 'Yes! We partner with Sezzle to offer interest-free payments. Split your purchase into 4 equal payments over 6 weeks with no credit check and no hidden fees. For example, the Medium desk at $1,150 becomes just $287.50 every 2 weeks. Select Sezzle at checkout to get started.',
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
            We\'ve Got{' '}
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
